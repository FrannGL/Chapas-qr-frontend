import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { UserProps } from "@/typescript/users.interface";

const userInitialState: UserProps[] = [];

export const UserSlice = createSlice({
  name: "userData",
  initialState: userInitialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserProps[]>) => {
      return action.payload;
    },
  },
});

export const { setUserData } = UserSlice.actions;
export const userState = (state: RootState) => state.userData;
export default UserSlice.reducer;
