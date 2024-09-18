gsap.defaults({
  ease: "none"
})

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
    $('.menu').click(function (e) {
			$('.sub-menu').addClass('on');
			$('body').addClass('dimmed');
		});
		$(document).click(function (e) { // 문서 내에 클릭 이벤트 발생할때 실행
			console.log(e.target); // 클릭된 요소 콘솔에 출력
			if (!$('header').has(e.target).length) { // 클릭된 요소를 자식으로 포함하고 있는지
				$('.sub-menu').removeClass('on');
				$('body').removeClass('dimmed');
			}
		});
    $(window).scroll(function (e) {
      const scrollTop = $(this).scrollTop();
      // console.log(scrollTop)
      if (scrollTop >= 200) {
        $("header").addClass("scroll");
      } else {
        $("header").removeClass("scroll");
      }
    })
    //star
    let lastProgress = 0;
    const starShape = gsap.timeline({
      scrollTrigger: {
        trigger: ".star",
        start: "top top",
        end: "bottom bottom",
        markers: false,
        scrub: 2,
        onUpdate: (self) => {
          const currentProgress = self.progress;
          console.log(currentProgress);
          if (currentProgress > lastProgress) {
            // console.log(`스크롤 위로`);
            gsap.to('.star__shape-1', {
              y: currentProgress + (40), // 잠깐 위로 이동
              duration: currentProgress, // 이동 시간
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to('.star__shape-1', {
                  y: 0, // 원래 위치로 돌아감
                  duration: 0.1,
                  ease: "power1.inOut"
                });
              }
            });
            gsap.to('.star__shape-2', {
              y: currentProgress + (80), // 잠깐 위로 이동
              duration: currentProgress, // 이동 시간
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to('.star__shape-2', {
                  y: 0, // 원래 위치로 돌아감
                  duration: 0.1,
                  ease: "power1.inOut"
                });
              }
            });
            gsap.to('.star__shape-3', {
              y: currentProgress + (120), // 잠깐 위로 이동
              duration: currentProgress, // 이동 시간
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to('.star__shape-4', {
                  y: 0, // 원래 위치로 돌아감
                  duration: 0.1,
                  ease: "power1.inOut"
                });
              }
            });
            gsap.to('.star__shape-4', {
              y: currentProgress + (160), // 잠깐 위로 이동
              duration: currentProgress, // 이동 시간
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to('.star__shape-3', {
                  y: 0, // 원래 위치로 돌아감
                  duration: 0.1,
                  ease: "power1.inOut"
                });
              }
            });
          } else if (currentProgress < lastProgress) {
            // console.log(`스크롤 위로`);
            gsap.to('.star__shape-1', {
              y: currentProgress + (-40), // 잠깐 위로 이동
              duration: currentProgress, // 이동 시간
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to('.star__shape-1', {
                  y: 0, // 원래 위치로 돌아감
                  duration: 0.1,
                  ease: "power1.inOut"
                });
              }
            });
            gsap.to('.star__shape-2', {
              y: currentProgress + (-80), // 잠깐 위로 이동
              duration: currentProgress, // 이동 시간
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to('.star__shape-2', {
                  y: 0, // 원래 위치로 돌아감
                  duration: 0.1,
                  ease: "power1.inOut"
                });
              }
            });
            gsap.to('.star__shape-3', {
              y: currentProgress + (-120), // 잠깐 위로 이동
              duration: currentProgress, // 이동 시간
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to('.star__shape-4', {
                  y: 0, // 원래 위치로 돌아감
                  duration: 0.1,
                  ease: "power1.inOut"
                });
              }
            });
            gsap.to('.star__shape-4', {
              y: currentProgress + (-160), // 잠깐 위로 이동
              duration: currentProgress, // 이동 시간
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to('.star__shape-3', {
                  y: 0, // 원래 위치로 돌아감
                  duration: 0.1,
                  ease: "power1.inOut"
                });
              }
            });
          }

          // 상태 업
          lastProgress = currentProgress;
        },
      }
    });



    const starVideo = document.getElementById("starVideo");

    const star = gsap.timeline({
      scrollTrigger: {
        trigger: ".star__wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: false, // 디버그용 마커
        onEnter: () => {
          starVideo.play();
        },
        onLeaveBack: () => {
          starVideo.pause();
        }
      }
    });

    star.to(".star__video", {
      "--scaling-value": 4,
      duration: 1,
      ease: "none",
    });

    //trailer
    // Split text into words and characters
    ScrollTrigger.create({
      trigger: ".trailer",
      start: "top 50%",
      scrub: 1,
      onEnter: () => {
        animateText(".trailer .headline");
      },
    })
    let mm = gsap.matchMedia();
    mm.add("(max-width: 999px)", () => {
      ScrollTrigger.create({
        trigger: ".trailer",
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
        onEnter: () => {
          $(".trailer__video-mobile video")[0].play();
        },
        onLeaveBack: () => {
          $(".trailer__video-mobile video")[0].pause();
        },
      });
    });
    mm.add("(min-width: 1000px)", () => {
      const trailerCover = gsap.timeline({
        scrollTrigger: {
          trigger: ".trailer__cover",
          start: "top top",
          end: "bottom bottom",
          markers: false,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      trailerCover
        .to(".trailer__cover__wrap", {
          clipPath: "inset(0px 0 round 0)",
        })
        .from(".trailer__cover__wrap", {
          clipPath: "inset(0px 10% round 20px)",
        })
        .to(".trailer__cover", {
          height: 0,
        })

      const video = document.getElementById('bgVideo');
      const texts = document.querySelectorAll('.trailer__video p');
      const trailerVideo = gsap.timeline({
        scrollTrigger: {
          trigger: '.trailer__video',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 10,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const scrollPercent = self.progress;
            const videoDuration = video.duration;
            const currentTime = scrollPercent * videoDuration;
            if (currentTime) {
              video.currentTime = currentTime;
            }

            texts.forEach(text => {
              const [start, end] = text.getAttribute('data-scroll-video-time').split(',').map(Number);
              if (currentTime >= start && currentTime <= end) {
                text.style.opacity = 1;
                animateText(text);
              } else {
                text.style.opacity = 0;
              }
            });
          },
          onEnter: () => {
            $('.trailer__video').removeClass('clip');
          },
          onLeave: () => {
            $('.trailer__video').addClass('clip');
          },
          onEnterBack: () => {
            $('.trailer__video').removeClass('clip');
          },
          onLeaveBack: () => {
            $('.trailer__video').addClass('clip');
          }
        }
      });

    });

    function animateText(selector) {
      const textElement = $(selector);
      const timeline = gsap.timeline();
      const textContent = textElement.text();
      textElement.empty(); // 기존 텍스트 비우기

      // 각 단어를 span으로 감싸기
      textContent.split(" ").forEach((word, index) => {
        const span = $("<span>").text(word);
        textElement.append(span);
        if (index < textContent.split(" ").length - 1) {
          textElement.append(" "); // 단어 사이에 공백 추가
        }
      });

      const words = textElement.find("span"); // span 요소들을 찾기
      timeline.fromTo(
        words,
        {
          display: "inline-block",
          y: 50,
          opacity: 0,
          filter: "blur(0.6rem)", // 초기 블러 효과
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1, // 순차적으로 등장
          filter: "blur(0px)", // 블러 효과 제거
          duration: 1,
          ease: "power3.out"
        }
      );
    }

    //swiper
    const journalSwiper = new Swiper('.journal__swiper', {
      slidesPerView: 1.33,
      spaceBetween: 20,
      grabCursor: true, // 드래그 커서
      breakpoints: {
        700: {
          slidesPerView: 2.33,
        },
        1000: {
          slidesPerView: 3.33,
        }
      },
      pagination: {
        el: '.journal .swiper-pagination',
        type: 'progressbar',
      },
    });

    //footer
    const footer = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top 50%",
        endTrigger: ".footer__info",
        end: "bottom bottom",
        scrub: 0, // 스크롤에 따라 애니메이션 동기화
        markers: false,
        onUpdate: function (self) {
          gsap.to(".footer__logo", { "--smooth-progress": self.progress })
        },
      }
    });

    footer
      .fromTo(".footer__logo",
        { yPercent: 120 },
        { yPercent: 0 }
      )
  });//loading
};//onload
