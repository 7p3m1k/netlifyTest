(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // ../../../../지울꺼/allius-routify/dist/build/_fallback-8fd1c56e.js
  var require_fallback_8fd1c56e = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_8fd1c56e_default
    });
    const main6 = __toModule(require_main());
    function u5(s7) {
      let a7, e8, u6, h6, j5, v6;
      return a7 = new g({}), j5 = new f({}), {c() {
        main6.c(a7.$$.fragment), e8 = main6.a(), u6 = main6.e("div"), u6.innerHTML = '<h1 class="svelte-mfeoh5">Page Not Found.</h1>', h6 = main6.a(), main6.c(j5.$$.fragment), main6.b(u6, "class", "wrapper svelte-mfeoh5");
      }, m(s8, r7) {
        main6.m(a7, s8, r7), main6.d(s8, e8, r7), main6.d(s8, u6, r7), main6.d(s8, h6, r7), main6.m(j5, s8, r7), v6 = true;
      }, p: main6.n, i(s8) {
        v6 || (main6.t(a7.$$.fragment, s8), main6.t(j5.$$.fragment, s8), v6 = true);
      }, o(s8) {
        main6.f(a7.$$.fragment, s8), main6.f(j5.$$.fragment, s8), v6 = false;
      }, d(s8) {
        main6.g(a7, s8), s8 && main6.h(e8), s8 && main6.h(u6), s8 && main6.h(h6), main6.g(j5, s8);
      }};
    }
    class fallback_8fd1c56e_default extends main6.S {
      constructor(s7) {
        super(), main6.i(this, s7, null, u5, main6.s, {});
      }
    }
  });

  // ../../../../지울꺼/allius-routify/dist/build/[brandId]-56abeeb7.js
  var require_brandId_56abeeb7 = __commonJS((exports) => {
    __export(exports, {
      default: () => brandId_56abeeb7_default
    });
    const main6 = __toModule(require_main());
    function A4(t7) {
      let e8, n7;
      return e8 = new W2({}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, s7) {
        main6.m(e8, t8, s7), n7 = true;
      }, p: main6.n, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function U3(t7) {
      let e8, n7, s7, r7, a7, o7, c7;
      return {c() {
        e8 = main6.e("div"), n7 = main6.e("a"), s7 = main6.e("h3"), r7 = main6.j(t7[0]), a7 = main6.a(), o7 = main6.e("p"), c7 = main6.j(t7[1]), main6.b(s7, "class", "project-title svelte-1skdn08"), main6.b(o7, "class", "project-summary svelte-1skdn08"), main6.b(n7, "class", "summary-wrapper svelte-1skdn08"), main6.b(n7, "target", "_blank"), main6.b(n7, "href", t7[2]), main6.b(e8, "class", "project-wrapper svelte-1skdn08");
      }, m(t8, i7) {
        main6.d(t8, e8, i7), main6.k(e8, n7), main6.k(n7, s7), main6.k(s7, r7), main6.k(n7, a7), main6.k(n7, o7), main6.k(o7, c7);
      }, p(t8, e9) {
        1 & e9 && main6.v(r7, t8[0]), 2 & e9 && main6.v(c7, t8[1]), 4 & e9 && main6.b(n7, "href", t8[2]);
      }, i: main6.n, o: main6.n, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function W3(t7) {
      let e8, n7, p6, u6;
      const m7 = [U3, A4], d6 = [];
      function f7(t8, e9) {
        return t8[0] && t8[1] && t8[2] ? 0 : 1;
      }
      return e8 = f7(t7), n7 = d6[e8] = m7[e8](t7), {c() {
        n7.c(), p6 = main6.p();
      }, m(t8, n8) {
        d6[e8].m(t8, n8), main6.d(t8, p6, n8), u6 = true;
      }, p(t8, [s7]) {
        let l7 = e8;
        e8 = f7(t8), e8 === l7 ? d6[e8].p(t8, s7) : (main6.q(), main6.f(d6[l7], 1, 1, () => {
          d6[l7] = null;
        }), main6.r(), n7 = d6[e8], n7 ? n7.p(t8, s7) : (n7 = d6[e8] = m7[e8](t8), n7.c()), main6.t(n7, 1), n7.m(p6.parentNode, p6));
      }, i(t8) {
        u6 || (main6.t(n7), u6 = true);
      }, o(t8) {
        main6.f(n7), u6 = false;
      }, d(t8) {
        d6[e8].d(t8), t8 && main6.h(p6);
      }};
    }
    function D4(t7, e8, n7) {
      let {contentTitle: s7} = e8, {contentSummary: l7} = e8, {contentLink: r7} = e8;
      return t7.$$set = (t8) => {
        "contentTitle" in t8 && n7(0, s7 = t8.contentTitle), "contentSummary" in t8 && n7(1, l7 = t8.contentSummary), "contentLink" in t8 && n7(2, r7 = t8.contentLink);
      }, [s7, l7, r7];
    }
    class P3 extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, D4, W3, main6.s, {contentTitle: 0, contentSummary: 1, contentLink: 2});
      }
    }
    function q4(t7, e8, n7) {
      const s7 = t7.slice();
      return s7[16] = e8[n7], s7;
    }
    function z4(t7, e8, n7) {
      const s7 = t7.slice();
      return s7[16] = e8[n7], s7;
    }
    function Y3(t7, e8, n7) {
      const s7 = t7.slice();
      return s7[16] = e8[n7], s7;
    }
    function G3(t7, e8, n7) {
      const s7 = t7.slice();
      return s7[16] = e8[n7], s7;
    }
    function J3(t7) {
      let e8, n7;
      return e8 = new oe({}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, s7) {
        main6.m(e8, t8, s7), n7 = true;
      }, p: main6.n, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function K3(t7) {
      let e8, n7, s7, r7, o7, m7, g6, v7;
      return e8 = new ee({props: {className: "section-top", $$slots: {default: [O3]}, $$scope: {ctx: t7}}}), s7 = new ee({props: {$$slots: {default: [ct]}, $$scope: {ctx: t7}}}), g6 = new ee({props: {$$slots: {default: [it]}, $$scope: {ctx: t7}}}), {c() {
        main6.c(e8.$$.fragment), n7 = main6.a(), main6.c(s7.$$.fragment), r7 = main6.a(), o7 = main6.e("div"), o7.innerHTML = '<div class="left svelte-191prxn"></div> \n        <div class="right svelte-191prxn"></div>', m7 = main6.a(), main6.c(g6.$$.fragment), main6.b(o7, "class", "line-seperator svelte-191prxn");
      }, m(t8, a7) {
        main6.m(e8, t8, a7), main6.d(t8, n7, a7), main6.m(s7, t8, a7), main6.d(t8, r7, a7), main6.d(t8, o7, a7), main6.d(t8, m7, a7), main6.m(g6, t8, a7), v7 = true;
      }, p(t8, n8) {
        const l7 = {};
        33554473 & n8 && (l7.$$scope = {dirty: n8, ctx: t8}), e8.$set(l7);
        const r8 = {};
        33554493 & n8 && (r8.$$scope = {dirty: n8, ctx: t8}), s7.$set(r8);
        const a7 = {};
        33554432 & n8 && (a7.$$scope = {dirty: n8, ctx: t8}), g6.$set(a7);
      }, i(t8) {
        v7 || (main6.t(e8.$$.fragment, t8), main6.t(s7.$$.fragment, t8), main6.t(g6.$$.fragment, t8), v7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), main6.f(s7.$$.fragment, t8), main6.f(g6.$$.fragment, t8), v7 = false;
      }, d(t8) {
        main6.g(e8, t8), t8 && main6.h(n7), main6.g(s7, t8), t8 && main6.h(r7), t8 && main6.h(o7), t8 && main6.h(m7), main6.g(g6, t8);
      }};
    }
    function O3(t7) {
      let e8, n7, s7, r7, a7, o7, c7, p6, u6, m7, d6, y5, j6, b5 = t7[3].title + "";
      return {c() {
        e8 = main6.e("div"), n7 = main6.a(), s7 = main6.e("p"), r7 = main6.j(t7[0]), a7 = main6.j("("), o7 = main6.e("a"), c7 = main6.j("@"), p6 = main6.j(t7[6]), m7 = main6.j(")'s brand"), d6 = main6.a(), y5 = main6.e("h1"), j6 = main6.j(b5), main6.b(e8, "class", "brand-icon svelte-191prxn"), main6.z(e8, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/allius-dev.appspot.com/o/brand_icon%2FBRI-" + t7[3].brand_icon + ".jpg?alt=media)"), main6.b(o7, "href", u6 = t7[5](`/@${t7[6]}`)), main6.b(o7, "class", "link-to svelte-191prxn"), main6.b(s7, "class", "user-info svelte-191prxn"), main6.b(y5, "class", "brand-title svelte-191prxn");
      }, m(t8, i7) {
        main6.d(t8, e8, i7), main6.d(t8, n7, i7), main6.d(t8, s7, i7), main6.k(s7, r7), main6.k(s7, a7), main6.k(s7, o7), main6.k(o7, c7), main6.k(o7, p6), main6.k(s7, m7), main6.d(t8, d6, i7), main6.d(t8, y5, i7), main6.k(y5, j6);
      }, p(t8, n8) {
        8 & n8 && main6.z(e8, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/allius-dev.appspot.com/o/brand_icon%2FBRI-" + t8[3].brand_icon + ".jpg?alt=media)"), 1 & n8 && main6.v(r7, t8[0]), 32 & n8 && u6 !== (u6 = t8[5](`/@${t8[6]}`)) && main6.b(o7, "href", u6), 8 & n8 && b5 !== (b5 = t8[3].title + "") && main6.v(j6, b5);
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), t8 && main6.h(s7), t8 && main6.h(d6), t8 && main6.h(y5);
      }};
    }
    function Q3(t7) {
      let e8, n7, s7, r7;
      return s7 = new F2({props: {tagType: "p", className: "brand-content-why", context: t7[3].why}}), {c() {
        e8 = main6.e("p"), e8.innerHTML = 'Why<span class="svelte-191prxn">\uB098\uB294 \uC65C \uC774 \uC77C\uC744 \uD560\uAE4C\uC694?</span>', n7 = main6.a(), main6.c(s7.$$.fragment), main6.b(e8, "class", "sub-title svelte-191prxn");
      }, m(t8, a7) {
        main6.d(t8, e8, a7), main6.d(t8, n7, a7), main6.m(s7, t8, a7), r7 = true;
      }, p(t8, e9) {
        const n8 = {};
        8 & e9 && (n8.context = t8[3].why), s7.$set(n8);
      }, i(t8) {
        r7 || (main6.t(s7.$$.fragment, t8), r7 = true);
      }, o(t8) {
        main6.f(s7.$$.fragment, t8), r7 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), main6.g(s7, t8);
      }};
    }
    function V3(t7) {
      let e8, n7, s7, r7 = t7[3].inspirations, a7 = [];
      for (let e9 = 0; e9 < r7.length; e9 += 1)
        a7[e9] = Z3(G3(t7, r7, e9));
      return {c() {
        e8 = main6.e("p"), e8.innerHTML = 'Inspirations<span class="svelte-191prxn">\uC601\uAC10 \uC18C\uC2A4</span>', n7 = main6.a(), s7 = main6.e("ul");
        for (let t8 = 0; t8 < a7.length; t8 += 1)
          a7[t8].c();
        main6.b(e8, "class", "sub-title svelte-191prxn"), main6.b(s7, "class", "inspirations svelte-191prxn");
      }, m(t8, r8) {
        main6.d(t8, e8, r8), main6.d(t8, n7, r8), main6.d(t8, s7, r8);
        for (let t9 = 0; t9 < a7.length; t9 += 1)
          a7[t9].m(s7, null);
      }, p(t8, e9) {
        if (12 & e9) {
          let n8;
          for (r7 = t8[3].inspirations, n8 = 0; n8 < r7.length; n8 += 1) {
            const l7 = G3(t8, r7, n8);
            a7[n8] ? a7[n8].p(l7, e9) : (a7[n8] = Z3(l7), a7[n8].c(), a7[n8].m(s7, null));
          }
          for (; n8 < a7.length; n8 += 1)
            a7[n8].d(1);
          a7.length = r7.length;
        }
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), t8 && main6.h(s7), main6.C(a7, t8);
      }};
    }
    function X3(t7) {
      let e8, n7, s7, r7, a7, o7, c7, p6, u6, m7, d6, y5, j6, b5 = (14 * t7[16].title.length > t7[2] ? `${t7[16].title.slice(0, Math.floor(t7[2] / 14))}...` : t7[16].title) + "", w6 = (14 * t7[16].content.length > t7[2] ? `${t7[16].content.slice(0, Math.floor(t7[2] / 14))}...` : t7[16].content) + "";
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("div"), s7 = main6.e("p"), r7 = main6.j(b5), a7 = main6.a(), o7 = main6.e("p"), c7 = main6.j(w6), u6 = main6.a(), m7 = main6.e("a"), d6 = main6.j("\uBC14\uB85C\uAC00\uAE30"), j6 = main6.a(), main6.b(s7, "class", "link-title svelte-191prxn"), main6.b(o7, "class", "link-content svelte-191prxn"), main6.b(n7, "class", "text-box svelte-191prxn"), main6.A(() => t7[8].call(n7)), main6.b(m7, "href", y5 = t7[16].link), main6.b(m7, "class", "svelte-191prxn"), main6.b(e8, "class", "svelte-191prxn");
      }, m(i7, f7) {
        main6.d(i7, e8, f7), main6.k(e8, n7), main6.k(n7, s7), main6.k(s7, r7), main6.k(n7, a7), main6.k(n7, o7), main6.k(o7, c7), p6 = main6.B(n7, t7[8].bind(n7)), main6.k(e8, u6), main6.k(e8, m7), main6.k(m7, d6), main6.k(e8, j6);
      }, p(t8, e9) {
        12 & e9 && b5 !== (b5 = (14 * t8[16].title.length > t8[2] ? `${t8[16].title.slice(0, Math.floor(t8[2] / 14))}...` : t8[16].title) + "") && main6.v(r7, b5), 12 & e9 && w6 !== (w6 = (14 * t8[16].content.length > t8[2] ? `${t8[16].content.slice(0, Math.floor(t8[2] / 14))}...` : t8[16].content) + "") && main6.v(c7, w6), 8 & e9 && y5 !== (y5 = t8[16].link) && main6.b(m7, "href", y5);
      }, d(t8) {
        t8 && main6.h(e8), p6();
      }};
    }
    function Z3(t7) {
      let e8, n7 = t7[16].title && t7[16].content && X3(t7);
      return {c() {
        n7 && n7.c(), e8 = main6.p();
      }, m(t8, s7) {
        n7 && n7.m(t8, s7), main6.d(t8, e8, s7);
      }, p(t8, s7) {
        t8[16].title && t8[16].content ? n7 ? n7.p(t8, s7) : (n7 = X3(t8), n7.c(), n7.m(e8.parentNode, e8)) : n7 && (n7.d(1), n7 = null);
      }, d(t8) {
        n7 && n7.d(t8), t8 && main6.h(e8);
      }};
    }
    function tt(t7) {
      let e8, n7, s7, p6, u6, m7, d6 = t7[4], g6 = [];
      for (let e9 = 0; e9 < d6.length; e9 += 1)
        g6[e9] = st(Y3(t7, d6, e9));
      const v7 = (t8) => main6.f(g6[t8], 1, 1, () => {
        g6[t8] = null;
      });
      return {c() {
        e8 = main6.e("p"), e8.innerHTML = 'Experiences<span class="svelte-191prxn">\uCD95\uC801\uB41C \uACBD\uD5D8</span>', n7 = main6.a(), s7 = main6.e("p"), s7.innerHTML = '<span class="ing svelte-191prxn">\u25A0 \uC9C4\uD589 \uC911\uC778 \uD504\uB85C\uC81D\uD2B8</span> \n                <span class="end svelte-191prxn">\u25A0 \uC885\uB8CC\uB41C \uD504\uB85C\uC81D\uD2B8</span> \n                <span class="content svelte-191prxn">\u25A0 \uCF58\uD150\uCE20(\uB9C1\uD06C)</span>', p6 = main6.a(), u6 = main6.e("ul");
        for (let t8 = 0; t8 < g6.length; t8 += 1)
          g6[t8].c();
        main6.b(e8, "class", "sub-title svelte-191prxn"), main6.b(s7, "class", "project-type-list svelte-191prxn"), main6.b(u6, "class", "project-list svelte-191prxn");
      }, m(t8, r7) {
        main6.d(t8, e8, r7), main6.d(t8, n7, r7), main6.d(t8, s7, r7), main6.d(t8, p6, r7), main6.d(t8, u6, r7);
        for (let t9 = 0; t9 < g6.length; t9 += 1)
          g6[t9].m(u6, null);
        m7 = true;
      }, p(t8, e9) {
        if (80 & e9) {
          let n8;
          for (d6 = t8[4], n8 = 0; n8 < d6.length; n8 += 1) {
            const s8 = Y3(t8, d6, n8);
            g6[n8] ? (g6[n8].p(s8, e9), main6.t(g6[n8], 1)) : (g6[n8] = st(s8), g6[n8].c(), main6.t(g6[n8], 1), g6[n8].m(u6, null));
          }
          for (main6.q(), n8 = d6.length; n8 < g6.length; n8 += 1)
            v7(n8);
          main6.r();
        }
      }, i(t8) {
        if (!m7) {
          for (let t9 = 0; t9 < d6.length; t9 += 1)
            main6.t(g6[t9]);
          m7 = true;
        }
      }, o(t8) {
        g6 = g6.filter(Boolean);
        for (let t9 = 0; t9 < g6.length; t9 += 1)
          main6.f(g6[t9]);
        m7 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), t8 && main6.h(s7), t8 && main6.h(p6), t8 && main6.h(u6), main6.C(g6, t8);
      }};
    }
    function et(t7) {
      let e8, n7;
      return e8 = new P3({props: {contentTitle: t7[16].title, contentSummary: t7[16].summary, contentLink: t7[16].link}}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, s7) {
        main6.m(e8, t8, s7), n7 = true;
      }, p(t8, n8) {
        const s7 = {};
        16 & n8 && (s7.contentTitle = t8[16].title), 16 & n8 && (s7.contentSummary = t8[16].summary), 16 & n8 && (s7.contentLink = t8[16].link), e8.$set(s7);
      }, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function nt(t7) {
      let e8, n7;
      return e8 = new re2({props: {nickname: t7[6], userColor: "#1ECCE4", projectTitle: t7[16].title, projectSummary: t7[16].summary, projectStatus: t7[16].status, projectId: t7[16].project_id}}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, s7) {
        main6.m(e8, t8, s7), n7 = true;
      }, p(t8, n8) {
        const s7 = {};
        16 & n8 && (s7.projectTitle = t8[16].title), 16 & n8 && (s7.projectSummary = t8[16].summary), 16 & n8 && (s7.projectStatus = t8[16].status), 16 & n8 && (s7.projectId = t8[16].project_id), e8.$set(s7);
      }, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function st(t7) {
      let e8, n7, s7, p6, u6;
      const m7 = [nt, et], d6 = [];
      function g6(t8, e9) {
        return t8[16].type === "project" ? 0 : t8[16].type === "content" ? 1 : -1;
      }
      return ~(n7 = g6(t7)) && (s7 = d6[n7] = m7[n7](t7)), {c() {
        e8 = main6.e("li"), s7 && s7.c(), p6 = main6.a(), main6.b(e8, "class", "svelte-191prxn");
      }, m(t8, s8) {
        main6.d(t8, e8, s8), ~n7 && d6[n7].m(e8, null), main6.k(e8, p6), u6 = true;
      }, p(t8, l7) {
        let i7 = n7;
        n7 = g6(t8), n7 === i7 ? ~n7 && d6[n7].p(t8, l7) : (s7 && (main6.q(), main6.f(d6[i7], 1, 1, () => {
          d6[i7] = null;
        }), main6.r()), ~n7 ? (s7 = d6[n7], s7 ? s7.p(t8, l7) : (s7 = d6[n7] = m7[n7](t8), s7.c()), main6.t(s7, 1), s7.m(e8, p6)) : s7 = null);
      }, i(t8) {
        u6 || (main6.t(s7), u6 = true);
      }, o(t8) {
        main6.f(s7), u6 = false;
      }, d(t8) {
        t8 && main6.h(e8), ~n7 && d6[n7].d();
      }};
    }
    function lt(t7) {
      let e8, n7, s7, r7 = t7[3].future_projects, a7 = [];
      for (let e9 = 0; e9 < r7.length; e9 += 1)
        a7[e9] = rt(z4(t7, r7, e9));
      return {c() {
        e8 = main6.e("p"), e8.innerHTML = 'future_projects<span class="svelte-191prxn">\uD558\uACE0 \uC2F6\uC740 \uD504\uB85C\uC81D\uD2B8</span>', n7 = main6.a(), s7 = main6.e("ul");
        for (let t8 = 0; t8 < a7.length; t8 += 1)
          a7[t8].c();
        main6.b(e8, "class", "sub-title svelte-191prxn"), main6.b(s7, "class", "content-array-type svelte-191prxn");
      }, m(t8, r8) {
        main6.d(t8, e8, r8), main6.d(t8, n7, r8), main6.d(t8, s7, r8);
        for (let t9 = 0; t9 < a7.length; t9 += 1)
          a7[t9].m(s7, null);
      }, p(t8, e9) {
        if (8 & e9) {
          let n8;
          for (r7 = t8[3].future_projects, n8 = 0; n8 < r7.length; n8 += 1) {
            const l7 = z4(t8, r7, n8);
            a7[n8] ? a7[n8].p(l7, e9) : (a7[n8] = rt(l7), a7[n8].c(), a7[n8].m(s7, null));
          }
          for (; n8 < a7.length; n8 += 1)
            a7[n8].d(1);
          a7.length = r7.length;
        }
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), t8 && main6.h(s7), main6.C(a7, t8);
      }};
    }
    function rt(t7) {
      let e8, n7, s7, r7, a7 = t7[16] + "";
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("strong"), n7.textContent = "\u2714", s7 = main6.a(), r7 = main6.j(a7), main6.z(n7, "color", "#1ECCE4"), main6.b(n7, "class", "svelte-191prxn"), main6.b(e8, "class", "svelte-191prxn");
      }, m(t8, a8) {
        main6.d(t8, e8, a8), main6.k(e8, n7), main6.k(e8, s7), main6.k(e8, r7);
      }, p(t8, e9) {
        8 & e9 && a7 !== (a7 = t8[16] + "") && main6.v(r7, a7);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function at(t7) {
      let e8, n7, s7, r7 = t7[3].wanted, a7 = [];
      for (let e9 = 0; e9 < r7.length; e9 += 1)
        a7[e9] = ot(q4(t7, r7, e9));
      return {c() {
        e8 = main6.e("p"), e8.innerHTML = 'Wanted<span class="svelte-191prxn">\uD544\uC694\uD55C \uC790\uC6D0</span>', n7 = main6.a(), s7 = main6.e("ul");
        for (let t8 = 0; t8 < a7.length; t8 += 1)
          a7[t8].c();
        main6.b(e8, "class", "sub-title svelte-191prxn"), main6.b(s7, "class", "content-array-type svelte-191prxn");
      }, m(t8, r8) {
        main6.d(t8, e8, r8), main6.d(t8, n7, r8), main6.d(t8, s7, r8);
        for (let t9 = 0; t9 < a7.length; t9 += 1)
          a7[t9].m(s7, null);
      }, p(t8, e9) {
        if (8 & e9) {
          let n8;
          for (r7 = t8[3].wanted, n8 = 0; n8 < r7.length; n8 += 1) {
            const l7 = q4(t8, r7, n8);
            a7[n8] ? a7[n8].p(l7, e9) : (a7[n8] = ot(l7), a7[n8].c(), a7[n8].m(s7, null));
          }
          for (; n8 < a7.length; n8 += 1)
            a7[n8].d(1);
          a7.length = r7.length;
        }
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), t8 && main6.h(s7), main6.C(a7, t8);
      }};
    }
    function ot(t7) {
      let e8, n7, s7, r7, a7 = t7[16] + "";
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("strong"), n7.textContent = "\u2714", s7 = main6.a(), r7 = main6.j(a7), main6.z(n7, "color", "#1ECCE4"), main6.b(n7, "class", "svelte-191prxn"), main6.b(e8, "class", "svelte-191prxn");
      }, m(t8, a8) {
        main6.d(t8, e8, a8), main6.k(e8, n7), main6.k(e8, s7), main6.k(e8, r7);
      }, p(t8, e9) {
        8 & e9 && a7 !== (a7 = t8[16] + "") && main6.v(r7, a7);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function ct(t7) {
      let e8, n7, s7, m7, y5, j6, b5, w6, k6, _4, T5, C5, I4, L4, N3, S4, B4, M2, E4 = t7[3].why && Q3(t7), H3 = t7[3].inspirations && t7[3].inspirations.length > 0 && V3(t7), F4 = t7[4] && t7[4].length > 0 && tt(t7), A5 = t7[3].future_projects && t7[3].future_projects.length > 0 && t7[3].future_projects[0] && lt(t7), U4 = t7[3].wanted && t7[3].wanted.length > 0 && t7[3].wanted[0] && at(t7);
      return B4 = new D3({props: {nickname: t7[6], userName: t7[0], userColor: "#1ECCE4"}}), {c() {
        E4 && E4.c(), e8 = main6.a(), H3 && H3.c(), n7 = main6.a(), F4 && F4.c(), s7 = main6.a(), A5 && A5.c(), m7 = main6.a(), U4 && U4.c(), y5 = main6.a(), j6 = main6.e("div"), b5 = main6.e("a"), w6 = main6.j(t7[0]), k6 = main6.j(" \uB2D8\uC758 \uD504\uB85C\uD3F4\uB9AC\uC624\uB85C \uB3CC\uC544\uAC00\uAE30"), T5 = main6.a(), C5 = main6.e("p"), I4 = main6.j(t7[0]), L4 = main6.j("'s Brand"), N3 = main6.e("span"), N3.textContent = "\uD074\uB9AD\uD558\uC5EC \uB354 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uC138\uC694-!", S4 = main6.a(), main6.c(B4.$$.fragment), main6.b(b5, "href", _4 = t7[5](`/@${t7[6]}`)), main6.b(b5, "class", "link-to svelte-191prxn"), main6.b(j6, "class", "back-to-profolio svelte-191prxn"), main6.b(N3, "class", "svelte-191prxn"), main6.b(C5, "class", "sub-title svelte-191prxn");
      }, m(t8, r7) {
        E4 && E4.m(t8, r7), main6.d(t8, e8, r7), H3 && H3.m(t8, r7), main6.d(t8, n7, r7), F4 && F4.m(t8, r7), main6.d(t8, s7, r7), A5 && A5.m(t8, r7), main6.d(t8, m7, r7), U4 && U4.m(t8, r7), main6.d(t8, y5, r7), main6.d(t8, j6, r7), main6.k(j6, b5), main6.k(b5, w6), main6.k(b5, k6), main6.d(t8, T5, r7), main6.d(t8, C5, r7), main6.k(C5, I4), main6.k(C5, L4), main6.k(C5, N3), main6.d(t8, S4, r7), main6.m(B4, t8, r7), M2 = true;
      }, p(t8, l7) {
        t8[3].why ? E4 ? (E4.p(t8, l7), 8 & l7 && main6.t(E4, 1)) : (E4 = Q3(t8), E4.c(), main6.t(E4, 1), E4.m(e8.parentNode, e8)) : E4 && (main6.q(), main6.f(E4, 1, 1, () => {
          E4 = null;
        }), main6.r()), t8[3].inspirations && t8[3].inspirations.length > 0 ? H3 ? H3.p(t8, l7) : (H3 = V3(t8), H3.c(), H3.m(n7.parentNode, n7)) : H3 && (H3.d(1), H3 = null), t8[4] && t8[4].length > 0 ? F4 ? (F4.p(t8, l7), 16 & l7 && main6.t(F4, 1)) : (F4 = tt(t8), F4.c(), main6.t(F4, 1), F4.m(s7.parentNode, s7)) : F4 && (main6.q(), main6.f(F4, 1, 1, () => {
          F4 = null;
        }), main6.r()), t8[3].future_projects && t8[3].future_projects.length > 0 && t8[3].future_projects[0] ? A5 ? A5.p(t8, l7) : (A5 = lt(t8), A5.c(), A5.m(m7.parentNode, m7)) : A5 && (A5.d(1), A5 = null), t8[3].wanted && t8[3].wanted.length > 0 && t8[3].wanted[0] ? U4 ? U4.p(t8, l7) : (U4 = at(t8), U4.c(), U4.m(y5.parentNode, y5)) : U4 && (U4.d(1), U4 = null), (!M2 || 1 & l7) && main6.v(w6, t8[0]), (!M2 || 32 & l7 && _4 !== (_4 = t8[5](`/@${t8[6]}`))) && main6.b(b5, "href", _4), (!M2 || 1 & l7) && main6.v(I4, t8[0]);
        const i7 = {};
        1 & l7 && (i7.userName = t8[0]), B4.$set(i7);
      }, i(t8) {
        M2 || (main6.t(E4), main6.t(F4), main6.t(B4.$$.fragment, t8), M2 = true);
      }, o(t8) {
        main6.f(E4), main6.f(F4), main6.f(B4.$$.fragment, t8), M2 = false;
      }, d(t8) {
        E4 && E4.d(t8), t8 && main6.h(e8), H3 && H3.d(t8), t8 && main6.h(n7), F4 && F4.d(t8), t8 && main6.h(s7), A5 && A5.d(t8), t8 && main6.h(m7), U4 && U4.d(t8), t8 && main6.h(y5), t8 && main6.h(j6), t8 && main6.h(T5), t8 && main6.h(C5), t8 && main6.h(S4), main6.g(B4, t8);
      }};
    }
    function it(t7) {
      let e8, n7, s7;
      return {c() {
        e8 = main6.e("a"), e8.textContent = "Make Yours!", n7 = main6.a(), s7 = main6.e("p"), s7.textContent = "\xA9 realwesen, Inc. All Rights Reserved.", main6.b(e8, "class", "join svelte-191prxn"), main6.b(e8, "href", "https://allius.io/desk"), main6.b(s7, "class", "copyright svelte-191prxn");
      }, m(t8, r7) {
        main6.d(t8, e8, r7), main6.d(t8, n7, r7), main6.d(t8, s7, r7);
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), t8 && main6.h(s7);
      }};
    }
    function pt(t7) {
      let e8, n7, m7, g6, x5, y5, j6, b5, w6, k6, _4, T5, C5, I4;
      document.title = e8 = t7[0] + " : " + t7[1].title, w6 = new g({});
      const L4 = [K3, J3], N3 = [];
      function S4(t8, e9) {
        return t8[3] && t8[0] ? 0 : 1;
      }
      return _4 = S4(t7), T5 = N3[_4] = L4[_4](t7), {c() {
        n7 = main6.e("meta"), g6 = main6.e("meta"), y5 = main6.e("meta"), b5 = main6.a(), main6.c(w6.$$.fragment), k6 = main6.a(), T5.c(), C5 = main6.p(), main6.b(n7, "property", "og:title"), main6.b(n7, "content", m7 = t7[0] + " : " + t7[1].title), main6.b(n7, "class", "svelte-191prxn"), main6.b(g6, "property", "og:image"), main6.b(g6, "content", x5 = "https://firebasestorage.googleapis.com/v0/b/allius-dev.appspot.com/o/brand_icon%2FBRI-" + t7[1].photo_url + ".jpg?alt=media"), main6.b(g6, "class", "svelte-191prxn"), main6.b(y5, "property", "og:description"), main6.b(y5, "content", j6 = t7[1].why), main6.b(y5, "class", "svelte-191prxn");
      }, m(t8, e9) {
        main6.k(document.head, n7), main6.k(document.head, g6), main6.k(document.head, y5), main6.d(t8, b5, e9), main6.m(w6, t8, e9), main6.d(t8, k6, e9), N3[_4].m(t8, e9), main6.d(t8, C5, e9), I4 = true;
      }, p(t8, [s7]) {
        (!I4 || 3 & s7) && e8 !== (e8 = t8[0] + " : " + t8[1].title) && (document.title = e8), (!I4 || 3 & s7 && m7 !== (m7 = t8[0] + " : " + t8[1].title)) && main6.b(n7, "content", m7), (!I4 || 2 & s7 && x5 !== (x5 = "https://firebasestorage.googleapis.com/v0/b/allius-dev.appspot.com/o/brand_icon%2FBRI-" + t8[1].photo_url + ".jpg?alt=media")) && main6.b(g6, "content", x5), (!I4 || 2 & s7 && j6 !== (j6 = t8[1].why)) && main6.b(y5, "content", j6);
        let l7 = _4;
        _4 = S4(t8), _4 === l7 ? N3[_4].p(t8, s7) : (main6.q(), main6.f(N3[l7], 1, 1, () => {
          N3[l7] = null;
        }), main6.r(), T5 = N3[_4], T5 ? T5.p(t8, s7) : (T5 = N3[_4] = L4[_4](t8), T5.c()), main6.t(T5, 1), T5.m(C5.parentNode, C5));
      }, i(t8) {
        I4 || (main6.t(w6.$$.fragment, t8), main6.t(T5), I4 = true);
      }, o(t8) {
        main6.f(w6.$$.fragment, t8), main6.f(T5), I4 = false;
      }, d(t8) {
        main6.h(n7), main6.h(g6), main6.h(y5), t8 && main6.h(b5), main6.g(w6, t8), t8 && main6.h(k6), N3[_4].d(t8), t8 && main6.h(C5);
      }};
    }
    function ut(t7, e8, n7) {
      let s7, l7, r7, a7;
      main6.l(t7, main6.w, (t8) => n7(9, s7 = t8)), main6.l(t7, main6.x, (t8) => n7(10, l7 = t8)), main6.l(t7, main6.u, (t8) => n7(5, r7 = t8)), main6.l(t7, main6.y, (t8) => n7(11, a7 = t8));
      let o7, c7, i7, {brandId: p6} = e8, u6 = s7.userId.slice(1), m7 = "", d6 = {};
      return main6.o(() => {
        (async () => {
          try {
            const t8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getBrandDetail?nickname=${u6}&brandId=${p6}`});
            n7(1, d6 = await t8.data), a7();
          } catch (t8) {
            console.log("\uC0AC\uC6A9\uC790 \uC815\uBCF4 \uAC00\uC838\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. = " + u6);
          }
        })(), (async () => {
          try {
            const t8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getUserName?nickname=${u6}`});
            n7(0, m7 = await t8.data.name), a7();
          } catch (t8) {
            console.log("\uC0AC\uC6A9\uC790 \uC774\uB984 \uC815\uBCF4 \uAC00\uC838\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. = " + u6), l7(r7(`/@${u6}`));
          }
        })(), (async () => {
          try {
            const t8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getBrandDetail?nickname=${u6}&brandId=${p6}`});
            n7(3, c7 = await t8.data);
          } catch (t8) {
            console.log("Brand \uC815\uBCF4 \uAC00\uC838\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. = " + u6), l7(r7(`/@${u6}`));
          }
        })(), (async () => {
          try {
            const t8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getBrandProjectAll?nickname=${u6}&brandId=${p6}`});
            n7(4, i7 = await t8.data.project_list);
          } catch (t8) {
            console.log("\uD504\uB85C\uC81D\uD2B8 \uC815\uBCF4 \uAC00\uC838\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. = " + u6), l7(r7(`/@${u6}`));
          }
        })();
      }), t7.$$set = (t8) => {
        "brandId" in t8 && n7(7, p6 = t8.brandId);
      }, [m7, d6, o7, c7, i7, r7, u6, p6, function() {
        o7 = this.clientWidth, n7(2, o7);
      }];
    }
    class brandId_56abeeb7_default extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, ut, pt, main6.s, {brandId: 7});
      }
    }
  });

  // ../../../../지울꺼/allius-routify/dist/build/index-3f9a02b5.js
  var require_index_3f9a02b5 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_3f9a02b5_default
    });
    const main6 = __toModule(require_main());
    function M2(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[6] = e8[n7], l7;
    }
    function q4(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[6] = e8[n7], l7;
    }
    function A4(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[6] = e8[n7], l7;
    }
    function D4(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[6] = e8[n7], l7;
    }
    function G3(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[6] = e8[n7], l7;
    }
    function Y3(t7) {
      let e8, n7, r7;
      const c7 = t7[5].default, m7 = main6.D(c7, t7, t7[4], null);
      let f7 = t7[2], p6 = [];
      for (let e9 = 0; e9 < f7.length; e9 += 1)
        p6[e9] = Q3(M2(t7, f7, e9));
      return {c() {
        m7 && m7.c(), e8 = main6.a();
        for (let t8 = 0; t8 < p6.length; t8 += 1)
          p6[t8].c();
        n7 = main6.p();
      }, m(t8, l7) {
        m7 && m7.m(t8, l7), main6.d(t8, e8, l7);
        for (let e9 = 0; e9 < p6.length; e9 += 1)
          p6[e9].m(t8, l7);
        main6.d(t8, n7, l7), r7 = true;
      }, p(t8, e9) {
        if (m7 && m7.p && 16 & e9 && main6.E(m7, c7, t8, t8[4], e9, null, null), 6 & e9) {
          let l7;
          for (f7 = t8[2], l7 = 0; l7 < f7.length; l7 += 1) {
            const s7 = M2(t8, f7, l7);
            p6[l7] ? p6[l7].p(s7, e9) : (p6[l7] = Q3(s7), p6[l7].c(), p6[l7].m(n7.parentNode, n7));
          }
          for (; l7 < p6.length; l7 += 1)
            p6[l7].d(1);
          p6.length = f7.length;
        }
      }, i(t8) {
        r7 || (main6.t(m7, t8), r7 = true);
      }, o(t8) {
        main6.f(m7, t8), r7 = false;
      }, d(t8) {
        m7 && m7.d(t8), t8 && main6.h(e8), main6.C(p6, t8), t8 && main6.h(n7);
      }};
    }
    function F4(t7) {
      let e8, n7, r7;
      const c7 = t7[5].default, m7 = main6.D(c7, t7, t7[4], null);
      let f7 = t7[2], p6 = [];
      for (let e9 = 0; e9 < f7.length; e9 += 1)
        p6[e9] = V3(q4(t7, f7, e9));
      return {c() {
        m7 && m7.c(), e8 = main6.a();
        for (let t8 = 0; t8 < p6.length; t8 += 1)
          p6[t8].c();
        n7 = main6.p();
      }, m(t8, l7) {
        m7 && m7.m(t8, l7), main6.d(t8, e8, l7);
        for (let e9 = 0; e9 < p6.length; e9 += 1)
          p6[e9].m(t8, l7);
        main6.d(t8, n7, l7), r7 = true;
      }, p(t8, e9) {
        if (m7 && m7.p && 16 & e9 && main6.E(m7, c7, t8, t8[4], e9, null, null), 6 & e9) {
          let l7;
          for (f7 = t8[2], l7 = 0; l7 < f7.length; l7 += 1) {
            const s7 = q4(t8, f7, l7);
            p6[l7] ? p6[l7].p(s7, e9) : (p6[l7] = V3(s7), p6[l7].c(), p6[l7].m(n7.parentNode, n7));
          }
          for (; l7 < p6.length; l7 += 1)
            p6[l7].d(1);
          p6.length = f7.length;
        }
      }, i(t8) {
        r7 || (main6.t(m7, t8), r7 = true);
      }, o(t8) {
        main6.f(m7, t8), r7 = false;
      }, d(t8) {
        m7 && m7.d(t8), t8 && main6.h(e8), main6.C(p6, t8), t8 && main6.h(n7);
      }};
    }
    function J3(t7) {
      let e8, n7, r7;
      const c7 = t7[5].default, m7 = main6.D(c7, t7, t7[4], null);
      let f7 = t7[2], p6 = [];
      for (let e9 = 0; e9 < f7.length; e9 += 1)
        p6[e9] = W3(A4(t7, f7, e9));
      return {c() {
        m7 && m7.c(), e8 = main6.a();
        for (let t8 = 0; t8 < p6.length; t8 += 1)
          p6[t8].c();
        n7 = main6.p();
      }, m(t8, l7) {
        m7 && m7.m(t8, l7), main6.d(t8, e8, l7);
        for (let e9 = 0; e9 < p6.length; e9 += 1)
          p6[e9].m(t8, l7);
        main6.d(t8, n7, l7), r7 = true;
      }, p(t8, e9) {
        if (m7 && m7.p && 16 & e9 && main6.E(m7, c7, t8, t8[4], e9, null, null), 6 & e9) {
          let l7;
          for (f7 = t8[2], l7 = 0; l7 < f7.length; l7 += 1) {
            const s7 = A4(t8, f7, l7);
            p6[l7] ? p6[l7].p(s7, e9) : (p6[l7] = W3(s7), p6[l7].c(), p6[l7].m(n7.parentNode, n7));
          }
          for (; l7 < p6.length; l7 += 1)
            p6[l7].d(1);
          p6.length = f7.length;
        }
      }, i(t8) {
        r7 || (main6.t(m7, t8), r7 = true);
      }, o(t8) {
        main6.f(m7, t8), r7 = false;
      }, d(t8) {
        m7 && m7.d(t8), t8 && main6.h(e8), main6.C(p6, t8), t8 && main6.h(n7);
      }};
    }
    function K3(t7) {
      let e8, n7, r7;
      const c7 = t7[5].default, m7 = main6.D(c7, t7, t7[4], null);
      let f7 = t7[2], p6 = [];
      for (let e9 = 0; e9 < f7.length; e9 += 1)
        p6[e9] = X3(D4(t7, f7, e9));
      return {c() {
        m7 && m7.c(), e8 = main6.a();
        for (let t8 = 0; t8 < p6.length; t8 += 1)
          p6[t8].c();
        n7 = main6.p();
      }, m(t8, l7) {
        m7 && m7.m(t8, l7), main6.d(t8, e8, l7);
        for (let e9 = 0; e9 < p6.length; e9 += 1)
          p6[e9].m(t8, l7);
        main6.d(t8, n7, l7), r7 = true;
      }, p(t8, e9) {
        if (m7 && m7.p && 16 & e9 && main6.E(m7, c7, t8, t8[4], e9, null, null), 6 & e9) {
          let l7;
          for (f7 = t8[2], l7 = 0; l7 < f7.length; l7 += 1) {
            const s7 = D4(t8, f7, l7);
            p6[l7] ? p6[l7].p(s7, e9) : (p6[l7] = X3(s7), p6[l7].c(), p6[l7].m(n7.parentNode, n7));
          }
          for (; l7 < p6.length; l7 += 1)
            p6[l7].d(1);
          p6.length = f7.length;
        }
      }, i(t8) {
        r7 || (main6.t(m7, t8), r7 = true);
      }, o(t8) {
        main6.f(m7, t8), r7 = false;
      }, d(t8) {
        m7 && m7.d(t8), t8 && main6.h(e8), main6.C(p6, t8), t8 && main6.h(n7);
      }};
    }
    function O3(t7) {
      let e8, n7, r7;
      const c7 = t7[5].default, m7 = main6.D(c7, t7, t7[4], null);
      let f7 = t7[2], p6 = [];
      for (let e9 = 0; e9 < f7.length; e9 += 1)
        p6[e9] = Z3(G3(t7, f7, e9));
      return {c() {
        m7 && m7.c(), e8 = main6.a();
        for (let t8 = 0; t8 < p6.length; t8 += 1)
          p6[t8].c();
        n7 = main6.p();
      }, m(t8, l7) {
        m7 && m7.m(t8, l7), main6.d(t8, e8, l7);
        for (let e9 = 0; e9 < p6.length; e9 += 1)
          p6[e9].m(t8, l7);
        main6.d(t8, n7, l7), r7 = true;
      }, p(t8, e9) {
        if (m7 && m7.p && 16 & e9 && main6.E(m7, c7, t8, t8[4], e9, null, null), 6 & e9) {
          let l7;
          for (f7 = t8[2], l7 = 0; l7 < f7.length; l7 += 1) {
            const s7 = G3(t8, f7, l7);
            p6[l7] ? p6[l7].p(s7, e9) : (p6[l7] = Z3(s7), p6[l7].c(), p6[l7].m(n7.parentNode, n7));
          }
          for (; l7 < p6.length; l7 += 1)
            p6[l7].d(1);
          p6.length = f7.length;
        }
      }, i(t8) {
        r7 || (main6.t(m7, t8), r7 = true);
      }, o(t8) {
        main6.f(m7, t8), r7 = false;
      }, d(t8) {
        m7 && m7.d(t8), t8 && main6.h(e8), main6.C(p6, t8), t8 && main6.h(n7);
      }};
    }
    function Q3(t7) {
      let e8, n7, l7 = t7[6] + "";
      return {c() {
        e8 = main6.e("p"), n7 = main6.j(l7), main6.b(e8, "class", t7[1]);
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7);
      }, p(t8, n8) {
        2 & n8 && main6.b(e8, "class", t8[1]);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function V3(t7) {
      let e8, n7, l7 = t7[6] + "";
      return {c() {
        e8 = main6.e("span"), n7 = main6.j(l7), main6.b(e8, "class", t7[1]);
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7);
      }, p(t8, n8) {
        2 & n8 && main6.b(e8, "class", t8[1]);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function W3(t7) {
      let e8, n7, l7 = t7[6] + "";
      return {c() {
        e8 = main6.e("h3"), n7 = main6.j(l7), main6.b(e8, "class", t7[1]);
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7);
      }, p(t8, n8) {
        2 & n8 && main6.b(e8, "class", t8[1]);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function X3(t7) {
      let e8, n7, l7 = t7[6] + "";
      return {c() {
        e8 = main6.e("h2"), n7 = main6.j(l7), main6.b(e8, "class", t7[1]);
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7);
      }, p(t8, n8) {
        2 & n8 && main6.b(e8, "class", t8[1]);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function Z3(t7) {
      let e8, n7, l7 = t7[6] + "";
      return {c() {
        e8 = main6.e("h1"), n7 = main6.j(l7), main6.b(e8, "class", t7[1]);
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7);
      }, p(t8, n8) {
        2 & n8 && main6.b(e8, "class", t8[1]);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function tt(t7) {
      let e8, n7, i7, m7;
      const f7 = [O3, K3, J3, F4, Y3], p6 = [];
      function g6(t8, e9) {
        return t8[0] === "h1" ? 0 : t8[0] === "h2" ? 1 : t8[0] === "h3" ? 2 : t8[0] === "span" ? 3 : 4;
      }
      return e8 = g6(t7), n7 = p6[e8] = f7[e8](t7), {c() {
        n7.c(), i7 = main6.p();
      }, m(t8, n8) {
        p6[e8].m(t8, n8), main6.d(t8, i7, n8), m7 = true;
      }, p(t8, [l7]) {
        let s7 = e8;
        e8 = g6(t8), e8 === s7 ? p6[e8].p(t8, l7) : (main6.q(), main6.f(p6[s7], 1, 1, () => {
          p6[s7] = null;
        }), main6.r(), n7 = p6[e8], n7 ? n7.p(t8, l7) : (n7 = p6[e8] = f7[e8](t8), n7.c()), main6.t(n7, 1), n7.m(i7.parentNode, i7));
      }, i(t8) {
        m7 || (main6.t(n7), m7 = true);
      }, o(t8) {
        main6.f(n7), m7 = false;
      }, d(t8) {
        p6[e8].d(t8), t8 && main6.h(i7);
      }};
    }
    function et(t7, e8, n7) {
      let {$$slots: l7 = {}, $$scope: s7} = e8, {tagType: r7} = e8, {className: o7} = e8, {context: c7} = e8, a7 = typeof c7 == "string" ? c7.split("\n") : [];
      return t7.$$set = (t8) => {
        "tagType" in t8 && n7(0, r7 = t8.tagType), "className" in t8 && n7(1, o7 = t8.className), "context" in t8 && n7(3, c7 = t8.context), "$$scope" in t8 && n7(4, s7 = t8.$$scope);
      }, [r7, o7, a7, c7, s7, l7];
    }
    class nt extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, et, tt, main6.s, {tagType: 0, className: 1, context: 3});
      }
    }
    function lt(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[6] = e8[n7], l7;
    }
    function st(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[6] = e8[n7], l7;
    }
    function rt(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[11] = e8[n7], l7[13] = n7, l7;
    }
    function ot(t7) {
      let e8, n7;
      return e8 = new W2({}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p: main6.n, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function ct(t7) {
      let e8, n7, l7, r7, c7, i7, $5, w6, k6, z5, b5, _4, P4, T5, S5, I3, B4, H3, L3, R3, U3, E4, M3, q5 = t7[1].name + "";
      P4 = new nt({props: {tagType: "p", className: "user-profile-note", context: t7[1].note}});
      let A5 = t7[1].tags, D5 = [];
      for (let e9 = 0; e9 < A5.length; e9 += 1)
        D5[e9] = at(rt(t7, A5, e9));
      let G4 = ["tw", "fb", "in"], Y4 = [];
      for (let e9 = 0; e9 < 3; e9 += 1)
        Y4[e9] = it(st(t7, G4, e9));
      let F5 = t7[2].etc.length > 0 && mt(t7);
      return {c() {
        e8 = main6.e("div"), n7 = main6.a(), l7 = main6.e("h3"), r7 = main6.j(q5), c7 = main6.a(), i7 = main6.e("p"), $5 = main6.j("@"), w6 = main6.j(t7[0]), k6 = main6.a(), z5 = main6.e("img"), _4 = main6.a(), main6.c(P4.$$.fragment), T5 = main6.a(), S5 = main6.e("p"), I3 = main6.a(), B4 = main6.e("ul");
        for (let t8 = 0; t8 < D5.length; t8 += 1)
          D5[t8].c();
        H3 = main6.a(), L3 = main6.e("ul");
        for (let t8 = 0; t8 < 3; t8 += 1)
          Y4[t8].c();
        R3 = main6.a(), F5 && F5.c(), main6.b(e8, "class", "profile-img svelte-57pkxz"), main6.z(e8, "background-image", "url(" + t7[1].photo_url + ")"), main6.b(l7, "class", "svelte-57pkxz"), z5.src !== (b5 = "https://allius-images.s3.ap-northeast-2.amazonaws.com/assets/icon-copy.png") && main6.b(z5, "src", "https://allius-images.s3.ap-northeast-2.amazonaws.com/assets/icon-copy.png"), main6.b(z5, "alt", ""), main6.b(z5, "class", "svelte-57pkxz"), main6.z(i7, "color", t7[1].userColor), main6.b(i7, "class", "user-name svelte-57pkxz"), main6.b(S5, "class", "note svelte-57pkxz"), main6.b(B4, "class", "user-tags svelte-57pkxz"), main6.b(L3, "class", "user-sns svelte-57pkxz");
      }, m(o7, a7) {
        main6.d(o7, e8, a7), main6.d(o7, n7, a7), main6.d(o7, l7, a7), main6.k(l7, r7), main6.d(o7, c7, a7), main6.d(o7, i7, a7), main6.k(i7, $5), main6.k(i7, w6), main6.k(i7, k6), main6.k(i7, z5), main6.d(o7, _4, a7), main6.m(P4, o7, a7), main6.d(o7, T5, a7), main6.d(o7, S5, a7), main6.d(o7, I3, a7), main6.d(o7, B4, a7);
        for (let t8 = 0; t8 < D5.length; t8 += 1)
          D5[t8].m(B4, null);
        main6.d(o7, H3, a7), main6.d(o7, L3, a7);
        for (let t8 = 0; t8 < 3; t8 += 1)
          Y4[t8].m(L3, null);
        main6.k(L3, R3), F5 && F5.m(L3, null), U3 = true, E4 || (M3 = main6.H(z5, "click", t7[4]), E4 = true);
      }, p(t8, n8) {
        (!U3 || 2 & n8) && main6.z(e8, "background-image", "url(" + t8[1].photo_url + ")"), (!U3 || 2 & n8) && q5 !== (q5 = t8[1].name + "") && main6.v(r7, q5), (!U3 || 1 & n8) && main6.v(w6, t8[0]), (!U3 || 2 & n8) && main6.z(i7, "color", t8[1].userColor);
        const l8 = {};
        if (2 & n8 && (l8.context = t8[1].note), P4.$set(l8), 2 & n8) {
          let e9;
          for (A5 = t8[1].tags, e9 = 0; e9 < A5.length; e9 += 1) {
            const l9 = rt(t8, A5, e9);
            D5[e9] ? D5[e9].p(l9, n8) : (D5[e9] = at(l9), D5[e9].c(), D5[e9].m(B4, null));
          }
          for (; e9 < D5.length; e9 += 1)
            D5[e9].d(1);
          D5.length = A5.length;
        }
        if (4 & n8) {
          let e9;
          for (G4 = ["tw", "fb", "in"], e9 = 0; e9 < 3; e9 += 1) {
            const l9 = st(t8, G4, e9);
            Y4[e9] ? Y4[e9].p(l9, n8) : (Y4[e9] = it(l9), Y4[e9].c(), Y4[e9].m(L3, R3));
          }
          for (; e9 < 3; e9 += 1)
            Y4[e9].d(1);
        }
        t8[2].etc.length > 0 ? F5 ? F5.p(t8, n8) : (F5 = mt(t8), F5.c(), F5.m(L3, null)) : F5 && (F5.d(1), F5 = null);
      }, i(t8) {
        U3 || (main6.t(P4.$$.fragment, t8), U3 = true);
      }, o(t8) {
        main6.f(P4.$$.fragment, t8), U3 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), t8 && main6.h(l7), t8 && main6.h(c7), t8 && main6.h(i7), t8 && main6.h(_4), main6.g(P4, t8), t8 && main6.h(T5), t8 && main6.h(S5), t8 && main6.h(I3), t8 && main6.h(B4), main6.C(D5, t8), t8 && main6.h(H3), t8 && main6.h(L3), main6.C(Y4, t8), F5 && F5.d(), E4 = false, M3();
      }};
    }
    function at(t7) {
      let e8, n7, l7, r7 = t7[11] + "";
      return {c() {
        e8 = main6.e("li"), n7 = main6.j(r7), l7 = main6.a(), main6.z(e8, "color", t7[1].userColor), main6.b(e8, "class", "svelte-57pkxz");
      }, m(t8, r8) {
        main6.d(t8, e8, r8), main6.k(e8, n7), main6.k(e8, l7);
      }, p(t8, l8) {
        2 & l8 && r7 !== (r7 = t8[11] + "") && main6.v(n7, r7), 2 & l8 && main6.z(e8, "color", t8[1].userColor);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function ut(t7) {
      let e8, n7, l7;
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("a"), main6.b(n7, "href", l7 = t7[2][t7[6]]), main6.b(n7, "target", "_blank"), main6.z(n7, "background-image", "url(https://allius-images.s3.ap-northeast-2.amazonaws.com/assets/sns-" + t7[6] + ".png)"), main6.b(n7, "class", "svelte-57pkxz"), main6.b(e8, "class", main6.G(t7[6]) + " svelte-57pkxz");
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7);
      }, p(t8, e9) {
        4 & e9 && l7 !== (l7 = t8[2][t8[6]]) && main6.b(n7, "href", l7);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function it(t7) {
      let e8, n7 = t7[2][t7[6]] && ut(t7);
      return {c() {
        n7 && n7.c(), e8 = main6.p();
      }, m(t8, l7) {
        n7 && n7.m(t8, l7), main6.d(t8, e8, l7);
      }, p(t8, l7) {
        t8[2][t8[6]] ? n7 ? n7.p(t8, l7) : (n7 = ut(t8), n7.c(), n7.m(e8.parentNode, e8)) : n7 && (n7.d(1), n7 = null);
      }, d(t8) {
        n7 && n7.d(t8), t8 && main6.h(e8);
      }};
    }
    function mt(t7) {
      let e8, n7 = t7[2].etc, r7 = [];
      for (let e9 = 0; e9 < n7.length; e9 += 1)
        r7[e9] = ft(lt(t7, n7, e9));
      return {c() {
        for (let t8 = 0; t8 < r7.length; t8 += 1)
          r7[t8].c();
        e8 = main6.p();
      }, m(t8, n8) {
        for (let e9 = 0; e9 < r7.length; e9 += 1)
          r7[e9].m(t8, n8);
        main6.d(t8, e8, n8);
      }, p(t8, l7) {
        if (4 & l7) {
          let s7;
          for (n7 = t8[2].etc, s7 = 0; s7 < n7.length; s7 += 1) {
            const o7 = lt(t8, n7, s7);
            r7[s7] ? r7[s7].p(o7, l7) : (r7[s7] = ft(o7), r7[s7].c(), r7[s7].m(e8.parentNode, e8));
          }
          for (; s7 < r7.length; s7 += 1)
            r7[s7].d(1);
          r7.length = n7.length;
        }
      }, d(t8) {
        main6.C(r7, t8), t8 && main6.h(e8);
      }};
    }
    function ft(t7) {
      let e8, n7, l7, r7;
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("a"), r7 = main6.a(), main6.b(n7, "href", l7 = t7[6]), main6.z(n7, "background-image", "url(https://allius-images.s3.ap-northeast-2.amazonaws.com/assets/sns-etc.png)"), main6.b(n7, "class", "svelte-57pkxz"), main6.b(e8, "class", "etc svelte-57pkxz");
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7), main6.k(e8, r7);
      }, p(t8, e9) {
        4 & e9 && l7 !== (l7 = t8[6]) && main6.b(n7, "href", l7);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function pt(t7) {
      let e8, n7, l7, i7;
      const f7 = [ct, ot], g6 = [];
      function d6(t8, e9) {
        return t8[1] ? 0 : 1;
      }
      return n7 = d6(t7), l7 = g6[n7] = f7[n7](t7), {c() {
        e8 = main6.e("div"), l7.c(), main6.b(e8, "class", "user-profile-wrapper svelte-57pkxz");
      }, m(t8, l8) {
        main6.d(t8, e8, l8), g6[n7].m(e8, null), i7 = true;
      }, p(t8, [s7]) {
        let u6 = n7;
        n7 = d6(t8), n7 === u6 ? g6[n7].p(t8, s7) : (main6.q(), main6.f(g6[u6], 1, 1, () => {
          g6[u6] = null;
        }), main6.r(), l7 = g6[n7], l7 ? l7.p(t8, s7) : (l7 = g6[n7] = f7[n7](t8), l7.c()), main6.t(l7, 1), l7.m(e8, null));
      }, i(t8) {
        i7 || (main6.t(l7), i7 = true);
      }, o(t8) {
        main6.f(l7), i7 = false;
      }, d(t8) {
        t8 && main6.h(e8), g6[n7].d();
      }};
    }
    function gt(t7, e8, n7) {
      let {nickname: l7} = e8, {userProfile: s7} = e8, r7 = {tw: "", fb: "", in: "", etc: []};
      const o7 = () => {
        let t8 = document.createElement("textarea");
        document.body.appendChild(t8), t8.value = `http://dev-public.allius.io/@${l7}`, t8.select(), document.execCommand("copy"), document.body.removeChild(t8);
      };
      main6.o(() => {
        s7 && ((t8) => {
          for (let e9 = 0; e9 < t8.length; e9++)
            t8[e9][0] !== "h" && (t8[e9] = "https://" + t8[e9]), t8[e9].match("twitter") ? n7(2, r7.tw = t8[e9], r7) : t8[e9].match("facebook") ? n7(2, r7.fb = t8[e9], r7) : t8[e9].match("instagram") ? n7(2, r7.in = t8[e9], r7) : r7.etc.push(t8[e9]);
        })(s7.sns);
      });
      return t7.$$set = (t8) => {
        "nickname" in t8 && n7(0, l7 = t8.nickname), "userProfile" in t8 && n7(1, s7 = t8.userProfile);
      }, [l7, s7, r7, o7, () => o7()];
    }
    class dt extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, gt, pt, main6.s, {nickname: 0, userProfile: 1});
      }
    }
    function $t(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[11] = e8[n7], l7;
    }
    function ht(t7) {
      let e8, n7;
      return e8 = new oe({}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p: main6.n, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function wt(t7) {
      let e8, n7, l7, r7, c7, i7, f7, g6, $5, h7;
      return e8 = new ee({props: {className: "section-top", $$slots: {default: [vt]}, $$scope: {ctx: t7}}}), l7 = new ee({props: {$$slots: {default: [xt]}, $$scope: {ctx: t7}}}), c7 = new ee({props: {$$slots: {default: [jt]}, $$scope: {ctx: t7}}}), $5 = new ee({props: {$$slots: {default: [zt]}, $$scope: {ctx: t7}}}), {c() {
        main6.c(e8.$$.fragment), n7 = main6.a(), main6.c(l7.$$.fragment), r7 = main6.a(), main6.c(c7.$$.fragment), i7 = main6.a(), f7 = main6.e("div"), f7.innerHTML = '<div class="left svelte-r7wn9g"></div> \n        <div class="right svelte-r7wn9g"></div>', g6 = main6.a(), main6.c($5.$$.fragment), main6.b(f7, "class", "line-seperator svelte-r7wn9g");
      }, m(t8, o7) {
        main6.m(e8, t8, o7), main6.d(t8, n7, o7), main6.m(l7, t8, o7), main6.d(t8, r7, o7), main6.m(c7, t8, o7), main6.d(t8, i7, o7), main6.d(t8, f7, o7), main6.d(t8, g6, o7), main6.m($5, t8, o7), h7 = true;
      }, p(t8, n8) {
        const s7 = {};
        16385 & n8 && (s7.$$scope = {dirty: n8, ctx: t8}), e8.$set(s7);
        const r8 = {};
        16385 & n8 && (r8.$$scope = {dirty: n8, ctx: t8}), l7.$set(r8);
        const o7 = {};
        16389 & n8 && (o7.$$scope = {dirty: n8, ctx: t8}), c7.$set(o7);
        const a7 = {};
        16384 & n8 && (a7.$$scope = {dirty: n8, ctx: t8}), $5.$set(a7);
      }, i(t8) {
        h7 || (main6.t(e8.$$.fragment, t8), main6.t(l7.$$.fragment, t8), main6.t(c7.$$.fragment, t8), main6.t($5.$$.fragment, t8), h7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), main6.f(l7.$$.fragment, t8), main6.f(c7.$$.fragment, t8), main6.f($5.$$.fragment, t8), h7 = false;
      }, d(t8) {
        main6.g(e8, t8), t8 && main6.h(n7), main6.g(l7, t8), t8 && main6.h(r7), main6.g(c7, t8), t8 && main6.h(i7), t8 && main6.h(f7), t8 && main6.h(g6), main6.g($5, t8);
      }};
    }
    function vt(t7) {
      let e8, n7;
      return e8 = new dt({props: {userProfile: t7[0], nickname: t7[3]}}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p(t8, n8) {
        const l7 = {};
        1 & n8 && (l7.userProfile = t8[0]), e8.$set(l7);
      }, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function xt(t7) {
      let e8, n7, l7, r7, c7, i7, $5, h7, w6, k6, C5 = t7[0].name + "";
      return w6 = new D3({props: {nickname: t7[3], userName: t7[0].name, userColor: t7[0].userColor}}), {c() {
        e8 = main6.e("div"), n7 = main6.e("strong"), n7.textContent = "Brand", l7 = main6.a(), r7 = main6.e("span"), c7 = main6.j("\uD074\uB9AD\uD558\uC5EC "), i7 = main6.j(C5), $5 = main6.j(" \uB2D8\uC758 \uBE0C\uB79C\uB4DC\uB97C \uB354 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uC138\uC694-!"), h7 = main6.a(), main6.c(w6.$$.fragment), main6.b(n7, "class", "svelte-r7wn9g"), main6.b(r7, "class", "svelte-r7wn9g"), main6.b(e8, "class", "title svelte-r7wn9g");
      }, m(t8, o7) {
        main6.d(t8, e8, o7), main6.k(e8, n7), main6.k(e8, l7), main6.k(e8, r7), main6.k(r7, c7), main6.k(r7, i7), main6.k(r7, $5), main6.d(t8, h7, o7), main6.m(w6, t8, o7), k6 = true;
      }, p(t8, e9) {
        (!k6 || 1 & e9) && C5 !== (C5 = t8[0].name + "") && main6.v(i7, C5);
        const n8 = {};
        1 & e9 && (n8.userName = t8[0].name), 1 & e9 && (n8.userColor = t8[0].userColor), w6.$set(n8);
      }, i(t8) {
        k6 || (main6.t(w6.$$.fragment, t8), k6 = true);
      }, o(t8) {
        main6.f(w6.$$.fragment, t8), k6 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(h7), main6.g(w6, t8);
      }};
    }
    function kt(t7) {
      let e8, n7;
      return e8 = new oe({}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p: main6.n, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function yt(t7) {
      let e8, n7, i7 = t7[2], m7 = [];
      for (let e9 = 0; e9 < i7.length; e9 += 1)
        m7[e9] = Ct($t(t7, i7, e9));
      const f7 = (t8) => main6.f(m7[t8], 1, 1, () => {
        m7[t8] = null;
      });
      return {c() {
        for (let t8 = 0; t8 < m7.length; t8 += 1)
          m7[t8].c();
        e8 = main6.p();
      }, m(t8, l7) {
        for (let e9 = 0; e9 < m7.length; e9 += 1)
          m7[e9].m(t8, l7);
        main6.d(t8, e8, l7), n7 = true;
      }, p(t8, n8) {
        if (13 & n8) {
          let l7;
          for (i7 = t8[2], l7 = 0; l7 < i7.length; l7 += 1) {
            const s7 = $t(t8, i7, l7);
            m7[l7] ? (m7[l7].p(s7, n8), main6.t(m7[l7], 1)) : (m7[l7] = Ct(s7), m7[l7].c(), main6.t(m7[l7], 1), m7[l7].m(e8.parentNode, e8));
          }
          for (main6.q(), l7 = i7.length; l7 < m7.length; l7 += 1)
            f7(l7);
          main6.r();
        }
      }, i(t8) {
        if (!n7) {
          for (let t9 = 0; t9 < i7.length; t9 += 1)
            main6.t(m7[t9]);
          n7 = true;
        }
      }, o(t8) {
        m7 = m7.filter(Boolean);
        for (let t9 = 0; t9 < m7.length; t9 += 1)
          main6.f(m7[t9]);
        n7 = false;
      }, d(t8) {
        main6.C(m7, t8), t8 && main6.h(e8);
      }};
    }
    function Ct(t7) {
      let e8, n7, l7, r7;
      return n7 = new re2({props: {nickname: t7[3], userColor: t7[0].userColor, projectTitle: t7[11].title, projectSummary: t7[11].summary, projectStatus: t7[11].status, projectId: t7[11].project_id}}), {c() {
        e8 = main6.e("li"), main6.c(n7.$$.fragment), l7 = main6.a(), main6.b(e8, "class", "svelte-r7wn9g");
      }, m(t8, o7) {
        main6.d(t8, e8, o7), main6.m(n7, e8, null), main6.k(e8, l7), r7 = true;
      }, p(t8, e9) {
        const l8 = {};
        1 & e9 && (l8.userColor = t8[0].userColor), 4 & e9 && (l8.projectTitle = t8[11].title), 4 & e9 && (l8.projectSummary = t8[11].summary), 4 & e9 && (l8.projectStatus = t8[11].status), 4 & e9 && (l8.projectId = t8[11].project_id), n7.$set(l8);
      }, i(t8) {
        r7 || (main6.t(n7.$$.fragment, t8), r7 = true);
      }, o(t8) {
        main6.f(n7.$$.fragment, t8), r7 = false;
      }, d(t8) {
        t8 && main6.h(e8), main6.g(n7);
      }};
    }
    function jt(t7) {
      let e8, n7, l7, i7, $5, h7, w6, v7, x5, k6, y5;
      const j6 = [yt, kt], z5 = [];
      function N4(t8, e9) {
        return t8[2] ? 0 : 1;
      }
      return x5 = N4(t7), k6 = z5[x5] = j6[x5](t7), {c() {
        e8 = main6.e("div"), n7 = main6.e("strong"), n7.textContent = "Recent Projects", l7 = main6.a(), i7 = main6.e("span"), $5 = main6.j("\u25A0 \uC9C4\uD589 \uC911"), h7 = main6.e("span"), h7.textContent = "\u25A0 \uC885\uB8CC", w6 = main6.a(), v7 = main6.e("ul"), k6.c(), main6.b(n7, "class", "svelte-r7wn9g"), main6.z(i7, "color", t7[0].userColor), main6.b(i7, "class", "ing svelte-r7wn9g"), main6.b(h7, "class", "end svelte-r7wn9g"), main6.b(e8, "class", "title svelte-r7wn9g"), main6.b(v7, "class", "project-list svelte-r7wn9g");
      }, m(t8, r7) {
        main6.d(t8, e8, r7), main6.k(e8, n7), main6.k(e8, l7), main6.k(e8, i7), main6.k(i7, $5), main6.k(e8, h7), main6.d(t8, w6, r7), main6.d(t8, v7, r7), z5[x5].m(v7, null), y5 = true;
      }, p(t8, e9) {
        (!y5 || 1 & e9) && main6.z(i7, "color", t8[0].userColor);
        let n8 = x5;
        x5 = N4(t8), x5 === n8 ? z5[x5].p(t8, e9) : (main6.q(), main6.f(z5[n8], 1, 1, () => {
          z5[n8] = null;
        }), main6.r(), k6 = z5[x5], k6 ? k6.p(t8, e9) : (k6 = z5[x5] = j6[x5](t8), k6.c()), main6.t(k6, 1), k6.m(v7, null));
      }, i(t8) {
        y5 || (main6.t(k6), y5 = true);
      }, o(t8) {
        main6.f(k6), y5 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(w6), t8 && main6.h(v7), z5[x5].d();
      }};
    }
    function zt(t7) {
      let e8, n7, l7;
      return {c() {
        e8 = main6.e("a"), e8.textContent = "Make Yours!", n7 = main6.a(), l7 = main6.e("p"), l7.textContent = "\xA9 realwesen, Inc. All Rights Reserved.", main6.b(e8, "class", "join svelte-r7wn9g"), main6.b(e8, "href", "https://allius.io/desk"), main6.b(l7, "class", "copyright svelte-r7wn9g");
      }, m(t8, r7) {
        main6.d(t8, e8, r7), main6.d(t8, n7, r7), main6.d(t8, l7, r7);
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), t8 && main6.h(l7);
      }};
    }
    function Nt(t7) {
      let e8, n7, i7, f7, $5, h7, w6, k6, C5, j6, z5, N4, b5, _4;
      document.title = e8 = t7[1].name, C5 = new g({});
      const P4 = [wt, ht], T5 = [];
      function S5(t8, e9) {
        return t8[0] ? 0 : 1;
      }
      return z5 = S5(t7), N4 = T5[z5] = P4[z5](t7), {c() {
        n7 = main6.e("meta"), f7 = main6.e("meta"), h7 = main6.e("meta"), k6 = main6.a(), main6.c(C5.$$.fragment), j6 = main6.a(), N4.c(), b5 = main6.p(), main6.b(n7, "property", "og:title"), main6.b(n7, "content", i7 = t7[1].name), main6.b(n7, "class", "svelte-r7wn9g"), main6.b(f7, "property", "og:image"), main6.b(f7, "content", $5 = t7[1].photo_url), main6.b(f7, "class", "svelte-r7wn9g"), main6.b(h7, "property", "og:description"), main6.b(h7, "content", w6 = t7[1].note), main6.b(h7, "class", "svelte-r7wn9g");
      }, m(t8, e9) {
        main6.k(document.head, n7), main6.k(document.head, f7), main6.k(document.head, h7), main6.d(t8, k6, e9), main6.m(C5, t8, e9), main6.d(t8, j6, e9), T5[z5].m(t8, e9), main6.d(t8, b5, e9), _4 = true;
      }, p(t8, [l7]) {
        (!_4 || 2 & l7) && e8 !== (e8 = t8[1].name) && (document.title = e8), (!_4 || 2 & l7 && i7 !== (i7 = t8[1].name)) && main6.b(n7, "content", i7), (!_4 || 2 & l7 && $5 !== ($5 = t8[1].photo_url)) && main6.b(f7, "content", $5), (!_4 || 2 & l7 && w6 !== (w6 = t8[1].note)) && main6.b(h7, "content", w6);
        let s7 = z5;
        z5 = S5(t8), z5 === s7 ? T5[z5].p(t8, l7) : (main6.q(), main6.f(T5[s7], 1, 1, () => {
          T5[s7] = null;
        }), main6.r(), N4 = T5[z5], N4 ? N4.p(t8, l7) : (N4 = T5[z5] = P4[z5](t8), N4.c()), main6.t(N4, 1), N4.m(b5.parentNode, b5));
      }, i(t8) {
        _4 || (main6.t(C5.$$.fragment, t8), main6.t(N4), _4 = true);
      }, o(t8) {
        main6.f(C5.$$.fragment, t8), main6.f(N4), _4 = false;
      }, d(t8) {
        main6.h(n7), main6.h(f7), main6.h(h7), t8 && main6.h(k6), main6.g(C5, t8), t8 && main6.h(j6), T5[z5].d(t8), t8 && main6.h(b5);
      }};
    }
    function bt(t7, e8, n7) {
      let l7, s7, r7, o7;
      main6.l(t7, main6.w, (t8) => n7(4, l7 = t8)), main6.l(t7, main6.x, (t8) => n7(5, s7 = t8)), main6.l(t7, main6.u, (t8) => n7(6, r7 = t8)), main6.l(t7, main6.y, (t8) => n7(7, o7 = t8));
      let c7, a7, u6 = l7.userId.slice(1), i7 = {};
      return main6.o(() => {
        (async () => {
          try {
            const t8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getUserBasicInfo?nickname=${u6}`});
            n7(1, i7 = await t8.data), o7();
          } catch (t8) {
            console.log("\uC0AC\uC6A9\uC790 \uC815\uBCF4 \uAC00\uC838\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. = " + u6), s7(r7("/_fallback"));
          }
        })(), (async () => {
          try {
            const t8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getUserBasicInfo?nickname=${u6}`});
            n7(0, c7 = await t8.data);
          } catch (t8) {
            console.log("\uC0AC\uC6A9\uC790 \uC815\uBCF4 \uAC00\uC838\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. = " + u6), s7(r7("/_fallback"));
          } finally {
            n7(0, c7.userColor = "#1ecce4", c7);
          }
        })(), (async () => {
          try {
            const t8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getProjectRecent5?nickname=${u6}`});
            n7(2, a7 = await t8.data.project_list);
          } catch (t8) {
            t8.response && t8.reponse.status === 400 && s7(r7("/_fallback"));
          }
        })();
      }), [c7, i7, a7, u6];
    }
    class index_3f9a02b5_default extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, bt, Nt, main6.s, {});
      }
    }
  });

  // ../../../../지울꺼/allius-routify/dist/build/index-40d17569.js
  var require_index_40d17569 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_40d17569_default
    });
    const main6 = __toModule(require_main());
    function O3(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[23] = e8[n7], l7;
    }
    function A4(t7) {
      let e8, n7;
      return e8 = new oe({}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p: main6.n, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function G3(t7) {
      let e8, n7, l7, o7, a7, u6 = t7[0], x5 = [];
      for (let e9 = 0; e9 < u6.length; e9 += 1)
        x5[e9] = K3(O3(t7, u6, e9));
      const v7 = (t8) => main6.f(x5[t8], 1, 1, () => {
        x5[t8] = null;
      });
      return {c() {
        e8 = main6.e("ul");
        for (let t8 = 0; t8 < x5.length; t8 += 1)
          x5[t8].c();
        main6.b(e8, "class", "svelte-xxirip"), main6.A(() => t7[13].call(e8));
      }, m(s7, r7) {
        main6.d(s7, e8, r7);
        for (let t8 = 0; t8 < x5.length; t8 += 1)
          x5[t8].m(e8, null);
        t7[12](e8), n7 = main6.B(e8, t7[13].bind(e8)), l7 = true, o7 || (a7 = main6.H(e8, "scroll", t7[14]), o7 = true);
      }, p(t8, n8) {
        if (49 & n8) {
          let l8;
          for (u6 = t8[0], l8 = 0; l8 < u6.length; l8 += 1) {
            const s7 = O3(t8, u6, l8);
            x5[l8] ? (x5[l8].p(s7, n8), main6.t(x5[l8], 1)) : (x5[l8] = K3(s7), x5[l8].c(), main6.t(x5[l8], 1), x5[l8].m(e8, null));
          }
          for (main6.q(), l8 = u6.length; l8 < x5.length; l8 += 1)
            v7(l8);
          main6.r();
        }
      }, i(t8) {
        if (!l7) {
          for (let t9 = 0; t9 < u6.length; t9 += 1)
            main6.t(x5[t9]);
          l7 = true;
        }
      }, o(t8) {
        x5 = x5.filter(Boolean);
        for (let t9 = 0; t9 < x5.length; t9 += 1)
          main6.f(x5[t9]);
        l7 = false;
      }, d(l8) {
        l8 && main6.h(e8), main6.C(x5, l8), t7[12](null), n7(), o7 = false, a7();
      }};
    }
    function K3(t7) {
      let e8, n7, l7, u6, f7, m7, x5, v7, k6, b5, w6, y5, W4, j6 = t7[23].name + "", z5 = t7[23].description + "";
      function M3() {
        return t7[11](t7[23]);
      }
      return f7 = new F2({props: {tagType: "h3", className: "br-title", context: t7[23].title}}), {c() {
        e8 = main6.e("li"), n7 = main6.e("span"), l7 = main6.j(j6), u6 = main6.a(), main6.c(f7.$$.fragment), m7 = main6.a(), x5 = main6.e("p"), v7 = main6.j(z5), k6 = main6.a(), main6.b(n7, "class", "svelte-xxirip"), main6.b(x5, "class", "svelte-xxirip"), main6.b(e8, "class", "svelte-xxirip"), main6.A(() => t7[10].call(e8));
      }, m(s7, o7) {
        main6.d(s7, e8, o7), main6.k(e8, n7), main6.k(n7, l7), main6.k(e8, u6), main6.m(f7, e8, null), main6.k(e8, m7), main6.k(e8, x5), main6.k(x5, v7), main6.k(e8, k6), b5 = main6.B(e8, t7[10].bind(e8)), w6 = true, y5 || (W4 = main6.H(e8, "click", M3), y5 = true);
      }, p(e9, n8) {
        t7 = e9, (!w6 || 1 & n8) && j6 !== (j6 = t7[23].name + "") && main6.v(l7, j6);
        const s7 = {};
        1 & n8 && (s7.context = t7[23].title), f7.$set(s7), (!w6 || 1 & n8) && z5 !== (z5 = t7[23].description + "") && main6.v(v7, z5);
      }, i(t8) {
        w6 || (main6.t(f7.$$.fragment, t8), w6 = true);
      }, o(t8) {
        main6.f(f7.$$.fragment, t8), w6 = false;
      }, d(t8) {
        t8 && main6.h(e8), main6.g(f7), b5(), y5 = false, W4();
      }};
    }
    function U3(t7) {
      let e8, n7, v7, k6, b5, w6, y5, _4, C5, W4, T5, S5;
      const B5 = t7[9].default, j6 = main6.D(B5, t7, t7[8], null), z5 = [G3, A4], M3 = [];
      function N4(t8, e9) {
        return t8[0] ? 0 : 1;
      }
      return v7 = N4(t7), k6 = M3[v7] = z5[v7](t7), {c() {
        e8 = main6.e("div"), j6 && j6.c(), n7 = main6.a(), k6.c(), b5 = main6.a(), w6 = main6.e("div"), y5 = main6.e("button"), y5.textContent = "\u1438", _4 = main6.e("button"), _4.textContent = "\u1433", main6.b(y5, "class", "svelte-xxirip"), main6.b(_4, "class", "svelte-xxirip"), main6.b(w6, "class", "arrow-btns svelte-xxirip"), main6.b(e8, "class", "brand-story-wrapper svelte-xxirip"), main6.A(() => t7[17].call(e8));
      }, m(l7, s7) {
        main6.d(l7, e8, s7), j6 && j6.m(e8, null), main6.k(e8, n7), M3[v7].m(e8, null), main6.k(e8, b5), main6.k(e8, w6), main6.k(w6, y5), main6.k(w6, _4), C5 = main6.B(e8, t7[17].bind(e8)), W4 = true, T5 || (S5 = [main6.H(y5, "click", t7[15]), main6.H(_4, "click", t7[16])], T5 = true);
      }, p(t8, [n8]) {
        j6 && j6.p && 256 & n8 && main6.E(j6, B5, t8, t8[8], n8, null, null);
        let l7 = v7;
        v7 = N4(t8), v7 === l7 ? M3[v7].p(t8, n8) : (main6.q(), main6.f(M3[l7], 1, 1, () => {
          M3[l7] = null;
        }), main6.r(), k6 = M3[v7], k6 ? k6.p(t8, n8) : (k6 = M3[v7] = z5[v7](t8), k6.c()), main6.t(k6, 1), k6.m(e8, b5));
      }, i(t8) {
        W4 || (main6.t(j6, t8), main6.t(k6), W4 = true);
      }, o(t8) {
        main6.f(j6, t8), main6.f(k6), W4 = false;
      }, d(t8) {
        t8 && main6.h(e8), j6 && j6.d(t8), M3[v7].d(), C5(), T5 = false, main6.J(S5);
      }};
    }
    function Q3(t7, e8, n7) {
      let l7, s7;
      main6.l(t7, main6.x, (t8) => n7(20, l7 = t8)), main6.l(t7, main6.u, (t8) => n7(21, s7 = t8));
      let {$$slots: o7 = {}, $$scope: r7} = e8;
      const i7 = (t8, e9) => 0.5 - Math.random();
      let c7, a7, d6, p6, u6, f7 = 0, $5 = false;
      function m7(t8) {
        l7(s7(`/@${t8.slice(19)}`));
      }
      const g6 = (t8) => {
        t8 ? a7.scrollTo(f7 + u6, 0) : a7.scrollTo(f7 - u6, 0);
      }, h7 = () => {
        f7 = a7.scrollLeft;
      };
      main6.o(async () => {
        f7 = 0;
        try {
          const t8 = await Q({method: "get", url: "https://dkjss7qyb8.execute-api.ap-northeast-2.amazonaws.com/dev/page-management/brand-stories/list/landing"});
          n7(0, c7 = await t8.data.brand_stories_list.sort(i7)), d6 > p6 && ($5 = true);
        } catch (t8) {
          l7(s7("/_fallback"));
        }
      });
      return t7.$$set = (t8) => {
        "$$scope" in t8 && n7(8, r7 = t8.$$scope);
      }, [c7, a7, d6, p6, u6, m7, g6, h7, r7, o7, function() {
        u6 = this.clientWidth, n7(4, u6);
      }, (t8) => m7(t8.link_url), function(t8) {
        main6.F[t8 ? "unshift" : "push"](() => {
          a7 = t8, n7(1, a7);
        });
      }, function() {
        d6 = this.clientWidth, n7(2, d6);
      }, () => h7(), () => g6(false), () => g6(true), function() {
        p6 = this.clientWidth, n7(3, p6);
      }];
    }
    class R3 extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, Q3, U3, main6.s, {});
      }
    }
    function V3(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[7] = e8[n7], l7[9] = n7, l7;
    }
    function X3(t7) {
      let e8, n7, l7, i7, d6, p6, u6, f7, $5, m7 = t7[9] + 1 + "", g6 = t7[7].text + "";
      return {c() {
        e8 = main6.e("a"), n7 = main6.e("p"), l7 = main6.j("0"), i7 = main6.j(m7), d6 = main6.a(), p6 = main6.e("span"), p6.textContent = "coming soon", u6 = main6.a(), f7 = main6.e("span"), $5 = main6.j(g6), main6.b(n7, "class", "svelte-1ur09ct"), main6.b(p6, "class", "coming svelte-1ur09ct"), main6.b(f7, "class", "svelte-1ur09ct"), main6.b(e8, "href", "javascript:void(0);"), main6.b(e8, "class", "not-opened svelte-1ur09ct");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.k(e8, n7), main6.k(n7, l7), main6.k(n7, i7), main6.k(e8, d6), main6.k(e8, p6), main6.k(e8, u6), main6.k(e8, f7), main6.k(f7, $5);
      }, p(t8, e9) {
        1 & e9 && g6 !== (g6 = t8[7].text + "") && main6.v($5, g6);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function Z3(t7) {
      let e8, n7, l7, i7, d6, u6, f7, $5, m7, g6, x5 = t7[9] + 1 + "", v7 = t7[7].text + "";
      function k6() {
        return t7[4](t7[9]);
      }
      return {c() {
        e8 = main6.e("a"), n7 = main6.e("p"), l7 = main6.j("0"), i7 = main6.j(x5), d6 = main6.a(), u6 = main6.e("span"), f7 = main6.j(v7), main6.b(n7, "class", "svelte-1ur09ct"), main6.b(u6, "class", "svelte-1ur09ct"), main6.b(e8, "href", $5 = t7[7].link), main6.b(e8, "target", "_blank"), main6.b(e8, "class", "svelte-1ur09ct");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.k(e8, n7), main6.k(n7, l7), main6.k(n7, i7), main6.k(e8, d6), main6.k(e8, u6), main6.k(u6, f7), m7 || (g6 = main6.H(e8, "click", k6), m7 = true);
      }, p(n8, l8) {
        t7 = n8, 1 & l8 && v7 !== (v7 = t7[7].text + "") && main6.v(f7, v7), 1 & l8 && $5 !== ($5 = t7[7].link) && main6.b(e8, "href", $5);
      }, d(t8) {
        t8 && main6.h(e8), m7 = false, g6();
      }};
    }
    function tt(t7) {
      let e8, n7, l7;
      function i7(t8, e9) {
        return t8[7].public ? Z3 : X3;
      }
      let d6 = i7(t7), p6 = d6(t7);
      return {c() {
        e8 = main6.e("li"), p6.c(), n7 = main6.a(), main6.b(e8, "class", l7 = main6.G(t7[7].status ? "finished" : "") + " svelte-1ur09ct");
      }, m(t8, l8) {
        main6.d(t8, e8, l8), p6.m(e8, null), main6.k(e8, n7);
      }, p(t8, s7) {
        d6 === (d6 = i7(t8)) && p6 ? p6.p(t8, s7) : (p6.d(1), p6 = d6(t8), p6 && (p6.c(), p6.m(e8, n7))), 1 & s7 && l7 !== (l7 = main6.G(t8[7].status ? "finished" : "") + " svelte-1ur09ct") && main6.b(e8, "class", l7);
      }, d(t8) {
        t8 && main6.h(e8), p6.d();
      }};
    }
    function et(t7) {
      let e8, n7, i7, d6;
      const p6 = t7[3].default, f7 = main6.D(p6, t7, t7[2], null);
      let m7 = t7[0], x5 = [];
      for (let e9 = 0; e9 < m7.length; e9 += 1)
        x5[e9] = tt(V3(t7, m7, e9));
      return {c() {
        e8 = main6.e("div"), f7 && f7.c(), n7 = main6.a(), i7 = main6.e("ul");
        for (let t8 = 0; t8 < x5.length; t8 += 1)
          x5[t8].c();
        main6.b(i7, "class", "svelte-1ur09ct"), main6.b(e8, "class", "tutorial-wrapper svelte-1ur09ct");
      }, m(t8, l7) {
        main6.d(t8, e8, l7), f7 && f7.m(e8, null), main6.k(e8, n7), main6.k(e8, i7);
        for (let t9 = 0; t9 < x5.length; t9 += 1)
          x5[t9].m(i7, null);
        d6 = true;
      }, p(t8, [e9]) {
        if (f7 && f7.p && 4 & e9 && main6.E(f7, p6, t8, t8[2], e9, null, null), 3 & e9) {
          let n8;
          for (m7 = t8[0], n8 = 0; n8 < m7.length; n8 += 1) {
            const l7 = V3(t8, m7, n8);
            x5[n8] ? x5[n8].p(l7, e9) : (x5[n8] = tt(l7), x5[n8].c(), x5[n8].m(i7, null));
          }
          for (; n8 < x5.length; n8 += 1)
            x5[n8].d(1);
          x5.length = m7.length;
        }
      }, i(t8) {
        d6 || (main6.t(f7, t8), d6 = true);
      }, o(t8) {
        main6.f(f7, t8), d6 = false;
      }, d(t8) {
        t8 && main6.h(e8), f7 && f7.d(t8), main6.C(x5, t8);
      }};
    }
    function nt(t7, e8, n7) {
      let l7, {$$slots: s7 = {}, $$scope: o7} = e8, r7 = [{text: "allius\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4", finished: false, link: "https://blog.allius.io/2020/01/02/work-become-contents", public: true}, {text: "\uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uAE30", finished: false, link: "https://youtube.com", public: false}, {text: "\uB098\uC758 \uBE0C\uB79C\uB4DC \uAD00\uB9AC\uD558\uAE30", finished: false, link: "https://youtube.com", public: false}, {text: "\uD504\uB85C\uD3F4\uB9AC\uC624\uB85C \uC790\uB791\uD558\uAE30", finished: false, link: "https://youtube.com", public: false}];
      function i7(t8) {
        l7[t8] = true, localStorage.setItem("tutorial_stage", JSON.stringify(l7)), c7(l7);
      }
      function c7(t8) {
        for (let e9 = 0; e9 < t8.length; e9++)
          n7(0, r7[e9].status = t8[e9], r7);
      }
      main6.o(() => {
        l7 = JSON.parse(localStorage.getItem("tutorial_stage")), l7 ? c7(l7) : l7 = [false, false, false, false];
      });
      return t7.$$set = (t8) => {
        "$$scope" in t8 && n7(2, o7 = t8.$$scope);
      }, [r7, i7, o7, s7, (t8) => i7(t8)];
    }
    class lt extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, nt, et, main6.s, {});
      }
    }
    function st(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[7] = e8[n7], l7[9] = n7, l7;
    }
    function ot(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[7] = e8[n7], l7[9] = n7, l7;
    }
    function rt(t7) {
      let e8, n7;
      return e8 = new oe({}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p: main6.n, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function it(t7) {
      let e8, n7, l7, i7, d6, p6, u6, x5, v7, k6;
      const b5 = [at, ct], w6 = [];
      function y5(t8, e9) {
        return t8[0].upcoming_events[0].id ? 0 : 1;
      }
      i7 = y5(t7), d6 = w6[i7] = b5[i7](t7);
      let _4 = t7[0].finished_events, C5 = [];
      for (let e9 = 0; e9 < _4.length; e9 += 1)
        C5[e9] = mt(st(t7, _4, e9));
      const W4 = (t8) => main6.f(C5[t8], 1, 1, () => {
        C5[t8] = null;
      });
      return {c() {
        e8 = main6.e("ul"), n7 = main6.e("li"), n7.innerHTML = '<p class="svelte-4242kx">Upcoming</p>', l7 = main6.a(), d6.c(), p6 = main6.a(), u6 = main6.e("ul"), x5 = main6.e("li"), x5.innerHTML = '<p class="svelte-4242kx">We did</p>', v7 = main6.a();
        for (let t8 = 0; t8 < C5.length; t8 += 1)
          C5[t8].c();
        main6.b(n7, "class", "list-name svelte-4242kx"), main6.b(e8, "class", "upcoming-events svelte-4242kx"), main6.b(x5, "class", "list-name svelte-4242kx"), main6.b(u6, "class", "finished-events svelte-4242kx");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.k(e8, n7), main6.k(e8, l7), w6[i7].m(e8, null), main6.d(t8, p6, s7), main6.d(t8, u6, s7), main6.k(u6, x5), main6.k(u6, v7);
        for (let t9 = 0; t9 < C5.length; t9 += 1)
          C5[t9].m(u6, null);
        k6 = true;
      }, p(t8, n8) {
        let l8 = i7;
        if (i7 = y5(t8), i7 === l8 ? w6[i7].p(t8, n8) : (main6.q(), main6.f(w6[l8], 1, 1, () => {
          w6[l8] = null;
        }), main6.r(), d6 = w6[i7], d6 ? d6.p(t8, n8) : (d6 = w6[i7] = b5[i7](t8), d6.c()), main6.t(d6, 1), d6.m(e8, null)), 3 & n8) {
          let e9;
          for (_4 = t8[0].finished_events, e9 = 0; e9 < _4.length; e9 += 1) {
            const l9 = st(t8, _4, e9);
            C5[e9] ? (C5[e9].p(l9, n8), main6.t(C5[e9], 1)) : (C5[e9] = mt(l9), C5[e9].c(), main6.t(C5[e9], 1), C5[e9].m(u6, null));
          }
          for (main6.q(), e9 = _4.length; e9 < C5.length; e9 += 1)
            W4(e9);
          main6.r();
        }
      }, i(t8) {
        if (!k6) {
          main6.t(d6);
          for (let t9 = 0; t9 < _4.length; t9 += 1)
            main6.t(C5[t9]);
          k6 = true;
        }
      }, o(t8) {
        main6.f(d6), C5 = C5.filter(Boolean);
        for (let t9 = 0; t9 < C5.length; t9 += 1)
          main6.f(C5[t9]);
        k6 = false;
      }, d(t8) {
        t8 && main6.h(e8), w6[i7].d(), t8 && main6.h(p6), t8 && main6.h(u6), main6.C(C5, t8);
      }};
    }
    function ct(t7) {
      let e8;
      return {c() {
        e8 = main6.e("li"), e8.innerHTML = '<p class="event-title svelte-4242kx">\uC774\uBCA4\uD2B8\uB97C \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.</p> \n                    <p class="event-date svelte-4242kx">coming soon</p>', main6.b(e8, "class", "list-item unselected svelte-4242kx");
      }, m(t8, n7) {
        main6.d(t8, e8, n7);
      }, p: main6.n, i: main6.n, o: main6.n, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function at(t7) {
      let e8, n7, l7 = t7[0].upcoming_events, s7 = [];
      for (let e9 = 0; e9 < l7.length; e9 += 1)
        s7[e9] = ut(ot(t7, l7, e9));
      const o7 = (t8) => main6.f(s7[t8], 1, 1, () => {
        s7[t8] = null;
      });
      return {c() {
        for (let t8 = 0; t8 < s7.length; t8 += 1)
          s7[t8].c();
        e8 = main6.p();
      }, m(t8, l8) {
        for (let e9 = 0; e9 < s7.length; e9 += 1)
          s7[e9].m(t8, l8);
        main6.d(t8, e8, l8), n7 = true;
      }, p(t8, n8) {
        if (3 & n8) {
          let r7;
          for (l7 = t8[0].upcoming_events, r7 = 0; r7 < l7.length; r7 += 1) {
            const o8 = ot(t8, l7, r7);
            s7[r7] ? (s7[r7].p(o8, n8), main6.t(s7[r7], 1)) : (s7[r7] = ut(o8), s7[r7].c(), main6.t(s7[r7], 1), s7[r7].m(e8.parentNode, e8));
          }
          for (main6.q(), r7 = l7.length; r7 < s7.length; r7 += 1)
            o7(r7);
          main6.r();
        }
      }, i(t8) {
        if (!n7) {
          for (let t9 = 0; t9 < l7.length; t9 += 1)
            main6.t(s7[t9]);
          n7 = true;
        }
      }, o(t8) {
        s7 = s7.filter(Boolean);
        for (let t9 = 0; t9 < s7.length; t9 += 1)
          main6.f(s7[t9]);
        n7 = false;
      }, d(t8) {
        main6.C(s7, t8), t8 && main6.h(e8);
      }};
    }
    function dt(t7) {
      let e8, n7, l7, d6, p6, u6, f7, $5 = t7[7].description + "", m7 = t7[7].link_url && pt(t7);
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("span"), l7 = main6.j($5), d6 = main6.a(), m7 && m7.c(), p6 = main6.a(), main6.b(n7, "class", "event-description svelte-4242kx"), main6.b(e8, "class", "selected svelte-4242kx");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.k(e8, n7), main6.k(n7, l7), main6.k(e8, d6), m7 && m7.m(e8, null), main6.k(e8, p6), f7 = true;
      }, p(t8, n8) {
        (!f7 || 1 & n8) && $5 !== ($5 = t8[7].description + "") && main6.v(l7, $5), t8[7].link_url ? m7 ? m7.p(t8, n8) : (m7 = pt(t8), m7.c(), m7.m(e8, p6)) : m7 && (m7.d(1), m7 = null);
      }, i(t8) {
        f7 || (main6.A(() => {
          u6 || (u6 = main6.I(e8, ne, {}, true)), u6.run(1);
        }), f7 = true);
      }, o(t8) {
        u6 || (u6 = main6.I(e8, ne, {}, false)), u6.run(0), f7 = false;
      }, d(t8) {
        t8 && main6.h(e8), m7 && m7.d(), t8 && u6 && u6.end();
      }};
    }
    function pt(t7) {
      let e8, n7, l7;
      return {c() {
        e8 = main6.e("a"), n7 = main6.j("\uBC14\uB85C\uAC00\uAE30"), main6.b(e8, "href", l7 = t7[7].link_url), main6.b(e8, "target", "_blank"), main6.b(e8, "class", "svelte-4242kx");
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7);
      }, p(t8, n8) {
        1 & n8 && l7 !== (l7 = t8[7].link_url) && main6.b(e8, "href", l7);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function ut(t7) {
      let e8, n7, l7, i7, d6, u6, x5, v7, k6, b5, w6, y5 = t7[7].title + "", _4 = `${t7[7].date.getFullYear()}\uB144 ${t7[7].date.getMonth() + 1}\uC6D4 ${t7[7].date.getDate()}\uC77C`;
      function C5() {
        return t7[4](t7[9]);
      }
      let W4 = t7[7].selected && dt(t7);
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("p"), l7 = main6.j(y5), i7 = main6.a(), d6 = main6.e("p"), u6 = main6.j(_4), x5 = main6.a(), W4 && W4.c(), v7 = main6.p(), main6.b(n7, "class", "event-title svelte-4242kx"), main6.b(d6, "class", "event-date svelte-4242kx"), main6.b(e8, "class", "list-item unselected svelte-4242kx");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.k(e8, n7), main6.k(n7, l7), main6.k(e8, i7), main6.k(e8, d6), main6.k(d6, u6), main6.d(t8, x5, s7), W4 && W4.m(t8, s7), main6.d(t8, v7, s7), k6 = true, b5 || (w6 = main6.H(e8, "click", C5), b5 = true);
      }, p(e9, n8) {
        t7 = e9, (!k6 || 1 & n8) && y5 !== (y5 = t7[7].title + "") && main6.v(l7, y5), (!k6 || 1 & n8) && _4 !== (_4 = `${t7[7].date.getFullYear()}\uB144 ${t7[7].date.getMonth() + 1}\uC6D4 ${t7[7].date.getDate()}\uC77C`) && main6.v(u6, _4), t7[7].selected ? W4 ? (W4.p(t7, n8), 1 & n8 && main6.t(W4, 1)) : (W4 = dt(t7), W4.c(), main6.t(W4, 1), W4.m(v7.parentNode, v7)) : W4 && (main6.q(), main6.f(W4, 1, 1, () => {
          W4 = null;
        }), main6.r());
      }, i(t8) {
        k6 || (main6.t(W4), k6 = true);
      }, o(t8) {
        main6.f(W4), k6 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(x5), W4 && W4.d(t8), t8 && main6.h(v7), b5 = false, w6();
      }};
    }
    function ft(t7) {
      let e8, n7, l7, d6, p6, u6, f7, $5 = t7[7].description + "", m7 = t7[7].link_url && $t(t7);
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("span"), l7 = main6.j($5), d6 = main6.a(), m7 && m7.c(), p6 = main6.a(), main6.b(n7, "class", "event-description svelte-4242kx"), main6.b(e8, "class", "selected svelte-4242kx");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.k(e8, n7), main6.k(n7, l7), main6.k(e8, d6), m7 && m7.m(e8, null), main6.k(e8, p6), f7 = true;
      }, p(t8, n8) {
        (!f7 || 1 & n8) && $5 !== ($5 = t8[7].description + "") && main6.v(l7, $5), t8[7].link_url ? m7 ? m7.p(t8, n8) : (m7 = $t(t8), m7.c(), m7.m(e8, p6)) : m7 && (m7.d(1), m7 = null);
      }, i(t8) {
        f7 || (main6.A(() => {
          u6 || (u6 = main6.I(e8, ne, {}, true)), u6.run(1);
        }), f7 = true);
      }, o(t8) {
        u6 || (u6 = main6.I(e8, ne, {}, false)), u6.run(0), f7 = false;
      }, d(t8) {
        t8 && main6.h(e8), m7 && m7.d(), t8 && u6 && u6.end();
      }};
    }
    function $t(t7) {
      let e8, n7, l7;
      return {c() {
        e8 = main6.e("a"), n7 = main6.j("\uBC14\uB85C\uAC00\uAE30"), main6.b(e8, "href", l7 = t7[7].link_url), main6.b(e8, "target", "_blank"), main6.b(e8, "class", "svelte-4242kx");
      }, m(t8, l8) {
        main6.d(t8, e8, l8), main6.k(e8, n7);
      }, p(t8, n8) {
        1 & n8 && l7 !== (l7 = t8[7].link_url) && main6.b(e8, "href", l7);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function mt(t7) {
      let e8, n7, l7, i7, d6, u6, x5, v7, k6, b5, w6, y5 = t7[7].title + "", _4 = `${t7[7].date.getFullYear()}\uB144 ${t7[7].date.getMonth() + 1}\uC6D4 ${t7[7].date.getDate()}\uC77C`;
      function C5() {
        return t7[5](t7[9]);
      }
      let W4 = t7[7].selected && ft(t7);
      return {c() {
        e8 = main6.e("li"), n7 = main6.e("p"), l7 = main6.j(y5), i7 = main6.a(), d6 = main6.e("p"), u6 = main6.j(_4), x5 = main6.a(), W4 && W4.c(), v7 = main6.p(), main6.b(n7, "class", "event-title svelte-4242kx"), main6.b(d6, "class", "event-date svelte-4242kx"), main6.b(e8, "class", "list-item unselected svelte-4242kx");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.k(e8, n7), main6.k(n7, l7), main6.k(e8, i7), main6.k(e8, d6), main6.k(d6, u6), main6.d(t8, x5, s7), W4 && W4.m(t8, s7), main6.d(t8, v7, s7), k6 = true, b5 || (w6 = main6.H(e8, "click", C5), b5 = true);
      }, p(e9, n8) {
        t7 = e9, (!k6 || 1 & n8) && y5 !== (y5 = t7[7].title + "") && main6.v(l7, y5), (!k6 || 1 & n8) && _4 !== (_4 = `${t7[7].date.getFullYear()}\uB144 ${t7[7].date.getMonth() + 1}\uC6D4 ${t7[7].date.getDate()}\uC77C`) && main6.v(u6, _4), t7[7].selected ? W4 ? (W4.p(t7, n8), 1 & n8 && main6.t(W4, 1)) : (W4 = ft(t7), W4.c(), main6.t(W4, 1), W4.m(v7.parentNode, v7)) : W4 && (main6.q(), main6.f(W4, 1, 1, () => {
          W4 = null;
        }), main6.r());
      }, i(t8) {
        k6 || (main6.t(W4), k6 = true);
      }, o(t8) {
        main6.f(W4), k6 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(x5), W4 && W4.d(t8), t8 && main6.h(v7), b5 = false, w6();
      }};
    }
    function gt(t7) {
      let e8, n7, i7, d6, p6, x5;
      const v7 = t7[3].default, k6 = main6.D(v7, t7, t7[2], null), b5 = [it, rt], w6 = [];
      function y5(t8, e9) {
        return t8[0] ? 0 : 1;
      }
      return d6 = y5(t7), p6 = w6[d6] = b5[d6](t7), {c() {
        e8 = main6.e("div"), k6 && k6.c(), n7 = main6.a(), i7 = main6.e("div"), p6.c(), main6.b(i7, "class", "list-wrapper svelte-4242kx"), main6.b(e8, "class", "community-events-wrapper svelte-4242kx");
      }, m(t8, l7) {
        main6.d(t8, e8, l7), k6 && k6.m(e8, null), main6.k(e8, n7), main6.k(e8, i7), w6[d6].m(i7, null), x5 = true;
      }, p(t8, [e9]) {
        k6 && k6.p && 4 & e9 && main6.E(k6, v7, t8, t8[2], e9, null, null);
        let n8 = d6;
        d6 = y5(t8), d6 === n8 ? w6[d6].p(t8, e9) : (main6.q(), main6.f(w6[n8], 1, 1, () => {
          w6[n8] = null;
        }), main6.r(), p6 = w6[d6], p6 ? p6.p(t8, e9) : (p6 = w6[d6] = b5[d6](t8), p6.c()), main6.t(p6, 1), p6.m(i7, null));
      }, i(t8) {
        x5 || (main6.t(k6, t8), main6.t(p6), x5 = true);
      }, o(t8) {
        main6.f(k6, t8), main6.f(p6), x5 = false;
      }, d(t8) {
        t8 && main6.h(e8), k6 && k6.d(t8), w6[d6].d();
      }};
    }
    function ht(t7, e8, n7) {
      let l7, {$$slots: s7 = {}, $$scope: o7} = e8;
      const r7 = (t8, e9) => {
        n7(0, l7[t8][e9].selected = !l7[t8][e9].selected, l7);
      };
      main6.o(async () => {
        const t8 = await Q.get("https://dkjss7qyb8.execute-api.ap-northeast-2.amazonaws.com/dev/page-management/community-events/list/landing");
        for (let e9 in t8.data)
          t8.data[e9][0].id && t8.data[e9].forEach((t9) => {
            t9.date = new Date(t9.date), t9.selected = false;
          });
        n7(0, l7 = t8.data);
      });
      return t7.$$set = (t8) => {
        "$$scope" in t8 && n7(2, o7 = t8.$$scope);
      }, [l7, r7, o7, s7, (t8) => r7("upcoming_events", t8), (t8) => r7("finished_events", t8)];
    }
    class xt extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, ht, gt, main6.s, {});
      }
    }
    function vt(t7, e8, n7) {
      const l7 = t7.slice();
      return l7[11] = e8[n7], l7;
    }
    function kt(t7) {
      let e8, n7;
      return {c() {
        e8 = main6.e("p"), n7 = main6.j(t7[6]), main6.z(e8, "color", t7[7]), main6.z(e8, "padding", "0 " + t7[8] + "px"), main6.z(e8, "font-size", t7[9]), main6.b(e8, "class", "svelte-sxgv63");
      }, m(t8, l7) {
        main6.d(t8, e8, l7), main6.k(e8, n7);
      }, p(t8, l7) {
        64 & l7 && main6.v(n7, t8[6]), 128 & l7 && main6.z(e8, "color", t8[7]), 256 & l7 && main6.z(e8, "padding", "0 " + t8[8] + "px"), 512 & l7 && main6.z(e8, "font-size", t8[9]);
      }, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function bt(t7) {
      let e8, n7, l7, i7, d6, p6, u6 = t7[0] && t7[11] === 0 && kt(t7);
      return {c() {
        e8 = main6.e("div"), n7 = main6.e("div"), l7 = main6.a(), i7 = main6.e("div"), d6 = main6.a(), u6 && u6.c(), p6 = main6.p(), main6.b(n7, "class", "row-upper"), main6.z(n7, "height", t7[1] - t7[5] + "px"), main6.z(n7, "border-bottom", t7[5] + "px " + t7[3] + " " + t7[4]), main6.b(i7, "class", "row-lower"), main6.z(i7, "height", t7[2] + "px"), main6.b(e8, "class", "col svelte-sxgv63");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.k(e8, n7), main6.k(e8, l7), main6.k(e8, i7), main6.d(t8, d6, s7), u6 && u6.m(t8, s7), main6.d(t8, p6, s7);
      }, p(t8, e9) {
        34 & e9 && main6.z(n7, "height", t8[1] - t8[5] + "px"), 56 & e9 && main6.z(n7, "border-bottom", t8[5] + "px " + t8[3] + " " + t8[4]), 4 & e9 && main6.z(i7, "height", t8[2] + "px"), t8[0] && t8[11] === 0 ? u6 ? u6.p(t8, e9) : (u6 = kt(t8), u6.c(), u6.m(p6.parentNode, p6)) : u6 && (u6.d(1), u6 = null);
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(d6), u6 && u6.d(t8), t8 && main6.h(p6);
      }};
    }
    function wt(t7) {
      let e8, n7 = [0, 1], l7 = [];
      for (let e9 = 0; e9 < 2; e9 += 1)
        l7[e9] = bt(vt(t7, n7, e9));
      return {c() {
        e8 = main6.e("div");
        for (let t8 = 0; t8 < 2; t8 += 1)
          l7[t8].c();
        main6.b(e8, "class", "seperator-wrapper svelte-sxgv63"), main6.z(e8, "width", t7[10]);
      }, m(t8, n8) {
        main6.d(t8, e8, n8);
        for (let t9 = 0; t9 < 2; t9 += 1)
          l7[t9].m(e8, null);
      }, p(t8, [s7]) {
        if (1023 & s7) {
          let o7;
          for (n7 = [0, 1], o7 = 0; o7 < 2; o7 += 1) {
            const r7 = vt(t8, n7, o7);
            l7[o7] ? l7[o7].p(r7, s7) : (l7[o7] = bt(r7), l7[o7].c(), l7[o7].m(e8, null));
          }
          for (; o7 < 2; o7 += 1)
            l7[o7].d(1);
        }
        1024 & s7 && main6.z(e8, "width", t8[10]);
      }, i: main6.n, o: main6.n, d(t8) {
        t8 && main6.h(e8), main6.C(l7, t8);
      }};
    }
    function yt(t7, e8, n7) {
      let {typeText: l7 = false} = e8, {paddingTop: s7 = 20} = e8, {paddingBottom: o7 = 20} = e8, {borderStyle: r7 = "solid"} = e8, {borderColor: i7 = "#000000"} = e8, {borderWidth: c7 = 1} = e8, {text: a7 = ""} = e8, {fontColor: d6 = i7} = e8, {textPadding: p6 = "4px"} = e8, {fontSize: u6 = "1em"} = e8, {seperatorWidth: f7 = "100%"} = e8;
      return t7.$$set = (t8) => {
        "typeText" in t8 && n7(0, l7 = t8.typeText), "paddingTop" in t8 && n7(1, s7 = t8.paddingTop), "paddingBottom" in t8 && n7(2, o7 = t8.paddingBottom), "borderStyle" in t8 && n7(3, r7 = t8.borderStyle), "borderColor" in t8 && n7(4, i7 = t8.borderColor), "borderWidth" in t8 && n7(5, c7 = t8.borderWidth), "text" in t8 && n7(6, a7 = t8.text), "fontColor" in t8 && n7(7, d6 = t8.fontColor), "textPadding" in t8 && n7(8, p6 = t8.textPadding), "fontSize" in t8 && n7(9, u6 = t8.fontSize), "seperatorWidth" in t8 && n7(10, f7 = t8.seperatorWidth);
      }, [l7, s7, o7, r7, i7, c7, a7, d6, p6, u6, f7];
    }
    class _t extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, yt, wt, main6.s, {typeText: 0, paddingTop: 1, paddingBottom: 2, borderStyle: 3, borderColor: 4, borderWidth: 5, text: 6, fontColor: 7, textPadding: 8, fontSize: 9, seperatorWidth: 10});
      }
    }
    function Ct(t7) {
      let e8;
      return {c() {
        e8 = main6.e("a"), main6.b(e8, "class", "cover-image svelte-1ifns70"), main6.z(e8, "background-image", "url(https://allius-images.s3.ap-northeast-2.amazonaws.com/static-images/landing-03.jpg)"), main6.b(e8, "href", "https://allius.io/desk");
      }, m(t8, n7) {
        main6.d(t8, e8, n7);
      }, p: main6.n, d(t8) {
        t8 && main6.h(e8);
      }};
    }
    function Wt(t7) {
      let e8, n7, l7, i7;
      return l7 = new _t({props: {borderColor: "#1ecce4", borderWidth: "6", seperatorWidth: "80px", paddingTop: "40", paddingBottom: "20"}}), {c() {
        e8 = main6.e("h2"), e8.textContent = "\uB098\uB9CC\uC758 \uBE0C\uB79C\uB4DC\uB97C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uC0AC\uB78C\uB4E4\uC744 \uB9CC\uB098\uBCF4\uC138\uC694.", n7 = main6.a(), main6.c(l7.$$.fragment), main6.b(e8, "class", "section-title svelte-1ifns70");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.d(t8, n7, s7), main6.m(l7, t8, s7), i7 = true;
      }, p: main6.n, i(t8) {
        i7 || (main6.t(l7.$$.fragment, t8), i7 = true);
      }, o(t8) {
        main6.f(l7.$$.fragment, t8), i7 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), main6.g(l7, t8);
      }};
    }
    function Tt(t7) {
      let e8, n7;
      return e8 = new R3({props: {$$slots: {default: [Wt]}, $$scope: {ctx: t7}}}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p(t8, n8) {
        const l7 = {};
        16 & n8 && (l7.$$scope = {dirty: n8, ctx: t8}), e8.$set(l7);
      }, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function St(t7) {
      let e8, n7, l7, i7, a7, d6;
      return l7 = new _t({props: {borderColor: "#1ecce4", borderWidth: "6", seperatorWidth: "80px", paddingTop: "40", paddingBottom: "20"}}), {c() {
        e8 = main6.e("h2"), e8.textContent = "\uCC98\uC74C \uC624\uC168\uB098\uC694?", n7 = main6.a(), main6.c(l7.$$.fragment), i7 = main6.a(), a7 = main6.e("p"), a7.textContent = "\uB2F9\uC2E0\uC758 \uBE0C\uB79C\uB4DC\uB97C \uB9CC\uB4DC\uB294 \uACF5\uAC04, \uC2A4\uD29C\uB514\uC624\uC5D0 \uC785\uC7A5\uD558\uC138\uC694. \uC0C8\uB85C\uC6B4 \uC0AC\uB78C\uB4E4\uACFC \uD504\uB85C\uC81D\uD2B8 \uAE30\uD68C\uB97C \uB9CC\uB4DC\uB294 \uC2DC\uC791\uC785\uB2C8\uB2E4.", main6.b(e8, "class", "section-title svelte-1ifns70"), main6.b(a7, "class", "section-description svelte-1ifns70"), main6.z(a7, "margin", "0 auto"), main6.z(a7, "width", "70%");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.d(t8, n7, s7), main6.m(l7, t8, s7), main6.d(t8, i7, s7), main6.d(t8, a7, s7), d6 = true;
      }, p: main6.n, i(t8) {
        d6 || (main6.t(l7.$$.fragment, t8), d6 = true);
      }, o(t8) {
        main6.f(l7.$$.fragment, t8), d6 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), main6.g(l7, t8), t8 && main6.h(i7), t8 && main6.h(a7);
      }};
    }
    function Bt(t7) {
      let e8, n7;
      return e8 = new lt({props: {imgWidth: t7[1], $$slots: {default: [St]}, $$scope: {ctx: t7}}}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p(t8, n8) {
        const l7 = {};
        2 & n8 && (l7.imgWidth = t8[1]), 16 & n8 && (l7.$$scope = {dirty: n8, ctx: t8}), e8.$set(l7);
      }, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function jt(t7) {
      let e8, n7, l7, i7;
      return l7 = new _t({props: {borderColor: "#1ecce4", borderWidth: "6", seperatorWidth: "80px", paddingTop: "40", paddingBottom: "20"}}), {c() {
        e8 = main6.e("h2"), e8.textContent = "allius\uC758 \uCEE4\uBBA4\uB2C8\uD2F0 \uC774\uBCA4\uD2B8\uC5D0 \uCC38\uC5EC\uD558\uC138\uC694.", n7 = main6.a(), main6.c(l7.$$.fragment), main6.b(e8, "class", "section-title svelte-1ifns70");
      }, m(t8, s7) {
        main6.d(t8, e8, s7), main6.d(t8, n7, s7), main6.m(l7, t8, s7), i7 = true;
      }, p: main6.n, i(t8) {
        i7 || (main6.t(l7.$$.fragment, t8), i7 = true);
      }, o(t8) {
        main6.f(l7.$$.fragment, t8), i7 = false;
      }, d(t8) {
        t8 && main6.h(e8), t8 && main6.h(n7), main6.g(l7, t8);
      }};
    }
    function zt(t7) {
      let e8, n7;
      return e8 = new xt({props: {$$slots: {default: [jt]}, $$scope: {ctx: t7}}}), {c() {
        main6.c(e8.$$.fragment);
      }, m(t8, l7) {
        main6.m(e8, t8, l7), n7 = true;
      }, p(t8, n8) {
        const l7 = {};
        16 & n8 && (l7.$$scope = {dirty: n8, ctx: t8}), e8.$set(l7);
      }, i(t8) {
        n7 || (main6.t(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        main6.g(e8, t8);
      }};
    }
    function Mt(t7) {
      let e8, n7, l7, s7, r7, i7, a7, d6, p6, u6, f7, m7, x5;
      function v7(e9) {
        t7[2](e9);
      }
      let k6 = {};
      return t7[0] !== void 0 && (k6.loginCheck = t7[0]), e8 = new g({props: k6}), main6.F.push(() => main6.K(e8, "loginCheck", v7)), s7 = new ee({props: {className: "section-top", $$slots: {default: [Ct]}, $$scope: {ctx: t7}}}), i7 = new ee({props: {$$slots: {default: [Tt]}, $$scope: {ctx: t7}}}), d6 = new ee({props: {$$slots: {default: [Bt]}, $$scope: {ctx: t7}}}), u6 = new ee({props: {$$slots: {default: [zt]}, $$scope: {ctx: t7}}}), m7 = new f({}), {c() {
        main6.c(e8.$$.fragment), l7 = main6.a(), main6.c(s7.$$.fragment), r7 = main6.a(), main6.c(i7.$$.fragment), a7 = main6.a(), main6.c(d6.$$.fragment), p6 = main6.a(), main6.c(u6.$$.fragment), f7 = main6.a(), main6.c(m7.$$.fragment);
      }, m(t8, n8) {
        main6.m(e8, t8, n8), main6.d(t8, l7, n8), main6.m(s7, t8, n8), main6.d(t8, r7, n8), main6.m(i7, t8, n8), main6.d(t8, a7, n8), main6.m(d6, t8, n8), main6.d(t8, p6, n8), main6.m(u6, t8, n8), main6.d(t8, f7, n8), main6.m(m7, t8, n8), x5 = true;
      }, p(t8, [l8]) {
        const o7 = {};
        !n7 && 1 & l8 && (n7 = true, o7.loginCheck = t8[0], main6.L(() => n7 = false)), e8.$set(o7);
        const r8 = {};
        16 & l8 && (r8.$$scope = {dirty: l8, ctx: t8}), s7.$set(r8);
        const c7 = {};
        16 & l8 && (c7.$$scope = {dirty: l8, ctx: t8}), i7.$set(c7);
        const a8 = {};
        18 & l8 && (a8.$$scope = {dirty: l8, ctx: t8}), d6.$set(a8);
        const p7 = {};
        16 & l8 && (p7.$$scope = {dirty: l8, ctx: t8}), u6.$set(p7);
      }, i(t8) {
        x5 || (main6.t(e8.$$.fragment, t8), main6.t(s7.$$.fragment, t8), main6.t(i7.$$.fragment, t8), main6.t(d6.$$.fragment, t8), main6.t(u6.$$.fragment, t8), main6.t(m7.$$.fragment, t8), x5 = true);
      }, o(t8) {
        main6.f(e8.$$.fragment, t8), main6.f(s7.$$.fragment, t8), main6.f(i7.$$.fragment, t8), main6.f(d6.$$.fragment, t8), main6.f(u6.$$.fragment, t8), main6.f(m7.$$.fragment, t8), x5 = false;
      }, d(t8) {
        main6.g(e8, t8), t8 && main6.h(l7), main6.g(s7, t8), t8 && main6.h(r7), main6.g(i7, t8), t8 && main6.h(a7), main6.g(d6, t8), t8 && main6.h(p6), main6.g(u6, t8), t8 && main6.h(f7), main6.g(m7, t8);
      }};
    }
    function Nt(t7, e8, n7) {
      let l7, s7, o7 = window.innerWidth;
      return n7(1, l7 = o7 > 1e3 ? 440 : 0.44 * o7), [s7, l7, function(t8) {
        s7 = t8, n7(0, s7);
      }];
    }
    class index_40d17569_default extends main6.S {
      constructor(t7) {
        super(), main6.i(this, t7, Nt, Mt, main6.s, {});
      }
    }
  });

  // ../../../../지울꺼/allius-routify/dist/build/index-350da457.js
  var require_index_350da457 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_350da457_default
    });
    const main6 = __toModule(require_main());
    function b4(s7) {
      let t7, e8, o7, d6, w6, v7, g6, m7, f7, p6, u5, $4, b5, x5, T5;
      return {c() {
        t7 = main6.e("h1"), t7.textContent = "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uC57D\uAD00", e8 = main6.a(), o7 = main6.e("div"), o7.textContent = "\uC815\uBCF4\uD1B5\uC2E0\uB9DD\uBC95 \uADDC\uC815\uC5D0 \uB530\uB77C \uC8FC\uC2DD\uD68C\uC0AC \uB9AC\uC5BC\uBE44\uC98C(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uC774 \uC6B4\uC601\uD558\uB294 allius \uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC5BC\uB77C\uC774\uC5B4\uC2A4\u201D)\uC5D0 \uD68C\uC6D0\uAC00\uC785 \uC2E0\uCCAD\uD558\uC2DC\uB294 \uBD84\uAED8 \uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9, \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4\uC758 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04\uC744 \uC548\uB0B4 \uB4DC\uB9AC\uC624\uB2C8 \uC790\uC138\uD788 \uC77D\uC740 \uD6C4 \uB3D9\uC758\uD558\uC5EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.", d6 = main6.a(), w6 = main6.e("h3"), w6.textContent = "1. \uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4", v7 = main6.a(), g6 = main6.e("div"), g6.innerHTML = '\uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uAC1C\uC778\uD654 \uD639\uC740 \uD68C\uC6D0\uC81C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uAE30 \uC704\uD574 \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC2E4 \uACBD\uC6B0, \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574 \uD544\uC694\uD55C \uCD5C\uC18C\uD55C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4.\n\n    <strong class="svelte-1wlit1d">(1) \uD68C\uC6D0\uAC00\uC785 \uC2DC\uC810\uC5D0 \uD68C\uC0AC\uAC00 \uC774\uC6A9\uC790\uB85C\uBD80\uD130 \uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4</strong>\n    - \uD68C\uC6D0 \uAC00\uC785 \uC2DC\uC5D0 \u2018\uC544\uC774\uB514, \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uD734\uB300\uC804\uD654\uBC88\uD638\u2019\uB97C \uD544\uC218\uD56D\uBAA9\uC73C\uB85C \uC218\uC9D1\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uC774\uC6A9\uC790\uAC00 \uC785\uB825\uD558\uB294 \uC0DD\uB144\uC6D4\uC77C\uC774 \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9\uC77C \uACBD\uC6B0\uC5D0\uB294 \uBC95\uC815\uB300\uB9AC\uC778 \uC815\uBCF4(\uBC95\uC815\uB300\uB9AC\uC778\uC758 \uC774\uB984, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC911\uBCF5\uAC00\uC785\uD655\uC778\uC815\uBCF4(DI), \uD734\uB300\uC804\uD654\uBC88\uD638)\uB97C \uCD94\uAC00\uB85C \uC218\uC9D1\uD569\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uC120\uD0DD\uD56D\uBAA9\uC73C\uB85C \uC774\uBA54\uC77C \uC8FC\uC18C, \uD504\uB85C\uD544 \uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4.\n\n    <strong class="svelte-1wlit1d">(2) \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uB85C\uBD80\uD130 \uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4</strong>\n    - \uC5BC\uB77C\uC774\uC5B4\uC2A4 \uB0B4 \uAC1C\uBCC4 \uC11C\uBE44\uC2A4 \uC774\uC6A9, \uC774\uBCA4\uD2B8 \uC751\uBAA8 \uBC0F \uACBD\uD488 \uC2E0\uCCAD \uACFC\uC815\uC5D0\uC11C \uD574\uB2F9 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uC790\uC5D0 \uD55C\uD574 \uCD94\uAC00 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uCD94\uAC00\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD560 \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC\uC810\uC5D0\uC11C \uC774\uC6A9\uC790\uC5D0\uAC8C \u2018\uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9, \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4\uC758 \uBCF4\uAD00\uAE30\uAC04\u2019\uC5D0 \uB300\uD574 \uC548\uB0B4 \uB4DC\uB9AC\uACE0 \uB3D9\uC758\uB97C \uBC1B\uC2B5\uB2C8\uB2E4.\n\n    <strong class="svelte-1wlit1d">(3) \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC5D0\uC11C IP \uC8FC\uC18C, \uCFE0\uD0A4, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uAE30\uAE30\uC815\uBCF4, \uC704\uCE58\uC815\uBCF4\uAC00 \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC774\uBBF8\uC9C0 \uBC0F \uC74C\uC131\uC744 \uC774\uC6A9\uD55C \uAC80\uC0C9 \uC11C\uBE44\uC2A4 \uB4F1\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB098 \uC74C\uC131\uC774 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</strong>\n\n    \uAD6C\uCCB4\uC801\uC73C\uB85C 1) \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uC790\uB3D9\uD654\uB41C \uBC29\uBC95\uC73C\uB85C \uC0DD\uC131\uD558\uC5EC \uC774\uB97C \uC800\uC7A5(\uC218\uC9D1)\uD558\uAC70\uB098, 2) \uC774\uC6A9\uC790 \uAE30\uAE30\uC758 \uACE0\uC720\uD55C \uC815\uBCF4\uB97C \uC6D0\uB798\uC758 \uAC12\uC744 \uD655\uC778\uD558\uC9C0 \uBABB \uD558\uB3C4\uB85D \uC548\uC804\uD558\uAC8C \uBCC0\uD658\uD558\uC5EC \uC218\uC9D1\uD569\uB2C8\uB2E4. <br class="svelte-1wlit1d"/>\n\n    \uC774\uC640 \uAC19\uC774 \uC218\uC9D1\uB41C \uC815\uBCF4\uB294 \uAC1C\uC778\uC815\uBCF4\uC640\uC758 \uC5F0\uACC4 \uC5EC\uBD80 \uB4F1\uC5D0 \uB530\uB77C \uAC1C\uC778\uC815\uBCF4\uC5D0 \uD574\uB2F9\uD560 \uC218 \uC788\uACE0, \uAC1C\uC778\uC815\uBCF4\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.', m7 = main6.a(), f7 = main6.e("h3"), f7.textContent = "2. \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uC758 \uC774\uC6A9", p6 = main6.a(), u5 = main6.e("div"), u5.innerHTML = '\uC5BC\uB77C\uC774\uC5B4\uC2A4 \uBC0F \uC5BC\uB77C\uC774\uC5B4\uC2A4 \uAD00\uB828 \uC81C\uBC18 \uC11C\uBE44\uC2A4(\uBAA8\uBC14\uC77C \uC6F9/\uC571 \uD3EC\uD568)\uC758 \uD68C\uC6D0\uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uAC1C\uBC1C\u30FB\uC81C\uACF5 \uBC0F \uD5A5\uC0C1, \uC548\uC804\uD55C \uC778\uD130\uB137 \uC774\uC6A9\uD658\uACBD \uAD6C\uCD95 \uB4F1 \uC544\uB798\uC758 \uBAA9\uC801\uC73C\uB85C\uB9CC \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.\n    <p class="list01 svelte-1wlit1d">- \uD68C\uC6D0 \uAC00\uC785 \uC758\uC0AC\uC758 \uD655\uC778, \uC5F0\uB839 \uD655\uC778 \uBC0F \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC9C4\uD589, \uC774\uC6A9\uC790 \uBC0F \uBC95\uC815\uB300\uB9AC\uC778\uC758 \uBCF8\uC778 \uD655\uC778, \uC774\uC6A9\uC790 \uC2DD\uBCC4, \uD68C\uC6D0\uD0C8\uD1F4 \uC758\uC0AC\uC758 \uD655\uC778 \uB4F1 \uD68C\uC6D0\uAD00\uB9AC\uB97C \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.\n        - \uCF58\uD150\uCE20 \uB4F1 \uAE30\uC874 \uC11C\uBE44\uC2A4 \uC81C\uACF5(\uAD11\uACE0 \uD3EC\uD568)\uC5D0 \uB354\uD558\uC5EC, \uC778\uAD6C\uD1B5\uACC4\uD559\uC801 \uBD84\uC11D, \uC11C\uBE44\uC2A4 \uBC29\uBB38 \uBC0F \uC774\uC6A9\uAE30\uB85D\uC758 \uBD84\uC11D, \uAC1C\uC778\uC815\uBCF4 \uBC0F \uAD00\uC2EC\uC5D0 \uAE30\uBC18\uD55C \uC774\uC6A9\uC790\uAC04 \uAD00\uACC4\uC758 \uD615\uC131, \uC9C0\uC778 \uBC0F \uAD00\uC2EC\uC0AC \uB4F1\uC5D0 \uAE30\uBC18\uD55C \uB9DE\uCDA4\uD615 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uC694\uC18C\uC758 \uBC1C\uAD74 \uBC0F \uAE30\uC874 \uC11C\uBE44\uC2A4 \uAC1C\uC120 \uB4F1\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.<br class="svelte-1wlit1d"/>\n        - \uBC95\uB839 \uBC0F \uC5BC\uB77C\uC774\uC5B4\uC2A4 \uC774\uC6A9\uC57D\uAD00\uC744 \uC704\uBC18\uD558\uB294 \uD68C\uC6D0\uC5D0 \uB300\uD55C \uC774\uC6A9 \uC81C\uD55C \uC870\uCE58, \uBD80\uC815 \uC774\uC6A9 \uD589\uC704\uB97C \uD3EC\uD568\uD558\uC5EC \uC11C\uBE44\uC2A4\uC758 \uC6D0\uD65C\uD55C \uC6B4\uC601\uC5D0 \uC9C0\uC7A5\uC744 \uC8FC\uB294 \uD589\uC704\uC5D0 \uB300\uD55C \uBC29\uC9C0 \uBC0F \uC81C\uC7AC, \uACC4\uC815\uB3C4\uC6A9 \uBC0F \uBD80\uC815\uAC70\uB798 \uBC29\uC9C0, \uC57D\uAD00 \uAC1C\uC815 \uB4F1\uC758 \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC, \uBD84\uC7C1\uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D \uBCF4\uC874, \uBBFC\uC6D0\uCC98\uB9AC \uB4F1 \uC774\uC6A9\uC790 \uBCF4\uD638 \uBC0F \uC11C\uBE44\uC2A4 \uC6B4\uC601\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.<br class="svelte-1wlit1d"/>\n        - \uC720\uB8CC \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uB530\uB974\uB294 \uBCF8\uC778\uC778\uC99D, \uAD6C\uB9E4 \uBC0F \uC694\uAE08 \uACB0\uC81C, \uC0C1\uD488 \uBC0F \uC11C\uBE44\uC2A4\uC758 \uBC30\uC1A1\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.<br class="svelte-1wlit1d"/>\n        - \uC774\uBCA4\uD2B8 \uC815\uBCF4 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC81C\uACF5, \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uB4F1 \uB9C8\uCF00\uD305 \uBC0F \uD504\uB85C\uBAA8\uC158 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.<br class="svelte-1wlit1d"/>\n        - \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAE30\uB85D\uACFC \uC811\uC18D \uBE48\uB3C4 \uBD84\uC11D, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4 \uBD84\uC11D \uBC0F \uD1B5\uACC4\uC5D0 \uB530\uB978 \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBC0F \uAD11\uACE0 \uAC8C\uC7AC \uB4F1\uC5D0 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.<br class="svelte-1wlit1d"/>\n        - \uBCF4\uC548, \uD504\uB77C\uC774\uBC84\uC2DC, \uC548\uC804 \uCE21\uBA74\uC5D0\uC11C \uC774\uC6A9\uC790\uAC00 \uC548\uC2EC\uD558\uACE0 \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uD658\uACBD \uAD6C\uCD95\uC744 \uC704\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD569\uB2C8\uB2E4.</p>', $4 = main6.a(), b5 = main6.e("h3"), b5.textContent = "3. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30", x5 = main6.a(), T5 = main6.e("div"), T5.innerHTML = '<strong class="svelte-1wlit1d">\uD68C\uC0AC\uB294 \uC6D0\uCE59\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD68C\uC6D0 \uD0C8\uD1F4 \uC2DC \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</strong>\n    \uB2E8, \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uC778\uC815\uBCF4 \uBCF4\uAD00\uAE30\uAC04\uC5D0 \uB300\uD574 \uBCC4\uB3C4\uC758 \uB3D9\uC758\uB97C \uC5BB\uC740 \uACBD\uC6B0, \uB610\uB294 \uBC95\uB839\uC5D0\uC11C \uC77C\uC815 \uAE30\uAC04 \uC815\uBCF4\uBCF4\uAD00 \uC758\uBB34\uB97C \uBD80\uACFC\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uAE30\uAC04 \uB3D9\uC548 \uAC1C\uC778\uC815\uBCF4\uB97C \uC548\uC804\uD558\uAC8C \uBCF4\uAD00\uD569\uB2C8\uB2E4.\n    <strong class="svelte-1wlit1d">\uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uC778\uC815\uBCF4 \uBCF4\uAD00\uAE30\uAC04\uC5D0 \uB300\uD574 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uB610\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785 \uC2DC \uB3D9\uC758\uB97C \uC5BB\uC740 \uACBD\uC6B0\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.</strong>\n    \uBD80\uC815\uAC00\uC785 \uBC0F \uC9D5\uACC4\uAE30\uB85D \uB4F1\uC758 \uBD80\uC815\uC774\uC6A9\uAE30\uB85D\uC740 \uBD80\uC815 \uAC00\uC785 \uBC0F \uC774\uC6A9 \uBC29\uC9C0\uB97C \uC704\uD558\uC5EC \uC218\uC9D1 \uC2DC\uC810\uC73C\uB85C\uBD80\uD130 6\uAC1C\uC6D4\uAC04 \uBCF4\uAD00\uD558\uACE0 \uD30C\uAE30\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uBD80\uC815\uC774\uC6A9\uAE30\uB85D \uB0B4 \uAC1C\uC778\uC815\uBCF4\uB294 \uAC00\uC785\uC778\uC99D \uD734\uB300\uD3F0 \uBC88\uD638(\uB9CC 14\uC138 \uBBF8\uB9CC \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uBC95\uC815\uB300\uB9AC\uC778 DI)\uAC00 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-1wlit1d"/>\n    \uBD80\uC815\uC774\uC6A9\uC73C\uB85C \uC9D5\uACC4\uB97C \uBC1B\uAE30 \uC804\uC5D0 \uD68C\uC6D0 \uAC00\uC785 \uBC0F \uD0C8\uD1F4\uB97C \uBC18\uBCF5\uD558\uBA70 \uC11C\uBE44\uC2A4\uB97C \uBD80\uC815 \uC774\uC6A9\uD558\uB294 \uC0AC\uB840\uB97C \uB9C9\uAE30 \uC704\uD574 \uD0C8\uD1F4\uD55C \uC774\uC6A9\uC790\uC758 \uD734\uB300\uC804\uD654\uBC88\uD638\uB97C \uBCF5\uD638\uD654\uAC00 \uBD88\uAC00\uB2A5\uD55C \uC77C\uBC29\uD5A5 \uC554\uD638\uD654(\uD574\uC2DC \uCC98\uB9AC)\uD558\uC5EC 6\uAC1C\uC6D4\uAC04 \uBCF4\uAD00\uD569\uB2C8\uB2E4. QR\uCF54\uB4DC \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC5F0\uB77D\uCC98\uB97C \uB4F1\uB85D\uD55C \uC774\uD6C4 QR\uCF54\uB4DC \uC0AD\uC81C \uC2DC, \uBCF5\uAD6C \uC694\uCCAD \uB300\uC751\uC744 \uC704\uD574 \uC0AD\uC81C \uC2DC\uC810\uC73C\uB85C \uBD80\uD130 6\uAC1C\uC6D4 \uBCF4\uAD00\uD569\uB2C8\uB2E4. \uC2A4\uB9C8\uD2B8 \uD50C\uB808\uC774\uC2A4 \uC11C\uBE44\uC2A4\uC5D0\uC11C \uD734\uB300\uC804\uD654\uBC88\uD638\uB97C \uB4F1\uB85D\uD55C \uACBD\uC6B0 \uBD84\uC7C1 \uC870\uC815 \uBC0F \uACE0\uAC1D\uBB38\uC758 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uC5C5\uCCB4 \uB4F1\uB85D/\uC218\uC815 \uC694\uCCAD\uC2DC, \uB610\uB294 \uB4F1\uB85D \uC774\uD6C4 \uC5C5\uCCB4 \uC0AD\uC81C \uC694\uCCAD \uC2DC\uB85C\uBD80\uD130 \uCD5C\uB300 1\uB144\uAC04 \uBCF4\uAD00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n    <strong class="svelte-1wlit1d">\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAE08\uC735\uAC70\uB798\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95 \uB4F1 \uBC95\uB839\uC5D0\uC11C \uC77C\uC815\uAE30\uAC04 \uC815\uBCF4\uC758 \uBCF4\uAD00\uC744 \uADDC\uC815\uD558\uB294 \uACBD\uC6B0\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4. \uB9AC\uC5BC\uBE44\uC98C\uC740 \uC774 \uAE30\uAC04 \uB3D9\uC548 \uBC95\uB839\uC758 \uADDC\uC815\uC5D0 \uB530\uB77C \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD558\uBA70, \uBCF8 \uC815\uBCF4\uB97C \uB2E4\uB978 \uBAA9\uC801\uC73C\uB85C\uB294 \uC808\uB300 \uC774\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</strong>\n    - \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\n    <p class="list01 svelte-1wlit1d">\uACC4\uC57D \uB610\uB294 \uCCAD\uC57D\uCCA0\uD68C \uB4F1\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \uBCF4\uAD00<br class="svelte-1wlit1d"/>\n        \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \uBCF4\uAD00<br class="svelte-1wlit1d"/>\n        \uC18C\uBE44\uC790\uC758 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 3\uB144 \uBCF4\uAD00<br class="svelte-1wlit1d"/></p>\n    - \uC804\uC790\uAE08\uC735\uAC70\uB798\uBC95\n    <p class="list01 svelte-1wlit1d">\uC804\uC790\uAE08\uC735\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \uBCF4\uAD00</p>\n    - \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95\n    <p class="list01 svelte-1wlit1d">\uB85C\uADF8\uC778 \uAE30\uB85D: 3\uAC1C\uC6D4<br class="svelte-1wlit1d"/>\n        \uD68C\uC6D0\uD0C8\uD1F4, \uC11C\uBE44\uC2A4 \uC885\uB8CC, \uC774\uC6A9\uC790\uC5D0\uAC8C \uB3D9\uC758\uBC1B\uC740 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uB3C4\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uAC1C\uC778\uC815\uBCF4\uB294 \uC7AC\uC0DD\uC774 \uBD88\uAC00\uB2A5\uD55C \uBC29\uBC95\uC73C\uB85C \uD30C\uAE30\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uBC95\uB839\uC5D0\uC11C \uBCF4\uC874\uC758\uBB34\uB97C \uBD80\uACFC\uD55C \uC815\uBCF4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uD574\uB2F9 \uAE30\uAC04 \uACBD\uACFC \uD6C4 \uC9C0\uCCB4\uC5C6\uC774 \uC7AC\uC0DD\uC774 \uBD88\uAC00\uB2A5\uD55C \uBC29\uBC95\uC73C\uB85C \uD30C\uAE30\uD569\uB2C8\uB2E4.<br class="svelte-1wlit1d"/>\n\n        \uC804\uC790\uC801 \uD30C\uC77C \uD615\uD0DC\uC758 \uACBD\uC6B0 \uBCF5\uAD6C \uBC0F \uC7AC\uC0DD\uC774 \uB418\uC9C0 \uC54A\uB3C4\uB85D \uAE30\uC220\uC801\uC778 \uBC29\uBC95\uC744 \uC774\uC6A9\uD558\uC5EC \uC548\uC804\uD558\uAC8C \uC0AD\uC81C\uD558\uBA70, \uCD9C\uB825\uBB3C \uB4F1\uC740 \uBD84\uC1C4\uD558\uAC70\uB098 \uC18C\uAC01\uD558\uB294 \uBC29\uC2DD \uB4F1\uC73C\uB85C \uD30C\uAE30\uD569\uB2C8\uB2E4.<br class="svelte-1wlit1d"/>\n\n        \uCC38\uACE0\uB85C \uB9AC\uC5BC\uBE44\uC98C\uC740 \u2018\uAC1C\uC778\uC815\uBCF4 \uC720\uD6A8\uAE30\uAC04\uC81C\u2019\uC5D0 \uB530\uB77C 1\uB144\uAC04 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC9C0 \uC54A\uC740 \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCC4\uB3C4\uB85C \uBD84\uB9AC \uBCF4\uAD00\uD558\uC5EC \uAD00\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-1wlit1d"/></p>', main6.b(t7, "class", "title svelte-1wlit1d"), main6.b(o7, "class", "section-description svelte-1wlit1d"), main6.b(w6, "class", "section-title svelte-1wlit1d"), main6.b(g6, "class", "section-description svelte-1wlit1d"), main6.b(f7, "class", "section-title svelte-1wlit1d"), main6.b(u5, "class", "section-description svelte-1wlit1d"), main6.b(b5, "class", "section-title svelte-1wlit1d"), main6.b(T5, "class", "section-description svelte-1wlit1d");
      }, m(s8, l7) {
        main6.d(s8, t7, l7), main6.d(s8, e8, l7), main6.d(s8, o7, l7), main6.d(s8, d6, l7), main6.d(s8, w6, l7), main6.d(s8, v7, l7), main6.d(s8, g6, l7), main6.d(s8, m7, l7), main6.d(s8, f7, l7), main6.d(s8, p6, l7), main6.d(s8, u5, l7), main6.d(s8, $4, l7), main6.d(s8, b5, l7), main6.d(s8, x5, l7), main6.d(s8, T5, l7);
      }, p: main6.n, i: main6.n, o: main6.n, d(s8) {
        s8 && main6.h(t7), s8 && main6.h(e8), s8 && main6.h(o7), s8 && main6.h(d6), s8 && main6.h(w6), s8 && main6.h(v7), s8 && main6.h(g6), s8 && main6.h(m7), s8 && main6.h(f7), s8 && main6.h(p6), s8 && main6.h(u5), s8 && main6.h($4), s8 && main6.h(b5), s8 && main6.h(x5), s8 && main6.h(T5);
      }};
    }
    class x4 extends main6.S {
      constructor(s7) {
        super(), main6.i(this, s7, null, b4, main6.s, {});
      }
    }
    function T4(s7) {
      let t7, e8, r7, p6, b5, T5, h7, H3, C4, j5, I3 = false, L3 = () => {
        I3 = false;
      };
      return main6.A(s7[1]), e8 = new g({}), b5 = new x4({}), h7 = new f({}), {c() {
        main6.c(e8.$$.fragment), r7 = main6.a(), p6 = main6.e("div"), main6.c(b5.$$.fragment), T5 = main6.a(), main6.c(h7.$$.fragment), main6.b(p6, "class", "sections svelte-1vx1xj2");
      }, m(l7, n7) {
        main6.m(e8, l7, n7), main6.d(l7, r7, n7), main6.d(l7, p6, n7), main6.m(b5, p6, null), main6.d(l7, T5, n7), main6.m(h7, l7, n7), H3 = true, C4 || (j5 = main6.H(window, "scroll", () => {
          I3 = true, clearTimeout(t7), t7 = setTimeout(L3, 100), s7[1]();
        }), C4 = true);
      }, p(s8, [e9]) {
        1 & e9 && !I3 && (I3 = true, clearTimeout(t7), scrollTo(window.pageXOffset, s8[0]), t7 = setTimeout(L3, 100));
      }, i(s8) {
        H3 || (main6.t(e8.$$.fragment, s8), main6.t(b5.$$.fragment, s8), main6.t(h7.$$.fragment, s8), H3 = true);
      }, o(s8) {
        main6.f(e8.$$.fragment, s8), main6.f(b5.$$.fragment, s8), main6.f(h7.$$.fragment, s8), H3 = false;
      }, d(s8) {
        main6.g(e8, s8), s8 && main6.h(r7), s8 && main6.h(p6), main6.g(b5), s8 && main6.h(T5), main6.g(h7, s8), C4 = false, j5();
      }};
    }
    function h6(s7, t7, e8) {
      let l7;
      return main6.o(() => {
        e8(0, l7 = 0);
      }), [l7, function() {
        e8(0, l7 = window.pageYOffset);
      }];
    }
    class index_350da457_default extends main6.S {
      constructor(s7) {
        super(), main6.i(this, s7, h6, T4, main6.s, {});
      }
    }
  });

  // ../../../../지울꺼/allius-routify/dist/build/index-30850fb8.js
  var require_index_30850fb8 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_30850fb8_default
    });
    const main6 = __toModule(require_main());
    function x4(s7) {
      let e8, t7, i7, r7, h7, o7, q5, y5, b5, d6, p6, m7, u5, g5, x5, C5, M3, T5, H4, L4, f7, $4;
      return document.title = e8 = s7[0].title, {c() {
        t7 = main6.e("meta"), r7 = main6.e("meta"), o7 = main6.e("meta"), y5 = main6.e("meta"), d6 = main6.e("meta"), m7 = main6.e("meta"), g5 = main6.e("meta"), C5 = main6.e("meta"), T5 = main6.e("meta"), L4 = main6.e("meta"), $4 = main6.e("meta"), main6.b(t7, "name", "title"), main6.b(t7, "content", i7 = s7[0].title), main6.b(r7, "property", "og:title"), main6.b(r7, "content", h7 = s7[0].title), main6.b(o7, "property", "twitter:title"), main6.b(o7, "content", q5 = s7[0].title), main6.b(y5, "name", "description"), main6.b(y5, "content", b5 = s7[0].description), main6.b(d6, "property", "og:description"), main6.b(d6, "content", p6 = s7[0].description), main6.b(m7, "property", "twitter:description"), main6.b(m7, "content", u5 = s7[0].description), main6.b(g5, "property", "og:image"), main6.b(g5, "content", x5 = s7[0].image), main6.b(C5, "property", "twitter:image"), main6.b(C5, "content", M3 = s7[0].image), main6.b(T5, "property", "og:image:alt"), main6.b(T5, "content", H4 = s7[0].imageAlt), main6.b(L4, "property", "twitter:image:alt"), main6.b(L4, "content", f7 = s7[0].imageAlt), main6.b($4, "property", "og:type"), main6.b($4, "content", "website");
      }, m(s8, e9) {
        main6.k(document.head, t7), main6.k(document.head, r7), main6.k(document.head, o7), main6.k(document.head, y5), main6.k(document.head, d6), main6.k(document.head, m7), main6.k(document.head, g5), main6.k(document.head, C5), main6.k(document.head, T5), main6.k(document.head, L4), main6.k(document.head, $4);
      }, p(s8, [l7]) {
        1 & l7 && e8 !== (e8 = s8[0].title) && (document.title = e8), 1 & l7 && i7 !== (i7 = s8[0].title) && main6.b(t7, "content", i7), 1 & l7 && h7 !== (h7 = s8[0].title) && main6.b(r7, "content", h7), 1 & l7 && q5 !== (q5 = s8[0].title) && main6.b(o7, "content", q5), 1 & l7 && b5 !== (b5 = s8[0].description) && main6.b(y5, "content", b5), 1 & l7 && p6 !== (p6 = s8[0].description) && main6.b(d6, "content", p6), 1 & l7 && u5 !== (u5 = s8[0].description) && main6.b(m7, "content", u5), 1 & l7 && x5 !== (x5 = s8[0].image) && main6.b(g5, "content", x5), 1 & l7 && M3 !== (M3 = s8[0].image) && main6.b(C5, "content", M3), 1 & l7 && H4 !== (H4 = s8[0].imageAlt) && main6.b(T5, "content", H4), 1 & l7 && f7 !== (f7 = s8[0].imageAlt) && main6.b(L4, "content", f7);
      }, i: main6.n, o: main6.n, d(s8) {
        main6.h(t7), main6.h(r7), main6.h(o7), main6.h(y5), main6.h(d6), main6.h(m7), main6.h(g5), main6.h(C5), main6.h(T5), main6.h(L4), main6.h($4);
      }};
    }
    function C4(s7, e8, t7) {
      let {metadata: l7 = {title: "allius", description: "\uB098\uC758 \uBE0C\uB79C\uB4DC\uB85C \uB9CC\uB4DC\uB294 \uAE30\uD68C", image: "https://allius-images.s3.ap-northeast-2.amazonaws.com/static-images/meta_img_01.jpg", imageAlt: "\uB098\uC758 \uBE0C\uB79C\uB4DC\uB85C \uB9CC\uB4DC\uB294 \uAE30\uD68C", url: "https://home.allius.io"}} = e8;
      return s7.$$set = (s8) => {
        "metadata" in s8 && t7(0, l7 = s8.metadata);
      }, [l7];
    }
    class M2 extends main6.S {
      constructor(s7) {
        super(), main6.i(this, s7, C4, x4, main6.s, {metadata: 0});
      }
    }
    function T4(s7) {
      let e8, t7, v7, h7, o7, q5, y5, b5, d6, p6, m7, u5, g5, x5, C5, M3, T5, H4, L4, f7, $4, w5, D4, A4, I3, j5, S4, _3, O3, R3, z4, F4, k5, P3, W3, X3, Y3, B4, E4, G3, J3, K3, N3, Q3, U3, V3, Z3, ss, es, ts, ls, ns, vs, cs, as, is, rs, hs, os, qs, ys, bs, ds, ps, ms, us, gs, xs, Cs, Ms, Ts, Hs, Ls, fs, $s, ws, Ds, As, Is, js, Ss, _s, Os, Rs, zs, Fs, ks, Ps, Ws, Xs, Ys, Bs, Es, Gs, Js, Ks, Ns, Qs, Us, Vs, Zs, se2, ee3, te3, le2, ne3, ve, ce, ae, ie, re3, he, oe2, qe, ye, be, de, pe, me, ue, ge, xe, Ce, Me, Te, He, Le, fe, $e, we, De;
      return {c() {
        e8 = main6.e("h1"), e8.textContent = "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00", t7 = main6.a(), v7 = main6.e("p"), v7.innerHTML = '\uC81C\uC815 : 2019. 10. 20.<br class="svelte-h0vy4q"/>\n    \uC2DC\uD589 : 2019. 10. 20.<br class="svelte-h0vy4q"/>', h7 = main6.a(), o7 = main6.e("h3"), o7.textContent = "\uC81C1\uC870 \uBAA9\uC801", q5 = main6.a(), y5 = main6.e("div"), y5.textContent = "\uBCF8 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uB9AC\uC5BC\uBE44\uC98C(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC778\uD130\uB137 \uC0AC\uC774\uD2B8 \uC5BC\uB77C\uC774\uC5B4\uC2A4 \uC11C\uBE44\uC2A4(www.allius.io)(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D)\uB97C \uC774\uC6A9\uD568\uC5D0 \uC788\uC5B4 \uD68C\uC0AC\uC640 \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC\xB7\uC758\uBB34 \uBC0F \uCC45\uC784\uC0AC\uD56D\uC744 \uADDC\uC815\uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.", b5 = main6.a(), d6 = main6.e("h3"), d6.textContent = "\uC81C2\uC870 \uC6A9\uC5B4\uC758 \uC815\uC758", p6 = main6.a(), m7 = main6.e("div"), m7.innerHTML = '(1) \uBCF8 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uC774\uC6A9\uC790 : \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uB294 \uC0AC\uC774\uD2B8\uC5D0 \uC811\uC18D\uD558\uC5EC \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uBC1B\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n        2. \uD68C\uC6D0 : \uD68C\uC0AC\uC5D0 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uC5EC \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uC790\uB85C\uC11C \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC640 \uC11C\uBE44\uC2A4\uC774\uC6A9\uACC4\uC57D\uC744 \uCCB4\uACB0\uD55C \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n        3. ID : \uD68C\uC6D0\uC758 \uC2DD\uBCC4\uACFC \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD558\uC5EC \uD68C\uC6D0\uC774 \uC120\uC815\uD558\uACE0 \uD68C\uC0AC\uAC00 \uC2B9\uC778\uD55C \uC774\uBA54\uC77C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n        4. \uBE44\uBC00\uBC88\uD638 : \uD68C\uC6D0\uC758 \uB3D9\uC77C\uC131 \uD655\uC778\uACFC \uD68C\uC6D0\uC758 \uAD8C\uC775 \uBC0F \uBE44\uBC00\uBCF4\uD638\uB97C \uC704\uD558\uC5EC \uD68C\uC6D0 \uC2A4\uC2A4\uB85C\uAC00 \uC124\uC815\uD558\uC5EC \uD68C\uC0AC\uC5D0 \uB4F1\uB85D\uD55C \uC601\uBB38 \uB610\uB294 \uC22B\uC790\uC758 \uC870\uD569\uC744 \uB9D0\uD569\uB2C8\uB2E4. <br class="svelte-h0vy4q"/>\n        5. \uD504\uB85C\uD3F4\uB9AC\uC624 \uC815\uBCF4 : \uD68C\uC6D0\uC774 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uAE30 \uC704\uD558\uC5EC \uD68C\uC6D0\uC774 \uC785\uB825\uD55C \uC774\uB984, \uC774\uBA54\uC77C, \uD558\uB294 \uC77C\uACFC \uC5ED\uD560, \uBE0C\uB79C\uB4DC, \uC18C\uC18D, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, \uC778\uC6A9 \uBB38\uAD6C, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC8FC\uC18C \uB4F1 \uD504\uB85C\uD3F4\uB9AC\uC624 \uC11C\uBE44\uC2A4\uC5D0 \uAE30\uC7AC\uB418\uB294 \uD68C\uC6D0\uC774 \uC81C\uACF5\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB9D0\uD569\uB2C8\uB2E4. <br class="svelte-h0vy4q"/>\n        6. \uAC8C\uC2DC\uBB3C : \uD68C\uC6D0\uC774 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC774\uBBF8\uC9C0, \uB3D9\uC601\uC0C1, \uC74C\uC131, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uC758\uBBF8\uD558\uBA70, \uD68C\uC6D0\uC774 \uB2E4\uB978 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uC791\uC131\uD558\uAC70\uB098 \uAC8C\uC2DC\uD55C \uC800\uC791\uBB3C\uC744 \uC778\uC6A9\uD558\uAC70\uB098 \uB9C1\uD06C\uB97C \uACF5\uC720\uD568\uC73C\uB85C\uC368 \uAC8C\uC2DC\uD55C \uB0B4\uC6A9(\uD504\uB85C\uC81D\uD2B8, \uCF58\uD150\uCE20 \uB4F1)\uB3C4 \uC774\uC5D0 \uD3EC\uD568\uB429\uB2C8\uB2E4.</p>\n    (2) \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC9C0 \uC54A\uC740 \uC6A9\uC5B4\uB294 \uAC1C\uBCC4\uC57D\uAD00 \uB610\uB294 \uAD00\uB828 \uBC95\uB839\uC774 \uC815\uD558\uB294 \uBC14\uC5D0 \uB530\uB974\uBA70, \uADF8 \uC678\uC5D0\uB294 \uC77C\uBC18\uC801\uC778 \uC0C1\uAC70\uB798\uAD00\uD589\uC5D0 \uC758\uD569\uB2C8\uB2E4.', u5 = main6.a(), g5 = main6.e("h3"), g5.textContent = "\uC81C3\uC870 \uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815", x5 = main6.a(), C5 = main6.e("div"), C5.innerHTML = '(1) \uD68C\uC0AC\uB294 \uBCF8 \uC57D\uAD00\uC744 \uC774\uC6A9\uC790\uAC00 \uC54C \uC218 \uC788\uB3C4\uB85D \uC0AC\uC774\uD2B8\uC758 \uC11C\uBE44\uC2A4 \uD654\uBA74\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC0AC\uB294 \uC81C\uACF5\uD558\uB294 \uAC1C\uBCC4 \uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4 \uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD558\uBA70 \uC57D\uAD00\uC758 \uAD6C\uCCB4\uC801 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uCF58\uD150\uCE20\uC0B0\uC5C5 \uC9C4\uD765\uBC95, \uC804\uC790\uBB38\uC11C \uBC0F \uC804\uC790\uAC70\uB798 \uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC720\uC0AC\uC218\uC2E0\uD589\uC704\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uBCF8 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uAC00 \uBCF8 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uC0AC\uC720\uB97C \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC5D0 \uCD5C\uC18C \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC774\uC6A9\uC790\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 15\uC77C \uC774\uC804\uBD80\uD130 \uACF5\uC9C0\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uC81C3\uD56D\uC5D0 \uB530\uB77C \uACF5\uC9C0\uB41C \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uD68C\uC6D0\uC774 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4\uB97C \uACC4\uC18D \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uB41C \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uB294 \uAC83\uC73C\uB85C \uBD05\uB2C8\uB2E4. \uAC1C\uC815\uB41C \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC544\uB2C8\uD558\uB294 \uD68C\uC6D0\uC740 \uC5B8\uC81C\uB4E0\uC9C0 \uC790\uC720\uB86D\uAC8C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACC4\uC57D\uC744 \uD574\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC720\uB8CC\uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0\uC774 \uC57D\uAD00\uC758 \uAC1C\uC815\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uD574\uC9C0\uD560 \uACBD\uC6B0 \uD68C\uC0AC\uAC00 \uC815\uD55C \uD658\uBD88\uC815\uCC45\uC5D0 \uB530\uB985\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uBCF8 \uC57D\uAD00\uC5D0\uC11C \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \uBCF8 \uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790\uAC70\uB798\uC18C\uBE44\uC790\uBCF4\uD638\uC9C0\uCE68 \uBC0F \uAD00\uACC4\uBC95\uB839 \uB610\uB294 \uC77C\uBC18 \uC0C1 \uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.', M3 = main6.a(), T5 = main6.e("h3"), T5.textContent = "\uC81C4\uC870 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD", H4 = main6.a(), L4 = main6.e("div"), L4.innerHTML = '(1) \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uD68C\uC6D0\uC758 \uD504\uB85C\uC81D\uD2B8, \u2018\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uD504\uB85C\uD3F4\uB9AC\uC624 \uC815\uBCF4 \uC791\uC131 \uBC0F \uAC8C\uC2DC, \uACF5\uC720 \uC11C\uBE44\uC2A4<br class="svelte-h0vy4q"/>\n        2. \uD68C\uC6D0\uC774 \uC791\uC131\uD558\uAC70\uB098 \uB9C1\uD06C\uD55C \uD504\uB85C\uC81D\uD2B8 \uB610\uB294 \uCF58\uD150\uCE20 \uC815\uBCF4 \uAC8C\uC2DC, \uAD00\uB9AC, \uACF5\uC720 \uC11C\uBE44\uC2A4<br class="svelte-h0vy4q"/>\n        3. \uD68C\uC6D0\uC758 \uB124\uD2B8\uC6CC\uD06C \uC815\uBCF4 \uAC8C\uC2DC, \uAD00\uB9AC, \uACF5\uC720 \uC11C\uBE44\uC2A4<br class="svelte-h0vy4q"/> \n        4. \uD68C\uC6D0\uC758 \u2018\uD504\uB85C\uC81D\uD2B8&#39;, \u2018\uD504\uB85C\uD3F4\uB9AC\uC624&#39;, \u2018\uB098\uC758\uBE0C\uB79C\uB4DC&#39; \uCF58\uD150\uCE20 \uAC1C\uBC1C \uBC0F \uC791\uC131, \uCEE8\uC124\uD305 \uC11C\uBE44\uC2A4<br class="svelte-h0vy4q"/>\n        5. \uD68C\uC0AC\uAC00 \uCD94\uAC00 \uAC1C\uBC1C\uD558\uAC70\uB098 \uB2E4\uB978 \uD68C\uC0AC\uC640\uC758 \uC81C\uD734 \uB4F1\uC744 \uD1B5\uD574 \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uC77C\uCCB4\uC758 \uC11C\uBE44\uC2A4<br class="svelte-h0vy4q"/>\n        6. \uC774\uC5D0 \uBD80\uC218\uB418\uB294 \uC11C\uBE44\uC2A4 \uBC0F \uAE30\uD0C0 \uD68C\uC0AC\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34</p>\n    (2) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC758 \uC774\uC6A9\uC2E0\uCCAD\uC744 \uC2B9\uB099\uD55C \uB54C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uAC1C\uC2DC\uD569\uB2C8\uB2E4. \uB2E8, \uC77C\uBD80 \uC11C\uBE44\uC2A4\uC758 \uACBD\uC6B0\uC5D0\uB294 \uC9C0\uC815\uB41C \uC77C\uC790\uBD80\uD130 \uB610\uB294 \uC77C\uC815 \uC694\uAC74 \uCDA9\uC871\uC758 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uAC1C\uC2DC\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uC758 \uC5C5\uBB34\uC0C1 \uB610\uB294 \uAE30\uC220\uC0C1\uC758 \uC7A5\uC560\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uAC1C\uC2DC\uD558\uC9C0 \uBABB\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC0AC\uC774\uD2B8\uC5D0 \uACF5\uC2DC\uD558\uAC70\uB098 \uD68C\uC6D0\uC5D0\uAC8C \uC774\uB97C \uD1B5\uC9C0\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uC740 \uC5F0\uC911\uBB34\uD734, 1\uC77C 24\uC2DC\uAC04\uC744 \uC6D0\uCE59\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC0AC\uC758 \uC5C5\uBB34\uC0C1 \uB610\uB294 \uAE30\uC220\uC0C1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uAC00 \uC77C\uC2DC \uC911\uC9C0 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uC0AC\uC804 \uB610\uB294 \uC0AC\uD6C4\uC5D0 \uC774\uB97C \uACF5\uC9C0\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uC77C\uBD80 \uC11C\uBE44\uC2A4\uC5D0 \uB300\uD574\uC11C\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC790\uC758 \uC694\uAD6C\uC5D0 \uB530\uB77C \uD2B9\uC815\uD68C\uC6D0\uC5D0\uAC8C\uB9CC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC788\uC73C\uBA70, \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4\uB97C \uC77C\uC815\uBC94\uC704\uB85C \uBD84\uD560\uD558\uC5EC \uAC01 \uBC94\uC704 \uBCC4\uB85C \uC774\uC6A9\uAC00\uB2A5 \uC2DC\uAC04\uC744 \uBCC4\uB3C4\uB85C \uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uADF8 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uACF5\uAC1C\uD569\uB2C8\uB2E4.', f7 = main6.a(), $4 = main6.e("h3"), $4.textContent = "\uC81C5\uC870 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC81C\uD55C", w5 = main6.a(), D4 = main6.e("div"), D4.innerHTML = '(1) \uC774\uC6A9\uC790\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uB0B4\uC6A9\uC774 \uD5C8\uC704\uC778 \uAC83\uC73C\uB85C \uD310\uBA85\uB418\uAC70\uB098, \uD5C8\uC704\uAC00 \uC788\uB2E4\uACE0 \uC758\uC2EC\uD560 \uB9CC\uD55C \uD569\uB9AC\uC801\uC778 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD560 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uBCF8 \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC744 \uC77C\uBD80 \uB610\uB294 \uC804\uBD80 \uC774\uC6A9 \uC815\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB85C \uC778\uD574 \uBC1C\uC0DD\uD558\uB294 \uBD88\uC774\uC775\uC5D0 \uB300\uD574 \uD68C\uC0AC\uB294 \uCC45\uC784\uC744 \uBD80\uB2F4\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uAC00 \uBCF8 \uC57D\uAD00\uC758 \uC774\uC6A9\uC790\uC758 \uC758\uBB34 \uB4F1 \uBCF8 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC5D0 \uC704\uBC30\uB418\uB294 \uD589\uB3D9\uC744 \uD55C \uACBD\uC6B0, \uC784\uC758\uB85C \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC744 \uC81C\uD55C \uBC0F \uC911\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uC811\uC18D\uC744 \uAE08\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', A4 = main6.a(), I3 = main6.e("h3"), I3.textContent = "\uC81C6\uC870 \uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8", j5 = main6.a(), S4 = main6.e("div"), S4.innerHTML = '(1) \uCC9C\uC7AC\uC9C0\uBCC0, \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC \uB4F1 \uD68C\uC0AC\uAC00 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC774 \uBD88\uAC00\uB2A5\uD560 \uACBD\uC6B0 \uC77C\uC2DC\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uD55C, \uC815\uC9C0\uC2DC\uD0AC \uC218 \uC788\uC73C\uBA70 \uC0AC\uC804 \uB610\uB294 \uC0AC\uD6C4 \uD68C\uC6D0\uC5D0\uAC8C \uC911\uC9C0\uC0AC\uC720 \uBC0F \uAE30\uAC04\uC744 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC704 \uC218\uC815, \uBCC0\uACBD \uBC0F \uC911\uB2E8\uC5D0 \uB300\uD558\uC5EC \uD68C\uC6D0 \uB610\uB294 \uC81C3\uC790\uC5D0 \uC5B4\uB5A0\uD55C \uCC45\uC784\uB3C4 \uBD80\uB2F4\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uAE34\uAE09\uD55C \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218\uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uB450\uC808 \uB610\uB294 \uC6B4\uC601\uC0C1 \uC0C1\uB2F9\uD55C \uC774\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uCF58\uD150\uCE20\uC758 \uC774\uC6A9\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC11C\uBE44\uC2A4 \uC911\uC9C0 1\uC8FC\uC77C \uC804\uC5D0 \uACE0\uC9C0 \uD6C4 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774 \uAE30\uAC04 \uB3D9\uC548 \uD68C\uC6D0\uC774 \uACE0\uC9C0\uB0B4\uC6A9\uC744 \uC778\uC9C0\uD558\uC9C0 \uBABB\uD55C \uAC83\uC5D0 \uB300\uD558\uC5EC \uD68C\uC0AC\uB294 \uCC45\uC784\uC744 \uBD80\uB2F4\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4. \uC0C1\uB2F9\uD55C \uC774\uC720\uAC00 \uC788\uC744 \uACBD\uC6B0 \uC704 \uC0AC\uC804 \uACE0\uC9C0\uAE30\uAC04\uC740 \uAC10\uCD95\uB418\uAC70\uB098 \uC0DD\uB7B5\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC0AC\uAC00 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD560 \uC218 \uC5C6\uB294 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC0AC\uD6C4\uC5D0 \uD1B5\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uC758 \uACB0\uC815, \uBCC0\uACBD, \uC720\uC9C0, \uC911\uB2E8\uC5D0 \uAD00\uD55C \uD3EC\uAD04\uC801\uC778 \uAD8C\uD55C\uC744 \uAC00\uC9D1\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC601\uC5C5\uC758 \uD3D0\uC9C0, \uD569\uBCD1, \uBD84\uD560, \uB2F9\uD574 \uC11C\uBE44\uC2A4\uC758 \uC218\uC775\uC545\uD654, \uC11C\uBE44\uC2A4 \uC720\uC9C0 \uB4F1 \uC0C1\uB2F9\uD55C \uC774\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C\uACF5\uD558\uACE0 \uC788\uB294 \uC804\uBD80 \uB610\uB294 \uC77C\uBD80 \uC11C\uBE44\uC2A4\uB97C \uBCC0\uACBD\uD558\uAC70\uB098 \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC0AC\uC758 \uC0AC\uC815\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uC601\uAD6C\uC801\uC73C\uB85C \uC911\uB2E8\uD558\uC5EC\uC57C \uD560 \uACBD\uC6B0\uC5D0 \uC81C2\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC774 \uACBD\uC6B0 \uC0AC\uC804 \uACE0\uC9C0\uAE30\uAC04\uC740 1\uAC1C\uC6D4\uB85C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC911\uC9C0\uC5D0 \uC758\uD558\uC5EC \uBCF8 \uC11C\uBE44\uC2A4\uC5D0 \uBCF4\uAD00\uB418\uAC70\uB098 \uC804\uC1A1\uB41C \uBA54\uC2DC\uC9C0 \uBC0F \uAE30\uD0C0 \uD1B5\uC2E0 \uBA54\uC2DC\uC9C0 \uB4F1\uC758 \uB0B4\uC6A9\uC774 \uBCF4\uAD00\uB418\uC9C0 \uBABB\uD558\uC600\uAC70\uB098 \uC0AD\uC81C\uB41C \uACBD\uC6B0, \uC804\uC1A1\uB418\uC9C0 \uBABB\uD55C \uACBD\uC6B0 \uBC0F \uAE30\uD0C0 \uD1B5\uC2E0 \uB370\uC774\uD130\uC758 \uC190\uC2E4\uC774 \uC788\uC744 \uACBD\uC6B0\uC5D0 \uB300\uD558\uC5EC \uCC45\uC784\uC744 \uBD80\uB2F4\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (6) \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uC5D0 \uD544\uC694\uD55C \uACBD\uC6B0 \uC815\uAE30\uC810\uAC80\uC744 \uC2E4\uC2DC\uD560 \uC218 \uC788\uC73C\uBA70, \uC815\uAE30\uC810\uAC80\uC2DC\uAC04\uC740 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uD654\uBA74\uC5D0 \uACF5\uC9C0\uD55C \uBC14\uC5D0 \uB530\uB985\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (7) \uC7A5\uAE30\uAC04 \uD734\uBA74 \uD68C\uC6D0\uC778 \uACBD\uC6B0, \uC548\uB0B4 \uBA54\uC77C \uB610\uB294 \uACF5\uC9C0\uC0AC\uD56D \uBC1C\uD45C \uD6C4 1\uC8FC\uC77C\uAC04\uC758 \uD1B5\uC9C0\uAE30\uAC04\uC744 \uAC70\uCCD0 \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC744 \uC911\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', _3 = main6.a(), O3 = main6.e("h3"), O3.textContent = "\uC81C7\uC870 \uD68C\uC6D0\uAC00\uC785 \uB4F1 \uC774\uC6A9\uACC4\uC57D\uC758 \uC131\uB9BD", R3 = main6.a(), z4 = main6.e("div"), z4.innerHTML = '(1) \uC774\uC6A9\uC790\uB294 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC591\uC2DD\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uBCF8 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC11C \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uAC00 \uAE30\uC785\uD55C \uB0B4\uC6A9\uC5D0 \uB300\uD574 \uC804\uBB38\uAE30\uAD00\uC744 \uD1B5\uD55C \uBCF8\uC778\uC778\uC99D\uC744 \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uC720\uB8CC \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uB9CC 14\uC138 \uBBF8\uB9CC\uC758 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC81C\uD55C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. <br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774\uC6A9\uC2E0\uCCAD\uC744 \uC2B9\uB099\uD558\uC9C0 \uC544\uB2C8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uC774\uBBF8 \uAC00\uC785\uB41C \uD68C\uC6D0\uACFC \uC774\uBA54\uC77C \uC8FC\uC18C\uAC00 \uB3D9\uC77C\uD55C \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        2. \uD68C\uC6D0\uAC00\uC785 \uC2E0\uCCAD\uC11C\uC758 \uB0B4\uC6A9\uC744 \uD5C8\uC704\uB85C \uAE30\uC7AC\uD558\uC600\uC744 \uB54C<br class="svelte-h0vy4q"/>\n        3. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uC5EC \uC2E0\uCCAD\uD558\uC600\uC744 \uB54C<br class="svelte-h0vy4q"/>\n        4. \uC0AC\uD68C\uC758 \uC548\uB155 \uC9C8\uC11C \uD639\uC740 \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD560 \uBAA9\uC801\uC73C\uB85C \uC2E0\uCCAD\uD588\uC744 \uB54C<br class="svelte-h0vy4q"/>\n        5. \uAE30\uD0C0 \uD68C\uC0AC\uAC00 \uC815\uD55C \uC774\uC6A9\uC2E0\uCCAD \uC694\uAC74\uC774 \uBBF8\uBE44\uB418\uC5C8\uC744 \uB54C</p>\n    (4) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0 \uADF8 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC774\uC6A9\uACC4\uC57D \uC131\uB9BD\uC744 \uC720\uBCF4 \uB610\uB294 \uC77C\uBD80 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC81C\uD55C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uC11C\uBE44\uC2A4 \uAD00\uB828 \uC81C\uBC18 \uC6A9\uB7C9\uC774 \uBD80\uC871\uD55C \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        2. \uAE30\uC220\uC0C1 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        3. \uAE30\uD0C0 \uD68C\uC0AC\uAC00 \uD544\uC694\uD558\uB2E4\uACE0 \uC778\uC815\uD55C \uACBD\uC6B0</p>\n    (5) \uC774\uC6A9\uACC4\uC57D\uC758 \uC131\uB9BD \uC2DC\uAE30\uB294 \uD68C\uC0AC\uC758 \uC2B9\uB099 \uD1B5\uC9C0\uAC00 \uD68C\uC6D0\uC5D0\uAC8C \uB3C4\uB2EC\uD55C \uC2DC\uC810\uC73C\uB85C \uD569\uB2C8\uB2E4.', F4 = main6.a(), k5 = main6.e("h3"), k5.textContent = "\uC81C8\uC870 \uD68C\uC6D0 \uD0C8\uD1F4 \uBC0F \uC790\uACA9 \uC0C1\uC2E4", P3 = main6.a(), W3 = main6.e("div"), W3.innerHTML = '(1) \uD68C\uC6D0\uC740 \uD68C\uC0AC\uC5D0 \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \uD68C\uC0AC\uB294 \uD68C\uC6D0\uD0C8\uD1F4\uC5D0 \uAD00\uD55C \uADDC\uC815\uC5D0 \uB530\uB77C \uC774\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774 \uD68C\uC6D0\uD0C8\uD1F4\uB97C \uC2E0\uCCAD\uD55C \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uD68C\uC6D0 \uBCF8\uC778 \uC5EC\uBD80\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB420 \uB54C\uC5D0\uB294 \uD68C\uC0AC\uB294 \uD0C8\uD1F4 \uC694\uCCAD\uC744 \uCC98\uB9AC\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uD68C\uC6D0\uC774 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC5D0 \uCC38\uC5EC \uC911\uC778 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        2. \uD68C\uC6D0\uC774 \uC9C4\uD589\uD558\uAC70\uB098 \uCC38\uC5EC\uD55C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC9C4\uD589 \uC911\uC778 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        3. \uD68C\uC6D0\uC774 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC774 \uD68C\uC0AC \uB610\uB294 \uC81C3\uC790\uC640 \uC9C4\uD589 \uC911\uC778 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        4. \uAE30\uD0C0 \uD68C\uC6D0\uC774 \uBD80\uB2F4\uD574\uC57C \uD560 \uC758\uBB34\uB97C \uB2E4\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0</p>\n    (3) \uD68C\uC0AC\uAC00 \uD68C\uC6D0 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uBA74 \uAD00\uACC4\uBC95\uB839\uACFC \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uBCF4\uC720\uD558\uB294 \uC815\uBCF4 \uC774\uC678 \uB370\uC774\uD130\uB97C \uBAA8\uB450 \uD3D0\uAE30\uD569\uB2C8\uB2E4. \uB2E8, \uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uD68C\uC6D0\uC790\uACA9\uC744 \uC81C\uD55C \uBC0F \uC815\uC9C0\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uAC00\uC785\uC2E0\uCCAD \uC2DC\uC5D0 \uD5C8\uC704 \uB0B4\uC6A9\uC744 \uB4F1\uB85D\uD55C \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        2. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uD68C\uC6D0\uC774 \uBD80\uB2F4\uD558\uB294 \uCC44\uBB34\uB97C \uC57D\uC815\uB41C \uAE30\uC77C\uC5D0 \uC9C0\uAE09\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        3. \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uBC29\uD574\uD558\uAC70\uB098 \uADF8 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uB294 \uB4F1 \uC804\uC790\uAC70\uB798\uC9C8\uC11C\uB97C \uC704\uD611\uD558\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        4. \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC5EC \uBC95\uB839\uACFC \uBCF8 \uC57D\uAD00\uC774 \uAE08\uC9C0\uD558\uAC70\uB098 \uACF5\uACF5\uC9C8\uC11C \uBBF8\uD48D\uC591\uC18D\uC5D0 \uBC18\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0</p>\n    (5) \uD68C\uC0AC\uAC00 \uD68C\uC6D0\uC790\uACA9\uC744 \uC81C\uD55C \uB610\uB294 \uC815\uC9C0\uC2DC\uD0A8 \uD6C4 \uB3D9\uC77C \uB610\uB294 \uC720\uC0AC\uD55C \uD589\uC704\uAC00 2\uD68C \uC774\uC0C1 \uBC18\uBCF5\uB418\uAC70\uB098 7\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uC0AC\uC720\uAC00 \uC2DC\uC815\uB418\uC9C0 \uC544\uB2C8\uD558\uB294 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC758 \uC811\uC18D\uC744 \uAE08\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uD68C\uC6D0\uC774 \uAC8C\uC2DC\uD55C \uB0B4\uC6A9\uC758 \uC804\uBD80 \uB610\uB294 \uC77C\uBD80\uB97C \uC784\uC758\uB85C \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (6) \uD68C\uC0AC\uAC00 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uC2DC\uD0A4\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC6D0\uB4F1\uB85D\uC744 \uB9D0\uC18C\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uD68C\uC6D0\uC5D0\uAC8C \uC774\uB97C \uD1B5\uC9C0\uD558\uACE0, \uD68C\uC6D0\uB4F1\uB85D \uB9D0\uC18C \uC804\uC5D0 \uC18C\uBA85\uD560 \uAE30\uD68C\uB97C \uBD80\uC5EC\uD569\uB2C8\uB2E4.', X3 = main6.a(), Y3 = main6.e("h3"), Y3.textContent = "\uC81C9\uC870 \uD68C\uC6D0\uC758 ID\uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34", B4 = main6.a(), E4 = main6.e("div"), E4.innerHTML = '(1) ID\uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uBE44\uBC00\uC720\uC9C0 \uBC0F \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC73C\uBA70, \uC774\uB97C \uC18C\uD640\uD788 \uD558\uC5EC \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uBBFC\u2219\uD615\uC0AC\uC0C1\uC758 \uCC45\uC784\uC740 \uD68C\uC6D0 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4. <br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC6D0\uC740 \uC0AC\uC774\uD2B8 \uB0B4\uC5D0\uC11C ID\uC640 \uBE44\uBC00\uBC88\uD638\uC758 \uAD00\uB9AC \uBC0F \uBCC0\uACBD\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC2E0\uCCAD\uC2DC\uC758 \uAE30\uC7AC\uC0AC\uD56D\uC5D0 \uBCC0\uB3D9\uC774 \uC788\uC744 \uACBD\uC6B0 \uD68C\uC6D0\uC740 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uC815\uBCF4\uB97C \uC218\uC815\uD574\uC57C \uD558\uBA70, \uC804\uC790\uC6B0\uD3B8 \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uD68C\uC0AC\uC5D0 \uB300\uD558\uC5EC \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4. <br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC6D0\uC740 \uC790\uC2E0\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC774\uC6A9\uD558\uAC8C \uD574\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uB3C4\uB09C \uB610\uB294 \uB3C4\uC6A9 \uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uC778\uC9C0\uD55C \uACBD\uC6B0\uC5D0\uB294 \uC989\uC2DC \uD68C\uC0AC\uC5D0 \uD1B5\uBCF4\uD558\uACE0 \uD68C\uC0AC\uC758 \uC548\uB0B4\uAC00 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC6D0\uC774 \uC81C2\uD56D, \uC81C4\uD56D\uC5D0 \uB530\uB978 \uD1B5\uC9C0\uB97C \uD558\uC9C0 \uC54A\uAC70\uB098 \uD68C\uC0AC\uC758 \uC870\uCE58\uC5D0 \uC751\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uBC1C\uC0DD\uD558\uB294 \uBAA8\uB4E0 \uBD88\uC774\uC775\uC5D0 \uB300\uD55C \uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.', G3 = main6.a(), J3 = main6.e("h3"), J3.textContent = "\uC81C10\uC870 \uD68C\uC0AC\uC758 \uC758\uBB34", K3 = main6.a(), N3 = main6.e("div"), N3.innerHTML = '(1) \uD68C\uC0AC\uB294 \uBC95\uB839\uACFC \uBCF8 \uC57D\uAD00\uC774 \uAE08\uC9C0\uD558\uAC70\uB098 \uBBF8\uD48D\uC591\uC18D\uC5D0 \uBC18\uD558\uB294 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC73C\uBA70, \uC9C0\uC18D\uC801\uC774\uACE0 \uC548\uC815\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uB370\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC2E0\uC0C1 \uC815\uBCF4\uB97C \uBCF8\uC778\uC758 \uC2B9\uB099 \uC5C6\uC774 \uC81C3\uC790\uC5D0\uAC8C \uB204\uC124, \uBC30\uD3EC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC, \uAD00\uACC4\uBC95\uB839\uC5D0 \uC758\uD574 \uAD6D\uAC00\uAE30\uAD00\uC758 \uC694\uAD6C\uB098 \uC804\uAE30\uD1B5\uC2E0\uAD00\uB828\uBC95\uB839 \uBC0F \uBC29\uC1A1\uD1B5\uC2E0\uC2EC\uC758\uC704\uC6D0\uD68C\uC758 \uC694\uCCAD \uB4F1 \uBC95\uB960\uC758 \uADDC\uC815\uC5D0 \uB530\uB978 \uC801\uBC95\uD55C \uC808\uCC28\uC5D0 \uC758\uD55C \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB7EC\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uB294 \uACC4\uC18D\uC801\uC774\uACE0 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uC124\uBE44\uC5D0 \uC7A5\uC560\uAC00 \uC0DD\uAE30\uAC70\uB098 \uBA78\uC2E4\uB41C \uB54C\uC5D0\uB294 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uAC00 \uC5C6\uB294 \uD55C \uC9C0\uCCB4\uC5C6\uC774 \uC774\uB97C \uC218\uB9AC \uB610\uB294 \uBCF5\uAD6C\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC720\uB8CC\uC11C\uBE44\uC2A4\uB85C \uC778\uD558\uC5EC \uD68C\uC6D0\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0 \uADF8\uB7EC\uD55C \uC190\uD574\uAC00 \uD68C\uC0AC\uC758 \uACE0\uC758\uB098 \uC911\uACFC\uC2E4\uC5D0 \uAE30\uD574 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uCC45\uC784\uC744 \uBD80\uB2F4\uD558\uBA70, \uADF8 \uCC45\uC784\uC758 \uBC94\uC704\uB294 \uC9C0\uAE09\uD55C \uC720\uB8CC\uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uB8CC\uC5D0 \uD55C\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC73C\uB85C\uBD80\uD130 \uC81C\uAE30\uB418\uB294 \uC758\uACAC\uC774\uB098 \uBD88\uB9CC\uC774 \uC815\uB2F9\uD558\uB2E4\uACE0 \uC778\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC2E0\uC18D\uD788 \uCC98\uB9AC\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC2E0\uC18D\uD55C \uCC98\uB9AC\uAC00 \uACE4\uB780\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC6D0\uC5D0\uAC8C \uADF8 \uC0AC\uC720\uC640 \uCC98\uB9AC\uC77C\uC815\uC744 \uD1B5\uBCF4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4. <br class="svelte-h0vy4q"/>\n    (6) \uD68C\uC0AC\uB294 \uAD00\uB828\uBC95\uB839\uC774 \uC815\uD558\uB294 \uBC14\uC5D0 \uB530\uB77C\uC11C \uD68C\uC6D0 \uB4F1\uB85D\uC815\uBCF4\uB97C \uD3EC\uD568\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uAE30 \uC704\uD558\uC5EC \uB178\uB825\uD558\uBA70, \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD574\uC11C\uB294 \uAD00\uB828\uBC95\uB839 \uBC0F \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC9C0\uD0B5\uB2C8\uB2E4.', Q3 = main6.a(), U3 = main6.e("h3"), U3.textContent = "\uC81C11\uC870 \uC774\uC6A9\uC790\uC758 \uC758\uBB34", V3 = main6.a(), Z3 = main6.e("div"), Z3.innerHTML = '(1) \uD68C\uC6D0\uC740 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574 \uAC00\uC785\uD560 \uACBD\uC6B0 \uD604\uC7AC\uC758 \uC0AC\uC2E4\uACFC \uC77C\uCE58\uD558\uB294 \uC644\uC804\uD55C \uC815\uBCF4(\uC774\uD558 &quot;\uAC00\uC785\uC815\uBCF4&quot;)\uB97C \uC81C\uACF5\uD574\uC57C \uD558\uBA70, \uAC00\uC785\uC815\uBCF4\uAC00 \uBCC0\uACBD\uB41C \uACBD\uC6B0 \uC989\uC2DC \uAC31\uC2E0\uD574\uC57C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC6D0\uC740 \uBCF8\uC778\uC758 \uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638 \uAD00\uB9AC\uB97C \uC704\uD574 \uC815\uBCF4\uBCF4\uC548 \uC0AC\uD56D\uC744 \uC900\uC218\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC6D0\uC740 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9 \uC2DC, \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uD589\uC704\uB97C \uD574\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uD68C\uC6D0\uAC00\uC785\uC2E0\uCCAD \uB610\uB294 \uBCC0\uACBD \uC2DC \uD5C8\uC704 \uB0B4\uC6A9 \uB4F1\uB85D<br class="svelte-h0vy4q"/>\n        2. \uD0C0\uC778\uC758 \uC815\uBCF4 \uBC0F \uACB0\uC81C\uC218\uB2E8\uC744 \uB3C4\uC6A9\uD558\uAC70\uB098 \uD0C0\uC778\uC758 \uC800\uC791\uBB3C\uC744 \uC784\uC758\uB85C \uD65C\uC6A9\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uD0C0\uC778\uC758 \uC544\uC774\uB514(ID), \uBE44\uBC00\uBC88\uD638(PASSWORD) \uB3C4\uC6A9 \uBC0F \uD0C0\uC778\uC73C\uB85C \uAC00\uC7A5\uD558\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        3. \uD0C0\uC778(\uC18C\uC218\uB97C \uD3EC\uD568)\uC5D0\uAC8C \uC704\uD574\uB97C \uAC00\uD558\uAC70\uB098 \uD0C0\uC778\uACFC\uC758 \uAD00\uACC4\uB97C \uD5C8\uC704\uB85C \uBA85\uC2DC\uD558\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        4. \uD68C\uC0AC\uAC00 \uAC8C\uC2DC\uD55C \uC815\uBCF4\uC758 \uC784\uC758 \uBCC0\uACBD<br class="svelte-h0vy4q"/>\n        5. \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uC62C\uBC14\uB978 \uC791\uB3D9\uC744 \uBC29\uD574\uD558\uB294 \uD589\uC704 \uBC0F \uC2DC\uC2A4\uD15C \uC11C\uBC84\uC5D0 \uACFC\uBD80\uD558\uB97C \uAC00\uC838\uC624\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        6. \uCEF4\uD4E8\uD130 \uC18C\uD504\uD2B8\uC6E8\uC5B4, \uD558\uB4DC\uC6E8\uC5B4, \uC804\uAE30\uD1B5\uC2E0 \uC7A5\uBE44\uB97C \uD30C\uAD34, \uBC29\uD574 \uB610\uB294 \uAE30\uB2A5\uC744 \uC81C\uD55C\uD558\uAE30 \uC704\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBC14\uC774\uB7EC\uC2A4 \uB610\uB294 \uB2E4\uB978 \uCEF4\uD4E8\uD130 \uCF54\uB4DC, \uD30C\uC77C, \uD504\uB85C\uADF8\uB7A8\uC744 \uD3EC\uD568\uD558\uACE0 \uC788\uB294 \uC790\uB8CC\uB97C \uAC8C\uC2DC, \uAC8C\uC7AC, \uC804\uC790\uC6B0\uD3B8\uC73C\uB85C \uBCF4\uB0B4\uB294 \uD589\uC704<br class="svelte-h0vy4q"/> \n        7. \uBD88\uD544\uC694\uD558\uAC70\uB098 \uC2B9\uC778\uB418\uC9C0 \uC54A\uC740 \uAD11\uACE0, \uD310\uCD09\uBB3C\uC744 \uAC8C\uC7AC\uD558\uAC70\uB098, \uC2A4\uD338, \uC800\uC18D \uB610\uB294 \uC74C\uB780\uD55C \uB370\uC774\uD130, \uD14D\uC2A4\uD2B8, \uC18C\uD504\uD2B8\uC6E8\uC5B4, \uC74C\uC545, \uC0AC\uC9C4, \uADF8\uB798\uD53D, \uBE44\uB514\uC624 \uBA54\uC2DC\uC9C0 \uB4F1\uC744 \uAC8C\uC7AC\uD558\uAC70\uB098 \uBA54\uC2DC\uC9C0 \uB610\uB294 \uC804\uC790\uC6B0\uD3B8\uC73C\uB85C \uBCF4\uB0B4\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        8. \uD68C\uC0AC\uAC00 \uC815\uD55C \uC815\uBCF4 \uC774\uC678\uC758 \uC815\uBCF4(\uCEF4\uD4E8\uD130 \uD504\uB85C\uADF8\uB7A8)\uC758 \uC1A1\uC2E0 \uB610\uB294 \uAC8C\uC2DC<br class="svelte-h0vy4q"/>\n        9. \uAD8C\uB9AC(\uC9C0\uC2DD\uC7AC\uC0B0\uAD8C\uC744 \uD3EC\uD568\uD55C \uBAA8\uB4E0 \uAD8C\uB9AC)\uAC00 \uC5C6\uB294 \uCF58\uD150\uCE20\uB97C \uAC8C\uC7AC\uD558\uAC70\uB098 \uBA54\uC2DC\uC9C0 \uB610\uB294 \uC804\uC790\uC6B0\uD3B8\uC73C\uB85C \uBCF4\uB0B4\uB294 \uB4F1 \uD68C\uC0AC\uC640 \uAE30\uD0C0 \uC81C3\uC790\uC758 \uC800\uC791\uAD8C \uB4F1 \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C \uCE68\uD574\uD589\uC704<br class="svelte-h0vy4q"/>\n        10. \uD68C\uC0AC\uB098 \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uC190\uC0C1\uC2DC\uD0A4\uAC70\uB098 \uC5C5\uBB34\uB97C \uBC29\uD574\uD558\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        11. \uC678\uC124 \uB610\uB294 \uD3ED\uB825\uC801\uC778 \uBA54\uC2DC\uC9C0\u2219\uD654\uC0C1\u2219\uC74C\uC131 \uAE30\uD0C0 \uACF5\uC11C\uC591\uC18D\uC5D0 \uBC18\uD558\uB294 \uC815\uBCF4\uB97C \uC0AC\uC774\uD2B8\uC5D0 \uACF5\uAC1C \uB610\uB294 \uAC8C\uC2DC\uD558\uAC70\uB098 \uC218\uCE58\uC2EC\uC774\uB098 \uD610\uC624\uAC10 \uB610\uB294 \uACF5\uD3EC\uC2EC\uC744 \uC77C\uC73C\uD0A4\uB294 \uB9D0\uC774\uB098 \uC74C\uD5A5, \uAE00\uC744 \uD0C0\uC778\uC5D0\uAC8C \uC804\uB2EC\uD558\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        12. \uD68C\uC0AC\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC601\uB9AC\uB97C \uBAA9\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 \uD68C\uC0AC\uC758 \uC0AC\uC804 \uC2B9\uB099 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uD1B5\uD558\uC5EC \uC5BB\uC740 \uC815\uBCF4\uB97C \uAC00\uACF5, \uD310\uB9E4\uD558\uB294 \uD589\uC704 \uB4F1 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD55C \uC601\uB9AC\uD589\uC704<br class="svelte-h0vy4q"/>\n        13. \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uAD8C\uD55C, \uAE30\uD0C0 \uC774\uC6A9\uACC4\uC57D\uC0C1\uC758 \uC9C0\uC704\uB97C \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBC0F \uC99D\uC5EC, \uB610\uB294 \uB2F4\uBCF4\uB85C \uC7A1\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        14. \uB2E4\uB978 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBB34\uB2E8\uC73C\uB85C \uC218\uC9D1 \uB610\uB294 \uC800\uC7A5\uD558\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        15. \uC790\uAE30 \uB610\uB294 \uD0C0\uC778\uC5D0\uAC8C \uC7AC\uC0B0\uC0C1\uC758 \uC774\uC775\uC744 \uC8FC\uAC70\uB098 \uD0C0\uC778\uC5D0\uAC8C \uC190\uD574\uB97C \uAC00\uD560 \uBAA9\uC801\uC73C\uB85C \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uC720\uD1B5\uC2DC\uD0A4\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        16. \uC7AC\uBB3C\uC744 \uAC78\uACE0 \uB3C4\uBC15\uD558\uAC70\uB098 \uC0AC\uD589\uD589\uC704\uB97C \uD558\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        17. \uAE30\uD0C0 \uBD88\uBC95\uC801\uC774\uAC70\uB098 \uBD80\uB2F9\uD55C \uD589\uC704</p>\n    (4) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01\uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0\uB97C \uBD80\uC815 \uC774\uC6A9\uD589\uC704\uB85C \uBD05\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uC790\uC2E0\uC758 ID \uBC0F \uCF58\uD150\uCE20\uB97C \uD0C0\uC778\uC5D0\uAC8C \uD310\uB9E4, \uB300\uC5EC, \uC591\uB3C4\uD558\uB294 \uD589\uC704 \uBC0F \uC774\uB97C \uAD11\uACE0\uD558\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        2. \uD0C0\uC778\uC774 \uC791\uC131\uD558\uB294 \uB4F1 \uD0C0\uC778\uC5D0\uAC8C \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C\uC774 \uC788\uB294 \uCF58\uD150\uCE20\uB97C \uC790\uC2E0\uC758 \uAC1C\uC778 \uD398\uC774\uC9C0\uC5D0 \uAC8C\uC2DC\uD558\uAC70\uB098 \uC790\uC2E0\uC5D0\uAC8C \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C\uC774 \uC788\uB294 \uAC83\uC73C\uB85C \uC624\uD574\uD560 \uC218 \uC788\uB294 \uC678\uAD00\uC744 \uB9CC\uB4DC\uB294 \uD589\uC704<br class="svelte-h0vy4q"/>\n        3. \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911, \uBCF5\uC81C\uD504\uB85C\uADF8\uB7A8\uC744 \uC2E4\uD589\uD558\uAC70\uB098 \uD654\uBA74\uC744 \uCEA1\uCCD0, \uB610\uB294 \uB179\uD654\uB97C \uD558\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        4. \uCF58\uD150\uCE20\uC758 DRM(Digital Rights Management)\uC744 \uBB34\uB825\uD654\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704<br class="svelte-h0vy4q"/>\n        5. \uACB0\uC81C\uB97C \uD1B5\uD55C \uD68C\uC0AC\uC640 \uD68C\uC6D0 \uAC04\uC758 \uC815\uB2F9\uD55C \uACC4\uC57D\uC774 \uC131\uB9BD\uB418\uC9C0 \uC544\uB2C8\uD55C \uC0C1\uD0DC\uC5D0\uC11C \uCF58\uD150\uCE20\uB97C \uBD88\uBC95\uC73C\uB85C \uC0AC\uC6A9\uD558\uB824\uB294 \uC77C\uCCB4\uC758 \uD589\uC704</p>\n    (5) \uC774\uC6A9\uC790\uB294 \uBCF8 \uC57D\uAD00 \uBC0F \uAD00\uACC4\uBC95\uB839\uC5D0\uC11C \uADDC\uC815\uD55C \uC0AC\uD56D\uC744 \uC900\uC218\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.', ss = main6.a(), es = main6.e("h3"), es.textContent = "\uC81C12\uC870 \uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0", ts = main6.a(), ls = main6.e("div"), ls.innerHTML = '(1) \uD68C\uC0AC\uAC00 \uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uD68C\uC6D0\uC774 \uD68C\uC0AC\uC640 \uBBF8\uB9AC \uC57D\uC815\uD558\uC5EC \uC9C0\uC815\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD31D\uC5C5, \uC6F9/\uC571 \uD478\uC2DC\uC54C\uB9BC, \uC804\uD654\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uBD88\uD2B9\uC815 \uB2E4\uC218 \uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0\uC758 \uACBD\uC6B0, 1\uC8FC\uC77C \uC774\uC0C1 \uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD568\uC73C\uB85C\uC368 \uAC1C\uBCC4 \uD1B5\uC9C0\uC5D0 \uAC08\uC74C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0 \uBCF8\uC778\uC758 \uAC70\uB798\uC640 \uAD00\uB828\uD558\uC5EC \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uC0AC\uD56D\uC5D0 \uB300\uD558\uC5EC\uB294 \uAC1C\uBCC4 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.', ns = main6.a(), vs = main6.e("h3"), vs.textContent = "\uC81C13\uC870 \uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C", cs = main6.a(), as = main6.e("div"), as.innerHTML = '(1) \uD68C\uC6D0\uC774 \uC11C\uBE44\uC2A4\uC5D0 \uB4F1\uB85D\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uD0C0\uC778 \uAC8C\uC2DC\uBB3C\uC758 \uD65C\uC6A9 \uB4F1\uC73C\uB85C \uC778\uD558\uC5EC \uBCF8\uC778 \uB610\uB294 \uD0C0\uC778\uC5D0\uAC8C \uC190\uD574\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0 \uD68C\uC6D0\uC740 \uC774\uC5D0 \uB300\uD55C \uCC45\uC784\uC744 \uC9C0\uAC8C \uB418\uBA70, \uD68C\uC0AC\uB294 \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC774 \uC5C6\uB294 \uD55C \uC774\uC5D0 \uB300\uD558\uC5EC \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C\uC774 \uB2E4\uC74C \uAC01 \uD56D\uC5D0 \uD574\uB2F9\uD55C\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\uC5D0 \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC811\uADFC\uAE08\uC9C0 \uB610\uB294 \uC0AD\uC81C\uCC98\uB9AC\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uD68C\uC0AC\uB294 \uC774\uB7EC\uD55C \uC815\uBCF4\uC758 \uC0AD\uC81C \uB4F1\uC744 \uD560 \uC758\uBB34\uB97C \uC9C0\uB294 \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uB2E4\uB978 \uD68C\uC6D0 \uB610\uB294 \uC81C3\uC790\uB97C \uBE44\uBC29\uD558\uAC70\uB098 \uBA85\uC608\uB97C \uD6FC\uC190\uC2DC\uD0A4\uB294 \uB0B4\uC6A9\uC778 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        2. \uACF5\uACF5\uC9C8\uC11C \uBC0F \uBBF8\uD48D\uC591\uC18D\uC5D0 \uC704\uBC18\uB418\uB294 \uB0B4\uC6A9\uC778 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        3. \uBC94\uC8C4\uC801 \uD589\uC704\uC5D0 \uACB0\uBD80\uB41C\uB2E4\uACE0 \uC778\uC815\uB418\uB294 \uB0B4\uC6A9\uC77C \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        4. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uC800\uC791\uAD8C \uB4F1 \uAE30\uD0C0 \uAD8C\uB9AC\uB97C \uCE68\uD574\uD558\uAC70\uB098 \uCE68\uD574\uD560 \uC6B0\uB824\uAC00 \uD604\uC800\uD55C \uB0B4\uC6A9\uC778 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        5. \uC11C\uBE44\uC2A4 \uC131\uACA9\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uB294 \uC815\uBCF4\uC758 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        6. \uBCF8 \uC11C\uBE44\uC2A4 \uC57D\uAD00\uC5D0 \uC704\uBC30\uB418\uAC70\uB098 \uC0C1\uC6A9 \uB610\uB294 \uBD88\uBC95, \uC74C\uB780, \uC800\uC18D\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAC8C\uC2DC\uD55C \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        7. \uAE30\uD0C0 \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC704\uBC30\uB418\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        8. \uD68C\uC0AC\uAC00 \uC0C1\uAE30 \uD56D\uBAA9 \uC704\uBC18\uC744 \uC774\uC720\uB85C \uD68C\uC6D0 \uB4F1 \uC81C3\uC790\uB85C\uBD80\uD130 \uC2E0\uACE0\uB97C \uC811\uC218\uD55C \uACBD\uC6B0</p>\n    (4) \uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C\uC774 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uBC0F \uC800\uC791\uAD8C\uBC95 \uB4F1 \uAD00\uB828\uBC95\uB839\uC5D0 \uC704\uBC18\uB418\uB294 \uB0B4\uC6A9\uC744 \uD3EC\uD568\uD558\uB294 \uACBD\uC6B0, \uAD8C\uB9AC\uC790\uB294 \uAD00\uB828\uBC95\uB839\uC774 \uC815\uD55C \uC808\uCC28\uC5D0 \uB530\uB77C \uD574\uB2F9 \uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uB4F1\uC744 \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \uD68C\uC0AC\uB294 \uAD00\uB828\uBC95\uB839 \uB0B4\uC5D0\uC11C \uD68C\uC0AC\uAC00 \uC815\uD558\uB294 \uC808\uCC28\uC5D0 \uB530\uB77C \uC870\uCE58\uB97C \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC0AC\uB294 \uC804\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uC790\uC758 \uC694\uCCAD\uC774 \uC5C6\uB294 \uACBD\uC6B0\uB77C\uB3C4 \uAD8C\uB9AC\uCE68\uD574\uAC00 \uC778\uC815\uB420 \uB9CC\uD55C \uC0AC\uC720\uAC00 \uC788\uAC70\uB098 \uAE30\uD0C0 \uD68C\uC0AC \uC815\uCC45 \uBC0F \uAD00\uB828\uBC95\uC5D0 \uC704\uBC18\uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAD00\uB828\uBC95\uB839\uC5D0 \uB530\uB77C \uD574\uB2F9 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD574 \uC0AD\uC81C\uB098 \uC811\uADFC\uAE08\uC9C0 \uB4F1\uC758 \uC870\uCE58\uB97C \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (6) \uD68C\uC6D0\uC740 \uAC8C\uC2DC\uBB3C\uC774 \uD0C0\uC778\uC758 \uC800\uC791\uAD8C \uBC0F \uAE30\uD0C0 \uAD8C\uB9AC\uB97C \uCE68\uD574\uD558\uC9C0 \uC54A\uC74C\uC744 \uBCF4\uC7A5\uD558\uBA70, \uAC8C\uC2DC\uBB3C\uC774 \uD0C0\uC778\uC758 \uC800\uC791\uAD8C \uB4F1\uC744 \uCE68\uD574\uD568\uC73C\uB85C\uC368 \uBC1C\uC0DD\uD558\uB294 \uBBFC\uD615\uC0AC\uC0C1\uC758 \uCC45\uC784\uC744 \uC804\uC801\uC73C\uB85C \uBD80\uB2F4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.', is = main6.a(), rs = main6.e("h3"), rs.textContent = "\uC81C14\uC870 \uAD8C\uB9AC\uC758 \uADC0\uC18D \uBC0F \uC800\uC791\uBB3C\uC758 \uC774\uC6A9", hs = main6.a(), os = main6.e("div"), os.innerHTML = '(1) \uD68C\uC0AC\uAC00 \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C\uC744 \uD3EC\uD568\uD55C \uC77C\uCCB4\uC758 \uAD8C\uB9AC\uB294 \uD68C\uC0AC\uC5D0 \uADC0\uC18D\uB429\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uD68C\uC6D0\uC774 \uC9C1\uC811 \uC791\uC131\uD55C \uAC8C\uC2DC\uBB3C, \uB313\uAE00, \uD0DC\uADF8 \uB4F1(\uC774\uD558 &quot;\uAC8C\uC2DC\uBB3C \uB4F1&quot;)\uC5D0 \uB300\uD55C \uC800\uC791\uC778\uACA9\uAD8C\uC740 \uBCC4\uB3C4\uC758 \uC758\uC0AC\uD45C\uC2DC\uAC00 \uC5C6\uB294 \uD55C \uAC01 \uD68C\uC6D0\uC5D0\uAC8C \uADC0\uC18D\uB429\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC6D0\uC774 \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uB294 \uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uBB3C\uC744 \uAC8C\uC2DC\uD55C \uACBD\uC6B0 \uD68C\uC6D0\uC740 \uD68C\uC0AC \uB610\uB294 \uB2E4\uB978 \uD68C\uC6D0\uC774 \uAD6D\uB0B4\u318D\uC678\uC5D0\uC11C \uB2E4\uC74C \uAC01 \uD638\uC758 \uBAA9\uC801\uC73C\uB85C \uAC8C\uC2DC\uBB3C \uB4F1\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uD5C8\uB77D\uD55C \uAC83\uC73C\uB85C \uBD05\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uD68C\uC0AC\uAC00 \uC11C\uBE44\uC2A4(\uC81C3\uC790\uAC00 \uC6B4\uC601\uD558\uB294 \uC0AC\uC774\uD2B8 \uB610\uB294 \uBBF8\uB514\uC5B4\uC758 \uC77C\uC815 \uC601\uC5ED \uB0B4\uC5D0 \uC785\uC810\uD558\uB294 \uD615\uD0DC\uB85C \uC81C\uACF5\uB418\uB294 \uACBD\uC6B0 \uD3EC\uD568) \uB0B4\uC5D0\uC11C \uAC8C\uC2DC\uBB3C \uB4F1\uC758 \uBCF5\uC81C\xB7\uC804\uC1A1\xB7\uC804\uC2DC \uBC0F \uC6B0\uC218 \uAC8C\uC2DC\uBB3C\uC744 \uC11C\uBE44\uC2A4 \uD654\uBA74\uC5D0 \uB178\uCD9C\uD558\uAE30 \uC704\uD558\uC5EC \uAC8C\uC2DC\uBB3C\uC758 \uC911\uB300\uD55C \uB0B4\uC6A9 \uBCC0\uACBD \uC5C6\uC774 \uD06C\uAE30\uB97C \uBCC0\uD658\uD558\uAC70\uB098 \uB2E8\uC21C\uD654\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uC218\uC815\uD558\uB294 \uAC83<br class="svelte-h0vy4q"/>\n        2. \uD68C\uC0AC\uAC00 \uC6B4\uC601\uD558\uB294 \uB2E4\uB978 \uC11C\uBE44\uC2A4\uC5D0\uC11C \uAC8C\uC2DC\uBB3C\uC744 \uBCF5\uC81C\xB7\uC804\uC1A1 \uB610\uB294 \uC804\uC2DC\uD558\uB294 \uAC83. \uB2E4\uB9CC, \uD68C\uC6D0\uC774 \uBA85\uC2DC\uC801\uC73C\uB85C \uBCF5\uC81C\xB7\uC804\uC1A1 \uB610\uB294 \uC804\uC2DC\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC544\uB2C8\uD55C \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB7EC\uD558\uC9C0 \uC54A\uC74C<br class="svelte-h0vy4q"/>\n        3. \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4\uB97C \uD64D\uBCF4\uD558\uAE30 \uC704\uD55C \uBAA9\uC801\uC73C\uB85C \uBBF8\uB514\uC5B4\xB7\uD1B5\uC2E0\uC0AC \uB4F1\uC5D0 \uAC8C\uC2DC\uBB3C\uC758 \uC804\uBD80 \uB610\uB294 \uC77C\uBD80\uB97C \uBCF4\uB3C4\xB7\uBC29\uC601\uD558\uAC8C \uD558\uB294 \uAC83. \uC774 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uC6D0\uCE59\uC801\uC73C\uB85C \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uBC1B\uC544 \uBBF8\uB514\uC5B4\xB7\uD1B5\uC2E0\uC0AC \uB4F1\uC5D0\uAC8C \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uB294 \uAC83<br class="svelte-h0vy4q"/>\n        4. \uD68C\uC6D0\uC758 \uD504\uB85C\uD3F4\uB9AC\uC624 \uB4F1\uC744 \uD3EC\uD568\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uD574\uB2F9 \uD68C\uC6D0 \uC815\uBCF4(\uD68C\uC6D0\uC740 \uC11C\uBE44\uC2A4 \uB0B4\uC758 \uAD00\uB9AC\uAE30\uB2A5\uC744 \uD1B5\uD558\uC5EC \uACF5\uAC1C \uC635\uC158 \uB4F1\uC744 \uC124\uC815\uD55C \uAC83)\uAC00 \uB2E4\uB978 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uB85C\uBD80\uD130 \uAC80\uC0C9 \uBC0F \uC804\uC1A1\xB7\uC5F4\uB78C\xB7\uC804\uC2DC\xB7\uACF5\uAC1C\uB418\uAC70\uB098, \uD504\uB85C\uD3F4\uB9AC\uC624 \uB4F1 \uAC8C\uC2DC\uBB3C \uBC0F \uC11C\uBE44\uC2A4\uB97C \uB9E4\uAC1C\uB85C \uB2E4\uB978 \uD68C\uC6D0\uACFC \uC5F0\uACB0(follow \uB4F1)\uB418\uB294 \uAC83. \uB2E4\uB9CC, \uD68C\uC6D0\uC774 \uBA85\uC2DC\uC801\uC73C\uB85C \uC5F0\uACB0\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC544\uB2C8\uD55C \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB7EC\uD558\uC9C0 \uC54A\uC74C</p>\n    (4) \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC\uAC00 \uC6B4\uC601\uD558\uB294 \uC11C\uBE44\uC2A4 \uAC04 \uD1B5\uD569 \uB4F1\uC758 \uC0AC\uC720\uB85C \uAC8C\uC2DC\uBB3C\uC758 \uAC8C\uC7AC \uC704\uCE58\uB97C \uBCC0\uACBD\xB7\uC774\uC804\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. <br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uAD00\uD55C \uBCC4\uB3C4 \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0 \uC774\uB97C \uD568\uAED8 \uC900\uC218\uD558\uC5EC\uC57C \uD558\uBA70, \uBCF8 \uC870\uD56D\uACFC \uC0C1\uCDA9\uD558\uB294 \uACBD\uC6B0 \uAD00\uB828 \uADDC\uC815\uC774 \uC6B0\uC120 \uC801\uC6A9\uB429\uB2C8\uB2E4.', qs = main6.a(), ys = main6.e("h3"), ys.textContent = "\uC81C15\uC870 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638", bs = main6.a(), ds = main6.e("div"), ds.innerHTML = '(1) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uC11C\uBE44\uC2A4\uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uD544\uC694\uD55C \uBC94\uC704\uC5D0\uC11C \uCD5C\uC18C\uD55C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uBCF8 \uC774\uC6A9\uACC4\uC57D\uC758 \uC774\uD589\uACFC \uBCF8 \uC774\uC6A9\uACC4\uC57D\uC0C1\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uC744 \uC704\uD55C \uBAA9\uC801\uC73C\uB85C \uC774\uC6A9\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uAD00\uB828 \uBC95\uB839\uC0C1 \uC758\uBB34\uC774\uD589\uC744 \uC704\uD558\uC5EC \uBCF8\uC778\uD655\uC778\uC774 \uD544\uC694\uD55C \uACBD\uC6B0\uB85C\uC11C \uCD5C\uC18C\uD55C\uC758 \uD2B9\uC815 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB7EC\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\xB7\uC774\uC6A9\uD558\uB294 \uB54C\uC5D0\uB294 \uB2F9\uD574 \uC774\uC6A9\uC790\uC5D0\uAC8C \uADF8 \uBAA9\uC801\uC744 \uACE0\uC9C0\uD558\uACE0 \uB3D9\uC758\uB97C \uBC1B\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC0AC\uB294 \uC218\uC9D1\uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uBAA9\uC801 \uC678\uC758 \uC6A9\uB3C4\uB85C \uC774\uC6A9\uD560 \uC218 \uC5C6\uC73C\uBA70, \uC0C8\uB85C\uC6B4 \uC774\uC6A9\uBAA9\uC801\uC774 \uBC1C\uC0DD\uD55C \uACBD\uC6B0 \uB610\uB294 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC774\uC6A9\xB7\uC81C\uACF5\uB2E8\uACC4\uC5D0\uC11C \uB2F9\uD574 \uC774\uC6A9\uC790\uC5D0\uAC8C \uADF8 \uBAA9\uC801\uC744 \uACE0\uC9C0\uD558\uACE0 \uB3D9\uC758\uB97C \uBC1B\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC, \uAD00\uB828 \uBC95\uB839\uC5D0 \uB2EC\uB9AC \uC815\uD568\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC0AC\uAC00 \uC81C3\uD56D, \uC81C4\uD56D\uC5D0 \uC758\uD574 \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uBC1B\uC544\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC \uCC45\uC784\uC790\uC758 \uC2E0\uC6D0(\uC18C\uC18D, \uC131\uBA85 \uBC0F \uC804\uD654\uBC88\uD638, \uAE30\uD0C0 \uC5F0\uB77D\uCC98), \uC815\uBCF4\uC758 \uC218\uC9D1\uBAA9\uC801 \uBC0F \uC774\uC6A9\uBAA9\uC801, \uC81C3\uC790\uC5D0 \uB300\uD55C \uC815\uBCF4\uC81C\uACF5 \uAD00\uB828\uC0AC\uD56D(\uC81C\uACF5\uBC1B\uC740 \uC790, \uC81C\uACF5\uBAA9\uC801 \uBC0F \uC81C\uACF5\uD560 \uC815\uBCF4\uC758 \uB0B4\uC6A9) \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C22\uC870 \uC81C2\uD56D\uC774 \uADDC\uC815\uD55C \uC0AC\uD56D\uC744 \uBBF8\uB9AC \uBA85\uC2DC\uD558\uAC70\uB098 \uACE0\uC9C0\uD574\uC57C \uD558\uBA70 \uD68C\uC6D0\uC740 \uC5B8\uC81C\uB4E0\uC9C0 \uC774 \uB3D9\uC758\uB97C \uCCA0\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (6) \uD68C\uC6D0\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uC591\uC2DD\uACFC \uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uAC00\uC9C0\uACE0 \uC788\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C \uBC0F \uC624\uB958\uC815\uC815\uC744 \uC694\uAD6C\uD560 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uD544\uC694\uD55C \uC870\uCE58\uB97C \uCDE8\uD560 \uC758\uBB34\uB97C \uC9D1\uB2C8\uB2E4. \uD68C\uC6D0\uC774 \uC624\uB958\uC758 \uC815\uC815\uC744 \uD569\uB9AC\uC801\uC778 \uC0AC\uC720\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC624\uB958\uB97C \uC815\uC815\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (7) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uB97C \uC704\uD558\uC5EC \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uB294 \uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uC5EC\uC57C \uD558\uBA70 \uC2E0\uC6A9\uCE74\uB4DC, \uC740\uD589\uACC4\uC88C \uB4F1\uC744 \uD3EC\uD568\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uBD84\uC2E4, \uB3C4\uB09C, \uC720\uCD9C, \uB3D9\uC758 \uC5C6\uB294 \uC81C3\uC790 \uC81C\uACF5, \uBCC0\uC870 \uB4F1\uC73C\uB85C \uC778\uD55C \uD68C\uC6D0\uC758 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC \uCC45\uC784\uC744 \uBD80\uB2F4\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (8) \uD68C\uC0AC \uB610\uB294 \uADF8\uB85C\uBD80\uD130 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC81C3\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1\uBAA9\uC801 \uB610\uB294 \uC81C\uACF5\uBC1B\uC740 \uBAA9\uC801\uC744 \uB2EC\uC131\uD55C \uB54C\uC5D0\uB294 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C0\uCCB4 \uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (9) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1\xB7\uC774\uC6A9\xB7\uC81C\uACF5\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB780\uC744 \uBBF8\uB9AC \uC120\uD0DD\uD55C \uAC83\uC73C\uB85C \uC124\uC815\uD574\uB450\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC218\uC9D1\xB7\uC774\uC6A9\xB7\uC81C\uACF5\uC5D0 \uAD00\uD55C \uD68C\uC6D0\uC758 \uB3D9\uC758\uAC70\uC808 \uC2DC \uC81C\uD55C\uB418\uB294 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uCCB4\uC801\uC73C\uB85C \uBA85\uC2DC\uD558\uACE0, \uD544\uC218\uC218\uC9D1\uD56D\uBAA9\uC774 \uC544\uB2CC \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1\xB7\uC774\uC6A9\xB7\uC81C\uACF5\uC5D0 \uAD00\uD55C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758 \uAC70\uC808\uC744 \uC774\uC720\uB85C \uD68C\uC6D0\uAC00\uC785 \uB4F1 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC81C\uD55C\uD558\uAC70\uB098 \uAC70\uC808\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (10) \uC774\uC678\uC758 \uC0AC\uD56D\uC740 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uB530\uB985\uB2C8\uB2E4.', ps = main6.a(), ms = main6.e("h3"), ms.textContent = "\uC81C16\uC870 \uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0\uC758 \uAC8C\uC7AC", us = main6.a(), gs = main6.e("div"), gs.innerHTML = '(1) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911 \uD544\uC694\uD558\uB2E4\uACE0 \uC778\uC815\uB418\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4 \uBC0F \uAD11\uACE0\uC5D0 \uB300\uD574\uC11C\uB294 \uC804\uC790\uC6B0\uD3B8\uC774\uB098 \uC11C\uC2E0\uC6B0\uD3B8, SMS(\uD734\uB300\uD3F0 \uBB38\uC790\uBA54\uC2DC\uC9C0), DM(Direct Mail), \uBA54\uC2E0\uC800 \uB4F1\uC758 \uBC29\uBC95\uC73C\uB85C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC73C\uBA70, \uB9CC\uC57D \uC6D0\uD558\uC9C0 \uC54A\uB294 \uC815\uBCF4\uB97C \uC218\uC2E0\uD55C \uACBD\uC6B0 \uD68C\uC6D0\uC740 \uC774\uB97C \uC218\uC2E0\uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4\uC758 \uC6B4\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uC11C\uBE44\uC2A4\uD654\uBA74, \uD648\uD398\uC774\uC9C0, \uC804\uC790\uC6B0\uD3B8 \uB4F1\uC5D0 \uAD11\uACE0 \uB4F1\uC744 \uAC8C\uC7AC\uD560 \uC218 \uC788\uC73C\uBA70, \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uD68C\uC6D0\uC774 \uC774\uC640 \uAC19\uC740 \uAD11\uACE0\uAC8C\uC7AC\uC5D0 \uB300\uD558\uC5EC \uB3D9\uC758\uD558\uB294 \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC0C1\uC5D0 \uAC8C\uC7AC\uB418\uC5B4 \uC788\uAC70\uB098 \uC11C\uBE44\uC2A4\uB97C \uD1B5\uD55C \uAD11\uACE0\uC8FC\uC640\uC758 \uD310\uCD09\uD65C\uB3D9\uC5D0 \uD68C\uC6D0\uC774 \uCC38\uC5EC\uD558\uAC70\uB098 \uAD50\uC2E0 \uB610\uB294 \uAC70\uB798\uC758 \uACB0\uACFC\uB85C\uC11C \uBC1C\uC0DD\uD558\uB294 \uBAA8\uB4E0 \uC190\uC2E4 \uB610\uB294 \uC190\uD574\uC5D0 \uB300\uD574 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.', xs = main6.a(), Cs = main6.e("h3"), Cs.textContent = "\uC81C17\uC870 \uAC8C\uC2DC\uBB3C\uC758 \uAD00\uB9AC \uBC0F \uC784\uC2DC\uC870\uCE58", Ms = main6.a(), Ts = main6.e("div"), Ts.innerHTML = '(1) \uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uB4F1\uC774 \uAD00\uB828 \uBC95\uB839\uC5D0 \uC704\uBC18\uB418\uB294 \uB0B4\uC6A9\uC744 \uD3EC\uD568\uD558\uB294 \uACBD\uC6B0, \uD68C\uC0AC\uB294 \uD574\uB2F9 \uAD00\uB828 \uBC95\uB839\uC774\uB098 \uC801\uBC95\uD55C \uAD8C\uB9AC\uC790\uC758 \uC694\uCCAD\uC5D0 \uB530\uB77C \uD574\uB2F9 \uAC8C\uC2DC\uBB3C \uB4F1\uC5D0 \uB300\uD55C \uAC8C\uC2DC\uC911\uB2E8 \uBC0F \uC0AD\uC81C \uB4F1\uC758 \uC870\uCE58\uB97C \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uAC8C\uC2DC\uBB3C \uB4F1\uC5D0 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC6B4\uC601\uC815\uCC45\uC5D0 \uC704\uBC18\uB418\uB294 \uC0AC\uC720\uAC00 \uC788\uB294 \uAC83\uC73C\uB85C \uD655\uC778\uB41C \uACBD\uC6B0, \uC704 \uC6B4\uC601\uC815\uCC45\uC5D0 \uB530\uB77C \uD574\uB2F9 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD574 \uC870\uCE58\uB97C \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960(\uC774\uD558 &quot;\uC815\uBCF4\uD1B5\uC2E0\uB9DD\uBC95&quot;)\uC758 \uADDC\uC815\uC5D0 \uC758\uD574 \uB2E4\uB978 \uD68C\uC6D0\uC758 \uACF5\uAC1C\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC774 \uBCF8\uC778\uC758 \uC0AC\uC0DD\uD65C\uC744 \uCE68\uD574\uD558\uAC70\uB098 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB4F1 \uAD8C\uB9AC\uB97C \uCE68\uD574 \uBC1B\uC740 \uD68C\uC6D0 \uB610\uB294 \uC81C3\uC790(\uC774\uD558 &quot;\uC0AD\uC81C \uB4F1 \uC2E0\uCCAD\uC778&quot;)\uB294 \uADF8 \uCE68\uD574\uC0AC\uC2E4\uC744 \uC18C\uBA85\uD558\uC5EC \uD68C\uC0AC\uC5D0 \uD574\uB2F9 \uAC8C\uC2DC\uBB3C \uB4F1\uC758 \uC0AD\uC81C \uB610\uB294 \uBC18\uBC15 \uB0B4\uC6A9\uC758 \uAC8C\uC7AC\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uD574\uB2F9 \uAC8C\uC2DC\uBB3C \uB4F1\uC758 \uAD8C\uB9AC \uCE68\uD574 \uC5EC\uBD80\uB97C \uD310\uB2E8\uD560 \uC218 \uC5C6\uAC70\uB098 \uB2F9\uC0AC\uC790 \uAC04\uC758 \uB2E4\uD23C\uC774 \uC608\uC0C1\uB418\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uAC8C\uC2DC\uBB3C \uB4F1\uC5D0 \uB300\uD55C \uC811\uADFC\uC744 \uC784\uC2DC\uC801\uC73C\uB85C \uCC28\uB2E8\uD558\uB294 \uC870\uCE58(\uC774\uD558 &quot;\uC784\uC2DC\uC870\uCE58&quot;)\uB97C \uCD5C\uC7A5 30\uC77C\uAE4C\uC9C0 \uCDE8\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uC804\uD56D\uC5D0 \uC758\uD574 \uBCF8\uC778\uC758 \uAC8C\uC2DC\uBB3C \uB4F1\uC774 \uC784\uC2DC\uC870\uCE58\uB41C \uD68C\uC6D0(\uC774\uD558 &quot;\uAC8C\uC2DC\uC790&quot;)\uC740 \uC784\uC2DC\uC870\uCE58\uAE30\uAC04 \uC911 \uD68C\uC0AC\uC5D0 \uD574\uB2F9 \uAC8C\uC2DC\uBB3C \uB4F1\uC744 \uBCF5\uC6D0\uD574 \uC904 \uAC83\uC744 \uC694\uCCAD(\uC774\uD558 &quot;\uC7AC\uAC8C\uC2DC \uCCAD\uAD6C&quot;)\uD560 \uC218 \uC788\uC73C\uBA70, \uD68C\uC0AC\uB294 \uC784\uC2DC\uC870\uCE58\uB41C \uAC8C\uC2DC\uBB3C\uC758 \uBA85\uC608\uD6FC\uC190 \uB4F1 \uD310\uB2E8\uC5D0 \uB300\uD55C \uBC29\uC1A1\uD1B5\uC2E0\uC2EC\uC758\uC704\uC6D0\uD68C \uC2EC\uC758 \uC694\uCCAD\uC5D0 \uB300\uD55C \uAC8C\uC2DC\uC790 \uBC0F \uC0AD\uC81C \uB4F1 \uC2E0\uCCAD\uC778\uC758 \uB3D9\uC758\uAC00 \uC788\uB294 \uACBD\uC6B0 \uAC8C\uC2DC\uC790 \uBC0F \uC0AD\uC81C \uB4F1 \uC2E0\uCCAD\uC778\uC744 \uB300\uB9AC\uD558\uC5EC \uC774\uB97C \uC694\uCCAD\uD558\uACE0 \uB3D9\uC758\uAC00 \uC5C6\uB294 \uACBD\uC6B0 \uD68C\uC0AC\uAC00 \uC774\uB97C \uD310\uB2E8\uD558\uC5EC \uAC8C\uC2DC\uBB3C \uB4F1\uC758 \uBCF5\uC6D0 \uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uAC8C\uC2DC\uC790\uC758 \uC7AC\uAC8C\uC2DC \uCCAD\uAD6C\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC784\uC2DC\uC870\uCE58 \uAE30\uAC04 \uB0B4\uC5D0 \uBC29\uC1A1\uD1B5\uC2E0\uC2EC\uC758\uC704\uC6D0\uD68C \uB610\uB294 \uD68C\uC0AC\uC758 \uACB0\uC815\uC774 \uC788\uC73C\uBA74 \uADF8 \uACB0\uC815\uC5D0 \uB530\uB974\uACE0 \uADF8 \uACB0\uC815\uC774 \uC784\uC2DC\uC870\uCE58 \uAE30\uAC04 \uB0B4\uC5D0 \uC788\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC784\uC2DC\uC870\uCE58 \uB9CC\uB8CC\uC77C \uC774\uD6C4 \uBCF5\uC6D0\uB429\uB2C8\uB2E4. \uC7AC\uAC8C\uC2DC \uCCAD\uAD6C\uAC00 \uC5C6\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC784\uC2DC\uC870\uCE58 \uAE30\uAC04 \uB9CC\uB8CC \uC774\uD6C4 \uC0AD\uC81C\uB429\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC5D0 \uAC8C\uC2DC\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC774 \uC0AC\uC0DD\uD65C \uCE68\uD574 \uB610\uB294 \uBA85\uC608\uD6FC\uC190 \uB4F1 \uC81C3\uC790\uC758 \uAD8C\uB9AC\uB97C \uCE68\uD574\uD55C\uB2E4\uACE0 \uC778\uC815\uD558\uB294 \uACBD\uC6B0 \uD68C\uC6D0 \uB610\uB294 \uC81C3\uC790\uC758 \uC2E0\uACE0\uAC00 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uC784\uC2DC\uC870\uCE58(\uC774\uD558 &quot;\uC784\uC758\uC758 \uC784\uC2DC\uC870\uCE58&quot;)\uB97C \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC784\uC758\uC758 \uC784\uC2DC\uC870\uCE58\uB41C \uAC8C\uC2DC\uBB3C\uC758 \uCC98\uB9AC \uC808\uCC28\uB294 \uBCF8 \uC870 \uC81C3\uD56D \uD6C4\uB2E8 \uBC0F \uC81C4\uD56D\uC758 \uADDC\uC815\uC5D0 \uB530\uB985\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (6) \uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uB4F1\uC73C\uB85C \uC778\uD55C \uBC95\uB960\uC0C1 \uC774\uC775 \uCE68\uD574\uB97C \uADFC\uAC70\uB85C, \uB2E4\uB978 \uD68C\uC6D0 \uB610\uB294 \uC81C3\uC790\uAC00 \uD68C\uC6D0 \uB610\uB294 \uD68C\uC0AC\uB97C \uB300\uC0C1\uC73C\uB85C \uD558\uC5EC \uBBFC\xB7\uD615\uC0AC\uC0C1\uC758 \uBC95\uC801\uC870\uCE58(\uC608: \uD615\uC0AC\uACE0\uC18C, \uAC00\uCC98\uBD84\uC2E0\uCCAD\u2219\uC190\uD574\uBC30\uC0C1\uCCAD\uAD6C\uB4F1\uBBFC\uC0AC\uC18C\uC1A1\uC758\uC81C\uAE30)\uB97C \uCDE8\uD558\uB294 \uACBD\uC6B0, \uD68C\uC0AC\uB294 \uB3D9\uBC95\uC801\uC870\uCE58\uC758 \uACB0\uACFC\uC778 \uBC95\uC6D0\uC758 \uD655\uC815\uD310\uACB0\uC774 \uC788\uC744 \uB54C\uAE4C\uC9C0 \uAD00\uB828 \uAC8C\uC2DC\uBB3C \uB4F1\uC5D0 \uB300\uD55C \uC811\uADFC\uC744 \uC7A0\uC815\uC801\uC73C\uB85C \uC81C\uD55C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC8C\uC2DC\uBB3C \uB4F1\uC758 \uC811\uADFC \uC81C\uD55C\uACFC \uAD00\uB828\uD55C \uBC95\uC801\uC870\uCE58\uC758 \uC18C\uBA85, \uBC95\uC6D0\uC758 \uD655\uC815\uD310\uACB0\uC5D0 \uB300\uD55C \uC18C\uBA85\uCC45\uC784\uC740 \uAC8C\uC2DC\uBB3C \uB4F1\uC5D0 \uB300\uD55C \uC870\uCE58\uB97C \uC694\uCCAD\uD558\uB294 \uC790\uAC00 \uBD80\uB2F4\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (7) \uD68C\uC0AC\uB294 \uAC8C\uC2DC\uB41C \uB0B4\uC6A9\uC774 \uC77C\uC815\uAE30\uAC04 \uC774\uC0C1 \uACBD\uACFC\uB418\uC5B4, \uAC8C\uC2DC\uBB3C\uB85C\uC368\uC758 \uD6A8\uB825\uC744 \uC0C1\uC2E4\uD558\uC5EC \uADF8 \uC874\uCE58 \uBAA9\uC801\uC774 \uBD88\uBD84\uBA85\uD55C \uACBD\uC6B0 \uACF5\uC9C0\uC0AC\uD56D \uBC1C\uD45C \uD6C4 1\uC8FC\uC77C \uAC04\uC758 \uD1B5\uC9C0\uAE30\uAC04\uC744 \uAC70\uCCD0 \uD574\uB2F9 \uAC8C\uC2DC\uBB3C\uC744 \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', Hs = main6.a(), Ls = main6.e("h3"), Ls.textContent = "\uC81C18\uC870 \uD504\uB85C\uD3F4\uB9AC\uC624 \uC11C\uBE44\uC2A4", fs = main6.a(), $s = main6.e("div"), $s.innerHTML = '(1) \uD68C\uC6D0\uC740 \uD504\uB85C\uD3F4\uB9AC\uC624 \uC11C\uBE44\uC2A4\uB97C \uD1B5\uD574 \uAC1C\uC778 \uACC4\uC815 \uD398\uC774\uC9C0\uC5D0\uC11C \uC791\uC131\uD55C \uC815\uBCF4\uB97C \uC791\uC131\uD558\uC5EC \uBC30\uD3EC, \uC804\uC2DC\uBC0F \uAC8C\uC2DC, \uACF5\uC720\uD560 \uC218 \uC788\uC73C\uBA70, \uD68C\uC6D0 \uC790\uC2E0\uC758 \uD504\uB85C\uD3F4\uB9AC\uC624\uAC00 \uC0AC\uC774\uD2B8 \uB0B4\uC5D0\uC11C \uACF5\uAC1C\uC801\uC73C\uB85C \uAC8C\uC2DC \uB610\uB294 \uB4F1\uB85D(\uC774\uD558 \u201C\uAC1C\uC124\u201D)\uB41C \uACBD\uC6B0 \uD68C\uC6D0\uC774 \uACF5\uAC1C \uC124\uC815\uD55C \uAC8C\uC2DC\uBB3C \uC815\uBCF4\uAC00 \uD568\uAED8 \uB178\uCD9C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. <br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC6D0\uC740 \uC785\uB825\uD55C \uD504\uB85C\uD3F4\uB9AC\uC624 \uC815\uBCF4\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uB4F1 \uAD00\uB828 \uBC95\uB839\uC5D0 \uB530\uB77C \uD0C0\uC778\uC774 \uC544\uB2CC \uD68C\uC6D0 \uC790\uC2E0\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB85C \uC801\uBC95\uD558\uAC8C \uC791\uC131\uB418\uC5C8\uC744 \uAC83\uC744 \uD68C\uC0AC\uC5D0\uAC8C \uBCF4\uC99D\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC6D0\uC740 \uC81C2\uD56D\uC744 \uC704\uBC18\uD55C \uACBD\uC6B0 \uC989\uC2DC \uD68C\uC0AC\uC5D0\uAC8C \uADF8 \uC0AC\uC2E4\uC744 \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD558\uACE0, \uD68C\uC0AC\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uC801\uC808\uD55C \uC870\uCE58\uB97C \uCDE8\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC6D0\uC740 \uD68C\uC0AC\uAC00 \uC0AC\uC774\uD2B8 \uB610\uB294 \uC11C\uBE44\uC2A4\uB97C \uD1B5\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95\uC5D0 \uAD00\uD55C \uAD50\uC721\uC774\uB098 \uC815\uCC45 \uB4F1\uC744 \uC81C\uACF5, \uC548\uB0B4\uD560 \uACBD\uC6B0, \uC774\uB97C \uC131\uC2E4\uD558\uAC8C \uC774\uC218, \uC900\uC218\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC0AC\uB294 \uBCF8\uC870\uB97C \uC704\uBC18\uD568\uC73C\uB85C\uC368 \uD68C\uC6D0 \uBC0F \uB2E4\uB978 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC \uC5B4\uB5A0\uD55C \uCC45\uC784\uB3C4 \uBD80\uB2F4\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (6) \uD68C\uC6D0\uC774 \uC785\uB825\uD55C \uD504\uB85C\uD3F4\uB9AC\uC624 \uC815\uBCF4\uB294 \uB2E4\uB978 \uD68C\uC6D0\uC5D0 \uC758\uD574 \uB2E8\uB3C5 \uB610\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uD568\uAED8 \uAC80\uC0C9 \uBC0F \uC5F4\uB78C \uACF5\uAC1C, \uC5F0\uACB0\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', ws = main6.a(), Ds = main6.e("h3"), Ds.textContent = "\uC81C19\uC870 \uC2A4\uD29C\uB514\uC624 \uC11C\uBE44\uC2A4", As = main6.a(), Is = main6.e("div"), Is.innerHTML = '(1) \uD68C\uC6D0\uC740 \uC2A4\uD29C\uB514\uC624 \uC11C\uBE44\uC2A4\uB97C \uD1B5\uD574 \uAC1C\uC778 \uACC4\uC815 \uD398\uC774\uC9C0\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624 \uC815\uBCF4 \uB4F1\uC744 \uC791\uC131, \uC804\uC2DC, \uC778\uC6A9, \uBCF4\uAD00, \uD30C\uC77C\uCCA8\uBD80(\uC5C5\uB85C\uB4DC), \uB9C1\uD06C \uC5F0\uACB0 \uB4F1\uC758 \uBC29\uBC95\uC73C\uB85C \uAC8C\uC2DC\uD560 \uC218 \uC788\uC73C\uBA70, \uC774 \uACBD\uC6B0 \uD68C\uC6D0\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uACF5\uAC1C \uC124\uC815 \uC635\uC158\uC5D0 \uB530\uB77C \uC790\uC2E0\uC758 \uAC8C\uC2DC\uBB3C\uC744 \uACF5\uAC1C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC758 \uBA85\uC2DC\uC801 \uC758\uC0AC\uC5D0 \uBC18\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704 \uB0B4\uC5D0\uC11C \uD68C\uC6D0\uC774 \uBE44\uACF5\uAC1C \uC124\uC815\uD55C \uAC8C\uC2DC\uBB3C\uC744 \uC81C\uC678\uD55C \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \uACF5\uAC1C\uD558\uC5EC \uAC8C\uC2DC \uB4F1 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774 \uACF5\uAC1C \uC124\uC815\uD55C \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uD504\uB85C\uD3F4\uB9AC\uC624 \uB4F1 \uAC8C\uC2DC\uBB3C\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uC704\uBC18\uB420 \uACBD\uC6B0 \uC0AD\uC81C \uB610\uB294 \uACF5\uAC1C \uBC94\uC704\uC758 \uC81C\uD55C(\uC774\uD558 \u201C\uC81C\uD55C \uC870\uCE58\u201D)\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC, \uAC1C\uC778 \uACC4\uC815 \uD398\uC774\uC9C0\uC5D0 \uC788\uB294 \uAC8C\uC2DC\uBB3C\uC758 \uACBD\uC6B0\uC5D0\uB3C4 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uC704\uBC18\uD558\uB294 \uC0AC\uC2E4\uC774 \uC788\uAC70\uB098 \uC704\uBC18\uD560 \uAC00\uB2A5\uC131\uC774 \uB192\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC81C\uD55C \uC870\uCE58\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uD68C\uC0AC\uC758 \uADDC\uC815 \uBC0F \uC808\uCC28\uB97C \uC900\uC218\uD558\uC9C0 \uC54A\uAC70\uB098 \uD68C\uC6D0\uC774 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uBAA9\uC801\uACFC \uCDE8\uC9C0\uB300\uB85C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        2. \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC591\uC2DD\uC5D0 \uB530\uB77C \uC791\uC131\uB418\uC9C0 \uC54A\uAC70\uB098 \uBD88\uBD84\uBA85\uD558\uAC70\uB098 \uBAA8\uD638\uD558\uAC8C \uC791\uC131\uB41C \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        3. \uD68C\uC6D0\uC774 \uC791\uC131\uD55C \uAC8C\uC2DC\uBB3C(\uC774\uBBF8\uC9C0, \uBB38\uC11C, \uB3D9\uC601\uC0C1, \uC74C\uC131 \uD30C\uC77C \uB4F1)\uC5D0 \uAD00\uD55C \uC0AC\uC6A9 \uB4F1 \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C\uC744 \uBCF4\uC720\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        4. \uAC8C\uC2DC\uBB3C \uB0B4\uC6A9\uACFC \uCD9C\uCC98, \uC800\uC791\uAD8C\uC790\uC5D0 \uB300\uD55C \uD5C8\uC704, \uAE30\uC7AC \uB204\uB77D, \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        5. \uAD00\uACC4\uBC95\uB839\uC5D0 \uC704\uBC30\uB418\uC5B4 \uC704\uBC95\uD558\uAC70\uB098 \uADF8 \uAC00\uB2A5\uC131\uC774 \uB192\uC740 \uACBD\uC6B0 <br class="svelte-h0vy4q"/>\n        6. \uD0C0\uC778\uC758 \uBA85\uC608\uB098 \uC800\uC791\uAD8C\uC774\uB098 \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C\uC744 \uC190\uC0C1\uC2DC\uD0A4\uAC70\uB098 \uBD88\uC774\uC775\uC744 \uC8FC\uB824\uB294 \uC758\uB3C4\uAC00 \uC788\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        7. \uD68C\uC0AC\uAC00 \uC815\uD55C \uC6B4\uC601\uBC29\uCE68\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        8. \uAE30\uD0C0 \uACF5\uACF5\uC9C8\uC11C \uB610\uB294 \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uACBD\uC6B0</p>\n    (3) \uBCF8 \uC870\uC5D0 \uB530\uB77C \uAC8C\uC2DC\uB418\uAC70\uB098 \uACF5\uAC1C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uAD00\uB828\uD558\uC5EC \uBC1C\uC0DD\uD55C \uBD84\uC7C1, \uBC95\uC801 \uCC45\uC784, \uBD88\uC774\uC775\uC5D0 \uB300\uD574\uC11C\uB294 \uD68C\uC6D0\uC774 \uBAA8\uB4E0 \uCC45\uC784\uC744 \uB2E8\uB3C5\uC73C\uB85C \uBD80\uB2F4\uD558\uBA70, \uD68C\uC0AC\uB294 \uC704 \uAC8C\uC2DC\uBB3C\uC758 \uC800\uC791\uAD8C \uB4F1 \uBC95\uC801 \uAD8C\uB9AC\uC5D0 \uB300\uD558\uC5EC \uC5B4\uB5A0\uD55C \uBCF4\uC99D\uC744 \uD558\uC9C0 \uC54A\uC73C\uBA70, \uC0AC\uC774\uD2B8\uC5D0 \uAC1C\uC124/\uAC8C\uC2DC\uB41C \uB0B4\uC6A9\uACFC \uC815\uBCF4\uC5D0 \uB300\uD55C \uD310\uB2E8\uC73C\uB85C\uBD80\uD130 \uBC1C\uC0DD\uD558\uB294 \uACB0\uACFC\uC5D0 \uB300\uD558\uC5EC \uD68C\uC0AC\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774 \uACF5\uAC1C\uB97C \uD5C8\uC6A9\uD55C \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBC0F \uD574\uB2F9 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uC758 \uD68C\uC6D0\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uD68C\uC0AC\uAC00 \uC815\uD55C \uBC29\uBC95\uC5D0 \uB530\uB77C \uB178\uCD9C \uBC0F \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC6D0\uC758 \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624 \uC815\uBCF4 \uB4F1\uC744 \uD3EC\uD568\uD55C \uAC8C\uC2DC\uBB3C(\uBE44\uACF5\uAC1C \uC124\uC815\uD55C \uAC8C\uC2DC\uBB3C \uC81C\uC678)\uC740 \uAC80\uC0C9\uC758 \uBAA9\uC801\uC73C\uB85C \uB2E4\uB978 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uB85C\uBD80\uD130 \uAC80\uC0C9 \uBC0F \uC5F4\uB78C, \uC5F0\uACB0\uB420 \uC218 \uC788\uC73C\uBA70, \uD68C\uC6D0\uC740 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4\uB97C \uD1B5\uD558\uC5EC \uD68C\uC0AC\uAC00 \uC815\uD55C \uBC29\uBC95\uC5D0 \uB530\uB77C \uD68C\uC6D0\uC5D0\uAC8C \uC5F0\uACB0\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uC704 \uC5F0\uACB0\uC758 \uBAA9\uC801\uC740 \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624 \uC815\uBCF4 \uB4F1 \uAC8C\uC2DC\uBB3C \uAD00\uB828 \uBB38\uC758\uC5D0 \uB300\uD55C \uBAA9\uC801 \uBC94\uC704\uC5D0 \uAD6D\uD55C\uB418\uBA70, \uC81C3\uC790 \uC81C\uACF5 \uC2DC\uC5D0\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD\uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960\uC5D0 \uC758\uAC70\uD558\uC5EC \uBC95\uC801 \uCC45\uC784\uC744 \uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', js = main6.a(), Ss = main6.e("h3"), Ss.textContent = "\uC81C20\uC870 \uD504\uB85C\uD3F4\uB9AC\uC624 \uB4F1\uC758 \uC0AD\uC81C \uB610\uB294 \uC218\uC815 \uB4F1", _s = main6.a(), Os = main6.e("div"), Os.innerHTML = '(1) \uD68C\uC6D0\uC740 \uC790\uC2E0\uC758 \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624 \uB4F1 \uAC8C\uC2DC\uBB3C\uC744 \uD68C\uC0AC\uAC00 \uC815\uD55C \uBC29\uBC95\uC5D0 \uB530\uB77C \uC218\uC815 \uB4F1\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC740 \uC790\uC2E0\uC758 \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624 \uB4F1 \uAC8C\uC2DC\uBB3C\uC774 \uC0AC\uC774\uD2B8\uC5D0 \uACF5\uAC1C\uB41C \uACBD\uC6B0 \uD68C\uC0AC\uAC00 \uC815\uD55C \uBC29\uBC95\uACFC \uC2E0\uCCAD \uBC0F \uC2B9\uC778 \uC808\uCC28\uC5D0 \uB530\uB77C \uD504\uB85C\uD3F4\uB9AC\uC624\uC758 \uC0AD\uC81C \uB610\uB294 \uC218\uC815(\uC774\uD558 \u201C\uC218\uC815 \uB4F1)\uC744 \uD558\uC5EC\uC57C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC6D0\uC5D0\uAC8C \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624 \uB4F1 \uAC8C\uC2DC\uBB3C\uC758 \uC218\uC815 \uB4F1\uC744 \uC694\uAD6C\uD558\uAC70\uB098 \uC218\uC815 \uB4F1\uC774 \uD604\uC800\uD788 \uC5B4\uB835\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C \uB610\uB294 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uD68C\uC6D0\uC774 \uC81C\uACF5\uD55C \uD68C\uC6D0\uC815\uBCF4 \uB610\uB294 \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624\uC758 \uB0B4\uC6A9 \uB4F1 \uAD00\uB828 \uC815\uBCF4\uAC00 \uD5C8\uC704 \uB610\uB294 \uC911\uC694\uC0AC\uC2E4\uC774 \uB204\uB77D\uB418\uC5B4 \uC9C4\uC815\uC131\uC774 \uC758\uC2EC\uB418\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        2. \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624\uC758 \uB0B4\uC6A9\uC774 \uC81C3\uC790\uC758 \uC9C0\uC801 \uC7AC\uC0B0\uAD8C \uBC0F \uAE30\uD0C0 \uAD8C\uB9AC\uB97C \uCE68\uD574\uD558\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        3. \uC81C18\uC870 \uC81C2\uD56D\uC758 \uAC8C\uC2DC \uC694\uAC74\uC5D0 \uC704\uBC18\uB418\uB294 \uACBD\uC6B0 <br class="svelte-h0vy4q"/>\n        4. \uD68C\uC6D0\uC774 \uC0AC\uC774\uD2B8\uC5D0 \uC74C\uB780, \uBE44\uBC29, \uC695\uC124, \uBA85\uC608\uD6FC\uC190, \uAC1C\uC778\uC815\uBCF4 \uBB34\uB2E8\uACF5\uAC1C \uB4F1 \uC774\uC5D0 \uC900\uD558\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAC8C\uC7AC\uD558\uAC70\uB098 \uAD00\uB828 \uC0AC\uC774\uD2B8\uB97C \uB9C1\uD06C\uD558\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        5. \uD68C\uC6D0\uC774 \uD504\uB85C\uC81D\uD2B8, &#39;\uB098\uC758\uBE0C\uB79C\uB4DC&#39;, \uCF58\uD150\uCE20, \uB124\uD2B8\uC6CC\uD06C, \uD504\uB85C\uD3F4\uB9AC\uC624 \uC815\uBCF4\uB97C \uBD88\uBC95\uC801\uC73C\uB85C \uBCC0\uACBD \uB610\uB294 \uC870\uC791\uD55C \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        6. \uAE30\uD0C0 \uAD00\uACC4\uBC95\uB839\uC5D0 \uC704\uBC18\uB41C\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0</p>', Rs = main6.a(), zs = main6.e("h3"), zs.textContent = "\uC81C21\uC870 \uC8FC\uBB38 \uBC0F \uACB0\uC81C", Fs = main6.a(), ks = main6.e("div"), ks.innerHTML = '(1) \uD68C\uC6D0\uC740 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uB2E4\uC74C \uAC01\uD638 \uB610\uB294 \uC774\uC640 \uC720\uC0AC\uD55C \uC808\uCC28\uC5D0 \uC758\uD558\uC5EC \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uAD00\uD55C \uAD6C\uB9E4\uB97C \uC2E0\uCCAD\uC744 \uD569\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">- \uAD6C\uB9E4\uB97C \uC6D0\uD558\uB294 \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC120\uD0DD<br class="svelte-h0vy4q"/>\n        - \uD68C\uC6D0\uC758 \uC131\uBA85, \uC774\uBA54\uC77C \uC8FC\uC18C, \uC804\uD654\uBC88\uD638(\uB610\uB294 \uC774\uB3D9\uC804\uD654\uBC88\uD638), \uC8FC\uC18C \uB4F1\uC758 \uC785\uB825 \uBC0F \uACB0\uC81C\uD558\uAE30 \uD074\uB9AD<br class="svelte-h0vy4q"/>\n        - \uACB0\uC81C\uAE08\uC561 \uD655\uC778, \uACB0\uC81C\uC218\uB2E8 \uC120\uD0DD \uBC0F \uACB0\uC81C\uD558\uAE30<br class="svelte-h0vy4q"/>\n        - \uACB0\uC81C\uAE08\uC561 \uC7AC\uD655\uC778 \uBC0F \uACB0\uC81C</p>\n    (2) \uD68C\uC6D0\uC740 \uD68C\uC0AC\uC5D0\uC11C \uC815\uD558\uB294 \uBC29\uBC95\uC73C\uB85C \uC720\uB8CC\uC11C\uBE44\uC2A4\uC758 \uACB0\uC81C\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E8, \uBBF8\uC131\uB144 \uD68C\uC6D0\uC758 \uACB0\uC81C\uB294 \uC6D0\uCE59\uC801\uC73C\uB85C \uBCF4\uD638\uC790(\uBC95\uC815\uB300\uB9AC\uC778)\uC758 \uBA85\uC758 \uB610\uB294 \uB3D9\uC758 \uD558\uC5D0 \uC774\uB8E8\uC5B4\uC838\uC57C \uD558\uACE0, \uBCF4\uD638\uC790(\uBC95\uC815\uB300\uB9AC\uC778)\uB294 \uBCF8\uC778 \uB3D9\uC758 \uC5C6\uC774 \uCCB4\uACB0\uB41C \uC790\uB140(\uBBF8\uC131\uB144\uC790)\uC758 \uACC4\uC57D\uC744 \uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', Ps = main6.a(), Ws = main6.e("h3"), Ws.textContent = "\uC81C22\uC870 \uACC4\uC57D\uC758 \uC131\uB9BD \uBC0F \uD1B5\uC9C0", Xs = main6.a(), Ys = main6.e("div"), Ys.innerHTML = '(1) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01\uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC11C\uBE44\uC2A4 \uAD6C\uB9E4 \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">1. \uC2E0\uCCAD \uB0B4\uC6A9\uC5D0 \uD5C8\uC704, \uB204\uB77D, \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        2. \uBBF8\uC131\uB144\uC790\uAC00 \uCCAD\uC18C\uB144 \uBCF4\uD638\uBC95\uC5D0\uC11C \uAE08\uC9C0\uD558\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD6C\uB9E4\uD558\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        3. \uC720\uB8CC \uC11C\uBE44\uC2A4 \uC2E0\uCCAD\uAE08\uC561 \uCD1D\uC561\uACFC \uC785\uAE08 \uCD1D\uC561\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        4. \uAD6C\uB9E4 \uC2E0\uCCAD\uC5D0 \uC2B9\uB099\uD558\uB294 \uAC83\uC774 \uD68C\uC0AC\uC758 \uAE30\uC220\uC0C1 \uD604\uC800\uD788 \uC9C0\uC7A5\uC774 \uC788\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        5. \uD68C\uC0AC\uAC00 \uC815\uD55C \uC11C\uBE44\uC2A4 \uBC29\uCE68 \uB610\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uC704\uBC30\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0<br class="svelte-h0vy4q"/>\n        6. \uAE30\uD0C0 \uD569\uB9AC\uC801\uC778 \uC774\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0\uB85C\uC11C \uD68C\uC0AC\uAC00 \uD544\uC694\uD558\uB2E4\uACE0 \uC778\uC815\uB418\uB294 \uACBD\uC6B0</p>\n    (2) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774 \uBCF8 \uC57D\uAD00\uC758 \uC808\uCC28\uC5D0 \uB530\uB77C \uC720\uB8CC\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC2E0\uCCAD\uD560 \uACBD\uC6B0, \uC2B9\uB099\uC758 \uC758\uC0AC\uD45C\uC2DC\uB85C\uC368 \uBCF8 \uC57D\uAD00\uC758 \uBC29\uBC95\uC744 \uD1B5\uD558\uC5EC \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uACE0, \uC2B9\uB099\uC758 \uD1B5\uC9C0\uAC00 \uD68C\uC6D0\uC5D0\uAC8C \uB3C4\uB2EC\uD55C \uC2DC\uC810\uC5D0 \uACC4\uC57D\uC774 \uC131\uB9BD\uD55C \uAC83\uC73C\uB85C \uBD05\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uC758 \uC2B9\uB099\uC758 \uC758\uC0AC\uD45C\uC2DC\uC5D0\uB294 \uD68C\uC6D0\uC758 \uC774\uC6A9\uC2E0\uCCAD\uC5D0 \uB300\uD55C \uD655\uC778 \uBC0F \uC11C\uBE44\uC2A4\uC81C\uACF5 \uAC00\uB2A5\uC5EC\uBD80, \uC774\uC6A9\uC2E0\uCCAD\uC758 \uC815\uC815, \uCDE8\uC18C \uB4F1\uC5D0 \uAD00\uD55C \uC815\uBCF4 \uB4F1\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.', Bs = main6.a(), Es = main6.e("h3"), Es.textContent = "\uC81C23\uC870 \uC218\uC218\uB8CC \uB4F1", Gs = main6.a(), Js = main6.e("div"), Js.innerHTML = '(1) \uD68C\uC6D0\uC758 \uC0AC\uC774\uD2B8 \uAC00\uC785\uC740 \uBCC4\uB3C4\uC758 \uC218\uC218\uB8CC \uC9C0\uAE09\uC5D0 \uAD00\uD55C \uC11C\uBE44\uC2A4 \uC548\uB0B4\uAC00 \uC5C6\uB294 \uD55C \uBB34\uB8CC\uC774\uBA70, \uD2B9\uC815 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC2DC \uC218\uC218\uB8CC\uAC00 \uBD80\uACFC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uC11C\uBE44\uC2A4 \uC218\uC218\uB8CC \uC815\uCC45\uC740 \uD68C\uC0AC \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC815\uC758\uD55C \uADDC\uCE59\uC5D0 \uB530\uB974\uBA70, \uD68C\uC6D0\uC740 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uC218\uC218\uB8CC\uB97C \uBD80\uB2F4\uD574\uC57C \uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uC11C\uBE44\uC2A4 \uC218\uC218\uB8CC \uC815\uCC45\uC740 \uD68C\uC0AC\uC758 \uC0AC\uC815\uC5D0 \uB530\uB77C \uBCC0\uACBD\uB420 \uC218 \uC788\uC73C\uBA70, \uD68C\uC0AC\uB294 \uC0AC\uC804\uC5D0 \uC0AC\uC774\uD2B8\uB97C \uD1B5\uD574 \uBCC0\uACBD\uB0B4\uC6A9\uC744 \uACE0\uC9C0\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC6D0\uC740 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC218\uC218\uB8CC \uC678\uC5D0 \uD68C\uC6D0\uC758 \uACB0\uC81C\uC218\uB2E8 (\uC2E0\uC6A9\uCE74\uB4DC, \uD734\uB300\uD3F0, \uACC4\uC88C\uC774\uCCB4 \uB4F1)\uC774\uC6A9\uC5D0 \uB530\uB978 \uC218\uC218\uB8CC\uB97C \uBD80\uB2F4\uD574\uC57C \uD569\uB2C8\uB2E4.', Ks = main6.a(), Ns = main6.e("h3"), Ns.textContent = "\uC81C24\uC870 \uC81C3\uC790\uC758 \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C \uBC0F \uC800\uC791\uAD8C \uACF5\uC9C0", Qs = main6.a(), Us = main6.e("div"), Us.innerHTML = '(1) \uD68C\uC0AC\uC640 \uD68C\uC6D0\uC740 \uC81C 3\uC790\uC758 \uC9C0\uC2DD\uC7AC\uC0B0\uC744 \uC874\uC911\uD558\uBA70, \uD68C\uC0AC\uB294 \uC81C 3\uC790\uC758 \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C\uC744 \uCE68\uD574\uD558\uB294 \uD68C\uC6D0\uACFC\uC758 \uAC70\uB798\uB97C \uD574\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774 \uAC8C\uC2DC\uD558\uACE0 \uB4F1\uB85D\uD55C \uCF58\uD150\uCE20\uAC00 \uC81C3\uC790\uC758 \uC800\uC791\uAD8C\uC744 \uCE68\uD574\uD588\uB2E4\uACE0 \uD1B5\uC9C0 \uBC1B\uB294 \uACBD\uC6B0, \uC800\uC791\uAD8C\uBC95 \uB4F1 \uAD00\uB828\uBC95\uB839\uC5D0 \uB530\uB77C \uD574\uB2F9 \uC790\uB8CC\uB97C \uC0AC\uC774\uD2B8\uC5D0\uC11C \uC0AD\uC81C \uB4F1 \uC81C\uD55C\uC870\uCE58\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uC790\uC2E0\uC758 \uC800\uC791\uAD8C\uC774 \uCE68\uD574\uB418\uC5C8\uB2E4\uACE0 \uBBFF\uB294 \uC81C 3\uC790\uC758 \uACBD\uC6B0, \uB2E4\uC74C \uC815\uBCF4\uB97C \uD3EC\uD568\uD558\uB294 \uC11C\uBA74\uC744 \uC791\uC131\uD558\uC5EC  \uD68C\uC0AC\uAC00 \uACF5\uC9C0\uD55C \uBA54\uC77C\uC8FC\uC18C\uB85C \uC81C\uCD9C\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">- \uC800\uC791\uAD8C \uC18C\uC720\uC790 \uB610\uB294 \uBC95\uC801 \uB300\uB9AC\uC778\uC758 \uC11C\uBA85<br class="svelte-h0vy4q"/>\n        - \uCE68\uD574\uB97C \uC8FC\uC7A5\uD558\uB294 \uCF58\uD150\uCE20<br class="svelte-h0vy4q"/>\n        - \uCE68\uD574\uB97C \uC8FC\uC7A5\uD558\uB294 \uCF58\uD150\uCE20\uAC00 \uAC8C\uC2DC \uB610\uB294 \uC0AC\uC6A9\uB41C \uC0AC\uC774\uD2B8 \uBC0F \uC571 \uC704\uCE58\uC5D0 \uB300\uD55C \uC0C1\uC138\uD55C \uAE30\uC220<br class="svelte-h0vy4q"/>\n        - \uC800\uC791\uAD8C\uC790 \uB610\uB294 \uADF8 \uBC95\uC801 \uB300\uB9AC\uC778\uC758 \uC8FC\uC18C, \uC804\uD654\uBC88\uD638 \uBC0F \uC774\uBA54\uC77C \uC8FC\uC18C<br class="svelte-h0vy4q"/>\n        - \uCE68\uD574\uB97C \uC8FC\uC7A5\uD558\uB294 \uC11C\uBA74\uC758 \uBAA8\uB4E0 \uC815\uBCF4\uAC00 \uAC1D\uAD00\uC801 \uC0AC\uC2E4\uC5D0 \uADFC\uAC70\uD55C \uC9C4\uC2E4\uD55C \uB0B4\uC6A9\uC774\uBA70, \uD5C8\uC704 \uB610\uB294 \uC911\uC694\uC0AC\uC2E4\uC758 \uB204\uB77D\uC774 \uC788\uB294 \uACBD\uC6B0 \uBC95\uC801 \uCC45\uC784\uC744 \uBD80\uB2F4\uD55C\uB2E4\uB294 \uC800\uC791\uAD8C\uC790 \uB610\uB294 \uBC95\uC801 \uB300\uB9AC\uC778\uC758 \uC9C4\uC220\uB0B4\uC6A9</p>\n    (4) \uD68C\uC6D0\uC740 \uC790\uC2E0\uC758 \uCF58\uD150\uCE20\uAC00 \uC2E4\uC218 \uB610\uB294 \uC624\uC778\uC73C\uB85C \uC778\uD574 \uC0AD\uC81C \uD639\uC740 \uC811\uADFC\uBD88\uAC00\uC0C1\uD0DC\uAC00 \uB418\uC5C8\uB2E4\uACE0 \uBBFF\uB294 \uACBD\uC6B0, \uB2E4\uC74C \uC815\uBCF4\uB97C \uD3EC\uD568\uD558\uB294 \uC11C\uBA74\uC744 \uC791\uC131\uD558\uC5EC \uD68C\uC0AC\uAC00 \uACF5\uC9C0\uD55C \uBA54\uC77C\uC8FC\uC18C\uB85C \uC81C\uCD9C\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\n    <p class="list01 svelte-h0vy4q">- \uD68C\uC6D0\uC758 \uC11C\uBA85<br class="svelte-h0vy4q"/>\n        - \uC0AD\uC81C \uD639\uC740 \uC811\uADFC\uBD88\uAC00\uC0C1\uD0DC\uAC00 \uB41C \uCF58\uD150\uCE20\uAC00 \uAC8C\uC2DC\uB418\uC5B4 \uC788\uB358 \uC0AC\uC774\uD2B8 \uC704\uCE58\uC5D0 \uB300\uD55C \uC0C1\uC138\uD55C \uAE30\uC220<br class="svelte-h0vy4q"/>\n        - \uC2E4\uC218 \uB610\uB294 \uC624\uC778\uC758 \uACB0\uACFC\uB85C \uC790\uC2E0\uC758 \uCF58\uD150\uCE20\uAC00 \uC0AD\uC81C \uD639\uC740 \uC811\uADFC\uBD88\uAC00\uC0C1\uD0DC\uAC00 \uB418\uC5C8\uB2E4\uACE0 \uBBFF\uB294 \uC9C4\uC220\uACFC \uD5C8\uC704 \uB610\uB294 \uC911\uC694\uC0AC\uC2E4\uC758 \uB204\uB77D\uC774 \uC788\uB294 \uACBD\uC6B0 \uBC95\uC801 \uCC45\uC784\uC744 \uBD80\uB2F4\uD55C\uB2E4\uB294 \uC800\uC791\uAD8C\uC790 \uB610\uB294 \uBC95\uC801 \uB300\uB9AC\uC778\uC758 \uC9C4\uC220\uB0B4\uC6A9<br class="svelte-h0vy4q"/>\n        - \uD68C\uC6D0\uC758 \uC131\uBA85, \uC8FC\uC18C, \uC804\uD654\uBC88\uD638 \uBC0F \uC774\uBA54\uC77C \uC8FC\uC18C</p>\n    (5) \uD68C\uC0AC\uB294 \uC704 \uC808\uCC28\uC5D0 \uB530\uB77C \uC81C\uCD9C\uB418\uC9C0 \uC544\uB2C8\uD55C \uACBD\uC6B0 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC11C\uBA74 \uD1B5\uC9C0\uB85C \uAC04\uC8FC\uD558\uBA70, \uC774\uC5D0 \uB300\uD55C \uC751\uB2F5 \uB610\uB294 \uC870\uCE58\uB97C \uCDE8\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.', Vs = main6.a(), Zs = main6.e("h3"), Zs.textContent = "\uC81C25\uC870 \uCDE8\uC18C \uBC0F \uD658\uBD88", se2 = main6.a(), ee3 = main6.e("div"), ee3.innerHTML = '(1) \uCDE8\uC18C \uBC0F \uD658\uBD88 \uADDC\uC815\uC740 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960 \uB4F1 \uAD00\uB828 \uBC95\uB839\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uAE30\uD0C0 \uBCF8 \uC57D\uAD00 \uBC0F \uC0AC\uC774\uD2B8\uC758 \uC774\uC6A9\uC548\uB0B4\uC5D0 \uADDC\uC815\uB418\uC9C0 \uC54A\uC740 \uCDE8\uC18C \uBC0F \uD658\uBD88\uC5D0 \uB300\uD55C \uC0AC\uD56D\uC5D0 \uB300\uD574\uC11C\uB294 \uC18C\uBE44\uC790 \uD53C\uD574\uBCF4\uC0C1\uADDC\uC815\uC5D0\uC11C \uC815\uD55C \uBC14\uC5D0 \uB530\uB985\uB2C8\uB2E4.', te3 = main6.a(), le2 = main6.e("h3"), le2.textContent = "\uC81C26\uC870 \uD68C\uC0AC\uC758 \uC18C\uC720\uAD8C", ne3 = main6.a(), ve = main6.e("div"), ve.innerHTML = '(1) \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4, \uADF8\uC5D0 \uD544\uC694\uD55C \uC18C\uD504\uD2B8\uC6E8\uC5B4, \uC774\uBBF8\uC9C0, \uB9C8\uD06C, \uB85C\uACE0, \uB514\uC790\uC778, \uC11C\uBE44\uC2A4 \uBA85\uCE6D, \uC815\uBCF4 \uBC0F \uC0C1\uD45C \uB4F1\uACFC \uAD00\uB828\uB41C \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C \uBC0F \uAE30\uD0C0 \uAD8C\uB9AC\uB294 \uD68C\uC0AC\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC6D0\uC740 \uD68C\uC0AC\uAC00 \uBA85\uC2DC\uC801\uC73C\uB85C \uC0AC\uC804 \uC2B9\uC778\uD55C \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0\uB294 \uC81C1\uD56D \uC18C\uC815\uC758 \uAC01 \uC7AC\uC0B0\uC5D0 \uB300\uD55C \uC804\uBD80 \uB610\uB294 \uC77C\uBD80\uC758 \uC218\uC815, \uB300\uC5EC, \uB300\uCD9C, \uD310\uB9E4, \uBC30\uD3EC, \uC81C\uC791, \uC591\uB3C4, \uC7AC\uB77C\uC774\uC13C\uC2A4, \uB2F4\uBCF4\uAD8C\uC124\uC815\uD589\uC704, \uC0C1\uC5C5\uC801 \uC774\uC6A9\uD589\uC704\uB97C \uD560 \uC218 \uC5C6\uC73C\uBA70, \uC81C3\uC790\uB85C \uD558\uC5EC\uAE08 \uC774\uC640 \uAC19\uC740 \uD589\uC704\uB97C \uD558\uB3C4\uB85D \uD5C8\uB77D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.', ce = main6.a(), ae = main6.e("h3"), ae.textContent = "\uC81C27\uC870 \uC591\uB3C4\uAE08\uC9C0", ie = main6.a(), re3 = main6.e("div"), re3.textContent = "\uD68C\uC6D0\uC740 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uAD8C\uD55C, \uAE30\uD0C0 \uC774\uC6A9\uACC4\uC57D\uC0C1\uC758 \uC9C0\uC704\uB97C \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBC0F \uC99D\uC5EC\uD560 \uC218 \uC5C6\uC73C\uBA70, \uC774\uB97C \uB2F4\uBCF4\uB85C \uC81C\uACF5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", he = main6.a(), oe2 = main6.e("h3"), oe2.textContent = "\uC81C28\uC870 \uC190\uD574\uBC30\uC0C1", qe = main6.a(), ye = main6.e("div"), ye.textContent = "\uD68C\uC0AC\uB294 \uBB34\uB8CC\uB85C \uC81C\uACF5\uB418\uB294 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uD68C\uC6D0\uC5D0\uAC8C \uC5B4\uB5A0\uD55C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uB354\uB77C\uB3C4 \uD68C\uC0AC\uAC00 \uACE0\uC758\uB85C \uD589\uD55C \uBC94\uC8C4\uD589\uC704\uB97C \uC81C\uC678\uD558\uACE0 \uC774\uC5D0 \uB300\uD558\uC5EC \uCC45\uC784\uC744 \uBD80\uB2F4\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4.", be = main6.a(), de = main6.e("h3"), de.textContent = "\uC81C29\uC870 \uBA74\uCC45\uC870\uD56D", pe = main6.a(), me = main6.e("div"), me.innerHTML = '(1) \uD68C\uC0AC\uB294 \uCC9C\uC7AC\uC9C0\uBCC0, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uB300\uD55C \uCC45\uC784\uC774 \uBA74\uC81C\uB429\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0 \uCC45\uC784\uC774 \uBA74\uC81C\uB429\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (3) \uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD55C \uCC45\uC784\uC774 \uBA74\uC81C\uB429\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (4) \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958\uC5D0 \uC758\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0, \uB610\uB294 \uD68C\uC6D0\uC774 \uC2E0\uC0C1\uC815\uBCF4 \uBC0F \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C\uB97C \uBD80\uC2E4\uD558\uAC8C \uAE30\uC7AC\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (5) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uC774\uB098 \uC81C3\uC790\uC5D0 \uC758\uD574 \uD45C\uCD9C\uB41C \uC5B4\uB5A0\uD55C \uC758\uACAC\uC774\uB098 \uC815\uBCF4\uC5D0 \uB300\uD574 \uD655\uC2E0\uC774\uB098 \uB300\uD45C\uD560 \uC758\uBB34\uAC00 \uC5C6\uC73C\uBA70 \uC758\uACAC\uC744 \uC2B9\uC778\uD558\uAC70\uB098 \uBC18\uB300\uD558\uAC70\uB098 \uC218\uC815\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC5B4\uB5A0\uD55C \uACBD\uC6B0\uB77C\uB3C4 \uD68C\uC6D0\uC774 \uC11C\uBE44\uC2A4\uC5D0 \uB2F4\uAE34 \uC815\uBCF4\uC5D0 \uC758\uC874\uD574 \uC5BB\uC740 \uC774\uB4DD\uC774\uB098 \uC785\uC740 \uC190\uD574\uC5D0 \uB300\uD574 \uCC45\uC784\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (6) \uD68C\uC0AC\uB294 \uD68C\uC6D0\uAC04 \uB610\uB294 \uD68C\uC6D0\uACFC \uC81C3\uC790\uAC04\uC5D0 \uC11C\uBE44\uC2A4\uB97C \uB9E4\uAC1C\uB85C \uD558\uC5EC \uBB3C\uD488\uAC70\uB798 \uD639\uC740 \uAE08\uC804\uC801 \uAC70\uB798 \uB4F1\uACFC \uAD00\uB828\uD558\uC5EC \uC5B4\uB5A0\uD55C \uCC45\uC784\uB3C4 \uBD80\uB2F4\uD558\uC9C0 \uC544\uB2C8\uD558\uACE0, \uD68C\uC6D0\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uAE30\uB300\uD558\uB294 \uC774\uC775\uC5D0 \uAD00\uD558\uC5EC \uCC45\uC784\uC744 \uBD80\uB2F4\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (7) \uD68C\uC0AC\uB294 \uD68C\uC6D0 \uB4F1 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790 \uB610\uB294 \uAE30\uD0C0 \uC720\uAD00\uAE30\uAD00\uC774 \uC11C\uBE44\uC2A4\uC5D0 \uAC8C\uC7AC\uD55C \uC815\uBCF4\uC5D0 \uB300\uD574 \uC815\uD655\uC131, \uC2E0\uB8B0\uB3C4\uC5D0 \uB300\uD558\uC5EC \uBCF4\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uAC00 \uC704 \uB0B4\uC6A9\uC744 \uC774\uC6A9\uD568\uC73C\uB85C \uC778\uD574 \uC785\uAC8C \uB41C \uBAA8\uB4E0 \uC885\uB958\uC758 \uC190\uC2E4\uC774\uB098 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC \uCC45\uC784\uC744 \uBD80\uB2F4\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (8) \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uAC00\uC785\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574 \uC911 \uAC00\uC785\uC790\uC758 \uACE0\uC758, \uACFC\uC2E4\uC5D0 \uC758\uD55C \uC190\uD574 \uBC0F \uD0C0 \uC774\uC6A9\uC790\uB85C \uC778\uD574 \uC785\uAC8C \uB418\uB294 \uC815\uC2E0\uC801 \uD53C\uD574\uC5D0 \uB300\uD558\uC5EC \uBCF4\uC0C1\uD560 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.', ue = main6.a(), ge = main6.e("h3"), ge.textContent = "\uC81C30\uC870 \uBD84\uC7C1\uD574\uACB0", xe = main6.a(), Ce = main6.e("div"), Ce.innerHTML = '(1) \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uAC00 \uC81C\uAE30\uD558\uB294 \uC815\uB2F9\uD55C \uC758\uACAC\uC774\uB098 \uBD88\uB9CC\uC744 \uBC18\uC601\uD558\uACE0 \uADF8 \uD53C\uD574\uB97C \uBCF4\uC0C1\uCC98\uB9AC\uD558\uAE30 \uC704\uD558\uC5EC \uCD5C\uC120\uC758 \uB178\uB825\uC744 \uB2E4\uD558\uBA70, \uC801\uC808\uD55C \uD53C\uD574\uBCF4\uC0C1 \uBC0F \uAD6C\uC81C\uB97C \uC704\uD55C \uC808\uCC28\uB97C \uB9C8\uB828\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uB85C\uBD80\uD130 \uC81C\uCD9C\uB418\uB294 \uBD88\uB9CC\uC0AC\uD56D \uBC0F \uC758\uACAC\uC740 \uC6B0\uC120\uC801\uC73C\uB85C \uADF8 \uC0AC\uD56D\uC744 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC2E0\uC18D\uD55C \uCC98\uB9AC\uAC00 \uACE4\uB780\uD55C \uACBD\uC6B0\uC5D0\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uADF8 \uC0AC\uC720\uC640 \uCC98\uB9AC\uC77C\uC815\uC744 \uC989\uC2DC \uD1B5\uBCF4\uD569\uB2C8\uB2E4.', Me = main6.a(), Te = main6.e("h3"), Te.textContent = "\uC81C31\uC870 \uC900\uAC70\uBC95 \uBC0F \uAD00\uD560\uBC95\uC6D0", He = main6.a(), Le = main6.e("div"), Le.innerHTML = '(1) \uBCF8 \uC57D\uAD00\uC758 \uD574\uC11D \uBC0F \uD68C\uC6D0\uAC04\uC758 \uBD84\uC7C1\uC5D0 \uB300\uD558\uC5EC\uB294 \uB300\uD55C\uBBFC\uAD6D\uC758 \uBC95\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4.<br class="svelte-h0vy4q"/>\n    (2) \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911 \uBC1C\uC0DD\uD55C \uD68C\uC6D0\uACFC \uD68C\uC0AC\uAC04\uC758 \uC18C\uC1A1\uC740 \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 1\uC2EC\uC758 \uC804\uC18D\uC801 \uAD00\uD560\uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.', fe = main6.a(), $e = main6.e("h3"), $e.textContent = "\uBD80\uCE59", we = main6.a(), De = main6.e("div"), De.textContent = "\uBCF8 \uC57D\uAD00\uC740 2020\uB144 5\uC6D4 20\uC77C\uBD80\uD130 \uC801\uC6A9\uD569\uB2C8\uB2E4.", main6.b(e8, "class", "title svelte-h0vy4q"), main6.b(v7, "class", "document-date svelte-h0vy4q"), main6.b(o7, "class", "section-title svelte-h0vy4q"), main6.b(y5, "class", "section-description svelte-h0vy4q"), main6.b(d6, "class", "section-title svelte-h0vy4q"), main6.b(m7, "class", "section-description svelte-h0vy4q"), main6.b(g5, "class", "section-title svelte-h0vy4q"), main6.b(C5, "class", "section-description svelte-h0vy4q"), main6.b(T5, "class", "section-title svelte-h0vy4q"), main6.b(L4, "class", "section-description svelte-h0vy4q"), main6.b($4, "class", "section-title svelte-h0vy4q"), main6.b(D4, "class", "section-description svelte-h0vy4q"), main6.b(I3, "class", "section-title svelte-h0vy4q"), main6.b(S4, "class", "section-description svelte-h0vy4q"), main6.b(O3, "class", "section-title svelte-h0vy4q"), main6.b(z4, "class", "section-description svelte-h0vy4q"), main6.b(k5, "class", "section-title svelte-h0vy4q"), main6.b(W3, "class", "section-description svelte-h0vy4q"), main6.b(Y3, "class", "section-title svelte-h0vy4q"), main6.b(E4, "class", "section-description svelte-h0vy4q"), main6.b(J3, "class", "section-title svelte-h0vy4q"), main6.b(N3, "class", "section-description svelte-h0vy4q"), main6.b(U3, "class", "section-title svelte-h0vy4q"), main6.b(Z3, "class", "section-description svelte-h0vy4q"), main6.b(es, "class", "section-title svelte-h0vy4q"), main6.b(ls, "class", "section-description svelte-h0vy4q"), main6.b(vs, "class", "section-title svelte-h0vy4q"), main6.b(as, "class", "section-description svelte-h0vy4q"), main6.b(rs, "class", "section-title svelte-h0vy4q"), main6.b(os, "class", "section-description svelte-h0vy4q"), main6.b(ys, "class", "section-title svelte-h0vy4q"), main6.b(ds, "class", "section-description svelte-h0vy4q"), main6.b(ms, "class", "section-title svelte-h0vy4q"), main6.b(gs, "class", "section-description svelte-h0vy4q"), main6.b(Cs, "class", "section-title svelte-h0vy4q"), main6.b(Ts, "class", "section-description svelte-h0vy4q"), main6.b(Ls, "class", "section-title svelte-h0vy4q"), main6.b($s, "class", "section-description svelte-h0vy4q"), main6.b(Ds, "class", "section-title svelte-h0vy4q"), main6.b(Is, "class", "section-description svelte-h0vy4q"), main6.b(Ss, "class", "section-title svelte-h0vy4q"), main6.b(Os, "class", "section-description svelte-h0vy4q"), main6.b(zs, "class", "section-title svelte-h0vy4q"), main6.b(ks, "class", "section-description svelte-h0vy4q"), main6.b(Ws, "class", "section-title svelte-h0vy4q"), main6.b(Ys, "class", "section-description svelte-h0vy4q"), main6.b(Es, "class", "section-title svelte-h0vy4q"), main6.b(Js, "class", "section-description svelte-h0vy4q"), main6.b(Ns, "class", "section-title svelte-h0vy4q"), main6.b(Us, "class", "section-description svelte-h0vy4q"), main6.b(Zs, "class", "section-title svelte-h0vy4q"), main6.b(ee3, "class", "section-description svelte-h0vy4q"), main6.b(le2, "class", "section-title svelte-h0vy4q"), main6.b(ve, "class", "section-description svelte-h0vy4q"), main6.b(ae, "class", "section-title svelte-h0vy4q"), main6.b(re3, "class", "section-description svelte-h0vy4q"), main6.b(oe2, "class", "section-title svelte-h0vy4q"), main6.b(ye, "class", "section-description svelte-h0vy4q"), main6.b(de, "class", "section-title svelte-h0vy4q"), main6.b(me, "class", "section-description svelte-h0vy4q"), main6.b(ge, "class", "section-title svelte-h0vy4q"), main6.b(Ce, "class", "section-description svelte-h0vy4q"), main6.b(Te, "class", "section-title svelte-h0vy4q"), main6.b(Le, "class", "section-description svelte-h0vy4q"), main6.b($e, "class", "section-title svelte-h0vy4q"), main6.b(De, "class", "section-description svelte-h0vy4q");
      }, m(s8, l7) {
        main6.d(s8, e8, l7), main6.d(s8, t7, l7), main6.d(s8, v7, l7), main6.d(s8, h7, l7), main6.d(s8, o7, l7), main6.d(s8, q5, l7), main6.d(s8, y5, l7), main6.d(s8, b5, l7), main6.d(s8, d6, l7), main6.d(s8, p6, l7), main6.d(s8, m7, l7), main6.d(s8, u5, l7), main6.d(s8, g5, l7), main6.d(s8, x5, l7), main6.d(s8, C5, l7), main6.d(s8, M3, l7), main6.d(s8, T5, l7), main6.d(s8, H4, l7), main6.d(s8, L4, l7), main6.d(s8, f7, l7), main6.d(s8, $4, l7), main6.d(s8, w5, l7), main6.d(s8, D4, l7), main6.d(s8, A4, l7), main6.d(s8, I3, l7), main6.d(s8, j5, l7), main6.d(s8, S4, l7), main6.d(s8, _3, l7), main6.d(s8, O3, l7), main6.d(s8, R3, l7), main6.d(s8, z4, l7), main6.d(s8, F4, l7), main6.d(s8, k5, l7), main6.d(s8, P3, l7), main6.d(s8, W3, l7), main6.d(s8, X3, l7), main6.d(s8, Y3, l7), main6.d(s8, B4, l7), main6.d(s8, E4, l7), main6.d(s8, G3, l7), main6.d(s8, J3, l7), main6.d(s8, K3, l7), main6.d(s8, N3, l7), main6.d(s8, Q3, l7), main6.d(s8, U3, l7), main6.d(s8, V3, l7), main6.d(s8, Z3, l7), main6.d(s8, ss, l7), main6.d(s8, es, l7), main6.d(s8, ts, l7), main6.d(s8, ls, l7), main6.d(s8, ns, l7), main6.d(s8, vs, l7), main6.d(s8, cs, l7), main6.d(s8, as, l7), main6.d(s8, is, l7), main6.d(s8, rs, l7), main6.d(s8, hs, l7), main6.d(s8, os, l7), main6.d(s8, qs, l7), main6.d(s8, ys, l7), main6.d(s8, bs, l7), main6.d(s8, ds, l7), main6.d(s8, ps, l7), main6.d(s8, ms, l7), main6.d(s8, us, l7), main6.d(s8, gs, l7), main6.d(s8, xs, l7), main6.d(s8, Cs, l7), main6.d(s8, Ms, l7), main6.d(s8, Ts, l7), main6.d(s8, Hs, l7), main6.d(s8, Ls, l7), main6.d(s8, fs, l7), main6.d(s8, $s, l7), main6.d(s8, ws, l7), main6.d(s8, Ds, l7), main6.d(s8, As, l7), main6.d(s8, Is, l7), main6.d(s8, js, l7), main6.d(s8, Ss, l7), main6.d(s8, _s, l7), main6.d(s8, Os, l7), main6.d(s8, Rs, l7), main6.d(s8, zs, l7), main6.d(s8, Fs, l7), main6.d(s8, ks, l7), main6.d(s8, Ps, l7), main6.d(s8, Ws, l7), main6.d(s8, Xs, l7), main6.d(s8, Ys, l7), main6.d(s8, Bs, l7), main6.d(s8, Es, l7), main6.d(s8, Gs, l7), main6.d(s8, Js, l7), main6.d(s8, Ks, l7), main6.d(s8, Ns, l7), main6.d(s8, Qs, l7), main6.d(s8, Us, l7), main6.d(s8, Vs, l7), main6.d(s8, Zs, l7), main6.d(s8, se2, l7), main6.d(s8, ee3, l7), main6.d(s8, te3, l7), main6.d(s8, le2, l7), main6.d(s8, ne3, l7), main6.d(s8, ve, l7), main6.d(s8, ce, l7), main6.d(s8, ae, l7), main6.d(s8, ie, l7), main6.d(s8, re3, l7), main6.d(s8, he, l7), main6.d(s8, oe2, l7), main6.d(s8, qe, l7), main6.d(s8, ye, l7), main6.d(s8, be, l7), main6.d(s8, de, l7), main6.d(s8, pe, l7), main6.d(s8, me, l7), main6.d(s8, ue, l7), main6.d(s8, ge, l7), main6.d(s8, xe, l7), main6.d(s8, Ce, l7), main6.d(s8, Me, l7), main6.d(s8, Te, l7), main6.d(s8, He, l7), main6.d(s8, Le, l7), main6.d(s8, fe, l7), main6.d(s8, $e, l7), main6.d(s8, we, l7), main6.d(s8, De, l7);
      }, p: main6.n, i: main6.n, o: main6.n, d(s8) {
        s8 && main6.h(e8), s8 && main6.h(t7), s8 && main6.h(v7), s8 && main6.h(h7), s8 && main6.h(o7), s8 && main6.h(q5), s8 && main6.h(y5), s8 && main6.h(b5), s8 && main6.h(d6), s8 && main6.h(p6), s8 && main6.h(m7), s8 && main6.h(u5), s8 && main6.h(g5), s8 && main6.h(x5), s8 && main6.h(C5), s8 && main6.h(M3), s8 && main6.h(T5), s8 && main6.h(H4), s8 && main6.h(L4), s8 && main6.h(f7), s8 && main6.h($4), s8 && main6.h(w5), s8 && main6.h(D4), s8 && main6.h(A4), s8 && main6.h(I3), s8 && main6.h(j5), s8 && main6.h(S4), s8 && main6.h(_3), s8 && main6.h(O3), s8 && main6.h(R3), s8 && main6.h(z4), s8 && main6.h(F4), s8 && main6.h(k5), s8 && main6.h(P3), s8 && main6.h(W3), s8 && main6.h(X3), s8 && main6.h(Y3), s8 && main6.h(B4), s8 && main6.h(E4), s8 && main6.h(G3), s8 && main6.h(J3), s8 && main6.h(K3), s8 && main6.h(N3), s8 && main6.h(Q3), s8 && main6.h(U3), s8 && main6.h(V3), s8 && main6.h(Z3), s8 && main6.h(ss), s8 && main6.h(es), s8 && main6.h(ts), s8 && main6.h(ls), s8 && main6.h(ns), s8 && main6.h(vs), s8 && main6.h(cs), s8 && main6.h(as), s8 && main6.h(is), s8 && main6.h(rs), s8 && main6.h(hs), s8 && main6.h(os), s8 && main6.h(qs), s8 && main6.h(ys), s8 && main6.h(bs), s8 && main6.h(ds), s8 && main6.h(ps), s8 && main6.h(ms), s8 && main6.h(us), s8 && main6.h(gs), s8 && main6.h(xs), s8 && main6.h(Cs), s8 && main6.h(Ms), s8 && main6.h(Ts), s8 && main6.h(Hs), s8 && main6.h(Ls), s8 && main6.h(fs), s8 && main6.h($s), s8 && main6.h(ws), s8 && main6.h(Ds), s8 && main6.h(As), s8 && main6.h(Is), s8 && main6.h(js), s8 && main6.h(Ss), s8 && main6.h(_s), s8 && main6.h(Os), s8 && main6.h(Rs), s8 && main6.h(zs), s8 && main6.h(Fs), s8 && main6.h(ks), s8 && main6.h(Ps), s8 && main6.h(Ws), s8 && main6.h(Xs), s8 && main6.h(Ys), s8 && main6.h(Bs), s8 && main6.h(Es), s8 && main6.h(Gs), s8 && main6.h(Js), s8 && main6.h(Ks), s8 && main6.h(Ns), s8 && main6.h(Qs), s8 && main6.h(Us), s8 && main6.h(Vs), s8 && main6.h(Zs), s8 && main6.h(se2), s8 && main6.h(ee3), s8 && main6.h(te3), s8 && main6.h(le2), s8 && main6.h(ne3), s8 && main6.h(ve), s8 && main6.h(ce), s8 && main6.h(ae), s8 && main6.h(ie), s8 && main6.h(re3), s8 && main6.h(he), s8 && main6.h(oe2), s8 && main6.h(qe), s8 && main6.h(ye), s8 && main6.h(be), s8 && main6.h(de), s8 && main6.h(pe), s8 && main6.h(me), s8 && main6.h(ue), s8 && main6.h(ge), s8 && main6.h(xe), s8 && main6.h(Ce), s8 && main6.h(Me), s8 && main6.h(Te), s8 && main6.h(He), s8 && main6.h(Le), s8 && main6.h(fe), s8 && main6.h($e), s8 && main6.h(we), s8 && main6.h(De);
      }};
    }
    class H3 extends main6.S {
      constructor(s7) {
        super(), main6.i(this, s7, null, T4, main6.s, {});
      }
    }
    function L3(s7) {
      let e8, t7, v7, c7, m7, x5, C5, T5, L4, f7, $4, w5, D4 = false, A4 = () => {
        D4 = false;
      };
      return main6.A(s7[2]), t7 = new M2({props: {metadata: s7[1]}}), c7 = new g({}), C5 = new H3({}), L4 = new f({}), {c() {
        main6.c(t7.$$.fragment), v7 = main6.a(), main6.c(c7.$$.fragment), m7 = main6.a(), x5 = main6.e("div"), main6.c(C5.$$.fragment), T5 = main6.a(), main6.c(L4.$$.fragment), main6.b(x5, "class", "sections svelte-1vx1xj2");
      }, m(l7, n7) {
        main6.m(t7, l7, n7), main6.d(l7, v7, n7), main6.m(c7, l7, n7), main6.d(l7, m7, n7), main6.d(l7, x5, n7), main6.m(C5, x5, null), main6.d(l7, T5, n7), main6.m(L4, l7, n7), f7 = true, $4 || (w5 = main6.H(window, "scroll", () => {
          D4 = true, clearTimeout(e8), e8 = setTimeout(A4, 100), s7[2]();
        }), $4 = true);
      }, p(s8, [t8]) {
        1 & t8 && !D4 && (D4 = true, clearTimeout(e8), scrollTo(window.pageXOffset, s8[0]), e8 = setTimeout(A4, 100));
      }, i(s8) {
        f7 || (main6.t(t7.$$.fragment, s8), main6.t(c7.$$.fragment, s8), main6.t(C5.$$.fragment, s8), main6.t(L4.$$.fragment, s8), f7 = true);
      }, o(s8) {
        main6.f(t7.$$.fragment, s8), main6.f(c7.$$.fragment, s8), main6.f(C5.$$.fragment, s8), main6.f(L4.$$.fragment, s8), f7 = false;
      }, d(s8) {
        main6.g(t7, s8), s8 && main6.h(v7), main6.g(c7, s8), s8 && main6.h(m7), s8 && main6.h(x5), main6.g(C5), s8 && main6.h(T5), main6.g(L4, s8), $4 = false, w5();
      }};
    }
    function f6(s7, e8, t7) {
      let l7, n7 = {title: "allius", description: "allius \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC57D\uAD00", image: "https://allius-images.s3.ap-northeast-2.amazonaws.com/static-images/meta_img_01.jpg", imageAlt: "\uB098\uC758 \uBE0C\uB79C\uB4DC\uB85C \uB9CC\uB4DC\uB294 \uAE30\uD68C", url: "https://home.allius.io/terms"};
      return main6.o(() => {
        t7(0, l7 = 0);
      }), [l7, n7, function() {
        t7(0, l7 = window.pageYOffset);
      }];
    }
    class index_30850fb8_default extends main6.S {
      constructor(s7) {
        super(), main6.i(this, s7, f6, L3, main6.s, {});
      }
    }
  });

  // ../../../../지울꺼/allius-routify/dist/build/_layout-8b2a9587.js
  var require_layout_8b2a9587 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_8b2a9587_default
    });
    const main6 = __toModule(require_main());
    function c6(s7) {
      let t7;
      const e8 = s7[1].default, c7 = main6.D(e8, s7, s7[0], null);
      return {c() {
        c7 && c7.c();
      }, m(s8, e9) {
        c7 && c7.m(s8, e9), t7 = true;
      }, p(s8, [t8]) {
        c7 && c7.p && 1 & t8 && main6.E(c7, e8, s8, s8[0], t8, null, null);
      }, i(s8) {
        t7 || (main6.t(c7, s8), t7 = true);
      }, o(s8) {
        main6.f(c7, s8), t7 = false;
      }, d(s8) {
        c7 && c7.d(s8);
      }};
    }
    function u5(s7, t7, e8) {
      let {$$slots: n7 = {}, $$scope: o7} = t7;
      return s7.$$set = (s8) => {
        "$$scope" in s8 && e8(0, o7 = s8.$$scope);
      }, [o7, n7];
    }
    class layout_8b2a9587_default extends main6.S {
      constructor(s7) {
        super(), main6.i(this, s7, u5, c6, main6.s, {});
      }
    }
  });

  // ../../../../지울꺼/allius-routify/dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => Y3,
      B: () => F4,
      C: () => v6,
      D: () => p5,
      E: () => f6,
      F: () => W3,
      G: () => h6,
      H: () => I3,
      I: () => ht,
      J: () => i6,
      K: () => $t,
      L: () => tt,
      S: () => vt,
      a: () => E4,
      b: () => O3,
      c: () => bt,
      d: () => _3,
      e: () => P3,
      f: () => dt,
      g: () => _t,
      h: () => x4,
      i: () => xt,
      j: () => k5,
      k: () => w5,
      l: () => u5,
      m: () => wt,
      n: () => t6,
      o: () => D4,
      p: () => j5,
      q: () => lt,
      r: () => ut,
      s: () => a6,
      t: () => pt,
      u: () => ae,
      v: () => S4,
      w: () => se2,
      x: () => ce,
      y: () => ne3,
      z: () => R3
    });
    function t6() {
    }
    const e7 = (t7) => t7;
    function n6(t7, e8) {
      for (const n7 in e8)
        t7[n7] = e8[n7];
      return t7;
    }
    function o6(t7) {
      return t7();
    }
    function r6() {
      return Object.create(null);
    }
    function i6(t7) {
      t7.forEach(o6);
    }
    function s6(t7) {
      return typeof t7 == "function";
    }
    function a6(t7, e8) {
      return t7 != t7 ? e8 == e8 : t7 !== e8 || t7 && typeof t7 == "object" || typeof t7 == "function";
    }
    function c6(e8, ...n7) {
      if (e8 == null)
        return t6;
      const o7 = e8.subscribe(...n7);
      return o7.unsubscribe ? () => o7.unsubscribe() : o7;
    }
    function l6(t7) {
      let e8;
      return c6(t7, (t8) => e8 = t8)(), e8;
    }
    function u5(t7, e8, n7) {
      t7.$$.on_destroy.push(c6(e8, n7));
    }
    function p5(t7, e8, n7, o7) {
      if (t7) {
        const r7 = d5(t7, e8, n7, o7);
        return t7[0](r7);
      }
    }
    function d5(t7, e8, o7, r7) {
      return t7[1] && r7 ? n6(o7.ctx.slice(), t7[1](r7(e8))) : o7.ctx;
    }
    function f6(t7, e8, n7, o7, r7, i7, s7) {
      const a7 = function(t8, e9, n8, o8) {
        if (t8[2] && o8) {
          const r8 = t8[2](o8(n8));
          if (e9.dirty === void 0)
            return r8;
          if (typeof r8 == "object") {
            const t9 = [], n9 = Math.max(e9.dirty.length, r8.length);
            for (let o9 = 0; o9 < n9; o9 += 1)
              t9[o9] = e9.dirty[o9] | r8[o9];
            return t9;
          }
          return e9.dirty | r8;
        }
        return e9.dirty;
      }(e8, o7, r7, i7);
      if (a7) {
        const r8 = d5(e8, n7, o7, s7);
        t7.p(r8, a7);
      }
    }
    function h6(t7) {
      return t7 == null ? "" : t7;
    }
    const m6 = typeof window != "undefined";
    let g5 = m6 ? () => window.performance.now() : () => Date.now();
    let y4 = m6 ? (t7) => requestAnimationFrame(t7) : t6;
    const $4 = new Set();
    function b4(t7) {
      $4.forEach((e8) => {
        e8.c(t7) || ($4.delete(e8), e8.f());
      }), $4.size !== 0 && y4(b4);
    }
    function w5(t7, e8) {
      t7.appendChild(e8);
    }
    function _3(t7, e8, n7) {
      t7.insertBefore(e8, n7 || null);
    }
    function x4(t7) {
      t7.parentNode.removeChild(t7);
    }
    function v6(t7, e8) {
      for (let n7 = 0; n7 < t7.length; n7 += 1)
        t7[n7] && t7[n7].d(e8);
    }
    function P3(t7) {
      return document.createElement(t7);
    }
    function k5(t7) {
      return document.createTextNode(t7);
    }
    function E4() {
      return k5(" ");
    }
    function j5() {
      return k5("");
    }
    function I3(t7, e8, n7, o7) {
      return t7.addEventListener(e8, n7, o7), () => t7.removeEventListener(e8, n7, o7);
    }
    function O3(t7, e8, n7) {
      n7 == null ? t7.removeAttribute(e8) : t7.getAttribute(e8) !== n7 && t7.setAttribute(e8, n7);
    }
    function S4(t7, e8) {
      e8 = "" + e8, t7.wholeText !== e8 && (t7.data = e8);
    }
    function R3(t7, e8, n7, o7) {
      t7.style.setProperty(e8, n7, o7 ? "important" : "");
    }
    let L3;
    function A4() {
      if (L3 === void 0) {
        L3 = false;
        try {
          typeof window != "undefined" && window.parent && window.parent.document;
        } catch (t7) {
          L3 = true;
        }
      }
      return L3;
    }
    function F4(t7, e8) {
      getComputedStyle(t7).position === "static" && (t7.style.position = "relative");
      const n7 = P3("iframe");
      n7.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n7.setAttribute("aria-hidden", "true"), n7.tabIndex = -1;
      const o7 = A4();
      let r7;
      return o7 ? (n7.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>", r7 = I3(window, "message", (t8) => {
        t8.source === n7.contentWindow && e8();
      })) : (n7.src = "about:blank", n7.onload = () => {
        r7 = I3(n7.contentWindow, "resize", e8);
      }), w5(t7, n7), () => {
        (o7 || r7 && n7.contentWindow) && r7(), x4(n7);
      };
    }
    const M2 = new Set();
    let C4;
    let N3 = 0;
    function T4(t7, e8, n7, o7, r7, i7, s7, a7 = 0) {
      const c7 = 16.666 / o7;
      let l7 = "{\n";
      for (let t8 = 0; t8 <= 1; t8 += c7) {
        const o8 = e8 + (n7 - e8) * i7(t8);
        l7 += 100 * t8 + `%{${s7(o8, 1 - o8)}}
`;
      }
      const u6 = l7 + `100% {${s7(n7, 1 - n7)}}
}`, p6 = `__svelte_${function(t8) {
        let e9 = 5381, n8 = t8.length;
        for (; n8--; )
          e9 = (e9 << 5) - e9 ^ t8.charCodeAt(n8);
        return e9 >>> 0;
      }(u6)}_${a7}`, d6 = t7.ownerDocument;
      M2.add(d6);
      const f7 = d6.__svelte_stylesheet || (d6.__svelte_stylesheet = d6.head.appendChild(P3("style")).sheet), h7 = d6.__svelte_rules || (d6.__svelte_rules = {});
      h7[p6] || (h7[p6] = true, f7.insertRule(`@keyframes ${p6} ${u6}`, f7.cssRules.length));
      const m7 = t7.style.animation || "";
      return t7.style.animation = `${m7 ? `${m7}, ` : ""}${p6} ${o7}ms linear ${r7}ms 1 both`, N3 += 1, p6;
    }
    function q4(t7, e8) {
      const n7 = (t7.style.animation || "").split(", "), o7 = n7.filter(e8 ? (t8) => t8.indexOf(e8) < 0 : (t8) => t8.indexOf("__svelte") === -1), r7 = n7.length - o7.length;
      r7 && (t7.style.animation = o7.join(", "), N3 -= r7, N3 || y4(() => {
        N3 || (M2.forEach((t8) => {
          const e9 = t8.__svelte_stylesheet;
          let n8 = e9.cssRules.length;
          for (; n8--; )
            e9.deleteRule(n8);
          t8.__svelte_rules = {};
        }), M2.clear());
      }));
    }
    function B4(t7) {
      C4 = t7;
    }
    function U3() {
      if (!C4)
        throw new Error("Function called outside component initialization");
      return C4;
    }
    function D4(t7) {
      U3().$$.on_mount.push(t7);
    }
    function z4(t7, e8) {
      U3().$$.context.set(t7, e8);
    }
    function H3(t7) {
      return U3().$$.context.get(t7);
    }
    const K3 = [];
    const W3 = [];
    const J3 = [];
    const G3 = [];
    const Q3 = Promise.resolve();
    let V3 = false;
    function Z3() {
      V3 || (V3 = true, Q3.then(ot));
    }
    function X3() {
      return Z3(), Q3;
    }
    function Y3(t7) {
      J3.push(t7);
    }
    function tt(t7) {
      G3.push(t7);
    }
    let et = false;
    const nt = new Set();
    function ot() {
      if (!et) {
        et = true;
        do {
          for (let t7 = 0; t7 < K3.length; t7 += 1) {
            const e8 = K3[t7];
            B4(e8), rt(e8.$$);
          }
          for (B4(null), K3.length = 0; W3.length; )
            W3.pop()();
          for (let t7 = 0; t7 < J3.length; t7 += 1) {
            const e8 = J3[t7];
            nt.has(e8) || (nt.add(e8), e8());
          }
          J3.length = 0;
        } while (K3.length);
        for (; G3.length; )
          G3.pop()();
        V3 = false, et = false, nt.clear();
      }
    }
    function rt(t7) {
      if (t7.fragment !== null) {
        t7.update(), i6(t7.before_update);
        const e8 = t7.dirty;
        t7.dirty = [-1], t7.fragment && t7.fragment.p(t7.ctx, e8), t7.after_update.forEach(Y3);
      }
    }
    let it;
    function st(t7, e8, n7) {
      t7.dispatchEvent(function(t8, e9) {
        const n8 = document.createEvent("CustomEvent");
        return n8.initCustomEvent(t8, false, false, e9), n8;
      }(`${e8 ? "intro" : "outro"}${n7}`));
    }
    const at = new Set();
    let ct;
    function lt() {
      ct = {r: 0, c: [], p: ct};
    }
    function ut() {
      ct.r || i6(ct.c), ct = ct.p;
    }
    function pt(t7, e8) {
      t7 && t7.i && (at.delete(t7), t7.i(e8));
    }
    function dt(t7, e8, n7, o7) {
      if (t7 && t7.o) {
        if (at.has(t7))
          return;
        at.add(t7), ct.c.push(() => {
          at.delete(t7), o7 && (n7 && t7.d(1), o7());
        }), t7.o(e8);
      }
    }
    const ft = {duration: 0};
    function ht(n7, o7, r7, a7) {
      let c7 = o7(n7, r7), l7 = a7 ? 0 : 1, u6 = null, p6 = null, d6 = null;
      function f7() {
        d6 && q4(n7, d6);
      }
      function h7(t7, e8) {
        const n8 = t7.b - l7;
        return e8 *= Math.abs(n8), {a: l7, b: t7.b, d: n8, duration: e8, start: t7.start, end: t7.start + e8, group: t7.group};
      }
      function m7(o8) {
        const {delay: r8 = 0, duration: s7 = 300, easing: a8 = e7, tick: m8 = t6, css: w6} = c7 || ft, _4 = {start: g5() + r8, b: o8};
        o8 || (_4.group = ct, ct.r += 1), u6 || p6 ? p6 = _4 : (w6 && (f7(), d6 = T4(n7, l7, o8, s7, r8, a8, w6)), o8 && m8(0, 1), u6 = h7(_4, s7), Y3(() => st(n7, o8, "start")), function(t7) {
          let e8;
          $4.size === 0 && y4(b4), new Promise((n8) => {
            $4.add(e8 = {c: t7, f: n8});
          });
        }((t7) => {
          if (p6 && t7 > p6.start && (u6 = h7(p6, s7), p6 = null, st(n7, u6.b, "start"), w6 && (f7(), d6 = T4(n7, l7, u6.b, u6.duration, 0, a8, c7.css))), u6) {
            if (t7 >= u6.end)
              m8(l7 = u6.b, 1 - l7), st(n7, u6.b, "end"), p6 || (u6.b ? f7() : --u6.group.r || i6(u6.group.c)), u6 = null;
            else if (t7 >= u6.start) {
              const e8 = t7 - u6.start;
              l7 = u6.a + u6.d * a8(e8 / u6.duration), m8(l7, 1 - l7);
            }
          }
          return !(!u6 && !p6);
        }));
      }
      return {run(t7) {
        s6(c7) ? (it || (it = Promise.resolve(), it.then(() => {
          it = null;
        })), it).then(() => {
          c7 = c7(), m7(t7);
        }) : m7(t7);
      }, end() {
        f7(), u6 = p6 = null;
      }};
    }
    function mt(t7, e8) {
      t7.d(1), e8.delete(t7.key);
    }
    function gt(t7, e8) {
      dt(t7, 1, 1, () => {
        e8.delete(t7.key);
      });
    }
    function yt(t7, e8, n7, o7, r7, i7, s7, a7, c7, l7, u6, p6) {
      let d6 = t7.length, f7 = i7.length, h7 = d6;
      const m7 = {};
      for (; h7--; )
        m7[t7[h7].key] = h7;
      const g6 = [], y5 = new Map(), $5 = new Map();
      for (h7 = f7; h7--; ) {
        const t8 = p6(r7, i7, h7), a8 = n7(t8);
        let c8 = s7.get(a8);
        c8 ? o7 && c8.p(t8, e8) : (c8 = l7(a8, t8), c8.c()), y5.set(a8, g6[h7] = c8), a8 in m7 && $5.set(a8, Math.abs(h7 - m7[a8]));
      }
      const b5 = new Set(), w6 = new Set();
      function _4(t8) {
        pt(t8, 1), t8.m(a7, u6), s7.set(t8.key, t8), u6 = t8.first, f7--;
      }
      for (; d6 && f7; ) {
        const e9 = g6[f7 - 1], n8 = t7[d6 - 1], o8 = e9.key, r8 = n8.key;
        e9 === n8 ? (u6 = e9.first, d6--, f7--) : y5.has(r8) ? !s7.has(o8) || b5.has(o8) ? _4(e9) : w6.has(r8) ? d6-- : $5.get(o8) > $5.get(r8) ? (w6.add(o8), _4(e9)) : (b5.add(r8), d6--) : (c7(n8, s7), d6--);
      }
      for (; d6--; ) {
        const e9 = t7[d6];
        y5.has(e9.key) || c7(e9, s7);
      }
      for (; f7; )
        _4(g6[f7 - 1]);
      return g6;
    }
    function $t(t7, e8, n7) {
      const o7 = t7.$$.props[e8];
      o7 !== void 0 && (t7.$$.bound[o7] = n7, n7(t7.$$.ctx[o7]));
    }
    function bt(t7) {
      t7 && t7.c();
    }
    function wt(t7, e8, n7) {
      const {fragment: r7, on_mount: a7, on_destroy: c7, after_update: l7} = t7.$$;
      r7 && r7.m(e8, n7), Y3(() => {
        const e9 = a7.map(o6).filter(s6);
        c7 ? c7.push(...e9) : i6(e9), t7.$$.on_mount = [];
      }), l7.forEach(Y3);
    }
    function _t(t7, e8) {
      const n7 = t7.$$;
      n7.fragment !== null && (i6(n7.on_destroy), n7.fragment && n7.fragment.d(e8), n7.on_destroy = n7.fragment = null, n7.ctx = []);
    }
    function xt(e8, n7, o7, s7, a7, c7, l7 = [-1]) {
      const u6 = C4;
      B4(e8);
      const p6 = e8.$$ = {fragment: null, ctx: null, props: c7, update: t6, not_equal: a7, bound: r6(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u6 ? u6.$$.context : []), callbacks: r6(), dirty: l7, skip_bound: false};
      let d6 = false;
      if (p6.ctx = o7 ? o7(e8, n7.props || {}, (t7, n8, ...o8) => {
        const r7 = o8.length ? o8[0] : n8;
        return p6.ctx && a7(p6.ctx[t7], p6.ctx[t7] = r7) && (!p6.skip_bound && p6.bound[t7] && p6.bound[t7](r7), d6 && function(t8, e9) {
          t8.$$.dirty[0] === -1 && (K3.push(t8), Z3(), t8.$$.dirty.fill(0)), t8.$$.dirty[e9 / 31 | 0] |= 1 << e9 % 31;
        }(e8, t7)), n8;
      }) : [], p6.update(), d6 = true, i6(p6.before_update), p6.fragment = !!s7 && s7(p6.ctx), n7.target) {
        if (n7.hydrate) {
          const t7 = function(t8) {
            return Array.from(t8.childNodes);
          }(n7.target);
          p6.fragment && p6.fragment.l(t7), t7.forEach(x4);
        } else
          p6.fragment && p6.fragment.c();
        n7.intro && pt(e8.$$.fragment), wt(e8, n7.target, n7.anchor), ot();
      }
      B4(u6);
    }
    class vt {
      $destroy() {
        _t(this, 1), this.$destroy = t6;
      }
      $on(t7, e8) {
        const n7 = this.$$.callbacks[t7] || (this.$$.callbacks[t7] = []);
        return n7.push(e8), () => {
          const t8 = n7.indexOf(e8);
          t8 !== -1 && n7.splice(t8, 1);
        };
      }
      $set(t7) {
        var e8;
        this.$$set && (e8 = t7, Object.keys(e8).length !== 0) && (this.$$.skip_bound = true, this.$$set(t7), this.$$.skip_bound = false);
      }
    }
    var Pt = {queryHandler: {parse: (t7) => {
      return e8 = new URLSearchParams(t7), [...e8].reduce((t8, [e9, n7]) => (t8[e9] = n7, t8), {});
      var e8;
    }, stringify: (t7) => "?" + new URLSearchParams(t7).toString()}, urlTransform: {apply: (t7) => t7, remove: (t7) => t7}, useHash: false};
    const kt = RegExp(/\:([^/()]+)/g);
    function Et(t7) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      jt(t7), function() {
        if (navigator.userAgent.includes("jsdom"))
          return false;
        const {hash: t8} = window.location;
        if (t8) {
          if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t8.substring(1))) {
            const e8 = document.querySelector(t8);
            e8 && e8.scrollIntoView();
          }
        }
      }();
    }
    function jt(t7) {
      t7 && t7.scrollTo && t7.dataset.routify !== "scroll-lock" && t7.dataset["routify-scroll"] !== "lock" && (t7.style["scroll-behavior"] = "auto", t7.scrollTo({top: 0, behavior: "auto"}), t7.style["scroll-behavior"] = "", jt(t7.parentElement));
    }
    const It = (t7) => {
      const e8 = [];
      let n7;
      for (; n7 = kt.exec(t7); )
        e8.push(n7[1]);
      return e8;
    };
    function Ot(t7, e8) {
      Ot._console = Ot._console || {log: console.log, warn: console.warn};
      const {_console: n7} = Ot, o7 = t7.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t7.component.shortPath.split("/").pop()).replace(/^./, (t8) => t8.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r7 = [`<${o7}> received an unexpected slot "default".`, `<${o7}> was created with unknown prop 'scoped'`, `<${o7}> was created with unknown prop 'scopedSync'`];
      for (const t8 of ["log", "warn"])
        console[t8] = (...e9) => {
          r7.includes(e9[0]) || n7[t8](...e9);
        }, e8().then(() => {
          console[t8] = n7[t8];
        });
    }
    function St() {
      let t7 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e8, options: n7} = function(t8) {
        const [e9, n8] = t8.split("__[[routify_url_options]]__"), o7 = JSON.parse(decodeURIComponent(n8 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o7.prefetch, {url: e9, options: o7};
      }(t7);
      return {...Rt(e8), options: n7};
    }
    function Rt(t7) {
      Pt.useHash && (t7 = t7.replace(/.*#(.+)/, "$1"));
      const e8 = t7.startsWith("/") ? window.location.origin : void 0, n7 = new URL(t7, e8);
      return {url: n7, fullpath: n7.pathname + n7.search + n7.hash};
    }
    function Lt(t7, e8, n7) {
      const o7 = Pt.useHash ? "#" : "";
      let r7;
      return r7 = function(t8, e9, n8) {
        const o8 = Object.assign({}, n8, e9), r8 = function(t9, e10) {
          if (!Pt.queryHandler)
            return "";
          const n9 = It(t9), o9 = {};
          e10 && Object.entries(e10).forEach(([t10, e11]) => {
            n9.includes(t10) || (o9[t10] = e11);
          });
          return Pt.queryHandler.stringify(o9).replace(/\?$/, "");
        }(t8, e9);
        for (const [e10, n9] of Object.entries(o8))
          t8 = t8.replace(`:${e10}`, n9);
        return `${t8}${r8}`;
      }(t7, e8, n7), r7 = Pt.urlTransform.apply(r7), r7 = o7 + r7, r7;
    }
    function At(t7) {
      let e8;
      const n7 = t7[2].default, o7 = p5(n7, t7, t7[1], null);
      return {c() {
        o7 && o7.c();
      }, m(t8, n8) {
        o7 && o7.m(t8, n8), e8 = true;
      }, p(t8, [e9]) {
        o7 && o7.p && 2 & e9 && f6(o7, n7, t8, t8[1], e9, null, null);
      }, i(t8) {
        e8 || (pt(o7, t8), e8 = true);
      }, o(t8) {
        dt(o7, t8), e8 = false;
      }, d(t8) {
        o7 && o7.d(t8);
      }};
    }
    function Ft(t7, e8, n7) {
      let {$$slots: o7 = {}, $$scope: r7} = e8, {scoped: i7 = {}} = e8;
      return t7.$$set = (t8) => {
        "scoped" in t8 && n7(0, i7 = t8.scoped), "$$scope" in t8 && n7(1, r7 = t8.$$scope);
      }, [i7, r7, o7];
    }
    class Mt extends vt {
      constructor(t7) {
        super(), xt(this, t7, Ft, At, a6, {scoped: 0});
      }
    }
    const Ct = [];
    function Nt(e8, n7 = t6) {
      let o7;
      const r7 = [];
      function i7(t7) {
        if (a6(e8, t7) && (e8 = t7, o7)) {
          const t8 = !Ct.length;
          for (let t9 = 0; t9 < r7.length; t9 += 1) {
            const n8 = r7[t9];
            n8[1](), Ct.push(n8, e8);
          }
          if (t8) {
            for (let t9 = 0; t9 < Ct.length; t9 += 2)
              Ct[t9][0](Ct[t9 + 1]);
            Ct.length = 0;
          }
        }
      }
      return {set: i7, update: function(t7) {
        i7(t7(e8));
      }, subscribe: function(s7, a7 = t6) {
        const c7 = [s7, a7];
        return r7.push(c7), r7.length === 1 && (o7 = n7(i7) || t6), s7(e8), () => {
          const t7 = r7.indexOf(c7);
          t7 !== -1 && r7.splice(t7, 1), r7.length === 0 && (o7(), o7 = null);
        };
      }};
    }
    function Tt(e8, n7, o7) {
      const r7 = !Array.isArray(e8), a7 = r7 ? [e8] : e8, l7 = n7.length < 2;
      return {subscribe: Nt(o7, (e9) => {
        let o8 = false;
        const u6 = [];
        let p6 = 0, d6 = t6;
        const f7 = () => {
          if (p6)
            return;
          d6();
          const o9 = n7(r7 ? u6[0] : u6, e9);
          l7 ? e9(o9) : d6 = s6(o9) ? o9 : t6;
        }, h7 = a7.map((t7, e10) => c6(t7, (t8) => {
          u6[e10] = t8, p6 &= ~(1 << e10), o8 && f7();
        }, () => {
          p6 |= 1 << e10;
        }));
        return o8 = true, f7(), function() {
          i6(h7), d6();
        };
      }).subscribe};
    }
    window.routify = window.routify || {};
    const qt = Nt(null);
    const Bt = Nt([]);
    Bt.subscribe((t7) => window.routify.routes = t7);
    let Ut = Nt({component: {params: {}}});
    const Dt = Nt(null);
    const zt = Nt(true);
    async function Ht({page: t7, metatags: e8, afterPageLoad: n7}) {
      const {path: o7} = t7, {options: r7} = St(), i7 = r7.prefetch;
      for (const e9 of n7._hooks)
        e9 && await e9(t7.api);
      e8.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o7, prefetchId: i7}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
    }
    function Kt(t7, e8 = false) {
      t7 = Pt.urlTransform.remove(t7);
      let {pathname: n7, search: o7} = Rt(t7).url;
      const r7 = l6(Bt), i7 = r7.find((t8) => n7 === t8.meta.name) || r7.find((t8) => n7.match(t8.regex));
      if (!i7)
        throw new Error(`Route could not be found for "${n7}".`);
      const s7 = e8 ? Object.create(i7) : i7, {route: a7, redirectPath: c7, rewritePath: u6} = Wt(s7, r7);
      return u6 && ({pathname: n7, search: o7} = Rt(Lt(u6, a7.params)).url, c7 && (a7.redirectTo = Lt(c7, a7.params || {}))), Pt.queryHandler && (a7.params = Object.assign({}, a7.params, Pt.queryHandler.parse(o7))), function(t8, e9) {
        if (t8.paramKeys) {
          const n8 = function(t9) {
            const e10 = [];
            return t9.forEach((t10) => {
              e10[t10.path.split("/").filter(Boolean).length - 1] = t10;
            }), e10;
          }(t8.layouts), o8 = e9.split("/").filter(Boolean);
          (function(t9) {
            return t9.split("/").filter(Boolean).map((t10) => t10.match(/\:(.+)/)).map((t10) => t10 && t10[1]);
          })(t8.path).forEach((e10, r8) => {
            e10 && (t8.params[e10] = o8[r8], n8[r8] ? n8[r8].param = {[e10]: o8[r8]} : t8.param = {[e10]: o8[r8]});
          });
        }
      }(a7, n7), a7.leftover = t7.replace(new RegExp(a7.regex), ""), a7;
    }
    function Wt(t7, e8, n7, o7) {
      const {redirect: r7, rewrite: i7} = t7.meta;
      if (r7 || i7) {
        n7 = r7 ? r7.path || r7 : n7, o7 = i7 ? i7.path || i7 : n7;
        const s7 = r7 && r7.params, a7 = i7 && i7.params, c7 = e8.find((t8) => t8.path === o7);
        return c7 === t7 && console.error(`${o7} is redirecting to itself`), c7 || console.error(`${t7.path} is redirecting to non-existent path: ${o7}`), (s7 || a7) && (c7.params = Object.assign({}, c7.params, s7, a7)), Wt(c7, e8, n7, o7);
      }
      return {route: t7, redirectPath: n7, rewritePath: o7};
    }
    function Jt(t7, e8, n7) {
      const o7 = t7.slice();
      return o7[1] = e8[n7], o7;
    }
    function Gt(t7, e8) {
      let n7, o7;
      return {key: t7, first: null, c() {
        n7 = P3("iframe"), n7.src !== (o7 = e8[1].url) && O3(n7, "src", o7), O3(n7, "frameborder", "0"), O3(n7, "title", "routify prefetcher"), this.first = n7;
      }, m(t8, e9) {
        _3(t8, n7, e9);
      }, p(t8, r7) {
        e8 = t8, 1 & r7 && n7.src !== (o7 = e8[1].url) && O3(n7, "src", o7);
      }, d(t8) {
        t8 && x4(n7);
      }};
    }
    function Qt(e8) {
      let n7, o7 = [], r7 = new Map(), i7 = e8[0];
      const s7 = (t7) => t7[1].options.prefetch;
      for (let t7 = 0; t7 < i7.length; t7 += 1) {
        let n8 = Jt(e8, i7, t7), a7 = s7(n8);
        r7.set(a7, o7[t7] = Gt(a7, n8));
      }
      return {c() {
        n7 = P3("div");
        for (let t7 = 0; t7 < o7.length; t7 += 1)
          o7[t7].c();
        O3(n7, "id", "__routify_iframes"), R3(n7, "display", "none");
      }, m(t7, e9) {
        _3(t7, n7, e9);
        for (let t8 = 0; t8 < o7.length; t8 += 1)
          o7[t8].m(n7, null);
      }, p(t7, [e9]) {
        1 & e9 && (i7 = t7[0], o7 = yt(o7, e9, s7, 1, t7, i7, r7, n7, mt, Gt, null, Jt));
      }, i: t6, o: t6, d(t7) {
        t7 && x4(n7);
        for (let t8 = 0; t8 < o7.length; t8 += 1)
          o7[t8].d();
      }};
    }
    const Vt = Nt([]);
    const Zt = Tt(Vt, (t7) => t7.slice(0, 2));
    function Xt(t7) {
      const e8 = t7.data ? t7.data.prefetchId : t7;
      if (!e8)
        return null;
      const n7 = l6(Vt).find((t8) => t8 && t8.options.prefetch == e8);
      if (n7) {
        const {gracePeriod: t8} = n7.options, o7 = new Promise((e9) => setTimeout(e9, t8)), r7 = new Promise((e9) => {
          window.requestIdleCallback ? window.requestIdleCallback(e9) : setTimeout(e9, t8 + 1e3);
        });
        Promise.all([o7, r7]).then(() => {
          Vt.update((t9) => t9.filter((t10) => t10.options.prefetch != e8));
        });
      }
    }
    function Yt(t7, e8, n7) {
      let o7;
      return u5(t7, Zt, (t8) => n7(0, o7 = t8)), [o7];
    }
    Zt.subscribe((t7) => t7.forEach(({options: t8}) => {
      setTimeout(() => Xt(t8.prefetch), t8.timeout);
    })), addEventListener("message", Xt, false);
    class te3 extends vt {
      constructor(t7) {
        super(), xt(this, t7, Yt, Qt, a6, {});
      }
    }
    function ee3() {
      return H3("routify") || Ut;
    }
    const ne3 = {subscribe: (t7) => (window.routify.stopAutoReady = true, t7(async function() {
      await X3(), await Ht({page: l6(qt), metatags: ue, afterPageLoad: oe2});
    }), () => {
    })};
    const oe2 = {_hooks: [(t7) => zt.set(false)], subscribe: ie};
    const re3 = {_hooks: [], subscribe: ie};
    function ie(t7) {
      const e8 = this._hooks, n7 = e8.length;
      return t7((t8) => {
        e8[n7] = t8;
      }), () => delete e8[n7];
    }
    const se2 = {subscribe: (t7) => Tt(ee3(), (t8) => t8.route.params).subscribe(t7)};
    const ae = {subscribe: (t7) => Tt([ee3(), qt, Bt], (t8) => function(t9, e8, n7) {
      return function(o7, r7 = {}, i7) {
        const {component: s7} = t9, a7 = Object.assign({}, e8.params, s7.params);
        let c7 = o7 && o7.nodeType && o7;
        c7 && (o7 = o7.getAttribute("href")), o7 = o7 ? p6(o7) : s7.shortPath;
        const l7 = n7.find((t10) => [t10.shortPath || "/", t10.path].includes(o7));
        if (l7 && l7.meta.preload === "proximity" && window.requestIdleCallback) {
          const t10 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l7.api.preload());
          }, t10);
        }
        i7 && i7.strict !== false || (o7 = o7.replace(/index$/, ""));
        let u6 = Lt(o7, r7, a7);
        return c7 ? (c7.href = u6, {update(t10) {
          c7.href = Lt(o7, t10, a7);
        }}) : u6;
        function p6(t10) {
          if (t10.match(/^\.\.?\//)) {
            let [, e9, n8] = t10.match(/^([\.\/]+)(.*)/), o8 = s7.path.replace(/\/$/, "");
            const r8 = e9.match(/\.\.\//g) || [];
            s7.isPage && r8.push(null), r8.forEach(() => o8 = o8.replace(/\/[^\/]+\/?$/, "")), t10 = (t10 = `${o8}/${n8}`.replace(/\/$/, "")) || "/";
          } else if (t10.match(/^\//))
            ;
          else {
            const e9 = n7.find((e10) => e10.meta.name === t10);
            e9 && (t10 = e9.shortPath);
          }
          return t10;
        }
      };
    }(...t8)).subscribe(t7)};
    const ce = {subscribe(t7) {
      const e8 = H3("routifyupdatepage");
      return Tt(ae, (t8) => function(n7, o7, r7, i7) {
        const s7 = t8(n7, o7);
        r7 ? e8(s7, i7) : history.pushState({}, null, s7);
      }).subscribe(t7);
    }};
    const le2 = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t7, e8) => [t7, (le2.getLongest(le2.templates, t7) || ((t8) => t8))(e8)]}, {name: "createMeta", condition: () => true, action(t7, e8) {
      le2.writeMeta(t7, e8);
    }}, {name: "createOG", condition: (t7) => !t7.match(":"), action(t7, e8) {
      le2.writeMeta(`og:${t7}`, e8);
    }}, {name: "createTitle", condition: (t7) => t7 === "title", action(t7, e8) {
      document.title = e8;
    }}], getLongest(t7, e8) {
      const n7 = t7[e8];
      if (n7) {
        const o7 = l6(qt).path;
        return n7[Object.keys(t7[e8]).filter((t8) => o7.includes(t8)).sort((t8, e9) => e9.length - t8.length)[0]];
      }
    }, writeMeta(t7, e8) {
      const n7 = document.getElementsByTagName("head")[0], o7 = t7.match(/(.+)\:/), r7 = o7 && o7[1] || "plain", {propField: i7, valueField: s7} = ue.services[r7] || ue.services.plain, a7 = document.querySelector(`meta[${i7}='${t7}']`);
      a7 && a7.remove();
      const c7 = document.createElement("meta");
      c7.setAttribute(i7, t7), c7.setAttribute(s7, e8), c7.setAttribute("data-origin", "routify"), n7.appendChild(c7);
    }, set(t7, e8) {
      le2.plugins.forEach((n7) => {
        n7.condition(t7, e8) && ([t7, e8] = n7.action(t7, e8) || [t7, e8]);
      });
    }, clear() {
      const t7 = document.querySelector("meta");
      t7 && t7.remove();
    }, template(t7, e8) {
      const n7 = le2.getOrigin();
      le2.templates[t7] = le2.templates[t7] || {}, le2.templates[t7][n7] = e8;
    }, update() {
      Object.keys(le2.props).forEach((t7) => {
        let e8 = le2.getLongest(le2.props, t7);
        le2.plugins.forEach((n7) => {
          n7.condition(t7, e8) && ([t7, e8] = n7.action(t7, e8) || [t7, e8]);
        });
      });
    }, batchedUpdate() {
      le2._pendingUpdate || (le2._pendingUpdate = true, setTimeout(() => {
        le2._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t7 = ee3();
      return t7 && l6(t7).path || "/";
    }, _pendingUpdate: false};
    const ue = new Proxy(le2, {set(t7, e8, n7, o7) {
      const {props: r7, getOrigin: i7} = t7;
      return Reflect.has(t7, e8) ? Reflect.set(t7, e8, n7, o7) : (r7[e8] = r7[e8] || {}, r7[e8][i7()] = n7), window.routify.appLoaded && t7.batchedUpdate(), true;
    }});
    function pe(t7, e8, n7) {
      const o7 = t7.slice();
      return o7[18] = e8[n7].component, o7[19] = e8[n7].componentFile, o7[2] = e8[n7].decorator, o7[1] = e8[n7].nodes, o7;
    }
    function de(t7) {
      let e8, n7, o7 = [], r7 = new Map(), i7 = [t7[4]];
      const s7 = (t8) => function({meta: t9, path: e9, param: n8, params: o8}) {
        return JSON.stringify({path: e9, param: (t9["param-is-page"] || t9["slug-is-page"]) && n8, queryParams: t9["query-params-is-page"] && o8});
      }(t8[18]);
      for (let e9 = 0; e9 < 1; e9 += 1) {
        let n8 = pe(t7, i7, e9), a7 = s7(n8);
        r7.set(a7, o7[e9] = ge(a7, n8));
      }
      return {c() {
        for (let t8 = 0; t8 < 1; t8 += 1)
          o7[t8].c();
        e8 = j5();
      }, m(t8, r8) {
        for (let e9 = 0; e9 < 1; e9 += 1)
          o7[e9].m(t8, r8);
        _3(t8, e8, r8), n7 = true;
      }, p(t8, n8) {
        4194365 & n8 && (i7 = [t8[4]], lt(), o7 = yt(o7, n8, s7, 1, t8, i7, r7, e8.parentNode, gt, ge, e8, pe), ut());
      }, i(t8) {
        if (!n7) {
          for (let t9 = 0; t9 < 1; t9 += 1)
            pt(o7[t9]);
          n7 = true;
        }
      }, o(t8) {
        for (let t9 = 0; t9 < 1; t9 += 1)
          dt(o7[t9]);
        n7 = false;
      }, d(t8) {
        for (let e9 = 0; e9 < 1; e9 += 1)
          o7[e9].d(t8);
        t8 && x4(e8);
      }};
    }
    function fe(t7) {
      let e8, n7;
      return e8 = new be({props: {decorator: t7[2], nodes: [...t7[1]], scoped: {...t7[0], ...t7[22]}}}), {c() {
        bt(e8.$$.fragment);
      }, m(t8, o7) {
        wt(e8, t8, o7), n7 = true;
      }, p(t8, n8) {
        const o7 = {};
        4 & n8 && (o7.decorator = t8[2]), 16 & n8 && (o7.nodes = [...t8[1]]), 4194305 & n8 && (o7.scoped = {...t8[0], ...t8[22]}), e8.$set(o7);
      }, i(t8) {
        n7 || (pt(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        dt(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        _t(e8, t8);
      }};
    }
    function he(t7) {
      let e8, n7, o7 = t7[18] && t7[1].length && fe(t7);
      return {c() {
        o7 && o7.c(), e8 = j5();
      }, m(t8, r7) {
        o7 && o7.m(t8, r7), _3(t8, e8, r7), n7 = true;
      }, p(t8, n8) {
        t8[18] && t8[1].length ? o7 ? (o7.p(t8, n8), 16 & n8 && pt(o7, 1)) : (o7 = fe(t8), o7.c(), pt(o7, 1), o7.m(e8.parentNode, e8)) : o7 && (lt(), dt(o7, 1, 1, () => {
          o7 = null;
        }), ut());
      }, i(t8) {
        n7 || (pt(o7), n7 = true);
      }, o(t8) {
        dt(o7), n7 = false;
      }, d(t8) {
        o7 && o7.d(t8), t8 && x4(e8);
      }};
    }
    function me(t7) {
      let e8, o7, r7;
      const i7 = [{scoped: t7[0]}, {scopedSync: t7[5]}, t7[3].param || {}];
      var s7 = t7[19];
      function a7(t8) {
        let e9 = {$$slots: {default: [he, ({scoped: t9, decorator: e10}) => ({22: t9, 2: e10}), ({scoped: t9, decorator: e10}) => (t9 ? 4194304 : 0) | (e10 ? 4 : 0)]}, $$scope: {ctx: t8}};
        for (let t9 = 0; t9 < i7.length; t9 += 1)
          e9 = n6(e9, i7[t9]);
        return {props: e9};
      }
      return s7 && (e8 = new s7(a7(t7))), {c() {
        e8 && bt(e8.$$.fragment), o7 = E4();
      }, m(t8, n7) {
        e8 && wt(e8, t8, n7), _3(t8, o7, n7), r7 = true;
      }, p(t8, n7) {
        const r8 = 41 & n7 ? function(t9, e9) {
          const n8 = {}, o8 = {}, r9 = {$$scope: 1};
          let i8 = t9.length;
          for (; i8--; ) {
            const s8 = t9[i8], a8 = e9[i8];
            if (a8) {
              for (const t10 in s8)
                t10 in a8 || (o8[t10] = 1);
              for (const t10 in a8)
                r9[t10] || (n8[t10] = a8[t10], r9[t10] = 1);
              t9[i8] = a8;
            } else
              for (const t10 in s8)
                r9[t10] = 1;
          }
          for (const t10 in o8)
            t10 in n8 || (n8[t10] = void 0);
          return n8;
        }(i7, [1 & n7 && {scoped: t8[0]}, 32 & n7 && {scopedSync: t8[5]}, 8 & n7 && (c7 = t8[3].param || {}, typeof c7 == "object" && c7 !== null ? c7 : {})]) : {};
        var c7;
        if (12582933 & n7 && (r8.$$scope = {dirty: n7, ctx: t8}), s7 !== (s7 = t8[19])) {
          if (e8) {
            lt();
            const t9 = e8;
            dt(t9.$$.fragment, 1, 0, () => {
              _t(t9, 1);
            }), ut();
          }
          s7 ? (e8 = new s7(a7(t8)), bt(e8.$$.fragment), pt(e8.$$.fragment, 1), wt(e8, o7.parentNode, o7)) : e8 = null;
        } else
          s7 && e8.$set(r8);
      }, i(t8) {
        r7 || (e8 && pt(e8.$$.fragment, t8), r7 = true);
      }, o(t8) {
        e8 && dt(e8.$$.fragment, t8), r7 = false;
      }, d(t8) {
        e8 && _t(e8, t8), t8 && x4(o7);
      }};
    }
    function ge(t7, e8) {
      let n7, o7, r7, i7;
      var s7 = e8[2];
      function a7(t8) {
        return {props: {scoped: t8[0], $$slots: {default: [me]}, $$scope: {ctx: t8}}};
      }
      return s7 && (o7 = new s7(a7(e8))), {key: t7, first: null, c() {
        n7 = j5(), o7 && bt(o7.$$.fragment), r7 = j5(), this.first = n7;
      }, m(t8, e9) {
        _3(t8, n7, e9), o7 && wt(o7, t8, e9), _3(t8, r7, e9), i7 = true;
      }, p(t8, n8) {
        e8 = t8;
        const i8 = {};
        if (1 & n8 && (i8.scoped = e8[0]), 8388669 & n8 && (i8.$$scope = {dirty: n8, ctx: e8}), s7 !== (s7 = e8[2])) {
          if (o7) {
            lt();
            const t9 = o7;
            dt(t9.$$.fragment, 1, 0, () => {
              _t(t9, 1);
            }), ut();
          }
          s7 ? (o7 = new s7(a7(e8)), bt(o7.$$.fragment), pt(o7.$$.fragment, 1), wt(o7, r7.parentNode, r7)) : o7 = null;
        } else
          s7 && o7.$set(i8);
      }, i(t8) {
        i7 || (o7 && pt(o7.$$.fragment, t8), i7 = true);
      }, o(t8) {
        o7 && dt(o7.$$.fragment, t8), i7 = false;
      }, d(t8) {
        t8 && x4(n7), t8 && x4(r7), o7 && _t(o7, t8);
      }};
    }
    function ye(e8) {
      let n7, o7, r7, i7, a7, c7 = e8[4] && de(e8);
      return {c() {
        c7 && c7.c(), n7 = E4(), o7 = P3("span");
      }, m(l7, u6) {
        var p6;
        c7 && c7.m(l7, u6), _3(l7, n7, u6), _3(l7, o7, u6), r7 = true, i7 || (p6 = e8[8].call(null, o7), a7 = p6 && s6(p6.destroy) ? p6.destroy : t6, i7 = true);
      }, p(t7, [e9]) {
        t7[4] ? c7 ? (c7.p(t7, e9), 16 & e9 && pt(c7, 1)) : (c7 = de(t7), c7.c(), pt(c7, 1), c7.m(n7.parentNode, n7)) : c7 && (lt(), dt(c7, 1, 1, () => {
          c7 = null;
        }), ut());
      }, i(t7) {
        r7 || (pt(c7), r7 = true);
      }, o(t7) {
        dt(c7), r7 = false;
      }, d(t7) {
        c7 && c7.d(t7), t7 && x4(n7), t7 && x4(o7), i7 = false, a7();
      }};
    }
    function $e(t7, e8, n7) {
      let o7, r7, i7, s7;
      u5(t7, qt, (t8) => n7(14, i7 = t8));
      let a7, {nodes: c7 = []} = e8, {scoped: l7 = {}} = e8, {isRoot: p6 = false} = e8, {decorator: d6} = e8, f7 = null, h7 = null, m7 = {};
      const g6 = Nt(null);
      u5(t7, g6, (t8) => n7(4, s7 = t8));
      const y5 = H3("routify");
      u5(t7, y5, (t8) => n7(10, r7 = t8));
      function $5(t8) {
        n7(5, m7 = {...l7}), h7.length === 0 && async function() {
          await X3(), Et(a7);
          const t9 = s7.component.path === i7.path;
          !window.routify.stopAutoReady && t9 && Ht({page: s7.component, metatags: ue, afterPageLoad: oe2});
        }();
        const e9 = {nodes: h7, decorator: d6 || Mt, layout: f7.isLayout ? f7 : o7 && o7.layout, component: f7, route: i7, componentFile: t8, parentNode: a7 || o7 && o7.parentNode};
        g6.set(e9), p6 && Ut.set(e9);
      }
      return z4("routify", g6), t7.$$set = (t8) => {
        "nodes" in t8 && n7(1, c7 = t8.nodes), "scoped" in t8 && n7(0, l7 = t8.scoped), "isRoot" in t8 && n7(9, p6 = t8.isRoot), "decorator" in t8 && n7(2, d6 = t8.decorator);
      }, t7.$$.update = () => {
        1024 & t7.$$.dirty && (o7 = r7), 2 & t7.$$.dirty && n7(3, [f7, ...h7] = c7, f7), 8 & t7.$$.dirty && function(t8) {
          let e9 = t8.component();
          e9 instanceof Promise ? e9.then($5) : $5(e9);
        }(f7), 16 & t7.$$.dirty && s7 && Ot(s7, X3);
      }, [l7, c7, d6, f7, s7, m7, g6, y5, (t8) => a7 = t8.parentNode, p6, r7];
    }
    class be extends vt {
      constructor(t7) {
        super(), xt(this, t7, $e, ye, a6, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function we(t7, e8) {
      let n7 = false;
      function o7(o8, r8) {
        const i7 = Kt(o8 || St().fullpath);
        i7.redirectTo && (history.replaceStateNative({}, null, i7.redirectTo), delete i7.redirectTo);
        const s7 = [...(r8 && Kt(St().fullpath, t7) || i7).layouts, i7];
        n7 && delete n7.last, i7.last = n7, n7 = i7, o8 || Dt.set(i7), qt.set(i7), i7.api.preload().then(() => {
          zt.set(true), e8(s7);
        });
      }
      const r7 = function(t8) {
        ["pushState", "replaceState"].forEach((t9) => {
          history[t9 + "Native"] = history[t9], history[t9] = async function(e10 = {}, n9, o8) {
            if (o8 === location.pathname + location.search + location.hash)
              return false;
            const {id: r8, path: i7, params: s7} = l6(qt);
            e10 = {id: r8, path: i7, params: s7, ...e10};
            const a7 = new Event(t9.toLowerCase());
            Object.assign(a7, {state: e10, title: n9, url: o8});
            return await xe(a7, o8) ? (history[t9 + "Native"].apply(this, [e10, n9, o8]), dispatchEvent(a7)) : void 0;
          };
        });
        let e9 = false;
        const n8 = {click: _e, pushstate: () => t8(), replacestate: () => t8(), popstate: async (n9) => {
          e9 ? e9 = false : await xe(n9, St().fullpath) ? t8() : (e9 = true, n9.preventDefault(), history.go(1));
        }};
        Object.entries(n8).forEach((t9) => addEventListener(...t9));
        return () => {
          Object.entries(n8).forEach((t9) => removeEventListener(...t9));
        };
      }(o7);
      return {updatePage: o7, destroy: r7};
    }
    function _e(t7) {
      const e8 = t7.target.closest("a"), n7 = e8 && e8.href;
      if (t7.ctrlKey || t7.metaKey || t7.altKey || t7.shiftKey || t7.button || t7.defaultPrevented)
        return;
      if (!n7 || e8.target || e8.host !== location.host)
        return;
      const o7 = new URL(n7), r7 = o7.pathname + o7.search + o7.hash;
      t7.preventDefault(), history.pushState({}, "", r7);
    }
    async function xe(t7, e8) {
      const n7 = Kt(e8).api;
      for (const o7 of re3._hooks.filter(Boolean)) {
        if (!await o7(t7, n7, {url: e8}))
          return false;
      }
      return true;
    }
    function ve(t7) {
      let e8, n7;
      return e8 = new be({props: {nodes: t7[0], isRoot: true}}), {c() {
        bt(e8.$$.fragment);
      }, m(t8, o7) {
        wt(e8, t8, o7), n7 = true;
      }, p(t8, n8) {
        const o7 = {};
        1 & n8 && (o7.nodes = t8[0]), e8.$set(o7);
      }, i(t8) {
        n7 || (pt(e8.$$.fragment, t8), n7 = true);
      }, o(t8) {
        dt(e8.$$.fragment, t8), n7 = false;
      }, d(t8) {
        _t(e8, t8);
      }};
    }
    function Pe(t7) {
      let e8, n7, o7, r7 = t7[0] && t7[1] !== null && ve(t7);
      return n7 = new te3({}), {c() {
        r7 && r7.c(), e8 = E4(), bt(n7.$$.fragment);
      }, m(t8, i7) {
        r7 && r7.m(t8, i7), _3(t8, e8, i7), wt(n7, t8, i7), o7 = true;
      }, p(t8, [n8]) {
        t8[0] && t8[1] !== null ? r7 ? (r7.p(t8, n8), 3 & n8 && pt(r7, 1)) : (r7 = ve(t8), r7.c(), pt(r7, 1), r7.m(e8.parentNode, e8)) : r7 && (lt(), dt(r7, 1, 1, () => {
          r7 = null;
        }), ut());
      }, i(t8) {
        o7 || (pt(r7), pt(n7.$$.fragment, t8), o7 = true);
      }, o(t8) {
        dt(r7), dt(n7.$$.fragment, t8), o7 = false;
      }, d(t8) {
        r7 && r7.d(t8), t8 && x4(e8), _t(n7, t8);
      }};
    }
    function ke(t7, e8, n7) {
      let o7;
      u5(t7, qt, (t8) => n7(1, o7 = t8));
      let r7, i7, {routes: s7} = e8, {config: a7 = {}} = e8;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(Pt, a7);
      z4("routifyupdatepage", (...t8) => i7 && i7.updatePage(...t8));
      const c7 = (t8) => n7(0, r7 = t8), l7 = () => {
        i7 && (i7.destroy(), i7 = null);
      };
      let p6 = null;
      var d6;
      return d6 = l7, U3().$$.on_destroy.push(d6), t7.$$set = (t8) => {
        "routes" in t8 && n7(2, s7 = t8.routes), "config" in t8 && n7(3, a7 = t8.config);
      }, t7.$$.update = () => {
        4 & t7.$$.dirty && s7 && (clearTimeout(p6), p6 = setTimeout(() => {
          l7(), i7 = we(s7, c7), Bt.set(s7), i7.updatePage();
        }));
      }, [r7, o7, s7, a7];
    }
    class Ee extends vt {
      constructor(t7) {
        super(), xt(this, t7, ke, Pe, a6, {routes: 2, config: 3});
      }
    }
    function je(t7) {
      const e8 = async function(e9) {
        return await Ie(t7, {file: e9.tree, state: {treePayload: e9}, scope: {}});
      };
      return e8.sync = function(e9) {
        return Oe(t7, {file: e9.tree, state: {treePayload: e9}, scope: {}});
      }, e8;
    }
    async function Ie(t7, e8) {
      const n7 = await t7(e8);
      if (n7 === false)
        return false;
      const o7 = n7 || e8.file;
      if (o7.children) {
        const n8 = await Promise.all(o7.children.map(async (n9) => Ie(t7, {state: e8.state, scope: Se(e8.scope || {}), parent: e8.file, file: await n9})));
        o7.children = n8.filter(Boolean);
      }
      return o7;
    }
    function Oe(t7, e8) {
      const n7 = t7(e8);
      if (n7 === false)
        return false;
      const o7 = n7 || e8.file;
      if (o7.children) {
        const n8 = o7.children.map((n9) => Oe(t7, {state: e8.state, scope: Se(e8.scope || {}), parent: e8.file, file: n9}));
        o7.children = n8.filter(Boolean);
      }
      return o7;
    }
    function Se(t7) {
      return JSON.parse(JSON.stringify(t7));
    }
    const Re = je(({file: t7}) => {
      (t7.isPage || t7.isFallback) && (t7.regex = ((t8, e8) => {
        const n7 = e8 ? "" : "/?$";
        return `^${t8 = (t8 = (t8 = t8.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(kt, "([^/]+)") + n7}`;
      })(t7.path, t7.isFallback));
    });
    const Le = je(({file: t7}) => {
      t7.paramKeys = It(t7.path);
    });
    const Ae = je(({file: t7}) => {
      t7.isFallback || t7.isIndex ? t7.shortPath = t7.path.replace(/\/[^/]+$/, "") : t7.shortPath = t7.path;
    });
    const Fe = je(({file: t7}) => {
      t7.ranking = (({path: t8}) => t8.split("/").filter(Boolean).map((t9) => t9 === "_fallback" ? "A" : t9.startsWith(":") ? "B" : "C").join(""))(t7);
    });
    const Me = je(({file: t7}) => {
      const e8 = t7, n7 = t7.meta && t7.meta.children || [];
      n7.length && (e8.children = e8.children || [], e8.children.push(...n7.map((t8) => ({isMeta: true, ...t8, meta: t8}))));
    });
    const Ce = je((t7) => {
      const {file: e8} = t7, {isFallback: n7, meta: o7} = e8, r7 = e8.path.match("/:"), i7 = e8.path.endsWith("/index"), s7 = o7.index || o7.index === 0, a7 = o7.index === false;
      e8.isIndexable = s7 || !n7 && !r7 && !i7 && !a7, e8.isNonIndexable = !e8.isIndexable;
    });
    const Ne = je(({file: t7, parent: e8}) => {
      Object.defineProperty(t7, "parent", {get: () => e8}), Object.defineProperty(t7, "nextSibling", {get: () => qe(t7, 1)}), Object.defineProperty(t7, "prevSibling", {get: () => qe(t7, -1)}), Object.defineProperty(t7, "lineage", {get: () => Te(e8)});
    });
    function Te(t7, e8 = []) {
      return t7 && (e8.unshift(t7), Te(t7.parent, e8)), e8;
    }
    function qe(t7, e8) {
      if (!t7.root) {
        const n7 = t7.parent.children.filter((t8) => t8.isIndexable), o7 = n7.indexOf(t7);
        return n7[o7 + e8];
      }
    }
    const Be = je(({file: t7, parent: e8}) => {
      t7.isIndex && Object.defineProperty(e8, "index", {get: () => t7});
    });
    const Ue = je(({file: t7, scope: e8}) => {
      function n7(t8) {
        const {parent: e9} = t8, o7 = e9 && e9.component && e9, r7 = o7 && o7.isReset, i7 = e9 && !r7 && n7(e9) || [];
        return o7 && i7.push(o7), i7;
      }
      Object.defineProperty(t7, "layouts", {get: () => n7(t7)});
    });
    const De = je(({file: t7}) => {
      const e8 = t7.root ? function() {
      } : t7.children ? (t7.isPage, function() {
      }) : (t7.isReset || t7.isLayout || t7.isFallback, function() {
      });
      Object.setPrototypeOf(t7, e8.prototype);
    });
    var ze = Object.freeze({__proto__: null, setRegex: Re, setParamKeys: Le, setShortPath: Ae, setRank: Fe, addMetaChildren: Me, setIsIndexable: Ce, assignRelations: Ne, assignIndex: Be, assignLayout: Ue, createFlatList: (t7) => {
      je((t8) => {
        (t8.file.isPage || t8.file.isFallback) && t8.state.treePayload.routes.push(t8.file);
      }).sync(t7), t7.routes.sort((t8, e8) => t8.ranking >= e8.ranking ? -1 : 1);
    }, setPrototype: De});
    const He = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function Ke(t7) {
      return Object.entries(He).forEach(([e8, n7]) => {
        t7[e8] === void 0 && (t7[e8] = n7);
      }), t7.children && (t7.children = t7.children.map(Ke)), t7;
    }
    const We = je(({file: t7}) => {
      t7.api = new Je(t7);
    });
    class Je {
      constructor(t7) {
        this.__file = t7, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t7.isMeta, this.path = t7.path, this.title = function(t8) {
          return t8.meta.title !== void 0 ? t8.meta.title : (t8.shortPath || t8.path).split("/").pop().replace(/-/g, " ");
        }(t7), this.meta = t7.meta;
      }
      get parent() {
        return !this.__file.root && this.__file.parent.api;
      }
      get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t7) => !t7.isNonIndexable).sort((t7, e8) => t7.isMeta && e8.isMeta ? 0 : (t7 = (t7.meta.index || t7.meta.title || t7.path).toString(), e8 = (e8.meta.index || e8.meta.title || e8.path).toString(), t7.localeCompare(e8, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t7}) => t7);
      }
      get next() {
        return Ge(this, 1);
      }
      get prev() {
        return Ge(this, -1);
      }
      async preload() {
        const t7 = [...this.__file.layouts, this.__file].map((t8) => t8.component());
        await Promise.all(t7);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function Ge(t7, e8) {
      if (!t7.__file.root) {
        const n7 = t7.parent.children.indexOf(t7);
        return t7.parent.children[n7 + e8];
      }
    }
    const Qe = {...ze, restoreDefaults: ({tree: t7}) => Ke(t7), assignAPI: We};
    const Ve = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_8fd1c56e())).then((t7) => t7.default)}, {isDir: true, ext: "", children: [{isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/@:userId/:brandId", id: "___userId__brandId", component: () => Promise.resolve().then(() => __toModule(require_brandId_56abeeb7())).then((t7) => t7.default)}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/@:userId/index", id: "___userId_index", component: () => Promise.resolve().then(() => __toModule(require_index_3f9a02b5())).then((t7) => t7.default)}], meta: {recursive: true, preload: "proximity", prerender: true}, path: "/@:userId"}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_40d17569())).then((t7) => t7.default)}, {isDir: true, ext: "", children: [{isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/privacy/index", id: "_privacy_index", component: () => Promise.resolve().then(() => __toModule(require_index_350da457())).then((t7) => t7.default)}], meta: {recursive: true, preload: "proximity", prerender: true}, path: "/privacy"}, {isDir: true, ext: "", children: [{isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/terms/index", id: "_terms_index", component: () => Promise.resolve().then(() => __toModule(require_index_30850fb8())).then((t7) => t7.default)}], meta: {recursive: true, preload: "proximity", prerender: true}, path: "/terms"}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_8b2a9587())).then((t7) => t7.default)};
    const {tree: Ze, routes: Xe} = function(t7) {
      const e8 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n7 = {tree: t7, routes: []};
      for (let t8 of e8) {
        (Qe[t8].sync || Qe[t8])(n7);
      }
      return n7;
    }(Ve);
    function Ye(e8) {
      let n7, o7;
      return n7 = new Ee({props: {routes: Xe}}), {c() {
        bt(n7.$$.fragment);
      }, m(t7, e9) {
        wt(n7, t7, e9), o7 = true;
      }, p: t6, i(t7) {
        o7 || (pt(n7.$$.fragment, t7), o7 = true);
      }, o(t7) {
        dt(n7.$$.fragment, t7), o7 = false;
      }, d(t7) {
        _t(n7, t7);
      }};
    }
    !function(t7, e8 = {target: document.body}, n7 = "hmr", o7 = "app-loaded") {
      const r7 = document.getElementById(n7), i7 = document.createElement("div");
      function s7() {
        r7 && r7.remove(), i7.style.visibility = null, i7.setAttribute("id", n7);
      }
      i7.style.visibility = "hidden", e8.target.appendChild(i7), r7 ? addEventListener(o7, s7) : s7(), new t7({...e8, target: i7});
    }(class extends vt {
      constructor(t7) {
        super(), xt(this, t7, null, Ye, a6, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // ../../../../지울꺼/allius-routify/dist/build/Footer-05343282.js
  const main = __toModule(require_main());
  function m(s6) {
    let e7, a6, h6, w5, m6, p5, f6, u5, b4, d5, y4, k5, x4;
    return {c() {
      e7 = main.e("div"), a6 = main.e("p"), a6.textContent = "\uC8FC\uC2DD\uD68C\uC0AC \uB9AC\uC5BC\uBE44\uC98C", h6 = main.a(), w5 = main.e("p"), w5.innerHTML = '\uC0AC\uC5C5\uC790 \uB4F1\uB85D \uBC88\uD638 : 152-81-00668<br class="svelte-1ihwnav"/>\n        \uC8FC\uC18C : \uC11C\uC6B8 \uAC15\uB0A8\uAD6C \uD559\uB3D9\uB85C 343, B2 \uCCAD\uB144\uCC3D\uC5C5\uC13C\uD130 2\uD638<br class="svelte-1ihwnav"/>\n        \uBB38\uC758 : allius@realwesen.com<br class="svelte-1ihwnav"/><br class="svelte-1ihwnav"/> \n        <strong class="svelte-1ihwnav">\xA9 realwesen, Inc. All Rights Reserved.</strong>', m6 = main.a(), p5 = main.e("div"), f6 = main.e("a"), u5 = main.j("Terms"), d5 = main.a(), y4 = main.e("a"), k5 = main.j("Privacy"), main.b(a6, "class", "company-name svelte-1ihwnav"), main.b(w5, "class", "company-info svelte-1ihwnav"), main.b(f6, "href", b4 = s6[0]("/terms")), main.b(f6, "class", "link-to svelte-1ihwnav"), main.b(y4, "href", x4 = s6[0]("/privacy")), main.b(y4, "class", "link-to svelte-1ihwnav"), main.b(p5, "class", "link-box svelte-1ihwnav"), main.b(e7, "class", "footer svelte-1ihwnav");
    }, m(s7, n6) {
      main.d(s7, e7, n6), main.k(e7, a6), main.k(e7, h6), main.k(e7, w5), main.k(e7, m6), main.k(e7, p5), main.k(p5, f6), main.k(f6, u5), main.k(p5, d5), main.k(p5, y4), main.k(y4, k5);
    }, p(s7, [e8]) {
      1 & e8 && b4 !== (b4 = s7[0]("/terms")) && main.b(f6, "href", b4), 1 & e8 && x4 !== (x4 = s7[0]("/privacy")) && main.b(y4, "href", x4);
    }, i: main.n, o: main.n, d(s7) {
      s7 && main.h(e7);
    }};
  }
  function p(s6, e7, a6) {
    let n6;
    return main.l(s6, main.u, (s7) => a6(0, n6 = s7)), [n6];
  }
  class f extends main.S {
    constructor(s6) {
      super(), main.i(this, s6, p, m, main.s, {});
    }
  }

  // ../../../../지울꺼/allius-routify/dist/build/Header-6dc00e4e.js
  const main2 = __toModule(require_main());
  function k(e7) {
    let s6;
    return {c() {
      s6 = main2.e("li"), s6.innerHTML = '<a href="https://allius.io/login" target="_self" class="svelte-8kjuj">Login</a>', main2.b(s6, "class", "svelte-8kjuj");
    }, m(e8, l6) {
      main2.d(e8, s6, l6);
    }, d(e8) {
      e8 && main2.h(s6);
    }};
  }
  function f2(e7) {
    let s6;
    return {c() {
      s6 = main2.e("li"), s6.innerHTML = '<a href="https://allius.io/desk" target="_self" class="svelte-8kjuj">Studio</a>', main2.b(s6, "class", "svelte-8kjuj");
    }, m(e8, l6) {
      main2.d(e8, s6, l6);
    }, d(e8) {
      e8 && main2.h(s6);
    }};
  }
  function m2(e7) {
    let s6, l6, j5, d5, h6, m6, v6;
    function g5(e8, s7) {
      return e8[0] ? f2 : k;
    }
    let p5 = g5(e7), C4 = p5(e7);
    return {c() {
      s6 = main2.e("div"), l6 = main2.e("div"), j5 = main2.e("a"), d5 = main2.j("allius"), m6 = main2.a(), v6 = main2.e("ul"), C4.c(), main2.b(j5, "href", h6 = e7[1]("/")), main2.b(j5, "class", "logo svelte-8kjuj"), main2.b(v6, "class", "svelte-8kjuj"), main2.b(l6, "class", "header-wrapper svelte-8kjuj"), main2.b(s6, "class", "header svelte-8kjuj");
    }, m(e8, t6) {
      main2.d(e8, s6, t6), main2.k(s6, l6), main2.k(l6, j5), main2.k(j5, d5), main2.k(l6, m6), main2.k(l6, v6), C4.m(v6, null);
    }, p(e8, [s7]) {
      2 & s7 && h6 !== (h6 = e8[1]("/")) && main2.b(j5, "href", h6), p5 !== (p5 = g5(e8)) && (C4.d(1), C4 = p5(e8), C4 && (C4.c(), C4.m(v6, null)));
    }, i: main2.n, o: main2.n, d(e8) {
      e8 && main2.h(s6), C4.d();
    }};
  }
  function v2(e7, s6, l6) {
    let t6;
    main2.l(e7, main2.u, (e8) => l6(1, t6 = e8));
    let {loginCheck: a6} = s6;
    return main2.o(() => {
      l6(0, a6 = Boolean(((e8) => {
        let s7 = document.cookie.match("(^|;) ?" + e8 + "=([^;]*)(;|$)");
        return s7 ? s7[2] : null;
      })("allius_id")));
    }), e7.$$set = (e8) => {
      "loginCheck" in e8 && l6(0, a6 = e8.loginCheck);
    }, [a6, t6];
  }
  class g extends main2.S {
    constructor(e7) {
      super(), main2.i(this, e7, v2, m2, main2.s, {loginCheck: 0});
    }
  }

  // ../../../../지울꺼/allius-routify/dist/build/LoadingSpinner-77e65cef.js
  const main3 = __toModule(require_main());
  var d2 = function(e7, t6) {
    return function() {
      for (var n6 = new Array(arguments.length), r6 = 0; r6 < n6.length; r6++)
        n6[r6] = arguments[r6];
      return e7.apply(t6, n6);
    };
  };
  var l3 = Object.prototype.toString;
  function h3(e7) {
    return l3.call(e7) === "[object Array]";
  }
  function m3(e7) {
    return e7 === void 0;
  }
  function g2(e7) {
    return e7 !== null && typeof e7 == "object";
  }
  function y(e7) {
    if (l3.call(e7) !== "[object Object]")
      return false;
    var t6 = Object.getPrototypeOf(e7);
    return t6 === null || t6 === Object.prototype;
  }
  function v3(e7) {
    return l3.call(e7) === "[object Function]";
  }
  function w2(e7, t6) {
    if (e7 != null)
      if (typeof e7 != "object" && (e7 = [e7]), h3(e7))
        for (var n6 = 0, r6 = e7.length; n6 < r6; n6++)
          t6.call(null, e7[n6], n6, e7);
      else
        for (var o6 in e7)
          Object.prototype.hasOwnProperty.call(e7, o6) && t6.call(null, e7[o6], o6, e7);
  }
  var b = {isArray: h3, isArrayBuffer: function(e7) {
    return l3.call(e7) === "[object ArrayBuffer]";
  }, isBuffer: function(e7) {
    return e7 !== null && !m3(e7) && e7.constructor !== null && !m3(e7.constructor) && typeof e7.constructor.isBuffer == "function" && e7.constructor.isBuffer(e7);
  }, isFormData: function(e7) {
    return typeof FormData != "undefined" && e7 instanceof FormData;
  }, isArrayBufferView: function(e7) {
    return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? ArrayBuffer.isView(e7) : e7 && e7.buffer && e7.buffer instanceof ArrayBuffer;
  }, isString: function(e7) {
    return typeof e7 == "string";
  }, isNumber: function(e7) {
    return typeof e7 == "number";
  }, isObject: g2, isPlainObject: y, isUndefined: m3, isDate: function(e7) {
    return l3.call(e7) === "[object Date]";
  }, isFile: function(e7) {
    return l3.call(e7) === "[object File]";
  }, isBlob: function(e7) {
    return l3.call(e7) === "[object Blob]";
  }, isFunction: v3, isStream: function(e7) {
    return g2(e7) && v3(e7.pipe);
  }, isURLSearchParams: function(e7) {
    return typeof URLSearchParams != "undefined" && e7 instanceof URLSearchParams;
  }, isStandardBrowserEnv: function() {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && (typeof window != "undefined" && typeof document != "undefined");
  }, forEach: w2, merge: function e4() {
    var t6 = {};
    function n6(n7, r7) {
      y(t6[r7]) && y(n7) ? t6[r7] = e4(t6[r7], n7) : y(n7) ? t6[r7] = e4({}, n7) : h3(n7) ? t6[r7] = n7.slice() : t6[r7] = n7;
    }
    for (var r6 = 0, o6 = arguments.length; r6 < o6; r6++)
      w2(arguments[r6], n6);
    return t6;
  }, extend: function(e7, t6, n6) {
    return w2(t6, function(t7, r6) {
      e7[r6] = n6 && typeof t7 == "function" ? d2(t7, n6) : t7;
    }), e7;
  }, trim: function(e7) {
    return e7.replace(/^\s*/, "").replace(/\s*$/, "");
  }, stripBOM: function(e7) {
    return e7.charCodeAt(0) === 65279 && (e7 = e7.slice(1)), e7;
  }};
  function x(e7) {
    return encodeURIComponent(e7).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var E = function(e7, t6, n6) {
    if (!t6)
      return e7;
    var r6;
    if (n6)
      r6 = n6(t6);
    else if (b.isURLSearchParams(t6))
      r6 = t6.toString();
    else {
      var o6 = [];
      b.forEach(t6, function(e8, t7) {
        e8 != null && (b.isArray(e8) ? t7 += "[]" : e8 = [e8], b.forEach(e8, function(e9) {
          b.isDate(e9) ? e9 = e9.toISOString() : b.isObject(e9) && (e9 = JSON.stringify(e9)), o6.push(x(t7) + "=" + x(e9));
        }));
      }), r6 = o6.join("&");
    }
    if (r6) {
      var a6 = e7.indexOf("#");
      a6 !== -1 && (e7 = e7.slice(0, a6)), e7 += (e7.indexOf("?") === -1 ? "?" : "&") + r6;
    }
    return e7;
  };
  function S() {
    this.handlers = [];
  }
  S.prototype.use = function(e7, t6) {
    return this.handlers.push({fulfilled: e7, rejected: t6}), this.handlers.length - 1;
  }, S.prototype.eject = function(e7) {
    this.handlers[e7] && (this.handlers[e7] = null);
  }, S.prototype.forEach = function(e7) {
    b.forEach(this.handlers, function(t6) {
      t6 !== null && e7(t6);
    });
  };
  var C = S;
  var j2 = function(e7, t6, n6) {
    return b.forEach(n6, function(n7) {
      e7 = n7(e7, t6);
    }), e7;
  };
  var R = function(e7) {
    return !(!e7 || !e7.__CANCEL__);
  };
  var A = function(e7, t6) {
    b.forEach(e7, function(n6, r6) {
      r6 !== t6 && r6.toUpperCase() === t6.toUpperCase() && (e7[t6] = n6, delete e7[r6]);
    });
  };
  var N = function(e7, t6, n6, r6, o6) {
    return function(e8, t7, n7, r7, o7) {
      return e8.config = t7, n7 && (e8.code = n7), e8.request = r7, e8.response = o7, e8.isAxiosError = true, e8.toJSON = function() {
        return {message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code};
      }, e8;
    }(new Error(e7), t6, n6, r6, o6);
  };
  var O = b.isStandardBrowserEnv() ? {write: function(e7, t6, n6, r6, o6, a6) {
    var s6 = [];
    s6.push(e7 + "=" + encodeURIComponent(t6)), b.isNumber(n6) && s6.push("expires=" + new Date(n6).toGMTString()), b.isString(r6) && s6.push("path=" + r6), b.isString(o6) && s6.push("domain=" + o6), a6 === true && s6.push("secure"), document.cookie = s6.join("; ");
  }, read: function(e7) {
    var t6 = document.cookie.match(new RegExp("(^|;\\s*)(" + e7 + ")=([^;]*)"));
    return t6 ? decodeURIComponent(t6[3]) : null;
  }, remove: function(e7) {
    this.write(e7, "", Date.now() - 864e5);
  }} : {write: function() {
  }, read: function() {
    return null;
  }, remove: function() {
  }};
  var B = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  var T = b.isStandardBrowserEnv() ? function() {
    var e7, t6 = /(msie|trident)/i.test(navigator.userAgent), n6 = document.createElement("a");
    function r6(e8) {
      var r7 = e8;
      return t6 && (n6.setAttribute("href", r7), r7 = n6.href), n6.setAttribute("href", r7), {href: n6.href, protocol: n6.protocol ? n6.protocol.replace(/:$/, "") : "", host: n6.host, search: n6.search ? n6.search.replace(/^\?/, "") : "", hash: n6.hash ? n6.hash.replace(/^#/, "") : "", hostname: n6.hostname, port: n6.port, pathname: n6.pathname.charAt(0) === "/" ? n6.pathname : "/" + n6.pathname};
    }
    return e7 = r6(window.location.href), function(t7) {
      var n7 = b.isString(t7) ? r6(t7) : t7;
      return n7.protocol === e7.protocol && n7.host === e7.host;
    };
  }() : function() {
    return true;
  };
  var U = function(e7) {
    return new Promise(function(t6, n6) {
      var r6 = e7.data, o6 = e7.headers;
      b.isFormData(r6) && delete o6["Content-Type"];
      var a6 = new XMLHttpRequest();
      if (e7.auth) {
        var s6 = e7.auth.username || "", i6 = e7.auth.password ? unescape(encodeURIComponent(e7.auth.password)) : "";
        o6.Authorization = "Basic " + btoa(s6 + ":" + i6);
      }
      var u5, c6, f6 = (u5 = e7.baseURL, c6 = e7.url, u5 && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c6) ? function(e8, t7) {
        return t7 ? e8.replace(/\/+$/, "") + "/" + t7.replace(/^\/+/, "") : e8;
      }(u5, c6) : c6);
      if (a6.open(e7.method.toUpperCase(), E(f6, e7.params, e7.paramsSerializer), true), a6.timeout = e7.timeout, a6.onreadystatechange = function() {
        if (a6 && a6.readyState === 4 && (a6.status !== 0 || a6.responseURL && a6.responseURL.indexOf("file:") === 0)) {
          var r7, o7, s7, i7, u6, c7 = "getAllResponseHeaders" in a6 ? (r7 = a6.getAllResponseHeaders(), u6 = {}, r7 ? (b.forEach(r7.split("\n"), function(e8) {
            if (i7 = e8.indexOf(":"), o7 = b.trim(e8.substr(0, i7)).toLowerCase(), s7 = b.trim(e8.substr(i7 + 1)), o7) {
              if (u6[o7] && B.indexOf(o7) >= 0)
                return;
              u6[o7] = o7 === "set-cookie" ? (u6[o7] ? u6[o7] : []).concat([s7]) : u6[o7] ? u6[o7] + ", " + s7 : s7;
            }
          }), u6) : u6) : null, f7 = {data: e7.responseType && e7.responseType !== "text" ? a6.response : a6.responseText, status: a6.status, statusText: a6.statusText, headers: c7, config: e7, request: a6};
          !function(e8, t7, n7) {
            var r8 = n7.config.validateStatus;
            n7.status && r8 && !r8(n7.status) ? t7(N("Request failed with status code " + n7.status, n7.config, null, n7.request, n7)) : e8(n7);
          }(t6, n6, f7), a6 = null;
        }
      }, a6.onabort = function() {
        a6 && (n6(N("Request aborted", e7, "ECONNABORTED", a6)), a6 = null);
      }, a6.onerror = function() {
        n6(N("Network Error", e7, null, a6)), a6 = null;
      }, a6.ontimeout = function() {
        var t7 = "timeout of " + e7.timeout + "ms exceeded";
        e7.timeoutErrorMessage && (t7 = e7.timeoutErrorMessage), n6(N(t7, e7, "ECONNABORTED", a6)), a6 = null;
      }, b.isStandardBrowserEnv()) {
        var p5 = (e7.withCredentials || T(f6)) && e7.xsrfCookieName ? O.read(e7.xsrfCookieName) : void 0;
        p5 && (o6[e7.xsrfHeaderName] = p5);
      }
      if ("setRequestHeader" in a6 && b.forEach(o6, function(e8, t7) {
        r6 === void 0 && t7.toLowerCase() === "content-type" ? delete o6[t7] : a6.setRequestHeader(t7, e8);
      }), b.isUndefined(e7.withCredentials) || (a6.withCredentials = !!e7.withCredentials), e7.responseType)
        try {
          a6.responseType = e7.responseType;
        } catch (t7) {
          if (e7.responseType !== "json")
            throw t7;
        }
      typeof e7.onDownloadProgress == "function" && a6.addEventListener("progress", e7.onDownloadProgress), typeof e7.onUploadProgress == "function" && a6.upload && a6.upload.addEventListener("progress", e7.onUploadProgress), e7.cancelToken && e7.cancelToken.promise.then(function(e8) {
        a6 && (a6.abort(), n6(e8), a6 = null);
      }), r6 || (r6 = null), a6.send(r6);
    });
  };
  var L = {"Content-Type": "application/x-www-form-urlencoded"};
  function P(e7, t6) {
    !b.isUndefined(e7) && b.isUndefined(e7["Content-Type"]) && (e7["Content-Type"] = t6);
  }
  var $;
  var k2 = {adapter: ((typeof XMLHttpRequest != "undefined" || typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") && ($ = U), $), transformRequest: [function(e7, t6) {
    return A(t6, "Accept"), A(t6, "Content-Type"), b.isFormData(e7) || b.isArrayBuffer(e7) || b.isBuffer(e7) || b.isStream(e7) || b.isFile(e7) || b.isBlob(e7) ? e7 : b.isArrayBufferView(e7) ? e7.buffer : b.isURLSearchParams(e7) ? (P(t6, "application/x-www-form-urlencoded;charset=utf-8"), e7.toString()) : b.isObject(e7) ? (P(t6, "application/json;charset=utf-8"), JSON.stringify(e7)) : e7;
  }], transformResponse: [function(e7) {
    if (typeof e7 == "string")
      try {
        e7 = JSON.parse(e7);
      } catch (e8) {
      }
    return e7;
  }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, validateStatus: function(e7) {
    return e7 >= 200 && e7 < 300;
  }};
  k2.headers = {common: {Accept: "application/json, text/plain, */*"}}, b.forEach(["delete", "get", "head"], function(e7) {
    k2.headers[e7] = {};
  }), b.forEach(["post", "put", "patch"], function(e7) {
    k2.headers[e7] = b.merge(L);
  });
  var q = k2;
  function F(e7) {
    e7.cancelToken && e7.cancelToken.throwIfRequested();
  }
  var D = function(e7) {
    return F(e7), e7.headers = e7.headers || {}, e7.data = j2(e7.data, e7.headers, e7.transformRequest), e7.headers = b.merge(e7.headers.common || {}, e7.headers[e7.method] || {}, e7.headers), b.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t6) {
      delete e7.headers[t6];
    }), (e7.adapter || q.adapter)(e7).then(function(t6) {
      return F(e7), t6.data = j2(t6.data, t6.headers, e7.transformResponse), t6;
    }, function(t6) {
      return R(t6) || (F(e7), t6 && t6.response && (t6.response.data = j2(t6.response.data, t6.response.headers, e7.transformResponse))), Promise.reject(t6);
    });
  };
  var z = function(e7, t6) {
    t6 = t6 || {};
    var n6 = {}, r6 = ["url", "method", "data"], o6 = ["headers", "auth", "proxy", "params"], a6 = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"], s6 = ["validateStatus"];
    function i6(e8, t7) {
      return b.isPlainObject(e8) && b.isPlainObject(t7) ? b.merge(e8, t7) : b.isPlainObject(t7) ? b.merge({}, t7) : b.isArray(t7) ? t7.slice() : t7;
    }
    function u5(r7) {
      b.isUndefined(t6[r7]) ? b.isUndefined(e7[r7]) || (n6[r7] = i6(void 0, e7[r7])) : n6[r7] = i6(e7[r7], t6[r7]);
    }
    b.forEach(r6, function(e8) {
      b.isUndefined(t6[e8]) || (n6[e8] = i6(void 0, t6[e8]));
    }), b.forEach(o6, u5), b.forEach(a6, function(r7) {
      b.isUndefined(t6[r7]) ? b.isUndefined(e7[r7]) || (n6[r7] = i6(void 0, e7[r7])) : n6[r7] = i6(void 0, t6[r7]);
    }), b.forEach(s6, function(r7) {
      r7 in t6 ? n6[r7] = i6(e7[r7], t6[r7]) : r7 in e7 && (n6[r7] = i6(void 0, e7[r7]));
    });
    var c6 = r6.concat(o6).concat(a6).concat(s6), f6 = Object.keys(e7).concat(Object.keys(t6)).filter(function(e8) {
      return c6.indexOf(e8) === -1;
    });
    return b.forEach(f6, u5), n6;
  };
  function H(e7) {
    this.defaults = e7, this.interceptors = {request: new C(), response: new C()};
  }
  H.prototype.request = function(e7) {
    typeof e7 == "string" ? (e7 = arguments[1] || {}).url = arguments[0] : e7 = e7 || {}, (e7 = z(this.defaults, e7)).method ? e7.method = e7.method.toLowerCase() : this.defaults.method ? e7.method = this.defaults.method.toLowerCase() : e7.method = "get";
    var t6 = [D, void 0], n6 = Promise.resolve(e7);
    for (this.interceptors.request.forEach(function(e8) {
      t6.unshift(e8.fulfilled, e8.rejected);
    }), this.interceptors.response.forEach(function(e8) {
      t6.push(e8.fulfilled, e8.rejected);
    }); t6.length; )
      n6 = n6.then(t6.shift(), t6.shift());
    return n6;
  }, H.prototype.getUri = function(e7) {
    return e7 = z(this.defaults, e7), E(e7.url, e7.params, e7.paramsSerializer).replace(/^\?/, "");
  }, b.forEach(["delete", "get", "head", "options"], function(e7) {
    H.prototype[e7] = function(t6, n6) {
      return this.request(z(n6 || {}, {method: e7, url: t6, data: (n6 || {}).data}));
    };
  }), b.forEach(["post", "put", "patch"], function(e7) {
    H.prototype[e7] = function(t6, n6, r6) {
      return this.request(z(r6 || {}, {method: e7, url: t6, data: n6}));
    };
  });
  var M = H;
  function _(e7) {
    this.message = e7;
  }
  _.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, _.prototype.__CANCEL__ = true;
  var I = _;
  function X(e7) {
    if (typeof e7 != "function")
      throw new TypeError("executor must be a function.");
    var t6;
    this.promise = new Promise(function(e8) {
      t6 = e8;
    });
    var n6 = this;
    e7(function(e8) {
      n6.reason || (n6.reason = new I(e8), t6(n6.reason));
    });
  }
  X.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, X.source = function() {
    var e7;
    return {token: new X(function(t6) {
      e7 = t6;
    }), cancel: e7};
  };
  var J = X;
  function V(e7) {
    var t6 = new M(e7), n6 = d2(M.prototype.request, t6);
    return b.extend(n6, M.prototype, t6), b.extend(n6, t6), n6;
  }
  var K = V(q);
  K.Axios = M, K.create = function(e7) {
    return V(z(K.defaults, e7));
  }, K.Cancel = I, K.CancelToken = J, K.isCancel = R, K.all = function(e7) {
    return Promise.all(e7);
  }, K.spread = function(e7) {
    return function(t6) {
      return e7.apply(null, t6);
    };
  }, K.isAxiosError = function(e7) {
    return typeof e7 == "object" && e7.isAxiosError === true;
  };
  var W = K;
  var G = K;
  W.default = G;
  var Q = W;
  function Y(e7) {
    let t6, n6, p5;
    const d5 = e7[2].default, l6 = main3.D(d5, e7, e7[1], null);
    return {c() {
      t6 = main3.e("div"), l6 && l6.c(), main3.b(t6, "class", n6 = "section-wrapper " + e7[0] + " svelte-1as7nph");
    }, m(e8, n7) {
      main3.d(e8, t6, n7), l6 && l6.m(t6, null), p5 = true;
    }, p(e8, [r6]) {
      l6 && l6.p && 2 & r6 && main3.E(l6, d5, e8, e8[1], r6, null, null), (!p5 || 1 & r6 && n6 !== (n6 = "section-wrapper " + e8[0] + " svelte-1as7nph")) && main3.b(t6, "class", n6);
    }, i(e8) {
      p5 || (main3.t(l6, e8), p5 = true);
    }, o(e8) {
      main3.f(l6, e8), p5 = false;
    }, d(e8) {
      e8 && main3.h(t6), l6 && l6.d(e8);
    }};
  }
  function Z(e7, t6, n6) {
    let {$$slots: r6 = {}, $$scope: o6} = t6, {className: a6 = ""} = t6;
    return e7.$$set = (e8) => {
      "className" in e8 && n6(0, a6 = e8.className), "$$scope" in e8 && n6(1, o6 = e8.$$scope);
    }, [a6, o6, r6];
  }
  class ee extends main3.S {
    constructor(e7) {
      super(), main3.i(this, e7, Z, Y, main3.s, {className: 0});
    }
  }
  function te(e7) {
    const t6 = e7 - 1;
    return t6 * t6 * t6 + 1;
  }
  function ne(e7, {delay: t6 = 0, duration: n6 = 400, easing: r6 = te} = {}) {
    const o6 = getComputedStyle(e7), a6 = +o6.opacity, s6 = parseFloat(o6.height), i6 = parseFloat(o6.paddingTop), u5 = parseFloat(o6.paddingBottom), c6 = parseFloat(o6.marginTop), f6 = parseFloat(o6.marginBottom), p5 = parseFloat(o6.borderTopWidth), d5 = parseFloat(o6.borderBottomWidth);
    return {delay: t6, duration: n6, easing: r6, css: (e8) => `overflow: hidden;opacity: ${Math.min(20 * e8, 1) * a6};height: ${e8 * s6}px;padding-top: ${e8 * i6}px;padding-bottom: ${e8 * u5}px;margin-top: ${e8 * c6}px;margin-bottom: ${e8 * f6}px;border-top-width: ${e8 * p5}px;border-bottom-width: ${e8 * d5}px;`};
  }
  function re(e7) {
    let t6, n6;
    return {c() {
      t6 = main3.e("img"), main3.b(t6, "class", "allius-loading-gif svelte-jyhw7z"), t6.src !== (n6 = "/images/loading.gif") && main3.b(t6, "src", "/images/loading.gif"), main3.b(t6, "alt", "loading content");
    }, m(e8, n7) {
      main3.d(e8, t6, n7);
    }, p: main3.n, i: main3.n, o: main3.n, d(e8) {
      e8 && main3.h(t6);
    }};
  }
  class oe extends main3.S {
    constructor(e7) {
      super(), main3.i(this, e7, null, re, main3.s, {});
    }
  }

  // ../../../../지울꺼/allius-routify/dist/build/TextBox-d8fc7745.js
  const main4 = __toModule(require_main());
  function $2(t6, n6, e7) {
    const l6 = t6.slice();
    return l6[6] = n6[e7], l6;
  }
  function x2(t6, n6, e7) {
    const l6 = t6.slice();
    return l6[6] = n6[e7], l6;
  }
  function y2(t6, n6, e7) {
    const l6 = t6.slice();
    return l6[6] = n6[e7], l6;
  }
  function T2(t6, n6, e7) {
    const l6 = t6.slice();
    return l6[6] = n6[e7], l6;
  }
  function j3(t6, n6, e7) {
    const l6 = t6.slice();
    return l6[6] = n6[e7], l6;
  }
  function b2(t6) {
    let n6, e7, s6;
    const r6 = t6[5].default, p5 = main4.D(r6, t6, t6[4], null);
    let i6 = t6[2], h6 = [];
    for (let n7 = 0; n7 < i6.length; n7 += 1)
      h6[n7] = E2($2(t6, i6, n7));
    return {c() {
      p5 && p5.c(), n6 = main4.a();
      for (let t7 = 0; t7 < h6.length; t7 += 1)
        h6[t7].c();
      e7 = main4.p();
    }, m(t7, l6) {
      p5 && p5.m(t7, l6), main4.d(t7, n6, l6);
      for (let n7 = 0; n7 < h6.length; n7 += 1)
        h6[n7].m(t7, l6);
      main4.d(t7, e7, l6), s6 = true;
    }, p(t7, n7) {
      if (p5 && p5.p && 16 & n7 && main4.E(p5, r6, t7, t7[4], n7, null, null), 6 & n7) {
        let l6;
        for (i6 = t7[2], l6 = 0; l6 < i6.length; l6 += 1) {
          const c6 = $2(t7, i6, l6);
          h6[l6] ? h6[l6].p(c6, n7) : (h6[l6] = E2(c6), h6[l6].c(), h6[l6].m(e7.parentNode, e7));
        }
        for (; l6 < h6.length; l6 += 1)
          h6[l6].d(1);
        h6.length = i6.length;
      }
    }, i(t7) {
      s6 || (main4.t(p5, t7), s6 = true);
    }, o(t7) {
      main4.f(p5, t7), s6 = false;
    }, d(t7) {
      p5 && p5.d(t7), t7 && main4.h(n6), main4.C(h6, t7), t7 && main4.h(e7);
    }};
  }
  function k3(t6) {
    let n6, e7, s6;
    const r6 = t6[5].default, p5 = main4.D(r6, t6, t6[4], null);
    let i6 = t6[2], h6 = [];
    for (let n7 = 0; n7 < i6.length; n7 += 1)
      h6[n7] = S2(x2(t6, i6, n7));
    return {c() {
      p5 && p5.c(), n6 = main4.a();
      for (let t7 = 0; t7 < h6.length; t7 += 1)
        h6[t7].c();
      e7 = main4.p();
    }, m(t7, l6) {
      p5 && p5.m(t7, l6), main4.d(t7, n6, l6);
      for (let n7 = 0; n7 < h6.length; n7 += 1)
        h6[n7].m(t7, l6);
      main4.d(t7, e7, l6), s6 = true;
    }, p(t7, n7) {
      if (p5 && p5.p && 16 & n7 && main4.E(p5, r6, t7, t7[4], n7, null, null), 6 & n7) {
        let l6;
        for (i6 = t7[2], l6 = 0; l6 < i6.length; l6 += 1) {
          const c6 = x2(t7, i6, l6);
          h6[l6] ? h6[l6].p(c6, n7) : (h6[l6] = S2(c6), h6[l6].c(), h6[l6].m(e7.parentNode, e7));
        }
        for (; l6 < h6.length; l6 += 1)
          h6[l6].d(1);
        h6.length = i6.length;
      }
    }, i(t7) {
      s6 || (main4.t(p5, t7), s6 = true);
    }, o(t7) {
      main4.f(p5, t7), s6 = false;
    }, d(t7) {
      p5 && p5.d(t7), t7 && main4.h(n6), main4.C(h6, t7), t7 && main4.h(e7);
    }};
  }
  function q2(t6) {
    let n6, e7, s6;
    const r6 = t6[5].default, p5 = main4.D(r6, t6, t6[4], null);
    let i6 = t6[2], h6 = [];
    for (let n7 = 0; n7 < i6.length; n7 += 1)
      h6[n7] = v4(y2(t6, i6, n7));
    return {c() {
      p5 && p5.c(), n6 = main4.a();
      for (let t7 = 0; t7 < h6.length; t7 += 1)
        h6[t7].c();
      e7 = main4.p();
    }, m(t7, l6) {
      p5 && p5.m(t7, l6), main4.d(t7, n6, l6);
      for (let n7 = 0; n7 < h6.length; n7 += 1)
        h6[n7].m(t7, l6);
      main4.d(t7, e7, l6), s6 = true;
    }, p(t7, n7) {
      if (p5 && p5.p && 16 & n7 && main4.E(p5, r6, t7, t7[4], n7, null, null), 6 & n7) {
        let l6;
        for (i6 = t7[2], l6 = 0; l6 < i6.length; l6 += 1) {
          const c6 = y2(t7, i6, l6);
          h6[l6] ? h6[l6].p(c6, n7) : (h6[l6] = v4(c6), h6[l6].c(), h6[l6].m(e7.parentNode, e7));
        }
        for (; l6 < h6.length; l6 += 1)
          h6[l6].d(1);
        h6.length = i6.length;
      }
    }, i(t7) {
      s6 || (main4.t(p5, t7), s6 = true);
    }, o(t7) {
      main4.f(p5, t7), s6 = false;
    }, d(t7) {
      p5 && p5.d(t7), t7 && main4.h(n6), main4.C(h6, t7), t7 && main4.h(e7);
    }};
  }
  function C2(t6) {
    let n6, e7, s6;
    const r6 = t6[5].default, p5 = main4.D(r6, t6, t6[4], null);
    let i6 = t6[2], h6 = [];
    for (let n7 = 0; n7 < i6.length; n7 += 1)
      h6[n7] = w3(T2(t6, i6, n7));
    return {c() {
      p5 && p5.c(), n6 = main4.a();
      for (let t7 = 0; t7 < h6.length; t7 += 1)
        h6[t7].c();
      e7 = main4.p();
    }, m(t7, l6) {
      p5 && p5.m(t7, l6), main4.d(t7, n6, l6);
      for (let n7 = 0; n7 < h6.length; n7 += 1)
        h6[n7].m(t7, l6);
      main4.d(t7, e7, l6), s6 = true;
    }, p(t7, n7) {
      if (p5 && p5.p && 16 & n7 && main4.E(p5, r6, t7, t7[4], n7, null, null), 6 & n7) {
        let l6;
        for (i6 = t7[2], l6 = 0; l6 < i6.length; l6 += 1) {
          const c6 = T2(t7, i6, l6);
          h6[l6] ? h6[l6].p(c6, n7) : (h6[l6] = w3(c6), h6[l6].c(), h6[l6].m(e7.parentNode, e7));
        }
        for (; l6 < h6.length; l6 += 1)
          h6[l6].d(1);
        h6.length = i6.length;
      }
    }, i(t7) {
      s6 || (main4.t(p5, t7), s6 = true);
    }, o(t7) {
      main4.f(p5, t7), s6 = false;
    }, d(t7) {
      p5 && p5.d(t7), t7 && main4.h(n6), main4.C(h6, t7), t7 && main4.h(e7);
    }};
  }
  function D2(t6) {
    let n6, e7, s6;
    const r6 = t6[5].default, p5 = main4.D(r6, t6, t6[4], null);
    let i6 = t6[2], h6 = [];
    for (let n7 = 0; n7 < i6.length; n7 += 1)
      h6[n7] = z2(j3(t6, i6, n7));
    return {c() {
      p5 && p5.c(), n6 = main4.a();
      for (let t7 = 0; t7 < h6.length; t7 += 1)
        h6[t7].c();
      e7 = main4.p();
    }, m(t7, l6) {
      p5 && p5.m(t7, l6), main4.d(t7, n6, l6);
      for (let n7 = 0; n7 < h6.length; n7 += 1)
        h6[n7].m(t7, l6);
      main4.d(t7, e7, l6), s6 = true;
    }, p(t7, n7) {
      if (p5 && p5.p && 16 & n7 && main4.E(p5, r6, t7, t7[4], n7, null, null), 6 & n7) {
        let l6;
        for (i6 = t7[2], l6 = 0; l6 < i6.length; l6 += 1) {
          const c6 = j3(t7, i6, l6);
          h6[l6] ? h6[l6].p(c6, n7) : (h6[l6] = z2(c6), h6[l6].c(), h6[l6].m(e7.parentNode, e7));
        }
        for (; l6 < h6.length; l6 += 1)
          h6[l6].d(1);
        h6.length = i6.length;
      }
    }, i(t7) {
      s6 || (main4.t(p5, t7), s6 = true);
    }, o(t7) {
      main4.f(p5, t7), s6 = false;
    }, d(t7) {
      p5 && p5.d(t7), t7 && main4.h(n6), main4.C(h6, t7), t7 && main4.h(e7);
    }};
  }
  function E2(t6) {
    let n6, e7, l6 = t6[6] + "";
    return {c() {
      n6 = main4.e("p"), e7 = main4.j(l6), main4.b(n6, "class", t6[1]);
    }, m(t7, l7) {
      main4.d(t7, n6, l7), main4.k(n6, e7);
    }, p(t7, e8) {
      2 & e8 && main4.b(n6, "class", t7[1]);
    }, d(t7) {
      t7 && main4.h(n6);
    }};
  }
  function S2(t6) {
    let n6, e7, l6 = t6[6] + "";
    return {c() {
      n6 = main4.e("span"), e7 = main4.j(l6), main4.b(n6, "class", t6[1]);
    }, m(t7, l7) {
      main4.d(t7, n6, l7), main4.k(n6, e7);
    }, p(t7, e8) {
      2 & e8 && main4.b(n6, "class", t7[1]);
    }, d(t7) {
      t7 && main4.h(n6);
    }};
  }
  function v4(t6) {
    let n6, e7, l6 = t6[6] + "";
    return {c() {
      n6 = main4.e("h3"), e7 = main4.j(l6), main4.b(n6, "class", t6[1]);
    }, m(t7, l7) {
      main4.d(t7, n6, l7), main4.k(n6, e7);
    }, p(t7, e8) {
      2 & e8 && main4.b(n6, "class", t7[1]);
    }, d(t7) {
      t7 && main4.h(n6);
    }};
  }
  function w3(t6) {
    let n6, e7, l6 = t6[6] + "";
    return {c() {
      n6 = main4.e("h2"), e7 = main4.j(l6), main4.b(n6, "class", t6[1]);
    }, m(t7, l7) {
      main4.d(t7, n6, l7), main4.k(n6, e7);
    }, p(t7, e8) {
      2 & e8 && main4.b(n6, "class", t7[1]);
    }, d(t7) {
      t7 && main4.h(n6);
    }};
  }
  function z2(t6) {
    let n6, e7, l6 = t6[6] + "";
    return {c() {
      n6 = main4.e("h1"), e7 = main4.j(l6), main4.b(n6, "class", t6[1]);
    }, m(t7, l7) {
      main4.d(t7, n6, l7), main4.k(n6, e7);
    }, p(t7, e8) {
      2 & e8 && main4.b(n6, "class", t7[1]);
    }, d(t7) {
      t7 && main4.h(n6);
    }};
  }
  function A2(t6) {
    let n6, e7, f6, p5;
    const i6 = [D2, C2, q2, k3, b2], h6 = [];
    function g5(t7, n7) {
      return t7[0] === "h1" ? 0 : t7[0] === "h2" ? 1 : t7[0] === "h3" ? 2 : t7[0] === "span" ? 3 : 4;
    }
    return n6 = g5(t6), e7 = h6[n6] = i6[n6](t6), {c() {
      e7.c(), f6 = main4.p();
    }, m(t7, e8) {
      h6[n6].m(t7, e8), main4.d(t7, f6, e8), p5 = true;
    }, p(t7, [l6]) {
      let c6 = n6;
      n6 = g5(t7), n6 === c6 ? h6[n6].p(t7, l6) : (main4.q(), main4.f(h6[c6], 1, 1, () => {
        h6[c6] = null;
      }), main4.r(), e7 = h6[n6], e7 ? e7.p(t7, l6) : (e7 = h6[n6] = i6[n6](t7), e7.c()), main4.t(e7, 1), e7.m(f6.parentNode, f6));
    }, i(t7) {
      p5 || (main4.t(e7), p5 = true);
    }, o(t7) {
      main4.f(e7), p5 = false;
    }, d(t7) {
      h6[n6].d(t7), t7 && main4.h(f6);
    }};
  }
  function B2(t6, n6, e7) {
    let {$$slots: l6 = {}, $$scope: c6} = n6, {tagType: s6} = n6, {className: o6} = n6, {context: r6} = n6, u5 = typeof r6 == "string" ? r6.split("\n") : [];
    return t6.$$set = (t7) => {
      "tagType" in t7 && e7(0, s6 = t7.tagType), "className" in t7 && e7(1, o6 = t7.className), "context" in t7 && e7(3, r6 = t7.context), "$$scope" in t7 && e7(4, c6 = t7.$$scope);
    }, [s6, o6, u5, r6, c6, l6];
  }
  class F2 extends main4.S {
    constructor(t6) {
      super(), main4.i(this, t6, B2, A2, main4.s, {tagType: 0, className: 1, context: 3});
    }
  }

  // ../../../../지울꺼/allius-routify/dist/build/UserProject-30975f77.js
  const main5 = __toModule(require_main());
  function B3(e7) {
    let n6, t6;
    return {c() {
      n6 = main5.e("img"), main5.b(n6, "class", "allius-loading-gif svelte-jyhw7z"), n6.src !== (t6 = "/images/loading.gif") && main5.b(n6, "src", "/images/loading.gif"), main5.b(n6, "alt", "loading content");
    }, m(e8, t7) {
      main5.d(e8, n6, t7);
    }, p: main5.n, i: main5.n, o: main5.n, d(e8) {
      e8 && main5.h(n6);
    }};
  }
  class W2 extends main5.S {
    constructor(e7) {
      super(), main5.i(this, e7, null, B3, main5.s, {});
    }
  }
  function F3(e7, n6, t6) {
    const l6 = e7.slice();
    return l6[20] = n6[t6], l6;
  }
  function P2(e7) {
    let n6, t6;
    return n6 = new W2({}), {c() {
      main5.c(n6.$$.fragment);
    }, m(e8, l6) {
      main5.m(n6, e8, l6), t6 = true;
    }, p: main5.n, i(e8) {
      t6 || (main5.t(n6.$$.fragment, e8), t6 = true);
    }, o(e8) {
      main5.f(n6.$$.fragment, e8), t6 = false;
    }, d(e8) {
      main5.g(n6, e8);
    }};
  }
  function R2(e7) {
    let n6, t6 = e7[2], l6 = [];
    for (let n7 = 0; n7 < t6.length; n7 += 1)
      l6[n7] = z3(F3(e7, t6, n7));
    return {c() {
      for (let e8 = 0; e8 < l6.length; e8 += 1)
        l6[e8].c();
      n6 = main5.p();
    }, m(e8, t7) {
      for (let n7 = 0; n7 < l6.length; n7 += 1)
        l6[n7].m(e8, t7);
      main5.d(e8, n6, t7);
    }, p(e8, s6) {
      if (165 & s6) {
        let r6;
        for (t6 = e8[2], r6 = 0; r6 < t6.length; r6 += 1) {
          const o6 = F3(e8, t6, r6);
          l6[r6] ? l6[r6].p(o6, s6) : (l6[r6] = z3(o6), l6[r6].c(), l6[r6].m(n6.parentNode, n6));
        }
        for (; r6 < l6.length; r6 += 1)
          l6[r6].d(1);
        l6.length = t6.length;
      }
    }, i: main5.n, o: main5.n, d(e8) {
      main5.C(l6, e8), e8 && main5.h(n6);
    }};
  }
  function z3(e7) {
    let n6, t6, o6, m6, d5, f6, g5, b4, h6, v6, $4, j5 = e7[20].title + "";
    return {c() {
      n6 = main5.e("li"), t6 = main5.e("a"), o6 = main5.e("img"), f6 = main5.a(), g5 = main5.e("p"), b4 = main5.j(j5), v6 = main5.a(), main5.b(o6, "alt", m6 = e7[20].title), o6.src !== (d5 = "https://firebasestorage.googleapis.com/v0/b/allius-dev.appspot.com/o/brand_icon%2FBRI-" + e7[20].brand_icon + ".jpg?alt=media") && main5.b(o6, "src", d5), main5.b(o6, "class", "svelte-1io5y4i"), main5.b(g5, "class", "svelte-1io5y4i"), main5.b(t6, "href", h6 = e7[7](`/@${e7[0]}/${e7[20].brand_id}`)), main5.b(t6, "class", "svelte-1io5y4i"), main5.b(n6, "class", "svelte-1io5y4i"), main5.A(() => e7[10].call(n6));
    }, m(l6, s6) {
      main5.d(l6, n6, s6), main5.k(n6, t6), main5.k(t6, o6), main5.k(t6, f6), main5.k(t6, g5), main5.k(g5, b4), main5.k(n6, v6), $4 = main5.B(n6, e7[10].bind(n6));
    }, p(e8, n7) {
      4 & n7 && m6 !== (m6 = e8[20].title) && main5.b(o6, "alt", m6), 4 & n7 && o6.src !== (d5 = "https://firebasestorage.googleapis.com/v0/b/allius-dev.appspot.com/o/brand_icon%2FBRI-" + e8[20].brand_icon + ".jpg?alt=media") && main5.b(o6, "src", d5), 4 & n7 && j5 !== (j5 = e8[20].title + "") && main5.v(b4, j5), 133 & n7 && h6 !== (h6 = e8[7](`/@${e8[0]}/${e8[20].brand_id}`)) && main5.b(t6, "href", h6);
    }, d(e8) {
      e8 && main5.h(n6), $4();
    }};
  }
  function q3(e7) {
    let n6, t6, o6, b4, h6, v6, $4, j5;
    const y4 = [R2, P2], w5 = [];
    function _3(e8, n7) {
      return e8[2] && e8[1] ? 0 : 1;
    }
    return o6 = _3(e7), b4 = w5[o6] = y4[o6](e7), {c() {
      n6 = main5.e("div"), t6 = main5.e("ul"), b4.c(), v6 = main5.a(), main5.b(t6, "class", "svelte-1io5y4i"), main5.A(() => e7[12].call(t6)), main5.b(n6, "class", "user-brand-wrapper svelte-1io5y4i"), main5.A(() => e7[15].call(n6));
    }, m(l6, s6) {
      main5.d(l6, n6, s6), main5.k(n6, t6), w5[o6].m(t6, null), e7[11](t6), h6 = main5.B(t6, e7[12].bind(t6)), main5.k(n6, v6), $4 = main5.B(n6, e7[15].bind(n6)), j5 = true;
    }, p(e8, [n7]) {
      let l6 = o6;
      o6 = _3(e8), o6 === l6 ? w5[o6].p(e8, n7) : (main5.q(), main5.f(w5[l6], 1, 1, () => {
        w5[l6] = null;
      }), main5.r(), b4 = w5[o6], b4 ? b4.p(e8, n7) : (b4 = w5[o6] = y4[o6](e8), b4.c()), main5.t(b4, 1), b4.m(t6, null));
    }, i(e8) {
      j5 || (main5.t(b4), j5 = true);
    }, o(e8) {
      main5.f(b4), j5 = false;
    }, d(t7) {
      t7 && main5.h(n6), w5[o6].d(), e7[11](null), h6(), $4();
    }};
  }
  function A3(e7, n6, t6) {
    let l6, s6;
    main5.l(e7, main5.x, (e8) => t6(17, l6 = e8)), main5.l(e7, main5.u, (e8) => t6(7, s6 = e8));
    let r6, o6, c6, a6, i6, {nickname: u5} = n6, {userName: p5} = n6, {userColor: m6} = n6, d5 = 0;
    const f6 = (e8) => {
      e8 ? i6.scrollTo(d5 + a6, 0) : i6.scrollTo(d5 - a6, 0);
    };
    main5.o(() => {
      d5 = 0, (async () => {
        try {
          const e8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getBrandList?nickname=${u5}`});
          t6(2, r6 = await e8.data.brand_list);
        } catch (e8) {
          console.log("\uC0AC\uC6A9\uC790 \uC774\uB984 \uC815\uBCF4 \uAC00\uC838\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."), l6(s6("/"));
        }
      })();
    });
    return e7.$$set = (e8) => {
      "nickname" in e8 && t6(0, u5 = e8.nickname), "userName" in e8 && t6(9, p5 = e8.userName), "userColor" in e8 && t6(1, m6 = e8.userColor);
    }, [u5, m6, r6, o6, c6, a6, i6, s6, f6, p5, function() {
      a6 = this.clientWidth, t6(5, a6);
    }, function(e8) {
      main5.F[e8 ? "unshift" : "push"](() => {
        i6 = e8, t6(6, i6);
      });
    }, function() {
      o6 = this.clientWidth, t6(3, o6);
    }, () => f6(false), () => f6(true), function() {
      c6 = this.clientWidth, t6(4, c6);
    }];
  }
  class D3 extends main5.S {
    constructor(e7) {
      super(), main5.i(this, e7, A3, q3, main5.s, {nickname: 0, userName: 9, userColor: 1});
    }
  }
  function G2(e7, n6, t6) {
    const l6 = e7.slice();
    return l6[16] = n6[t6], l6;
  }
  function U2(e7, n6, t6) {
    const l6 = e7.slice();
    return l6[16] = n6[t6], l6;
  }
  function E3(e7) {
    let n6, t6;
    return n6 = new W2({}), {c() {
      main5.c(n6.$$.fragment);
    }, m(e8, l6) {
      main5.m(n6, e8, l6), t6 = true;
    }, p: main5.n, i(e8) {
      t6 || (main5.t(n6.$$.fragment, e8), t6 = true);
    }, o(e8) {
      main5.f(n6.$$.fragment, e8), t6 = false;
    }, d(e8) {
      main5.g(n6, e8);
    }};
  }
  function J2(e7) {
    let n6, t6, o6, i6, p5, b4, h6, v6, $4, j5, y4, w5, _3, C4, L3 = e7[2] && K2(e7);
    const H3 = [Q2, O2], I3 = [];
    function M2(e8, n7) {
      return e8[6] && e8[5] ? 0 : e8[6] ? 1 : -1;
    }
    return ~(v6 = M2(e7)) && ($4 = I3[v6] = H3[v6](e7)), {c() {
      n6 = main5.e("div"), t6 = main5.e("div"), o6 = main5.e("h3"), i6 = main5.j(e7[1]), b4 = main5.a(), L3 && L3.c(), h6 = main5.a(), $4 && $4.c(), main5.b(o6, "class", "project-title svelte-onbrni"), main5.b(o6, "style", p5 = e7[3] === "ing" ? `color:${e7[0]}` : ""), main5.b(t6, "class", "summary-wrapper svelte-onbrni"), main5.b(n6, "class", j5 = main5.G(e7[6] ? "project-wrapper opened" : "project-wrapper not-opened") + " svelte-onbrni"), main5.b(n6, "style", y4 = e7[3] === "ing" ? `border-left-color:${e7[0]}` : "");
    }, m(l6, s6) {
      main5.d(l6, n6, s6), main5.k(n6, t6), main5.k(t6, o6), main5.k(o6, i6), main5.k(t6, b4), L3 && L3.m(t6, null), main5.k(n6, h6), ~v6 && I3[v6].m(n6, null), e7[14](n6), w5 = true, _3 || (C4 = main5.H(t6, "click", e7[12]), _3 = true);
    }, p(e8, l6) {
      (!w5 || 2 & l6) && main5.v(i6, e8[1]), (!w5 || 9 & l6 && p5 !== (p5 = e8[3] === "ing" ? `color:${e8[0]}` : "")) && main5.b(o6, "style", p5), e8[2] ? L3 ? L3.p(e8, l6) : (L3 = K2(e8), L3.c(), L3.m(t6, null)) : L3 && (L3.d(1), L3 = null);
      let r6 = v6;
      v6 = M2(e8), v6 === r6 ? ~v6 && I3[v6].p(e8, l6) : ($4 && (main5.q(), main5.f(I3[r6], 1, 1, () => {
        I3[r6] = null;
      }), main5.r()), ~v6 ? ($4 = I3[v6], $4 ? $4.p(e8, l6) : ($4 = I3[v6] = H3[v6](e8), $4.c()), main5.t($4, 1), $4.m(n6, null)) : $4 = null), (!w5 || 64 & l6 && j5 !== (j5 = main5.G(e8[6] ? "project-wrapper opened" : "project-wrapper not-opened") + " svelte-onbrni")) && main5.b(n6, "class", j5), (!w5 || 9 & l6 && y4 !== (y4 = e8[3] === "ing" ? `border-left-color:${e8[0]}` : "")) && main5.b(n6, "style", y4);
    }, i(e8) {
      w5 || (main5.t($4), w5 = true);
    }, o(e8) {
      main5.f($4), w5 = false;
    }, d(t7) {
      t7 && main5.h(n6), L3 && L3.d(), ~v6 && I3[v6].d(), e7[14](null), _3 = false, C4();
    }};
  }
  function K2(e7) {
    let n6, t6;
    return {c() {
      n6 = main5.e("p"), t6 = main5.j(e7[2]), main5.b(n6, "class", "project-summary svelte-onbrni");
    }, m(e8, l6) {
      main5.d(e8, n6, l6), main5.k(n6, t6);
    }, p(e8, n7) {
      4 & n7 && main5.v(t6, e8[2]);
    }, d(e8) {
      e8 && main5.h(n6);
    }};
  }
  function O2(e7) {
    let n6, t6;
    return n6 = new W2({}), {c() {
      main5.c(n6.$$.fragment);
    }, m(e8, l6) {
      main5.m(n6, e8, l6), t6 = true;
    }, p: main5.n, i(e8) {
      t6 || (main5.t(n6.$$.fragment, e8), t6 = true);
    }, o(e8) {
      main5.f(n6.$$.fragment, e8), t6 = false;
    }, d(e8) {
      main5.g(n6, e8);
    }};
  }
  function Q2(e7) {
    let n6, t6, o6, p5, m6, d5, f6, g5, b4, h6, v6, $4 = e7[5].from_date && V2(e7), j5 = e7[5].process && X2(e7), y4 = e7[5].collabo && e7[5].collabo.length > 0 && Y2(e7), w5 = e7[5].results && ee2(e7), _3 = e7[5].learned && e7[5].learned.length > 0 && ne2(e7);
    return {c() {
      n6 = main5.e("div"), $4 && $4.c(), t6 = main5.a(), j5 && j5.c(), o6 = main5.a(), y4 && y4.c(), p5 = main5.a(), w5 && w5.c(), m6 = main5.a(), _3 && _3.c(), d5 = main5.a(), f6 = main5.e("button"), f6.textContent = "\u2716 \uD504\uB85C\uC81D\uD2B8 \uC0C1\uC138\uBCF4\uAE30 \uB2EB\uAE30", main5.b(f6, "class", "svelte-onbrni"), main5.b(n6, "class", "detail-wrapper svelte-onbrni");
    }, m(l6, s6) {
      main5.d(l6, n6, s6), $4 && $4.m(n6, null), main5.k(n6, t6), j5 && j5.m(n6, null), main5.k(n6, o6), y4 && y4.m(n6, null), main5.k(n6, p5), w5 && w5.m(n6, null), main5.k(n6, m6), _3 && _3.m(n6, null), main5.k(n6, d5), main5.k(n6, f6), b4 = true, h6 || (v6 = main5.H(f6, "click", e7[13]), h6 = true);
    }, p(e8, l6) {
      e8[5].from_date ? $4 ? $4.p(e8, l6) : ($4 = V2(e8), $4.c(), $4.m(n6, t6)) : $4 && ($4.d(1), $4 = null), e8[5].process ? j5 ? j5.p(e8, l6) : (j5 = X2(e8), j5.c(), j5.m(n6, o6)) : j5 && (j5.d(1), j5 = null), e8[5].collabo && e8[5].collabo.length > 0 ? y4 ? y4.p(e8, l6) : (y4 = Y2(e8), y4.c(), y4.m(n6, p5)) : y4 && (y4.d(1), y4 = null), e8[5].results ? w5 ? w5.p(e8, l6) : (w5 = ee2(e8), w5.c(), w5.m(n6, m6)) : w5 && (w5.d(1), w5 = null), e8[5].learned && e8[5].learned.length > 0 ? _3 ? _3.p(e8, l6) : (_3 = ne2(e8), _3.c(), _3.m(n6, d5)) : _3 && (_3.d(1), _3 = null);
    }, i(e8) {
      b4 || (main5.A(() => {
        g5 || (g5 = main5.I(n6, ne, {}, true)), g5.run(1);
      }), b4 = true);
    }, o(e8) {
      g5 || (g5 = main5.I(n6, ne, {}, false)), g5.run(0), b4 = false;
    }, d(e8) {
      e8 && main5.h(n6), $4 && $4.d(), j5 && j5.d(), y4 && y4.d(), w5 && w5.d(), _3 && _3.d(), e8 && g5 && g5.end(), h6 = false, v6();
    }};
  }
  function V2(e7) {
    let n6, t6, o6, a6, i6 = e7[5].from_date + "", p5 = e7[5].to_date + "";
    return {c() {
      n6 = main5.e("p"), t6 = main5.j(i6), o6 = main5.j(" - "), a6 = main5.j(p5), main5.b(n6, "class", "date svelte-onbrni"), main5.z(n6, "color", e7[0]);
    }, m(e8, l6) {
      main5.d(e8, n6, l6), main5.k(n6, t6), main5.k(n6, o6), main5.k(n6, a6);
    }, p(e8, l6) {
      32 & l6 && i6 !== (i6 = e8[5].from_date + "") && main5.v(t6, i6), 32 & l6 && p5 !== (p5 = e8[5].to_date + "") && main5.v(a6, p5), 1 & l6 && main5.z(n6, "color", e8[0]);
    }, d(e8) {
      e8 && main5.h(n6);
    }};
  }
  function X2(e7) {
    let n6, t6, o6, i6 = e7[5].process + "";
    return {c() {
      n6 = main5.e("p"), n6.innerHTML = 'Project Process<span class="svelte-onbrni">\uACFC\uC815</span>', t6 = main5.a(), o6 = main5.e("div"), main5.b(n6, "class", "sub-title svelte-onbrni"), main5.b(o6, "class", "content-process text-area svelte-onbrni");
    }, m(e8, l6) {
      main5.d(e8, n6, l6), main5.d(e8, t6, l6), main5.d(e8, o6, l6), o6.innerHTML = i6;
    }, p(e8, n7) {
      32 & n7 && i6 !== (i6 = e8[5].process + "") && (o6.innerHTML = i6);
    }, d(e8) {
      e8 && main5.h(n6), e8 && main5.h(t6), e8 && main5.h(o6);
    }};
  }
  function Y2(e7) {
    let n6, t6, o6, i6, p5, m6 = e7[5].collabo, d5 = [];
    for (let n7 = 0; n7 < m6.length; n7 += 1)
      d5[n7] = Z2(U2(e7, m6, n7));
    return {c() {
      n6 = main5.e("p"), n6.innerHTML = 'Collaborated with<span class="svelte-onbrni">\uD568\uAED8 \uD55C \uC0AC\uB78C\uB4E4</span>', t6 = main5.a(), o6 = main5.e("ul");
      for (let e8 = 0; e8 < d5.length; e8 += 1)
        d5[e8].c();
      i6 = main5.a(), p5 = main5.e("li"), main5.b(n6, "class", "sub-title svelte-onbrni"), main5.b(p5, "class", "svelte-onbrni"), main5.b(o6, "class", "collabo svelte-onbrni");
    }, m(e8, l6) {
      main5.d(e8, n6, l6), main5.d(e8, t6, l6), main5.d(e8, o6, l6);
      for (let e9 = 0; e9 < d5.length; e9 += 1)
        d5[e9].m(o6, null);
      main5.k(o6, i6), main5.k(o6, p5);
    }, p(e8, n7) {
      if (288 & n7) {
        let t7;
        for (m6 = e8[5].collabo, t7 = 0; t7 < m6.length; t7 += 1) {
          const l6 = U2(e8, m6, t7);
          d5[t7] ? d5[t7].p(l6, n7) : (d5[t7] = Z2(l6), d5[t7].c(), d5[t7].m(o6, i6));
        }
        for (; t7 < d5.length; t7 += 1)
          d5[t7].d(1);
        d5.length = m6.length;
      }
    }, d(e8) {
      e8 && main5.h(n6), e8 && main5.h(t6), e8 && main5.h(o6), main5.C(d5, e8);
    }};
  }
  function Z2(e7) {
    let n6, t6, o6, i6, p5, m6, d5, f6, g5, b4, h6, v6, $4, j5 = e7[16].name + "", y4 = e7[16].user_name + "", w5 = e7[16].summary + "";
    return {c() {
      n6 = main5.e("li"), t6 = main5.e("a"), o6 = main5.e("div"), i6 = main5.a(), p5 = main5.e("p"), m6 = main5.e("strong"), d5 = main5.j(j5), f6 = main5.j("@"), g5 = main5.j(y4), b4 = main5.a(), h6 = main5.e("p"), v6 = main5.j(w5), main5.b(o6, "class", "img-box svelte-onbrni"), main5.z(o6, "background-image", "url(" + e7[16].img_src + ")"), main5.b(m6, "class", "svelte-onbrni"), main5.b(p5, "class", "collabo-name svelte-onbrni"), main5.b(h6, "class", "summary svelte-onbrni"), main5.b(t6, "href", $4 = e7[8](`/@${e7[16].user_name}`)), main5.b(t6, "class", "svelte-onbrni"), main5.b(n6, "class", "svelte-onbrni");
    }, m(e8, l6) {
      main5.d(e8, n6, l6), main5.k(n6, t6), main5.k(t6, o6), main5.k(t6, i6), main5.k(t6, p5), main5.k(p5, m6), main5.k(m6, d5), main5.k(p5, f6), main5.k(p5, g5), main5.k(t6, b4), main5.k(t6, h6), main5.k(h6, v6);
    }, p(e8, n7) {
      32 & n7 && main5.z(o6, "background-image", "url(" + e8[16].img_src + ")"), 32 & n7 && j5 !== (j5 = e8[16].name + "") && main5.v(d5, j5), 32 & n7 && y4 !== (y4 = e8[16].user_name + "") && main5.v(g5, y4), 32 & n7 && w5 !== (w5 = e8[16].summary + "") && main5.v(v6, w5), 288 & n7 && $4 !== ($4 = e8[8](`/@${e8[16].user_name}`)) && main5.b(t6, "href", $4);
    }, d(e8) {
      e8 && main5.h(n6);
    }};
  }
  function ee2(e7) {
    let n6, t6, o6, i6 = e7[5].results + "";
    return {c() {
      n6 = main5.e("p"), n6.innerHTML = 'Result<span class="svelte-onbrni">\uACB0\uACFC</span>', t6 = main5.a(), o6 = main5.e("div"), main5.b(n6, "class", "sub-title svelte-onbrni"), main5.b(o6, "class", "content-results text-area svelte-onbrni");
    }, m(e8, l6) {
      main5.d(e8, n6, l6), main5.d(e8, t6, l6), main5.d(e8, o6, l6), o6.innerHTML = i6;
    }, p(e8, n7) {
      32 & n7 && i6 !== (i6 = e8[5].results + "") && (o6.innerHTML = i6);
    }, d(e8) {
      e8 && main5.h(n6), e8 && main5.h(t6), e8 && main5.h(o6);
    }};
  }
  function ne2(e7) {
    let n6, t6, o6, i6 = e7[5].learned, u5 = [];
    for (let n7 = 0; n7 < i6.length; n7 += 1)
      u5[n7] = te2(G2(e7, i6, n7));
    return {c() {
      n6 = main5.e("p"), n6.innerHTML = 'What I got from this project?<span class="svelte-onbrni">\uBC30\uC6B4 \uC810</span>', t6 = main5.a(), o6 = main5.e("ul");
      for (let e8 = 0; e8 < u5.length; e8 += 1)
        u5[e8].c();
      main5.b(n6, "class", "sub-title svelte-onbrni"), main5.b(o6, "class", "content-array-type svelte-onbrni");
    }, m(e8, l6) {
      main5.d(e8, n6, l6), main5.d(e8, t6, l6), main5.d(e8, o6, l6);
      for (let e9 = 0; e9 < u5.length; e9 += 1)
        u5[e9].m(o6, null);
    }, p(e8, n7) {
      if (33 & n7) {
        let t7;
        for (i6 = e8[5].learned, t7 = 0; t7 < i6.length; t7 += 1) {
          const l6 = G2(e8, i6, t7);
          u5[t7] ? u5[t7].p(l6, n7) : (u5[t7] = te2(l6), u5[t7].c(), u5[t7].m(o6, null));
        }
        for (; t7 < u5.length; t7 += 1)
          u5[t7].d(1);
        u5.length = i6.length;
      }
    }, d(e8) {
      e8 && main5.h(n6), e8 && main5.h(t6), e8 && main5.h(o6), main5.C(u5, e8);
    }};
  }
  function te2(e7) {
    let n6, t6, o6, i6, p5, m6 = e7[16] + "";
    return {c() {
      n6 = main5.e("li"), t6 = main5.e("strong"), o6 = main5.j("\u2714"), i6 = main5.a(), p5 = main5.j(m6), main5.z(t6, "color", e7[0]), main5.b(t6, "class", "svelte-onbrni"), main5.b(n6, "class", "svelte-onbrni");
    }, m(e8, l6) {
      main5.d(e8, n6, l6), main5.k(n6, t6), main5.k(t6, o6), main5.k(n6, i6), main5.k(n6, p5);
    }, p(e8, n7) {
      1 & n7 && main5.z(t6, "color", e8[0]), 32 & n7 && m6 !== (m6 = e8[16] + "") && main5.v(p5, m6);
    }, d(e8) {
      e8 && main5.h(n6);
    }};
  }
  function le(e7) {
    let n6, t6, l6, s6;
    const o6 = [J2, E3], a6 = [];
    function i6(e8, n7) {
      return e8[1] && e8[4] ? 0 : 1;
    }
    return n6 = i6(e7), t6 = a6[n6] = o6[n6](e7), {c() {
      t6.c(), l6 = main5.p();
    }, m(e8, t7) {
      a6[n6].m(e8, t7), main5.d(e8, l6, t7), s6 = true;
    }, p(e8, [s7]) {
      let r6 = n6;
      n6 = i6(e8), n6 === r6 ? a6[n6].p(e8, s7) : (main5.q(), main5.f(a6[r6], 1, 1, () => {
        a6[r6] = null;
      }), main5.r(), t6 = a6[n6], t6 ? t6.p(e8, s7) : (t6 = a6[n6] = o6[n6](e8), t6.c()), main5.t(t6, 1), t6.m(l6.parentNode, l6));
    }, i(e8) {
      s6 || (main5.t(t6), s6 = true);
    }, o(e8) {
      main5.f(t6), s6 = false;
    }, d(e8) {
      a6[n6].d(e8), e8 && main5.h(l6);
    }};
  }
  function se(e7, n6, t6) {
    let l6;
    main5.l(e7, main5.u, (e8) => t6(8, l6 = e8));
    let s6, r6, {nickname: o6} = n6, {userColor: c6} = n6, {projectTitle: a6} = n6, {projectSummary: i6} = n6, {projectStatus: u5} = n6, {projectId: p5} = n6, m6 = false;
    const d5 = async () => {
      try {
        const e8 = await Q({method: "get", url: `https://us-central1-allius.cloudfunctions.net/getProjectDetail?nickname=${o6}&projectId=${p5}`});
        t6(5, s6 = await e8.data);
      } catch (e8) {
        console.log("\uD504\uB85C\uC81D\uD2B8 \uC815\uBCF4 \uAC00\uC838\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.");
      }
    }, f6 = async () => {
      s6 || await d5(), t6(6, m6 = true), window.scrollTo({top: r6.offsetTop, behavior: "smooth"});
    }, g5 = () => {
      window.scrollTo({top: r6.offsetTop, behavior: "smooth"}), t6(6, m6 = false);
    };
    main5.o(async () => {
      await d5();
    });
    return e7.$$set = (e8) => {
      "nickname" in e8 && t6(11, o6 = e8.nickname), "userColor" in e8 && t6(0, c6 = e8.userColor), "projectTitle" in e8 && t6(1, a6 = e8.projectTitle), "projectSummary" in e8 && t6(2, i6 = e8.projectSummary), "projectStatus" in e8 && t6(3, u5 = e8.projectStatus), "projectId" in e8 && t6(4, p5 = e8.projectId);
    }, [c6, a6, i6, u5, p5, s6, m6, r6, l6, f6, g5, o6, () => f6(), () => g5(), function(e8) {
      main5.F[e8 ? "unshift" : "push"](() => {
        r6 = e8, t6(7, r6);
      });
    }];
  }
  class re2 extends main5.S {
    constructor(e7) {
      super(), main5.i(this, e7, se, le, main5.s, {nickname: 11, userColor: 0, projectTitle: 1, projectSummary: 2, projectStatus: 3, projectId: 4});
    }
  }
  require_main();
})();
