import mongoose from 'mongoose';

export const Post = mongoose.model('Post', {
  author: { type: String, required: true },
  text: { type: String, required: true },
  title: { type: String, required: true },
  picture: { type: String },
});
