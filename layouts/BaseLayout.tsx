import React from 'react';
import GlobalHeader from 'components/global-header/index';
import GlobalContent from 'components/global-content/index';
import GlobalFooter from 'components/global-footer/index';

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
