(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* =================================\r\n------------------------------------\r\n  WebUni - Education Template\r\n  Version: 1.0\r\n ------------------------------------ \r\n ====================================*/\r\n\r\n/*----------------------------------------*/\r\n\r\n/* Template default CSS\r\n/*----------------------------------------*/\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\t-webkit-font-smoothing: antialiased;\r\n\tfont-smoothing: antialiased;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tmargin: 0;\r\n\tfont-weight: 600;\r\n\tcolor: #474747;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 70px;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 36px;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 30px;\r\n}\r\n\r\nh4 {\r\n\tfont-size: 24px;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 20px;\r\n}\r\n\r\nh6 {\r\n\tfont-size: 16px;\r\n}\r\n\r\np {\r\n\tfont-size: 14.1px;\r\n\tcolor: #878787;\r\n\tline-height: 2.2;\r\n\tfont-weight: 500;\r\n}\r\n\r\nimg {\r\n\tmax-width: 100%;\r\n}\r\n\r\ninput:focus,\r\nselect:focus,\r\nbutton:focus,\r\ntextarea:focus {\r\n\toutline: none;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n\tfont-style: italic;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n\tfont-style: italic;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n\tfont-style: italic;\r\n}\r\n\r\n::placeholder {\r\n\tfont-style: italic;\r\n}\r\n\r\na:hover {\r\n\tcolor: #d82a4e;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n\ttext-decoration: none;\r\n\toutline: none;\r\n}\r\n\r\nul,\r\nol {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n/*---------------------\r\n  Helper CSS\r\n-----------------------*/\r\n\r\n.section-title {\r\n\ttext-align: center;\r\n\tpadding: 0 110px;\r\n\tmargin-bottom: 110px;\r\n}\r\n\r\n.section-title h2 {\r\n\tfont-size: 48px;\r\n\tfont-weight: 600;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.section-title p {\r\n\tmargin-bottom: 0;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.set-bg {\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: top center;\r\n}\r\n\r\n.spad {\r\n\tpadding-top: 115px;\r\n\tpadding-bottom: 115px;\r\n}\r\n\r\n.text-white h1,\r\n.text-white h2,\r\n.text-white h3,\r\n.text-white h4,\r\n.text-white h5,\r\n.text-white h6,\r\n.text-white p,\r\n.text-white span,\r\n.text-white li,\r\n.text-white a {\r\n\tcolor: #fff;\r\n}\r\n\r\n.rating i {\r\n\tcolor: #fbb710;\r\n}\r\n\r\n.rating .is-fade {\r\n\tcolor: #e0e3e4;\r\n}\r\n\r\n/*---------------------\r\n  Commom elements\r\n-----------------------*/\r\n\r\n/* buttons */\r\n\r\n.site-btn {\r\n\tdisplay: inline-block;\r\n\tmin-width: 196px;\r\n\ttext-align: center;\r\n\tborder: none;\r\n\tpadding: 15px 10px;\r\n\tfont-weight: 600;\r\n\tfont-size: 16px;\r\n\tposition: relative;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tbackground: #d82a4e;\r\n}\r\n\r\n.site-btn:hover {\r\n\tcolor: #fff;\r\n}\r\n\r\n.site-btn.btn-dark {\r\n\tbackground: #000;\r\n}\r\n\r\n.site-btn.btn-fade {\r\n\tbackground: #e4edef;\r\n\tcolor: #1f1f1f;\r\n}\r\n\r\n/* Preloder */\r\n\r\n#preloder {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 999999;\r\n\tbackground: #fff;\r\n}\r\n\r\n.loader {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\tmargin-top: -13px;\r\n\tmargin-left: -13px;\r\n\tborder-radius: 60px;\r\n\tanimation: loader 0.8s linear infinite;\r\n\t-webkit-animation: loader 0.8s linear infinite;\r\n}\r\n\r\n@keyframes loader {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\ttransform: rotate(0deg);\r\n\t\tborder: 4px solid #f44336;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n\t50% {\r\n\t\t-webkit-transform: rotate(180deg);\r\n\t\ttransform: rotate(180deg);\r\n\t\tborder: 4px solid #673ab7;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t\ttransform: rotate(360deg);\r\n\t\tborder: 4px solid #f44336;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes loader {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\tborder: 4px solid #f44336;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n\t50% {\r\n\t\t-webkit-transform: rotate(180deg);\r\n\t\tborder: 4px solid #673ab7;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t\tborder: 4px solid #f44336;\r\n\t\tborder-left-color: transparent;\r\n\t}\r\n}\r\n\r\n/*------------------\r\n  Header section\r\n---------------------*/\r\n\r\n.header-section {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tpadding-top: 60px;\r\n}\r\n\r\n.site-logo {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.main-menu ul {\r\n\tlist-style: none;\r\n}\r\n\r\n.main-menu ul li {\r\n\tdisplay: inline;\r\n}\r\n\r\n.main-menu ul li a {\r\n\tdisplay: inline-block;\r\n\tfont-size: 16px;\r\n\tcolor:  #d82a4e;\r\n\tmargin-left: 45px;\r\n\tfont-weight: 600;\r\n\tpadding: 20px 0 5px;\r\n}\r\n\r\n.main-menu ul li a:hover {\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n.header-btn {\r\n\tfloat: right;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.nav-switch {\r\n\tdisplay: none;\r\n}\r\n\r\n/*------------------\r\n  Hero Section\r\n---------------------*/\r\n\r\n.hero-section {\r\n\theight: 948px;\r\n}\r\n\r\n.hero-text {\r\n\ttext-align: center;\r\n\tpadding-top: 340px;\r\n\tmargin-bottom: 105px;\r\n}\r\n\r\n.hero-text h2 {\r\n\tfont-size: 60px;\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.intro-newslatter input[type=text],\r\n.intro-newslatter input[type=email] {\r\n\theight: 53px;\r\n\twidth: 36.4%;\r\n\tpadding: 0 30px;\r\n\tmargin-right: 22px;\r\n\tfloat: left;\r\n\tborder: none;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.intro-newslatter .site-btn {\r\n\tmin-width: 214px;\r\n}\r\n\r\n/*------------------\r\n  Categories section\r\n---------------------*/\r\n\r\n.categories-section .container {\r\n\tmargin-bottom: -34px;\r\n  background-color: #cccccc;\r\n}\r\n\r\n.categorie-item {\r\n\tmargin-bottom: 34px;\r\n\tbackground: #edf4f6;\r\n\ttransition: all 0.4s;\r\n}\r\n\r\n.categorie-item .ci-thumb {\r\n\tbackground-size: cover;\r\n\theight: 148px;\r\n\ttransition: all 0.2s;\r\n}\r\n\r\n.categorie-item .ci-text {\r\n\tpadding: 40px 35px;\r\n}\r\n\r\n.categorie-item .ci-text h5 {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.categorie-item .ci-text span {\r\n\tfont-size: 18px;\r\n\tfont-weight: 600;\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n.categorie-item:hover {\r\n\tbackground: #d82a4e;\r\n}\r\n\r\n.categorie-item:hover .ci-text h5,\r\n.categorie-item:hover .ci-text p,\r\n.categorie-item:hover .ci-text span {\r\n\tcolor: #fff;\r\n}\r\n\r\n/*------------------\r\n  Search section\r\n---------------------*/\r\n\r\n.search-warp {\r\n\tbackground: #d82a4e;\r\n\tpadding-top: 60px;\r\n\tpadding-bottom: 50px;\r\n}\r\n\r\n.search-warp .section-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.course-search-form {\r\n\tbackground: #fff;\r\n\tpadding: 44px 38px;\r\n}\r\n\r\n.course-search-form input[type=text],\r\n.course-search-form input[type=email] {\r\n\theight: 56px;\r\n\twidth: 36.6%;\r\n\tpadding: 0 30px;\r\n\tmargin-right: 18px;\r\n\tfloat: left;\r\n\tborder: none;\r\n\tfont-size: 14px;\r\n\tbackground: #edf4f6;\r\n}\r\n\r\n.course-search-form input[type=text]:focus,\r\n.course-search-form input[type=email]:focus {\r\n\tborder-bottom: 2px solid #d82a4e;\r\n}\r\n\r\n.course-search-form .site-btn {\r\n\tmin-width: 198px;\r\n\tpadding: 16px 10px;\r\n}\r\n\r\n.search-section.ss-other-page {\r\n\tmargin-top: -85px;\r\n}\r\n\r\n.search-section.ss-other-page .search-warp {\r\n\tposition: relative;\r\n\tpadding: 60px 0;\r\n}\r\n\r\n.search-section.ss-other-page .section-title {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.search-section.ss-other-page .section-title h2 {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tleft: 0;\r\n\tbottom: 100%;\r\n\tfont-size: 24px;\r\n\tmargin-bottom: 0;\r\n\ttext-align: center;\r\n}\r\n\r\n.search-section.ss-other-page .section-title h2 span {\r\n\tdisplay: inline-block;\r\n\tbackground: #d82a4e;\r\n\tpadding: 20px 60px 10px;\r\n}\r\n\r\n.search-section.ss-other-page .course-search-form {\r\n\tbackground-color: transparent;\r\n\tpadding: 0;\r\n}\r\n\r\n.search-section.ss-other-page .course-search-form input[type=text]:focus,\r\n.search-section.ss-other-page .course-search-form input[type=email]:focus {\r\n\tborder-bottom: none;\r\n}\r\n\r\n/*------------------\r\n  Course section\r\n---------------------*/\r\n\r\n.course-warp {\r\n\tmax-width: 1559px;\r\n\tpadding: 0 15px;\r\n\tmargin: 0 auto -30px;\r\n}\r\n\r\n.course-item {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.course-item .course-thumb {\r\n\theight: 270px;\r\n}\r\n\r\n.course-item .course-thumb .price {\r\n\tfont-size: 14px;\r\n\tcolor: #fff;\r\n\tfont-weight: 600;\r\n\tbackground: #d82a4e;\r\n\tdisplay: inline-block;\r\n\tpadding: 13px 19px;\r\n\tmargin: 14px;\r\n}\r\n\r\n.course-item .course-info {\r\n\tbackground: #edf4f6;\r\n}\r\n\r\n.course-item .course-info .course-text {\r\n\tpadding: 45px 33px 25px;\r\n}\r\n\r\n.course-item .course-info .course-text h5 {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.course-item .course-info .course-text .students {\r\n\tfont-size: 18px;\r\n\tfont-weight: 600;\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n.course-item .course-info .course-author {\r\n\tborder-top: 1px solid #d4dee1;\r\n\tpadding: 14px 33px;\r\n\toverflow: hidden;\r\n}\r\n\r\n.course-item .course-info .course-author .ca-pic {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\tborder-radius: 50%;\r\n\tfloat: left;\r\n}\r\n\r\n.course-item .course-info .course-author p {\r\n\tpadding-left: 60px;\r\n\tmargin-bottom: 0;\r\n\tpadding-top: 7px;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.course-item .course-info .course-author p span {\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n.course-item.featured-course {\r\n\tposition: relative;\r\n\tmargin-bottom: 97px;\r\n}\r\n\r\n.course-item.featured-course:last-child {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.course-item.featured-course:nth-child(2n) .course-thumb {\r\n\tleft: auto;\r\n\tright: 0;\r\n}\r\n\r\n.course-item.featured-course .course-thumb {\r\n\tposition: absolute;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.course-item.featured-course .fet-note {\r\n\tdisplay: inline-block;\r\n\tbackground: #d82a4e;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tpadding: 4px 15px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.course-item.featured-course .course-info .course-text {\r\n\tpadding: 70px 33px 25px;\r\n}\r\n\r\n.course-item.featured-course .course-info .course-text h5 {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.course-item.featured-course .course-info .course-author {\r\n\tborder-top: none;\r\n\tpadding: 14px 33px 60px;\r\n}\r\n\r\n.course-filter {\r\n\tlist-style: none;\r\n\ttext-align: center;\r\n\tpadding-top: 50px;\r\n\tmargin-bottom: 60px;\r\n}\r\n\r\n.course-filter li {\r\n\tdisplay: inline-block;\r\n\tfont-size: 18px;\r\n\tfont-weight: 600;\r\n\tcolor: #474747;\r\n\tpadding: 12px 10px 5px;\r\n\tmargin: 0 10px;\r\n\tborder-bottom: 4px solid transparent;\r\n\tcursor: pointer;\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n.course-filter li.mixitup-control-active {\r\n\tcolor: #d82a4e;\r\n\tborder-bottom: 4px solid #d82a4e;\r\n}\r\n\r\n/*------------------\r\n  Signup section\r\n---------------------*/\r\n\r\n.signup-section {\r\n\tbackground: #d82a4e;\r\n\tposition: relative;\r\n}\r\n\r\n.signup-section .section-title {\r\n\tpadding: 0;\r\n\tmargin-bottom: 55px;\r\n}\r\n\r\n.signup-section .signup-bg {\r\n\tposition: absolute;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tz-index: 1;\r\n}\r\n\r\n.signup-warp {\r\n\tpadding: 0 100px;\r\n}\r\n\r\n.signup-form,\r\n.contact-form {\r\n\tbackground: #fff;\r\n\tpadding: 60px;\r\n}\r\n\r\n.signup-form input[type=text],\r\n.signup-form input[type=email],\r\n.signup-form textarea,\r\n.contact-form input[type=text],\r\n.contact-form input[type=email],\r\n.contact-form textarea {\r\n\theight: 57px;\r\n\twidth: 100%;\r\n\tpadding: 0 30px;\r\n\tmargin-bottom: 27px;\r\n\tfloat: left;\r\n\tborder: none;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tbackground: #edf4f6;\r\n}\r\n\r\n.signup-form input[type=text]:focus,\r\n.signup-form input[type=email]:focus,\r\n.signup-form textarea:focus,\r\n.contact-form input[type=text]:focus,\r\n.contact-form input[type=email]:focus,\r\n.contact-form textarea:focus {\r\n\tborder-bottom: 2px solid #d82a4e;\r\n}\r\n\r\n.signup-form input[type=file],\r\n.contact-form input[type=file] {\r\n\tdisplay: none;\r\n}\r\n\r\n.signup-form textarea,\r\n.contact-form textarea {\r\n\tpadding-top: 23px;\r\n\tpadding-bottom: 15px;\r\n\theight: 225px;\r\n}\r\n\r\n.signup-form .file-up-btn,\r\n.contact-form .file-up-btn {\r\n\tdisplay: block;\r\n\tbackground: #3e3e3e;\r\n\tcolor: #fff;\r\n\tmax-width: 175px;\r\n\tpadding: 13px 5px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 600;\r\n\tmargin-bottom: 23px;\r\n\tclear: both;\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n}\r\n\r\n.signup-form .site-btn,\r\n.contact-form .site-btn {\r\n\tpadding: 17px 10px;\r\n}\r\n\r\n.featured-courses {\r\n\tpadding-top: 67px;\r\n}\r\n\r\n/*------------------\r\n  Footer section\r\n---------------------*/\r\n\r\n.footer-section {\r\n\t\r\n  /* background-image: url(\"img_tree.gif\"), url(\"paper.gif\"); */\r\n  background-color: #cccccc;\r\n\r\n}\r\n\r\n.footer-warp {\r\n\tmax-width: 1559px;\r\n\tpadding: 0 15px;\r\n\tmargin: 0 auto;\r\n\tbackground-color: #cccccc;\r\n}\r\n\r\n.widget-item {\r\n\twidth: 20%;\r\n\tpadding: 0 15px;\r\n}\r\n\r\n.widget-item h4 {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.widget-item ul {\r\n\tlist-style: none;\r\n\tpadding-top: 30px;\r\n}\r\n\r\n.widget-item ul li {\r\n\tmargin-bottom: 10px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: #878787;\r\n}\r\n\r\n.widget-item ul li:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.widget-item ul a {\r\n\tcolor: #878787;\r\n}\r\n\r\n.widget-item ul.contact-list li {\r\n\tmargin-bottom: 27px;\r\n\tposition: relative;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.widget-item ul.contact-list li:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.widget-item ul.contact-list li:after {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tleft: -5px;\r\n\ttop: 6px;\r\n\tborder-radius: 50%;\r\n\tbackground: #d82a4e;\r\n}\r\n\r\n.footer-newslatter {\r\n\tpadding-right: 38px;\r\n}\r\n\r\n.footer-newslatter input[type=email] {\r\n\theight: 57px;\r\n\twidth: 100%;\r\n\tpadding: 0 30px;\r\n\tmargin-bottom: 27px;\r\n\tfloat: left;\r\n\tborder: none;\r\n\tfont-size: 14px;\r\n\tbackground: #edf4f6;\r\n}\r\n\r\n.footer-newslatter .site-btn {\r\n\tmin-width: 143px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.footer-newslatter p {\r\n\tmargin-bottom: 0;\r\n\tfont-weight: 500;\r\n\tfont-style: italic;\r\n}\r\n\r\n.footer-bottom {\r\n\toverflow: hidden;\r\n\tbackground: #edf4f6;\r\n\tpadding: 20px 0;\r\n\tmargin-top: 50px;\r\n}\r\n\r\n.footer-menu {\r\n\tlist-style: none;\r\n\tfloat: right;\r\n}\r\n\r\n.footer-menu li {\r\n\tdisplay: inline;\r\n}\r\n\r\n.footer-menu li:last-child a {\r\n\tpadding-right: 0;\r\n\tmargin-right: 0;\r\n}\r\n\r\n.footer-menu li:last-child a:after {\r\n\tdisplay: none;\r\n}\r\n\r\n.footer-menu li a {\r\n\tdisplay: inline-block;\r\n\tfont-size: 14px;\r\n\tfont-weight: 600;\r\n\tcolor: #474747;\r\n\tpadding-right: 10px;\r\n\tmargin-right: 10px;\r\n\tposition: relative;\r\n}\r\n\r\n.footer-menu li a:after {\r\n\tposition: absolute;\r\n\tcontent: \"|\";\r\n\tright: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.copyright {\r\n\tpadding-top: 3px;\r\n\tfloat: left;\r\n\tfont-size: 14px;\r\n\tfont-weight: 600;\r\n\tcolor: #474747;\r\n}\r\n\r\n/*------------------\r\n    Other Pages\r\n---------------------\r\n=======================*/\r\n\r\n.page-info-section {\r\n\theight: 443px;\r\n}\r\n\r\n.site-breadcrumb {\r\n\tpadding-top: 215px;\r\n}\r\n\r\n.site-breadcrumb a,\r\n.site-breadcrumb span {\r\n\tdisplay: inline-block;\r\n\tmargin-right: 10px;\r\n\tpadding-right: 10px;\r\n\tfont-weight: 600;\r\n\tfont-size: 18px;\r\n}\r\n\r\n.site-breadcrumb a {\r\n\tcolor: #fff;\r\n\tposition: relative;\r\n}\r\n\r\n.site-breadcrumb a:after {\r\n\tposition: absolute;\r\n\tcontent: \"/\";\r\n\tright: -6px;\r\n\ttop: 0;\r\n\tcolor: #fff;\r\n}\r\n\r\n.site-breadcrumb span {\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n/*------------------\r\n  Single course\r\n---------------------*/\r\n\r\n.course-meta-area {\r\n\tbackground: #edf4f6;\r\n\tpadding: 35px 0;\r\n}\r\n\r\n.course-meta-area .course-note {\r\n\tdisplay: inline-block;\r\n\tbackground: #d82a4e;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tpadding: 4px 15px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.course-metas {\r\n\tpadding-top: 50px;\r\n\tmargin-bottom: 45px;\r\n\tdisplay: table;\r\n}\r\n\r\n.course-meta {\r\n\tdisplay: table-cell;\r\n\theight: 100%;\r\n\tborder-right: 2px solid #c5ced0;\r\n\tpadding: 5px 50px;\r\n}\r\n\r\n.course-meta:nth-child(1) {\r\n\tpadding-left: 0;\r\n}\r\n\r\n.course-meta:nth-child(4) {\r\n\tpadding-right: 0;\r\n\tborder-right: none;\r\n}\r\n\r\n.course-meta p {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.course-meta .course-author .ca-pic {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\tborder-radius: 50%;\r\n\tfloat: left;\r\n}\r\n\r\n.course-meta .course-author h6 {\r\n\tpadding-left: 60px;\r\n}\r\n\r\n.course-meta .course-author p {\r\n\tpadding-left: 60px;\r\n\tmargin-bottom: 0;\r\n\tpadding-top: 4px;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.course-meta .course-author p span {\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n.course-meta .cm-info h6 {\r\n\tmargin-bottom: 3px;\r\n}\r\n\r\n.course-meta .cm-info p {\r\n\tfont-weight: 600;\r\n}\r\n\r\n.course-meta .rating {\r\n\tpadding-left: 15px;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.course-meta-area .site-btn {\r\n\tmin-width: auto;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.course-meta-area .price-btn {\r\n\tpadding: 20px 30px;\r\n\tbackground: #474747;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.course-meta-area .buy-btn {\r\n\tpadding: 20px 40px;\r\n}\r\n\r\n.course-preview {\r\n\tpadding-top: 37px;\r\n\tmargin-bottom: 55px;\r\n}\r\n\r\n.course-list .cl-item {\r\n\tmargin-bottom: 55px;\r\n}\r\n\r\n.course-list .cl-item h4 {\r\n\tmargin-bottom: 46px;\r\n}\r\n\r\n.course-list .cl-item p {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.realated-courses {\r\n\tbackground: #edf4f6;\r\n}\r\n\r\n.realated-courses .rc-title {\r\n\tfont-size: 34px;\r\n\tmargin-bottom: 85px;\r\n}\r\n\r\n.realated-courses .course-item .course-info {\r\n\tbackground: #fff;\r\n}\r\n\r\n.realated-courses .owl-next {\r\n\tposition: absolute;\r\n\tright: -80px;\r\n\ttop: 50%;\r\n\tmargin-top: -27px;\r\n\twidth: 54px;\r\n\theight: 54px;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tcolor: #fff;\r\n\tfont-size: 22px;\r\n\tpadding-top: 10px;\r\n\tbackground: #d82a4e;\r\n}\r\n\r\n/*------------------\r\n  Blog Page\r\n---------------------*/\r\n\r\n.blog-page {\r\n\tborder-bottom: 2px solid #c5ced0;\r\n}\r\n\r\n.blog-post {\r\n\tmargin-bottom: 70px;\r\n}\r\n\r\n.blog-post h3 {\r\n\tpadding-top: 58px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.blog-post p {\r\n\tfont-weight: 500;\r\n\tfont-size: 14px;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.blog-post .blog-metas {\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.blog-post .blog-metas .blog-meta {\r\n\tdisplay: inline-block;\r\n\tpadding: 9px 15px;\r\n\tposition: relative;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.blog-post .blog-metas .blog-meta:last-child:after {\r\n\tdisplay: none;\r\n}\r\n\r\n.blog-post .blog-metas .blog-meta:after {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\twidth: 2px;\r\n\theight: 30px;\r\n\tright: 0;\r\n\ttop: calc(50% - 15px);\r\n\tbackground: #c5ced0;\r\n}\r\n\r\n.blog-post .blog-metas .blog-meta.author {\r\n\tposition: relative;\r\n\tpadding-left: 50px;\r\n}\r\n\r\n.blog-post .blog-metas .blog-meta.author .post-author {\r\n\tposition: absolute;\r\n\twidth: 34px;\r\n\theight: 34px;\r\n\tleft: 0;\r\n\ttop: calc(50% - 17px);\r\n\tborder-radius: 50%;\r\n\tfloat: left;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.blog-post .blog-metas .blog-meta a {\r\n\tfont-size: 14px;\r\n\tfont-weight: 600;\r\n\tcolor: #878787;\r\n}\r\n\r\n.blog-post .site-btn.readmore {\r\n\tmin-width: 172px;\r\n}\r\n\r\n.sb-widget-item {\r\n\tmargin-bottom: 75px;\r\n}\r\n\r\n.sb-widget-item .sb-w-title {\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.sb-widget-item .search-widget {\r\n\tposition: relative;\r\n}\r\n\r\n.sb-widget-item .search-widget input {\r\n\twidth: 100%;\r\n\theight: 57px;\r\n\tbackground: #edf4f6;\r\n\tfont-size: 12px;\r\n\tpadding: 5px 24px;\r\n\tpadding-right: 55px;\r\n\tborder: none;\r\n}\r\n\r\n.sb-widget-item .search-widget button {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tcolor: #c5ced0;\r\n\theight: 100%;\r\n\twidth: 50px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.sb-widget-item ul {\r\n\tlist-style: none;\r\n\tpadding-left: 33px;\r\n}\r\n\r\n.sb-widget-item ul li {\r\n\tdisplay: block;\r\n\tmargin-bottom: 12px;\r\n}\r\n\r\n.sb-widget-item ul li:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.sb-widget-item ul li a {\r\n\tcolor: #9e9e9e;\r\n\tdisplay: inline-block;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.sb-widget-item ul li a:hover {\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n.sb-widget-item .tags a {\r\n\tfont-size: 16px;\r\n\tdisplay: inline-block;\r\n\tpadding: 9px 24px;\r\n\tcolor: #fff;\r\n\tbackground: #d82a4e;\r\n\tmargin-bottom: 10px;\r\n\tmargin-right: 6px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.site-pagination {\r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 30px;\r\n}\r\n\r\n.site-pagination a,\r\n.site-pagination span {\r\n\tfont-size: 16px;\r\n\tcolor: #474747;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.site-pagination span.active {\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n/*------------------\r\n  Contact Page\r\n---------------------*/\r\n\r\n.contact-form-warp {\r\n\tbackground: #d82a4e;\r\n\tpadding: 45px 47px;\r\n}\r\n\r\n.contact-form-warp .section-title {\r\n\tpadding: 0 15px;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.contact-form-warp .contact-form {\r\n\tpadding: 69px 40px 47px;\r\n}\r\n\r\n.contact-info-area {\r\n\tpadding-top: 60px;\r\n}\r\n\r\n.contact-info-area .section-title {\r\n\tmargin-bottom: 80px;\r\n}\r\n\r\n.contact-info-area .phone-number {\r\n\tmargin-bottom: 100px;\r\n}\r\n\r\n.contact-info-area .phone-number span {\r\n\tfont-size: 18px;\r\n\tfont-weight: 700;\r\n\tcolor: #d82a4e;\r\n\tdisplay: block;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.contact-info-area .phone-number h2 {\r\n\tcolor: #646464;\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tpadding: 0 0 10px;\r\n\tpadding-right: 12px;\r\n}\r\n\r\n.contact-info-area .phone-number h2:after {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 3px;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tbackground: #d82a4e;\r\n}\r\n\r\n.contact-info-area .contact-list {\r\n\tlist-style: none;\r\n\tpadding-left: 50px;\r\n}\r\n\r\n.contact-info-area .contact-list li {\r\n\tmargin-bottom: 27px;\r\n\tposition: relative;\r\n\tpadding-left: 10px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: #878787;\r\n}\r\n\r\n.contact-info-area .contact-list li:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.contact-info-area .contact-list li:after {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\twidth: 8px;\r\n\theight: 8px;\r\n\tleft: -5px;\r\n\ttop: 6px;\r\n\tborder-radius: 50%;\r\n\tbackground: #d82a4e;\r\n}\r\n\r\n.contact-info-area .social-links {\r\n\tpadding-top: 60px;\r\n\tpadding-left: 50px;\r\n}\r\n\r\n.contact-info-area .social-links a {\r\n\tfont-size: 14px;\r\n\tcolor: #707070;\r\n\tmargin-right: 30px;\r\n}\r\n\r\n.contact-info-area .social-links a:last-child {\r\n\tmargin-right: 0;\r\n}\r\n\r\n#map-canvas {\r\n\theight: 484px;\r\n\tmargin-top: 58px;\r\n\tbackground: #ddd;\r\n}\r\n\r\n/*------------------\r\n  Elements Page\r\n---------------------*/\r\n\r\n.element {\r\n\tmargin-bottom: 110px;\r\n}\r\n\r\n.element .e-title {\r\n\tfont-size: 48px;\r\n\tcolor: #474747;\r\n\tmargin-bottom: 110px;\r\n}\r\n\r\n/* Accordion */\r\n\r\n.accordion-area .panel {\r\n\tmargin-bottom: 18px;\r\n}\r\n\r\n.accordion-area .panel-link:after {\r\n\tcontent: \"+\";\r\n\tposition: absolute;\r\n\tfont-size: 18px;\r\n\tfont-weight: 700;\r\n\tright: 25px;\r\n\ttop: 50%;\r\n\tcolor: #000;\r\n\tline-height: 16px;\r\n\tmargin-top: -8px;\r\n\tmargin-left: -4px;\r\n}\r\n\r\n.accordion-area .panel-header .panel-link.active {\r\n\tbackground: #d82a4e;\r\n\tcolor: #fff;\r\n}\r\n\r\n.accordion-area .panel-header .panel-link.collapsed {\r\n\tbackground: #f8fafc;\r\n\tcolor: #1d1d1d;\r\n}\r\n\r\n.accordion-area .panel-header .panel-link.collapsed:after {\r\n\tcontent: \"+\";\r\n\tcolor: #1d1d1d;\r\n}\r\n\r\n.accordion-area .panel-link.active:after {\r\n\tcontent: \"-\";\r\n\tmargin-top: -10px;\r\n\tcolor: #fff;\r\n}\r\n\r\n.accordion-area .panel-link {\r\n\ttext-align: left;\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tpadding: 15px 40px;\r\n\tpadding-left: 30px;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\tbackground: #e4edef;\r\n\tcolor: #1f1f1f;\r\n}\r\n\r\n.accordion-area .panel-body p {\r\n\tmargin-bottom: 0;\r\n\tpadding-top: 35px;\r\n}\r\n\r\n.accordion-area .panel-body {\r\n\tpadding: 0 5px;\r\n}\r\n\r\n/* tab */\r\n\r\n.tab-element .nav-tabs {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.tab-element .nav-tabs .nav-link {\r\n\tborder-radius: 0;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n\tcolor: #1f1f1f;\r\n\tborder: none;\r\n\tpadding: 17px 23px;\r\n\tmargin-right: 8px;\r\n\tbackground: #e4edef;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.tab-element .nav-tabs .nav-item:last-child .nav-link {\r\n\tmargin-right: 0;\r\n}\r\n\r\n.tab-element .nav-tabs .nav-link.active {\r\n\tbackground: #d82a4e;\r\n\tcolor: #fff;\r\n}\r\n\r\n.tab-element .nav-tabs .nav-link:focus,\r\n.tab-element .nav-tabs .nav-link:hover {\r\n\tborder: none;\r\n}\r\n\r\n.tab-element .tab-pane p {\r\n\tpadding-top: 35px;\r\n}\r\n\r\n/* Circle progress */\r\n\r\n.circle-progress {\r\n\ttext-align: center;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.circle-progress canvas {\r\n\t-webkit-transform: rotate(90deg);\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.circle-progress .progress-info {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\ttop: 50%;\r\n\tmargin-top: -45px;\r\n}\r\n\r\n.circle-progress .progress-info h2 {\r\n\tfont-weight: 700;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.circle-progress .progress-info p {\r\n\tfont-size: 14px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.fact-item h2 {\r\n\tfont-size: 60px;\r\n\tcolor: #d82a4e;\r\n}\r\n\r\n.icon-box h5 {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.icon-box h5 span {\r\n\tfont-size: 60px;\r\n\tcolor: #d82a4e;\r\n\tmargin-right: 15px;\r\n}\r\n\r\n/*------------------\r\n  Responsive\r\n---------------------*/\r\n\r\n@media (min-width: 1200px) {\r\n\t.container {\r\n\t\tmax-width: 1180px;\r\n\t}\r\n}\r\n\r\n@media (max-width: 1705px) {\r\n\t.realated-courses .owl-next {\r\n\t\tposition: relative;\r\n\t\tmargin: 0 auto;\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n\r\n/* Medium screen : 992px. */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n\t.main-menu ul li a {\r\n\t\tmargin-left: 38px;\r\n\t}\r\n\t.header-btn {\r\n\t\tmin-width: 160px;\r\n\t}\r\n\t.hero-text h2 {\r\n\t\tfont-size: 55px;\r\n\t}\r\n\t.intro-newslatter .site-btn {\r\n\t\tmin-width: 160px;\r\n\t}\r\n\t.course-search-form input[type=text],\r\n\t.course-search-form input[type=email] {\r\n\t\twidth: 34.6%;\r\n\t}\r\n\t.course-search-form .site-btn {\r\n\t\tmin-width: 173px;\r\n\t}\r\n\t.course-item .course-thumb {\r\n\t\theight: 220px;\r\n\t}\r\n\t.course-item .course-info .course-text {\r\n\t\tpadding: 45px 15px 25px;\r\n\t}\r\n\t.course-item .course-info .course-author {\r\n\t\tpadding: 14px 15px;\r\n\t}\r\n\t.signup-warp {\r\n\t\tpadding: 0 35px;\r\n\t}\r\n\t.course-meta {\r\n\t\tpadding: 5px 20px;\r\n\t}\r\n}\r\n\r\n/* Tablet :768px. */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n\t.section-title {\r\n\t\tpadding: 0;\r\n\t}\r\n\t.main-menu ul li a {\r\n\t\tmargin-left: 20px;\r\n\t}\r\n\t.header-btn {\r\n\t\tmin-width: 90px;\r\n\t}\r\n\t.hero-text h2 {\r\n\t\tfont-size: 43px;\r\n\t}\r\n\t.intro-newslatter input[type=text],\r\n\t.intro-newslatter input[type=email] {\r\n\t\twidth: 33%;\r\n\t}\r\n\t.intro-newslatter .site-btn {\r\n\t\tmin-width: 190px;\r\n\t}\r\n\t.signup-section .signup-bg {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.course-search-form {\r\n\t\ttext-align: center;\r\n\t}\r\n\t.course-search-form input[type=text],\r\n\t.course-search-form input[type=email] {\r\n\t\twidth: 48.1%;\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n\t.course-search-form input[type=text].last-m,\r\n\t.course-search-form input[type=email].last-m {\r\n\t\tmargin-right: 0;\r\n\t}\r\n\t.search-section.ss-other-page .search-warp {\r\n\t\tpadding: 60px 30px 30px;\r\n\t}\r\n\t.search-section.ss-other-page .course-search-form input[type=text],\r\n\t.search-section.ss-other-page .course-search-form input[type=email] {\r\n\t\twidth: 48.5%;\r\n\t}\r\n\t.course-item .course-thumb {\r\n\t\theight: 215px;\r\n\t}\r\n\t.widget-item {\r\n\t\twidth: 33.3333%;\r\n\t\tmargin-bottom: 50px;\r\n\t}\r\n\t.course-item.featured-course .course-thumb {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 350px;\r\n\t}\r\n\t.course-meta-area {\r\n\t\tpadding: 35px 20px;\r\n\t}\r\n\t.course-meta {\r\n\t\tdisplay: inline-block;\r\n\t\tpadding: 5px 30px;\r\n\t\twidth: calc(50% - 3px);\r\n\t\tmargin-bottom: 15px;\r\n\t}\r\n\t.course-meta:nth-child(2) {\r\n\t\tborder-right: none;\r\n\t}\r\n}\r\n\r\n/* Large Mobile :480px. */\r\n\r\n@media only screen and (max-width: 767px) {\r\n\t.section-title {\r\n\t\tpadding: 0;\r\n\t}\r\n\t.section-title h2 {\r\n\t\tfont-size: 40px;\r\n\t}\r\n\t.header-btn {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.nav-switch {\r\n\t\tdisplay: block;\r\n\t\tfloat: right;\r\n\t\tcolor: #333;\r\n\t\tfont-size: 25px;\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t\tbackground: #fff;\r\n\t\ttext-align: center;\r\n\t\tpadding-top: 2px;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, 0.25);\r\n\t}\r\n\t.main-menu {\r\n\t\tbackground: #fff;\r\n\t\tmargin-top: 22px;\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\tleft: 0;\r\n\t\ttop: 100%;\r\n\t\tdisplay: none;\r\n\t\tz-index: 999;\r\n\t}\r\n\t.main-menu ul li {\r\n\t\tdisplay: block;\r\n\t}\r\n\t.main-menu ul li a {\r\n\t\tmargin-left: 0;\r\n\t\tpadding: 17px 25px;\r\n\t\tborder-bottom: 1px solid #e8e8e8;\r\n\t\tdisplay: block;\r\n\t\tcolor: #474747;\r\n\t}\r\n\t.hero-text {\r\n\t\tmargin-bottom: 50px;\r\n\t}\r\n\t.hero-text h2 {\r\n\t\tfont-size: 40px;\r\n\t}\r\n\t.intro-newslatter {\r\n\t\ttext-align: center;\r\n\t}\r\n\t.intro-newslatter input[type=text],\r\n\t.intro-newslatter input[type=email] {\r\n\t\tmargin-bottom: 20px;\r\n\t\twidth: 47.6%;\r\n\t}\r\n\t.intro-newslatter input[type=text].last-s,\r\n\t.intro-newslatter input[type=email].last-s {\r\n\t\tmargin-right: 0;\r\n\t}\r\n\t.search-warp {\r\n\t\tpadding: 40px 30px 30px;\r\n\t}\r\n\t.course-search-form input[type=text],\r\n\t.course-search-form input[type=email] {\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 20px;\r\n\t\tmargin-right: 0;\r\n\t}\r\n\t.signup-warp {\r\n\t\tpadding: 0 60px;\r\n\t}\r\n\t.signup-section .signup-bg {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.widget-item {\r\n\t\twidth: 50%;\r\n\t\tmargin-bottom: 50px;\r\n\t}\r\n\t.search-section.ss-other-page .search-warp {\r\n\t\tpadding: 30px;\r\n\t}\r\n\t.search-section.ss-other-page .section-title h2 {\r\n\t\tbackground: #d82a4e;\r\n\t}\r\n\t.course-item.featured-course .course-thumb {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 350px;\r\n\t}\r\n\t.course-meta-area {\r\n\t\tpadding: 35px 20px;\r\n\t}\r\n\t.course-meta {\r\n\t\tdisplay: inline-block;\r\n\t\tpadding: 5px 0;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 15px;\r\n\t\tborder-right: none;\r\n\t}\r\n}\r\n\r\n/* Medium Mobile :480px. */\r\n\r\n@media only screen and (max-width: 576px) {\r\n\t.hero-section {\r\n\t\theight: auto;\r\n\t}\r\n\t.intro-newslatter {\r\n\t\tpadding-bottom: 100px;\r\n\t}\r\n\t.intro-newslatter input[type=text],\r\n\t.intro-newslatter input[type=email] {\r\n\t\tmargin-bottom: 20px;\r\n\t\twidth: 100%;\r\n\t\tmargin-right: 0;\r\n\t}\r\n\t.course-search-form .site-btn {\r\n\t\tmin-width: auto;\r\n\t\tpadding: 16px 20px;\r\n\t}\r\n\t.signup-warp {\r\n\t\tpadding: 0;\r\n\t}\r\n\t.signup-form,\r\n\t.contact-form {\r\n\t\tpadding: 30px;\r\n\t}\r\n\t.course-filter li {\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t.widget-item {\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 50px;\r\n\t}\r\n\t.course-meta-area .price-btn {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n}\r\n\r\n/* Small Mobile :320px. */\r\n\r\n@media only screen and (max-width: 479px) {\r\n\t.section-title h2 {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.signup-form,\r\n\t.contact-form {\r\n\t\tpadding: 20px;\r\n\t}\r\n\t.search-warp {\r\n\t\tpadding: 40px 20px 30px;\r\n\t}\r\n\t.course-search-form {\r\n\t\tpadding: 44px 20px;\r\n\t}\r\n\t.contact-form-warp {\r\n\t\tpadding: 40px 15px;\r\n\t}\r\n\t.contact-form-warp .contact-form {\r\n\t\tpadding: 50px 15px 40px;\r\n\t}\r\n\t.signup-form .site-btn,\r\n\t.contact-form .site-btn {\r\n\t\tmin-width: auto;\r\n\t\tpadding: 17px 20px;\r\n\t}\r\n\t.contact-info-area .phone-number {\r\n\t\tmargin-bottom: 50px;\r\n\t}\r\n\t.contact-info-area .phone-number h2 {\r\n\t\tfont-size: 24px;\r\n\t}\r\n\t.contact-info-area .contact-list {\r\n\t\tpadding-left: 8px;\r\n\t}\r\n\t.contact-info-area .social-links {\r\n\t\tpadding-left: 0;\r\n\t}\r\n\t.contact-info-area .social-links a {\r\n\t\tmargin-right: 10px;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Tutorials\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map