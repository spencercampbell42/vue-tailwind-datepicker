(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vtd-datepicker-overlay.open:before{display:block;opacity:.5}.vtd-datepicker:before{--vtd-datepicker: 0px;content:"";position:absolute;top:0px;height:1rem;width:1rem;border-width:1px;border-color:#0000001a;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.dark .vtd-datepicker:before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker:before{transform:translate(50%,-50%) rotate(-45deg);-webkit-clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)));clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)))}.vtd-datepicker.place-left:before{left:.25rem}.vtd-datepicker.place-right:before{right:1.25rem}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { openBlock as Z, createElementBlock as K, createElementVNode as Y, withDirectives as se, vShow as ie, toDisplayString as ae, Fragment as we, renderList as Fe, inject as ce, createVNode as ee, TransitionGroup as St, withCtx as Pe, normalizeClass as Se, Transition as ot, unref as H, createCommentVNode as he, withModifiers as Me, cloneVNode as Dt, h as Ye, provide as de, ref as te, onMounted as _t, watchEffect as $e, computed as fe, defineComponent as Te, reactive as Ot, nextTick as He, watch as Pt, createBlock as Re, renderSlot as Ct, mergeProps as Yt, vModelText as Vt } from "vue";
const Tt = { class: "flex justify-between items-center px-2 py-1.5" }, At = { class: "flex-shrink-0" }, jt = { class: "inline-flex rounded-full" }, Lt = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Bt = ["d"], Et = { class: "px-1.5 space-x-1.5 flex flex-1" }, Ft = { class: "flex-1 flex rounded-md" }, Nt = ["textContent"], Ht = { class: "flex-1 flex rounded-md" }, Rt = ["textContent"], It = { class: "flex-shrink-0" }, Ut = { class: "inline-flex rounded-full" }, Wt = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, zt = ["d"], Ie = {
  __name: "Header",
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object
  },
  setup(t) {
    return (l, o) => (Z(), K("div", Tt, [
      Y("div", At, [
        se(Y("span", jt, [
          Y("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: o[0] || (o[0] = (e) => t.panel.calendar ? t.calendar.onPrevious() : t.calendar.onPreviousYear())
          }, [
            (Z(), K("svg", Lt, [
              Y("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Bt)
            ]))
          ])
        ], 512), [
          [ie, t.panel.calendar || t.panel.year]
        ])
      ]),
      Y("div", Et, [
        Y("span", Ft, [
          Y("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: ae(t.calendar.month),
            onClick: o[1] || (o[1] = (e) => t.calendar.openMonth())
          }, null, 8, Nt)
        ]),
        Y("span", Ht, [
          Y("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: ae(t.calendar.year),
            onClick: o[2] || (o[2] = (e) => t.calendar.openYear())
          }, null, 8, Rt)
        ])
      ]),
      Y("div", It, [
        se(Y("span", Ut, [
          Y("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: o[3] || (o[3] = (e) => t.panel.calendar ? t.calendar.onNext() : t.calendar.onNextYear())
          }, [
            (Z(), K("svg", Wt, [
              Y("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, zt)
            ]))
          ])
        ], 512), [
          [ie, t.panel.calendar || t.panel.year]
        ])
      ])
    ]));
  }
}, Zt = { class: "flex flex-wrap mt-1.5" }, Gt = { class: "flex rounded-md mt-1.5" }, Kt = ["textContent", "onClick"], Ue = {
  __name: "Month",
  props: {
    months: Array
  },
  emits: ["update:month"],
  setup(t, { emit: l }) {
    return (o, e) => (Z(), K("div", Zt, [
      (Z(!0), K(we, null, Fe(t.months, (s, u) => (Z(), K("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        Y("span", Gt, [
          Y("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: ae(s),
            onClick: (C) => l("update:month", u)
          }, null, 8, Kt)
        ])
      ]))), 128))
    ]));
  }
}, Jt = { class: "grid grid-cols-7 py-2 mt-0.5" }, qt = ["textContent"], We = {
  __name: "Week",
  props: {
    weeks: Array
  },
  setup(t) {
    return (l, o) => (Z(), K("div", Jt, [
      (Z(!0), K(we, null, Fe(t.weeks, (e, s) => (Z(), K("div", {
        key: s,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        Y("span", {
          textContent: ae(e)
        }, null, 8, qt)
      ]))), 128))
    ]));
  }
}, Xt = { class: "flex flex-wrap" }, Qt = { class: "flex rounded-md mt-1.5" }, er = ["textContent", "onClick"], ze = {
  __name: "Year",
  props: {
    asPrevOrNext: Boolean,
    years: Array
  },
  emits: ["update:year"],
  setup(t, { emit: l }) {
    return (o, e) => (Z(), K("div", Xt, [
      (Z(!0), K(we, null, Fe(t.years, (s, u) => (Z(), K("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        Y("span", Qt, [
          Y("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: ae(s),
            onClick: (C) => l("update:year", s, t.asPrevOrNext)
          }, null, 8, er)
        ])
      ]))), 128))
    ]));
  }
}, tr = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, rr = ["data-tooltip"], nr = ["disabled", "onClick", "onMouseenter", "onFocusin", "textContent", "data-date"], Ze = {
  __name: "Calendar",
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  emits: ["update:date"],
  setup(t, { emit: l }) {
    const o = ce("isBetweenRange"), e = ce("betweenRangeClasses"), s = ce("datepickerClasses"), u = ce("atMouseOver");
    return (C, c) => (Z(), K("div", tr, [
      ee(St, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Pe(() => [
          (Z(!0), K(we, null, Fe(t.calendar.date(), (p, h) => (Z(), K("div", {
            key: h,
            class: Se(["relative", { "vtd-tooltip": t.asRange && p.duration() }]),
            "data-tooltip": `${p.duration()}`
          }, [
            ee(ot, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Pe(() => [
                H(o)(p) || p.hovered() ? (Z(), K("span", {
                  key: 0,
                  class: Se(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", H(e)(p)])
                }, null, 2)) : he("", !0)
              ]),
              _: 2
            }, 1024),
            Y("button", {
              type: "button",
              class: Se(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [H(s)(p), t.asRange ? "transition-all" : "transition-colors"]]),
              disabled: p.disabled || p.inRange(),
              onClick: (k) => l("update:date", p, t.asPrevOrNext),
              onMouseenter: (k) => H(u)(p),
              onFocusin: (k) => H(u)(p),
              textContent: ae(p.date()),
              "data-date": p.toDate()
            }, null, 42, nr)
          ], 10, rr))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, or = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, ar = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, sr = ["onClick", "textContent"], lr = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, rt = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(t) {
    const l = t, o = ce("setToToday"), e = ce("setToYesterday"), s = ce("setToLastDay"), u = ce("setToThisMonth"), C = ce("setToLastMonth"), c = ce("setToCustomShortcut"), p = () => typeof l.shortcuts == "function" ? l.shortcuts() : !1;
    return (h, k) => l.asRange && l.asSingle || l.asRange && !l.asSingle ? (Z(), K("div", or, [
      p() ? (Z(), K("ol", ar, [
        (Z(!0), K(we, null, Fe(p(), (y, b) => (Z(), K("li", { key: b }, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Me((B) => H(c)(y, t.close), ["prevent"]),
            textContent: ae(y.label)
          }, null, 8, sr)
        ]))), 128))
      ])) : (Z(), K("ol", lr, [
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[0] || (k[0] = Me((y) => H(o)(t.close), ["prevent"]))
          }, ae(l.i18n.today), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[1] || (k[1] = Me((y) => H(e)(t.close), ["prevent"]))
          }, ae(l.i18n.yesterday), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[2] || (k[2] = Me((y) => H(s)(7, t.close), ["prevent"]))
          }, ae(l.i18n.past(7)), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[3] || (k[3] = Me((y) => H(s)(30, t.close), ["prevent"]))
          }, ae(l.i18n.past(30)), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[4] || (k[4] = Me((y) => H(u)(t.close), ["prevent"]))
          }, ae(l.i18n.currentMonth), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[5] || (k[5] = Me((y) => H(C)(t.close), ["prevent"]))
          }, ae(l.i18n.pastMonth), 1)
        ])
      ]))
    ])) : he("", !0);
  }
};
function ke(t, l, ...o) {
  if (t in l) {
    let s = l[t];
    return typeof s == "function" ? s(...o) : s;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(l).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, ke), e;
}
var Be = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Be || {}), ur = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(ur || {});
function Ae({ visible: t = !0, features: l = 0, ourProps: o, theirProps: e, ...s }) {
  var u;
  let C = ir(e, o), c = Object.assign(s, { props: C });
  if (t || l & 2 && C.static)
    return qe(c);
  if (l & 1) {
    let p = (u = C.unmount) == null || u ? 0 : 1;
    return ke(p, { [0]() {
      return null;
    }, [1]() {
      return qe({ ...s, props: { ...C, hidden: !0, style: { display: "none" } } });
    } });
  }
  return qe(c);
}
function qe({ props: t, attrs: l, slots: o, slot: e, name: s }) {
  var u;
  let { as: C, ...c } = st(t, ["unmount", "static"]), p = (u = o.default) == null ? void 0 : u.call(o, e), h = {};
  if (e) {
    let k = !1, y = [];
    for (let [b, B] of Object.entries(e))
      typeof B == "boolean" && (k = !0), B === !0 && y.push(b);
    k && (h["data-headlessui-state"] = y.join(" "));
  }
  if (C === "template") {
    if (p = at(p), Object.keys(c).length > 0 || Object.keys(l).length > 0) {
      let [k, ...y] = p != null ? p : [];
      if (!dr(k) || y.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(l)).sort((b, B) => b.localeCompare(B)).map((b) => `  - ${b}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((b) => `  - ${b}`).join(`
`)].join(`
`));
      return Dt(k, Object.assign({}, c, h));
    }
    return Array.isArray(p) && p.length === 1 ? p[0] : p;
  }
  return Ye(C, Object.assign({}, c, h), p);
}
function at(t) {
  return t.flatMap((l) => l.type === we ? at(l.children) : [l]);
}
function ir(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let l = {}, o = {};
  for (let e of t)
    for (let s in e)
      s.startsWith("on") && typeof e[s] == "function" ? (o[s] != null || (o[s] = []), o[s].push(e[s])) : l[s] = e[s];
  if (l.disabled || l["aria-disabled"])
    return Object.assign(l, Object.fromEntries(Object.keys(o).map((e) => [e, void 0])));
  for (let e in o)
    Object.assign(l, { [e](s, ...u) {
      let C = o[e];
      for (let c of C) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        c(s, ...u);
      }
    } });
  return l;
}
function st(t, l = []) {
  let o = Object.assign({}, t);
  for (let e of l)
    e in o && delete o[e];
  return o;
}
function dr(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let cr = 0;
function fr() {
  return ++cr;
}
function Ve() {
  return fr();
}
var be = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(be || {});
function U(t) {
  var l;
  return t == null || t.value == null ? null : (l = t.value.$el) != null ? l : t.value;
}
let lt = Symbol("Context");
var Ee = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Ee || {});
function ut() {
  return ce(lt, null);
}
function vr(t) {
  de(lt, t);
}
function nt(t, l) {
  if (t)
    return t;
  let o = l != null ? l : "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function pr(t, l) {
  let o = te(nt(t.value.type, t.value.as));
  return _t(() => {
    o.value = nt(t.value.type, t.value.as);
  }), $e(() => {
    var e;
    o.value || !U(l) || U(l) instanceof HTMLButtonElement && !((e = U(l)) != null && e.hasAttribute("type")) && (o.value = "button");
  }), o;
}
const Ke = typeof window > "u" || typeof document > "u";
function Ne(t) {
  if (Ke)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let l = U(t);
    if (l)
      return l.ownerDocument;
  }
  return document;
}
let Qe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var De = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(De || {}), mr = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(mr || {}), hr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(hr || {});
function it(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(Qe));
}
var tt = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(tt || {});
function dt(t, l = 0) {
  var o;
  return t === ((o = Ne(t)) == null ? void 0 : o.body) ? !1 : ke(l, { [0]() {
    return t.matches(Qe);
  }, [1]() {
    let e = t;
    for (; e !== null; ) {
      if (e.matches(Qe))
        return !0;
      e = e.parentElement;
    }
    return !1;
  } });
}
let yr = ["textarea", "input"].join(",");
function xr(t) {
  var l, o;
  return (o = (l = t == null ? void 0 : t.matches) == null ? void 0 : l.call(t, yr)) != null ? o : !1;
}
function gr(t, l = (o) => o) {
  return t.slice().sort((o, e) => {
    let s = l(o), u = l(e);
    if (s === null || u === null)
      return 0;
    let C = s.compareDocumentPosition(u);
    return C & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : C & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ce(t, l, o = !0, e = null) {
  var s;
  let u = (s = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? s : document, C = Array.isArray(t) ? o ? gr(t) : t : it(t);
  e = e != null ? e : u.activeElement;
  let c = (() => {
    if (l & 5)
      return 1;
    if (l & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (l & 1)
      return 0;
    if (l & 2)
      return Math.max(0, C.indexOf(e)) - 1;
    if (l & 4)
      return Math.max(0, C.indexOf(e)) + 1;
    if (l & 8)
      return C.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = l & 32 ? { preventScroll: !0 } : {}, k = 0, y = C.length, b;
  do {
    if (k >= y || k + y <= 0)
      return 0;
    let B = p + k;
    if (l & 16)
      B = (B + y) % y;
    else {
      if (B < 0)
        return 3;
      if (B >= y)
        return 1;
    }
    b = C[B], b == null || b.focus(h), k += c;
  } while (b !== u.activeElement);
  return l & 6 && xr(b) && b.select(), b.hasAttribute("tabindex") || b.setAttribute("tabindex", "0"), 2;
}
function Xe(t, l, o) {
  Ke || $e((e) => {
    document.addEventListener(t, l, o), e(() => document.removeEventListener(t, l, o));
  });
}
function br(t, l, o = fe(() => !0)) {
  function e(u, C) {
    if (!o.value || u.defaultPrevented)
      return;
    let c = C(u);
    if (c === null || !c.ownerDocument.documentElement.contains(c))
      return;
    let p = function h(k) {
      return typeof k == "function" ? h(k()) : Array.isArray(k) || k instanceof Set ? k : [k];
    }(t);
    for (let h of p) {
      if (h === null)
        continue;
      let k = h instanceof HTMLElement ? h : U(h);
      if (k != null && k.contains(c))
        return;
    }
    return !dt(c, tt.Loose) && c.tabIndex !== -1 && u.preventDefault(), l(u, c);
  }
  let s = te(null);
  Xe("mousedown", (u) => {
    o.value && (s.value = u.target);
  }, !0), Xe("click", (u) => {
    !s.value || (e(u, () => s.value), s.value = null);
  }, !0), Xe("blur", (u) => e(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ge = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ge || {});
let et = Te({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: l, attrs: o }) {
  return () => {
    let { features: e, ...s } = t, u = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Ae({ ourProps: u, theirProps: s, slot: {}, attrs: o, slots: l, name: "Hidden" });
  };
} });
function kr(t, l, o) {
  Ke || $e((e) => {
    window.addEventListener(t, l, o), e(() => window.removeEventListener(t, l, o));
  });
}
var _e = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(_e || {});
function ct() {
  let t = te(0);
  return kr("keydown", (l) => {
    l.key === "Tab" && (t.value = l.shiftKey ? 1 : 0);
  }), t;
}
function wr(t, l, o, e) {
  Ke || $e((s) => {
    t = t != null ? t : window, t.addEventListener(l, o, e), s(() => t.removeEventListener(l, o, e));
  });
}
var $r = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))($r || {});
let ft = Symbol("PopoverContext");
function Je(t) {
  let l = ce(ft, null);
  if (l === null) {
    let o = new Error(`<${t} /> is missing a parent <${ht.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Je), o;
  }
  return l;
}
let vt = Symbol("PopoverGroupContext");
function pt() {
  return ce(vt, null);
}
let mt = Symbol("PopoverPanelContext");
function Mr() {
  return ce(mt, null);
}
let ht = Te({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: l, attrs: o, expose: e }) {
  var s;
  let u = `headlessui-popover-button-${Ve()}`, C = `headlessui-popover-panel-${Ve()}`, c = te(null);
  e({ el: c, $el: c });
  let p = te(1), h = te(null), k = te(null), y = te(null), b = te(null), B = fe(() => Ne(c)), G = fe(() => {
    if (!U(h) || !U(b))
      return !1;
    for (let V of document.querySelectorAll("body > *"))
      if (Number(V == null ? void 0 : V.contains(U(h))) ^ Number(V == null ? void 0 : V.contains(U(b))))
        return !0;
    return !1;
  }), S = { popoverState: p, buttonId: u, panelId: C, panel: b, button: h, isPortalled: G, beforePanelSentinel: k, afterPanelSentinel: y, togglePopover() {
    p.value = ke(p.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    p.value !== 1 && (p.value = 1);
  }, close(V) {
    S.closePopover();
    let T = (() => V ? V instanceof HTMLElement ? V : V.value instanceof HTMLElement ? U(V) : U(S.button) : U(S.button))();
    T == null || T.focus();
  } };
  de(ft, S), vr(fe(() => ke(p.value, { [0]: Ee.Open, [1]: Ee.Closed })));
  let P = { buttonId: u, panelId: C, close() {
    S.closePopover();
  } }, f = pt(), w = f == null ? void 0 : f.registerPopover;
  function _() {
    var V, T, n, r;
    return (r = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? r : ((V = B.value) == null ? void 0 : V.activeElement) && (((T = U(h)) == null ? void 0 : T.contains(B.value.activeElement)) || ((n = U(b)) == null ? void 0 : n.contains(B.value.activeElement)));
  }
  return $e(() => w == null ? void 0 : w(P)), wr((s = B.value) == null ? void 0 : s.defaultView, "focus", (V) => {
    var T, n;
    p.value === 0 && (_() || !h || !b || (T = U(S.beforePanelSentinel)) != null && T.contains(V.target) || (n = U(S.afterPanelSentinel)) != null && n.contains(V.target) || S.closePopover());
  }, !0), br([h, b], (V, T) => {
    var n;
    S.closePopover(), dt(T, tt.Loose) || (V.preventDefault(), (n = U(h)) == null || n.focus());
  }, fe(() => p.value === 0)), () => {
    let V = { open: p.value === 0, close: S.close };
    return Ae({ theirProps: t, ourProps: { ref: c }, slot: V, slots: l, attrs: o, name: "Popover" });
  };
} }), Sr = Te({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(t, { attrs: l, slots: o, expose: e }) {
  let s = Je("PopoverButton"), u = fe(() => Ne(s.button));
  e({ el: s.button, $el: s.button });
  let C = pt(), c = C == null ? void 0 : C.closeOthers, p = Mr(), h = p === null ? !1 : p === s.panelId, k = te(null), y = `headlessui-focus-sentinel-${Ve()}`;
  h || $e(() => {
    s.button.value = k.value;
  });
  let b = pr(fe(() => ({ as: t.as, type: l.type })), k);
  function B(f) {
    var w, _, V, T, n;
    if (h) {
      if (s.popoverState.value === 1)
        return;
      switch (f.key) {
        case be.Space:
        case be.Enter:
          f.preventDefault(), (_ = (w = f.target).click) == null || _.call(w), s.closePopover(), (V = U(s.button)) == null || V.focus();
          break;
      }
    } else
      switch (f.key) {
        case be.Space:
        case be.Enter:
          f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover();
          break;
        case be.Escape:
          if (s.popoverState.value !== 0)
            return c == null ? void 0 : c(s.buttonId);
          if (!U(s.button) || ((T = u.value) == null ? void 0 : T.activeElement) && !((n = U(s.button)) != null && n.contains(u.value.activeElement)))
            return;
          f.preventDefault(), f.stopPropagation(), s.closePopover();
          break;
      }
  }
  function G(f) {
    h || f.key === be.Space && f.preventDefault();
  }
  function S(f) {
    var w, _;
    t.disabled || (h ? (s.closePopover(), (w = U(s.button)) == null || w.focus()) : (f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover(), (_ = U(s.button)) == null || _.focus()));
  }
  function P(f) {
    f.preventDefault(), f.stopPropagation();
  }
  return () => {
    let f = s.popoverState.value === 0, w = { open: f }, _ = h ? { ref: k, type: b.value, onKeydown: B, onClick: S } : { ref: k, id: s.buttonId, type: b.value, "aria-expanded": t.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": U(s.panel) ? s.panelId : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: B, onKeyup: G, onClick: S, onMousedown: P }, V = ct();
    function T() {
      let n = U(s.panel);
      if (!n)
        return;
      function r() {
        ke(V.value, { [_e.Forwards]: () => Ce(n, De.First), [_e.Backwards]: () => Ce(n, De.Last) });
      }
      r();
    }
    return Ye(we, [Ae({ ourProps: _, theirProps: { ...l, ...t }, slot: w, attrs: l, slots: o, name: "PopoverButton" }), f && !h && s.isPortalled.value && Ye(et, { id: y, features: Ge.Focusable, as: "button", type: "button", onFocus: T })]);
  };
} }), Dr = Te({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: l, slots: o }) {
  let e = Je("PopoverOverlay"), s = `headlessui-popover-overlay-${Ve()}`, u = ut(), C = fe(() => u !== null ? u.value === Ee.Open : e.popoverState.value === 0);
  function c() {
    e.closePopover();
  }
  return () => {
    let p = { open: e.popoverState.value === 0 };
    return Ae({ ourProps: { id: s, "aria-hidden": !0, onClick: c }, theirProps: t, slot: p, attrs: l, slots: o, features: Be.RenderStrategy | Be.Static, visible: C.value, name: "PopoverOverlay" });
  };
} }), _r = Te({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 } }, inheritAttrs: !1, setup(t, { attrs: l, slots: o, expose: e }) {
  let { focus: s } = t, u = Je("PopoverPanel"), C = fe(() => Ne(u.panel)), c = `headlessui-focus-sentinel-before-${Ve()}`, p = `headlessui-focus-sentinel-after-${Ve()}`;
  e({ el: u.panel, $el: u.panel }), de(mt, u.panelId), $e(() => {
    var P, f;
    if (!s || u.popoverState.value !== 0 || !u.panel)
      return;
    let w = (P = C.value) == null ? void 0 : P.activeElement;
    (f = U(u.panel)) != null && f.contains(w) || Ce(U(u.panel), De.First);
  });
  let h = ut(), k = fe(() => h !== null ? h.value === Ee.Open : u.popoverState.value === 0);
  function y(P) {
    var f, w;
    switch (P.key) {
      case be.Escape:
        if (u.popoverState.value !== 0 || !U(u.panel) || C.value && !((f = U(u.panel)) != null && f.contains(C.value.activeElement)))
          return;
        P.preventDefault(), P.stopPropagation(), u.closePopover(), (w = U(u.button)) == null || w.focus();
        break;
    }
  }
  function b(P) {
    var f, w, _, V, T;
    let n = P.relatedTarget;
    !n || !U(u.panel) || (f = U(u.panel)) != null && f.contains(n) || (u.closePopover(), (((_ = (w = U(u.beforePanelSentinel)) == null ? void 0 : w.contains) == null ? void 0 : _.call(w, n)) || ((T = (V = U(u.afterPanelSentinel)) == null ? void 0 : V.contains) == null ? void 0 : T.call(V, n))) && n.focus({ preventScroll: !0 }));
  }
  let B = ct();
  function G() {
    let P = U(u.panel);
    if (!P)
      return;
    function f() {
      ke(B.value, { [_e.Forwards]: () => {
        Ce(P, De.Next);
      }, [_e.Backwards]: () => {
        var w;
        (w = U(u.button)) == null || w.focus({ preventScroll: !0 });
      } });
    }
    f();
  }
  function S() {
    let P = U(u.panel);
    if (!P)
      return;
    function f() {
      ke(B.value, { [_e.Forwards]: () => {
        var w, _;
        let V = U(u.button), T = U(u.panel);
        if (!V)
          return;
        let n = it(), r = n.indexOf(V), E = n.slice(0, r + 1), j = [...n.slice(r + 1), ...E];
        for (let $ of j.slice())
          if (((_ = (w = $ == null ? void 0 : $.id) == null ? void 0 : w.startsWith) == null ? void 0 : _.call(w, "headlessui-focus-sentinel-")) || (T == null ? void 0 : T.contains($))) {
            let z = j.indexOf($);
            z !== -1 && j.splice(z, 1);
          }
        Ce(j, De.First, !1);
      }, [_e.Backwards]: () => Ce(P, De.Previous) });
    }
    f();
  }
  return () => {
    let P = { open: u.popoverState.value === 0, close: u.close }, f = { ref: u.panel, id: u.panelId, onKeydown: y, onFocusout: s && u.popoverState.value === 0 ? b : void 0, tabIndex: -1 };
    return Ae({ ourProps: f, theirProps: { ...l, ...st(t, ["focus"]) }, attrs: l, slot: P, slots: { ...o, default: (...w) => {
      var _;
      return [Ye(we, [k.value && u.isPortalled.value && Ye(et, { id: c, ref: u.beforePanelSentinel, features: Ge.Focusable, as: "button", type: "button", onFocus: G }), (_ = o.default) == null ? void 0 : _.call(o, ...w), k.value && u.isPortalled.value && Ye(et, { id: p, ref: u.afterPanelSentinel, features: Ge.Focusable, as: "button", type: "button", onFocus: S })])];
    } }, features: Be.RenderStrategy | Be.Static, visible: k.value, name: "PopoverPanel" });
  };
} });
Te({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: l, slots: o, expose: e }) {
  let s = te(null), u = te([]), C = fe(() => Ne(s));
  e({ el: s, $el: s });
  function c(y) {
    let b = u.value.indexOf(y);
    b !== -1 && u.value.splice(b, 1);
  }
  function p(y) {
    return u.value.push(y), () => {
      c(y);
    };
  }
  function h() {
    var y;
    let b = C.value;
    if (!b)
      return !1;
    let B = b.activeElement;
    return (y = U(s)) != null && y.contains(B) ? !0 : u.value.some((G) => {
      var S, P;
      return ((S = b.getElementById(G.buttonId)) == null ? void 0 : S.contains(B)) || ((P = b.getElementById(G.panelId)) == null ? void 0 : P.contains(B));
    });
  }
  function k(y) {
    for (let b of u.value)
      b.buttonId !== y && b.close();
  }
  return de(vt, { registerPopover: p, unregisterPopover: c, isFocusWithinPopoverGroup: h, closeOthers: k }), () => Ae({ ourProps: { ref: s }, theirProps: t, slot: {}, attrs: l, slots: o, name: "PopoverGroup" });
} });
var Oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yt = { exports: {} };
(function(t, l) {
  (function(o, e) {
    t.exports = e();
  })(Oe, function() {
    var o = 1e3, e = 6e4, s = 36e5, u = "millisecond", C = "second", c = "minute", p = "hour", h = "day", k = "week", y = "month", b = "quarter", B = "year", G = "date", S = "Invalid Date", P = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var v = ["th", "st", "nd", "rd"], M = O % 100;
      return "[" + O + (v[(M - 20) % 10] || v[M] || v[0]) + "]";
    } }, _ = function(O, v, M) {
      var L = String(O);
      return !L || L.length >= v ? O : "" + Array(v + 1 - L.length).join(M) + O;
    }, V = { s: _, z: function(O) {
      var v = -O.utcOffset(), M = Math.abs(v), L = Math.floor(M / 60), D = M % 60;
      return (v <= 0 ? "+" : "-") + _(L, 2, "0") + ":" + _(D, 2, "0");
    }, m: function O(v, M) {
      if (v.date() < M.date())
        return -O(M, v);
      var L = 12 * (M.year() - v.year()) + (M.month() - v.month()), D = v.clone().add(L, y), F = M - D < 0, A = v.clone().add(L + (F ? -1 : 1), y);
      return +(-(L + (M - D) / (F ? D - A : A - D)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: y, y: B, w: k, d: h, D: G, h: p, m: c, s: C, ms: u, Q: b }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, T = "en", n = {};
    n[T] = w;
    var r = function(O) {
      return O instanceof z;
    }, E = function O(v, M, L) {
      var D;
      if (!v)
        return T;
      if (typeof v == "string") {
        var F = v.toLowerCase();
        n[F] && (D = F), M && (n[F] = M, D = F);
        var A = v.split("-");
        if (!D && A.length > 1)
          return O(A[0]);
      } else {
        var W = v.name;
        n[W] = v, D = W;
      }
      return !L && D && (T = D), D || !L && T;
    }, j = function(O, v) {
      if (r(O))
        return O.clone();
      var M = typeof v == "object" ? v : {};
      return M.date = O, M.args = arguments, new z(M);
    }, $ = V;
    $.l = E, $.i = r, $.w = function(O, v) {
      return j(O, { locale: v.$L, utc: v.$u, x: v.$x, $offset: v.$offset });
    };
    var z = function() {
      function O(M) {
        this.$L = E(M.locale, null, !0), this.parse(M);
      }
      var v = O.prototype;
      return v.parse = function(M) {
        this.$d = function(L) {
          var D = L.date, F = L.utc;
          if (D === null)
            return new Date(NaN);
          if ($.u(D))
            return new Date();
          if (D instanceof Date)
            return new Date(D);
          if (typeof D == "string" && !/Z$/i.test(D)) {
            var A = D.match(P);
            if (A) {
              var W = A[2] - 1 || 0, q = (A[7] || "0").substring(0, 3);
              return F ? new Date(Date.UTC(A[1], W, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, q)) : new Date(A[1], W, A[3] || 1, A[4] || 0, A[5] || 0, A[6] || 0, q);
            }
          }
          return new Date(D);
        }(M), this.$x = M.x || {}, this.init();
      }, v.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, v.$utils = function() {
        return $;
      }, v.isValid = function() {
        return this.$d.toString() !== S;
      }, v.isSame = function(M, L) {
        var D = j(M);
        return this.startOf(L) <= D && D <= this.endOf(L);
      }, v.isAfter = function(M, L) {
        return j(M) < this.startOf(L);
      }, v.isBefore = function(M, L) {
        return this.endOf(L) < j(M);
      }, v.$g = function(M, L, D) {
        return $.u(M) ? this[L] : this.set(D, M);
      }, v.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, v.valueOf = function() {
        return this.$d.getTime();
      }, v.startOf = function(M, L) {
        var D = this, F = !!$.u(L) || L, A = $.p(M), W = function(me, ne) {
          var ue = $.w(D.$u ? Date.UTC(D.$y, ne, me) : new Date(D.$y, ne, me), D);
          return F ? ue : ue.endOf(h);
        }, q = function(me, ne) {
          return $.w(D.toDate()[me].apply(D.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), D);
        }, X = this.$W, re = this.$M, pe = this.$D, ve = "set" + (this.$u ? "UTC" : "");
        switch (A) {
          case B:
            return F ? W(1, 0) : W(31, 11);
          case y:
            return F ? W(1, re) : W(0, re + 1);
          case k:
            var le = this.$locale().weekStart || 0, ye = (X < le ? X + 7 : X) - le;
            return W(F ? pe - ye : pe + (6 - ye), re);
          case h:
          case G:
            return q(ve + "Hours", 0);
          case p:
            return q(ve + "Minutes", 1);
          case c:
            return q(ve + "Seconds", 2);
          case C:
            return q(ve + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, v.endOf = function(M) {
        return this.startOf(M, !1);
      }, v.$set = function(M, L) {
        var D, F = $.p(M), A = "set" + (this.$u ? "UTC" : ""), W = (D = {}, D[h] = A + "Date", D[G] = A + "Date", D[y] = A + "Month", D[B] = A + "FullYear", D[p] = A + "Hours", D[c] = A + "Minutes", D[C] = A + "Seconds", D[u] = A + "Milliseconds", D)[F], q = F === h ? this.$D + (L - this.$W) : L;
        if (F === y || F === B) {
          var X = this.clone().set(G, 1);
          X.$d[W](q), X.init(), this.$d = X.set(G, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          W && this.$d[W](q);
        return this.init(), this;
      }, v.set = function(M, L) {
        return this.clone().$set(M, L);
      }, v.get = function(M) {
        return this[$.p(M)]();
      }, v.add = function(M, L) {
        var D, F = this;
        M = Number(M);
        var A = $.p(L), W = function(re) {
          var pe = j(F);
          return $.w(pe.date(pe.date() + Math.round(re * M)), F);
        };
        if (A === y)
          return this.set(y, this.$M + M);
        if (A === B)
          return this.set(B, this.$y + M);
        if (A === h)
          return W(1);
        if (A === k)
          return W(7);
        var q = (D = {}, D[c] = e, D[p] = s, D[C] = o, D)[A] || 1, X = this.$d.getTime() + M * q;
        return $.w(X, this);
      }, v.subtract = function(M, L) {
        return this.add(-1 * M, L);
      }, v.format = function(M) {
        var L = this, D = this.$locale();
        if (!this.isValid())
          return D.invalidDate || S;
        var F = M || "YYYY-MM-DDTHH:mm:ssZ", A = $.z(this), W = this.$H, q = this.$m, X = this.$M, re = D.weekdays, pe = D.months, ve = function(ne, ue, xe, ge) {
          return ne && (ne[ue] || ne(L, F)) || xe[ue].slice(0, ge);
        }, le = function(ne) {
          return $.s(W % 12 || 12, ne, "0");
        }, ye = D.meridiem || function(ne, ue, xe) {
          var ge = ne < 12 ? "AM" : "PM";
          return xe ? ge.toLowerCase() : ge;
        }, me = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: X + 1, MM: $.s(X + 1, 2, "0"), MMM: ve(D.monthsShort, X, pe, 3), MMMM: ve(pe, X), D: this.$D, DD: $.s(this.$D, 2, "0"), d: String(this.$W), dd: ve(D.weekdaysMin, this.$W, re, 2), ddd: ve(D.weekdaysShort, this.$W, re, 3), dddd: re[this.$W], H: String(W), HH: $.s(W, 2, "0"), h: le(1), hh: le(2), a: ye(W, q, !0), A: ye(W, q, !1), m: String(q), mm: $.s(q, 2, "0"), s: String(this.$s), ss: $.s(this.$s, 2, "0"), SSS: $.s(this.$ms, 3, "0"), Z: A };
        return F.replace(f, function(ne, ue) {
          return ue || me[ne] || A.replace(":", "");
        });
      }, v.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, v.diff = function(M, L, D) {
        var F, A = $.p(L), W = j(M), q = (W.utcOffset() - this.utcOffset()) * e, X = this - W, re = $.m(this, W);
        return re = (F = {}, F[B] = re / 12, F[y] = re, F[b] = re / 3, F[k] = (X - q) / 6048e5, F[h] = (X - q) / 864e5, F[p] = X / s, F[c] = X / e, F[C] = X / o, F)[A] || X, D ? re : $.a(re);
      }, v.daysInMonth = function() {
        return this.endOf(y).$D;
      }, v.$locale = function() {
        return n[this.$L];
      }, v.locale = function(M, L) {
        if (!M)
          return this.$L;
        var D = this.clone(), F = E(M, L, !0);
        return F && (D.$L = F), D;
      }, v.clone = function() {
        return $.w(this.$d, this);
      }, v.toDate = function() {
        return new Date(this.valueOf());
      }, v.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, v.toISOString = function() {
        return this.$d.toISOString();
      }, v.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), R = z.prototype;
    return j.prototype = R, [["$ms", u], ["$s", C], ["$m", c], ["$H", p], ["$W", h], ["$M", y], ["$y", B], ["$D", G]].forEach(function(O) {
      R[O[1]] = function(v) {
        return this.$g(v, O[0], O[1]);
      };
    }), j.extend = function(O, v) {
      return O.$i || (O(v, z, j), O.$i = !0), j;
    }, j.locale = E, j.isDayjs = r, j.unix = function(O) {
      return j(1e3 * O);
    }, j.en = n[T], j.Ls = n, j.p = {}, j;
  });
})(yt);
const d = yt.exports;
var xt = { exports: {} };
(function(t, l) {
  (function(o, e) {
    t.exports = e();
  })(Oe, function() {
    return function(o, e, s) {
      var u = e.prototype, C = function(y) {
        return y && (y.indexOf ? y : y.s);
      }, c = function(y, b, B, G, S) {
        var P = y.name ? y : y.$locale(), f = C(P[b]), w = C(P[B]), _ = f || w.map(function(T) {
          return T.slice(0, G);
        });
        if (!S)
          return _;
        var V = P.weekStart;
        return _.map(function(T, n) {
          return _[(n + (V || 0)) % 7];
        });
      }, p = function() {
        return s.Ls[s.locale()];
      }, h = function(y, b) {
        return y.formats[b] || function(B) {
          return B.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, S, P) {
            return S || P.slice(1);
          });
        }(y.formats[b.toUpperCase()]);
      }, k = function() {
        var y = this;
        return { months: function(b) {
          return b ? b.format("MMMM") : c(y, "months");
        }, monthsShort: function(b) {
          return b ? b.format("MMM") : c(y, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return y.$locale().weekStart || 0;
        }, weekdays: function(b) {
          return b ? b.format("dddd") : c(y, "weekdays");
        }, weekdaysMin: function(b) {
          return b ? b.format("dd") : c(y, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(b) {
          return b ? b.format("ddd") : c(y, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(b) {
          return h(y.$locale(), b);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      u.localeData = function() {
        return k.bind(this)();
      }, s.localeData = function() {
        var y = p();
        return { firstDayOfWeek: function() {
          return y.weekStart || 0;
        }, weekdays: function() {
          return s.weekdays();
        }, weekdaysShort: function() {
          return s.weekdaysShort();
        }, weekdaysMin: function() {
          return s.weekdaysMin();
        }, months: function() {
          return s.months();
        }, monthsShort: function() {
          return s.monthsShort();
        }, longDateFormat: function(b) {
          return h(y, b);
        }, meridiem: y.meridiem, ordinal: y.ordinal };
      }, s.months = function() {
        return c(p(), "months");
      }, s.monthsShort = function() {
        return c(p(), "monthsShort", "months", 3);
      }, s.weekdays = function(y) {
        return c(p(), "weekdays", null, null, y);
      }, s.weekdaysShort = function(y) {
        return c(p(), "weekdaysShort", "weekdays", 3, y);
      }, s.weekdaysMin = function(y) {
        return c(p(), "weekdaysMin", "weekdays", 2, y);
      };
    };
  });
})(xt);
const Or = xt.exports;
var gt = { exports: {} };
(function(t, l) {
  (function(o, e) {
    t.exports = e();
  })(Oe, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, s, u) {
      var C = s.prototype, c = C.format;
      u.en.formats = o, C.format = function(p) {
        p === void 0 && (p = "YYYY-MM-DDTHH:mm:ssZ");
        var h = this.$locale().formats, k = function(y, b) {
          return y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(B, G, S) {
            var P = S && S.toUpperCase();
            return G || b[S] || o[S] || b[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(f, w, _) {
              return w || _.slice(1);
            });
          });
        }(p, h === void 0 ? {} : h);
        return c.call(this, k);
      };
    };
  });
})(gt);
const Pr = gt.exports;
var bt = { exports: {} };
(function(t, l) {
  (function(o, e) {
    t.exports = e();
  })(Oe, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, u = /\d\d?/, C = /\d*[^-_:/,()\s\d]+/, c = {}, p = function(S) {
      return (S = +S) + (S > 68 ? 1900 : 2e3);
    }, h = function(S) {
      return function(P) {
        this[S] = +P;
      };
    }, k = [/[+-]\d\d:?(\d\d)?|Z/, function(S) {
      (this.zone || (this.zone = {})).offset = function(P) {
        if (!P || P === "Z")
          return 0;
        var f = P.match(/([+-]|\d\d)/g), w = 60 * f[1] + (+f[2] || 0);
        return w === 0 ? 0 : f[0] === "+" ? -w : w;
      }(S);
    }], y = function(S) {
      var P = c[S];
      return P && (P.indexOf ? P : P.s.concat(P.f));
    }, b = function(S, P) {
      var f, w = c.meridiem;
      if (w) {
        for (var _ = 1; _ <= 24; _ += 1)
          if (S.indexOf(w(_, 0, P)) > -1) {
            f = _ > 12;
            break;
          }
      } else
        f = S === (P ? "pm" : "PM");
      return f;
    }, B = { A: [C, function(S) {
      this.afternoon = b(S, !1);
    }], a: [C, function(S) {
      this.afternoon = b(S, !0);
    }], S: [/\d/, function(S) {
      this.milliseconds = 100 * +S;
    }], SS: [s, function(S) {
      this.milliseconds = 10 * +S;
    }], SSS: [/\d{3}/, function(S) {
      this.milliseconds = +S;
    }], s: [u, h("seconds")], ss: [u, h("seconds")], m: [u, h("minutes")], mm: [u, h("minutes")], H: [u, h("hours")], h: [u, h("hours")], HH: [u, h("hours")], hh: [u, h("hours")], D: [u, h("day")], DD: [s, h("day")], Do: [C, function(S) {
      var P = c.ordinal, f = S.match(/\d+/);
      if (this.day = f[0], P)
        for (var w = 1; w <= 31; w += 1)
          P(w).replace(/\[|\]/g, "") === S && (this.day = w);
    }], M: [u, h("month")], MM: [s, h("month")], MMM: [C, function(S) {
      var P = y("months"), f = (y("monthsShort") || P.map(function(w) {
        return w.slice(0, 3);
      })).indexOf(S) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [C, function(S) {
      var P = y("months").indexOf(S) + 1;
      if (P < 1)
        throw new Error();
      this.month = P % 12 || P;
    }], Y: [/[+-]?\d+/, h("year")], YY: [s, function(S) {
      this.year = p(S);
    }], YYYY: [/\d{4}/, h("year")], Z: k, ZZ: k };
    function G(S) {
      var P, f;
      P = S, f = c && c.formats;
      for (var w = (S = P.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(j, $, z) {
        var R = z && z.toUpperCase();
        return $ || f[z] || o[z] || f[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(O, v, M) {
          return v || M.slice(1);
        });
      })).match(e), _ = w.length, V = 0; V < _; V += 1) {
        var T = w[V], n = B[T], r = n && n[0], E = n && n[1];
        w[V] = E ? { regex: r, parser: E } : T.replace(/^\[|\]$/g, "");
      }
      return function(j) {
        for (var $ = {}, z = 0, R = 0; z < _; z += 1) {
          var O = w[z];
          if (typeof O == "string")
            R += O.length;
          else {
            var v = O.regex, M = O.parser, L = j.slice(R), D = v.exec(L)[0];
            M.call($, D), j = j.replace(D, "");
          }
        }
        return function(F) {
          var A = F.afternoon;
          if (A !== void 0) {
            var W = F.hours;
            A ? W < 12 && (F.hours += 12) : W === 12 && (F.hours = 0), delete F.afternoon;
          }
        }($), $;
      };
    }
    return function(S, P, f) {
      f.p.customParseFormat = !0, S && S.parseTwoDigitYear && (p = S.parseTwoDigitYear);
      var w = P.prototype, _ = w.parse;
      w.parse = function(V) {
        var T = V.date, n = V.utc, r = V.args;
        this.$u = n;
        var E = r[1];
        if (typeof E == "string") {
          var j = r[2] === !0, $ = r[3] === !0, z = j || $, R = r[2];
          $ && (R = r[2]), c = this.$locale(), !j && R && (c = f.Ls[R]), this.$d = function(L, D, F) {
            try {
              if (["x", "X"].indexOf(D) > -1)
                return new Date((D === "X" ? 1e3 : 1) * L);
              var A = G(D)(L), W = A.year, q = A.month, X = A.day, re = A.hours, pe = A.minutes, ve = A.seconds, le = A.milliseconds, ye = A.zone, me = new Date(), ne = X || (W || q ? 1 : me.getDate()), ue = W || me.getFullYear(), xe = 0;
              W && !q || (xe = q > 0 ? q - 1 : me.getMonth());
              var ge = re || 0, je = pe || 0, Le = ve || 0, i = le || 0;
              return ye ? new Date(Date.UTC(ue, xe, ne, ge, je, Le, i + 60 * ye.offset * 1e3)) : F ? new Date(Date.UTC(ue, xe, ne, ge, je, Le, i)) : new Date(ue, xe, ne, ge, je, Le, i);
            } catch {
              return new Date("");
            }
          }(T, E, n), this.init(), R && R !== !0 && (this.$L = this.locale(R).$L), z && T != this.format(E) && (this.$d = new Date("")), c = {};
        } else if (E instanceof Array)
          for (var O = E.length, v = 1; v <= O; v += 1) {
            r[1] = E[v - 1];
            var M = f.apply(this, r);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            v === O && (this.$d = new Date(""));
          }
        else
          _.call(this, V);
      };
    };
  });
})(bt);
const Cr = bt.exports;
var kt = { exports: {} };
(function(t, l) {
  (function(o, e) {
    t.exports = e();
  })(Oe, function() {
    return function(o, e, s) {
      e.prototype.isToday = function() {
        var u = "YYYY-MM-DD", C = s();
        return this.format(u) === C.format(u);
      };
    };
  });
})(kt);
const Yr = kt.exports;
var wt = { exports: {} };
(function(t, l) {
  (function(o, e) {
    t.exports = e();
  })(Oe, function() {
    return function(o, e, s) {
      e.prototype.isBetween = function(u, C, c, p) {
        var h = s(u), k = s(C), y = (p = p || "()")[0] === "(", b = p[1] === ")";
        return (y ? this.isAfter(h, c) : !this.isBefore(h, c)) && (b ? this.isBefore(k, c) : !this.isAfter(k, c)) || (y ? this.isBefore(h, c) : !this.isAfter(h, c)) && (b ? this.isAfter(k, c) : !this.isBefore(k, c));
      };
    };
  });
})(wt);
const Vr = wt.exports;
var $t = { exports: {} };
(function(t, l) {
  (function(o, e) {
    t.exports = e();
  })(Oe, function() {
    var o, e, s = 1e3, u = 6e4, C = 36e5, c = 864e5, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, k = 2592e6, y = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, b = { years: h, months: k, days: c, hours: C, minutes: u, seconds: s, milliseconds: 1, weeks: 6048e5 }, B = function(T) {
      return T instanceof V;
    }, G = function(T, n, r) {
      return new V(T, r, n.$l);
    }, S = function(T) {
      return e.p(T) + "s";
    }, P = function(T) {
      return T < 0;
    }, f = function(T) {
      return P(T) ? Math.ceil(T) : Math.floor(T);
    }, w = function(T) {
      return Math.abs(T);
    }, _ = function(T, n) {
      return T ? P(T) ? { negative: !0, format: "" + w(T) + n } : { negative: !1, format: "" + T + n } : { negative: !1, format: "" };
    }, V = function() {
      function T(r, E, j) {
        var $ = this;
        if (this.$d = {}, this.$l = j, r === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return G(r * b[S(E)], this);
        if (typeof r == "number")
          return this.$ms = r, this.parseFromMilliseconds(), this;
        if (typeof r == "object")
          return Object.keys(r).forEach(function(O) {
            $.$d[S(O)] = r[O];
          }), this.calMilliseconds(), this;
        if (typeof r == "string") {
          var z = r.match(y);
          if (z) {
            var R = z.slice(2).map(function(O) {
              return O != null ? Number(O) : 0;
            });
            return this.$d.years = R[0], this.$d.months = R[1], this.$d.weeks = R[2], this.$d.days = R[3], this.$d.hours = R[4], this.$d.minutes = R[5], this.$d.seconds = R[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var n = T.prototype;
      return n.calMilliseconds = function() {
        var r = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, j) {
          return E + (r.$d[j] || 0) * b[j];
        }, 0);
      }, n.parseFromMilliseconds = function() {
        var r = this.$ms;
        this.$d.years = f(r / h), r %= h, this.$d.months = f(r / k), r %= k, this.$d.days = f(r / c), r %= c, this.$d.hours = f(r / C), r %= C, this.$d.minutes = f(r / u), r %= u, this.$d.seconds = f(r / s), r %= s, this.$d.milliseconds = r;
      }, n.toISOString = function() {
        var r = _(this.$d.years, "Y"), E = _(this.$d.months, "M"), j = +this.$d.days || 0;
        this.$d.weeks && (j += 7 * this.$d.weeks);
        var $ = _(j, "D"), z = _(this.$d.hours, "H"), R = _(this.$d.minutes, "M"), O = this.$d.seconds || 0;
        this.$d.milliseconds && (O += this.$d.milliseconds / 1e3);
        var v = _(O, "S"), M = r.negative || E.negative || $.negative || z.negative || R.negative || v.negative, L = z.format || R.format || v.format ? "T" : "", D = (M ? "-" : "") + "P" + r.format + E.format + $.format + L + z.format + R.format + v.format;
        return D === "P" || D === "-P" ? "P0D" : D;
      }, n.toJSON = function() {
        return this.toISOString();
      }, n.format = function(r) {
        var E = r || "YYYY-MM-DDTHH:mm:ss", j = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return E.replace(p, function($, z) {
          return z || String(j[$]);
        });
      }, n.as = function(r) {
        return this.$ms / b[S(r)];
      }, n.get = function(r) {
        var E = this.$ms, j = S(r);
        return j === "milliseconds" ? E %= 1e3 : E = j === "weeks" ? f(E / b[j]) : this.$d[j], E === 0 ? 0 : E;
      }, n.add = function(r, E, j) {
        var $;
        return $ = E ? r * b[S(E)] : B(r) ? r.$ms : G(r, this).$ms, G(this.$ms + $ * (j ? -1 : 1), this);
      }, n.subtract = function(r, E) {
        return this.add(r, E, !0);
      }, n.locale = function(r) {
        var E = this.clone();
        return E.$l = r, E;
      }, n.clone = function() {
        return G(this.$ms, this);
      }, n.humanize = function(r) {
        return o().add(this.$ms, "ms").locale(this.$l).fromNow(!r);
      }, n.milliseconds = function() {
        return this.get("milliseconds");
      }, n.asMilliseconds = function() {
        return this.as("milliseconds");
      }, n.seconds = function() {
        return this.get("seconds");
      }, n.asSeconds = function() {
        return this.as("seconds");
      }, n.minutes = function() {
        return this.get("minutes");
      }, n.asMinutes = function() {
        return this.as("minutes");
      }, n.hours = function() {
        return this.get("hours");
      }, n.asHours = function() {
        return this.as("hours");
      }, n.days = function() {
        return this.get("days");
      }, n.asDays = function() {
        return this.as("days");
      }, n.weeks = function() {
        return this.get("weeks");
      }, n.asWeeks = function() {
        return this.as("weeks");
      }, n.months = function() {
        return this.get("months");
      }, n.asMonths = function() {
        return this.as("months");
      }, n.years = function() {
        return this.get("years");
      }, n.asYears = function() {
        return this.as("years");
      }, T;
    }();
    return function(T, n, r) {
      o = r, e = r().$utils(), r.duration = function($, z) {
        var R = r.locale();
        return G($, { $l: R }, z);
      }, r.isDuration = B;
      var E = n.prototype.add, j = n.prototype.subtract;
      n.prototype.add = function($, z) {
        return B($) && ($ = $.asMilliseconds()), E.bind(this)($, z);
      }, n.prototype.subtract = function($, z) {
        return B($) && ($ = $.asMilliseconds()), j.bind(this)($, z);
      };
    };
  });
})($t);
const Tr = $t.exports;
function Ar() {
  const t = (c) => {
    const p = [], h = c.localeData().firstDayOfWeek();
    for (let k = 0; k <= c.date(0 - h).day(); k++)
      p.push(c.date(0).subtract(k, "day"));
    return p.sort((k, y) => k.date() - y.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (p, h) => c.date(h + 1)
    ),
    useNextDate: (c) => {
      const p = [];
      for (let h = 1; h <= 42 - (t(c).length + c.daysInMonth()); h++)
        p.push(c.date(h).month(c.month()).add(1, "month"));
      return p;
    },
    useDisableDate: (c, { disableDate: p }) => typeof p == "function" ? p(c.toDate()) : !1,
    useBetweenRange: (c, { previous: p, next: h }) => {
      let k;
      return p.isAfter(h, "date") ? k = "(]" : k = "[)", !!(c.isBetween(p, h, "date", k) && !c.off);
    },
    useToValueFromString: (c, { formatter: p }) => c.format(p.date),
    useToValueFromArray: ({ previous: c, next: p }, { formatter: h, separator: k }) => `${c.format(h.date)}${k}${p.format(h.date)}`
  };
}
function jr() {
  return {
    useVisibleViewport: (l) => {
      if (l) {
        const { right: o } = l.getBoundingClientRect(), e = window.innerWidth || document.documentElement.clientWidth;
        return o > e;
      } else
        return null;
    }
  };
}
const Lr = ["placeholder"], Br = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Er = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Fr = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Nr = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Hr = { class: "flex flex-wrap lg:flex-nowrap" }, Rr = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Ir = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Ur = /* @__PURE__ */ Y("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Wr = [
  Ur
], zr = { class: "px-0.5 sm:px-2" }, Zr = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Gr = { class: "px-0.5 sm:px-2" }, Kr = { key: 0 }, Jr = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, qr = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Xr = ["disabled", "onClick", "textContent"], Qr = ["onClick", "textContent"], en = {
  key: 1,
  class: "sm:hidden"
}, tn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, rn = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, nn = ["onClick", "textContent"], on = {
  key: 1,
  class: "flex"
}, an = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, sn = { class: "flex flex-wrap lg:flex-nowrap" }, ln = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, un = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, dn = /* @__PURE__ */ Y("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), cn = [
  dn
], fn = { class: "px-0.5 sm:px-2" }, vn = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, pn = { class: "px-0.5 sm:px-2" }, mn = { key: 0 }, hn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, yn = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, xn = ["disabled", "textContent"], gn = {
  __name: "VueTailwindDatePicker",
  props: {
    noInput: Boolean,
    overlay: Boolean,
    asSingle: Boolean,
    useRange: Boolean,
    placeholder: {
      type: [Boolean, String],
      default: !1
    },
    i18n: {
      type: String,
      default: "en"
    },
    inputClasses: {
      type: String,
      default: ""
    },
    disableInRange: {
      type: Boolean,
      default: !0
    },
    disableDate: {
      type: [Boolean, Array, Function],
      default: !1
    },
    autoApply: {
      type: Boolean,
      default: !0
    },
    shortcuts: {
      type: [Boolean, Function],
      default: !0
    },
    separator: {
      type: String,
      default: " ~ "
    },
    formatter: {
      type: Object,
      default: () => ({
        date: "YYYY-MM-DD HH:mm:ss",
        month: "MMM"
      })
    },
    modelValue: {
      type: [Array, Object, String],
      default: () => []
    },
    startFrom: {
      type: [Object, String],
      default: () => new Date()
    },
    weekdaysSize: {
      type: String,
      default: "short"
    },
    options: {
      type: Object,
      default: () => ({
        shortcuts: {
          today: "Today",
          yesterday: "Yesterday",
          past: (t) => `Last ${t} Days`,
          currentMonth: "This Month",
          pastMonth: "Last Month"
        },
        footer: {
          apply: "Apply",
          cancel: "Cancel"
        }
      })
    }
  },
  emits: [
    "update:modelValue",
    "select:month",
    "select:year",
    "select:right:month",
    "select:right:year",
    "click:prev",
    "click:next",
    "click:right:prev",
    "click:right:next"
  ],
  setup(t, { expose: l, emit: o }) {
    const e = t, {
      useCurrentDate: s,
      useDisableDate: u,
      useBetweenRange: C,
      useNextDate: c,
      usePreviousDate: p,
      useToValueFromArray: h,
      useToValueFromString: k
    } = Ar(), { useVisibleViewport: y } = jr();
    d.extend(Or), d.extend(Pr), d.extend(Cr), d.extend(Yr), d.extend(Vr), d.extend(Tr);
    const b = te(null), B = te(null), G = te(null), S = te(""), P = te(null), f = te(""), w = te([]), _ = te([]), V = te(null), T = te(null), n = Ot({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), r = te({
      previous: d(),
      next: d().add(1, "month"),
      year: {
        previous: d().year(),
        next: d().year()
      },
      weeks: e.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort(),
      months: e.formatter.month === "MMM" ? d.monthsShort() : d.months()
    }), E = fe(() => r.value.weeks), j = fe(() => r.value.months), $ = fe(() => {
      const { previous: i, next: m, year: x } = H(r);
      return {
        previous: {
          date: () => p(i).concat(s(i)).concat(c(i)).map((a) => (a.today = a.isToday(), a.active = i.month() === a.month(), a.off = i.month() !== a.month(), a.sunday = a.day() === 0, a.disabled = u(a, e) && !M(a), a.inRange = () => {
            if (e.asSingle && !e.useRange)
              return i.month() !== a.month();
          }, a.hovered = () => v() && w.value.length > 1 ? (a.isBetween(w.value[0], w.value[1], "date", "()") || a.isBetween(w.value[1], w.value[0], "date", "(]")) && i.month() === a.month() : !1, a.duration = () => !1, a)),
          month: i && i.format(e.formatter.month),
          year: i && i.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (a, g) => x.previous + g
          ),
          onPrevious: () => {
            r.value.previous = i.subtract(1, "month"), o("click:prev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = i.add(1, "month"), i.diff(m, "month") === -1 && (r.value.next = m.add(1, "month")), o("click:next", r.value.previous);
          },
          onPreviousYear: () => {
            r.value.year.previous = r.value.year.previous - 12;
          },
          onNextYear: () => {
            r.value.year.previous = r.value.year.previous + 12;
          },
          openMonth: () => {
            n.previous.month = !n.previous.month, n.previous.year = !1, n.previous.calendar = !n.previous.month;
          },
          setMount: (a) => {
            r.value.previous = i.month(a), n.previous.month = !n.previous.month, n.previous.year = !1, n.previous.calendar = !n.previous.month, o("select:month", r.value.previous), He(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            n.previous.year = !n.previous.year, n.previous.month = !1, n.previous.calendar = !n.previous.year;
          },
          setYear: (a, g) => {
            g || (r.value.previous = i.year(a), n.previous.year = !n.previous.year, n.previous.calendar = !n.previous.year, o("select:year", r.value.previous), He(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        },
        next: {
          date: () => p(m).concat(s(m)).concat(c(m)).map((a) => (a.today = a.isToday(), a.active = m.month() === a.month(), a.off = m.month() !== a.month(), a.sunday = a.day() === 0, a.disabled = u(a, e) && !M(a), a.inRange = () => {
            if (e.asSingle && !e.useRange)
              return m.month() !== a.month();
          }, a.hovered = () => w.value.length > 1 ? (a.isBetween(w.value[0], w.value[1], "date", "()") || a.isBetween(w.value[1], w.value[0], "date", "(]")) && m.month() === a.month() : !1, a.duration = () => !1, a)),
          month: m && m.format(e.formatter.month),
          year: m && m.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (a, g) => x.next + g
          ),
          onPrevious: () => {
            r.value.next = m.subtract(1, "month"), m.diff(i, "month") === 1 && (r.value.previous = i.subtract(1, "month")), o("click:right:prev", r.value.next);
          },
          onNext: () => {
            r.value.next = m.add(1, "month"), o("click:right:next", r.value.next);
          },
          onPreviousYear: () => {
            r.value.year.next = r.value.year.next - 12;
          },
          onNextYear: () => {
            r.value.year.next = r.value.year.next + 12;
          },
          openMonth: () => {
            n.next.month = !n.next.month, n.next.year = !1, n.next.calendar = !n.next.month;
          },
          setMount: (a) => {
            r.value.next = m.month(a), n.next.month = !n.next.month, n.next.year = !1, n.next.calendar = !n.next.month, o("select:right:month", r.value.next), He(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            n.next.year = !n.next.year, n.next.month = !1, n.next.calendar = !n.next.year;
          },
          setYear: (a, g) => {
            g && (r.value.next = m.year(a), n.next.year = !n.next.year, n.next.month = !1, n.next.calendar = !n.next.year, o("select:right:year", r.value.next), He(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        }
      };
    }), z = te(!1);
    setTimeout(() => {
      z.value = !0;
    }, 250);
    const R = () => Array.isArray(e.modelValue), O = () => typeof e.modelValue == "object", v = () => !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle), M = (i) => {
      if (e.disableInRange || f.value === "")
        return !1;
      let m, x;
      if (R()) {
        const [a, g] = e.modelValue;
        m = a, x = g;
      } else if (O()) {
        if (e.modelValue) {
          const [a, g] = Object.values(e.modelValue);
          m = a, x = g;
        }
      } else {
        const [a, g] = e.modelValue.split(e.separator);
        m = a, x = g;
      }
      return i.isBetween(d(m, e.formatter.date, !0), d(x, e.formatter.date, !0), "date", "[]");
    }, L = () => {
      V.value = null, T.value = null, w.value = [], P.value = null;
    }, D = () => {
      if (f.value = "", R())
        o("update:modelValue", []);
      else if (O()) {
        const i = {}, [m, x] = Object.keys(e.modelValue);
        i[m] = "", i[x] = "", o("update:modelValue", i);
      } else
        o("update:modelValue", "");
      _.value = [], B.value && B.value.focus();
    };
    l({ clearPicker: D });
    const F = () => {
      if (v()) {
        const [i, m] = f.value.split(e.separator), [x, a] = [d(i, e.formatter.date, !0), d(m, e.formatter.date, !0)];
        if (x.isValid() && a.isValid())
          if (A(x), A(a), R())
            o("update:modelValue", [i, m]);
          else if (O()) {
            const g = {}, [N, J] = Object.keys(e.modelValue);
            g[N] = i, g[J] = m, o("update:modelValue", g);
          } else
            o(
              "update:modelValue",
              h(
                {
                  previous: x,
                  next: a
                },
                e
              )
            );
      } else {
        const i = d(f.value, e.formatter.date, !0);
        if (i.isValid())
          if (A(i), R())
            o("update:modelValue", [f.value]);
          else if (O()) {
            const m = {}, [x] = Object.keys(e.modelValue);
            m[x] = f.value, o("update:modelValue", m);
          } else
            o("update:modelValue", f.value);
      }
    }, A = (i, m, x) => {
      if (v())
        if (V.value)
          if (T.value = i, e.autoApply) {
            i.isBefore(V.value) ? f.value = h(
              {
                previous: i,
                next: V.value
              },
              e
            ) : f.value = h(
              {
                previous: V.value,
                next: i
              },
              e
            );
            const [a, g] = f.value.split(e.separator);
            if (R())
              o("update:modelValue", [
                d(a, e.formatter.date, !0).format(e.formatter.date),
                d(g, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (O()) {
              const N = {}, [J, oe] = Object.keys(e.modelValue);
              N[J] = a, N[oe] = g, o("update:modelValue", N);
            } else
              o(
                "update:modelValue",
                h(
                  {
                    previous: d(a, e.formatter.date, !0),
                    next: d(g, e.formatter.date, !0)
                  },
                  e
                )
              );
            x && x(), _.value = [], d(a, e.formatter.date, !0).isSame(d(g, e.formatter.date, !0), "month") || (r.value.previous = d(a, e.formatter.date, !0), r.value.next = d(g, e.formatter.date, !0)), L();
          } else {
            V.value.isAfter(i, "month") ? _.value = [i, V.value] : _.value = [V.value, i];
            const [a, g] = _.value;
            a.isSame(g, "month") || (r.value.previous = a, r.value.next = g), L();
          }
        else
          _.value = [], V.value = i, P.value = i, w.value.push(i), _.value.push(i), m ? (r.value.next = i, r.value.previous.isSame(i, "month") && (r.value.next = i.add(1, "month"))) : (r.value.previous = i, r.value.next.isSame(i, "month") && (r.value.previous = r.value.next, r.value.next = i.add(1, "month")));
      else if (e.autoApply) {
        if (f.value = k(i, e), R())
          o("update:modelValue", [f.value]);
        else if (O()) {
          const a = {}, [g] = Object.keys(e.modelValue);
          a[g] = f.value, o("update:modelValue", a);
        } else
          o("update:modelValue", f.value);
        x && x(), _.value = [], L();
      } else
        _.value = [i], L();
    }, W = (i) => {
      if (_.value.length < 1)
        return !1;
      let m;
      if (v()) {
        const [x, a] = _.value;
        a.isBefore(x) ? m = h(
          {
            previous: a,
            next: x
          },
          e
        ) : m = h(
          {
            previous: x,
            next: a
          },
          e
        );
      } else {
        const [x] = _.value;
        m = x;
      }
      if (v()) {
        const [x, a] = m.split(e.separator);
        if (R())
          o("update:modelValue", [
            d(x, e.formatter.date, !0).format(e.formatter.date),
            d(a, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (O()) {
          const g = {}, [N, J] = Object.keys(e.modelValue);
          g[N] = x, g[J] = a, o("update:modelValue", g);
        } else
          o(
            "update:modelValue",
            h(
              {
                previous: d(x, e.formatter.date, !0),
                next: d(a, e.formatter.date, !0)
              },
              e
            )
          );
        f.value = m;
      } else if (f.value = m.format(e.formatter.date), R())
        o("update:modelValue", [f.value]);
      else if (O()) {
        const x = {}, [a] = Object.keys(e.modelValue);
        x[a] = f.value, o("update:modelValue", x);
      } else
        o("update:modelValue", f.value);
      i && i();
    }, q = (i) => {
      if (!v())
        return !1;
      if (V.value)
        w.value = [V.value, i];
      else
        return w.value = [], !1;
    }, X = (i) => {
      if (V.value && e.autoApply)
        return !1;
      let m, x;
      if (w.value.length > 1) {
        const [a, g] = w.value;
        m = d(a, e.formatter.date, !0), x = d(g, e.formatter.date, !0);
      } else if (R())
        if (e.autoApply) {
          const [a, g] = e.modelValue;
          m = a && d(a, e.formatter.date, !0), x = g && d(g, e.formatter.date, !0);
        } else {
          const [a, g] = _.value;
          m = d(a, e.formatter.date, !0), x = d(g, e.formatter.date, !0);
        }
      else if (O())
        if (e.autoApply) {
          if (e.modelValue) {
            const [a, g] = Object.values(e.modelValue);
            m = a && d(a, e.formatter.date, !0), x = g && d(g, e.formatter.date, !0);
          }
        } else {
          const [a, g] = _.value;
          m = d(a, e.formatter.date, !0), x = d(g, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [a, g] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        m = a && d(a, e.formatter.date, !0), x = g && d(g, e.formatter.date, !0);
      } else {
        const [a, g] = _.value;
        m = d(a, e.formatter.date, !0), x = d(g, e.formatter.date, !0);
      }
      return m && x ? C(i, {
        previous: m,
        next: x
      }) : !1;
    }, re = (i) => {
      const { today: m, active: x, off: a, disabled: g } = i;
      let N, J, oe;
      if (v())
        if (R())
          if (P.value) {
            const [I, Q] = w.value;
            J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [I, Q] = e.modelValue;
            J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
          } else {
            const [I, Q] = _.value;
            J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
          }
        else if (O())
          if (P.value) {
            const [I, Q] = w.value;
            J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [I, Q] = e.modelValue ? Object.values(e.modelValue) : [!1, !1];
            J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
          } else {
            const [I, Q] = _.value;
            J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
          }
        else if (P.value) {
          const [I, Q] = w.value;
          J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [I, Q] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
          J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
        } else {
          const [I, Q] = _.value;
          J = I && d(I, e.formatter.date, !0), oe = Q && d(Q, e.formatter.date, !0);
        }
      else if (R())
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [I] = e.modelValue;
            J = d(I, e.formatter.date, !0);
          }
        } else {
          const [I] = _.value;
          J = I && d(I, e.formatter.date, !0);
        }
      else if (O())
        if (e.autoApply) {
          if (e.modelValue) {
            const [I] = Object.values(e.modelValue);
            J = d(I, e.formatter.date, !0);
          }
        } else {
          const [I] = _.value;
          J = I && d(I, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [I] = e.modelValue.split(e.separator);
          J = d(I, e.formatter.date, !0);
        }
      } else {
        const [I] = _.value;
        J = I && d(I, e.formatter.date, !0);
      }
      return x && (N = m ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : g ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : i.isBetween(J, oe, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), a && (N = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), J && oe && !a ? (i.isSame(J, "date") && (N = oe.isAfter(J, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", J.isSame(oe, "date") && (N = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), i.isSame(oe, "date") && (N = oe.isAfter(J, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", J.isSame(oe, "date") && (N = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : J && i.isSame(J, "date") && !a && (N = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), N;
    }, pe = (i) => {
      let m, x, a;
      if (m = "", !v())
        return m;
      if (R())
        if (w.value.length > 1) {
          const [g, N] = w.value;
          x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [g, N] = e.modelValue;
          x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
        } else {
          const [g, N] = _.value;
          x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
        }
      else if (O())
        if (w.value.length > 1) {
          const [g, N] = w.value;
          x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [g, N] = Object.values(e.modelValue);
            x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
          }
        } else {
          const [g, N] = _.value;
          x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
        }
      else if (w.value.length > 1) {
        const [g, N] = w.value;
        x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [g, N] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
      } else {
        const [g, N] = _.value;
        x = g && d(g, e.formatter.date, !0), a = N && d(N, e.formatter.date, !0);
      }
      return x && a && (i.isSame(x, "date") ? (a.isBefore(x) && (m += " rounded-r-full inset-0"), x.isBefore(a) && (m += " rounded-l-full inset-0")) : i.isSame(a, "date") ? (a.isBefore(x) && (m += " rounded-l-full inset-0"), x.isBefore(a) && (m += " rounded-r-full inset-0")) : m += " inset-0"), m;
    }, ve = (i, m) => {
      r.value.previous = d(i, e.formatter.date, !0), r.value.next = d(m, e.formatter.date, !0), (d.duration(r.value.next.diff(r.value.previous)).$d.months === 2 || d.duration(r.value.next.diff(r.value.previous)).$d.months === 1 && d.duration(r.value.next.diff(r.value.previous)).$d.days === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }, le = (i, m) => {
      if (v())
        if (e.autoApply) {
          if (R())
            o("update:modelValue", [i, m]);
          else if (O()) {
            const x = {}, [a, g] = Object.keys(e.modelValue);
            x[a] = i, x[g] = m, o("update:modelValue", x);
          } else
            o(
              "update:modelValue",
              h(
                {
                  previous: d(i, e.formatter.date, !0),
                  next: d(m, e.formatter.date, !0)
                },
                e
              )
            );
          f.value = `${i}${e.separator}${m}`;
        } else
          _.value = [d(i, e.formatter.date, !0), d(m, e.formatter.date, !0)];
      else if (e.autoApply) {
        if (R())
          o("update:modelValue", [i]);
        else if (O()) {
          const x = {}, [a] = Object.keys(e.modelValue);
          x[a] = i, o("update:modelValue", x);
        } else
          o("update:modelValue", i);
        f.value = i;
      } else
        _.value = [d(i, e.formatter.date, !0), d(m, e.formatter.date, !0)];
      ve(i, m);
    }, ye = (i) => {
      const m = d().format(e.formatter.date), x = d().format(e.formatter.date);
      le(m, x), i && i();
    }, me = (i) => {
      const m = d().subtract(1, "day").format(e.formatter.date), x = d().subtract(1, "day").format(e.formatter.date);
      le(m, x), i && i();
    }, ne = (i, m) => {
      const x = d().subtract(i - 1, "day").format(e.formatter.date), a = d().format(e.formatter.date);
      le(x, a), m && m();
    }, ue = (i) => {
      const m = d().date(1).format(e.formatter.date), x = d().date(d().daysInMonth()).format(e.formatter.date);
      le(m, x), i && i();
    }, xe = (i) => {
      const m = d().date(1).subtract(1, "month").format(e.formatter.date), x = d().date(0).format(e.formatter.date);
      le(m, x), i && i();
    }, ge = (i, m) => {
      let x, a;
      const [g, N] = i.atClick();
      x = d(g).format(e.formatter.date), a = d(N).format(e.formatter.date), le(x, a), m && m();
    };
    Pt(
      () => _.value,
      (i) => {
        i.length > 0 && (n.previous.calendar = !0, n.previous.month = !1, n.previous.year = !1, n.next.calendar = !0, n.next.month = !1, n.next.year = !1);
      }
    ), $e(() => {
      e.placeholder ? S.value = e.placeholder : v() ? S.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : S.value = e.formatter.date;
    });
    const je = (i) => (i && G.value === null && (G.value = y(b.value)), i && G.value ? "place-right" : "place-left"), Le = (i) => (i && G.value === null && (G.value = y(b.value)), G.value ? "left-auto right-0" : "left-0 right-auto");
    return de("isBetweenRange", X), de("betweenRangeClasses", pe), de("datepickerClasses", re), de("atMouseOver", q), de("setToToday", ye), de("setToYesterday", me), de("setToLastDay", ne), de("setToThisMonth", ue), de("setToLastMonth", xe), de("setToCustomShortcut", ge), (i, m) => e.noInput ? z.value ? (Z(), K("div", on, [
      Y("div", an, [
        Y("div", sn, [
          e.shortcuts ? (Z(), Re(rt, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": v(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : he("", !0),
          Y("div", ln, [
            v() && !e.asSingle ? (Z(), K("div", un, cn)) : he("", !0),
            Y("div", {
              class: Se(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": v() && !e.asSingle
              }])
            }, [
              ee(Ie, {
                panel: n.previous,
                calendar: H($).previous
              }, null, 8, ["panel", "calendar"]),
              Y("div", fn, [
                se(ee(Ue, {
                  months: H(j),
                  "onUpdate:month": H($).previous.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ie, n.previous.month]
                ]),
                se(ee(ze, {
                  years: H($).previous.years(),
                  "onUpdate:year": H($).previous.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ie, n.previous.year]
                ]),
                se(Y("div", null, [
                  ee(We, { weeks: H(E) }, null, 8, ["weeks"]),
                  ee(Ze, {
                    calendar: H($).previous,
                    weeks: H(E),
                    "as-range": v(),
                    "onUpdate:date": m[2] || (m[2] = (x, a) => A(x, a))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ie, n.previous.calendar]
                ])
              ])
            ], 2),
            v() && !e.asSingle ? (Z(), K("div", vn, [
              ee(Ie, {
                "as-prev-or-next": "",
                panel: n.next,
                calendar: H($).next
              }, null, 8, ["panel", "calendar"]),
              Y("div", pn, [
                se(ee(Ue, {
                  months: H(j),
                  "onUpdate:month": H($).next.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ie, n.next.month]
                ]),
                se(ee(ze, {
                  "as-prev-or-next": "",
                  years: H($).next.years(),
                  "onUpdate:year": H($).next.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ie, n.next.year]
                ]),
                se(Y("div", null, [
                  ee(We, { weeks: H(E) }, null, 8, ["weeks"]),
                  ee(Ze, {
                    "as-prev-or-next": "",
                    calendar: H($).next,
                    weeks: H(E),
                    "as-range": v(),
                    "onUpdate:date": m[3] || (m[3] = (x, a) => A(x, a))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ie, n.next.calendar]
                ])
              ])
            ])) : he("", !0)
          ])
        ]),
        e.autoApply ? he("", !0) : (Z(), K("div", mn, [
          Y("div", hn, [
            Y("div", yn, [
              Y("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? _.value.length < 1 : _.value.length < 2,
                onClick: m[4] || (m[4] = (x) => W()),
                textContent: ae(e.options.footer.apply)
              }, null, 8, xn)
            ])
          ])
        ]))
      ])
    ])) : he("", !0) : (Z(), Re(H(ht), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "relative w-full"
    }, {
      default: Pe(({ open: x }) => [
        e.overlay ? (Z(), Re(H(Dr), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : he("", !0),
        ee(H(Sr), {
          as: "label",
          class: "relative block"
        }, {
          default: Pe(() => [
            Ct(i.$slots, "default", {
              value: f.value,
              placeholder: S.value,
              clear: D
            }, () => [
              se(Y("input", Yt({
                ref_key: "VtdInputRef",
                ref: B,
                type: "text",
                class: [
                  "relative block w-full",
                  t.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ],
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other"
              }, i.$attrs, {
                "onUpdate:modelValue": m[0] || (m[0] = (a) => f.value = a),
                placeholder: S.value,
                onKeyup: F
              }), null, 16, Lr), [
                [Vt, f.value]
              ]),
              Y("div", Br, [
                Y("button", {
                  type: "button",
                  class: "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md",
                  onClick: m[1] || (m[1] = (a) => f.value ? D() : i.$refs.VtdInputRef.focus())
                }, [
                  (Z(), K("svg", Er, [
                    f.value ? (Z(), K("path", Fr)) : (Z(), K("path", Nr))
                  ]))
                ])
              ])
            ])
          ]),
          _: 3
        }),
        ee(ot, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Pe(() => [
            ee(H(_r), {
              as: "div",
              class: "relative z-50"
            }, {
              default: Pe(({ close: a }) => [
                Y("div", {
                  class: Se(["absolute z-50 top-full sm:mt-2.5", Le(x)])
                }, [
                  Y("div", {
                    ref_key: "VtdRef",
                    ref: b,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    Y("div", {
                      class: Se(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", je(x)])
                    }, [
                      Y("div", Hr, [
                        e.shortcuts ? (Z(), Re(rt, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": v(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: a
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : he("", !0),
                        Y("div", Rr, [
                          v() && !e.asSingle ? (Z(), K("div", Ir, Wr)) : he("", !0),
                          Y("div", {
                            class: Se(["relative w-full md:w-1/2 lg:w-80", {
                              "mb-3 sm:mb-0 sm:mr-2": v() && !e.asSingle
                            }])
                          }, [
                            ee(Ie, {
                              panel: n.previous,
                              calendar: H($).previous
                            }, null, 8, ["panel", "calendar"]),
                            Y("div", zr, [
                              se(ee(Ue, {
                                months: H(j),
                                "onUpdate:month": H($).previous.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ie, n.previous.month]
                              ]),
                              se(ee(ze, {
                                years: H($).previous.years(),
                                "onUpdate:year": H($).previous.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ie, n.previous.year]
                              ]),
                              se(Y("div", null, [
                                ee(We, { weeks: H(E) }, null, 8, ["weeks"]),
                                ee(Ze, {
                                  calendar: H($).previous,
                                  weeks: H(E),
                                  "as-range": v(),
                                  "onUpdate:date": (g, N) => A(g, N, a)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ie, n.previous.calendar]
                              ])
                            ])
                          ], 2),
                          v() && !e.asSingle ? (Z(), K("div", Zr, [
                            ee(Ie, {
                              "as-prev-or-next": "",
                              panel: n.next,
                              calendar: H($).next
                            }, null, 8, ["panel", "calendar"]),
                            Y("div", Gr, [
                              se(ee(Ue, {
                                months: H(j),
                                "onUpdate:month": H($).next.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ie, n.next.month]
                              ]),
                              se(ee(ze, {
                                "as-prev-or-next": "",
                                years: H($).next.years(),
                                "onUpdate:year": H($).next.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ie, n.next.year]
                              ]),
                              se(Y("div", null, [
                                ee(We, { weeks: H(E) }, null, 8, ["weeks"]),
                                ee(Ze, {
                                  "as-prev-or-next": "",
                                  calendar: H($).next,
                                  weeks: H(E),
                                  "as-range": v(),
                                  "onUpdate:date": (g, N) => A(g, N, a)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ie, n.next.calendar]
                              ])
                            ])
                          ])) : he("", !0)
                        ])
                      ]),
                      e.autoApply ? (Z(), K("div", en, [
                        Y("div", tn, [
                          Y("div", rn, [
                            Y("button", {
                              type: "button",
                              onClick: (g) => a(),
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: ae(e.options.footer.cancel)
                            }, null, 8, nn)
                          ])
                        ])
                      ])) : (Z(), K("div", Kr, [
                        Y("div", Jr, [
                          Y("div", qr, [
                            Y("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? _.value.length < 1 : _.value.length < 2,
                              onClick: (g) => W(a),
                              textContent: ae(e.options.footer.apply)
                            }, null, 8, Xr),
                            Y("button", {
                              type: "button",
                              onClick: (g) => a(),
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: ae(e.options.footer.cancel)
                            }, null, 8, Qr)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
}, Mt = /* @__PURE__ */ (() => {
  const t = gn;
  return t.install = (l) => {
    l.component("VueTailwindDatepicker", t);
  }, t;
})(), bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mt
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(bn).forEach(([t, l]) => {
  t !== "default" && (Mt[t] = l);
});
export {
  Mt as default
};
