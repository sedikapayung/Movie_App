import { useState, useEffect } from 'react';
import { movieService, Movie } from '../api/MovieService';

export default function useMovieData() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        const data = await movieService.getPopularMovies();
        setMovies(data.results || []);
      } catch (err: any) {
        setError(err.message || 'Terjadi kesalahan sistem');
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, []);

  return { movies, isLoading, error };
}