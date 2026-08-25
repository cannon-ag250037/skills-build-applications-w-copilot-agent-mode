import { useEffect, useState } from 'react';
import { getCollection } from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getCollection('users').then(setUsers).catch((loadError) => setError(loadError.message));
  }, []);

  if (error) return <p className="status error">{error}</p>;
  return (
    <section className="view-section">
      <div className="section-heading"><span className="eyebrow">Community</span><h1>Members</h1><p>Find your training circle and keep the momentum going.</p></div>
      <div className="people-grid">{users.map((user) => <article className="person-card" key={user._id || user.username}><div className="avatar">{user.displayName?.slice(0, 1)}</div><div><h2>{user.displayName}</h2><p>@{user.username}</p><small>{user.email}</small></div></article>)}</div>
    </section>
  );
}
