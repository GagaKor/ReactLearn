import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Start from './views/Start';
import PlayLotto from './views/PlayLotto';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Start" element={<Start />} />
        <Route path="PlayLotto" element={<PlayLotto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
