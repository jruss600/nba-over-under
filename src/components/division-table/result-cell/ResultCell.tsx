import { faArrowDown, faArrowUp, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo } from 'react'
import styled from 'styled-components'
import { LINES } from '../../../data/LINES'
import { IPicks } from '../../../interfaces/IPicks'
import { TeamModel } from '../../../models/TeamModel'
import { Points } from './Points'

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const ResultsCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

interface IResultCell {
  team: TeamModel
  player: IPicks
}

const ResultCell = ({ team, player }: IResultCell) => {
  const pick = player.picks.get(team.team)
  const line = useMemo(() => LINES.get(team.team) ?? 0, [team])
  const isLock = player.locks.includes(team.team)
  return pick ? (
    <ResultsCellContainer>
      <IconsContainer>
        {pick === 'O' ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
        {isLock ? <FontAwesomeIcon icon={faLock} /> : null}
      </IconsContainer>
      <Points line={line} pick={pick} pace={team.pace()} isLock={isLock} />
    </ResultsCellContainer>
  ) : (
    <></>
  )
}

export { ResultCell }
