import { useRouter } from "next/router";
import HeaderContent from "../../HeaderContent";

export default function ProjectListAllComponent() {
    const { push } = useRouter()

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="โครงการ" />
        <div>
            <div className="card" style={{ marginLeft: '10px', marginRight: '10px', marginTop: '20px' }}>
                <div></div>
                <div style={{ marginTop: '5px' }}>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="col list-table-header">#</th>
                                <th className="col list-table-header">รหัสโครงการ</th>
                                <th className="col list-table-header">ชื่อโครงการ</th>
                                <th className="col list-table-header">หน่วยงาน</th>
                                <th className="col list-table-header">งบประมาณ</th>
                                <th className="col list-table-header">สถานะโครงการ</th>
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