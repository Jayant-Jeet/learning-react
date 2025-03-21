function ListGroup() {
    let listItems = [] as string[];
    //listItems = ['City1', 'City2', ' City3', 'City4', 'City5'];
  return (
    <>
        <h1>List Group</h1>
        <ul className="list-group">
            {listItems.length>0 ? listItems.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
            )) : <li className="list-group-item">No items</li>}
        </ul>
    </>
  );
}

export default ListGroup;
