import { divisions } from '../../data/divisions'
import { DivisionCollapsible } from './DivisionCollapsible'

const TeamStatsByDivision = () => {
  return (
    <>
      {divisions.map((division) => {
        return <DivisionCollapsible divisionName={division} key={`collapsible-${division}`} />
      })}
    </>
  )
}

export { TeamStatsByDivision }
