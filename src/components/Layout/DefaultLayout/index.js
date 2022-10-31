import Header from '~/components/Layout/components/PC/Header';
import Footer from '~/components/Layout/components/PC/Footer';
import Work from './Work';
import Services from './Services';
import Contact from './Contact';
import Ourteam from './Ourteam';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Work />
                <Services />
                <Ourteam />
                <Contact />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
