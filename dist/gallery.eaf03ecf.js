var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=e.parcelRequire19b5;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequire19b5=a);var n=a("1oYLf"),o=document.getElementById("menuToggle"),s=n.gsap.timeline({paused:!0});s.to(".bar-1",.5,{attr:{d:"M8,2 L2,8"},x:1,ease:Power2.easeInOut},"start"),s.to(".bar-2",.5,{autoAlpha:0},"start"),s.to(".bar-3",.5,{attr:{d:"M8,8 L2,2"},x:1,ease:Power2.easeInOut},"start"),s.reverse();var i=n.gsap.timeline({paused:!0});i.to(".fullpage-menu",{duration:0,display:"block",ease:Expo.easeInOut},"<"),i.to(".menu-bg",{duration:1,opacity:1,ease:Expo.easeInOut},"<"),i.from([".main-menu li a",".main-menu li small"],{duration:1.5,y:"100%",rotateY:30,stagger:.2,ease:Expo.easeInOut},"-=0.5"),i.reverse(),o.addEventListener("click",(function(){s.reversed(!s.reversed()),i.reversed(!i.reversed())}));