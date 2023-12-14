type TopicTitle = {
    title: string
}

export default function TopicHeader(topicTitle: TopicTitle) {
    return (<div>
        <div style={{marginBlock: '10px'}}>
            <div className="alert" style={{ backgroundColor: '#E6E9F8', color: '#29305B', alignItems: 'center', display: 'flex' }}>
                <i className="bi bi-circle-fill" style={{ fontSize: '7px', marginRight: '5px' }}></i>
                <small>{topicTitle.title}</small>
            </div>
        </div>
    </div>)
}