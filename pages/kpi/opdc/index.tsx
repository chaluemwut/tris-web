import KPIOfficeComponent from "../../../components/screens/kpi/KPIOfficeComponent";
import OpdcIndexComponent from "../../../components/screens/kpi/opdc/OpdcIndexComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../../components/sidebar/SideBar";

export default function Office() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.KPI} subMenuType={SubMenuActiveType.KPIoffice} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <OpdcIndexComponent />
                </div>
            </div>
        </div>
    </div>)
}