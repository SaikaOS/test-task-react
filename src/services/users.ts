import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void> ({
            // get all users from api
            query: () => 'users',
            transformResponse: (response:any) => response.data
        }),
        getSingleUser: builder.query<IUser, string | number | undefined> ({
            // get single users from api with id
            query: (id) => `users?id=${id}`,
            transformResponse: (response:any) => response.data
        })
    })
})

export const { useGetUsersQuery, useGetSingleUserQuery } = usersApi