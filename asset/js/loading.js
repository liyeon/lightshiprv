window.onload = function () {
  const loadingLogoElement = $("#loadingLogo");
  const animationPath = loadingLogoElement.data("path"); // Lottie 애니메이션 JSON 경로

  // Lottie 로드
  const loadingAnimation = lottie.loadAnimation({
    container: loadingLogoElement[0], // jQuery 객체를 DOM 요소로 변환
    renderer: "svg", // 렌더링 방식
    loop: false,
    autoplay: true,
    path: animationPath, // JSON 파일 경로
  });//lottie load 

  // Lottie 완료 후 실행
  loadingAnimation.addEventListener("complete", function () {
    $(".loading").css("animation", "loading 1s forwards");
  });//loadingAnimation
  $(".loading").one("animationend", function () {
    $(this).remove();
  });//loading
};//onload
