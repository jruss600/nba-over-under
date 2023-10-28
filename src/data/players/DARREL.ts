import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Over],
  [TeamNames.MIL, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Over],
  [TeamNames.PHX, OverUnder.Over],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.GS, OverUnder.Over],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.NY, OverUnder.Over],
  [TeamNames.MIA, OverUnder.Over],
  [TeamNames.SAC, OverUnder.Over],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Over],
  [TeamNames.DAL, OverUnder.Over],
  [TeamNames.ATL, OverUnder.Over],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.BKN, OverUnder.Over],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Over],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Over],
  [TeamNames.HOU, OverUnder.Over],
  [TeamNames.SA, OverUnder.Over],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Over],
  [TeamNames.WSH, OverUnder.Under],
])

const DARREL: IPicks = {
  name: 'Darrel',
  picks: picks,
  locks: [TeamNames.SA, TeamNames.MEM, TeamNames.LAL, TeamNames.GS],
}

export { DARREL }
