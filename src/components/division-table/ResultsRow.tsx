import { TeamModel } from '../../models/TeamModel'
import { ResultCell } from './result-cell/ResultCell'
import { DataCellContainer } from './Table.styles'

interface IResultsRow {
  teams: TeamModel[]
  player: string
}

const ResultsRow = ({ teams, player }: IResultsRow) => {
  return (
    <tr>
      <DataCellContainer>{player}</DataCellContainer>
      {teams.map((team: TeamModel) => {
        return (
          <DataCellContainer key={`data-cell-${team.id}`}>
            <ResultCell team={team} />
          </DataCellContainer>
        )
      })}
    </tr>
  )
}

export { ResultsRow }
