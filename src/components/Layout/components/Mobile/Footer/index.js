import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('text-one')}>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
            <div className={cx('text-two')}>
                <p>2022 CompanyName</p>
            </div>
        </footer>
    );
}

export default Footer;
