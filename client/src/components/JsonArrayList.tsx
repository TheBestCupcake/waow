type EquipmentSections = {
  category: string;
  items: string[];
};

type EquipmentProps = {
  data: EquipmentSections[];
};

function JsonArrayList({ data }: EquipmentProps) {
  return (
    <div>
      {data.map((section) => (
        <div>
          <p>{section.category}</p>
          <ul>
            {section.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default JsonArrayList;
