import React from 'react';
import GlobalHeader from 'components/GlobalHeader/index';
import GlobalContent from 'components/GlobalContent/index';
import GlobalFooter from 'components/GlobalFooter/index';

interface IProps {
  children: React.ReactNode;
}

const BaseLayout = (props: IProps) => {
  return (
    <>
      <GlobalHeader />
      <GlobalContent>{props.children}</GlobalContent>
      <GlobalFooter />
    </>
  );
};

export default BaseLayout;
