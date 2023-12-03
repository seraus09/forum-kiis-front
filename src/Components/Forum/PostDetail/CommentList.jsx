import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent } from '@mui/material';

const CommentList = ({ comments }) => {
    if (!comments || !Array.isArray(comments) || comments.length === 0) {
        return <Typography variant="body1">Коментарів не знайдено</Typography>;
      }
    

  return (
    <div>
      <Typography variant="h6">Comments:</Typography>
      {comments.map((comment) => (
        <Box
          key={comment.id}
          marginTop={2}
        >
          <Card
            sx={{
              padding: '12px',
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="body1">
                Aвтор: {comment.author}
              </Typography>
              <Typography variant="body1">
                Дата: {comment.createdAt}
              </Typography>
            </Box>
            <CardContent>
              <Typography variant="body1">
                {comment.content}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default CommentList;