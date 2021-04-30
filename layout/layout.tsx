import MainHeader from './main-header';

const Layout: React.FC = (props): JSX.Element => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
