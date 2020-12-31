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
            <img  class="wedding-img" src="hugo-kerr-Ke96snCJ1m0-unsplash.jpg" alt="wedding photo"/>
        </div>

    )
}

export default Header