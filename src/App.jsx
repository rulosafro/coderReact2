import './App.css'
import { MyCartProvider } from './components/context/MyCartContext'
import { LoginProvider } from './components/context/LoginContext'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <LoginProvider>
      <MyCartProvider>
        <AppRouter/>
      </MyCartProvider>
    </LoginProvider>
  )
}

export default App