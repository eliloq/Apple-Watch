// text div color change when page is loaded
$(document).ready(function () {
  setTimeout(() => {
    $("div.txt").css({
      backgroundColor: "#333333",
      transition: "1200ms",
    });
    $("div.txt>a").css({
      color: "#1081f3",
      transition: "1200ms",
    });
  }, 1200);
});

//-------------- Horizontal Menu---------------
// ------- Submenus-----------

let flag = false;
//Shop submenu
$("div.horizontal-menu>nav>ul>li").on({
  mouseenter: function () {
    $("div.cover").slideDown();
  },
});

//Shop submenu
$("div.horizontal-menu>nav>ul>li#shop").on({
  mouseenter: function () {
    if (!flag) {
      $("li#shop>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#shop>div.s-menu").css({
      display: "flex",
    });

    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });

    $("li#shop>a").css({
      color: "white",
    });
  },
});

//mac submenu
$("div.horizontal-menu>nav>ul>li#mac").on({
  mouseenter: function () {
    if (!flag) {
      $("li#mac>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#mac>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#mac>a").css({
      color: "white",
    });
  },
});
//ipad submenu
$("div.horizontal-menu>nav>ul>li#ipad").on({
  mouseenter: function () {
    if (!flag) {
      $("li#ipad>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#ipad>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#ipad>a").css({
      color: "white",
    });
  },
});
//iphone submenu
$("div.horizontal-menu>nav>ul>li#iphone").on({
  mouseenter: function () {
    if (!flag) {
      $("li#iphone>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#iphone>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#iphone>a").css({
      color: "white",
    });
  },
});

//watch submenu
$("div.horizontal-menu>nav>ul>li#watch").on({
  mouseenter: function () {
    if (!flag) {
      $("li#watch>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#watch>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#watch>a").css({
      color: "white",
    });
  },
});

//vision submenu
$("div.horizontal-menu>nav>ul>li#vision").on({
  mouseenter: function () {
    if (flag) {
      $("li>div.s-menu").slideUp();
      $("div.cover").slideUp();
      flag = false;
    } else {
      $("li>div.s-menu").css({ display: "none" });
      $("div.cover").css({ display: "none" });
    }
  },
});

//airpods submenu
$("div.horizontal-menu>nav>ul>li#airpods").on({
  mouseenter: function () {
    if (!flag) {
      $("li#airpods>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#airpods>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#airpods>a").css({
      color: "white",
    });
  },
});

//tv-home submenu
$("div.horizontal-menu>nav>ul>li#tv-home").on({
  mouseenter: function () {
    if (!flag) {
      $("li#tv-home>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#tv-home>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#tv-home>a").css({
      color: "white",
    });
  },
});

//entertainment submenu
$("div.horizontal-menu>nav>ul>li#entertainment").on({
  mouseenter: function () {
    if (!flag) {
      $("li#entertainment>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#entertainment>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#entertainment>a").css({
      color: "white",
    });
  },
});

//accessories submenu
$("div.horizontal-menu>nav>ul>li#accessories").on({
  mouseenter: function () {
    if (!flag) {
      $("li#accessories>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#accessories>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#accessories>a").css({
      color: "white",
    });
  },
});

//support submenu
$("div.horizontal-menu>nav>ul>li#support").on({
  mouseenter: function () {
    if (!flag) {
      $("li#support>div.s-menu").slideDown();
      flag = true;
    }
    $("li>div.s-menu").css({
      display: "none",
    });

    $("li#support>div.s-menu").css({
      display: "flex",
    });
    $("div.horizontal-menu>nav>ul>li>a").css({
      color: "whitesmoke",
    });
    $("li#support>a").css({
      color: "white",
    });
  },
});

// side up submenus
$("div.horizontal-menu>nav>ul").on({
  mouseleave: function () {
    $("div.cover").slideUp();

    $("li>div.s-menu").slideUp();

    $("li>a").css({
      color: "whitesmoke",
    });
    flag = false;
  },
});

//bag submenu
$("div.horizontal-menu>nav>ul>li:nth-last-of-type(1)").on({
  mouseenter: function () {
    if (flag) {
      $("li>div.s-menu").slideUp();
      $("div.cover").slideUp();
      flag = false;
    } else {
      $("li>div.s-menu").css({ display: "none" });
      $("div.cover").css({ display: "none" });
    }
  },
});

//search submenu
$("div.horizontal-menu>nav>ul>li:nth-last-of-type(2)").on({
  mouseenter: function () {
    if (flag) {
      $("li>div.s-menu").slideUp();
      $("div.cover").slideUp();
      flag = false;
    } else {
      $("li>div.s-menu").css({ display: "none" });
      $("div.cover").css({ display: "none" });
    }
  },
});

//-------------- Vertical Menu---------------
flag2 = true;

$("div.vertical-menu>nav>ul>li:nth-last-of-type(1)").on({
  click: function () {
    if (flag2) {
      // disable scroll
      $("html,body").css({
        overflow: "hidden",
      });

      // icon rotate

      setTimeout(() => {
        $(
          "div.vertical-menu>nav>ul>li:nth-last-of-type(1)>div:nth-of-type(1)"
        ).css({
          width: "18px",
          backgroundColor: "whitesmoke",
          transform: "rotate(45deg)",
          transition: "250ms",
        });

        $(
          "div.vertical-menu>nav>ul>li:nth-last-of-type(1)>div:nth-of-type(2)"
        ).css({
          width: "18px",
          backgroundColor: "whitesmoke",
          transform: "rotate(-45deg)",
          transition: "250ms",
        });
      }, 100);

      $(
        "div.vertical-menu>nav>ul>li:nth-last-of-type(1)>div:nth-of-type(1)"
      ).css({
        top: "calc(50% - 1px)",
        transition: "250ms",
      });

      $(
        "div.vertical-menu>nav>ul>li:nth-last-of-type(1)>div:nth-of-type(2)"
      ).css({
        top: "calc(50% - 1px)",
        transition: "250ms",
      });

      $("div.vertical-menu>div.menu").slideDown();

      flag2 = false;
    } else {
      // disable scroll
      $("html,body").css({
        overflow: "visible",
      });

      // icon rotate

      setTimeout(() => {
        $(
          "div.vertical-menu>nav>ul>li:nth-last-of-type(1)>div:nth-of-type(1)"
        ).css({
          top: "calc(45% - 1px)",
          transition: "250ms",
        });

        $(
          "div.vertical-menu>nav>ul>li:nth-last-of-type(1)>div:nth-of-type(2)"
        ).css({
          top: "calc(60% - 1px)",
          transition: "250ms",
        });
      }, 100);

      $(
        "div.vertical-menu>nav>ul>li:nth-last-of-type(1)>div:nth-of-type(1)"
      ).css({
        width: "16.5px",
        top: "calc(50% - 1px)",
        backgroundColor: "rgb(167, 167, 167)",
        transform: "rotate(0)",
        transition: "250ms",
      });

      $(
        "div.vertical-menu>nav>ul>li:nth-last-of-type(1)>div:nth-of-type(2)"
      ).css({
        width: "16.5px",
        top: "calc(50% - 1px)",
        backgroundColor: "rgb(167, 167, 167)",
        transform: "rotate(0)",
        transition: "250ms",
      });

      $("div.vertical-menu>div.menu").slideUp();
      flag2 = true;
    }
  },
});

// shop submenu
$("div.vertical-menu>div.menu>nav>ul>li#shop").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu>div>i").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu").removeClass(
      "animate__fadeInRight"
    );
    $("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu").removeClass(
        "animate__fadeOutRight"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu").removeClass(
        "animate__animated"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#shop>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// mac submenu
$("div.vertical-menu>div.menu>nav>ul>li#mac").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu>div>i").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu").removeClass(
      "animate__fadeInRight"
    );
    $("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu").removeClass(
        "animate__fadeOutRight"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu").removeClass(
        "animate__animated"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#mac>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// ipad submenu
$("div.vertical-menu>div.menu>nav>ul>li#ipad").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu>div>i").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu").removeClass(
      "animate__fadeInRight"
    );
    $("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu").removeClass(
        "animate__fadeOutRight"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu").removeClass(
        "animate__animated"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#ipad>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// iphone submenu
$("div.vertical-menu>div.menu>nav>ul>li#iphone").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu>div>i").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu").removeClass(
      "animate__fadeInRight"
    );
    $("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu").removeClass(
        "animate__fadeOutRight"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu").removeClass(
        "animate__animated"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#iphone>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// watch submenu
$("div.vertical-menu>div.menu>nav>ul>li#watch").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu>div>i").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu").removeClass(
      "animate__fadeInRight"
    );
    $("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu").removeClass(
        "animate__fadeOutRight"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu").removeClass(
        "animate__animated"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#watch>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// airpods submenu
$("div.vertical-menu>div.menu>nav>ul>li#airpods").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu>div>i").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu").removeClass(
      "animate__fadeInRight"
    );
    $("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu").removeClass(
        "animate__fadeOutRight"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu").removeClass(
        "animate__animated"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#airpods>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// tv-home submenu
$("div.vertical-menu>div.menu>nav>ul>li#tv-home").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu>div>i").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu").removeClass(
      "animate__fadeInRight"
    );
    $("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu").removeClass(
        "animate__fadeOutRight"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu").removeClass(
        "animate__animated"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#tv-home>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// entertainment submenu
$("div.vertical-menu>div.menu>nav>ul>li#entertainment").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu>div>i").on({
  click: function () {
    $(
      "div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu"
    ).removeClass("animate__fadeInRight");
    $("div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $(
        "div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu"
      ).removeClass("animate__fadeOutRight");

      $(
        "div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu"
      ).removeClass("animate__animated");

      $("div.vertical-menu>div.menu>nav>ul>li#entertainment>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// accessories submenu
$("div.vertical-menu>div.menu>nav>ul>li#accessories").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu>div>i").on({
  click: function () {
    $(
      "div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu"
    ).removeClass("animate__fadeInRight");
    $("div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $(
        "div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu"
      ).removeClass("animate__fadeOutRight");

      $(
        "div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu"
      ).removeClass("animate__animated");

      $("div.vertical-menu>div.menu>nav>ul>li#accessories>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});

// support submenu
$("div.vertical-menu>div.menu>nav>ul>li#support").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu").css({
      display: "flex",
    });

    $("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu").addClass(
      "animate__animated"
    );

    $("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu").addClass(
      "animate__fadeInRight"
    );
  },
});

$("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu>div>i").on({
  click: function () {
    $("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu").removeClass(
      "animate__fadeInRight"
    );
    $("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu").addClass(
      "animate__fadeOutRight"
    );

    setTimeout(() => {
      $("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu").removeClass(
        "animate__fadeOutRight"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu").removeClass(
        "animate__animated"
      );

      $("div.vertical-menu>div.menu>nav>ul>li#support>div.s-menu").css({
        display: "none",
      });
    }, 500);
  },
});



// menu in footer

// shop-learn li
li1 = true;
$("div.footer>div.menu>nav>ul>li#shop-learn").on({
  click: function () {
    if (li1) {
      $("div.footer>div.menu>nav>ul>li#shop-learn>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#shop-learn>div").slideDown();

      li1 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#shop-learn>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#shop-learn>div").css({
        display: "none",
      });
      li1 = true;
    }
  },
});


// apple-wallet li
li2 = true;
$("div.footer>div.menu>nav>ul>li#apple-wallet").on({
  click: function () {
    if (li2) {
      $("div.footer>div.menu>nav>ul>li#apple-wallet>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#apple-wallet>div").slideDown();

      li2 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#apple-wallet>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#apple-wallet>div").css({
        display: "none",
      });
      li2 = true;
    }
  },
});

// account li
li3 = true;
$("div.footer>div.menu>nav>ul>li#account").on({
  click: function () {
    if (li3) {
      $("div.footer>div.menu>nav>ul>li#account>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#account>div").slideDown();

      li3 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#account>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#account>div").css({
        display: "none",
      });
      li3 = true;
    }
  },
});

// entertainment li
li4 = true;
$("div.footer>div.menu>nav>ul>li#entertainment").on({
  click: function () {
    if (li4) {
      $("div.footer>div.menu>nav>ul>li#entertainment>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#entertainment>div").slideDown();

      li4 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#entertainment>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#entertainment>div").css({
        display: "none",
      });
      li4 = true;
    }
  },
});


// apple-store li
li5 = true;
$("div.footer>div.menu>nav>ul>li#apple-store").on({
  click: function () {
    if (li5) {
      $("div.footer>div.menu>nav>ul>li#apple-store>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#apple-store>div").slideDown();

      li5 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#apple-store>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#apple-store>div").css({
        display: "none",
      });
      li5 = true;
    }
  },
});


// for-business li
li6 = true;
$("div.footer>div.menu>nav>ul>li#for-business").on({
  click: function () {
    if (li6) {
      $("div.footer>div.menu>nav>ul>li#for-business>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#for-business>div").slideDown();

      li6 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#for-business>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#for-business>div").css({
        display: "none",
      });
      li6 = true;
    }
  },
});


// for-education li
li7 = true;
$("div.footer>div.menu>nav>ul>li#for-education").on({
  click: function () {
    if (li7) {
      $("div.footer>div.menu>nav>ul>li#for-education>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#for-education>div").slideDown();

      li7 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#for-education>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#for-education>div").css({
        display: "none",
      });
      li7 = true;
    }
  },
});


// for-healthcare li
li8 = true;
$("div.footer>div.menu>nav>ul>li#for-healthcare").on({
  click: function () {
    if (li8) {
      $("div.footer>div.menu>nav>ul>li#for-healthcare>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#for-healthcare>div").slideDown();

      li8 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#for-healthcare>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#for-healthcare>div").css({
        display: "none",
      });
      li8 = true;
    }
  },
});


// for-government li
li9 = true;
$("div.footer>div.menu>nav>ul>li#for-government").on({
  click: function () {
    if (li9) {
      $("div.footer>div.menu>nav>ul>li#for-government>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#for-government>div").slideDown();

      li9 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#for-government>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#for-government>div").css({
        display: "none",
      });
      li9 = true;
    }
  },
});


// apple-values li
li10 = true;
$("div.footer>div.menu>nav>ul>li#apple-values").on({
  click: function () {
    if (li10) {
      $("div.footer>div.menu>nav>ul>li#apple-values>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#apple-values>div").slideDown();

      li10 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#apple-values>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#apple-values>div").css({
        display: "none",
      });
      li10 = true;
    }
  },
});


// about-apple li
li11 = true;
$("div.footer>div.menu>nav>ul>li#about-apple").on({
  click: function () {
    if (li11) {
      $("div.footer>div.menu>nav>ul>li#about-apple>i").css({
        transform: "scaleY(-1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#about-apple>div").slideDown();

      li11 = false;
    } else {
      $("div.footer>div.menu>nav>ul>li#about-apple>i").css({
        transform: "scaleY(1)",
        transition: "250ms",
      });

      $("div.footer>div.menu>nav>ul>li#about-apple>div").css({
        display: "none",
      });
      li11 = true;
    }
  },
});

