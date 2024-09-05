import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import Calculator from './pages/Calculator';
import Contador from './pages/Contador';    
import ToDoList from './pages/ToDoList';    
// import AboutPage from './pages/about';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Calc from './pages/Calc';
// import NotFoundPage from './pages/notFound';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/calc' element={<Calc />} />
                <Route path='/calculator' element={<Calculator />} />
                <Route path='/cont' element={<Contador />} />
                <Route path='/todo' element={<ToDoList />} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    );
}

export default App;