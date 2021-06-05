import React, { useRef, useState } from 'react';
import './home.css';
import por from '../images/por.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const ref = useRef();
    const [com, setcom] = useState('');
    const ref2 = useRef();

    const handleClick = event => {
        ref.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
    };
    const handleClick2 = event => {
        ref2.current.click();
    };
    const handleChange2 = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
    };

    console.log(com)
    return (
        <div className="bg">
            <div className="bg-grid">
                <div className="rect">
                    <div className="brand-row">
                        <div className="brand">
                            <div>
                                <div style={{ color: 'white' }} >&nbsp;&nbsp;OWNER</div> & TENENT
                            </div>
                        </div>
                        <div className="tag">
                            <div>
                                PROPERTY MANAGEMENT SYSTEM
                            </div>
                        </div>
                        <div className="list mrh">
                            <NavLink to={`/`} className="linksH" ><div className="list-item mx"><i className="fa fa-home" style={{ fontSize: '24px', paddingLeft: '20px' }}></i>&nbsp;&nbsp;<div style={{ display: 'inline-block' }}>Home</div></div></NavLink>
                            <NavLink to={`/`} className="linksH" ><div className="list-item mx"><i className="fa fa-envelope" style={{ fontSize: '21px', paddingLeft: '20px' }}></i>&nbsp;&nbsp;<div style={{ display: 'inline-block' }}>BGV</div></div></NavLink>
                            <NavLink to={`/`} className="linksH" ><div className="list-item mx"><i className="fa fa-envelope" style={{ fontSize: '21px', paddingLeft: '20px' }}></i>&nbsp;&nbsp;<div style={{ display: 'inline-block' }}>Moderator</div></div></NavLink>
                        </div>
                    </div>
                </div>
                <div className="rect">
                    <div className="main">
                        {/*header*/}
                        <div className="liner">
                            <div className="main-head">
                                <div className="fonts">Verify BGV</div>
                            </div>
                            <div className="main-head">
                                <div>Welcome Back!<div className="yash" style={{ display: 'inline-block' }}>Yashwanth</div></div>
                                <div className="box liner1 fr">
                                    <div className="liner">
                                        <div className="liner gap pd fr">
                                            <img className="pointer" src={por} width="50" height="50" style={{ borderRadius: '7px' }} alt='por' /><div className="pointer" style={{ display: 'inline-block' }}>Logout</div>
                                        </div>
                                    </div>
                                    <div className="liner gap rg1">
                                        <i className="fa fa-bell pointer"></i>
                                        <i className="fa fa-ellipsis-h pointer"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*header*/}
                        <div className="m"></div>
                        {/*body*/}

                        <div className="main-bod">
                            <div className="box2">
                                <div className="liner1">
                                    <div className="liner1 sb">
                                        <div className="liner fr">
                                            <img className="pointer shad mr" style={{ borderRadius: '7px' }} src={por} width="100" height="100" alt='por1' />
                                        </div>
                                        <div className="liner fr pd">
                                            <div className="list mar">
                                                <div className="list-items pdl">
                                                    <div className="yash">
                                                        Yashwanth Vepachadu / TNT345234
                                                </div>
                                                </div>
                                                <div className="list-items">
                                                    <div style={{ display: 'inline-block' }} className="font1">Mobile Number : </div><div className="yash" style={{ display: 'inline-block' }}>&nbsp;&nbsp;&nbsp;9831256430</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="liner fr pd">
                                        <div className="list mar au">
                                            <div className="list-items">
                                                <div style={{ display: 'inline-block' }} className="font1">Email : </div><div className="yash" style={{ display: 'inline-block' }}>&nbsp;&nbsp;&nbsp;yashwanth@gmail.com</div>
                                            </div>
                                            <div className="list-items">
                                                <div style={{ display: 'inline-block' }} className="font1">Status : </div><div className="yash" style={{ display: 'inline-block' }}>&nbsp;&nbsp;&nbsp;Await on BGV Team</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cen">
                                    <div className="box3">
                                        <div className="ma">
                                            <div className="liner mx pd">
                                                <div style={{ paddingLeft: '4.9rem' }} className="bgv"> BGV Document : </div>
                                            </div>
                                            <div className="m"></div>
                                            <div className="liner1 rg frx">
                                                <div onClick={handleClick} className="box4">
                                                    <input type="file"
                                                        ref={ref}
                                                        onChange={handleChange} />
                                                    <div className="down">
                                                        <div className="cen">
                                                            <i className="fa fa-envelope" style={{ fontSize: '71px' }}></i>
                                                        </div>
                                                        <div className="cen">
                                                            <div className="font1">Add BGV Document</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <textarea onChange={(e) => setcom(e.target.value)} placeholder="Comments ( optional )"></textarea>
                                            </div>
                                            <div className="m"></div>
                                            <div className="liner fr pd">
                                                <div style={{ paddingLeft: '4.9rem' }} className="bgv"> Tenent Documents : </div>
                                            </div>
                                            <div className="m"></div>
                                            <div className="liner1 fr">
                                                <div className="box5">
                                                    <div className="down1">
                                                        <div className="cen">
                                                            <div className="font3">1</div>
                                                        </div>
                                                        <div className="cen">
                                                            <div className="font1">Uploaded</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box5">
                                                    <div className="down1">
                                                        <div className="cen">
                                                            <div className="font3">2</div>
                                                        </div>
                                                        <div className="cen">
                                                            <div className="font1">Uploaded</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box5">
                                                    <div className="down1">
                                                        <div className="cen">
                                                            <div className="font3">3</div>
                                                        </div>
                                                        <div className="cen">
                                                            <div className="font1">Uploaded</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div onClick={handleClick2} className="box5">
                                                    <input type="file"
                                                        ref={ref2}
                                                        onChange={handleChange2} />
                                                    <div className="down">
                                                        <div className="cen">
                                                            <i className="fa fa-envelope" style={{ fontSize: '45px' }}></i>
                                                        </div>
                                                        <div className="cen">
                                                            <div className="font1">Add more</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="m"></div>
                                            <div className="end">
                                                <div className="cen gap">
                                                    <div className="but">APPROVED</div>
                                                    <div className="but2">REJECTED</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*body*/}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;