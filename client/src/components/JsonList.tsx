type CharacterStats = {
  key: string;
  value: string;
};

type CharacterList = {
  data: CharacterStats[];
};

function JsonList({ data }: CharacterList) {
  return (
    <div>
      {data.map((item) => (
        <li>
          {item.key} <br /> {item.value}
        </li>
      ))}
    </div>
  );
}

export default JsonList;
