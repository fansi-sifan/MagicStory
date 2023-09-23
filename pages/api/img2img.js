// Replicate API references: https://sdxl.replicate.dev/

import Replicate from 'replicate';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { value, image } = req.body;  // Extracting image from request body

  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const output = await replicate.run(
      "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
      {
        input: {
          prompt: value,
          image: image,  // Sending the image to the Replicate API
          image_dimensions: "512x512",
          num_inference_steps: 25,
          num_outputs: 1,
          guideance_scale: 8,
          refine: "expert_ensemble_refiner",
          scheduler: "K_EULER",
        },
      },
    );

    console.log(output);
    res.status(200).json(output);

   // Uncomment this if you want to return a static URL
   if (output && Array.isArray(output) && output.length > 0) {
    res.status(200).json({ imageUrl: output[0] }); // Assuming the first item in the output array is the image URL
  } else {
    res.status(500).json({ message: 'No image URL found in the response.' });
  }
    // res.status(200).json([
    //   'https://replicate.delivery/pbxt/neqGIe66cYuPOUPM0JqokMfqsX9CRYgvkycUxyqlCKUjwJchA/out-0.png'
    // ]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;
