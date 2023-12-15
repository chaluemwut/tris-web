
type ListData = {
    data: string[]
}

export default function ListContent(listData: ListData){
    return (<div>
        {listData.data.map((e, index)=><div style={{display: 'flex', alignItems: 'start', marginBlock: '10px'}}>            
            <i className={`bi bi-${index + 1}-circle-fill primary-color`} style={{ fontSize: '25px', marginRight: '5px' }}></i>
            <span>{e}</span>
        </div>)}
    </div>)
}