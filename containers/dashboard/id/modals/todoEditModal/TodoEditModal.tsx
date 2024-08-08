import styles from './TodoEditModal.module.scss';
import Image from 'next/image';
import putImg from '@/assets/images/img_todoSample.png';
import { useForm, SubmitHandler } from 'react-hook-form'; // 수정: SubmitHandler 추가
import { useState } from 'react';
import ModalPortal from '@/components/ModalPortal';
import useTodoEditModalStore from '@/stores/useTodoEditModalStore';
import useColumnList from '@/hooks/useColumnList';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/services/axios';
import SelectProgressDropdown from '@/containers/dashboard/id/dropdown/SelectProgressDropdown';
import SelectAssigneeDropdown from '@/containers/dashboard/id/dropdown/SelectAssigneeDropdown';

//인터페이스 따로 빼기

interface IPostData {
  title: string;
  description: string;
  columnId: number;
  assigneeUserId: number;
  tags: string[];
  dueDate?: string | null;
  imageUrl?: string | null;
}

interface FormValues {
  title: string;
  description: string;
  dueDate?: string;
  tags?: string;
}


interface IPostData {
  title: string;
  description: string;
  columnId: number;
  assigneeUserId: number;
  tags: string[];
  dueDate?: string | null;
  imageUrl?: string | null;
}
export default function TodoEditModal({ card }: { card: ICard }) {
  const {
    id: cardId,
    title,
    description,
    columnId,
    dueDate,
    tags,
    imageUrl,
    assignee,
  } = card;

  const { register, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      title: title,
      description: description,
      dueDate: dueDate ? dueDate.slice(0, 16) : '',
      tags: tags?.join(', '),
    },
  });

  const queryClient = useQueryClient();
  const { setCloseEditModal } = useTodoEditModalStore();
  const router = useRouter();
  const { id: dashboardId } = router.query as { id: string };
  const { columnList } = useColumnList(dashboardId);
  const currentColumn = columnList.find(
    (column: IColumn) => columnId === column.id,
  );
  const [selectedProgressValue, setSelectedProgressValue] = useState<IColumn>(
    currentColumn!,

  );
  const [selectedAssigneeValue, setSelectedAssigneeValue] = useState<
    IAssignee | IMember | null
  >(assignee ?? null);

  const updateColumnMutation = useMutation({
    mutationFn: (data: IPostData) => {
      console.log('Request Data:', data);
      return axios.put(`/cards/${cardId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['getColumnList', dashboardId]);
      setCloseEditModal();
    },
    onError: (error) => {
      console.error('Update Error:', error);
    },
  });

  // onSubmit 핸들러 추가
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formattedDueDate = data.dueDate
      ? new Date(data.dueDate).toISOString().slice(0, 16).replace('T', ' ')
      : null;

    const requestData: IPostData = {
      title: data.title,
      description: data.description,
      columnId: selectedProgressValue.id,
      assigneeUserId: selectedAssigneeValue?.id ?? 0,
      tags: data.tags ? data.tags.split(',').map((tag) => tag.trim()) : [],
      dueDate: formattedDueDate,
      imageUrl: imageUrl ?? null,
    };

    updateColumnMutation.mutate(requestData);
  };

  return (
    <ModalPortal onClose={setCloseEditModal}>
      <div className={styles['container']}>
        <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
          {' '}
          <p className={styles['modal-title']}>할 일 수정</p>
          <div className={styles['status-and-owner']}>
            <div
              className={`${styles['top-form']} ${styles['label-and-form']}`}
            >
              <label className={styles['form-label']}>상태</label>
              <SelectProgressDropdown
                columnList={columnList}
                selectedValue={selectedProgressValue}
                setSelectedValue={setSelectedProgressValue}
              />
            </div>
            <div
              className={`${styles['top-form']} ${styles['label-and-form']}`}
            >
              <label className={styles['form-label']}>담당자</label>
              <SelectAssigneeDropdown
                selectedAssigneeValue={selectedAssigneeValue}
                setSelectedAssigneeValue={setSelectedAssigneeValue}
                dashboardId={dashboardId}
              />
            </div>
          </div>
          <div className={styles['label-and-form']}>
            <div className={styles['label-with-star']}>
              <label className={styles['form-label']}>제목</label>
              <label className={styles['essential']}>*</label>
            </div>
            <textarea
              className={styles['form-input']}
              placeholder='제목을 입력해주세요'
              {...register('title')}
            ></textarea>
          </div>
          <div className={styles['label-and-form']}>
            <div className={styles['label-with-star']}>
              <label className={styles['form-label']}>설명</label>
              <label className={styles['essential']}>*</label>
            </div>
            <textarea
              className={`${styles['form-input']} ${styles['form-description']}`}
              placeholder='설명을 입력해주세요'
              {...register('description')}
            ></textarea>
          </div>
          <div className={styles['label-and-form']}>
            <label className={styles['form-label']}>마감일</label>
            <input
              className={styles['date-input']}
              type='datetime-local'
              {...register('dueDate')}
            />
          </div>
          <div className={styles['label-and-form']}>
            <label className={styles['form-label']}>태그</label>
            <textarea
              className={styles['date-input']}
              placeholder='라벨칩'
              {...register('tags')}
            />
          </div>
          <div className={styles['label-and-form']}>
            <label className={styles['form-label']}>이미지</label>
            <Image
              className={styles['sample-img']}
              src={putImg}
              alt='이미지 넣기'
            />
          </div>
          <div className={styles['button-group']}>
            <button
              type='reset'
              className={styles['button']}
              onClick={setCloseEditModal}
            >
              취소
            </button>
            <button
              type='submit'
              className={`${styles['button']} ${styles['yellow']}`}
            >
              수정
            </button>
          </div>
        </form>
      </div>
    </ModalPortal>
  );
}
