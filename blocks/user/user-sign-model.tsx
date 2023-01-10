import { useState } from 'react';

const TplPage = () => {
  const [state, setState] = useState();

  return <div>{state}</div>;
};

export default TplPage;
