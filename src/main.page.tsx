import { Box, Typography } from "@mui/material";
import { MainPageType, PageContentType } from "./types";
import Masonry from "@mui/lab/Masonry";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MarkdownRender from "./markdown.render";

export default function MainPage({ content }: { content?: MainPageType }) {
  if (!content) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "clamp(520px, 70%, 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            width="100%"
            maxWidth={500}
            loading="lazy"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3c2NDFrenRmd3MwMnl0ZGJxZXViYjB1NjBkMmhrZjAyYTQ5NmozeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eljCVpMrhepUSgZaVP/giphy.gif"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />
          <Box>
            <Typography variant="h2">{content.title}</Typography>
            <Typography variant="body1">{content.subtitle}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {content.section.map((sec, i) => (
            <RenderContent data={sec} key={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function LoadPageMd({ url }: { url: string }) {
  const { isLoading, data } = useQuery({
    queryKey: ["load-main", url],
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

function RenderContent({ data }: { data: PageContentType }) {
  const { title, content, url, imgUrls } = data;
  if (url) {
    return <LoadPageMd url={url} />;
  }
  return (
    <>
      {title && <Typography variant="body1">{title}</Typography>}
      {content && <Typography variant="body1">{content}</Typography>}
      {imgUrls && (
        <Masonry columns={4} spacing={2}>
          {imgUrls.map((i) => (
            <Box component="img" loading="lazy" key={i} src={i} />
          ))}
        </Masonry>
      )}
    </>
  );
}
