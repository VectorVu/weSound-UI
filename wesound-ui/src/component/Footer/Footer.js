import React from 'react';
import './Footer.css'

export default function Footer(){

    return(
        <div className='Footer'>
            <div className='Footer-app'>
                <div className='FooterApp-name'>
                    Go mobile
                </div>
                <div className='Footer-containerApp'>
                    <a className='Footer-appleStore' href='https://apps.apple.com/us/app/soundcloud/id336353151'></a>
                    <a className='Footer-ggPlay' href='https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us&referrer=utm_source%3Dsoundcloud%26utm_medium%3Dweb%26utm_campaign%3Dweb_xsell_user_page'></a>
                </div>
            </div>

            <div className='Footer-text'>
                Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Consent Manager ⁃ Imprint ⁃ Creator Resources ⁃ Blog ⁃ Charts ⁃
            </div>
        </div>
    )
}
