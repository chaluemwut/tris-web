import HeaderContent from "../../HeaderContent";
import { LineChart } from "../../chartjs/LineChart";
import { DonutNoDataChartJS } from "../../chartjs/DonutNoDataChart";
import { StackWaterfallChart } from "../../chartjs/StackWaterfallChart";
import g1 from '../../../public/static/images/g1.png'
import g2 from '../../../public/static/images/g2.png'
import g3 from '../../../public/static/images/g3.svg'
import g4 from '../../../public/static/images/g4.svg'
import d1 from '../../../public/static/images/dashboard/d1.png'
import d2 from '../../../public/static/images/dashboard/d2.png'
import d3 from '../../../public/static/images/dashboard/d3.png'
import d4 from '../../../public/static/images/dashboard/d4.png'
import d5 from '../../../public/static/images/dashboard/d5.png'
import d6 from '../../../public/static/images/dashboard/d6.png'
import d7 from '../../../public/static/images/dashboard/d7.png'
import d8 from '../../../public/static/images/dashboard/d8.png'
import d9 from '../../../public/static/images/dashboard/d9.png'
import d10 from '../../../public/static/images/dashboard/d10.png'
import d11 from '../../../public/static/images/dashboard/d11.png'
import d12 from '../../../public/static/images/dashboard/d12.png'
import d15 from '../../../public/static/images/dashboard/d15.png'
import d16 from '../../../public/static/images/dashboard/d16.png'
import dummyP5 from '../../../public/static/images/dummyP5.png'
import dummyDashboard1 from '../../../public/static/images/dashboard/dummy_dashboard_1.png'
import dummyDashboard2 from '../../../public/static/images/dashboard/dummy_dashboard_2.png'
import supplyChainDashboard from '../../../public/static/images/dashboard/supply_chain_dashboard.png'
import environmentralDashbaord from '../../../public/static/images/dashboard/environmentral_dashbaord.png'
import socialDashboard from '../../../public/static/images/dashboard/social_dashboard.png'
import financialDashboard from '../../../public/static/images/dashboard/financial_dashboard.png'
import progressionDashboard from '../../../public/static/images/dashboard/progression_dashboard.png'
import Image from "next/image"
import { LineSeriesChart } from "../../chartjs/LineSeriesChart";
import ProjectHiLight from "../../home/ProjectHiLight";
import { DonutChartJS } from "../../chartjs/DonutChart";


export default function Dashboard2() {

    const envDiv = (str: string, p: any) => {
        return <div>
            <div className="card">
                <div style={{ margin: '10px' }}>
                    <div>ผลกระทบทางเศรษฐกิจในภาพรวมจากการดำเนินโครงการ</div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        marginLeft: '30px',
                        marginRight: '30px'
                    }}>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>{str}</span>
                        </div>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div>ปีงบประมาณ:</div>
                                <div>
                                    <select>
                                        <option>ปี 2565</option>
                                        <option>ปี 2566</option>
                                        <option>ปี 2567</option>
                                        <option>ปี 2568</option>
                                        <option>ปี 2569</option>
                                        <option>ปี 2570</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img src={p.src} />
                    </div>
                </div>
            </div>
        </div>
    }

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="หน้าหลัก" />
        <div style={{ textAlign: 'right', paddingRight: '40px', marginTop: '20px' }}>
            <select style={{ color: 'white', backgroundColor: '#5A6ACE', borderRadius: '5px', height: '35px' }}>
                <option>ดูทั้งหมด</option>
                <option>โครงการที่อนุมัติทั้งหมด</option>
                <option>แหล่งเงินงบประมาณ</option>
                <option>หน่วยงาน</option>
                <option>วัตถุประสงค์องค์กร</option>
                <option>MOU</option>
                <option>MOA</option>
                <option>วัตถุประสงค์ขององค์กร</option>
                <option>ยุทธศาสตร์ สทร.</option>
                <option>แผนงานหลัก</option>
                <option>สถานะของโครงการ</option>
                <option>Meta-tag</option>
            </select>
        </div>
        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>

            <div>
                <div style={{ marginBottom: '20px' }}>
                    <img src={dummyP5.src} width={'100%'} />
                </div>
            </div>

            <div>
                <div className="card">
                    <div style={{ textAlign: 'right', marginTop: '10px', marginRight: '10px' }}>
                        <select style={{ color: 'white', backgroundColor: '#5A6ACE', borderColor: '#5A6ACE', borderRadius: '5px', height: '35px' }}>
                            <option>โครงการภายใต้วัตถุประสงค์การจัดตั้ง</option>
                            <option>โครงการภายใต้ยุทธศาสตร์</option>
                            <option>โครงการภายใต้แผนงาน</option>
                        </select>
                    </div>
                    <div style={{ marginLeft: '10px', marginRight: '10px', marginTop: '20px', marginBottom: '40px' }}>
                        <img src={d1.src} width={'100%'} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '10px' }}>
                <img src={d3.src} width={'100%'} />
            </div>

            <div style={{ marginTop: '10px' }}>
                <img src={d4.src} width={'100%'} />
            </div>

            <div style={{ marginTop: '10px' }}>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '10px',
                        marginLeft: '20px', marginRight: '20px'
                    }}>
                        <div>
                            <div>
                                <span style={{ fontWeight: 'bold' }}>ภาพรวมความร่วมมือ (ตามงบประมาณ)</span>
                            </div>
                            <div>
                                <span>จำนวนงบประมาณ (ล้านบาท)</span>
                            </div>
                        </div>
                        <div>
                            <select style={{ borderColor: '#5A6ACE', borderRadius: '5px', height: '35px' }}>
                                <option>เลือกปีดำเนินงาน</option>
                                <option>ปี 2568</option>
                                <option>ปี 2567</option>
                                <option>ปี 2566</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
                        <img src={d5.src} width={'100%'} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '10px' }}>
                <div className="card">
                    <div style={{ marginTop: '10px' }}>
                        <center>
                            <span>พันธมิตรภายใต้บันทึกข้อตกลงความร่วมมือจำนวน 11 ฉบับ</span>
                        </center>
                    </div>
                    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '40px' }}>
                        <img src={d2.src} width={'100%'} />
                    </div>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <img src={supplyChainDashboard.src} />
                </div>
            </div>
        </div>

        <div>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                {envDiv('มูลค่าผลกระทบทางเศรษฐกิจจากการดำเนินโครงการ', d6)}
            </div>
        </div>

        <div>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                {envDiv('มูลค่าผลตอบแทนทางสังคมจากการดำเนินโครงการ ', d8)}
            </div>
        </div>

        <div>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                {envDiv('ผลกระทบทางสิ่งแวดล้อม', d7)}
            </div>
        </div>

        <div>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                {envDiv('ผลกระทบทางสิ่งแวดล้อม', d9)}
            </div>
        </div>

        <div>
            <div>
                <div className="card" style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                    <div style={{ marginTop: '10px', marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>ผลเงินตามแผน </div>
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <select>
                                        <option>ยุทธศาสตร์</option>
                                        <option>ภาพรวม</option>
                                        <option>ยุทธศาสตร์</option>
                                        <option>แผนงาน</option>
                                        <option>วัตถุประสงค์จัดตั้ง</option>
                                        <option>รายเดือน</option>
                                    </select>
                                </div>
                                <div style={{ marginLeft: '20px' }}>
                                    <select>
                                        <option>เลือกปีดำเนินงาน</option>
                                        <option>ปี 2567</option>
                                        <option>ปี 2566</option>
                                        <option>ปี 2565</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <img src={d10.src} width={'100%'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                <img src={d15.src} width={'100%'}/>
            </div>
        </div>

        <div>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                <img src={d16.src} width={'100%'}/>
            </div>
        </div>

        <div>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                <div className="card">
                    <div>
                        <span>ผลเงินตามแผน</span>
                    </div>
                    <div>
                        <img src={d11.src} width={'100%'} />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div><ProjectHiLight headerLabel="Project Hi Light" /></div>
        </div>

        <div className="row">
            <div><ProjectHiLight headerLabel="Project Hi Light" /></div>
        </div>
    </div>)
}