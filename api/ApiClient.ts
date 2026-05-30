const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c440aa1fd55e2513055a1a147bc87072';

export const apiClient = {
  get: async <T>(endpoint: string): Promise<T> => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=id-ID`);
      
      if (!response.ok) {
        throw new Error(`Koneksi server bermasalah (Status: ${response.status})`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Network Error pada endpoint ${endpoint}:`, error);
      throw error;
    }
  }
};