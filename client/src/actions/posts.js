import * as api from '../api/index'

export const getPosts  = () => async (dispatch) => {
    try {      
        const {data} = await api.fetchPosts();

        dispatch({ type: "FETCH_ALL", payload: data })

    }catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async dispatch => {
    try {

        const {data} = await api.creatPost(post);

        dispatch({ type: "CREATE_POST", payload: data })

    } catch(error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async dispatch => {
    try {
        const {data} = await api.updatePost(id, post);

        dispatch({ type: "UPDATE_POST", payload: data })

    } catch(error){
        console.log(error)
    }
}

export const deletePost = (id, post) => async dispatch => {
    try {
        await api.deletePost(id);

        dispatch({ type: "DELETE_POST", payload: id })

    } catch(error){
        console.log(error)
    }
}

export const likePost = (id, post) => async dispatch => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: "LIKE_POST", payload: data })

    } catch(error){
        console.log(error)
    }
}