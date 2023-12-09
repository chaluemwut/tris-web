export default function HeaderContent() {
    return (<div style={{ backgroundColor: '#EEEFF3' }}>
        <div className="row" style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '30px' }}>
            <div className="col-2">
                <div className="row justify-content-center align-items-center">
                    <div className="col-4">
                        <i className="bi bi-list" style={{ fontSize: '25px', color: '#5A6ACE' }} />
                    </div>
                    <div className="col-8" style={{ textAlign: 'center', color: '#29305B' }}>
                        หน้าหลักระบบ
                    </div>
                </div>

            </div>
            <div className="col-6">
                <input className="form-control" type="text" placeholder="Search..." />
            </div>

            <div className="col-4">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="local-wrap col">
                                <i className="bi bi-bell-fill col port"
                                    style={{
                                        fontSize: '25px',
                                        marginRight: '10px',
                                        color: '#828282'
                                    }}></i>
                                <i className="bi bi-circle-fill fixed-circle" />
                                <i className="bi bi-1-circle-fill fixed" style={{
                                    fontSize: '15px',
                                    color: '#40B2B7',
                                }}></i>
                            </div>
                            <div className="local-wrap col">
                                <i className="bi bi-envelope-fill col port"
                                    style={{
                                        fontSize: '25px',
                                        marginRight: '10px',
                                        color: '#828282'
                                    }}></i>
                                <i className="bi bi-circle-fill fixed-circle" />
                                <i className="bi bi-1-circle-fill fixed" style={{
                                    fontSize: '15px',
                                    color: '#F4694C',
                                }}></i>
                            </div>
                            <div className="local-wrap col">
                                <i className="bi bi-calendar-fill col port"
                                    style={{
                                        fontSize: '25px',
                                        marginRight: '10px',
                                        color: '#828282'
                                    }}></i>
                                <i className="bi bi-circle-fill fixed-circle" />
                                <i className="bi bi-1-circle-fill fixed" style={{
                                    fontSize: '15px',
                                    color: '#5A6ACE',
                                }}></i>

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <i className="bi bi-person-circle col-2" style={{ fontSize: '25px' }}></i>
                            <div className="col-10">
                                <div>เจ้าหน้าที่</div>
                                <div>abc@xyz.com</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>)
}