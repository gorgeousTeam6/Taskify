interface UserData {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface HeaderDashboardProps {
  userData: UserData;
  dashboardId: string;
}

interface SideMenuProps {
  onItemClick: (id: string) => void;
}
