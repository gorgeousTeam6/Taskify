# 💡 Schedo (Taskify)


![hero-black](https://github.com/user-attachments/assets/85a3dc89-4d9d-40e6-900e-474a1375e0d0)

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

<br/>

### 프로젝트 주제 및 선정 배경, 기획의도

- **`SCHEDO`** : `Schedule`과 `Do`의 조합으로, 단순한 일정 관리 이상의 경험을 제공하고자 함
- **선정 배경** : 평소 사용하는 GitHub의 projects 서비스와 노션에 있는 일정 관리 서비스에 대한 흥미를 느끼고, 배웠던 기술들을 적용하기 좋은 주제라고 생각
- **차별점** : 대시보드에 여러 멤버를 초대해 함께 사용할 수 있고 관리 기능을 제공함<br/>
ㅤㅤㅤ ㅤ여러 개의 프로젝트를 진행 시 일정 관리에 대한 편의성이 제공됨

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
| 할 일 생성 모달<br/>할 일 수정 모달        |  헤더<br/>사이드메뉴<br/>공통 버튼<br/>대시보드 생성 모달<br/>초대하기 모달    |        |   컬럼 생성&삭제 모달<br/>할 일 모달<br/>공통 모달 포탈 구현      |        |
| 발표<br/>레포지토리 세팅<br/>디자인        |        |  인증&인가 (유저 관리)      |   드래그앤드롭 구현<br/>다크모드<br/>무한스크롤<br/>디자인     |        |

**기본으로 피피티 참고해서 적은거라 수정예정!** <br/>
**꼭 본인이 한 부분 자세히 적어주기**

<br/>

## 채택한 기술 및 브랜치 전략

### zustand


### Tanstack Query (React Query)


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

### - 나의 대시보드 페이지 ('/mydashboard' page)

### - 대시보드 페이지 ('/dashboard/[id]' page)

### - 대시보드 관리 페이지 ('/dashboard/[id]/edit' page)

### - 마이페이지 ('/mypage' page)

### 기타 기능



<br/>

## 개선 사항

### 토스트
### 미들웨어
### 다크 모드

<br/>

## 프로젝트 후기

### 장아영

### 김도용

### 김예준

### 최민경

### 황병선
