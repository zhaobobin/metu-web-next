import Link from 'next/link';
import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  return (
    <div>
      <h1>DetailPage</h1>

      <p>id: {id}</p>

      <Link href="/">首页</Link>
    </div>
  );
};

export default DetailPage;
