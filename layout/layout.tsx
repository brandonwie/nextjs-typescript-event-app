import { FC } from 'react';
import MainHeader from './main-header';

const Layout: FC = (props): JSX.Element => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
