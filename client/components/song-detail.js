import React from 'react';
import PropTypes from 'prop-types'
import { GET_SONG } from 'client/queries/songs';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import LyricCreate from 'client/components/lyric-create';


const SongDetail = ({ data }) => (
  <div>
    <Link to='/'>Back</Link>
    {
      !data.loading && (
        <div>
          <h3>{data.song.title}</h3>
          <LyricCreate songId={data.song.id} />
        </div>
      )
  }
  </div>
);

SongDetail.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default graphql(
  GET_SONG, {
    options: (props) => { return { variables: { id: props.params.id } } }
  }
)(SongDetail);
