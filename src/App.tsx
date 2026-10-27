import { Outlet } from 'react-router';
import BaseLayout from './layouts/BaseLayout/BaseLayout';

export default function App() {
    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    );
}
