import { useContext } from 'react'
import { TeamDataContext } from './TeamDataContext'

const useTeamData = () => {
  const { isLoading, teamsWinsData } = useContext(TeamDataContext)
  return { isLoading, teamsWinsData }
}

export { useTeamData }
