import styles from '@styles/ui/Filters.module.css'

const Filters = ({ pageSizeOptions, sortOptions, handleSearch, handlePageSize, handleSort }) => {
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    if (text.length >= 3) {
      handleSearch(text)
      return
    }

    if (!!Number(text)) {
      handleSearch(text)
      return
    }

    handleSearch('')
  }

  return (
    <div data-test="filters" className={styles.filters}>
      <input
        data-test="filters-search-input"
        className={styles['search-input']}
        placeholder="Search"
        onChange={onSearch}
      />
      <select
        data-test="filters-page-size-selector"
        onChange={event => handlePageSize(parseInt(event.target.value))}
      >
        {pageSizeOptions.map(option => (
          <option key={option} value={option}>
            Page size: {option}
          </option>
        ))}
      </select>
      <select data-test="filters-sort-selector" onChange={event => handleSort(event.target.value)}>
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filters
