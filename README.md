### 1. 아토믹 디자인

- 아토믹 디자인 패턴으로 구성해보았음
- 참고로 본인이 프로젝트 중 프론트엔드를 어떻게 디자인을 했는가만 보기 위한 목적이므로 현 저장소의 코드는 에러 덩어리임
- 따라서 디자인을 어떻게 했는가 커다란 틀로만 보기

### 2. 살펴볼 점

- Atomic을 어떻게 구성했는가
  - 타입을 만들어서 자동완성 제공 등 자주 사용하는 css기능에 대해 테일윈드처럼 사용할 수 있게 만듦
- Molecule을 어떻게 구성했는가
  - 커스텀 Molecule, 용도별 Molecule 두 가지 종류 존재 (추후에 Molecule 구성 시 정리했던거 노션 링크달기)
- Organism과 Template의 역할을 최대한 구분 (추후에 organism을 분리할 때 난감했던 점 정리했던거 노션 링크달기)
- Template에 어떤 Organism이 쓰였는지 편하게 보기 위해 Template과 Organism간 폴더명 일치
  - ex) template/login의 컴포넌트들은 organisms/login 폴더로부터 온다
