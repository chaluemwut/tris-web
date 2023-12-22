import Image from "next/image";
import HeaderContent from "../../HeaderContent";
import displayListIcon from '../../../public/static/images/display_list_icon.svg';
import displayGridIcon from '../../../public/static/images/display_grid_icon.svg';

export default function TeamPageIndexComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent title="Team Page" />
        <div style={{marginLeft: '40px', marginRight: '40px', marginTop: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <button className="btn" style={{ backgroundColor: '#5A6ACE', color: 'white', borderRadius: '30px' }}>
                        <i className="bi bi-plus-lg"></i>New Contact</button>
                </div>
                <div>
                    <Image src={displayListIcon.src} alt="list" width={40} height={40}/>
                    <Image src={displayGridIcon.src} alt="list" width={40} height={40}/>
                </div>
            </div>
        </div>
    </div>)
}