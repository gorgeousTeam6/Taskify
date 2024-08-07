import styles from './TodoEditModal.module.scss';
import Image from 'next/image';
import putImg from '@/assets/images/img_todoSample.png';
import { useForm } from 'react-hook-form';
import ModalPortal from '@/components/ModalPortal';
import useTodoEditModalStore from '@/stores/useTodoEditModalStore';
import { useEffect, useState } from 'react';
import useColumnList from '@/hooks/useColumnList';
import { Router, useRouter } from 'next/router';
import SelectProgressDropdown from '../../dropdown/SelectProgressDropdown';

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
  const { register } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: title,
      description: description,
    },
  });
  const { setCloseEditModal } = useTodoEditModalStore();
  const router = useRouter();
  const { id: dashBoardId } = router.query;
  const { columnList } = useColumnList(dashBoardId);
  const currentColumn = columnList.filter(
    (column: IColumn) => columnId === column.id,
  );
  const [selectedValue, setSelectedValue] = useState<IColumn>(currentColumn[0]);

  return (
    <ModalPortal onClose={setCloseEditModal}>
      <div className={styles['container']}>
        <form className={styles['form']}>
          <p className={styles['modal-title']}>할 일 수정</p>
          <div className={styles['status-and-owner']}>
            <div className={styles['label-and-form']}>
              <label className={styles['form-label']}>상태</label>
              <SelectProgressDropdown
                columnList={columnList}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
            </div>
            <div className={styles['label-and-form']}>
              <label className={styles['form-label']}>담당자</label>
              <select className={styles['dropdown-preview']}>
                <option>to do</option>
                <option>done</option>
              </select>
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
            <input className={styles['date-input']} type='date' {...register} />
          </div>
          <div className={styles['label-and-form']}>
            <label className={styles['form-label']}>태그</label>
            <textarea
              className={styles['date-input']}
              placeholder='라벨칩'
              {...register}
            />
          </div>
          <div className={styles['label-and-form']}>
            <label className={styles['form-label']}>이미지</label>
            <Image
              className={styles['sampleImg']}
              src={putImg}
              alt='이미지 넣기'
            />
          </div>
        </form>
        <div>
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
        </div>
      </div>
    </ModalPortal>
  );
}
