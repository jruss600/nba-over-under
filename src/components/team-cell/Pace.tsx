import { TeamModel } from '../../models/TeamModel'
import { P } from './TeamCell.styles'

interface IPace {
  team: TeamModel
}

const Pace = ({ team }: IPace) => {
  return <P>{`Pace: ${team.pace}`}</P>
}

export { Pace }
