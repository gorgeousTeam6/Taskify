import FixedMenu from '@/components/FixedMenu';
import DashboardList from './DashboardList/DashboardList';
import InvitedDashboard from './InvitedDashboard/InvitedDashboard';
import styles from './MyDashboard.module.scss';

function MyDashboard() {
  return (
    <div className={styles['container']}>
      <FixedMenu />
      <DashboardList />
      <InvitedDashboard />
    </div>
  );
}

export default MyDashboard;
