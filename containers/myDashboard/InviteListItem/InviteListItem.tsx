import styles from './InviteListItem.module.scss';
import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';
import axios, { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';

function InviteListItem({ item }: { item: IInvitation }) {
  const mutation = useMutation<AxiosResponse<any>, Error, boolean>({
    mutationFn: (inviteAccepted: boolean) => {
      return axios.put(`invitations/${item.dashboard.id}`, { inviteAccepted });
    },
  });

  const handleAccept = () => {
    mutation.mutate(true);
  };

  const handleReject = () => {
    mutation.mutate(false);
  };

  return (
    <div className={styles['invite-list-item-wrapper']}>
      <div className={styles['invite-list-item-name']}>
        <span className={styles['invite-list-header-title']}>이름</span>
        <span>{item.dashboard.title}</span>
      </div>
      <div className={styles['invite-list-item-visiter']}>
        <span className={styles['invite-list-header-title']}>초대자</span>
        <span>{item.inviter.nickname}</span>
      </div>
      <div className={styles['invite-list-item-invite-accepted-buttons']}>
        <ButtonSet buttonSetType='primary'>
          <Button buttonType='primary' onClick={handleAccept}>
            수락
          </Button>
          <Button buttonType='secondary' onClick={handleReject}>
            거절
          </Button>
        </ButtonSet>
      </div>
    </div>
  );
}

export default InviteListItem;
