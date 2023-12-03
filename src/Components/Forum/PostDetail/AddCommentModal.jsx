import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../Store/Forum/postDetail/actions';
import { useParams } from 'react-router-dom';


const AddCommentModal = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginReducer.token);
  const postId =  useParams()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComent] = useState({ comment: ''});

  const handleAddPost = () => {
    setIsModalOpen(true);
  };

  const handleCreatePost = () => {
    dispatch(addComment(token, postId?.postId,newComment));
    setIsModalOpen(false);
    setNewComent({ comment: '' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewComent({ comment: '' });
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddPost}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        Add comment
      </Button>

      {/* Modal for creating a new post */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Create comment</DialogTitle>
        <DialogContent sx={{width: '360px'}}>
          <TextareaAutosize
            aria-label="Comment"
            placeholder="Comment"
            minRows={10}
            value={newComment.comment}
            onChange={(e) => setNewComent({ ...newComment, comment: e.target.value })}
            style={{
                width: '100%',
                marginTop: 10 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreatePost} color="primary">
            Add comment
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddCommentModal;