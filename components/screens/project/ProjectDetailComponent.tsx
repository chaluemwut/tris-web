import HeaderContent from "../../HeaderContent";
import projectHeaderImage from '../../../public/static/images/project_detail_header.png';
import peopleCircle from '../../../public/static/images/people_circle_icon.svg';
import Image from "next/image";

export default function ProjectDetailComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent />
        <div>
            <div className="row">
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
                </div>

                <div>
                    <div className="card" style={{ marginLeft: '30px', marginRight: '30px', marginTop: '40px' }}>
                        <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>รายละเอียดโครงการ</div>
                                <div><i className="bi bi-pencil-square"></i></div>
                            </div>
                            <div>
                                <p style={{ marginLeft: '10px', marginTop: '10px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div>วัตถุประสงค์โครงการ</div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                                    minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliqui.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}