! function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";

    function s(a, b, c) {
        var e, f, g = (c = c || d).createElement("script");
        if (g.text = a, b)
            for (e in r)(f = b[e] || b.getAttribute && b.getAttribute(e)) && g.setAttribute(e, f);
        c.head.appendChild(g).parentNode.removeChild(g)
    }

    function t(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
    }

    function x(a) {
        var b = !!a && "length" in a && a.length,
            c = t(a);
        return !p(a) && !q(a) && ("array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a)
    }

    function C(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }

    function E(a, b, c) {
        return p(b) ? v.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? v.grep(a, function (a) {
            return a === b !== c
        }) : "string" != typeof b ? v.grep(a, function (a) {
            return -1 < i.call(b, a) !== c
        }) : v.filter(b, a, c)
    }

    function J(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function L(a) {
        return a
    }

    function M(a) {
        throw a
    }

    function N(a, b, c, d) {
        var e;
        try {
            a && p(e = a.promise) ? e.call(a).done(b).fail(c) : a && p(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }

    function Q() {
        d.removeEventListener("DOMContentLoaded", Q), a.removeEventListener("load", Q), v.ready()
    }

    function U(a, b) {
        return b.toUpperCase()
    }

    function V(a) {
        return a.replace(S, "ms-").replace(T, U)
    }

    function X() {
        this.expando = v.expando + X.uid++
    }

    function ab(a, b, c) {
        var d, e;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(_, "-$&").toLowerCase(), "string" == typeof (c = a.getAttribute(d))) {
                try {
                    c = "true" === (e = c) || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : $.test(e) ? JSON.parse(e) : e)
                } catch (a) {}
                Z.set(a, b, c)
            } else c = void 0;
        return c
    }

    function jb(a, b, c, d) {
        var e, f, g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return v.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (v.cssNumber[b] ? "" : "px"),
            k = a.nodeType && (v.cssNumber[b] || "px" !== j && +i) && cb.exec(v.css(a, b));
        if (k && k[3] !== j) {
            for (i /= 2, j = j || k[3], k = +i || 1; g--;) v.style(a, b, k + j), (1 - f) * (1 - (f = h() / i || .5)) <= 0 && (g = 0), k /= f;
            k *= 2, v.style(a, b, k + j), c = c || []
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function lb(a, b) {
        for (var c, d, e, f, g, h, i, j = [], k = 0, l = a.length; k < l; k++)(d = a[k]).style && (c = d.style.display, b ? ("none" === c && (j[k] = Y.get(d, "display") || null, j[k] || (d.style.display = "")), "" === d.style.display && hb(d) && (j[k] = (i = g = f = void 0, g = (e = d).ownerDocument, h = e.nodeName, (i = kb[h]) || (f = g.body.appendChild(g.createElement(h)), i = v.css(f, "display"), f.parentNode.removeChild(f), "none" === i && (i = "block"), kb[h] = i)))) : "none" !== c && (j[k] = "none", Y.set(d, "display", c)));
        for (k = 0; k < l; k++) null != j[k] && (a[k].style.display = j[k]);
        return a
    }

    function qb(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && C(a, b) ? v.merge([a], c) : c
    }

    function rb(a, b) {
        for (var c = 0, d = a.length; c < d; c++) Y.set(a[c], "globalEval", !b || Y.get(b[c], "globalEval"))
    }

    function vb(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if ((f = a[n]) || 0 === f)
                if ("object" === t(f)) v.merge(m, f.nodeType ? [f] : f);
                else if (ub.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (nb.exec(f) || ["", ""])[1].toLowerCase(), i = pb[h] || pb._default, g.innerHTML = i[1] + v.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
            v.merge(m, g.childNodes), (g = l.firstChild).textContent = ""
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", n = 0; f = m[n++];)
            if (d && -1 < v.inArray(f, d)) e && e.push(f);
            else if (j = fb(f), g = qb(l.appendChild(f), "script"), j && rb(g), c)
            for (k = 0; f = g[k++];) ob.test(f.type || "") && c.push(f);
        return l
    }

    function zb() {
        return !0
    }

    function Ab() {
        return !1
    }

    function Bb(a, b) {
        return a === function () {
            try {
                return d.activeElement
            } catch (a) {}
        }() == ("focus" === b)
    }

    function Cb(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            for (h in "string" != typeof c && (d = d || c, c = void 0), b) Cb(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = Ab;
        else if (!e) return a;
        return 1 === f && (g = e, (e = function (a) {
            return v().off(a), g.apply(this, arguments)
        }).guid = g.guid || (g.guid = v.guid++)), a.each(function () {
            v.event.add(this, b, e, d, c)
        })
    }

    function Db(a, b, c) {
        c ? (Y.set(a, b, !1), v.event.add(a, b, {
            namespace: !1,
            handler: function (a) {
                var d, e, g = Y.get(this, b);
                if (1 & a.isTrigger && this[b]) {
                    if (g.length)(v.event.special[b] || {}).delegateType && a.stopPropagation();
                    else if (g = f.call(arguments), Y.set(this, b, g), d = c(this, b), this[b](), g !== (e = Y.get(this, b)) || d ? Y.set(this, b, !1) : e = {}, g !== e) return a.stopImmediatePropagation(), a.preventDefault(), e.value
                } else g.length && (Y.set(this, b, {
                    value: v.event.trigger(v.extend(g[0], v.Event.prototype), g.slice(1), this)
                }), a.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(a, b) && v.event.add(a, b, zb)
    }

    function Ib(a, b) {
        return C(a, "table") && C(11 !== b.nodeType ? b : b.firstChild, "tr") && v(a).children("tbody")[0] || a
    }

    function Jb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Kb(a) {
        return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a
    }

    function Lb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (Y.hasData(a) && (f = Y.access(a), g = Y.set(b, f), j = f.events))
                for (e in delete g.handle, g.events = {}, j)
                    for (c = 0, d = j[e].length; c < d; c++) v.event.add(b, e, j[e][c]);
            Z.hasData(a) && (h = Z.access(a), i = v.extend({}, h), Z.set(b, i))
        }
    }

    function Mb(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            r = p(q);
        if (r || 1 < m && "string" == typeof q && !o.checkClone && Gb.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Mb(f, b, c, d)
        });
        if (m && (f = (e = vb(b, a[0].ownerDocument, !1, a, d)).firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (i = (h = v.map(qb(e, "script"), Jb)).length; l < m; l++) j = e, l !== n && (j = v.clone(j, !0, !0), i && v.merge(h, qb(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, v.map(h, Kb), l = 0; l < i; l++) j = h[l], ob.test(j.type || "") && !Y.access(j, "globalEval") && v.contains(k, j) && (j.src && "module" !== (j.type || "").toLowerCase() ? v._evalUrl && !j.noModule && v._evalUrl(j.src, {
                    nonce: j.nonce || j.getAttribute("nonce")
                }) : s(j.textContent.replace(Hb, ""), j, k))
        }
        return a
    }

    function Nb(a, b, c) {
        for (var d, e = b ? v.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || v.cleanData(qb(d)), d.parentNode && (c && fb(d) && rb(qb(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function Rb(a, b, c) {
        var d, e, f, g, h = a.style;
        return (c = c || Pb(a)) && ("" !== (g = c.getPropertyValue(b) || c[b]) || fb(a) || (g = v.style(a, b)), !o.pixelBoxStyles() && Ob.test(g) && Qb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Sb(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function Wb(a) {
        var b = v.cssProps[a] || Vb[a];
        return b || (a in Ub ? a : Vb[a] = function (a) {
            for (var b = a[0].toUpperCase() + a.slice(1), c = Tb.length; c--;)
                if ((a = Tb[c] + b) in Ub) return a
        }(a) || a)
    }

    function _b(a, b, c) {
        var d = cb.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function ac(a, b, c, d, e, f) {
        var g = "width" === b ? 1 : 0,
            h = 0,
            i = 0;
        if (c === (d ? "border" : "content")) return 0;
        for (; g < 4; g += 2) "margin" === c && (i += v.css(a, c + db[g], !0, e)), d ? ("content" === c && (i -= v.css(a, "padding" + db[g], !0, e)), "margin" !== c && (i -= v.css(a, "border" + db[g] + "Width", !0, e))) : (i += v.css(a, "padding" + db[g], !0, e), "padding" !== c ? i += v.css(a, "border" + db[g] + "Width", !0, e) : h += v.css(a, "border" + db[g] + "Width", !0, e));
        return !d && 0 <= f && (i += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - f - i - h - .5)) || 0), i
    }

    function bc(a, b, c) {
        var d = Pb(a),
            e = (!o.boxSizingReliable() || c) && "border-box" === v.css(a, "boxSizing", !1, d),
            f = e,
            g = Rb(a, b, d),
            h = "offset" + b[0].toUpperCase() + b.slice(1);
        if (Ob.test(g)) {
            if (!c) return g;
            g = "auto"
        }
        return (!o.boxSizingReliable() && e || "auto" === g || !parseFloat(g) && "inline" === v.css(a, "display", !1, d)) && a.getClientRects().length && (e = "border-box" === v.css(a, "boxSizing", !1, d), (f = h in a) && (g = a[h])), (g = parseFloat(g) || 0) + ac(a, b, c || (e ? "border" : "content"), f, d, g) + "px"
    }

    function cc(a, b, c, d, e) {
        return new cc.prototype.init(a, b, c, d, e)
    }

    function jc() {
        ec && (!1 === d.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(jc) : a.setTimeout(jc, v.fx.interval), v.fx.tick())
    }

    function kc() {
        return a.setTimeout(function () {
            dc = void 0
        }), dc = Date.now()
    }

    function lc(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) e["margin" + (c = db[d])] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function mc(a, b, c) {
        for (var d, e = (nc.tweeners[b] || []).concat(nc.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function nc(a, b, c) {
        var d, e, f = 0,
            g = nc.prefilters.length,
            h = v.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = dc || kc(), c = Math.max(0, j.startTime + j.duration - b), d = 1 - (c / j.duration || 0), f = 0, g = j.tweens.length; f < g; f++) j.tweens[f].run(d);
                return h.notifyWith(a, [j, d, c]), d < 1 && g ? c : (g || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: v.extend({}, b),
                opts: v.extend(!0, {
                    specialEasing: {},
                    easing: v.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: dc || kc(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = v.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ((! function (a, b) {
                var c, d, e, f, g;
                for (c in a)
                    if (e = b[d = V(c)], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = v.cssHooks[d]) && "expand" in g)
                        for (c in f = g.expand(f), delete a[d], f) c in a || (a[c] = f[c], b[c] = e);
                    else b[d] = e
            }(k, j.opts.specialEasing)); f < g; f++)
            if (d = nc.prefilters[f].call(j, a, k, j.opts)) return p(d.stop) && (v._queueHooks(j.elem, j.opts.queue).stop = d.stop.bind(d)), d;
        return v.map(k, mc, j), p(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), v.fx.timer(v.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }

    function sc(a) {
        return (a.match(K) || []).join(" ")
    }

    function tc(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function uc(a) {
        return Array.isArray(a) ? a : "string" == typeof a && a.match(K) || []
    }

    function Fc(a, b, c, d) {
        var e;
        if (Array.isArray(b)) v.each(b, function (b, e) {
            c || Bc.test(a) ? d(a, e) : Fc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== t(b)) d(a, b);
        else
            for (e in b) Fc(a + "[" + e + "]", b[e], c, d)
    }

    function Qc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (p(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Rc(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, v.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        var e = {},
            f = a === Nc;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Sc(a, b) {
        var c, d, e = v.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && v.extend(!0, a, d), a
    }
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {},
        p = function (a) {
            return "function" == typeof a && "number" != typeof a.nodeType
        },
        q = function (a) {
            return null != a && a === a.window
        },
        r = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        u = "3.4.1",
        v = function (a, b) {
            return new v.fn.init(a, b)
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    v.fn = v.prototype = {
        jquery: u,
        constructor: v,
        length: 0,
        toArray: function () {
            return f.call(this)
        },
        get: function (a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function (a) {
            var b = v.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function (a) {
            return v.each(this, a)
        },
        map: function (a) {
            return this.pushStack(v.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(0 <= c && c < b ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, v.extend = v.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || p(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) d = a[b], "__proto__" !== b && g !== d && (j && d && (v.isPlainObject(d) || (e = Array.isArray(d))) ? (c = g[b], f = e && !Array.isArray(c) ? [] : e || v.isPlainObject(c) ? c : {}, e = !1, g[b] = v.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, v.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isPlainObject: function (a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || "function" == typeof (c = l.call(b, "constructor") && b.constructor) && m.call(c) === n)
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        globalEval: function (a, b) {
            s(a, {
                nonce: b && b.nonce
            })
        },
        each: function (a, b) {
            var c, d = 0;
            if (x(a))
                for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++);
            else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(w, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (x(Object(a)) ? v.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]);
            return d
        },
        map: function (a, b, c) {
            var d, e, f = 0,
                h = [];
            if (x(a))
                for (d = a.length; f < d; f++) null != (e = b(a[f], f, c)) && h.push(e);
            else
                for (f in a) null != (e = b(a[f], f, c)) && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        support: o
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = c[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });
    var y = function (a) {
        function hb(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = _.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !B[a + " "] && (!q || !q.test(a)) && (1 !== w || "object" !== b.nodeName.toLowerCase())) {
                    if (r = a, s = b, 1 === w && T.test(a)) {
                        for ((k = b.getAttribute("id")) ? k = k.replace(db, eb) : b.setAttribute("id", k = u), h = (o = g(a)).length; h--;) o[h] = "#" + k + " " + tb(o[h]);
                        r = o.join(","), s = ab.test(a) && rb(b.parentNode) || b
                    }
                    try {
                        return H.apply(d, s.querySelectorAll(r)), d
                    } catch (b) {
                        B(a, !0)
                    } finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ib() {
            var a = [];
            return function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
        }

        function jb(a) {
            return a[u] = !0, a
        }

        function kb(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function lb(a, b) {
            for (var c = a.split("|"), e = c.length; e--;) d.attrHandle[c[e]] = b
        }

        function mb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function nb(a) {
            return function (b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function ob(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function pb(a) {
            return function (b) {
                return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && gb(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function qb(a) {
            return jb(function (b) {
                return b = +b, jb(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function rb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function sb() {}

        function tb(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ub(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function (b, c, e) {
                for (; b = b[d];)
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function (b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || g)
                            if (k = (l = b[u] || (b[u] = {}))[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if ((k[f] = m)[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function vb(a) {
            return 1 < a.length ? function (b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function wb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xb(a, b, c, d, e, f) {
            return d && !d[u] && (d = xb(d)), e && !e[u] && (e = xb(e, f)), jb(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || function (a, b, c) {
                        for (var d = 0, e = b.length; d < e; d++) hb(a, b[d], c);
                        return c
                    }(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = wb(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && -1 < (j = e ? J(f, l) : m[k]) && (f[j] = !(g[j] = l))
                    }
                } else r = wb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function yb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ub(function (a) {
                    return a === b
                }, h, !0), l = ub(function (a) {
                    return -1 < J(b, a)
                }, h, !0), m = [function (a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ub(vb(m), c)];
                else {
                    if ((c = d.filter[a[i].type].apply(null, a[i].matches))[u]) {
                        for (e = ++i; e < f && !d.relative[a[e].type]; e++);
                        return xb(1 < i && vb(m), 1 < i && tb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, i < e && yb(a.slice(i, e)), e < f && yb(a = a.slice(e)), e < f && tb(a))
                    }
                    m.push(c)
                } return vb(m)
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ib(),
            z = ib(),
            A = ib(),
            B = ib(),
            C = function (a, b) {
                return a === b && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp(L + "|>"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            cb = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d != d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            db = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            eb = function (a, b) {
                return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            fb = function () {
                m()
            },
            gb = ub(function (a) {
                return !0 === a.disabled && "fieldset" === a.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (b) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        for (b in c = hb.support = {}, f = hb.isXML = function (a) {
                var b = a.namespaceURI,
                    c = (a.ownerDocument || a).documentElement;
                return !X.test(b || c && c.nodeName || "HTML")
            }, m = hb.setDocument = function (a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement && (o = (n = g).documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", fb, !1) : e.attachEvent && e.attachEvent("onunload", fb)), c.attributes = kb(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = kb(function (a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = $.test(n.getElementsByClassName), c.getById = kb(function (a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.filter.ID = function (a) {
                    var b = a.replace(bb, cb);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }, d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }) : (d.filter.ID = function (a) {
                    var b = a.replace(bb, cb);
                    return function (a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }, d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c, d, e, f = b.getElementById(a);
                        if (f) {
                            if ((c = f.getAttributeNode("id")) && c.value === a) return [f];
                            for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                                if ((c = f.getAttributeNode("id")) && c.value === a) return [f]
                        }
                        return []
                    }
                }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function (a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(n.querySelectorAll)) && (kb(function (a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), kb(function (a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && kb(function (a) {
                    c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", O)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, C = b ? function (a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d || (1 & (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                } : function (a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return mb(a, b);
                    for (c = a; c = c.parentNode;) g.unshift(c);
                    for (c = b; c = c.parentNode;) h.unshift(c);
                    for (; g[d] === h[d];) d++;
                    return d ? mb(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }), n
            }, hb.matches = function (a, b) {
                return hb(a, null, null, b)
            }, hb.matchesSelector = function (a, b) {
                if ((a.ownerDocument || a) !== n && m(a), c.matchesSelector && p && !B[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (a) {
                    B(b, !0)
                }
                return 0 < hb(b, n, null, [a]).length
            }, hb.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, hb.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, hb.escape = function (a) {
                return (a + "").replace(db, eb)
            }, hb.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, hb.uniqueSort = function (a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(C), l) {
                    for (; b = a[f++];) b === a[f] && (e = d.push(f));
                    for (; e--;) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = hb.getText = function (a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    for (; b = a[d++];) c += e(b);
                return c
            }, (d = hb.selectors = {
                cacheLength: 50,
                createPseudo: jb,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(bb, cb), a[3] = (a[3] || a[4] || a[5] || "").replace(bb, cb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || hb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && hb.error(a[0]), a
                    },
                    PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(bb, cb).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function (a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (a, b, c) {
                        return function (d) {
                            var e = hb.attr(d, a);
                            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && -1 < e.indexOf(c) : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? -1 < (" " + e.replace(P, " ") + " ").indexOf(c) : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                        }
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];)
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (t = (n = (j = (k = (l = (m = q)[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === w && j[1]) && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (t = n = (j = (k = (l = (m = b)[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === w && j[1]), !1 === t)
                                    for (;
                                        (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && ((k = (l = m[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] = [w, t]), m !== b)););
                                return (t -= e) === d || t % d == 0 && 0 <= t / d
                            }
                        }
                    },
                    PSEUDO: function (a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || hb.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : 1 < e.length ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? jb(function (a, c) {
                            for (var d, f = e(a, b), g = f.length; g--;) a[d = J(a, f[g])] = !(c[d] = f[g])
                        }) : function (a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: jb(function (a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u] ? jb(function (a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: jb(function (a) {
                        return function (b) {
                            return 0 < hb(a, b).length
                        }
                    }),
                    contains: jb(function (a) {
                        return a = a.replace(bb, cb),
                            function (b) {
                                return -1 < (b.textContent || e(b)).indexOf(a)
                            }
                    }),
                    lang: jb(function (a) {
                        return V.test(a || "") || hb.error("unsupported lang: " + a), a = a.replace(bb, cb).toLowerCase(),
                            function (b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function (a) {
                        return a === o
                    },
                    focus: function (a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: pb(!1),
                    disabled: pb(!0),
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function (a) {
                        return Z.test(a.nodeName)
                    },
                    input: function (a) {
                        return Y.test(a.nodeName)
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: qb(function () {
                        return [0]
                    }),
                    last: qb(function (a, b) {
                        return [b - 1]
                    }),
                    eq: qb(function (a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: qb(function (a, b) {
                        for (var c = 0; c < b; c += 2) a.push(c);
                        return a
                    }),
                    odd: qb(function (a, b) {
                        for (var c = 1; c < b; c += 2) a.push(c);
                        return a
                    }),
                    lt: qb(function (a, b, c) {
                        for (var d = c < 0 ? c + b : b < c ? b : c; 0 <= --d;) a.push(d);
                        return a
                    }),
                    gt: qb(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }).pseudos.nth = d.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = nb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ob(b);
        return sb.prototype = d.filters = d.pseudos, d.setFilters = new sb, g = hb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                for (g in c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    }), h = h.slice(c.length)), d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? hb.error(a) : z(a, i).slice(0)
        }, h = hb.compile = function (a, b) {
            var c, e, f, h, i, k, l = [],
                o = [],
                q = A[a + " "];
            if (!q) {
                for (b || (b = g(a)), c = b.length; c--;)(q = yb(b[c]))[u] ? l.push(q) : o.push(q);
                (q = A(a, (e = o, h = 0 < (f = l).length, i = 0 < e.length, k = function (a, b, c, g, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = a && [],
                        u = [],
                        v = j,
                        x = a || i && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = b === n || b || k); s !== z && null != (l = x[s]); s++) {
                        if (i && l) {
                            for (o = 0, b || l.ownerDocument === n || (m(l), c = !p); q = e[o++];)
                                if (q(l, b || n, c)) {
                                    g.push(l);
                                    break
                                } k && (w = y)
                        }
                        h && ((l = !q && l) && r--, a && t.push(l))
                    }
                    if (r += s, h && s !== r) {
                        for (o = 0; q = f[o++];) q(t, u, b, c);
                        if (a) {
                            if (0 < r)
                                for (; s--;) t[s] || u[s] || (u[s] = F.call(g));
                            u = wb(u)
                        }
                        H.apply(g, u), k && !a && 0 < u.length && 1 < r + f.length && hb.uniqueSort(g)
                    }
                    return k && (w = y, j = v), t
                }, h ? jb(k) : k))).selector = a
            }
            return q
        }, i = hb.select = function (a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (2 < (i = n[0] = n[0].slice(0)).length && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (!(b = (d.find.ID(j.matches[0].replace(bb, cb), b) || [])[0])) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                for (f = W.needsContext.test(a) ? 0 : i.length; f-- && (j = i[f], !d.relative[k = j.type]);)
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(bb, cb), ab.test(i[0].type) && rb(b.parentNode) || b))) {
                        if (i.splice(f, 1), !(a = e.length && tb(i))) return H.apply(c, e), c;
                        break
                    }
            }
            return (m || h(a, n))(e, b, !p, c, !b || ab.test(a) && rb(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(C).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = kb(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), kb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || lb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && kb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || lb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), kb(function (a) {
            return null == a.getAttribute("disabled")
        }) || lb(K, function (a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), hb
    }(a);
    v.find = y, v.expr = y.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = y.uniqueSort, v.text = y.getText, v.isXMLDoc = y.isXML, v.contains = y.contains, v.escapeSelector = y.escape;
    var z = function (a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && v(a).is(c)) break;
                    d.push(a)
                } return d
        },
        A = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        B = v.expr.match.needsContext,
        D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    v.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? v.find.matchesSelector(d, a) ? [d] : [] : v.find.matches(a, v.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, v.fn.extend({
        find: function (a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(v(a).filter(function () {
                for (b = 0; b < d; b++)
                    if (v.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) v.find(a, e[b], c);
            return 1 < d ? v.uniqueSort(c) : c
        },
        filter: function (a) {
            return this.pushStack(E(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(E(this, a || [], !0))
        },
        is: function (a) {
            return !!E(this, "string" == typeof a && B.test(a) ? v(a) : a || [], !1).length
        }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || F, "string" == typeof a) {
            if (!(e = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : G.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof v ? b[0] : b, v.merge(this, v.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), D.test(e[1]) && v.isPlainObject(b))
                    for (e in b) p(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return (f = d.getElementById(e[2])) && (this[0] = f, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : p(a) ? void 0 !== c.ready ? c.ready(a) : a(v) : v.makeArray(a, this)
    }).prototype = v.fn, F = v(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        has: function (a) {
            var b = v(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)
                    if (v.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && v(a);
            if (!B.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? -1 < g.index(c) : 1 === c.nodeType && v.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(1 < f.length ? v.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? i.call(v(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), v.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return z(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return z(a, "parentNode", c)
        },
        next: function (a) {
            return J(a, "nextSibling")
        },
        prev: function (a) {
            return J(a, "previousSibling")
        },
        nextAll: function (a) {
            return z(a, "nextSibling")
        },
        prevAll: function (a) {
            return z(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return z(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return z(a, "previousSibling", c)
        },
        siblings: function (a) {
            return A((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return A(a.firstChild)
        },
        contents: function (a) {
            return "undefined" != typeof a.contentDocument ? a.contentDocument : (C(a, "template") && (a = a.content || a), v.merge([], a.childNodes))
        }
    }, function (a, b) {
        v.fn[a] = function (c, d) {
            var e = v.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = v.filter(d, e)), 1 < this.length && (I[a] || v.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;
    v.Callbacks = function (a) {
        var b, c;
        a = "string" == typeof a ? (b = a, c = {}, v.each(b.match(K) || [], function (a, b) {
            c[b] = !0
        }), c) : v.extend({}, a);
        var d, e, f, g, h = [],
            i = [],
            j = -1,
            k = function () {
                for (g = g || a.once, f = d = !0; i.length; j = -1)
                    for (e = i.shift(); ++j < h.length;) !1 === h[j].apply(e[0], e[1]) && a.stopOnFalse && (j = h.length, e = !1);
                a.memory || (e = !1), d = !1, g && (h = e ? [] : "")
            },
            l = {
                add: function () {
                    return h && (e && !d && (j = h.length - 1, i.push(e)), function b(c) {
                        v.each(c, function (c, d) {
                            p(d) ? a.unique && l.has(d) || h.push(d) : d && d.length && "string" !== t(d) && b(d)
                        })
                    }(arguments), e && !d && k()), this
                },
                remove: function () {
                    return v.each(arguments, function (a, b) {
                        for (var c; - 1 < (c = v.inArray(b, h, c));) h.splice(c, 1), c <= j && j--
                    }), this
                },
                has: function (a) {
                    return a ? -1 < v.inArray(a, h) : 0 < h.length
                },
                empty: function () {
                    return h && (h = []), this
                },
                disable: function () {
                    return g = i = [], h = e = "", this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return g = i = [], e || d || (h = e = ""), this
                },
                locked: function () {
                    return !!g
                },
                fireWith: function (a, b) {
                    return g || (b = [a, (b = b || []).slice ? b.slice() : b], i.push(b), d || k()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!f
                }
            };
        return l
    }, v.extend({
        Deferred: function (b) {
            var c = [
                    ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
                    ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function (a) {
                        return e.then(null, a)
                    },
                    pipe: function () {
                        var a = arguments;
                        return v.Deferred(function (b) {
                            v.each(c, function (c, d) {
                                var e = p(a[d[4]]) && a[d[4]];
                                f[d[1]](function () {
                                    var a = e && e.apply(this, arguments);
                                    a && p(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function (b, d, e) {
                        function g(b, c, d, e) {
                            return function () {
                                var h = this,
                                    i = arguments,
                                    j = function () {
                                        var a, j;
                                        if (!(b < f)) {
                                            if ((a = d.apply(h, i)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, p(j) ? e ? j.call(a, g(f, c, L, e), g(f, c, M, e)) : (f++, j.call(a, g(f, c, L, e), g(f, c, M, e), g(f, c, L, c.notifyWith))) : (d !== L && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function () {
                                        try {
                                            a()
                                        } catch (a) {
                                            v.Deferred.exceptionHook && v.Deferred.exceptionHook(a, k.stackTrace), f <= b + 1 && (d !== M && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (v.Deferred.getStackHook && (k.stackTrace = v.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        var f = 0;
                        return v.Deferred(function (a) {
                            c[0][3].add(g(0, a, p(e) ? e : L, a.notifyWith)), c[1][3].add(g(0, a, p(b) ? b : L)), c[2][3].add(g(0, a, p(d) ? d : M))
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? v.extend(a, e) : e
                    }
                },
                f = {};
            return v.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h
                }, c[3 - a][2].disable, c[3 - a][3].disable, c[0][2].lock, c[0][3].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function (a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = v.Deferred(),
                h = function (a) {
                    return function (c) {
                        d[a] = this, e[a] = 1 < arguments.length ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (N(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || p(e[c] && e[c].then))) return g.then();
            for (; c--;) N(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var O = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && O.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, v.readyException = function (b) {
        a.setTimeout(function () {
            throw b
        })
    };
    var P = v.Deferred();
    v.fn.ready = function (a) {
        return P.then(a)["catch"](function (a) {
            v.readyException(a)
        }), this
    }, v.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (a) {
            (!0 === a ? --v.readyWait : v.isReady) || (v.isReady = !0) !== a && 0 < --v.readyWait || P.resolveWith(d, [v])
        }
    }), v.ready.then = P.then, "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(v.ready) : (d.addEventListener("DOMContentLoaded", Q), a.addEventListener("load", Q));
    var R = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === t(c))
                for (h in e = !0, c) R(a, b, h, c[h], !0, f, g);
            else if (void 0 !== d && (e = !0, p(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(v(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        S = /^-ms-/,
        T = /-([a-z])/g,
        W = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    X.uid = 1, X.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, W(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[V(b)] = c;
            else
                for (d in b) e[V(d)] = b[d];
            return e
        },
        get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][V(b)]
        },
        access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    c = (b = Array.isArray(b) ? b.map(V) : (b = V(b)) in d ? [b] : b.match(K) || []).length;
                    for (; c--;) delete d[b[c]]
                }(void 0 === b || v.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !v.isEmptyObject(b)
        }
    };
    var Y = new X,
        Z = new X,
        $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _ = /[A-Z]/g;
    v.extend({
        hasData: function (a) {
            return Z.hasData(a) || Y.hasData(a)
        },
        data: function (a, b, c) {
            return Z.access(a, b, c)
        },
        removeData: function (a, b) {
            Z.remove(a, b)
        },
        _data: function (a, b, c) {
            return Y.access(a, b, c)
        },
        _removeData: function (a, b) {
            Y.remove(a, b)
        }
    }), v.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Z.get(f), 1 === f.nodeType && !Y.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && 0 === (d = g[c].name).indexOf("data-") && (d = V(d.slice(5)), ab(f, d, e[d]));
                    Y.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                Z.set(this, a)
            }) : R(this, function (b) {
                var c;
                return f && void 0 === b ? void 0 !== (c = Z.get(f, a)) ? c : void 0 !== (c = ab(f, a)) ? c : void 0 : void this.each(function () {
                    Z.set(this, a, b)
                })
            }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                Z.remove(this, a)
            })
        }
    }), v.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = Y.get(a, b), c && (!d || Array.isArray(c) ? d = Y.access(a, b, v.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = v.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = v._queueHooks(a, b);
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, function () {
                v.dequeue(a, b)
            }, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return Y.get(a, c) || Y.access(a, c, {
                empty: v.Callbacks("once memory").add(function () {
                    Y.remove(a, [b + "queue", c])
                })
            })
        }
    }), v.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? v.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = v.queue(this, a, b);
                v._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && v.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                v.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = v.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = Y.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var bb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        cb = new RegExp("^(?:([+-])=|)(" + bb + ")([a-z%]*)$", "i"),
        db = ["Top", "Right", "Bottom", "Left"],
        eb = d.documentElement,
        fb = function (a) {
            return v.contains(a.ownerDocument, a)
        },
        gb = {
            composed: !0
        };
    eb.getRootNode && (fb = function (a) {
        return v.contains(a.ownerDocument, a) || a.getRootNode(gb) === a.ownerDocument
    });
    var hb = function (a, b) {
            return "none" === (a = b || a).style.display || "" === a.style.display && fb(a) && "none" === v.css(a, "display")
        },
        ib = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            for (f in e = c.apply(a, d || []), b) a.style[f] = g[f];
            return e
        },
        kb = {};
    v.fn.extend({
        show: function () {
            return lb(this, !0)
        },
        hide: function () {
            return lb(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                hb(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var mb = /^(?:checkbox|radio)$/i,
        nb = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ob = /^$|^module$|\/(?:java|ecma)script/i,
        pb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    pb.optgroup = pb.option, pb.tbody = pb.tfoot = pb.colgroup = pb.caption = pb.thead, pb.th = pb.td;
    var sb, tb, ub = /<|&#?\w+;/;
    sb = d.createDocumentFragment().appendChild(d.createElement("div")), (tb = d.createElement("input")).setAttribute("type", "radio"), tb.setAttribute("checked", "checked"), tb.setAttribute("name", "t"), sb.appendChild(tb), o.checkClone = sb.cloneNode(!0).cloneNode(!0).lastChild.checked, sb.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!sb.cloneNode(!0).lastChild.defaultValue;
    var wb = /^key/,
        xb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        yb = /^([^.]*)(?:\.(.+)|)/;
    v.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Y.get(a);
            if (q)
                for (c.handler && (c = (f = c).handler, e = f.selector), e && v.find.matchesSelector(eb, e), c.guid || (c.guid = v.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                        return "undefined" != typeof v && v.event.triggered !== b.type ? v.event.dispatch.apply(a, arguments) : void 0
                    }), j = (b = (b || "").match(K) || [""]).length; j--;) n = p = (h = yb.exec(b[j]) || [])[1], o = (h[2] || "").split(".").sort(), n && (l = v.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = v.event.special[n] || {}, k = v.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && v.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || ((m = i[n] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), v.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Y.hasData(a) && Y.get(a);
            if (q && (i = q.events)) {
                for (j = (b = (b || "").match(K) || [""]).length; j--;)
                    if (n = p = (h = yb.exec(b[j]) || [])[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = v.event.special[n] || {}, m = i[n = (d ? l.delegateType : l.bindType) || n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || v.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) v.event.remove(a, n + b[j], c, d, !0);
                v.isEmptyObject(i) && Y.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            var b, c, d, e, f, g, h = v.event.fix(a),
                i = new Array(arguments.length),
                j = (Y.get(this, "events") || {})[h.type] || [],
                k = v.event.special[h.type] || {};
            for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
            if (h.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, h)) {
                for (g = v.event.handlers.call(this, h, j), b = 0;
                    (e = g[b++]) && !h.isPropagationStopped();)
                    for (h.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) h.rnamespace && !1 !== f.namespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, h.data = f.data, void 0 !== (d = ((v.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i)) && !1 === (h.result = d) && (h.preventDefault(), h.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, h), h.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && 1 <= a.button))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                        for (f = [], g = {}, c = 0; c < i; c++) void 0 === g[e = (d = b[c]).selector + " "] && (g[e] = d.needsContext ? -1 < v(e, this).index(j) : v.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    } return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function (a, b) {
            Object.defineProperty(v.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: p(b) ? function () {
                    return this.originalEvent ? b(this.originalEvent) : void 0
                } : function () {
                    return this.originalEvent ? this.originalEvent[a] : void 0
                },
                set: function (b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function (a) {
            return a[v.expando] ? a : new v.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (a) {
                    var b = this || a;
                    return mb.test(b.type) && b.click && C(b, "input") && Db(b, "click", zb), !1
                },
                trigger: function (a) {
                    var b = this || a;
                    return mb.test(b.type) && b.click && C(b, "input") && Db(b, "click"), !0
                },
                _default: function (a) {
                    var b = a.target;
                    return mb.test(b.type) && b.click && C(b, "input") && Y.get(b, "click") || C(b, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, v.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, v.Event = function (a, b) {
        return this instanceof v.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? zb : Ab, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && v.extend(this, b), this.timeStamp = a && a.timeStamp || Date.now(), this[v.expando] = !0, void 0) : new v.Event(a, b)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: Ab,
        isPropagationStopped: Ab,
        isImmediatePropagationStopped: Ab,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = zb, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = zb, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = zb, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
            var b = a.button;
            return null == a.which && wb.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && xb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, v.event.addProp), v.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        v.event.special[a] = {
            setup: function () {
                return Db(this, a, Bb), !1
            },
            trigger: function () {
                return Db(this, a), !0
            },
            delegateType: b
        }
    }), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        v.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = a.relatedTarget,
                    e = a.handleObj;
                return d && (d === this || v.contains(this, d)) || (a.type = e.origType, c = e.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), v.fn.extend({
        on: function (a, b, c, d) {
            return Cb(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return Cb(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, v(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = Ab), this.each(function () {
                v.event.remove(this, a, c, b)
            })
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Fb = /<script|<style|<link/i,
        Gb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    v.extend({
        htmlPrefilter: function (a) {
            return a.replace(Eb, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h, i, j, k = a.cloneNode(!0),
                l = fb(a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || v.isXMLDoc(a)))
                for (g = qb(k), d = 0, e = (f = qb(a)).length; d < e; d++) h = f[d], i = g[d], "input" === (j = i.nodeName.toLowerCase()) && mb.test(h.type) ? i.checked = h.checked : "input" !== j && "textarea" !== j || (i.defaultValue = h.defaultValue);
            if (b)
                if (c)
                    for (f = f || qb(a), g = g || qb(k), d = 0, e = f.length; d < e; d++) Lb(f[d], g[d]);
                else Lb(a, k);
            return 0 < (g = qb(k, "script")).length && rb(g, !l && qb(a, "script")), k
        },
        cleanData: function (a) {
            for (var b, c, d, e = v.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (W(c)) {
                    if (b = c[Y.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? v.event.remove(c, d) : v.removeEvent(c, d, b.handle);
                        c[Y.expando] = void 0
                    }
                    c[Z.expando] && (c[Z.expando] = void 0)
                }
        }
    }), v.fn.extend({
        detach: function (a) {
            return Nb(this, a, !0)
        },
        remove: function (a) {
            return Nb(this, a)
        },
        text: function (a) {
            return R(this, function (a) {
                return void 0 === a ? v.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return Mb(this, arguments, function (a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ib(this, a).appendChild(a)
            })
        },
        prepend: function () {
            return Mb(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ib(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return Mb(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return Mb(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (v.cleanData(qb(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return v.clone(this, a, b)
            })
        },
        html: function (a) {
            return R(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Fb.test(a) && !pb[(nb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = v.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) 1 === (b = this[c] || {}).nodeType && (v.cleanData(qb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return Mb(this, arguments, function (b) {
                var c = this.parentNode;
                v.inArray(this, a) < 0 && (v.cleanData(qb(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        v.fn[a] = function (a) {
            for (var c, d = [], e = v(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), v(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ob = new RegExp("^(" + bb + ")(?!px)[a-z%]+$", "i"),
        Pb = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Qb = new RegExp(db.join("|"), "i");
    ! function () {
        function b() {
            if (k) {
                j.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", k.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", eb.appendChild(j).appendChild(k);
                var b = a.getComputedStyle(k);
                e = "1%" !== b.top, i = 12 === c(b.marginLeft), k.style.right = "60%", h = 36 === c(b.right), f = 36 === c(b.width), k.style.position = "absolute", g = 12 === c(k.offsetWidth / 3), eb.removeChild(j), k = null
            }
        }

        function c(a) {
            return Math.round(parseFloat(a))
        }
        var e, f, g, h, i, j = d.createElement("div"),
            k = d.createElement("div");
        k.style && (k.style.backgroundClip = "content-box", k.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === k.style.backgroundClip, v.extend(o, {
            boxSizingReliable: function () {
                return b(), f
            },
            pixelBoxStyles: function () {
                return b(), h
            },
            pixelPosition: function () {
                return b(), e
            },
            reliableMarginLeft: function () {
                return b(), i
            },
            scrollboxSize: function () {
                return b(), g
            }
        }))
    }();
    var Tb = ["Webkit", "Moz", "ms"],
        Ub = d.createElement("div").style,
        Vb = {},
        Xb = /^(none|table(?!-c[ea]).+)/,
        Yb = /^--/,
        Zb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $b = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    v.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Rb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = V(b),
                    i = Yb.test(b),
                    j = a.style;
                if (i || (b = Wb(h)), g = v.cssHooks[b] || v.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b];
                "string" === (f = typeof c) && (e = cb.exec(c)) && e[1] && (c = jb(a, b, e), f = "number"), null != c && c == c && ("number" !== f || i || (c += e && e[3] || (v.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c))
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = V(b);
            return Yb.test(b) || (b = Wb(h)), (g = v.cssHooks[b] || v.cssHooks[h]) && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Rb(a, b, d)), "normal" === e && b in $b && (e = $b[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e
        }
    }), v.each(["height", "width"], function (a, b) {
        v.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? !Xb.test(v.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? bc(a, b, d) : ib(a, Zb, function () {
                    return bc(a, b, d)
                }) : void 0
            },
            set: function (a, c, d) {
                var e, f = Pb(a),
                    g = !o.scrollboxSize() && "absolute" === f.position,
                    h = (g || d) && "border-box" === v.css(a, "boxSizing", !1, f),
                    i = d ? ac(a, b, d, h, f) : 0;
                return h && g && (i -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(f[b]) - ac(a, b, "border", !1, f) - .5)), i && (e = cb.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = v.css(a, b)), _b(0, c, i)
            }
        }
    }), v.cssHooks.marginLeft = Sb(o.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Rb(a, "marginLeft")) || a.getBoundingClientRect().left - ib(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        v.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + db[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, "margin" !== a && (v.cssHooks[a + b].set = _b)
    }), v.fn.extend({
        css: function (a, b) {
            return R(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = Pb(a), e = b.length; g < e; g++) f[b[g]] = v.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? v.style(a, b, c) : v.css(a, b)
            }, a, b, 1 < arguments.length)
        }
    }), ((v.Tween = cc).prototype = {
        constructor: cc,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || v.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (v.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = cc.propHooks[this.prop];
            return a && a.get ? a.get(this) : cc.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = cc.propHooks[this.prop];
            return this.pos = b = this.options.duration ? v.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cc.propHooks._default.set(this), this
        }
    }).init.prototype = cc.prototype, (cc.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = v.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0
            },
            set: function (a) {
                v.fx.step[a.prop] ? v.fx.step[a.prop](a) : 1 !== a.elem.nodeType || !v.cssHooks[a.prop] && null == a.elem.style[Wb(a.prop)] ? a.elem[a.prop] = a.now : v.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }).scrollTop = cc.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, v.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, v.fx = cc.prototype.init, v.fx.step = {};
    var dc, ec, fc, gc, hc = /^(?:toggle|show|hide)$/,
        ic = /queueHooks$/;
    v.Animation = v.extend(nc, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return jb(c.elem, a, cb.exec(b), c), c
            }]
        },
        tweener: function (a, b) {
            p(a) ? (b = a, a = ["*"]) : a = a.match(K);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], nc.tweeners[c] = nc.tweeners[c] || [], nc.tweeners[c].unshift(b)
        },
        prefilters: [function (a, b, c) {
            var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
                m = this,
                n = {},
                o = a.style,
                p = a.nodeType && hb(a),
                q = Y.get(a, "fxshow");
            for (d in c.queue || (null == (g = v._queueHooks(a, "fx")).unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
                    g.unqueued || h()
                }), g.unqueued++, m.always(function () {
                    m.always(function () {
                        g.unqueued--, v.queue(a, "fx").length || g.empty.fire()
                    })
                })), b)
                if (e = b[d], hc.test(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                        if ("show" !== e || !q || void 0 === q[d]) continue;
                        p = !0
                    }
                    n[d] = q && q[d] || v.style(a, d)
                } if ((i = !v.isEmptyObject(b)) || !v.isEmptyObject(n))
                for (d in l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], null == (j = q && q.display) && (j = Y.get(a, "display")), "none" === (k = v.css(a, "display")) && (j ? k = j : (lb([a], !0), j = a.style.display || j, k = v.css(a, "display"), lb([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === v.css(a, "float") && (i || (m.done(function () {
                        o.display = j
                    }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
                    })), i = !1, n) i || (q ? "hidden" in q && (p = q.hidden) : q = Y.access(a, "fxshow", {
                    display: j
                }), f && (q.hidden = !p), p && lb([a], !0), m.done(function () {
                    for (d in p || lb([a]), Y.remove(a, "fxshow"), n) v.style(a, d, n[d])
                })), i = mc(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }],
        prefilter: function (a, b) {
            b ? nc.prefilters.unshift(a) : nc.prefilters.push(a)
        }
    }), v.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? v.extend({}, a) : {
            complete: c || !c && b || p(a) && a,
            duration: a,
            easing: c && b || b && !p(b) && b
        };
        return v.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration = d.duration in v.fx.speeds ? v.fx.speeds[d.duration] : v.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            p(d.old) && d.old.call(this), d.queue && v.dequeue(this, d.queue)
        }, d
    }, v.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(hb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = v.isEmptyObject(a),
                f = v.speed(b, c, d),
                g = function () {
                    var b = nc(this, v.extend({}, a), f);
                    (e || Y.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = v.timers,
                    g = Y.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && ic.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || v.dequeue(this, a)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var b, c = Y.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = v.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, v.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), v.each(["toggle", "show", "hide"], function (a, b) {
        var c = v.fn[b];
        v.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(lc(b, !0), a, d, e)
        }
    }), v.each({
        slideDown: lc("show"),
        slideUp: lc("hide"),
        slideToggle: lc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        v.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), v.timers = [], v.fx.tick = function () {
        var a, b = 0,
            c = v.timers;
        for (dc = Date.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
        c.length || v.fx.stop(), dc = void 0
    }, v.fx.timer = function (a) {
        v.timers.push(a), v.fx.start()
    }, v.fx.interval = 13, v.fx.start = function () {
        ec || (ec = !0, jc())
    }, v.fx.stop = function () {
        ec = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fn.delay = function (b, c) {
        return b = v.fx && v.fx.speeds[b] || b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    }, fc = d.createElement("input"), gc = d.createElement("select").appendChild(d.createElement("option")), fc.type = "checkbox", o.checkOn = "" !== fc.value, o.optSelected = gc.selected, (fc = d.createElement("input")).value = "t", fc.type = "radio", o.radioValue = "t" === fc.value;
    var oc, pc = v.expr.attrHandle;
    v.fn.extend({
        attr: function (a, b) {
            return R(this, v.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function (a) {
            return this.each(function () {
                v.removeAttr(this, a)
            })
        }
    }), v.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? "undefined" == typeof a.getAttribute ? v.prop(a, b, c) : (1 === f && v.isXMLDoc(a) || (e = v.attrHooks[b.toLowerCase()] || (v.expr.match.bool.test(b) ? oc : void 0)), void 0 !== c ? null === c ? void v.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : null == (d = v.find.attr(a, b)) ? void 0 : d) : void 0
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!o.radioValue && "radio" === b && C(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                for (; c = e[d++];) a.removeAttribute(c)
        }
    }), oc = {
        set: function (a, b, c) {
            return !1 === b ? v.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = pc[b] || v.find.attr;
        pc[b] = function (a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = pc[g], pc[g] = e, e = null != c(a, b, d) ? g : null, pc[g] = f), e
        }
    });
    var qc = /^(?:input|select|textarea|button)$/i,
        rc = /^(?:a|area)$/i;
    v.fn.extend({
        prop: function (a, b) {
            return R(this, v.prop, a, b, 1 < arguments.length)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[v.propFix[a] || a]
            })
        }
    }), v.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? (1 === f && v.isXMLDoc(a) || (b = v.propFix[b] || b, e = v.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = v.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : qc.test(a.nodeName) || rc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (v.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        v.propFix[this.toLowerCase()] = this
    }), v.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (p(a)) return this.each(function (b) {
                v(this).addClass(a.call(this, b, tc(this)))
            });
            if ((b = uc(a)).length)
                for (; c = this[i++];)
                    if (e = tc(c), d = 1 === c.nodeType && " " + sc(e) + " ") {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        e !== (h = sc(d)) && c.setAttribute("class", h)
                    } return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (p(a)) return this.each(function (b) {
                v(this).removeClass(a.call(this, b, tc(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((b = uc(a)).length)
                for (; c = this[i++];)
                    if (e = tc(c), d = 1 === c.nodeType && " " + sc(e) + " ") {
                        for (g = 0; f = b[g++];)
                            for (; - 1 < d.indexOf(" " + f + " ");) d = d.replace(" " + f + " ", " ");
                        e !== (h = sc(d)) && c.setAttribute("class", h)
                    } return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = "string" === c || Array.isArray(a);
            return "boolean" == typeof b && d ? b ? this.addClass(a) : this.removeClass(a) : this.each(p(a) ? function (c) {
                v(this).toggleClass(a.call(this, c, tc(this), b), b)
            } : function () {
                var b, e, f, g;
                if (d)
                    for (e = 0, f = v(this), g = uc(a); b = g[e++];) f.hasClass(b) ? f.removeClass(b) : f.addClass(b);
                else void 0 !== a && "boolean" !== c || ((b = tc(this)) && Y.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && -1 < (" " + sc(tc(c)) + " ").indexOf(b)) return !0;
            return !1
        }
    });
    var vc = /\r/g;
    v.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = p(a), this.each(function (c) {
                var e;
                1 === this.nodeType && (null == (e = d ? a.call(this, c, v(this).val()) : a) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = v.map(e, function (a) {
                    return null == a ? "" : a + ""
                })), (b = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = v.valHooks[e.type] || v.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : "string" == typeof (c = e.value) ? c.replace(vc, "") : null == c ? "" : c : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = v.find.attr(a, "value");
                    return null != b ? b : sc(v.text(a))
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (((c = e[d]).selected || d === f) && !c.disabled && (!c.parentNode.disabled || !C(c.parentNode, "optgroup"))) {
                            if (b = v(c).val(), g) return b;
                            h.push(b)
                        } return h
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = v.makeArray(b), g = e.length; g--;)((d = e[g]).selected = -1 < v.inArray(v.valHooks.option.get(d), f)) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            set: function (a, b) {
                return Array.isArray(b) ? a.checked = -1 < v.inArray(v(a).val(), b) : void 0
            }
        }, o.checkOn || (v.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), o.focusin = "onfocusin" in a;
    var wc = /^(?:focusinfocus|focusoutblur)$/,
        xc = function (a) {
            a.stopPropagation()
        };
    v.extend(v.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, k, m, n, o, r = [e || d],
                s = l.call(b, "type") ? b.type : b,
                t = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = o = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !wc.test(s + v.event.triggered) && (-1 < s.indexOf(".") && (s = (t = s.split(".")).shift(), t.sort()), k = s.indexOf(":") < 0 && "on" + s, (b = b[v.expando] ? b : new v.Event(s, "object" == typeof b && b)).isTrigger = f ? 2 : 3, b.namespace = t.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : v.makeArray(c, [b]), n = v.event.special[s] || {}, f || !n.trigger || !1 !== n.trigger.apply(e, c))) {
                if (!f && !n.noBubble && !q(e)) {
                    for (j = n.delegateType || s, wc.test(j + s) || (h = h.parentNode); h; h = h.parentNode) r.push(h), i = h;
                    i === (e.ownerDocument || d) && r.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0;
                    (h = r[g++]) && !b.isPropagationStopped();) o = h, b.type = 1 < g ? j : n.bindType || s, (m = (Y.get(h, "events") || {})[b.type] && Y.get(h, "handle")) && m.apply(h, c), (m = k && h[k]) && m.apply && W(h) && (b.result = m.apply(h, c), !1 === b.result && b.preventDefault());
                return b.type = s, f || b.isDefaultPrevented() || n._default && !1 !== n._default.apply(r.pop(), c) || !W(e) || k && p(e[s]) && !q(e) && ((i = e[k]) && (e[k] = null), v.event.triggered = s, b.isPropagationStopped() && o.addEventListener(s, xc), e[s](), b.isPropagationStopped() && o.removeEventListener(s, xc), v.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function (a, b, c) {
            var d = v.extend(new v.Event, c, {
                type: a,
                isSimulated: !0
            });
            v.event.trigger(d, null, b)
        }
    }), v.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                v.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? v.event.trigger(a, b, c, !0) : void 0
        }
    }), o.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            v.event.simulate(b, a.target, v.event.fix(a))
        };
        v.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = Y.access(d, b);
                e || d.addEventListener(a, c, !0), Y.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = Y.access(d, b) - 1;
                e ? Y.access(d, b, e) : (d.removeEventListener(a, c, !0), Y.remove(d, b))
            }
        }
    });
    var yc = a.location,
        zc = Date.now(),
        Ac = /\?/;
    v.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (b) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + b), c
    };
    var Bc = /\[\]$/,
        Cc = /\r?\n/g,
        Dc = /^(?:submit|button|image|reset|file)$/i,
        Ec = /^(?:input|select|textarea|keygen)/i;
    v.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                var c = p(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (null == a) return "";
        if (Array.isArray(a) || a.jquery && !v.isPlainObject(a)) v.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Fc(c, a[c], b, e);
        return d.join("&")
    }, v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = v.prop(this, "elements");
                return a ? v.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !v(this).is(":disabled") && Ec.test(this.nodeName) && !Dc.test(a) && (this.checked || !mb.test(a))
            }).map(function (a, b) {
                var c = v(this).val();
                return null == c ? null : Array.isArray(c) ? v.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Cc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Cc, "\r\n")
                }
            }).get()
        }
    });
    var Gc = /%20/g,
        Hc = /#.*$/,
        Ic = /([?&])_=[^&]*/,
        Jc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Kc = /^(?:GET|HEAD)$/,
        Lc = /^\/\//,
        Mc = {},
        Nc = {},
        Oc = "*/".concat("*"),
        Pc = d.createElement("a");
    Pc.href = yc.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yc.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yc.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Sc(Sc(a, v.ajaxSettings), b) : Sc(v.ajaxSettings, a)
        },
        ajaxPrefilter: Qc(Mc),
        ajaxTransport: Qc(Nc),
        ajax: function (b, c) {
            function z(b, c, d, h) {
                var j, m, n, u, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = 0 < b ? 4 : 0, j = 200 <= b && b < 300 || 304 === b, d && (u = function (a, b, c) {
                    for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                        "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                    if (d)
                        for (e in h)
                            if (h[e] && h[e].test(d)) {
                                i.unshift(e);
                                break
                            } if (i[0] in c) f = i[0];
                    else {
                        for (e in c) {
                            if (!i[0] || a.converters[e + " " + i[0]]) {
                                f = e;
                                break
                            }
                            g || (g = e)
                        }
                        f = f || g
                    }
                    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
                }(o, y, d)), u = function (a, b, c, d) {
                    var e, f, g, h, i, j = {},
                        k = a.dataTypes.slice();
                    if (k[1])
                        for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                    for (f = k.shift(); f;)
                        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                            if ("*" === f) f = i;
                            else if ("*" !== i && i !== f) {
                        if (!(g = j[i + " " + f] || j["* " + f]))
                            for (e in j)
                                if ((h = e.split(" "))[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                                    break
                                } if (!0 !== g)
                            if (g && a["throws"]) b = g(b);
                            else try {
                                b = g(b)
                            } catch (a) {
                                return {
                                    state: "parsererror",
                                    error: g ? a : "No conversion from " + i + " to " + f
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: b
                    }
                }(o, u, y, j), j ? (o.ifModified && ((w = y.getResponseHeader("Last-Modified")) && (v.lastModified[f] = w), (w = y.getResponseHeader("etag")) && (v.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = u.state, m = u.data, j = !(n = u.error))) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? r.resolveWith(p, [m, x, y]) : r.rejectWith(p, [y, x, n]), y.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), s.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --v.active || v.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = v.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? v(p) : v.event,
                r = v.Deferred(),
                s = v.Callbacks("once memory"),
                t = o.statusCode || {},
                u = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (k) {
                            if (!h)
                                for (h = {}; b = Jc.exec(g);) h[b[1].toLowerCase() + " "] = (h[b[1].toLowerCase() + " "] || []).concat(b[2]);
                            b = h[a.toLowerCase() + " "]
                        }
                        return null == b ? null : b.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return k ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, u[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) t[b] = [t[b], a[b]];
                        return this
                    },
                    abort: function (a) {
                        var b = a || x;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (r.promise(y), o.url = ((b || o.url || yc.href) + "").replace(Lc, yc.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Pc.protocol + "//" + Pc.host != j.protocol + "//" + j.host
                } catch (b) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = v.param(o.data, o.traditional)), Rc(Mc, o, c, y), k) return y;
            for (m in (l = v.event && o.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Kc.test(o.type), f = o.url.replace(Hc, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Gc, "+")) : (n = o.url.slice(f.length), o.data && (o.processData || "string" == typeof o.data) && (f += (Ac.test(f) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (f = f.replace(Ic, "$1"), n = (Ac.test(f) ? "&" : "?") + "_=" + zc++ + n), o.url = f + n), o.ifModified && (v.lastModified[f] && y.setRequestHeader("If-Modified-Since", v.lastModified[f]), v.etag[f] && y.setRequestHeader("If-None-Match", v.etag[f])), (o.data && o.hasContent && !1 !== o.contentType || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Oc + "; q=0.01" : "") : o.accepts["*"]), o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (!1 === o.beforeSend.call(p, y, o) || k)) return y.abort();
            if (x = "abort", s.add(o.complete), y.done(o.success), y.fail(o.error), e = Rc(Nc, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && 0 < o.timeout && (i = a.setTimeout(function () {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(u, z)
                } catch (b) {
                    if (k) throw b;
                    z(-1, b)
                }
            } else z(-1, "No Transport");
            return y
        },
        getJSON: function (a, b, c) {
            return v.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return v.get(a, void 0, b, "script")
        }
    }), v.each(["get", "post"], function (a, b) {
        v[b] = function (a, c, d, e) {
            return p(c) && (e = e || d, d = c, c = void 0), v.ajax(v.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, v.isPlainObject(a) && a))
        }
    }), v._evalUrl = function (a, b) {
        return v.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (a) {
                v.globalEval(a, b)
            }
        })
    }, v.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (p(a) && (a = a.call(this[0])), b = v(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function (a) {
            return this.each(p(a) ? function (b) {
                v(this).wrapInner(a.call(this, b))
            } : function () {
                var b = v(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = p(a);
            return this.each(function (c) {
                v(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                v(this).replaceWith(this.childNodes)
            }), this
        }
    }), v.expr.pseudos.hidden = function (a) {
        return !v.expr.pseudos.visible(a)
    }, v.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, v.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Tc = {
            0: 200,
            1223: 204
        },
        Uc = v.ajaxSettings.xhr();
    o.cors = !!Uc && "withCredentials" in Uc, o.ajax = Uc = !!Uc, v.ajaxTransport(function (b) {
        var c, d;
        return o.cors || Uc && !b.crossDomain ? {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                for (g in b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Tc[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = h.ontimeout = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (e) {
                    if (c) throw e
                }
            },
            abort: function () {
                c && c()
            }
        } : void 0
    }), v.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return v.globalEval(a), a
            }
        }
    }), v.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), v.ajaxTransport("script", function (a) {
        var b, c;
        return a.crossDomain || a.scriptAttrs ? {
            send: function (e, f) {
                b = v("<script>").attr(a.scriptAttrs || {}).prop({
                    charset: a.scriptCharset,
                    src: a.url
                }).on("load error", c = function (a) {
                    b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                }), d.head.appendChild(b[0])
            },
            abort: function () {
                c && c()
            }
        } : void 0
    });
    var Vc, Wc = [],
        Xc = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Wc.pop() || v.expando + "_" + zc++;
            return this[a] = !0, a
        }
    }), v.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Xc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Xc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = p(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Xc, "$1" + e) : !1 !== b.jsonp && (b.url += (Ac.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || v.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? v(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Wc.push(e)), g && p(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), o.createHTMLDocument = ((Vc = d.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vc.childNodes.length), v.parseHTML = function (a, b, c) {
        return "string" != typeof a ? [] : ("boolean" == typeof b && (c = b, b = !1), b || (o.createHTMLDocument ? ((e = (b = d.implementation.createHTMLDocument("")).createElement("base")).href = d.location.href, b.head.appendChild(e)) : b = d), g = !c && [], (f = D.exec(a)) ? [b.createElement(f[1])] : (f = vb([a], b, g), g && g.length && v(g).remove(), v.merge([], f.childNodes)));
        var e, f, g
    }, v.fn.load = function (a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return -1 < h && (d = sc(a.slice(h)), a = a.slice(0, h)), p(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), 0 < g.length && v.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? v("<div>").append(v.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        v.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), v.expr.pseudos.animated = function (a) {
        return v.grep(v.timers, function (b) {
            return a === b.elem
        }).length
    }, v.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j = v.css(a, "position"),
                k = v(a),
                l = {};
            "static" === j && (a.style.position = "relative"), h = k.offset(), f = v.css(a, "top"), i = v.css(a, "left"), ("absolute" === j || "fixed" === j) && -1 < (f + i).indexOf("auto") ? (g = (d = k.position()).top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), p(b) && (b = b.call(a, c, v.extend({}, h))), null != b.top && (l.top = b.top - h.top + g), null != b.left && (l.left = b.left - h.left + e), "using" in b ? b.using.call(a, l) : k.css(l)
        }
    }, v.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                v.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0];
            return d ? d.getClientRects().length ? (b = d.getBoundingClientRect(), c = d.ownerDocument.defaultView, {
                top: b.top + c.pageYOffset,
                left: b.left + c.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var a, b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === v.css(d, "position")) b = d.getBoundingClientRect();
                else {
                    for (b = this.offset(), c = d.ownerDocument, a = d.offsetParent || c.documentElement; a && (a === c.body || a === c.documentElement) && "static" === v.css(a, "position");) a = a.parentNode;
                    a && a !== d && 1 === a.nodeType && ((e = v(a).offset()).top += v.css(a, "borderTopWidth", !0), e.left += v.css(a, "borderLeftWidth", !0))
                }
                return {
                    top: b.top - e.top - v.css(d, "marginTop", !0),
                    left: b.left - e.left - v.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === v.css(a, "position");) a = a.offsetParent;
                return a || eb
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        v.fn[a] = function (d) {
            return R(this, function (a, d, e) {
                var f;
                return q(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), v.each(["top", "left"], function (a, b) {
        v.cssHooks[b] = Sb(o.pixelPosition, function (a, c) {
            return c ? (c = Rb(a, b), Ob.test(c) ? v(a).position()[b] + "px" : c) : void 0
        })
    }), v.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        v.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            v.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (!0 === e || !0 === f ? "margin" : "border");
                return R(this, function (b, c, e) {
                    var f;
                    return q(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? v.css(b, c, h) : v.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        v.fn[b] = function (a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), v.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), v.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), v.proxy = function (a, b) {
        var c, d, e;
        return "string" == typeof b && (c = a[b], b = a, a = c), p(a) ? (d = f.call(arguments, 2), (e = function () {
            return a.apply(b || this, d.concat(f.call(arguments)))
        }).guid = a.guid = a.guid || v.guid++, e) : void 0
    }, v.holdReady = function (a) {
        a ? v.readyWait++ : v.ready(!0)
    }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = C, v.isFunction = p, v.isWindow = q, v.camelCase = V, v.type = t, v.now = Date.now, v.isNumeric = function (a) {
        var b = v.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return v
    });
    var Yc = a.jQuery,
        Zc = a.$;
    return v.noConflict = function (b) {
        return a.$ === v && (a.$ = Zc), b && a.jQuery === v && (a.jQuery = Yc), v
    }, b || (a.jQuery = a.$ = v), v
}),
function (a) {
    function b(b, g) {
        var h, i, j;
        if (0 == (h = a(b))[c]) return d;
        switch (i = h[f]()[e], g.anchor) {
            case "middle":
                j = i - (a(window).height() - h.outerHeight()) / 2;
                break;
            default:
            case e:
                j = Math.max(i, 0)
        }
        return j -= "function" == typeof g[f] ? g[f]() : g[f]
    } {
        var c = "length",
            d = null,
            e = "top",
            f = "offset",
            g = "click.scrolly";
        a(window)
    }
    a.fn.scrolly = function (f) {
        var h, i, j, k, l = a(this);
        if (0 == this[c]) return l;
        if (this[c] > 1) {
            for (h = 0; h < this[c]; h++) a(this[h]).scrolly(f);
            return l
        }
        return k = d, j = l.attr("href"), "#" != j.charAt(0) || j[c] < 2 ? l : (i = jQuery.extend({
            anchor: e,
            easing: "swing",
            offset: 0,
            parent: a("body,html"),
            pollOnce: !1,
            speed: 1e3
        }, f), i.pollOnce && (k = b(j, i)), l.off(g).on(g, function (a) {
            var c = k !== d ? k : b(j, i);
            c !== d && (a.preventDefault(), i.parent.stop().animate({
                scrollTop: c
            }, i.speed, i.easing))
        }), void 0)
    }
}(jQuery), ! function (a) {
    function b(a, b, c) {
        return "string" == typeof a && ("%" == a.slice(-1) ? a = parseInt(a.substring(0, a.length - 1)) / 100 * b : "vh" == a.slice(-2) ? a = parseInt(a.substring(0, a.length - 2)) / 100 * c : "px" == a.slice(-2) && (a = parseInt(a.substring(0, a.length - 2)))), a
    }
    var c = a(window),
        d = 1,
        e = {};
    c.on("scroll", function () {
        var b = c.scrollTop();
        a.map(e, function (a) {
            window.clearTimeout(a.timeoutId), a.timeoutId = window.setTimeout(function () {
                a.handler(b)
            }, a.options.delay)
        })
    }).on("load", function () {
        c.trigger("scroll")
    }), jQuery.fn.scrollex = function (f) {
        var g = a(this);
        if (0 == this.length) return g;
        if (this.length > 1) {
            for (var h = 0; h < this.length; h++) a(this[h]).scrollex(f);
            return g
        }
        if (g.data("_scrollexId")) return g;
        var i, j, k, l, m;
        switch (i = d++, j = jQuery.extend({
            top: 0,
            bottom: 0,
            delay: 0,
            mode: "default",
            enter: null,
            leave: null,
            initialize: null,
            terminate: null,
            scroll: null
        }, f), j.mode) {
            case "top":
                k = function (a, b, c, d, e) {
                    return a >= d && e >= a
                };
                break;
            case "bottom":
                k = function (a, b, c, d, e) {
                    return c >= d && e >= c
                };
                break;
            case "middle":
                k = function (a, b, c, d, e) {
                    return b >= d && e >= b
                };
                break;
            case "top-only":
                k = function (a, b, c, d) {
                    return d >= a && c >= d
                };
                break;
            case "bottom-only":
                k = function (a, b, c, d, e) {
                    return c >= e && e >= a
                };
                break;
            default:
            case "default":
                k = function (a, b, c, d, e) {
                    return c >= d && e >= a
                }
        }
        return l = function (a) {
            var d, e, f, g, h, i, j = this.state,
                k = !1,
                l = this.$element.offset();
            d = c.height(), e = a + d / 2, f = a + d, g = this.$element.outerHeight(), h = l.top + b(this.options.top, g, d), i = l.top + g - b(this.options.bottom, g, d), k = this.test(a, e, f, h, i), k != j && (this.state = k, k ? this.options.enter && this.options.enter.apply(this.element) : this.options.leave && this.options.leave.apply(this.element)), this.options.scroll && this.options.scroll.apply(this.element, [(e - h) / (i - h)])
        }, m = {
            id: i,
            options: j,
            test: k,
            handler: l,
            state: null,
            element: this,
            $element: g,
            timeoutId: null
        }, e[i] = m, g.data("_scrollexId", m.id), m.options.initialize && m.options.initialize.apply(this), g
    }, jQuery.fn.unscrollex = function () {
        var b = a(this);
        if (0 == this.length) return b;
        if (this.length > 1) {
            for (var c = 0; c < this.length; c++) a(this[c]).unscrollex();
            return b
        }
        var d, f;
        return (d = b.data("_scrollexId")) ? (f = e[d], window.clearTimeout(f.timeoutId), delete e[d], b.removeData("_scrollexId"), f.options.terminate && f.options.terminate.apply(this), b) : b
    }
}(jQuery);
var browser = function () {
    "use strict";
    var a = {
        name: null,
        version: null,
        os: null,
        osVersion: null,
        touch: null,
        mobile: null,
        _canUse: null,
        canUse: function (b) {
            a._canUse || (a._canUse = document.createElement("div"));
            var c = a._canUse.style,
                d = b.charAt(0).toUpperCase() + b.slice(1);
            return b in c || "Moz" + d in c || "Webkit" + d in c || "O" + d in c || "ms" + d in c
        },
        init: function () {
            var b, c, d, e, f = navigator.userAgent;
            for (b = "other", c = 0, d = [
                    ["firefox", /Firefox\/([0-9\.]+)/],
                    ["bb", /BlackBerry.+Version\/([0-9\.]+)/],
                    ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/],
                    ["opera", /OPR\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)/],
                    ["edge", /Edge\/([0-9\.]+)/],
                    ["safari", /Version\/([0-9\.]+).+Safari/],
                    ["chrome", /Chrome\/([0-9\.]+)/],
                    ["ie", /MSIE ([0-9]+)/],
                    ["ie", /Trident\/.+rv:([0-9]+)/]
                ], e = 0; e < d.length; e++)
                if (f.match(d[e][1])) {
                    b = d[e][0], c = parseFloat(RegExp.$1);
                    break
                } for (a.name = b, a.version = c, b = "other", c = 0, d = [
                    ["ios", /([0-9_]+) like Mac OS X/, function (a) {
                        return a.replace("_", ".").replace("_", "")
                    }],
                    ["ios", /CPU like Mac OS X/, function () {
                        return 0
                    }],
                    ["wp", /Windows Phone ([0-9\.]+)/, null],
                    ["android", /Android ([0-9\.]+)/, null],
                    ["mac", /Macintosh.+Mac OS X ([0-9_]+)/, function (a) {
                        return a.replace("_", ".").replace("_", "")
                    }],
                    ["windows", /Windows NT ([0-9\.]+)/, null],
                    ["bb", /BlackBerry.+Version\/([0-9\.]+)/, null],
                    ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/, null],
                    ["linux", /Linux/, null],
                    ["bsd", /BSD/, null],
                    ["unix", /X11/, null]
                ], e = 0; e < d.length; e++)
                if (f.match(d[e][1])) {
                    b = d[e][0], c = parseFloat(d[e][2] ? d[e][2](RegExp.$1) : RegExp.$1);
                    break
                } a.os = b, a.osVersion = c, a.touch = "wp" == a.os ? navigator.msMaxTouchPoints > 0 : !!("ontouchstart" in window), a.mobile = "wp" == a.os || "android" == a.os || "ios" == a.os || "bb" == a.os
        }
    };
    return a.init(), a
}();
! function (a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.browser = b()
}(this, function () {
    return browser
});
var breakpoints = function () {
    "use strict";

    function a(a) {
        b.init(a)
    }
    var b = {
        list: null,
        media: {},
        events: [],
        init: function (a) {
            b.list = a, window.addEventListener("resize", b.poll), window.addEventListener("orientationchange", b.poll), window.addEventListener("load", b.poll), window.addEventListener("fullscreenchange", b.poll)
        },
        active: function (a) {
            var c, d, e, f, g, h, i;
            if (!(a in b.media)) {
                if (">=" == a.substr(0, 2) ? (d = "gte", c = a.substr(2)) : "<=" == a.substr(0, 2) ? (d = "lte", c = a.substr(2)) : ">" == a.substr(0, 1) ? (d = "gt", c = a.substr(1)) : "<" == a.substr(0, 1) ? (d = "lt", c = a.substr(1)) : "!" == a.substr(0, 1) ? (d = "not", c = a.substr(1)) : (d = "eq", c = a), c && c in b.list)
                    if (f = b.list[c], Array.isArray(f)) {
                        if (g = parseInt(f[0]), h = parseInt(f[1]), isNaN(g)) {
                            if (isNaN(h)) return;
                            i = f[1].substr(String(h).length)
                        } else i = f[0].substr(String(g).length);
                        if (isNaN(g)) switch (d) {
                            case "gte":
                                e = "screen";
                                break;
                            case "lte":
                                e = "screen and (max-width: " + h + i + ")";
                                break;
                            case "gt":
                                e = "screen and (min-width: " + (h + 1) + i + ")";
                                break;
                            case "lt":
                                e = "screen and (max-width: -1px)";
                                break;
                            case "not":
                                e = "screen and (min-width: " + (h + 1) + i + ")";
                                break;
                            default:
                                e = "screen and (max-width: " + h + i + ")"
                        } else if (isNaN(h)) switch (d) {
                            case "gte":
                                e = "screen and (min-width: " + g + i + ")";
                                break;
                            case "lte":
                                e = "screen";
                                break;
                            case "gt":
                                e = "screen and (max-width: -1px)";
                                break;
                            case "lt":
                                e = "screen and (max-width: " + (g - 1) + i + ")";
                                break;
                            case "not":
                                e = "screen and (max-width: " + (g - 1) + i + ")";
                                break;
                            default:
                                e = "screen and (min-width: " + g + i + ")"
                        } else switch (d) {
                            case "gte":
                                e = "screen and (min-width: " + g + i + ")";
                                break;
                            case "lte":
                                e = "screen and (max-width: " + h + i + ")";
                                break;
                            case "gt":
                                e = "screen and (min-width: " + (h + 1) + i + ")";
                                break;
                            case "lt":
                                e = "screen and (max-width: " + (g - 1) + i + ")";
                                break;
                            case "not":
                                e = "screen and (max-width: " + (g - 1) + i + "), screen and (min-width: " + (h + 1) + i + ")";
                                break;
                            default:
                                e = "screen and (min-width: " + g + i + ") and (max-width: " + h + i + ")"
                        }
                    } else e = "(" == f.charAt(0) ? "screen and " + f : f;
                b.media[a] = !!e && e
            }
            return b.media[a] !== !1 && window.matchMedia(b.media[a]).matches
        },
        on: function (a, c) {
            b.events.push({
                query: a,
                handler: c,
                state: !1
            }), b.active(a) && c()
        },
        poll: function () {
            var a, c;
            for (a = 0; a < b.events.length; a++) c = b.events[a], b.active(c.query) ? c.state || (c.state = !0, c.handler()) : c.state && (c.state = !1)
        }
    };
    return a._ = b, a.on = function (a, c) {
        b.on(a, c)
    }, a.active = function (a) {
        return b.active(a)
    }, a
}();
! function (a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.breakpoints = b()
}(this, function () {
    return breakpoints
}),
function (a) {
    a.fn.navList = function () {
        var c = a(this);
        return $a = c.find("a"), b = [], $a.each(function () {
            var c = a(this),
                d = Math.max(0, c.parents("li").length - 1),
                e = c.attr("href"),
                f = c.attr("target");
            b.push('<a class="link depth-' + d + '"' + ("undefined" !== typeof f && "" != f ? ' target="' + f + '"' : "") + ("undefined" !== typeof e && "" != e ? ' href="' + e + '"' : "") + '><span class="indent-' + d + '"></span>' + c.text() + "</a>")
        }), b.join("")
    }, a.fn.panel = function (b) {
        if (0 == this.length) return d;
        if (this.length > 1) {
            for (var c = 0; c < this.length; c++) a(this[c]).panel(b);
            return d
        }
        var h, d = a(this),
            e = a("body"),
            f = a(window),
            g = d.attr("id");
        return h = a.extend({
            delay: 0,
            hideOnClick: !1,
            hideOnEscape: !1,
            hideOnSwipe: !1,
            resetScroll: !1,
            resetForms: !1,
            side: null,
            target: d,
            visibleClass: "visible"
        }, b), "jQuery" != typeof h.target && (h.target = a(h.target)), d._hide = function (a) {
            h.target.hasClass(h.visibleClass) && (a && (a.preventDefault(), a.stopPropagation()), h.target.removeClass(h.visibleClass), window.setTimeout(function () {
                h.resetScroll && d.scrollTop(0), h.resetForms && d.find("form").each(function () {
                    this.reset()
                })
            }, h.delay))
        }, d.css("-ms-overflow-style", "-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling", "touch"), h.hideOnClick && (d.find("a").css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), d.on("click", "a", function (b) {
            var c = a(this),
                e = c.attr("href"),
                f = c.attr("target");
            e && "#" != e && "" != e && e != "#" + g && (b.preventDefault(), b.stopPropagation(), d._hide(), window.setTimeout(function () {
                "_blank" == f ? window.open(e) : window.location.href = e
            }, h.delay + 10))
        })), d.on("touchstart", function (a) {
            d.touchPosX = a.originalEvent.touches[0].pageX, d.touchPosY = a.originalEvent.touches[0].pageY
        }), d.on("touchmove", function (a) {
            if (null !== d.touchPosX && null !== d.touchPosY) {
                var b = d.touchPosX - a.originalEvent.touches[0].pageX,
                    c = d.touchPosY - a.originalEvent.touches[0].pageY,
                    e = d.outerHeight(),
                    f = d.get(0).scrollHeight - d.scrollTop();
                if (h.hideOnSwipe) {
                    var g = !1,
                        i = 20,
                        j = 50;
                    switch (h.side) {
                        case "left":
                            g = c < i && c > -1 * i && b > j;
                            break;
                        case "right":
                            g = c < i && c > -1 * i && b < -1 * j;
                            break;
                        case "top":
                            g = b < i && b > -1 * i && c > j;
                            break;
                        case "bottom":
                            g = b < i && b > -1 * i && c < -1 * j
                    }
                    if (g) return d.touchPosX = null, d.touchPosY = null, d._hide(), !1
                }(d.scrollTop() < 0 && c < 0 || f > e - 2 && f < e + 2 && c > 0) && (a.preventDefault(), a.stopPropagation())
            }
        }), d.on("click touchend touchstart touchmove", function (a) {
            a.stopPropagation()
        }), d.on("click", 'a[href="#' + g + '"]', function (a) {
            a.preventDefault(), a.stopPropagation(), h.target.removeClass(h.visibleClass)
        }), e.on("click touchend", function (a) {
            d._hide(a)
        }), e.on("click", 'a[href="#' + g + '"]', function (a) {
            a.preventDefault(), a.stopPropagation(), h.target.toggleClass(h.visibleClass)
        }), h.hideOnEscape && f.on("keydown", function (a) {
            27 == a.keyCode && d._hide(a)
        }), d
    }, a.fn.placeholder = function () {
        if ("undefined" != typeof document.createElement("input").placeholder) return a(this);
        if (0 == this.length) return c;
        if (this.length > 1) {
            for (var b = 0; b < this.length; b++) a(this[b]).placeholder();
            return c
        }
        var c = a(this);
        return c.find("input[type=text],textarea").each(function () {
            var b = a(this);
            ("" == b.val() || b.val() == b.attr("placeholder")) && b.addClass("polyfill-placeholder").val(b.attr("placeholder"))
        }).on("blur", function () {
            var b = a(this);
            b.attr("name").match(/-polyfill-field$/) || "" == b.val() && b.addClass("polyfill-placeholder").val(b.attr("placeholder"))
        }).on("focus", function () {
            var b = a(this);
            b.attr("name").match(/-polyfill-field$/) || b.val() == b.attr("placeholder") && b.removeClass("polyfill-placeholder").val("")
        }), c.find("input[type=password]").each(function () {
            var b = a(this),
                c = a(a("<div>").append(b.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, "type=text"));
            "" != b.attr("id") && c.attr("id", b.attr("id") + "-polyfill-field"), "" != b.attr("name") && c.attr("name", b.attr("name") + "-polyfill-field"), c.addClass("polyfill-placeholder").val(c.attr("placeholder")).insertAfter(b), "" == b.val() ? b.hide() : c.hide(), b.on("blur", function (a) {
                a.preventDefault();
                var c = b.parent().find("input[name=" + b.attr("name") + "-polyfill-field]");
                "" == b.val() && (b.hide(), c.show())
            }), c.on("focus", function (a) {
                a.preventDefault();
                var b = c.parent().find("input[name=" + c.attr("name").replace("-polyfill-field", "") + "]");
                c.hide(), b.show().focus()
            }).on("keypress", function (a) {
                a.preventDefault(), c.val("")
            })
        }), c.on("submit", function () {
            c.find("input[type=text],input[type=password],textarea").each(function () {
                var c = a(this);
                c.attr("name").match(/-polyfill-field$/) && c.attr("name", ""), c.val() == c.attr("placeholder") && (c.removeClass("polyfill-placeholder"), c.val(""))
            })
        }).on("reset", function (b) {
            b.preventDefault(), c.find("select").val(a("option:first").val()), c.find("input,textarea").each(function () {
                var c, b = a(this);
                switch (b.removeClass("polyfill-placeholder"), this.type) {
                    case "submit":
                    case "reset":
                        break;
                    case "password":
                        b.val(b.attr("defaultValue")), c = b.parent().find("input[name=" + b.attr("name") + "-polyfill-field]"), "" == b.val() ? (b.hide(), c.show()) : (b.show(), c.hide());
                        break;
                    case "checkbox":
                    case "radio":
                        b.attr("checked", b.attr("defaultValue"));
                        break;
                    case "text":
                    case "textarea":
                        b.val(b.attr("defaultValue")), "" == b.val() && (b.addClass("polyfill-placeholder"), b.val(b.attr("placeholder")));
                        break;
                    default:
                        b.val(b.attr("defaultValue"))
                }
            })
        }), c
    }, a.prioritize = function (b, c) {
        var d = "__prioritize";
        "jQuery" != typeof b && (b = a(b)), b.each(function () {
            var e, b = a(this),
                f = b.parent();
            if (0 != f.length)
                if (b.data(d)) {
                    if (c) return;
                    e = b.data(d), b.insertAfter(e), b.removeData(d)
                } else {
                    if (!c) return;
                    if (e = b.prev(), 0 == e.length) return;
                    b.prependTo(f), b.data(d, e)
                }
        })
    }
}(jQuery),
function (a) {
    var b = a(window),
        c = a("body"),
        d = a("#nav");
    breakpoints({
        wide: ["961px", "1880px"],
        normal: ["961px", "1620px"],
        narrow: ["961px", "1320px"],
        narrower: ["737px", "960px"],
        mobile: [null, "736px"]
    }), b.on("load", function () {
        window.setTimeout(function () {
            c.removeClass("is-preload")
        }, 100)
    });
    var e = d.find("a");
    e.addClass("scrolly").on("click", function (b) {
        var c = a(this);
        "#" == c.attr("href").charAt(0) && (b.preventDefault(), e.removeClass("active"), c.addClass("active").addClass("active-locked"))
    }).each(function () {
        var b = a(this),
            c = b.attr("href"),
            d = a(c);
        d.length < 1 || d.scrollex({
            mode: "middle",
            top: "-10vh",
            bottom: "-10vh",
            initialize: function () {
                d.addClass("inactive")
            },
            enter: function () {
                d.removeClass("inactive"), 0 == e.filter(".active-locked").length ? (e.removeClass("active"), b.addClass("active")) : b.hasClass("active-locked") && b.removeClass("active-locked")
            }
        })
    }), a(".scrolly").scrolly(), a('<div id="headerToggle"><a href="#header" class="toggle"></a></div>').appendTo(c), a("#header").panel({
        delay: 500,
        hideOnClick: !0,
        hideOnSwipe: !0,
        resetScroll: !0,
        resetForms: !0,
        side: "left",
        target: c,
        visibleClass: "header-visible"
    })
}(jQuery);

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

const btns = document.querySelectorAll('.top-footer > a')
const text = document.querySelector('span.text > strong')
const words = text.innerText.split(", ")
text.innerText = ''

const more = [
    'A Programmer',
    'A Developer',
    'A Coder',
]
more.forEach(word => words.push(word))

let box_tl = gsap.timeline()
box_tl.from(btns, {
        y: '100vw',
        duration: 1,
        stagger: 0.5,
        ease: 'back'
    })
    .from('.hi', {
        duration: 1.5,
        y: '7vw',
        ease: 'power3.out',
        onComplete: () => main_tl.play()
    }, '-=0.3')
    .from('.cursor', {
        opacity: 0,
        repeat: -1,
        ease: 'power1.inOut',
        repeatDelay: 0.4
    })

let main_tl = gsap.timeline({
    repeat: -1
}).pause()
words.forEach(word => {
    let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 2
    })
    tl.to('.text strong', {
        duration: 1,
        text: word
    })
    main_tl.add(tl)
})

const defaults = {
    scrollTrigger: {
        toggleActions: 'restart none restart reset'
    },
    duration: 1,
    y: '45vh',
}

//important to do this BEFORE ScrollTriggers are created
ScrollTrigger.saveStyles('[js-anim*="img"]')
ScrollTrigger.matchMedia({

    // desktop
    "(min-width: 737px)": function () {
        let portfolios = document.querySelectorAll('[js-anim*="img"]')
        let temp = []
        //sort portfolios animation
        portfolios = Array.from(portfolios)
        temp = portfolios[1]
        portfolios[1] = portfolios[2]
        portfolios[2] = temp

        defaults.scrollTrigger.trigger = '#portfolio'
        defaults.stagger = 0.2
        gsap.from(portfolios, defaults)
    },

    // small screen
    "(max-width: 736px)": function () {
        const portfolios = document.querySelectorAll('[js-anim*="img"]')
        Array.from(portfolios).forEach(portfolio => {
            defaults.scrollTrigger.trigger = portfolio
            defaults.y = '7vh',
                gsap.from(portfolio, defaults)
        })
    }
});

defaults.y = '45vh',
    defaults.ease = 'back'
defaults.scrollTrigger.trigger = '[js-anim-form-trigger]'
defaults.scrollTrigger.toggleActions = 'restart none none reset'
gsap.from('[js-anim-form]', defaults)

particlesJS("top", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "https://res.cloudinary.com/naker-io/image/upload/v1566560053/window_04.png",
                "width": 512,
                "height": 512
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 30,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 50,
                "duration": 2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
stats.domElement.style.overflow = 'hidden';
stats.domElement.style['z-index'] = -1;
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;