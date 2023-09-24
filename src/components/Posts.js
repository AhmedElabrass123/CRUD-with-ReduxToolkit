import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../redux/postsSlice";
import EditPost from "./EditPost";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const titleRef = useRef();
  const descRef = useRef();
  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  // <============deletePost Func============>
  const deleteItem = (id) => {
    dispatch(deletePost(id));
  };
  // <============editPost Func============>
  const editItem = (id) => {
    setIsEdit(true);
    setEditId(id);
  };
  // <============get data  Func============>
  const getData = () => {
    if (titleRef.current.value == "" || descRef.current.value == "") {
      alert("Please fill your fields..........!");
    } else {
      dispatch(addPost({ id: posts.length + 1, title: title, desc: desc }));
      titleRef.current.value = "";
      descRef.current.value = "";
    }
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="form flex flex-col justify-center w-full px-[30px] sm:w-[500px]">
        <input
          type="text"
          placeholder="Post Title"
          onChange={(e) => setTitle(e.target.value)}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="Post Description"
          onChange={(e) => setDesc(e.target.value)}
          ref={descRef}
        />
        <button className="bg-green-500 text-white" onClick={getData}>
          ADD POST
        </button>
      </div>
      <div className="posts mt-[20px] w-full">
        {/* ============================================================ */}
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div
                key={post.id}
                className="post  text-left flex flex-col gap-[20px] mb-[20px] w-full sm:w-[50%] md:w-[45%] lg:w-[31%]"
              >
                <h2 className="text-[18px] font-semibold">
                  Post Title :{" "}
                  <span className="text-[17px] font-bold capitalize text-green-800">
                    {post.title}
                  </span>
                </h2>
                <p className="text-[18px] font-semibold">
                  Post Description :{" "}
                  <span className="text-[17px] font-bold capitalize text-gray-500">
                    {post.desc}
                  </span>
                </p>
                <div className="flex items-center justify-between py-[10px]">
                  <button
                    className="bg-blue-500 text-white hover:bg-blue-400"
                    onClick={() => editItem(post.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-800 text-white hover:bg-red-700"
                    onClick={() => deleteItem(post.id)}
                  >
                    Delete
                  </button>
                </div>
                {isEdit && editId === post.id && (
                  <EditPost setIsEdit={setIsEdit} post={post} />
                )}
              </div>
            );
          })
        ) : (
          <h2 className="text-[30px] text-red-600 font-semibold">
            There is no posts...............!
          </h2>
        )}
        {/* ============================================================ */}
      </div>
    </div>
  );
};

export default Posts;
