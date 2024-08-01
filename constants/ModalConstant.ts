const modalValues: Record<ModalType, IModal> = {
  create: {
    title: '새 컬럼 생성',
    label: '이름',
    placeholder: '새 컬럼의 이름을 입력하세요',
    leftBtn: '취소',
    rightBtn: '생성',
  },
  manage: {
    title: '컬럼 관리',
    label: '이름',
    placeholder: '변경할 컬럼 이름을 입력하세요',
    leftBtn: '취소',
    rightBtn: '생성',
  },
  invite: {
    title: '초대하기',
    label: '이메일',
    placeholder: '초대할 이메일을 입력하세요',
    leftBtn: '취소',
    rightBtn: '초대',
  },
};

export { modalValues };
