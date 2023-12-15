
type HeaderList = {
    titleHeader: any
}
export default function Table(headerList: HeaderList) {
    return (<div style={{marginTop: '10px'}}>
        <table className="table">
            <thead>
                <tr>
                    {headerList.titleHeader.map((e: any) => <th scope="col" style={{backgroundColor: '#E6E9F8'}}>{e}</th>)}
                </tr>
            </thead>
            <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => <tr>
                    {headerList.titleHeader.map((e: any) => <td>##</td>
                    )}
                </tr>)}
            </tbody>
        </table>
    </div>)
}