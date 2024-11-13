import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.NY, OverUnder.Over],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.SA, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Under],
])

const AARON: IPicks = {
  name: 'Aaron',
  picks: picks,
  locks: [TeamNames.PHX, TeamNames.LAC, TeamNames.ORL, TeamNames.CLE],
}

export { AARON }
