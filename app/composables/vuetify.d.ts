export type SortItem = { key: string; order?: boolean | 'asc' | 'desc' }

type DataTableHeader = {
  key?: 'data-table-group' | 'data-table-select' | 'data-table-expand' | (string & {})
  value?: SelectItemKey
  title?: string
  fixed?: boolean
  align?: 'start' | 'end' | 'center'
  width?: number | string
  minWidth?: string
  maxWidth?: string
  headerProps?: Record<string, any>
  cellProps?: HeaderCellProps
  sortable?: boolean
  sort?: DataTableCompareFunction
  filter?: FilterFunction
  children?: DataTableHeader[]
}
