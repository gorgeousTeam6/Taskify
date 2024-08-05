import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';
import styles from './index.module.scss';

const colorCodes = ['#7AC555', '#760DDE', '#FFA500', '#76A5EA', '#E876EA'];

export default function CreateDashboardModal() {
  return (
    <section className={`${styles['modal-container']}`}>
      <h2>새로운 대시보드</h2>
      <label className={`${styles['label-container']}`}>
        <p>대시보드 이름</p>
        <input type='text' />
      </label>
      <ul className={`${styles['color-list']}`}>
        {colorCodes.map((code) => (
          <li style={{ background: code }}></li>
        ))}
      </ul>
      <ButtonSet buttonSetType='primary' widthFill={true}>
        <Button buttonType='secondary'>취소</Button>
        <Button buttonType='primary'>생성</Button>
      </ButtonSet>
    </section>
  );
}
