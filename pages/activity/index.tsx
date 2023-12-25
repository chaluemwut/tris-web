
import ActivityIndexComponent from "../../components/screens/activity/ActivityIndexComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function ActivityPage() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.ACTIVITY} subMenuType={SubMenuActiveType.NONE} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <ActivityIndexComponent />
                </div>
            </div>
        </div>
    </div>)
}
