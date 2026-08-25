import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navigation = [
  { path: '/', label: 'Overview', icon: '◒' },
  { path: '/activities', label: 'Activities', icon: '↗' },
  { path: '/leaderboard', label: 'Leaderboard', icon: '♜' },
  { path: '/teams', label: 'Teams', icon: '◈' },
  { path: '/workouts', label: 'Workouts', icon: '✦' },
  { path: '/users', label: 'Members', icon: '○' },
];

function Overview() {
  return <section className="overview"><span className="eyebrow">Tuesday, August 25</span><h1>Make today<br /><em>count.</em></h1><p className="intro">Small, consistent choices become your strongest habits.</p><div className="overview-actions"><NavLink className="primary-button" to="/workouts">Find a workout <span aria-hidden="true">↗</span></NavLink><NavLink className="quiet-link" to="/activities">See recent activity</NavLink></div><div className="stat-strip"><div><strong>04</strong><span>Activities logged</span></div><div><strong>+300</strong><span>Community points</span></div><div><strong>02</strong><span>Teams in motion</span></div></div></section>;
}

function App() {
  return <div className="app-shell"><aside className="sidebar"><NavLink className="brand" to="/"><img src="/octofitapp-small.png" alt="" /><span>OCTOFIT<small>TRACKER</small></span></NavLink><nav aria-label="Main navigation">{navigation.map((item) => <NavLink key={item.path} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} to={item.path} end={item.path === '/'}><span>{item.icon}</span>{item.label}</NavLink>)}</nav><div className="sidebar-note"><span>WEEKLY FOCUS</span><strong>Consistency over intensity.</strong><small>2 of 5 sessions complete</small><div className="progress"><i /></div></div></aside><main className="main-content"><header className="topbar"><span className="mobile-title">OCTOFIT</span><span className="connection"><i /> API connected</span></header><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/workouts" element={<Workouts />} /><Route path="/users" element={<Users />} /></Routes></main></div>;
}

export default App;
