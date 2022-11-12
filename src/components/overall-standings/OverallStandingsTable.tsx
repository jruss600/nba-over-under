import styled from 'styled-components'
import { useResultsData } from '../../context/useResultsData'
import { IResult } from '../../interfaces/IResult'

const TableContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
`

const OverallStandingsTable = () => {
  const { playerResults } = useResultsData()
  const sortedPlayerResults = playerResults.sort((a, b) =>
    a.totalPoints < b.totalPoints ? 1 : a.totalPoints > b.totalPoints ? -1 : 0,
  )

  return (
    <TableContainer>
      <table>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
        {sortedPlayerResults.map(({ name, totalPoints }: IResult, i: number) => {
          return (
            <tr key={`overall-results-row-${i}`}>
              <td>{i + 1}</td>
              <td>{name}</td>
              <td>{totalPoints}</td>
            </tr>
          )
        })}
      </table>
    </TableContainer>
  )
}

export { OverallStandingsTable }
