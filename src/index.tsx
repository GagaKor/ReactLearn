import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/style.scss';
import App from './App';
// import reportWebVitals from "./reportWebVitals";
import { HashRouter, BrowserRouter } from 'react-router-dom';
import Loader from './layouts/loader/Loader';
import { store } from './store/config';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container!);
if (!root) throw new Error('Failed to find the root element');
function AppWithCallbackAfterRender() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  );
}
root.render(<AppWithCallbackAfterRender />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
