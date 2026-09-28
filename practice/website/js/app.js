// 페이지가 준비되면 실행합니다.
document.addEventListener('DOMContentLoaded', function () {
  console.log('숲속 책방 페이지가 열렸습니다.');

  // 메뉴를 누르면 해당 구역으로 부드럽게 이동합니다.
  document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById(this.getAttribute('href').substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
