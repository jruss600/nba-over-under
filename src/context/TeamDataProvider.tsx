import axios from 'axios'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { LINES } from '../data/LINES'
import { DivisionNames } from '../enums/DivisionNames'
import { TeamNames } from '../enums/TeamNames'
import { TeamModel } from '../models/TeamModel'
import { TeamDataContext } from './TeamDataContext'

interface ITeamDataProvider {
  children: ReactNode
}

const TeamDataProvider = ({ children }: ITeamDataProvider) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [teamsWinsData, setTeamsWinsData] = useState<TeamModel[]>([])

  const baseUrl = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'

  const assignToDivision = useCallback((standingSummary: string): DivisionNames | undefined => {
    if (standingSummary.toLowerCase().includes('atlantic')) {
      return DivisionNames.Atlantic
    }
    if (standingSummary.toLowerCase().includes('central')) {
      return DivisionNames.Central
    }
    if (standingSummary.toLowerCase().includes('southeast')) {
      return DivisionNames.Southeast
    }
    if (standingSummary.toLowerCase().includes('northwest')) {
      return DivisionNames.Northwest
    }
    if (standingSummary.toLowerCase().includes('pacific')) {
      return DivisionNames.Pacific
    }
    if (standingSummary.toLowerCase().includes('southwest')) {
      return DivisionNames.Southwest
    }
    return undefined
  }, [])

  useEffect(() => {
    const loadTeamData = async () => {
      Promise.all(
        Object.values(TeamNames).map(async (team: string) => await axios.get(`${baseUrl}${team}`)),
      )
        .then((responses) => {
          const teamsData: TeamModel[] = responses.map(({ data: { team: teamData } }) => {
            return new TeamModel({
              id: teamData.id,
              team: teamData.abbreviation,
              logo: teamData.logos[0].href,
              wins: teamData.record.items[0].stats.find(
                (entry: { name: string }) => entry.name === 'wins',
              ).value,
              gamesPlayed: teamData.record.items[0].stats.find(
                (entry: { name: string }) => entry.name === 'gamesPlayed',
              ).value,
              division: assignToDivision(teamData.standingSummary),
              line: LINES.get(teamData.abbreviation as TeamNames) ?? -9999,
            })
          })
          setTeamsWinsData(teamsData)
          setIsLoading(false)
        })
        .catch((error) => alert(`Error: ${error}`))
    }
    if (isLoading) {
      loadTeamData()
    }
  }, [])

  return (
    <TeamDataContext.Provider value={{ isLoading, teamsWinsData }}>
      {children}
    </TeamDataContext.Provider>
  )
}

export { TeamDataProvider }
