import React from 'react';
import styles from './AgreeModal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAgree }) => {
  if (!isOpen) return null;

  return (
    <div className={styles[`modal-backdrop`]}>
      <div className={styles[`modal`]}>
        <h2>이용약관</h2>
        <div className={styles[`modal-content`]}>
          <p>제 1 장 총칙</p>
          <p>제 1 조 (목적)</p>
          <p>
            본 약관은 통계청이 운영하는 나라통계시스템 운영홈페이지(이하 "당
            사이트")에서 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차,
            이용자와 당 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을
            규정함을 목적으로 합니다.
          </p>
          <p>제 2 조 (약관의 효력과 변경)</p>
          <p>
            ① 당 사이트는 이용자가 본 약관 내용에 동의하는 것을 조건으로
            이용자에게 서비스를 제공하며, 당 사이트의 서비스 제공 행위 및
            이용자의 서비스 사용 행위에는 본 약관을 우선적으로 적용하겠습니다. ②
            당 사이트는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된 약관은
            당 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다.
            이용자가 변경된 약관에 동의하지 아니하는 경우 본인의 회원등록을
            취소(회원탈퇴)할 수 있으며, 계속 사용할 경우에는 약관 변경에 대한
            암묵적 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그 효력을
            발휘합니다.
          </p>
          <p>제 3 조 (약관 외 준칙)</p>
          <p>
            본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법,
            정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련 법령의
            규정에 의합니다.
          </p>
          <p>제 4 조 (용어의 정의)</p>
          <p>
            ① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1. 이용자 : 본
            약관에 따라 당 사이트가 제공하는 서비스를 받는 자 2. 가 입 : 당
            사이트가 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에
            동의하여 서비스 이용계약을 완료시키는 행위 3. 회 원 : 당 사이트에
            필요한 개인 정보를 제공하여 회원 등록을 한 자로서, 당 사이트의 정보
            및 서비스를 이용할 수 있는 자 4. 아이디 : 이용고객의 식별과 이용자가
            서비스 이용을 위하여 이용자가 정한 문자와 숫자의 조합 5. 비밀번호 :
            아이디에 대한 본인 여부를 확인하기 위하여 사용되는 문자, 숫자,
            특수문자 등의 조합 6. 탈퇴 : 서비스 또는 회원이 이용계약을 종료하는
            행위 ② 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관
            및 이용규정에서 정의합니다.
          </p>
        </div>
        <div className={styles[`modal-actions`]}>
          <button onClick={onClose} className={styles[`close-button`]}>
            취소
          </button>
          <button onClick={onAgree} className={styles[`agree-button`]}>
            동의
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
