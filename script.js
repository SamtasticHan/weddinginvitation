// 계좌번호 보기
function copyAccount(type) {
  let account = "";
  if (type === '신랑') {
    account = "신랑 한상우 / 카카오뱅크 3333-30-2663222";
  } else {
    account = "신부 안은정 / 카카오뱅크 3333-01-4974626";
  }

  navigator.clipboard.writeText(account);
  document.getElementById("accountMsg").innerText = `${type}측 계좌번호가 복사되었습니다.`;
}


// --- 갤러리 확대 기능 ---
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".gallery-container img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");
  let currentIndex = 0;

  // 이미지 클릭 시 모달 오픈
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      currentIndex = index;
      document.body.style.overflow = "hidden"; // 스크롤 잠금
    });
  });

  // 닫기 버튼
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  // 모달 배경 클릭 시 닫기
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  // 터치 스와이프로 이전/다음 이동
  let startX = 0;
  modal.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });
  modal.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) { // 오른쪽 스와이프
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex].src;
    } else if (startX - endX > 50) { // 왼쪽 스와이프
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex].src;
    }
  });
});



