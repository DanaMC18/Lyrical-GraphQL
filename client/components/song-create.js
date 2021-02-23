import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { hashHistory, Link } from 'react-router';


const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' }
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.mutate({
      variables: { title: this.state.title }
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
