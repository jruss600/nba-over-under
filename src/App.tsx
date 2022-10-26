import axios from 'axios'
import { useEffect, useState } from 'react'
import { TeamCell } from './components/team-cell/TeamCell'
import { TeamModel } from './models/TeamModel'

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [allTeamsData, setAllTeamsData] = useState<TeamModel[]>([])

  const baseUrl = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'

  const loadTeamData = async () => {
    const loadedTeamData: TeamModel[] = []
    try {
      const {
        data: { team },
      } = await axios.get(`${baseUrl}TOR`)
      const teamWinData = new TeamModel({
        id: team.id,
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
        return <TeamCell key={teamData.id} team={teamData} />
      })}
    </div>
  )
}

export { App }
