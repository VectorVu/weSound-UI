import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './NavMusic.css'

export default function NavMusic(){
    const [currentTime, setCurrentTime]= React.useState(1)
    function handleChangeTime(e){
        console.log(e.target.value);
        setCurrentTime(e.target.value)
    }

    return(
        <Navbar className='NavMusic-container' expand="lg">
            <Container >
                <Row className='NavMusic'>
                        <Col lg={2} className='NavMusic-action'>
                           <div>
                            <button className='NavMusic-btn'>
                                    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTcgNmgydjEySDdWNnptMiA2bDggNlY2bC04IDZ6Ii8+PC9zdmc+Cg=='></img>
                                </button>
                                <button className='NavMusic-btn'>
                                    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00eiIvPjwvc3ZnPgo='></img>
                                </button>
                                <button className='NavMusic-btn'>
                                    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTcgMThsOC02LTgtNnYxMnptOC0xMnYxMmgyVjZoLTJ6Ii8+PC9zdmc+Cg=='></img>
                                </button>
                                <button>
                                    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTEzLjU4NiAxN2wtOC04SDNWN2gzLjQxNGw4IDhIMTd2MmgtMy40MTR6TTMgMTVoMi41ODZsMi4yMDctMi4yMDcgMS40MTQgMS40MTQtMi41MDEgMi41MDEtLjI5My4yOTJIM3YtMnptMTQtNmgtMi41ODZsLTIuMjA3IDIuMjA3LTEuNDE0LTEuNDE0TDEzLjU4NiA3SDE3djJ6bTQgN2wtNCAzdi02bDQgM3ptMC04bC00IDNWNWw0IDN6Ii8+PC9zdmc+Cg=='></img>
                            </button>
                            <button>
                                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iI2Y1MCIgZD0iTTEyIDhIOWE0IDQgMCAxIDAgMCA4aDZhNCA0IDAgMCAwIDIuMTA0LTcuNDAzbDEuNzctMS4xOC4wMi4wMThBNiA2IDAgMCAxIDE1IDE4SDlBNiA2IDAgMSAxIDkgNmgzVjRsNCAzLTQgM1Y4eiIvPjwvc3ZnPgo='></img>
                            </button>
                           </div>

                        </Col>
                        <Col lg={6} >
                           <div className='NavMusic-run'>
                            <span className='NavMusic-currentTime'>1:20</span>
                            <input onInput={handleChangeTime} type={'range'} value={currentTime} step={1} min={0} max={100}/>
                            <span className='NavMusic-totalTime'>3:20</span>
                           </div>
                        </Col>
                        <Col lg={4} className='NavMusic-infor'>

                        </Col>
                </Row>              
            </Container>
        </Navbar>

    )
}


