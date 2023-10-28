import { TeamModel } from '../../models/TeamModel'
import { TeamCell } from '../team-cell/TeamCell'
import { HeaderCellContainer } from './Table.styles'

interface ITableHeader {
  teams: TeamModel[]
}

const TableHeader = ({ teams }: ITableHeader) => {
  return (
    <thead>
      <tr>
        <HeaderCellContainer />
        {teams.map((team: TeamModel) => {
          return (
            <HeaderCellContainer key={`team-cell-${team.id}`}>
              <TeamCell team={team} />
            </HeaderCellContainer>
          )
        })}
      </tr>
    </thead>
  )
}

export { TableHeader }
