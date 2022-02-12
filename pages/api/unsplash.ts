// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mockedData from '../../mock/data.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  
  res.status(200).json(mockedData);
}
