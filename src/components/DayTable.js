import Table from 'react-bootstrap/Table'

const DayTable = ({ items, title }) => {

    //Array of this day's events (objects with id, time and description), all start out blank save table head, saved on external json file
    //Array could be organized to sort items by time, this will make it so I do not need to have 24 hour slots, and instead only list what user has created.

    return(
        <div className='item-list'>
            <h1>Day View</h1>
            <br></br>
            <h2>{ title }</h2>
            {items.map((item) => (
                <div className='item-preview' key={item.id}>
                    <h3>{ item.title } at {item.hour}</h3>
                </div>
            ))}
        </div>
    )
}

export default DayTable;



{/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Time</td>
                        <td>Item Description</td>
                    </tr>
                </tbody>
</Table> */}