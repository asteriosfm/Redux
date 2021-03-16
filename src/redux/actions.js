import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "./types"


export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

//export const showLoader = () => {
//  return {
//    type: SHOW_LOADER
//  }
//}

//export const hideLoader = () => {
//  return {
//    type: HIDE_LOADER
//  }
//}

export const fetchPosts = () => {
  return async dispatch => {
    dispatch({ 
      type: SHOW_LOADER
    })
    const rsp = await fetch('https://jsonplaceholder.typicode.com/posts? limit=10');
    const fetchedPosts = await rsp.json();
    dispatch({
      type: FETCH_POSTS,
      payload: fetchedPosts
    });
    setInterval(() => {
      return dispatch({
        type: HIDE_LOADER
      })
    }, 2000)
  }
}
