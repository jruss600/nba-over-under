import { DivisionNames } from '../../enums/DivisionNames'
import { TeamNames } from '../../enums/TeamNames'

export interface ITeamResponse {
  id: number
  team: TeamNames
  logo: string
  wins: number
  gamesPlayed: number
  division: DivisionNames | undefined
  line: number
}
