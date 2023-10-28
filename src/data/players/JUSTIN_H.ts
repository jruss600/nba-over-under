import { OverUnder } from '../../enums/OverUnder'
import { TeamNames } from '../../enums/TeamNames'
import { IPicks } from '../../interfaces/IPicks'

const picks = new Map<TeamNames, OverUnder>([
  [TeamNames.BOS, OverUnder.Under],
  [TeamNames.MIL, OverUnder.Under],
  [TeamNames.DEN, OverUnder.Under],
  [TeamNames.PHX, OverUnder.Under],
  [TeamNames.CLE, OverUnder.Under],
  [TeamNames.PHI, OverUnder.Under],
  [TeamNames.GS, OverUnder.Under],
  [TeamNames.LAL, OverUnder.Under],
  [TeamNames.LAC, OverUnder.Under],
  [TeamNames.MEM, OverUnder.Under],
  [TeamNames.NY, OverUnder.Under],
  [TeamNames.MIA, OverUnder.Under],
  [TeamNames.SAC, OverUnder.Under],
  [TeamNames.MIN, OverUnder.Under],
  [TeamNames.NO, OverUnder.Under],
  [TeamNames.OKC, OverUnder.Under],
  [TeamNames.DAL, OverUnder.Under],
  [TeamNames.ATL, OverUnder.Under],
  [TeamNames.IND, OverUnder.Under],
  [TeamNames.BKN, OverUnder.Under],
  [TeamNames.CHI, OverUnder.Under],
  [TeamNames.ORL, OverUnder.Under],
  [TeamNames.TOR, OverUnder.Under],
  [TeamNames.UTAH, OverUnder.Under],
  [TeamNames.CHA, OverUnder.Under],
  [TeamNames.HOU, OverUnder.Under],
  [TeamNames.SA, OverUnder.Under],
  [TeamNames.DET, OverUnder.Under],
  [TeamNames.POR, OverUnder.Under],
  [TeamNames.WSH, OverUnder.Under],
])

const JUSTIN_H: IPicks = {
  name: 'Justin H.',
  picks: picks,
  locks: [TeamNames.BOS, TeamNames.DAL, TeamNames.BKN, TeamNames.PHX],
}

export { JUSTIN_H }
