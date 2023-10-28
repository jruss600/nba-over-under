import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Over],
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
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Under],
])

const JOHN: IPicks = {
  name: 'John',
  picks: picks,
  locks: [TeamNames.BKN, TeamNames.CHI, TeamNames.UTAH, TeamNames.ORL],
}

export { JOHN }
