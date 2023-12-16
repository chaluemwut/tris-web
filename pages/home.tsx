import { useEffect, useLayoutEffect, useState } from "react"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
import Dashboard from "../components/screens/dashboard/Dashboard"
import SideBar, { SubMenuActiveType } from "../components/sidebar/SideBar"
import { MenuActiveType } from '../components/sidebar/SideBar'

export default function Home() {
    const [cookie, setCookie] = useCookies()
    const { push } = useRouter()

    useEffect(() => {
        // initData()
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
                <div className="col-10" style={{backgroundColor: '#EEEFF3'}}>
                    <Dashboard />
                </div>
            </div>
        </div>
    </div>)
}