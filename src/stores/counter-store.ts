import { create } from "zustand";
interface FavoritePhoto {
  id: number;
  title: string;
  thumbnailUrl: string;
}
export interface FavoriteState {
  favorites: FavoritePhoto[];
  increase: (photo: FavoritePhoto) => void;
}

export const useFavoriteStore = create<FavoriteState>()((set) => ({
  favorites: [],
  increase: (photo: FavoritePhoto) =>
    set((state) => {
      const isFavorite = state.favorites.find((fav) => fav.id === photo.id);
      return {
        favorites: isFavorite
          ? state.favorites.filter((fav) => fav.id !== photo.id) // Favoriden çıkar
          : [...state.favorites, photo], // Favoriye ekle
      };
    }),
}));
