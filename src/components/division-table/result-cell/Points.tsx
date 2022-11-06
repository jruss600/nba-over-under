import { useMemo } from 'react'
import styled from 'styled-components'

interface IIsPositive {
  isPositive: boolean
}
const PointsDisplay = styled.span<IIsPositive>`
  color: ${({ isPositive }) => (isPositive ? 'black' : 'red')};
`

interface IPoints {
  line: number
  pick: string
  pace: number
  isLock: boolean
}

const Points = ({ line, pick, pace, isLock }: IPoints) => {
  const currentPoints: number = useMemo(() => {
    return (pace - line) * (pick === 'O' ? 1 : -1) * (isLock ? 2 : 1)
  }, [pace, line, pick, isLock])
  return (
    <>
      Points: <PointsDisplay isPositive={currentPoints > 0}>{currentPoints}</PointsDisplay>
    </>
  )
}

export { Points }
