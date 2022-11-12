import { useCallback, useMemo, useState } from 'react'
import Collapsible from 'react-collapsible'
import { useTeamData } from '../../context/useTeamData'
import { DivisionNames } from '../../enums/DivisionNames'
import { TeamModel } from '../../models/TeamModel'
import { DivisionTable } from '../division-table/DivisionTable'
import { CollapsibleContainer } from '../styled-components/CollapsibleContainer'
import { CollapsibleHeader } from './CollapsibleHeader'

interface IDivsionCollapsible {
  divisionName: DivisionNames
}

const DivisionCollapsible = ({ divisionName }: IDivsionCollapsible) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { teamsWinsData } = useTeamData()
  const divisionTeams: TeamModel[] = useMemo(
    () => teamsWinsData.filter((team: TeamModel) => team.division === divisionName),
    [teamsWinsData],
  )

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  return (
    <CollapsibleContainer>
      <Collapsible
        trigger={<CollapsibleHeader headerText={`${divisionName} Division`} isOpen={isOpen} />}
        onOpen={onOpen}
        onClose={onClose}
      >
        <DivisionTable teams={divisionTeams} />
      </Collapsible>
    </CollapsibleContainer>
  )
}

export { DivisionCollapsible }
