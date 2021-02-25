import gql from 'graphql-tag';

export const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
    }
  }
`;

export const GET_SONG = gql`
  query GetSong ($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;
