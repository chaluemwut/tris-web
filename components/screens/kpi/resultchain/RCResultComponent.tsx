import HeaderContent from "../../../HeaderContent";

export default function RCResultComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="KPI" />
        <div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className="card">
                    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>ตัวชี้วัดหลักของ สทร. สําหรับประเมินความคุ้มค่าตาม Result Chain</div>
                            <div>
                                <button className="btn" style={{ backgroundColor: '#BDBDBD', color: 'white' }}>Edit</button>
                            </div>
                        </div>
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td style={{ backgroundColor: '#505EB5', color: 'white' }}>ตัวชี้วัด</td>
                                        <td style={{ backgroundColor: '#505EB5', color: 'white' }}>คําอธิบายวิธีการประเมิน</td>
                                        <td colSpan={6} style={{ backgroundColor: '#505EB5', color: 'white' }}>ผลการดำเนินงาน</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={3} style={{ backgroundColor: '#E6E9F8' }}>ผลกระทบทางตรง (Impact)</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2566</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2567</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2568</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2569</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2570</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={5}>
                                            1. มูลค่าเพิ่มทางเศรษฐกิจที่เกิดจากการดําเนินงานของ สทร.
                                        </td>
                                        <td rowSpan={5}>
                                            คํานวณจากมูลค่าทางเศรษฐกิจที่เกิดขึ้นจากผลลัพธ์และผลผลิตของ
                                            การดําเนินงานของ สทร. เช่น (ใช้การประเมินทางเศรษฐศาสตร์)
                                            • การลดมูลค่าการนําเข้าชิ้นส่วนระบบรางจากต่างประเทศ
                                            • การลดการสูญเสียหรือการเพิ่มประสิทธิภาพในการปฏิบัติการ
                                            และบํารุงรักษาด้านระบบราง
                                            • มูลค่าที่เกิดขึ้นจากการสร้างงานในระบบราง
                                        </td>
                                        <td>
                                        เป้าหมาย
                                        </td>                                        
                                    </tr>
                                    <tr>
                                        <td>ผล</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                    </tr>
                                    <tr>
                                        <td>ผลสะสม</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                    </tr>
                                    <tr>
                                        <td>ร้อยล่ะ (3 ปี)</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                    </tr>
                                    <tr>
                                        <td>ร้อยล่ะ (5 ปี)</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2. มีผู้ประกอบการผู้ผลิตชิ้นส่วนสําคัญในระบบรางภายในประเทศที่ได้มาตรฐาน
                                        </td>
                                        <td>
                                        จํานวนผู้ประกอบการ หรือโรงงานภายในประเทศที่สามารถผลิตชิ้นส่วน
และอุปกรณ์สําหรับใช้งานจริงในระบบราง (ผปก.ตั้งแต่ระดับ
Tier 2 ขึ้นไป)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}