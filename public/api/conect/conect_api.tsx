import axios from "axios"
import { useState } from "react"

const app = axios.create({
  baseURL:  process.env.API_URL,
  withCredentials: true,
  headers: {
    Authorization: process.env.ACESS_KEY, //token static acess...
  },
})

export function useAxiosPost() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const post = async (path: string, data: any): Promise<boolean> => {
    try {
      setLoading(true)
      setError(null)

      await app.post(path, data)
      return true
    } catch (err: any) {
      setError(err?.response?.data?.error ?? "Erro inesperado")
      return false
    } finally {
      setLoading(false)
    }
  }

  return { post, loading, error }
}
