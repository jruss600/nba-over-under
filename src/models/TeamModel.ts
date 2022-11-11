import { DivisionNames } from '../enums/DivisionNames'
import { TeamNames } from '../enums/TeamNames'
import { ITeamResponse } from '../interfaces/response/ITeamResponse'

class TeamModel {
  id: number
  team: TeamNames
  logo: string
  wins: number
  gamesPlayed: number
  division: DivisionNames | undefined

  constructor(data: ITeamResponse) {
    this.id = data.id
    this.team = data.team
    this.logo = data.logo
    this.wins = data.wins
    this.gamesPlayed = data.gamesPlayed
    this.division = data.division
  }

  pace(): number {
    return Math.round(82 * (this.wins / this.gamesPlayed))
  }
}

export { TeamModel }
