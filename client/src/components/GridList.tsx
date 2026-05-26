type GridListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => React.Key;
};

function GridList<T>({ items, renderItem, getKey }: GridListProps<T>) {
  const listItems = items.map((item) => (
    <li key={getKey(item)}> {renderItem(item)}</li>
  ));

  return listItems;
}

export default GridList;
