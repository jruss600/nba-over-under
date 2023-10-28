import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Under],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Under],
])

const MARK: IPicks = {
  name: 'Mark',
  picks: picks,
  locks: [TeamNames.BOS, TeamNames.PHI, TeamNames.OKC, TeamNames.IND],
}

export { MARK }
