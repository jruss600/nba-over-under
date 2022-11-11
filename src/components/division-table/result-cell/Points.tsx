import { useMemo } from 'react'
import styled from 'styled-components'
import { OverUnder } from '../../../enums/OverUnder'
import { pointsCalculator } from '../../../helpers/pointsCalculator'

interface IIsPositive {
  isPositive: boolean
}
const PointsDisplay = styled.span<IIsPositive>`
  color: ${({ isPositive }) => (isPositive ? 'black' : 'red')};
`

const PointsContainer = styled.div`
  display: flex;
  justify-content: center;
`

interface IPoints {
  line: number
  pick: OverUnder
  pace: number
  isLock: boolean
}

const Points = ({ line, pick, pace, isLock }: IPoints) => {
  const currentPoints: number = useMemo(() => {
    return pointsCalculator(pace, line, pick, isLock)
  }, [pace, line, pick, isLock])
  return (
    <PointsContainer>
      Points:
      <PointsDisplay isPositive={currentPoints >= 0}>{` ${currentPoints}`}</PointsDisplay>
    </PointsContainer>
  )
}

export { Points }
