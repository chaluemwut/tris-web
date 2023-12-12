import HeaderContent from "../../HeaderContent";
import projectHeaderImage from '../../../public/static/images/project_detail_header.png';
import Image from "next/image";

export default function ProjectDetailComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent />
        <div>
            <div className="row">
                <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                    <Image style={{ paddingLeft: '40px', paddingRight: '40px' }} src={projectHeaderImage.src} alt="Project header" layout='fill'
                        objectFit='contain' />
                </div>

            </div>
        </div>
    </div>)
}