import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.NY, OverUnder.Over],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.SA, OverUnder.Under],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Under],
])

const AARON: IPicks = {
  name: 'Aaron',
  picks: picks,
  locks: [TeamNames.CHI, TeamNames.IND, TeamNames.ATL, TeamNames.LAL],
}

export { AARON }
