


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

// --- 계좌번호 토글 ---
function toggleAccount(type) {
  const groom = document.getElementById("groomAccount");
  const bride = document.getElementById("brideAccount");

  if (type === 'groom') {
    groom.style.display = (groom.style.display === 'block') ? 'none' : 'block';
    bride.style.display = 'none'; // 한쪽만 열림
  } else {
    bride.style.display = (bride.style.display === 'block') ? 'none' : 'block';
    groom.style.display = 'none';
  }
}

// --- 복사 기능 ---
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const msg = document.getElementById("accountMsg");
    msg.innerText = "계좌번호가 복사되었습니다.";
    msg.style.color = "#8b6f47";
    setTimeout(() => msg.innerText = "", 2000);
  });
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const msg = document.getElementById("linkMsg");
    msg.innerText = "링크가 복사되었습니다.";
    msg.style.color = "#8b6f47";
    setTimeout(() => msg.innerText = "", 2000);
  }).catch(err => {
    alert("복사에 실패했습니다. 브라우저에서 수동으로 복사해 주세요.");
    console.error(err);
  });
}

function shareKakao() {
  const url = window.location.href;
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '한상우 ♥ 안은정 결혼식에 초대합니다 💍',
      description: '소중한 당신을 초대합니다. 함께해 주세요.',
      imageUrl: 'https://samtastichan.github.io/weddinginvitation/img/main.JPG', // 대표 이미지 URL
      link: {
        mobileWebUrl: url,
        webUrl: url
      },
    },
    buttons: [
      {
        title: '청첩장 보기',
        link: {
          mobileWebUrl: url,
          webUrl: url
        },
      },
    ]
  });
}









