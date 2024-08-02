type Color = 'green' | 'purple' | 'blue' | 'orange' | 'pink';

interface SideMenuItemProps {
  color: Color;
  isOwner?: boolean;
  children: string;
}
