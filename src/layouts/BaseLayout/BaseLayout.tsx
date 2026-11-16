import type { PropsWithChildren } from 'react';
import AmbientBackground from '../../components/layout/AmbientBackground/AmbientBackground';
import Footer from '../../components/layout/Footer/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav/MobileBottomNav';
import Navbar from '../../components/layout/Navbar/Navbar';
import './BaseLayout.scss';

export default function BaseLayout({ children }: PropsWithChildren) {
    return (
        <div className="baseLayout">
            <AmbientBackground />
            <Navbar />
            <main className="baseLayout__main">{children}</main>
            <Footer />
            <MobileBottomNav />
        </div>
    );
}
