import { createContext } from 'react'
import { TeamModel } from '../models/TeamModel'

interface ITeamDataContext {
  isLoading: boolean
  teamsWinsData: TeamModel[]
}

const TeamDataContext = createContext<ITeamDataContext>({
  isLoading: true,
  teamsWinsData: [],
})

export { TeamDataContext }
