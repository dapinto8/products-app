import { useState } from 'react'
import { useServicesContext } from '@context/services.context'
import { useQuery } from 'react-query'

const sortOptions = [
  {
    label: 'Price: low to high',
    value: 'price_asc'
  },
  {
    label: 'Price: high to low',
    value: 'price_desc'
  }
]

const pageSizeOptions = [10, 20, 50, 100]

function useProducts<T>() {
  const { ProductService } = useServicesContext()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [sort, setSort] = useState(sortOptions[0].value)

  const params = { search, page, pageSize, sort }
  const { isLoading, error, data, isFetching, isPreviousData } = useQuery(
    ['products', params],
    () => ProductService.getProducts(params),
    { keepPreviousData: true }
  )

  const handlePageSize = (pageSize: number) => {
    setPageSize(pageSize)
    setPage(1)
  }

  const handleSort = (sort: string) => {
    setSort(sort)
    setPage(1)
  }

  const handleSearch = (search: string) => {
    setSearch(search)
    setPage(1)
  }

  const handlePage = (page: number) => {
    setPage(page)
  }

  return {
    isLoading,
    error,
    data,
    isFetching,
    isPreviousData,
    search,
    page,
    pageSize,
    sort,
    sortOptions,
    pageSizeOptions,
    handleSearch,
    handlePage,
    handlePageSize,
    handleSort
  }
}

export default useProducts
