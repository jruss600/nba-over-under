import { ResultsPage } from './components/ResultsPage'
import { ResultsDataProvider } from './context/ResultsDataProvider'
import { TeamDataProvider } from './context/TeamDataProvider'

const App = () => {
  return (
    <TeamDataProvider>
      <ResultsDataProvider>
        <ResultsPage />
      </ResultsDataProvider>
    </TeamDataProvider>
  )
}

export { App }
