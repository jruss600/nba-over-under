import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Over],
  [TeamNames.DET, OverUnder.Over],
  [TeamNames.POR, OverUnder.Over],

  [TeamNames.WSH, OverUnder.Under],
])

const TIERNEY: IPicks = {
  name: 'Tierney',
  picks: picks,
  locks: [TeamNames.SAC, TeamNames.MIN, TeamNames.TOR, TeamNames.UTAH],
}

export { TIERNEY }
