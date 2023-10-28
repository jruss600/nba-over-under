import { PICKS } from '../../data/PICKS'
import { IPicks } from '../../interfaces/IPicks'
import { TeamModel } from '../../models/TeamModel'
import { ResultsRow } from './ResultsRow'
import { ScrollableContainer, Table } from './Table.styles'
import { TableHeader } from './TableHeader'

interface IDivisionTable {
  teams: TeamModel[]
}

const DivisionTable = ({ teams }: IDivisionTable) => {
  return (
    <ScrollableContainer>
      <Table>
        <TableHeader teams={teams} />
        <tbody>
          {PICKS.map((player: IPicks, index: number) => {
            return (
              <ResultsRow
                teams={teams}
                player={player}
                index={index}
                key={`results-row-${player.name}`}
              />
            )
          })}
        </tbody>
      </Table>
    </ScrollableContainer>
  )
}

export { DivisionTable }
