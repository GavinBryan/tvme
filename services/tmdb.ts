const TMDB_API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const TMDB_ACCESS_TOKEN = process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export type TMDBMovie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export type TMDBResponse = {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
};

export async function getPopularMovies(page: number = 1): Promise<TMDBResponse> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/now_playing?language=en-US&page=${page}`,
    {
      headers: {
        'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
        'accept': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  return response.json();
}

export function getPosterUrl(path: string): string {
  return `https://image.tmdb.org/t/p/w500${path}`;
} 