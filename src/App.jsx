import './App.css'
import FloatingWhatsAppButton from './components/FloatingButton'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EventPage from './pages/Home';

function App() {

  return (
    <>
        <EventPage />
        <FloatingWhatsAppButton />
    </>
  )
}

export default App
