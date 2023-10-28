import { OverUnder } from '../enums/OverUnder'
import { TeamNames } from '../enums/TeamNames'

export interface IPicks {
  name: string
  picks: Map<TeamNames, OverUnder>
  locks: TeamNames[]
}
