import styles from './PaginationItem.module.css';

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  return (
    <li
      className={`${styles['page']} ${
        page === currentPage ? styles['active'] : ''
      }`}
      onClick={() => onPageChange(page)}
    >
      <span>{page}</span>
    </li>
  );
};

export default PaginationItem;
