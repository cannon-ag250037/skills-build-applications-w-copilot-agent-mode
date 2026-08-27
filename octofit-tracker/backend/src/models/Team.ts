import { model, Schema } from 'mongoose';

export interface Team {
  name: string;
  members: string[];
}

const teamSchema = new Schema<Team>(
  {
    name: { type: String, required: true, trim: true },
    members: [{ type: String, trim: true }],
  },
  { timestamps: true },
);

export const TeamModel = model<Team>('Team', teamSchema);