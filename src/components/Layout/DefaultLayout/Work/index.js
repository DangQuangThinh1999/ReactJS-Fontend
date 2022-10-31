import classNames from 'classnames/bind';

import styles from './Work.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
const menu_works = [
    {
        img: 'images/1.png',
        title: 'Abstract Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: 'images/2.png',
        title: 'Abstract Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: 'images/3.png',
        title: 'Abstract Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: 'images/4.png',
        title: 'Abstract Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: 'images/5.png',
        title: 'Abstract Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        img: 'images/6.png',
        title: 'Abstract Design',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

function Work() {
    const [isShown, setIsShown] = useState(-1);

    return (
        <div className={cx('wrapper')}>
            <div id="section-work">
                <p className={cx('work-note')}>WORK</p>
                <ul className={cx('list-work')}>
                    {menu_works.map((work, index) => {
                        return (
                            <li
                                key={index}
                                className={'work' + index}
                                onMouseEnter={() => setIsShown(index)}
                                onMouseLeave={() => setIsShown(-1)}
                            >
                                <img src={work.img} alt={work.img}></img>
                                {(isShown === index ? true : false) && (
                                    <div className={cx('detail-work' + index)}>
                                        <p className={cx('title-work')}>{work.title}</p>
                                        <p className={cx('content-work')}>{work.content}</p>
                                        <p className={cx('see-work')}>
                                            <a href="/detail" className={cx('link-see')}>
                                                See Details
                                            </a>
                                            <div className={cx('icon-detail-work')}>
                                                <FontAwesomeIcon icon={faRightLong} />
                                            </div>
                                        </p>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Work;
