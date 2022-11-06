import { TeamModel } from '../../models/TeamModel'
import { ResultsRow } from './ResultsRow'
import { TableHeader } from './TableHeader'

interface IDivisionTable {
  teams: TeamModel[]
}

const DivisionTable = ({ teams }: IDivisionTable) => {
  return (
    <table>
      <TableHeader teams={teams} />
      <ResultsRow teams={teams} player='John' />
    </table>
  )
}

export { DivisionTable }
