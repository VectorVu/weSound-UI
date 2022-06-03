import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


export default function NavMusic(){

    return(
        <Navbar expand="lg">
            <Container>
                <div className='NavMusic-container'>
                    <div className='NavMusic'>
                        <div className='NavMusic-action'>
                            <button className='NavMusic-btn'>
                                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTcgNmgydjEySDdWNnptMiA2bDggNlY2bC04IDZ6Ii8+PC9zdmc+Cg=='></img>
                            </button>
                            <button className='NavMusic-btn'>
                                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00eiIvPjwvc3ZnPgo='></img>
                            </button>
                            <button className='NavMusic-btn'>
                                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTcgMThsOC02LTgtNnYxMnptOC0xMnYxMmgyVjZoLTJ6Ii8+PC9zdmc+Cg=='></img>
                            </button>
                        </div>
                        <div className='NavMusic-run'>

                        </div>
                        <div className='NavMusic-infor'>

                        </div>
                    </div>
                </div>              
            </Container>
        </Navbar>

    )
}


