import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 10,
    arr: [1,2,3]
};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        // increment
        increment(state) {
            // no need to spreading return for the state it will be done automatically
             state.value++;
             state.arr.push(5);
        },
        // decrement
        decrement(state) {
            state.value--;
        },
        // amount added
        amountAdded(state, action){
            state.value += action.payload.mitch;
        },
        // reset
        resetValue(state){
            state.value = 0;
        }
    }
});

export const {increment, amountAdded, resetValue} = counterSlice.actions;
export default counterSlice.reducer;