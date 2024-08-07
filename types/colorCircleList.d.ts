interface ColorData {
  name: string;
  code?: string;
}

type OnColorClick = (color: string) => void;

interface ColorCircleListProps {
  onClick: OnColorClick;
}
