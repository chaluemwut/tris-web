import HeaderContent from "../../HeaderContent";
import { LineChart } from "../../chartjs/LineChart";
import { DonutNoDataChartJS } from "../../chartjs/DonutNoDataChart";
import { StackWaterfallChart } from "../../chartjs/StackWaterfallChart";
import g1 from '../../../public/static/images/g1.png'
import g2 from '../../../public/static/images/g2.png'
import g3 from '../../../public/static/images/g3.svg'
import g4 from '../../../public/static/images/g4.svg'
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

export default function Dashboard() {
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

            <div className="col-6">
                <div className="card" style={{ height: '100%', display: 'none' }}>
                    <div className="card-body">
                        <div className="row" style={{ height: '100%' }}>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-6">
                                        <span style={{ color: '#4F4F4F', fontSize: '14px' }}>
                                            ภาพรวมการใช้งบประมาณ</span>
                                    </div>
                                    <div className="col-6">
                                        <i className="bi bi-circle-fill" style={{ color: '#5A6ACE' }}></i>
                                        <span style={{
                                            color: '#4F4F4F', fontSize: '14px',
                                            marginLeft: '2px',
                                            marginRight: '2px',
                                        }}>งบประมาณ</span>
                                        <i className="bi bi-circle-fill" style={{
                                            marginLeft: '2px',
                                            marginRight: '2px',
                                            color: '#F4694C'
                                        }}></i>
                                        <span style={{ color: '#4F4F4F', fontSize: '14px' }}>เบิกจ่าย</span>
                                    </div>
                                </div>
                                <StackWaterfallChart />
                            </div>
                            <div className="col-4" style={{
                                textAlign: 'center',
                                borderLeft: '1px solid #EBE9F1;',
                            }}>
                                <div>
                                    <span style={{ color: '#4F4F4F', marginRight: '5px' }}>Year:</span>
                                    <select style={{ borderColor: '#5A6ACE', borderRadius: '5px' }}>
                                        <option>2021</option>
                                        <option>2022</option>
                                    </select>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <span style={{ color: '#29305B' }}>27,074</span>
                                </div>
                                <div>
                                    <h5 style={{ color: '#4F4F4F', fontSize: 'bold' }}>Budget:
                                        <span style={{ fontWeight: 'normal', marginLeft: '5px' }}>58,000</span>
                                    </h5>
                                </div>
                                <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                                    <Image src={g1.src} alt="g1" width={100} height={40} />
                                    <Image src={g2.src} alt="g2" width={100} height={40} />
                                </div>
                                <div>
                                    <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white' }}>ตรวจสอบแนวโน้ม</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <div>
                                            <span style={{ color: '#4F4F4F' }}>โครงการใหม่</span>
                                        </div>
                                        <div>
                                            <h1 style={{ color: '#29305B' }}>78</h1>
                                        </div>
                                        <div>
                                            <i className="bi bi-caret-up-fill"
                                                style={{ color: '#5A6ACE' }}></i>
                                        </div>
                                        <div>
                                            <span style={{ color: '#5A6ACE' }}>+0.5%</span>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <DonutNoDataChartJS />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <span style={{ color: '#4F4F4F' }}>โครงการแล้วเสร็จ</span>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-8"><LineSeriesChart /></div>
                                    <div className="col-4"><span>75</span></div>
                                </div>
                                <div>
                                    <span>
                                        <span style={{ color: '#F4694C' }}>100</span>
                                        <span style={{ color: '#BDBDBD' }}> left from target</span>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <h1 style={{ color: '#29305B' }}>672</h1>
                                    </div>
                                    <div className="col-6"><LineChart color="#40B2B7" /></div>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <span style={{ color: '#4F4F4F' }}>โครงการที่กำลังดำเนินงาน</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="bi bi-caret-up-fill"
                                            style={{ color: '#5A6ACE' }}></i>
                                        <span style={{ color: '#5A6ACE', marginLeft: '5px' }}>+5%</span>
                                        <span style={{ color: '#BDBDBD', marginLeft: '5px' }}>than last month</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <h1 style={{ color: '#29305B' }}>543</h1>
                                    </div>
                                    <div className="col-6"><LineChart color="#5A6ACE" /></div>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <span style={{ color: '#4F4F4F' }}>โครงการที่กำลังดำเนินงาน</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="bi bi-caret-down-fill"
                                            style={{ color: '#F4694C' }}></i>
                                        <span style={{ color: '#F4694C', marginLeft: '5px' }}>+5%</span>
                                        <span style={{ color: '#BDBDBD', marginLeft: '5px' }}>than last month</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div className="col-6">
                <div className="card" style={{ height: '100%', marginTop: '10px' }}>
                    <div style={{ marginTop: '10px', marginLeft: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <select>
                                <option>สัดส่วนจำนวนโครงการ</option>
                                <option>สัดส่วนงบประมาณ</option>
                            </select>
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <i className="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                    <div style={{ marginLeft: '10px', marginRight: '10px', marginTop: '20px' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <div className="row">
                                    <i className="bi bi-square-fill col-2" style={{ color: '#5A6ACE' }}></i>
                                    <span className="col-7">รถไฟฟ้า (20%)</span>
                                    <span className="col-3">654</span>
                                </div>
                                <div className="row">
                                    <i className="bi bi-square-fill col-2" style={{ color: '#F4694C' }}></i>
                                    <span className="col-7">ระบบรางคู่ (50%)</span>
                                    <span className="col-3">123</span>
                                </div>
                                <div className="row">
                                    <i className="bi bi-square-fill col-2" style={{ color: '#40B2B7' }}></i>
                                    <span className="col-7">งานวิจัยและพัฒนา (30%)</span>
                                    <span className="col-3">34</span>
                                </div>
                                <div className="row">
                                    <i className="bi bi-square-fill col-2" style={{ color: '#29305B' }}></i>
                                    <span className="col-7">อื่นๆ (10%) </span>
                                    <span className="col-3">136</span>
                                </div>
                            </div>
                            <div><DonutChartJS data={[20, 50, 30, 10]} colors={['#5A6ACE', '#F4694C', '#40B2B7', '#29305B']} /></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="card" style={{ height: '100%', marginTop: '10px' }}>
                    <div className="row" style={{ marginLeft: '10px', marginTop: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>Project Management</div>
                            <div>
                                <button className="btn" style={{ color: 'white', backgroundColor: '#5A6ACE' }}>Update Progress</button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {[1, 1, 1].map(e => <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginLeft: '10px' }}>
                                    <i className="bi bi-circle-fill" style={{ fontSize: '40px', color: '#C4C4C4' }}></i>
                                </div>
                                <div style={{ marginLeft: '10px' }}>
                                    <div>
                                        <h5>Ari Fianto</h5>
                                    </div>
                                    <div>
                                        <small>Hei, dont forget to clear server cache!</small>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <span style={{ textAlign: 'center' }}>25min ago<i className="bi bi-three-dots-vertical"></i></span>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <div style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        <div>
                            หน่วยงานที่ร่วมมือด้วย
                        </div>
                        <div>
                            <small style={{ color: '#BDBDBD', fontSize: '10px' }}>
                                Collaboration - Dashboard
                            </small>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}>
                            <div>
                                ภาพรวมความร่วมมือ (รวมทุกด้าน)
                            </div>
                            <div style={{ marginRight: '20px' }}>
                                <select>
                                    <option>เปิดโครงการ</option>
                                    <option>อยู่ระหว่างดำเนินการ</option>
                                    <option>ดำเนินการแล้วเสร็จ</option>
                                </select>
                                <select>
                                    <option>เลือกปีดำเนินงาน</option>
                                    <option>ปี 2567</option>
                                    <option>ปี 2566</option>
                                    <option>ปี 2565</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <img src={dummyDashboard1.src} width="100%" />
                        </div>
                        <div>
                            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                ความร่วมมือ (แยกตามด้าน)
                            </div>
                        </div>
                        <div>
                            <img src={dummyDashboard2.src} width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <img src={supplyChainDashboard.src}/>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <img src={environmentralDashbaord.src}/>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <img src={socialDashboard.src}/>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <img src={financialDashboard.src}/>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <img src={progressionDashboard.src}/>
                </div>
            </div>
        </div>

        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <div style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        <div>ตัวชี้วัด</div>
                        <div>
                            <span style={{ color: '#BDBDBD' }}>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#F7F7F9', paddingTop: '10px', paddingBottom: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <span style={{ color: '#444444', marginLeft: '20px' }}>แผนยุทธศาตร์</span>
                            </div>
                            <div>
                                <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white' }}>องค์ประกอบที่ 1</button>
                                <button className="btn" style={{ backgroundColor: '#E6E9F8', color: '#5A6ACE', marginRight: '20px', marginLeft: '20px' }}>องค์ประกอบที่ 2</button>
                            </div>
                        </div>
                    </div>
                    {[
                        'ยุทธศาตร์ที่ 1 ศูนย์กลางองค์ความรู้ด้านเทคโนโลยีระบบราง',
                        'ยุทธศาตร์ที่ 2 เชื่อมโยงและยกระดับภาคอุตสาหกรรม',
                        'ยุทธศาตร์ที่ 3 พัฒนาทรัพยากรมนุษย์',
                        'ยุทธศาตร์ที่ 4 องค์กรแห่งการเรียนรู้ และบริหารจัดการตามหลักธรรมมาภิบาล'
                    ].map(e => <div>
                        <div style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <span>{e}</span>
                                </div>
                                <div>
                                    <Image src={g3.src} alt="g3" width={30} height={30} />
                                    <Image src={g4.src} style={{ marginLeft: '30px' }} alt="g4" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>)}
                    <div style={{ backgroundColor: '#F7F7F9', paddingTop: '10px', paddingBottom: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <span style={{ color: '#444444', marginLeft: '20px' }}>ตัวชี้วัดสำนักงาน ก.พ.ร.</span>
                            </div>
                            <div>
                                <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white' }}>องค์ประกอบที่ 1</button>
                                <button className="btn" style={{ backgroundColor: '#E6E9F8', color: '#5A6ACE', marginRight: '20px', marginLeft: '20px' }}>องค์ประกอบที่ 2</button>
                            </div>
                        </div>
                    </div>
                    {[
                        'ตัวชี้วัดที่ 1 ',
                        'ตัวชี้วัดที่ 2 ',
                    ].map(e => <div>
                        <div style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <span>{e}</span>
                                </div>
                                <div>
                                    <Image src={g3.src} alt="g3" width={30} height={30} />
                                    <Image src={g4.src} style={{ marginLeft: '30px' }} alt="g4" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>)}
                    <div style={{ backgroundColor: '#F7F7F9', paddingTop: '10px', paddingBottom: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <span style={{ color: '#444444', marginLeft: '20px' }}>ตัวชี้วัดตาม Results Chain</span>
                            </div>
                            <div>
                                <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white' }}>องค์ประกอบที่ 1</button>
                                <button className="btn" style={{ backgroundColor: '#E6E9F8', color: '#5A6ACE', marginRight: '20px', marginLeft: '20px' }}>องค์ประกอบที่ 2</button>
                            </div>
                        </div>
                    </div>
                    {[
                        'ตัวชี้วัดที่ 1 ',
                        'ตัวชี้วัดที่ 2 ',
                    ].map(e => <div>
                        <div style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <span>{e}</span>
                                </div>
                                <div>
                                    <Image src={g3.src} alt="g3" width={30} height={30} />
                                    <Image src={g4.src} style={{ marginLeft: '30px' }} alt="g4" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>)}
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