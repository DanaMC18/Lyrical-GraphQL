import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { LIKE_LYRIC } from 'client/mutations/lyrics';

class LyricList extends Component {

  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typname: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    })
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li className='collection-item' key={ id }>
        {content}
        <div className='vote-box'>
          <i className='material-icons' onClick={ () => this.onLike(id, likes) }>
            thumb_up
          </i>
          { likes }
        </div>
      </li>
    ))
  }

  render() {
    return (
      <ul className='collection'>
        { this.renderLyrics() }
      </ul>
    )
  }
}

export default graphql(LIKE_LYRIC)(LyricList);
