import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Under],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Over],
])

const ALEX: IPicks = {
  name: 'Alex',
  picks: picks,
  locks: [TeamNames.LAC, TeamNames.MEM, TeamNames.NO, TeamNames.DAL],
}

export { ALEX }
