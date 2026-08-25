import { model, Schema } from 'mongoose';

export interface Activity {
  userId: string;
  type: string;
  durationMinutes: number;
  points: number;
  completedAt: Date;
}

const activitySchema = new Schema<Activity>(
  {
    userId: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    points: { type: Number, required: true, min: 0 },
    completedAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true },
);

export const ActivityModel = model<Activity>('Activity', activitySchema);