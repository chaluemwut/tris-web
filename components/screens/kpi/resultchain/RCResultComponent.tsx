import HeaderContent from "../../../HeaderContent";

type ResultParam = {
    isAdminPage: boolean
}

export default function RCResultComponent(resultParam: ResultParam) {
    return (<div style={{ marginBottom: '20px' }}>
        {!resultParam.isAdminPage && <HeaderContent title="KPI" />}
        {resultParam.isAdminPage && <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
                <div style={{ color: '#29305B' }}>ตัวชี้วัดหลักของ สทร. สําหรับประเมินความคุ้มค่าตาม Result Chain</div>
                <div>
                    <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white' }}>+ เพิ่มปี (เป้าหมาย)</button>
                    <button className="btn" style={{ backgroundColor: '#F4694C', color: 'white', marginLeft: '10px' }}>
                        <i className="bi bi-pencil-square"></i>
                        Edit</button>
                </div>
            </div>
        </div>}
        <div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className="card">
                    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        {!resultParam.isAdminPage && <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>ตัวชี้วัดหลักของ สทร. สําหรับประเมินความคุ้มค่าตาม Result Chain</div>
                            <div>
                                <button className="btn" style={{ backgroundColor: '#BDBDBD', color: 'white' }}>Edit</button>
                            </div>
                        </div>}
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
                                            การดําเนินงานของ สทร. เช่น (ใช้การประเมินทางเศรษฐศาสตร์)<br />
                                            • การลดมูลค่าการนําเข้าชิ้นส่วนระบบรางจากต่างประเทศ<br />
                                            • การลดการสูญเสียหรือการเพิ่มประสิทธิภาพในการปฏิบัติการ<br />
                                            และบํารุงรักษาด้านระบบราง<br />
                                            • มูลค่าที่เกิดขึ้นจากการสร้างงานในระบบราง
                                        </td>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>
                                            เป้าหมาย
                                        </td>
                                        <td colSpan={3}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td colSpan={2}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผล</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผลสะสม</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (3 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (5 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>

                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={5}>
                                            2. มีผู้ประกอบการผู้ผลิตชิ้นส่วนสําคัญในระบบรางภายในประเทศที่ได้มาตรฐาน
                                        </td>
                                        <td rowSpan={5}>
                                            จํานวนผู้ประกอบการ หรือโรงงานภายในประเทศที่สามารถผลิตชิ้นส่วน
                                            และอุปกรณ์สําหรับใช้งานจริงในระบบราง (ผปก.ตั้งแต่ระดับ
                                            Tier 2 ขึ้นไป)
                                        </td>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>
                                            เป้าหมาย
                                        </td>
                                        <td colSpan={3}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td colSpan={2}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผล</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผลสะสม</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (3 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (5 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>

                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td colSpan={3} style={{ backgroundColor: '#E6E9F8' }}>ผลลัพธ์ (Outcome)</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2566</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2567</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2568</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2569</td>
                                        <td style={{ backgroundColor: '#939AB2', color: 'white' }}>2570</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={5}>
                                            3. ยุทธศาสตร์ด้านเทคโนโลยีระบบรางของสถาบัน
                                            ได้รับการนําไปใช้ในการกําหนดแผนและจัดสรร
                                            งบประมาณด้าน
                                            เทคโนโลยีระบบรางของประเทศ
                                        </td>
                                        <td rowSpan={5}>
                                            ยุทธศาสตร์ด้านเทคโนโลยีระบบราง<br />
                                            ได้รับการนําไปใช้ประกอบการกําหนดแผน<br />
                                            และงบประมาณด้านการพัฒนาเทคโนโลยีระบบราง ผ่านกลไกดังต่อไปนี้<br />
                                            1. การจัดสรรงบประมาณโดยสํานักงบประมาณ (การจัดสรร งปม.
                                            ผ่านแผนงานพื้นฐาน/แผนงานยุทธศาสตร์/ แผนงานบูรณาการฯ<br />
                                            2. การจัดสรรงบประมาณในกองทุน ววน. และ/หรือกองทุนที่สนับสนุน
                                            การวิจัยอื่นๆ<br />
                                            3. การจัดทํานโยบายและแผนของประเทศที่เกี่ยวข้องกับระบบรางรวมถึง
                                            ใช้เป็นข้อมูลสําคัญในการวิเคราะห์กลั่นกรองแผนงานของหน่วยงานหลัก
                                            เช่น สภาพัฒน์ฯ
                                        </td>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>
                                            เป้าหมาย
                                        </td>
                                        <td colSpan={3}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td colSpan={2}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผล</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผลสะสม</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (3 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (5 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>

                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={5}>
                                            4. จํานวนชิ้นส่วนและอุปกรณ์จากผลงาน
                                            สทร. ที่สามารถผลิตภายในประเทศ
                                            (local content) และใช้งานจริงได้
                                        </td>
                                        <td rowSpan={5}>
                                            จํานวนชิ้นส่วนและ/หรืออุปกรณ์ที่เกิดจากผลงานของ สทร.
                                            และได้รับการพัฒนาเป็นต้นแบบที่สามารถใช้งานจริงได้ในระบบราง
                                            (มีการ
                                            ทดลองใช้ Running Test)
                                        </td>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>
                                            เป้าหมาย
                                        </td>
                                        <td colSpan={3}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td colSpan={2}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผล</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผลสะสม</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (3 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (5 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>

                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={5}>
                                            5. ร้อยละความพึงพอใจของผู้ประกอบการขนส่งทางราง ระบบรางในเรื่องการวิจัยเทคโนโลยีระบบราง
                                        </td>
                                        <td rowSpan={5}>
                                            ประเมินจากการดําเนินงานร่วมกับผู้ประกอบการ และผู้ต้องการใช้งานในการพัฒนาผลงานวิจัยร่วมกัน
                                        </td>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>
                                            เป้าหมาย
                                        </td>
                                        <td colSpan={3}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td colSpan={2}>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผล</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ผลสะสม</td>
                                        <td>ปี 2566</td>
                                        <td>ปี 2567</td>
                                        <td>ปี 2568</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (3 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ backgroundColor: '#F2F2F2' }}>ร้อยล่ะ (5 ปี)</td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>

                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card">
                                                &nbsp;
                                            </div>
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