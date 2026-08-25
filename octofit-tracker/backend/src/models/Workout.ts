import { model, Schema } from 'mongoose';

export interface Workout {
  name: string;
  focus: string;
  durationMinutes: number;
  difficulty: string;
}

const workoutSchema = new Schema<Workout>(
  {
    name: { type: String, required: true, trim: true },
    focus: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    difficulty: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const WorkoutModel = model<Workout>('Workout', workoutSchema);