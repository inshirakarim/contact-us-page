import './App.css'
import ContactForm from './components/ContactForm'
import ContactHeader from './components/ContactHeader'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <main className='main_container'>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
      </main>
    </div>
  )
}

export default App
