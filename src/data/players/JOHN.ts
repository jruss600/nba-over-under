import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Over],
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
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.SA, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Over],
])

const JOHN: IPicks = {
  name: 'John',
  picks: picks,
  locks: [TeamNames.TOR, TeamNames.PHX, TeamNames.ORL, TeamNames.CLE],
}

export { JOHN }
