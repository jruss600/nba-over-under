import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Over],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.NY, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Under],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Under],
])

const AARON: IPicks = {
  name: 'Aaron',
  picks: picks,
  locks: [TeamNames.SAC, TeamNames.CHA, TeamNames.NO],
}

export { AARON }
