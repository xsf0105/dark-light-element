function mt(t, e, r, i) {
  var o = arguments.length, n = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, r, i);
  else
    for (var p = t.length - 1; p >= 0; p--)
      (a = t[p]) && (n = (o < 3 ? a(n) : o > 3 ? a(e, r, n) : a(e, r)) || n);
  return o > 3 && n && Object.defineProperty(e, r, n), n;
}
function k(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ot = { exports: {} }, D = { exports: {} };
(function(t) {
  function e(r) {
    return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(D);
var tt = /* @__PURE__ */ k(D.exports), B = { exports: {} };
(function(t) {
  function e(r, i) {
    return t.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
      return n.__proto__ = a, n;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r, i);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(B);
var ft = { exports: {} };
(function(t) {
  function e(r) {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(ft);
var at = { exports: {} }, ut = { exports: {} };
(function(t) {
  function e() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(ut);
(function(t) {
  var e = B.exports, r = ut.exports;
  function i(o, n, a) {
    return r() ? (t.exports = i = Reflect.construct.bind(), t.exports.__esModule = !0, t.exports.default = t.exports) : (t.exports = i = function(c, s, u) {
      var f = [null];
      f.push.apply(f, s);
      var h = Function.bind.apply(c, f), l = new h();
      return u && e(l, u.prototype), l;
    }, t.exports.__esModule = !0, t.exports.default = t.exports), i.apply(null, arguments);
  }
  t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
})(at);
(function(t) {
  var e = D.exports, r = B.exports, i = ft.exports, o = at.exports;
  function n(a) {
    var p = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return t.exports = n = function(s) {
      if (s === null || !i(s))
        return s;
      if (typeof s != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof p < "u") {
        if (p.has(s))
          return p.get(s);
        p.set(s, u);
      }
      function u() {
        return o(s, arguments, e(this).constructor);
      }
      return u.prototype = Object.create(s.prototype, {
        constructor: {
          value: u,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), r(u, s);
    }, t.exports.__esModule = !0, t.exports.default = t.exports, n(a);
  }
  t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
})(ot);
var Lt = /* @__PURE__ */ k(ot.exports), lt = { exports: {} }, q = { exports: {} }, Z = { exports: {} };
(function(t) {
  function e(r) {
    "@babel/helpers - typeof";
    return t.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Z);
var st = { exports: {} };
(function(t) {
  var e = Z.exports.default;
  function r(i, o) {
    if (e(i) !== "object" || i === null)
      return i;
    var n = i[Symbol.toPrimitive];
    if (n !== void 0) {
      var a = n.call(i, o || "default");
      if (e(a) !== "object")
        return a;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (o === "string" ? String : Number)(i);
  }
  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})(st);
(function(t) {
  var e = Z.exports.default, r = st.exports;
  function i(o) {
    var n = r(o, "string");
    return e(n) === "symbol" ? n : String(n);
  }
  t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
})(q);
(function(t) {
  var e = q.exports;
  function r(i, o, n) {
    return o = e(o), o in i ? Object.defineProperty(i, o, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : i[o] = n, i;
  }
  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})(lt);
var A = /* @__PURE__ */ k(lt.exports), pt = { exports: {} };
(function(t) {
  function e(r, i) {
    if (!(r instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(pt);
var F = /* @__PURE__ */ k(pt.exports), ct = { exports: {} };
(function(t) {
  var e = q.exports;
  function r(o, n) {
    for (var a = 0; a < n.length; a++) {
      var p = n[a];
      p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(o, e(p.key), p);
    }
  }
  function i(o, n, a) {
    return n && r(o.prototype, n), a && r(o, a), Object.defineProperty(o, "prototype", {
      writable: !1
    }), o;
  }
  t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
})(ct);
var T = /* @__PURE__ */ k(ct.exports), H = { exports: {} };
(function(t) {
  function e(r) {
    if (r === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(H);
var C = /* @__PURE__ */ k(H.exports), ht = { exports: {} };
(function(t) {
  var e = B.exports;
  function r(i, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function");
    i.prototype = Object.create(o && o.prototype, {
      constructor: {
        value: i,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(i, "prototype", {
      writable: !1
    }), o && e(i, o);
  }
  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
})(ht);
var yt = /* @__PURE__ */ k(ht.exports), gt = { exports: {} };
(function(t) {
  var e = Z.exports.default, r = H.exports;
  function i(o, n) {
    if (n && (e(n) === "object" || typeof n == "function"))
      return n;
    if (n !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return r(o);
  }
  t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
})(gt);
var Pt = /* @__PURE__ */ k(gt.exports), L = {}, _t = [], Gt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function b(t, e) {
  for (var r in e)
    t[r] = e[r];
  return (
    /** @type {O & P} */
    t
  );
}
function vt(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
var N = _t.slice;
function Bt(t, e, r, i) {
  for (var o, n, a; e = e._parent; )
    if ((o = e._component) && !o._processingException)
      try {
        if (n = o.constructor, n && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(t)), a = o._dirty), o.componentDidCatch != null && (o.componentDidCatch(t, i || {}), a = o._dirty), a)
          return o._pendingError = o;
      } catch (p) {
        t = p;
      }
  throw t;
}
var _ = {
  _catchError: Bt
}, Zt = 0;
function xt(t, e, r) {
  var i = {}, o, n, a;
  for (a in e)
    a == "key" ? o = e[a] : a == "ref" ? n = e[a] : i[a] = e[a];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? N.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (a in t.defaultProps)
      i[a] === void 0 && (i[a] = t.defaultProps[a]);
  return m(t, i, o, n, null);
}
function m(t, e, r, i, o) {
  var n = {
    type: t,
    props: e,
    key: r,
    ref: i,
    _children: null,
    _parent: null,
    _depth: 0,
    _dom: null,
    // _nextDom must be initialized to undefined b/c it will eventually
    // be set to dom.nextSibling which can return `null` and it is important
    // to be able to distinguish between an uninitialized _nextDom and
    // a _nextDom that has been set to `null`
    _nextDom: void 0,
    _component: null,
    _hydrating: null,
    constructor: void 0,
    _original: o ?? ++Zt
  };
  return o == null && _.vnode != null && _.vnode(n), n;
}
function R(t) {
  return t.children;
}
function W(t, e) {
  this.props = t, this.context = e;
}
W.prototype.setState = function(t, e) {
  var r;
  this._nextState != null && this._nextState !== this.state ? r = this._nextState : r = this._nextState = b({}, this.state), typeof t == "function" && (t = t(b({}, r), this.props)), t && b(r, t), t != null && this._vnode && (e && this._stateCallbacks.push(e), bt(this));
};
W.prototype.forceUpdate = function(t) {
  this._vnode && (this._force = !0, t && this._renderCallbacks.push(t), bt(this));
};
W.prototype.render = R;
function O(t, e) {
  if (e == null)
    return t._parent ? O(t._parent, t._parent._children.indexOf(t) + 1) : null;
  for (var r; e < t._children.length; e++)
    if (r = t._children[e], r != null && r._dom != null)
      return r._dom;
  return typeof t.type == "function" ? O(t) : null;
}
function Ft(t) {
  var e = t._vnode, r = e._dom, i = t._parentDom;
  if (i) {
    var o = [], n = b({}, e);
    n._original = e._original + 1, $(i, e, n, t._globalContext, i.ownerSVGElement !== void 0, e._hydrating != null ? [r] : null, o, r ?? O(e), e._hydrating), Et(o, e), e._dom != r && dt(e);
  }
}
function dt(t) {
  if ((t = t._parent) != null && t._component != null) {
    t._dom = t._component.base = null;
    for (var e = 0; e < t._children.length; e++) {
      var r = t._children[e];
      if (r != null && r._dom != null) {
        t._dom = t._component.base = r._dom;
        break;
      }
    }
    return dt(t);
  }
}
var E = [], J, Tt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
function bt(t) {
  (!t._dirty && (t._dirty = !0) && E.push(t) && !P._rerenderCount++ || J !== _.debounceRendering) && (J = _.debounceRendering, (J || Tt)(P));
}
var et = function(e, r) {
  return e._vnode._depth - r._vnode._depth;
};
function P() {
  var t;
  for (E.sort(et); t = E.shift(); )
    if (t._dirty) {
      var e = E.length;
      Ft(t), E.length > e && E.sort(et);
    }
  P._rerenderCount = 0;
}
P._rerenderCount = 0;
function At(t, e, r, i, o, n, a, p, c, s) {
  var u, f, h, l, y, x, v, g = i && i._children || _t, S = g.length;
  for (r._children = [], u = 0; u < e.length; u++)
    if (l = e[u], l == null || typeof l == "boolean" || typeof l == "function" ? l = r._children[u] = null : typeof l == "string" || typeof l == "number" || // eslint-disable-next-line valid-typeof
    typeof l == "bigint" ? l = r._children[u] = m(null, l, null, null, l) : Array.isArray(l) ? l = r._children[u] = m(R, {
      children: l
    }, null, null, null) : l._depth > 0 ? l = r._children[u] = m(l.type, l.props, l.key, l.ref ? l.ref : null, l._original) : l = r._children[u] = l, l != null) {
      if (l._parent = r, l._depth = r._depth + 1, h = g[u], h === null || h && l.key == h.key && l.type === h.type)
        g[u] = void 0;
      else
        for (f = 0; f < S; f++) {
          if (h = g[f], h && l.key == h.key && l.type === h.type) {
            g[f] = void 0;
            break;
          }
          h = null;
        }
      h = h || L, $(t, l, h, o, n, a, p, c, s), y = l._dom, (f = l.ref) && h.ref != f && (v || (v = []), h.ref && v.push(h.ref, null, l), v.push(f, l._component || y, l)), y != null ? (x == null && (x = y), typeof l.type == "function" && l._children === h._children ? l._nextDom = c = kt(l, c, t) : c = St(t, l, h, g, y, c), typeof r.type == "function" && (r._nextDom = c)) : c && h._dom == c && c.parentNode != t && (c = O(h));
    }
  for (r._dom = x, u = S; u--; )
    g[u] != null && (typeof r.type == "function" && g[u]._dom != null && g[u]._dom == r._nextDom && (r._nextDom = Mt(i).nextSibling), Ot(g[u], g[u]));
  if (v)
    for (u = 0; u < v.length; u++)
      Ct(v[u], v[++u], v[++u]);
}
function kt(t, e, r) {
  for (var i = t._children, o = 0; i && o < i.length; o++) {
    var n = i[o];
    n && (n._parent = t, typeof n.type == "function" ? e = kt(n, e, r) : e = St(r, n, n, i, n._dom, e));
  }
  return e;
}
function St(t, e, r, i, o, n) {
  var a;
  if (e._nextDom !== void 0)
    a = e._nextDom, e._nextDom = void 0;
  else if (r == null || o != n || o.parentNode == null)
    t:
      if (n == null || n.parentNode !== t)
        t.appendChild(o), a = null;
      else {
        for (var p = n, c = 0; (p = p.nextSibling) && c < i.length; c += 1)
          if (p == o)
            break t;
        t.insertBefore(o, n), a = n;
      }
  return a !== void 0 ? n = a : n = o.nextSibling, n;
}
function Mt(t) {
  if (t.type == null || typeof t.type == "string")
    return t._dom;
  if (t._children)
    for (var e = t._children.length - 1; e >= 0; e--) {
      var r = t._children[e];
      if (r) {
        var i = Mt(r);
        if (i)
          return i;
      }
    }
  return null;
}
function Wt(t, e, r, i, o) {
  var n;
  for (n in r)
    n !== "children" && n !== "key" && !(n in e) && G(t, n, null, r[n], i);
  for (n in e)
    (!o || typeof e[n] == "function") && n !== "children" && n !== "key" && n !== "value" && n !== "checked" && r[n] !== e[n] && G(t, n, e[n], r[n], i);
}
function rt(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : r == null ? t[e] = "" : typeof r != "number" || Gt.test(e) ? t[e] = r : t[e] = r + "px";
}
function G(t, e, r, i, o) {
  var n;
  t:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof i == "string" && (t.style.cssText = i = ""), i)
          for (e in i)
            r && e in r || rt(t.style, e, "");
        if (r)
          for (e in r)
            (!i || r[e] !== i[e]) && rt(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      if (n = e !== (e = e.replace(/Capture$/, "")), e.toLowerCase() in t ? e = e.toLowerCase().slice(2) : e = e.slice(2), t._listeners || (t._listeners = {}), t._listeners[e + n] = r, r) {
        if (!i) {
          var a = n ? it : nt;
          t.addEventListener(e, a, n);
        }
      } else {
        var p = n ? it : nt;
        t.removeEventListener(e, p, n);
      }
    else if (e !== "dangerouslySetInnerHTML") {
      if (o)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && // Default value in browsers is `-1` and an empty string is
      // cast to `0` instead
      e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = r ?? "";
          break t;
        } catch {
        }
      typeof r == "function" || (r != null && (r !== !1 || e.indexOf("-") != -1) ? t.setAttribute(e, r) : t.removeAttribute(e));
    }
}
function nt(t) {
  return this._listeners[t.type + !1](_.event ? _.event(t) : t);
}
function it(t) {
  return this._listeners[t.type + !0](_.event ? _.event(t) : t);
}
function $(t, e, r, i, o, n, a, p, c) {
  var s, u = e.type;
  if (e.constructor !== void 0)
    return null;
  r._hydrating != null && (c = r._hydrating, p = e._dom = r._dom, e._hydrating = null, n = [p]), (s = _._diff) && s(e);
  try {
    t:
      if (typeof u == "function") {
        var f, h, l, y, x, v, g = e.props;
        s = u.contextType;
        var S = s && i[s._id], M = s ? S ? S.props.value : s._defaultValue : i;
        if (r._component ? (f = e._component = r._component, v = f._processingException = f._pendingError) : ("prototype" in u && u.prototype.render ? e._component = f = new u(g, M) : (e._component = f = new W(g, M), f.constructor = u, f.render = Kt), S && S.sub(f), f.props = g, f.state || (f.state = {}), f.context = M, f._globalContext = i, h = f._dirty = !0, f._renderCallbacks = [], f._stateCallbacks = []), f._nextState == null && (f._nextState = f.state), u.getDerivedStateFromProps != null && (f._nextState == f.state && (f._nextState = b({}, f._nextState)), b(f._nextState, u.getDerivedStateFromProps(g, f._nextState))), l = f.props, y = f.state, f._vnode = e, h)
          u.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), f.componentDidMount != null && f._renderCallbacks.push(f.componentDidMount);
        else {
          if (u.getDerivedStateFromProps == null && g !== l && f.componentWillReceiveProps != null && f.componentWillReceiveProps(g, M), !f._force && f.shouldComponentUpdate != null && f.shouldComponentUpdate(g, f._nextState, M) === !1 || e._original === r._original) {
            e._original !== r._original && (f.props = g, f.state = f._nextState, f._dirty = !1), f._force = !1, e._dom = r._dom, e._children = r._children, e._children.forEach(function(j) {
              j && (j._parent = e);
            });
            for (var Y = 0; Y < f._stateCallbacks.length; Y++)
              f._renderCallbacks.push(f._stateCallbacks[Y]);
            f._stateCallbacks = [], f._renderCallbacks.length && a.push(f);
            break t;
          }
          f.componentWillUpdate != null && f.componentWillUpdate(g, f._nextState, M), f.componentDidUpdate != null && f._renderCallbacks.push(function() {
            f.componentDidUpdate(l, y, x);
          });
        }
        f.context = M, f.props = g, f._parentDom = t;
        var I = _._render, It = 0;
        if ("prototype" in u && u.prototype.render) {
          f.state = f._nextState, f._dirty = !1, I && I(e), s = f.render(f.props, f.state, f.context);
          for (var K = 0; K < f._stateCallbacks.length; K++)
            f._renderCallbacks.push(f._stateCallbacks[K]);
          f._stateCallbacks = [];
        } else
          do
            f._dirty = !1, I && I(e), s = f.render(f.props, f.state, f.context), f.state = f._nextState;
          while (f._dirty && ++It < 25);
        f.state = f._nextState, f.getChildContext != null && (i = b(b({}, i), f.getChildContext())), !h && f.getSnapshotBeforeUpdate != null && (x = f.getSnapshotBeforeUpdate(l, y));
        var jt = s != null && s.type === R && s.key == null, U = jt ? s.props.children : s;
        At(t, Array.isArray(U) ? U : [U], e, r, i, o, n, a, p, c), f.base = e._dom, e._hydrating = null, f._renderCallbacks.length && a.push(f), v && (f._pendingError = f._processingException = null), f._force = !1;
      } else
        n == null && e._original === r._original ? (e._children = r._children, e._dom = r._dom) : e._dom = Yt(r._dom, e, r, i, o, n, a, c);
    (s = _.diffed) && s(e);
  } catch (j) {
    e._original = null, (c || n != null) && (e._dom = p, e._hydrating = !!c, n[n.indexOf(p)] = null), _._catchError(j, e, r);
  }
}
function Et(t, e) {
  _._commit && _._commit(e, t), t.some(function(r) {
    try {
      t = r._renderCallbacks, r._renderCallbacks = [], t.some(function(i) {
        i.call(r);
      });
    } catch (i) {
      _._catchError(i, r._vnode);
    }
  });
}
function Yt(t, e, r, i, o, n, a, p) {
  var c = r.props, s = e.props, u = e.type, f = 0;
  if (u === "svg" && (o = !0), n != null)
    for (; f < n.length; f++) {
      var h = n[f];
      if (h && "setAttribute" in h == !!u && (u ? h.localName === u : h.nodeType === 3)) {
        t = h, n[f] = null;
        break;
      }
    }
  if (t == null) {
    if (u === null)
      return document.createTextNode(s);
    o ? t = document.createElementNS(
      "http://www.w3.org/2000/svg",
      // @ts-ignore We know `newVNode.type` is a string
      u
    ) : t = document.createElement(
      // @ts-ignore We know `newVNode.type` is a string
      u,
      s.is && s
    ), n = null, p = !1;
  }
  if (u === null)
    c !== s && (!p || t.data !== s) && (t.data = s);
  else {
    n = n && N.call(t.childNodes), c = r.props || L;
    var l = c.dangerouslySetInnerHTML, y = s.dangerouslySetInnerHTML;
    if (!p) {
      if (n != null)
        for (c = {}, f = 0; f < t.attributes.length; f++)
          c[t.attributes[f].name] = t.attributes[f].value;
      (y || l) && (!y || (!l || y.__html != l.__html) && y.__html !== t.innerHTML) && (t.innerHTML = y && y.__html || "");
    }
    if (Wt(t, s, c, o, p), y)
      e._children = [];
    else if (f = e.props.children, At(t, Array.isArray(f) ? f : [f], e, r, i, o && u !== "foreignObject", n, a, n ? n[0] : r._children && O(r, 0), p), n != null)
      for (f = n.length; f--; )
        n[f] != null && vt(n[f]);
    p || ("value" in s && (f = s.value) !== void 0 && // #2756 For the <progress>-element the initial value is 0,
    // despite the attribute not being present. When the attribute
    // is missing the progress bar is treated as indeterminate.
    // To fix that we'll always update it when it is 0 for progress elements
    (f !== t.value || u === "progress" && !f || // This is only for IE 11 to fix <select> value not being updated.
    // To avoid a stale select value we need to set the option.value
    // again, which triggers IE11 to re-evaluate the select value
    u === "option" && f !== c.value) && G(t, "value", f, c.value, !1), "checked" in s && (f = s.checked) !== void 0 && f !== t.checked && G(t, "checked", f, c.checked, !1));
  }
  return t;
}
function Ct(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (i) {
    _._catchError(i, r);
  }
}
function Ot(t, e, r) {
  var i;
  if (_.unmount && _.unmount(t), (i = t.ref) && (!i.current || i.current === t._dom) && Ct(i, null, e), (i = t._component) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (n) {
        _._catchError(n, e);
      }
    i.base = i._parentDom = null, t._component = void 0;
  }
  if (i = t._children)
    for (var o = 0; o < i.length; o++)
      i[o] && Ot(i[o], e, r || typeof t.type != "function");
  !r && t._dom != null && vt(t._dom), t._parent = t._dom = t._nextDom = void 0;
}
function Kt(t, e, r) {
  return this.constructor(t, r);
}
function Ut(t, e, r) {
  _._root && _._root(t, e);
  var i = typeof r == "function", o = i ? null : r && r._children || e._children;
  t = (!i && r || e)._children = xt(R, null, [t]);
  var n = [];
  $(
    e,
    // Determine the new vnode tree and store it on the DOM element on
    // our custom `_children` property.
    t,
    o || L,
    L,
    e.ownerSVGElement !== void 0,
    !i && r ? [r] : o ? null : e.firstChild ? N.call(e.childNodes) : null,
    n,
    !i && r ? r : o ? o._dom : e.firstChild,
    i
  ), Et(n, t);
}
var V = /* @__PURE__ */ function() {
  function t() {
    F(this, t), A(this, "map", /* @__PURE__ */ new Map());
  }
  return T(t, [{
    key: "get",
    value: function(r, i) {
      var o = this.map.get(r);
      if (o)
        return o.get(i);
    }
  }, {
    key: "set",
    value: function(r, i, o) {
      var n, a = this.map.get(r);
      a || (a = /* @__PURE__ */ new Map(), this.map.set(r, a)), (n = a) === null || n === void 0 || n.set(i, o);
    }
  }, {
    key: "forEach",
    value: function(r) {
      this.map.forEach(function(i, o) {
        i.forEach(function(n, a) {
          r(n, o, a);
        });
      });
    }
  }, {
    key: "delete",
    value: function(r) {
      this.map.delete(r);
    }
  }, {
    key: "deleteAll",
    value: function() {
      var r = this;
      this.map.forEach(function(i, o) {
        r.map.delete(o);
      });
    }
  }]), t;
}(), Jt = /* @__PURE__ */ T(function t() {
  var e = this;
  F(this, t), A(this, "eventMap", new V()), A(this, "bindListener", function(r, i, o) {
    if (!(!r || !i || !o)) {
      var n = e.eventMap.get(r, i);
      n || (n = /* @__PURE__ */ new Set(), e.eventMap.set(r, i, n)), n.has(o) || (n.add(o), r.addEventListener(i, o, !0));
    }
  }), A(this, "removeAllListener", function() {
    e.eventMap.forEach(function(r, i, o) {
      r.forEach(function(n) {
        i.removeEventListener(o, n);
      });
    }), e.eventMap.deleteAll();
  });
});
function Rt(t) {
  var e = wt();
  return function() {
    var i = tt(t), o;
    if (e) {
      var n = tt(this).constructor;
      o = Reflect.construct(i, arguments, n);
    } else
      o = i.apply(this, arguments);
    return Pt(this, o);
  };
}
function wt() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var w = function(e) {
  return !(e || e === !1 || e === 0);
}, zt = function(e, r) {
  var i = e;
  switch (r) {
    case Number:
      i = w(e) ? e : Number(e);
      break;
    case Boolean:
      i = !([null, "false", !1, void 0].indexOf(e) > -1);
      break;
  }
  return i;
}, Qt = {
  observed: !0,
  type: String,
  converter: zt
}, z = new V(), Q = new V();
function Xt(t) {
  var e = typeof t == "string" ? {
    tag: t
  } : t, r = e.tag, i = e.style, o = i === void 0 ? "" : i;
  return function(n) {
    var a = /* @__PURE__ */ function(p) {
      yt(s, p);
      var c = Rt(s);
      function s() {
        var u;
        F(this, s), u = c.call(this);
        var f = u.attachShadow({
          mode: "open"
        });
        if (f) {
          var h = document.createElement("style");
          h.innerHTML = o, f.append(h);
        }
        return Q.forEach(function(l, y, x) {
          y === n && Object.defineProperty(C(u), x, l(u[x]));
        }), u;
      }
      return T(s, null, [{
        key: "observedAttributes",
        get: function() {
          var f = [];
          return z.forEach(function(h, l, y) {
            l === n && h.observed && f.push(y);
          }), f;
        }
      }, {
        key: "isBooleanProperty",
        value: function(f) {
          var h = !1;
          return z.forEach(function(l, y, x) {
            if (y === n && l.type === Boolean && f === x)
              return h = !0, h;
          }), h;
        }
      }]), s;
    }(n);
    customElements.get(r) || customElements.define(r, a);
  };
}
var d = /* @__PURE__ */ function(t) {
  yt(r, t);
  var e = Rt(r);
  function r() {
    var i;
    F(this, r);
    for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++)
      n[a] = arguments[a];
    return i = e.call.apply(e, [this].concat(n)), A(C(i), "eventController", new Jt()), A(C(i), "rootPatch", function(p) {
      i.shadowRoot && Ut(p, i.shadowRoot);
    }), A(C(i), "$on", function(p, c, s) {
      return i.eventController.bindListener(s || C(i), p, c);
    }), i;
  }
  return T(r, [{
    key: "_render",
    value: function() {
      var o = this.render();
      o && this.rootPatch(o);
    }
  }, {
    key: "_updateProperty",
    value: function() {
      var o = this;
      this.constructor.observedAttributes.forEach(function(n) {
        o[n] = o[n];
      });
    }
  }, {
    key: "_updateBooleanProperty",
    value: function(o) {
      this.constructor.isBooleanProperty(o) && (this[o] || (this[o] = this[o]));
    }
  }, {
    key: "$emit",
    value: function(o, n) {
      return this.dispatchEvent(new CustomEvent(o, Object.assign({
        bubbles: !0
      }, n)));
    }
  }, {
    key: "componentDidMount",
    value: function() {
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
    }
  }, {
    key: "shouldComponentUpdate",
    value: function(o, n, a) {
      return n !== a;
    }
  }, {
    key: "componentDidUpdate",
    value: function(o, n, a) {
    }
  }, {
    key: "render",
    value: function() {
      return "";
    }
  }, {
    key: "connectedCallback",
    value: function() {
      this._updateProperty(), this._render(), typeof this.componentDidMount == "function" && this.componentDidMount();
    }
  }, {
    key: "attributeChangedCallback",
    value: function(o, n, a) {
      var p = this[o] || a;
      typeof this.shouldComponentUpdate == "function" && !this.shouldComponentUpdate(o, n, p) || (this._render(), typeof this.componentDidUpdate == "function" && this.componentDidUpdate(o, n, p), a !== n && this._updateBooleanProperty(o));
    }
  }, {
    key: "disconnectedCallback",
    value: function() {
      typeof this.componentWillUnmount == "function" && this.componentWillUnmount(), this.eventController.removeAllListener(), this.rootPatch(null);
    }
  }], [{
    key: "getPropertyDescriptor",
    value: function(o, n) {
      return function(a) {
        return {
          get: function() {
            var c = this.getAttribute(o);
            return !w(a) && w(c) && (n.type !== Boolean || c !== "") ? a : (typeof n.converter == "function" && (c = n.converter(c, n.type)), c);
          },
          set: function(c) {
            var s = c;
            typeof n.converter == "function" && (s = n.converter(c, n.type)), s ? typeof s == "boolean" ? this.setAttribute(o, "") : this.setAttribute(o, s) : this.removeAttribute(o);
          },
          configurable: !0,
          enumerable: !0
        };
      };
    }
  }, {
    key: "getStateDescriptor",
    value: function() {
      return function(o) {
        var n = o;
        return {
          get: function() {
            return n;
          },
          set: function(p) {
            n = p, this._render();
          },
          configurable: !0,
          enumerable: !0
        };
      };
    }
  }, {
    key: "createProperty",
    value: function(o, n) {
      var a = Object.assign({}, Qt, n);
      z.set(this, o, a), Q.set(this, o, this.getPropertyDescriptor(o, a));
    }
  }, {
    key: "createState",
    value: function(o) {
      Q.set(this, o, this.getStateDescriptor());
    }
  }]), r;
}(/* @__PURE__ */ Lt(HTMLElement));
A(d, "h", xt);
const Dt = `*,:after,:before{box-sizing:border-box}:host{contain:content;display:inline-block}:host img{max-width:100%;margin-left:0;margin-right:0;margin-top:0;padding:0;margin-bottom:1.75rem}.toggle{position:relative;touch-action:pan-x;cursor:pointer;background-color:transparent;border:0;padding:0;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}.toggle .track{width:50px;height:24px;padding:0;border-radius:30px;background-color:#0f1114;transition:all .2s ease}.toggle .track .check,.toggle .track .x{position:absolute;width:17px;height:17px;top:0;bottom:0;margin-top:auto;margin-bottom:auto;line-height:0}.toggle .track .check{left:5px;opacity:0;transition:opacity .25s ease}.toggle .track .x{right:5px}.toggle.dark .track .check,.toggle.dark .track .x{opacity:1;transition:opacity .25s ease}.toggle.dark .track .x{opacity:0}.toggle .thumb{position:absolute;top:1px;left:1px;width:22px;height:22px;border-radius:50%;background-color:#fafafa;box-sizing:border-box;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transform:translate(0)}.toggle.dark .thumb{transform:translate(26px);border-color:#19ab27}
`;
let X = class extends d {
  componentDidMount() {
    const e = this.shadowRoot.querySelector(".toggle");
    e.addEventListener("click", (r) => {
      e.classList.toggle("dark"), e.classList.contains("dark") ? this.turnOnLight(r) : this.turnOffLight();
    });
  }
  turnOnLight(e) {
    const {
      width: r,
      height: i
    } = document.documentElement.getBoundingClientRect(), o = document.createElement("style");
    o.id = "dark-light-mode-style", o.innerHTML = `body::after {
      content: "";
      position:absolute;
      top: 0;
      left: 0;
      height: ${i}px;
      width: ${r}px;
      min-height: 100vh;
      min-width: 100vw;
      pointer-events: none;
      background: radial-gradient(
        circle at
        var(--dark-light-mode-x, ${e.pageX}px)
        var(--dark-light-mode-y, ${e.pageY}px),
        rgb(255, 255, 0, 0.3),
        rgb(0, 0, 0, 1) 200px
      );
    }`, document.head.appendChild(o), ["mousemove", "touchstart", "touchmove", "touchend"].forEach((n) => {
      document.addEventListener(n, this.updateLight, !1);
    });
  }
  turnOffLight() {
    const e = document.querySelector("#dark-light-mode-style");
    e.parentNode.removeChild(e), ["mousemove", "touchstart", "touchmove", "touchend"].forEach((r) => {
      document.removeEventListener(r, this.updateLight, !1);
    });
  }
  updateLight(e) {
    if (!e.pageX || !e.pageY)
      return;
    const r = document.documentElement;
    r.style.setProperty("--dark-light-mode-x", `${e.pageX}px`), r.style.setProperty("--dark-light-mode-y", `${e.pageY}px`);
  }
  render() {
    return d.h(R, null, d.h("div", {
      class: "toggle"
    }, d.h("div", {
      class: "track"
    }, d.h("div", {
      class: "check"
    }, d.h("img", {
      src: "data:image/png;base64,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",
      width: "16",
      height: "16",
      role: "presentation",
      style: "pointer-events: none;"
    })), d.h("div", {
      class: "x"
    }, d.h("img", {
      src: "data:image/png;base64,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",
      width: "16",
      height: "16",
      role: "presentation",
      style: "pointer-events: none;"
    }))), d.h("div", {
      class: "thumb"
    })));
  }
};
X = mt([Xt({
  tag: "dark-light-element",
  style: Dt
})], X);
const Ht = X;
export {
  Ht as default
};
