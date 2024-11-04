import Header from '~/Components/Header';
import Footer from '~/Components/Footer';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className="wapper">
      <Header />
      <section className={cx('section')}>{children}</section>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
