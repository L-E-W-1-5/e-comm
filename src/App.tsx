import React from 'react';
import './App.css';
import {Auth0Provider} from '@auth0/auth0-react';


function App() {

  return (
  <Auth0Provider
    domain="dev-otxf3y3m35xq561z.uk.auth0.com"
    clientId="OeE2UEHKTRF43HqCQnELYZ01x1sTAjXX"
  >

    <div>MotoMarket</div>

  </Auth0Provider>
  )
}

export default App;
