import Image from "next/image";
import projectHeaderImage from '../../../../public/static/images/project_detail_header.png';
import peopleCircle from '../../../../public/static/images/people_circle_icon.svg';

export default function ProjectNameHeader() {
    return (<div>
        <div>
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
                                    <div className="inner-bottom">
                                        <a className="link-header-btn-header-project" href="/project/project-card">Project Card</a>
                                    </div>
                                </button>
                                <button className="btn buttom-radius" style={{ marginLeft: '10px' }}>
                                    <div className="inner-bottom">
                                        <a className="link-header-btn-header-project" href="/project/grantt-chart">Gantt Chart</a>
                                    </div>
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
        </div>
    </div>)
}