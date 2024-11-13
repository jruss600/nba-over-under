import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.SA, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.UTAH, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Over],
])

const ALEX: IPicks = {
  name: 'Alex',
  picks: picks,
  locks: [TeamNames.PHX, TeamNames.MIA, TeamNames.MEM, TeamNames.BKN],
}

export { ALEX }
