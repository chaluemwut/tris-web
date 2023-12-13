import ProjectCreateComponent from "../../components/screens/project/ProjectCreateComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function ProjectCreate() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.PROJECT} subMenuType={SubMenuActiveType.PROJECT_CREATE} />
                <div className="col-10" style={{backgroundColor: '#EEEFF3'}}>
                    <ProjectCreateComponent />
                </div>
            </div>
        </div>
    </div>)
}