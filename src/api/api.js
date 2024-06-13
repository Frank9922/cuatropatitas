import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:8000/api'
    })
})