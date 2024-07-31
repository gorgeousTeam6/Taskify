import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';

export default function ButtonPreview() {
  return (
    <section style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <div>
        <Button deviceType='desktop' buttonType='login'>
          로그인
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='login'>
          로그인
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='login'>
          로그인
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='login' disable={true}>
          로그인
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='login' disable={true}>
          로그인
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='login' disable={true}>
          로그인
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='primary'>
          수락
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='primary'>
          수락
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='primary'>
          수락
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='secondary'>
          거절
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='secondary'>
          거절
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='secondary'>
          거절
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='delete'>
          삭제
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='delete'>
          삭제
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='delete'>
          삭제
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='add-column'>
          새로운 컬럼 추가하기
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='add-column'>
          새로운 컬럼 추가하기
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='add-column'>
          새로운 컬럼 추가하기
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='add-todo' />
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='add-todo' />
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='add-todo' />
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='delete-dashboard'>
          대시보드 삭제하기
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='delete-dashboard'>
          대시보드 삭제하기
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='delete-dashboard'>
          대시보드 삭제하기
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='add-board'>
          새로운 대시보드
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='add-board'>
          새로운 대시보드
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='add-board'>
          새로운 대시보드
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='dashboard'>
          비브리지
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='dashboard'>
          비브리지
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='dashboard'>
          비브리지
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='desktop' buttonType='dashboard' isOwner={true}>
          비브리지
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='tablet' buttonType='dashboard' isOwner={true}>
          비브리지
        </Button>
      </div>
      <br></br>
      <div>
        <Button deviceType='mobile' buttonType='dashboard' isOwner={true}>
          비브리지
        </Button>
      </div>
      <br></br>
      <div>
        <ButtonSet buttonSetType='primary'>
          <Button deviceType='desktop' buttonType='primary'>
            수락
          </Button>
          <Button deviceType='desktop' buttonType='secondary'>
            거절
          </Button>
        </ButtonSet>
      </div>
      <br></br>
      <div>
        <ButtonSet buttonSetType='primary'>
          <Button deviceType='tablet' buttonType='primary'>
            수락
          </Button>
          <Button deviceType='tablet' buttonType='secondary'>
            거절
          </Button>
        </ButtonSet>
      </div>
      <br></br>
      <div>
        <ButtonSet buttonSetType='primary'>
          <Button deviceType='mobile' buttonType='primary'>
            수락
          </Button>
          <Button deviceType='mobile' buttonType='secondary'>
            거절
          </Button>
        </ButtonSet>
      </div>
      <br></br>
    </section>
  );
}
