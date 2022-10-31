import classNames from 'classnames/bind';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Creative Innovative Design Agency</p>
            <p className={cx('note')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
            </p>
          
        </div>
    );
}

export default Banner;
