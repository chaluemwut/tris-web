
type HeaderData = {
    title: string
}

export default function MainEditHeader(headerData: HeaderData) {
    return (<div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <i className="bi bi-circle-fill" style={{ marginRight: '5px', fontSize: '10px' }}></i>
                <span style={{ color: '#29305B' }}>
                    {headerData.title}
                </span>
            </div>
            <div>
                <i className="bi bi-pencil-square" style={{ color: '#B5C8DB' }}></i>
            </div>
        </div>
    </div>)
}