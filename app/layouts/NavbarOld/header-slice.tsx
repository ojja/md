import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    headerData:{}
};

const headerSlice = createSlice({
    name:'header',
    initialState,
    reducers:{
        // increment
        addHeaderData(state, action) {
            // no need to spreading return for the state it will be done automatically
             state.headerData = action.payload;
        },
    }
});

export const {addHeaderData} = headerSlice.actions;
export default headerSlice.reducer;