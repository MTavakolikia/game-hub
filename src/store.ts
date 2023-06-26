import { create } from "zustand";

interface GameQuery {
  genre?: number;
  platform?: number;
  sortOrder?: string;
  searchText?: string;
}

interface QueryGameStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platfromId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}
const useGameQueryStore = create<QueryGameStore>(set => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } }))
}))

export default useGameQueryStore