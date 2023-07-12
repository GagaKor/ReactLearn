import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/style.scss';
import App from './App';
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';
import Loader from './layouts/loader/Loader';
import { store } from './store/config';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

const container = document.getElementById('root');
const root = createRoot(container!);
if (!root) throw new Error('Failed to find the root element');
function AppWithCallbackAfterRender() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <CookiesProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CookiesProvider>
      </BrowserRouter>
    </Suspense>
  );
}
root.render(<AppWithCallbackAfterRender />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
