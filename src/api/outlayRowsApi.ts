import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { 
  RowResponse, 
  OutlayRowRequest, 
  OutlayRowUpdateRequest, 
  DeleteRowRequest 
} from './outlayRowsApi.types';

export const eID = 150231; 

export const outlayRowsApi = createApi({
  reducerPath: 'rowsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.244.172.108:8081/v1/outlay-rows/entity/',
  }),
  tagTypes: ['OutlayRows'],
  endpoints: (builder) => ({
    fetchRows: builder.query<RowResponse[], number>({
      query: (eID) => `${eID}/row/list`,
      providesTags: ['OutlayRows'],
    }),

    createRow: builder.mutation<RowResponse, { eID: number; body: OutlayRowRequest }>({
      query: ({ eID, body }) => ({
        url: `${eID}/row/create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['OutlayRows'],
    }),

    updateRow: builder.mutation<RowResponse, { eID: number; rID: number; body: OutlayRowUpdateRequest }>({
      query: ({ eID, rID, body }) => ({
        url: `${eID}/row/${rID}/update`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['OutlayRows'],
    }),

    deleteRow: builder.mutation<RowResponse, DeleteRowRequest>({
      query: ({ eID, rID }) => ({
        url: `${eID}/row/${rID}/delete`,
        method: 'DELETE',
      }),
      invalidatesTags: ['OutlayRows'],
    }),
  }),
});

export const {
  useFetchRowsQuery,
  useCreateRowMutation,
  useUpdateRowMutation,
  useDeleteRowMutation,
} = outlayRowsApi;
