import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

// Create a base query function that specifies the base URL for API requests
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Create an API slice using Redux Toolkit
export const apiSlice = createApi({
  // Use the base query function to make API requests to the specified base URL
  baseQuery,

  // Define tag types for organizing and grouping API-related actions
  tagTypes: ["Product", "Order", "User", "Category"],

  // Define API endpoints (empty in this example, you can define them later)
  endpoints: () => ({}),
});
