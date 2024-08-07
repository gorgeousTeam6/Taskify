import { useState } from 'react';
import styles from './TodoCreateModal.module.scss';
import Image from 'next/image';
import putImg from '@/assets/images/img_todoSample.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import Calendar from '@/containers/dashboard/id/modals/calendar/Calendar';
import { IconCalender } from '@/assets/icongroup';
import { create } from 'zustand';

interface TodoCreateModalProps {
  onClose: () => void;
  onSubmit: (data: FormValues) => void;
}

interface FormValues {
  owner: string;
  title: string;
  description: string;
  date: string;
  label: string;
}

export default function TodoCreateModal({
  onClose,
  onSubmit,
}: TodoCreateModalProps) {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    onSubmit({
      ...data,
      date: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
    });
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setValue('date', date ? date.toISOString().split('T')[0] : '');
    setShowCalendar(false); // 날짜 선택 후 캘린더 닫기
  };

  return (
    <div className={styles['container']}>
      <form
        className={styles['form']}
        onSubmit={handleSubmit(onSubmitHandler)}
        onReset={onClose}
      >
        <p className={styles['modal-title']}>할 일 생성</p>
        <div className={styles['owner']}>
          <div className={styles['label-and-form']}>
            <label className={styles['form-label']}>담당자</label>
            <select
              className={styles['dropdown-preview']}
              {...register('owner', { required: true })}
            >
              <option value='장아영'>장아영</option>
              <option value='최민경'>최민경</option>
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
            {...register('title', { required: true })}
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
            {...register('description', { required: true })}
          ></textarea>
        </div>
        <div className={styles['label-and-form']}>
          <label className={styles['form-label']}>마감일</label>
          <div className={styles['date-input-wrapper']}>
            <input
              className={styles['date-input']}
              value={
                selectedDate ? selectedDate.toISOString().split('T')[0] : ''
              }
              readOnly
              {...register('date')}
            />
            <span
              className={styles['calendar-icon-wrapper']}
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <IconCalender className={styles['calendar-icon']} />
            </span>
            {showCalendar && (
              <div className={styles['calendar-popup']}>
                <Calendar
                  selectedDate={selectedDate}
                  setSelectedDate={handleDateChange}
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles['label-and-form']}>
          <label className={styles['form-label']}>태그</label>
          <textarea
            className={styles['date-input']}
            placeholder='라벨칩'
            {...register('label')}
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
          <button type='reset' className={styles['button']}>
            취소
          </button>
          <button
            type='submit'
            className={`${styles['button']} ${styles['violet']}`}
          >
            생성
          </button>
        </div>
      </form>
    </div>
  );
}
