function ListGroup() {
    const listItems = ['City1', 'City2', ' City3', 'City4', 'City5'];
  return (
    <>
        <h1>List Group</h1>
        <ul className="list-group">
            {listItems.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;
