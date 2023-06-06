function Xt(t, e, n, r) {
  var o = arguments.length, i = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, n, r);
  else
    for (var p = t.length - 1; p >= 0; p--)
      (u = t[p]) && (i = (o < 3 ? u(i) : o > 3 ? u(e, n, i) : u(e, n)) || i);
  return o > 3 && i && Object.defineProperty(e, n, i), i;
}
function j(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Et = { exports: {} }, st = { exports: {} };
(function(t) {
  function e(n) {
    return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(st);
var mt = j(st.exports), V = { exports: {} };
(function(t) {
  function e(n, r) {
    return t.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
      return o.__proto__ = i, o;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n, r);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(V);
var K, jt = { exports: {} };
(K = jt).exports = function(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}, K.exports.__esModule = !0, K.exports.default = K.exports;
var yt = { exports: {} }, xt = { exports: {} };
(function(t) {
  t.exports = function() {
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
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
})(xt), function(t) {
  var e = V.exports, n = xt.exports;
  function r(o, i, u) {
    return n() ? (t.exports = r = Reflect.construct.bind(), t.exports.__esModule = !0, t.exports.default = t.exports) : (t.exports = r = function(p, s, d) {
      var a = [null];
      a.push.apply(a, s);
      var l = new (Function.bind.apply(p, a))();
      return d && e(l, d.prototype), l;
    }, t.exports.__esModule = !0, t.exports.default = t.exports), r.apply(null, arguments);
  }
  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
}(yt), function(t) {
  var e = st.exports, n = V.exports, r = jt.exports, o = yt.exports;
  function i(u) {
    var p = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return t.exports = i = function(s) {
      if (s === null || !r(s))
        return s;
      if (typeof s != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (p !== void 0) {
        if (p.has(s))
          return p.get(s);
        p.set(s, d);
      }
      function d() {
        return o(s, arguments, e(this).constructor);
      }
      return d.prototype = Object.create(s.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), n(d, s);
    }, t.exports.__esModule = !0, t.exports.default = t.exports, i(u);
  }
  t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
}(Et);
var qt = j(Et.exports), Ot = { exports: {} }, it = { exports: {} }, z = { exports: {} };
(function(t) {
  function e(n) {
    return t.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n);
  }
  t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
})(z);
var _t = { exports: {} };
(function(t) {
  var e = z.exports.default;
  t.exports = function(n, r) {
    if (e(n) !== "object" || n === null)
      return n;
    var o = n[Symbol.toPrimitive];
    if (o !== void 0) {
      var i = o.call(n, r || "default");
      if (e(i) !== "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(n);
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
})(_t), function(t) {
  var e = z.exports.default, n = _t.exports;
  t.exports = function(r) {
    var o = n(r, "string");
    return e(o) === "symbol" ? o : String(o);
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
}(it), function(t) {
  var e = it.exports;
  t.exports = function(n, r, o) {
    return (r = e(r)) in n ? Object.defineProperty(n, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = o, n;
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
}(Ot);
var E = j(Ot.exports), Rt = { exports: {} };
(function(t) {
  t.exports = function(e, n) {
    if (!(e instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Rt);
var q = j(Rt.exports), It = { exports: {} };
(function(t) {
  var e = it.exports;
  function n(r, o) {
    for (var i = 0; i < o.length; i++) {
      var u = o[i];
      u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, e(u.key), u);
    }
  }
  t.exports = function(r, o, i) {
    return o && n(r.prototype, o), i && n(r, i), Object.defineProperty(r, "prototype", { writable: !1 }), r;
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
})(It);
var $ = j(It.exports), dt = { exports: {} };
(function(t) {
  t.exports = function(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
})(dt);
var F = j(dt.exports), Lt = { exports: {} };
(function(t) {
  var e = V.exports;
  t.exports = function(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function");
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), r && e(n, r);
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Lt);
var Dt = j(Lt.exports), Gt = { exports: {} };
(function(t) {
  var e = z.exports.default, n = dt.exports;
  t.exports = function(r, o) {
    if (o && (e(o) === "object" || typeof o == "function"))
      return o;
    if (o !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return n(r);
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
})(Gt);
var $t = j(Gt.exports), Q = {}, Pt = [], te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function w(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Zt(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
var pt = Pt.slice, m = { _catchError: function(t, e, n, r) {
  for (var o, i, u; e = e._parent; )
    if ((o = e._component) && !o._processingException)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), u = o._dirty), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), u = o._dirty), u)
          return o._pendingError = o;
      } catch (p) {
        t = p;
      }
  throw t;
} }, ee = 0;
function Bt(t, e, n) {
  var r, o, i, u = {};
  for (i in e)
    i == "key" ? r = e[i] : i == "ref" ? o = e[i] : u[i] = e[i];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? pt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      u[i] === void 0 && (u[i] = t.defaultProps[i]);
  return J(t, u, r, o, null);
}
function J(t, e, n, r, o) {
  var i = { type: t, props: e, key: n, ref: r, _children: null, _parent: null, _depth: 0, _dom: null, _nextDom: void 0, _component: null, _hydrating: null, constructor: void 0, _original: o ?? ++ee };
  return o == null && m.vnode != null && m.vnode(i), i;
}
function tt(t) {
  return t.children;
}
function H(t, e) {
  this.props = t, this.context = e;
}
function W(t, e) {
  if (e == null)
    return t._parent ? W(t._parent, t._parent._children.indexOf(t) + 1) : null;
  for (var n; e < t._children.length; e++)
    if ((n = t._children[e]) != null && n._dom != null)
      return n._dom;
  return typeof t.type == "function" ? W(t) : null;
}
function ne(t) {
  var e = t._vnode, n = e._dom, r = t._parentDom;
  if (r) {
    var o = [], i = w({}, e);
    i._original = e._original + 1, ft(r, e, i, t._globalContext, r.ownerSVGElement !== void 0, e._hydrating != null ? [n] : null, o, n ?? W(e), e._hydrating), Tt(o, e), e._dom != n && Ft(e);
  }
}
function Ft(t) {
  if ((t = t._parent) != null && t._component != null) {
    t._dom = t._component.base = null;
    for (var e = 0; e < t._children.length; e++) {
      var n = t._children[e];
      if (n != null && n._dom != null) {
        t._dom = t._component.base = n._dom;
        break;
      }
    }
    return Ft(t);
  }
}
H.prototype.setState = function(t, e) {
  var n;
  n = this._nextState != null && this._nextState !== this.state ? this._nextState : this._nextState = w({}, this.state), typeof t == "function" && (t = t(w({}, n), this.props)), t && w(n, t), t != null && this._vnode && (e && this._stateCallbacks.push(e), At(this));
}, H.prototype.forceUpdate = function(t) {
  this._vnode && (this._force = !0, t && this._renderCallbacks.push(t), At(this));
}, H.prototype.render = tt;
var bt, D = [], re = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
function At(t) {
  (!t._dirty && (t._dirty = !0) && D.push(t) && !X._rerenderCount++ || bt !== m.debounceRendering) && ((bt = m.debounceRendering) || re)(X);
}
var kt = function(t, e) {
  return t._vnode._depth - e._vnode._depth;
};
function X() {
  var t;
  for (D.sort(kt); t = D.shift(); )
    if (t._dirty) {
      var e = D.length;
      ne(t), D.length > e && D.sort(kt);
    }
  X._rerenderCount = 0;
}
function Ct(t, e, n, r, o, i, u, p, s, d) {
  var a, l, f, c, _, C, b, g = r && r._children || Pt, O = g.length;
  for (n._children = [], a = 0; a < e.length; a++)
    if ((c = (c = e[a]) == null || typeof c == "boolean" || typeof c == "function" ? n._children[a] = null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? n._children[a] = J(null, c, null, null, c) : Array.isArray(c) ? n._children[a] = J(tt, { children: c }, null, null, null) : c._depth > 0 ? n._children[a] = J(c.type, c.props, c.key, c.ref ? c.ref : null, c._original) : n._children[a] = c) != null) {
      if (c._parent = n, c._depth = n._depth + 1, (f = g[a]) === null || f && c.key == f.key && c.type === f.type)
        g[a] = void 0;
      else
        for (l = 0; l < O; l++) {
          if ((f = g[l]) && c.key == f.key && c.type === f.type) {
            g[l] = void 0;
            break;
          }
          f = null;
        }
      ft(t, c, f = f || Q, o, i, u, p, s, d), _ = c._dom, (l = c.ref) && f.ref != l && (b || (b = []), f.ref && b.push(f.ref, null, c), b.push(l, c._component || _, c)), _ != null ? (C == null && (C = _), typeof c.type == "function" && c._children === f._children ? c._nextDom = s = Wt(c, s, t) : s = Yt(t, c, f, g, _, s), typeof n.type == "function" && (n._nextDom = s)) : s && f._dom == s && s.parentNode != t && (s = W(f));
    }
  for (n._dom = C, a = O; a--; )
    g[a] != null && (typeof n.type == "function" && g[a]._dom != null && g[a]._dom == n._nextDom && (n._nextDom = Nt(r).nextSibling), Ut(g[a], g[a]));
  if (b)
    for (a = 0; a < b.length; a++)
      Kt(b[a], b[++a], b[++a]);
}
function Wt(t, e, n) {
  for (var r = t._children, o = 0; r && o < r.length; o++) {
    var i = r[o];
    i && (i._parent = t, e = typeof i.type == "function" ? Wt(i, e, n) : Yt(n, i, i, r, i._dom, e));
  }
  return e;
}
function Yt(t, e, n, r, o, i) {
  var u;
  if (e._nextDom !== void 0)
    u = e._nextDom, e._nextDom = void 0;
  else if (n == null || o != i || o.parentNode == null)
    t:
      if (i == null || i.parentNode !== t)
        t.appendChild(o), u = null;
      else {
        for (var p = i, s = 0; (p = p.nextSibling) && s < r.length; s += 1)
          if (p == o)
            break t;
        t.insertBefore(o, i), u = i;
      }
  return i = u !== void 0 ? u : o.nextSibling;
}
function Nt(t) {
  if (t.type == null || typeof t.type == "string")
    return t._dom;
  if (t._children)
    for (var e = t._children.length - 1; e >= 0; e--) {
      var n = t._children[e];
      if (n) {
        var r = Nt(n);
        if (r)
          return r;
      }
    }
  return null;
}
function St(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : n == null ? t[e] = "" : typeof n != "number" || te.test(e) ? t[e] = n : t[e] = n + "px";
}
function U(t, e, n, r, o) {
  var i;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || St(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || St(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      if (i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t._listeners || (t._listeners = {}), t._listeners[e + i] = n, n) {
        if (!r) {
          var u = i ? wt : Mt;
          t.addEventListener(e, u, i);
        }
      } else {
        var p = i ? wt : Mt;
        t.removeEventListener(e, p, i);
      }
    else if (e !== "dangerouslySetInnerHTML") {
      if (o)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Mt(t) {
  return this._listeners[t.type + !1](m.event ? m.event(t) : t);
}
function wt(t) {
  return this._listeners[t.type + !0](m.event ? m.event(t) : t);
}
function ft(t, e, n, r, o, i, u, p, s) {
  var d, a = e.type;
  if (e.constructor !== void 0)
    return null;
  n._hydrating != null && (s = n._hydrating, p = e._dom = n._dom, e._hydrating = null, i = [p]), (d = m._diff) && d(e);
  try {
    t:
      if (typeof a == "function") {
        var l, f, c, _, C, b, g = e.props, O = (d = a.contextType) && r[d._id], R = d ? O ? O.props.value : d._defaultValue : r;
        if (n._component ? b = (l = e._component = n._component)._processingException = l._pendingError : ("prototype" in a && a.prototype.render ? e._component = l = new a(g, R) : (e._component = l = new H(g, R), l.constructor = a, l.render = oe), O && O.sub(l), l.props = g, l.state || (l.state = {}), l.context = R, l._globalContext = r, f = l._dirty = !0, l._renderCallbacks = [], l._stateCallbacks = []), l._nextState == null && (l._nextState = l.state), a.getDerivedStateFromProps != null && (l._nextState == l.state && (l._nextState = w({}, l._nextState)), w(l._nextState, a.getDerivedStateFromProps(g, l._nextState))), c = l.props, _ = l.state, l._vnode = e, f)
          a.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l._renderCallbacks.push(l.componentDidMount);
        else {
          if (a.getDerivedStateFromProps == null && g !== c && l.componentWillReceiveProps != null && l.componentWillReceiveProps(g, R), !l._force && l.shouldComponentUpdate != null && l.shouldComponentUpdate(g, l._nextState, R) === !1 || e._original === n._original) {
            e._original !== n._original && (l.props = g, l.state = l._nextState, l._dirty = !1), l._force = !1, e._dom = n._dom, e._children = n._children, e._children.forEach(function(v) {
              v && (v._parent = e);
            });
            for (var et = 0; et < l._stateCallbacks.length; et++)
              l._renderCallbacks.push(l._stateCallbacks[et]);
            l._stateCallbacks = [], l._renderCallbacks.length && u.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(g, l._nextState, R), l.componentDidUpdate != null && l._renderCallbacks.push(function() {
            l.componentDidUpdate(c, _, C);
          });
        }
        l.context = R, l.props = g, l._parentDom = t;
        var Y = m._render, Ht = 0;
        if ("prototype" in a && a.prototype.render) {
          l.state = l._nextState, l._dirty = !1, Y && Y(e), d = l.render(l.props, l.state, l.context);
          for (var nt = 0; nt < l._stateCallbacks.length; nt++)
            l._renderCallbacks.push(l._stateCallbacks[nt]);
          l._stateCallbacks = [];
        } else
          do
            l._dirty = !1, Y && Y(e), d = l.render(l.props, l.state, l.context), l.state = l._nextState;
          while (l._dirty && ++Ht < 25);
        l.state = l._nextState, l.getChildContext != null && (r = w(w({}, r), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (C = l.getSnapshotBeforeUpdate(c, _));
        var rt = d != null && d.type === tt && d.key == null ? d.props.children : d;
        Ct(t, Array.isArray(rt) ? rt : [rt], e, n, r, o, i, u, p, s), l.base = e._dom, e._hydrating = null, l._renderCallbacks.length && u.push(l), b && (l._pendingError = l._processingException = null), l._force = !1;
      } else
        i == null && e._original === n._original ? (e._children = n._children, e._dom = n._dom) : e._dom = function(v, G, P, Vt, N, x, zt, L) {
          var M = P.props, A = G.props, k = G.type, h = 0;
          if (k === "svg" && (N = !0), x != null)
            for (; h < x.length; h++) {
              var Z = x[h];
              if (Z && "setAttribute" in Z == !!k && (k ? Z.localName === k : Z.nodeType === 3)) {
                v = Z, x[h] = null;
                break;
              }
            }
          if (v == null) {
            if (k === null)
              return document.createTextNode(A);
            v = N ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, A.is && A), x = null, L = !1;
          }
          if (k === null)
            M === A || L && v.data === A || (v.data = A);
          else {
            x = x && pt.call(v.childNodes);
            var ot = (M = P.props || Q).dangerouslySetInnerHTML, I = A.dangerouslySetInnerHTML;
            if (!L) {
              if (x != null)
                for (M = {}, h = 0; h < v.attributes.length; h++)
                  M[v.attributes[h].name] = v.attributes[h].value;
              (I || ot) && (I && (ot && I.__html == ot.__html || I.__html === v.innerHTML) || (v.innerHTML = I && I.__html || ""));
            }
            if (function(vt, B, T, gt, Qt) {
              var y;
              for (y in T)
                y === "children" || y === "key" || y in B || U(vt, y, null, T[y], gt);
              for (y in B)
                Qt && typeof B[y] != "function" || y === "children" || y === "key" || y === "value" || y === "checked" || T[y] === B[y] || U(vt, y, B[y], T[y], gt);
            }(v, A, M, N, L), I)
              G._children = [];
            else if (h = G.props.children, Ct(v, Array.isArray(h) ? h : [h], G, P, Vt, N && k !== "foreignObject", x, zt, x ? x[0] : P._children && W(P, 0), L), x != null)
              for (h = x.length; h--; )
                x[h] != null && Zt(x[h]);
            L || ("value" in A && (h = A.value) !== void 0 && (h !== v.value || k === "progress" && !h || k === "option" && h !== M.value) && U(v, "value", h, M.value, !1), "checked" in A && (h = A.checked) !== void 0 && h !== v.checked && U(v, "checked", h, M.checked, !1));
          }
          return v;
        }(n._dom, e, n, r, o, i, u, s);
    (d = m.diffed) && d(e);
  } catch (v) {
    e._original = null, (s || i != null) && (e._dom = p, e._hydrating = !!s, i[i.indexOf(p)] = null), m._catchError(v, e, n);
  }
}
function Tt(t, e) {
  m._commit && m._commit(e, t), t.some(function(n) {
    try {
      t = n._renderCallbacks, n._renderCallbacks = [], t.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      m._catchError(r, n._vnode);
    }
  });
}
function Kt(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    m._catchError(r, n);
  }
}
function Ut(t, e, n) {
  var r;
  if (m.unmount && m.unmount(t), (r = t.ref) && (r.current && r.current !== t._dom || Kt(r, null, e)), (r = t._component) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        m._catchError(i, e);
      }
    r.base = r._parentDom = null, t._component = void 0;
  }
  if (r = t._children)
    for (var o = 0; o < r.length; o++)
      r[o] && Ut(r[o], e, n || typeof t.type != "function");
  n || t._dom == null || Zt(t._dom), t._parent = t._dom = t._nextDom = void 0;
}
function oe(t, e, n) {
  return this.constructor(t, n);
}
X._rerenderCount = 0;
var ht = function() {
  function t() {
    q(this, t), E(this, "map", /* @__PURE__ */ new Map());
  }
  return $(t, [{ key: "get", value: function(e, n) {
    var r = this.map.get(e);
    if (r)
      return r.get(n);
  } }, { key: "set", value: function(e, n, r) {
    var o, i = this.map.get(e);
    i || (i = /* @__PURE__ */ new Map(), this.map.set(e, i)), (o = i) === null || o === void 0 || o.set(n, r);
  } }, { key: "forEach", value: function(e) {
    this.map.forEach(function(n, r) {
      n.forEach(function(o, i) {
        e(o, r, i);
      });
    });
  } }, { key: "delete", value: function(e) {
    this.map.delete(e);
  } }, { key: "deleteAll", value: function() {
    var e = this;
    this.map.forEach(function(n, r) {
      e.map.delete(r);
    });
  } }]), t;
}(), ie = $(function t() {
  var e = this;
  q(this, t), E(this, "eventMap", new ht()), E(this, "bindListener", function(n, r, o) {
    if (n && r && o) {
      var i = e.eventMap.get(n, r);
      i || (i = /* @__PURE__ */ new Set(), e.eventMap.set(n, r, i)), i.has(o) || (i.add(o), n.addEventListener(r, o, !0));
    }
  }), E(this, "removeAllListener", function() {
    e.eventMap.forEach(function(n, r, o) {
      n.forEach(function(i) {
        r.removeEventListener(o, i);
      });
    }), e.eventMap.deleteAll();
  });
});
function Jt(t) {
  var e = function() {
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
  }();
  return function() {
    var n, r = mt(t);
    if (e) {
      var o = mt(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else
      n = r.apply(this, arguments);
    return $t(this, n);
  };
}
location.href.indexOf("localhost") && console.info("%cquarkc", "color: white;background:#9f57f8;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px", "Running in dev mode.");
var lt = function(t) {
  return !(t || t === !1 || t === 0);
}, le = { observed: !0, type: String, converter: function(t, e) {
  var n = t;
  switch (e) {
    case Number:
      n = lt(t) ? t : Number(t);
      break;
    case Boolean:
      n = !([null, "false", !1, void 0].indexOf(t) > -1);
  }
  return n;
} }, at = new ht(), ut = new ht();
function ae(t) {
  var e = typeof t == "string" ? { tag: t } : t, n = e.tag, r = e.style, o = r === void 0 ? "" : r;
  return function(i) {
    var u = function(p) {
      Dt(d, p);
      var s = Jt(d);
      function d() {
        var a;
        q(this, d);
        var l = (a = s.call(this)).attachShadow({ mode: "open" });
        if (l) {
          var f = document.createElement("style");
          f.innerHTML = o, l.append(f);
        }
        return ut.forEach(function(c, _, C) {
          _ === i && Object.defineProperty(F(a), C, c(a[C]));
        }), a;
      }
      return $(d, null, [{ key: "observedAttributes", get: function() {
        var a = [];
        return at.forEach(function(l, f, c) {
          f === i && l.observed && a.push(c);
        }), a;
      } }, { key: "isBooleanProperty", value: function(a) {
        var l = !1;
        return at.forEach(function(f, c, _) {
          if (c === i && f.type === Boolean && a === _)
            return l = !0;
        }), l;
      } }]), d;
    }(i);
    customElements.get(n) || customElements.define(n, u);
  };
}
var S = function(t) {
  Dt(n, t);
  var e = Jt(n);
  function n() {
    var r;
    q(this, n);
    for (var o = arguments.length, i = new Array(o), u = 0; u < o; u++)
      i[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(i)), E(F(r), "eventController", new ie()), E(F(r), "rootPatch", function(p) {
      r.shadowRoot && function(s, d, a) {
        m._root && m._root(s, d);
        var l = typeof a == "function", f = l ? null : a && a._children || d._children, c = [];
        ft(d, s = (!l && a || d)._children = Bt(tt, null, [s]), f || Q, Q, d.ownerSVGElement !== void 0, !l && a ? [a] : f ? null : d.firstChild ? pt.call(d.childNodes) : null, c, !l && a ? a : f ? f._dom : d.firstChild, l), Tt(c, s);
      }(p, r.shadowRoot);
    }), E(F(r), "$on", function(p, s, d) {
      return r.eventController.bindListener(d || F(r), p, s);
    }), r;
  }
  return $(n, [{ key: "_render", value: function() {
    var r = this.render();
    r && this.rootPatch(r);
  } }, { key: "_updateProperty", value: function() {
    var r = this;
    this.constructor.observedAttributes.forEach(function(o) {
      r[o] = r[o];
    });
  } }, { key: "_updateBooleanProperty", value: function(r) {
    this.constructor.isBooleanProperty(r) && (this[r] || (this[r] = this[r]));
  } }, { key: "$emit", value: function(r, o) {
    return this.dispatchEvent(new CustomEvent(r, Object.assign({ bubbles: !0 }, o)));
  } }, { key: "componentDidMount", value: function() {
  } }, { key: "componentWillUnmount", value: function() {
  } }, { key: "shouldComponentUpdate", value: function(r, o, i) {
    return o !== i;
  } }, { key: "componentDidUpdate", value: function(r, o, i) {
  } }, { key: "render", value: function() {
    return "";
  } }, { key: "connectedCallback", value: function() {
    this._updateProperty(), this._render(), typeof this.componentDidMount == "function" && this.componentDidMount();
  } }, { key: "attributeChangedCallback", value: function(r, o, i) {
    var u = this[r] || i;
    (typeof this.shouldComponentUpdate != "function" || this.shouldComponentUpdate(r, o, u)) && (this._render(), typeof this.componentDidUpdate == "function" && this.componentDidUpdate(r, o, u), i !== o && this._updateBooleanProperty(r));
  } }, { key: "disconnectedCallback", value: function() {
    typeof this.componentWillUnmount == "function" && this.componentWillUnmount(), this.eventController.removeAllListener(), this.rootPatch(null);
  } }], [{ key: "getPropertyDescriptor", value: function(r, o) {
    return function(i) {
      return { get: function() {
        var u = this.getAttribute(r);
        return lt(i) || !lt(u) || o.type === Boolean && u === "" ? (typeof o.converter == "function" && (u = o.converter(u, o.type)), u) : i;
      }, set: function(u) {
        var p = u;
        typeof o.converter == "function" && (p = o.converter(u, o.type)), p ? typeof p == "boolean" ? this.setAttribute(r, "") : this.setAttribute(r, p) : this.removeAttribute(r);
      }, configurable: !0, enumerable: !0 };
    };
  } }, { key: "getStateDescriptor", value: function() {
    return function(r) {
      var o = r;
      return { get: function() {
        return o;
      }, set: function(i) {
        o = i, this._render();
      }, configurable: !0, enumerable: !0 };
    };
  } }, { key: "createProperty", value: function(r, o) {
    var i = Object.assign({}, le, o);
    at.set(this, r, i), ut.set(this, r, this.getPropertyDescriptor(r, i));
  } }, { key: "createState", value: function(r) {
    ut.set(this, r, this.getStateDescriptor());
  } }]), n;
}(qt(HTMLElement));
E(S, "h", Bt);
const ue = `*,:after,:before{box-sizing:border-box}:host{contain:content;display:inline-block}:host img{max-width:100%;margin-left:0;margin-right:0;margin-top:0;padding:0;margin-bottom:1.75rem}.toggle{position:relative;touch-action:pan-x;cursor:pointer;background-color:transparent;border:0;padding:0;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}.toggle .track{width:50px;height:24px;padding:0;border-radius:30px;background-color:#0f1114;transition:all .2s ease}.toggle .track .check,.toggle .track .x{position:absolute;width:17px;height:17px;top:0;bottom:0;margin-top:auto;margin-bottom:auto;line-height:0}.toggle .track .check{left:5px;opacity:0;transition:opacity .25s ease}.toggle .track .x{right:5px}.toggle.dark .track .check,.toggle.dark .track .x{opacity:1;transition:opacity .25s ease}.toggle.dark .track .x{opacity:0}.toggle .thumb{position:absolute;top:1px;left:1px;width:22px;height:22px;border-radius:50%;background-color:#fafafa;box-sizing:border-box;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transform:translate(0)}.toggle.dark .thumb{transform:translate(26px);border-color:#19ab27}
`;
let ct = class extends S {
  componentDidMount() {
    const e = this.shadowRoot.querySelector(".toggle");
    e.addEventListener("click", (n) => {
      e.classList.toggle("dark"), e.classList.contains("dark") ? this.turnOnLight(n) : this.turnOffLight();
    });
  }
  turnOnLight(e) {
    const {
      width: n,
      height: r
    } = document.documentElement.getBoundingClientRect(), o = document.createElement("style");
    o.id = "dark-light-mode-style", o.innerHTML = `body::after {
      content: "";
      position:absolute;
      top: 0;
      left: 0;
      height: ${r}px;
      width: ${n}px;
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
    }`, document.head.appendChild(o), ["mousemove", "touchstart", "touchmove", "touchend"].forEach((i) => {
      document.addEventListener(i, this.updateLight, !1);
    });
  }
  turnOffLight() {
    const e = document.querySelector("#dark-light-mode-style");
    e.parentNode.removeChild(e), ["mousemove", "touchstart", "touchmove", "touchend"].forEach((n) => {
      document.removeEventListener(n, this.updateLight, !1);
    });
  }
  updateLight(e) {
    if (!e.pageX || !e.pageY)
      return;
    const n = document.documentElement;
    n.style.setProperty("--dark-light-mode-x", `${e.pageX}px`), n.style.setProperty("--dark-light-mode-y", `${e.pageY}px`);
  }
  render() {
    return S.h("div", {
      class: "toggle"
    }, S.h("div", {
      class: "track"
    }, S.h("div", {
      class: "check"
    }, S.h("img", {
      src: "data:image/png;base64,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",
      width: "16",
      height: "16",
      role: "presentation",
      style: "pointer-events: none;"
    })), S.h("div", {
      class: "x"
    }, S.h("img", {
      src: "data:image/png;base64,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",
      width: "16",
      height: "16",
      role: "presentation",
      style: "pointer-events: none;"
    }))), S.h("div", {
      class: "thumb"
    }));
  }
};
ct = Xt([ae({
  tag: "dark-light-element",
  style: ue
})], ct);
const se = ct;
export {
  se as default
};
