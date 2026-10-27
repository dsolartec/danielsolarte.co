import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import AboutPage from './pages/AboutPage.tsx';
import ExperiencePage from './pages/ExperiencePage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import App from './App.tsx';
import './i18n.ts';
import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<AboutPage />} />
                    <Route path="experience" element={<ExperiencePage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
