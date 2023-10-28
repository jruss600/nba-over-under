import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Under],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.SA, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Over],
])

const JUSTIN_W: IPicks = {
  name: 'Justin W.',
  picks: picks,
  locks: [TeamNames.PHI, TeamNames.NO, TeamNames.IND, TeamNames.WSH],
}

export { JUSTIN_W }
