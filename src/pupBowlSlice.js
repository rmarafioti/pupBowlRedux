import api from "./api";

const pupBowlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    pupPlayers: builder.query({
      query: () => "/players",
      providesTags: ["Players"],
    }),
  }),
});

export const { usePupPlayersQuery } = pupBowlApi;
