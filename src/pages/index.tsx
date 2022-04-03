import type { NextPage } from 'next';
import Products from '@components/product/Products';
import styles from '@styles/components/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Products />
    </div>
  );
};

export default Home;
