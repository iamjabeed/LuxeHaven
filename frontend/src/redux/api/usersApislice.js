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
        method: "POST",
        body: data, // Send some data (like a username and password)
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),

    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: "DELETE",
      }),
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

// Create a function to use the "login" mutation endpoint
// This function can be used to perform user logins
// It will be called useLoginMutation
//`use${login}Mutation`
export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserDetailsQuery,
} = userApiSlice;
