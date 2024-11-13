import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Under],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.SA, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Under],
])

const MARK: IPicks = {
  name: 'Mark',
  picks: picks,
  locks: [TeamNames.SA, TeamNames.MEM, TeamNames.LAC, TeamNames.CHA],
}

export { MARK }
