# 프론트엔드 지원자 이승훈입니다.

### 제작 기간

8/1~8/10

### 사용한 기술들

typescript, nextron, firebase, styled-components

### 구현 기능

회원가입, 로그인, 유저 목록, 채팅

### 간단한 소개

첫 화면으로 들어가면

<img width="800" alt="스크린샷 2022-08-10 오전 8 27 12" src="https://user-images.githubusercontent.com/100465780/183778783-05e10fd8-0319-41df-b23c-af18f67ef21f.png">

로그인 화면이 나옵니다. 로그인, 회원가입 구현은 **firebase**에 ****Authentication****와 ****Firestore****를 이용하여 custom hook을 만들어서 구현했습니다.

**회원가입하러 가기**를 통해서 회원가입 페이지로 넘어가집니다.

<img width="791" alt="스크린샷 2022-08-10 오전 8 28 17" src="https://user-images.githubusercontent.com/100465780/183778889-0c4ca818-e270-4c51-865d-34679193316e.png">


회원가입 또는 로그인을 하면 홈 화면으로 넘어가집니다.

<img width="789" alt="스크린샷 2022-08-10 오전 8 29 40" src="https://user-images.githubusercontent.com/100465780/183779010-251f211f-38e5-41e6-948a-9511b8511a9f.png">

왼쪽에 유저 리스트가 나오고 현재 로그인 중인 유저는 🔵 로그인하고 있지 않은 유저는 🔴를 사용하여 표시했습니다.

오른쪽에 현재 유저가 속해 있는 채팅방들이 나오게 구현했습니다. **()** 안에 있는 숫자는 채팅방 안에 있는 인원수를 의미합니다.

**채팅 만들기** 버튼을 누르면 

<img width="794" alt="스크린샷 2022-08-10 오전 8 30 12" src="https://user-images.githubusercontent.com/100465780/183779057-388f9891-ade3-4bcc-b1eb-5943fa4a4ecc.png">


**Modal**이 나오면서 채팅방 이름과 같이 채팅할 수 있는 유저를 선택할 수 있습니다. 

**만들기** 버튼을 클릭해서 채팅방 들어갈 수 있습니다.

<img width="792" alt="스크린샷 2022-08-10 오전 8 30 38" src="https://user-images.githubusercontent.com/100465780/183779094-1b402500-eb13-4ec9-b342-6b30e26d97ec.png">


유저 본인이 입력한 채팅은 오른쪽에 정렬시키고 다른 유저가 입력한 채팅은 왼쪽에 정렬 시키는 식으로 정리하였습니다.

# 감사합니다 !!
