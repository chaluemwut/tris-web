import RCResultComponent from "../../../components/screens/kpi/resultchain/RCResultComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../../components/sidebar/SideBar";

export default function RCResult() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.KPI} subMenuType={SubMenuActiveType.KPIResultChain} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <RCResultComponent />
                </div>
            </div>
        </div>
    </div>)
}