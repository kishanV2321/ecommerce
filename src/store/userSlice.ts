import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string;
    name: string;
    email: string;
    photoURL: string;
    // Add other user properties here
}

const userSlice = createSlice({
    name: "user",
    initialState: null as User | null,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
        removeUser: (state) => {
            return null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
