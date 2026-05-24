import { Outlet } from 'react-router-dom';
import { NavBar } from '../src/components/common';

const MainLayout = () => {
    return (
        <div className="voltage-shell min-h-screen antialiased circuit-bg">
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
