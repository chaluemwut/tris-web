
import loginLogo from '../public/static/images/login_logo.png'
import Image from "next/image"
import { useState, useEffect } from 'react'

const useDeviceSize = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return [width, height]

}

export default function Index() {
    const [width, height] = useDeviceSize();
    return (<div className='login' style={{ height: height }}>
        <div style={{ width: '100%', position: 'relative' }}>
            <div className='login-bg-gradient' style={{
                position: 'absolute',
                right: '100px',
                top: '100px',
                width: '400px',
                background: "linear-gradient(#FFFFFF, #ADC1CE);",
                opacity: '0.9',
                borderRadius: '10px'
            }}>
                <div style={{
                    paddingTop: '10px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    paddingBottom: '60px',
                }}>
                    <div style={{ marginTop: '30px' }}>WELCOME TO</div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td><Image src={loginLogo} alt='login' /></td>
                                    <td>
                                        <span style={{ color: '#003573', fontSize: '27px' }}>Key Performance <br/>
                                            Tracking Platform
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <label className="form-label" style={{ color: '#828282' }}>User ID</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your User ID" />
                    </div>
                    <div>
                        <label className="form-label" style={{ color: '#828282' }}>Password</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Password" />
                    </div>
                    <button className='btn' style={{
                        width: '100%',
                        marginTop: '30px',
                        backgroundColor: '#5A6ACE',
                        color: 'white',
                    }}>Sign In</button>
                </div>
            </div>
        </div>
        <div>
            <center><span style={{ color: 'white', position: 'absolute', bottom: '10px' }}>© 2021 All Rights Reserved</span></center>
        </div>
    </div>)
}