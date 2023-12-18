import HeaderContent from "../../HeaderContent";
import granttChart from "../../../public/static/images/grantt-chart.png";

export default function GranttChartComponent() {
    return (<div style={{ marginBottom: '20px' }}>
        <HeaderContent />
        <div style={{ marginTop: '20px' }}>
            <img width={'100%'} src={granttChart.src} />
        </div>
    </div>)
}