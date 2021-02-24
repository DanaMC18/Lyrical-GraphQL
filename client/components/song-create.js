import React, { Component } from 'react';
import { ADD_SONG } from 'client/mutations/songs';
import { GET_SONGS } from 'client/queries/songs';
import { graphql } from 'react-apollo';
import { hashHistory, Link } from 'react-router';


class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' }
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query: GET_SONGS }]
    }).then(() => hashHistory.push('/'))
  }

  render() {
    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={ this.onSubmit.bind(this) }>
          <label>Song Title:</label>
          <input
            onChange={ e => this.setState({ title: e.target.value }) }
            value={ this.state.title }
          />
        </form>
      </div>
    );
  }
};

export default graphql(ADD_SONG)(SongCreate);
