import { useEffect, useState } from 'react';
import { getCollection } from '../api';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { getCollection('leaderboard').then(setEntries).catch((loadError) => setError(loadError.message)); }, []);

  return <section className="view-section narrow"><div className="section-heading"><span className="eyebrow">This week</span><h1>Leaderboard</h1><p>Every session counts. See who is setting the pace.</p></div>{error ? <p className="status error">{error}</p> : <div className="leaderboard">{entries.map((entry, index) => <div className="rank-row" key={entry._id || entry.userId}><span className={`rank rank-${index + 1}`}>{String(index + 1).padStart(2, '0')}</span><span className="strong">@{entry.userId}</span><span className="score">{entry.score}<small> pts</small></span></div>)}</div>}</section>;
}
