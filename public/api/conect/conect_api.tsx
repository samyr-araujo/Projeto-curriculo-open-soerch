import axios from "axios"
import { useState } from "react"

const app = axios.create({
  baseURL: "http://localhost:3333",
  withCredentials: true,
  headers: {
    Authorization: "ad7f6975583e707aa312b9e0b0d34d8848b0a320aa3597789639f1c2c2cccefc",
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
