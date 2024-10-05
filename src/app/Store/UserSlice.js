'use client';
import {createSlice} from "@reduxjs/toolkit"

const initialState={
    image:"",
    email:"",
    fullname:"",
    location:"",
    aboutme:"",
    expiry:""
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        updateUser(state,action) {
            console.log("User Slice - update user");
            console.log(action.payload);
            
            state.image = action.payload.avatar_url,
            state.email = action.payload.email,
            state.name = action.payload.name,
            state.location = action.payload.location,
            state.aboutme = action.payload.about_me,
            state.expiry = action.payload.expiry
        },
    },
});


/**
 * const reducer = (state = defaultObj, action: any) => {
  switch (action.type) {
    case 'updateObj':
      return action.payload;
    default:
      return state;
  }
};
 * 
 * 
 * 
 */

export const { updateUser } = userSlice.actions

export default userSlice.reducer ;
