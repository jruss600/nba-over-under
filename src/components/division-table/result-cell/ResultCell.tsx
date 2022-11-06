import { faArrowDown, faArrowUp, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { TeamModel } from '../../../models/TeamModel'
import { Points } from './Points'

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

interface IResultCell {
  team: TeamModel
}

const ResultCell = ({ team }: IResultCell) => {
  const pick = 'O'
  const line = 42.5
  const isLock = true
  return (
    <div>
      <IconsContainer>
        {pick === 'O' ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
        {isLock ? <FontAwesomeIcon icon={faLock} /> : null}
      </IconsContainer>
      <Points line={line} pick={pick} pace={team.pace()} isLock={isLock} />
    </div>
  )
}

export { ResultCell }
