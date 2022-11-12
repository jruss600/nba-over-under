import { OverUnder } from '../enums/OverUnder'
import { TeamNames } from '../enums/TeamNames'
import { TeamModel } from '../models/TeamModel'

const numberCorrectCalculator = (
  teamsWinData: TeamModel[],
  picks: Map<TeamNames, OverUnder>,
): number => {
  let numberCorrect = 0
  teamsWinData.forEach((team: TeamModel) => {
    const pick = picks.get(team.team)
    if (pick) {
      const isCorrect = team.points(pick, false) > 0
      numberCorrect += isCorrect ? 1 : 0
    } else {
      alert(`Could not find a pick for ${team.team}`)
      return 0
    }
  })
  return numberCorrect
}

export { numberCorrectCalculator }
