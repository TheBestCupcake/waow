type CharacterStats = {
  key: string;
  value: string;
  image?: string;
};

type CharacterList = {
  data: CharacterStats[];
};

function JsonList({ data }: CharacterList) {
  const tableItems = data.map((item) => (
    <li key={item.key}>
      <div>
        <img src={item.image} /> {item.key}: {item.value}
      </div>
    </li>
  ));
  return tableItems;
}

export default JsonList;
