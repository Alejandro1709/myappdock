const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    if (posts.length === 0) {
      return res.status(404).json({ message: 'No Posts were found' });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'No Posts were found' });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.createPost = async (req, res) => {
  let { title, body } = req.body;

  try {
    const post = await Post.create({ title, body });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.updatePost = async (req, res) => {
  let { title, body } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, body },
      {
        runValidators: true,
        new: true,
      }
    );

    if (!post) {
      return res.status(404).json({ message: 'No Posts were found' });
    }

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'No Posts were found' });
    }

    res.status(200).json({ message: 'Post Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
