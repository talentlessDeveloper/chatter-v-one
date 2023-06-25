import { Box, Card, Typography, IconButton } from "@mui/material";
import React from "react";
import { MdBook, MdComment, MdHeartBroken } from "react-icons/md";
import { getAllFeeds } from "../../constant/redux/feeds/feedApi";
import {
  useAppDispatch,
  useAppSelector,
} from "../../constant/redux/hooks/index";
import { stringAvatar } from "../../constant/utils/utils";

const ForYou = () => {
  const dispatch = useAppDispatch();

  const { feeds } = useAppSelector((state) => state?.feeds);

  console.log({ feeds });

  React.useEffect(() => {
    dispatch(getAllFeeds());
  }, [dispatch]);

  return (
    <>
      {feeds?.map((item, idx: number) => {
        const { author, content, title } = item;
        return (
          <Card className="shadow mt-5 p-8 " key={idx}>
            <Box className="w-[70%]">
              <Box className="flex gap-6 items-center">
                {author?.profilePic !== null ? (
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <IconButton className="border border-solid border-[purple] w-10 h-10 ">
                    <Typography
                      variant="body1"
                      className="text-[16px] uppercase "
                    >
                      {stringAvatar(
                        `${author?.firstName || ""} ${author?.lastName || ""}`
                      )}
                    </Typography>
                  </IconButton>
                )}
                <Box className="flex flex-col gap-3 ">
                  <Typography variant="h6" className="font-bold">
                    {author?.firstName} {author?.lastName}
                  </Typography>
                  <Typography variant="body1" className="font-medium ">
                    Product designer May 2023
                  </Typography>
                </Box>
              </Box>

              <Box className="mt-5 space-y-3">
                <Typography variant="h4">{title}</Typography>
                <Typography variant="subtitle1">Lorem, ipsum dolor.</Typography>
                <Typography variant="body1">{content}</Typography>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="w-full h-[300px] rounded-lg mt-4 object-cover"
                />
                <Box className="flex items-center justify-between mt-2">
                  <Box className="flex gap-2 text-base items-center">
                    <MdHeartBroken />
                    <Typography>200 likes</Typography>
                  </Box>
                  <Box className="flex gap-2 text-base items-center">
                    <MdComment />
                    <Typography>100 comments</Typography>
                  </Box>
                  <Box className="flex gap-2 text-base items-center">
                    <MdBook />
                    <Typography>2000 views</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default ForYou;
