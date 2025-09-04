import Sidebar from '../components/sidebar.jsx'
import MainContent from '../components/MainContent.jsx'
import RecentPlayed from '../components/RecentPlayed.jsx'
import './pages.css'
import { useState, useEffect } from 'react'


export default function Home(){
  const [recent, setRecent] = useState([])
  const [songs, setSongs] = useState([]) 

 const addToRecent = (song) => {
    setRecent((prev) => [song, ...prev])
  }


     return(
        <div className='row'>

      <div className='col-2'>
        <Sidebar/>
      </div>

       <div className='col-7'>
        <MainContent songs={songs} setSongs={setSongs} addToRecent={addToRecent}/>
      </div>

       <div className='col-3'>
        <RecentPlayed recent={recent}/>
      </div>
      
    </div>
     )
    
}