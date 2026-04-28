type CharacterStats = {
  key: string;
  value: string;
};

type CharacterList = {
  data: CharacterStats[];
};

function JsonList({ data }: CharacterList) {
  const tableItems = data.map((item) => (
    <li key={item.key}>
      {item.key} {item.value}
    </li>
  ));
  return tableItems;
}

export default JsonList;
