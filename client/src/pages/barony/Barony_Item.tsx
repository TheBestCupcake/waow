import { useParams } from "react-router-dom";
import { items } from "../../data/items";

function Barony_Item() {
  const { item: itemName } = useParams();

  const itemInfo = items.find(
    (it) => it.id.toLowerCase() == itemName?.toLowerCase(),
  );

  if (!itemInfo) {
    return <h1>Class not found</h1>;
  }

  return (
    <div className="baronyGrid">
      <h1>{itemInfo.id}</h1>
      {itemInfo.itemSections.map((section) => (
        <>
          <h2>{section.sectionName}</h2>
          {section.sectionContent}
        </>
      ))}
    </div>
  );
}

export default Barony_Item;
