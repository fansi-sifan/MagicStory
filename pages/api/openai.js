import OpenAI from "openai";

const openai = new OpenAI();

const handler = async (req, res) => {
    
    const body = JSON.parse(req.body);
    const prompt = body.prompt;
    console.log(prompt)
  
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a bedtime story teller."},
          { role: "user", content: `${prompt}` }],
      });
  
      console.log(completion)
      res.status(200).json(completion)
      //res.status(200).json([
       //   'https://replicate.delivery/pbxt/neqGIe66cYuPOUPM0JqokMfqsX9CRYgvkycUxyqlCKUjwJchA/out-0.png'
      //  ]
      //);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', error });
    }
};

export default handler;
