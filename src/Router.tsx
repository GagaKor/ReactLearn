import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Boards from './views/Boards';
import Detail from './views/Detail';
import Login from './views/Login';
import Signup from './views/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="boards" element={<Boards />} />
        <Route path="boards/:detail" element={<Detail />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
