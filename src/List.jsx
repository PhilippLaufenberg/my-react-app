import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  // fruits.sort((a, b) => a.name.localeCompare(b.name));// sort by name alphabetically
  //fruits.sort((a, b) => b.name.localeCompare(a.name));
  itemList.sort((a, b) => b.calories - a.calories); // sort by calories in descending order
  //fruits.sort((a, b) => a.calories - b.calories);

  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const items = itemList.map((item) => (
    <li className="hover:text-fuchsia-700 cursor-pointer" key={item.id}>
      <span className="font-bold">{item.id}. </span>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="text-xl font-semibold py-3 text-center mb-3 border-4 border-black rounded-md bg-gray-800 text-white">
        {category}
      </h3>
      <ol className="px-3 pb-4 m-0 text-md text-center">{items}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
