import gql from 'graphql-tag';

export const ADD_LYRIC = gql`
  mutation AddLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;
