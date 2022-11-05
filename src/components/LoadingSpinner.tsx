import { Watch } from 'react-loader-spinner'

const LoadingSpinner = () => {
  return (
    <Watch
      height='80'
      width='80'
      radius='48'
      color='#4fa94d'
      ariaLabel='watch-loading'
      wrapperStyle={{}}
      visible={true}
    />
  )
}

export { LoadingSpinner }
