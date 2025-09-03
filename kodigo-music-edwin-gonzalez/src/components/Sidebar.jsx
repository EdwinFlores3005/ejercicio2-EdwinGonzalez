import './components.css'
import { Link } from 'react-router'

export default function Sidebar(){

    return(
        <div>
            <ul className="list-unstyled d-flex row g-2">
            <li className='d-flex justify-content-start align-items-center'>
                <img src="https://img.icons8.com/?size=100&id=73&format=png&color=FFFFFF" alt="Home" className="icon-img"/>
                <Link to={"/Home"}>
                <p>Home</p>
                </Link>
            </li>

            <li className='d-flex justify-content-start align-items-center'>
                <img src="https://img.icons8.com/?size=100&id=14079&format=png&color=FFFFFF" alt="Search" className="icon-img"/>
                <Link to={"/Search"}>
                <p>Search</p>
                </Link>
            </li>
            <li className='d-flex justify-content-start align-items-center'>
                <img src="https://img.icons8.com/?size=100&id=88004&format=png&color=FFFFFF" alt="Explore" className="icon-img"/>
                <Link to={"/Explore"}>
                <p>Explore</p>
                </Link>
            </li>
            </ul>
        </div>
        
    )
}

