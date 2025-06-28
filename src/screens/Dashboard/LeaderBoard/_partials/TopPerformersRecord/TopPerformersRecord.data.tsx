import StarIcon from '../../../../../assets/svg_component/StarIcon';
import { Record } from './TopPerformersRecord.types';

export const records: Record[] = [
  { name: 'Alice', role: 'Developer', level: 'Ultimate', points: 150, rewards: 56000 },
  { name: 'Bob', role: 'Designer', level: 'Master', points: 200, rewards: 20000 },
  { name: 'Charlie', role: 'Manager', level: 'Veteran', points: 250, rewards: 25000 },
  { name: 'David', role: 'Tester', level: 'Leader', points: 100, rewards: 10000 },
  { name: 'Eve', role: 'Developer', level: 'Expert', points: 300, rewards: 3000 },
  { name: 'Frank', role: 'Designer', level: 'Professional', points: 175, rewards: 17050 },
  { name: 'Grace', role: 'Manager', level: 'Amateur', points: 80, rewards: 8000 },
  { name: 'Hank', role: 'Tester', level: 'Senior', points: 220, rewards: 22000 },
  { name: 'Ivy', role: 'Developer', level: 'Enthusiast', points: 280, rewards: 28000 },
  { name: 'Jack', role: 'Designer', level: 'Leader', points: 150, rewards: 15000 }
];

export const levelColors: { [key: string]: string } = {
  Ultimate: '#FFD700',
  Master: '#C0C0C0',
  Veteran: '#CD7F32',
  Leader: '#1E90FF',
  Expert: '#32CD32',
  Professional: '#800080',
  Amateur: '#808080',
  Senior: '#FFA500',
  Enthusiast: '#20B2AA'
};

// Define the score ranges for each level
export const levelRanges: { level: string; min: number; max: number; color: string }[] = [
  { level: 'Amateur', min: 0, max: 45, color: '#808080' },
  { level: 'Enthusiast', min: 46, max: 50, color: '#20B2AA' },
  { level: 'Senior', min: 51, max: 55, color: '#FFA500' },
  { level: 'Professional', min: 56, max: 60, color: '#800080' },
  { level: 'Expert', min: 61, max: 70, color: '#32CD32' },
  { level: 'Leader', min: 71, max: 80, color: '#1E90FF' },
  { level: 'Veteran', min: 81, max: 90, color: '#CD7F32' },
  { level: 'Master', min: 91, max: 95, color: '#C0C0C0' },
  { level: 'Ultimate', min: 96, max: 100, color: '#FFD700' }
];

export function getLevel(score: number): JSX.Element {
  const foundLevel = levelRanges.find((range) => score >= range.min && score <= range.max);

  if (!foundLevel) {
    return <span>Unknown</span>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>{foundLevel.level}</span>
      <StarIcon stopColor={foundLevel?.color} />
    </div>
  );
}
