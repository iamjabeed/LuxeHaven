import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

//@des- endpoint --> http:localhost:5000/api/v1/users/auth

export const userApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

//`use${login}Mutation`
export const { useLoginMutation } = userApislice;
