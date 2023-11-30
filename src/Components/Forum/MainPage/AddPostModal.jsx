import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../../Store/Forum/mainPage/actions';

const AddPostModal = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginReducer.token);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleAddPost = () => {
    setIsModalOpen(true);
  };

  const handleCreatePost = () => {
    dispatch(createPost(token, newPost));
    setIsModalOpen(false);
    setNewPost({ title: '', content: '' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewPost({ title: '', content: '' });
  };

  return (
    <>
      {/* "Add Post" button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddPost}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        Add Post
      </Button>

      {/* Modal for creating a new post */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Create a New Post</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextareaAutosize
            aria-label="Content"
            placeholder="Content"
            minRows={10}
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            style={{ width: '100%', marginTop: 10 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreatePost} color="primary">
            Create Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddPostModal;