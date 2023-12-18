import GranttChartComponent from "../../components/screens/project/GranttChartComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function GranttChart() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.PROJECT} subMenuType={SubMenuActiveType.PROJECT_LIST} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <GranttChartComponent />
                </div>
            </div>
        </div>
    </div>)
}