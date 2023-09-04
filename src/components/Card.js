import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import articals from './Products'
function GroupExample() {
    console.log(articals)
  return (
    <CardGroup style={{margin:'30px'}}>
        {articals.map(el=> 
        <Card>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text >
           description: {el.discription} <br/>
           weight: {el.weight}<br/>
          {el.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
            )}
      
    </CardGroup>
  );
}

export default GroupExample;