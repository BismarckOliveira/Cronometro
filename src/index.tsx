import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

import {App} from './App';

createServer({

  models: {
     lap: Model,
  },


  routes(){

    this.namespace = 'api';
    
    this.get('/laps', () => {
      return this.schema.all('lap')
    })

    this.post('/laps', (schemas, request) => {
      const data = JSON.parse(request.requestBody);

      return schemas.create('lap',data);
    })

  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
