// eslint-disable-next-line no-restricted-imports
import DataTable, { IDataTableColumn, IDataTableProps } from 'react-data-table-component'

export interface ITypeSafeDataTableColumn<T> extends IDataTableColumn<T> {
  /** Must be unique, but doesn't need to be a field in data objects. */
  id: string
}
export interface ITypeSafeDataTableProps<T> extends Omit<IDataTableProps<T>, 'keyField'> {
  keyField: Extract<keyof T, string>
  columns: ITypeSafeDataTableColumn<T>[]
}

/**
 * Overrides DataTable type to ensure:
 * - `keyField` on rows is not missing and is valid
 * - `id` on cols is not missing
 */
export function TypeSafeDataTable<T>(props: ITypeSafeDataTableProps<T>): React.ReactElement {
  return <DataTable {...props} />
}
