import ProjectCardComponent from "../../components/screens/project/ProjectCardComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function ProjectCard() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.PROJECT} subMenuType={SubMenuActiveType.PROJECT_LIST} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <ProjectCardComponent />
                </div>
            </div>
        </div>
    </div>)
}