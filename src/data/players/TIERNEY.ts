import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.DET, OverUnder.Over],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.SA, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Under],
])

const TIERNEY: IPicks = {
  name: 'Tierney',
  picks: picks,
  locks: [TeamNames.SA, TeamNames.PHI, TeamNames.MEM, TeamNames.GS],
}

export { TIERNEY }
