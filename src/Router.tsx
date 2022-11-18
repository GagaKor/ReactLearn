import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Start from './views/Start';
import PlayLotto from './views/PlayLotto';
import ResultLotto from './views/ResultLotto';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Start" element={<Start />} />
        <Route path="PlayLotto" element={<PlayLotto />} />
        <Route path="ResultLotto" element={<ResultLotto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
