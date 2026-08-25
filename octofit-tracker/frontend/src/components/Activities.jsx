import { useEffect, useState } from 'react';
import { getCollection } from '../api';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { getCollection('activities').then(setActivities).catch((loadError) => setError(loadError.message)); }, []);

  return <section className="view-section"><div className="section-heading"><span className="eyebrow">Your movement</span><h1>Activity feed</h1><p>Recent sessions from across the OctoFit community.</p></div>{error ? <p className="status error">{error}</p> : <div className="table-wrap"><table><thead><tr><th>Member</th><th>Activity</th><th>Duration</th><th>Points</th><th>Completed</th></tr></thead><tbody>{activities.map((activity) => <tr key={activity._id}><td className="strong">@{activity.userId}</td><td>{activity.type}</td><td>{activity.durationMinutes} min</td><td className="points">+{activity.points}</td><td>{new Date(activity.completedAt).toLocaleDateString()}</td></tr>)}</tbody></table></div>}</section>;
}
