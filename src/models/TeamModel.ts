class TeamModel {
  teamName: string // possibly make an enum
  wins: number
  gamesPlayed: number
  constructor(teamName: string, wins: number, gamesPlayed: number) {
    this.teamName = teamName
    this.wins = wins
    this.gamesPlayed = gamesPlayed
  }
  pace(): number {
    return Math.round(82 * (this.wins / this.gamesPlayed))
  }
}

export { TeamModel }
