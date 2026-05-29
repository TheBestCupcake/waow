type TableProps<T> = {
  rowHeader: string;
  rowData: T[];
};

interface Props<T> {
  data: TableProps<T>[];
  renderItem: (item: T) => React.ReactNode;
}

function CategoryTable<T>({ data, renderItem }: Props<T>) {
  return (
    <table>
      {data.map((row) => (
        <tr>
          <td>{row.rowHeader}</td>

          {row.rowData.map((item) => (
            <td>{renderItem(item)}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default CategoryTable;

/*
try doing in the page code

<td> item.header </td> map(item.tableData) (<td> for each item </td>) 

and put it inside the Table Equivalent of the GridTable code to render it.

inside the Table.tsx do

<tr> map(the above table documents to put inside the table rows and do it for all rows) </tr>
*/

/*
type TableProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  //getKey: (item: T) => React.Key;
};

function CategoryTable<T>({ items, renderItem }: TableProps<T>) {
  const tableRows =<tr><td>{items.tableHeader}</td> {items.tableData.map((item) => {renderItem(item)})}</tr> ;

  return tableRows;
}

export default CategoryTable;

*/
