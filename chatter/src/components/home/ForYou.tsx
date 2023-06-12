import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { MdBook, MdComment, MdHeartBroken } from "react-icons/md";

const ForYou = () => {
  return (
    <>
      {Array(20)
        .fill("")
        .map((item, idx) => {
          return (
            <Card className='shadow mt-5 p-8 ' key={idx}>
              <Box className='w-[70%]'>
                <Box className='flex gap-6 items-center'>
                  <Box
                    component='img'
                    src='https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                    className='w-[100px] h-[100px] rounded-full object-cover'
                  />
                  <Box className='flex flex-col gap-3 '>
                    <Typography variant='h6' className='font-bold'>
                      Grace Ikpang
                    </Typography>
                    <Typography variant='body1' className='font-medium '>
                      Product designer May 2023
                    </Typography>
                  </Box>
                </Box>

                <Box className='mt-5 space-y-3'>
                  <Typography variant='h4'>
                    Lorem ipsum dolor sit amet consectetur.
                  </Typography>
                  <Typography variant='subtitle1'>
                    Lorem, ipsum dolor.
                  </Typography>
                  <Typography variant='body1'>
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aperiam dicta eaque exercitationem dolor? Officiis nisi ex
                    sequi asperiores dolorem vitae omnis quod, perspiciatis sed
                    rerum expedita explicabo ullam possimus. Id totam ut nostrum
                    non dolores! Obcaecati laudantium dicta vitae. Est
                    consequatur animi maiores quas nam officia enim placeat,
                    quasi nostrum quidem iste consequuntur earum. Dolorem
                    possimus delectus vero tenetur excepturi ex dignissimos
                    debitis eius accusantium magni! Dicta corrupti dolore
                    cumque.
                  </Typography>
                  <Box
                    component='img'
                    src='https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                    className='w-full h-[300px] rounded-lg mt-4 object-cover'
                  />
                  <Box className='flex items-center justify-between mt-2'>
                    <Box className='flex gap-2 text-base items-center'>
                      <MdHeartBroken />
                      <Typography>200 likes</Typography>
                    </Box>
                    <Box className='flex gap-2 text-base items-center'>
                      <MdComment />
                      <Typography>100 comments</Typography>
                    </Box>
                    <Box className='flex gap-2 text-base items-center'>
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
