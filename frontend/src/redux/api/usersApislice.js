import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Define the user authentication API endpoint
// @des - describes what the endpoint does
// endpoint --> http://localhost:5000/api/v1/users/auth
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a "login" endpoint, which is a mutation (modifying data)
    login: builder.mutation({
      // Define how to make a request for the "login" endpoint
      query: (data) => ({
        url: `${USERS_URL}/auth`, // The URL for user authentication
        method: "POST", // Using the HTTP POST method
        body: data, // Send some data (like a username and password)
      }),
    }),
  }),
});

// Create a function to use the "login" mutation endpoint
// This function can be used to perform user logins
// It will be called useLoginMutation
//`use${login}Mutation`
export const { useLoginMutation } = userApiSlice;
