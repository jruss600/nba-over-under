import styled from 'styled-components'
import { useTeamData } from '../context/useTeamData'
import { TeamStatsByDivision } from './division-collapsible/TeamStatsByDivision'
import { LoadingSpinner } from './LoadingSpinner'
import { OverallStandings } from './OverallStandings'

const Container = styled.div``

const ResultsPage = () => {
  const { isLoading } = useTeamData()

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <OverallStandings />
          <TeamStatsByDivision />
        </>
      )}
    </Container>
  )
}

export { ResultsPage }
