import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>{
    return (
    <div className='navbar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/' >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname='active'className='about-link' to='/about' >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname='active' className='contact-link' to='/contact' >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/myusernameisnotinuse/'>
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/MatiasSeb'>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/matias-bustos-lagos-43730022b/'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://discordapp.com/users/212356301320224769'>
                    <FontAwesomeIcon icon={faDiscord}/>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar