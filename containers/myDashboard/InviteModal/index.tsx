import React, { useState } from 'react';
import styles from './index.module.scss';
import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';
import { useMutation } from '@tanstack/react-query';
import axios from '@/services/axios';
import ModalPortal from '@/components/ModalPortal';

interface InviteModalProps {
  id: string;
}

export default function InviteModal({ id }: InviteModalProps) {
  const [email, setEmail] = useState<string | null>('');

  const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailText = e.target.value;
    setEmail(emailText);
  };

  const closeModal = () => {};

  const postInviteMutation = useMutation({
    mutationFn: () => axios.post(`/dashboards/${id}/invitations`, { email }),
    onSuccess: () => {
      closeModal();
    },
  });

  const handleOnInviteClick = () => {
    postInviteMutation.mutate();
  };

  return (
    <section className={`${styles['modal-container']}`}>
      <h2>초대하기</h2>
      <label className={`${styles['label-container']}`}>
        <p>이메일</p>
        <input type='email' onChange={handleOnEmailChange} />
      </label>
      <ButtonSet buttonSetType='primary' widthFill={true}>
        <Button buttonType='secondary' onClick={closeModal}>
          취소
        </Button>
        <Button buttonType='primary' onClick={handleOnInviteClick}>
          생성
        </Button>
      </ButtonSet>
    </section>
  );
}
