import { useCallback, useMemo, useState } from 'react'
import Collapsible from 'react-collapsible'
import styled from 'styled-components'
import { useTeamData } from '../../context/useTeamData'
import { DivisionNames } from '../../enums/DivisionNames'
import { TeamModel } from '../../models/TeamModel'
import { DivisionTable } from '../division-table/DivisionTable'
import { CollapsibleHeader } from './CollapsibleHeader'

const CollapsibleContainer = styled.div`
  border: 1px solid blue;
  border-radius: 5px;
  margin: 2rem 4rem;
  padding: 1rem;
`

interface IDivsionCollapsible {
  divisionName: DivisionNames
}

const DivisionCollapsible = ({ divisionName }: IDivsionCollapsible) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { teamsWinsData } = useTeamData()
  const divisionTeams: TeamModel[] = useMemo(
    () => teamsWinsData.filter((team: TeamModel) => team.division === divisionName),
    [],
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
