import { apiClient } from '../api/ApiClient';

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
}

export interface TMDBResponse {
  page: number;
  results: Movie[];
}

export const movieService = {
  getPopularMovies: async (): Promise<TMDBResponse> => {
    return await apiClient.get<TMDBResponse>('/movie/popular');
  }
};