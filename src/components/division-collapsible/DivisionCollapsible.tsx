import { useMemo } from 'react'
import Collapsible from 'react-collapsible'
import { useTeamData } from '../../context/useTeamData'
import { TeamModel } from '../../models/TeamModel'
import { DivisionNameType } from '../../types/DivisionNameType'
import { TeamCell } from '../team-cell/TeamCell'

interface IDivsionCollapsible {
  divisionName: DivisionNameType
}

const DivisionCollapsible = ({ divisionName }: IDivsionCollapsible) => {
  const { teamsWinsData } = useTeamData()
  const divisionTeams: TeamModel[] = useMemo(
    () => teamsWinsData.filter((team: TeamModel) => team.division === divisionName),
    [],
  )
  return (
    <Collapsible trigger={divisionName}>
      {divisionTeams.map((team: TeamModel) => {
        return <TeamCell team={team} key={`team-cell-${team.id}`} />
      })}
    </Collapsible>
  )
}

export { DivisionCollapsible }
