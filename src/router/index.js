import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Person from '../views/Person';

function RouterApp() {
    return (

        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/home"
                element={<Person />}
            />
        </Routes>
    );
}

export default RouterApp;