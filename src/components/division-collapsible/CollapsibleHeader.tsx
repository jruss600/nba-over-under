import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

interface ICollapsibleHeader {
  headerText: string
  isOpen: boolean
}

const HeaderContainer = styled.div`
  cursor: pointer;
`

const IconContainer = styled.span`
  margin-left: 1rem;
`

const CollapsibleHeader = ({ headerText, isOpen }: ICollapsibleHeader) => {
  return (
    <HeaderContainer>
      {headerText}
      <IconContainer>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
      </IconContainer>
    </HeaderContainer>
  )
}

export { CollapsibleHeader }
