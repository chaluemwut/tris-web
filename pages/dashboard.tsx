import { useEffect, useLayoutEffect, useState } from "react"
import loginLogo from '../public/static/images/login_logo.png'
import g1 from '../public/static/images/g1.png'
import g2 from '../public/static/images/g2.png'
import Image from "next/image"
import HeaderContent from "../components/HeaderContent"
import { FinishProjectChart, InprogressProjectChart, NewProjectDonutChart, SummaryProjectChart, TestDonut } from "../components/ProjectChart"
import { DonutChartJS } from "../components/chartjs/DonutChart"
import { LineChart } from "../components/chartjs/LineChart"
import { LineSeriesChart } from "../components/chartjs/LineSeriesChart"
import { StackWaterfallChart } from "../components/chartjs/StackWaterfallChart"
import { useRouter } from "next/router"

import { useCookies } from "react-cookie"

export default function Dashboard() {
    const [cookie, setCookie] = useCookies()
    const { push } = useRouter()

    useEffect(() => {
        initData()
    })

    const initData = async () => {
        const token = cookie.token
        if (token == null) {
            push('/')
        }
    }

    const [projectExpand, setProjectExpand] = useState(false)
    const [activeMenu, setActiveMenu] = useState('dashboard')

    const onClickProject = () => {
        setProjectExpand(!projectExpand)
    }

    return (<div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100" id="sidebar">
                    <ul className="nav flex-column flex-nowrap overflow-hidden">
                        <li>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><Image src={loginLogo} alt='login' /></td>
                                            <td>
                                                <span style={{ color: '#003573', fontSize: '12px' }}>Key Performance <br />
                                                    Tracking Platform
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>Main Menu</div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-truncate" href="#">
                                <i className="fa fa-home"></i>
                                <span onClick={() => setActiveMenu('dashboard')} className="d-none d-sm-inline">Dashboard</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed text-truncate"
                                href="#submenu1" data-toggle="collapse" data-target="#submenu1">
                                <i className="fa fa-table"></i>
                                <span onClick={() => { onClickProject(), setActiveMenu('project') }} className="d-none d-sm-inline">Project</span>
                            </a>
                            <div className={projectExpand ? 'expand' : 'collapse'} id="submenu1" aria-expanded="true">
                                <ul className="flex-column pl-2 nav">
                                    <li className="nav-item"><a className="nav-link py-0" href="#">
                                        <span>สร้างโปรเจกใหม่</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link py-0" href="#">
                                        <span>โครงการที่อนุมัติทั้งหมด</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  text-truncate collapsed py-1" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1"><span>Customers</span></a>
                                        <div className="collapse" id="submenu1sub1" aria-expanded="false">
                                            <ul className="flex-column nav pl-4">
                                                <li className="nav-item">
                                                    <a className="nav-link p-1 text-truncate" href="#">
                                                        <i className="fa fa-fw fa-clock-o"></i> Daily </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link p-1 text-truncate" href="#">
                                                        <i className="fa fa-fw fa-dashboard"></i> Dashboard </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link p-1 text-truncate" href="#">
                                                        <i className="fa fa-fw fa-bar-chart"></i> Charts </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link p-1 text-truncate" href="#">
                                                        <i className="fa fa-fw fa-compass"></i> Areas </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link text-truncate" href="#"><i className="fa fa-bar-chart"></i> <span className="d-none d-sm-inline">
                            KPI</span></a></li>
                        <li className="nav-item">
                            <a className="nav-link text-truncate" href="#"><i className="fa fa-download"></i> <span className="d-none d-sm-inline">Team</span>
                            </a></li>
                    </ul>
                </div>
                <div className="col nopadding" style={{ display: activeMenu == 'dashboard' ? 'block' : 'none' }}>
                    <HeaderContent />
                    <div style={{ textAlign: 'right', paddingRight: '40px', marginTop: '20px' }}>
                        <select style={{ color: 'white', backgroundColor: '#5A6ACE', borderRadius: '5px', height: '35px' }}>
                            <option>ดูทั้งหมด</option>
                            <option>โครงการที่อนุมัติทั้งหมด</option>
                            <option>แหล่งเงินงบประมาณ</option>
                            <option>หน่วยงาน</option>
                            <option>วัตถุประสงค์องค์กร</option>
                            <option>MOU</option>
                            <option>MOA</option>
                            <option>วัตถุประสงค์ขององค์กร</option>
                            <option>ยุทธศาสตร์ สทร.</option>
                            <option>แผนงานหลัก</option>
                            <option>สถานะของโครงการ</option>
                            <option>Meta-tag</option>
                        </select>
                    </div>
                    <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        <div className="col-6">
                            <div className="card" style={{ height: '100%' }}>
                                <div className="card-body">
                                    <div className="row" style={{ height: '100%' }}>
                                        <div className="col-8">
                                            <div className="row">
                                                <div className="col-6">
                                                    <span style={{ color: '#4F4F4F', fontSize: '14px' }}>
                                                        ภาพรวมการใช้งบประมาณ</span>
                                                </div>
                                                <div className="col-6">
                                                    <i className="bi bi-circle-fill" style={{ color: '#5A6ACE' }}></i>
                                                    <span style={{
                                                        color: '#4F4F4F', fontSize: '14px',
                                                        marginLeft: '2px',
                                                        marginRight: '2px',
                                                    }}>งบประมาณ</span>
                                                    <i className="bi bi-circle-fill" style={{
                                                        marginLeft: '2px',
                                                        marginRight: '2px',
                                                        color: '#F4694C'
                                                    }}></i>
                                                    <span style={{ color: '#4F4F4F', fontSize: '14px' }}>เบิกจ่าย</span>
                                                </div>
                                            </div>
                                            <StackWaterfallChart />
                                        </div>
                                        <div className="col-4" style={{
                                            textAlign: 'center',
                                            borderLeft: '1px solid #EBE9F1;',
                                        }}>
                                            <div>
                                                <span style={{ color: '#4F4F4F', marginRight: '5px' }}>Year:</span>
                                                <select style={{ borderColor: '#5A6ACE', borderRadius: '5px' }}>
                                                    <option>2021</option>
                                                    <option>2022</option>
                                                </select>
                                            </div>
                                            <div style={{ marginTop: '20px' }}>
                                                <span style={{ color: '#29305B', fontSize: '24px' }}>27,074</span>
                                            </div>
                                            <div>
                                                <span style={{ color: '#4F4F4F', fontWeight: 'bold' }}>Budget:
                                                    <span style={{ fontWeight: 'normal', marginLeft: '5px' }}>58,000</span>
                                                </span>
                                            </div>
                                            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                                                <Image src={g1.src} alt="g1" width={100} height={40} />
                                                <Image src={g2.src} alt="g2" width={100} height={40} />
                                            </div>
                                            <div>
                                                <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white' }}>ตรวจสอบแนวโน้ม</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div>
                                                        <span style={{ color: '#4F4F4F', fontSize: '16px' }}>โครงการใหม่</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: '#29305B', fontSize: '32px' }}>78</span>
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-caret-up-fill"
                                                            style={{ color: '#5A6ACE' }}></i>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: '#5A6ACE' }}>+0.5%</span>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <DonutChartJS />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div>
                                                <span style={{ color: '#4F4F4F' }}>โครงการแล้วเสร็จ</span>
                                            </div>
                                            <div className="row justify-content-center align-items-center">
                                                <div className="col-8"><LineSeriesChart /></div>
                                                <div className="col-4"><span>75</span></div>
                                            </div>
                                            <div>
                                                <span>
                                                    <span style={{ color: '#F4694C' }}>100</span>
                                                    <span style={{ color: '#BDBDBD' }}> left from target</span>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ marginTop: '10px' }}>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <span style={{ color: '#29305B', fontSize: '32px' }}>672</span>
                                                </div>
                                                <div className="col-6"><LineChart color="#40B2B7" /></div>
                                            </div>
                                            <div style={{ marginTop: '20px' }}>
                                                <span style={{ color: '#4F4F4F' }}>โครงการที่กำลังดำเนินงาน</span>
                                            </div>
                                            <div>
                                                <span>
                                                    <i className="bi bi-caret-up-fill"
                                                        style={{ color: '#5A6ACE' }}></i>
                                                    <span style={{ color: '#5A6ACE', marginLeft: '5px' }}>+5%</span>
                                                    <span style={{ color: '#BDBDBD', marginLeft: '5px' }}>than last month</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <span style={{ color: '#29305B', fontSize: '32px' }}>543</span>
                                                </div>
                                                <div className="col-6"><LineChart color="#5A6ACE" /></div>
                                            </div>
                                            <div style={{ marginTop: '20px' }}>
                                                <span style={{ color: '#4F4F4F' }}>โครงการที่กำลังดำเนินงาน</span>
                                            </div>
                                            <div>
                                                <span>
                                                    <i className="bi bi-caret-down-fill"
                                                        style={{ color: '#F4694C' }}></i>
                                                    <span style={{ color: '#F4694C', marginLeft: '5px' }}>+5%</span>
                                                    <span style={{ color: '#BDBDBD', marginLeft: '5px' }}>than last month</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col pt-2" style={{ display: activeMenu == 'project' ? 'block' : 'none' }}>
                    <HeaderContent />
                    Project
                </div>
            </div>
        </div>
    </div>)
}