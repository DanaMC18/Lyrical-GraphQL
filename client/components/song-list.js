import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
  query GetSongs {
    songs {
      id
      title
    }
  }
`;

const SongList = ({ data }) => {
  console.log(data);
  return(
    <div>SongList</div>
  )
}

SongList.propTypes = {
  data: PropTypes.object.isRequired
}

export default graphql(query)(SongList);
