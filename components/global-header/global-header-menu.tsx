import Link from 'next/link';
import classNames from 'classnames';
import styles from './global-header-menu.module.less';

interface IProps {
  pathname: string;
}

interface INavItem {
  title: string;
  key: string;
  path: string;
  children?: INavItem[];
}

const navs: INavItem[] = [
  {
    title: '首页',
    key: 'home',
    path: '/',
  },
  {
    title: '发现',
    key: 'discover',
    path: '/community/discover',
  }
];

function getMenuList(navData: INavItem[], currentPath: string) {
  if (!navData) {
    return [];
  }
  return navData.map(item => {
    if (!item.title) return null;
    return (
      <li key={item.key}>
        <Link 
          className={classNames(styles.link, {[styles.current]: item.path === currentPath})} 
          href={item.path}
        >
          {item.title}
        </Link>
        {item.children && (
          <div className={styles.submenu}>
            {item.children.map((child, i) => (
              <p key={i}>
                <Link
                  className={classNames(styles.subLink, {[styles.active]: child.path === currentPath})}
                  href={`${item.path}${child.path}`}
                >
                  {item.title}
                </Link>
              </p>
            ))}
          </div>
        )}
      </li>
    );
  });
}

const GlobalHeaderMenu = (props: IProps) => {
  return <ul className={styles.menu}>{getMenuList(navs, props.pathname)}</ul>;
};

export default GlobalHeaderMenu;
