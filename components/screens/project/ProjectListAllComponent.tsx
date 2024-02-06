import { useRouter } from "next/router";
import HeaderContent from "../../HeaderContent";
import { LineSeriesChart } from "../../chartjs/LineSeriesChart";
import { ProjectProgress } from "../../chartjs/ProjectProgress";
import progress1 from '../../../public/static/images/list/progress1.png';
import progress2 from '../../../public/static/images/list/progress2.png';
import progress3 from '../../../public/static/images/list/progress3.png';
import progress4 from '../../../public/static/images/list/progress4.png';
import progress5 from '../../../public/static/images/list/progress5.png';
import progress6 from '../../../public/static/images/list/progress6.png';
import progress7 from '../../../public/static/images/list/progress7.png';
import progress8 from '../../../public/static/images/list/progress8.png';
import progress9 from '../../../public/static/images/list/progress9.png';
import progress10 from '../../../public/static/images/list/progress10.png';

export default function ProjectListAllComponent() {
    const { push } = useRouter()


    const getImage = (index: number) => {
        if (index == 0) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress1.src} />
                <span>3%</span>
            </div>
        } else if (index == 1) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress2.src} />
                <span>51%</span>
            </div>
        } else if (index == 2) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress3.src} />
                <span>81%</span>
            </div>
        } else if (index == 3) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress4.src} />
                <span>63%</span>
            </div>
        } else if (index == 4) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress5.src} />
                <span>25%</span>
            </div>
        } else if (index == 5) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress6.src} />
                <span>93%</span>
            </div>
        } else if (index == 6) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress7.src} />
                <span>48%</span>
            </div>
        } else if (index == 7) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress8.src} />
                <span>85%</span>
            </div>
        } else if (index == 8) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress9.src} />
                <span>78%</span>
            </div>
        } else if (index == 9) {
            return <div style={{ display: 'flex' }}>
                <img width={100} src={progress10.src} />
                <span>100%</span>
            </div>
        } else {
            return <img width={100} src={progress1.src} />
        }
    }

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="โครงการ" />
        <div>
            <div className="card" style={{ marginLeft: '10px', marginRight: '10px', marginTop: '20px' }}>
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                    marginBottom: '10px',
                    marginLeft: '20px',
                    marginRight: '20px'
                }}>
                    <div>
                        <span>รายละเอียดโครงการ</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <select style={{
                            color: 'white', backgroundColor: '#5A6ACE',
                            borderRadius: '5px', height: '35px',
                            borderColor: '#5A6ACE'
                        }}>
                            <option>วัตถุประสงค์การจัดตั้งที่ 1</option>
                        </select>
                        <select style={{
                            marginLeft: '10px', color: 'white', backgroundColor: '#5A6ACE',
                            borderRadius: '5px', height: '35px',
                            borderColor: '#5A6ACE'
                        }}>
                            <option>ยุทธศาตร์ที่ 1</option>
                        </select>
                        <select style={{
                            marginLeft: '10px', color: 'white', backgroundColor: '#5A6ACE',
                            borderRadius: '5px', height: '35px',
                            borderColor: '#5A6ACE'
                        }}>
                            <option>แผนงาน 1</option>
                        </select>
                    </div>
                </div>
                <div style={{ marginTop: '5px', marginLeft: '20px', marginRight: '20px' }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="col list-table-header">#</th>
                                <th className="col list-table-header">รหัสโครงการ</th>
                                <th className="col list-table-header">ชื่อโครงการ</th>
                                <th className="col list-table-header">หน่วยงานเจ้าของ
                                    โครงการ ภายใต้
                                    สังกัด สทร</th>
                                <th className="col list-table-header">
                                    <div>งบประมาณ</div>
                                    <div>(บาท)</div>
                                </th>
                                <th className="col list-table-header">สถานะโครงการ</th>
                                <th className="col list-table-header">ร้อยละ ความคืบหน้า</th>
                                <th className="col list-table-header"></th>
                                <th className="col list-table-header"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    'code': 'RTR001',
                                    'name': 'โครงการจัดทํายุทธศาสตร์ด้านเทคโนโลยีระบบรางของประเทศ',
                                    'price': '7,734,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR002',
                                    'name': `โครงการจัดทำข้อเสนอเพื่อยกระดับเศรษฐกิจและอุตสาหกรรมระบบรางในภูมิภาค`,
                                    'price': '9,600,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR003',
                                    'name': `โครงการยกระดับขีดความสามารถการขนส่งทางรางด้วยเทคโน โลยีสมัยใหม่`,
                                    'price': '75,240,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR004',
                                    'name': `โครงการศึกษาความเหมาะสมด้านเทคโนโลยีระบบรางในอนาคต ของประเทศไทย`,
                                    'price': '61,045,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR005',
                                    'name': `โครงการพัฒนาเทคโนโลยีและนวัตกรรมเพื่อยกระดับการเดิน ระบบและซ่อมบำรุงระบบราง`,
                                    'price': '66,000,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR006',
                                    'name': `โครงการพัฒนาวิศวกรรมโครงสร้างพื้นฐานระบบรางและส่วน ประกอบ`,
                                    'price': '12,735,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR007',
                                    'name': `โครงการจัดตั้งศูนย์ถ่ายทอดเทคโนโลยีและพัฒนาธุรกิจ /อุตสาหกรรมระบบราง`,
                                    'price': '17,800,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR008',
                                    'name': `โครงการจัดตั้งศูนย์กลางการพัฒนาบุคลากรระบบราง`,
                                    'price': '42,000,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR009',
                                    'name': `โครงการพัฒนามาตรฐานวิธีการทดสอบรองรับการผลิตชิ้นส่วนและระบบขนส่งทางรางร่วมกับการพัฒนาโครงสร้างพื้นฐาน...
                                    (Rail Academy)`,
                                    'price': '30,200,000',
                                    'status': 'ยื่นข้อเสนอโครงการ'
                                },
                                {
                                    'code': 'RTR010',
                                    'name': `โครงการพัฒนามาตรฐานการกำกับดูแลเพื่อสนับสนุนการดำเนินงานตามกฎหมายการขนส่งทางราง`,
                                    'price': '20,000,000',
                                    'status': ''
                                },
                            ].map((e, index) => <tr
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    push('/project/project-detail')
                                }}>
                                <th>{index + 1}.</th>
                                <td>{e.code}</td>
                                <td>{e.name}</td>
                                <td>สทร.</td>
                                <td>{e.price}</td>
                                <td>{e.status}</td>
                                <td>
                                    {getImage(index)}
                                </td>
                                <td>
                                    <button className="btn" style={{ backgroundColor: '#F4694C', color: 'white' }}>Message Board</button>
                                    <button className="btn" style={{ backgroundColor: '#5A6ACE', marginLeft: '5px', color: 'white' }}>Task</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}