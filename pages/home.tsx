import { useEffect, useLayoutEffect, useState } from "react"
// import loginLogo from '../public/static/images/login_logo.png'
// import projectIcon from '../public/static/images/project_left_icon.svg'
// import dashboardIcon from '../public/static/images/dashboard_left_icon.svg'
// import kpiIcon from '../public/static/images/vector_left_icon.svg'
// import teamIcon from '../public/static/images/team_left_icon.svg'
// import Image from "next/image"
// import HeaderContent from "../components/HeaderContent"
import { useRouter } from "next/router"

import { useCookies } from "react-cookie"
import Dashboard from "../components/screens/dashboard/Dashboard"
import ProjectListAllComponent from "../components/screens/project/ProjectListAllComponent"
import ProjectCreateComponent from "../components/screens/project/ProjectCreateComponent"
import SideBar, { SubMenuActiveType } from "../components/sidebar/SideBar"
import { MenuActiveType } from '../components/sidebar/SideBar'

export default function Home() {
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
                <SideBar menuType={MenuActiveType.DASHBOARD} subMenuType={SubMenuActiveType.NONE} />
                <div className="col-10">
                    <Dashboard />
                </div>
            </div>
        </div>
    </div>)
}