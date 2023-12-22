import Image from "next/image";
import HeaderContent from "../../HeaderContent";
import displayListIcon from '../../../public/static/images/display_list_icon.svg';
import displayGridIcon from '../../../public/static/images/display_grid_icon.svg';
import teamContentIcon from '../../../public/static/images/team_content_icon.svg';

export default function TeamPageIndexComponent() {

    const getBgColorByType = (type: Type) => {
        if(type == Type.First){
            return '#5A6ACE'
        }
    }

    const displayContent = (data: any[], type: Type) => {
        return <div className="card">
            <div style={{ marginTop: '10px', marginLeft: '20px', marginRight: '20px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <button className="btn" style={{backgroundColor: getBgColorByType(type), opacity: '15%'}}>
                            <span style={{backgroundColor: getBgColorByType(type), opacity: '100%'}}>{data[0]}</span>
                        </button>

                    </div>
                    <div>
                        <Image src={teamContentIcon.src} width={20} height={20} alt="icon" />
                    </div>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                {[
                    {
                        data: ['Peterdraw Studio',
                        ], type: Type.First
                    }
                ].map((e) => displayContent(e['data'], e['type']))}
                {/* <div className="item">item 1</div> */}
                {/* <div className="item">item 2</div>
                <div className="item">item 3</div>
                <div className="item">item 3</div>
                <div className="item">item 3</div>
                <div className="item">item 3</div>
                <div className="item">item 3</div> */}
            </div>
        </div>
    </div>)
}