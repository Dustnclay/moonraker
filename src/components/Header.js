import React from 'react';
import {useHistory} from 'react-router-dom'
import {Button, Nav} from 'reactstrap'
import '../styles/Header.css'

const Header = () => {

    const {push} = useHistory()

    const toHome = () => {
        push('/Examples')
    }

    const toAbout = () => {
        push('/About')
    }

    const toMoonraker = () => {
        push('/Moonraker')
    }

    const toContact = () => {
        push('/Contact')
    }

    return(
        <div class="header">
            <img class="img" src="Moonraker-horizontal.jpeg" alt="moonraker logo"/>               
            <Nav class="nav">
                <button class='button' onClick={toMoonraker}>
                    Home
                </button>
                <button class='button' onClick={toHome}>
                    Films
                </button>
                <button class='button' onClick={toContact}>
                    Pricing
                </button>
                <button class='button' onClick={toAbout}>
                    About me
                </button>                
            </Nav>
            <iframe
            width="100%" height="360"
            src="https://www.youtube.com/embed?v=AjPau5QYtYs?autoplay=1&mute=1&playlist=AjPau5QYtYs&loop=1">
            </iframe>
        </div>

    )
}

export default Header