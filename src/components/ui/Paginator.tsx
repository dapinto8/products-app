import styles from '@styles/ui/Paginator.module.css'
import Image from 'next/image'

interface PaginatorProps {
  page: number
  totalPages: number
  handleChangePage: (page: number) => void
}

const Paginator = ({ page, totalPages, handleChangePage }: PaginatorProps) => {
  const startPage = Math.max(1, page - 2)
  const endPage = Math.min(totalPages, page + 3)
  const pages = [...Array(totalPages).keys()].slice(startPage, endPage)

  const changePage = (page: number) => {
    let newPage = page
    if (page < 1) newPage = 1
    if (page > totalPages) newPage = totalPages
    handleChangePage(newPage)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.paginator}>
      <button className="btn-icon" onClick={() => changePage(page - 1)}>
        <Image src="/arrow-left.png" alt="arrow left" width={16} height={16} />
      </button>
      {startPage > 1 && (
        <button className="btn-icon" onClick={() => changePage(1)}>
          1
        </button>
      )}
      {startPage > 2 && <span className={styles.ellipsis}>...</span>}
      {pages.map(pageNumber => (
        <button
          key={pageNumber}
          className={`btn-icon ${pageNumber === page && styles['active-page']}`}
          onClick={() => changePage(pageNumber)}
          disabled={pageNumber === page}
        >
          {pageNumber}
        </button>
      ))}
      {endPage < totalPages - 1 && <span className={styles.ellipsis}>...</span>}
      {endPage <= totalPages && (
        <button
          className={`btn-icon ${page === totalPages ? styles['active-page'] : ''}`}
          onClick={() => changePage(totalPages)}
        >
          {totalPages}
        </button>
      )}
      <button className="btn-icon" onClick={() => changePage(page + 1)}>
        <Image src="/arrow-right.png" alt="arrow left" width={16} height={16} />
      </button>
    </div>
  )
}

export default Paginator
