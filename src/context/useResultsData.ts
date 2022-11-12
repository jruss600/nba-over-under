import { useContext } from 'react'
import { ResultsDataContext } from './ResultsDataContext'

const useResultsData = () => {
  const { playerResults } = useContext(ResultsDataContext)
  return { playerResults }
}

export { useResultsData }
