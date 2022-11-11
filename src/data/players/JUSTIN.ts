import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.PHI, OverUnder.Over],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Over],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Over],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.NY, OverUnder.Over],
  [TeamNames.CHA, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.IND, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Under],
])

const JUSTIN: IPicks = {
  name: 'Justin',
  picks: picks,
  locks: [TeamNames.NY, TeamNames.DEN, TeamNames.LAC],
}

export { JUSTIN }
