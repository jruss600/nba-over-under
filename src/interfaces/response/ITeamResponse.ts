import { DivisionNameType } from '../../types/DivisionNameType'

export interface ITeamResponse {
  id: number
  team: string
  logo: string
  wins: number
  gamesPlayed: number
  division: DivisionNameType | undefined
}
