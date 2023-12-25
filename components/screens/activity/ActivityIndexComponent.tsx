import HeaderContent from "../../HeaderContent";
import activityIcon1 from "../../../public/static/images/activity_icon_1.svg";
import activityIcon2 from "../../../public/static/images/activity_icon_2.svg";
import activityIcon3 from "../../../public/static/images/activity_icon_3.svg";
import activitySettingIcon from "../../../public/static/images/activity_setting_icon.svg";

export default function ActivityIndexComponent() {
    const icon1 = () => {
        return <img src={activityIcon1.src} />
    }

    const icon2 = () => {
        return <img src={activityIcon2.src} />
    }

    const icon3 = () => {
        return <img src={activityIcon3.src} />
    }

    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="Activity" />
        <div>
            <div style={{ margin: '30px' }}>
                <div className="card">
                    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        <div>Today</div>
                        <div style={{ marginLeft: '20px' }}>
                            <table className="table">
                                {[{
                                    time: '2m ago',
                                    icon: icon1(),
                                    detail: 'Jackie Kun mentioned you at Kleon Projects',
                                    time2: 'Monday, June 31 2020'
                                },
                                {
                                    time: '6m ago',
                                    icon: icon2(),
                                    detail: '[REMINDER] Due date of Highspeed Studios Projects te task will be coming',
                                    time2: 'Monday, June 31 2020'
                                },
                                {
                                    time: '16m ago',
                                    icon: icon3(),
                                    detail: 'Olivia Johanna has created new task at Kleon Projects',
                                    time2: 'Monday, June 31 2020'
                                },
                                {
                                    time: '4h ago',
                                    icon: icon1(),
                                    detail: 'Jackie Kun commented at Kleon Projects “Hei, please update the progress gu..',
                                    time2: 'Monday, June 31 2020'
                                },
                                {
                                    time: '12:31 AM',
                                    icon: icon1(),
                                    detail: 'You has moved “Wireframing Landing Page” task to Done',
                                    time2: 'Monday, June 31 2020'
                                },
                                ].map((e) => <tr>
                                    <td>
                                        <small style={{ color: '#828282' }}>{e['time']}</small>
                                    </td>
                                    <td>{e['icon']}</td>
                                    <td>
                                        <div>
                                            <span style={{ color: '#4F4F4F' }}>{e['detail']}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#828282' }}>
                                                {e['time2']}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-primary">Go to board</button>
                                    </td>
                                    <td>
                                        <img src={activitySettingIcon.src} />
                                    </td>
                                </tr>
                                )}
                            </table>

                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginTop: '40px' }}>
                    <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        <div>Yesterday</div>
                        <div style={{ marginLeft: '20px' }}>
                            <table className="table">
                                {[{
                                    time: '2m ago',
                                    icon: icon1(),
                                    detail: 'Jackie Kun mentioned you at Kleon Projects',
                                    time2: 'Monday, June 31 2020'
                                },
                                {
                                    time: '6m ago',
                                    icon: icon2(),
                                    detail: '[REMINDER] Due date of Highspeed Studios Projects te task will be coming',
                                    time2: 'Monday, June 31 2020'
                                },
                                {
                                    time: '16m ago',
                                    icon: icon3(),
                                    detail: 'Olivia Johanna has created new task at Kleon Projects',
                                    time2: 'Monday, June 31 2020'
                                },
                                ].map((e) => <tr>
                                    <td>
                                        <small style={{ color: '#828282' }}>{e['time']}</small>
                                    </td>
                                    <td>{e['icon']}</td>
                                    <td>
                                        <div>
                                            <span style={{ color: '#4F4F4F' }}>{e['detail']}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#828282' }}>
                                                {e['time2']}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-primary">Go to board</button>
                                    </td>
                                    <td>
                                        <img src={activitySettingIcon.src} />
                                    </td>
                                </tr>
                                )}
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}        