AOS.init({
  duration: 800,
  easing: "slide",
});

(function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    $(".carousel-testimony").owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $("#section-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // navigation
  var OnePageNav = function () {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
      "click",
      function (e) {
        e.preventDefault();

        var hash = this.hash,
          navToggler = $(".navbar-toggler");
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          700,
          "easeInOutExpo",
          function () {
            window.location.hash = hash;
          }
        );

        if (navToggler.is(":visible")) {
          navToggler.click();
        }
      }
    );
    $("body").on("activate.bs.scrollspy", function () {
      console.log("nice");
    });
  };
  OnePageNav();

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  var goHere = function () {
    $(".mouse-icon").on("click", function (event) {
      event.preventDefault();

      $("html,body").animate(
        {
          scrollTop: $(".goto-here").offset().top,
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });
  };
  goHere();

  function makeTimer() {
    var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 1000);

  //ICI GESTION DES PRODUITS

  //Local storage
  //nom du clé pour projet vakna-datas
  var vkey = "vakna-datas";

  function ll() {
    var vdatas = localStorage.getItem(vkey);

    function setInitDatas() {
      let v = {
        products: [
          {
            id: 1,
            name: "Raisin",
            status: "30%",
            price_dc: "4420 Ariary / kg",
            price_sale: "3 400 Ariary / kg",
            im: "images/product-1.jpg",
          },
          {
            id: 2,
            name: "Fraise",
            status: null,
            price_dc: null,
            price_sale: "2 800 Ariary/kg",
            im: "images/product-2.jpg",
          },
          {
            id: 3,
            name: "Patates douces",
            status: null,
            price_dc: null,
            price_sale: "2 000 Ariary/kg",
            im: "images/product-3.jpg",
          },
          {
            id: 4,
            name: "Betterave",
            status: null,
            price_dc: null,
            price_sale: "3 000 Ariary / kg",
            im: "images/product-4.jpg",
          },
          {
            id: 5,
            name: "Banane",
            status: "30%",
            price_dc: "2 990 Ariary / kg",
            price_sale: "2 300 Ariary / kg",
            im: "images/product-5.jpg",
          },
          {
            id: 6,
            name: "Orange",
            status: null,
            price_dc: null,
            price_sale: "4 000 Ariary / kg",
            im: "images/product-6.jpg",
          },
          {
            id: 7,
            name: "Citrons",
            status: null,
            price_dc: null,
            price_sale: "2 900 Ariary / kg",
            im: "images/product-7.jpg",
          },
          {
            id: 8,
            name: "Poivrons jaunes",
            status: null,
            price_dc: null,
            price_sale: "5 000 Ariary / kg",
            im: "images/product-8.jpg",
          },
          {
            id: 9,
            name: "Oignons",
            status: null,
            price_dc: null,
            price_sale: "3 400 Ariary / kg",
            im: "images/product-9.jpg",
            good: 1,
          },
          {
            id: 10,
            name: "Pomme",
            status: null,
            price_dc: null,
            price_sale: "3 500 Ariary / kg",
            im: "images/product-10.jpg",
          },
          {
            id: 11,
            name: "Carottes",
            status: null,
            price_dc: null,
            price_sale: "2 700 Ariary / kg",
            im: "images/product-11.jpg",
          },
          {
            id: 12,
            name: "Radis",
            status: null,
            price_dc: null,
            price_sale: "4 000 Ariary / kg",
            im: "images/product-12.jpg",
          },

          {
            id: 13,
            name: "Mandarine",
            status: null,
            price_dc: null,
            price_sale: "3 400 Ariary / kg",
            im: "images/product-12.jpg",
            good: 1,
          },
          {
            id: 14,
            name: "Choux rouges",
            status: null,
            price_dc: null,
            price_sale: "3 400 Ariary / kg",
            im: "images/product-11.jpg",
            good: 1,
          },
          {
            id: 15,
            name: "Pastèques",
            status: null,
            price_dc: null,
            price_sale: "3 400 Ariary / kg",
            im: "images/product-10.jpg",
            good: 1,
          },
          {
            id: 16,
            name: "Tamarin",
            status: null,
            price_dc: null,
            price_sale: "3 400 Ariary / kg",
            im: "images/good-4.jpg",
            good: 1,
          },
        ],
        category: [
          { label: "Tous", id: -1 },
          { label: "Nos Fruits", id: 1 },
          { label: "Nos Légumes", id: 2 },
          { label: "Autres", id: 2 },
        ],

        card: {}, //clé : id du produit, value : nombre de commande
        wish: [],
      };
      localStorage.setItem(vkey, JSON.stringify(v));
    }

    //si null, c'est qu'aucun donné n'a été enregistré
    if (!vdatas) {
      //on le met au format json
      setInitDatas();
    } else {
      vdatas = JSON.parse(vdatas);
      if (vdatas.products.length <= 1) {
        setInitDatas();
        vdatas = JSON.parse(localStorage.getItem(vkey));
      }

      // console.log(vdatas)
    }

    function saveDatas() {
      localStorage.setItem(vkey, JSON.stringify(vdatas));
    }

    //affichage des produits
    var pr = "";
    var count = 0;
    for (let i = 0; i < vdatas.products.length; i++) {
      const e = vdatas.products[i];

      pr = `<div class="col-md-6 col-lg-3">
	   <div class="product">
			   <a href="#" class="img-prod"><img class="img-fluid" src="${e.im}" alt="${
        e.name
      }">
				   ${e.status ? `<span class="status">${e.status}</span>` : ""}
				   <div class="overlay"></div>
			   </a>
			   <div class="text py-3 pb-3 px-3 text-center">
				   <h3><a href="#"> ${e.name} </a></h3>
				   <div class="d-flex">
					   <div class="pricing">
						   <p class="price"> ${
                 e.status
                   ? `<span class="mr-2 price-dc">${e.price_dc}</span>`
                   : ""
               } <span class="price-sale"> ${e.price_sale} </span></p>
					   </div>
				   </div>
				   <div class="bottom-area d-flex px-3">
					   <div class="m-auto d-flex">
						   <a href="#" data-prodid="${
                 e.id
               }" class="add-to-cart d-flex justify-content-center align-items-center text-center">
							   <span><i class="ion-ios-menu"></i></span>
						   </a>
						   <a href="#" data-prodid="${
                 e.id
               }" class="buy-now d-flex justify-content-center align-items-center mx-1">
							   <span><i class="ion-ios-cart"></i></span>
						   </a>
						   <a href="#" data-prodid="${
                 e.id
               }" class="heart d-flex justify-content-center align-items-center ">
							   <span><i class="ion-ios-heart"></i></span>
						   </a>
					   </div>
				   </div>
			   </div>
		   </div>
	   </div>`;

      if (count < 4) $(".list-prod-home").append($(pr));
      count++;

      $(".list-all-products").append($(pr));

      if (!e.good) continue;

      pr = `<div class="product" >
	   <a href="#" class="img-prod"><img class="img-fluid1" id="${e.name.toLowerCase()}" src="${
        e.im
      }" alt="image">
		   <div class="overlay"></div>
	   </a>
	   <div class="text py-3 pb-3 px-3 text-center">
		   <h3><a href="#"> ${e.name} </a></h3>
		   <div class="d-flex">
			   <div class="pricing">
				   <p class="price"> ${
             e.status ? `<span class="mr-2 price-dc">${e.price_dc}</span>` : ""
           } <span class="price-sale"> ${e.price_sale} </span></p>
			   </div>
		   </div>
		   <div class="bottom-area d-flex px-3">
			   <div class="m-auto d-flex">
				   <a href="#" data-prodid="${
             e.id
           }" class="add-to-cart d-flex justify-content-center align-items-center text-center">
					   <span><i class="ion-ios-menu"></i></span>
				   </a>
				   <a href="#" data-prodid="${
             e.id
           }" class="buy-now d-flex justify-content-center align-items-center mx-1">
					   <span><i class="ion-ios-cart"></i></span>
				   </a>
				   <a href="#" data-prodid="${
             e.id
           }" class="heart d-flex justify-content-center align-items-center ">
					   <span><i class="ion-ios-heart"></i></span>
				   </a>
			   </div>
		   </div>
	   </div>
	   </div>`;

      $(".list-all-good").append($(pr));
    }

    count = 0;

    //Affichage des produits dans le panier
	function displayProdCart() {
		let prod_ids = Object.keys(vdatas.card).map((x) => parseInt(x));
		let list_det_cart = [];
	  
		for (let i = 0; i < vdatas.products.length; i++) {
		  const e = vdatas.products[i];
		  const prix = parseInt(e.price_sale.replace(/\s/g, ""));
	  
		  if (prod_ids.indexOf(e.id) != -1) {
			list_det_cart.push({
			  desc: "Délicieux",
			  name: e.name,
			  im: e.im,
			  price: `Ar ${prix}`,
			  quantity: vdatas.card[e.id],
			  total: `Ar ${prix * vdatas.card[e.id]}`,
			});
		  } else {
			continue;
		  }
		}
	  
		console.log(list_det_cart);
	  
		// Ajout du html de la liste
		for (let i = 0; i < list_det_cart.length; i++) {
		  const e = list_det_cart[i];
	  
		  const pr = `<tr class="text-center">
			<td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>
	  
			<td class="image-prod"><div class="img" style="background-image:url(${e.im});"></div></td>
	  
			<td class="product-name">
			  <h3>${e.name}</h3>
			  <p> ${e.desc} </p>
			</td>
	  
			<td class="price"> ${e.price} </td>
	  
			<td class="quantity">
			  <div class="input-group mb-3">
				<input type="text" name="quantity" class="quantity form-control input-number" value="${e.quantity}" min="1" max="100">
			  </div>
			</td>
	  
			<td class="total"> ${e.total} </td>
		  </tr>`;
	  
		  $(".list-cart").append($(pr));
		}
	  
		// Calcul de la somme totale des prix des produits
		let totalPrice = 0;
		for (let i = 0; i < list_det_cart.length; i++) {
		  const product = list_det_cart[i];
		  totalPrice += parseInt(product.total.replace(/\D/g, ""));
		}
	  
		// Affichage de la somme totale dans l'HTML
		const formattedTotalPrice = `Ar ${totalPrice}`;
		$("#total-price").text(formattedTotalPrice);
	  }
	  
	  // Appel de la fonction pour afficher les produits dans le panier et la somme totale
	  displayProdCart();
	  


	
    //L
    $("body").on("click", ".buy-now", function () {
      var idp = parseInt($(this).data("prodid"));
      vdatas.card[idp] = vdatas.card[idp] ? vdatas.card[idp] + 1 : 1;

      // console.log(vdatas.card);
      updatePanNb();

      //à chaque fois qu'on fait une modif dans le datas on sauvegarde
      saveDatas();
    });

    //Mise à jour du nombre de produit dans le panier
    function updatePanNb() {
      var tt = Object.keys(vdatas.card);

      var sum = 0;

      for (let i = 0; i < tt.length; i++) {
        const e = tt[i];
        sum += vdatas.card[e];
      }
      //la classe qui contient le nuléro des éléments dans le panier
      $(".pan-content").text(`[${sum}]`);
    }

    //Clear cart //suppression de la contenu de la carte
    $(".validate-command").on("click", function () {
      vdatas.card = {};
      saveDatas();
    });

    //On le lance au début
    updatePanNb();
  }

  document.addEventListener("DOMContentLoaded", ll());
})(jQuery);
