import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styles from './HashtagsInput.module.scss';
import ChipCard from '@/containers/dashboard/id/chips/ChipCard';
import getRandomTagColor from '@/utils/getRandomTagColor';

interface HashTagsInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function HashTagsInput({ tags, setTags }: HashTagsInputProps) {
  const [textValue, setTextValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const onCreate = () => {
    if (textValue.trim() === '') return; // 빈 값 방지
    setTags((prevTags) => [...prevTags, textValue.trim()]); // 태그 추가
    setTextValue(''); // 입력 필드 초기화
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (textValue.trim() !== '') {
        onCreate();
      }
    }
  };
  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove)); // 태그 삭제
  };

  return (
    <div className={styles.todoStyle}>
      <input
        name='textValue'
        value={textValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder='태그를 입력하세요'
      />
      <br />
      <b>
        <div className={styles['tags']}>
          {' '}
          {tags.map((tag, index) => (
            <div
              onClick={() => handleTagRemove(tag)}
              style={{ cursor: 'pointer' }}
            >
              <ChipCard
                content={tag}
                color={getRandomTagColor(tag, index)}
                key={index}
              />
            </div>
          ))}
        </div>
      </b>
    </div>
  );
}
