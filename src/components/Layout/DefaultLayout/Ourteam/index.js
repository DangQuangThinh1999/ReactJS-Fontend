import styles from './Ourteam.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);

const menu_ourteam = [
    {
        img: 'images/one.png',
        name: 'Jhon Doe',
        position: 'Digital Marketing Manager',
    },
    {
        img: 'images/two.png',
        name: 'John wick',
        position: 'Programmer',
    },
    {
        img: 'images/three.png',
        name: 'Taylor swift',
        position: 'Designer',
    },
    {
        img: 'images/four.png',
        name: 'Messi',
        position: 'Staff',
    },
];

function Ourteam() {
    const [isShown, setIsShown] = useState(-1);
    return (
        <div className={cx('wrapper')}>
            <div id="section-ourteam">
                <h1 className={cx('ourteam')}>Our Team</h1>
                <p className={cx('text')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.{' '}
                </p>

                <ul className={cx('list-ourteam')}>
                    {menu_ourteam.map((team, index) => {
                        return (
                            <li key={index} onMouseEnter={() => setIsShown(index)} onMouseLeave={() => setIsShown(-1)}>
                                <img src={team.img} alt={team.img}></img>
                                {(isShown === index ? true : false) && (
                                    <div className={cx('img' + index)}>
                                        <p className={cx('img-name')}> {team.name}</p>
                                        <p className={cx('img-position')}>{team.position}</p>
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

export default Ourteam;
