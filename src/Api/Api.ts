import { useState } from "react";
import axios from "axios";

export const useGetApi = (_url: string,  config: {} = {}): (React.Dispatch<React.SetStateAction<any>> | any)[] => {

  const [apiResponse, setApiResponse] = useState()
  const getApi = async () => {
    try {
      const { data } = await axios.get(_url, config)
      setApiResponse(data)
    } catch (error: any) {
      setApiResponse(error)
    }
  }

  return [getApi, apiResponse, setApiResponse, ]
} 

export const usePostApi = (_url: string) =>  {
  
  const postApi = async (data: {}, header: {} = {}): Promise<any> => {
    try {
      const postedData = await axios.post(_url, data, header)
      return postedData
    } catch (error: any) {
      return error
    }
  }

  return [postApi]
} 

export const usePutApi = (_url: string) =>  {
  
  const putApi = async (data: {}, header: {} = {}): Promise<any> => {
    try {
      const postedData = await axios.put(_url, data, header)
      return postedData
    } catch (error: any) {
      return error
    }
  }

  return [putApi]
} 