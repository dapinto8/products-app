export interface PaginatedData<T> {
  data: T[]
  nextPage: number
  page: number
  pageSize:  number
  previousPage: number
  total: number
  totalPages: number
}