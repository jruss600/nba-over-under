import { DivisionNames } from '../enums/DivisionNames'
import { OverUnder } from '../enums/OverUnder'
import { TeamNames } from '../enums/TeamNames'
import { ITeamResponse } from '../interfaces/response/ITeamResponse'

class TeamModel {
  id: number
  team: TeamNames
  logo: string
  wins: number
  gamesPlayed: number
  division: DivisionNames | undefined
  line: number

  constructor(data: ITeamResponse) {
    this.id = data.id
    this.team = data.team
    this.logo = data.logo
    this.wins = data.wins
    this.gamesPlayed = data.gamesPlayed
    this.division = data.division
    this.line = data.line
  }

  get pace(): number {
    return Math.round(82 * (this.wins / this.gamesPlayed))
  }

  points(pick: OverUnder, isLock: boolean): number {
    return (this.pace - this.line) * (pick === OverUnder.Over ? 1 : -1) * (isLock ? 2 : 1)
  }

  get overAchievementPoints(): number {
    return this.points(OverUnder.Over, false)
  }

  get underAchievementPoints(): number {
    return this.points(OverUnder.Under, false)
  }
}

export { TeamModel }
