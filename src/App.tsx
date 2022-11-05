import { ResultsPage } from './components/ResultsPage'
import { TeamDataProvider } from './context/TeamDataProvider'

const App = () => {
  return (
    <TeamDataProvider>
      <ResultsPage />
    </TeamDataProvider>
  )
}

export { App }
