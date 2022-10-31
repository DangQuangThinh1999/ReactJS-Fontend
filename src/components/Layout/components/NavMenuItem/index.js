import styles from './NavMenuItem.module.scss';
import classNames from 'classnames/bind';
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

function NavMenuItem() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list-menuNav')}>
                {Menu_nav.map((menu, index) => {
                    return (
                        <li key={index} className={cx('btn-', index)}>
                            <a href={'#section-'+(menu.id)}>{menu.name}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default NavMenuItem;
