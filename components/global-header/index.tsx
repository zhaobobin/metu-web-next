import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col, Affix } from 'antd';
import { ENV } from 'utils';
import classNames from 'classnames';
import styles from './index.module.less';

import logo from 'assets/logo2.png';
import GlobalHeaderMenu from './global-header-menu';
import GlobalHeaderSign from './global-header-sign';

function headerIsOpacity(pathname: string) {
  let path = pathname.split('/')[1];
  return path === '' || path === 'users';
}

interface IState {
  pathname: string;
  headerOpacity?: string;
}

const GlobalHeader = () => {
  const router = useRouter();
  const initialState: IState = {
    pathname: router.pathname,
    headerOpacity: headerIsOpacity(router.pathname) ? styles.opacity : undefined, //导航默认样式
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    hashChange(router.pathname);
  }, [router.pathname]);

  //监控路由变化
  const hashChange = (pathname: string) => {
    // window.scrollTo(0, 0);                                  //重置滚动
    if (headerIsOpacity(pathname)) {
      setState({
        pathname: pathname,
        headerOpacity: styles.opacity,
      });
    } else {
      setState({
        pathname: pathname,
        headerOpacity: undefined,
      });
    }
  };

  const renderContent = () => (
    <div className={classNames(styles.header, state.headerOpacity)}>
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
          <GlobalHeaderSign />
        </Col>
        
      </Row>
    </div>
  )

  if (state.pathname === '/') {
    return (
      <Affix>
        {renderContent()}
      </Affix>
    )
  }

  return renderContent();
};

export default GlobalHeader;
