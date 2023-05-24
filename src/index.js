import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Login } from './views/Login';
import { Cadastro } from './views/Cadastro';
import { Home } from './views/Home';
import { NotLoggedArea } from './pages/NotLoggedArea';
import { DashboardArea } from './pages/DashboardArea';
import { RecuperarSenhaTelaEmail } from './views/RecuperarSenhaTelaEmail';
import { CadastroNovaSenha } from './views/CadastroNovaSenha';
import { Perfil } from './views/Perfil';
import { MeusLinks } from './views/MeusLinks';

const routerNotLogged = createBrowserRouter([
  {
    path: '/',
    element: <NotLoggedArea />,
    children: [
      {
        path: "/login", //ok
        element: <Login />,
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      },
      {
        path: '/recuperar-senha',
        element: <RecuperarSenhaTelaEmail />
      },
      {
        path: '/nova-senha',
        element: <CadastroNovaSenha />
      }
    ]
  }
]);

const routerLogged = createBrowserRouter([
  {
    path: '/',
    element: <DashboardArea />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/perfil',
        element: <Perfil></Perfil>
      },
      {
        path: '/meus-links',
        element: <MeusLinks></MeusLinks>
      }
    ]
  }
], {basename: '/dashboard'})

const root = ReactDOM.createRoot(document.getElementById('root'));

const isLogged = true

root.render(
  <React.StrictMode>
    {
      isLogged ? 
      <RouterProvider router={routerLogged} />
      :
      <RouterProvider router={routerNotLogged} />
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();