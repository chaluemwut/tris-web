type Data = {
    rowNumber: number
}

export default function TwoColumnData(data: Data) {
    return (<div>
        {Array.from(Array(data.rowNumber).keys()).map((e, index) => <div>
            <div className="row">
                <div className="col-6">
                    <div style={{ display: 'flex' }}>
                        <i className={`bi bi-${index + 1}-circle-fill primary-color`} style={{ fontSize: '25px', marginRight: '5px' }}></i>
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Lorem ipsum dolor sit amet, consectetur adipiscing elit</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>                
                <div className="col-6">
                    <div style={{ display: 'flex' }}>
                        <i className={`bi bi-${index + 1}-circle-fill primary-color`} style={{ fontSize: '25px', marginRight: '5px' }}></i>
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Lorem ipsum dolor sit amet, consectetur adipiscing elit</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <hr className="horizontal-line" style={{marginTop: '10px'}}/>
            </div>
        </div>)}
        <div className="row" style={{ marginBlock: '10px' }}>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div><i className="bi bi-plus-circle-fill" style={{
                        fontSize: '25px',
                        color: '#E3E6F5'
                    }}></i></div>
                    <div className="btn" style={{ border: '1px dashed #CFD2E7', marginLeft: '5px' }}>
                        <span style={{ marginLeft: '40px', marginRight: '40px' }}>เพิ่มข้อมูล</span>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}