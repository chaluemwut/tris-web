
type HeaderData = {
    title: string
}

export default function NonEditHeader(headerData: HeaderData) {
    return (<div>
        <div className="alert" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#E6E9F8' }}>
            <div>
                <i className="bi bi-circle-fill" style={{ marginRight: '5px', fontSize: '10px' }}></i>
                <span style={{ color: '#29305B' }}>
                    {headerData.title}
                </span>
            </div>
            {/* <div>
                <i className="bi bi-pencil-square" style={{ color: '#B5C8DB' }}></i>
            </div> */}
        </div>
    </div>)
}