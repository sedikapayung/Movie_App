import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import HeroBanner from '../components/HeroBanner';
import HorizontalMovieSection from '../components/HorizontalMovieSection';
import useMovieData from '../hooks/useMovieData';

export default function HomeScreen() {
  const { movies, isLoading, error } = useMovieData();

  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#00D2FF" />
        <Text style={styles.loadingText}>Memuat Film...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>Koneksi Gagal</Text>
        <Text style={styles.errorSubText}>{error}</Text>
      </View>
    );
  }

  const heroMovie = movies[0];
  const trendingMovies = movies.slice(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Render Banner Utama */}
        <HeroBanner movie={heroMovie} />

        {/* Render Baris Slider */}
        <HorizontalMovieSection sectionTitle="Sedang Tren" moviesList={trendingMovies} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0C0C12' },
  scrollContainer: { flex: 1 },
  center: { justifyContent: 'center', alignItems: 'center' },
  loadingText: { color: '#9CA3AF', marginTop: 12, fontSize: 13 },
  errorText: { color: '#FF2E93', fontSize: 15, fontWeight: 'bold' },
  errorSubText: { color: '#6B7280', fontSize: 12, marginTop: 4 },
});