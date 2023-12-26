import { useState } from "react";
import HeaderContent from "../../HeaderContent";
import OPDCComponent from "./OPDCComponent";
import RCResultComponent from "../kpi/resultchain/RCResultComponent";

export default function AdminIndexComponent() {
    const [activeTab, setActiveTab] = useState(1)

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="หน้าหลัก" />
        <div>
            <div style={{ margin: '40px' }}>
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div
                                onClick={() => setActiveTab(1)}
                                className={activeTab == 1 ? 'nav-link active nav-active-tab' : 'nav-link nav-non-active-tab'}>
                                <span style={{ marginLeft: '10px', marginRight: '10px' }}>ยุทธศาสตร์</span>
                            </div>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '5px' }}>
                            <div
                                onClick={() => setActiveTab(2)}
                                className={activeTab == 2 ? 'nav-link active nav-active-tab' : 'nav-link nav-non-active-tab'}>
                                <span style={{ marginLeft: '10px', marginRight: '10px' }}>สำนักงาน ก.พ.ร.</span>
                            </div>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '5px' }}>
                            <div
                                onClick={() => setActiveTab(3)}
                                className={activeTab == 3 ? 'nav-link active nav-active-tab' : 'nav-link nav-non-active-tab'}>
                                <span style={{ marginLeft: '10px', marginRight: '10px' }}>Result Chain (RC)</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div style={{ display: activeTab == 1 ? 'block' : 'none', backgroundColor: 'white' }}>

                </div>
                <div style={{ display: activeTab == 2 ? 'block' : 'none', backgroundColor: 'white' }}>
                    <OPDCComponent />
                </div>
                <div style={{ display: activeTab == 3 ? 'block' : 'none', backgroundColor: 'white' }}>
                    <RCResultComponent isAdminPage={true}/>
                </div>
            </div>
        </div>
    </div>)
}