import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


/**
 * send request to Api for login with email and password
 * @param { string } email
 * @param { string } password
 */
  export const loginUser = createAsyncThunk(
    "users/login",
    async ({ email, password }, thunkAPI) => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, }),
          }
        )
        let data = await response.json()
        //console.log("response", data)
        if (response.status === 200) {
          return data
        } else {
          alert(data.message)
          return thunkAPI.rejectWithValue(data)
        }
      } catch (e) {
        console.log("Error", e.response.data)
        thunkAPI.rejectWithValue(e.response.data)
      }
    }
  )

  /**
 * send request to Api for recover informations of user with the previously retrieved token
 * @param { string } token
 */
  export const fetchUserBytoken = createAsyncThunk(
    'users/fetchUserByToken',
    async ({ token }, thunkAPI) => {
      try {
        const response = await fetch(
          'http://localhost:3001/api/v1/user/profile',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer' + token,
              'Content-Type': 'application/json',
            },
          }
        );
        let data = await response.json();
        //console.log('data', data, response.status);
  
        if (response.status === 200) {
          return { ...data };
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log('Error', e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

   /**
 * send request to Api to change the first name and/or the last name
 * @param { string } token
 * @param { string } firstName
 * @param { string } lastName
 */
  export const updateName = createAsyncThunk(
    'users/changeName',
    async ({ token, firstName, lastName }, thunkAPI) => {
      try {
        const response = await fetch(
          'http://localhost:3001/api/v1/user/profile',
          {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer' + token,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName: firstName, lastName: lastName })
          }
        );
        let data = await response.json();
        //console.log('data', data, response.status);
  
        if (response.status === 200) {
          return { ...data };
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log('Error', e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

   /**
 * Retrieves the states of the previous functions and retrieves the data to put them in other states which are retrieved in the components
 */
  export const userSlice = createSlice({
    name: "user",
    initialState: {
      token: "",
      firstName: "",
      lastName: "",
      isFetching: false,
      isSuccess: false,
      isError: false,
    },
    reducers: {
        clearState: (state) => {
          state.isError = false;
          state.isSuccess = false;
          state.isFetching = false;
          return state;
        },
      },
      extraReducers: {
        [loginUser.fulfilled]: (state, { payload }) => {
          state.token = payload.body.token;
          state.isFetching = false;
          state.isSuccess = true;
          return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
          console.log('payload', payload);
          state.isFetching = false;
          state.isError = true;
        },
        [loginUser.pending]: (state) => {
          state.isFetching = true;
        },
        [fetchUserBytoken.pending]: (state) => {
          state.isFetching = true;
        },
        [fetchUserBytoken.fulfilled]: (state, { payload }) => {
          state.firstName = payload.body.firstName;
          state.lastName = payload.body.lastName;
          state.isFetching = false;
          state.isSuccess = true;
        },
        [fetchUserBytoken.rejected]: (state) => {
          console.log('fetchUserBytoken');
          state.isFetching = false;
          state.isError = true;
        },
        [updateName.pending]: (state) => {
          state.isFetching = true;
        },
        [updateName.fulfilled]: (state, { payload }) => {
          state.firstName = payload.body.firstName;
          state.lastName = payload.body.lastName;
          state.isFetching = false;
          state.isSuccess = true;
        },
        [updateName.rejected]: (state) => {
          console.log('updateName');
          state.isFetching = false;
          state.isError = true;
        },
      },
  })

  export const { clearState } = userSlice.actions;
  export const userSelector = state => state.user
  