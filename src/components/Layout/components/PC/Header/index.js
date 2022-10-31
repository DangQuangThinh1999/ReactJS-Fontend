import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Banner from '~/components/Layout/DefaultLayout/Banner';
const cx = classNames.bind(styles);
const Menu_nav = [
    { name: 'WORK', id: 'work' },
    {
        name: 'SERVICES',
        id: 'services',
    },
    {
        name: 'CONTACT',
        id: 'contact',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>LOGO</div>

                    <nav>
                        <ul className={cx('list-nav')}>
                            {Menu_nav.map((menu, index) => {
                                return (
                                    <li key={index} className={'nav' + index}>
                                        <a href={'#section-' + menu.id}> {menu.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                {/* close tag inner */}
                <Banner />
            </div>
        </header>
    );
}

export default Header;
