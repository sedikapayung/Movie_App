import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface MovieCardProps {
  posterPath: string | null;
  title: string;
  voteAverage: number;
}

export default function MovieCard({ posterPath, title, voteAverage }: MovieCardProps) {
  const imageUrlBase = "https://image.tmdb.org/t/p/w342";
  const posterUrl = posterPath 
    ? `${imageUrlBase}${posterPath}` 
    : "https://via.placeholder.com/342x513?text=No+Poster";

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: posterUrl }} style={styles.posterImage} resizeMode="cover" />
      </View>
      <Text numberOfLines={1} style={styles.movieTitle}>{title}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.starIcon}>⭐</Text>
        <Text style={styles.ratingText}>{voteAverage ? voteAverage.toFixed(1) : "0.0"}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: { width: 112, marginRight: 16 },
  imageWrapper: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1A1A24',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  posterImage: { width: '100%', height: '100%' },
  movieTitle: { color: '#FFFFFF', fontSize: 12, fontWeight: '600', marginTop: 8 },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  starIcon: { fontSize: 10, marginRight: 4 },
  ratingText: { color: '#9CA3AF', fontSize: 10, fontWeight: '500' },
});