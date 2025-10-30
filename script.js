// 계좌번호 보기
function copyAccount(type) {
  let account = "";
  if (type === '신랑') {
    account = "신랑 한상우 / 카카오뱅크 3333-30-2663222";
  } else {
    account = "신부 안은정 / 국민은행 123456-78-901234";
  }

  navigator.clipboard.writeText(account);
  document.getElementById("accountMsg").innerText = `${type}측 계좌번호가 복사되었습니다.`;
}



