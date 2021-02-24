import gql from 'graphql-tag';

export const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
    }
  }
`;
