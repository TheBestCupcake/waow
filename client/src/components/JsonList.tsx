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
      <img src={item.image}></img>
      {item.key}: {item.value}
    </li>
  ));
  return tableItems;
}

export default JsonList;
