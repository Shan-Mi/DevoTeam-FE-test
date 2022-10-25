import { useState, useEffect } from 'react'

const BASE_URL = 'https://randomuser.me/api/?results=50'

const useLists = () => {
  const [results, setResults] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = BASE_URL

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setLoading(false)
        setResults(json?.results)
      } catch (error) {
        setError(error)
        throw new Error('error', error)
      }
    }

    fetchData()
  }, [])

  return { results, error, loading }
}

export default useLists
