// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { APIError } from '@/types/APIError';
import { APIResult } from '@/types/APIResult';
import { queryFilter } from '@/utils/filters';
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResult | APIError>
) {

  const { page, name, status, species, gender } = req.query

  const filter = queryFilter({ name, status, gender, species })



  fetch(`${process.env.api_baseUrl}character/?page=${page}${filter}`).then((result) => {
    if (result.status != 200) {
      res.status(400).json({
        status: result.status,
        message: "BAD REQUEST"
      })
    } else {
      result.json().then((data) => {
        res.status(400).json(data)
      })
    }

  }).catch((e) => {
    res.status(e.code).json(e.message)
  })
}
