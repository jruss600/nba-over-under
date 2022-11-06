import { DivisionNames } from '../../enums/DivisionNames'

export interface ITeamResponse {
  id: number
  team: string
  logo: string
  wins: number
  gamesPlayed: number
  division: DivisionNames | undefined
}
