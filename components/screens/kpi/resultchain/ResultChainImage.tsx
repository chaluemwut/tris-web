import HeaderContent from "../../../HeaderContent";
import { DonutPercentIconChart } from "../../../chartjs/DonutPercentIconChart";


export default function ResultChainIndexComponent() {
    const displayType1 = (d1: { txt1: string, txt2: string }, d2: { txt1: string, txt2: string }) => {
        return <div>
            <div className="row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <div className="col">
                    <div className="card" style={{ borderColor: '#40B2B7' }}>
                        <div className="card-header" style={{ backgroundColor: '#40B2B7', color: 'white', textAlign: 'center' }}>
                            {d1.txt1}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <span style={{ color: '#58585A' }}>{d1.txt2}</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ borderColor: '#505EB5' }}>
                        <div className="card-header" style={{ backgroundColor: '#505EB5', color: 'white', textAlign: 'center' }}>
                            {d1.txt1}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <span style={{ color: '#58585A' }}>{d1.txt2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    const donutIcon = () => {
        return <div>
            <div className="row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <div className="col">
                   <div style={{width: '70px', height: '70px'}}>
                    <DonutPercentIconChart color="rgb(90, 106, 206)" dataPercent={50}/>
                   </div>
                </div>
                {/* <div className="col">
                    <DonutPercentIconChart />
                </div> */}
            </div>
        </div>
    }

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="KPI" />
        <div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '10px',
                        marginBottom: '10px',
                        marginLeft: '20px',
                        marginRight: '20px'
                    }}>
                        <div>
                            <span style={{ color: '#29305B' }}>ตัวชี้วัดหลักของ สทร. สําหรับประเมินความคุ้มค่าตาม Result Chain</span>
                        </div>
                        <div>
                            <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white', borderRadius: '20px' }}>
                                รายละเอียดผล RC
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4">
                            <div className="card">
                                <div>
                                    มีผู้ประกอบการผู้ผลิตชิ้นส่วนสําคัญในระบบรางภายในประเทศที่ได้มาตรฐาน
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card">
                        {[
                            {
                                title: '3.ยุทธศาสตร์ด้านเทคโนโลยีระบบรางของสถาบันได้รับการนําไปใช้ในการกําหนดแผนและจัดสรรงบประมาณด้านเทคโนโลยีระบบรางของประเทศ',
                                fn: displayType1({ txt1: 'ได้รับการนําไปตามกลไก ข้อ 1 หรือ 2 หรือ 3 อย่างน้อยหนึ่งกลไก', txt2: 'เป้าหมาย 3 ปี (>= 1 กลไก)' }, { txt1: 'aa', txt2: 'เป้าหมาย 5 ปี (= 3 กลไก)' })
                            },
                            {
                                title: '4.จํานวนชิ้นส่วนและอุปกรณ์จากผลงานสทร. ที่สามารถผลิตภายในประเทศ(local content) และใช้งานจริงได้',
                                fn: displayType1({ txt1: '2 รายการ', txt2: 'เป้าหมาย 3 ปี (>= 1 รายการ)' }, { txt1: '5 รายการ', txt2: 'เป้าหมาย 5 ปี (>= 3 รายการ)' })
                            },
                            {
                                title: '5. ร้อยละความพึงพอใจของผู้ประกอบการขนส่งทางราง ระบบรางในเรื่องการวิจัยเทคโนโลยีระบบราง',
                                fn: donutIcon()
                            }
                        ].map((e) => <div className="row" style={{ marginLeft: '10px', marginRight: '10px' }}>
                            <div className="col-7">{e.title}</div>
                            <div className="col-5">{e.fn}</div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}