import loginLogo from '../../public/static/images/login_logo.png'
import projectIcon from '../../public/static/images/project_left_icon.svg'
import dashboardIcon from '../../public/static/images/dashboard_left_icon.svg'
import kpiIcon from '../../public/static/images/vector_left_icon.svg'
import teamIcon from '../../public/static/images/team_left_icon.svg'
import Image from "next/image"
import { useState } from 'react'
import { useRouter } from 'next/router'

export enum MenuActiveType {
    NONE,
    DASHBOARD,
    PROJECT,
    KPI
}

export enum SubMenuActiveType {
    NONE,
    PROJECT_CREATE,
    PROJECT_LIST,
    KPIResultChain,
    KPIoffice,
    KPIstrategic
}

type MenuActive = {
    menuType: MenuActiveType,
    subMenuType: SubMenuActiveType
}

export default function SideBar(menuActive: MenuActive) {
    let [projectExpand, setProjectExpand] = useState(menuActive)
    const { push } = useRouter()

    const onClickProject = () => {
        if (projectExpand.menuType != MenuActiveType.PROJECT) {
            setProjectExpand(prevState => ({ ...prevState, menuType: MenuActiveType.PROJECT }))
        } else {
            setProjectExpand(prevState => ({ ...prevState, menuType: MenuActiveType.NONE }))
        }
    }

    const onClickKIP = () => {
        if (projectExpand.menuType != MenuActiveType.KPI) {
            setProjectExpand(prevState => ({ ...prevState, menuType: MenuActiveType.KPI }))
        } else {
            setProjectExpand(prevState => ({ ...prevState, menuType: MenuActiveType.NONE }))
        }
    }

    return (<div className="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100" id="sidebar">
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
                <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <span style={{ color: '#BDBDBD' }}>Main Menu</span>
                </div>
            </li>
            <li className="nav-item">
                {/* <div className="nav-link text-truncate" style={{ cursor: 'pointer' }}> */}
                <div className={projectExpand.menuType == MenuActiveType.DASHBOARD ? 'nav-link text-truncate menu-active' : 'nav-link text-truncate'} style={{ cursor: 'pointer' }}>
                    <i className="fa fa-home"></i>
                    <span onClick={() => {
                        if (projectExpand.subMenuType == SubMenuActiveType.NONE) {
                            setProjectExpand(prevState => ({ ...prevState, menuType: MenuActiveType.DASHBOARD }))
                        } else {
                            push('/home')
                        }
                    }} className="d-none d-sm-inline">
                        <span style={{ marginRight: '5px' }}>
                            <Image src={dashboardIcon.src} alt="dashboard icon" width={20} height={20} />
                        </span>
                        Dashboard
                    </span>
                </div>
            </li>
            <li className="nav-item">
                <div style={{ cursor: 'pointer' }}
                    className={projectExpand.menuType == MenuActiveType.PROJECT ? 'nav-link expand text-truncate menu-active' : 'nav-link collapsed text-truncate'}
                    // className="nav-link collapsed text-truncate"
                    data-toggle="collapse" data-target="#submenu1">
                    <i className="fa fa-table"></i>
                    <span onClick={() => {
                        onClickProject()
                    }} className="d-none d-sm-inline">
                        <span style={{ marginRight: '5px' }}><Image src={projectIcon.src} alt="project icon" width={20} height={20} /> </span>
                        Project
                    </span>
                </div>
                <div className={projectExpand.menuType == MenuActiveType.PROJECT ? 'expand' : 'collapse'}
                    id="submenu1"
                    aria-expanded="true">
                    <ul className="flex-column pl-2 nav">
                        <li className={projectExpand.subMenuType == SubMenuActiveType.PROJECT_CREATE ? 'nav-item menu-active' : 'nav-item'}>
                            <span className="nav-link py-0"
                                onClick={() => {
                                    push('/project/project-create')
                                }}
                                style={{ cursor: 'pointer' }}>สร้างโปรเจกใหม่</span>
                        </li>
                        <li className={projectExpand.subMenuType == SubMenuActiveType.PROJECT_LIST ? 'nav-item menu-active' : 'nav-item'}>
                            <span
                                className="nav-link"
                                onClick={() => {
                                    push('/project/project-list')
                                }}
                                style={{ cursor: 'pointer' }}>โครงการที่อนุมัติทั้งหมด</span>
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
            <li className="nav-item">
                <div style={{ cursor: 'pointer' }}
                    className={projectExpand.menuType == MenuActiveType.KPI ? 'nav-link expand text-truncate menu-active' : 'nav-link collapsed text-truncate'}
                    data-toggle="collapse" data-target="#submenu1">
                    <i className="fa fa-table"></i>
                    <span onClick={onClickKIP} className="d-none d-sm-inline">
                        <span style={{ marginRight: '5px' }}><Image src={kpiIcon.src} alt="project icon" width={20} height={20} /> </span>
                        KPI
                    </span>
                </div>
                <div className={projectExpand.menuType == MenuActiveType.KPI ? 'expand' : 'collapse'}
                    id="submenu1"
                    aria-expanded="true">
                    <ul className="flex-column pl-2 nav">
                        <li className={projectExpand.subMenuType == SubMenuActiveType.KPIstrategic ? 'nav-item menu-active' : 'nav-item'}>
                            <span className="nav-link py-0"
                                onClick={() => {
                                    push('/kpi/strategic')
                                }}
                                style={{ cursor: 'pointer' }}>ยุทธศาสตร์</span>
                        </li>
                        <li className={projectExpand.subMenuType == SubMenuActiveType.KPIoffice ? 'nav-item menu-active' : 'nav-item'}>
                            <span
                                className="nav-link"
                                onClick={() => {
                                    push('/kpi/office')
                                }}
                                style={{ cursor: 'pointer' }}>สำนักงาน ก.พ.ร.</span>
                        </li>
                        <li className={projectExpand.subMenuType == SubMenuActiveType.KPIResultChain ? 'nav-item menu-active' : 'nav-item'}>
                            <span
                                className="nav-link"
                                onClick={() => {
                                    push('/kpi/result-chain')
                                }}
                                style={{ cursor: 'pointer' }}>Result Chain (RC)</span>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link text-truncate" href="#">
                    <i className="fa fa-download"></i>
                    <span className="d-none d-sm-inline">
                        <span style={{ marginRight: '5px' }}>
                            <Image src={teamIcon.src} alt="project icon" width={20} height={20} />
                        </span>
                        Team
                    </span>
                </a>
            </li>
        </ul>
    </div>)
}