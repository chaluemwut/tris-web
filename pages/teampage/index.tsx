
import TeamPageIndexComponent from "../../components/screens/teampage/TeamPageIndexComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function TeamPage() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.TEAMPAGE} subMenuType={SubMenuActiveType.NONE} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                   <TeamPageIndexComponent/>
                </div>
            </div>
        </div>
    </div>)
}
