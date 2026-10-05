import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const quickStats = [
  { id: '1', title: 'Orders', value: '24', color: '#4CAF50', icon: '📦' },
  { id: '2', title: 'Earnings', value: '₱8,450', color: '#FF9800', icon: '💰' },
  { id: '3', title: 'Messages', value: '8', color: '#2196F3', icon: '💬' },
  { id: '4', title: 'Reviews', value: '98%', color: '#9C27B0', icon: '⭐' },
];

const recentActivities = [
  { id: '1', title: 'New order received', time: '2 hours ago' },
  { id: '2', title: 'Payment confirmed', time: '5 hours ago' },
  { id: '3', title: 'Profile updated', time: '1 day ago' },
  { id: '4', title: 'New follower +1', time: '2 days ago' },
];

export default function HomePage() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      {/* Welcome Section */}
      <View style={styles.welcomeBox}>
        <Text style={styles.greeting}>Hello, joyme liznel g. caber! 👋</Text>
        <Text style={styles.subGreeting}>Here's what's happening today</Text>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        {quickStats.map((item) => (
          <TouchableOpacity key={item.id} style={styles.statCard}>
            <View style={[styles.iconCircle, { backgroundColor: item.color + '15' }]}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Activity */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {recentActivities.map((item) => (
          <View key={item.id} style={styles.activityItem}>
            <View style={styles.dot} />
            <View style={styles.activityText}>
              <Text style={styles.activityTitle}>{item.title}</Text>
              <Text style={styles.activityTime}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  welcomeBox: {
    marginTop: 10,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  subGreeting: {
    fontSize: 15,
    color: '#888',
    marginTop: 6,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  
  statCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  iconText: {
    fontSize: 20,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  statTitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 3,
  },
  activitySection: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 22,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#1a1a2e',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f5',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4a90e2',
    marginRight: 14,
  },
  activityText: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2a2a3c',
  },
  activityTime: {
    fontSize: 12,
    color: '#bbb',
    marginTop: 2,
  },
});
