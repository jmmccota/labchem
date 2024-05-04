import React from 'react';
import { PageContentType } from './types';
import axios from 'axios';
import MarkdownRender from './markdown.render';
import { useQuery } from '@tanstack/react-query';
import { Box, Typography } from '@mui/material';

function LoadPageMd({ url }: { url: string }) {
  const { isLoading, data } = useQuery({
    queryKey: ['load-page', url],
    queryFn: async () => {
      const req = await axios.get(url);
      return req.data;
    },
  });

  if (isLoading || !data) {
    return <>...Loading...</>;
  }

  return <MarkdownRender>{data}</MarkdownRender>;
}

function PageRender({ data }: { data: PageContentType }) {
  if (data.url) {
    return <LoadPageMd url={data.url} />;
  }
  const { title, content } = data as PageContentType;
  return (
    <>
      <Typography variant="h2">{title}</Typography>
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
    </>
  );
}

export default function PageComponent({ data }: { data: PageContentType }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'clamp(620px, 80%, 100%)',
      }}
    >
      <PageRender data={data} />
    </Box>
  );
}
