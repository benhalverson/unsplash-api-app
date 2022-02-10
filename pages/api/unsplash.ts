// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
 
  },
});
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  
  const response = await axios.get(`/search/photos`, {
    params: {
      query: "funny dogs",
    },
  });

  res.status(200).json(response.data);
}
