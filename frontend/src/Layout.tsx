import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-900">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-green-900/40">
        <div className="min-h-screen border-8 border-amber-800 shadow-2xl">
          <div className="min-h-screen bg-gradient-to-b from-green-700 to-green-800 p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
