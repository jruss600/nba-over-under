import { useCallback, useState } from 'react'
import Collapsible from 'react-collapsible'
import styled from 'styled-components'
import { CollapsibleHeader } from '../division-collapsible/CollapsibleHeader'
import { CollapsibleContainer } from '../styled-components/CollapsibleContainer'
import { Achievers } from './Achievers'
import { OverallStandingsTable } from './OverallStandingsTable'

const OverallStandingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const OverallStandings = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])
  return (
    <CollapsibleContainer>
      <Collapsible
        trigger={<CollapsibleHeader headerText={'Provisional Standings'} isOpen={isOpen} />}
        onOpen={onOpen}
        onClose={onClose}
      >
        <OverallStandingsContainer>
          <OverallStandingsTable />
          <Achievers />
        </OverallStandingsContainer>
      </Collapsible>
    </CollapsibleContainer>
  )
}

export { OverallStandings }
