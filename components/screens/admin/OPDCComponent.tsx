
export default function OPDCComponent() {

    const addBtn = () => {
        return <div>
            <div style={{ display: 'flex', width: '100%', marginLeft: '40px', marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ width: '30px', height: '30px', backgroundColor: '#E3E6F5', borderRadius: '50%' }}>
                    <center style={{ color: 'white', paddingTop: '2px' }}>
                        <i className="bi bi-plus-lg" style={{ color: '#5A6ACE' }}></i>
                    </center>
                </div>
                <div style={{ width: '100%', marginLeft: '10px', marginRight: '60px' }}>
                    <div style={{ border: '1px dashed #CFD2E7', borderRadius: '5px' }}>
                        <div style={{ marginTop: '5px', marginBottom: '5px', color: '#58585A' }}>
                            <center>
                                <span style={{ color: '#5A6ACE' }}>เพิ่มข้อมูลตัวชี้วัด</span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    const displayRow = (data: any) => {
        return <div>
            <div style={{ display: 'flex', width: '100%', marginLeft: '40px', marginTop: '20px', marginBottom: '20px' }}>
                <div style={{ width: '30px', height: '30px', backgroundColor: '#505EB5', borderRadius: '50%' }}>
                    <center style={{ color: 'white', paddingTop: '2px' }}>
                        {data.number}
                    </center>
                </div>
                <div style={{ width: '100%', marginLeft: '10px', marginRight: '60px' }}>
                    <div className="card">
                        <div style={{ marginTop: '5px', marginBottom: '5px', color: '#58585A' }}>{data.message}</div>
                    </div>
                </div>
            </div>
        </div>
    }

    return (<div>
        <div>
            <div style={{ marginLeft: '20px', paddingTop: '20px' }}>
                KPI สำนักงาน ก.พ.ร.
                <hr style={{ border: '1px solid #E0E0E0' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginLeft: '20px', marginBottom: '20px' }}>
                <span style={{ marginRight: '10px', color: '#58585A' }}>ปีงบประมาณ</span>
                <div style={{ border: '1px solid #505EB5', borderRadius: '5px', marginLeft: '5px' }}>
                    <div style={{
                        marginLeft: '10px', marginRight: '7px', marginTop: '7px',
                        marginBottom: '2px',
                    }}>
                        <i className="bi bi-calendar-check" style={{ color: '#505EB5' }}></i>
                        <select style={{ border: 'none', color: '#828282' }}>
                            <option >
                                ปี 2565
                            </option>
                        </select>
                    </div>
                </div>
                <button className="btn" style={{ backgroundColor: '#505EB5', color: 'white', marginLeft: '10px' }}>
                    เพิ่มปีงบประมาณ
                </button>
            </div>
            <div className="card" style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div style={{ marginTop: '5px', marginBottom: '5px', marginLeft: '3px' }}>
                    ตัวชี้วัด สำนักงาน ก.พ.ร.
                </div>
            </div>
            <div style={{ backgroundColor: '#505EB5', color: 'white', marginTop: '5px' }}>
                <div style={{ marginLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }}>องค์ประกอบที่ 1 การประเมินประสิทธิภาพ ประสิทธิผลของการดําเนินงาน</div>
            </div>
            {[{
                number: '1.1',
                message: 'ความสําเร็จของการจัดทํายุทธศาสตร์ด้านเทคโนโลยีระบบราง (ว1)'
            },
            {
                number: '1.2',
                message: 'จํานวนข้อเสนอเชิงนโยบายในการขับเคลื่อนการพัฒนาเทคโนโลยีและ'
            },
            {
                number: '1.3',
                message: 'จํานวนผลงานวิจัยตามความต้องการและเชื่อมโยงสู่ภาคอุตสาหกรรม'
            },
            {
                number: '1.4',
                message: 'จํานวนคู่มือมาตรฐานวิธีการทดสอบด้านระบบราง (ว3)'
            },
            {
                number: '1.5',
                message: 'ความสําเร็จของงานด้านการตรวจวัด วิเคราะห์ และทดสอบ ให้คําปรึกษาด้านผลิตภัณฑ์และงานด้านระบบราง (ว3)'
            },
            {
                number: '1.6',
                message: 'จํานวนหลักสูตรที่พัฒนาจากองค์ความรู้และเทคโนโลยีระบบราง(ว4 และ ว5)'
            },
            {
                number: '1.7',
                message: 'ความสําเร็จของการจัดทําแพลตฟอร์ม Rail Academy ด้านพัฒนาบุคลากรของภาคอุตสาหกรรม (ว5)'
            },
            {
                number: '1.8',
                message: 'ความสําเร็จของการจัดทําฐานข้อมูลเทคโนโลยีระบบรางที่ใช้ อ้างอิงระดับประเทศ (ว6)'
            },
            ].map((e) => displayRow(e))}
            {addBtn()}

            <div style={{ backgroundColor: '#505EB5', color: 'white', marginTop: '5px' }}>
                <div style={{ marginLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    องค์ประกอบที่ 2 การประเมินศักยภาพขององค์การมหาชน
                </div>
            </div>
            {[{
                number: '2.1',
                message: 'การพัฒนาองค์การสู่ดิจิทัล การปรับเปลี่ยนหน่วยงานไปสู่ความเป็นดิจิทัล (Digital Transformation)'
            },
            {
                number: '2.2',
                message: 'การประเมินสถานะของหน่วยงานภาครัฐในการเป็นระบบราชการ 4.0 (PMQA 4.0) 10'
            },
            {
                number: '2.3',
                message: 'การควบคุมดูแลกิจการของคณะกรรมการองค์การมหาชน'
            },
            ].map((e) => displayRow(e))}
            {addBtn()}
            <div>
                <div style={{ width: '100%', marginLeft: '40px', paddingRight: '60px', marginTop: '60px', paddingBottom: '40px' }}>
                    <div style={{ border: '1px dashed #CFD2E7', borderRadius: '5px' }}>
                        <div style={{ paddingTop: '5px', paddingBottom: '5px', color: '#58585A', backgroundColor: '#F7F7F9' }}>
                            <center>
                                <i className="bi bi-plus-lg" style={{ color: '#5A6ACE' }}></i>
                                <span style={{ color: '#5A6ACE', marginLeft: '5px' }}>เพิ่มข้อมูลตัวชี้วัด</span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'right', marginRight: '20px', paddingBottom: '30px' }}>
                <button className="btn" style={{ backgroundColor: '#F4694C', color: 'white' }}>
                    <i className="bi bi-pencil-square" style={{marginRight: '5px'}}></i>
                    Edit
                </button>
            </div>
        </div>
    </div>)
}