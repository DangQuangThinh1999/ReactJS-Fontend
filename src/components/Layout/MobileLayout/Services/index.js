import styles from './Services.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const menu_services = [
    {
        title: 'Graphic Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
        cost: 'Starting at $400',
    },
    {
        title: 'Product Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
        cost: 'Starting at $350',
    },
    {
        title: 'Web Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
        cost: 'Starting at $800',
    },
    {
        title: 'Video Editing',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ',
        cost: 'Starting at $500',
    },
];

function Services() {
    return (
        <div className={cx('wrapper')}>
            <div id="section-services">
                <h1 className={cx('services')}>SERVICES</h1>
                <ul className={cx('list-services')}>
                    {menu_services.map((service, index) => {
                        return (
                            <li key={index} className={'detail' + index}>
                                <div className={cx('part' + index)}>
                                    <h3 className={cx('title')}>{service.title}</h3>
                                    <p className={cx('content')}>{service.content}</p>
                                    <p className={cx('see')}>
                                        <a href="/detail" className={cx('link-services')}>
                                            See Details
                                        </a>
                                        <div className={cx('icon-detail')}>
                                            <FontAwesomeIcon icon={faRightLong} />
                                        </div>
                                    </p>
                                </div>

                                <p className={cx('cost')}>{service.cost}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Services;
