import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: "khalil",
};
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		increment: (state) => {
			state.user = { rat };
		},
	},
});
export const { increment } = userSlice.actions;

export default userSlice.reducer;
