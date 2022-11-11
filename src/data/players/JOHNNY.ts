import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.DET, OverUnder.Over],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Over],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Over],
])

const JOHNNY: IPicks = {
  name: 'Johnny',
  picks: picks,
  locks: [TeamNames.TOR, TeamNames.DEN, TeamNames.PHX],
}

export { JOHNNY }
