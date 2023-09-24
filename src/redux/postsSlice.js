import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState={
    items:[]
}


const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost:(state,action)=>{
            state.items.push(action.payload)
                // console.log(action)
        },
        deletePost:(state,action)=>{
            state.items=state.items.filter((item)=>item.id !== action.payload)
        },
        updatePost:(state,action)=>{
            state.items.map((item)=>{
                if(item.id===action.payload.id){
                    item.title=action.payload.title
                    item.desc=action.payload.desc

                }
            })
        }
    }
})
export default postsSlice.reducer;
export const {addPost,deletePost,updatePost}=postsSlice.actions