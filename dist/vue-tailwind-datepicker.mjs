(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vtd-datepicker-overlay.open:before{display:block;opacity:.5}.vtd-datepicker:before{--vtd-datepicker: 0px;content:"";position:absolute;top:0px;height:1rem;width:1rem;border-width:1px;border-color:#0000001a;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.dark .vtd-datepicker:before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker:before{transform:translate(50%,-50%) rotate(-45deg);-webkit-clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)));clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)))}.vtd-datepicker.place-left:before{left:.25rem}.vtd-datepicker.place-right:before{right:1.25rem}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { openBlock as Z, createElementBlock as J, createElementVNode as C, withDirectives as le, vShow as ie, toDisplayString as se, Fragment as $e, renderList as He, inject as ce, createVNode as te, TransitionGroup as Ot, withCtx as Ve, normalizeClass as Se, Transition as st, unref as H, createCommentVNode as me, withModifiers as Me, cloneVNode as _t, h as Ce, provide as de, ref as re, onMounted as Vt, watchEffect as be, computed as fe, defineComponent as Te, reactive as Pt, nextTick as Ee, watch as Ct, isProxy as Yt, createBlock as Ie, renderSlot as Tt, mergeProps as At, vModelText as jt } from "vue";
const Lt = { class: "flex justify-between items-center px-2 py-1.5" }, Bt = { class: "flex-shrink-0" }, Et = { class: "inline-flex rounded-full" }, Ft = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Nt = ["d"], Ht = { class: "px-1.5 space-x-1.5 flex flex-1" }, Rt = { class: "flex-1 flex rounded-md" }, It = ["textContent"], Ut = { class: "flex-1 flex rounded-md" }, Wt = ["textContent"], zt = { class: "flex-shrink-0" }, Zt = { class: "inline-flex rounded-full" }, Gt = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Kt = ["d"], Ue = {
  __name: "Header",
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object
  },
  setup(t) {
    return (u, a) => (Z(), J("div", Lt, [
      C("div", Bt, [
        le(C("span", Et, [
          C("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[0] || (a[0] = (e) => t.panel.calendar ? t.calendar.onPrevious() : t.calendar.onPreviousYear())
          }, [
            (Z(), J("svg", Ft, [
              C("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Nt)
            ]))
          ])
        ], 512), [
          [ie, t.panel.calendar || t.panel.year]
        ])
      ]),
      C("div", Ht, [
        C("span", Rt, [
          C("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: se(t.calendar.month),
            onClick: a[1] || (a[1] = (e) => t.calendar.openMonth())
          }, null, 8, It)
        ]),
        C("span", Ut, [
          C("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: se(t.calendar.year),
            onClick: a[2] || (a[2] = (e) => t.calendar.openYear())
          }, null, 8, Wt)
        ])
      ]),
      C("div", zt, [
        le(C("span", Zt, [
          C("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[3] || (a[3] = (e) => t.panel.calendar ? t.calendar.onNext() : t.calendar.onNextYear())
          }, [
            (Z(), J("svg", Gt, [
              C("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, Kt)
            ]))
          ])
        ], 512), [
          [ie, t.panel.calendar || t.panel.year]
        ])
      ])
    ]));
  }
}, Jt = { class: "flex flex-wrap mt-1.5" }, qt = { class: "flex rounded-md mt-1.5" }, Xt = ["textContent", "onClick"], We = {
  __name: "Month",
  props: {
    months: Array
  },
  emits: ["update:month"],
  setup(t, { emit: u }) {
    return (a, e) => (Z(), J("div", Jt, [
      (Z(!0), J($e, null, He(t.months, (s, i) => (Z(), J("div", {
        key: i,
        class: "w-1/2 px-0.5"
      }, [
        C("span", qt, [
          C("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: se(s),
            onClick: (P) => u("update:month", i)
          }, null, 8, Xt)
        ])
      ]))), 128))
    ]));
  }
}, Qt = { class: "grid grid-cols-7 py-2 mt-0.5" }, er = ["textContent"], ze = {
  __name: "Week",
  props: {
    weeks: Array
  },
  setup(t) {
    return (u, a) => (Z(), J("div", Qt, [
      (Z(!0), J($e, null, He(t.weeks, (e, s) => (Z(), J("div", {
        key: s,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        C("span", {
          textContent: se(e)
        }, null, 8, er)
      ]))), 128))
    ]));
  }
}, tr = { class: "flex flex-wrap" }, rr = { class: "flex rounded-md mt-1.5" }, nr = ["textContent", "onClick"], Ze = {
  __name: "Year",
  props: {
    asPrevOrNext: Boolean,
    years: Array
  },
  emits: ["update:year"],
  setup(t, { emit: u }) {
    return (a, e) => (Z(), J("div", tr, [
      (Z(!0), J($e, null, He(t.years, (s, i) => (Z(), J("div", {
        key: i,
        class: "w-1/2 px-0.5"
      }, [
        C("span", rr, [
          C("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: se(s),
            onClick: (P) => u("update:year", s, t.asPrevOrNext)
          }, null, 8, nr)
        ])
      ]))), 128))
    ]));
  }
}, or = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, ar = ["data-tooltip"], sr = ["disabled", "onClick", "onMouseenter", "onFocusin", "textContent", "data-date"], Ge = {
  __name: "Calendar",
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  emits: ["update:date"],
  setup(t, { emit: u }) {
    const a = ce("isBetweenRange"), e = ce("betweenRangeClasses"), s = ce("datepickerClasses"), i = ce("atMouseOver");
    return (P, c) => (Z(), J("div", or, [
      te(Ot, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Ve(() => [
          (Z(!0), J($e, null, He(t.calendar.date(), (m, h) => (Z(), J("div", {
            key: h,
            class: Se(["relative", { "vtd-tooltip": t.asRange && m.duration() }]),
            "data-tooltip": `${m.duration()}`
          }, [
            te(st, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Ve(() => [
                H(a)(m) || m.hovered() ? (Z(), J("span", {
                  key: 0,
                  class: Se(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", H(e)(m)])
                }, null, 2)) : me("", !0)
              ]),
              _: 2
            }, 1024),
            C("button", {
              type: "button",
              class: Se(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [H(s)(m), t.asRange ? "transition-all" : "transition-colors"]]),
              disabled: m.disabled || m.inRange(),
              onClick: (w) => u("update:date", m, t.asPrevOrNext),
              onMouseenter: (w) => H(i)(m),
              onFocusin: (w) => H(i)(m),
              textContent: se(m.date()),
              "data-date": m.toDate()
            }, null, 42, sr)
          ], 10, ar))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, lr = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, ur = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, ir = ["onClick", "textContent"], dr = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, ot = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(t) {
    const u = t, a = ce("setToToday"), e = ce("setToYesterday"), s = ce("setToLastDay"), i = ce("setToThisMonth"), P = ce("setToLastMonth"), c = ce("setToCustomShortcut"), m = () => typeof u.shortcuts == "function" ? u.shortcuts() : !1;
    return (h, w) => u.asRange && u.asSingle || u.asRange && !u.asSingle ? (Z(), J("div", lr, [
      m() ? (Z(), J("ol", ur, [
        (Z(!0), J($e, null, He(m(), (x, k) => (Z(), J("li", { key: k }, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Me((F) => H(c)(x, t.close), ["prevent"]),
            textContent: se(x.label)
          }, null, 8, ir)
        ]))), 128))
      ])) : (Z(), J("ol", dr, [
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[0] || (w[0] = Me((x) => H(a)(t.close), ["prevent"]))
          }, se(u.i18n.today), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[1] || (w[1] = Me((x) => H(e)(t.close), ["prevent"]))
          }, se(u.i18n.yesterday), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[2] || (w[2] = Me((x) => H(s)(7, t.close), ["prevent"]))
          }, se(u.i18n.past(7)), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[3] || (w[3] = Me((x) => H(s)(30, t.close), ["prevent"]))
          }, se(u.i18n.past(30)), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[4] || (w[4] = Me((x) => H(i)(t.close), ["prevent"]))
          }, se(u.i18n.currentMonth), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: w[5] || (w[5] = Me((x) => H(P)(t.close), ["prevent"]))
          }, se(u.i18n.pastMonth), 1)
        ])
      ]))
    ])) : me("", !0);
  }
};
function we(t, u, ...a) {
  if (t in u) {
    let s = u[t];
    return typeof s == "function" ? s(...a) : s;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(u).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, we), e;
}
var Fe = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Fe || {}), cr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(cr || {});
function Ae({ visible: t = !0, features: u = 0, ourProps: a, theirProps: e, ...s }) {
  var i;
  let P = fr(e, a), c = Object.assign(s, { props: P });
  if (t || u & 2 && P.static)
    return Xe(c);
  if (u & 1) {
    let m = (i = P.unmount) == null || i ? 0 : 1;
    return we(m, { [0]() {
      return null;
    }, [1]() {
      return Xe({ ...s, props: { ...P, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Xe(c);
}
function Xe({ props: t, attrs: u, slots: a, slot: e, name: s }) {
  var i;
  let { as: P, ...c } = ut(t, ["unmount", "static"]), m = (i = a.default) == null ? void 0 : i.call(a, e), h = {};
  if (e) {
    let w = !1, x = [];
    for (let [k, F] of Object.entries(e))
      typeof F == "boolean" && (w = !0), F === !0 && x.push(k);
    w && (h["data-headlessui-state"] = x.join(" "));
  }
  if (P === "template") {
    if (m = lt(m), Object.keys(c).length > 0 || Object.keys(u).length > 0) {
      let [w, ...x] = m != null ? m : [];
      if (!vr(w) || x.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(u)).sort((k, F) => k.localeCompare(F)).map((k) => `  - ${k}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((k) => `  - ${k}`).join(`
`)].join(`
`));
      return _t(w, Object.assign({}, c, h));
    }
    return Array.isArray(m) && m.length === 1 ? m[0] : m;
  }
  return Ce(P, Object.assign({}, c, h), m);
}
function lt(t) {
  return t.flatMap((u) => u.type === $e ? lt(u.children) : [u]);
}
function fr(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let u = {}, a = {};
  for (let e of t)
    for (let s in e)
      s.startsWith("on") && typeof e[s] == "function" ? (a[s] != null || (a[s] = []), a[s].push(e[s])) : u[s] = e[s];
  if (u.disabled || u["aria-disabled"])
    return Object.assign(u, Object.fromEntries(Object.keys(a).map((e) => [e, void 0])));
  for (let e in a)
    Object.assign(u, { [e](s, ...i) {
      let P = a[e];
      for (let c of P) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        c(s, ...i);
      }
    } });
  return u;
}
function ut(t, u = []) {
  let a = Object.assign({}, t);
  for (let e of u)
    e in a && delete a[e];
  return a;
}
function vr(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let pr = 0;
function mr() {
  return ++pr;
}
function Ye() {
  return mr();
}
var ke = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(ke || {});
function U(t) {
  var u;
  return t == null || t.value == null ? null : (u = t.value.$el) != null ? u : t.value;
}
let it = Symbol("Context");
var Ne = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Ne || {});
function dt() {
  return ce(it, null);
}
function hr(t) {
  de(it, t);
}
function at(t, u) {
  if (t)
    return t;
  let a = u != null ? u : "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function yr(t, u) {
  let a = re(at(t.value.type, t.value.as));
  return Vt(() => {
    a.value = at(t.value.type, t.value.as);
  }), be(() => {
    var e;
    a.value || !U(u) || U(u) instanceof HTMLButtonElement && !((e = U(u)) != null && e.hasAttribute("type")) && (a.value = "button");
  }), a;
}
const Je = typeof window > "u" || typeof document > "u";
function Re(t) {
  if (Je)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let u = U(t);
    if (u)
      return u.ownerDocument;
  }
  return document;
}
let et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var De = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(De || {}), xr = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(xr || {}), gr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(gr || {});
function ct(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(et));
}
var rt = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(rt || {});
function ft(t, u = 0) {
  var a;
  return t === ((a = Re(t)) == null ? void 0 : a.body) ? !1 : we(u, { [0]() {
    return t.matches(et);
  }, [1]() {
    let e = t;
    for (; e !== null; ) {
      if (e.matches(et))
        return !0;
      e = e.parentElement;
    }
    return !1;
  } });
}
let br = ["textarea", "input"].join(",");
function kr(t) {
  var u, a;
  return (a = (u = t == null ? void 0 : t.matches) == null ? void 0 : u.call(t, br)) != null ? a : !1;
}
function wr(t, u = (a) => a) {
  return t.slice().sort((a, e) => {
    let s = u(a), i = u(e);
    if (s === null || i === null)
      return 0;
    let P = s.compareDocumentPosition(i);
    return P & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : P & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Pe(t, u, a = !0, e = null) {
  var s;
  let i = (s = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? s : document, P = Array.isArray(t) ? a ? wr(t) : t : ct(t);
  e = e != null ? e : i.activeElement;
  let c = (() => {
    if (u & 5)
      return 1;
    if (u & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), m = (() => {
    if (u & 1)
      return 0;
    if (u & 2)
      return Math.max(0, P.indexOf(e)) - 1;
    if (u & 4)
      return Math.max(0, P.indexOf(e)) + 1;
    if (u & 8)
      return P.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = u & 32 ? { preventScroll: !0 } : {}, w = 0, x = P.length, k;
  do {
    if (w >= x || w + x <= 0)
      return 0;
    let F = m + w;
    if (u & 16)
      F = (F + x) % x;
    else {
      if (F < 0)
        return 3;
      if (F >= x)
        return 1;
    }
    k = P[F], k == null || k.focus(h), w += c;
  } while (k !== i.activeElement);
  return u & 6 && kr(k) && k.select(), k.hasAttribute("tabindex") || k.setAttribute("tabindex", "0"), 2;
}
function Qe(t, u, a) {
  Je || be((e) => {
    document.addEventListener(t, u, a), e(() => document.removeEventListener(t, u, a));
  });
}
function $r(t, u, a = fe(() => !0)) {
  function e(i, P) {
    if (!a.value || i.defaultPrevented)
      return;
    let c = P(i);
    if (c === null || !c.ownerDocument.documentElement.contains(c))
      return;
    let m = function h(w) {
      return typeof w == "function" ? h(w()) : Array.isArray(w) || w instanceof Set ? w : [w];
    }(t);
    for (let h of m) {
      if (h === null)
        continue;
      let w = h instanceof HTMLElement ? h : U(h);
      if (w != null && w.contains(c))
        return;
    }
    return !ft(c, rt.Loose) && c.tabIndex !== -1 && i.preventDefault(), u(i, c);
  }
  let s = re(null);
  Qe("mousedown", (i) => {
    a.value && (s.value = i.target);
  }, !0), Qe("click", (i) => {
    !s.value || (e(i, () => s.value), s.value = null);
  }, !0), Qe("blur", (i) => e(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ke = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ke || {});
let tt = Te({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: u, attrs: a }) {
  return () => {
    let { features: e, ...s } = t, i = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Ae({ ourProps: i, theirProps: s, slot: {}, attrs: a, slots: u, name: "Hidden" });
  };
} });
function Mr(t, u, a) {
  Je || be((e) => {
    window.addEventListener(t, u, a), e(() => window.removeEventListener(t, u, a));
  });
}
var Oe = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Oe || {});
function vt() {
  let t = re(0);
  return Mr("keydown", (u) => {
    u.key === "Tab" && (t.value = u.shiftKey ? 1 : 0);
  }), t;
}
function Sr(t, u, a, e) {
  Je || be((s) => {
    t = t != null ? t : window, t.addEventListener(u, a, e), s(() => t.removeEventListener(u, a, e));
  });
}
var Dr = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Dr || {});
let pt = Symbol("PopoverContext");
function qe(t) {
  let u = ce(pt, null);
  if (u === null) {
    let a = new Error(`<${t} /> is missing a parent <${xt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, qe), a;
  }
  return u;
}
let mt = Symbol("PopoverGroupContext");
function ht() {
  return ce(mt, null);
}
let yt = Symbol("PopoverPanelContext");
function Or() {
  return ce(yt, null);
}
let xt = Te({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: u, attrs: a, expose: e }) {
  var s;
  let i = `headlessui-popover-button-${Ye()}`, P = `headlessui-popover-panel-${Ye()}`, c = re(null);
  e({ el: c, $el: c });
  let m = re(1), h = re(null), w = re(null), x = re(null), k = re(null), F = fe(() => Re(c)), G = fe(() => {
    if (!U(h) || !U(k))
      return !1;
    for (let Y of document.querySelectorAll("body > *"))
      if (Number(Y == null ? void 0 : Y.contains(U(h))) ^ Number(Y == null ? void 0 : Y.contains(U(k))))
        return !0;
    return !1;
  }), S = { popoverState: m, buttonId: i, panelId: P, panel: k, button: h, isPortalled: G, beforePanelSentinel: w, afterPanelSentinel: x, togglePopover() {
    m.value = we(m.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    m.value !== 1 && (m.value = 1);
  }, close(Y) {
    S.closePopover();
    let T = (() => Y ? Y instanceof HTMLElement ? Y : Y.value instanceof HTMLElement ? U(Y) : U(S.button) : U(S.button))();
    T == null || T.focus();
  } };
  de(pt, S), hr(fe(() => we(m.value, { [0]: Ne.Open, [1]: Ne.Closed })));
  let V = { buttonId: i, panelId: P, close() {
    S.closePopover();
  } }, f = ht(), $ = f == null ? void 0 : f.registerPopover;
  function O() {
    var Y, T, o, r;
    return (r = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? r : ((Y = F.value) == null ? void 0 : Y.activeElement) && (((T = U(h)) == null ? void 0 : T.contains(F.value.activeElement)) || ((o = U(k)) == null ? void 0 : o.contains(F.value.activeElement)));
  }
  return be(() => $ == null ? void 0 : $(V)), Sr((s = F.value) == null ? void 0 : s.defaultView, "focus", (Y) => {
    var T, o;
    m.value === 0 && (O() || !h || !k || (T = U(S.beforePanelSentinel)) != null && T.contains(Y.target) || (o = U(S.afterPanelSentinel)) != null && o.contains(Y.target) || S.closePopover());
  }, !0), $r([h, k], (Y, T) => {
    var o;
    S.closePopover(), ft(T, rt.Loose) || (Y.preventDefault(), (o = U(h)) == null || o.focus());
  }, fe(() => m.value === 0)), () => {
    let Y = { open: m.value === 0, close: S.close };
    return Ae({ theirProps: t, ourProps: { ref: c }, slot: Y, slots: u, attrs: a, name: "Popover" });
  };
} }), _r = Te({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(t, { attrs: u, slots: a, expose: e }) {
  let s = qe("PopoverButton"), i = fe(() => Re(s.button));
  e({ el: s.button, $el: s.button });
  let P = ht(), c = P == null ? void 0 : P.closeOthers, m = Or(), h = m === null ? !1 : m === s.panelId, w = re(null), x = `headlessui-focus-sentinel-${Ye()}`;
  h || be(() => {
    s.button.value = w.value;
  });
  let k = yr(fe(() => ({ as: t.as, type: u.type })), w);
  function F(f) {
    var $, O, Y, T, o;
    if (h) {
      if (s.popoverState.value === 1)
        return;
      switch (f.key) {
        case ke.Space:
        case ke.Enter:
          f.preventDefault(), (O = ($ = f.target).click) == null || O.call($), s.closePopover(), (Y = U(s.button)) == null || Y.focus();
          break;
      }
    } else
      switch (f.key) {
        case ke.Space:
        case ke.Enter:
          f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover();
          break;
        case ke.Escape:
          if (s.popoverState.value !== 0)
            return c == null ? void 0 : c(s.buttonId);
          if (!U(s.button) || ((T = i.value) == null ? void 0 : T.activeElement) && !((o = U(s.button)) != null && o.contains(i.value.activeElement)))
            return;
          f.preventDefault(), f.stopPropagation(), s.closePopover();
          break;
      }
  }
  function G(f) {
    h || f.key === ke.Space && f.preventDefault();
  }
  function S(f) {
    var $, O;
    t.disabled || (h ? (s.closePopover(), ($ = U(s.button)) == null || $.focus()) : (f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover(), (O = U(s.button)) == null || O.focus()));
  }
  function V(f) {
    f.preventDefault(), f.stopPropagation();
  }
  return () => {
    let f = s.popoverState.value === 0, $ = { open: f }, O = h ? { ref: w, type: k.value, onKeydown: F, onClick: S } : { ref: w, id: s.buttonId, type: k.value, "aria-expanded": t.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": U(s.panel) ? s.panelId : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: F, onKeyup: G, onClick: S, onMousedown: V }, Y = vt();
    function T() {
      let o = U(s.panel);
      if (!o)
        return;
      function r() {
        we(Y.value, { [Oe.Forwards]: () => Pe(o, De.First), [Oe.Backwards]: () => Pe(o, De.Last) });
      }
      r();
    }
    return Ce($e, [Ae({ ourProps: O, theirProps: { ...u, ...t }, slot: $, attrs: u, slots: a, name: "PopoverButton" }), f && !h && s.isPortalled.value && Ce(tt, { id: x, features: Ke.Focusable, as: "button", type: "button", onFocus: T })]);
  };
} }), Vr = Te({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: u, slots: a }) {
  let e = qe("PopoverOverlay"), s = `headlessui-popover-overlay-${Ye()}`, i = dt(), P = fe(() => i !== null ? i.value === Ne.Open : e.popoverState.value === 0);
  function c() {
    e.closePopover();
  }
  return () => {
    let m = { open: e.popoverState.value === 0 };
    return Ae({ ourProps: { id: s, "aria-hidden": !0, onClick: c }, theirProps: t, slot: m, attrs: u, slots: a, features: Fe.RenderStrategy | Fe.Static, visible: P.value, name: "PopoverOverlay" });
  };
} }), Pr = Te({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 } }, inheritAttrs: !1, setup(t, { attrs: u, slots: a, expose: e }) {
  let { focus: s } = t, i = qe("PopoverPanel"), P = fe(() => Re(i.panel)), c = `headlessui-focus-sentinel-before-${Ye()}`, m = `headlessui-focus-sentinel-after-${Ye()}`;
  e({ el: i.panel, $el: i.panel }), de(yt, i.panelId), be(() => {
    var V, f;
    if (!s || i.popoverState.value !== 0 || !i.panel)
      return;
    let $ = (V = P.value) == null ? void 0 : V.activeElement;
    (f = U(i.panel)) != null && f.contains($) || Pe(U(i.panel), De.First);
  });
  let h = dt(), w = fe(() => h !== null ? h.value === Ne.Open : i.popoverState.value === 0);
  function x(V) {
    var f, $;
    switch (V.key) {
      case ke.Escape:
        if (i.popoverState.value !== 0 || !U(i.panel) || P.value && !((f = U(i.panel)) != null && f.contains(P.value.activeElement)))
          return;
        V.preventDefault(), V.stopPropagation(), i.closePopover(), ($ = U(i.button)) == null || $.focus();
        break;
    }
  }
  function k(V) {
    var f, $, O, Y, T;
    let o = V.relatedTarget;
    !o || !U(i.panel) || (f = U(i.panel)) != null && f.contains(o) || (i.closePopover(), (((O = ($ = U(i.beforePanelSentinel)) == null ? void 0 : $.contains) == null ? void 0 : O.call($, o)) || ((T = (Y = U(i.afterPanelSentinel)) == null ? void 0 : Y.contains) == null ? void 0 : T.call(Y, o))) && o.focus({ preventScroll: !0 }));
  }
  let F = vt();
  function G() {
    let V = U(i.panel);
    if (!V)
      return;
    function f() {
      we(F.value, { [Oe.Forwards]: () => {
        Pe(V, De.Next);
      }, [Oe.Backwards]: () => {
        var $;
        ($ = U(i.button)) == null || $.focus({ preventScroll: !0 });
      } });
    }
    f();
  }
  function S() {
    let V = U(i.panel);
    if (!V)
      return;
    function f() {
      we(F.value, { [Oe.Forwards]: () => {
        var $, O;
        let Y = U(i.button), T = U(i.panel);
        if (!Y)
          return;
        let o = ct(), r = o.indexOf(Y), N = o.slice(0, r + 1), L = [...o.slice(r + 1), ...N];
        for (let M of L.slice())
          if (((O = ($ = M == null ? void 0 : M.id) == null ? void 0 : $.startsWith) == null ? void 0 : O.call($, "headlessui-focus-sentinel-")) || (T == null ? void 0 : T.contains(M))) {
            let z = L.indexOf(M);
            z !== -1 && L.splice(z, 1);
          }
        Pe(L, De.First, !1);
      }, [Oe.Backwards]: () => Pe(V, De.Previous) });
    }
    f();
  }
  return () => {
    let V = { open: i.popoverState.value === 0, close: i.close }, f = { ref: i.panel, id: i.panelId, onKeydown: x, onFocusout: s && i.popoverState.value === 0 ? k : void 0, tabIndex: -1 };
    return Ae({ ourProps: f, theirProps: { ...u, ...ut(t, ["focus"]) }, attrs: u, slot: V, slots: { ...a, default: (...$) => {
      var O;
      return [Ce($e, [w.value && i.isPortalled.value && Ce(tt, { id: c, ref: i.beforePanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: G }), (O = a.default) == null ? void 0 : O.call(a, ...$), w.value && i.isPortalled.value && Ce(tt, { id: m, ref: i.afterPanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: S })])];
    } }, features: Fe.RenderStrategy | Fe.Static, visible: w.value, name: "PopoverPanel" });
  };
} });
Te({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: u, slots: a, expose: e }) {
  let s = re(null), i = re([]), P = fe(() => Re(s));
  e({ el: s, $el: s });
  function c(x) {
    let k = i.value.indexOf(x);
    k !== -1 && i.value.splice(k, 1);
  }
  function m(x) {
    return i.value.push(x), () => {
      c(x);
    };
  }
  function h() {
    var x;
    let k = P.value;
    if (!k)
      return !1;
    let F = k.activeElement;
    return (x = U(s)) != null && x.contains(F) ? !0 : i.value.some((G) => {
      var S, V;
      return ((S = k.getElementById(G.buttonId)) == null ? void 0 : S.contains(F)) || ((V = k.getElementById(G.panelId)) == null ? void 0 : V.contains(F));
    });
  }
  function w(x) {
    for (let k of i.value)
      k.buttonId !== x && k.close();
  }
  return de(mt, { registerPopover: m, unregisterPopover: c, isFocusWithinPopoverGroup: h, closeOthers: w }), () => Ae({ ourProps: { ref: s }, theirProps: t, slot: {}, attrs: u, slots: a, name: "PopoverGroup" });
} });
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    var a = 1e3, e = 6e4, s = 36e5, i = "millisecond", P = "second", c = "minute", m = "hour", h = "day", w = "week", x = "month", k = "quarter", F = "year", G = "date", S = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var g = ["th", "st", "nd", "rd"], y = A % 100;
      return "[" + A + (g[(y - 20) % 10] || g[y] || g[0]) + "]";
    } }, O = function(A, g, y) {
      var _ = String(A);
      return !_ || _.length >= g ? A : "" + Array(g + 1 - _.length).join(y) + A;
    }, Y = { s: O, z: function(A) {
      var g = -A.utcOffset(), y = Math.abs(g), _ = Math.floor(y / 60), D = y % 60;
      return (g <= 0 ? "+" : "-") + O(_, 2, "0") + ":" + O(D, 2, "0");
    }, m: function A(g, y) {
      if (g.date() < y.date())
        return -A(y, g);
      var _ = 12 * (y.year() - g.year()) + (y.month() - g.month()), D = g.clone().add(_, x), B = y - D < 0, j = g.clone().add(_ + (B ? -1 : 1), x);
      return +(-(_ + (y - D) / (B ? D - j : j - D)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: x, y: F, w, d: h, D: G, h: m, m: c, s: P, ms: i, Q: k }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, T = "en", o = {};
    o[T] = $;
    var r = function(A) {
      return A instanceof z;
    }, N = function A(g, y, _) {
      var D;
      if (!g)
        return T;
      if (typeof g == "string") {
        var B = g.toLowerCase();
        o[B] && (D = B), y && (o[B] = y, D = B);
        var j = g.split("-");
        if (!D && j.length > 1)
          return A(j[0]);
      } else {
        var W = g.name;
        o[W] = g, D = W;
      }
      return !_ && D && (T = D), D || !_ && T;
    }, L = function(A, g) {
      if (r(A))
        return A.clone();
      var y = typeof g == "object" ? g : {};
      return y.date = A, y.args = arguments, new z(y);
    }, M = Y;
    M.l = N, M.i = r, M.w = function(A, g) {
      return L(A, { locale: g.$L, utc: g.$u, x: g.$x, $offset: g.$offset });
    };
    var z = function() {
      function A(y) {
        this.$L = N(y.locale, null, !0), this.parse(y);
      }
      var g = A.prototype;
      return g.parse = function(y) {
        this.$d = function(_) {
          var D = _.date, B = _.utc;
          if (D === null)
            return new Date(NaN);
          if (M.u(D))
            return new Date();
          if (D instanceof Date)
            return new Date(D);
          if (typeof D == "string" && !/Z$/i.test(D)) {
            var j = D.match(V);
            if (j) {
              var W = j[2] - 1 || 0, K = (j[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(j[1], W, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, K)) : new Date(j[1], W, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, K);
            }
          }
          return new Date(D);
        }(y), this.$x = y.x || {}, this.init();
      }, g.init = function() {
        var y = this.$d;
        this.$y = y.getFullYear(), this.$M = y.getMonth(), this.$D = y.getDate(), this.$W = y.getDay(), this.$H = y.getHours(), this.$m = y.getMinutes(), this.$s = y.getSeconds(), this.$ms = y.getMilliseconds();
      }, g.$utils = function() {
        return M;
      }, g.isValid = function() {
        return this.$d.toString() !== S;
      }, g.isSame = function(y, _) {
        var D = L(y);
        return this.startOf(_) <= D && D <= this.endOf(_);
      }, g.isAfter = function(y, _) {
        return L(y) < this.startOf(_);
      }, g.isBefore = function(y, _) {
        return this.endOf(_) < L(y);
      }, g.$g = function(y, _, D) {
        return M.u(y) ? this[_] : this.set(D, y);
      }, g.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, g.valueOf = function() {
        return this.$d.getTime();
      }, g.startOf = function(y, _) {
        var D = this, B = !!M.u(_) || _, j = M.p(y), W = function(ae, oe) {
          var ue = M.w(D.$u ? Date.UTC(D.$y, oe, ae) : new Date(D.$y, oe, ae), D);
          return B ? ue : ue.endOf(h);
        }, K = function(ae, oe) {
          return M.w(D.toDate()[ae].apply(D.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(oe)), D);
        }, X = this.$W, ne = this.$M, pe = this.$D, ve = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case F:
            return B ? W(1, 0) : W(31, 11);
          case x:
            return B ? W(1, ne) : W(0, ne + 1);
          case w:
            var ge = this.$locale().weekStart || 0, he = (X < ge ? X + 7 : X) - ge;
            return W(B ? pe - he : pe + (6 - he), ne);
          case h:
          case G:
            return K(ve + "Hours", 0);
          case m:
            return K(ve + "Minutes", 1);
          case c:
            return K(ve + "Seconds", 2);
          case P:
            return K(ve + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, g.endOf = function(y) {
        return this.startOf(y, !1);
      }, g.$set = function(y, _) {
        var D, B = M.p(y), j = "set" + (this.$u ? "UTC" : ""), W = (D = {}, D[h] = j + "Date", D[G] = j + "Date", D[x] = j + "Month", D[F] = j + "FullYear", D[m] = j + "Hours", D[c] = j + "Minutes", D[P] = j + "Seconds", D[i] = j + "Milliseconds", D)[B], K = B === h ? this.$D + (_ - this.$W) : _;
        if (B === x || B === F) {
          var X = this.clone().set(G, 1);
          X.$d[W](K), X.init(), this.$d = X.set(G, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          W && this.$d[W](K);
        return this.init(), this;
      }, g.set = function(y, _) {
        return this.clone().$set(y, _);
      }, g.get = function(y) {
        return this[M.p(y)]();
      }, g.add = function(y, _) {
        var D, B = this;
        y = Number(y);
        var j = M.p(_), W = function(ne) {
          var pe = L(B);
          return M.w(pe.date(pe.date() + Math.round(ne * y)), B);
        };
        if (j === x)
          return this.set(x, this.$M + y);
        if (j === F)
          return this.set(F, this.$y + y);
        if (j === h)
          return W(1);
        if (j === w)
          return W(7);
        var K = (D = {}, D[c] = e, D[m] = s, D[P] = a, D)[j] || 1, X = this.$d.getTime() + y * K;
        return M.w(X, this);
      }, g.subtract = function(y, _) {
        return this.add(-1 * y, _);
      }, g.format = function(y) {
        var _ = this, D = this.$locale();
        if (!this.isValid())
          return D.invalidDate || S;
        var B = y || "YYYY-MM-DDTHH:mm:ssZ", j = M.z(this), W = this.$H, K = this.$m, X = this.$M, ne = D.weekdays, pe = D.months, ve = function(oe, ue, ye, xe) {
          return oe && (oe[ue] || oe(_, B)) || ye[ue].slice(0, xe);
        }, ge = function(oe) {
          return M.s(W % 12 || 12, oe, "0");
        }, he = D.meridiem || function(oe, ue, ye) {
          var xe = oe < 12 ? "AM" : "PM";
          return ye ? xe.toLowerCase() : xe;
        }, ae = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: X + 1, MM: M.s(X + 1, 2, "0"), MMM: ve(D.monthsShort, X, pe, 3), MMMM: ve(pe, X), D: this.$D, DD: M.s(this.$D, 2, "0"), d: String(this.$W), dd: ve(D.weekdaysMin, this.$W, ne, 2), ddd: ve(D.weekdaysShort, this.$W, ne, 3), dddd: ne[this.$W], H: String(W), HH: M.s(W, 2, "0"), h: ge(1), hh: ge(2), a: he(W, K, !0), A: he(W, K, !1), m: String(K), mm: M.s(K, 2, "0"), s: String(this.$s), ss: M.s(this.$s, 2, "0"), SSS: M.s(this.$ms, 3, "0"), Z: j };
        return B.replace(f, function(oe, ue) {
          return ue || ae[oe] || j.replace(":", "");
        });
      }, g.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, g.diff = function(y, _, D) {
        var B, j = M.p(_), W = L(y), K = (W.utcOffset() - this.utcOffset()) * e, X = this - W, ne = M.m(this, W);
        return ne = (B = {}, B[F] = ne / 12, B[x] = ne, B[k] = ne / 3, B[w] = (X - K) / 6048e5, B[h] = (X - K) / 864e5, B[m] = X / s, B[c] = X / e, B[P] = X / a, B)[j] || X, D ? ne : M.a(ne);
      }, g.daysInMonth = function() {
        return this.endOf(x).$D;
      }, g.$locale = function() {
        return o[this.$L];
      }, g.locale = function(y, _) {
        if (!y)
          return this.$L;
        var D = this.clone(), B = N(y, _, !0);
        return B && (D.$L = B), D;
      }, g.clone = function() {
        return M.w(this.$d, this);
      }, g.toDate = function() {
        return new Date(this.valueOf());
      }, g.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, g.toISOString = function() {
        return this.$d.toISOString();
      }, g.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), q = z.prototype;
    return L.prototype = q, [["$ms", i], ["$s", P], ["$m", c], ["$H", m], ["$W", h], ["$M", x], ["$y", F], ["$D", G]].forEach(function(A) {
      q[A[1]] = function(g) {
        return this.$g(g, A[0], A[1]);
      };
    }), L.extend = function(A, g) {
      return A.$i || (A(g, z, L), A.$i = !0), L;
    }, L.locale = N, L.isDayjs = r, L.unix = function(A) {
      return L(1e3 * A);
    }, L.en = o[T], L.Ls = o, L.p = {}, L;
  });
})(gt);
const l = gt.exports;
var bt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    return function(a, e, s) {
      var i = e.prototype, P = function(x) {
        return x && (x.indexOf ? x : x.s);
      }, c = function(x, k, F, G, S) {
        var V = x.name ? x : x.$locale(), f = P(V[k]), $ = P(V[F]), O = f || $.map(function(T) {
          return T.slice(0, G);
        });
        if (!S)
          return O;
        var Y = V.weekStart;
        return O.map(function(T, o) {
          return O[(o + (Y || 0)) % 7];
        });
      }, m = function() {
        return s.Ls[s.locale()];
      }, h = function(x, k) {
        return x.formats[k] || function(F) {
          return F.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, S, V) {
            return S || V.slice(1);
          });
        }(x.formats[k.toUpperCase()]);
      }, w = function() {
        var x = this;
        return { months: function(k) {
          return k ? k.format("MMMM") : c(x, "months");
        }, monthsShort: function(k) {
          return k ? k.format("MMM") : c(x, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return x.$locale().weekStart || 0;
        }, weekdays: function(k) {
          return k ? k.format("dddd") : c(x, "weekdays");
        }, weekdaysMin: function(k) {
          return k ? k.format("dd") : c(x, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(k) {
          return k ? k.format("ddd") : c(x, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(k) {
          return h(x.$locale(), k);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      i.localeData = function() {
        return w.bind(this)();
      }, s.localeData = function() {
        var x = m();
        return { firstDayOfWeek: function() {
          return x.weekStart || 0;
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
        }, longDateFormat: function(k) {
          return h(x, k);
        }, meridiem: x.meridiem, ordinal: x.ordinal };
      }, s.months = function() {
        return c(m(), "months");
      }, s.monthsShort = function() {
        return c(m(), "monthsShort", "months", 3);
      }, s.weekdays = function(x) {
        return c(m(), "weekdays", null, null, x);
      }, s.weekdaysShort = function(x) {
        return c(m(), "weekdaysShort", "weekdays", 3, x);
      }, s.weekdaysMin = function(x) {
        return c(m(), "weekdaysMin", "weekdays", 2, x);
      };
    };
  });
})(bt);
const Cr = bt.exports;
var kt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, s, i) {
      var P = s.prototype, c = P.format;
      i.en.formats = a, P.format = function(m) {
        m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
        var h = this.$locale().formats, w = function(x, k) {
          return x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(F, G, S) {
            var V = S && S.toUpperCase();
            return G || k[S] || a[S] || k[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(f, $, O) {
              return $ || O.slice(1);
            });
          });
        }(m, h === void 0 ? {} : h);
        return c.call(this, w);
      };
    };
  });
})(kt);
const Yr = kt.exports;
var wt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, P = /\d*[^-_:/,()\s\d]+/, c = {}, m = function(S) {
      return (S = +S) + (S > 68 ? 1900 : 2e3);
    }, h = function(S) {
      return function(V) {
        this[S] = +V;
      };
    }, w = [/[+-]\d\d:?(\d\d)?|Z/, function(S) {
      (this.zone || (this.zone = {})).offset = function(V) {
        if (!V || V === "Z")
          return 0;
        var f = V.match(/([+-]|\d\d)/g), $ = 60 * f[1] + (+f[2] || 0);
        return $ === 0 ? 0 : f[0] === "+" ? -$ : $;
      }(S);
    }], x = function(S) {
      var V = c[S];
      return V && (V.indexOf ? V : V.s.concat(V.f));
    }, k = function(S, V) {
      var f, $ = c.meridiem;
      if ($) {
        for (var O = 1; O <= 24; O += 1)
          if (S.indexOf($(O, 0, V)) > -1) {
            f = O > 12;
            break;
          }
      } else
        f = S === (V ? "pm" : "PM");
      return f;
    }, F = { A: [P, function(S) {
      this.afternoon = k(S, !1);
    }], a: [P, function(S) {
      this.afternoon = k(S, !0);
    }], S: [/\d/, function(S) {
      this.milliseconds = 100 * +S;
    }], SS: [s, function(S) {
      this.milliseconds = 10 * +S;
    }], SSS: [/\d{3}/, function(S) {
      this.milliseconds = +S;
    }], s: [i, h("seconds")], ss: [i, h("seconds")], m: [i, h("minutes")], mm: [i, h("minutes")], H: [i, h("hours")], h: [i, h("hours")], HH: [i, h("hours")], hh: [i, h("hours")], D: [i, h("day")], DD: [s, h("day")], Do: [P, function(S) {
      var V = c.ordinal, f = S.match(/\d+/);
      if (this.day = f[0], V)
        for (var $ = 1; $ <= 31; $ += 1)
          V($).replace(/\[|\]/g, "") === S && (this.day = $);
    }], M: [i, h("month")], MM: [s, h("month")], MMM: [P, function(S) {
      var V = x("months"), f = (x("monthsShort") || V.map(function($) {
        return $.slice(0, 3);
      })).indexOf(S) + 1;
      if (f < 1)
        throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [P, function(S) {
      var V = x("months").indexOf(S) + 1;
      if (V < 1)
        throw new Error();
      this.month = V % 12 || V;
    }], Y: [/[+-]?\d+/, h("year")], YY: [s, function(S) {
      this.year = m(S);
    }], YYYY: [/\d{4}/, h("year")], Z: w, ZZ: w };
    function G(S) {
      var V, f;
      V = S, f = c && c.formats;
      for (var $ = (S = V.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, M, z) {
        var q = z && z.toUpperCase();
        return M || f[z] || a[z] || f[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(A, g, y) {
          return g || y.slice(1);
        });
      })).match(e), O = $.length, Y = 0; Y < O; Y += 1) {
        var T = $[Y], o = F[T], r = o && o[0], N = o && o[1];
        $[Y] = N ? { regex: r, parser: N } : T.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var M = {}, z = 0, q = 0; z < O; z += 1) {
          var A = $[z];
          if (typeof A == "string")
            q += A.length;
          else {
            var g = A.regex, y = A.parser, _ = L.slice(q), D = g.exec(_)[0];
            y.call(M, D), L = L.replace(D, "");
          }
        }
        return function(B) {
          var j = B.afternoon;
          if (j !== void 0) {
            var W = B.hours;
            j ? W < 12 && (B.hours += 12) : W === 12 && (B.hours = 0), delete B.afternoon;
          }
        }(M), M;
      };
    }
    return function(S, V, f) {
      f.p.customParseFormat = !0, S && S.parseTwoDigitYear && (m = S.parseTwoDigitYear);
      var $ = V.prototype, O = $.parse;
      $.parse = function(Y) {
        var T = Y.date, o = Y.utc, r = Y.args;
        this.$u = o;
        var N = r[1];
        if (typeof N == "string") {
          var L = r[2] === !0, M = r[3] === !0, z = L || M, q = r[2];
          M && (q = r[2]), c = this.$locale(), !L && q && (c = f.Ls[q]), this.$d = function(_, D, B) {
            try {
              if (["x", "X"].indexOf(D) > -1)
                return new Date((D === "X" ? 1e3 : 1) * _);
              var j = G(D)(_), W = j.year, K = j.month, X = j.day, ne = j.hours, pe = j.minutes, ve = j.seconds, ge = j.milliseconds, he = j.zone, ae = new Date(), oe = X || (W || K ? 1 : ae.getDate()), ue = W || ae.getFullYear(), ye = 0;
              W && !K || (ye = K > 0 ? K - 1 : ae.getMonth());
              var xe = ne || 0, je = pe || 0, Le = ve || 0, Be = ge || 0;
              return he ? new Date(Date.UTC(ue, ye, oe, xe, je, Le, Be + 60 * he.offset * 1e3)) : B ? new Date(Date.UTC(ue, ye, oe, xe, je, Le, Be)) : new Date(ue, ye, oe, xe, je, Le, Be);
            } catch {
              return new Date("");
            }
          }(T, N, o), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), z && T != this.format(N) && (this.$d = new Date("")), c = {};
        } else if (N instanceof Array)
          for (var A = N.length, g = 1; g <= A; g += 1) {
            r[1] = N[g - 1];
            var y = f.apply(this, r);
            if (y.isValid()) {
              this.$d = y.$d, this.$L = y.$L, this.init();
              break;
            }
            g === A && (this.$d = new Date(""));
          }
        else
          O.call(this, Y);
      };
    };
  });
})(wt);
const Tr = wt.exports;
var $t = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    return function(a, e, s) {
      e.prototype.isToday = function() {
        var i = "YYYY-MM-DD", P = s();
        return this.format(i) === P.format(i);
      };
    };
  });
})($t);
const Ar = $t.exports;
var Mt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    return function(a, e, s) {
      e.prototype.isBetween = function(i, P, c, m) {
        var h = s(i), w = s(P), x = (m = m || "()")[0] === "(", k = m[1] === ")";
        return (x ? this.isAfter(h, c) : !this.isBefore(h, c)) && (k ? this.isBefore(w, c) : !this.isAfter(w, c)) || (x ? this.isBefore(h, c) : !this.isAfter(h, c)) && (k ? this.isAfter(w, c) : !this.isBefore(w, c));
      };
    };
  });
})(Mt);
const jr = Mt.exports;
var St = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    var a, e, s = 1e3, i = 6e4, P = 36e5, c = 864e5, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, w = 2592e6, x = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, k = { years: h, months: w, days: c, hours: P, minutes: i, seconds: s, milliseconds: 1, weeks: 6048e5 }, F = function(T) {
      return T instanceof Y;
    }, G = function(T, o, r) {
      return new Y(T, r, o.$l);
    }, S = function(T) {
      return e.p(T) + "s";
    }, V = function(T) {
      return T < 0;
    }, f = function(T) {
      return V(T) ? Math.ceil(T) : Math.floor(T);
    }, $ = function(T) {
      return Math.abs(T);
    }, O = function(T, o) {
      return T ? V(T) ? { negative: !0, format: "" + $(T) + o } : { negative: !1, format: "" + T + o } : { negative: !1, format: "" };
    }, Y = function() {
      function T(r, N, L) {
        var M = this;
        if (this.$d = {}, this.$l = L, r === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), N)
          return G(r * k[S(N)], this);
        if (typeof r == "number")
          return this.$ms = r, this.parseFromMilliseconds(), this;
        if (typeof r == "object")
          return Object.keys(r).forEach(function(A) {
            M.$d[S(A)] = r[A];
          }), this.calMilliseconds(), this;
        if (typeof r == "string") {
          var z = r.match(x);
          if (z) {
            var q = z.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var o = T.prototype;
      return o.calMilliseconds = function() {
        var r = this;
        this.$ms = Object.keys(this.$d).reduce(function(N, L) {
          return N + (r.$d[L] || 0) * k[L];
        }, 0);
      }, o.parseFromMilliseconds = function() {
        var r = this.$ms;
        this.$d.years = f(r / h), r %= h, this.$d.months = f(r / w), r %= w, this.$d.days = f(r / c), r %= c, this.$d.hours = f(r / P), r %= P, this.$d.minutes = f(r / i), r %= i, this.$d.seconds = f(r / s), r %= s, this.$d.milliseconds = r;
      }, o.toISOString = function() {
        var r = O(this.$d.years, "Y"), N = O(this.$d.months, "M"), L = +this.$d.days || 0;
        this.$d.weeks && (L += 7 * this.$d.weeks);
        var M = O(L, "D"), z = O(this.$d.hours, "H"), q = O(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3);
        var g = O(A, "S"), y = r.negative || N.negative || M.negative || z.negative || q.negative || g.negative, _ = z.format || q.format || g.format ? "T" : "", D = (y ? "-" : "") + "P" + r.format + N.format + M.format + _ + z.format + q.format + g.format;
        return D === "P" || D === "-P" ? "P0D" : D;
      }, o.toJSON = function() {
        return this.toISOString();
      }, o.format = function(r) {
        var N = r || "YYYY-MM-DDTHH:mm:ss", L = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return N.replace(m, function(M, z) {
          return z || String(L[M]);
        });
      }, o.as = function(r) {
        return this.$ms / k[S(r)];
      }, o.get = function(r) {
        var N = this.$ms, L = S(r);
        return L === "milliseconds" ? N %= 1e3 : N = L === "weeks" ? f(N / k[L]) : this.$d[L], N === 0 ? 0 : N;
      }, o.add = function(r, N, L) {
        var M;
        return M = N ? r * k[S(N)] : F(r) ? r.$ms : G(r, this).$ms, G(this.$ms + M * (L ? -1 : 1), this);
      }, o.subtract = function(r, N) {
        return this.add(r, N, !0);
      }, o.locale = function(r) {
        var N = this.clone();
        return N.$l = r, N;
      }, o.clone = function() {
        return G(this.$ms, this);
      }, o.humanize = function(r) {
        return a().add(this.$ms, "ms").locale(this.$l).fromNow(!r);
      }, o.milliseconds = function() {
        return this.get("milliseconds");
      }, o.asMilliseconds = function() {
        return this.as("milliseconds");
      }, o.seconds = function() {
        return this.get("seconds");
      }, o.asSeconds = function() {
        return this.as("seconds");
      }, o.minutes = function() {
        return this.get("minutes");
      }, o.asMinutes = function() {
        return this.as("minutes");
      }, o.hours = function() {
        return this.get("hours");
      }, o.asHours = function() {
        return this.as("hours");
      }, o.days = function() {
        return this.get("days");
      }, o.asDays = function() {
        return this.as("days");
      }, o.weeks = function() {
        return this.get("weeks");
      }, o.asWeeks = function() {
        return this.as("weeks");
      }, o.months = function() {
        return this.get("months");
      }, o.asMonths = function() {
        return this.as("months");
      }, o.years = function() {
        return this.get("years");
      }, o.asYears = function() {
        return this.as("years");
      }, T;
    }();
    return function(T, o, r) {
      a = r, e = r().$utils(), r.duration = function(M, z) {
        var q = r.locale();
        return G(M, { $l: q }, z);
      }, r.isDuration = F;
      var N = o.prototype.add, L = o.prototype.subtract;
      o.prototype.add = function(M, z) {
        return F(M) && (M = M.asMilliseconds()), N.bind(this)(M, z);
      }, o.prototype.subtract = function(M, z) {
        return F(M) && (M = M.asMilliseconds()), L.bind(this)(M, z);
      };
    };
  });
})(St);
const Lr = St.exports;
function Br() {
  const t = (c) => {
    const m = [], h = c.localeData().firstDayOfWeek();
    for (let w = 0; w <= c.date(0 - h).day(); w++)
      m.push(c.date(0).subtract(w, "day"));
    return m.sort((w, x) => w.date() - x.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (m, h) => c.date(h + 1)
    ),
    useNextDate: (c) => {
      const m = [];
      for (let h = 1; h <= 42 - (t(c).length + c.daysInMonth()); h++)
        m.push(c.date(h).month(c.month()).add(1, "month"));
      return m;
    },
    useDisableDate: (c, { disableDate: m }) => typeof m == "function" ? m(c.toDate()) : !1,
    useBetweenRange: (c, { previous: m, next: h }) => {
      let w;
      return m.isAfter(h, "date") ? w = "(]" : w = "[)", !!(c.isBetween(m, h, "date", w) && !c.off);
    },
    useToValueFromString: (c, { formatter: m }) => c.format(m.date),
    useToValueFromArray: ({ previous: c, next: m }, { formatter: h, separator: w }) => `${c.format(h.date)}${w}${m.format(h.date)}`
  };
}
function Er() {
  return {
    useVisibleViewport: (u) => {
      if (u) {
        const { right: a } = u.getBoundingClientRect(), e = window.innerWidth || document.documentElement.clientWidth;
        return a > e;
      } else
        return null;
    }
  };
}
const Fr = ["placeholder"], Nr = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Hr = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Rr = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Ir = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Ur = { class: "flex flex-wrap lg:flex-nowrap" }, Wr = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, zr = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Zr = /* @__PURE__ */ C("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Gr = [
  Zr
], Kr = { class: "px-0.5 sm:px-2" }, Jr = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, qr = { class: "px-0.5 sm:px-2" }, Xr = { key: 0 }, Qr = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, en = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, tn = ["disabled", "onClick", "textContent"], rn = ["onClick", "textContent"], nn = {
  key: 1,
  class: "sm:hidden"
}, on = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, an = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, sn = ["onClick", "textContent"], ln = {
  key: 1,
  class: "flex"
}, un = { class: "bg-white rounded-lg shadow-sm border-0 border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, dn = { class: "flex flex-wrap lg:flex-nowrap" }, cn = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, fn = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, vn = /* @__PURE__ */ C("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), pn = [
  vn
], mn = { class: "px-0.5 sm:px-2" }, hn = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, yn = { class: "px-0.5 sm:px-2" }, xn = { key: 0 }, gn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, bn = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, kn = ["disabled", "textContent"], wn = {
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
  setup(t, { expose: u, emit: a }) {
    const e = t, {
      useCurrentDate: s,
      useDisableDate: i,
      useBetweenRange: P,
      useNextDate: c,
      usePreviousDate: m,
      useToValueFromArray: h,
      useToValueFromString: w
    } = Br(), { useVisibleViewport: x } = Er();
    l.extend(Cr), l.extend(Yr), l.extend(Tr), l.extend(Ar), l.extend(jr), l.extend(Lr);
    const k = re(null), F = re(null), G = re(null), S = re(""), V = re(null), f = re(""), $ = re([]), O = re([]), Y = re(null), T = re(null), o = Pt({
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
    }), r = re({
      previous: l(),
      next: l().add(1, "month"),
      year: {
        previous: l().year(),
        next: l().year()
      },
      weeks: e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort(),
      months: e.formatter.month === "MMM" ? l.monthsShort() : l.months()
    }), N = fe(() => r.value.weeks), L = fe(() => r.value.months), M = fe(() => {
      const { previous: d, next: v, year: b } = H(r);
      return {
        previous: {
          date: () => m(d).concat(s(d)).concat(c(d)).map((n) => (n.today = n.isToday(), n.active = d.month() === n.month(), n.off = d.month() !== n.month(), n.sunday = n.day() === 0, n.disabled = i(n, e) && !D(n), n.inRange = () => {
            if (e.asSingle && !e.useRange)
              return d.month() !== n.month();
          }, n.hovered = () => _() && $.value.length > 1 ? (n.isBetween($.value[0], $.value[1], "date", "()") || n.isBetween($.value[1], $.value[0], "date", "(]")) && d.month() === n.month() : !1, n.duration = () => !1, n)),
          month: d && d.format(e.formatter.month),
          year: d && d.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (n, p) => b.previous + p
          ),
          onPrevious: () => {
            r.value.previous = d.subtract(1, "month"), a("click:prev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = d.add(1, "month"), d.diff(v, "month") === -1 && (r.value.next = v.add(1, "month")), a("click:next", r.value.previous);
          },
          onPreviousYear: () => {
            r.value.year.previous = r.value.year.previous - 12;
          },
          onNextYear: () => {
            r.value.year.previous = r.value.year.previous + 12;
          },
          openMonth: () => {
            o.previous.month = !o.previous.month, o.previous.year = !1, o.previous.calendar = !o.previous.month;
          },
          setMount: (n) => {
            r.value.previous = d.month(n), o.previous.month = !o.previous.month, o.previous.year = !1, o.previous.calendar = !o.previous.month, a("select:month", r.value.previous), Ee(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            o.previous.year = !o.previous.year, o.previous.month = !1, o.previous.calendar = !o.previous.year;
          },
          setYear: (n, p) => {
            p || (r.value.previous = d.year(n), o.previous.year = !o.previous.year, o.previous.calendar = !o.previous.year, a("select:year", r.value.previous), Ee(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        },
        next: {
          date: () => m(v).concat(s(v)).concat(c(v)).map((n) => (n.today = n.isToday(), n.active = v.month() === n.month(), n.off = v.month() !== n.month(), n.sunday = n.day() === 0, n.disabled = i(n, e) && !D(n), n.inRange = () => {
            if (e.asSingle && !e.useRange)
              return v.month() !== n.month();
          }, n.hovered = () => $.value.length > 1 ? (n.isBetween($.value[0], $.value[1], "date", "()") || n.isBetween($.value[1], $.value[0], "date", "(]")) && v.month() === n.month() : !1, n.duration = () => !1, n)),
          month: v && v.format(e.formatter.month),
          year: v && v.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (n, p) => b.next + p
          ),
          onPrevious: () => {
            r.value.next = v.subtract(1, "month"), v.diff(d, "month") === 1 && (r.value.previous = d.subtract(1, "month")), a("click:right:prev", r.value.next);
          },
          onNext: () => {
            r.value.next = v.add(1, "month"), a("click:right:next", r.value.next);
          },
          onPreviousYear: () => {
            r.value.year.next = r.value.year.next - 12;
          },
          onNextYear: () => {
            r.value.year.next = r.value.year.next + 12;
          },
          openMonth: () => {
            o.next.month = !o.next.month, o.next.year = !1, o.next.calendar = !o.next.month;
          },
          setMount: (n) => {
            r.value.next = v.month(n), o.next.month = !o.next.month, o.next.year = !1, o.next.calendar = !o.next.month, a("select:right:month", r.value.next), Ee(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            o.next.year = !o.next.year, o.next.month = !1, o.next.calendar = !o.next.year;
          },
          setYear: (n, p) => {
            p && (r.value.next = v.year(n), o.next.year = !o.next.year, o.next.month = !1, o.next.calendar = !o.next.year, a("select:right:year", r.value.next), Ee(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        }
      };
    }), z = re(!1);
    setTimeout(() => {
      z.value = !0;
    }, 250);
    const q = () => l().localeData().firstDayOfWeek(), A = (d) => {
      const v = [...d], b = v.shift();
      return [...v, b];
    }, g = () => Array.isArray(e.modelValue), y = () => typeof e.modelValue == "object", _ = () => !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle), D = (d) => {
      if (e.disableInRange || f.value === "")
        return !1;
      let v, b;
      if (g()) {
        const [n, p] = e.modelValue;
        v = n, b = p;
      } else if (y()) {
        if (e.modelValue) {
          const [n, p] = Object.values(e.modelValue);
          v = n, b = p;
        }
      } else {
        const [n, p] = e.modelValue.split(e.separator);
        v = n, b = p;
      }
      return d.isBetween(l(v, e.formatter.date, !0), l(b, e.formatter.date, !0), "date", "[]");
    }, B = () => {
      Y.value = null, T.value = null, $.value = [], V.value = null;
    }, j = () => {
      if (f.value = "", g())
        a("update:modelValue", []);
      else if (y()) {
        const d = {}, [v, b] = Object.keys(e.modelValue);
        d[v] = "", d[b] = "", a("update:modelValue", d);
      } else
        a("update:modelValue", "");
      O.value = [], F.value && F.value.focus();
    };
    u({ clearPicker: j });
    const W = () => {
      if (_()) {
        const [d, v] = f.value.split(e.separator), [b, n] = [l(d, e.formatter.date, !0), l(v, e.formatter.date, !0)];
        if (b.isValid() && n.isValid())
          if (K(b), K(n), g())
            a("update:modelValue", [d, v]);
          else if (y()) {
            const p = {}, [E, R] = Object.keys(e.modelValue);
            p[E] = d, p[R] = v, a("update:modelValue", p);
          } else
            a(
              "update:modelValue",
              h(
                {
                  previous: b,
                  next: n
                },
                e
              )
            );
      } else {
        const d = l(f.value, e.formatter.date, !0);
        if (d.isValid())
          if (K(d), g())
            a("update:modelValue", [f.value]);
          else if (y()) {
            const v = {}, [b] = Object.keys(e.modelValue);
            v[b] = f.value, a("update:modelValue", v);
          } else
            a("update:modelValue", f.value);
      }
    }, K = (d, v, b) => {
      if (_())
        if (Y.value)
          if (T.value = d, e.autoApply) {
            d.isBefore(Y.value) ? f.value = h(
              {
                previous: d,
                next: Y.value
              },
              e
            ) : f.value = h(
              {
                previous: Y.value,
                next: d
              },
              e
            );
            const [n, p] = f.value.split(e.separator);
            if (g())
              a("update:modelValue", [
                l(n, e.formatter.date, !0).format(e.formatter.date),
                l(p, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (y()) {
              const E = {}, [R, ee] = Object.keys(e.modelValue);
              E[R] = n, E[ee] = p, a("update:modelValue", E);
            } else
              a(
                "update:modelValue",
                h(
                  {
                    previous: l(n, e.formatter.date, !0),
                    next: l(p, e.formatter.date, !0)
                  },
                  e
                )
              );
            b && b(), O.value = [], l(n, e.formatter.date, !0).isSame(l(p, e.formatter.date, !0), "month") || (r.value.previous = l(n, e.formatter.date, !0), r.value.next = l(p, e.formatter.date, !0)), B();
          } else {
            Y.value.isAfter(d, "month") ? O.value = [d, Y.value] : O.value = [Y.value, d];
            const [n, p] = O.value;
            n.isSame(p, "month") || (r.value.previous = n, r.value.next = p), B();
          }
        else
          O.value = [], Y.value = d, V.value = d, $.value.push(d), O.value.push(d), v ? (r.value.next = d, r.value.previous.isSame(d, "month") && (r.value.next = d.add(1, "month"))) : (r.value.previous = d, r.value.next.isSame(d, "month") && (r.value.previous = r.value.next, r.value.next = d.add(1, "month")));
      else if (e.autoApply) {
        if (f.value = w(d, e), g())
          a("update:modelValue", [f.value]);
        else if (y()) {
          const n = {}, [p] = Object.keys(e.modelValue);
          n[p] = f.value, a("update:modelValue", n);
        } else
          a("update:modelValue", f.value);
        b && b(), O.value = [], B();
      } else
        O.value = [d], B();
    }, X = (d) => {
      if (O.value.length < 1)
        return !1;
      let v;
      if (_()) {
        const [b, n] = O.value;
        n.isBefore(b) ? v = h(
          {
            previous: n,
            next: b
          },
          e
        ) : v = h(
          {
            previous: b,
            next: n
          },
          e
        );
      } else {
        const [b] = O.value;
        v = b;
      }
      if (_()) {
        const [b, n] = v.split(e.separator);
        if (g())
          a("update:modelValue", [
            l(b, e.formatter.date, !0).format(e.formatter.date),
            l(n, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (y()) {
          const p = {}, [E, R] = Object.keys(e.modelValue);
          p[E] = b, p[R] = n, a("update:modelValue", p);
        } else
          a(
            "update:modelValue",
            h(
              {
                previous: l(b, e.formatter.date, !0),
                next: l(n, e.formatter.date, !0)
              },
              e
            )
          );
        f.value = v;
      } else if (f.value = v.format(e.formatter.date), g())
        a("update:modelValue", [f.value]);
      else if (y()) {
        const b = {}, [n] = Object.keys(e.modelValue);
        b[n] = f.value, a("update:modelValue", b);
      } else
        a("update:modelValue", f.value);
      d && d();
    }, ne = (d) => {
      if (!_())
        return !1;
      if (Y.value)
        $.value = [Y.value, d];
      else
        return $.value = [], !1;
    }, pe = (d) => {
      if (Y.value && e.autoApply)
        return !1;
      let v, b;
      if ($.value.length > 1) {
        const [n, p] = $.value;
        v = l(n, e.formatter.date, !0), b = l(p, e.formatter.date, !0);
      } else if (g())
        if (e.autoApply) {
          const [n, p] = e.modelValue;
          v = n && l(n, e.formatter.date, !0), b = p && l(p, e.formatter.date, !0);
        } else {
          const [n, p] = O.value;
          v = l(n, e.formatter.date, !0), b = l(p, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue) {
            const [n, p] = Object.values(e.modelValue);
            v = n && l(n, e.formatter.date, !0), b = p && l(p, e.formatter.date, !0);
          }
        } else {
          const [n, p] = O.value;
          v = l(n, e.formatter.date, !0), b = l(p, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [n, p] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        v = n && l(n, e.formatter.date, !0), b = p && l(p, e.formatter.date, !0);
      } else {
        const [n, p] = O.value;
        v = l(n, e.formatter.date, !0), b = l(p, e.formatter.date, !0);
      }
      return v && b ? P(d, {
        previous: v,
        next: b
      }) : !1;
    }, ve = (d) => {
      const { today: v, active: b, off: n, disabled: p } = d;
      let E, R, ee;
      if (_())
        if (g())
          if (V.value) {
            const [I, Q] = $.value;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [I, Q] = e.modelValue;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          } else {
            const [I, Q] = O.value;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          }
        else if (y())
          if (V.value) {
            const [I, Q] = $.value;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [I, Q] = e.modelValue ? Object.values(e.modelValue) : [!1, !1];
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          } else {
            const [I, Q] = O.value;
            R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
          }
        else if (V.value) {
          const [I, Q] = $.value;
          R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [I, Q] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
          R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
        } else {
          const [I, Q] = O.value;
          R = I && l(I, e.formatter.date, !0), ee = Q && l(Q, e.formatter.date, !0);
        }
      else if (g())
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [I] = e.modelValue;
            R = l(I, e.formatter.date, !0);
          }
        } else {
          const [I] = O.value;
          R = I && l(I, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue) {
            const [I] = Object.values(e.modelValue);
            R = l(I, e.formatter.date, !0);
          }
        } else {
          const [I] = O.value;
          R = I && l(I, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [I] = e.modelValue.split(e.separator);
          R = l(I, e.formatter.date, !0);
        }
      } else {
        const [I] = O.value;
        R = I && l(I, e.formatter.date, !0);
      }
      return b && (E = v ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : p ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : d.isBetween(R, ee, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), n && (E = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), R && ee && !n ? (d.isSame(R, "date") && (E = ee.isAfter(R, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", R.isSame(ee, "date") && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), d.isSame(ee, "date") && (E = ee.isAfter(R, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", R.isSame(ee, "date") && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : R && d.isSame(R, "date") && !n && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), E;
    }, ge = (d) => {
      let v, b, n;
      if (v = "", !_())
        return v;
      if (g())
        if ($.value.length > 1) {
          const [p, E] = $.value;
          b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [p, E] = e.modelValue;
          b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        } else {
          const [p, E] = O.value;
          b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        }
      else if (y())
        if ($.value.length > 1) {
          const [p, E] = $.value;
          b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [p, E] = Object.values(e.modelValue);
            b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
          }
        } else {
          const [p, E] = O.value;
          b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        }
      else if ($.value.length > 1) {
        const [p, E] = $.value;
        b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [p, E] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
      } else {
        const [p, E] = O.value;
        b = p && l(p, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
      }
      return b && n && (d.isSame(b, "date") ? (n.isBefore(b) && (v += " rounded-r-full inset-0"), b.isBefore(n) && (v += " rounded-l-full inset-0")) : d.isSame(n, "date") ? (n.isBefore(b) && (v += " rounded-l-full inset-0"), b.isBefore(n) && (v += " rounded-r-full inset-0")) : v += " inset-0"), v;
    }, he = (d, v) => {
      r.value.previous = l(d, e.formatter.date, !0), r.value.next = l(v, e.formatter.date, !0), (l.duration(r.value.next.diff(r.value.previous)).$d.months === 2 || l.duration(r.value.next.diff(r.value.previous)).$d.months === 1 && l.duration(r.value.next.diff(r.value.previous)).$d.days === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }, ae = (d, v) => {
      if (_())
        if (e.autoApply) {
          if (g())
            a("update:modelValue", [d, v]);
          else if (y()) {
            const b = {}, [n, p] = Object.keys(e.modelValue);
            b[n] = d, b[p] = v, a("update:modelValue", b);
          } else
            a(
              "update:modelValue",
              h(
                {
                  previous: l(d, e.formatter.date, !0),
                  next: l(v, e.formatter.date, !0)
                },
                e
              )
            );
          f.value = `${d}${e.separator}${v}`;
        } else
          O.value = [l(d, e.formatter.date, !0), l(v, e.formatter.date, !0)];
      else if (e.autoApply) {
        if (g())
          a("update:modelValue", [d]);
        else if (y()) {
          const b = {}, [n] = Object.keys(e.modelValue);
          b[n] = d, a("update:modelValue", b);
        } else
          a("update:modelValue", d);
        f.value = d;
      } else
        O.value = [l(d, e.formatter.date, !0), l(v, e.formatter.date, !0)];
      he(d, v);
    }, oe = (d) => {
      const v = l().format(e.formatter.date), b = l().format(e.formatter.date);
      ae(v, b), d && d();
    }, ue = (d) => {
      const v = l().subtract(1, "day").format(e.formatter.date), b = l().subtract(1, "day").format(e.formatter.date);
      ae(v, b), d && d();
    }, ye = (d, v) => {
      const b = l().subtract(d - 1, "day").format(e.formatter.date), n = l().format(e.formatter.date);
      ae(b, n), v && v();
    }, xe = (d) => {
      const v = l().date(1).format(e.formatter.date), b = l().date(l().daysInMonth()).format(e.formatter.date);
      ae(v, b), d && d();
    }, je = (d) => {
      const v = l().date(1).subtract(1, "month").format(e.formatter.date), b = l().date(0).format(e.formatter.date);
      ae(v, b), d && d();
    }, Le = (d, v) => {
      let b, n;
      const [p, E] = d.atClick();
      b = l(p).format(e.formatter.date), n = l(E).format(e.formatter.date), ae(b, n), v && v();
    };
    Ct(
      () => O.value,
      (d) => {
        d.length > 0 && (o.previous.calendar = !0, o.previous.month = !1, o.previous.year = !1, o.next.calendar = !0, o.next.month = !1, o.next.year = !1);
      }
    ), be(() => {
      e.placeholder ? S.value = e.placeholder : _() ? S.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : S.value = e.formatter.date;
    }), be(() => {
      const d = e.i18n;
      Ee(() => {
        const v = /* @__PURE__ */ Object.assign({ "./locale/en.js": () => import("./en.c289298e.mjs") });
        for (const b in v)
          v[b]().then(() => {
            l.locale(d);
            let n, p;
            if (_()) {
              if (g()) {
                if (e.modelValue.length > 0) {
                  const [R, ee] = e.modelValue;
                  n = l(R, e.formatter.date, !0), p = l(ee, e.formatter.date, !0);
                }
              } else if (y()) {
                if (!Yt(e.modelValue))
                  try {
                    Object.keys(e.modelValue);
                  } catch {
                    console.warn(
                      "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                      "font-style: italic; color: #42b883;",
                      ", but you pass it undefined or null."
                    ), console.warn(
                      "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                      "font-style: italic; color: #42b883;",
                      ", but you can replace manually."
                    ), a("update:modelValue", {
                      startDate: "",
                      endDate: ""
                    });
                  }
                if (e.modelValue) {
                  const [R, ee] = Object.values(e.modelValue);
                  n = R && l(R, e.formatter.date, !0), p = ee && l(ee, e.formatter.date, !0);
                }
              } else if (e.modelValue) {
                const [R, ee] = e.modelValue.split(e.separator);
                n = l(R, e.formatter.date, !0), p = l(ee, e.formatter.date, !0);
              }
              n && p ? (f.value = h(
                {
                  previous: n,
                  next: p
                },
                e
              ), p.isBefore(n, "month") ? (r.value.previous = p, r.value.next = n, r.value.year.previous = p.year(), r.value.year.next = n.year()) : p.isSame(n, "month") ? (r.value.previous = n, r.value.next = p.add(1, "month"), r.value.year.previous = n.year(), r.value.year.next = n.add(1, "year").year()) : (r.value.previous = n, r.value.next = p, r.value.year.previous = n.year(), r.value.year.next = p.year()), e.autoApply || (O.value = [n, p])) : (r.value.previous = l(e.startFrom), r.value.next = l(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            } else {
              if (g()) {
                if (e.modelValue.length > 0) {
                  const [R] = e.modelValue;
                  n = l(R, e.formatter.date, !0);
                }
              } else if (y()) {
                if (e.modelValue) {
                  const [R] = Object.values(e.modelValue);
                  n = l(R, e.formatter.date, !0);
                }
              } else if (e.modelValue.length) {
                const [R] = e.modelValue.split(e.separator);
                n = l(R, e.formatter.date, !0);
              }
              n && n.isValid() ? (f.value = w(n, e), r.value.previous = n, r.value.next = n.add(1, "month"), r.value.year.previous = n.year(), r.value.year.next = n.add(1, "year").year(), e.autoApply || (O.value = [n])) : (r.value.previous = l(e.startFrom), r.value.next = l(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            }
            const E = e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort();
            r.value.weeks = q() ? A(E) : E, r.value.months = e.formatter.month === "MMM" ? l.monthsShort() : l.months();
          }).catch((n) => {
            console.warn(n.message);
          });
      });
    });
    const Be = (d) => (d && G.value === null && (G.value = x(k.value)), d && G.value ? "place-right" : "place-left"), nt = (d) => (d && G.value === null && (G.value = x(k.value)), G.value ? "left-auto right-0" : "left-0 right-auto");
    return de("isBetweenRange", pe), de("betweenRangeClasses", ge), de("datepickerClasses", ve), de("atMouseOver", ne), de("setToToday", oe), de("setToYesterday", ue), de("setToLastDay", ye), de("setToThisMonth", xe), de("setToLastMonth", je), de("setToCustomShortcut", Le), (d, v) => e.noInput ? z.value ? (Z(), J("div", ln, [
      C("div", un, [
        C("div", dn, [
          e.shortcuts ? (Z(), Ie(ot, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": _(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : me("", !0),
          C("div", cn, [
            _() && !e.asSingle ? (Z(), J("div", fn, pn)) : me("", !0),
            C("div", {
              class: Se(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": _() && !e.asSingle
              }])
            }, [
              te(Ue, {
                panel: o.previous,
                calendar: H(M).previous
              }, null, 8, ["panel", "calendar"]),
              C("div", mn, [
                le(te(We, {
                  months: H(L),
                  "onUpdate:month": H(M).previous.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ie, o.previous.month]
                ]),
                le(te(Ze, {
                  years: H(M).previous.years(),
                  "onUpdate:year": H(M).previous.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ie, o.previous.year]
                ]),
                le(C("div", null, [
                  te(ze, { weeks: H(N) }, null, 8, ["weeks"]),
                  te(Ge, {
                    calendar: H(M).previous,
                    weeks: H(N),
                    "as-range": _(),
                    "onUpdate:date": v[2] || (v[2] = (b, n) => K(b, n))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ie, o.previous.calendar]
                ])
              ])
            ], 2),
            _() && !e.asSingle ? (Z(), J("div", hn, [
              te(Ue, {
                "as-prev-or-next": "",
                panel: o.next,
                calendar: H(M).next
              }, null, 8, ["panel", "calendar"]),
              C("div", yn, [
                le(te(We, {
                  months: H(L),
                  "onUpdate:month": H(M).next.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ie, o.next.month]
                ]),
                le(te(Ze, {
                  "as-prev-or-next": "",
                  years: H(M).next.years(),
                  "onUpdate:year": H(M).next.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ie, o.next.year]
                ]),
                le(C("div", null, [
                  te(ze, { weeks: H(N) }, null, 8, ["weeks"]),
                  te(Ge, {
                    "as-prev-or-next": "",
                    calendar: H(M).next,
                    weeks: H(N),
                    "as-range": _(),
                    "onUpdate:date": v[3] || (v[3] = (b, n) => K(b, n))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ie, o.next.calendar]
                ])
              ])
            ])) : me("", !0)
          ])
        ]),
        e.autoApply ? me("", !0) : (Z(), J("div", xn, [
          C("div", gn, [
            C("div", bn, [
              C("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? O.value.length < 1 : O.value.length < 2,
                onClick: v[4] || (v[4] = (b) => X()),
                textContent: se(e.options.footer.apply)
              }, null, 8, kn)
            ])
          ])
        ]))
      ])
    ])) : me("", !0) : (Z(), Ie(H(xt), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "relative w-full"
    }, {
      default: Ve(({ open: b }) => [
        e.overlay ? (Z(), Ie(H(Vr), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : me("", !0),
        te(H(_r), {
          as: "label",
          class: "relative block"
        }, {
          default: Ve(() => [
            Tt(d.$slots, "default", {
              value: f.value,
              placeholder: S.value,
              clear: j
            }, () => [
              le(C("input", At({
                ref_key: "VtdInputRef",
                ref: F,
                type: "text",
                class: [
                  "relative block w-full",
                  t.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ],
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other"
              }, d.$attrs, {
                "onUpdate:modelValue": v[0] || (v[0] = (n) => f.value = n),
                placeholder: S.value,
                onKeyup: W
              }), null, 16, Fr), [
                [jt, f.value]
              ]),
              C("div", Nr, [
                C("button", {
                  type: "button",
                  class: "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md",
                  onClick: v[1] || (v[1] = (n) => f.value ? j() : d.$refs.VtdInputRef.focus())
                }, [
                  (Z(), J("svg", Hr, [
                    f.value ? (Z(), J("path", Rr)) : (Z(), J("path", Ir))
                  ]))
                ])
              ])
            ])
          ]),
          _: 3
        }),
        te(st, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: Ve(() => [
            te(H(Pr), {
              as: "div",
              class: "relative z-50"
            }, {
              default: Ve(({ close: n }) => [
                C("div", {
                  class: Se(["absolute z-50 top-full sm:mt-2.5", nt(b)])
                }, [
                  C("div", {
                    ref_key: "VtdRef",
                    ref: k,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    C("div", {
                      class: Se(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Be(b)])
                    }, [
                      C("div", Ur, [
                        e.shortcuts ? (Z(), Ie(ot, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": _(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: n
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : me("", !0),
                        C("div", Wr, [
                          _() && !e.asSingle ? (Z(), J("div", zr, Gr)) : me("", !0),
                          C("div", {
                            class: Se(["relative w-full md:w-1/2 lg:w-80", {
                              "mb-3 sm:mb-0 sm:mr-2": _() && !e.asSingle
                            }])
                          }, [
                            te(Ue, {
                              panel: o.previous,
                              calendar: H(M).previous
                            }, null, 8, ["panel", "calendar"]),
                            C("div", Kr, [
                              le(te(We, {
                                months: H(L),
                                "onUpdate:month": H(M).previous.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ie, o.previous.month]
                              ]),
                              le(te(Ze, {
                                years: H(M).previous.years(),
                                "onUpdate:year": H(M).previous.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ie, o.previous.year]
                              ]),
                              le(C("div", null, [
                                te(ze, { weeks: H(N) }, null, 8, ["weeks"]),
                                te(Ge, {
                                  calendar: H(M).previous,
                                  weeks: H(N),
                                  "as-range": _(),
                                  "onUpdate:date": (p, E) => K(p, E, n)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ie, o.previous.calendar]
                              ])
                            ])
                          ], 2),
                          _() && !e.asSingle ? (Z(), J("div", Jr, [
                            te(Ue, {
                              "as-prev-or-next": "",
                              panel: o.next,
                              calendar: H(M).next
                            }, null, 8, ["panel", "calendar"]),
                            C("div", qr, [
                              le(te(We, {
                                months: H(L),
                                "onUpdate:month": H(M).next.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ie, o.next.month]
                              ]),
                              le(te(Ze, {
                                "as-prev-or-next": "",
                                years: H(M).next.years(),
                                "onUpdate:year": H(M).next.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ie, o.next.year]
                              ]),
                              le(C("div", null, [
                                te(ze, { weeks: H(N) }, null, 8, ["weeks"]),
                                te(Ge, {
                                  "as-prev-or-next": "",
                                  calendar: H(M).next,
                                  weeks: H(N),
                                  "as-range": _(),
                                  "onUpdate:date": (p, E) => K(p, E, n)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ie, o.next.calendar]
                              ])
                            ])
                          ])) : me("", !0)
                        ])
                      ]),
                      e.autoApply ? (Z(), J("div", nn, [
                        C("div", on, [
                          C("div", an, [
                            C("button", {
                              type: "button",
                              onClick: (p) => n(),
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: se(e.options.footer.cancel)
                            }, null, 8, sn)
                          ])
                        ])
                      ])) : (Z(), J("div", Xr, [
                        C("div", Qr, [
                          C("div", en, [
                            C("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? O.value.length < 1 : O.value.length < 2,
                              onClick: (p) => X(n),
                              textContent: se(e.options.footer.apply)
                            }, null, 8, tn),
                            C("button", {
                              type: "button",
                              onClick: (p) => n(),
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: se(e.options.footer.cancel)
                            }, null, 8, rn)
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
}, Dt = /* @__PURE__ */ (() => {
  const t = wn;
  return t.install = (u) => {
    u.component("VueTailwindDatepicker", t);
  }, t;
})(), $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dt
}, Symbol.toStringTag, { value: "Module" }));
Object.entries($n).forEach(([t, u]) => {
  t !== "default" && (Dt[t] = u);
});
export {
  Dt as default
};
