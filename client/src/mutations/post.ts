import { gql } from '@apollo/client';

export const CREATE_POST = gql`
  mutation createPost($input: inputPost) {
    createUser(input: $input) {
      title
      id
      text
      author
      picture
    }
  }
`;
