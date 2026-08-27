import { useEffect, useState } from 'react';
import { getCollection } from '../api';

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : '';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { getCollection('workouts', workoutsEndpoint).then(setWorkouts).catch((loadError) => setError(loadError.message)); }, []);

  return <section className="view-section"><div className="section-heading"><span className="eyebrow">Curated for you</span><h1>Workouts</h1><p>Pick a session that fits the energy you have today.</p></div>{error ? <p className="status error">{error}</p> : <div className="workout-grid">{workouts.map((workout) => <article className="workout-card" key={workout._id || workout.name}><div className="workout-top"><span>{workout.focus}</span><span>{workout.difficulty}</span></div><h2>{workout.name}</h2><p>{workout.durationMinutes} minute session</p><button type="button" className="text-button">View session <span aria-hidden="true">↗</span></button></article>)}</div>}</section>;
}
