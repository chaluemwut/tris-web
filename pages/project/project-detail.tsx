import ProjectDetailComponent from "../../components/screens/project/ProjectDetailComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function ProjectDetail() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.PROJECT} subMenuType={SubMenuActiveType.PROJECT_LIST} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <ProjectDetailComponent />
                </div>
            </div>
        </div>
    </div>)
}