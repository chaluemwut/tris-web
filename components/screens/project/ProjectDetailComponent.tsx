import HeaderContent from "../../HeaderContent";
import projectHeaderImage from '../../../public/static/images/project_detail_header.png';
import dummyP1 from '../../../public/static/images/dummy_p1.png';
import dummyP2 from '../../../public/static/images/dummy_p2.png';
import dummyP3 from '../../../public/static/images/dummy_p3.png';
import dummyP4 from '../../../public/static/images/dummy_p4.png';
import map from '../../../public/static/images/map.png';
import pointGrid from '../../../public/static/images/point_grid.png';
import peopleCircle from '../../../public/static/images/people_circle_icon.svg';
import Image from "next/image";
import HeaderDetail from "./detail/HeaderDetail";
import TopicHeader from "./detail/TopicHeader";
import AccordingContent from "./detail/AccordingContent";
import Table from "./detail/Table";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListContent from "./detail/ListContent";
import CardName from "./detail/CardName";
import TwoColumnData from "./detail/TwoColumnData";
import ProjectNameHeader from "./detail/ProjectNameHeader";

export default function ProjectDetailComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent />
        <div>
            <div className="row">
                <ProjectNameHeader/>
                {/* <div>
                    <div className="card" style={{ marginLeft: '30px', marginRight: '30px', marginTop: '40px' }}>
                        <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                            <Image src={projectHeaderImage.src} alt="Project header" layout='fill' objectFit='cover' />
                        </div>
                        <div>
                            <div style={{ marginTop: '10px', marginLeft: '20px', marginRight: '20px' }}>
                                <div>
                                    <h4 style={{ color: '#29305B' }}>โครงการบริหารจัดการโครงสร้างระบบราง ECC</h4>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span style={{ color: '#58585A' }}>รหัสโครงการ : RTR001</span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span style={{ color: '#58585A' }}>หัวหน้าโครงการ : นายสมบัติ นามสมมฒิ | ตำแหน่ง รองศาสตราจารย์</span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span style={{ color: '#58585A' }}>ผู้ประสานงาน : นางสาวปรางมณี ทดสอบ | ตำแหน่ง นักวิเคราะห์นโยบายและแผน</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginBlock: '20px' }}>
                            <div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginLeft: '20px', marginRight: '20px'
                                }}>
                                    <div>
                                        <button className="btn primary-color-bg" style={{ borderRadius: '60px' }}>
                                            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                New<i className="bi bi-caret-down-fill" style={{ marginLeft: '5px' }}></i>
                                            </div>
                                        </button>
                                        <button className="btn" style={{
                                            backgroundColor: '#5A6ACE',
                                            borderRadius: '60px',
                                            opacity: '65%',
                                            marginLeft: '10px'
                                        }}>
                                            <div>
                                                Invite People <i className="bi bi-person-plus-fill"></i>
                                            </div>
                                        </button>
                                        <button className="btn buttom-radius" style={{ marginLeft: '10px' }}>
                                            <div className="inner-bottom">Private</div>
                                        </button>
                                        <button className="btn buttom-radius" style={{ marginLeft: '10px' }}>
                                            <div className="inner-bottom">Project Card</div>
                                        </button>
                                        <button className="btn buttom-radius" style={{ marginLeft: '10px' }}>
                                            <div className="inner-bottom">Gantt Chart</div>
                                        </button>
                                        <button className="btn buttom-radius" style={{ marginLeft: '10px' }}>
                                            <div className="inner-bottom">
                                                <i className="bi bi-chat-left-text-fill" style={{ color: '#5A6ACE' }}></i>
                                                <span style={{ marginLeft: '5px' }}>45 Comments</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <Image src={peopleCircle.src} width={100} height={100} alt="people" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div>
                    <div className="card" style={{ marginLeft: '30px', marginRight: '30px', marginTop: '40px' }}>
                        <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h3>รายละเอียดโครงการ</h3>
                                </div>
                                <div><i className="bi bi-pencil-square"></i></div>
                            </div>
                            <div>
                                <p style={{ marginLeft: '10px', marginTop: '10px' }}>
                                    สทร. มุ่งหวังให้เกิดการวางรากฐานการปฏิบัติงานและการบริหารจัดการที่เป็นระบบ เชื่อมโยงกันทั้งในระดับโครงการ/แผนงาน สู่องค์กรผ่านการบูรณาการข้อมูลการปฏิบัติงานด้วยระบบเทคโนโลยี สารสนเทศ ดังนั้น เพื่อให้การบริหารงานของ สทร. สอดคล้องกับยุทธศาสตรชาติที่มีการนําเทคโนโลยีดิจิทัลมาประยุกต์ใช้โดยให้มีการติดตามและมีการประเมินผลที่เป็นระบบอย่างต่อเนื่อง และส่งผลให้การบริหารงานเป็นไปด้วยความโปร่งใสและเป็นธรรมจึงมีแนวคิดในการจัดทําโครงการพัฒนา ระบบเทคโนโลยีสารสนเทศเพื่อการติดตามและรายงานผลการปฏิบัติงานของ สทร.
                                </p>
                                <div>
                                    <i className="bi bi-circle-fill" style={{ marginRight: '5px', fontSize: '10px' }}></i>
                                    วัตถุประสงค์โครงการ
                                </div>
                                <div>1) ออกแบบและพัฒนาระบบเทคโนโลยีสารสนเทศเพื่อการติดตามและรายงานผลการปฏิบัติงานของสถาบันวิจัยและพัฒนาเทคโนโลยีระบบราง (องคการมหาชน) ตามแนวทางห่วงโซ่การดําเนินงาน
                                    (Result Chain) สําหรับการประเมินความคุมค่าเพื่อพัฒนาองคการมหาชน ใหสามารถติดตามโครงการในมิติต่าง ๆ และตัวชี้วัดที่กําหนด
                                </div>
                                <div>2) เพื่อพัฒนาระบบสารสนเทศที่สามารถติดตาม ประเมินและรายงานผลการดําเนินงาน/ความกาวหนาของโครงการวิจัยและพัฒนาฯ</div>
                                <div>3) เพื่ออํานวยความสะดวกในการจัดทําแผนงานโครงการ การติดตามความก้าวหน้าโครงการการรายงานผลการดําเนินงาน การประเมินผลงานตามตัวชี้วัด แผนงานโครงการ ตามประเภทงานต่าง ๆ</div>
                                <div>4) เพื่อให้กรรมการและผูบริหารสถาบันฯ สามารถติดตามความกาวหนาของแผนงาน/โครงการตามตัวชี้วัด</div>
                                <div>5) จัดทําคู่มือการใช้งานระบบติดตามและรายงานผลการปฏิบัติงานที่พัฒนาขึ้น โดยระบุขั้นตอนและวิธีการใช้งานระบบ สําหรับผู้ใช้งานในส่วนต่าง ๆ รวมทั้งการดูแลระบบสําหรับผูดูแลระบบ</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="ความสอดคล้อง และความเชื่อมโยง" />

                            <AccordingContent title="วัตถุประสงค์การจัดตั้งองค์กร" />

                            <TopicHeader title="แผนระดับ 1" />
                            <p style={{ color: '#4F4F4F', marginLeft: '20px' }}>
                                ยุทธศาสตรชาติ ระยะ 20 ปี (พ.ศ. 2561 - 2580) มีเป้าหมายการพัฒนาประเทศ คือ ประเทศชาติมั่นคง ประชาชนมีความสุข เศรษฐกิจพัฒนาอย่างต่อเนื่อง สังคมเป็นธรรมฐานทรัพยากรธรรมชาติยั่งยืน โดยยกระดับศักยภาพของประเทศในหลากหลายมิติ
                            </p>

                            <TopicHeader title="แผนระดับ 2" />
                            <p style={{ color: '#4F4F4F', marginLeft: '20px' }}>
                                แผนแม่บทภายใต้ยุทธศาสตร์ชาติ (พ.ศ. 2561 - 2580) ประเด็น (07) โครงสร้างพื้นฐานระบบโลจิสติกส์ และดิจิทัลเป็นกลไกสําคัญในการขับเคลื่อนและพัฒนาโครงสร้าง พื้นฐานด้านคมนาคมและ ระบบโลจิสติก พลังงานและดิจิทัล เพื่อรองรับและสนับสนุนการสร้างขีดความสามารถในการพัฒนายกระดับขีดความสามารถด้านเศรษฐกิจและสังคม
                            </p>

                            <AccordingContent title="ยุทธศาสตร์ สทร. 2566 - 2571" />

                            <AccordingContent title="แผนงานหลักที่เกี่ยวข้อง" />

                            <TopicHeader title="นโยบายและข้อสั่งการเพิ่มเติม" />
                            <p style={{ color: '#4F4F4F', marginLeft: '20px' }}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="กลุ่มเป้าหมาย" />
                            <p className="inner-content-p">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim adminima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliqui.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="หน่วยงานผู้รับผิดชอบ" />

                            <div style={{ marginTop: '10px' }}>
                                <div className="alert" style={{ backgroundColor: '#E6E9F8', color: '#29305B' }}>
                                    <span>หน่วยงานความร่วมมือ</span>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img width={'100%'} src={dummyP1.src} alt="d" />
                                </div>
                            </div>

                            <div style={{ marginTop: '10px' }}>
                                <div className="alert" style={{ backgroundColor: '#E6E9F8', color: '#29305B' }}>
                                    <span>หน่วยงานสนับสนุน</span>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img width={'80%'} src={dummyP2.src} alt="d" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="งบประมาณโครงการ" />
                            <div>
                                <p style={{ marginLeft: '10px', color: '#4F4F4F' }}>250,000,000  THB</p>
                            </div>
                            <hr className="horizontal-line" />
                            <div>
                                <i className="bi bi-circle-fill" style={{ marginRight: '5px', fontSize: '10px' }}></i>
                                <span style={{ color: '#29305B' }}>
                                    แหล่งที่มาของงบประมาณ
                                </span>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                        <i className={`bi bi-1-circle-fill primary-color`} style={{ fontSize: '25px', marginRight: '5px' }}></i>
                                        งบประมาณรายจ่ายประจำปี
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                        <i className={`bi bi-2-circle-fill primary-color`} style={{ fontSize: '25px', marginRight: '5px' }}></i>
                                        เงินนอกงบประมาณ
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                                        <i className={`bi bi-3-circle-fill primary-color`} style={{ fontSize: '25px', marginRight: '5px' }}></i>
                                        อื่นๆ
                                    </div>
                                    <hr className="horizontal-line" />
                                </div>
                                <div>
                                    <i className="bi bi-circle-fill" style={{ marginRight: '5px', fontSize: '10px' }}></i>
                                    <span style={{ color: '#29305B' }}>
                                        ช่วงระยะเวลาดำเนินโครงการ
                                    </span>
                                    <div>
                                        <div className="row" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                            <div className="col-3">วันที่ได้รับอนุมัติ</div>
                                            <div className="col-3">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    <div className="input-group-append">
                                                        <i className="bi bi-calendar3 input-group-text" style={{ height: '100%' }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">วันที่เริ่มโครงการ</div>
                                            <div className="col-3">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    <div className="input-group-append">
                                                        <i className="bi bi-calendar3 input-group-text" style={{ height: '100%' }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                            <div className="col-3">วันสิ้นสุดฯ</div>
                                            <div className="col-3">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    <div className="input-group-append">
                                                        <i className="bi bi-calendar3 input-group-text" style={{ height: '100%' }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">วันที่จัดสรรฯ</div>
                                            <div className="col-3">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    <div className="input-group-append">
                                                        <i className="bi bi-calendar3 input-group-text" style={{ height: '100%' }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="horizontal-line" />
                                </div>
                            </div>
                            <div>
                                <i className="bi bi-circle-fill" style={{ marginRight: '5px', fontSize: '10px' }}></i>
                                <span style={{ color: '#29305B' }}>
                                    อื่น ๆ
                                </span>
                                <p style={{ marginLeft: '10px', color: '#4F4F4F' }}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim adminima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliqui.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="ตัวชี้วัดรายโครงการ" />

                            <div>
                                <div>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <button className="btn" style={{ backgroundColor: '#505EB5', color: 'white' }}>
                                            ตัวชี้วัดผลผลิต (Output)
                                        </button>
                                        <button className="btn" style={{ color: '#29305B', backgroundColor: '#EEEFF3', marginLeft: '5px' }}>ตัวชี้วัดผลลัพธ์ (Outcome)</button>
                                        <button className="btn" style={{ color: '#29305B', backgroundColor: '#EEEFF3', marginLeft: '5px' }}>ตัวชี้วัดผลกระทบ (Impact)</button>
                                    </div>
                                </div>
                                <div>
                                    <Table titleHeader={['ตัวชี้วัด', 'ค่าเป้าหมาย', 'ผลการดำเนินงาน', 'ร้อยละของผลการดำเนินงาน เทียบกับค่าเป้าหมาย', 'หมายเหตุ']} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="กิจกรรมสำคัญในโครงการ (Activities)" />
                        </div>
                        <div style={{ marginLeft: '20px', marginRight: '10px' }}>
                            <Table titleHeader={['แผนดำเนินงาน', 'น้ำหนัก', 'ผลการดำเนินงาน', 'ร้อยละของผลการดำเนินงาน เทียบกับแผนการดำเนินงาน', 'หมายเหตุ', 'เอกสารที่เกี่ยวข้อง']} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="ผลการเบิกจ่าย" />
                        </div>
                        <div style={{ marginLeft: '20px', marginRight: '10px' }}>
                            <Table titleHeader={['วงเงินที่ได้รับการอนุมัติ', 'ผลการเบิกจ่าย', 'ร้อยละผลการเบิกจ่ายต่อ วงเงินที่ได้รับการอนุมัติ', 'หมายเหตุ']} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="สถานะโครงการ" />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                                <div>
                                    <select>
                                        <option>เปิดโครงการ</option>
                                        <option>อยู่ระหว่างดำเนินการ</option>
                                        <option>ระงับชั่วคราว</option>
                                        <option>ยกเลิกโครงการ</option>
                                        <option>ดำเนินการแล้วเสร็จ</option>
                                    </select>
                                </div>
                                <div>
                                    ลงนามสัญญาและบันทึกข้อตกลงเป็นที่เรียบร้อย
                                </div>
                                <div>
                                    <div>
                                        <span style={{ color: '#29305B' }}>Total Progress 30%</span>
                                    </div>
                                    <div>
                                        <ProgressBar color="5A6ACE" style={{ width: '300px' }} now={80} label='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="ความเสียงปัญหาและอุปสรรค" />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <ListContent data={[
                                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
                                `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `,
                                `Ut enim adminima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliqui.`
                            ]} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="ข้อสังเกต และข้อเสนอแนะ" />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <ListContent data={[
                                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
                                `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `,
                                `Ut enim adminima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliqui.`
                            ]} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="องค์ความรู้จากการดำเนินโครงการ" />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <ListContent data={[
                                `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
                                `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `
                            ]} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="ผู้รับผิดชอบโครงการจาก สทร." />
                        </div>
                        <div className="row" style={{ marginBottom: '10px' }}>
                            <div className="col-6">
                                <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                                    <CardName />
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                                    <CardName />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <HeaderDetail title="รายละเอียดตัวชี้วัด" />
                        </div>
                        <div>
                            <div className="alert" style={{
                                backgroundColor: '#E6E9F8',
                                color: '#29305B', alignItems: 'center',
                                display: 'flex',
                                marginLeft: '20px',
                                marginRight: '20px',
                                paddingTop: '10px',
                                paddingBottom: '10px'
                            }}>
                                <i className="bi bi-circle-fill" style={{ fontSize: '7px', marginRight: '5px' }}></i>
                                <small>ตัวชี้วัดกระทรวงคมนาคม</small>
                            </div>
                        </div>
                        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                            <TwoColumnData rowNumber={2} />
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <div className="alert" style={{
                                backgroundColor: '#E6E9F8',
                                color: '#29305B', alignItems: 'center',
                                display: 'flex',
                                marginLeft: '20px',
                                marginRight: '20px',
                                paddingTop: '10px',
                                paddingBottom: '10px'
                            }}>
                                <i className="bi bi-circle-fill" style={{ fontSize: '7px', marginRight: '5px' }}></i>
                                <small>ตัวชี้วัดแผนยุทธศาสตร์ สทร.</small>
                            </div>
                        </div>
                        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                            <TwoColumnData rowNumber={2} />
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <div className="alert" style={{
                                backgroundColor: '#E6E9F8',
                                color: '#29305B', alignItems: 'center',
                                display: 'flex',
                                marginLeft: '20px',
                                marginRight: '20px',
                                paddingTop: '10px',
                                paddingBottom: '10px'
                            }}>
                                <i className="bi bi-circle-fill" style={{ fontSize: '7px', marginRight: '5px' }}></i>
                                <small>ตัวชี้วัดของสำนักงาน ก.พ.ร.</small>
                            </div>
                        </div>
                        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                            <div className="alert" style={{ backgroundColor: '#F3F3F3' }}>
                                องค์ประกอบที่ 1 การประเมินประสิทธิภาพ ประสิทธิผลของการดําเนินงาน
                            </div>
                            <TwoColumnData rowNumber={4} />
                            <div className="alert" style={{ backgroundColor: '#F3F3F3' }}>
                                องค์ประกอบที่ 2 การประเมินศักยภาพขององค์การมหาชน
                            </div>
                            <TwoColumnData rowNumber={2} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <i className="bi bi-circle-fill" style={{ marginRight: '5px', fontSize: '10px' }}></i>
                                        <span style={{ color: '#29305B' }}>
                                            ภาพถ่ายและพิกัดโครงการ
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <span>ช่วงระยะเวลา</span>
                                        <select className="form-control">
                                            <option>29 ก.ย. 2566  -  15 ต.ค. 2566</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <img src={pointGrid.src} width={'100%'} />
                            </div>
                            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                                <img src={map.src} width={'100%'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card detail-card-content">
                        <div className="inner-detail-card-content">
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <i className="bi bi-circle-fill" style={{ marginRight: '5px', fontSize: '10px' }}></i>
                                        <span style={{ color: '#29305B' }}>
                                            ความเห็นของคณะกรรมการ คณะอนุกรรมการ ผู้บริหาร สทร.
                                        </span>
                                    </div>
                                    <div>
                                        <select style={{ color: '#5A6ACE', backgroundColor: 'rgb(90, 106, 206, 0.15)', borderRadius: '5px', border: 'none', height: '35px' }}>
                                            <option>Newest Comment</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={dummyP3.src} width={'100%'} />
                                <img src={dummyP4.src} width={'100%'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}