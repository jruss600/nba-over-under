import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.DET, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Under],
])

const TIERNEY: IPicks = {
  name: 'Tierney',
  picks: picks,
  locks: [TeamNames.MIL, TeamNames.GS, TeamNames.PHI],
}

export { TIERNEY }
