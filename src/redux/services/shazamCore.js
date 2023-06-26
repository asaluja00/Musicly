

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '857ad258edmshf4f276dbca5518fp1edf6djsn6c996b73fe1e');


      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => '/charts/track' ,
}),
    getSongsByGenre: builder.query({ query: () => 'charts/track?startFrom=21'}),
    getSongsByCountry: builder.query({ query: () => 'charts/track?startFrom=41' }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `search?term=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `songs/get-details?key=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `songs/list-recommendations?key=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;

