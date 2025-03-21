import { MouseEvent } from "react";

function ListGroup() {
    let listItems = [] as string[];
    listItems = ['City1', 'City2', ' City3', 'City4', 'City5'];

    const handleClick = (event: MouseEvent) => {
        console.log(event);}

  return (
    <>
        <h1>List Group</h1>
        <ul className="list-group">
            {listItems.length>0 ? listItems.map((item, index) => (
                <li key={index} 
                onClick={handleClick}
                className="list-group-item">{item}</li>
            )) : <li className="list-group-item">No items</li>}
        </ul>
    </>
  );
}

export default ListGroup;
