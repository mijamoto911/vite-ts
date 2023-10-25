import { ImageList, ImageListItem, Skeleton } from "@mui/material";

const Loader = () => {
  return (
    <ImageList cols={4} gap={16}>
      {Array.from({ length: 20 }).map((_, index) => (
        <ImageListItem key={index}>
          <Skeleton animation="wave" variant="rect" width={250} height={250} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export { Loader };
