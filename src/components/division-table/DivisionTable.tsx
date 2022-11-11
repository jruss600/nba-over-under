import { PICKS } from '../../data/PICKS'
import { IPicks } from '../../interfaces/IPicks'
import { TeamModel } from '../../models/TeamModel'
import { ResultsRow } from './ResultsRow'
import { Table } from './Table.styles'
import { TableHeader } from './TableHeader'

interface IDivisionTable {
  teams: TeamModel[]
}

const DivisionTable = ({ teams }: IDivisionTable) => {
  return (
    <Table>
      <TableHeader teams={teams} />
      {PICKS.map((player: IPicks) => {
        return <ResultsRow teams={teams} player={player} key={`results-row-${player.name}`} />
      })}
    </Table>
  )
}

export { DivisionTable }
