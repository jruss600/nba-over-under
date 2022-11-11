import styled from 'styled-components'
import { LINES } from '../../data/LINES'
import { TeamModel } from '../../models/TeamModel'
import { Line } from './Line'
import { Logo } from './Logo'
import { Pace } from './Pace'
import { P } from './TeamCell.styles'

interface ITeamCell {
  team: TeamModel
}

const TeamCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TeamCell = ({ team }: ITeamCell) => {
  return (
    <TeamCellContainer>
      <P>{team.team}</P>
      <Logo logo={team.logo} />
      <Line line={LINES.get(team.team) ?? 0} />
      <Pace team={team} />
    </TeamCellContainer>
  )
}

export { TeamCell }
