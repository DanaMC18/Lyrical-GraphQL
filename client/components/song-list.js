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

  const renderList = () =>
    data.songs.map(song =>
      <li className='collection-item' key={song.id}>{song.title}</li>
    )

  return(
    <ul className='collection' >
      {
        data.loading ? <div>Loading</div> : renderList()
      }
    </ul>
  )
}

SongList.propTypes = {
  data: PropTypes.object.isRequired
}

export default graphql(query)(SongList);