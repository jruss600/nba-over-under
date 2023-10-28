import { useResultsData } from '../../context/useResultsData'
import { IResult } from '../../interfaces/IResult'
import { Cell, HeaderCell, TableContainer } from './OverallStandingsTable.styles'

const OverallStandingsTable = () => {
  const { playerResults } = useResultsData()
  const sortedPlayerResults = playerResults.sort((a, b) =>
    a.totalPoints < b.totalPoints ? 1 : a.totalPoints > b.totalPoints ? -1 : 0,
  )

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <HeaderCell>Place</HeaderCell>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Points</HeaderCell>
            <HeaderCell># Correct</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {sortedPlayerResults.map(({ name, totalPoints, numberCorrect }: IResult, i: number) => {
            return (
              <tr key={`overall-results-row-${i}`}>
                <Cell>{i + 1}</Cell>
                <Cell>{name}</Cell>
                <Cell>{totalPoints}</Cell>
                <Cell>{numberCorrect}</Cell>
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}

export { OverallStandingsTable }
