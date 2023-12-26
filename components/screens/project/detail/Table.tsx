
type HeaderList = {
    titleHeader: any
    firstRowData: string[]
}

export default function Table(headerList: HeaderList) {
    return (<div style={{ marginTop: '10px' }}>
        <table className="table">
            <thead>
                <tr>
                    {headerList.titleHeader.map((e: any) => <th scope="col" style={{ backgroundColor: '#E6E9F8' }}>{e}</th>)}
                </tr>
            </thead>
            <tbody>
                {headerList.firstRowData.map((eRow) => <tr>
                    <td>
                        <div className="card" style={{ border: '1px dashed #CFD2E7' }}>
                            {eRow}
                        </div>
                    </td>
                    <td>
                        <div className="card" style={{ border: '1px dashed #CFD2E7' }}>
                            &nbsp;
                        </div>
                    </td>
                    <td>
                        <div className="card" style={{ border: '1px dashed #CFD2E7' }}>
                            &nbsp;
                        </div>
                    </td>
                    <td>
                        <div className="card" style={{ border: '1px dashed #CFD2E7' }}>
                            &nbsp;
                        </div>
                    </td>
                    <td>
                        <div className="card" style={{ border: '1px dashed #CFD2E7' }}>
                            &nbsp;
                        </div>
                    </td>
                    <td>
                        <div className="card" style={{ border: '1px dashed #CFD2E7' }}>
                            &nbsp;
                        </div>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>)
}