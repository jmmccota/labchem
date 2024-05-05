import { Box, Typography } from '@mui/material';
import { MainPageType } from './types';

export default function MainPage({ content }: { content?: MainPageType }) {
  if (!content) {
    return null;
  }
  return <Box sx={{display: 'flex', flexDirection: 'column'}}>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Typography variant='h2'>{content.title}</Typography>
      <Typography variant='body1'>{content.subtitle}</Typography>
    </Box>
  </Box>;
}
