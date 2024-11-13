import styled from 'styled-components'
import { useTeamData } from '../context/useTeamData'
import { TeamStatsByDivision } from './division-collapsible/TeamStatsByDivision'
import { LoadingSpinner } from './LoadingSpinner'
import { OverallStandings } from './overall-standings/OverallStandings'
import { Title } from './Title'

const Container = styled.div``

const ResultsPage = () => {
  const { isLoading } = useTeamData()

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Title>NBA Over/Unders 2024-25</Title>
          <OverallStandings />
          <TeamStatsByDivision />
        </>
      )}
    </Container>
  )
}

export { ResultsPage }
