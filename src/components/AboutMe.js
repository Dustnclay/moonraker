import React from 'react';
import '../styles/AboutMe.css'


const Moonraker = () => {
    return(
        <div class="moonrakerbody">
            <div>
                <h2>I'm</h2>
                <h1 class="name">Lauren</h1>
                <p>I’m a filmmaker based out of Colorado Springs, and I love my job. Since 2015,
                     working on a variety of projects, I have found that filming events is my passion. 
                     Why? Because there is nothing I love more than a celebration. 
                    Life is an adventure. It’s full of joy, love, reverence, excitement, and the unknown surrounded by the people we love.
                     How often do we wish we could go back and relive moments like these? Whether it be your wedding, a trip,
                      a conference or concert, my goal is to capture the greatest parts of your event for you to look back on after the party’s over.
                      So let’s get together create memories that last!</p>
            </div>
            <img class="lauren-img" src="lauren-img.png" alt="image of Lauren"/>        
        </div>
    )
}

export default Moonraker