import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

//This could be a component that shows like a card, showing all of this one item's features
//Will also have a way to edit and delete each item
//Single day item features could consist of:
// Id, Date, Title, Description, Hour, Type(apppointment, personal, professional, etc.)?

const ItemCard = () => {

    return (
        <div>
            <Card style={{ width: '18rem', margin: '5px' }}>
                <Card.Title style={{ textAlign: 'center' }}>TITLE</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>HOUR on DATE</Card.Text>
                <Card.Text style={{ textAlign: 'center' }}>TYPE</Card.Text>
                <Card.Text style={{ textAlign: 'center' }}>DESCRIPTION</Card.Text>
                <Button variant='danger'>Delete Item</Button>
            </Card>
        </div>
    )
}

export default ItemCard;