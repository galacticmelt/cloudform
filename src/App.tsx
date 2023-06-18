import Main from './modules/main/main';
import Steps from './modules/steps/steps';
import Error from './modules/error/error';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />} errorElement={<Error />} />
      <Route path="create" element={<Steps />} errorElement={<Error />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
