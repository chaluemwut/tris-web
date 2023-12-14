import TopicHeader from "./TopicHeader";

type TitleData = {
    title: string
}

export default function AccordingContent(titleData: TitleData) {
    return (<div>
        <TopicHeader title={titleData.title} />
        <div className="row">
            {['ยุทธศาสตร์ด้านเทคโนโลยีระบบราง',
                'วิจัยและพัฒนานวัตกรรม',
                'ศูนย์กลางในการรับ แลกเปลี่ยน และถ่ายทอดเทคโนโลยีระบบราง'
            ].map((e, index) => <div className="col-4" style={{ display: 'flex' }}>
                <i className={`bi bi-${index + 1}-circle-fill primary-color`} style={{ fontSize: '25px' }}></i>
                <div className="card" style={{ border: '1px solid #F2F2F2' }}>
                    <div style={{ marginRight: '10px' }}>
                        {e}
                    </div>
                </div>
            </div>)}
        </div>
        <hr className="horizontal-line" />
        <div className="row">
            {['พัฒนาบุคลากรด้านระบบราง',
                'พัฒนามาตรฐานและการทดสอบ',
                'ฐานข้อมูลด้านเทคโนโลยีระบบราง'
            ].map((e, index) => <div className="col-4" style={{ display: 'flex' }}>
                <i className={`bi bi-${index + 3}-circle-fill primary-color`} style={{ fontSize: '25px' }}></i>
                <div className="card" style={{ border: '1px solid #F2F2F2' }}>
                    <div style={{ marginRight: '10px' }}>
                        {e}
                    </div>
                </div>
            </div>)}
        </div>
        <hr className="horizontal-line" />
        <div className="row">
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div><i className="bi bi-plus-circle-fill" style={{
                        fontSize: '25px',
                        color: '#E3E6F5'
                    }}></i></div>
                    <div className="btn" style={{ border: '1px dashed #CFD2E7', marginLeft: '5px' }}>
                        <span style={{ marginLeft: '40px', marginRight: '40px' }}>เพิ่มข้อมูล</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}