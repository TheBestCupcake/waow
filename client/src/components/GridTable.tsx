type GridTableProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => React.Key;
};

function GridTable<T>({ items, renderItem, getKey }: GridTableProps<T>) {
  const tableItems = items.map((item) => (
    <li key={getKey(item)}> {renderItem(item)}</li>
  ));

  return tableItems;
}

export default GridTable;
