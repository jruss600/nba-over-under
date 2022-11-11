import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.SA, OverUnder.Over],
])

const THOMAS: IPicks = {
  name: 'Thomas',
  picks: picks,
  locks: [TeamNames.POR, TeamNames.NO, TeamNames.TOR],
}

export { THOMAS }
