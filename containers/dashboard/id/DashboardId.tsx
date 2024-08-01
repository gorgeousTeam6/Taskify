import Button from '@/components/Button';
import Column from '@/containers/dashboard/id/column/Column';
import styles from './index.module.scss';

function DashboardId() {
  // zustand로 저장한 컬럼 목록 가져오기

  return (
    <section className={styles['main-section']}>
      {/* 컬럼 목록 배열을 map 메소드로 Column 렌더링 */}
      <Column id={5} title='To Do' />
      <Column id={5} title='To Do' />
      <Column id={5} title='To Do' />
      <div className={styles['etc-wrapper']}>
        <Button deviceType='desktop' buttonType='add-column'>
          새로운 컬럼 추가하기
        </Button>
      </div>
    </section>
  );
}

export default DashboardId;

//
