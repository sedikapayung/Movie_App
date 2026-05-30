import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Movie } from '../api/MovieService';
import MovieCard from './MovieCard';

interface HorizontalMovieSectionProps {
  sectionTitle: string;
  moviesList: Movie[];
}

export default function HorizontalMovieSection({ sectionTitle, moviesList }: HorizontalMovieSectionProps) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {moviesList.map((movie) => (
          <MovieCard 
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: { marginTop: 24, paddingLeft: 16 },
  sectionTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '700', marginBottom: 12, letterSpacing: 0.5 },
  scrollContent: { paddingRight: 16 },
});