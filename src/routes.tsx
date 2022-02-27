import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Banner } from './components/Banner';
import Login from './pages/Login';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
