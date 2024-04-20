(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vtd-datepicker-overlay.open:before{display:block;opacity:.5}.vtd-datepicker:before{--vtd-datepicker: 0px;content:"";position:absolute;top:0px;height:1rem;width:1rem;border-width:1px;border-color:#0000001a;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.dark .vtd-datepicker:before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker:before{transform:translate(50%,-50%) rotate(-45deg);-webkit-clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)));clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)))}.vtd-datepicker.place-left:before{left:.25rem}.vtd-datepicker.place-right:before{right:1.25rem}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { openBlock as K, createElementBlock as q, createElementVNode as Y, withDirectives as le, vShow as ie, toDisplayString as se, Fragment as $e, renderList as He, inject as ce, createVNode as te, TransitionGroup as _t, withCtx as Ve, normalizeClass as Se, Transition as lt, unref as H, createCommentVNode as me, withModifiers as Me, cloneVNode as Vt, h as Ye, provide as de, ref as re, onMounted as Pt, watchEffect as be, computed as fe, defineComponent as Te, reactive as Yt, nextTick as Ee, watch as Ct, isProxy as Tt, createBlock as Ie, renderSlot as ot, mergeProps as At, vModelText as jt } from "vue";
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
    return (u, a) => (K(), q("div", Lt, [
      Y("div", Bt, [
        le(Y("span", Et, [
          Y("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[0] || (a[0] = (e) => t.panel.calendar ? t.calendar.onPrevious() : t.calendar.onPreviousYear())
          }, [
            (K(), q("svg", Ft, [
              Y("path", {
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
      Y("div", Ht, [
        Y("span", Rt, [
          Y("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: se(t.calendar.month),
            onClick: a[1] || (a[1] = (e) => t.calendar.openMonth())
          }, null, 8, It)
        ]),
        Y("span", Ut, [
          Y("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: se(t.calendar.year),
            onClick: a[2] || (a[2] = (e) => t.calendar.openYear())
          }, null, 8, Wt)
        ])
      ]),
      Y("div", zt, [
        le(Y("span", Zt, [
          Y("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[3] || (a[3] = (e) => t.panel.calendar ? t.calendar.onNext() : t.calendar.onNextYear())
          }, [
            (K(), q("svg", Gt, [
              Y("path", {
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
    return (a, e) => (K(), q("div", Jt, [
      (K(!0), q($e, null, He(t.months, (s, i) => (K(), q("div", {
        key: i,
        class: "w-1/2 px-0.5"
      }, [
        Y("span", qt, [
          Y("button", {
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
    return (u, a) => (K(), q("div", Qt, [
      (K(!0), q($e, null, He(t.weeks, (e, s) => (K(), q("div", {
        key: s,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        Y("span", {
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
    return (a, e) => (K(), q("div", tr, [
      (K(!0), q($e, null, He(t.years, (s, i) => (K(), q("div", {
        key: i,
        class: "w-1/2 px-0.5"
      }, [
        Y("span", rr, [
          Y("button", {
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
    return (P, c) => (K(), q("div", or, [
      te(_t, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Ve(() => [
          (K(!0), q($e, null, He(t.calendar.date(), (h, y) => (K(), q("div", {
            key: y,
            class: Se(["relative", { "vtd-tooltip": t.asRange && h.duration() }]),
            "data-tooltip": `${h.duration()}`
          }, [
            te(lt, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Ve(() => [
                H(a)(h) || h.hovered() ? (K(), q("span", {
                  key: 0,
                  class: Se(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", H(e)(h)])
                }, null, 2)) : me("", !0)
              ]),
              _: 2
            }, 1024),
            Y("button", {
              type: "button",
              class: Se(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [H(s)(h), t.asRange ? "transition-all" : "transition-colors"]]),
              disabled: h.disabled || h.inRange(),
              onClick: (k) => u("update:date", h, t.asPrevOrNext),
              onMouseenter: (k) => H(i)(h),
              onFocusin: (k) => H(i)(h),
              textContent: se(h.date()),
              "data-date": h.toDate()
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
}, at = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(t) {
    const u = t, a = ce("setToToday"), e = ce("setToYesterday"), s = ce("setToLastDay"), i = ce("setToThisMonth"), P = ce("setToLastMonth"), c = ce("setToCustomShortcut"), h = () => typeof u.shortcuts == "function" ? u.shortcuts() : !1;
    return (y, k) => u.asRange && u.asSingle || u.asRange && !u.asSingle ? (K(), q("div", lr, [
      h() ? (K(), q("ol", ur, [
        (K(!0), q($e, null, He(h(), (x, w) => (K(), q("li", { key: w }, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Me((F) => H(c)(x, t.close), ["prevent"]),
            textContent: se(x.label)
          }, null, 8, ir)
        ]))), 128))
      ])) : (K(), q("ol", dr, [
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[0] || (k[0] = Me((x) => H(a)(t.close), ["prevent"]))
          }, se(u.i18n.today), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[1] || (k[1] = Me((x) => H(e)(t.close), ["prevent"]))
          }, se(u.i18n.yesterday), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[2] || (k[2] = Me((x) => H(s)(7, t.close), ["prevent"]))
          }, se(u.i18n.past(7)), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[3] || (k[3] = Me((x) => H(s)(30, t.close), ["prevent"]))
          }, se(u.i18n.past(30)), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[4] || (k[4] = Me((x) => H(i)(t.close), ["prevent"]))
          }, se(u.i18n.currentMonth), 1)
        ]),
        Y("li", null, [
          Y("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[5] || (k[5] = Me((x) => H(P)(t.close), ["prevent"]))
          }, se(u.i18n.pastMonth), 1)
        ])
      ]))
    ])) : me("", !0);
  }
};
function ke(t, u, ...a) {
  if (t in u) {
    let s = u[t];
    return typeof s == "function" ? s(...a) : s;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(u).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, ke), e;
}
var Fe = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Fe || {}), cr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(cr || {});
function Ae({ visible: t = !0, features: u = 0, ourProps: a, theirProps: e, ...s }) {
  var i;
  let P = fr(e, a), c = Object.assign(s, { props: P });
  if (t || u & 2 && P.static)
    return Xe(c);
  if (u & 1) {
    let h = (i = P.unmount) == null || i ? 0 : 1;
    return ke(h, { [0]() {
      return null;
    }, [1]() {
      return Xe({ ...s, props: { ...P, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Xe(c);
}
function Xe({ props: t, attrs: u, slots: a, slot: e, name: s }) {
  var i;
  let { as: P, ...c } = it(t, ["unmount", "static"]), h = (i = a.default) == null ? void 0 : i.call(a, e), y = {};
  if (e) {
    let k = !1, x = [];
    for (let [w, F] of Object.entries(e))
      typeof F == "boolean" && (k = !0), F === !0 && x.push(w);
    k && (y["data-headlessui-state"] = x.join(" "));
  }
  if (P === "template") {
    if (h = ut(h), Object.keys(c).length > 0 || Object.keys(u).length > 0) {
      let [k, ...x] = h != null ? h : [];
      if (!vr(k) || x.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(u)).sort((w, F) => w.localeCompare(F)).map((w) => `  - ${w}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((w) => `  - ${w}`).join(`
`)].join(`
`));
      return Vt(k, Object.assign({}, c, y));
    }
    return Array.isArray(h) && h.length === 1 ? h[0] : h;
  }
  return Ye(P, Object.assign({}, c, y), h);
}
function ut(t) {
  return t.flatMap((u) => u.type === $e ? ut(u.children) : [u]);
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
function it(t, u = []) {
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
function Ce() {
  return mr();
}
var we = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(we || {});
function U(t) {
  var u;
  return t == null || t.value == null ? null : (u = t.value.$el) != null ? u : t.value;
}
let dt = Symbol("Context");
var Ne = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Ne || {});
function ct() {
  return ce(dt, null);
}
function hr(t) {
  de(dt, t);
}
function st(t, u) {
  if (t)
    return t;
  let a = u != null ? u : "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function yr(t, u) {
  let a = re(st(t.value.type, t.value.as));
  return Pt(() => {
    a.value = st(t.value.type, t.value.as);
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
var De = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(De || {}), xr = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(xr || {}), br = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(br || {});
function ft(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(et));
}
var rt = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(rt || {});
function vt(t, u = 0) {
  var a;
  return t === ((a = Re(t)) == null ? void 0 : a.body) ? !1 : ke(u, { [0]() {
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
let gr = ["textarea", "input"].join(",");
function wr(t) {
  var u, a;
  return (a = (u = t == null ? void 0 : t.matches) == null ? void 0 : u.call(t, gr)) != null ? a : !1;
}
function kr(t, u = (a) => a) {
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
  let i = (s = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? s : document, P = Array.isArray(t) ? a ? kr(t) : t : ft(t);
  e = e != null ? e : i.activeElement;
  let c = (() => {
    if (u & 5)
      return 1;
    if (u & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = (() => {
    if (u & 1)
      return 0;
    if (u & 2)
      return Math.max(0, P.indexOf(e)) - 1;
    if (u & 4)
      return Math.max(0, P.indexOf(e)) + 1;
    if (u & 8)
      return P.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), y = u & 32 ? { preventScroll: !0 } : {}, k = 0, x = P.length, w;
  do {
    if (k >= x || k + x <= 0)
      return 0;
    let F = h + k;
    if (u & 16)
      F = (F + x) % x;
    else {
      if (F < 0)
        return 3;
      if (F >= x)
        return 1;
    }
    w = P[F], w == null || w.focus(y), k += c;
  } while (w !== i.activeElement);
  return u & 6 && wr(w) && w.select(), w.hasAttribute("tabindex") || w.setAttribute("tabindex", "0"), 2;
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
    let h = function y(k) {
      return typeof k == "function" ? y(k()) : Array.isArray(k) || k instanceof Set ? k : [k];
    }(t);
    for (let y of h) {
      if (y === null)
        continue;
      let k = y instanceof HTMLElement ? y : U(y);
      if (k != null && k.contains(c))
        return;
    }
    return !vt(c, rt.Loose) && c.tabIndex !== -1 && i.preventDefault(), u(i, c);
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
function pt() {
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
let mt = Symbol("PopoverContext");
function qe(t) {
  let u = ce(mt, null);
  if (u === null) {
    let a = new Error(`<${t} /> is missing a parent <${bt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, qe), a;
  }
  return u;
}
let ht = Symbol("PopoverGroupContext");
function yt() {
  return ce(ht, null);
}
let xt = Symbol("PopoverPanelContext");
function Or() {
  return ce(xt, null);
}
let bt = Te({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: u, attrs: a, expose: e }) {
  var s;
  let i = `headlessui-popover-button-${Ce()}`, P = `headlessui-popover-panel-${Ce()}`, c = re(null);
  e({ el: c, $el: c });
  let h = re(1), y = re(null), k = re(null), x = re(null), w = re(null), F = fe(() => Re(c)), Z = fe(() => {
    if (!U(y) || !U(w))
      return !1;
    for (let C of document.querySelectorAll("body > *"))
      if (Number(C == null ? void 0 : C.contains(U(y))) ^ Number(C == null ? void 0 : C.contains(U(w))))
        return !0;
    return !1;
  }), S = { popoverState: h, buttonId: i, panelId: P, panel: w, button: y, isPortalled: Z, beforePanelSentinel: k, afterPanelSentinel: x, togglePopover() {
    h.value = ke(h.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    h.value !== 1 && (h.value = 1);
  }, close(C) {
    S.closePopover();
    let T = (() => C ? C instanceof HTMLElement ? C : C.value instanceof HTMLElement ? U(C) : U(S.button) : U(S.button))();
    T == null || T.focus();
  } };
  de(mt, S), hr(fe(() => ke(h.value, { [0]: Ne.Open, [1]: Ne.Closed })));
  let V = { buttonId: i, panelId: P, close() {
    S.closePopover();
  } }, f = yt(), $ = f == null ? void 0 : f.registerPopover;
  function O() {
    var C, T, o, r;
    return (r = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? r : ((C = F.value) == null ? void 0 : C.activeElement) && (((T = U(y)) == null ? void 0 : T.contains(F.value.activeElement)) || ((o = U(w)) == null ? void 0 : o.contains(F.value.activeElement)));
  }
  return be(() => $ == null ? void 0 : $(V)), Sr((s = F.value) == null ? void 0 : s.defaultView, "focus", (C) => {
    var T, o;
    h.value === 0 && (O() || !y || !w || (T = U(S.beforePanelSentinel)) != null && T.contains(C.target) || (o = U(S.afterPanelSentinel)) != null && o.contains(C.target) || S.closePopover());
  }, !0), $r([y, w], (C, T) => {
    var o;
    S.closePopover(), vt(T, rt.Loose) || (C.preventDefault(), (o = U(y)) == null || o.focus());
  }, fe(() => h.value === 0)), () => {
    let C = { open: h.value === 0, close: S.close };
    return Ae({ theirProps: t, ourProps: { ref: c }, slot: C, slots: u, attrs: a, name: "Popover" });
  };
} }), _r = Te({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(t, { attrs: u, slots: a, expose: e }) {
  let s = qe("PopoverButton"), i = fe(() => Re(s.button));
  e({ el: s.button, $el: s.button });
  let P = yt(), c = P == null ? void 0 : P.closeOthers, h = Or(), y = h === null ? !1 : h === s.panelId, k = re(null), x = `headlessui-focus-sentinel-${Ce()}`;
  y || be(() => {
    s.button.value = k.value;
  });
  let w = yr(fe(() => ({ as: t.as, type: u.type })), k);
  function F(f) {
    var $, O, C, T, o;
    if (y) {
      if (s.popoverState.value === 1)
        return;
      switch (f.key) {
        case we.Space:
        case we.Enter:
          f.preventDefault(), (O = ($ = f.target).click) == null || O.call($), s.closePopover(), (C = U(s.button)) == null || C.focus();
          break;
      }
    } else
      switch (f.key) {
        case we.Space:
        case we.Enter:
          f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover();
          break;
        case we.Escape:
          if (s.popoverState.value !== 0)
            return c == null ? void 0 : c(s.buttonId);
          if (!U(s.button) || ((T = i.value) == null ? void 0 : T.activeElement) && !((o = U(s.button)) != null && o.contains(i.value.activeElement)))
            return;
          f.preventDefault(), f.stopPropagation(), s.closePopover();
          break;
      }
  }
  function Z(f) {
    y || f.key === we.Space && f.preventDefault();
  }
  function S(f) {
    var $, O;
    t.disabled || (y ? (s.closePopover(), ($ = U(s.button)) == null || $.focus()) : (f.preventDefault(), f.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover(), (O = U(s.button)) == null || O.focus()));
  }
  function V(f) {
    f.preventDefault(), f.stopPropagation();
  }
  return () => {
    let f = s.popoverState.value === 0, $ = { open: f }, O = y ? { ref: k, type: w.value, onKeydown: F, onClick: S } : { ref: k, id: s.buttonId, type: w.value, "aria-expanded": t.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": U(s.panel) ? s.panelId : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: F, onKeyup: Z, onClick: S, onMousedown: V }, C = pt();
    function T() {
      let o = U(s.panel);
      if (!o)
        return;
      function r() {
        ke(C.value, { [Oe.Forwards]: () => Pe(o, De.First), [Oe.Backwards]: () => Pe(o, De.Last) });
      }
      r();
    }
    return Ye($e, [Ae({ ourProps: O, theirProps: { ...u, ...t }, slot: $, attrs: u, slots: a, name: "PopoverButton" }), f && !y && s.isPortalled.value && Ye(tt, { id: x, features: Ke.Focusable, as: "button", type: "button", onFocus: T })]);
  };
} }), Vr = Te({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: u, slots: a }) {
  let e = qe("PopoverOverlay"), s = `headlessui-popover-overlay-${Ce()}`, i = ct(), P = fe(() => i !== null ? i.value === Ne.Open : e.popoverState.value === 0);
  function c() {
    e.closePopover();
  }
  return () => {
    let h = { open: e.popoverState.value === 0 };
    return Ae({ ourProps: { id: s, "aria-hidden": !0, onClick: c }, theirProps: t, slot: h, attrs: u, slots: a, features: Fe.RenderStrategy | Fe.Static, visible: P.value, name: "PopoverOverlay" });
  };
} }), Pr = Te({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 } }, inheritAttrs: !1, setup(t, { attrs: u, slots: a, expose: e }) {
  let { focus: s } = t, i = qe("PopoverPanel"), P = fe(() => Re(i.panel)), c = `headlessui-focus-sentinel-before-${Ce()}`, h = `headlessui-focus-sentinel-after-${Ce()}`;
  e({ el: i.panel, $el: i.panel }), de(xt, i.panelId), be(() => {
    var V, f;
    if (!s || i.popoverState.value !== 0 || !i.panel)
      return;
    let $ = (V = P.value) == null ? void 0 : V.activeElement;
    (f = U(i.panel)) != null && f.contains($) || Pe(U(i.panel), De.First);
  });
  let y = ct(), k = fe(() => y !== null ? y.value === Ne.Open : i.popoverState.value === 0);
  function x(V) {
    var f, $;
    switch (V.key) {
      case we.Escape:
        if (i.popoverState.value !== 0 || !U(i.panel) || P.value && !((f = U(i.panel)) != null && f.contains(P.value.activeElement)))
          return;
        V.preventDefault(), V.stopPropagation(), i.closePopover(), ($ = U(i.button)) == null || $.focus();
        break;
    }
  }
  function w(V) {
    var f, $, O, C, T;
    let o = V.relatedTarget;
    !o || !U(i.panel) || (f = U(i.panel)) != null && f.contains(o) || (i.closePopover(), (((O = ($ = U(i.beforePanelSentinel)) == null ? void 0 : $.contains) == null ? void 0 : O.call($, o)) || ((T = (C = U(i.afterPanelSentinel)) == null ? void 0 : C.contains) == null ? void 0 : T.call(C, o))) && o.focus({ preventScroll: !0 }));
  }
  let F = pt();
  function Z() {
    let V = U(i.panel);
    if (!V)
      return;
    function f() {
      ke(F.value, { [Oe.Forwards]: () => {
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
      ke(F.value, { [Oe.Forwards]: () => {
        var $, O;
        let C = U(i.button), T = U(i.panel);
        if (!C)
          return;
        let o = ft(), r = o.indexOf(C), N = o.slice(0, r + 1), L = [...o.slice(r + 1), ...N];
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
    let V = { open: i.popoverState.value === 0, close: i.close }, f = { ref: i.panel, id: i.panelId, onKeydown: x, onFocusout: s && i.popoverState.value === 0 ? w : void 0, tabIndex: -1 };
    return Ae({ ourProps: f, theirProps: { ...u, ...it(t, ["focus"]) }, attrs: u, slot: V, slots: { ...a, default: (...$) => {
      var O;
      return [Ye($e, [k.value && i.isPortalled.value && Ye(tt, { id: c, ref: i.beforePanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: Z }), (O = a.default) == null ? void 0 : O.call(a, ...$), k.value && i.isPortalled.value && Ye(tt, { id: h, ref: i.afterPanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: S })])];
    } }, features: Fe.RenderStrategy | Fe.Static, visible: k.value, name: "PopoverPanel" });
  };
} });
Te({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: u, slots: a, expose: e }) {
  let s = re(null), i = re([]), P = fe(() => Re(s));
  e({ el: s, $el: s });
  function c(x) {
    let w = i.value.indexOf(x);
    w !== -1 && i.value.splice(w, 1);
  }
  function h(x) {
    return i.value.push(x), () => {
      c(x);
    };
  }
  function y() {
    var x;
    let w = P.value;
    if (!w)
      return !1;
    let F = w.activeElement;
    return (x = U(s)) != null && x.contains(F) ? !0 : i.value.some((Z) => {
      var S, V;
      return ((S = w.getElementById(Z.buttonId)) == null ? void 0 : S.contains(F)) || ((V = w.getElementById(Z.panelId)) == null ? void 0 : V.contains(F));
    });
  }
  function k(x) {
    for (let w of i.value)
      w.buttonId !== x && w.close();
  }
  return de(ht, { registerPopover: h, unregisterPopover: c, isFocusWithinPopoverGroup: y, closeOthers: k }), () => Ae({ ourProps: { ref: s }, theirProps: t, slot: {}, attrs: u, slots: a, name: "PopoverGroup" });
} });
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    var a = 1e3, e = 6e4, s = 36e5, i = "millisecond", P = "second", c = "minute", h = "hour", y = "day", k = "week", x = "month", w = "quarter", F = "year", Z = "date", S = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var b = ["th", "st", "nd", "rd"], m = A % 100;
      return "[" + A + (b[(m - 20) % 10] || b[m] || b[0]) + "]";
    } }, O = function(A, b, m) {
      var _ = String(A);
      return !_ || _.length >= b ? A : "" + Array(b + 1 - _.length).join(m) + A;
    }, C = { s: O, z: function(A) {
      var b = -A.utcOffset(), m = Math.abs(b), _ = Math.floor(m / 60), D = m % 60;
      return (b <= 0 ? "+" : "-") + O(_, 2, "0") + ":" + O(D, 2, "0");
    }, m: function A(b, m) {
      if (b.date() < m.date())
        return -A(m, b);
      var _ = 12 * (m.year() - b.year()) + (m.month() - b.month()), D = b.clone().add(_, x), B = m - D < 0, j = b.clone().add(_ + (B ? -1 : 1), x);
      return +(-(_ + (m - D) / (B ? D - j : j - D)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: x, y: F, w: k, d: y, D: Z, h, m: c, s: P, ms: i, Q: w }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, T = "en", o = {};
    o[T] = $;
    var r = function(A) {
      return A instanceof z;
    }, N = function A(b, m, _) {
      var D;
      if (!b)
        return T;
      if (typeof b == "string") {
        var B = b.toLowerCase();
        o[B] && (D = B), m && (o[B] = m, D = B);
        var j = b.split("-");
        if (!D && j.length > 1)
          return A(j[0]);
      } else {
        var W = b.name;
        o[W] = b, D = W;
      }
      return !_ && D && (T = D), D || !_ && T;
    }, L = function(A, b) {
      if (r(A))
        return A.clone();
      var m = typeof b == "object" ? b : {};
      return m.date = A, m.args = arguments, new z(m);
    }, M = C;
    M.l = N, M.i = r, M.w = function(A, b) {
      return L(A, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var z = function() {
      function A(m) {
        this.$L = N(m.locale, null, !0), this.parse(m);
      }
      var b = A.prototype;
      return b.parse = function(m) {
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
              var W = j[2] - 1 || 0, G = (j[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(j[1], W, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, G)) : new Date(j[1], W, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, G);
            }
          }
          return new Date(D);
        }(m), this.$x = m.x || {}, this.init();
      }, b.init = function() {
        var m = this.$d;
        this.$y = m.getFullYear(), this.$M = m.getMonth(), this.$D = m.getDate(), this.$W = m.getDay(), this.$H = m.getHours(), this.$m = m.getMinutes(), this.$s = m.getSeconds(), this.$ms = m.getMilliseconds();
      }, b.$utils = function() {
        return M;
      }, b.isValid = function() {
        return this.$d.toString() !== S;
      }, b.isSame = function(m, _) {
        var D = L(m);
        return this.startOf(_) <= D && D <= this.endOf(_);
      }, b.isAfter = function(m, _) {
        return L(m) < this.startOf(_);
      }, b.isBefore = function(m, _) {
        return this.endOf(_) < L(m);
      }, b.$g = function(m, _, D) {
        return M.u(m) ? this[_] : this.set(D, m);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(m, _) {
        var D = this, B = !!M.u(_) || _, j = M.p(m), W = function(ae, oe) {
          var ue = M.w(D.$u ? Date.UTC(D.$y, oe, ae) : new Date(D.$y, oe, ae), D);
          return B ? ue : ue.endOf(y);
        }, G = function(ae, oe) {
          return M.w(D.toDate()[ae].apply(D.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(oe)), D);
        }, X = this.$W, ne = this.$M, pe = this.$D, ve = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case F:
            return B ? W(1, 0) : W(31, 11);
          case x:
            return B ? W(1, ne) : W(0, ne + 1);
          case k:
            var ge = this.$locale().weekStart || 0, he = (X < ge ? X + 7 : X) - ge;
            return W(B ? pe - he : pe + (6 - he), ne);
          case y:
          case Z:
            return G(ve + "Hours", 0);
          case h:
            return G(ve + "Minutes", 1);
          case c:
            return G(ve + "Seconds", 2);
          case P:
            return G(ve + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(m) {
        return this.startOf(m, !1);
      }, b.$set = function(m, _) {
        var D, B = M.p(m), j = "set" + (this.$u ? "UTC" : ""), W = (D = {}, D[y] = j + "Date", D[Z] = j + "Date", D[x] = j + "Month", D[F] = j + "FullYear", D[h] = j + "Hours", D[c] = j + "Minutes", D[P] = j + "Seconds", D[i] = j + "Milliseconds", D)[B], G = B === y ? this.$D + (_ - this.$W) : _;
        if (B === x || B === F) {
          var X = this.clone().set(Z, 1);
          X.$d[W](G), X.init(), this.$d = X.set(Z, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          W && this.$d[W](G);
        return this.init(), this;
      }, b.set = function(m, _) {
        return this.clone().$set(m, _);
      }, b.get = function(m) {
        return this[M.p(m)]();
      }, b.add = function(m, _) {
        var D, B = this;
        m = Number(m);
        var j = M.p(_), W = function(ne) {
          var pe = L(B);
          return M.w(pe.date(pe.date() + Math.round(ne * m)), B);
        };
        if (j === x)
          return this.set(x, this.$M + m);
        if (j === F)
          return this.set(F, this.$y + m);
        if (j === y)
          return W(1);
        if (j === k)
          return W(7);
        var G = (D = {}, D[c] = e, D[h] = s, D[P] = a, D)[j] || 1, X = this.$d.getTime() + m * G;
        return M.w(X, this);
      }, b.subtract = function(m, _) {
        return this.add(-1 * m, _);
      }, b.format = function(m) {
        var _ = this, D = this.$locale();
        if (!this.isValid())
          return D.invalidDate || S;
        var B = m || "YYYY-MM-DDTHH:mm:ssZ", j = M.z(this), W = this.$H, G = this.$m, X = this.$M, ne = D.weekdays, pe = D.months, ve = function(oe, ue, ye, xe) {
          return oe && (oe[ue] || oe(_, B)) || ye[ue].slice(0, xe);
        }, ge = function(oe) {
          return M.s(W % 12 || 12, oe, "0");
        }, he = D.meridiem || function(oe, ue, ye) {
          var xe = oe < 12 ? "AM" : "PM";
          return ye ? xe.toLowerCase() : xe;
        }, ae = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: X + 1, MM: M.s(X + 1, 2, "0"), MMM: ve(D.monthsShort, X, pe, 3), MMMM: ve(pe, X), D: this.$D, DD: M.s(this.$D, 2, "0"), d: String(this.$W), dd: ve(D.weekdaysMin, this.$W, ne, 2), ddd: ve(D.weekdaysShort, this.$W, ne, 3), dddd: ne[this.$W], H: String(W), HH: M.s(W, 2, "0"), h: ge(1), hh: ge(2), a: he(W, G, !0), A: he(W, G, !1), m: String(G), mm: M.s(G, 2, "0"), s: String(this.$s), ss: M.s(this.$s, 2, "0"), SSS: M.s(this.$ms, 3, "0"), Z: j };
        return B.replace(f, function(oe, ue) {
          return ue || ae[oe] || j.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(m, _, D) {
        var B, j = M.p(_), W = L(m), G = (W.utcOffset() - this.utcOffset()) * e, X = this - W, ne = M.m(this, W);
        return ne = (B = {}, B[F] = ne / 12, B[x] = ne, B[w] = ne / 3, B[k] = (X - G) / 6048e5, B[y] = (X - G) / 864e5, B[h] = X / s, B[c] = X / e, B[P] = X / a, B)[j] || X, D ? ne : M.a(ne);
      }, b.daysInMonth = function() {
        return this.endOf(x).$D;
      }, b.$locale = function() {
        return o[this.$L];
      }, b.locale = function(m, _) {
        if (!m)
          return this.$L;
        var D = this.clone(), B = N(m, _, !0);
        return B && (D.$L = B), D;
      }, b.clone = function() {
        return M.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), J = z.prototype;
    return L.prototype = J, [["$ms", i], ["$s", P], ["$m", c], ["$H", h], ["$W", y], ["$M", x], ["$y", F], ["$D", Z]].forEach(function(A) {
      J[A[1]] = function(b) {
        return this.$g(b, A[0], A[1]);
      };
    }), L.extend = function(A, b) {
      return A.$i || (A(b, z, L), A.$i = !0), L;
    }, L.locale = N, L.isDayjs = r, L.unix = function(A) {
      return L(1e3 * A);
    }, L.en = o[T], L.Ls = o, L.p = {}, L;
  });
})(gt);
const l = gt.exports;
var wt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    return function(a, e, s) {
      var i = e.prototype, P = function(x) {
        return x && (x.indexOf ? x : x.s);
      }, c = function(x, w, F, Z, S) {
        var V = x.name ? x : x.$locale(), f = P(V[w]), $ = P(V[F]), O = f || $.map(function(T) {
          return T.slice(0, Z);
        });
        if (!S)
          return O;
        var C = V.weekStart;
        return O.map(function(T, o) {
          return O[(o + (C || 0)) % 7];
        });
      }, h = function() {
        return s.Ls[s.locale()];
      }, y = function(x, w) {
        return x.formats[w] || function(F) {
          return F.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Z, S, V) {
            return S || V.slice(1);
          });
        }(x.formats[w.toUpperCase()]);
      }, k = function() {
        var x = this;
        return { months: function(w) {
          return w ? w.format("MMMM") : c(x, "months");
        }, monthsShort: function(w) {
          return w ? w.format("MMM") : c(x, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return x.$locale().weekStart || 0;
        }, weekdays: function(w) {
          return w ? w.format("dddd") : c(x, "weekdays");
        }, weekdaysMin: function(w) {
          return w ? w.format("dd") : c(x, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(w) {
          return w ? w.format("ddd") : c(x, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(w) {
          return y(x.$locale(), w);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      i.localeData = function() {
        return k.bind(this)();
      }, s.localeData = function() {
        var x = h();
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
        }, longDateFormat: function(w) {
          return y(x, w);
        }, meridiem: x.meridiem, ordinal: x.ordinal };
      }, s.months = function() {
        return c(h(), "months");
      }, s.monthsShort = function() {
        return c(h(), "monthsShort", "months", 3);
      }, s.weekdays = function(x) {
        return c(h(), "weekdays", null, null, x);
      }, s.weekdaysShort = function(x) {
        return c(h(), "weekdaysShort", "weekdays", 3, x);
      }, s.weekdaysMin = function(x) {
        return c(h(), "weekdaysMin", "weekdays", 2, x);
      };
    };
  });
})(wt);
const Yr = wt.exports;
var kt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, s, i) {
      var P = s.prototype, c = P.format;
      i.en.formats = a, P.format = function(h) {
        h === void 0 && (h = "YYYY-MM-DDTHH:mm:ssZ");
        var y = this.$locale().formats, k = function(x, w) {
          return x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(F, Z, S) {
            var V = S && S.toUpperCase();
            return Z || w[S] || a[S] || w[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(f, $, O) {
              return $ || O.slice(1);
            });
          });
        }(h, y === void 0 ? {} : y);
        return c.call(this, k);
      };
    };
  });
})(kt);
const Cr = kt.exports;
var $t = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, P = /\d*[^-_:/,()\s\d]+/, c = {}, h = function(S) {
      return (S = +S) + (S > 68 ? 1900 : 2e3);
    }, y = function(S) {
      return function(V) {
        this[S] = +V;
      };
    }, k = [/[+-]\d\d:?(\d\d)?|Z/, function(S) {
      (this.zone || (this.zone = {})).offset = function(V) {
        if (!V || V === "Z")
          return 0;
        var f = V.match(/([+-]|\d\d)/g), $ = 60 * f[1] + (+f[2] || 0);
        return $ === 0 ? 0 : f[0] === "+" ? -$ : $;
      }(S);
    }], x = function(S) {
      var V = c[S];
      return V && (V.indexOf ? V : V.s.concat(V.f));
    }, w = function(S, V) {
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
      this.afternoon = w(S, !1);
    }], a: [P, function(S) {
      this.afternoon = w(S, !0);
    }], S: [/\d/, function(S) {
      this.milliseconds = 100 * +S;
    }], SS: [s, function(S) {
      this.milliseconds = 10 * +S;
    }], SSS: [/\d{3}/, function(S) {
      this.milliseconds = +S;
    }], s: [i, y("seconds")], ss: [i, y("seconds")], m: [i, y("minutes")], mm: [i, y("minutes")], H: [i, y("hours")], h: [i, y("hours")], HH: [i, y("hours")], hh: [i, y("hours")], D: [i, y("day")], DD: [s, y("day")], Do: [P, function(S) {
      var V = c.ordinal, f = S.match(/\d+/);
      if (this.day = f[0], V)
        for (var $ = 1; $ <= 31; $ += 1)
          V($).replace(/\[|\]/g, "") === S && (this.day = $);
    }], M: [i, y("month")], MM: [s, y("month")], MMM: [P, function(S) {
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
    }], Y: [/[+-]?\d+/, y("year")], YY: [s, function(S) {
      this.year = h(S);
    }], YYYY: [/\d{4}/, y("year")], Z: k, ZZ: k };
    function Z(S) {
      var V, f;
      V = S, f = c && c.formats;
      for (var $ = (S = V.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, M, z) {
        var J = z && z.toUpperCase();
        return M || f[z] || a[z] || f[J].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(A, b, m) {
          return b || m.slice(1);
        });
      })).match(e), O = $.length, C = 0; C < O; C += 1) {
        var T = $[C], o = F[T], r = o && o[0], N = o && o[1];
        $[C] = N ? { regex: r, parser: N } : T.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var M = {}, z = 0, J = 0; z < O; z += 1) {
          var A = $[z];
          if (typeof A == "string")
            J += A.length;
          else {
            var b = A.regex, m = A.parser, _ = L.slice(J), D = b.exec(_)[0];
            m.call(M, D), L = L.replace(D, "");
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
      f.p.customParseFormat = !0, S && S.parseTwoDigitYear && (h = S.parseTwoDigitYear);
      var $ = V.prototype, O = $.parse;
      $.parse = function(C) {
        var T = C.date, o = C.utc, r = C.args;
        this.$u = o;
        var N = r[1];
        if (typeof N == "string") {
          var L = r[2] === !0, M = r[3] === !0, z = L || M, J = r[2];
          M && (J = r[2]), c = this.$locale(), !L && J && (c = f.Ls[J]), this.$d = function(_, D, B) {
            try {
              if (["x", "X"].indexOf(D) > -1)
                return new Date((D === "X" ? 1e3 : 1) * _);
              var j = Z(D)(_), W = j.year, G = j.month, X = j.day, ne = j.hours, pe = j.minutes, ve = j.seconds, ge = j.milliseconds, he = j.zone, ae = new Date(), oe = X || (W || G ? 1 : ae.getDate()), ue = W || ae.getFullYear(), ye = 0;
              W && !G || (ye = G > 0 ? G - 1 : ae.getMonth());
              var xe = ne || 0, je = pe || 0, Le = ve || 0, Be = ge || 0;
              return he ? new Date(Date.UTC(ue, ye, oe, xe, je, Le, Be + 60 * he.offset * 1e3)) : B ? new Date(Date.UTC(ue, ye, oe, xe, je, Le, Be)) : new Date(ue, ye, oe, xe, je, Le, Be);
            } catch {
              return new Date("");
            }
          }(T, N, o), this.init(), J && J !== !0 && (this.$L = this.locale(J).$L), z && T != this.format(N) && (this.$d = new Date("")), c = {};
        } else if (N instanceof Array)
          for (var A = N.length, b = 1; b <= A; b += 1) {
            r[1] = N[b - 1];
            var m = f.apply(this, r);
            if (m.isValid()) {
              this.$d = m.$d, this.$L = m.$L, this.init();
              break;
            }
            b === A && (this.$d = new Date(""));
          }
        else
          O.call(this, C);
      };
    };
  });
})($t);
const Tr = $t.exports;
var Mt = { exports: {} };
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
})(Mt);
const Ar = Mt.exports;
var St = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    return function(a, e, s) {
      e.prototype.isBetween = function(i, P, c, h) {
        var y = s(i), k = s(P), x = (h = h || "()")[0] === "(", w = h[1] === ")";
        return (x ? this.isAfter(y, c) : !this.isBefore(y, c)) && (w ? this.isBefore(k, c) : !this.isAfter(k, c)) || (x ? this.isBefore(y, c) : !this.isAfter(y, c)) && (w ? this.isAfter(k, c) : !this.isBefore(k, c));
      };
    };
  });
})(St);
const jr = St.exports;
var Dt = { exports: {} };
(function(t, u) {
  (function(a, e) {
    t.exports = e();
  })(_e, function() {
    var a, e, s = 1e3, i = 6e4, P = 36e5, c = 864e5, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = 31536e6, k = 2592e6, x = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, w = { years: y, months: k, days: c, hours: P, minutes: i, seconds: s, milliseconds: 1, weeks: 6048e5 }, F = function(T) {
      return T instanceof C;
    }, Z = function(T, o, r) {
      return new C(T, r, o.$l);
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
    }, C = function() {
      function T(r, N, L) {
        var M = this;
        if (this.$d = {}, this.$l = L, r === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), N)
          return Z(r * w[S(N)], this);
        if (typeof r == "number")
          return this.$ms = r, this.parseFromMilliseconds(), this;
        if (typeof r == "object")
          return Object.keys(r).forEach(function(A) {
            M.$d[S(A)] = r[A];
          }), this.calMilliseconds(), this;
        if (typeof r == "string") {
          var z = r.match(x);
          if (z) {
            var J = z.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = J[0], this.$d.months = J[1], this.$d.weeks = J[2], this.$d.days = J[3], this.$d.hours = J[4], this.$d.minutes = J[5], this.$d.seconds = J[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var o = T.prototype;
      return o.calMilliseconds = function() {
        var r = this;
        this.$ms = Object.keys(this.$d).reduce(function(N, L) {
          return N + (r.$d[L] || 0) * w[L];
        }, 0);
      }, o.parseFromMilliseconds = function() {
        var r = this.$ms;
        this.$d.years = f(r / y), r %= y, this.$d.months = f(r / k), r %= k, this.$d.days = f(r / c), r %= c, this.$d.hours = f(r / P), r %= P, this.$d.minutes = f(r / i), r %= i, this.$d.seconds = f(r / s), r %= s, this.$d.milliseconds = r;
      }, o.toISOString = function() {
        var r = O(this.$d.years, "Y"), N = O(this.$d.months, "M"), L = +this.$d.days || 0;
        this.$d.weeks && (L += 7 * this.$d.weeks);
        var M = O(L, "D"), z = O(this.$d.hours, "H"), J = O(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3);
        var b = O(A, "S"), m = r.negative || N.negative || M.negative || z.negative || J.negative || b.negative, _ = z.format || J.format || b.format ? "T" : "", D = (m ? "-" : "") + "P" + r.format + N.format + M.format + _ + z.format + J.format + b.format;
        return D === "P" || D === "-P" ? "P0D" : D;
      }, o.toJSON = function() {
        return this.toISOString();
      }, o.format = function(r) {
        var N = r || "YYYY-MM-DDTHH:mm:ss", L = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return N.replace(h, function(M, z) {
          return z || String(L[M]);
        });
      }, o.as = function(r) {
        return this.$ms / w[S(r)];
      }, o.get = function(r) {
        var N = this.$ms, L = S(r);
        return L === "milliseconds" ? N %= 1e3 : N = L === "weeks" ? f(N / w[L]) : this.$d[L], N === 0 ? 0 : N;
      }, o.add = function(r, N, L) {
        var M;
        return M = N ? r * w[S(N)] : F(r) ? r.$ms : Z(r, this).$ms, Z(this.$ms + M * (L ? -1 : 1), this);
      }, o.subtract = function(r, N) {
        return this.add(r, N, !0);
      }, o.locale = function(r) {
        var N = this.clone();
        return N.$l = r, N;
      }, o.clone = function() {
        return Z(this.$ms, this);
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
        var J = r.locale();
        return Z(M, { $l: J }, z);
      }, r.isDuration = F;
      var N = o.prototype.add, L = o.prototype.subtract;
      o.prototype.add = function(M, z) {
        return F(M) && (M = M.asMilliseconds()), N.bind(this)(M, z);
      }, o.prototype.subtract = function(M, z) {
        return F(M) && (M = M.asMilliseconds()), L.bind(this)(M, z);
      };
    };
  });
})(Dt);
const Lr = Dt.exports;
function Br() {
  const t = (c) => {
    const h = [], y = c.localeData().firstDayOfWeek();
    for (let k = 0; k <= c.date(0 - y).day(); k++)
      h.push(c.date(0).subtract(k, "day"));
    return h.sort((k, x) => k.date() - x.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (h, y) => c.date(y + 1)
    ),
    useNextDate: (c) => {
      const h = [];
      for (let y = 1; y <= 42 - (t(c).length + c.daysInMonth()); y++)
        h.push(c.date(y).month(c.month()).add(1, "month"));
      return h;
    },
    useDisableDate: (c, { disableDate: h }) => typeof h == "function" ? h(c.toDate()) : !1,
    useBetweenRange: (c, { previous: h, next: y }) => {
      let k;
      return h.isAfter(y, "date") ? k = "(]" : k = "[)", !!(c.isBetween(h, y, "date", k) && !c.off);
    },
    useToValueFromString: (c, { formatter: h }) => c.format(h.date),
    useToValueFromArray: ({ previous: c, next: h }, { formatter: y, separator: k }) => `${c.format(y.date)}${k}${h.format(y.date)}`
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
const Fr = ["placeholder"], Nr = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Hr = { class: "flex flex-wrap lg:flex-nowrap" }, Rr = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Ir = {
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
}, an = { class: "bg-white rounded-lg shadow-sm border-0 border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, sn = { class: "flex flex-wrap lg:flex-nowrap" }, ln = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, un = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, dn = /* @__PURE__ */ Y("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), cn = [
  dn
], fn = { class: "px-0.5 sm:px-2" }, vn = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, pn = { class: "px-0.5 sm:px-2" }, mn = { key: 0 }, hn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, yn = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, xn = ["disabled", "textContent"], bn = {
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
      usePreviousDate: h,
      useToValueFromArray: y,
      useToValueFromString: k
    } = Br(), { useVisibleViewport: x } = Er();
    l.extend(Yr), l.extend(Cr), l.extend(Tr), l.extend(Ar), l.extend(jr), l.extend(Lr);
    const w = re(null), F = re(null), Z = re(null), S = re(""), V = re(null), f = re(""), $ = re([]), O = re([]), C = re(null), T = re(null), o = Yt({
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
      const { previous: d, next: p, year: g } = H(r);
      return {
        previous: {
          date: () => h(d).concat(s(d)).concat(c(d)).map((n) => (n.today = n.isToday(), n.active = d.month() === n.month(), n.off = d.month() !== n.month(), n.sunday = n.day() === 0, n.disabled = i(n, e) && !D(n), n.inRange = () => {
            if (e.asSingle && !e.useRange)
              return d.month() !== n.month();
          }, n.hovered = () => _() && $.value.length > 1 ? (n.isBetween($.value[0], $.value[1], "date", "()") || n.isBetween($.value[1], $.value[0], "date", "(]")) && d.month() === n.month() : !1, n.duration = () => !1, n)),
          month: d && d.format(e.formatter.month),
          year: d && d.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (n, v) => g.previous + v
          ),
          onPrevious: () => {
            r.value.previous = d.subtract(1, "month"), a("click:prev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = d.add(1, "month"), d.diff(p, "month") === -1 && (r.value.next = p.add(1, "month")), a("click:next", r.value.previous);
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
          setYear: (n, v) => {
            v || (r.value.previous = d.year(n), o.previous.year = !o.previous.year, o.previous.calendar = !o.previous.year, a("select:year", r.value.previous), Ee(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        },
        next: {
          date: () => h(p).concat(s(p)).concat(c(p)).map((n) => (n.today = n.isToday(), n.active = p.month() === n.month(), n.off = p.month() !== n.month(), n.sunday = n.day() === 0, n.disabled = i(n, e) && !D(n), n.inRange = () => {
            if (e.asSingle && !e.useRange)
              return p.month() !== n.month();
          }, n.hovered = () => $.value.length > 1 ? (n.isBetween($.value[0], $.value[1], "date", "()") || n.isBetween($.value[1], $.value[0], "date", "(]")) && p.month() === n.month() : !1, n.duration = () => !1, n)),
          month: p && p.format(e.formatter.month),
          year: p && p.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (n, v) => g.next + v
          ),
          onPrevious: () => {
            r.value.next = p.subtract(1, "month"), p.diff(d, "month") === 1 && (r.value.previous = d.subtract(1, "month")), a("click:right:prev", r.value.next);
          },
          onNext: () => {
            r.value.next = p.add(1, "month"), a("click:right:next", r.value.next);
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
            r.value.next = p.month(n), o.next.month = !o.next.month, o.next.year = !1, o.next.calendar = !o.next.month, a("select:right:month", r.value.next), Ee(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            o.next.year = !o.next.year, o.next.month = !1, o.next.calendar = !o.next.year;
          },
          setYear: (n, v) => {
            v && (r.value.next = p.year(n), o.next.year = !o.next.year, o.next.month = !1, o.next.calendar = !o.next.year, a("select:right:year", r.value.next), Ee(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        }
      };
    }), z = re(!1);
    setTimeout(() => {
      z.value = !0;
    }, 250);
    const J = () => l().localeData().firstDayOfWeek(), A = (d) => {
      const p = [...d], g = p.shift();
      return [...p, g];
    }, b = () => Array.isArray(e.modelValue), m = () => typeof e.modelValue == "object", _ = () => !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle), D = (d) => {
      if (e.disableInRange || f.value === "")
        return !1;
      let p, g;
      if (b()) {
        const [n, v] = e.modelValue;
        p = n, g = v;
      } else if (m()) {
        if (e.modelValue) {
          const [n, v] = Object.values(e.modelValue);
          p = n, g = v;
        }
      } else {
        const [n, v] = e.modelValue.split(e.separator);
        p = n, g = v;
      }
      return d.isBetween(l(p, e.formatter.date, !0), l(g, e.formatter.date, !0), "date", "[]");
    }, B = () => {
      C.value = null, T.value = null, $.value = [], V.value = null;
    }, j = () => {
      if (f.value = "", b())
        a("update:modelValue", []);
      else if (m()) {
        const d = {}, [p, g] = Object.keys(e.modelValue);
        d[p] = "", d[g] = "", a("update:modelValue", d);
      } else
        a("update:modelValue", "");
      O.value = [], F.value && F.value.focus();
    };
    u({ clearPicker: j });
    const W = () => {
      if (_()) {
        const [d, p] = f.value.split(e.separator), [g, n] = [l(d, e.formatter.date, !0), l(p, e.formatter.date, !0)];
        if (g.isValid() && n.isValid())
          if (G(g), G(n), b())
            a("update:modelValue", [d, p]);
          else if (m()) {
            const v = {}, [E, R] = Object.keys(e.modelValue);
            v[E] = d, v[R] = p, a("update:modelValue", v);
          } else
            a(
              "update:modelValue",
              y(
                {
                  previous: g,
                  next: n
                },
                e
              )
            );
      } else {
        const d = l(f.value, e.formatter.date, !0);
        if (d.isValid())
          if (G(d), b())
            a("update:modelValue", [f.value]);
          else if (m()) {
            const p = {}, [g] = Object.keys(e.modelValue);
            p[g] = f.value, a("update:modelValue", p);
          } else
            a("update:modelValue", f.value);
      }
    }, G = (d, p, g) => {
      if (_())
        if (C.value)
          if (T.value = d, e.autoApply) {
            d.isBefore(C.value) ? f.value = y(
              {
                previous: d,
                next: C.value
              },
              e
            ) : f.value = y(
              {
                previous: C.value,
                next: d
              },
              e
            );
            const [n, v] = f.value.split(e.separator);
            if (b())
              a("update:modelValue", [
                l(n, e.formatter.date, !0).format(e.formatter.date),
                l(v, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (m()) {
              const E = {}, [R, ee] = Object.keys(e.modelValue);
              E[R] = n, E[ee] = v, a("update:modelValue", E);
            } else
              a(
                "update:modelValue",
                y(
                  {
                    previous: l(n, e.formatter.date, !0),
                    next: l(v, e.formatter.date, !0)
                  },
                  e
                )
              );
            g && g(), O.value = [], l(n, e.formatter.date, !0).isSame(l(v, e.formatter.date, !0), "month") || (r.value.previous = l(n, e.formatter.date, !0), r.value.next = l(v, e.formatter.date, !0)), B();
          } else {
            C.value.isAfter(d, "month") ? O.value = [d, C.value] : O.value = [C.value, d];
            const [n, v] = O.value;
            n.isSame(v, "month") || (r.value.previous = n, r.value.next = v), B();
          }
        else
          O.value = [], C.value = d, V.value = d, $.value.push(d), O.value.push(d), p ? (r.value.next = d, r.value.previous.isSame(d, "month") && (r.value.next = d.add(1, "month"))) : (r.value.previous = d, r.value.next.isSame(d, "month") && (r.value.previous = r.value.next, r.value.next = d.add(1, "month")));
      else if (e.autoApply) {
        if (f.value = k(d, e), b())
          a("update:modelValue", [f.value]);
        else if (m()) {
          const n = {}, [v] = Object.keys(e.modelValue);
          n[v] = f.value, a("update:modelValue", n);
        } else
          a("update:modelValue", f.value);
        g && g(), O.value = [], B();
      } else
        O.value = [d], B();
    }, X = (d) => {
      if (O.value.length < 1)
        return !1;
      let p;
      if (_()) {
        const [g, n] = O.value;
        n.isBefore(g) ? p = y(
          {
            previous: n,
            next: g
          },
          e
        ) : p = y(
          {
            previous: g,
            next: n
          },
          e
        );
      } else {
        const [g] = O.value;
        p = g;
      }
      if (_()) {
        const [g, n] = p.split(e.separator);
        if (b())
          a("update:modelValue", [
            l(g, e.formatter.date, !0).format(e.formatter.date),
            l(n, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (m()) {
          const v = {}, [E, R] = Object.keys(e.modelValue);
          v[E] = g, v[R] = n, a("update:modelValue", v);
        } else
          a(
            "update:modelValue",
            y(
              {
                previous: l(g, e.formatter.date, !0),
                next: l(n, e.formatter.date, !0)
              },
              e
            )
          );
        f.value = p;
      } else if (f.value = p.format(e.formatter.date), b())
        a("update:modelValue", [f.value]);
      else if (m()) {
        const g = {}, [n] = Object.keys(e.modelValue);
        g[n] = f.value, a("update:modelValue", g);
      } else
        a("update:modelValue", f.value);
      d && d();
    }, ne = (d) => {
      if (!_())
        return !1;
      if (C.value)
        $.value = [C.value, d];
      else
        return $.value = [], !1;
    }, pe = (d) => {
      if (C.value && e.autoApply)
        return !1;
      let p, g;
      if ($.value.length > 1) {
        const [n, v] = $.value;
        p = l(n, e.formatter.date, !0), g = l(v, e.formatter.date, !0);
      } else if (b())
        if (e.autoApply) {
          const [n, v] = e.modelValue;
          p = n && l(n, e.formatter.date, !0), g = v && l(v, e.formatter.date, !0);
        } else {
          const [n, v] = O.value;
          p = l(n, e.formatter.date, !0), g = l(v, e.formatter.date, !0);
        }
      else if (m())
        if (e.autoApply) {
          if (e.modelValue) {
            const [n, v] = Object.values(e.modelValue);
            p = n && l(n, e.formatter.date, !0), g = v && l(v, e.formatter.date, !0);
          }
        } else {
          const [n, v] = O.value;
          p = l(n, e.formatter.date, !0), g = l(v, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [n, v] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        p = n && l(n, e.formatter.date, !0), g = v && l(v, e.formatter.date, !0);
      } else {
        const [n, v] = O.value;
        p = l(n, e.formatter.date, !0), g = l(v, e.formatter.date, !0);
      }
      return p && g ? P(d, {
        previous: p,
        next: g
      }) : !1;
    }, ve = (d) => {
      const { today: p, active: g, off: n, disabled: v } = d;
      let E, R, ee;
      if (_())
        if (b())
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
        else if (m())
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
      else if (b())
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [I] = e.modelValue;
            R = l(I, e.formatter.date, !0);
          }
        } else {
          const [I] = O.value;
          R = I && l(I, e.formatter.date, !0);
        }
      else if (m())
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
      return g && (E = p ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : v ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : d.isBetween(R, ee, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), n && (E = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), R && ee && !n ? (d.isSame(R, "date") && (E = ee.isAfter(R, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", R.isSame(ee, "date") && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), d.isSame(ee, "date") && (E = ee.isAfter(R, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", R.isSame(ee, "date") && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : R && d.isSame(R, "date") && !n && (E = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), E;
    }, ge = (d) => {
      let p, g, n;
      if (p = "", !_())
        return p;
      if (b())
        if ($.value.length > 1) {
          const [v, E] = $.value;
          g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [v, E] = e.modelValue;
          g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        } else {
          const [v, E] = O.value;
          g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        }
      else if (m())
        if ($.value.length > 1) {
          const [v, E] = $.value;
          g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [v, E] = Object.values(e.modelValue);
            g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
          }
        } else {
          const [v, E] = O.value;
          g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
        }
      else if ($.value.length > 1) {
        const [v, E] = $.value;
        g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [v, E] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
      } else {
        const [v, E] = O.value;
        g = v && l(v, e.formatter.date, !0), n = E && l(E, e.formatter.date, !0);
      }
      return g && n && (d.isSame(g, "date") ? (n.isBefore(g) && (p += " rounded-r-full inset-0"), g.isBefore(n) && (p += " rounded-l-full inset-0")) : d.isSame(n, "date") ? (n.isBefore(g) && (p += " rounded-l-full inset-0"), g.isBefore(n) && (p += " rounded-r-full inset-0")) : p += " inset-0"), p;
    }, he = (d, p) => {
      r.value.previous = l(d, e.formatter.date, !0), r.value.next = l(p, e.formatter.date, !0), (l.duration(r.value.next.diff(r.value.previous)).$d.months === 2 || l.duration(r.value.next.diff(r.value.previous)).$d.months === 1 && l.duration(r.value.next.diff(r.value.previous)).$d.days === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    };
    be(() => {
      _() && m() && (f.value = `${e.modelValue.startDate}${e.separator}${e.modelValue.endDate}`);
    });
    const ae = (d, p) => {
      if (_())
        if (e.autoApply) {
          if (b())
            a("update:modelValue", [d, p]);
          else if (m()) {
            const g = {}, [n, v] = Object.keys(e.modelValue);
            g[n] = d, g[v] = p, a("update:modelValue", g);
          } else
            a(
              "update:modelValue",
              y(
                {
                  previous: l(d, e.formatter.date, !0),
                  next: l(p, e.formatter.date, !0)
                },
                e
              )
            );
          f.value = `${d}${e.separator}${p}`;
        } else
          O.value = [l(d, e.formatter.date, !0), l(p, e.formatter.date, !0)];
      else if (e.autoApply) {
        if (b())
          a("update:modelValue", [d]);
        else if (m()) {
          const g = {}, [n] = Object.keys(e.modelValue);
          g[n] = d, a("update:modelValue", g);
        } else
          a("update:modelValue", d);
        f.value = d;
      } else
        O.value = [l(d, e.formatter.date, !0), l(p, e.formatter.date, !0)];
      he(d, p);
    }, oe = (d) => {
      const p = l().format(e.formatter.date), g = l().format(e.formatter.date);
      ae(p, g), d && d();
    }, ue = (d) => {
      const p = l().subtract(1, "day").format(e.formatter.date), g = l().subtract(1, "day").format(e.formatter.date);
      ae(p, g), d && d();
    }, ye = (d, p) => {
      const g = l().subtract(d - 1, "day").format(e.formatter.date), n = l().format(e.formatter.date);
      ae(g, n), p && p();
    }, xe = (d) => {
      const p = l().date(1).format(e.formatter.date), g = l().date(l().daysInMonth()).format(e.formatter.date);
      ae(p, g), d && d();
    }, je = (d) => {
      const p = l().date(1).subtract(1, "month").format(e.formatter.date), g = l().date(0).format(e.formatter.date);
      ae(p, g), d && d();
    }, Le = (d, p) => {
      let g, n;
      const [v, E] = d.atClick();
      g = l(v).format(e.formatter.date), n = l(E).format(e.formatter.date), ae(g, n), p && p();
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
        const p = /* @__PURE__ */ Object.assign({ "./locale/en.js": () => import("./en.c289298e.mjs") });
        for (const g in p)
          p[g]().then(() => {
            l.locale(d);
            let n, v;
            if (_()) {
              if (b()) {
                if (e.modelValue.length > 0) {
                  const [R, ee] = e.modelValue;
                  n = l(R, e.formatter.date, !0), v = l(ee, e.formatter.date, !0);
                }
              } else if (m()) {
                if (!Tt(e.modelValue))
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
                  n = R && l(R, e.formatter.date, !0), v = ee && l(ee, e.formatter.date, !0);
                }
              } else if (e.modelValue) {
                const [R, ee] = e.modelValue.split(e.separator);
                n = l(R, e.formatter.date, !0), v = l(ee, e.formatter.date, !0);
              }
              n && v ? (f.value = y(
                {
                  previous: n,
                  next: v
                },
                e
              ), v.isBefore(n, "month") ? (r.value.previous = v, r.value.next = n, r.value.year.previous = v.year(), r.value.year.next = n.year()) : v.isSame(n, "month") ? (r.value.previous = n, r.value.next = v.add(1, "month"), r.value.year.previous = n.year(), r.value.year.next = n.add(1, "year").year()) : (r.value.previous = n, r.value.next = v, r.value.year.previous = n.year(), r.value.year.next = v.year()), e.autoApply || (O.value = [n, v])) : (r.value.previous = l(e.startFrom), r.value.next = l(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            } else {
              if (b()) {
                if (e.modelValue.length > 0) {
                  const [R] = e.modelValue;
                  n = l(R, e.formatter.date, !0);
                }
              } else if (m()) {
                if (e.modelValue) {
                  const [R] = Object.values(e.modelValue);
                  n = l(R, e.formatter.date, !0);
                }
              } else if (e.modelValue.length) {
                const [R] = e.modelValue.split(e.separator);
                n = l(R, e.formatter.date, !0);
              }
              n && n.isValid() ? (f.value = k(n, e), r.value.previous = n, r.value.next = n.add(1, "month"), r.value.year.previous = n.year(), r.value.year.next = n.add(1, "year").year(), e.autoApply || (O.value = [n])) : (r.value.previous = l(e.startFrom), r.value.next = l(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            }
            const E = e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort();
            r.value.weeks = J() ? A(E) : E, r.value.months = e.formatter.month === "MMM" ? l.monthsShort() : l.months();
          }).catch((n) => {
            console.warn(n.message);
          });
      });
    });
    const Be = (d) => (d && Z.value === null && (Z.value = x(w.value)), d && Z.value ? "place-right" : "place-left"), nt = (d) => (d && Z.value === null && (Z.value = x(w.value)), Z.value ? "left-auto right-0" : "left-0 right-auto");
    return de("isBetweenRange", pe), de("betweenRangeClasses", ge), de("datepickerClasses", ve), de("atMouseOver", ne), de("setToToday", oe), de("setToYesterday", ue), de("setToLastDay", ye), de("setToThisMonth", xe), de("setToLastMonth", je), de("setToCustomShortcut", Le), (d, p) => e.noInput ? z.value ? (K(), q("div", on, [
      Y("div", an, [
        Y("div", sn, [
          e.shortcuts ? (K(), Ie(at, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": _(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : me("", !0),
          Y("div", ln, [
            _() && !e.asSingle ? (K(), q("div", un, cn)) : me("", !0),
            Y("div", {
              class: Se(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": _() && !e.asSingle
              }])
            }, [
              te(Ue, {
                panel: o.previous,
                calendar: H(M).previous
              }, null, 8, ["panel", "calendar"]),
              Y("div", fn, [
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
                le(Y("div", null, [
                  te(ze, { weeks: H(N) }, null, 8, ["weeks"]),
                  te(Ge, {
                    calendar: H(M).previous,
                    weeks: H(N),
                    "as-range": _(),
                    "onUpdate:date": p[1] || (p[1] = (g, n) => G(g, n))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ie, o.previous.calendar]
                ])
              ])
            ], 2),
            _() && !e.asSingle ? (K(), q("div", vn, [
              te(Ue, {
                "as-prev-or-next": "",
                panel: o.next,
                calendar: H(M).next
              }, null, 8, ["panel", "calendar"]),
              Y("div", pn, [
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
                le(Y("div", null, [
                  te(ze, { weeks: H(N) }, null, 8, ["weeks"]),
                  te(Ge, {
                    "as-prev-or-next": "",
                    calendar: H(M).next,
                    weeks: H(N),
                    "as-range": _(),
                    "onUpdate:date": p[2] || (p[2] = (g, n) => G(g, n))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ie, o.next.calendar]
                ])
              ])
            ])) : me("", !0)
          ])
        ]),
        e.autoApply ? me("", !0) : (K(), q("div", mn, [
          Y("div", hn, [
            Y("div", yn, [
              Y("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? O.value.length < 1 : O.value.length < 2,
                onClick: p[3] || (p[3] = (g) => X()),
                textContent: se(e.options.footer.apply)
              }, null, 8, xn)
            ])
          ])
        ]))
      ])
    ])) : me("", !0) : (K(), Ie(H(bt), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "relative w-full"
    }, {
      default: Ve(({ open: g }) => [
        e.overlay ? (K(), Ie(H(Vr), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : me("", !0),
        te(H(_r), {
          as: "label",
          class: "relative block"
        }, {
          default: Ve(() => [
            ot(d.$slots, "default", {
              value: f.value,
              placeholder: S.value,
              clear: j
            }, () => [
              le(Y("input", At({
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
                "onUpdate:modelValue": p[0] || (p[0] = (n) => f.value = n),
                placeholder: S.value,
                onKeyup: W
              }), null, 16, Fr), [
                [jt, f.value]
              ]),
              Y("div", Nr, [
                ot(d.$slots, "icon")
              ])
            ])
          ]),
          _: 3
        }),
        te(lt, {
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
                Y("div", {
                  class: Se(["absolute z-50 top-full sm:mt-2.5", nt(g)])
                }, [
                  Y("div", {
                    ref_key: "VtdRef",
                    ref: w,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    Y("div", {
                      class: Se(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Be(g)])
                    }, [
                      Y("div", Hr, [
                        e.shortcuts ? (K(), Ie(at, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": _(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: n
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : me("", !0),
                        Y("div", Rr, [
                          _() && !e.asSingle ? (K(), q("div", Ir, Wr)) : me("", !0),
                          Y("div", {
                            class: Se(["relative w-full md:w-1/2 lg:w-80", {
                              "mb-3 sm:mb-0 sm:mr-2": _() && !e.asSingle
                            }])
                          }, [
                            te(Ue, {
                              panel: o.previous,
                              calendar: H(M).previous
                            }, null, 8, ["panel", "calendar"]),
                            Y("div", zr, [
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
                              le(Y("div", null, [
                                te(ze, { weeks: H(N) }, null, 8, ["weeks"]),
                                te(Ge, {
                                  calendar: H(M).previous,
                                  weeks: H(N),
                                  "as-range": _(),
                                  "onUpdate:date": (v, E) => G(v, E, n)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ie, o.previous.calendar]
                              ])
                            ])
                          ], 2),
                          _() && !e.asSingle ? (K(), q("div", Zr, [
                            te(Ue, {
                              "as-prev-or-next": "",
                              panel: o.next,
                              calendar: H(M).next
                            }, null, 8, ["panel", "calendar"]),
                            Y("div", Gr, [
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
                              le(Y("div", null, [
                                te(ze, { weeks: H(N) }, null, 8, ["weeks"]),
                                te(Ge, {
                                  "as-prev-or-next": "",
                                  calendar: H(M).next,
                                  weeks: H(N),
                                  "as-range": _(),
                                  "onUpdate:date": (v, E) => G(v, E, n)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ie, o.next.calendar]
                              ])
                            ])
                          ])) : me("", !0)
                        ])
                      ]),
                      e.autoApply ? (K(), q("div", en, [
                        Y("div", tn, [
                          Y("div", rn, [
                            Y("button", {
                              type: "button",
                              onClick: (v) => n(),
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: se(e.options.footer.cancel)
                            }, null, 8, nn)
                          ])
                        ])
                      ])) : (K(), q("div", Kr, [
                        Y("div", Jr, [
                          Y("div", qr, [
                            Y("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? O.value.length < 1 : O.value.length < 2,
                              onClick: (v) => X(n),
                              textContent: se(e.options.footer.apply)
                            }, null, 8, Xr),
                            Y("button", {
                              type: "button",
                              onClick: (v) => n(),
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: se(e.options.footer.cancel)
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
}, Ot = /* @__PURE__ */ (() => {
  const t = bn;
  return t.install = (u) => {
    u.component("VueTailwindDatepicker", t);
  }, t;
})(), gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(gn).forEach(([t, u]) => {
  t !== "default" && (Ot[t] = u);
});
export {
  Ot as default
};
