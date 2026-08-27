import { useEffect, useState } from 'react';
import { getCollection } from '../api';

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : '';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { getCollection('teams', teamsEndpoint).then(setTeams).catch((loadError) => setError(loadError.message)); }, []);

  return <section className="view-section"><div className="section-heading"><span className="eyebrow">Train together</span><h1>Teams</h1><p>Friendly competition makes consistency easier.</p></div>{error ? <p className="status error">{error}</p> : <div className="team-grid">{teams.map((team) => <article className="team-card" key={team._id || team.name}><div className="team-mark">✦</div><h2>{team.name}</h2><p>{team.members?.length || 0} members</p><div className="member-list">{team.members?.map((member) => <span key={member}>@{member}</span>)}</div></article>)}</div>}</section>;
}
