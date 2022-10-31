import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('left-text')}>
                <p>2022 Creatives</p>
            </div>
            <div className={cx('right-text')}>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </footer>
    );
}

export default Footer;
