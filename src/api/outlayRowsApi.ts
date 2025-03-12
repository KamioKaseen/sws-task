import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface OutlayRow {
  id: string;
  parentId: string | null;
  rowName: string;
  salary: number;
  equipment: number;
  overheads: number;
  estimatedProfit: number;
}

export interface CreateEntityResponse {
  id: number;
  rowName: string;
}

export interface CreateRowRequest {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName:	string;
  salary: number;
  supportCosts: number;
}

export interface UpdateRowRequest {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId: number;
  rowName:	string;
  salary: number;
  supportCosts: number;
}

export interface GetTreeRows {
    child: [
      null
    ],
    equipmentCosts: number;
    estimatedProfit: number;
    id: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    rowName: string;
    salary: number;
    supportCosts: number;
    total: number
}

export interface DeleteRowRequest {
  eID: string;
  rID: string;
}

// const eID = 150231;

export const outlayRowsApi = createApi({
  reducerPath: 'rowsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.244.172.108:8081/v1/outlay-rows/entity/',
  }),
  tagTypes: ['OutlayRows'],
  endpoints: (builder) => ({
    fetchRows: builder.query<OutlayRow[], number>({
      query: (eID) => `${eID}/row/list`,
      providesTags: ['OutlayRows'],
    }),

    createRow: builder.mutation<OutlayRow[], { eID: number; body: CreateRowRequest }>({
      query: ({ eID, body }) => ({
        url: `${eID}/row/create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['OutlayRows'],
    }),

    updateRow: builder.mutation<OutlayRow[], { eID: string; rID: string; body: UpdateRowRequest }>({
      query: ({ eID, rID, body }) => ({
        url: `/entity/${eID}/row/${rID}/update`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['OutlayRows'],
    }),

    deleteRow: builder.mutation<OutlayRow[], DeleteRowRequest>({
      query: ({ eID, rID }) => ({
        url: `/entity/${eID}/row/${rID}/delete`,
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
