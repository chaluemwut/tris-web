import StrategicIndexComponent from "../../../components/screens/kpi/strategic/StrategicIndexComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../../components/sidebar/SideBar";

export default function Strategic() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.KPI} subMenuType={SubMenuActiveType.KPIstrategic} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <StrategicIndexComponent />
                </div>
            </div>
        </div>
    </div>)
}