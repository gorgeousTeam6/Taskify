import SmallModal from '@/components/SmallModal';
import ModalPortal from '@/components/ModalPortal';
import { useInviteModalStore } from '@/stores/modalStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/services/axios';

function InviteModal(id: any) {
  const { isModalOpen, setCloseModal } = useInviteModalStore();
  const queryClient = useQueryClient();

  const postInviteMutation = useMutation({
    mutationFn: (newEmail: string) =>
      axios.post(`/dashboards/${id}/invitations`, { email: newEmail }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getColumnList', id] });
      setCloseModal();
    },
  });

  const handleCancelBtnClick = () => {
    setCloseModal();
  };

  const handleCreateBtnClick = (data: { title: string }) => {
    postInviteMutation.mutate(data.title);
  };

  if (!isModalOpen) return null;

  return (
    <ModalPortal onClose={setCloseModal}>
      <SmallModal
        type='invite'
        handleLeftBtnClick={handleCancelBtnClick}
        handleRightBtnClick={handleCreateBtnClick}
        onSubmit={handleCreateBtnClick}
      />
    </ModalPortal>
  );
}

export default InviteModal;
