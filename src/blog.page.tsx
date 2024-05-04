import { BlogType, PageContentType } from './types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MarkdownRender from './markdown.render';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

function LoadBlogMd({ url }: { url: string }) {
  const { isLoading, data } = useQuery({
    queryKey: ['blog-post', url],
    queryFn: async () => {
      const req = await axios.get(url);
      return req.data;
    },
  });

  if (isLoading || !data) {
    return <>...Loading...</>;
  }

  return (
    <>
      <MarkdownRender>{data}</MarkdownRender>
      <Divider />
    </>
  );
}

function BlogComponent({ title, content, date, imgUrls }: PageContentType) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          mb: 2,
        }}
      >
        <Typography variant="h4">{title}</Typography>
        {date && <Typography variant="subtitle2">{date.toString()}</Typography>}
      </Box>

      {imgUrls && (
        <Masonry columns={4} spacing={2}>
          {imgUrls.map((i) => (
            <Box component="img" key={i} src={i} />
          ))}
        </Masonry>
      )}
      <Typography
        variant="body1"
        component="pre"
        sx={{
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          textAlign: 'justify',
        }}
      >
        {content}
      </Typography>
      <Divider sx={{ mt: 3 }} />
    </Box>
  );
}

export default function BlogPage({ content }: { content?: BlogType }) {
  if (!content) {
    return null;
  }
  if (typeof content === 'string') {
    throw 'Not implemented yet, use array as string or {title, content, date, imgUrls}';
  }
  const getArray = content as (string | PageContentType)[];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'clamp(620px, 80%, 100%)',
        gap: 2,
        mt: 2,
      }}
    >
      {getArray.map((c: string | PageContentType) => {
        if (typeof c === 'string') {
          return <LoadBlogMd url={c as string} />;
        }
        return <BlogComponent {...c} />;
      })}
    </Box>
  );
}
