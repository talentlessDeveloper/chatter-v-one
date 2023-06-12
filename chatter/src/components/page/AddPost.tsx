import { Box, Button } from "@mui/material";
import { convertToRaw, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const samplePost =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia error omnis, earum incidunt similique ipsum nihil quidem fuga! Repudiandae veritatis voluptatum dolorem nisi. Culpa at, doloremque perspiciatis expedita qui enim hic quos consectetur rem, unde voluptate. Eveniet, placeat quod. ";

const AddPost = () => {
  const [post, setPost] = useState(() => EditorState.createEmpty());
  // const [postState, setPostState] = useState("");
  const [postMarkup, setPostMarkup] = useState("");

  useEffect(() => {
    setPost(() => EditorState.createEmpty());
  }, []);

  const handlePost = (post: any) => {
    setPost(post);
    const post_text = draftToHtml(convertToRaw(post.getCurrentContent()));
    setPostMarkup(post_text);
  };

  console.log(postMarkup);
  return (
    <Box className='w-11/12 p-2 border-2 border-solid border-gray-300 h-full mx-auto my-5'>
      <Box className='w-full flex items-center justify-end mb-5'>
        <Button variant='contained' className='bg-violet-700'>
          Publish
        </Button>
      </Box>
      <Editor
        onEditorStateChange={handlePost}
        editorState={post}
        toolbar={{
          emoji: {
            emoji: true,
          },
          image: {
            uploadCallback: () => {},
            alt: { present: true, mandatory: true },
          },
          font: {
            family: {
              options: ["Arial", "Georgia", "Impact", "Tahoma", "Verdana"],
            },
          },
          heading: {
            options: [1, 2, 3, 4, 5, 6],
          },
        }}
      />
    </Box>
  );
};

export default AddPost;
