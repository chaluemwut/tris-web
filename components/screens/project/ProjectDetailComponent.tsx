import HeaderContent from "../../HeaderContent";
import projectHeaderImage from '../../../public/static/images/project_detail_header.png';
import Image from "next/image";

export default function ProjectDetailComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent />
        <div>
            <div className="row">
                <div>
                    <div className="card" style={{ marginLeft: '30px', marginRight: '30px', marginTop: '40px'}}>
                        <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                            <Image src={projectHeaderImage.src} alt="Project header" layout='fill' objectFit='cover' />
                        </div>
                        <div>
                            <div style={{ marginTop: '10px', marginLeft: '20px', marginRight: '20px' }}>
                                <div>
                                    <h4 style={{ color: '#29305B' }}>โครงการบริหารจัดการโครงสร้างระบบราง ECC</h4>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span style={{ color: '#58585A' }}>รหัสโครงการ : XXXXXXXXXXX</span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span style={{ color: '#58585A' }}>หัวหน้าโครงการ : Mikael Olsen | ตำแหน่ง xxxxxxxxxxxxxxxxxxxx</span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span style={{ color: '#58585A' }}>ผู้ประสานงาน : Declan Simpson | ตำแหน่ง xxxxxxxxxxxxxxxxxxxx</span>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBlock: '20px'}}>
                            <div>
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between',
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
                                    </div>
                                    <div>
                                        <button>cc</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}