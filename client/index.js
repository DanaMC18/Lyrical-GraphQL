import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';

import 'client/style/style.css';
import App from 'client/components/app';
import SongCreate from 'client/components/song-create';
import SongDetail from 'client/components/song-detail';
import SongList from 'client/components/song-list';

const client = new ApolloClient({});

// ApolloProvider wraps the entire react router
const Root = () => {
  return (
    <ApolloProvider client={ client }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ SongList } />
          <Route path='songs/new' component={ SongCreate } />
          <Route path='songs/:id' component={ SongDetail } />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
