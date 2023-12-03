import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

import PostRating from '../../Rating/Rating';
import { getPosts } from '../../../Store/Forum/mainPage/actions';
import AddPostModal from './AddPostModal';

const MAX_CONTENT_LENGTH = 150; // Adjust as needed

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};


const Main = () => {
    
    const dispatch = useDispatch();
    const token =  useSelector(state => state.loginReducer.token);
    const postsData = useSelector(state => state.postReducer?.posts);
    const posts = postsData?.posts
    const navigate = useNavigate();
    
    React.useEffect(() => {
        dispatch(getPosts(token));
       
      }, [dispatch, token]);
    
    const handlePostClick = (postId) => {
        navigate(`/forum/post/${postId}`);
      };
    
      return (
        <Box>
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            marginTop={15}
            gap={2}
            position={'relative'}
            >       
            { Array.isArray(posts) ? posts.map((post) => (
            <Card key={post.id}
                sx={{ 
                    minWidth: 275,
                    width: 720,
                    transition: 'transform 0.2s',  // Add a smooth transition effect
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'scale(1.05)',  // Increase size on hover
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }
                    }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {Date(post.createdAt).toLocaleString("en-US")}
                </Typography>
                <Typography variant="h5" component="div">
                   {post.title}
                </Typography>
                <Typography variant="body2">
                {truncateText(post.content, MAX_CONTENT_LENGTH)}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: "space-between"
            }}>
                <Button size="small" onClick={() => handlePostClick(post.id)}>Read More</Button>
                <PostRating rating={post.rating}/>
            </CardActions>
            </Card>
            )): (
                <CircularProgress />
            )}
        </Box>
         <AddPostModal/>
        </Box>
    );
    }

export default Main;