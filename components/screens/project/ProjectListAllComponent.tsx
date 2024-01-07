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
                                    'name': 'ครงการบริหารจัดการโครงสร้างระบบราง ECC',
                                    'price': '2,500,000',
                                    'status': 'ดำเนินการแล้วเสร็จ'
                                },
                                {
                                    'code': 'RTR002',
                                    'name': `การพัฒนาโครงสร้างพื้นฐานทางคุณภาพของประเทศ
                                    ด้านระบบราง`,
                                    'price': '1,500,000',
                                    'status': 'ระหว่างดำเนินการ'
                                },
                                {
                                    'code': 'RTR003',
                                    'name': `โครงการจัดตั้งศูนย์กลางการพัฒนาบุคลากรระบบราง
                                    (Rail Academy)`,
                                    'price': '500,000',
                                    'status': 'ระหว่างดำเนินการ'
                                },
                                {
                                    'code': 'RTR004',
                                    'name': `โครงการจัดทํายุทธศาสตร์ด้านเทคโนโลยีระบบรางของประเทศ
                                    Developing National Rail Technology Strategy`,
                                    'price': '2,000,000',
                                    'status': 'ระหว่างดำเนินการ'
                                },
                                {
                                    'code': 'RTR005',
                                    'name': `โครงการจัดทำยุทธศาสตร์ด้านเทคโนโลยีระบบรางของประเทศ`,
                                    'price': '500,000',
                                    'status': 'ระหว่างดำเนินการ'
                                },
                                {
                                    'code': 'RTR006',
                                    'name': `โครงการศึกษาพัฒนาเทคโนโลยีสำหรับระบบตรวจจับการชนของรถไฟ`,
                                    'price': '1,750,000',
                                    'status': 'ระหว่างดำเนินการ'
                                },
                                {
                                    'code': 'RTR007',
                                    'name': `โครงการบริหารจัดการโครงสร้างระบบราง ECC`,
                                    'price': '850,000',
                                    'status': 'ระหว่างดำเนินการ'
                                },
                                {
                                    'code': 'RTR008',
                                    'name': `การพัฒนาโครงสร้างพื้นฐานทางคุณภาพของประเทศ
                                    ด้านระบบราง`,
                                    'price': '1,000,000',
                                    'status': 'ระหว่างดำเนินการ'
                                },
                                {
                                    'code': 'RTR009',
                                    'name': `โครงการจัดตั้งศูนย์กลางการพัฒนาบุคลากรระบบราง
                                    (Rail Academy)`,
                                    'price': '500,000',
                                    'status': 'ระหว่างดำเนินการ'
                                },
                                {
                                    'code': 'RTR010',
                                    'name': `โครงการบริหารจัดการโครงสร้างระบบราง ECC`,
                                    'price': '750,000',
                                    'status': 'ระหว่างดำเนินการ'
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