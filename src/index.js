const turnList = document.querySelector(".turn-list");

// 시도 버튼에 클릭 이벤트가 일어났을 때
const tryButton = document.querySelector(".input-box-try");

tryButton.addEventListener("click", e => {
  // div 생성 후 'turn-list'에 붙여준다
  let turnListItemEl = document.createElement("div");
  turnListItemEl.classList.add("turn-items");
  turnList.appendChild(turnListItemEl);
  // turn-items밑의 하위 div 4개
});

// 한번 더 버튼에 클릭 이벤트가 일어났을 때
// const resetButton = document.querySelector(".input-box-reset");

// resetButton.addEventListener("click", e => {});
