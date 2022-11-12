import { createContext } from 'react'
import { IResult } from '../interfaces/IResult'

interface IResultsDataContext {
  playerResults: IResult[]
}

const ResultsDataContext = createContext<IResultsDataContext>({
  playerResults: [],
})

export { ResultsDataContext }
