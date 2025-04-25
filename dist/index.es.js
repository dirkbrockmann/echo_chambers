(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._node_ltm0z_1{stroke:#000;stroke-width:.5}._edge_ltm0z_7{stroke:gray;opacity:.7}._spike_ltm0z_20{stroke-width:8px}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const uo = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function sn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function lo(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Yr(t) {
  let n, e, r;
  t.length !== 2 ? (n = sn, e = (s, u) => sn(t(s), u), r = (s, u) => t(s) - u) : (n = t === sn || t === lo ? t : fo, e = t, r = t);
  function i(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (n(u, u) !== 0) return f;
      do {
        const h = l + f >>> 1;
        e(s[h], u) < 0 ? l = h + 1 : f = h;
      } while (l < f);
    }
    return l;
  }
  function o(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (n(u, u) !== 0) return f;
      do {
        const h = l + f >>> 1;
        e(s[h], u) <= 0 ? l = h + 1 : f = h;
      } while (l < f);
    }
    return l;
  }
  function a(s, u, l = 0, f = s.length) {
    const h = i(s, u, l, f - 1);
    return h > l && r(s[h - 1], u) > -r(s[h], u) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function fo() {
  return 0;
}
function co(t) {
  return t === null ? NaN : +t;
}
const ho = Yr(sn), po = ho.right;
Yr(co).center;
function go(t, n) {
  let e, r;
  if (n === void 0)
    for (const i of t)
      i != null && (e === void 0 ? i >= i && (e = r = i) : (e > i && (e = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of t)
      (o = n(o, ++i, t)) != null && (e === void 0 ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)));
  }
  return [e, r];
}
const yo = Math.sqrt(50), _o = Math.sqrt(10), mo = Math.sqrt(2);
function hn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= yo ? 10 : o >= _o ? 5 : o >= mo ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? hn(t, n, e * 2) : [s, u, l];
}
function vo(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? hn(n, t, e) : hn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function te(t, n, e) {
  return n = +n, t = +t, e = +e, hn(t, n, e)[2];
}
function wo(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? te(n, t, e) : te(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Qt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function xo(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function bo(t) {
  return t;
}
var Gn = 1, Un = 2, ne = 3, Ot = 4, Ve = 1e-6;
function Mo(t) {
  return "translate(" + t + ",0)";
}
function Ao(t) {
  return "translate(0," + t + ")";
}
function $o(t) {
  return (n) => +t(n);
}
function To(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function No() {
  return !this.__axis;
}
function Vr(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === Gn || t === Ot ? -1 : 1, f = t === Ot || t === Un ? "x" : "y", h = t === Gn || t === ne ? Mo : Ao;
  function c(p) {
    var d = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), m = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : bo), _ = Math.max(o, 0) + s, g = n.range(), v = +g[0] + u, x = +g[g.length - 1] + u, y = (n.bandwidth ? To : $o)(n.copy(), u), w = p.selection ? p.selection() : p, A = w.selectAll(".domain").data([null]), $ = w.selectAll(".tick").data(d, n).order(), T = $.exit(), S = $.enter().append("g").attr("class", "tick"), P = $.select("line"), b = $.select("text");
    A = A.merge(A.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), $ = $.merge(S), P = P.merge(S.append("line").attr("stroke", "currentColor").attr(f + "2", l * o)), b = b.merge(S.append("text").attr("fill", "currentColor").attr(f, l * _).attr("dy", t === Gn ? "0em" : t === ne ? "0.71em" : "0.32em")), p !== w && (A = A.transition(p), $ = $.transition(p), P = P.transition(p), b = b.transition(p), T = T.transition(p).attr("opacity", Ve).attr("transform", function(k) {
      return isFinite(k = y(k)) ? h(k + u) : this.getAttribute("transform");
    }), S.attr("opacity", Ve).attr("transform", function(k) {
      var E = this.parentNode.__axis;
      return h((E && isFinite(E = E(k)) ? E : y(k)) + u);
    })), T.remove(), A.attr("d", t === Ot || t === Un ? a ? "M" + l * a + "," + v + "H" + u + "V" + x + "H" + l * a : "M" + u + "," + v + "V" + x : a ? "M" + v + "," + l * a + "V" + u + "H" + x + "V" + l * a : "M" + v + "," + u + "H" + x), $.attr("opacity", 1).attr("transform", function(k) {
      return h(y(k) + u);
    }), P.attr(f + "2", l * o), b.attr(f, l * _).text(m), w.filter(No).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Un ? "start" : t === Ot ? "end" : "middle"), w.each(function() {
      this.__axis = y;
    });
  }
  return c.scale = function(p) {
    return arguments.length ? (n = p, c) : n;
  }, c.ticks = function() {
    return e = Array.from(arguments), c;
  }, c.tickArguments = function(p) {
    return arguments.length ? (e = p == null ? [] : Array.from(p), c) : e.slice();
  }, c.tickValues = function(p) {
    return arguments.length ? (r = p == null ? null : Array.from(p), c) : r && r.slice();
  }, c.tickFormat = function(p) {
    return arguments.length ? (i = p, c) : i;
  }, c.tickSize = function(p) {
    return arguments.length ? (o = a = +p, c) : o;
  }, c.tickSizeInner = function(p) {
    return arguments.length ? (o = +p, c) : o;
  }, c.tickSizeOuter = function(p) {
    return arguments.length ? (a = +p, c) : a;
  }, c.tickPadding = function(p) {
    return arguments.length ? (s = +p, c) : s;
  }, c.offset = function(p) {
    return arguments.length ? (u = +p, c) : u;
  }, c;
}
function So(t) {
  return Vr(ne, t);
}
function Po(t) {
  return Vr(Ot, t);
}
var Eo = { value: () => {
} };
function Mn() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new un(e);
}
function un(t) {
  this._ = t;
}
function ko(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
un.prototype = Mn.prototype = {
  constructor: un,
  on: function(t, n) {
    var e = this._, r = ko(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = zo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Ke(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ke(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new un(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function zo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ke(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Eo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var ee = "http://www.w3.org/1999/xhtml";
const Ze = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ee,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function An(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ze.hasOwnProperty(n) ? { space: Ze[n], local: t } : t;
}
function Io(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === ee && n.documentElement.namespaceURI === ee ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Oo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Kr(t) {
  var n = An(t);
  return (n.local ? Oo : Io)(n);
}
function Co() {
}
function Me(t) {
  return t == null ? Co : function() {
    return this.querySelector(t);
  };
}
function Ro(t) {
  typeof t != "function" && (t = Me(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, f = 0; f < a; ++f)
      (u = o[f]) && (l = t.call(u, u.__data__, f, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[f] = l);
  return new q(r, this._parents);
}
function Fo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Lo() {
  return [];
}
function Zr(t) {
  return t == null ? Lo : function() {
    return this.querySelectorAll(t);
  };
}
function Do(t) {
  return function() {
    return Fo(t.apply(this, arguments));
  };
}
function Ho(t) {
  typeof t == "function" ? t = Do(t) : t = Zr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new q(r, i);
}
function Wr(t) {
  return function() {
    return this.matches(t);
  };
}
function Jr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var qo = Array.prototype.find;
function Bo(t) {
  return function() {
    return qo.call(this.children, t);
  };
}
function Xo() {
  return this.firstElementChild;
}
function Go(t) {
  return this.select(t == null ? Xo : Bo(typeof t == "function" ? t : Jr(t)));
}
var Uo = Array.prototype.filter;
function Yo() {
  return Array.from(this.children);
}
function Vo(t) {
  return function() {
    return Uo.call(this.children, t);
  };
}
function Ko(t) {
  return this.selectAll(t == null ? Yo : Vo(typeof t == "function" ? t : Jr(t)));
}
function Zo(t) {
  typeof t != "function" && (t = Wr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new q(r, this._parents);
}
function Qr(t) {
  return new Array(t.length);
}
function Wo() {
  return new q(this._enter || this._groups.map(Qr), this._parents);
}
function pn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
pn.prototype = {
  constructor: pn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Jo(t) {
  return function() {
    return t;
  };
}
function Qo(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new pn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function jo(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), f = n.length, h = o.length, c = new Array(f), p;
  for (s = 0; s < f; ++s)
    (u = n[s]) && (c[s] = p = a.call(u, u.__data__, s, n) + "", l.has(p) ? i[s] = u : l.set(p, u));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (u = l.get(p)) ? (r[s] = u, u.__data__ = o[s], l.delete(p)) : e[s] = new pn(t, o[s]);
  for (s = 0; s < f; ++s)
    (u = n[s]) && l.get(c[s]) === u && (i[s] = u);
}
function ta(t) {
  return t.__data__;
}
function na(t, n) {
  if (!arguments.length) return Array.from(this, ta);
  var e = n ? jo : Qo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Jo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var f = r[l], h = i[l], c = h.length, p = ea(t.call(f, f && f.__data__, l, r)), d = p.length, m = s[l] = new Array(d), _ = a[l] = new Array(d), g = u[l] = new Array(c);
    e(f, h, m, _, g, p, n);
    for (var v = 0, x = 0, y, w; v < d; ++v)
      if (y = m[v]) {
        for (v >= x && (x = v + 1); !(w = _[x]) && ++x < d; ) ;
        y._next = w || null;
      }
  }
  return a = new q(a, r), a._enter = s, a._exit = u, a;
}
function ea(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ra() {
  return new q(this._exit || this._groups.map(Qr), this._parents);
}
function ia(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function oa(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], f = r[u], h = l.length, c = s[u] = new Array(h), p, d = 0; d < h; ++d)
      (p = l[d] || f[d]) && (c[d] = p);
  for (; u < i; ++u)
    s[u] = e[u];
  return new q(s, this._parents);
}
function aa() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function sa(t) {
  t || (t = ua);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, f = 0; f < s; ++f)
      (l = a[f]) && (u[f] = l);
    u.sort(n);
  }
  return new q(i, this._parents).order();
}
function ua(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function la() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function fa() {
  return Array.from(this);
}
function ca() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ha() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function pa() {
  return !this.node();
}
function da(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function ga(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ya(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function _a(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function ma(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function va(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function wa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function xa(t, n) {
  var e = An(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? ya : ga : typeof n == "function" ? e.local ? wa : va : e.local ? ma : _a)(e, n));
}
function jr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ba(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ma(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Aa(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function $a(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ba : typeof n == "function" ? Aa : Ma)(t, n, e ?? "")) : Nt(this.node(), t);
}
function Nt(t, n) {
  return t.style.getPropertyValue(n) || jr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ta(t) {
  return function() {
    delete this[t];
  };
}
function Na(t, n) {
  return function() {
    this[t] = n;
  };
}
function Sa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Pa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ta : typeof n == "function" ? Sa : Na)(t, n)) : this.node()[t];
}
function ti(t) {
  return t.trim().split(/^|\s+/);
}
function Ae(t) {
  return t.classList || new ni(t);
}
function ni(t) {
  this._node = t, this._names = ti(t.getAttribute("class") || "");
}
ni.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ei(t, n) {
  for (var e = Ae(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function ri(t, n) {
  for (var e = Ae(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Ea(t) {
  return function() {
    ei(this, t);
  };
}
function ka(t) {
  return function() {
    ri(this, t);
  };
}
function za(t, n) {
  return function() {
    (n.apply(this, arguments) ? ei : ri)(this, t);
  };
}
function Ia(t, n) {
  var e = ti(t + "");
  if (arguments.length < 2) {
    for (var r = Ae(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? za : n ? Ea : ka)(e, n));
}
function Oa() {
  this.textContent = "";
}
function Ca(t) {
  return function() {
    this.textContent = t;
  };
}
function Ra(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Fa(t) {
  return arguments.length ? this.each(t == null ? Oa : (typeof t == "function" ? Ra : Ca)(t)) : this.node().textContent;
}
function La() {
  this.innerHTML = "";
}
function Da(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ha(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function qa(t) {
  return arguments.length ? this.each(t == null ? La : (typeof t == "function" ? Ha : Da)(t)) : this.node().innerHTML;
}
function Ba() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Xa() {
  return this.each(Ba);
}
function Ga() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ua() {
  return this.each(Ga);
}
function Ya(t) {
  var n = typeof t == "function" ? t : Kr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Va() {
  return null;
}
function Ka(t, n) {
  var e = typeof t == "function" ? t : Kr(t), r = n == null ? Va : typeof n == "function" ? n : Me(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Za() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Wa() {
  return this.each(Za);
}
function Ja() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Qa() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ja(t) {
  return this.select(t ? Qa : Ja);
}
function ts(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ns(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function es(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function rs(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function is(t, n, e) {
  return function() {
    var r = this.__on, i, o = ns(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function os(t, n, e) {
  var r = es(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, f; u < l; ++u)
        for (i = 0, f = s[u]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? is : rs, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ii(t, n, e) {
  var r = jr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function as(t, n) {
  return function() {
    return ii(this, t, n);
  };
}
function ss(t, n) {
  return function() {
    return ii(this, t, n.apply(this, arguments));
  };
}
function us(t, n) {
  return this.each((typeof n == "function" ? ss : as)(t, n));
}
function* ls() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var oi = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function Vt() {
  return new q([[document.documentElement]], oi);
}
function fs() {
  return this;
}
q.prototype = Vt.prototype = {
  constructor: q,
  select: Ro,
  selectAll: Ho,
  selectChild: Go,
  selectChildren: Ko,
  filter: Zo,
  data: na,
  enter: Wo,
  exit: ra,
  join: ia,
  merge: oa,
  selection: fs,
  order: aa,
  sort: sa,
  call: la,
  nodes: fa,
  node: ca,
  size: ha,
  empty: pa,
  each: da,
  attr: xa,
  style: $a,
  property: Pa,
  classed: Ia,
  text: Fa,
  html: qa,
  raise: Xa,
  lower: Ua,
  append: Ya,
  insert: Ka,
  remove: Wa,
  clone: ja,
  datum: ts,
  on: os,
  dispatch: us,
  [Symbol.iterator]: ls
};
function I(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], oi);
}
function cs(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function re(t, n) {
  if (t = cs(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const hs = { passive: !1 }, Dt = { capture: !0, passive: !1 };
function Yn(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ps(t) {
  var n = t.document.documentElement, e = I(t).on("dragstart.drag", At, Dt);
  "onselectstart" in n ? e.on("selectstart.drag", At, Dt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function ds(t, n) {
  var e = t.document.documentElement, r = I(t).on("dragstart.drag", null);
  n && (r.on("click.drag", At, Dt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const jt = (t) => () => t;
function ie(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
ie.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function gs(t) {
  return !t.ctrlKey && !t.button;
}
function ys() {
  return this.parentNode;
}
function _s(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function ms() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ai() {
  var t = gs, n = ys, e = _s, r = ms, i = {}, o = Mn("start", "drag", "end"), a = 0, s, u, l, f, h = 0;
  function c(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", _).on("touchmove.drag", g, hs).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, w) {
    if (!(f || !t.call(this, y, w))) {
      var A = x(this, n.call(this, y, w), y, w, "mouse");
      A && (I(y.view).on("mousemove.drag", d, Dt).on("mouseup.drag", m, Dt), ps(y.view), Yn(y), l = !1, s = y.clientX, u = y.clientY, A("start", y));
    }
  }
  function d(y) {
    if (At(y), !l) {
      var w = y.clientX - s, A = y.clientY - u;
      l = w * w + A * A > h;
    }
    i.mouse("drag", y);
  }
  function m(y) {
    I(y.view).on("mousemove.drag mouseup.drag", null), ds(y.view, l), At(y), i.mouse("end", y);
  }
  function _(y, w) {
    if (t.call(this, y, w)) {
      var A = y.changedTouches, $ = n.call(this, y, w), T = A.length, S, P;
      for (S = 0; S < T; ++S)
        (P = x(this, $, y, w, A[S].identifier, A[S])) && (Yn(y), P("start", y, A[S]));
    }
  }
  function g(y) {
    var w = y.changedTouches, A = w.length, $, T;
    for ($ = 0; $ < A; ++$)
      (T = i[w[$].identifier]) && (At(y), T("drag", y, w[$]));
  }
  function v(y) {
    var w = y.changedTouches, A = w.length, $, T;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), $ = 0; $ < A; ++$)
      (T = i[w[$].identifier]) && (Yn(y), T("end", y, w[$]));
  }
  function x(y, w, A, $, T, S) {
    var P = o.copy(), b = re(S || A, w), k, E, U;
    if ((U = e.call(y, new ie("beforestart", {
      sourceEvent: A,
      target: c,
      identifier: T,
      active: a,
      x: b[0],
      y: b[1],
      dx: 0,
      dy: 0,
      dispatch: P
    }), $)) != null)
      return k = U.x - b[0] || 0, E = U.y - b[1] || 0, function Jt(ut, lt, xt) {
        var G = b, Xn;
        switch (ut) {
          case "start":
            i[T] = Jt, Xn = a++;
            break;
          case "end":
            delete i[T], --a;
          // falls through
          case "drag":
            b = re(xt || lt, w), Xn = a;
            break;
        }
        P.call(
          ut,
          y,
          new ie(ut, {
            sourceEvent: lt,
            subject: U,
            target: c,
            identifier: T,
            active: Xn,
            x: b[0] + k,
            y: b[1] + E,
            dx: b[0] - G[0],
            dy: b[1] - G[1],
            dispatch: P
          }),
          $
        );
      };
  }
  return c.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : jt(!!y), c) : t;
  }, c.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : jt(y), c) : n;
  }, c.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : jt(y), c) : e;
  }, c.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : jt(!!y), c) : r;
  }, c.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? c : y;
  }, c.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, c) : Math.sqrt(h);
  }, c;
}
function $e(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function si(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Kt() {
}
var Ht = 0.7, dn = 1 / Ht, $t = "\\s*([+-]?\\d+)\\s*", qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", W = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", vs = /^#([0-9a-f]{3,8})$/, ws = new RegExp(`^rgb\\(${$t},${$t},${$t}\\)$`), xs = new RegExp(`^rgb\\(${W},${W},${W}\\)$`), bs = new RegExp(`^rgba\\(${$t},${$t},${$t},${qt}\\)$`), Ms = new RegExp(`^rgba\\(${W},${W},${W},${qt}\\)$`), As = new RegExp(`^hsl\\(${qt},${W},${W}\\)$`), $s = new RegExp(`^hsla\\(${qt},${W},${W},${qt}\\)$`), We = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
$e(Kt, yt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Je,
  // Deprecated! Use color.formatHex.
  formatHex: Je,
  formatHex8: Ts,
  formatHsl: Ns,
  formatRgb: Qe,
  toString: Qe
});
function Je() {
  return this.rgb().formatHex();
}
function Ts() {
  return this.rgb().formatHex8();
}
function Ns() {
  return ui(this).formatHsl();
}
function Qe() {
  return this.rgb().formatRgb();
}
function yt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = vs.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? je(n) : e === 3 ? new F(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? tn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? tn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = ws.exec(t)) ? new F(n[1], n[2], n[3], 1) : (n = xs.exec(t)) ? new F(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = bs.exec(t)) ? tn(n[1], n[2], n[3], n[4]) : (n = Ms.exec(t)) ? tn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = As.exec(t)) ? er(n[1], n[2] / 100, n[3] / 100, 1) : (n = $s.exec(t)) ? er(n[1], n[2] / 100, n[3] / 100, n[4]) : We.hasOwnProperty(t) ? je(We[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function je(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function tn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new F(t, n, e, r);
}
function Ss(t) {
  return t instanceof Kt || (t = yt(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function oe(t, n, e, r) {
  return arguments.length === 1 ? Ss(t) : new F(t, n, e, r ?? 1);
}
function F(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
$e(F, oe, si(Kt, {
  brighter(t) {
    return t = t == null ? dn : Math.pow(dn, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ht : Math.pow(Ht, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(gt(this.r), gt(this.g), gt(this.b), gn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: tr,
  // Deprecated! Use color.formatHex.
  formatHex: tr,
  formatHex8: Ps,
  formatRgb: nr,
  toString: nr
}));
function tr() {
  return `#${ct(this.r)}${ct(this.g)}${ct(this.b)}`;
}
function Ps() {
  return `#${ct(this.r)}${ct(this.g)}${ct(this.b)}${ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nr() {
  const t = gn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${gt(this.r)}, ${gt(this.g)}, ${gt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function gn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function gt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ct(t) {
  return t = gt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function er(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new V(t, n, e, r);
}
function ui(t) {
  if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
  if (t instanceof Kt || (t = yt(t)), !t) return new V();
  if (t instanceof V) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new V(a, s, u, t.opacity);
}
function Es(t, n, e, r) {
  return arguments.length === 1 ? ui(t) : new V(t, n, e, r ?? 1);
}
function V(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
$e(V, Es, si(Kt, {
  brighter(t) {
    return t = t == null ? dn : Math.pow(dn, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ht : Math.pow(Ht, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new F(
      Vn(t >= 240 ? t - 240 : t + 120, i, r),
      Vn(t, i, r),
      Vn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new V(rr(this.h), nn(this.s), nn(this.l), gn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = gn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${rr(this.h)}, ${nn(this.s) * 100}%, ${nn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function rr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function nn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Vn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Te = (t) => () => t;
function ks(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function zs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Is(t) {
  return (t = +t) == 1 ? li : function(n, e) {
    return e - n ? zs(n, e, t) : Te(isNaN(n) ? e : n);
  };
}
function li(t, n) {
  var e = n - t;
  return e ? ks(t, e) : Te(isNaN(t) ? n : t);
}
const yn = function t(n) {
  var e = Is(n);
  function r(i, o) {
    var a = e((i = oe(i)).r, (o = oe(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = li(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = u(f), i.opacity = l(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Os(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Cs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Rs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Ne(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Fs(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function Y(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Ls(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Ne(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var ae = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Kn = new RegExp(ae.source, "g");
function Ds(t) {
  return function() {
    return t;
  };
}
function Hs(t) {
  return function(n) {
    return t(n) + "";
  };
}
function fi(t, n) {
  var e = ae.lastIndex = Kn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = ae.exec(t)) && (i = Kn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: Y(r, i) })), e = Kn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Hs(u[0].x) : Ds(n) : (n = u.length, function(l) {
    for (var f = 0, h; f < n; ++f) s[(h = u[f]).i] = h.x(l);
    return s.join("");
  });
}
function Ne(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Te(n) : (e === "number" ? Y : e === "string" ? (r = yt(n)) ? (n = r, yn) : fi : n instanceof yt ? yn : n instanceof Date ? Fs : Cs(n) ? Os : Array.isArray(n) ? Rs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Ls : Y)(t, n);
}
function qs(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ir = 180 / Math.PI, se = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ci(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * ir,
    skewX: Math.atan(u) * ir,
    scaleX: a,
    scaleY: s
  };
}
var en;
function Bs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? se : ci(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Xs(t) {
  return t == null || (en || (en = document.createElementNS("http://www.w3.org/2000/svg", "g")), en.setAttribute("transform", t), !(t = en.transform.baseVal.consolidate())) ? se : (t = t.matrix, ci(t.a, t.b, t.c, t.d, t.e, t.f));
}
function hi(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, f, h, c, p, d) {
    if (l !== h || f !== c) {
      var m = p.push("translate(", null, n, null, e);
      d.push({ i: m - 4, x: Y(l, h) }, { i: m - 2, x: Y(f, c) });
    } else (h || c) && p.push("translate(" + h + n + c + e);
  }
  function a(l, f, h, c) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Y(l, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(l, f, h, c) {
    l !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Y(l, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function u(l, f, h, c, p, d) {
    if (l !== h || f !== c) {
      var m = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: m - 4, x: Y(l, h) }, { i: m - 2, x: Y(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(l, f) {
    var h = [], c = [];
    return l = t(l), f = t(f), o(l.translateX, l.translateY, f.translateX, f.translateY, h, c), a(l.rotate, f.rotate, h, c), s(l.skewX, f.skewX, h, c), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, h, c), l = f = null, function(p) {
      for (var d = -1, m = c.length, _; ++d < m; ) h[(_ = c[d]).i] = _.x(p);
      return h.join("");
    };
  };
}
var Gs = hi(Bs, "px, ", "px)", "deg)"), Us = hi(Xs, ", ", ")", ")"), St = 0, Ct = 0, zt = 0, pi = 1e3, _n, Rt, mn = 0, _t = 0, $n = 0, Bt = typeof performance == "object" && performance.now ? performance : Date, di = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Tn() {
  return _t || (di(Ys), _t = Bt.now() + $n);
}
function Ys() {
  _t = 0;
}
function Xt() {
  this._call = this._time = this._next = null;
}
Xt.prototype = Se.prototype = {
  constructor: Xt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Tn() : +e) + (n == null ? 0 : +n), !this._next && Rt !== this && (Rt ? Rt._next = this : _n = this, Rt = this), this._call = t, this._time = e, ue();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ue());
  }
};
function Se(t, n, e) {
  var r = new Xt();
  return r.restart(t, n, e), r;
}
function Vs() {
  Tn(), ++St;
  for (var t = _n, n; t; )
    (n = _t - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --St;
}
function or() {
  _t = (mn = Bt.now()) + $n, St = Ct = 0;
  try {
    Vs();
  } finally {
    St = 0, Zs(), _t = 0;
  }
}
function Ks() {
  var t = Bt.now(), n = t - mn;
  n > pi && ($n -= n, mn = t);
}
function Zs() {
  for (var t, n = _n, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : _n = e);
  Rt = t, ue(r);
}
function ue(t) {
  if (!St) {
    Ct && (Ct = clearTimeout(Ct));
    var n = t - _t;
    n > 24 ? (t < 1 / 0 && (Ct = setTimeout(or, t - Bt.now() - $n)), zt && (zt = clearInterval(zt))) : (zt || (mn = Bt.now(), zt = setInterval(Ks, pi)), St = 1, di(or));
  }
}
function ar(t, n, e) {
  var r = new Xt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ws(t, n, e) {
  var r = new Xt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Tn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Js = Mn("start", "end", "cancel", "interrupt"), Qs = [], gi = 0, sr = 1, le = 2, ln = 3, ur = 4, fe = 5, fn = 6;
function Nn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  js(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Js,
    tween: Qs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: gi
  });
}
function Pe(t, n) {
  var e = K(t, n);
  if (e.state > gi) throw new Error("too late; already scheduled");
  return e;
}
function Q(t, n) {
  var e = K(t, n);
  if (e.state > ln) throw new Error("too late; already running");
  return e;
}
function K(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function js(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Se(o, 0, e.time);
  function o(l) {
    e.state = sr, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var f, h, c, p;
    if (e.state !== sr) return u();
    for (f in r)
      if (p = r[f], p.name === e.name) {
        if (p.state === ln) return ar(a);
        p.state === ur ? (p.state = fn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < n && (p.state = fn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (ar(function() {
      e.state === ln && (e.state = ur, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = le, e.on.call("start", t, t.__data__, e.index, e.group), e.state === le) {
      for (e.state = ln, i = new Array(c = e.tween.length), f = 0, h = -1; f < c; ++f)
        (p = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(l) {
    for (var f = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = fe, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    e.state === fe && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = fn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function tu(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > le && r.state < fe, r.state = fn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function nu(t) {
  return this.each(function() {
    tu(this, t);
  });
}
function eu(t, n) {
  var e, r;
  return function() {
    var i = Q(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function ru(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Q(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function iu(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = K(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? eu : ru)(e, t, n));
}
function Ee(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Q(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return K(i, r).value[n];
  };
}
function yi(t, n) {
  var e;
  return (typeof n == "number" ? Y : n instanceof yt ? yn : (e = yt(n)) ? (n = e, yn) : fi)(t, n);
}
function ou(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function au(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function su(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function uu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function lu(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function fu(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function cu(t, n) {
  var e = An(t), r = e === "transform" ? Us : yi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? fu : lu)(e, r, Ee(this, "attr." + t, n)) : n == null ? (e.local ? au : ou)(e) : (e.local ? uu : su)(e, r, n));
}
function hu(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function pu(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function du(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && pu(t, o)), e;
  }
  return i._value = n, i;
}
function gu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && hu(t, o)), e;
  }
  return i._value = n, i;
}
function yu(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = An(t);
  return this.tween(e, (r.local ? du : gu)(r, n));
}
function _u(t, n) {
  return function() {
    Pe(this, t).delay = +n.apply(this, arguments);
  };
}
function mu(t, n) {
  return n = +n, function() {
    Pe(this, t).delay = n;
  };
}
function vu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? _u : mu)(n, t)) : K(this.node(), n).delay;
}
function wu(t, n) {
  return function() {
    Q(this, t).duration = +n.apply(this, arguments);
  };
}
function xu(t, n) {
  return n = +n, function() {
    Q(this, t).duration = n;
  };
}
function bu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? wu : xu)(n, t)) : K(this.node(), n).duration;
}
function Mu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Q(this, t).ease = n;
  };
}
function Au(t) {
  var n = this._id;
  return arguments.length ? this.each(Mu(n, t)) : K(this.node(), n).ease;
}
function $u(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Q(this, t).ease = e;
  };
}
function Tu(t) {
  if (typeof t != "function") throw new Error();
  return this.each($u(this._id, t));
}
function Nu(t) {
  typeof t != "function" && (t = Wr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new rt(r, this._parents, this._name, this._id);
}
function Su(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], f = u.length, h = a[s] = new Array(f), c, p = 0; p < f; ++p)
      (c = u[p] || l[p]) && (h[p] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new rt(a, this._parents, this._name, this._id);
}
function Pu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Eu(t, n, e) {
  var r, i, o = Pu(n) ? Pe : Q;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function ku(t, n) {
  var e = this._id;
  return arguments.length < 2 ? K(this.node(), e).on.on(t) : this.each(Eu(e, t, n));
}
function zu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Iu() {
  return this.on("end.remove", zu(this._id));
}
function Ou(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Me(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), f, h, c = 0; c < u; ++c)
      (f = s[c]) && (h = t.call(f, f.__data__, c, s)) && ("__data__" in f && (h.__data__ = f.__data__), l[c] = h, Nn(l[c], n, e, c, l, K(f, e)));
  return new rt(o, this._parents, n, e);
}
function Cu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Zr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, f, h = 0; h < l; ++h)
      if (f = u[h]) {
        for (var c = t.call(f, f.__data__, h, u), p, d = K(f, e), m = 0, _ = c.length; m < _; ++m)
          (p = c[m]) && Nn(p, n, e, m, c, d);
        o.push(c), a.push(f);
      }
  return new rt(o, a, n, e);
}
var Ru = Vt.prototype.constructor;
function Fu() {
  return new Ru(this._groups, this._parents);
}
function Lu(t, n) {
  var e, r, i;
  return function() {
    var o = Nt(this, t), a = (this.style.removeProperty(t), Nt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function _i(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Du(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Nt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Hu(t, n, e) {
  var r, i, o;
  return function() {
    var a = Nt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Nt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function qu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = Q(this, t), l = u.on, f = u.value[o] == null ? s || (s = _i(n)) : void 0;
    (l !== e || i !== f) && (r = (e = l).copy()).on(a, i = f), u.on = r;
  };
}
function Bu(t, n, e) {
  var r = (t += "") == "transform" ? Gs : yi;
  return n == null ? this.styleTween(t, Lu(t, r)).on("end.style." + t, _i(t)) : typeof n == "function" ? this.styleTween(t, Hu(t, r, Ee(this, "style." + t, n))).each(qu(this._id, t)) : this.styleTween(t, Du(t, r, n), e).on("end.style." + t, null);
}
function Xu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Gu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Xu(t, a, e)), r;
  }
  return o._value = n, o;
}
function Uu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Gu(t, n, e ?? ""));
}
function Yu(t) {
  return function() {
    this.textContent = t;
  };
}
function Vu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Ku(t) {
  return this.tween("text", typeof t == "function" ? Vu(Ee(this, "text", t)) : Yu(t == null ? "" : t + ""));
}
function Zu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Wu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Zu(i)), n;
  }
  return r._value = t, r;
}
function Ju(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Wu(t));
}
function Qu() {
  for (var t = this._name, n = this._id, e = mi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var f = K(u, n);
        Nn(u, t, e, l, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new rt(r, this._parents, t, e);
}
function ju() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = Q(this, r), f = l.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var tl = 0;
function rt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function mi() {
  return ++tl;
}
var j = Vt.prototype;
rt.prototype = {
  constructor: rt,
  select: Ou,
  selectAll: Cu,
  selectChild: j.selectChild,
  selectChildren: j.selectChildren,
  filter: Nu,
  merge: Su,
  selection: Fu,
  transition: Qu,
  call: j.call,
  nodes: j.nodes,
  node: j.node,
  size: j.size,
  empty: j.empty,
  each: j.each,
  on: ku,
  attr: cu,
  attrTween: yu,
  style: Bu,
  styleTween: Uu,
  text: Ku,
  textTween: Ju,
  remove: Iu,
  tween: iu,
  delay: vu,
  duration: bu,
  ease: Au,
  easeVarying: Tu,
  end: ju,
  [Symbol.iterator]: j[Symbol.iterator]
};
function nl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var el = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: nl
};
function rl(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function il(t) {
  var n, e;
  t instanceof rt ? (n = t._id, t = t._name) : (n = mi(), (e = el).time = Tn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Nn(u, t, n, l, a, e || rl(u, n));
  return new rt(r, this._parents, t, n);
}
Vt.prototype.interrupt = nu;
Vt.prototype.transition = il;
const ce = Math.PI, he = 2 * ce, ft = 1e-6, ol = he - ft;
function vi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function al(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return vi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class wi {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? vi : al(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, f = a - n, h = s - e, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > ft) if (!(Math.abs(h * u - l * f) > ft) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, m = u * u + l * l, _ = p * p + d * d, g = Math.sqrt(m), v = Math.sqrt(c), x = o * Math.tan((ce - Math.acos((m + c - _) / (2 * g * v))) / 2), y = x / v, w = x / g;
      Math.abs(y - 1) > ft && this._append`L${n + y * f},${e + y * h}`, this._append`A${o},${o},0,0,${+(h * p > f * d)},${this._x1 = n + w * u},${this._y1 = e + w * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, f = e + u, h = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${f}` : (Math.abs(this._x1 - l) > ft || Math.abs(this._y1 - f) > ft) && this._append`L${l},${f}`, r && (c < 0 && (c = c % he + he), c > ol ? this._append`A${r},${r},0,1,${h},${n - s},${e - u}A${r},${r},0,1,${h},${this._x1 = l},${this._y1 = f}` : c > ft && this._append`A${r},${r},0,${+(c >= ce)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Z() {
  return new wi();
}
Z.prototype = wi.prototype;
function sl(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return xi(this.cover(n, e), n, e, t);
}
function xi(t, n, e, r) {
  if (isNaN(n) || isNaN(e)) return t;
  var i, o = t._root, a = { data: r }, s = t._x0, u = t._y0, l = t._x1, f = t._y1, h, c, p, d, m, _, g, v;
  if (!o) return t._root = a, t;
  for (; o.length; )
    if ((m = n >= (h = (s + l) / 2)) ? s = h : l = h, (_ = e >= (c = (u + f) / 2)) ? u = c : f = c, i = o, !(o = o[g = _ << 1 | m])) return i[g] = a, t;
  if (p = +t._x.call(null, o.data), d = +t._y.call(null, o.data), n === p && e === d) return a.next = o, i ? i[g] = a : t._root = a, t;
  do
    i = i ? i[g] = new Array(4) : t._root = new Array(4), (m = n >= (h = (s + l) / 2)) ? s = h : l = h, (_ = e >= (c = (u + f) / 2)) ? u = c : f = c;
  while ((g = _ << 1 | m) === (v = (d >= c) << 1 | p >= h));
  return i[v] = o, i[g] = a, t;
}
function ul(t) {
  var n, e, r = t.length, i, o, a = new Array(r), s = new Array(r), u = 1 / 0, l = 1 / 0, f = -1 / 0, h = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(i = +this._x.call(null, n = t[e])) || isNaN(o = +this._y.call(null, n)) || (a[e] = i, s[e] = o, i < u && (u = i), i > f && (f = i), o < l && (l = o), o > h && (h = o));
  if (u > f || l > h) return this;
  for (this.cover(u, l).cover(f, h), e = 0; e < r; ++e)
    xi(this, a[e], s[e], t[e]);
  return this;
}
function ll(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n)) return this;
  var e = this._x0, r = this._y0, i = this._x1, o = this._y1;
  if (isNaN(e))
    i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
  else {
    for (var a = i - e || 1, s = this._root, u, l; e > t || t >= i || r > n || n >= o; )
      switch (l = (n < r) << 1 | t < e, u = new Array(4), u[l] = s, s = u, a *= 2, l) {
        case 0:
          i = e + a, o = r + a;
          break;
        case 1:
          e = i - a, o = r + a;
          break;
        case 2:
          i = e + a, r = o - a;
          break;
        case 3:
          e = i - a, r = o - a;
          break;
      }
    this._root && this._root.length && (this._root = s);
  }
  return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
}
function fl() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length) do
      t.push(n.data);
    while (n = n.next);
  }), t;
}
function cl(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function C(t, n, e, r, i) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
}
function hl(t, n, e) {
  var r, i = this._x0, o = this._y0, a, s, u, l, f = this._x1, h = this._y1, c = [], p = this._root, d, m;
  for (p && c.push(new C(p, i, o, f, h)), e == null ? e = 1 / 0 : (i = t - e, o = n - e, f = t + e, h = n + e, e *= e); d = c.pop(); )
    if (!(!(p = d.node) || (a = d.x0) > f || (s = d.y0) > h || (u = d.x1) < i || (l = d.y1) < o))
      if (p.length) {
        var _ = (a + u) / 2, g = (s + l) / 2;
        c.push(
          new C(p[3], _, g, u, l),
          new C(p[2], a, g, _, l),
          new C(p[1], _, s, u, g),
          new C(p[0], a, s, _, g)
        ), (m = (n >= g) << 1 | t >= _) && (d = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - m], c[c.length - 1 - m] = d);
      } else {
        var v = t - +this._x.call(null, p.data), x = n - +this._y.call(null, p.data), y = v * v + x * x;
        if (y < e) {
          var w = Math.sqrt(e = y);
          i = t - w, o = n - w, f = t + w, h = n + w, r = p.data;
        }
      }
  return r;
}
function pl(t) {
  if (isNaN(f = +this._x.call(null, t)) || isNaN(h = +this._y.call(null, t))) return this;
  var n, e = this._root, r, i, o, a = this._x0, s = this._y0, u = this._x1, l = this._y1, f, h, c, p, d, m, _, g;
  if (!e) return this;
  if (e.length) for (; ; ) {
    if ((d = f >= (c = (a + u) / 2)) ? a = c : u = c, (m = h >= (p = (s + l) / 2)) ? s = p : l = p, n = e, !(e = e[_ = m << 1 | d])) return this;
    if (!e.length) break;
    (n[_ + 1 & 3] || n[_ + 2 & 3] || n[_ + 3 & 3]) && (r = n, g = _);
  }
  for (; e.data !== t; ) if (i = e, !(e = e.next)) return this;
  return (o = e.next) && delete e.next, i ? (o ? i.next = o : delete i.next, this) : n ? (o ? n[_] = o : delete n[_], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (r ? r[g] = e : this._root = e), this) : (this._root = o, this);
}
function dl(t) {
  for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
  return this;
}
function gl() {
  return this._root;
}
function yl() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length) do
      ++t;
    while (n = n.next);
  }), t;
}
function _l(t) {
  var n = [], e, r = this._root, i, o, a, s, u;
  for (r && n.push(new C(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, o = e.x0, a = e.y0, s = e.x1, u = e.y1) && r.length) {
      var l = (o + s) / 2, f = (a + u) / 2;
      (i = r[3]) && n.push(new C(i, l, f, s, u)), (i = r[2]) && n.push(new C(i, o, f, l, u)), (i = r[1]) && n.push(new C(i, l, a, s, f)), (i = r[0]) && n.push(new C(i, o, a, l, f));
    }
  return this;
}
function ml(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new C(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var i = r.node;
    if (i.length) {
      var o, a = r.x0, s = r.y0, u = r.x1, l = r.y1, f = (a + u) / 2, h = (s + l) / 2;
      (o = i[0]) && n.push(new C(o, a, s, f, h)), (o = i[1]) && n.push(new C(o, f, s, u, h)), (o = i[2]) && n.push(new C(o, a, h, f, l)), (o = i[3]) && n.push(new C(o, f, h, u, l));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function vl(t) {
  return t[0];
}
function wl(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function xl(t) {
  return t[1];
}
function bl(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function bi(t, n, e) {
  var r = new ke(n ?? vl, e ?? xl, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function ke(t, n, e, r, i, o) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
}
function lr(t) {
  for (var n = { data: t.data }, e = n; t = t.next; ) e = e.next = { data: t.data };
  return n;
}
var R = bi.prototype = ke.prototype;
R.copy = function() {
  var t = new ke(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
  if (!n) return t;
  if (!n.length) return t._root = lr(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = n.source[i]) && (r.length ? e.push({ source: r, target: n.target[i] = new Array(4) }) : n.target[i] = lr(r));
  return t;
};
R.add = sl;
R.addAll = ul;
R.cover = ll;
R.data = fl;
R.extent = cl;
R.find = hl;
R.remove = pl;
R.removeAll = dl;
R.root = gl;
R.size = yl;
R.visit = _l;
R.visitAfter = ml;
R.x = wl;
R.y = bl;
function D(t) {
  return function() {
    return t;
  };
}
function bt(t) {
  return (t() - 0.5) * 1e-6;
}
function Ml(t) {
  return t.index;
}
function fr(t, n) {
  var e = t.get(n);
  if (!e) throw new Error("node not found: " + n);
  return e;
}
function Al(t) {
  var n = Ml, e = h, r, i = D(30), o, a, s, u, l, f = 1;
  t == null && (t = []);
  function h(_) {
    return 1 / Math.min(s[_.source.index], s[_.target.index]);
  }
  function c(_) {
    for (var g = 0, v = t.length; g < f; ++g)
      for (var x = 0, y, w, A, $, T, S, P; x < v; ++x)
        y = t[x], w = y.source, A = y.target, $ = A.x + A.vx - w.x - w.vx || bt(l), T = A.y + A.vy - w.y - w.vy || bt(l), S = Math.sqrt($ * $ + T * T), S = (S - o[x]) / S * _ * r[x], $ *= S, T *= S, A.vx -= $ * (P = u[x]), A.vy -= T * P, w.vx += $ * (P = 1 - P), w.vy += T * P;
  }
  function p() {
    if (a) {
      var _, g = a.length, v = t.length, x = new Map(a.map((w, A) => [n(w, A, a), w])), y;
      for (_ = 0, s = new Array(g); _ < v; ++_)
        y = t[_], y.index = _, typeof y.source != "object" && (y.source = fr(x, y.source)), typeof y.target != "object" && (y.target = fr(x, y.target)), s[y.source.index] = (s[y.source.index] || 0) + 1, s[y.target.index] = (s[y.target.index] || 0) + 1;
      for (_ = 0, u = new Array(v); _ < v; ++_)
        y = t[_], u[_] = s[y.source.index] / (s[y.source.index] + s[y.target.index]);
      r = new Array(v), d(), o = new Array(v), m();
    }
  }
  function d() {
    if (a)
      for (var _ = 0, g = t.length; _ < g; ++_)
        r[_] = +e(t[_], _, t);
  }
  function m() {
    if (a)
      for (var _ = 0, g = t.length; _ < g; ++_)
        o[_] = +i(t[_], _, t);
  }
  return c.initialize = function(_, g) {
    a = _, l = g, p();
  }, c.links = function(_) {
    return arguments.length ? (t = _, p(), c) : t;
  }, c.id = function(_) {
    return arguments.length ? (n = _, c) : n;
  }, c.iterations = function(_) {
    return arguments.length ? (f = +_, c) : f;
  }, c.strength = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : D(+_), d(), c) : e;
  }, c.distance = function(_) {
    return arguments.length ? (i = typeof _ == "function" ? _ : D(+_), m(), c) : i;
  }, c;
}
const $l = 1664525, Tl = 1013904223, cr = 4294967296;
function Nl() {
  let t = 1;
  return () => (t = ($l * t + Tl) % cr) / cr;
}
function Sl(t) {
  return t.x;
}
function Pl(t) {
  return t.y;
}
var El = 10, kl = Math.PI * (3 - Math.sqrt(5));
function zl(t) {
  var n, e = 1, r = 1e-3, i = 1 - Math.pow(r, 1 / 300), o = 0, a = 0.6, s = /* @__PURE__ */ new Map(), u = Se(h), l = Mn("tick", "end"), f = Nl();
  t == null && (t = []);
  function h() {
    c(), l.call("tick", n), e < r && (u.stop(), l.call("end", n));
  }
  function c(m) {
    var _, g = t.length, v;
    m === void 0 && (m = 1);
    for (var x = 0; x < m; ++x)
      for (e += (o - e) * i, s.forEach(function(y) {
        y(e);
      }), _ = 0; _ < g; ++_)
        v = t[_], v.fx == null ? v.x += v.vx *= a : (v.x = v.fx, v.vx = 0), v.fy == null ? v.y += v.vy *= a : (v.y = v.fy, v.vy = 0);
    return n;
  }
  function p() {
    for (var m = 0, _ = t.length, g; m < _; ++m) {
      if (g = t[m], g.index = m, g.fx != null && (g.x = g.fx), g.fy != null && (g.y = g.fy), isNaN(g.x) || isNaN(g.y)) {
        var v = El * Math.sqrt(0.5 + m), x = m * kl;
        g.x = v * Math.cos(x), g.y = v * Math.sin(x);
      }
      (isNaN(g.vx) || isNaN(g.vy)) && (g.vx = g.vy = 0);
    }
  }
  function d(m) {
    return m.initialize && m.initialize(t, f), m;
  }
  return p(), n = {
    tick: c,
    restart: function() {
      return u.restart(h), n;
    },
    stop: function() {
      return u.stop(), n;
    },
    nodes: function(m) {
      return arguments.length ? (t = m, p(), s.forEach(d), n) : t;
    },
    alpha: function(m) {
      return arguments.length ? (e = +m, n) : e;
    },
    alphaMin: function(m) {
      return arguments.length ? (r = +m, n) : r;
    },
    alphaDecay: function(m) {
      return arguments.length ? (i = +m, n) : +i;
    },
    alphaTarget: function(m) {
      return arguments.length ? (o = +m, n) : o;
    },
    velocityDecay: function(m) {
      return arguments.length ? (a = 1 - m, n) : 1 - a;
    },
    randomSource: function(m) {
      return arguments.length ? (f = m, s.forEach(d), n) : f;
    },
    force: function(m, _) {
      return arguments.length > 1 ? (_ == null ? s.delete(m) : s.set(m, d(_)), n) : s.get(m);
    },
    find: function(m, _, g) {
      var v = 0, x = t.length, y, w, A, $, T;
      for (g == null ? g = 1 / 0 : g *= g, v = 0; v < x; ++v)
        $ = t[v], y = m - $.x, w = _ - $.y, A = y * y + w * w, A < g && (T = $, g = A);
      return T;
    },
    on: function(m, _) {
      return arguments.length > 1 ? (l.on(m, _), n) : l.on(m);
    }
  };
}
function Il() {
  var t, n, e, r, i = D(-30), o, a = 1, s = 1 / 0, u = 0.81;
  function l(p) {
    var d, m = t.length, _ = bi(t, Sl, Pl).visitAfter(h);
    for (r = p, d = 0; d < m; ++d) n = t[d], _.visit(c);
  }
  function f() {
    if (t) {
      var p, d = t.length, m;
      for (o = new Array(d), p = 0; p < d; ++p) m = t[p], o[m.index] = +i(m, p, t);
    }
  }
  function h(p) {
    var d = 0, m, _, g = 0, v, x, y;
    if (p.length) {
      for (v = x = y = 0; y < 4; ++y)
        (m = p[y]) && (_ = Math.abs(m.value)) && (d += m.value, g += _, v += _ * m.x, x += _ * m.y);
      p.x = v / g, p.y = x / g;
    } else {
      m = p, m.x = m.data.x, m.y = m.data.y;
      do
        d += o[m.data.index];
      while (m = m.next);
    }
    p.value = d;
  }
  function c(p, d, m, _) {
    if (!p.value) return !0;
    var g = p.x - n.x, v = p.y - n.y, x = _ - d, y = g * g + v * v;
    if (x * x / u < y)
      return y < s && (g === 0 && (g = bt(e), y += g * g), v === 0 && (v = bt(e), y += v * v), y < a && (y = Math.sqrt(a * y)), n.vx += g * p.value * r / y, n.vy += v * p.value * r / y), !0;
    if (p.length || y >= s) return;
    (p.data !== n || p.next) && (g === 0 && (g = bt(e), y += g * g), v === 0 && (v = bt(e), y += v * v), y < a && (y = Math.sqrt(a * y)));
    do
      p.data !== n && (x = o[p.data.index] * r / y, n.vx += g * x, n.vy += v * x);
    while (p = p.next);
  }
  return l.initialize = function(p, d) {
    t = p, e = d, f();
  }, l.strength = function(p) {
    return arguments.length ? (i = typeof p == "function" ? p : D(+p), f(), l) : i;
  }, l.distanceMin = function(p) {
    return arguments.length ? (a = p * p, l) : Math.sqrt(a);
  }, l.distanceMax = function(p) {
    return arguments.length ? (s = p * p, l) : Math.sqrt(s);
  }, l.theta = function(p) {
    return arguments.length ? (u = p * p, l) : Math.sqrt(u);
  }, l;
}
function Ol(t) {
  var n = D(0.1), e, r, i;
  typeof t != "function" && (t = D(t == null ? 0 : +t));
  function o(s) {
    for (var u = 0, l = e.length, f; u < l; ++u)
      f = e[u], f.vx += (i[u] - f.x) * r[u] * s;
  }
  function a() {
    if (e) {
      var s, u = e.length;
      for (r = new Array(u), i = new Array(u), s = 0; s < u; ++s)
        r[s] = isNaN(i[s] = +t(e[s], s, e)) ? 0 : +n(e[s], s, e);
    }
  }
  return o.initialize = function(s) {
    e = s, a();
  }, o.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : D(+s), a(), o) : n;
  }, o.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : D(+s), a(), o) : t;
  }, o;
}
function Cl(t) {
  var n = D(0.1), e, r, i;
  typeof t != "function" && (t = D(t == null ? 0 : +t));
  function o(s) {
    for (var u = 0, l = e.length, f; u < l; ++u)
      f = e[u], f.vy += (i[u] - f.y) * r[u] * s;
  }
  function a() {
    if (e) {
      var s, u = e.length;
      for (r = new Array(u), i = new Array(u), s = 0; s < u; ++s)
        r[s] = isNaN(i[s] = +t(e[s], s, e)) ? 0 : +n(e[s], s, e);
    }
  }
  return o.initialize = function(s) {
    e = s, a();
  }, o.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : D(+s), a(), o) : n;
  }, o.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : D(+s), a(), o) : t;
  }, o;
}
function Rl(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function vn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Pt(t) {
  return t = vn(Math.abs(t)), t ? t[1] : NaN;
}
function Fl(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Ll(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Dl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wn(t) {
  if (!(n = Dl.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ze({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
wn.prototype = ze.prototype;
function ze(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ze.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Hl(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Mi;
function ql(t, n) {
  var e = vn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Mi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + vn(t, Math.max(0, n + o - 1))[0];
}
function hr(t, n) {
  var e = vn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const pr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Rl,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => hr(t * 100, n),
  r: hr,
  s: ql,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function dr(t) {
  return t;
}
var gr = Array.prototype.map, yr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Bl(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? dr : Fl(gr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? dr : Ll(gr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(h) {
    h = wn(h);
    var c = h.fill, p = h.align, d = h.sign, m = h.symbol, _ = h.zero, g = h.width, v = h.comma, x = h.precision, y = h.trim, w = h.type;
    w === "n" ? (v = !0, w = "g") : pr[w] || (x === void 0 && (x = 12), y = !0, w = "g"), (_ || c === "0" && p === "=") && (_ = !0, c = "0", p = "=");
    var A = m === "$" ? e : m === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", $ = m === "$" ? r : /[%p]/.test(w) ? a : "", T = pr[w], S = /[defgprs%]/.test(w);
    x = x === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function P(b) {
      var k = A, E = $, U, Jt, ut;
      if (w === "c")
        E = T(b) + E, b = "";
      else {
        b = +b;
        var lt = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? u : T(Math.abs(b), x), y && (b = Hl(b)), lt && +b == 0 && d !== "+" && (lt = !1), k = (lt ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + k, E = (w === "s" ? yr[8 + Mi / 3] : "") + E + (lt && d === "(" ? ")" : ""), S) {
          for (U = -1, Jt = b.length; ++U < Jt; )
            if (ut = b.charCodeAt(U), 48 > ut || ut > 57) {
              E = (ut === 46 ? i + b.slice(U + 1) : b.slice(U)) + E, b = b.slice(0, U);
              break;
            }
        }
      }
      v && !_ && (b = n(b, 1 / 0));
      var xt = k.length + b.length + E.length, G = xt < g ? new Array(g - xt + 1).join(c) : "";
      switch (v && _ && (b = n(G + b, G.length ? g - E.length : 1 / 0), G = ""), p) {
        case "<":
          b = k + b + E + G;
          break;
        case "=":
          b = k + G + b + E;
          break;
        case "^":
          b = G.slice(0, xt = G.length >> 1) + k + b + E + G.slice(xt);
          break;
        default:
          b = G + k + b + E;
          break;
      }
      return o(b);
    }
    return P.toString = function() {
      return h + "";
    }, P;
  }
  function f(h, c) {
    var p = l((h = wn(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Pt(c) / 3))) * 3, m = Math.pow(10, -d), _ = yr[8 + d / 3];
    return function(g) {
      return p(m * g) + _;
    };
  }
  return {
    format: l,
    formatPrefix: f
  };
}
var rn, Sn, Ai;
Xl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Xl(t) {
  return rn = Bl(t), Sn = rn.format, Ai = rn.formatPrefix, rn;
}
function Gl(t) {
  return Math.max(0, -Pt(Math.abs(t)));
}
function Ul(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Pt(n) / 3))) * 3 - Pt(Math.abs(t)));
}
function Yl(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Pt(n) - Pt(t)) + 1;
}
function Vl(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Kl(t) {
  return function() {
    return t;
  };
}
function Zl(t) {
  return +t;
}
var _r = [0, 1];
function Mt(t) {
  return t;
}
function pe(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Kl(isNaN(n) ? NaN : 0.5);
}
function Wl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Jl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = pe(i, r), o = e(a, o)) : (r = pe(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Ql(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = pe(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = po(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function jl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function tf() {
  var t = _r, n = _r, e = Ne, r, i, o, a = Mt, s, u, l;
  function f() {
    var c = Math.min(t.length, n.length);
    return a !== Mt && (a = Wl(t[0], t[c - 1])), s = c > 2 ? Ql : Jl, u = l = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? o : (u || (u = s(t.map(r), n, e)))(r(a(c)));
  }
  return h.invert = function(c) {
    return a(i((l || (l = s(n, t.map(r), Y)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Zl), f()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (n = Array.from(c), f()) : n.slice();
  }, h.rangeRound = function(c) {
    return n = Array.from(c), e = qs, f();
  }, h.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : Mt, f()) : a !== Mt;
  }, h.interpolate = function(c) {
    return arguments.length ? (e = c, f()) : e;
  }, h.unknown = function(c) {
    return arguments.length ? (o = c, h) : o;
  }, function(c, p) {
    return r = c, i = p, f();
  };
}
function nf() {
  return tf()(Mt, Mt);
}
function ef(t, n, e, r) {
  var i = wo(t, n, e), o;
  switch (r = wn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Ul(i, a)) && (r.precision = o), Ai(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Yl(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Gl(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Sn(r);
}
function rf(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return vo(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ef(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, f = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); f-- > 0; ) {
      if (l = te(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function B() {
  var t = nf();
  return t.copy = function() {
    return jl(t, B());
  }, Vl.apply(t, arguments), rf(t);
}
function of(t) {
  for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n; ) e[r] = "#" + t.slice(r * 6, ++r * 6);
  return e;
}
const $i = of("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
function Ft(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ft.prototype = {
  constructor: Ft,
  scale: function(t) {
    return t === 1 ? this : new Ft(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ft(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ft.prototype;
var Ti = typeof global == "object" && global && global.Object === Object && global, af = typeof self == "object" && self && self.Object === Object && self, ot = Ti || af || Function("return this")(), J = ot.Symbol, Ni = Object.prototype, sf = Ni.hasOwnProperty, uf = Ni.toString, It = J ? J.toStringTag : void 0;
function lf(t) {
  var n = sf.call(t, It), e = t[It];
  try {
    t[It] = void 0;
    var r = !0;
  } catch {
  }
  var i = uf.call(t);
  return r && (n ? t[It] = e : delete t[It]), i;
}
var ff = Object.prototype, cf = ff.toString;
function hf(t) {
  return cf.call(t);
}
var pf = "[object Null]", df = "[object Undefined]", mr = J ? J.toStringTag : void 0;
function kt(t) {
  return t == null ? t === void 0 ? df : pf : mr && mr in Object(t) ? lf(t) : hf(t);
}
function Et(t) {
  return t != null && typeof t == "object";
}
var gf = "[object Symbol]";
function Pn(t) {
  return typeof t == "symbol" || Et(t) && kt(t) == gf;
}
function En(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var X = Array.isArray, vr = J ? J.prototype : void 0, wr = vr ? vr.toString : void 0;
function Si(t) {
  if (typeof t == "string")
    return t;
  if (X(t))
    return En(t, Si) + "";
  if (Pn(t))
    return wr ? wr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var yf = /\s/;
function _f(t) {
  for (var n = t.length; n-- && yf.test(t.charAt(n)); )
    ;
  return n;
}
var mf = /^\s+/;
function vf(t) {
  return t && t.slice(0, _f(t) + 1).replace(mf, "");
}
function it(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var xr = NaN, wf = /^[-+]0x[0-9a-f]+$/i, xf = /^0b[01]+$/i, bf = /^0o[0-7]+$/i, Mf = parseInt;
function Af(t) {
  if (typeof t == "number")
    return t;
  if (Pn(t))
    return xr;
  if (it(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = it(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = vf(t);
  var e = xf.test(t);
  return e || bf.test(t) ? Mf(t.slice(2), e ? 2 : 8) : wf.test(t) ? xr : +t;
}
var $f = 1 / 0, Tf = 17976931348623157e292;
function Zn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Af(t), t === $f || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Tf;
  }
  return t === t ? t : 0;
}
function Pi(t) {
  return t;
}
var Nf = "[object AsyncFunction]", Sf = "[object Function]", Pf = "[object GeneratorFunction]", Ef = "[object Proxy]";
function Ei(t) {
  if (!it(t))
    return !1;
  var n = kt(t);
  return n == Sf || n == Pf || n == Nf || n == Ef;
}
var Wn = ot["__core-js_shared__"], br = function() {
  var t = /[^.]+$/.exec(Wn && Wn.keys && Wn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function kf(t) {
  return !!br && br in t;
}
var zf = Function.prototype, If = zf.toString;
function vt(t) {
  if (t != null) {
    try {
      return If.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Of = /[\\^$.*+?()[\]{}|]/g, Cf = /^\[object .+?Constructor\]$/, Rf = Function.prototype, Ff = Object.prototype, Lf = Rf.toString, Df = Ff.hasOwnProperty, Hf = RegExp(
  "^" + Lf.call(Df).replace(Of, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qf(t) {
  if (!it(t) || kf(t))
    return !1;
  var n = Ei(t) ? Hf : Cf;
  return n.test(vt(t));
}
function Bf(t, n) {
  return t == null ? void 0 : t[n];
}
function wt(t, n) {
  var e = Bf(t, n);
  return qf(e) ? e : void 0;
}
var de = wt(ot, "WeakMap"), Mr = function() {
  try {
    var t = wt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Xf(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Gf = 9007199254740991, Uf = /^(?:0|[1-9]\d*)$/;
function kn(t, n) {
  var e = typeof t;
  return n = n ?? Gf, !!n && (e == "number" || e != "symbol" && Uf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Yf(t, n, e) {
  n == "__proto__" && Mr ? Mr(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function zn(t, n) {
  return t === n || t !== t && n !== n;
}
var Vf = Object.prototype, Kf = Vf.hasOwnProperty;
function Zf(t, n, e) {
  var r = t[n];
  (!(Kf.call(t, n) && zn(r, e)) || e === void 0 && !(n in t)) && Yf(t, n, e);
}
var Wf = 9007199254740991;
function Ie(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Wf;
}
function Zt(t) {
  return t != null && Ie(t.length) && !Ei(t);
}
function Jf(t, n, e) {
  if (!it(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Zt(e) && kn(n, e.length) : r == "string" && n in e) ? zn(e[n], t) : !1;
}
var Qf = Object.prototype;
function ki(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Qf;
  return t === e;
}
function jf(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var tc = "[object Arguments]";
function Ar(t) {
  return Et(t) && kt(t) == tc;
}
var zi = Object.prototype, nc = zi.hasOwnProperty, ec = zi.propertyIsEnumerable, Oe = Ar(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ar : function(t) {
  return Et(t) && nc.call(t, "callee") && !ec.call(t, "callee");
};
function rc() {
  return !1;
}
var Ii = typeof exports == "object" && exports && !exports.nodeType && exports, $r = Ii && typeof module == "object" && module && !module.nodeType && module, ic = $r && $r.exports === Ii, Tr = ic ? ot.Buffer : void 0, oc = Tr ? Tr.isBuffer : void 0, ge = oc || rc, ac = "[object Arguments]", sc = "[object Array]", uc = "[object Boolean]", lc = "[object Date]", fc = "[object Error]", cc = "[object Function]", hc = "[object Map]", pc = "[object Number]", dc = "[object Object]", gc = "[object RegExp]", yc = "[object Set]", _c = "[object String]", mc = "[object WeakMap]", vc = "[object ArrayBuffer]", wc = "[object DataView]", xc = "[object Float32Array]", bc = "[object Float64Array]", Mc = "[object Int8Array]", Ac = "[object Int16Array]", $c = "[object Int32Array]", Tc = "[object Uint8Array]", Nc = "[object Uint8ClampedArray]", Sc = "[object Uint16Array]", Pc = "[object Uint32Array]", N = {};
N[xc] = N[bc] = N[Mc] = N[Ac] = N[$c] = N[Tc] = N[Nc] = N[Sc] = N[Pc] = !0;
N[ac] = N[sc] = N[vc] = N[uc] = N[wc] = N[lc] = N[fc] = N[cc] = N[hc] = N[pc] = N[dc] = N[gc] = N[yc] = N[_c] = N[mc] = !1;
function Ec(t) {
  return Et(t) && Ie(t.length) && !!N[kt(t)];
}
function kc(t) {
  return function(n) {
    return t(n);
  };
}
var Oi = typeof exports == "object" && exports && !exports.nodeType && exports, Lt = Oi && typeof module == "object" && module && !module.nodeType && module, zc = Lt && Lt.exports === Oi, Jn = zc && Ti.process, Nr = function() {
  try {
    var t = Lt && Lt.require && Lt.require("util").types;
    return t || Jn && Jn.binding && Jn.binding("util");
  } catch {
  }
}(), Sr = Nr && Nr.isTypedArray, Ci = Sr ? kc(Sr) : Ec, Ic = Object.prototype, Oc = Ic.hasOwnProperty;
function Ri(t, n) {
  var e = X(t), r = !e && Oe(t), i = !e && !r && ge(t), o = !e && !r && !i && Ci(t), a = e || r || i || o, s = a ? jf(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Oc.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    kn(l, u))) && s.push(l);
  return s;
}
function Fi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Cc = Fi(Object.keys, Object), Rc = Object.prototype, Fc = Rc.hasOwnProperty;
function Lc(t) {
  if (!ki(t))
    return Cc(t);
  var n = [];
  for (var e in Object(t))
    Fc.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function In(t) {
  return Zt(t) ? Ri(t) : Lc(t);
}
function Dc(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Hc = Object.prototype, qc = Hc.hasOwnProperty;
function Bc(t) {
  if (!it(t))
    return Dc(t);
  var n = ki(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !qc.call(t, r)) || e.push(r);
  return e;
}
function Xc(t) {
  return Zt(t) ? Ri(t, !0) : Bc(t);
}
var Gc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uc = /^\w*$/;
function Ce(t, n) {
  if (X(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Pn(t) ? !0 : Uc.test(t) || !Gc.test(t) || n != null && t in Object(n);
}
var Gt = wt(Object, "create");
function Yc() {
  this.__data__ = Gt ? Gt(null) : {}, this.size = 0;
}
function Vc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Kc = "__lodash_hash_undefined__", Zc = Object.prototype, Wc = Zc.hasOwnProperty;
function Jc(t) {
  var n = this.__data__;
  if (Gt) {
    var e = n[t];
    return e === Kc ? void 0 : e;
  }
  return Wc.call(n, t) ? n[t] : void 0;
}
var Qc = Object.prototype, jc = Qc.hasOwnProperty;
function th(t) {
  var n = this.__data__;
  return Gt ? n[t] !== void 0 : jc.call(n, t);
}
var nh = "__lodash_hash_undefined__";
function eh(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Gt && n === void 0 ? nh : n, this;
}
function mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = Yc;
mt.prototype.delete = Vc;
mt.prototype.get = Jc;
mt.prototype.has = th;
mt.prototype.set = eh;
function rh() {
  this.__data__ = [], this.size = 0;
}
function On(t, n) {
  for (var e = t.length; e--; )
    if (zn(t[e][0], n))
      return e;
  return -1;
}
var ih = Array.prototype, oh = ih.splice;
function ah(t) {
  var n = this.__data__, e = On(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : oh.call(n, e, 1), --this.size, !0;
}
function sh(t) {
  var n = this.__data__, e = On(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function uh(t) {
  return On(this.__data__, t) > -1;
}
function lh(t, n) {
  var e = this.__data__, r = On(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function at(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = rh;
at.prototype.delete = ah;
at.prototype.get = sh;
at.prototype.has = uh;
at.prototype.set = lh;
var Ut = wt(ot, "Map");
function fh() {
  this.size = 0, this.__data__ = {
    hash: new mt(),
    map: new (Ut || at)(),
    string: new mt()
  };
}
function ch(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Cn(t, n) {
  var e = t.__data__;
  return ch(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function hh(t) {
  var n = Cn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function ph(t) {
  return Cn(this, t).get(t);
}
function dh(t) {
  return Cn(this, t).has(t);
}
function gh(t, n) {
  var e = Cn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function st(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
st.prototype.clear = fh;
st.prototype.delete = hh;
st.prototype.get = ph;
st.prototype.has = dh;
st.prototype.set = gh;
var yh = "Expected a function";
function Re(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(yh);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Re.Cache || st)(), e;
}
Re.Cache = st;
var _h = 500;
function mh(t) {
  var n = Re(t, function(r) {
    return e.size === _h && e.clear(), r;
  }), e = n.cache;
  return n;
}
var vh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wh = /\\(\\)?/g, xh = mh(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(vh, function(e, r, i, o) {
    n.push(i ? o.replace(wh, "$1") : r || e);
  }), n;
});
function Rn(t) {
  return t == null ? "" : Si(t);
}
function Fn(t, n) {
  return X(t) ? t : Ce(t, n) ? [t] : xh(Rn(t));
}
function Wt(t) {
  if (typeof t == "string" || Pn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Fe(t, n) {
  n = Fn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Wt(n[e++])];
  return e && e == r ? t : void 0;
}
function bh(t, n, e) {
  var r = t == null ? void 0 : Fe(t, n);
  return r === void 0 ? e : r;
}
function Le(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Pr = J ? J.isConcatSpreadable : void 0;
function Mh(t) {
  return X(t) || Oe(t) || !!(Pr && t && t[Pr]);
}
function Ah(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Mh), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Le(i, s) : i[i.length] = s;
  }
  return i;
}
function $h(t) {
  var n = t == null ? 0 : t.length;
  return n ? Ah(t) : [];
}
var Th = Fi(Object.getPrototypeOf, Object);
function Nh(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Sh(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Nh(t, n, e);
}
var Ph = "\\ud800-\\udfff", Eh = "\\u0300-\\u036f", kh = "\\ufe20-\\ufe2f", zh = "\\u20d0-\\u20ff", Ih = Eh + kh + zh, Oh = "\\ufe0e\\ufe0f", Ch = "\\u200d", Rh = RegExp("[" + Ch + Ph + Ih + Oh + "]");
function Li(t) {
  return Rh.test(t);
}
function Fh(t) {
  return t.split("");
}
var Di = "\\ud800-\\udfff", Lh = "\\u0300-\\u036f", Dh = "\\ufe20-\\ufe2f", Hh = "\\u20d0-\\u20ff", qh = Lh + Dh + Hh, Bh = "\\ufe0e\\ufe0f", Xh = "[" + Di + "]", ye = "[" + qh + "]", _e = "\\ud83c[\\udffb-\\udfff]", Gh = "(?:" + ye + "|" + _e + ")", Hi = "[^" + Di + "]", qi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Bi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Uh = "\\u200d", Xi = Gh + "?", Gi = "[" + Bh + "]?", Yh = "(?:" + Uh + "(?:" + [Hi, qi, Bi].join("|") + ")" + Gi + Xi + ")*", Vh = Gi + Xi + Yh, Kh = "(?:" + [Hi + ye + "?", ye, qi, Bi, Xh].join("|") + ")", Zh = RegExp(_e + "(?=" + _e + ")|" + Kh + Vh, "g");
function Wh(t) {
  return t.match(Zh) || [];
}
function Jh(t) {
  return Li(t) ? Wh(t) : Fh(t);
}
function Qh(t) {
  return function(n) {
    n = Rn(n);
    var e = Li(n) ? Jh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Sh(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var jh = Qh("toUpperCase");
function tp(t) {
  return jh(Rn(t).toLowerCase());
}
function np() {
  this.__data__ = new at(), this.size = 0;
}
function ep(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function rp(t) {
  return this.__data__.get(t);
}
function ip(t) {
  return this.__data__.has(t);
}
var op = 200;
function ap(t, n) {
  var e = this.__data__;
  if (e instanceof at) {
    var r = e.__data__;
    if (!Ut || r.length < op - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new st(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function et(t) {
  var n = this.__data__ = new at(t);
  this.size = n.size;
}
et.prototype.clear = np;
et.prototype.delete = ep;
et.prototype.get = rp;
et.prototype.has = ip;
et.prototype.set = ap;
function Ui(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Yi() {
  return [];
}
var sp = Object.prototype, up = sp.propertyIsEnumerable, Er = Object.getOwnPropertySymbols, Vi = Er ? function(t) {
  return t == null ? [] : (t = Object(t), Ui(Er(t), function(n) {
    return up.call(t, n);
  }));
} : Yi, lp = Object.getOwnPropertySymbols, fp = lp ? function(t) {
  for (var n = []; t; )
    Le(n, Vi(t)), t = Th(t);
  return n;
} : Yi;
function Ki(t, n, e) {
  var r = n(t);
  return X(t) ? r : Le(r, e(t));
}
function kr(t) {
  return Ki(t, In, Vi);
}
function cp(t) {
  return Ki(t, Xc, fp);
}
var me = wt(ot, "DataView"), ve = wt(ot, "Promise"), we = wt(ot, "Set"), zr = "[object Map]", hp = "[object Object]", Ir = "[object Promise]", Or = "[object Set]", Cr = "[object WeakMap]", Rr = "[object DataView]", pp = vt(me), dp = vt(Ut), gp = vt(ve), yp = vt(we), _p = vt(de), tt = kt;
(me && tt(new me(new ArrayBuffer(1))) != Rr || Ut && tt(new Ut()) != zr || ve && tt(ve.resolve()) != Ir || we && tt(new we()) != Or || de && tt(new de()) != Cr) && (tt = function(t) {
  var n = kt(t), e = n == hp ? t.constructor : void 0, r = e ? vt(e) : "";
  if (r)
    switch (r) {
      case pp:
        return Rr;
      case dp:
        return zr;
      case gp:
        return Ir;
      case yp:
        return Or;
      case _p:
        return Cr;
    }
  return n;
});
var Fr = ot.Uint8Array, mp = "__lodash_hash_undefined__";
function vp(t) {
  return this.__data__.set(t, mp), this;
}
function wp(t) {
  return this.__data__.has(t);
}
function xn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new st(); ++n < e; )
    this.add(t[n]);
}
xn.prototype.add = xn.prototype.push = vp;
xn.prototype.has = wp;
function xp(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function bp(t, n) {
  return t.has(n);
}
var Mp = 1, Ap = 2;
function Zi(t, n, e, r, i, o) {
  var a = e & Mp, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), f = o.get(n);
  if (l && f)
    return l == n && f == t;
  var h = -1, c = !0, p = e & Ap ? new xn() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < s; ) {
    var d = t[h], m = n[h];
    if (r)
      var _ = a ? r(m, d, h, n, t, o) : r(d, m, h, t, n, o);
    if (_ !== void 0) {
      if (_)
        continue;
      c = !1;
      break;
    }
    if (p) {
      if (!xp(n, function(g, v) {
        if (!bp(p, v) && (d === g || i(d, g, e, r, o)))
          return p.push(v);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === m || i(d, m, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function Wi(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function $p(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Tp = 1, Np = 2, Sp = "[object Boolean]", Pp = "[object Date]", Ep = "[object Error]", kp = "[object Map]", zp = "[object Number]", Ip = "[object RegExp]", Op = "[object Set]", Cp = "[object String]", Rp = "[object Symbol]", Fp = "[object ArrayBuffer]", Lp = "[object DataView]", Lr = J ? J.prototype : void 0, Qn = Lr ? Lr.valueOf : void 0;
function Dp(t, n, e, r, i, o, a) {
  switch (e) {
    case Lp:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Fp:
      return !(t.byteLength != n.byteLength || !o(new Fr(t), new Fr(n)));
    case Sp:
    case Pp:
    case zp:
      return zn(+t, +n);
    case Ep:
      return t.name == n.name && t.message == n.message;
    case Ip:
    case Cp:
      return t == n + "";
    case kp:
      var s = Wi;
    case Op:
      var u = r & Tp;
      if (s || (s = $p), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Np, a.set(t, n);
      var f = Zi(s(t), s(n), r, i, o, a);
      return a.delete(t), f;
    case Rp:
      if (Qn)
        return Qn.call(t) == Qn.call(n);
  }
  return !1;
}
var Hp = 1, qp = Object.prototype, Bp = qp.hasOwnProperty;
function Xp(t, n, e, r, i, o) {
  var a = e & Hp, s = kr(t), u = s.length, l = kr(n), f = l.length;
  if (u != f && !a)
    return !1;
  for (var h = u; h--; ) {
    var c = s[h];
    if (!(a ? c in n : Bp.call(n, c)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var m = !0;
  o.set(t, n), o.set(n, t);
  for (var _ = a; ++h < u; ) {
    c = s[h];
    var g = t[c], v = n[c];
    if (r)
      var x = a ? r(v, g, c, n, t, o) : r(g, v, c, t, n, o);
    if (!(x === void 0 ? g === v || i(g, v, e, r, o) : x)) {
      m = !1;
      break;
    }
    _ || (_ = c == "constructor");
  }
  if (m && !_) {
    var y = t.constructor, w = n.constructor;
    y != w && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof w == "function" && w instanceof w) && (m = !1);
  }
  return o.delete(t), o.delete(n), m;
}
var Gp = 1, Dr = "[object Arguments]", Hr = "[object Array]", on = "[object Object]", Up = Object.prototype, qr = Up.hasOwnProperty;
function Yp(t, n, e, r, i, o) {
  var a = X(t), s = X(n), u = a ? Hr : tt(t), l = s ? Hr : tt(n);
  u = u == Dr ? on : u, l = l == Dr ? on : l;
  var f = u == on, h = l == on, c = u == l;
  if (c && ge(t)) {
    if (!ge(n))
      return !1;
    a = !0, f = !1;
  }
  if (c && !f)
    return o || (o = new et()), a || Ci(t) ? Zi(t, n, e, r, i, o) : Dp(t, n, u, e, r, i, o);
  if (!(e & Gp)) {
    var p = f && qr.call(t, "__wrapped__"), d = h && qr.call(n, "__wrapped__");
    if (p || d) {
      var m = p ? t.value() : t, _ = d ? n.value() : n;
      return o || (o = new et()), i(m, _, e, r, o);
    }
  }
  return c ? (o || (o = new et()), Xp(t, n, e, r, i, o)) : !1;
}
function De(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Et(t) && !Et(n) ? t !== t && n !== n : Yp(t, n, e, r, De, i);
}
var Vp = 1, Kp = 2;
function Zp(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var f = new et(), h;
      if (!(h === void 0 ? De(l, u, Vp | Kp, r, f) : h))
        return !1;
    }
  }
  return !0;
}
function Ji(t) {
  return t === t && !it(t);
}
function Wp(t) {
  for (var n = In(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ji(i)];
  }
  return n;
}
function Qi(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Jp(t) {
  var n = Wp(t);
  return n.length == 1 && n[0][2] ? Qi(n[0][0], n[0][1]) : function(e) {
    return e === t || Zp(e, t, n);
  };
}
function Qp(t, n) {
  return t != null && n in Object(t);
}
function ji(t, n, e) {
  n = Fn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Wt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ie(i) && kn(a, i) && (X(t) || Oe(t)));
}
function jp(t, n) {
  return t != null && ji(t, n, Qp);
}
var td = 1, nd = 2;
function ed(t, n) {
  return Ce(t) && Ji(n) ? Qi(Wt(t), n) : function(e) {
    var r = bh(e, t);
    return r === void 0 && r === n ? jp(e, t) : De(n, r, td | nd);
  };
}
function rd(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function id(t) {
  return function(n) {
    return Fe(n, t);
  };
}
function od(t) {
  return Ce(t) ? rd(Wt(t)) : id(t);
}
function He(t) {
  return typeof t == "function" ? t : t == null ? Pi : typeof t == "object" ? X(t) ? ed(t[0], t[1]) : Jp(t) : od(t);
}
function ad(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var sd = ad();
function ud(t, n) {
  return t && sd(t, n, In);
}
function ld(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Zt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var qe = ld(ud);
function fd(t) {
  return typeof t == "function" ? t : Pi;
}
function Ln(t, n) {
  var e = X(t) ? Xf : qe;
  return e(t, fd(n));
}
function cd(t, n) {
  return En(n, function(e) {
    return [e, t[e]];
  });
}
function hd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var pd = "[object Map]", dd = "[object Set]";
function gd(t) {
  return function(n) {
    var e = tt(n);
    return e == pd ? Wi(n) : e == dd ? hd(n) : cd(n, t(n));
  };
}
var to = gd(In);
function yd(t, n) {
  var e = [];
  return qe(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function an(t, n) {
  var e = X(t) ? Ui : yd;
  return e(t, He(n));
}
function _d(t, n) {
  var e = -1, r = Zt(t) ? Array(t.length) : [];
  return qe(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Yt(t, n) {
  var e = X(t) ? En : _d;
  return e(t, He(n));
}
var md = Object.prototype, vd = md.hasOwnProperty;
function wd(t, n) {
  return t != null && vd.call(t, n);
}
function xd(t, n) {
  return t != null && ji(t, n, wd);
}
function bd(t, n, e, r) {
  if (!it(t))
    return t;
  n = Fn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Wt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var f = s[u];
      l = void 0, l === void 0 && (l = it(f) ? f : kn(n[i + 1]) ? [] : {});
    }
    Zf(s, u, l), s = s[u];
  }
  return t;
}
function Md(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Fe(t, a);
    e(s, a) && bd(o, Fn(a, t), s);
  }
  return o;
}
function Ad(t, n) {
  if (t == null)
    return {};
  var e = En(cp(t), function(r) {
    return [r];
  });
  return n = He(n), Md(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var $d = Math.ceil, Td = Math.max;
function Nd(t, n, e, r) {
  for (var i = -1, o = Td($d((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Sd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Jf(n, e, r) && (e = r = void 0), n = Zn(n), e === void 0 ? (e = n, n = 0) : e = Zn(e), r = r === void 0 ? n < e ? 1 : -1 : Zn(r), Nd(n, e, r);
  };
}
var Dn = Sd();
function Pd() {
  var t = arguments, n = Rn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const Ed = (t, n, e = 12, r = 12) => {
  const i = B().domain([0, e]).range([0, t]), o = B().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Dn((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const f = $h(Yt(l, function(h) {
        return Yt(
          u,
          function(c) {
            return { x: i(c), y: o(h) };
          }
        );
      }));
      return f.length == 1 ? f[0] : f;
    }
  };
}, kd = "_widget_18g36_1", zd = "_label_18g36_19", Id = "_lit_18g36_24", Od = "_button_18g36_29", Cd = "_symbol_18g36_29", Rd = "_radio_18g36_29", Fd = "_radiobutton_18g36_29", Ld = "_selected_18g36_35", Dd = "_toggle_18g36_35", Hd = "_slider_18g36_44", qd = "_track_18g36_44", Bd = "_track_overlay_18g36_48", Xd = "_handle_18g36_55", M = {
  widget: kd,
  label: zd,
  lit: Id,
  button: Od,
  symbol: Cd,
  radio: Rd,
  radiobutton: Fd,
  selected: Ld,
  toggle: Dd,
  slider: Hd,
  track: qd,
  track_overlay: Bd,
  handle: Xd
}, no = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Be = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, Gd = (t = 1) => {
  const n = Z();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Ud = (t = 1) => {
  const n = Z(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Yd = (t = 1) => {
  const n = Z();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Vd = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = Z();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Kd = (t = 1) => {
  const n = Z(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Zd = (t = 1) => {
  const n = Z(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Wd = (t = 1) => {
  const n = Z(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Jd = (t = 1) => {
  var n = Z(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Qd = (t = 1) => {
  const n = Z(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, xe = (t) => {
  switch (t) {
    case "play":
      return Gd;
    case "forward":
      return Ud;
    case "back":
      return Yd;
    case "pause":
      return Vd;
    case "reload":
      return Kd;
    case "capture":
      return Zd;
    case "rewind":
      return Wd;
    case "stop":
      return Jd;
    case "push":
      return Qd;
  }
}, Xe = () => {
  const t = "button";
  var n = no(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, f = ["play"], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function() {
      h = (h + 1) % f.length, l(), I(this.parentNode).select("." + M.symbol).attr("d", xe(f[h])(r * e));
    },
    press: function(d) {
      h = (h + 1) % f.length, l(), d.select("#button_" + n).select("." + M.symbol).attr("d", xe(f[h])(r * e));
    }
  };
}, jd = () => {
  const t = "slider", n = Sn(".3f");
  var e = no(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, f = function(g) {
  }, h = function(g) {
  }, c = [0, 1], p = 0, d = null, m = B().domain(c).range([0, r]).clamp(!0);
  const _ = function(g, v, x = c) {
    const y = g.select("#slider_" + e);
    m.domain(x), p = v, y.selectAll("." + M.handle).transition().attr("cx", m(v)), a && y.select("." + M.label).text(d + " = " + n(p)), f(), h();
  };
  return {
    type: t,
    scale: m,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return h = g, this;
      h(g);
    },
    range: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    reset: _,
    click: _
  };
}, t0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = I(o).attr("class", M.widget + " " + M.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", M.background).on("click", t.click).on("mouseover", function() {
    I(this).classed(M.lit, !0), I(this.parentNode).select("." + M.symbol).classed(M.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(M.lit, !1), I(this.parentNode).select("." + M.symbol).classed(M.lit, !1);
  }), a.append("path").attr("d", xe(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", M.symbol), r) {
    const u = Be(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", M.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, eo = (t, n) => {
  const e = Z();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, n0 = (t, n) => {
  const e = Sn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = I(u).attr("class", M.widget + " " + M.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", eo(t.size(), t.girth())).attr("class", M.track), s.append("circle").attr("class", M.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", M.track_overlay).on("click", function(d) {
    const m = re(d, this)[0];
    t.value(a.invert(m)), t.update(), t.update_end(), s.selectAll("." + M.handle).attr("cx", a(t.value())), t.show() && s.select("." + M.label).text(t.label() + " = " + e(t.value()));
  }).call(
    ai().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + M.handle).attr("cx", a(t.value())), t.show() && s.select("." + M.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var f, h, c, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Qt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Qt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Qt([t.girth() / 2, t.knob()]) + 7 : -Qt([t.girth() / 2, t.knob()]) - 7, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", M.label).style("text-anchor", c).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + h + ")"), u;
}, e0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = I(a).attr("class", M.widget + " " + M.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(M.selected, t.value() == 1);
  if (s.append("path").attr("d", eo(2 * t.size(), 2 * t.size())).attr("class", M.track), s.append("circle").attr("class", M.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", M.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Be(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", M.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, r0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = xo(a), u = B().domain([0, a - 1]).range([0, t.size()]), l = B().domain([0, a - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = I(f).attr("class", M.widget + " " + M.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + M.radiobutton).data(s).enter().append("g").attr("class", M.radiobutton).attr("id", (_) => "b" + _).attr("transform", (_) => t.orientation() == "vertical" ? "translate(0," + l(_) + ")" : "translate(" + u(_) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = c.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (p = c.append("circle").attr("r", i / 2), d = c.append("circle").attr("r", o / 2)), p.attr("class", M.background).on("mouseover", function() {
    I(this).classed(M.lit, !0), I(this.parentNode).select("." + M.symbol).classed(M.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(M.lit, !1), I(this.parentNode).select("." + M.symbol).classed(M.lit, !1);
  }), d.attr("class", M.symbol), d.filter((_) => _ == t.value()).classed(M.selected, !0), c.on("click", t.click);
  const m = Be(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", M.label).text(function(_, g) {
    return t.choices()[g];
  }).attr("alignment-baseline", m.valign).attr("transform", "translate(" + m.x + "," + m.y + ")").style("font-size", t.fontsize()).attr("text-anchor", m.anchor), f;
}, Br = (t, n) => {
  switch (t.type) {
    case "button":
      return t0(t);
    case "slider":
      return n0(t);
    case "radio":
      return r0(t);
    case "toggle":
      return e0(t);
  }
}, i0 = (t, n) => {
  const e = Ed(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = I("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, z = {
  widgets: {
    slider_size: 400,
    slider_gap: 2,
    slider_anchor: { x: 1, y: 8 },
    slider_girth: 12,
    slider_knob: 14,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 }
  },
  simulation: {
    delay: 10,
    node_min_size: 3,
    node_max_size: 10
  },
  plot: {
    anchor: { x: 7, y: 6 },
    width: 150
  }
}, O = {
  L: 200,
  N: 160,
  N_opinion: 10,
  mean_k: 2.4,
  openmindedness: {
    range: [0, 1],
    default: 0.2
  },
  rewiring_probability: {
    range: [0, 1],
    default: 0.1
  }
}, o0 = (t) => Yt(to(t), (n) => {
  n[1].id = n[0], n[1].label = Pd(tp(n[0]), /_/g, " ");
}), a0 = (t) => Yt(to(t), (n) => n[1]), s0 = (t, n) => Ln(t, (e, r) => e.widget = n[r]), u0 = (t) => Ad(t, (n) => xd(n, "range"));
B().domain([0, 360]).range([0, 2 * Math.PI]);
B().range([0, 360]).domain([0, 2 * Math.PI]);
const l0 = (t, n) => {
  Ln(t, (e) => {
    e.k = n.filter((r) => r.source.id == e.id || r.target.id == e.id).length;
  });
}, Ge = u0(O);
o0(Ge);
const ro = a0(Ge), cn = Yt(
  ro,
  (t) => jd().id(t.id).label(t.label).range(t.range).value(t.default).size(z.widgets.slider_size).girth(z.widgets.slider_girth).knob(z.widgets.slider_knob)
);
s0(ro, cn);
const nt = Xe().actions(["play", "pause"]), Hn = Xe().actions(["back"]), qn = Xe().actions(["rewind"]), f0 = [nt, Hn, qn], c0 = (t, n) => {
  const e = n.position(z.widgets.slider_anchor.x, Dn(cn.length).map((r) => z.widgets.slider_anchor.y + z.widgets.slider_gap * r));
  cn.forEach((r, i) => r.position(e[i])), nt.position(n.position(z.widgets.playbutton_anchor.x, z.widgets.playbutton_anchor.y)).size(z.widgets.playbutton_size), qn.position(n.position(z.widgets.backbutton_anchor.x, z.widgets.backbutton_anchor.y)), Hn.position(n.position(z.widgets.resetbutton_anchor.x, z.widgets.resetbutton_anchor.y)), t.selectAll(null).data(cn).enter().append(Br), t.selectAll(null).data(f0).enter().append(Br);
}, h0 = (t) => {
  Ln(Ge, (n) => n.widget.reset(t, n.default));
};
var H = [], Tt = [], L;
const jn = O.N, Xr = O.L, p0 = O.N_opinion, d0 = () => {
  O.timer = {}, O.tick = 0, Tt = [], H = Dn(jn).map((e) => ({
    id: e,
    opinion: Math.floor(Math.random() * p0),
    x: (Math.random() - 0.5) * 2 * Xr,
    y: (Math.random() - 0.5) * 2 * Xr
  }));
  for (var t = 0; t < jn; t++)
    for (var n = 0; n < t; n++)
      Math.random() < O.mean_k / (jn - 1) && Tt.push({ source: H[t], target: H[n] });
  l0(H, Tt);
}, g0 = () => {
  O.tick++;
  const t = O.openmindedness.widget.value(), n = O.rewiring_probability.widget.value(), e = Tt.filter((r) => r.source.opinion != r.target.opinion);
  if (e.length > 0)
    if (L = e[Math.floor(Math.random() * e.length)], Math.random() < 1 - n)
      Math.random() < 0.5 ? L.source.opinion = L.target.opinion : L.target.opinion = L.source.opinion;
    else {
      let r = L.source, i = L.target, o = L.source.opinion, a = L.target.opinion;
      if (Math.random() < 0.5) {
        let s = Math.random() < 1 - t ? an(H, (u) => u.opinion == o && u.id != r.id) : an(H, (u) => u.id != r.id);
        s.length > 0 && (L.target = s[Math.floor(Math.random() * s.length)]);
      } else {
        let s = Math.random() < 1 - t ? an(H, (u) => u.opinion == a && u.id != i.id) : an(H, (u) => u.id != i.id);
        s.length > 0 && (L.source = s[Math.floor(Math.random() * s.length)]);
      }
    }
  return e.length > 0;
}, y0 = "_node_ltm0z_1", _0 = "_edge_ltm0z_7", m0 = "_plot_ltm0z_12", v0 = "_xaxis_ltm0z_16", w0 = "_spike_ltm0z_20", ht = {
  node: y0,
  edge: _0,
  plot: m0,
  xaxis: v0,
  spike: w0
};
var Ue, Ye, Bn;
const pt = B().domain([-O.L, O.L]), dt = B().domain([-O.L, O.L]);
var Gr = B().range([z.simulation.node_min_size, z.simulation.node_max_size]), io = $i;
const x0 = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  pt.range([0, e]), dt.range([0, r]), Gr.domain(go(H, function(o) {
    return o.k;
  })), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  Ue = i.selectAll(null).data(Tt).enter().append("line").attr("class", ht.edge).attr("x1", function(o) {
    return pt(o.source.x);
  }).attr("y1", function(o) {
    return dt(o.source.y);
  }).attr("x2", function(o) {
    return pt(o.target.x);
  }).attr("y2", function(o) {
    return dt(o.target.y);
  }), Ye = i.selectAll(null).data(H).enter().append("circle").attr("class", ht.node).attr("transform", function(o) {
    return "translate(" + pt(o.x) + "," + dt(o.y) + ")";
  }).attr("r", function(o) {
    return Gr(o.k);
  }).style("fill", function(o) {
    return io[o.opinion];
  }).call(
    ai().on("start", M0).on("drag", A0).on("end", $0)
  ), Bn = zl(H).force("charge", Il().strength(-20)).force("link", Al(Tt).distance(10).strength(1)).force("x", Ol()).force("y", Cl()).alphaTarget(0).on("tick", T0);
}, b0 = (t, n) => {
  Ye.style("fill", function(e) {
    return io[e.opinion];
  }), Ue.style("stroke", function(e) {
    return e.index == L.index ? "red" : "gray";
  }).style("stroke-width", function(e) {
    return e.index == L.index ? "5" : "1";
  }), O.tick % 10 == 0 && Bn.alpha(0.4).restart();
};
function M0(t, n) {
  t.active || Bn.alphaTarget(0.3).restart(), n.fx = n.x, n.fy = n.y;
}
function A0(t, n) {
  n.fx = t.x, n.fy = t.y;
}
function $0(t, n) {
  t.active || Bn.alphaTarget(0), n.fx = null, n.fy = null;
}
function T0() {
  Ue.attr("x1", function(t) {
    return pt(t.source.x);
  }).attr("y1", function(t) {
    return dt(t.source.y);
  }).attr("x2", function(t) {
    return pt(t.target.x);
  }).attr("y2", function(t) {
    return dt(t.target.y);
  }), Ye.attr("transform", function(t) {
    return "translate(" + pt(t.x) + "," + dt(t.y) + ")";
  });
}
var N0 = $i;
function oo(t) {
  let n = [];
  return Ln(Dn(O.N_opinion), (e) => {
    n[e] = t.filter(function(r) {
      return r.opinion == e;
    }).length;
  }), n;
}
var be = B().domain([0, O.N_opinion]).range([0, z.plot.width]), bn = B().range([0, -280]), S0 = So(be).tickFormat("");
Po(bn).tickFormat("");
const ao = (t, n) => "M" + (6 + be(n)) + "," + bn(0) + "L" + (6 + be(n)) + "," + bn(t), P0 = (t, n) => {
  const e = oo(H);
  bn.domain([0, O.N]);
  const r = n.position(z.plot.anchor.x, z.plot.anchor.y);
  t.select("." + ht.plot).remove();
  const i = t.append("g").attr("class", ht.plot).attr("transform", "translate(" + r.x + "," + r.y + ")");
  i.append("g").call(S0).attr("class", ht.xaxis), i.selectAll(null).data(e).enter().append("path").attr("class", ht.spike).attr("d", ao).style("stroke", function(o, a) {
    return N0[a];
  });
}, E0 = (t) => {
  const n = oo(H);
  t.selectAll("." + ht.spike).data(n).attr("d", ao);
};
function k0(t, n, e) {
  const r = g0();
  b0(), E0(n), r || (n.select("#button_play").transition(1e3).style("opacity", 0), n.select("#button_play").style("pointer-events", "none"), nt.press(n));
}
function so(t, n) {
  d0(), x0(t, n);
}
var Ur = {};
const z0 = (t, n, e) => {
  nt.value() == 1 ? Ur = Ws(() => k0(t, n), z.simulation.delay) : Ur.stop();
}, I0 = (t, n, e) => {
  qn.update(() => h0(n)), nt.update(() => z0(t, n)), Hn.update(() => so(t, e));
}, O0 = {
  name: "@explorables/echo_chambers",
  title: "Echo Chambers",
  subtitle: "A model for opinion dynamics",
  description: "This explorable illustrates a dynamic network that explains the emergence of groups of uniform opinion. Nodes can change their opinion based on their open-mindedness and can rewire their connections to other nodes that are like them.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function C0(t, n = uo) {
  const e = i0(t, n), r = e.display, i = e.controls, o = e.grid;
  return c0(i, o), I0(r, i, n), so(r, n), P0(i, o), {
    halt() {
      nt.value() === 1 && nt.press(i);
    },
    reset() {
      nt.value() === 1 && nt.press(i), qn.press(i), Hn.press(i);
    },
    config: n,
    meta: O0
  };
}
export {
  uo as config,
  C0 as default,
  C0 as load,
  O0 as meta
};
