import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hotline from "./components/Hotline";
import Footer from "./components/Footer";
import Main from './views/Main';
import Support from './views/Support';
import Request from "./views/Request";

export const languages = ["ua", "en"];

let defaultLang = "ua";

if (languages.includes(window.location.pathname.slice(1, 3))) {
    defaultLang = window.location.pathname.slice(1, 3);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <Hotline lang={defaultLang}/>
    <Navbar lang={defaultLang}/>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/ua"/>}/>
            {languages.map((value) => (
                <Route
                    key={value}
                    path={`/${value.toLowerCase()}/`}
                    element={<Main lang={value}/>}
                />
            ))}

            {languages.map((value) => (
                <Route
                    key={value}
                    path={`/${value.toLowerCase()}/support`}
                    element={<Support lang={value} />}
                />
            ))}

            {languages.map((value) => (
                <Route
                    key={value}
                    path={`/${value.toLowerCase()}/request`}
                    element={<Request lang={value} />}
                />
            ))}
            <Route path="*" element={<Navigate to={`/${defaultLang}`}/>}/>
        </Routes>
    </BrowserRouter>
    <Footer/>
</>);
