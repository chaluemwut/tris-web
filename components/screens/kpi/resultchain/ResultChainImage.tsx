import HeaderContent from "../../../HeaderContent";

export default function ResultChainIndexComponent() {
    const displayType1 = () => {
        return <div>
            <div className="row">
                <div>
                    <button>aa</button>
                </div>
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
                    <div className="row">
                        <table className="table">                            
                            {[
                                {
                                    title: '3.ยุทธศาสตร์ด้านเทคโนโลยีระบบรางของสถาบันได้รับการนําไปใช้ในการกําหนดแผนและจัดสรรงบประมาณด้านเทคโนโลยีระบบรางของประเทศ',
                                    fn: displayType1()
                                },
                                {
                                    title: '4.จํานวนชิ้นส่วนและอุปกรณ์จากผลงานสทร. ที่สามารถผลิตภายในประเทศ(local content) และใช้งานจริงได้',
                                    fn: displayType1()
                                }
                            ].map((e) => <tr>
                                <td>{e.title}</td>
                                <td>{e.fn}</td>
                            </tr>
                            )}
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>)
}