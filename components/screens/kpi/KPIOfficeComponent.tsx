import HeaderContent from "../../HeaderContent";
import getKIPData from "../../dummydata/KPIData";

export default function KPIOfficeComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent />
        <div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div>
                    <span>ตารางสรุปคะแนนของตัวชี้วัดตามกรอบการประเมินผลของ สำนักงาน ก.พ.ร.</span>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <div style={{ backgroundColor: 'white' }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }} className="col list-table-header">มิติ /องค์ประกอบ</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }} className="col list-table-header">ตัวชี้วัด</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }} className="col list-table-header">หน่วยวัด</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }} className="col list-table-header">น้ำหนักของตัวชี้วัด</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }} className="col list-table-header">เป้าหมาย</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }} className="col list-table-header">ผลการดำเนินงาน</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }} className="col list-table-header">คะแนนที่ได้</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }} className="col list-table-header">คะแนนถ่วงน้ำหนัก</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getKIPData().map((e) => <tr>
                                    <td>
                                        <div style={{ marginBlock: '10px' }}>{e.d1}</div>
                                    </td>
                                    <td>
                                        <div style={{ marginBlock: '10px' }}>{e.d2}</div>
                                    </td>
                                    <td>
                                        <div style={{ marginBlock: '10px' }}>{e.d3}</div>
                                    </td>
                                    <td>
                                        <div style={{ marginBlock: '10px' }}>{e.d4}</div>
                                    </td>
                                    <td>
                                        <div style={{ marginBlock: '10px' }}>{e.d5}</div>
                                    </td>
                                    <td>
                                        <div style={{ marginBlock: '10px' }}>{e.d6}</div>
                                    </td>
                                    <td>
                                        <div style={{ marginBlock: '10px' }}>{e.d7}</div>
                                    </td>
                                    <td>
                                        <div style={{ marginBlock: '10px' }}>{e.d8}</div>
                                    </td>
                                </tr>)}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td colSpan={4} style={{ backgroundColor: '#B5C8DB' }}>
                                        <div style={{ marginBlock: '10px' }}>ภาพรวมผลคะแนนการประเมินผล</div>
                                    </td>
                                    <td colSpan={2} style={{ backgroundColor: '#B5C8DB' }}>
                                        <div style={{marginBlock: '10px'}}>000.0000</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6}></td>
                                    <td>
                                        <button className="btn">Cancel</button>
                                    </td>
                                    <td>
                                        <button className="btn">Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}