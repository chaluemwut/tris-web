import ProjectListAllComponent from "../../components/screens/project/ProjectListAllComponent";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function ProjectList() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.PROJECT} subMenuType={SubMenuActiveType.PROJECT_LIST} />
                <div className="col-10">
                    <ProjectListAllComponent />
                </div>
            </div>
        </div>
    </div>)
}