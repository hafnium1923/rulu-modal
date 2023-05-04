# Rulu-Modal 모달 라이브러리

닫기 버튼을 추가할 수 있는 바텀시트를 가지고 있는 라이브러리입니다.

---

## 설치 방법

`npm i rulu-modal`

---

## 사용 방법

### BottomSheet 컴포넌트 불러오기

`import { BottomSheet } from "rulu-modal";`

### BottomSheet 사용하기

```
const buttonList = [
    <button key="1">버튼1</button>,
    <button key="2">버튼2</button>,
  ];

<BottomSheet trigger={<div>열기버튼</div>} buttons={buttonList}>
<h1>여기에 내용을 작성해주시면 됩니다.</h1>
</BottomSheet>;
```

### 주의사항

모달은 기본적인 style로 flex를 가지고 있습니다. 따라서 버튼과 내용에 원하는 style을 적용한 후 `<BottomSheet></BottomSheet>`로 감싸야 합니다.

```
display: flex;
flex-grow: 1;
flex-wrap: wrap;
justify-content: flex-start;

width: 100%;
height: 90%;
```

## props

trigger: 모달을 열기 위한 요소로, 원하는 컴포넌트를 전달하면 해당 컴포넌트가 모달을 여는 버튼이 됩니다. ReactElement 형태로 전달됩니다.

children?: 선택적 요소입니다. 모달 내부에 들어갈 컨텐츠입니다.

buttons: 모달 닫기 기능이 추가된 버튼을 생성하고 싶을 때 사용하는 요소입니다. 필수적인 요소로, 해당 기능이 필요없다면 빈 배열 `[]`을 입력하면 됩니다. (JSX.Element)[] 형태로 전달됩니다.

### Props 예시

```
import { BottomSheet } from "rulu-modal";

function App() {
  const trigger = <div>모달 열기</div>

  const buttonList = [
    <button key="1">버튼1</button>,
    <button key="2">버튼2</button>,
  ];
  return (
    <BottomSheet trigger={trigger} buttons={buttonList}>
     <h2>여기에 내용을 작성해주시면 됩니다.</h2>
     <h2>이 내용 밑에 버튼이 생길거에요</h2>
     <h3>원하는 스타일이 있으면 적용해서 전달해야 합니다.</h3>
    </BottomSheet>
  )
}
```
