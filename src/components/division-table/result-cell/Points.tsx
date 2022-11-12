import styled from 'styled-components'

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
  points: number
}

const Points = ({ points }: IPoints) => {
  return (
    <PointsContainer>
      Points:
      <PointsDisplay isPositive={points >= 0}>{` ${points}`}</PointsDisplay>
    </PointsContainer>
  )
}

export { Points }
