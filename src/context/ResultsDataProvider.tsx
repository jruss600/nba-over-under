import { ReactNode, useEffect, useState } from 'react'
import { PICKS } from '../data/PICKS'
import { numberCorrectCalculator } from '../helpers/numberCorrectCalculator'
import { totalPointsCalculator } from '../helpers/totalPointsCalculator'
import { IPicks } from '../interfaces/IPicks'
import { IResult } from '../interfaces/IResult'
import { ResultsDataContext } from './ResultsDataContext'
import { useTeamData } from './useTeamData'

interface IResultsDataProvider {
  children: ReactNode
}

const ResultsDataProvider = ({ children }: IResultsDataProvider) => {
  const [playerResults, setPlayerResults] = useState<IResult[]>([])
  const { teamsWinsData, isLoading } = useTeamData()

  useEffect(() => {
    if (!isLoading) {
      const newPlayerResults: IResult[] = []
      PICKS.map(({ name, picks, locks }: IPicks) => {
        newPlayerResults.push({
          name,
          totalPoints: totalPointsCalculator(teamsWinsData, picks, locks),
          numberCorrect: numberCorrectCalculator(teamsWinsData, picks),
        })
      })
      setPlayerResults(newPlayerResults)
    }
  }, [teamsWinsData, isLoading])

  return (
    <ResultsDataContext.Provider value={{ playerResults }}>{children}</ResultsDataContext.Provider>
  )
}

export { ResultsDataProvider }
