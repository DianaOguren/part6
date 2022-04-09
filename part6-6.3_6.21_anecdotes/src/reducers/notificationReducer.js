import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ notice: '' }]

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        setNotification : (state, action) => {
            const notice = action.payload
            state.push({notice})
        },
        unSetNotification : (state) => {
            const notice = ''
            state.push({notice})
        }
    }
})

export const { setNotification, unSetNotification } = notificationSlice.actions

let timeoutID;
export const showNotification = (message, duration) => {
    
    return dispatch => {
        dispatch(setNotification(`${message}`));
        clearTimeout(timeoutID);
        
        timeoutID = setTimeout(() => {
            dispatch(unSetNotification())
        }, duration*1000);
    }
}


export default notificationSlice.reducer