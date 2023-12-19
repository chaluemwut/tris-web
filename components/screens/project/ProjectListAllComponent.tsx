import { useRouter } from "next/router";
import HeaderContent from "../../HeaderContent";

export default function ProjectListAllComponent() {
    const { push } = useRouter()

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="โครงการ"/>
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
                            {['ครงการบริหารจัดการโครงสร้างระบบราง ECC',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                                'โครงการ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                            ].map((e, index) => <tr
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    push('/project/project-detail')
                                }}>
                                <th>{index + 1}</th>
                                <td>xxxxxxxxxxxxx</td>
                                <td>{e}</td>
                                <td>xxx,xxxxxx</td>
                                <td>xxx,xxxxxx</td>
                                <td>xxxxxx</td>
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