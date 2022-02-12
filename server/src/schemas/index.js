import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getAllPost: [Post]
    getOnePost(id: String): Post
    deletePost(id: String): Post
    updatePost(post: inputPost): Post
  }

  input inputPost {
    id: String!
    author: String
    text: String
    title: String
    picture: String
  }

  type Mutation {
    createPost(
      author: String
      text: String
      title: String
      picture: String
    ): Post
  }

  type Post {
    id: String
    author: String
    text: String
    title: String
    picture: String
  }
`;
