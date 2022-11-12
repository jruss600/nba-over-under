import { TeamModel } from '../models/TeamModel'

export interface IAchiever {
  teams: TeamModel[]
  points: number
}
