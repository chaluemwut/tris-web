import HeaderContent from "../../../HeaderContent";
import NonEditHeader from "../../../ui/NonEditHeader";
import progressBar1 from '../../../../public/static/images/progressbar1.svg'
import progressBar2 from '../../../../public/static/images/progressbar2.svg'
import Image from 'next/image'

export default function StrategicIndexComponent() {

    const rowDisplay = (dataList: {}[]) => {
        return dataList.map((e: any) => <div className="col-4" style={{ display: 'flex' }}>
            <i className={`bi bi-${e.num}-circle-fill primary-color`} style={{ fontSize: '25px' }}></i>
            <div className="card" style={{ marginLeft: '5px', width: '100%' }}>
                <span style={{ color: '#4F4F4F' }}>{e.title}</span>
            </div>
        </div>)
    }

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="KPI" />
        <div>
            <div className="card">
                <div style={{ marginLeft: '30px', marginRight: '30px', marginBottom: '20px' }}>
                    <div></div>
                    <div>
                        <span>
                            รายละเอียดยุทธศาตร์และแผนงาน กับวัตถุประสงค์การจัดตั้ง
                        </span>
                    </div>
                    <NonEditHeader title="วัตถุประสงค์การจัดตั้งองค์กร" />
                    <div className="row">
                        {rowDisplay([{ num: 1, title: "ยุทธศาสตร์ด้านเทคโนโลยีระบบราง" },
                        { num: 2, title: "วิจัยและพัฒนานวัตกรรม" },
                        { num: 3, title: "ศูนย์กลางในการรับ แลกเปลี่ยน และถ่ายทอดเทคโนโลยีระบบราง" }
                        ])}
                    </div>
                    <div className="row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                        {rowDisplay([{ num: 4, title: "พัฒนาบุคลากรด้านระบบราง" },
                        { num: 5, title: "พัฒนามาตรฐานและการทดสอบ" },
                        { num: 6, title: "ฐานข้อมูลด้านเทคโนโลยีระบบราง" }
                        ])}
                    </div>
                    <NonEditHeader title="แผนงาน 1" />
                    <div>
                        <span style={{ color: '#4F4F4F', marginLeft: '20px', marginRight: '20px' }}>
                            แผนแม่บทภายใต้ยุทธศาสตร์ชาติ (พ.ศ. 2561 - 2580) ประเด็น (07) โครงสร้างพื้นฐานระบบโลจิสติกส์ และดิจิทัลเป็นกลไกสําคัญในการขับเคลื่อนและพัฒนาโครงสร้าง พื้นฐานด้านคมนาคมและ ระบบโลจิสติก พลังงานและดิจิทัล เพื่อรองรับและสนับสนุนการสร้างขีดความสามารถในการพัฒนายกระดับขีดความสามารถด้านเศรษฐกิจและสังคม
                        </span>
                    </div>
                    <NonEditHeader title="ยุทธศาสตร์ที่เกี่ยวข้อง" />
                    <div className="row">
                        {rowDisplay([{ num: 1, title: "ศูนย์กลางองค์ความรู้ด้านเทคโนโลยีระบบราง" },
                        { num: 2, title: "เชื่อมโยงและยกระดับภาคอุตสาหกรรม" },
                        { num: 3, title: "พัฒนาทรัพยากรมนุษย์ด้านระบบราง" }
                        ])}
                    </div>
                    <div className="row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                        {rowDisplay([{ num: 4, title: "องค์กรแห่งการเรียนรู้ และบริหารจัดการตามหลักธรรมาภิบาล" }
                        ])}
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
                <table className="table">
                    <thead>
                        <tr>
                            <td style={{ backgroundColor: '#F7F7F9', color: '#505EB5' }}>
                                <span style={{ marginLeft: '20px' }}>รายชื่อโครงการที่เกี่ยวข้อง</span>
                            </td>
                            <td style={{ backgroundColor: '#F7F7F9' }}>
                                <button className="btn" style={{ backgroundColor: '#505EB5', color: 'white', borderRadius: '20px' }}>
                                    องค์ประกอบที่ 1
                                </button>
                            </td>
                            <td style={{ backgroundColor: '#F7F7F9' }}>
                                <button className="btn" style={{ backgroundColor: '#E6E9F8', color: '#505EB5', borderRadius: '20px' }}>
                                    องค์ประกอบที่ 2
                                </button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            'โครงการที่ 1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                            'โครงการที่ 2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                            'โครงการที่ 3 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                            'โครงการที่ 4 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                            'โครงการที่ 5 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                            'โครงการที่ 6 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                            'โครงการที่ 7 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        ].map((e) => <tr>
                            <td>
                                <span style={{ marginLeft: '20px' }}>{e}</span>
                            </td>
                            <td>
                                <Image src={progressBar1.src} alt="progress1" width={50} height={50} />
                            </td>
                            <td>
                                <Image src={progressBar2.src} alt="progress1" width={50} height={50} />
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}