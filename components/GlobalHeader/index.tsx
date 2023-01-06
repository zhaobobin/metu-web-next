import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'antd';
import { ENV } from 'utils';
import styles from './index.module.less';

import logo from 'assets/logo2.png';
import GlobalHeaderMenu from './menus';

function headerIsOpacity(pathname: string) {
  let path = pathname.split('/')[1];
  return path === '' || path === 'users';
}

interface IState {
  pathname: string;
  headerOpacity: string;
  headerFixed: string;
}

const GlobalHeader = () => {
  const router = useRouter();
  const initialState: IState = {
    pathname: router.pathname,
    headerOpacity: headerIsOpacity(router.pathname) ? styles.opacity : '', //导航默认样式
    headerFixed: router.pathname === '/' ? styles.fixed : '',
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    hashChange(router.pathname);
  }, [router.pathname]);

  //监控路由变化
  const hashChange = (pathname: string) => {
    // window.scrollTo(0, 0);                                  //重置滚动
    const path = pathname.split('/')[1];
    switch (path) {
      case '':
        window.addEventListener('scroll', handleScroll, false);
        setState({
          pathname: pathname,
          headerOpacity: styles.opacity,
          headerFixed: styles.fixed,
        });
        break;
      case 'edit':
        window.addEventListener('scroll', handleScroll, false);
        setState({
          pathname: pathname,
          headerOpacity: '',
          headerFixed: styles.fixed,
        });
        break;
      case 'users':
        window.removeEventListener('scroll', handleScroll, false);
        setState({
          pathname: pathname,
          headerOpacity: styles.opacity,
          headerFixed: '',
        });
        break;
      default:
        window.removeEventListener('scroll', handleScroll, false);
        setState({ pathname: pathname, headerOpacity: '', headerFixed: '' });
        break;
    }
  };

  //监控滚动
  const handleScroll = () => {
    let scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (scrollY > 0) {
      setState({ ...state, headerFixed: styles.fixed });
    } else {
      setState({ ...state, headerFixed: '' });
    }
  };

  const { headerFixed, headerOpacity } = state;

  return (
    <div className={styles.header + ' ' + headerFixed + ' ' + headerOpacity}>
      <Row>
        <Col xs={6} sm={6} md={3} lg={2}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} height={32} alt={ENV.info.appname} />
            </Link>
          </div>
        </Col>

        <Col xs={0} sm={0} md={13} lg={14}>
          <GlobalHeaderMenu pathname={router.pathname} />
        </Col>

        <Col xs={18} sm={18} md={8} lg={8}>
          {/* <GlobalHeaderSign /> */}
        </Col>
      </Row>
    </div>
  );
};

export default GlobalHeader;
