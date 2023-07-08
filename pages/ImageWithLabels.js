import { useRef, useEffect, useState } from "react";

function drawRect(ctx, x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.strokeStyle = "#02a16c";
  ctx.lineWidth = 2;
  ctx.stroke();
}
function drawText(ctx, x, y, text, index) {
  ctx.font = "14px Arial";
  ctx.fillStyle = "#000000";
  index = "N" + index + ": ";
  ctx.fillText(index, x, y);
}

export default function ImageWithLabels({
  src,
  imageWidth,
  imageHeight,
  labels_arr,

  //   labelX,
  //   labelY,
  //   labelWidth,
  //   labelHeight,
}) {
  const canvasRef = useRef(null);
  const [widthLabel, setWidth] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.onload = () => {
      canvas.width = imageWidth;
      canvas.height = imageHeight;
      const size = imageWidth;

      console.log(size / 100);
      ctx.drawImage(image, 0, 0);

      // draw labels
      let index = 1;
      for (const item_arr of labels_arr) {
        let labelX = item_arr.x - item_arr.width / 2;
        let labelY = item_arr.y - item_arr.height / 2;
        let labelWidth = item_arr.width;
        let labelHeight = item_arr.height;
        setWidth(item_arr.width);

        drawRect(ctx, labelX, labelY, labelWidth, labelHeight);
        drawText(
          ctx,
          labelX,
          labelY - 5,
          item_arr.confidence.toFixed(2),
          index
        );
        index++;
      }
    };
    image.src = src;
  }, [src, imageWidth, imageHeight, widthLabel]);

  return <canvas ref={canvasRef} />;
}
