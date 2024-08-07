import SmallModal from '@/components/SmallModal';
import ModalPortal from '@/components/ModalPortal';
import { useCreateModalStore } from '@/stores/modalStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/services/axios';

// 현재 대시보드 id를 받아옴
function InviteModal(id: any) {
  const { isModalOpen, setCloseModal } = useCreateModalStore();
  const queryClient = useQueryClient();

  // 컬럼 생성하는 mutate 함수
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
