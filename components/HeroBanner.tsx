import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../api/MovieService';

interface HeroBannerProps {
  movie: Movie | undefined;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  if (!movie) return null;

  const backdropUrlBase = "https://image.tmdb.org/t/p/w780";
  const backdropUrl = `${backdropUrlBase}${movie.backdrop_path}`;

  return (
    <ImageBackground source={{ uri: backdropUrl }} style={styles.bannerContainer} resizeMode="cover">
      <View style={styles.overlayGradient} />
      
      <View style={styles.infoWrapper}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.movieSubInfo}>
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}  |  {movie.release_date}  |  Horror, Mystery
        </Text>
        
        <View style={styles.buttonGroup}>
          <TouchableOpacity activeOpacity={0.9} style={styles.playButton}>
            <Text style={styles.playButtonText}>▶ Tonton</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bannerContainer: { width: '100%', height: 400, justifyContent: 'flex-end' },
  overlayGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(12, 12, 18, 0.6)',
  },
  infoWrapper: { padding: 16, zIndex: 20 },
  movieTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: '900', letterSpacing: 0.3 },
  movieSubInfo: { color: '#D1D5DB', fontSize: 12, marginTop: 4 },
  buttonGroup: { flexDirection: 'row', marginTop: 16 },
  playButton: { flex: 1, backgroundColor: '#00D2FF', borderRadius: 12, height: 44, alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  playButtonText: { color: '#000000', fontWeight: '700', fontSize: 14 },
  addButton: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 12, width: 48, height: 44, alignItems: 'center', justifyContent: 'center' },
  addButtonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 18 },
});