import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="min-h-screen border-8 border-amber-800 shadow-2xl rounded-2xl bg-gradient-to-b from-green-700 to-green-800 p-2 md:p-8 mb-10">
      <Outlet />
    </div>
  );
};

export default Layout;
