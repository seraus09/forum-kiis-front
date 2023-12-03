import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const LikeDislikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likeStatus, setLikeStatus] = useState(null);

  const handleLike = () => {
    if (likeStatus === 'like') {
      setLikes(likes - 1);
      setLikeStatus(null);
    } else {
      setLikes(likes + 1);
      setDislikes(dislikes - (likeStatus === 'dislike' ? 1 : 0));
      setLikeStatus('like');
    }
  };

  const handleDislike = () => {
    if (likeStatus === 'dislike') {
      setDislikes(dislikes - 1);
      setLikeStatus(null);
    } else {
      setDislikes(dislikes + 1);
      setLikes(likes - (likeStatus === 'like' ? 1 : 0));
      setLikeStatus('dislike');
    }
  };

  return (
    <div>
      <IconButton color={likeStatus === 'like' ? 'primary' : 'default'} onClick={handleLike}>
        <ThumbUpIcon />
      </IconButton>
      {likes}

      <IconButton color={likeStatus === 'dislike' ? 'primary' : 'default'} onClick={handleDislike}>
        <ThumbDownIcon />
      </IconButton>
      {dislikes}
    </div>
  );
};

export default LikeDislikeButton;
