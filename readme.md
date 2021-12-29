# Redux 활용한 로그인 로직 구현

useState

- id, pw값을 state hook을 이용해 저장
- 로그인 버튼 클릭시 액션에 state값을 넘김

로그인

- createAsyncThunk를 사용하여 비동기 처리
- 비동기 처리로 전달받은 값을 redux store 저장

로그아웃

- createSlice에서 동기 처리
