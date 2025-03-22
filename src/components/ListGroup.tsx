import { MouseEvent, useState } from "react";

function ListGroup() {
    let listItems = [] as string[];
    listItems = ['City1', 'City2', ' City3', 'City4', 'City5'];
    // Hook
    const [slectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
        <h1>List Group</h1>
        <ul className="list-group">
            {listItems.length>0 ? listItems.map((item, index) => (
                <li key={index} 
                onClick={(e: MouseEvent) => setSelectedIndex(index)}
                className={index === slectedIndex ? "list-group-item active" : "list-group-item"}>{item}</li>
            )) : <li className="list-group-item">No items</li>}
        </ul>
    </>
  );
}

export default ListGroup;
