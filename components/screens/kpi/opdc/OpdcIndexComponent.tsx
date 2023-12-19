import HeaderContent from "../../../HeaderContent";
import { BarChart } from "../../../chartjs/BarChart";
import progressBar3 from '../../../../public/static/images/progressbar3.svg'
import Image from "next/image";

export default function OpdcIndexComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="KPI" />
        <div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'right' }}>
                    <select>
                        <option>ปี 2566</option>
                    </select>
                    <select>
                        <option>
                            แผนงาน
                        </option>
                    </select>
                    <button>Search</button>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-8">
                        <div className="card">
                            <div>
                                <small>กรอบการประเมินองค์การมหาชน ประจำปีงบประมาณ พ.ศ. 2567</small>
                            </div>
                            <div>
                                <span>องค์ประกอบที่ 1 การประเมินประสิทธิภาพ ประสิทธิผลของการดําเนินงาน</span>
                            </div>
                            <div>
                                <BarChart labels={['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8']}
                                    datasets={[
                                        {
                                            // label: 'Dataset 1',
                                            data: [10, 20, 1, 3, 4, 5, 6, 3],
                                            backgroundColor: '#505EB5',
                                        },
                                    ]} />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div>
                                <small>
                                    กรอบการประเมินองค์การมหาชน ประจำปีงบประมาณ พ.ศ. 2567
                                </small>
                            </div>
                            <div>
                                <span>
                                    องค์ประกอบที่ 2 การประเมินศักยภาพขององค์การมหาชน
                                </span>
                            </div>
                            <div>
                                <BarChart labels={['2.1', '2.2', '2.3']}
                                    datasets={[
                                        {
                                            data: [10, 39, 20],
                                            backgroundColor: '#40B2B7',
                                        },
                                    ]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card">
                    <div>ผลการดำเนินงานรายตัวชี้วัด</div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td style={{ backgroundColor: '#505EB5', color: 'white' }}>
                                        <span style={{ marginLeft: '5px', marginRight: '5px' }}>
                                            องค์ประกอบที่ 1 การประเมินประสิทธิภาพ ประสิทธิผลของการดําเนินงาน
                                        </span>
                                    </td>
                                    <td style={{ backgroundColor: '#505EB5', color: 'white' }}></td>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    '1.1. ความสําเร็จของการจัดทํายุทธศาสตร์ด้านเทคโนโลยีระบบราง (ว1)',
                                    '1.2. จํานวนข้อเสนอเชิงนโยบายในการขับเคลื่อนการพัฒนาเทคโนโลยีและ',
                                    '1.3 จํานวนผลงานวิจัยตามความต้องการและเชื่อมโยงสู่ภาคอุตสาหกรรม',
                                    '1.4 จํานวนคู่มือมาตรฐานวิธีการทดสอบด้านระบบราง (ว3)',
                                    '1.5 ความสําเร็จของงานด้านการตรวจวัด วิเคราะห์ และทดสอบ ให้คําปรึกษาด้านผลิตภัณฑ์และงานด้านระบบราง (ว3)',
                                    '1.6 จํานวนหลักสูตรที่พัฒนาจากองค์ความรู้และเทคโนโลยีระบบราง(ว4 และ ว5)',
                                    '1.7. ความสําเร็จของการจัดทําแพลตฟอร์ม Rail Academy ด้านพัฒนาบุคลากรของภาคอุตสาหกรรม (ว5)',
                                    '1.8 ความสําเร็จของการจัดทําฐานข้อมูลเทคโนโลยีระบบรางที่ใช้ อ้างอิงระดับประเทศ (ว6)',
                                ].map((e) => <tr>
                                    <td>{e}</td>
                                    <td>
                                        <Image src={progressBar3.src} width={50} height={50} alt="graph" />
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}