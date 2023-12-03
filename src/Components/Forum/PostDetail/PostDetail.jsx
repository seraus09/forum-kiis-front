import React from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../../Store/Forum/postDetail/actions';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Card } from '@mui/material';
import PostRating from '../../Rating/Rating';
import AddCommentModal from './AddCommentModal';
import CommentList from './CommentList';
import LikeDislikeButton from './LikeDislikeButton'

const PostDetail = () => {
  const postId = useParams()
  const dispatch = useDispatch();
  const token =  useSelector(state => state.loginReducer.token);
  const loading =  useSelector(state => state.getPostReducer.loading);
  const post = useSelector(state => state.getPostReducer.post);

  console.log(loading)
  console.log(post)
  React.useEffect(() => {
    dispatch(getPost(token, postId.postId));
   
  }, [dispatch, token, postId]);
  console.log(post)
  return (
    <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            marginTop={15}
            gap={2}
            position={'relative'}
            >   
    {loading ?  <CircularProgress /> 
      :
      <Box
      minWidth='275px'
      width='720px'
      >
      <Card
        sx={{
          padding: '24px'
        }}>
        <Box
         paddingBottom={2}
         display="flex"
        justifyContent="space-between"
        >
          <PostRating rating={post.rating}/>
          <LikeDislikeButton />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between">
          <Typography variant="h6">Aвтор: {post?.author?.firstName} {post?.author?.lastName}</Typography>
          <Typography variant="body1">{post?.createdAt}</Typography>
        </Box>
        <Typography sx={{ margin: '24px 0' }} variant="h4">{post.title}</Typography>
        <Typography variant="body1">{post.content}</Typography>
      </Card>
      <Card
        sx={{
          marginTop: '24px',
          padding: '24px'
        }}
      >
      <CommentList comments={post.comments}/>
      </Card>
      </Box>
      }
      <AddCommentModal/>
    </Box>
)};

export default PostDetail;