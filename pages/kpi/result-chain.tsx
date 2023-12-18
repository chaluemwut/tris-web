import ResultChainImage from "../../components/screens/dummy/ResultChainImage";
import SideBar, { MenuActiveType, SubMenuActiveType } from "../../components/sidebar/SideBar";

export default function ResultChain() {
    return (<div>
        <div className="container-fluid">
            <div className="row">
                <SideBar menuType={MenuActiveType.KPI} subMenuType={SubMenuActiveType.KPIResultChain} />
                <div className="col-10" style={{ backgroundColor: '#EEEFF3' }}>
                    <ResultChainImage />
                </div>
            </div>
        </div>
    </div>)
}