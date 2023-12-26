import AdminIndexComponent from "../../components/screens/admin/AdminIndexComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function AdminPage() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.ADMIN} subMenuType={SubMenuActiveType.ADMIN_KPI} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <AdminIndexComponent />
                </div>
            </div>
        </div>
    </div>)
}
