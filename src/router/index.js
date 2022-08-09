import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Register from '../views/Person/Register';

function RouterApp() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            /> 
            <Route
                path="/home"
                element={<Register />}
            />
        </Routes>
    );
}

export default RouterApp;