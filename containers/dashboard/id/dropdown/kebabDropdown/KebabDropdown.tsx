import useTodoEditModalStore from '@/stores/useTodoEditModalStore';
import Dropdown from '../Dropdown';
import styles from './KebabDropdown.module.scss';
import useTodoModalStore from '@/stores/todoModalStore';
import TodoEditModal from '../../modals/todoEditModal/TodoEditModal';

export default function KebabDropdown({
  isOpen,
  cardId,
  card,
}: {
  isOpen: boolean;
  card: ICard;
  cardId?: number;
}) {
  const { EditModalId, setOpenEditModal } = useTodoEditModalStore();
  const { setCloseTodoModal } = useTodoModalStore();

  return (
    <>
      <Dropdown visibility={isOpen}>
        <ul className={styles['container']}>
          <li
            className={styles['list']}
            onClick={(e) => {
              e.stopPropagation();
              setOpenEditModal(card.id);
              console.log('클릭');
              setCloseTodoModal();
            }}
          >
            수정하기
          </li>
          <li className={styles['list']}>삭제하기</li>
        </ul>
      </Dropdown>
    </>
  );
}
