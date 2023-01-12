import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {api} from "./api";

export const SpacexApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getLaunches: builder.query({
            query: () => "launches",
        }),
        getLaunch: builder.query({
            query: (id) => `launches/${id}`,
        })
    })
})

export const {useGetLaunchesQuery, useGetLaunchQuery} = SpacexApi