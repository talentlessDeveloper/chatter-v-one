import { Box } from "@mui/material";
import React from "react";
import { MdDoorbell, MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <Box className='shadow flex items-center h-16 px-4 w-full'>
      <Box className='w-3/4 flex items-center justify-center '>
        <Box className='flex border-solid border-gray-200 border rounded-lg items-center gap-4 w-[70%] h-[40px]'>
          <MdSearch className='text-xl' />
          <input className='outline-none border-none w-full ' />
        </Box>
      </Box>
      <Box className='w-1/4 flex items-center gap-5'>
        <MdDoorbell className='text-xl' />

        <Box
          component='img'
          src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='w-10 h-10 rounded-full object-cover'
        />
      </Box>
    </Box>
  );
};

export default Header;
