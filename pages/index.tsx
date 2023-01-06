import Link from 'next/link';
import Router from 'next/router';
import { Button } from 'antd';

export default function Home() {
  const goDetail = () => {
    Router.push({ pathname: 'detail', query: { id: 222 } });
  };

  return (
    <div>
      <h1>Home 123</h1>
      <Link href="/">首页</Link>
      <br />
      <br />
      <Link href="/content/111">
        <span>内容页</span>
      </Link>
      <br />
      <br />
      <Link href="/detail?id=222">
        <span>详情页</span>
      </Link>
      <br />
      <br />
      <Button onClick={goDetail}>去详情页</Button>
    </div>
  );
}
