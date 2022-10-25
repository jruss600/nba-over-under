import axios from 'axios'
import { useEffect, useState } from 'react'
import { TeamModel } from './models/TeamModel'

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [allTeamsData, setAllTeamsData] = useState<TeamModel[]>([])

  const url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'

  const loadTeamData = async () => {
    const loadedTeamData: TeamModel[] = []
    try {
      const {
        data: { team },
      } = await axios.get(`${url}ATL`)
      const teamWinData = new TeamModel({
        team: team.abbreviation,
        logo: team.logos[0].href,
        wins: team.record.items[0].stats[17].value,
        gamesPlayed: team.record.items[0].stats[7].value,
      })
      loadedTeamData.push(teamWinData)
      setAllTeamsData(loadedTeamData)
      setIsLoading(false)
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    loadTeamData()
  }, [])
  return isLoading ? (
    <>Loading...</>
  ) : (
    <div>
      {allTeamsData.map((teamData) => {
        return (
          <>
            <p>{teamData.team}</p>
            <img src={`${teamData.logo}`} height={'24px'} width={'24px'} />
            <p>{teamData.pace()}</p>
          </>
        )
      })}
    </div>
  )
}

export { App }
