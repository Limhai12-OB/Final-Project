import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";

const initialState = {
  isAuthenticated: false,
  accessToken: "",
  profile: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        //
        state.isAuthenticated = false;

        // state.profile = {}
      })
      .addCase(login.fulfilled, (state, action) => {
        //
        state.isAuthenticated = true;
        state.accessToken = action.payload.access_token;
        console.log("status", state.isAuthenticated);
        console.log("access token ", state.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        //
        state.isAuthenticated = false;
        console.log("rejected", action.error);
      });
    logout: (state) => {
      state, (isAuthenticated = false);
      localStorage.removeItem(Token);
    };
    // logout: (state) => {
    //   state.isAuthenticated = false;
    //   localStorage.removeItem("token"); // Or wherever you store the token
    //   // Clear other user data as needed
    // };
  },
});
// export const { logout } = authSlice.actions;
export default authSlice.reducer;
