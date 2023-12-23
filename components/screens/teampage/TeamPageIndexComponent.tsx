import Image from "next/image";
import HeaderContent from "../../HeaderContent";
import displayListIcon from '../../../public/static/images/display_list_icon.svg';
import displayGridIcon from '../../../public/static/images/display_grid_icon.svg';
import teamContentIcon from '../../../public/static/images/team_content_icon.svg';
import userProfileIcon from '../../../public/static/images/teampage_profile_icon.svg';
import phoneCircleIcon from '../../../public/static/images/phone_circle_icon.svg';
import emailCircleIcon from '../../../public/static/images/email_circle_icon.svg';
import headerIcon1 from '../../../public/static/images/teampage_header_1_icon.svg';
import headerIcon2 from '../../../public/static/images/teampage_header_2_icon.svg';
import headerIcon3 from '../../../public/static/images/teampage_header_3_icon.svg';
import headerIcon4 from '../../../public/static/images/teampage_header_4_icon.svg';
import emailCircleIcon2 from '../../../public/static/images/email_circle_icon_2.svg';
import emailCircleIcon3 from '../../../public/static/images/email_circle_icon_3.svg';
import emailCircleIcon4 from '../../../public/static/images/email_circle_icon_4.svg';
import phoneCircleIcon2 from '../../../public/static/images/phone_circle_icon_2.svg';
import phoneCircleIcon3 from '../../../public/static/images/phone_circle_icon_3.svg';
import phoneCircleIcon4 from '../../../public/static/images/phone_circle_icon_4.svg';
import pagingIcon from '../../../public/static/images/pagination.svg';

export default function TeamPageIndexComponent() {

    const getBgColorByType = (type: Type, opacity: number) => {
        if (type == Type.First) {
            return `rgb(90, 106, 206, ${opacity})`
        } else if (type == Type.Second) {
            return `rgb(64, 178, 183, ${opacity})`
        } else if (type == Type.Third) {
            return `rgb(244, 105, 76, ${opacity})`
        } else {
            return `rgb(90, 106, 206, ${opacity})`
        }
    }

    const getHeaderIcon = (type: Type) => {
        if (type == Type.First) {
            return <Image src={headerIcon1.src} alt="icon" width={20} height={20} />
        } else if (type == Type.Second) {
            return <Image src={headerIcon2.src} alt="icon" width={20} height={20} />
        } else if (type == Type.Third) {
            return <Image src={headerIcon3.src} alt="icon" width={20} height={20} />
        } else {
            return <Image src={headerIcon4.src} alt="icon" width={20} height={20} />
        }
    }

    const getPhoneIcon = (type: Type) => {
        if (type == Type.First) {
            return <Image src={phoneCircleIcon.src} alt="icon" width={25} height={25} />
        } else if (type == Type.Second) {
            return <Image src={phoneCircleIcon2.src} alt="icon" width={25} height={25} />
        } else if (type == Type.Third) {
            return <Image src={phoneCircleIcon3.src} alt="icon" width={25} height={25} />
        } else {
            return <Image src={phoneCircleIcon4.src} alt="icon" width={25} height={25} />
        }
    }

    const getEmailIcon = (type: Type) => {
        if (type == Type.First) {
            return <Image src={emailCircleIcon.src} alt="icon" width={25} height={25} />
        } else if (type == Type.Second) {
            return <Image src={emailCircleIcon2.src} alt="icon" width={25} height={25} />
        } else if (type == Type.Third) {
            return <Image src={emailCircleIcon3.src} alt="icon" width={25} height={25} />
        } else {
            return <Image src={emailCircleIcon4.src} alt="icon" width={25} height={25} />
        }
    }

    const displayContent = (data: any[], type: Type) => {
        return <div className="col-3">
            <div className="card">
                <div style={{
                    marginTop: '10px',
                    marginLeft: '20px',
                    marginRight: '20px',
                    marginBottom: '10px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <button className="btn" style={{ backgroundColor: getBgColorByType(type, 0.15) }}>
                                <span style={{ color: getBgColorByType(type, 1), marginRight: '10px' }}>{data[0]}</span>
                                {getHeaderIcon(type)}
                            </button>
                        </div>
                        <div>
                            <Image src={teamContentIcon.src} width={20} height={20} alt="icon" />
                        </div>
                    </div>
                    <div>
                        <div style={{ marginTop: '20px' }}>
                            <center>
                                <div>
                                    <Image src={userProfileIcon.src} alt="profile" width={120} height={120} />
                                </div>
                            </center>
                        </div>
                    </div>
                    <center>
                        <div style={{ marginTop: '10px' }}>
                            {data[1]}
                        </div>
                        <div style={{ marginTop: '5px' }}>
                            <small style={{ color: '#717579' }}>{data[2]}</small>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                                <button type="button"
                                    className="btn btn-outline-primary"
                                    style={{ width: '100%', borderColor: getBgColorByType(type, 0.15) }}>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            {getPhoneIcon(type)}
                                        </div>
                                        <div>
                                            <span style={{ color: '#29305B', marginLeft: '10px' }}>+12 345 6789 0</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                                <button type="button"
                                    className="btn btn-outline-primary"
                                    style={{ width: '100%', borderColor: getBgColorByType(type, 0.15) }}>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            {getEmailIcon(type)}
                                        </div>
                                        <div>
                                            <span style={{ color: '#29305B', marginLeft: '10px' }}>
                                                {data[3]}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    }

    enum Type {
        First,
        Second,
        Third,
        Fourth
    }

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="Team Page" />
        <div style={{ marginLeft: '40px', marginRight: '40px', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white', borderRadius: '30px' }}>
                        <i className="bi bi-plus-lg"></i>New Contact</button>
                </div>
                <div>
                    <Image src={displayListIcon.src} alt="list" width={40} height={40} />
                    <Image src={displayGridIcon.src} alt="list" width={40} height={40} />
                </div>
            </div>
        </div>
        <div>
            <div>
                <div className="row" style={{ marginTop: '20px' }}>
                    {[
                        {
                            data: ['Peterdraw Studio',
                                'Ari Fianto',
                                '@fiantoarii',
                                'fiantoarii@mail.coz'
                            ], type: Type.First
                        },
                        {
                            data: ['Letterdrawn Studio',
                                'Sarah Klaxon',
                                '@klaxon_rah',
                                'sarah_klax@mail.coz'
                            ], type: Type.Second
                        },
                        {
                            data: ['Slaby Studio',
                                'Hafid Nurohman',
                                '@hafid_nur',
                                'hafid_nur@mail.coz'
                            ], type: Type.Third
                        },
                        {
                            data: ['Upsnow Studio',
                                'Bilal Batson',
                                '@bills_bats',
                                'billbatson@mail.coz'
                            ], type: Type.Fourth
                        },

                    ].map((e) => displayContent(e['data'], e['type']))}
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    {[
                        {
                            data: ['Badux Studio',
                                'John Snow',
                                '@snow_john',
                                'snow_jo@mail.coz'
                            ], type: Type.First
                        },
                        {
                            data: ['Letterdrawn Studio',
                                'Amanda Tan',
                                '@tanamanda',
                                'sarah_klax@mail.coz'
                            ], type: Type.Second
                        },
                        {
                            data: ['Slaby Studio',
                                'Ubay Traxon',
                                '@ubaytrax',
                                'hafid_nur@mail.coz'
                            ], type: Type.Third
                        },
                        {
                            data: ['Upsnow Studio',
                                'Melaney Can',
                                '@melanican',
                                'billbatson@mail.coz'
                            ], type: Type.Fourth
                        },

                    ].map((e) => displayContent(e['data'], e['type']))}
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    {[
                        {
                            data: ['Cuanesia Studio',
                                'Natasha Romanoff',
                                '@natasharom',
                                'natasha@mail.coz'
                            ], type: Type.First
                        },
                        {
                            data: ['Idaman Studio',
                                'Wanda Maximof',
                                '@wan.wanda',
                                'wandawa@mail.coz'
                            ], type: Type.Second
                        },
                        {
                            data: ['Nirmala Studio',
                                'Raisya Haque',
                                '@thisisraisya',
                                'raisya.sya@mail.coz'
                            ], type: Type.Third
                        },
                        {
                            data: ['Papperinc Std',
                                'Kristina Wong',
                                '@wong.kris',
                                'kristong@mail.coz'
                            ], type: Type.Fourth
                        },

                    ].map((e) => displayContent(e['data'], e['type']))}
                </div>
            </div>
        </div>
        <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <img src={pagingIcon.src} width={'100%'}/>
        </div>
    </div>)
}