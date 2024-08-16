<h1 align='center'>💡 Schedo (Taskify)</h1> 

![스케도 리드미 메인](https://github.com/user-attachments/assets/de08eb6d-e7b9-406f-8fc7-b51d772ff91d)


## 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [프로젝트 팀 구성 및 역할](#프로젝트-팀-구성-및-역할)
3. [채택한 기술 및 브랜치 전략](#채택한-기술-및-브랜치-전략)
4. [폴더 구조](#폴더-구조)
5. [기능 시연 및 설명](#기능-시연-및-설명)
6. [개선 사항](#개선-사항)
7. [프로젝트 후기](#프로젝트-후기)

<br/>

## 프로젝트 개요

### 💡 배포 URL: https://sched6.netlify.app/
### 💡 개발 기간: 2024.07.29 - 2024.08.14

<br/>

### 프로젝트 주제 및 선정 배경, 기획의도

- **`SCHEDO`** : `Schedule`과 `Do`의 조합으로, 단순한 일정 관리 이상의 경험을 제공하고자 하는 의미를 담았습니다.
- **선정 배경** : 평소 사용하는 GitHub의 projects 서비스와 노션에 있는 일정 관리 서비스에 대한 흥미를 느끼고, 배웠던 기술들을 적용하기 좋은 주제라고 생각하고 선정했습니다.
- **차별점** : 대시보드에 여러 멤버를 초대해 함께 사용할 수 있고 관리 기능을 제공하며,<br/>
ㅤㅤㅤ ㅤ여러 개의 프로젝트를 진행 시 일정 관리에 대한 편의성이 제공됩니다.

### 개발 환경 

#### - 개발 기술
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) 
![Static Badge](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SASS&logoColor=white) 
![Static Badge](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) 
![Static Badge](https://img.shields.io/badge/%20React-000000?style=for-the-badge&logo=React&logoColor=%2361DAFB) <br/>
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

#### - 협업 툴
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)

#### 배포
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)


### 프로젝트 일정
- 2024.07.28(일)	프로젝트 주제 선정
- 2024.07.29(월)	기획 상세 분석 및 R&R 분배 / 레포지토리 세팅
- 2024.07.30(화)	공통 컴포넌트 제작 및 R&R 재분배
- 2024.08.03(토)	퍼블리싱 완료(1차 중간점검)
- 2024.08.05(월)	기능 구현 중간점검(러프하게 완료)
- 2024.08.08(목)	기능 구현 완료 
- 2024.08.10(토)	통합 테스트 및 추가 기능 구현
- 2024.08.12(월)	발표 ppt 제작 및 발표 준비
- 2024.08.14(수)	중급 프로젝트 발표

<br/>

## 프로젝트 팀 구성 및 역할

| <img width="230" alt="아영" src="https://github.com/user-attachments/assets/c48ee474-f8d5-40ab-b9f4-37dafbb92e88"> | <img src="https://github.com/user-attachments/assets/ff8cefe4-78b7-484c-bb9e-cf3facf86e59" alt="도용" width="230px"> | <img src="https://github.com/user-attachments/assets/ce892d99-f9d1-49fc-aedf-3e8388d5db4e" alt="예준" width="230px">| <img src="https://github.com/user-attachments/assets/503c8abb-e365-470d-8c5d-8408a0d502cd" alt="민경" width="230px">| <img src="https://github.com/user-attachments/assets/41710062-0304-45c5-9818-5321977e1f11" alt="병선" width="230px">
| :-: | :-: | :-: | :-: | :-: |
|**장아영(팀장)** | **김도용** | **김예준** | **최민경** | **황병선** |
|**[@yellowjang](https://github.com/yellowjang)** | **[@dyk0224](https://github.com/dyk0224)** | **[@K777agent](https://github.com/K777agent)** | **[@mxkxx1011](https://github.com/mxkxx1011)** | **[@hbs0133](https://github.com/hbs0133)** |
| 대시보드 페이지  |     |   로그인&회원가입 페이지<br/>계정관리 페이지   |   랜딩페이지<br/>대시보드 페이지     |   대시보드 수정 페이지 <br/>나의 대시보드 페이지      |
| 할 일 생성 모달<br/>할 일 수정 모달<br/>할 일 모달        |  헤더<br/>사이드메뉴<br/>공통 버튼<br/>대시보드 생성 모달<br/>초대하기 모달    |  공용 컴포넌트 <br/>이미지 input 컴포넌트     |   컬럼 생성&삭제 모달<br/>할 일 모달(댓글 기능)<br/>무한스크롤      |        |
| 발표<br/>레포지토리 세팅<br/>디자인        |        |  인증&인가<br/>(유저 관리 - userStore)      |   드래그앤드롭 구현<br/>다크모드<br/>디자인<br/>리드미 작성     |        |

**기본으로 피피티 참고해서 적은거라 수정예정!** <br/>
**꼭 본인이 한 부분 자세히 적어주기**

<br/>

## 채택한 기술 및 브랜치 전략

### zustand
-  모달이 많고 많은 데이터를 다루는 `Schedo(Taskify)` 에서 전역 클라이언트 상태 관리를 간편하게 하기 위해 상태 관리 라이브러리를 사용하기로 결정하고 그 중 `zustand` 로 결정했습니다.
- zustand는 다른 상태 관리 라이브러리와 비교했을 때 러닝 커브가 낮아, 처음 사용하는 팀원들도 쉽게 적응할 수 있을 것이라고 판단했습니다.
- 이를 통해 모달, 토스트와 같은 다양한 액션 요소들을 효율적으로 제어하고 사용자에게 다양한 정보를 제공할 수 있게 되었습니다.

### Tanstack Query (React Query)
- `Schedo(Taskify)`는 모달이 많고 데이터를 다루는 페이지가 많은 애플리케이션으로, 서버 상태 관리를 효과적으로 처리하는 것이 매우 중요하다고 생각했습니다.
- 이를 위해 `React Query`를 사용하기로 결정했습니다. React Query는 서버 상태 관리를 위한 라이브러리로 데이터 페칭, 캐싱, 업데이트 작업을 보다 효율적으로 처리할 수 있습니다.
- 리액트 쿼리를 통해 개발 시 복잡한 서버 상태 관리 로직을 간소화하여, 실시간 데이터 동기화 등 최신 데이터를 유지함으로써 전반적인 사용자 편의성에 보다 더 신경쓸 수 있었습니다.


### 브랜치 전략
- [브랜치 전략 위키](https://github.com/gorgeousTeam6/taskify/wiki/%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5-%E2%80%90-github-flow)
- `github flow` 전략 사용
- `develop` 브랜치와 `feature` 브랜치 운용

<br/>

## 폴더 구조

```
├─ assets
│  ├─ icongroup.ts
│  ├─ icons
│  ├─ images
│  ├─ landing
│  └─ logos
├─ components
├─ constants
├─ containers
│  ├─ 404
│  ├─ dashboard
│  │  └─ id
│  ├─ dashboardEdit
│  ├─ dashboardLayout.tsx
│  ├─ main
│  ├─ myDashboard
│  ├─ mypage
│  └─ sign
│     ├─ signin
│     └─ signup
├─ hooks
├─ libs
├─ middleware.ts
├─ pages
│  ├─ 404.tsx
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ dashboard
│  │  └─ [id]
│  │     ├─ edit
│  ├─ index.tsx
│  ├─ mydashboard
│  ├─ mypage
│  ├─ signin
│  └─ signup
├─ public
├─ services
│  ├─ axios.ts
│  ├─ ...
├─ stores
├─ styles
│  ├─ _animations.scss
│  ├─ _color.scss
│  ├─ _fonts.scss
│  ├─ _levels.scss
│  ├─ _variable.scss
│  ├─ index.scss
│  ├─ mixins
│  └─ reset.scss
├─ tsconfig.json
├─ types
└─ utils
```

<br/>

## 기능 시연 및 설명

### - 랜딩 페이지 ('/' page)

### - 로그인 & 회원가입 페이지 ('/signin' & '/signup' page)

#### 1. 로그인 페이지

![로그인시연 (2)](https://github.com/user-attachments/assets/58c5713d-dc53-4f20-b17f-aa530b519240)

- 로그인한 유저 정보는 zustand를 사용하여 전역에서 관리합니다.
- 저장된 정보를 바탕으로 이메일과 비밀번호를 확인하며, 올바른 형식이 아닐 경우 에러 상태로 설정되어 버튼이 눌리지 않도록 처리합니다.
- 이메일이나 비밀번호가 틀렸다면 에러 메시지가 출력되며, 로그인이 성공하면 '로그인이 되었습니다.'라는 토스트 메시지와 함께 '/mydashboard'로 이동합니다.


![회원가입 시연](https://github.com/user-attachments/assets/f99c4fb7-758a-40dd-a3d5-e9b12e15691d)

- 사용자는 이메일, 비밀번호, 비밀번호 확인, 닉네임을 입력하여 새로운 계정을 생성할 수 있습니다.
- 모든 정보를 입력하고 이용 약관을 동의한 후 버튼이 활성화됩니다. 이용 약관 모달에서 취소를 누를 경우 가입할 수 없습니다.
- 가입이 완료되면 '회원가입 되었습니다.' 라는 토스트 메시지와 함께 로그인 페이지로 이동합니다.

### - 나의 대시보드 페이지 ('/mydashboard' page)

### - 대시보드 페이지 ('/dashboard/[id]' page)

#### 1. 컬럼 관련 기능

|컬럼 추가|컬럼 수정|컬럼 삭제|
|:-:|:-:|:-:|
|![컬럼추가](https://github.com/user-attachments/assets/d4c9782b-1366-45ef-a01a-0950da10a69e)|![컬럼수정](https://github.com/user-attachments/assets/f414ef62-d619-47d9-a4d6-497ec99cd46e)|![컬럼 삭제](https://github.com/user-attachments/assets/24de0f36-b44d-468b-a340-0f1dd4cacd9a)|

- 대시보드 페이지의 우측에 `새로운 컬럼 추가하기` 버튼으로 새로운 컬럼을 추가할 수 있습니다. 대시보드에는 기본적으로 `To do`, `On progress`, `Done` 3가지 컬럼이 포함되어 있습니다.
- 컬럼 추가 시 동일한 이름이 있을 경우에는 에러 토스트가 뜨며 추가되지 않습니다.
- 컬럼 우측 상단의 톱니바퀴 버튼을 누르면 컬럼 이름을 수정하거나 삭제할 수 있습니다.

#### 2. 할 일 카드 관련 기능
   
|할 일 카드 추가|할 일 카드 수정|할 일 카드 삭제|
|:-:|:-:|:-:|
|![카드 생성](https://github.com/user-attachments/assets/98e99bf0-5477-4bf5-8f5c-70e678b72f66)|![카드 수정](https://github.com/user-attachments/assets/d036a1fb-dd3c-47ab-97b0-ce32eb4dc72e)|![카드 삭제](https://github.com/user-attachments/assets/1c62e921-52c0-4ab5-9b78-8ef14d54fc83)|

- 컬럼 상단의 `+` 버튼을 누르면 할 일 카드를 추가할 수 있습니다. 할 일 카드에는 제목과 내용은 필수로 입력해야 합니다..
- 해당 카드를 누르면 모달이 뜨게 되며 모달 우측 상단의 케밥 버튼을 누르면 카드를 삭제하거나 수정할 수 있습니다.

#### 3. 댓글 관련 기능
   
|댓글 추가|댓글 수정|댓글 삭제|
|:-:|:-:|:-:|
|![댓글 생성](https://github.com/user-attachments/assets/12c0d7c7-ff27-429f-8f0a-9778e1be9cce)|![댓글 수정](https://github.com/user-attachments/assets/a860fa79-1e07-4980-8a19-74f1b6b338c5)|![댓글 삭제](https://github.com/user-attachments/assets/0daff4a7-a13d-43e6-8b37-4337c01e2034)|

- 해당 카드의 모달에서 댓글을 달 수 있습니다.
- 댓글을 단 본인만 수정이나 삭제를 할 수 있습니다.

#### 4. 무한스크롤 기능

![무한스크롤](https://github.com/user-attachments/assets/1dcbefac-774b-4e69-b855-211aa1392851)

- 컬럼에서 현재 표시된 데이터보다 더 많은 데이터가 있을 경우, 스크롤을 통해 모든 데이터를 불러올 때까지 계속 스크롤할 수 있습니다.
- React Query의 useInfiniteQuery와 useInView를 사용하여 사용자에게 매끄럽고 깔끔한 스크롤 경험을 제공하도록 구현했습니다.

#### 5. 드래그앤드롭 기능

![dnd](https://github.com/user-attachments/assets/c4194e41-3d35-4d8f-9fa3-d704d22eb97b)

- 칸반 보드의 특성을 살려 드래그앤드롭 기능을 추가했습니다.
- 드래그 중인 요소는 크게 표시되어 사용자에게 드래그 중임을 명확하게 전달하도록 하였습니다.
- 또한, 드래그된 요소가 컬럼 내에 있을 때는 컬럼에 테두리 효과를 주어 현재 드래그의 위치를 직관적으로 표시했습니다.



### - 대시보드 관리 페이지 ('/dashboard/[id]/edit' page)

### - 마이페이지 ('/mypage' page)

![mypage시연](https://github.com/user-attachments/assets/2f42515f-4a33-4ad9-b69b-41f4744db1a2)

- 사용자는 프로필 이미지와 닉네임을 변경할 수 있습니다. 변경 중 에러가 발생하면 에러 메시지가 출력되며, 성공 시 '변경되었습니다.'라는 토스트 메시지가 표시됩니다.
- 비밀번호를 변경할 때는 현재 비밀번호와 새로운 비밀번호를 입력해야 합니다. 만약 두 비밀번호가 동일하거나, 새로운 비밀번호가 8자 이상이 아니거나, 새로운 비밀번호와 비밀번호 확인이 일치하지 않으면 버튼이 비활성화됩니다.
- 또한, 현재 비밀번호가 실제 비밀번호와 다를 경우 에러 메시지가 출력되며, 성공 시 '비밀번호가 변경되었습니다.'라는 토스트 메시지가 표시됩니다.


### 기타 기능



<br/>

## 개선 사항

### 토스트
### 미들웨어
### 다크 모드

### 이용 약관 모달


![이용약관모달](https://github.com/user-attachments/assets/85bfa0fe-057d-40e0-a2a2-f3ebd24f5a07)

- 회원가입 과정에서 이용 약관 동의를 위해 모달을 활용했습니다.
- 사용자가 모달에서 약관에 동의하면 체크 표시가 활성화되고, 동의를 취소하면 체크 표시가 비활성화됩니다.
- 이를 통해 버튼 활성화와 연동시켜, 사용자가 정보에 대한 이용 여부를 직접 선택하고 처리할 수 있는 UX를 제공했습니다.


<br/>

## 프로젝트 후기

### 장아영

### 김도용

### 김예준

### 최민경

### 황병선
