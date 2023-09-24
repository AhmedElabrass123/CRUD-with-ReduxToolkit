import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../redux/postsSlice";

const EditPost = ({ setIsEdit, post }) => {
  const [titleUpdate, setTitleUpdate] = useState("");
  const [descUpdate, setDescUpdate] = useState("");
  const titleRef = useRef();
  const descRef = useRef();
  const dispatch = useDispatch();
  const editData = () => {
    if (titleRef.current.value == "" || descRef.current.value == "") {
      alert("Please fill the fields............!");
    } else {
      dispatch(
        updatePost({
          id: post.id,
          title: titleUpdate,
          desc: descUpdate,
        })
      );
      setIsEdit(false);
    }
  };
  return (
    <>
      <div className="editSec">
        <input
          type="text"
          placeholder="Edit Title"
          onChange={(e) => setTitleUpdate(e.target.value)}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="Edit Desc"
          onChange={(e) => setDescUpdate(e.target.value)}
          ref={descRef}
        />
        <button
          className="bg-yellow-500 text-white hover:bg-yellow-400"
          onClick={editData}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default EditPost;
