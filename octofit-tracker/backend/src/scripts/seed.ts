import mongoose from 'mongoose';
import { ActivityModel } from '../models/Activity.js';
import { LeaderboardModel } from '../models/Leaderboard.js';
import { TeamModel } from '../models/Team.js';
import { UserModel } from '../models/User.js';
import { WorkoutModel } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/** Seed the octofit_db database with test data. */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      ActivityModel.deleteMany({}),
      LeaderboardModel.deleteMany({}),
      TeamModel.deleteMany({}),
      UserModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    await UserModel.insertMany([
      { username: 'alex', email: 'alex@example.com', displayName: 'Alex Morgan' },
      { username: 'jamie', email: 'jamie@example.com', displayName: 'Jamie Lee' },
      { username: 'riley', email: 'riley@example.com', displayName: 'Riley Patel' },
    ]);

    await TeamModel.insertMany([
      { name: 'Morning Momentum', members: ['alex', 'jamie'] },
      { name: 'Weekend Warriors', members: ['riley', 'alex'] },
    ]);

    await ActivityModel.insertMany([
      { userId: 'alex', type: 'Run', durationMinutes: 35, points: 70, completedAt: new Date('2026-08-20T07:30:00Z') },
      { userId: 'jamie', type: 'Strength training', durationMinutes: 45, points: 90, completedAt: new Date('2026-08-21T17:00:00Z') },
      { userId: 'riley', type: 'Cycling', durationMinutes: 50, points: 100, completedAt: new Date('2026-08-22T09:00:00Z') },
      { userId: 'alex', type: 'Yoga', durationMinutes: 25, points: 40, completedAt: new Date('2026-08-23T08:00:00Z') },
    ]);

    await LeaderboardModel.insertMany([
      { userId: 'alex', score: 110 },
      { userId: 'jamie', score: 90 },
      { userId: 'riley', score: 100 },
    ]);

    await WorkoutModel.insertMany([
      { name: 'Power Starter', focus: 'Full body', durationMinutes: 30, difficulty: 'Beginner' },
      { name: 'Core Builder', focus: 'Core', durationMinutes: 25, difficulty: 'Intermediate' },
      { name: 'Endurance Push', focus: 'Cardio', durationMinutes: 40, difficulty: 'Advanced' },
    ]);

    const [users, teams, activities, leaderboard, workouts] = await Promise.all([
      UserModel.countDocuments(),
      TeamModel.countDocuments(),
      ActivityModel.countDocuments(),
      LeaderboardModel.countDocuments(),
      WorkoutModel.countDocuments(),
    ]);
    console.log(`Database seeding complete: ${users} users, ${teams} teams, ${activities} activities, ${leaderboard} leaderboard entries, ${workouts} workouts`);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
