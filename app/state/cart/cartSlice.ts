import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface  Cartstate{
    items: { [key: string]: number };
}
const initialState: Cartstate = {
    items: {},
};
const cartSlice = createSlice({
    name :'cart',
    initialState,
    reducers:{
        addItem: (state, action: PayloadAction<string>) => {
            const itemName = action.payload;
            state.items[itemName] = (state.items[itemName] || 0) + 1;
          },
 },
    
});

export const { addItem, } = cartSlice.actions;
export default cartSlice.reducer;