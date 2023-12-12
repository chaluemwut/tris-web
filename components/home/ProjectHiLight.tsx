import headerIcon from '../../public/static/images/hilight_header_icon.svg'
import leftIcon from '../../public/static/images/hilight_left_icon.svg'
import hilightLoad1 from '../../public/static/images/hilight_load_1.svg'
import hilightLoad2 from '../../public/static/images/hilight_load_2.svg'
import Image from 'next/image'

type ProjectHiLightProps = {
    headerLabel: string
}

export default function ProjectHiLight(projectProps: ProjectHiLightProps) {
    return (<div>
        <div className="row" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
            <div>
                <div className="card">
                    <div style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        <div>
                            {projectProps.headerLabel}
                        </div>
                        <div>
                            <span style={{ color: '#BDBDBD' }}>Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexGrow: 4,
                        marginRight: '40px',
                        marginLeft: '10px',
                        marginBottom: '10px'
                    }}>
                        {[1, 1, 1, 1].map((e) => <div className="card col-3" style={{ marginRight: '10px' }}>
                            <div>
                                <div style={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Image src={headerIcon.src} alt='icon' height={50} width={50} />
                                        </div>
                                        <div>
                                            <Image src={leftIcon.src} alt='icon' height={20} width={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <span>Design Dashboard Management Restaurant - Singapore</span>
                                    </div>
                                    <div>
                                        <button className='btn' style={{ backgroundColor: '#40B2B7', opacity: '60%' }}>
                                            <span style={{ color: 'white' }}>วิจัยและพัฒนา</span>
                                        </button>
                                        <button className='btn' style={{ backgroundColor: '#F2994A', opacity: '60%', marginLeft: '5px' }}>
                                            <span style={{ color: 'white' }}>ระบบราง</span>
                                        </button>
                                    </div>
                                    <div>
                                        <Image src={hilightLoad1.src} alt='icon' height={10} width={230} />
                                        <Image src={hilightLoad2.src} alt='icon' height={10} width={230} />
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <small style={{ fontWeight: 'bold', color: '#29305B' }}>
                                                12
                                                <small style={{ fontWeight: 'normal', marginLeft: '5px' }}>Task Done</small>
                                            </small>
                                        </div>
                                        <div>
                                            <small style={{ color: '#828282' }}>Due date: 12/05/2020</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    </div>)
}