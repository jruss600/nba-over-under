import { useTeamData } from '../context/useTeamData'
import { TeamModel } from '../models/TeamModel'
import { LoadingSpinner } from './LoadingSpinner'
import { TeamCell } from './team-cell/TeamCell'

const ResultsPage = () => {
  const { isLoading, teamsWinsData } = useTeamData()

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {teamsWinsData.map((team: TeamModel) => {
        return <TeamCell key={team.id} team={team} />
      })}
    </>
  )
}

export { ResultsPage }
