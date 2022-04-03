import { useState } from 'react'
import { useQuery } from 'react-query'
import Paginator from './Paginator'
import Filters from './Filters'
import styles from '@styles/ui/List.module.css'

interface ListProps {
  Service: any
  method: string
  ItemComponent: React.JSXElementConstructor<any>
}

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

const List = ({ Service, method, ItemComponent }: ListProps) => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [sort, setSort] = useState(sortOptions[0].value)

  const params = { search, page, pageSize, sort }
  const { isLoading, error, data, isFetching, isPreviousData } = useQuery(
    ['products', params],
    () => Service[method](params),
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

  return (
    <div>
      <Filters
        sortOptions={sortOptions}
        pageSizeOptions={pageSizeOptions}
        handleSearch={handleSearch}
        handlePageSize={handlePageSize}
        handleSort={handleSort}
      />
      {data && (
        <>
          <div className={styles.list}>
            {data.data.map(item => (
              <ItemComponent key={item.id} {...item} />
            ))}
          </div>
          <Paginator page={page} totalPages={data.totalPages} handleChangePage={handlePage} />
        </>
      )}
    </div>
  )
}

export default List
