import React from 'react'
import styles from './PageTemplate/PageTeplate.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);
const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <h1>일정 관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
      )
};

export default PageTemplate;