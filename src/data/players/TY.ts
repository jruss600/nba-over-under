import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Under],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.SA, OverUnder.Under],
])

const TY: IPicks = {
  name: 'Ty',
  picks: picks,
  locks: [TeamNames.TOR, TeamNames.UTAH, TeamNames.PHX],
}

export { TY }
