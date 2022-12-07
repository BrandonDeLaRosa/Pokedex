import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const nameSlice = createSlice({
		name: 'name',
    initialState: "",
    reducers: {
        user: (state,action) => {
           return action.payload
        }
    }
})

export const { user } = nameSlice.actions;

export default nameSlice.reducer;
