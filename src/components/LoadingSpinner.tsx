import { Watch } from 'react-loader-spinner'
import styled from 'styled-components'

const LoadingSpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top 8rem;
`

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <Watch
        height='80'
        width='80'
        radius='48'
        color='#4fa94d'
        ariaLabel='watch-loading'
        wrapperStyle={{}}
        visible={true}
      />
      <h2>Loading...</h2>
    </LoadingSpinnerContainer>
  )
}

export { LoadingSpinner }
