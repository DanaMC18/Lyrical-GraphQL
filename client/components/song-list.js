import React from 'react';
import PropTypes from 'prop-types';
import { DELETE_SONG } from 'client/mutations/songs';
import { GET_SONGS } from 'client/queries/songs';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';


const SongList = ({ data, mutate }) => {

  const onDelete = (id) =>
    mutate({ variables: { id } })
      .then(() => data.refetch())


  const renderList = () =>
    data.songs.map(song =>
      <li className='collection-item' key={song.id}>
        {song.title}
        <i className='material-icons' onClick={ () => onDelete(song.id) }>
          delete
        </i>
      </li>
    )


  return(
    <div>
      <ul className='collection' >
        {
          data.loading ? <div>Loading</div> : renderList()
        }
      </ul>
      <Link className='btn-floating btn-large red right' to='/songs/new'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  )
}

SongList.propTypes = {
  data: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired
}

export default graphql(DELETE_SONG) (
  graphql(GET_SONGS)(SongList)
);
