import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '../store';

const baseQuery = fetchBaseQuery({
    reducerPath: 'generalApi',
    baseUrl: 'https://api.spacex.land/rest',
    prepareHeaders: (headers) => {
        const token = '123456789';
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const api = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
});
