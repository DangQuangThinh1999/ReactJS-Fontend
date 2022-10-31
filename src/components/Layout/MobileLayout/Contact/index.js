import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const menu_contacts = [
    { name: 'Twitter' },
    { name: 'LinkedIn' },
    { name: 'Dribbble' },
    { name: 'YouTube' },
    { name: 'Instagram' },
    { name: 'Facebook' },
];

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div id="section-contact">
                <h1 className={cx('contact')}>Contact</h1>
                <p className={cx('text-1')}>contact@website.com</p>
                <p className={cx('text-2')}>+0 0000 0000</p>
                <ul className={cx('list-contacts')}>
                    {menu_contacts.map((contact, index) => {
                        return (
                            <li key={index} className={'contact' + index}>
                                {contact.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Contact;
