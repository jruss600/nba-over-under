import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.DEN, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Over],
  [TeamNames.NO, OverUnder.Over],
  [TeamNames.OKC, OverUnder.Under],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.UTAH, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.SA, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Over],
])

const JOHNNY: IPicks = {
  name: 'Johnny',
  picks: picks,
  locks: [TeamNames.BOS, TeamNames.GS, TeamNames.NY, TeamNames.DAL],
}

export { JOHNNY }
