import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Banner from '~/components/Layout/MobileLayout/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import NavMenuItem from '~/components/Layout/components/NavMenuItem';

const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>LOGO</div>

                    <nav className={cx('right-nav')}>
                        {!show && (
                            <button className={cx('btn-faBars')} onClick={() => setShow(true)}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        )}

                        {show && (
                            <button className={cx('btn-faXmark')} onClick={() => setShow(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        )}
                    </nav>
                </div>
                {show === true ? (
                    <div className={cx('tippy-menu')}>
                        <PopperWrapper>
                            <NavMenuItem />
                        </PopperWrapper>
                    </div>
                ) : (
                    <Banner />
                )}

                {/* /* close tag inner */}
            </div>
        </header>
    );
}

export default Header;
