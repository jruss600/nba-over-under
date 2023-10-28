import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.NY, OverUnder.Over],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.OKC, OverUnder.Under],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.SA, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Over],
])

const PETE: IPicks = {
  name: 'Pete',
  picks: picks,
  locks: [TeamNames.HOU, TeamNames.BKN, TeamNames.GS, TeamNames.LAL],
}

export { PETE }
