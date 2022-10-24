import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const options = {
    method: 'GET',
    url: 'https://api-basketball.p.rapidapi.com/standings',
    params: { league: '12', season: '2022-2023' },
    headers: {
      'X-RapidAPI-Key': '9992ec2c89msheb0dc8a0d2e8fb8p1c8c15jsn6ef699e840d0',
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com',
    },
  }

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.response[0])
        setIsLoading(false)
      })
      .catch((error) => console.log('error: ', error))
  }, [])
  return isLoading ? <>Loading...</> : <>NBA Over Unders</>
}

export { App }
