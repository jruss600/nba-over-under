import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Under],
])

const JEREMY: IPicks = {
  name: 'Jeremy',
  picks: picks,
  locks: [TeamNames.HOU, TeamNames.ORL, TeamNames.OKC, TeamNames.MIN],
}

export { JEREMY }
