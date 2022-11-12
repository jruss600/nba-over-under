import { IPicks } from '../../interfaces/IPicks'
import { TeamModel } from '../../models/TeamModel'
import { ResultCell } from './result-cell/ResultCell'
import { DataCellContainer, Row } from './Table.styles'

interface IResultsRow {
  teams: TeamModel[]
  player: IPicks
  index: number
}

const ResultsRow = ({ teams, player, index }: IResultsRow) => {
  return (
    <Row index={index}>
      <DataCellContainer>{player.name}</DataCellContainer>
      {teams.map((team: TeamModel) => {
        return (
          <DataCellContainer key={`data-cell-${team.id}`}>
            <ResultCell team={team} player={player} />
          </DataCellContainer>
        )
      })}
    </Row>
  )
}

export { ResultsRow }
