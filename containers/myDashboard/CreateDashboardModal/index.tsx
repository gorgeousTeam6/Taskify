import React, { useState } from 'react';
import styles from './index.module.scss';
import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';
import { useMutation } from '@tanstack/react-query';
import axios from '@/services/axios';

const colorCodes = ['#7AC555', '#760DDE', '#FFA500', '#76A5EA', '#E876EA'];

export default function CreateDashboardModal() {
  const [title, setTitle] = useState<string | null>('');
  const [color, setColor] = useState<string | null>('');

  const handleOnTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titleText = e.target.value;
    setTitle(titleText);
  };

  const handleOnColorClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const colorCode = e.currentTarget.getAttribute('key');
    setColor(colorCode);
  };

  const closeModal = () => {};

  const postDashboardMutation = useMutation({
    mutationFn: () => axios.post(`/dashboards`, { title, color }),
    onSuccess: () => {
      closeModal();
    },
  });

  const handleOnCreateClick = () => {
    postDashboardMutation.mutate();
  };

  return (
    <section className={`${styles['modal-container']}`}>
      <h2>새로운 대시보드</h2>
      <label className={`${styles['label-container']}`}>
        <p>대시보드 이름</p>
        <input type='text' onChange={handleOnTitleChange} />
      </label>
      <ul className={`${styles['color-list']}`}>
        {colorCodes.map((code) => (
          <li style={{ background: code }} onClick={handleOnColorClick}></li>
        ))}
      </ul>
      <ButtonSet buttonSetType='primary' widthFill={true}>
        <Button buttonType='secondary' onClick={closeModal}>
          취소
        </Button>
        <Button buttonType='primary' onClick={handleOnCreateClick}>
          생성
        </Button>
      </ButtonSet>
    </section>
  );
}
