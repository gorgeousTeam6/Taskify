import { IconChecked } from '@/assets/icongroup';
import React, { ReactInstance, useState } from 'react';
import styles from './index.module.scss';

const colorDatas: ColorData[] = [
  { name: 'green', code: '#7AC555' },
  { name: 'purple', code: '#760DDE' },
  { name: 'orange', code: '#FFA500' },
  { name: 'blue', code: '#76A5EA' },
  { name: 'pink', code: '#E876EA' },
];

export default function ColorCircleList({ onClick }: ColorCircleListProps) {
  const [checkedColor, setCheckedColor] = useState<string | null>('green');

  const handleOnColorClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const colorDataString = e.currentTarget.getAttribute('data-color');

    if (colorDataString) {
      const colorData = JSON.parse(colorDataString);
      setCheckedColor(colorData.name);
      onClick(colorData.code);
    }
  };
  return (
    <ul className={`${styles['color-circle-list']}`}>
      {colorDatas.map((data) => (
        <li
          key={data.name}
          data-color={JSON.stringify(data)}
          style={{ background: data.code }}
          onClick={handleOnColorClick}
        >
          {checkedColor === data.name && <IconChecked />}
        </li>
      ))}
    </ul>
  );
}
