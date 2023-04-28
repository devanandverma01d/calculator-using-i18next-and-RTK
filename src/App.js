//1. import area
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './components/Route';

//2. function definition
function App() {
  return (
    <BrowserRouter>
      <Routes>
       {
        routes?.map((cv, idx) => <Route key={idx} path={cv.path} element={cv.element}></Route>
        
        )
       }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
