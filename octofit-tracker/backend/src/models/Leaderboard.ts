import { model, Schema } from 'mongoose';

export interface LeaderboardEntry {
  userId: string;
  score: number;
}

const leaderboardSchema = new Schema<LeaderboardEntry>(
  {
    userId: { type: String, required: true, unique: true, trim: true },
    score: { type: Number, required: true, min: 0, default: 0 },
  },
  { timestamps: true },
);

export const LeaderboardModel = model<LeaderboardEntry>('Leaderboard', leaderboardSchema);