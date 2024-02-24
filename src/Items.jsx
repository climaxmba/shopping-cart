import { Link, useParams } from "react-router-dom";

const BerryItem = () => {
  return (
    <>
      <h2>Name: Berry</h2>
    </>
  );
};

const StoneItem = () => {
  return (
    <>
      <h2>Name: Stone</h2>
    </>
  );
};

const DefaultItem = () => {
  return (
    <>
      <p>Here is a list of items:</p>
      <h2>Default Item</h2>
      <ul>
        <li>
          <Link to="berry">Berry Item</Link>
        </li>
        <li>
          <Link to="stone">Stone Item</Link>
        </li>
      </ul>
    </>
  );
};

const Items = () => {
  const { item } = useParams();
  return (
    <>
      <h1>Items Page</h1>
      {item === "berry" ? (
        <BerryItem />
      ) : item === "stone" ? (
        <StoneItem />
      ) : (
        <DefaultItem />
      )}
    </>
  );
};

export default Items;
