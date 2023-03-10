import Link from 'next/link';
import { Row, Col } from 'antd';
import { ENV } from 'utils';
import styles from './index.module.less';

const center = {
  xs: 22,
  sm: 20,
  md: 16,
  lg: 16,
};

const slide = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
};

const GlobalFooter = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col {...slide} />
        <Col {...center}>
          <div className={styles.footContent}>
            <div className={styles.top}>
              <p className={styles.title}>
                <strong>{ENV.info.hometitle}</strong>
              </p>
              <p className={styles.desc}>{ENV.info.description}</p>
            </div>
            <div className={styles.bottom}>
              <p>
                <span>
                  <a
                    href="http://beian.miit.gov.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ENV.info.beian}
                  </a>
                </span>
                <span>|</span>
                <span>{ENV.info.copyright}</span>
              </p>
              <p>
                <span>
                  <Link href="/help">帮助中心</Link>
                </span>
                <span>|</span>
                <span>
                  <Link href="/service">服务条款</Link>
                </span>
                <span>|</span>
                <span>
                  <Link href="/contact">联系我们</Link>
                </span>
                <span>|</span>
                <span>
                  <Link href="/sitemap">网站地图</Link>
                </span>
                <span>|</span>
                <span>
                  <a
                    href={ENV.info.doc}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    开发文档
                  </a>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col {...slide} />
      </Row>
    </div>
  );
};

export default GlobalFooter;
