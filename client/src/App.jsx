
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Services from './components/Services'
import Transactions from './components/Transactions'
import './App.css'

function App() {


  return (
    <>
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
    <Welcome/>
    </div>
    <Services/>
    <Transactions/>
    <Footer/>
  
  </div>
    </>
  )
}

export default App
