import HeaderContent from "../../HeaderContent";
import ProjectNameHeader from "./detail/ProjectNameHeader";
import card1 from "../../../public/static/images/card1.png";
import card2 from "../../../public/static/images/card2.png";
import card3 from "../../../public/static/images/card3.png";
import card4 from "../../../public/static/images/card4.png";

export default function ProjectCardComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent />
        <div>
            <div className="row">
                <ProjectNameHeader />
            </div>
            <div className="scroll" style={{ display: 'flex', marginLeft: '30px', marginTop: '20px', justifyContent: 'space-between' }}>
                <div>
                    <img src={card1.src} />
                </div>
                <div style={{marginLeft: '20px'}}>
                    <img src={card2.src} />
                </div>
                <div style={{marginLeft: '20px'}}>
                    <img src={card3.src} />
                </div>
                <div style={{marginLeft: '20px'}}>
                    <img src={card4.src} />
                </div>                
            </div>
        </div>
    </div>)
}