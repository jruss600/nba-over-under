import { useTeamData } from '../context/useTeamData'
import { TeamStatsByDivision } from './division-collapsible/TeamStatsByDivision'
import { LoadingSpinner } from './LoadingSpinner'
import { OverallStandings } from './OverallStandings'

const ResultsPage = () => {
  const { isLoading } = useTeamData()

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <OverallStandings />
      <TeamStatsByDivision />
    </>
  )
}

export { ResultsPage }
