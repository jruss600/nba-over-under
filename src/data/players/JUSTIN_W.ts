import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Under],
  [TeamNames.DET, OverUnder.Over],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.SA, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Over],
])

const JUSTIN_W: IPicks = {
  name: 'Justin W.',
  picks: picks,
  locks: [TeamNames.CHI, TeamNames.HOU, TeamNames.NY, TeamNames.PHI],
}

export { JUSTIN_W }
