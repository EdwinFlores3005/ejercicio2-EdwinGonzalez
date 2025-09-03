import Sidebar from '../components/sidebar.jsx'
import MainContent from '../components/MainContent.jsx'
import RecentPlayed from '../components/RecentPlayed.jsx'
import './pages.css'

export default function Home(){
     return(
        <div className='row'>

      <div className='col-2'>
        <Sidebar/>
      </div>

       <div className='col-7'>
        <MainContent/>
      </div>

       <div className='col-3'>
        <RecentPlayed/>
      </div>
      
    </div>
     )
    
}