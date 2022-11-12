import { OverUnder } from '../enums/OverUnder'
import { TeamNames } from '../enums/TeamNames'
import { TeamModel } from '../models/TeamModel'

const totalPointsCalculator = (
  teamsWinsData: TeamModel[],
  picks: Map<TeamNames, OverUnder>,
  locks: TeamNames[],
): number => {
  let totalPoints = 0
  teamsWinsData.forEach((team: TeamModel) => {
    const pick = picks.get(team.team)
    if (pick) {
      totalPoints += team.points(pick, locks.includes(team.team))
    } else {
      alert(`Could not find a pick for ${team.team}`)
      return 0
    }
  })
  return totalPoints
}

export { totalPointsCalculator }
