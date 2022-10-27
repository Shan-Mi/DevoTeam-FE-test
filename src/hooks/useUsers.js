import { useEffect, useState } from 'react'
const BASE_URL = 'https://randomuser.me/api/?results=50'

const useUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL)
        const json = await response.json()
        setLoading(false)
        setUsers(json.results)
      } catch (error) {
        setError(error)
        throw new Error('error', error)
      }
    }

    fetchData()
  }, [])

  return { users, loading, error }
}

export default useUsers
