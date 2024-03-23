function List(props) {
  // fruits.sort((a, b) => a.name.localeCompare(b.name));// sort by name alphabetically
  //fruits.sort((a, b) => b.name.localeCompare(a.name));
  //fruits.sort((a, b) => b.calories - a.calories); // sort by calories in descending order
  //fruits.sort((a, b) => a.calories - b.calories);

  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
  const category = props.category;
  const itemList = props.items;

  const items = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="text-xl font-semibold py-3 text-center mb-3 border-4 border-black rounded-md bg-gray-800 text-white">
        {category}
      </h3>
      <div className="hover:bg-violet-600 list-decimal px-3 pb-4 m-0 text-md text-center">
        {items}
      </div>
    </>
  );
}

export default List;
