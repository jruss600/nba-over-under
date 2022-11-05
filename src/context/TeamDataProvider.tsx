import axios from 'axios'
import { ReactNode, useEffect, useState } from 'react'
import { teams } from '../data/teamAbbreviations'
import { TeamModel } from '../models/TeamModel'
import { TeamDataContext } from './TeamDataContext'

interface ITeamDataProvider {
  children: ReactNode
}

const TeamDataProvider = ({ children }: ITeamDataProvider) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [teamsWinsData, setTeamsWinsData] = useState<TeamModel[]>([])

  const baseUrl = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'

  useEffect(() => {
    const loadTeamData = async () => {
      Promise.all(teams.map(async (team: string) => await axios.get(`${baseUrl}${team}`)))
        .then((responses) => {
          const teamsData: TeamModel[] = responses.map(({ data: { team: teamData } }) => {
            return new TeamModel({
              id: teamData.id,
              team: teamData.abbreviation,
              logo: teamData.logos[0].href,
              wins: teamData.record.items[0].stats[17].value,
              gamesPlayed: teamData.record.items[0].stats[7].value,
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
