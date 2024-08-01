import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';

export default function ButtonPreview() {
  return (
    <section style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <div>
        <Button buttonType='login'>로그인</Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='login' disabled>
          로그인
        </Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='primary'>수락</Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='secondary'>거절</Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='delete'>삭제</Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='add-column'>새로운 컬럼 추가하기</Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='add-todo' />
      </div>
      <br></br>
      <div>
        <Button buttonType='delete-dashboard'>대시보드 삭제하기</Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='add-board'>새로운 대시보드</Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='dashboard'>비브리지</Button>
      </div>
      <br></br>
      <div>
        <Button buttonType='dashboard' isOwner={true}>
          비브리지
        </Button>
      </div>
      <br></br>
      <div>
        <ButtonSet buttonSetType='primary'>
          <Button buttonType='primary'>수락</Button>
          <Button buttonType='secondary'>거절</Button>
        </ButtonSet>
      </div>
      <br></br>
    </section>
  );
}
