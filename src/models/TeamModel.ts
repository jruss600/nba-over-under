import { ITeam } from '../interfaces/response/ITeamResponse'

class TeamModel {
  team: string
  logo: string
  wins: number
  gamesPlayed: number
  constructor(data: ITeam) {
    this.team = data.team
    this.logo = data.logo
    this.wins = data.wins
    this.gamesPlayed = data.gamesPlayed
  }
  pace(): number {
    return Math.round(82 * (this.wins / this.gamesPlayed))
  }
}

export { TeamModel }
