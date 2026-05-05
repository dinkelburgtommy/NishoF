document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".uagb-block-3955c9e6 .uagb-swiper", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
      },
      loop: true,
      speed: 1500,
      effect: "fade",
      direction: "horizontal",
      flipEffect: { slideShadows: false },
      fadeEffect: { crossFade: true },
      pagination: false,
      navigation: false,
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".uagb-block-f71c833c .uagb-swiper", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
      },
      loop: true,
      speed: 800,
      effect: "slide",
      direction: "horizontal",
      flipEffect: { slideShadows: false },
      fadeEffect: { crossFade: true },
      pagination: false,
      navigation: false,
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".uagb-block-56e9e9ae .uagb-swiper", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
      },
      loop: true,
      speed: 1500,
      effect: "slide",
      direction: "horizontal",
      flipEffect: { slideShadows: false },
      fadeEffect: { crossFade: true },
      pagination: false,
      navigation: false,
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".uagb-block-8f8d2300 .uagb-swiper", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
      },
      loop: true,
      speed: 1500,
      effect: "fade",
      direction: "horizontal",
      flipEffect: { slideShadows: false },
      fadeEffect: { crossFade: true },
      pagination: false,
      navigation: false,
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".uagb-block-7fc49ce9 .uagb-swiper", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
      },
      loop: true,
      speed: 800,
      effect: "slide",
      direction: "horizontal",
      flipEffect: { slideShadows: false },
      fadeEffect: { crossFade: true },
      pagination: false,
      navigation: false,
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".uagb-block-46ddbf5d .uagb-swiper", {
      autoplay: {
        delay: 1500,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
      },
      loop: true,
      speed: 750,
      effect: "slide",
      direction: "horizontal",
      flipEffect: { slideShadows: false },
      fadeEffect: { crossFade: true },
      pagination: false,
      navigation: false,
    });
  });

  var ssLinksParent = document.querySelector(".uagb-block-51857497");
  ssLinksParent?.addEventListener("keyup", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link && e.keyCode === 13) {
      handleSocialLinkClick(link);
    }
  });

  ssLinksParent?.addEventListener("click", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link) {
      handleSocialLinkClick(link);
    }
  });

  function handleSocialLinkClick(link) {
    var social_url = link.dataset.href;
    var target = "";
    if (social_url == "mailto:?body=") {
      target = "_self";
    }
    var request_url = "";
    if (social_url.indexOf("/pin/create/link/?url=") !== -1) {
      request_url =
        social_url +
        encodeURIComponent(window.location.href) +
        "&media=" +
        "https://www.nishofoundation.com/wp-content/uploads/2024/09/Home_Screen_Wallpaper_Background-1024x576.jpeg";
    } else {
      request_url = social_url + encodeURIComponent(window.location.href);
    }
    window.open(request_url, target);
  }
  var ssLinksParent = document.querySelector(".uagb-block-230602ee");
  ssLinksParent?.addEventListener("keyup", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link && e.keyCode === 13) {
      handleSocialLinkClick(link);
    }
  });

  ssLinksParent?.addEventListener("click", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link) {
      handleSocialLinkClick(link);
    }
  });

  function handleSocialLinkClick(link) {
    var social_url = link.dataset.href;
    var target = "";
    if (social_url == "mailto:?body=") {
      target = "_self";
    }
    var request_url = "";
    if (social_url.indexOf("/pin/create/link/?url=") !== -1) {
      request_url =
        social_url +
        encodeURIComponent(window.location.href) +
        "&media=" +
        "https://www.nishofoundation.com/wp-content/uploads/2024/09/Home_Screen_Wallpaper_Background-1024x576.jpeg";
    } else {
      request_url = social_url + encodeURIComponent(window.location.href);
    }
    window.open(request_url, target);
  }
  var ssLinksParent = document.querySelector(".uagb-block-7f71c94e");
  ssLinksParent?.addEventListener("keyup", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link && e.keyCode === 13) {
      handleSocialLinkClick(link);
    }
  });

  ssLinksParent?.addEventListener("click", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link) {
      handleSocialLinkClick(link);
    }
  });

  function handleSocialLinkClick(link) {
    var social_url = link.dataset.href;
    var target = "";
    if (social_url == "mailto:?body=") {
      target = "_self";
    }
    var request_url = "";
    if (social_url.indexOf("/pin/create/link/?url=") !== -1) {
      request_url =
        social_url +
        encodeURIComponent(window.location.href) +
        "&media=" +
        "https://www.nishofoundation.com/wp-content/uploads/2024/09/Home_Screen_Wallpaper_Background-1024x576.jpeg";
    } else {
      request_url = social_url + encodeURIComponent(window.location.href);
    }
    window.open(request_url, target);
  }
  var ssLinksParent = document.querySelector(".uagb-block-8699888e");
  ssLinksParent?.addEventListener("keyup", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link && e.keyCode === 13) {
      handleSocialLinkClick(link);
    }
  });

  ssLinksParent?.addEventListener("click", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link) {
      handleSocialLinkClick(link);
    }
  });

  function handleSocialLinkClick(link) {
    var social_url = link.dataset.href;
    var target = "";
    if (social_url == "mailto:?body=") {
      target = "_self";
    }
    var request_url = "";
    if (social_url.indexOf("/pin/create/link/?url=") !== -1) {
      request_url =
        social_url +
        encodeURIComponent(window.location.href) +
        "&media=" +
        "https://www.nishofoundation.com/wp-content/uploads/2024/09/Home_Screen_Wallpaper_Background-1024x576.jpeg";
    } else {
      request_url = social_url + encodeURIComponent(window.location.href);
    }
    window.open(request_url, target);
  }
  var ssLinksParent = document.querySelector(".uagb-block-d5b419e5");
  ssLinksParent?.addEventListener("keyup", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link && e.keyCode === 13) {
      handleSocialLinkClick(link);
    }
  });

  ssLinksParent?.addEventListener("click", function (e) {
    var link = e.target.closest(".uagb-ss__link");
    if (link) {
      handleSocialLinkClick(link);
    }
  });

  function handleSocialLinkClick(link) {
    var social_url = link.dataset.href;
    var target = "";
    if (social_url == "mailto:?body=") {
      target = "_self";
    }
    var request_url = "";
    if (social_url.indexOf("/pin/create/link/?url=") !== -1) {
      request_url =
        social_url +
        encodeURIComponent(window.location.href) +
        "&media=" +
        "https://www.nishofoundation.com/wp-content/uploads/2024/09/Home_Screen_Wallpaper_Background-1024x576.jpeg";
    } else {
      request_url = social_url + encodeURIComponent(window.location.href);
    }
    window.open(request_url, target);
  }
});
