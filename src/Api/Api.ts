import { useState } from "react";
import axios from "axios";

export const useGetApi = (_url: string) =>  {

  const [apiResponse, setApiResponse] = useState()
  const getApi = async () => {
    try {
      const { data } = await axios.get(_url)
      setApiResponse(data)
    } catch (error: any) {
      setApiResponse(error)
    }
  }

  return [getApi, apiResponse, setApiResponse, ]
} 

export const usePostApi = (_url: string) =>  {
  
  const postApi = async (data: {}) => {
    try {
      const postedData = await axios.post(_url, data)
      return postedData
    } catch (error) {
      return error
    }
  }

  return [postApi]
} 
