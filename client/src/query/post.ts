import { gql } from '@apollo/client';

export const GET_ALL_POST = gql`
  query {
    getAllPost {
      title
      id
      text
      author
      picture
    }
  }
`;

export const GET_ONE_POST = gql`
  query getOnePost($id: ID) {
    getOnePost(id: $id) {
      title
      id
      text
      author
      picture
    }
  }
`;
