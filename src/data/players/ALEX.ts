import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Over],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.DET, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.UTAH, OverUnder.Over],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Over],
])

const ALEX: IPicks = {
  name: 'Alex',
  picks: picks,
  locks: [TeamNames.POR, TeamNames.CHA, TeamNames.CLE],
}

export { ALEX }
