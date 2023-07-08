// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require("axios");

export default async function handler(req, res) {
  const { data } = req.body;
  const url = data.publicUrl;
  console.log(url + "  ///////////////////////////////////");

  // const { response } = await axios.post(
  //   "https://detect.roboflow.com/acne_detection/1",

  //   {
  //     params: {
  //       api_key: "G0DIx8ioXilhNZtj1Q4T",
  //       image: url,
  //       format: "image",
  //     },
  //   }
  // );
  // console.log(re);

  axios({
    method: "POST",
    url: "https://detect.roboflow.com/acne_detection/1",
    params: {
      api_key: "G0DIx8ioXilhNZtj1Q4T",
      image: url,
      format: "image",
    },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
