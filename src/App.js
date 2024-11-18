import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './Routes/Routes';
import DefaultLayout from './Layout/DefaultLayout';
import { Fragment } from 'react';
const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              path={route.path}
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
