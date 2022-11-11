import { DivisionNames } from '../../enums/DivisionNames'
import { DivisionCollapsible } from './DivisionCollapsible'

const TeamStatsByDivision = () => {
  return (
    <>
      {Object.values(DivisionNames).map((division) => {
        return <DivisionCollapsible divisionName={division} key={`collapsible-${division}`} />
      })}
    </>
  )
}

export { TeamStatsByDivision }
