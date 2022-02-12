import { Post } from '../models/Post';

export const resolvers = {
  Query: {
    getAllPosts: () => Post.find(),
    getOnePost: (_, { id }) => {
      if (!id) {
        throw new Error('id не указан');
      }
      return Post.findById(id);
    },
    deletePost: (_, { id }) => {
      if (!id) {
        throw new Error('id не указан');
      }
      return Post.findByIdAndDelete(id);
    },
    updatePost: (_, { post }) => {
      if (!post.id) {
        throw new Error('id не указан');
      }
      return Post.findByIdAndUpdate(post.id, post, {
        new: true,
      });
    },
  },
  Mutation: {
    createPost: async (_, { text, title, author, picture }) => {
      const post = new Post({ text, title, author, picture });
      await post.save();
      return post;
    },
  },
};
