import { IPicks } from '../../interfaces/IPicks'
import { TeamModel } from '../../models/TeamModel'
import { ResultCell } from './result-cell/ResultCell'
import { DataCellContainer } from './Table.styles'

interface IResultsRow {
  teams: TeamModel[]
  player: IPicks
}

const ResultsRow = ({ teams, player }: IResultsRow) => {
  return (
    <tr>
      <DataCellContainer>{player.name}</DataCellContainer>
      {teams.map((team: TeamModel) => {
        return (
          <DataCellContainer key={`data-cell-${team.id}`}>
            <ResultCell team={team} player={player} />
          </DataCellContainer>
        )
      })}
    </tr>
  )
}

export { ResultsRow }
