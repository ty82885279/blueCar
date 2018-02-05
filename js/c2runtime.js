var cr = {};
cr.plugins_ = {}, cr.behaviors = {}, "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(t) {
        return t.__proto__
    } : function(t) {
        return t.constructor.prototype
    }),
    function() {
        function t(t, e) {
            this.x = t, this.y = e, cr.seal(this)
        }

        function e(t, e, i, s) {
            this.set(t, e, i, s), cr.seal(this)
        }

        function i() {
            this.tlx = 0, this.tly = 0, this.trx = 0, this.try_ = 0, this.brx = 0, this.bry = 0, this.blx = 0, this.bly = 0, cr.seal(this)
        }

        function s(t, e, i, s) {
            t < e ? i < s ? (m = t < i ? t : i, y = e > s ? e : s) : (m = t < s ? t : s, y = e > i ? e : i) : i < s ? (m = e < i ? e : i, y = t > s ? t : s) : (m = e < s ? e : s, y = t > i ? t : i)
        }

        function n() {
            this.s = null, this.items = null, this.item_count = 0, x && (this.s = new Set), this.values_cache = [], this.cache_valid = !0, cr.seal(this)
        }

        function r(t) {
            B[T++] = t
        }

        function o() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0, cr.seal(this)
        }

        function a(t) {
            this.pts_cache = [], this.bboxLeft = 0, this.bboxTop = 0, this.bboxRight = 0, this.bboxBottom = 0, this.convexpolys = null, this.set_pts(t), cr.seal(this)
        }

        function A(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function h(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function c(t, e, i) {
            var s;
            return A.prototype.totalCellCount++, E.length ? (s = E.pop(), s.grid = t, s.x = e, s.y = i, s) : new cr.GridCell(t, e, i)
        }

        function l(t) {
            A.prototype.totalCellCount--, t.objects.clear(), E.length < 1e3 && E.push(t)
        }

        function u(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = new cr.ObjectSet
        }

        function p(t, e, i) {
            var s;
            return h.prototype.totalCellCount++, C.length ? (s = C.pop(), s.grid = t, s.x = e, s.y = i, s) : new cr.RenderCell(t, e, i)
        }

        function d(t) {
            h.prototype.totalCellCount--, t.reset(), C.length < 1e3 && C.push(t)
        }

        function g(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = [], this.is_sorted = !0, this.pending_removal = new cr.ObjectSet, this.any_pending_removal = !1
        }

        function f(t, e) {
            return t.zindex - e.zindex
        }
        cr.logexport = function(t) {
            window.console && window.console.log && window.console.log(t)
        }, cr.logerror = function(t) {
            window.console && window.console.error && window.console.error(t)
        }, cr.seal = function(t) {
            return t
        }, cr.freeze = function(t) {
            return t
        }, cr.is_undefined = function(t) {
            return void 0 === t
        }, cr.is_number = function(t) {
            return "number" == typeof t
        }, cr.is_string = function(t) {
            return "string" == typeof t
        }, cr.isPOT = function(t) {
            return t > 0 && 0 == (t - 1 & t)
        }, cr.nextHighestPowerOfTwo = function(t) {
            --t;
            for (var e = 1; e < 32; e <<= 1) t |= t >> e;
            return t + 1
        }, cr.abs = function(t) {
            return t < 0 ? -t : t
        }, cr.max = function(t, e) {
            return t > e ? t : e
        }, cr.min = function(t, e) {
            return t < e ? t : e
        }, cr.PI = Math.PI, cr.round = function(t) {
            return t + .5 | 0
        }, cr.floor = function(t) {
            return t >= 0 ? 0 | t : (0 | t) - 1
        }, cr.ceil = function(t) {
            var e = 0 | t;
            return e === t ? e : e + 1
        }, t.prototype.offset = function(t, e) {
            return this.x += t, this.y += e, this
        }, t.prototype.mul = function(t, e) {
            return this.x *= t, this.y *= e, this
        }, cr.vector2 = t, cr.segments_intersect = function(t, e, i, s, n, r, o, a) {
            var A, h, c, l, u, p, d, g;
            if (t < i ? (h = t, A = i) : (h = i, A = t), n < o ? (p = n, u = o) : (p = o, u = n), A < p || h > u) return !1;
            if (e < s ? (l = e, c = s) : (l = s, c = e), r < a ? (g = r, d = a) : (g = a, d = r), c < g || l > d) return !1;
            var f = n - t + o - i,
                m = r - e + a - s,
                y = i - t,
                _ = s - e,
                v = o - n,
                b = a - r,
                w = cr.abs(_ * v - b * y),
                x = v * m - b * f;
            if (cr.abs(x) > w) return !1;
            var B = y * m - _ * f;
            return cr.abs(B) <= w
        }, e.prototype.set = function(t, e, i, s) {
            this.left = t, this.top = e, this.right = i, this.bottom = s
        }, e.prototype.copy = function(t) {
            this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom
        }, e.prototype.width = function() {
            return this.right - this.left
        }, e.prototype.height = function() {
            return this.bottom - this.top
        }, e.prototype.offset = function(t, e) {
            return this.left += t, this.top += e, this.right += t, this.bottom += e, this
        }, e.prototype.normalize = function() {
            var t = 0;
            this.left > this.right && (t = this.left, this.left = this.right, this.right = t), this.top > this.bottom && (t = this.top, this.top = this.bottom, this.bottom = t)
        }, e.prototype.intersects_rect = function(t) {
            return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
        }, e.prototype.intersects_rect_off = function(t, e, i) {
            return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
        }, e.prototype.contains_pt = function(t, e) {
            return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
        }, e.prototype.equals = function(t) {
            return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
        }, cr.rect = e, i.prototype.set_from_rect = function(t) {
            this.tlx = t.left, this.tly = t.top, this.trx = t.right, this.try_ = t.top, this.brx = t.right, this.bry = t.bottom, this.blx = t.left, this.bly = t.bottom
        }, i.prototype.set_from_rotated_rect = function(t, e) {
            if (0 === e) this.set_from_rect(t);
            else {
                var i = Math.sin(e),
                    s = Math.cos(e),
                    n = t.left * i,
                    r = t.top * i,
                    o = t.right * i,
                    a = t.bottom * i,
                    A = t.left * s,
                    h = t.top * s,
                    c = t.right * s,
                    l = t.bottom * s;
                this.tlx = A - r, this.tly = h + n, this.trx = c - r, this.try_ = h + o, this.brx = c - a, this.bry = l + o, this.blx = A - a, this.bly = l + n
            }
        }, i.prototype.offset = function(t, e) {
            return this.tlx += t, this.tly += e, this.trx += t, this.try_ += e, this.brx += t, this.bry += e, this.blx += t, this.bly += e, this
        };
        var m = 0,
            y = 0;
        i.prototype.bounding_box = function(t) {
            s(this.tlx, this.trx, this.brx, this.blx), t.left = m, t.right = y, s(this.tly, this.try_, this.bry, this.bly), t.top = m, t.bottom = y
        }, i.prototype.contains_pt = function(t, e) {
            var i = this.tlx,
                s = this.tly,
                n = this.trx - i,
                r = this.try_ - s,
                o = this.brx - i,
                a = this.bry - s,
                A = t - i,
                h = e - s,
                c = n * n + r * r,
                l = n * o + r * a,
                u = n * A + r * h,
                p = o * o + a * a,
                d = o * A + a * h,
                g = 1 / (c * p - l * l),
                f = (p * u - l * d) * g,
                m = (c * d - l * u) * g;
            return f >= 0 && m > 0 && f + m < 1 || (g = 1 / ((c = (n = this.blx - i) * n + (r = this.bly - s) * r) * p - (l = n * o + r * a) * l), f = (p * (u = n * A + r * h) - l * d) * g, m = (c * d - l * u) * g, f >= 0 && m > 0 && f + m < 1)
        }, i.prototype.at = function(t, e) {
            if (e) switch (t) {
                case 0:
                    return this.tlx;
                case 1:
                    return this.trx;
                case 2:
                    return this.brx;
                case 3:
                    return this.blx;
                case 4:
                default:
                    return this.tlx
            } else switch (t) {
                case 0:
                    return this.tly;
                case 1:
                    return this.try_;
                case 2:
                    return this.bry;
                case 3:
                    return this.bly;
                case 4:
                default:
                    return this.tly
            }
        }, i.prototype.midX = function() {
            return (this.tlx + this.trx + this.brx + this.blx) / 4
        }, i.prototype.midY = function() {
            return (this.tly + this.try_ + this.bry + this.bly) / 4
        }, i.prototype.intersects_segment = function(t, e, i, s) {
            if (this.contains_pt(t, e) || this.contains_pt(i, s)) return !0;
            var n, r, o, a, A;
            for (A = 0; A < 4; A++)
                if (n = this.at(A, !0), r = this.at(A, !1), o = this.at(A + 1, !0), a = this.at(A + 1, !1), cr.segments_intersect(t, e, i, s, n, r, o, a)) return !0;
            return !1
        }, i.prototype.intersects_quad = function(t) {
            var e = t.midX(),
                i = t.midY();
            if (this.contains_pt(e, i)) return !0;
            if (e = this.midX(), i = this.midY(), t.contains_pt(e, i)) return !0;
            var s, n, r, o, a, A, h, c, l, u;
            for (l = 0; l < 4; l++)
                for (u = 0; u < 4; u++)
                    if (s = this.at(l, !0), n = this.at(l, !1), r = this.at(l + 1, !0), o = this.at(l + 1, !1), a = t.at(u, !0), A = t.at(u, !1), h = t.at(u + 1, !0), c = t.at(u + 1, !1), cr.segments_intersect(s, n, r, o, a, A, h, c)) return !0;
            return !1
        }, cr.quad = i, cr.RGB = function(t, e, i) {
            return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
        }, cr.GetRValue = function(t) {
            return 255 & t
        }, cr.GetGValue = function(t) {
            return (65280 & t) >> 8
        }, cr.GetBValue = function(t) {
            return (16711680 & t) >> 16
        }, cr.shallowCopy = function(t, e, i) {
            var s;
            for (s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
            return t
        }, cr.arrayRemove = function(t, e) {
            var i, s;
            if (!((e = cr.floor(e)) < 0 || e >= t.length)) {
                for (i = e, s = t.length - 1; i < s; i++) t[i] = t[i + 1];
                cr.truncateArray(t, s)
            }
        }, cr.truncateArray = function(t, e) {
            t.length = e
        }, cr.clearArray = function(t) {
            cr.truncateArray(t, 0)
        }, cr.shallowAssignArray = function(t, e) {
            cr.clearArray(t);
            var i, s;
            for (i = 0, s = e.length; i < s; ++i) t[i] = e[i]
        }, cr.appendArray = function(t, e) {
            t.push.apply(t, e)
        }, cr.fastIndexOf = function(t, e) {
            var i, s;
            for (i = 0, s = t.length; i < s; ++i)
                if (t[i] === e) return i;
            return -1
        }, cr.arrayFindRemove = function(t, e) {
            var i = cr.fastIndexOf(t, e); - 1 !== i && cr.arrayRemove(t, i)
        }, cr.clamp = function(t, e, i) {
            return t < e ? e : t > i ? i : t
        }, cr.to_radians = function(t) {
            return t / (180 / cr.PI)
        }, cr.to_degrees = function(t) {
            return t * (180 / cr.PI)
        }, cr.clamp_angle_degrees = function(t) {
            return (t %= 360) < 0 && (t += 360), t
        }, cr.clamp_angle = function(t) {
            return (t %= 2 * cr.PI) < 0 && (t += 2 * cr.PI), t
        }, cr.to_clamped_degrees = function(t) {
            return cr.clamp_angle_degrees(cr.to_degrees(t))
        }, cr.to_clamped_radians = function(t) {
            return cr.clamp_angle(cr.to_radians(t))
        }, cr.angleTo = function(t, e, i, s) {
            var n = i - t,
                r = s - e;
            return Math.atan2(r, n)
        }, cr.angleDiff = function(t, e) {
            if (t === e) return 0;
            var i = Math.sin(t),
                s = Math.cos(t),
                n = i * Math.sin(e) + s * Math.cos(e);
            return n >= 1 ? 0 : n <= -1 ? cr.PI : Math.acos(n)
        }, cr.angleRotate = function(t, e, i) {
            var s = Math.sin(t),
                n = Math.cos(t),
                r = Math.sin(e),
                o = Math.cos(e);
            return Math.acos(s * r + n * o) > i ? n * r - s * o > 0 ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
        }, cr.angleClockwise = function(t, e) {
            var i = Math.sin(t);
            return Math.cos(t) * Math.sin(e) - i * Math.cos(e) <= 0
        }, cr.rotatePtAround = function(t, e, i, s, n, r) {
            if (0 === i) return r ? t : e;
            var o = Math.sin(i),
                a = Math.cos(i),
                A = (t -= s) * o;
            return t = t * a - (e -= n) * o, e = e * a + A, t += s, e += n, r ? t : e
        }, cr.distanceTo = function(t, e, i, s) {
            var n = i - t,
                r = s - e;
            return Math.sqrt(n * n + r * r)
        }, cr.xor = function(t, e) {
            return !t != !e
        }, cr.lerp = function(t, e, i) {
            return t + (e - t) * i
        }, cr.unlerp = function(t, e, i) {
            return t === e ? 0 : (i - t) / (e - t)
        }, cr.anglelerp = function(t, e, i) {
            var s = cr.angleDiff(t, e);
            return cr.angleClockwise(e, t) ? t + s * i : t - s * i
        }, cr.qarp = function(t, e, i, s) {
            return cr.lerp(cr.lerp(t, e, s), cr.lerp(e, i, s), s)
        }, cr.cubic = function(t, e, i, s, n) {
            return cr.lerp(cr.qarp(t, e, i, n), cr.qarp(e, i, s, n), n)
        }, cr.cosp = function(t, e, i) {
            return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
        }, cr.hasAnyOwnProperty = function(t) {
            var e;
            for (e in t)
                if (t.hasOwnProperty(e)) return !0;
            return !1
        }, cr.wipe = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && delete t[e]
        };
        var _ = +new Date;
        cr.performance_now = function() {
            if (void 0 !== window.performance) {
                var t = window.performance;
                if (void 0 !== t.now) return t.now();
                if (void 0 !== t.webkitNow) return t.webkitNow();
                if (void 0 !== t.mozNow) return t.mozNow();
                if (void 0 !== t.msNow) return t.msNow()
            }
            return Date.now() - _
        };
        var v = !1,
            b = !1,
            w = !1;
        "undefined" != typeof window && (v = !(/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && /safari/i.test(navigator.userAgent), b = /(iphone|ipod|ipad)/i.test(navigator.userAgent), w = window.c2ejecta);
        var x = !v && !w && !b && "undefined" != typeof Set && void 0 !== Set.prototype.forEach;
        n.prototype.contains = function(t) {
            return !this.isEmpty() && (x ? this.s.has(t) : this.items && this.items.hasOwnProperty(t))
        }, n.prototype.add = function(t) {
            if (x) this.s.has(t) || (this.s.add(t), this.cache_valid = !1);
            else {
                var e = t.toString(),
                    i = this.items;
                i ? i.hasOwnProperty(e) || (i[e] = t, this.item_count++, this.cache_valid = !1) : (this.items = {}, this.items[e] = t, this.item_count = 1, this.cache_valid = !1)
            }
        }, n.prototype.remove = function(t) {
            if (!this.isEmpty())
                if (x) this.s.has(t) && (this.s.delete(t), this.cache_valid = !1);
                else if (this.items) {
                var e = t.toString(),
                    i = this.items;
                i.hasOwnProperty(e) && (delete i[e], this.item_count--, this.cache_valid = !1)
            }
        }, n.prototype.clear = function() {
            this.isEmpty() || (x ? this.s.clear() : (this.items = null, this.item_count = 0), cr.clearArray(this.values_cache), this.cache_valid = !0)
        }, n.prototype.isEmpty = function() {
            return 0 === this.count()
        }, n.prototype.count = function() {
            return x ? this.s.size : this.item_count
        };
        var B = null,
            T = 0;
        n.prototype.update_cache = function() {
            if (!this.cache_valid) {
                if (x) cr.clearArray(this.values_cache), B = this.values_cache, T = 0, this.s.forEach(r), B = null, T = 0;
                else {
                    var t = this.values_cache;
                    cr.clearArray(t);
                    var e, i = 0,
                        s = this.items;
                    if (s)
                        for (e in s) s.hasOwnProperty(e) && (t[i++] = s[e])
                }
                this.cache_valid = !0
            }
        }, n.prototype.valuesRef = function() {
            return this.update_cache(), this.values_cache
        }, cr.ObjectSet = n;
        var S = new cr.ObjectSet;
        cr.removeArrayDuplicates = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; ++e) S.add(t[e]);
            cr.shallowAssignArray(t, S.valuesRef()), S.clear()
        }, cr.arrayRemoveAllFromObjectSet = function(t, e) {
            x ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
        }, cr.arrayRemoveAll_set = function(t, e) {
            var i, s, n, r;
            for (i = 0, s = 0, n = t.length; i < n; ++i) r = t[i], e.has(r) || (t[s++] = r);
            cr.truncateArray(t, s)
        }, cr.arrayRemoveAll_arr = function(t, e) {
            var i, s, n, r;
            for (i = 0, s = 0, n = t.length; i < n; ++i) r = t[i], -1 === cr.fastIndexOf(e, r) && (t[s++] = r);
            cr.truncateArray(t, s)
        }, o.prototype.add = function(t) {
            this.y = t - this.c, this.t = this.sum + this.y, this.c = this.t - this.sum - this.y, this.sum = this.t
        }, o.prototype.reset = function() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0
        }, cr.KahanAdder = o, cr.regexp_escape = function(t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, a.prototype.set_pts = function(t) {
            this.pts_array = t, this.pts_count = t.length / 2, this.pts_cache.length = t.length, this.cache_width = -1, this.cache_height = -1, this.cache_angle = 0
        }, a.prototype.is_empty = function() {
            return !this.pts_array.length
        }, a.prototype.update_bbox = function() {
            for (var t, e, i, s = this.pts_cache, n = s[0], r = n, o = s[1], a = o, A = 1, h = this.pts_count; A < h; ++A) t = s[i = 2 * A], e = s[i + 1], t < n && (n = t), t > r && (r = t), e < o && (o = e), e > a && (a = e);
            this.bboxLeft = n, this.bboxRight = r, this.bboxTop = o, this.bboxBottom = a
        }, a.prototype.set_from_rect = function(t, e, i) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var s = this.pts_cache;
            s[0] = t.left - e, s[1] = t.top - i, s[2] = t.right - e, s[3] = t.top - i, s[4] = t.right - e, s[5] = t.bottom - i, s[6] = t.left - e, s[7] = t.bottom - i, this.cache_width = t.right - t.left, this.cache_height = t.bottom - t.top, this.update_bbox()
        }, a.prototype.set_from_quad = function(t, e, i, s, n) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var r = this.pts_cache;
            r[0] = t.tlx - e, r[1] = t.tly - i, r[2] = t.trx - e, r[3] = t.try_ - i, r[4] = t.brx - e, r[5] = t.bry - i, r[6] = t.blx - e, r[7] = t.bly - i, this.cache_width = s, this.cache_height = n, this.update_bbox()
        }, a.prototype.set_from_poly = function(t) {
            this.pts_count = t.pts_count, cr.shallowAssignArray(this.pts_cache, t.pts_cache), this.bboxLeft = t.bboxLeft, this.bboxTop, t.bboxTop, this.bboxRight = t.bboxRight, this.bboxBottom = t.bboxBottom
        }, a.prototype.cache_poly = function(t, e, i) {
            if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
                this.cache_width = t, this.cache_height = e, this.cache_angle = i;
                var s, n, r, o, a, A, h = 0,
                    c = 1,
                    l = this.pts_array,
                    u = this.pts_cache;
                for (0 !== i && (h = Math.sin(i), c = Math.cos(i)), s = 0, o = this.pts_count; s < o; s++) r = (n = 2 * s) + 1, a = l[n] * t, A = l[r] * e, u[n] = a * c - A * h, u[r] = A * c + a * h;
                this.update_bbox()
            }
        }, a.prototype.contains_pt = function(t, e) {
            var i = this.pts_cache;
            if (t === i[0] && e === i[1]) return !0;
            var s, n, r, o, a, A, h, c = this.pts_count,
                l = this.bboxLeft - 110,
                u = this.bboxTop - 101,
                p = this.bboxRight + 131,
                d = this.bboxBottom + 120,
                g = 0,
                f = 0;
            for (s = 0; s < c; s++) r = (s + 1) % c * 2, o = i[n = 2 * s], a = i[n + 1], A = i[r], h = i[r + 1], cr.segments_intersect(l, u, t, e, o, a, A, h) && g++, cr.segments_intersect(p, d, t, e, o, a, A, h) && f++;
            return g % 2 == 1 || f % 2 == 1
        }, a.prototype.intersects_poly = function(t, e, i) {
            var s = t.pts_cache,
                n = this.pts_cache;
            if (this.contains_pt(s[0] + e, s[1] + i)) return !0;
            if (t.contains_pt(n[0] - e, n[1] - i)) return !0;
            var r, o, a, A, h, c, l, u, p, d, g, f, m, y, _, v;
            for (r = 0, A = this.pts_count; r < A; r++)
                for (a = (r + 1) % A * 2, p = n[o = 2 * r], d = n[o + 1], g = n[a], f = n[a + 1], h = 0, u = t.pts_count; h < u; h++)
                    if (c = 2 * h, l = (h + 1) % u * 2, m = s[c] + e, y = s[c + 1] + i, _ = s[l] + e, v = s[l + 1] + i, cr.segments_intersect(p, d, g, f, m, y, _, v)) return !0;
            return !1
        }, a.prototype.intersects_segment = function(t, e, i, s, n, r) {
            var o = this.pts_cache;
            if (this.contains_pt(i - t, s - e)) return !0;
            var a, A, h, c, l, u, p, d;
            for (a = 0, A = this.pts_count; a < A; a++)
                if (h = 2 * a, c = (a + 1) % A * 2, l = o[h] + t, u = o[h + 1] + e, p = o[c] + t, d = o[c + 1] + e, cr.segments_intersect(i, s, n, r, l, u, p, d)) return !0;
            return !1
        }, a.prototype.mirror = function(t) {
            var e, i, s;
            for (e = 0, i = this.pts_count; e < i; ++e) s = 2 * e, this.pts_cache[s] = 2 * t - this.pts_cache[s]
        }, a.prototype.flip = function(t) {
            var e, i, s;
            for (e = 0, i = this.pts_count; e < i; ++e) s = 2 * e + 1, this.pts_cache[s] = 2 * t - this.pts_cache[s]
        }, a.prototype.diag = function() {
            var t, e, i, s, n;
            for (t = 0, e = this.pts_count; t < e; ++t) s = (i = 2 * t) + 1, n = this.pts_cache[i], this.pts_cache[i] = this.pts_cache[s], this.pts_cache[s] = n
        }, cr.CollisionPoly = a, A.prototype.totalCellCount = 0, A.prototype.getCell = function(t, e, i) {
            var s, n = this.cells[t];
            return n ? (s = n[e]) || (i ? (s = c(this, t, e), this.cells[t][e] = s, s) : null) : i ? (s = c(this, t, e), this.cells[t] = {}, this.cells[t][e] = s, s) : null
        }, A.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, A.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, A.prototype.update = function(t, e, i) {
            var s, n, r, o, a;
            if (e)
                for (s = e.left, n = e.right; s <= n; ++s)
                    for (r = e.top, o = e.bottom; r <= o; ++r) i && i.contains_pt(s, r) || (a = this.getCell(s, r, !1)) && (a.remove(t), a.isEmpty() && (l(a), this.cells[s][r] = null));
            if (i)
                for (s = i.left, n = i.right; s <= n; ++s)
                    for (r = i.top, o = i.bottom; r <= o; ++r) e && e.contains_pt(s, r) || this.getCell(s, r, !0).insert(t)
        }, A.prototype.queryRange = function(t, e) {
            var i, s, n, r, o, a;
            for (i = this.XToCell(t.left), n = this.YToCell(t.top), s = this.XToCell(t.right), o = this.YToCell(t.bottom); i <= s; ++i)
                for (r = n; r <= o; ++r)(a = this.getCell(i, r, !1)) && a.dump(e)
        }, cr.SparseGrid = A, h.prototype.totalCellCount = 0, h.prototype.getCell = function(t, e, i) {
            var s, n = this.cells[t];
            return n ? (s = n[e]) || (i ? (s = p(this, t, e), this.cells[t][e] = s, s) : null) : i ? (s = p(this, t, e), this.cells[t] = {}, this.cells[t][e] = s, s) : null
        }, h.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, h.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, h.prototype.update = function(t, e, i) {
            var s, n, r, o, a;
            if (e)
                for (s = e.left, n = e.right; s <= n; ++s)
                    for (r = e.top, o = e.bottom; r <= o; ++r) i && i.contains_pt(s, r) || (a = this.getCell(s, r, !1)) && (a.remove(t), a.isEmpty() && (d(a), this.cells[s][r] = null));
            if (i)
                for (s = i.left, n = i.right; s <= n; ++s)
                    for (r = i.top, o = i.bottom; r <= o; ++r) e && e.contains_pt(s, r) || this.getCell(s, r, !0).insert(t)
        }, h.prototype.queryRange = function(t, e, i, s, n) {
            var r, o, a, A, h, c;
            for (r = this.XToCell(t), a = this.YToCell(e), o = this.XToCell(i), h = this.YToCell(s); r <= o; ++r)
                for (A = a; A <= h; ++A)(c = this.getCell(r, A, !1)) && c.dump(n)
        }, h.prototype.markRangeChanged = function(t) {
            var e, i, s, n, r, o;
            for (e = t.left, s = t.top, i = t.right, r = t.bottom; e <= i; ++e)
                for (n = s; n <= r; ++n)(o = this.getCell(e, n, !1)) && (o.is_sorted = !1)
        }, cr.RenderGrid = h;
        var E = [];
        u.prototype.isEmpty = function() {
            return this.objects.isEmpty()
        }, u.prototype.insert = function(t) {
            this.objects.add(t)
        }, u.prototype.remove = function(t) {
            this.objects.remove(t)
        }, u.prototype.dump = function(t) {
            cr.appendArray(t, this.objects.valuesRef())
        }, cr.GridCell = u;
        var C = [];
        g.prototype.isEmpty = function() {
            return !this.objects.length || !(this.objects.length > this.pending_removal.count()) && (this.flush_pending(), !0)
        }, g.prototype.insert = function(t) {
            if (this.pending_removal.contains(t)) return this.pending_removal.remove(t), void(this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
            this.objects.length ? (this.objects[this.objects.length - 1].get_zindex() > t.get_zindex() && (this.is_sorted = !1), this.objects.push(t)) : (this.objects.push(t), this.is_sorted = !0)
        }, g.prototype.remove = function(t) {
            this.pending_removal.add(t), this.any_pending_removal = !0, this.pending_removal.count() >= 30 && this.flush_pending()
        }, g.prototype.flush_pending = function() {
            this.any_pending_removal && (this.pending_removal.count() !== this.objects.length ? (cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal), this.pending_removal.clear(), this.any_pending_removal = !1) : this.reset())
        }, g.prototype.ensure_sorted = function() {
            this.is_sorted || (this.objects.sort(f), this.is_sorted = !0)
        }, g.prototype.reset = function() {
            cr.clearArray(this.objects), this.is_sorted = !0, this.pending_removal.clear(), this.any_pending_removal = !1
        }, g.prototype.dump = function(t) {
            this.flush_pending(), this.ensure_sorted(), this.objects.length && t.push(this.objects)
        }, cr.RenderCell = g;
        var O = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
        cr.effectToCompositeOp = function(t) {
            return t <= 0 || t >= 11 ? "source-over" : O[t - 1]
        }, cr.setGLBlend = function(t, e, i) {
            if (i) switch (t.srcBlend = i.ONE, t.destBlend = i.ONE_MINUS_SRC_ALPHA, e) {
                case 1:
                    t.srcBlend = i.ONE, t.destBlend = i.ONE;
                    break;
                case 2:
                    break;
                case 3:
                    t.srcBlend = i.ONE, t.destBlend = i.ZERO;
                    break;
                case 4:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ONE;
                    break;
                case 5:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 6:
                    t.srcBlend = i.ZERO, t.destBlend = i.SRC_ALPHA;
                    break;
                case 7:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 8:
                    t.srcBlend = i.ZERO, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 9:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 10:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.SRC_ALPHA
            }
        }, cr.round6dp = function(t) {
            return Math.round(1e6 * t) / 1e6
        }, cr.equals_nocase = function(t, e) {
            return "string" == typeof t && "string" == typeof e && (t.length === e.length && (t === e || t.toLowerCase() === e.toLowerCase()))
        }, cr.isCanvasInputEvent = function(t) {
            var e = t.target;
            return !e || (e === document || e === window || (!(!document || !document.body || e !== document.body) || !!cr.equals_nocase(e.tagName, "canvas")))
        }
    }();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array,
    glMatrixArrayType = MatrixArray,
    vec3 = {},
    mat3 = {},
    mat4 = {},
    quat4 = {};
vec3.create = function(t) {
        var e = new MatrixArray(3);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2]), e
    }, vec3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, vec3.add = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] + e[0], i[1] = t[1] + e[1], i[2] = t[2] + e[2], i) : (t[0] += e[0], t[1] += e[1], t[2] += e[2], t)
    }, vec3.subtract = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2], i) : (t[0] -= e[0], t[1] -= e[1], t[2] -= e[2], t)
    }, vec3.negate = function(t, e) {
        return e || (e = t), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }, vec3.scale = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e, i) : (t[0] *= e, t[1] *= e, t[2] *= e, t)
    }, vec3.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = Math.sqrt(i * i + s * s + n * n);
        return r ? 1 === r ? (e[0] = i, e[1] = s, e[2] = n, e) : (r = 1 / r, e[0] = i * r, e[1] = s * r, e[2] = n * r, e) : (e[0] = 0, e[1] = 0, e[2] = 0, e)
    }, vec3.cross = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            t = t[2],
            r = e[0],
            o = e[1],
            e = e[2];
        return i[0] = n * e - t * o, i[1] = t * r - s * e, i[2] = s * o - n * r, i
    }, vec3.length = function(t) {
        var e = t[0],
            i = t[1],
            t = t[2];
        return Math.sqrt(e * e + i * i + t * t)
    }, vec3.dot = function(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }, vec3.direction = function(t, e, i) {
        i || (i = t);
        var s = t[0] - e[0],
            n = t[1] - e[1],
            t = t[2] - e[2];
        return (e = Math.sqrt(s * s + n * n + t * t)) ? (e = 1 / e, i[0] = s * e, i[1] = n * e, i[2] = t * e, i) : (i[0] = 0, i[1] = 0, i[2] = 0, i)
    }, vec3.lerp = function(t, e, i, s) {
        return s || (s = t), s[0] = t[0] + i * (e[0] - t[0]), s[1] = t[1] + i * (e[1] - t[1]), s[2] = t[2] + i * (e[2] - t[2]), s
    }, vec3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + "]"
    }, mat3.create = function(t) {
        var e = new MatrixArray(9);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8]), e
    }, mat3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, mat3.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, mat3.transpose = function(t, e) {
        if (!e || t === e) {
            var i = t[1],
                s = t[2],
                n = t[5];
            return t[1] = t[3], t[2] = t[6], t[3] = i, t[5] = t[7], t[6] = s, t[7] = n, t
        }
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], e
    }, mat3.toMat4 = function(t, e) {
        return e || (e = mat4.create()), e[15] = 1, e[14] = 0, e[13] = 0, e[12] = 0, e[11] = 0, e[10] = t[8], e[9] = t[7], e[8] = t[6], e[7] = 0, e[6] = t[5], e[5] = t[4], e[4] = t[3], e[3] = 0, e[2] = t[2], e[1] = t[1], e[0] = t[0], e
    }, mat3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + "]"
    }, mat4.create = function(t) {
        var e = new MatrixArray(16);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e
    }, mat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, mat4.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, mat4.transpose = function(t, e) {
        if (!e || t === e) {
            var i = t[1],
                s = t[2],
                n = t[3],
                r = t[6],
                o = t[7],
                a = t[11];
            return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = s, t[9] = r, t[11] = t[14], t[12] = n, t[13] = o, t[14] = a, t
        }
        return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e
    }, mat4.determinant = function(t) {
        var e = t[0],
            i = t[1],
            s = t[2],
            n = t[3],
            r = t[4],
            o = t[5],
            a = t[6],
            A = t[7],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11],
            p = t[12],
            d = t[13],
            g = t[14];
        return p * c * a * n - h * d * a * n - p * o * l * n + r * d * l * n + h * o * g * n - r * c * g * n - p * c * s * A + h * d * s * A + p * i * l * A - e * d * l * A - h * i * g * A + e * c * g * A + p * o * s * u - r * d * s * u - p * i * a * u + e * d * a * u + r * i * g * u - e * o * g * u - h * o * s * (t = t[15]) + r * c * s * t + h * i * a * t - e * c * a * t - r * i * l * t + e * o * l * t
    }, mat4.inverse = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            o = t[4],
            a = t[5],
            A = t[6],
            h = t[7],
            c = t[8],
            l = t[9],
            u = t[10],
            p = t[11],
            d = t[12],
            g = t[13],
            f = t[14],
            m = t[15],
            y = i * a - s * o,
            _ = i * A - n * o,
            v = i * h - r * o,
            b = s * A - n * a,
            w = s * h - r * a,
            x = n * h - r * A,
            B = c * g - l * d,
            T = c * f - u * d,
            S = c * m - p * d,
            E = l * f - u * g,
            C = l * m - p * g,
            O = u * m - p * f,
            I = 1 / (y * O - _ * C + v * E + b * S - w * T + x * B);
        return e[0] = (a * O - A * C + h * E) * I, e[1] = (-s * O + n * C - r * E) * I, e[2] = (g * x - f * w + m * b) * I, e[3] = (-l * x + u * w - p * b) * I, e[4] = (-o * O + A * S - h * T) * I, e[5] = (i * O - n * S + r * T) * I, e[6] = (-d * x + f * v - m * _) * I, e[7] = (c * x - u * v + p * _) * I, e[8] = (o * C - a * S + h * B) * I, e[9] = (-i * C + s * S - r * B) * I, e[10] = (d * w - g * v + m * y) * I, e[11] = (-c * w + l * v - p * y) * I, e[12] = (-o * E + a * T - A * B) * I, e[13] = (i * E - s * T + n * B) * I, e[14] = (-d * b + g * _ - f * y) * I, e[15] = (c * b - l * _ + u * y) * I, e
    }, mat4.toRotationMat = function(t, e) {
        return e || (e = mat4.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, mat4.toMat3 = function(t, e) {
        return e || (e = mat3.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
    }, mat4.toInverseMat3 = function(t, e) {
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[4],
            o = t[5],
            a = t[6],
            A = t[8],
            h = t[9],
            c = t[10],
            l = c * o - a * h,
            u = -c * r + a * A,
            p = h * r - o * A,
            d = i * l + s * u + n * p;
        return d ? (d = 1 / d, e || (e = mat3.create()), e[0] = l * d, e[1] = (-c * s + n * h) * d, e[2] = (a * s - n * o) * d, e[3] = u * d, e[4] = (c * i - n * A) * d, e[5] = (-a * i + n * r) * d, e[6] = p * d, e[7] = (-h * i + s * A) * d, e[8] = (o * i - s * r) * d, e) : null
    }, mat4.multiply = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            r = t[2],
            o = t[3],
            a = t[4],
            A = t[5],
            h = t[6],
            c = t[7],
            l = t[8],
            u = t[9],
            p = t[10],
            d = t[11],
            g = t[12],
            f = t[13],
            m = t[14],
            t = t[15],
            y = e[0],
            _ = e[1],
            v = e[2],
            b = e[3],
            w = e[4],
            x = e[5],
            B = e[6],
            T = e[7],
            S = e[8],
            E = e[9],
            C = e[10],
            O = e[11],
            I = e[12],
            P = e[13],
            k = e[14],
            e = e[15];
        return i[0] = y * s + _ * a + v * l + b * g, i[1] = y * n + _ * A + v * u + b * f, i[2] = y * r + _ * h + v * p + b * m, i[3] = y * o + _ * c + v * d + b * t, i[4] = w * s + x * a + B * l + T * g, i[5] = w * n + x * A + B * u + T * f, i[6] = w * r + x * h + B * p + T * m, i[7] = w * o + x * c + B * d + T * t, i[8] = S * s + E * a + C * l + O * g, i[9] = S * n + E * A + C * u + O * f, i[10] = S * r + E * h + C * p + O * m, i[11] = S * o + E * c + C * d + O * t, i[12] = I * s + P * a + k * l + e * g, i[13] = I * n + P * A + k * u + e * f, i[14] = I * r + P * h + k * p + e * m, i[15] = I * o + P * c + k * d + e * t, i
    }, mat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1],
            e = e[2];
        return i[0] = t[0] * s + t[4] * n + t[8] * e + t[12], i[1] = t[1] * s + t[5] * n + t[9] * e + t[13], i[2] = t[2] * s + t[6] * n + t[10] * e + t[14], i
    }, mat4.multiplyVec4 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1],
            r = e[2],
            e = e[3];
        return i[0] = t[0] * s + t[4] * n + t[8] * r + t[12] * e, i[1] = t[1] * s + t[5] * n + t[9] * r + t[13] * e, i[2] = t[2] * s + t[6] * n + t[10] * r + t[14] * e, i[3] = t[3] * s + t[7] * n + t[11] * r + t[15] * e, i
    }, mat4.translate = function(t, e, i) {
        var s, n, r, o, a, A, h, c, l, u, p, d, g = e[0],
            f = e[1],
            e = e[2];
        return i && t !== i ? (s = t[0], n = t[1], r = t[2], o = t[3], a = t[4], A = t[5], h = t[6], c = t[7], l = t[8], u = t[9], p = t[10], d = t[11], i[0] = s, i[1] = n, i[2] = r, i[3] = o, i[4] = a, i[5] = A, i[6] = h, i[7] = c, i[8] = l, i[9] = u, i[10] = p, i[11] = d, i[12] = s * g + a * f + l * e + t[12], i[13] = n * g + A * f + u * e + t[13], i[14] = r * g + h * f + p * e + t[14], i[15] = o * g + c * f + d * e + t[15], i) : (t[12] = t[0] * g + t[4] * f + t[8] * e + t[12], t[13] = t[1] * g + t[5] * f + t[9] * e + t[13], t[14] = t[2] * g + t[6] * f + t[10] * e + t[14], t[15] = t[3] * g + t[7] * f + t[11] * e + t[15], t)
    }, mat4.scale = function(t, e, i) {
        var s = e[0],
            n = e[1],
            e = e[2];
        return i && t !== i ? (i[0] = t[0] * s, i[1] = t[1] * s, i[2] = t[2] * s, i[3] = t[3] * s, i[4] = t[4] * n, i[5] = t[5] * n, i[6] = t[6] * n, i[7] = t[7] * n, i[8] = t[8] * e, i[9] = t[9] * e, i[10] = t[10] * e, i[11] = t[11] * e, i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15], i) : (t[0] *= s, t[1] *= s, t[2] *= s, t[3] *= s, t[4] *= n, t[5] *= n, t[6] *= n, t[7] *= n, t[8] *= e, t[9] *= e, t[10] *= e, t[11] *= e, t)
    }, mat4.rotate = function(t, e, i, s) {
        var n, r, o, a, A, h, c, l, u, p, d, g, f, m, y, _, v, b, w, x, B = i[0],
            T = i[1],
            i = i[2],
            S = Math.sqrt(B * B + T * T + i * i);
        return S ? (1 !== S && (S = 1 / S, B *= S, T *= S, i *= S), n = Math.sin(e), r = Math.cos(e), o = 1 - r, e = t[0], S = t[1], a = t[2], A = t[3], h = t[4], c = t[5], l = t[6], u = t[7], p = t[8], d = t[9], g = t[10], f = t[11], m = B * B * o + r, y = T * B * o + i * n, _ = i * B * o - T * n, v = B * T * o - i * n, b = T * T * o + r, w = i * T * o + B * n, x = B * i * o + T * n, B = T * i * o - B * n, T = i * i * o + r, s ? t !== s && (s[12] = t[12], s[13] = t[13], s[14] = t[14], s[15] = t[15]) : s = t, s[0] = e * m + h * y + p * _, s[1] = S * m + c * y + d * _, s[2] = a * m + l * y + g * _, s[3] = A * m + u * y + f * _, s[4] = e * v + h * b + p * w, s[5] = S * v + c * b + d * w, s[6] = a * v + l * b + g * w, s[7] = A * v + u * b + f * w, s[8] = e * x + h * B + p * T, s[9] = S * x + c * B + d * T, s[10] = a * x + l * B + g * T, s[11] = A * x + u * B + f * T, s) : null
    }, mat4.rotateX = function(t, e, i) {
        var s = Math.sin(e),
            e = Math.cos(e),
            n = t[4],
            r = t[5],
            o = t[6],
            a = t[7],
            A = t[8],
            h = t[9],
            c = t[10],
            l = t[11];
        return i ? t !== i && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[4] = n * e + A * s, i[5] = r * e + h * s, i[6] = o * e + c * s, i[7] = a * e + l * s, i[8] = n * -s + A * e, i[9] = r * -s + h * e, i[10] = o * -s + c * e, i[11] = a * -s + l * e, i
    }, mat4.rotateY = function(t, e, i) {
        var s = Math.sin(e),
            e = Math.cos(e),
            n = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            A = t[8],
            h = t[9],
            c = t[10],
            l = t[11];
        return i ? t !== i && (i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = n * e + A * -s, i[1] = r * e + h * -s, i[2] = o * e + c * -s, i[3] = a * e + l * -s, i[8] = n * s + A * e, i[9] = r * s + h * e, i[10] = o * s + c * e, i[11] = a * s + l * e, i
    }, mat4.rotateZ = function(t, e, i) {
        var s = Math.sin(e),
            e = Math.cos(e),
            n = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            A = t[4],
            h = t[5],
            c = t[6],
            l = t[7];
        return i ? t !== i && (i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = n * e + A * s, i[1] = r * e + h * s, i[2] = o * e + c * s, i[3] = a * e + l * s, i[4] = n * -s + A * e, i[5] = r * -s + h * e, i[6] = o * -s + c * e, i[7] = a * -s + l * e, i
    }, mat4.frustum = function(t, e, i, s, n, r, o) {
        o || (o = mat4.create());
        var a = e - t,
            A = s - i,
            h = r - n;
        return o[0] = 2 * n / a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * n / A, o[6] = 0, o[7] = 0, o[8] = (e + t) / a, o[9] = (s + i) / A, o[10] = -(r + n) / h, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = -r * n * 2 / h, o[15] = 0, o
    }, mat4.perspective = function(t, e, i, s, n) {
        return t = i * Math.tan(t * Math.PI / 360), e *= t, mat4.frustum(-e, e, -t, t, i, s, n)
    }, mat4.ortho = function(t, e, i, s, n, r, o) {
        o || (o = mat4.create());
        var a = e - t,
            A = s - i,
            h = r - n;
        return o[0] = 2 / a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 / A, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = -2 / h, o[11] = 0, o[12] = -(t + e) / a, o[13] = -(s + i) / A, o[14] = -(r + n) / h, o[15] = 1, o
    }, mat4.lookAt = function(t, e, i, s) {
        s || (s = mat4.create());
        var n, r, o, a, A, h, c, l, u = t[0],
            p = t[1],
            t = t[2];
        return r = i[0], o = i[1], n = i[2], i = e[1], h = e[2], u === e[0] && p === i && t === h ? mat4.identity(s) : (i = u - e[0], h = p - e[1], c = t - e[2], l = 1 / Math.sqrt(i * i + h * h + c * c), i *= l, h *= l, c *= l, e = o * c - n * h, n = n * i - r * c, r = r * h - o * i, (l = Math.sqrt(e * e + n * n + r * r)) ? (l = 1 / l, e *= l, n *= l, r *= l) : r = n = e = 0, o = h * r - c * n, a = c * e - i * r, A = i * n - h * e, (l = Math.sqrt(o * o + a * a + A * A)) ? (l = 1 / l, o *= l, a *= l, A *= l) : A = a = o = 0, s[0] = e, s[1] = o, s[2] = i, s[3] = 0, s[4] = n, s[5] = a, s[6] = h, s[7] = 0, s[8] = r, s[9] = A, s[10] = c, s[11] = 0, s[12] = -(e * u + n * p + r * t), s[13] = -(o * u + a * p + A * t), s[14] = -(i * u + h * p + c * t), s[15] = 1, s)
    }, mat4.fromRotationTranslation = function(t, e, i) {
        i || (i = mat4.create());
        var s = t[0],
            n = t[1],
            r = t[2],
            o = t[3],
            a = s + s,
            A = n + n,
            h = r + r,
            t = s * a,
            c = s * A;
        s *= h;
        var l = n * A;
        return n *= h, r *= h, a *= o, A *= o, o *= h, i[0] = 1 - (l + r), i[1] = c + o, i[2] = s - A, i[3] = 0, i[4] = c - o, i[5] = 1 - (t + r), i[6] = n + a, i[7] = 0, i[8] = s + A, i[9] = n - a, i[10] = 1 - (t + l), i[11] = 0, i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i
    }, mat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + "]"
    }, quat4.create = function(t) {
        var e = new MatrixArray(4);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3]), e
    }, quat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, quat4.calculateW = function(t, e) {
        var i = t[0],
            s = t[1],
            n = t[2];
        return e && t !== e ? (e[0] = i, e[1] = s, e[2] = n, e[3] = -Math.sqrt(Math.abs(1 - i * i - s * s - n * n)), e) : (t[3] = -Math.sqrt(Math.abs(1 - i * i - s * s - n * n)), t)
    }, quat4.inverse = function(t, e) {
        return e && t !== e ? (e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e) : (t[0] *= -1, t[1] *= -1, t[2] *= -1, t)
    }, quat4.length = function(t) {
        var e = t[0],
            i = t[1],
            s = t[2],
            t = t[3];
        return Math.sqrt(e * e + i * i + s * s + t * t)
    }, quat4.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            o = Math.sqrt(i * i + s * s + n * n + r * r);
        return 0 === o ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e) : (o = 1 / o, e[0] = i * o, e[1] = s * o, e[2] = n * o, e[3] = r * o, e)
    }, quat4.multiply = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            r = t[2],
            t = t[3],
            o = e[0],
            a = e[1],
            A = e[2],
            e = e[3];
        return i[0] = s * e + t * o + n * A - r * a, i[1] = n * e + t * a + r * o - s * A, i[2] = r * e + t * A + s * a - n * o, i[3] = t * e - s * o - n * a - r * A, i
    }, quat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1],
            r = e[2],
            e = t[0],
            o = t[1],
            a = t[2],
            A = (t = t[3]) * s + o * r - a * n,
            h = t * n + a * s - e * r,
            c = t * r + e * n - o * s,
            s = -e * s - o * n - a * r;
        return i[0] = A * t + s * -e + h * -a - c * -o, i[1] = h * t + s * -o + c * -e - A * -a, i[2] = c * t + s * -a + A * -o - h * -e, i
    }, quat4.toMat3 = function(t, e) {
        e || (e = mat3.create());
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            o = i + i,
            a = s + s,
            A = n + n,
            h = i * o,
            c = i * a;
        i *= A;
        var l = s * a;
        return s *= A, n *= A, o *= r, a *= r, r *= A, e[0] = 1 - (l + n), e[1] = c + r, e[2] = i - a, e[3] = c - r, e[4] = 1 - (h + n), e[5] = s + o, e[6] = i + a, e[7] = s - o, e[8] = 1 - (h + l), e
    }, quat4.toMat4 = function(t, e) {
        e || (e = mat4.create());
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            o = i + i,
            a = s + s,
            A = n + n,
            h = i * o,
            c = i * a;
        i *= A;
        var l = s * a;
        return s *= A, n *= A, o *= r, a *= r, r *= A, e[0] = 1 - (l + n), e[1] = c + r, e[2] = i - a, e[3] = 0, e[4] = c - r, e[5] = 1 - (h + n), e[6] = s + o, e[7] = 0, e[8] = i + a, e[9] = s - o, e[10] = 1 - (h + l), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, quat4.slerp = function(t, e, i, s) {
        s || (s = t);
        var n, r, o = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        return Math.abs(o) >= 1 ? (s !== t && (s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = t[3]), s) : (n = Math.acos(o), r = Math.sqrt(1 - o * o), Math.abs(r) < .001 ? (s[0] = .5 * t[0] + .5 * e[0], s[1] = .5 * t[1] + .5 * e[1], s[2] = .5 * t[2] + .5 * e[2], s[3] = .5 * t[3] + .5 * e[3], s) : (o = Math.sin((1 - i) * n) / r, i = Math.sin(i * n) / r, s[0] = t[0] * o + e[0] * i, s[1] = t[1] * o + e[1] * i, s[2] = t[2] * o + e[2] * i, s[3] = t[3] * o + e[3] * i, s))
    }, quat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + "]"
    },
    function() {
        function t(t, e, i) {
            this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent), this.width = 0, this.height = 0, this.enableFrontToBack = !!i, this.isEarlyZPass = !1, this.isBatchInEarlyZPass = !1, this.currentZ = 0, this.zNear = 1, this.zFar = 1e3, this.zIncrement = (this.zFar - this.zNear) / 32768, this.zA = this.zFar / (this.zFar - this.zNear), this.zB = this.zFar * this.zNear / (this.zNear - this.zFar), this.kzA = 65536 * this.zA, this.kzB = 65536 * this.zB, this.cam = vec3.create([0, 0, 100]), this.look = vec3.create([0, 0, 0]), this.up = vec3.create([0, 1, 0]), this.worldScale = vec3.create([1, 1, 1]), this.enable_mipmaps = !0, this.matP = mat4.create(), this.matMV = mat4.create(), this.lastMV = mat4.create(), this.currentMV = mat4.create(), this.gl = t, this.version = 0 === this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2") ? 2 : 1, this.initState()
        }

        function e(t, e, i) {
            this.gl = t, this.shaderProgram = e, this.name = i, this.locAPos = t.getAttribLocation(e, "aPos"), this.locATex = t.getAttribLocation(e, "aTex"), this.locMatP = t.getUniformLocation(e, "matP"), this.locMatMV = t.getUniformLocation(e, "matMV"), this.locOpacity = t.getUniformLocation(e, "opacity"), this.locColorFill = t.getUniformLocation(e, "colorFill"), this.locSamplerFront = t.getUniformLocation(e, "samplerFront"), this.locSamplerBack = t.getUniformLocation(e, "samplerBack"), this.locDestStart = t.getUniformLocation(e, "destStart"), this.locDestEnd = t.getUniformLocation(e, "destEnd"), this.locSeconds = t.getUniformLocation(e, "seconds"), this.locPixelWidth = t.getUniformLocation(e, "pixelWidth"), this.locPixelHeight = t.getUniformLocation(e, "pixelHeight"), this.locLayerScale = t.getUniformLocation(e, "layerScale"), this.locLayerAngle = t.getUniformLocation(e, "layerAngle"), this.locViewOrigin = t.getUniformLocation(e, "viewOrigin"), this.locScrollPos = t.getUniformLocation(e, "scrollPos"), this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin || this.locScrollPos), this.lpPixelWidth = -999, this.lpPixelHeight = -999, this.lpOpacity = 1, this.lpDestStartX = 0, this.lpDestStartY = 0, this.lpDestEndX = 1, this.lpDestEndY = 1, this.lpLayerScale = 1, this.lpLayerAngle = 0, this.lpViewOriginX = 0, this.lpViewOriginY = 0, this.lpScrollPosX = 0, this.lpScrollPosY = 0, this.lpSeconds = 0, this.lastCustomParams = [], this.lpMatMV = mat4.create(), this.locOpacity && t.uniform1f(this.locOpacity, 1), this.locColorFill && t.uniform4f(this.locColorFill, 1, 1, 1, 1), this.locSamplerFront && t.uniform1i(this.locSamplerFront, 0), this.locSamplerBack && t.uniform1i(this.locSamplerBack, 1), this.locDestStart && t.uniform2f(this.locDestStart, 0, 0), this.locDestEnd && t.uniform2f(this.locDestEnd, 1, 1), this.locLayerScale && t.uniform1f(this.locLayerScale, 1), this.locLayerAngle && t.uniform1f(this.locLayerAngle, 0), this.locViewOrigin && t.uniform2f(this.locViewOrigin, 0, 0), this.locScrollPos && t.uniform2f(this.locScrollPos, 0, 0), this.locSeconds && t.uniform1f(this.locSeconds, 0), this.hasCurrentMatMV = !1
        }

        function i(t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
        }

        function s(t, e) {
            this.type = t, this.glwrap = e, this.gl = e.gl, this.opacityParam = 0, this.startIndex = 0, this.indexCount = 0, this.texParam = null, this.mat4param = null, this.shaderParams = [], cr.seal(this)
        }
        var n = mat4.create();
        t.prototype.initState = function() {
            var t, e = this.gl;
            for (this.lastOpacity = 1, this.lastTexture0 = null, this.lastTexture1 = null, this.currentOpacity = 1, e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.disable(e.CULL_FACE), e.disable(e.STENCIL_TEST), e.disable(e.DITHER), this.enableFrontToBack ? (e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL)) : e.disable(e.DEPTH_TEST), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.lastSrcBlend = e.ONE, this.lastDestBlend = e.ONE_MINUS_SRC_ALPHA, this.vertexData = new Float32Array(8e3 * (this.enableFrontToBack ? 3 : 2)), this.texcoordData = new Float32Array(16e3), this.pointData = new Float32Array(32e3), this.pointBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.pointBuffer), e.bufferData(e.ARRAY_BUFFER, this.pointData.byteLength, e.DYNAMIC_DRAW), this.vertexBuffers = new Array(4), this.texcoordBuffers = new Array(4), t = 0; t < 4; t++) this.vertexBuffers[t] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffers[t]), e.bufferData(e.ARRAY_BUFFER, this.vertexData.byteLength, e.DYNAMIC_DRAW), this.texcoordBuffers[t] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.texcoordBuffers[t]), e.bufferData(e.ARRAY_BUFFER, this.texcoordData.byteLength, e.DYNAMIC_DRAW);
            this.curBuffer = 0, this.indexBuffer = e.createBuffer(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var i = new Uint16Array(12e3);
            t = 0;
            for (var s = 0; t < 12e3;) i[t++] = s, i[t++] = s + 1, i[t++] = s + 2, i[t++] = s, i[t++] = s + 2, i[t++] = s + 3, s += 4;
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW), this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0;
            var n, r;
            this.shaderPrograms = [], n = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, vTex);", "\tgl_FragColor *= opacity;", "}"].join("\n"), r = this.enableFrontToBack ? ["attribute highp vec3 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);", "\tvTex = aTex;", "}"].join("\n") : ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tvTex = aTex;", "}"].join("\n");
            a = this.createShaderProgram({
                src: n
            }, r, "<default>");
            this.shaderPrograms.push(a), n = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);", "\tgl_FragColor *= opacity;", "}"].join("\n");
            var o = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tgl_PointSize = aPos.z;", "\topacity = aPos.w;", "}"].join("\n");
            a = this.createShaderProgram({
                src: n
            }, o, "<point>"), this.shaderPrograms.push(a), n = ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tif (texture2D(samplerFront, vTex).a < 1.0)", "\t\tdiscard;", "}"].join("\n");
            a = this.createShaderProgram({
                src: n
            }, r, "<earlyz>");
            this.shaderPrograms.push(a), n = ["uniform lowp vec4 colorFill;", "void main(void) {", "\tgl_FragColor = colorFill;", "}"].join("\n");
            var a = this.createShaderProgram({
                src: n
            }, r, "<fill>");
            this.shaderPrograms.push(a);
            for (var A in cr.shaders) cr.shaders.hasOwnProperty(A) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[A], r, A));
            e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, null), this.batch = [], this.batchPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.lastProgram = -1, this.currentProgram = -1, this.currentShader = null, this.fbo = e.createFramebuffer(), this.renderToTex = null, this.depthBuffer = null, this.attachedDepthBuffer = !1, this.enableFrontToBack && (this.depthBuffer = e.createRenderbuffer()), this.tmpVec3 = vec3.create([0, 0, 0]);
            var h = e.getParameter(e.ALIASED_POINT_SIZE_RANGE);
            this.minPointSize = h[0], this.maxPointSize = h[1], this.maxPointSize > 2048 && (this.maxPointSize = 2048), this.switchProgram(0), cr.seal(this)
        }, e.prototype.updateMatMV = function(t) {
            i(this.lpMatMV, t) || (mat4.set(t, this.lpMatMV), this.gl.uniformMatrix4fv(this.locMatMV, !1, t))
        }, t.prototype.createShaderProgram = function(t, i, s) {
            var n = this.gl,
                r = n.createShader(n.FRAGMENT_SHADER);
            if (n.shaderSource(r, t.src), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS)) return n.deleteShader(r), null;
            var o = n.createShader(n.VERTEX_SHADER);
            if (n.shaderSource(o, i), n.compileShader(o), !n.getShaderParameter(o, n.COMPILE_STATUS)) return n.deleteShader(r), n.deleteShader(o), null;
            var a = n.createProgram();
            if (n.attachShader(a, r), n.attachShader(a, o), n.linkProgram(a), !n.getProgramParameter(a, n.LINK_STATUS)) return n.deleteShader(r), n.deleteShader(o), n.deleteProgram(a), null;
            n.useProgram(a), n.deleteShader(r), n.deleteShader(o);
            var A = new e(n, a, s);
            A.extendBoxHorizontal = t.extendBoxHorizontal || 0, A.extendBoxVertical = t.extendBoxVertical || 0, A.crossSampling = !!t.crossSampling, A.preservesOpaqueness = !!t.preservesOpaqueness, A.animated = !!t.animated, A.parameters = t.parameters || [];
            var h, c;
            for (h = 0, c = A.parameters.length; h < c; h++) A.parameters[h][1] = n.getUniformLocation(a, A.parameters[h][0]), A.lastCustomParams.push(0), n.uniform1f(A.parameters[h][1], 0);
            return cr.seal(A), A
        }, t.prototype.getShaderIndex = function(t) {
            var e, i;
            for (e = 0, i = this.shaderPrograms.length; e < i; e++)
                if (this.shaderPrograms[e].name === t) return e;
            return -1
        }, t.prototype.project = function(t, e, i) {
            var s = this.matMV,
                n = this.matP,
                r = [0, 0, 0, 0, 0, 0, 0, 0];
            r[0] = s[0] * t + s[4] * e + s[12], r[1] = s[1] * t + s[5] * e + s[13], r[2] = s[2] * t + s[6] * e + s[14], r[3] = s[3] * t + s[7] * e + s[15], r[4] = n[0] * r[0] + n[4] * r[1] + n[8] * r[2] + n[12] * r[3], r[5] = n[1] * r[0] + n[5] * r[1] + n[9] * r[2] + n[13] * r[3], r[6] = n[2] * r[0] + n[6] * r[1] + n[10] * r[2] + n[14] * r[3], r[7] = -r[2], 0 !== r[7] && (r[7] = 1 / r[7], r[4] *= r[7], r[5] *= r[7], r[6] *= r[7], i[0] = (.5 * r[4] + .5) * this.width, i[1] = (.5 * r[5] + .5) * this.height)
        }, t.prototype.setSize = function(t, e, i) {
            if (this.width !== t || this.height !== e || i) {
                this.endBatch();
                var s = this.gl;
                if (this.width = t, this.height = e, s.viewport(0, 0, t, e), mat4.lookAt(this.cam, this.look, this.up, this.matMV), this.enableFrontToBack) mat4.ortho(-t / 2, t / 2, e / 2, -e / 2, this.zNear, this.zFar, this.matP), this.worldScale[0] = 1, this.worldScale[1] = 1;
                else {
                    mat4.perspective(45, t / e, this.zNear, this.zFar, this.matP);
                    var n = [0, 0],
                        r = [0, 0];
                    this.project(0, 0, n), this.project(1, 1, r), this.worldScale[0] = 1 / (r[0] - n[0]), this.worldScale[1] = -1 / (r[1] - n[1])
                }
                var o, a, A;
                for (o = 0, a = this.shaderPrograms.length; o < a; o++)(A = this.shaderPrograms[o]).hasCurrentMatMV = !1, A.locMatP && (s.useProgram(A.shaderProgram), s.uniformMatrix4fv(A.locMatP, !1, this.matP));
                s.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram), s.bindTexture(s.TEXTURE_2D, null), s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, null), s.activeTexture(s.TEXTURE0), this.lastTexture0 = null, this.lastTexture1 = null, this.depthBuffer && (s.bindFramebuffer(s.FRAMEBUFFER, this.fbo), s.bindRenderbuffer(s.RENDERBUFFER, this.depthBuffer), s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_COMPONENT16, this.width, this.height), this.attachedDepthBuffer || (s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, this.depthBuffer), this.attachedDepthBuffer = !0), s.bindRenderbuffer(s.RENDERBUFFER, null), s.bindFramebuffer(s.FRAMEBUFFER, null), this.renderToTex = null)
            }
        }, t.prototype.resetModelView = function() {
            mat4.lookAt(this.cam, this.look, this.up, this.matMV), mat4.scale(this.matMV, this.worldScale)
        }, t.prototype.translate = function(t, e) {
            0 === t && 0 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 0, mat4.translate(this.matMV, this.tmpVec3))
        }, t.prototype.scale = function(t, e) {
            1 === t && 1 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 1, mat4.scale(this.matMV, this.tmpVec3))
        }, t.prototype.rotateZ = function(t) {
            0 !== t && mat4.rotateZ(this.matMV, t)
        }, t.prototype.updateModelView = function() {
            if (!i(this.lastMV, this.matMV)) {
                var t = this.pushBatch();
                t.type = 5, t.mat4param ? mat4.set(this.matMV, t.mat4param) : t.mat4param = mat4.create(this.matMV), mat4.set(this.matMV, this.lastMV), this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setEarlyZIndex = function(t) {
            this.enableFrontToBack && (t > 32760 && (t = 32760), this.currentZ = this.cam[2] - this.zNear - t * this.zIncrement)
        }, s.prototype.doSetEarlyZPass = function() {
            var t = this.gl,
                e = this.glwrap;
            0 !== this.startIndex ? (t.depthMask(!0), t.colorMask(!1, !1, !1, !1), t.disable(t.BLEND), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.clear(t.DEPTH_BUFFER_BIT), t.bindFramebuffer(t.FRAMEBUFFER, null), e.isBatchInEarlyZPass = !0) : (t.depthMask(!1), t.colorMask(!0, !0, !0, !0), t.enable(t.BLEND), e.isBatchInEarlyZPass = !1)
        }, s.prototype.doSetTexture = function() {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
        }, s.prototype.doSetTexture1 = function() {
            var t = this.gl;
            t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this.texParam), t.activeTexture(t.TEXTURE0)
        }, s.prototype.doSetOpacity = function() {
            var t = this.opacityParam,
                e = this.glwrap;
            e.currentOpacity = t;
            var i = e.currentShader;
            i.locOpacity && i.lpOpacity !== t && (i.lpOpacity = t, this.gl.uniform1f(i.locOpacity, t))
        }, s.prototype.doQuad = function() {
            this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, this.startIndex)
        }, s.prototype.doSetBlend = function() {
            this.gl.blendFunc(this.startIndex, this.indexCount)
        }, s.prototype.doUpdateModelView = function() {
            var t, e, i, s = this.glwrap.shaderPrograms,
                n = this.glwrap.currentProgram;
            for (t = 0, e = s.length; t < e; t++) i = s[t], t === n && i.locMatMV ? (i.updateMatMV(this.mat4param), i.hasCurrentMatMV = !0) : i.hasCurrentMatMV = !1;
            mat4.set(this.mat4param, this.glwrap.currentMV)
        }, s.prototype.doRenderToTexture = function() {
            var t = this.gl,
                e = this.glwrap;
            this.texParam ? (e.lastTexture1 === this.texParam && (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), e.lastTexture1 = null, t.activeTexture(t.TEXTURE0)), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), e.isBatchInEarlyZPass || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texParam, 0)) : (e.enableFrontToBack || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.bindFramebuffer(t.FRAMEBUFFER, null))
        }, s.prototype.doClear = function() {
            var t = this.gl,
                e = this.startIndex;
            0 === e ? (t.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clear(t.COLOR_BUFFER_BIT)) : 1 === e ? (t.enable(t.SCISSOR_TEST), t.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT)
        }, s.prototype.doSetDepthTestEnabled = function() {
            var t = this.gl;
            0 !== this.startIndex ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST)
        }, s.prototype.doPoints = function() {
            var t = this.gl,
                e = this.glwrap;
            e.enableFrontToBack && t.disable(t.DEPTH_TEST);
            var i = e.shaderPrograms[1];
            t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.pointBuffer), t.vertexAttribPointer(i.locAPos, 4, t.FLOAT, !1, 0, 0), t.drawArrays(t.POINTS, this.startIndex / 4, this.indexCount), i = e.currentShader, t.useProgram(i.shaderProgram), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0)), e.enableFrontToBack && t.enable(t.DEPTH_TEST)
        }, s.prototype.doSetProgram = function() {
            var t = this.gl,
                e = this.glwrap,
                i = e.shaderPrograms[this.startIndex];
            e.currentProgram = this.startIndex, e.currentShader = i, t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), i.locOpacity && i.lpOpacity !== e.currentOpacity && (i.lpOpacity = e.currentOpacity, t.uniform1f(i.locOpacity, e.currentOpacity)), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0))
        }, s.prototype.doSetColor = function() {
            var t = this.glwrap.currentShader,
                e = this.mat4param;
            this.gl.uniform4f(t.locColorFill, e[0], e[1], e[2], e[3])
        }, s.prototype.doSetProgramParameters = function() {
            var t, e, i = this.glwrap.currentShader,
                s = this.gl,
                n = this.mat4param;
            i.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, this.texParam), this.glwrap.lastTexture1 = this.texParam, s.activeTexture(s.TEXTURE0));
            var r, o = n[0];
            if (i.locPixelWidth && o !== i.lpPixelWidth && (i.lpPixelWidth = o, s.uniform1f(i.locPixelWidth, o)), o = n[1], i.locPixelHeight && o !== i.lpPixelHeight && (i.lpPixelHeight = o, s.uniform1f(i.locPixelHeight, o)), o = n[2], r = n[3], !i.locDestStart || o === i.lpDestStartX && r === i.lpDestStartY || (i.lpDestStartX = o, i.lpDestStartY = r, s.uniform2f(i.locDestStart, o, r)), o = n[4], r = n[5], !i.locDestEnd || o === i.lpDestEndX && r === i.lpDestEndY || (i.lpDestEndX = o, i.lpDestEndY = r, s.uniform2f(i.locDestEnd, o, r)), o = n[6], i.locLayerScale && o !== i.lpLayerScale && (i.lpLayerScale = o, s.uniform1f(i.locLayerScale, o)), o = n[7], i.locLayerAngle && o !== i.lpLayerAngle && (i.lpLayerAngle = o, s.uniform1f(i.locLayerAngle, o)), o = n[8], r = n[9], !i.locViewOrigin || o === i.lpViewOriginX && r === i.lpViewOriginY || (i.lpViewOriginX = o, i.lpViewOriginY = r, s.uniform2f(i.locViewOrigin, o, r)), o = n[10], r = n[11], !i.locScrollPos || o === i.lpScrollPosX && r === i.lpScrollPosY || (i.lpScrollPosX = o, i.lpScrollPosY = r, s.uniform2f(i.locScrollPos, o, r)), o = n[12], i.locSeconds && o !== i.lpSeconds && (i.lpSeconds = o, s.uniform1f(i.locSeconds, o)), i.parameters.length)
                for (t = 0, e = i.parameters.length; t < e; t++)(o = this.shaderParams[t]) !== i.lastCustomParams[t] && (i.lastCustomParams[t] = o, s.uniform1f(i.parameters[t][1], o))
        }, t.prototype.pushBatch = function() {
            return this.batchPtr === this.batch.length && this.batch.push(new s(0, this)), this.batch[this.batchPtr++]
        }, t.prototype.endBatch = function() {
            if (0 !== this.batchPtr && !this.gl.isContextLost()) {
                var t = this.gl;
                if (this.pointPtr > 0 && (t.bindBuffer(t.ARRAY_BUFFER, this.pointBuffer), t.bufferSubData(t.ARRAY_BUFFER, 0, this.pointData.subarray(0, this.pointPtr)), e && e.locAPos >= 0 && "<point>" === e.name && t.vertexAttribPointer(e.locAPos, 4, t.FLOAT, !1, 0, 0)), this.vertexPtr > 0) {
                    var e = this.currentShader;
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]), t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexData.subarray(0, this.vertexPtr)), e && e.locAPos >= 0 && "<point>" !== e.name && t.vertexAttribPointer(e.locAPos, this.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]), t.bufferSubData(t.ARRAY_BUFFER, 0, this.texcoordData.subarray(0, this.texPtr)), e && e.locATex >= 0 && "<point>" !== e.name && t.vertexAttribPointer(e.locATex, 2, t.FLOAT, !1, 0, 0)
                }
                var i, s, n;
                for (i = 0, s = this.batchPtr; i < s; i++) switch ((n = this.batch[i]).type) {
                    case 1:
                        n.doQuad();
                        break;
                    case 2:
                        n.doSetTexture();
                        break;
                    case 3:
                        n.doSetOpacity();
                        break;
                    case 4:
                        n.doSetBlend();
                        break;
                    case 5:
                        n.doUpdateModelView();
                        break;
                    case 6:
                        n.doRenderToTexture();
                        break;
                    case 7:
                        n.doClear();
                        break;
                    case 8:
                        n.doPoints();
                        break;
                    case 9:
                        n.doSetProgram();
                        break;
                    case 10:
                        n.doSetProgramParameters();
                        break;
                    case 11:
                        n.doSetTexture1();
                        break;
                    case 12:
                        n.doSetColor();
                        break;
                    case 13:
                        n.doSetDepthTestEnabled();
                        break;
                    case 14:
                        n.doSetEarlyZPass()
                }
                this.batchPtr = 0, this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isBatchInEarlyZPass = !1, ++this.curBuffer >= 4 && (this.curBuffer = 0)
            }
        }, t.prototype.setOpacity = function(t) {
            if (t !== this.lastOpacity && !this.isEarlyZPass) {
                var e = this.pushBatch();
                e.type = 3, e.opacityParam = t, this.lastOpacity = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setTexture = function(t) {
            if (t !== this.lastTexture0) {
                var e = this.pushBatch();
                e.type = 2, e.texParam = t, this.lastTexture0 = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setBlend = function(t, e) {
            if ((t !== this.lastSrcBlend || e !== this.lastDestBlend) && !this.isEarlyZPass) {
                var i = this.pushBatch();
                i.type = 4, i.startIndex = t, i.indexCount = e, this.lastSrcBlend = t, this.lastDestBlend = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.isPremultipliedAlphaBlend = function() {
            return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
        }, t.prototype.setAlphaBlend = function() {
            this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }, t.prototype.setNoPremultiplyAlphaBlend = function() {
            this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
        };
        t.prototype.quad = function(t, e, i, s, n, r, o, a) {
            this.vertexPtr >= 15992 && this.endBatch();
            var A = this.vertexPtr,
                h = this.texPtr,
                c = this.vertexData,
                l = this.texcoordData,
                u = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var p = this.pushBatch();
                p.type = 1, p.startIndex = this.enableFrontToBack ? A : A / 2 * 3, p.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (c[A++] = t, c[A++] = e, c[A++] = u, c[A++] = i, c[A++] = s, c[A++] = u, c[A++] = n, c[A++] = r, c[A++] = u, c[A++] = o, c[A++] = a, c[A++] = u) : (c[A++] = t, c[A++] = e, c[A++] = i, c[A++] = s, c[A++] = n, c[A++] = r, c[A++] = o, c[A++] = a), l[h++] = 0, l[h++] = 0, l[h++] = 1, l[h++] = 0, l[h++] = 1, l[h++] = 1, l[h++] = 0, l[h++] = 1, this.vertexPtr = A, this.texPtr = h
        }, t.prototype.quadTex = function(t, e, i, s, n, r, o, a, A) {
            this.vertexPtr >= 15992 && this.endBatch();
            var h = this.vertexPtr,
                c = this.texPtr,
                l = this.vertexData,
                u = this.texcoordData,
                p = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var d = this.pushBatch();
                d.type = 1, d.startIndex = this.enableFrontToBack ? h : h / 2 * 3, d.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            var g = A.left,
                f = A.top,
                m = A.right,
                y = A.bottom;
            this.enableFrontToBack ? (l[h++] = t, l[h++] = e, l[h++] = p, l[h++] = i, l[h++] = s, l[h++] = p, l[h++] = n, l[h++] = r, l[h++] = p, l[h++] = o, l[h++] = a, l[h++] = p) : (l[h++] = t, l[h++] = e, l[h++] = i, l[h++] = s, l[h++] = n, l[h++] = r, l[h++] = o, l[h++] = a), u[c++] = g, u[c++] = f, u[c++] = m, u[c++] = f, u[c++] = m, u[c++] = y, u[c++] = g, u[c++] = y, this.vertexPtr = h, this.texPtr = c
        }, t.prototype.quadTexUV = function(t, e, i, s, n, r, o, a, A, h, c, l, u, p, d, g) {
            this.vertexPtr >= 15992 && this.endBatch();
            var f = this.vertexPtr,
                m = this.texPtr,
                y = this.vertexData,
                _ = this.texcoordData,
                v = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var b = this.pushBatch();
                b.type = 1, b.startIndex = this.enableFrontToBack ? f : f / 2 * 3, b.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (y[f++] = t, y[f++] = e, y[f++] = v, y[f++] = i, y[f++] = s, y[f++] = v, y[f++] = n, y[f++] = r, y[f++] = v, y[f++] = o, y[f++] = a, y[f++] = v) : (y[f++] = t, y[f++] = e, y[f++] = i, y[f++] = s, y[f++] = n, y[f++] = r, y[f++] = o, y[f++] = a), _[m++] = A, _[m++] = h, _[m++] = c, _[m++] = l, _[m++] = u, _[m++] = p, _[m++] = d, _[m++] = g, this.vertexPtr = f, this.texPtr = m
        }, t.prototype.convexPoly = function(t) {
            var e, i, s, n, r, o, a, A, h = t.length / 2 - 2,
                c = h - 1,
                l = t[0],
                u = t[1];
            for (e = 0; e < h; e += 2) s = t[(i = 2 * e) + 2], n = t[i + 3], r = t[i + 4], o = t[i + 5], e === c ? this.quad(l, u, s, n, r, o, r, o) : (a = t[i + 6], A = t[i + 7], this.quad(l, u, s, n, r, o, a, A))
        };
        t.prototype.point = function(t, e, i, s) {
            this.pointPtr >= 7996 && this.endBatch();
            var n = this.pointPtr,
                r = this.pointData;
            if (this.hasPointBatchTop) this.batch[this.batchPtr - 1].indexCount++;
            else {
                var o = this.pushBatch();
                o.type = 8, o.startIndex = n, o.indexCount = 1, this.hasPointBatchTop = !0, this.hasQuadBatchTop = !1
            }
            r[n++] = t, r[n++] = e, r[n++] = i, r[n++] = s, this.pointPtr = n
        }, t.prototype.switchProgram = function(t) {
            if (this.lastProgram !== t) {
                var e = this.shaderPrograms[t];
                if (!e) {
                    if (0 === this.lastProgram) return;
                    t = 0, e = this.shaderPrograms[0]
                }
                var i = this.pushBatch();
                i.type = 9, i.startIndex = t, this.lastProgram = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.programUsesDest = function(t) {
            var e = this.shaderPrograms[t];
            return !(!e.locDestStart && !e.locDestEnd)
        }, t.prototype.programUsesCrossSampling = function(t) {
            var e = this.shaderPrograms[t];
            return !!(e.locDestStart || e.locDestEnd || e.crossSampling)
        }, t.prototype.programPreservesOpaqueness = function(t) {
            return this.shaderPrograms[t].preservesOpaqueness
        }, t.prototype.programExtendsBox = function(t) {
            var e = this.shaderPrograms[t];
            return 0 !== e.extendBoxHorizontal || 0 !== e.extendBoxVertical
        }, t.prototype.getProgramBoxExtendHorizontal = function(t) {
            return this.shaderPrograms[t].extendBoxHorizontal
        }, t.prototype.getProgramBoxExtendVertical = function(t) {
            return this.shaderPrograms[t].extendBoxVertical
        }, t.prototype.getProgramParameterType = function(t, e) {
            return this.shaderPrograms[t].parameters[e][2]
        }, t.prototype.programIsAnimated = function(t) {
            return this.shaderPrograms[t].animated
        }, t.prototype.setProgramParameters = function(t, e, i, s, n, r, o, a, A, h, c, l, u, p, d) {
            var g, f, m, y, _, v = this.shaderPrograms[this.lastProgram];
            if (v.hasAnyOptionalUniforms || d.length) {
                if (m = this.pushBatch(), m.type = 10, m.mat4param ? mat4.set(this.matMV, m.mat4param) : m.mat4param = mat4.create(), y = m.mat4param, y[0] = e, y[1] = i, y[2] = s, y[3] = n, y[4] = r, y[5] = o, y[6] = a, y[7] = A, y[8] = h, y[9] = c, y[10] = l, y[11] = u, y[12] = p, v.locSamplerBack ? m.texParam = t : m.texParam = null, d.length)
                    for ((_ = m.shaderParams).length = d.length, g = 0, f = d.length; g < f; g++) _[g] = d[g];
                this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.clear = function(t, e, i, s) {
            var n = this.pushBatch();
            n.type = 7, n.startIndex = 0, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.clearRect = function(t, e, i, s) {
            if (!(i < 0 || s < 0)) {
                var n = this.pushBatch();
                n.type = 7, n.startIndex = 1, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.clearDepth = function() {
            var t = this.pushBatch();
            t.type = 7, t.startIndex = 2, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.setEarlyZPass = function(t) {
            if (this.enableFrontToBack && (t = !!t, this.isEarlyZPass !== t)) {
                var e = this.pushBatch();
                e.type = 14, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isEarlyZPass = t, this.renderToTex = null, this.isEarlyZPass ? this.switchProgram(2) : this.switchProgram(0)
            }
        }, t.prototype.setDepthTestEnabled = function(t) {
            if (this.enableFrontToBack) {
                var e = this.pushBatch();
                e.type = 13, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.fullscreenQuad = function() {
            mat4.set(this.lastMV, n), this.resetModelView(), this.updateModelView();
            var t = this.width / 2,
                e = this.height / 2;
            this.quad(-t, e, t, e, t, -e, -t, -e), mat4.set(n, this.matMV), this.updateModelView()
        }, t.prototype.setColorFillMode = function(t, e, i, s) {
            this.switchProgram(3);
            var n = this.pushBatch();
            n.type = 12, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.setTextureFillMode = function() {
            this.switchProgram(0)
        }, t.prototype.restoreEarlyZMode = function() {
            this.switchProgram(2)
        }, t.prototype.present = function() {
            this.endBatch(), this.gl.flush()
        };
        var r = [],
            o = {};
        t.prototype.contextLost = function() {
            cr.clearArray(r), o = {}
        };
        t.prototype.loadTexture = function(t, e, i, s, n, a) {
            e = !!e, i = !!i;
            var A = t.src + "," + e + "," + i + (e ? "," + n : ""),
                h = null;
            if (void 0 !== t.src && o.hasOwnProperty(A)) return h = o[A], h.c2refcount++, h;
            this.endBatch();
            var c = this.gl,
                l = cr.isPOT(t.width) && cr.isPOT(t.height);
            h = c.createTexture(), c.bindTexture(c.TEXTURE_2D, h), c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var u = c.RGBA,
                p = c.RGBA,
                d = c.UNSIGNED_BYTE;
            if (s && !this.isIE) switch (s) {
                case 1:
                    u = c.RGB, p = c.RGB;
                    break;
                case 2:
                    d = c.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case 3:
                    d = c.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case 4:
                    u = c.RGB, p = c.RGB, d = c.UNSIGNED_SHORT_5_6_5
            }
            if (1 === this.version && !l && e) {
                var g = document.createElement("canvas");
                g.width = cr.nextHighestPowerOfTwo(t.width), g.height = cr.nextHighestPowerOfTwo(t.height);
                var f = g.getContext("2d");
                void 0 !== f.imageSmoothingEnabled ? f.imageSmoothingEnabled = i : (f.webkitImageSmoothingEnabled = i, f.mozImageSmoothingEnabled = i, f.msImageSmoothingEnabled = i), f.drawImage(t, 0, 0, t.width, t.height, 0, 0, g.width, g.height), c.texImage2D(c.TEXTURE_2D, 0, u, p, d, g)
            } else c.texImage2D(c.TEXTURE_2D, 0, u, p, d, t);
            return e ? "repeat-x" === n ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE)) : "repeat-y" === n ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.REPEAT)) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.REPEAT)) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE)), i ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), (l || this.version >= 2) && this.enable_mipmaps && !a ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR_MIPMAP_LINEAR), c.generateMipmap(c.TEXTURE_2D)) : c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR)) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST)), c.bindTexture(c.TEXTURE_2D, null), this.lastTexture0 = null, h.c2width = t.width, h.c2height = t.height, h.c2refcount = 1, h.c2texkey = A, r.push(h), o[A] = h, h
        }, t.prototype.createEmptyTexture = function(t, e, i, s, n) {
            this.endBatch();
            var o = this.gl;
            this.isIE && (s = !1);
            var a = o.createTexture();
            return o.bindTexture(o.TEXTURE_2D, a), o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, t, e, 0, o.RGBA, s ? o.UNSIGNED_SHORT_4_4_4_4 : o.UNSIGNED_BYTE, null), n ? (o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.REPEAT), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.REPEAT)) : (o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE)), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, i ? o.LINEAR : o.NEAREST), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, i ? o.LINEAR : o.NEAREST), o.bindTexture(o.TEXTURE_2D, null), this.lastTexture0 = null, a.c2width = t, a.c2height = e, r.push(a), a
        }, t.prototype.videoToTexture = function(t, e, i) {
            this.endBatch();
            var s = this.gl;
            this.isIE && (i = !1), s.bindTexture(s.TEXTURE_2D, e), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            try {
                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, i ? s.UNSIGNED_SHORT_4_4_4_4 : s.UNSIGNED_BYTE, t)
            } catch (t) {
                console && console.error && console.error("Error updating WebGL texture: ", t)
            }
            s.bindTexture(s.TEXTURE_2D, null), this.lastTexture0 = null
        }, t.prototype.deleteTexture = function(t) {
            t && (void 0 !== t.c2refcount && t.c2refcount > 1 ? t.c2refcount-- : (this.endBatch(), t === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.lastTexture0 = null), t === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE0), this.lastTexture1 = null), cr.arrayFindRemove(r, t), void 0 !== t.c2texkey && delete o[t.c2texkey], this.gl.deleteTexture(t)))
        }, t.prototype.estimateVRAM = function() {
            var t, e, i, s = this.width * this.height * 4 * 2;
            for (t = 0, e = r.length; t < e; t++) s += (i = r[t]).c2width * i.c2height * 4;
            return s
        }, t.prototype.textureCount = function() {
            return r.length
        }, t.prototype.setRenderingToTexture = function(t) {
            if (t !== this.renderToTex) {
                var e = this.pushBatch();
                e.type = 6, e.texParam = t, this.renderToTex = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, cr.GLWrap = t
    }(),
    function() {
        function t(t) {
            if (t && (t.getContext || t.dc) && !t.c2runtime) {
                t.c2runtime = this;
                var e = this;
                this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !(void 0 === window.c2isCrosswalk || !window.c2isCrosswalk), this.isCordova = this.isCrosswalk || void 0 !== window.device && (void 0 !== window.device.cordova || void 0 !== window.device.phonegap) || void 0 !== window.c2iscordova && window.c2iscordova, this.isPhoneGap = this.isCordova, this.isDirectCanvas = !!t.dc, this.isAppMobi = void 0 !== window.AppMobi || this.isDirectCanvas, this.isCocoonJs = !!window.c2cocoonjs, this.isEjecta = !!window.c2ejecta, this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener(function() {
                    e.setSuspended(!0)
                }), CocoonJS.App.onActivated.addEventListener(function() {
                    e.setSuspended(!1)
                })), this.isEjecta && (document.addEventListener("pagehide", function() {
                    e.setSuspended(!0)
                }), document.addEventListener("pageshow", function() {
                    e.setSuspended(!1)
                }), document.addEventListener("resize", function() {
                    e.setSize(window.innerWidth, window.innerHeight)
                })), this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta, this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent), this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge, this.isTizen = /tizen/i.test(navigator.userAgent), this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge, this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isiPad = /ipad/i.test(navigator.userAgent), this.isiOS = this.isiPhone || this.isiPad || this.isEjecta, this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent), this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent), this.isFirefox = /firefox/i.test(navigator.userAgent), this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge, this.isWindows = /windows/i.test(navigator.userAgent), this.isNWjs = void 0 !== window.c2nodewebkit || void 0 !== window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent), this.isNodeWebkit = this.isNWjs, this.isArcade = void 0 !== window.is_scirra_arcade, this.isWindows8App = !(void 0 === window.c2isWindows8 || !window.c2isWindows8), this.isWindows8Capable = !(void 0 === window.c2isWindows8Capable || !window.c2isWindows8Capable), this.isWindowsPhone8 = !(void 0 === window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.isWindowsPhone81 = !(void 0 === window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.isWindows10 = !!window.cr_windows10, this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10, this.isBlackberry10 = !(void 0 === window.c2isBlackberry10 || !window.c2isBlackberry10), this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree, this.devicePixelRatio = 1, this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta, this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), this.isWKWebView = !!(this.isiOS && this.isCordova && window.webkit), this.httpServer = null, this.httpServerUrl = "", this.isWKWebView && (this.httpServer = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null), "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0), this.isDebug = "undefined" != typeof cr_is_preview && window.location.search.indexOf("debug") > -1, this.canvas = t, this.canvasdiv = document.getElementById("c2canvasdiv"), this.gl = null, this.glwrap = null, this.glUnmaskedRenderer = "(unavailable)", this.enableFrontToBack = !1, this.earlyz_index = 0, this.ctx = null, this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, this.oldWidth = 0, this.oldHeight = 0, this.canvas.oncontextmenu = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.canvas.onselectstart = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.isDirectCanvas && (window.c2runtime = this), this.isNWjs && (window.ondragover = function(t) {
                    return t.preventDefault(), !1
                }, window.ondrop = function(t) {
                    return t.preventDefault(), !1
                }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()), this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"), this.width = t.width, this.height = t.height, this.draw_width = this.width, this.draw_height = this.height, this.cssWidth = this.width, this.cssHeight = this.height, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this.forceCanvasAlpha = !1, this.redraw = !0, this.isSuspended = !1, Date.now || (Date.now = function() {
                    return +new Date
                }), this.plugins = [], this.types = {}, this.types_by_index = [], this.behaviors = [], this.layouts = {}, this.layouts_by_index = [], this.eventsheets = {}, this.eventsheets_by_index = [], this.wait_for_textures = [], this.triggers_to_postinit = [], this.all_global_vars = [], this.all_local_vars = [], this.solidBehavior = null, this.jumpthruBehavior = null, this.shadowcasterBehavior = null, this.deathRow = {}, this.hasPendingInstances = !1, this.isInClearDeathRow = !1, this.isInOnDestroy = 0, this.isRunningEvents = !1, this.isEndingLayout = !1, this.createRow = [], this.isLoadingState = !1, this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null, this.lastSaveJson = "", this.signalledContinuousPreview = !1, this.suspendDrawing = !1, this.fireOnCreateAfterLoad = [], this.dt = 0, this.dt1 = 0, this.minimumFramerate = 30, this.logictime = 0, this.cpuutilisation = 0, this.timescale = 1, this.kahanTime = new cr.KahanAdder, this.wallTime = new cr.KahanAdder, this.last_tick_time = 0, this.fps = 0, this.last_fps_time = 0, this.tickcount = 0, this.execcount = 0, this.framecount = 0, this.objectcount = 0, this.changelayout = null, this.destroycallbacks = [], this.event_stack = [], this.event_stack_index = -1, this.localvar_stack = [
                    []
                ], this.localvar_stack_index = 0, this.trigger_depth = 0, this.pushEventStack(null), this.loop_stack = [], this.loop_stack_index = -1, this.next_uid = 0, this.next_puid = 0, this.layout_first_tick = !0, this.family_count = 0, this.suspend_events = [], this.raf_id = -1, this.timeout_id = -1, this.isloading = !0, this.loadingprogress = 0, this.isNodeFullscreen = !1, this.stackLocalCount = 0, this.audioInstance = null, this.had_a_click = !1, this.isInUserInputEvent = !1, this.objects_to_pretick = new cr.ObjectSet, this.objects_to_tick = new cr.ObjectSet, this.objects_to_tick2 = new cr.ObjectSet, this.registered_collisions = [], this.temp_poly = new cr.CollisionPoly([]), this.temp_poly2 = new cr.CollisionPoly([]), this.allGroups = [], this.groups_by_name = {}, this.cndsBySid = {}, this.actsBySid = {}, this.varsBySid = {}, this.blocksBySid = {}, this.running_layout = null, this.layer_canvas = null, this.layer_ctx = null, this.layer_tex = null, this.layout_tex = null, this.layout_canvas = null, this.layout_ctx = null, this.is_WebGL_context_lost = !1, this.uses_background_blending = !1, this.fx_tex = [null, null], this.fullscreen_scaling = 0, this.files_subfolder = "", this.objectsByUid = {}, this.loaderlogos = null, this.snapshotCanvas = null, this.snapshotData = "", this.objectRefTable = [], this.requestProjectData()
            }
        }

        function e(t, e) {
            B && B.width === t && B.height === e || ((B = document.createElement("canvas")).width = t, B.height = e, T = B.getContext("2d"))
        }

        function i(t, e) {
            return e <= 128 ? t[3] : e <= 256 ? t[2] : e <= 512 ? t[1] : t[0]
        }

        function s() {
            return E.length ? E.pop() : new cr.ObjectSet
        }

        function n(t) {
            t.clear(), E.push(t)
        }

        function r() {
            try {
                return !!window.indexedDB
            } catch (t) {
                return !1
            }
        }

        function o(t) {
            t.target.result.createObjectStore("saves", {
                keyPath: "slot"
            })
        }

        function a(t, e, i, s) {
            try {
                var n = indexedDB.open("_C2SaveStates");
                n.onupgradeneeded = o, n.onerror = s, n.onsuccess = function(n) {
                    var r = n.target.result;
                    r.onerror = s, r.transaction(["saves"], "readwrite").objectStore("saves").put({
                        slot: t,
                        data: e
                    }).onsuccess = i
                }
            } catch (t) {
                s(t)
            }
        }

        function A(t, e, i) {
            try {
                var s = indexedDB.open("_C2SaveStates");
                s.onupgradeneeded = o, s.onerror = i, s.onsuccess = function(s) {
                    var n = s.target.result;
                    n.onerror = i;
                    var r = n.transaction(["saves"]).objectStore("saves").get(t);
                    r.onsuccess = function(t) {
                        e(r.result ? r.result.data : null)
                    }
                }
            } catch (t) {
                i(t)
            }
        }

        function h() {
            cr.logexport("Reloading for continuous preview"), window.c2cocoonjs ? CocoonJS.App.reload() : window.location.search.indexOf("continuous") > -1 ? window.location.reload(!0) : window.location = window.location + "?continuous"
        }

        function c(t) {
            var e, i = {};
            for (e in t)
                if (t.hasOwnProperty(e)) {
                    if (t[e] instanceof cr.ObjectSet) continue;
                    if (t[e] && void 0 !== t[e].c2userdata) continue;
                    if ("spriteCreatedDestroyCallback" === e) continue;
                    i[e] = t[e]
                }
            return i
        }
        var l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        t.prototype.requestProjectData = function() {
            var t = this;
            if (this.isWKWebView) {
                var e = function() {
                    t.fetchLocalFileViaCordovaAsText("data.js", function(e) {
                        t.loadProject(JSON.parse(e))
                    }, function(t) {
                        alert("Error fetching data.js")
                    })
                };
                this.httpServer ? this.httpServer.startServer({
                    port: 0,
                    localhost_only: !0
                }, function(i) {
                    t.httpServerUrl = i, e()
                }, function(t) {
                    console.log("Error starting local server: " + t + ". Video playback will not work."), e()
                }) : (console.log("Local server unavailable. Video playback will not work."), e())
            } else {
                var i;
                i = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
                var s = "js/data.js";
                (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (s = "data.json"), i.open("GET", s, !0);
                var n = !1;
                if (!this.isDomFree && "response" in i && "responseType" in i) try {
                    i.responseType = "json", n = "json" === i.responseType
                } catch (t) {
                    n = !1
                }
                if (!n && "responseType" in i) try {
                    i.responseType = "text"
                } catch (t) {}
                if ("overrideMimeType" in i) try {
                    i.overrideMimeType("application/json; charset=utf-8")
                } catch (t) {}
                this.isWindowsPhone8 ? i.onreadystatechange = function() {
                    4 === i.readyState && t.loadProject(JSON.parse(i.responseText))
                } : (i.onload = function() {
                    if (n) t.loadProject(i.response);
                    else if (t.isEjecta) {
                        var e = i.responseText;
                        e = e.substr(e.indexOf("{")), t.loadProject(JSON.parse(e))
                    } else t.loadProject(JSON.parse(i.responseText))
                }, i.onerror = function(t) {
                    cr.logerror("Error requesting " + s + ":"), cr.logerror(t)
                }), i.send()
            }
        }, t.prototype.initRendererAndLoader = function() {
            var t, e, i, s, n, r, o, a, A, h, c = this;
            this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser, 0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1), this.devicePixelRatio = this.isRetina ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1, this.ClearDeathRow();
            var l;
            this.fullscreen_mode > 0 && this.setSize(window.innerWidth, window.innerHeight, !0), this.canvas.addEventListener("webglcontextlost", function(t) {
                t.preventDefault(), c.onContextLost(), cr.logexport("[Construct 2] WebGL context lost"), window.cr_setSuspended(!0)
            }, !1), this.canvas.addEventListener("webglcontextrestored", function(t) {
                c.glwrap.initState(), c.glwrap.setSize(c.glwrap.width, c.glwrap.height, !0), c.layer_tex = null, c.layout_tex = null, c.fx_tex[0] = null, c.fx_tex[1] = null, c.onContextRestored(), c.redraw = !0, cr.logexport("[Construct 2] WebGL context restored"), window.cr_setSuspended(!1)
            }, !1);
            try {
                this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (l = {
                    alpha: !0,
                    depth: !1,
                    antialias: !1,
                    powerPreference: "high-performance",
                    failIfMajorPerformanceCaveat: !0
                }, this.gl = this.canvas.getContext("webgl2", l) || this.canvas.getContext("webgl", l) || this.canvas.getContext("experimental-webgl", l))
            } catch (t) {}
            if (this.gl) {
                this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2");
                var u = this.gl.getExtension("WEBGL_debug_renderer_info");
                if (u) {
                    var p = this.gl.getParameter(u.UNMASKED_VENDOR_WEBGL),
                        d = this.gl.getParameter(u.UNMASKED_RENDERER_WEBGL);
                    this.glUnmaskedRenderer = d + " [" + p + "]"
                }
                for (this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"), this.isDomFree || (this.overlay_canvas = document.createElement("canvas"), jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode), this.overlay_canvas.oncontextmenu = function(t) {
                    return !1
                }, this.overlay_canvas.onselectstart = function(t) {
                    return !1
                }, this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio), this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio), jQuery(this.overlay_canvas).css({
                    width: this.cssWidth + "px",
                    height: this.cssHeight + "px"
                }), this.positionOverlayCanvas(), this.overlay_ctx = this.overlay_canvas.getContext("2d")), this.glwrap = new cr.GLWrap(this.gl, this.isMobile, this.enableFrontToBack), this.glwrap.setSize(this.canvas.width, this.canvas.height), this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality, this.ctx = null, t = 0, e = this.types_by_index.length; t < e; t++)
                    for (i = 0, s = (o = this.types_by_index[t]).effect_types.length; i < s; i++)(a = o.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
                for (t = 0, e = this.layouts_by_index.length; t < e; t++) {
                    for (i = 0, s = (A = this.layouts_by_index[t]).effect_types.length; i < s; i++)(a = A.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex);
                    for (A.updateActiveEffects(), i = 0, s = A.layers.length; i < s; i++) {
                        for (n = 0, r = (h = A.layers[i]).effect_types.length; n < r; n++)(a = h.effect_types[n]).shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
                        h.updateActiveEffects()
                    }
                }
            } else {
                if (this.fullscreen_mode > 0 && this.isDirectCanvas) {
                    this.canvas = null, document.oncontextmenu = function(t) {
                        return !1
                    }, document.onselectstart = function(t) {
                        return !1
                    }, this.ctx = AppMobi.canvas.getContext("2d");
                    try {
                        this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp", this.ctx.globalScale = 1, this.ctx.HTML5CompatibilityMode = !0, this.ctx.imageSmoothingEnabled = this.linearSampling
                    } catch (t) {}
                    0 !== this.width && 0 !== this.height && (this.ctx.width = this.width, this.ctx.height = this.height)
                }
                this.ctx || (this.isCocoonJs ? (l = {
                    antialias: !!this.linearSampling,
                    alpha: !0
                }, this.ctx = this.canvas.getContext("2d", l)) : (l = {
                    alpha: !0
                }, this.ctx = this.canvas.getContext("2d", l)), this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling)), this.overlay_canvas = null, this.overlay_ctx = null
            } if (this.tickFunc = function(t) {
                c.tick(!1, t)
            }, window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", function() {
                window.focus()
            }, !0), document.addEventListener("touchstart", function() {
                window.focus()
            }, !0)), "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), window.location.search.indexOf("continuous") > -1 && (cr.logexport("Reloading for continuous preview"), this.loadFromSlot = "__c2_continuouspreview", this.suspendDrawing = !0), this.pauseOnBlur && !this.isMobile && (jQuery(window).focus(function() {
                c.setSuspended(!1)
            }), jQuery(window).blur(function() {
                var t = window.parent;
                t && t.document.hasFocus() || c.setSuspended(!0)
            }))), window.addEventListener("blur", function() {
                c.onWindowBlur()
            }), !this.isDomFree) {
                var g = function(t) {
                    if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                        document.activeElement.blur()
                    } catch (t) {}
                };
                "undefined" != typeof PointerEvent ? document.addEventListener("pointerdown", g) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", g) : document.addEventListener("touchstart", g), document.addEventListener("mousedown", g)
            }
            0 === this.fullscreen_mode && this.isRetina && this.devicePixelRatio > 1 && this.setSize(this.original_width, this.original_height, !0), this.tryLockOrientation(), this.getready(), this.go(), this.extra = {}, cr.seal(this)
        };
        t.prototype.setSize = function(t, e, i) {
            var s = 0,
                n = 0,
                r = 0,
                o = 0,
                a = 0;
            if (this.lastWindowWidth !== t || this.lastWindowHeight !== e || i) {
                this.lastWindowWidth = t, this.lastWindowHeight = e;
                var A, h, c = this.fullscreen_mode,
                    l = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova;
                if (l || 0 !== this.fullscreen_mode || i) {
                    l && this.fullscreen_scaling > 0 && (c = this.fullscreen_scaling);
                    var u = this.devicePixelRatio;
                    c >= 4 ? ((h = t / e) > (A = this.original_width / this.original_height) ? (r = e * A, 5 === c ? ((a = r * u / this.original_width) > 1 ? a = Math.floor(a) : a < 1 && (a = 1 / Math.ceil(1 / a)), s = (t - (r = this.original_width * a / u)) / 2, n = (e - (o = this.original_height * a / u)) / 2, t = r, e = o) : (s = (t - r) / 2, t = r)) : (o = t / A, 5 === c ? ((a = o * u / this.original_height) > 1 ? a = Math.floor(a) : a < 1 && (a = 1 / Math.ceil(1 / a)), s = (t - (r = this.original_width * a / u)) / 2, n = (e - (o = this.original_height * a / u)) / 2, t = r, e = o) : (n = (e - o) / 2, e = o)), l && !this.isNWjs && (s = 0, n = 0)) : this.isNWjs && this.isNodeFullscreen && 0 === this.fullscreen_mode_set && (s = Math.floor((t - this.original_width) / 2), n = Math.floor((e - this.original_height) / 2), t = this.original_width, e = this.original_height), c < 2 && (this.aspect_scale = u), this.cssWidth = Math.round(t), this.cssHeight = Math.round(e), this.width = Math.round(t * u), this.height = Math.round(e * u), this.redraw = !0, this.wantFullscreenScalingQuality ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : this.width < this.original_width && this.height < this.original_height || 1 === c ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width, this.draw_height = this.original_height, this.fullscreenScalingQuality = !1, 2 === c ? (A = this.original_width / this.original_height, (h = this.lastWindowWidth / this.lastWindowHeight) < A ? this.draw_width = this.draw_height * h : h > A && (this.draw_height = this.draw_width / h)) : 3 === c && (A = this.original_width / this.original_height, (h = this.lastWindowWidth / this.lastWindowHeight) > A ? this.draw_width = this.draw_height * h : h < A && (this.draw_height = this.draw_width / h))), this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px",
                        "margin-left": Math.floor(s) + "px",
                        "margin-top": Math.floor(n) + "px"
                    }), "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px"
                    })), this.canvas && (this.canvas.width = Math.round(t * u), this.canvas.height = Math.round(e * u), this.isEjecta ? (this.canvas.style.left = Math.floor(s) + "px", this.canvas.style.top = Math.floor(n) + "px", this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px")), this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * u), this.overlay_canvas.height = Math.round(e * u), this.overlay_canvas.style.width = this.cssWidth + "px", this.overlay_canvas.style.height = this.cssHeight + "px"), this.glwrap && this.glwrap.setSize(Math.round(t * u), Math.round(e * u)), this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t), this.ctx.height = Math.round(e)), this.ctx && this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling), this.tryLockOrientation(), this.isiPhone && !this.isCordova && window.scrollTo(0, 0)
                }
            }
        }, t.prototype.tryLockOrientation = function() {
            if (this.autoLockOrientation && 0 !== this.orientations) {
                var t = "portrait";
                2 === this.orientations && (t = "landscape");
                try {
                    screen.orientation && screen.orientation.lock ? screen.orientation.lock(t).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
                } catch (t) {
                    console && console.warn && console.warn("Failed to lock orientation: ", t)
                }
            }
        }, t.prototype.onContextLost = function() {
            this.glwrap.contextLost(), this.is_WebGL_context_lost = !0;
            var t, e, i;
            for (t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onLostWebGLContext && i.onLostWebGLContext()
        }, t.prototype.onContextRestored = function() {
            this.is_WebGL_context_lost = !1;
            var t, e, i;
            for (t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onRestoreWebGLContext && i.onRestoreWebGLContext()
        }, t.prototype.positionOverlayCanvas = function() {
            if (!this.isDomFree) {
                var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
                t.position = "absolute", jQuery(this.overlay_canvas).css(t)
            }
        };
        var u = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
        t.prototype.setSuspended = function(t) {
            var e, i;
            if (t && !this.isSuspended)
                for (cr.logexport("[Construct 2] Suspending"), this.isSuspended = !0, -1 !== this.raf_id && u && u(this.raf_id), -1 !== this.timeout_id && clearTimeout(this.timeout_id), e = 0, i = this.suspend_events.length; e < i; e++) this.suspend_events[e](!0);
            else if (!t && this.isSuspended) {
                for (cr.logexport("[Construct 2] Resuming"), this.isSuspended = !1, this.last_tick_time = cr.performance_now(), this.last_fps_time = cr.performance_now(), this.framecount = 0, this.logictime = 0, e = 0, i = this.suspend_events.length; e < i; e++) this.suspend_events[e](!1);
                this.tick(!1)
            }
        }, t.prototype.addSuspendCallback = function(t) {
            this.suspend_events.push(t)
        }, t.prototype.GetObjectReference = function(t) {
            return this.objectRefTable[t]
        }, t.prototype.loadProject = function(t) {
            t && t.project || cr.logerror("Project model unavailable");
            var e = t.project;
            if (this.name = e[0], this.first_layout = e[1], this.fullscreen_mode = e[12], this.fullscreen_mode_set = e[12], this.original_width = e[10], this.original_height = e[11], this.parallax_x_origin = this.original_width / 2, this.parallax_y_origin = this.original_height / 2, this.isDomFree && !this.isEjecta && (e[12] >= 4 || 0 === e[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.fullscreen_mode = 3, this.fullscreen_mode_set = 3), this.uses_loader_layout = e[18], this.loaderstyle = e[19], 0 === this.loaderstyle) {
                var i = new Image;
                i.crossOrigin = "anonymous", this.setImageSrc(i, "loading-logo.png"), this.loaderlogos = {
                    logo: i
                }
            } else if (4 === this.loaderstyle) {
                var s = new Image;
                s.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAGCJJREFUeNrs3EtyqzoUQNEoRd9mBp4F828yi8xAMALd24zVcPAXjrRWj6r3YnPEx3cXdiqlfAEAAABt+zYCAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEACMAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAD5nMIL2lDkZAkd2rrZzsPc/VtuLJb2+BFk/ABq8f7ifHFiaiiFs5AkAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAKAtgxEAwVyq7fXJv5eNNPR6Wj8A9w+fB2AjTwAAAACAAAAAAAAIAAAAAEAIfgMAiKb+jt9iJNYTAPcPI4G/eQIAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAgGAGI/i8MqezKdy01iOrtlO1fTKyQ1ka37+TeVq/hs9H96fY98e9OX5eu37mifNx+7+v7v5/0lS6/IzlCQAAAAAQAAAAAAABAAAAAAjBbwDsIxvBTWO1XX8/52Seh5Ya378f87R+DZ+Prqex748+37S1fuaJ89FnrJfzBAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAwQxGEMKl2l6Dvf9snqHlxvdvNE/r53x0PbWejh/nYziuN44f19MHeAIAAAAABAAAAABAAAAAAABC8BsAMVx9BydNZbn1H5c5mdgd8/xvMZKuWX/rh+spjh/zxPHj+OmCJwAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABgs6HXHS9zOlt+AKBhPusAcMUTAAAAACAAAAAAAAIAAAAAEMLQ8b7nqO+1zOndrzdW24tT5UoxAuuJ9XN97XI9o61f9v6cjw2fj8kSOX64nycAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAAAhmMIJNLtX2+uTfyx9+/WwJd5WMoCljtb0YSVfrd3Z9ber+bP32nefen69wPtLI/TlNxQQ38gQAAAAACAAAAACAAAAAAACE4DcAtrn6DlOaylPf+S1zeuvrP/D3ASD8/fnLb3JEm6f1c/wAH+YJAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAACCGYwA4C6nzvZ3seQA8LSzEXAEngAAAAAAAQAAAAAQAAAAAIAQ/AZADPn3RpmTicB+fjrbXxccwtwfG3w964f1NB94KU8AAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAABDMYAS7GA/+/lZLhPOxWdmS43x8+Hyo399iyUJfT33euS0Zwa4uHz5enQ+d8AQAAAAACAAAAACAAAAAAACE4DcAdpCm8tbvDJbZV7bgDr7DC85HrB8czer84h08AQAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAABAMIMRbJJ/b5Q5mUhD64n1w3raX/uD9bR+WE964AkAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAA4GhSKcUUAAAAoHGeAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAIwAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAwAgAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAAAEAAAAAAAAQAAAAAEAAAAAEAAAAAAAAQAAAAAQAAAAAAABAAAAABAAAAAAAAEAAAA4B87dkACAAAAIOj/63YEOkMAAQAAAAAIAAAAABAAAAAAgAAAAAAAJhJAgAEAy7CxRMld/JcAAAAASUVORK5CYII=";
                var n = new Image;
                n.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACNdJREFUeNrs3U1u8joYgFFcdU7YAbtg/8PuojswWYEroTBBFbQhP37tcyZM7kdxnETPtSBOpZQDANCXJAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAAASAowAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAABAAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAACwFEAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQAAIAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAD0HgDlK5ntZQ3Ta17p/U/T67WWU6jx8RHxBn4ptdznSif3gUXmqRYfLiEA6I8AAAABAAAIAACgSZ8OASs5T6/ji/8uNz7O7FTAfaD5+4AVAADACgB9uxf/1TjBfcChsAIAAAgAAEAAAAACAAAQAADAQsL+CqB8paGyj3T/tut914f7rhzHRs6Vrb/FewzyObce31rzOBza8ng9vmsIMr7W5nFpuxyfZ5s0pUvZ7Z5lBQAArACEUtuTox63rTxW+jnn2nqf0e8gn3Pr8a01j609iW3pbWRzkPF5ol6sedz1nmUFAAA6JAAAQAAAAAIAABAAAEAbWtwN8Dy9jiu9fw7yOfce31+dgnzOrcfnPI1xHrjfPDcGuU6jzKMVAADACsCvxfn4dKVnT2La83Me7JN9Nb76ryfnafjjYx4dHysAAIAAAAABAAD0YdfvAFS4ox/QNvccsAIAAFYA9pLXes8Z3/pfevewd5VOzsFifLO0fr6uNb5c2fu1Po/J9WwFAAAQAACAAAAABAAAIAAAgIXVuBfAeXp9tStTnvnvc/A5S52cm7V9O3rr8Q2NnK9Rrse5n/Pd+5V57OB6Tpc6fzxgBQAArABU4dfd/B49+Z1/lN0AoQet75bXyy5ydhNskBUAABAAAIAAAAAEAAAgAACAoD4dAip13Onv+pYz1G9wCKwAAABWAG5uT6Tyu//wvnf6u06cFa7HDf9dlPH1Mo+OuxUAAEAAAAACAAAQAACAAAAAlhb5VwCnhd9vdDo0MY9/5VvEdcxjfvF+18bP09ruO9F/BXOeeVy7vP9bAQAAKwBxpEv51/8ZeC5AtTx5zzwaH0sZzZcVAABAAAAAAgAABAAAIAAAgObV+CuAXnbzy8ZnnAH+rnk0PuO0AgAACAAAQAAAAAIAABAAAIAAAAB2lUopjgIACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAAAkAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAIAEcBAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAEgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAABICjAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAIAAEAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAA4OZHgAEAYMHgmY2+7qAAAAAASUVORK5CYII=";
                var r = new Image;
                r.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBpJREFUeNrs3EFuozAAQFGoZh96g9yi91/2Fr2B4QRuushUomoawDYGvydVGrWduBDyhU1IH2PsgDb1AgACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAIAACAAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgACIAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAEA9AYjv/VH20XD7Cgt+//X2NabYRYXHI83zUeQ56d/SvG5fPK/QLgGAhv2zCxa73r6m2fdC4TGDp6G5Y0AAKjHtMOfeY0waeD5MAcAaAGANIIP43g8JT7u+rn18XT+8FNg3a0/xLhkec+14S7ZxKHTM3Z/HvwwZxhsqe/0NG15X///dv8Wx2gB06RZH7tdWL12ZBZe1b1T4yPCYa8dbso2lFrGevUYeMoxX20Jd2PlYNQUAawCANYACrt3P66dbT5GWPmaOU7LXAqd5z45X2z5NsQ9qO26mg7w2qgvAdF+wSHgvQA3XZMeTjVfbde4cf08L22gKAGQ8A0h4mY/2OHZOsAawZC4SHpz6l76NNqVY8Xg1354cEv1e6W3sz3JcmQJAwwQATAGSuXaPb5Oc/zz3O7P2+Nih0p/QMx9v6I55e/Kjx/zruDrKNiZ7nlN9IlDqAEzz9yXP5vw5LgNSXunLcm7BNgUABACodg2AdLfncg6DAHwLDcz9Pzb836PsnLDyZznG22Mba//bTQEAAQB2ngI8e+vqdOD9mPv23Nq3Mcx+byy8T1MdO7mnYNcHf+t0ygD89nllJ1sLaGHxbrRPN6vuvQWmAGANALAGsN0el/nCycfbOmZoYBs72+gMABAA4Fl9jNFeAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAEAAAAEABABow6cAAwC5b0H3cHw3KwAAAABJRU5ErkJggg==";
                var o = new Image;
                o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmxJREFUeNrs3UFugzAQQNFSIVVdNbfp/Ze9TbLrzgUpSBWqwTY2JOV9yYsmOLaHj2fwpl0I4QXn5VUICAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACYC/6vz4MX93uE+k+wzhu7B8YdYV9b0O7POm9+RjaNfLd5b62ojjbAfDYAgyWdmNLtTinb+td7Ih4VE8BR3NECnpk1uJxT4FNd4CQ0u5PQChsOePn5NFmc4488bVidc31pCTOagBvAXm5KLJFhdRrU/rGfmPp2tzxW825cayq3qOmNUCNPL7lN5b6xoq1sc+WfFo698Qbm/xbOWvoF/LJqkWJ5m4pjav33Tjn96F9x66dBT1UOstY7bsldmqAPN5OVQNMT8tk5vzvGvVDad/Uba7GnHNyfs1YlfTNjftu5wDDYsZXsltJjmtVCzzrmcQQq1vqvObXzePcP8PiW52wpY49xWEM/KPEpVZM+syn4ZA7sTZuq2PS+bg5698Sq5S+te6FIvDkrBWBW15Dqux0DV8Tk8b9/Xo27jQJ5/JrB1BF643127r7NSsCJ3lK8mXOoUeLOe9dc6SO26L2WCsCm+axI/ouff8f16sGwPLuE0IQhRNjByAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgAAgAAqAdPwIMAKuzR6MIhnmnAAAAAElFTkSuQmCC";
                var a = new Image;
                a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAEACAYAAAAtJQQkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABZdJREFUeNrs2DERAAAIxDDAv+dHBQuXSOjYTlIAAADAbyMBAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAwKUVYAC2jwT9C2DLEwAAAABJRU5ErkJggg==";
                var A = new Image;
                A.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACACAYAAAB9V9ELAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc5JREFUeNrs1kENAAAIxDDAv+fDBgmthL3WSQoA+GUkAAADAAAYAADAAAAABgAAMAAAgAEAAAwAAGAAAAADAAAYAADAAAAABgAAMAAAgAEAAAwAAGAAAAADAAAGAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAMAABgAAAAAwAAGAAAwAAAAAYAADAAAIABAAAMAABgAAAAAwAAGAAAwAAAAAYAADAAAIABAAAMAAAYAADAAAAABgAAMAAAgAEAAAwAAGAAAAADAAAYAADAAAAABgAAMAAAgAEAAAwAAGAAAAADAAAYAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAwAABgACQAAAMAABgAAMAAAAAGAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAwAACAAQAADAAAYAAAAAMAAAYAADAAAIABAAAMAABgAAAAAwAAGAAAwAAAAAYAADAAAIABAAAMAABgAAAAAwAAGAAAwAAAAAYAAAwAAGAAAAADAAAYAADAAAAABgAAuG0FGACKrAP9JpOvcwAAAABJRU5ErkJggg==";
                var h = new Image;
                h.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABACAYAAAD1Xam+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKZJREFUeNrs1DEBAAAIAyDXP/Qs4SeEIG0H+CkCAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAQACAAQACAAAABAAIABAAIABAAIABAAIAAAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAEIAAQACAAQACAAAABAAIABAAIABAAIABAAIAAAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAQAHBnBRgAheS/gSdjVzMAAAAASUVORK5CYII=";
                var c = new Image;
                c.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFNJREFUeNrs0gENAAAIwzDuX/TRQWglLEvb4a8YwAAqGAADYAAMgAEwAAbAABgAA2AADIABMAAGwAAYAANgAAyAATAABsAAGAADYAAMgAG4YAUYACZCX8GsLKMGAAAAAElFTkSuQmCC";
                var l = new Image;
                l.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAEACAYAAAAtJQQkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABZdJREFUeNrs2DERAAAIxDDAv+dHBQuXSOjYTlIAAADAbyMBAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAYAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAgAEAAAAAGAAAAACAAQAAAAAYAAAAAGAAAAAAAAYAAAAAYAAAAAAABgAAAABgAAAAAAAGAAAAAGAAAAAAAAYAAAAAGAAAAACAAQAAAAAYAAAAAIABAAAAABgAAAAAwKUVYAC2jwT9C2DLEwAAAABJRU5ErkJggg==";
                var u = new Image;
                u.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACACAYAAAB9V9ELAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc5JREFUeNrs1kENAAAIxDDAv+fDBgmthL3WSQoA+GUkAAADAAAYAADAAAAABgAAMAAAgAEAAAwAAGAAAAADAAAYAADAAAAABgAAMAAAgAEAAAwAAGAAAAADAAAGAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAMAABgAAAAAwAAGAAAwAAAAAYAADAAAIABAAAMAABgAAAAAwAAGAAAwAAAAAYAADAAAIABAAAMAAAYAADAAAAABgAAMAAAgAEAAAwAAGAAAAADAAAYAADAAAAABgAAMAAAgAEAAAwAAGAAAAADAAAYAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAwAABgACQAAAMAABgAAMAAAAAGAAAwAACAAQAADAAAYAAAAAMAABgAAMAAAAAGAAAwAACAAQAADAAAYAAAAAMAAAYAADAAAIABAAAMAABgAAAAAwAAGAAAwAAAAAYAADAAAIABAAAMAABgAAAAAwAAGAAAwAAAAAYAAAwAAGAAAAADAAAYAADAAAAABgAAuG0FGACKrAP9JpOvcwAAAABJRU5ErkJggg==";
                var p = new Image;
                p.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABACAYAAAD1Xam+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKZJREFUeNrs1DEBAAAIAyDXP/Qs4SeEIG0H+CkCAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAQACAAQACAAAABAAIABAAIABAAIABAAIAAAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAEIAAQACAAQACAAAABAAIABAAIABAAIABAAIAAAAEAAgAEAAgAEAAgAEAAgAAAAQACAAQACAAQAHBnBRgAheS/gSdjVzMAAAAASUVORK5CYII=";
                var d = new Image;
                d.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAYAAADaInAlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFNJREFUeNrs0gENAAAIwzDuX/TRQWglLEvb4a8YwAAqGAADYAAMgAEwAAbAABgAA2AADIABMAAGwAAYAANgAAyAATAABsAAGAADYAAMgAG4YAUYACZCX8GsLKMGAAAAAElFTkSuQmCC", this.loaderlogos = {
                    logo: [s, n, r, o],
                    powered: [a, A, h, c],
                    website: [l, u, p, d]
                }
            }
            this.next_uid = e[21], this.objectRefTable = cr.getObjectRefTable(), this.system = new cr.system_object(this);
            var g, f, m, y, _, v, b, w, x, B, T, S, E;
            for (g = 0, f = e[2].length; g < f; g++) b = e[2][g], T = this.GetObjectReference(b[0]), cr.add_common_aces(b, T.prototype), (S = new T(this)).singleglobal = b[1], S.is_world = b[2], S.is_rotatable = b[5], S.must_predraw = b[9], S.onCreate && S.onCreate(), cr.seal(S), this.plugins.push(S);
            for (this.objectRefTable = cr.getObjectRefTable(), g = 0, f = e[3].length; g < f; g++) {
                for (b = e[3][g], E = this.GetObjectReference(b[1]), S = null, m = 0, y = this.plugins.length; m < y; m++)
                    if (this.plugins[m] instanceof E) {
                        S = this.plugins[m];
                        break
                    }
                var C = new S.Type(S);
                for (C.name = b[0], C.is_family = b[2], C.instvar_sids = b[3].slice(0), C.vars_count = b[3].length, C.behs_count = b[4], C.fx_count = b[5], C.sid = b[11], C.is_family ? (C.members = [], C.family_index = this.family_count++, C.families = null) : (C.members = null, C.family_index = -1, C.families = []), C.family_var_map = null, C.family_beh_map = null, C.family_fx_map = null, C.is_contained = !1, C.container = null, b[6] ? (C.texture_file = b[6][0], C.texture_filesize = b[6][1], C.texture_pixelformat = b[6][2]) : (C.texture_file = null, C.texture_filesize = 0, C.texture_pixelformat = 0), b[7] ? C.animations = b[7] : C.animations = null, C.index = g, C.instances = [], C.deadCache = [], C.solstack = [new cr.selection(C)], C.cur_sol = 0, C.default_instance = null, C.default_layerindex = 0, C.stale_iids = !0, C.updateIIDs = cr.type_updateIIDs, C.getFirstPicked = cr.type_getFirstPicked, C.getPairedInstance = cr.type_getPairedInstance, C.getCurrentSol = cr.type_getCurrentSol, C.pushCleanSol = cr.type_pushCleanSol, C.pushCopySol = cr.type_pushCopySol, C.popSol = cr.type_popSol, C.getBehaviorByName = cr.type_getBehaviorByName, C.getBehaviorIndexByName = cr.type_getBehaviorIndexByName, C.getEffectIndexByName = cr.type_getEffectIndexByName, C.applySolToContainer = cr.type_applySolToContainer, C.getInstanceByIID = cr.type_getInstanceByIID, C.collision_grid = new cr.SparseGrid(this.original_width, this.original_height), C.any_cell_changed = !0, C.any_instance_parallaxed = !1, C.extra = {}, C.toString = cr.type_toString, C.behaviors = [], m = 0, y = b[8].length; m < y; m++) {
                    w = b[8][m];
                    var O = this.GetObjectReference(w[1]),
                        I = null;
                    for (_ = 0, v = this.behaviors.length; _ < v; _++)
                        if (this.behaviors[_] instanceof O) {
                            I = this.behaviors[_];
                            break
                        }
                    I || ((I = new O(this)).my_types = [], I.my_instances = new cr.ObjectSet, I.onCreate && I.onCreate(), cr.seal(I), this.behaviors.push(I), cr.behaviors.solid && I instanceof cr.behaviors.solid && (this.solidBehavior = I), cr.behaviors.jumpthru && I instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = I), cr.behaviors.shadowcaster && I instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = I)), -1 === I.my_types.indexOf(C) && I.my_types.push(C);
                    var P = new I.Type(I, C);
                    P.name = w[0], P.sid = w[2], P.onCreate(), cr.seal(P), C.behaviors.push(P)
                }
                for (C.global = b[9], C.isOnLoaderLayout = b[10], C.effect_types = [], m = 0, y = b[12].length; m < y; m++) C.effect_types.push({
                    id: b[12][m][0],
                    name: b[12][m][1],
                    shaderindex: -1,
                    preservesOpaqueness: !1,
                    active: !0,
                    index: m
                });
                if (C.tile_poly_data = b[13], this.uses_loader_layout && !C.is_family && !C.isOnLoaderLayout && S.is_world || (C.onCreate(), cr.seal(C)), C.name && (this.types[C.name] = C), this.types_by_index.push(C), S.singleglobal) {
                    var k = new S.Instance(C);
                    k.uid = this.next_uid++, k.puid = this.next_puid++, k.iid = 0, k.get_iid = cr.inst_get_iid, k.toString = cr.inst_toString, k.properties = b[14], k.onCreate(), cr.seal(k), C.instances.push(k), this.objectsByUid[k.uid.toString()] = k
                }
            }
            for (g = 0, f = e[4].length; g < f; g++) {
                var R, L = e[4][g],
                    M = this.types_by_index[L[0]];
                for (m = 1, y = L.length; m < y; m++)(R = this.types_by_index[L[m]]).families.push(M), M.members.push(R)
            }
            for (g = 0, f = e[28].length; g < f; g++) {
                var N = e[28][g],
                    F = [];
                for (m = 0, y = N.length; m < y; m++) F.push(this.types_by_index[N[m]]);
                for (m = 0, y = F.length; m < y; m++) F[m].is_contained = !0, F[m].container = F
            }
            if (this.family_count > 0)
                for (g = 0, f = this.types_by_index.length; g < f; g++)
                    if (!(x = this.types_by_index[g]).is_family && x.families.length) {
                        x.family_var_map = new Array(this.family_count), x.family_beh_map = new Array(this.family_count), x.family_fx_map = new Array(this.family_count);
                        var D = [],
                            Q = 0,
                            j = 0,
                            G = 0;
                        for (m = 0, y = x.families.length; m < y; m++)
                            for (B = x.families[m], x.family_var_map[B.family_index] = Q, Q += B.vars_count, x.family_beh_map[B.family_index] = j, j += B.behs_count, x.family_fx_map[B.family_index] = G, G += B.fx_count, _ = 0, v = B.effect_types.length; _ < v; _++) D.push(cr.shallowCopy({}, B.effect_types[_]));
                        for (x.effect_types = D.concat(x.effect_types), m = 0, y = x.effect_types.length; m < y; m++) x.effect_types[m].index = m
                    }
            for (g = 0, f = e[5].length; g < f; g++) {
                b = e[5][g];
                var W = new cr.layout(this, b);
                cr.seal(W), this.layouts[W.name] = W, this.layouts_by_index.push(W)
            }
            for (g = 0, f = e[6].length; g < f; g++) {
                b = e[6][g];
                var Y = new cr.eventsheet(this, b);
                cr.seal(Y), this.eventsheets[Y.name] = Y, this.eventsheets_by_index.push(Y)
            }
            for (g = 0, f = this.eventsheets_by_index.length; g < f; g++) this.eventsheets_by_index[g].postInit();
            for (g = 0, f = this.eventsheets_by_index.length; g < f; g++) this.eventsheets_by_index[g].updateDeepIncludes();
            for (g = 0, f = this.triggers_to_postinit.length; g < f; g++) this.triggers_to_postinit[g].postInit();
            cr.clearArray(this.triggers_to_postinit), this.audio_to_preload = e[7], this.files_subfolder = e[8], this.pixel_rounding = e[9], this.aspect_scale = 1, this.enableWebGL = e[13], this.linearSampling = e[14], this.clearBackground = e[15], this.versionstr = e[16], this.useHighDpi = e[17], this.orientations = e[20], this.autoLockOrientation = this.orientations > 0, this.pauseOnBlur = e[22], this.wantFullscreenScalingQuality = e[23], this.fullscreenScalingQuality = this.wantFullscreenScalingQuality, this.downscalingQuality = e[24], this.preloadSounds = e[25], this.projectName = e[26], this.enableFrontToBack = e[27] && !this.isIE, this.start_time = Date.now(), cr.clearArray(this.objectRefTable), this.initRendererAndLoader()
        };
        var p = !1;
        t.prototype.waitForImageLoad = function(t, e) {
            t.cocoonLazyLoad = !0, t.onerror = function(e) {
                t.c2error = !0, p = !0, console && console.error && console.error("Error loading image '" + t.src + "': ", e)
            }, this.isEjecta ? t.src = e : t.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(e, function(e) {
                t.src = e
            }, function(i) {
                t.c2error = !0, p = !0, console && console.error && console.error("Error extracting image '" + e + "' from expansion file: ", i)
            }) : (t.crossOrigin = "anonymous", this.setImageSrc(t, e))), this.wait_for_textures.push(t)
        }, t.prototype.findWaitingTexture = function(t) {
            var e, i;
            for (e = 0, i = this.wait_for_textures.length; e < i; e++)
                if (this.wait_for_textures[e].cr_src === t) return this.wait_for_textures[e];
            return null
        };
        var d = 0,
            g = !1;
        t.prototype.getready = function() {
            this.audioInstance && (d = this.audioInstance.setPreloadList(this.audio_to_preload))
        }, t.prototype.areAllTexturesAndSoundsLoaded = function() {
            var t, e, i, s = d,
                n = 0,
                r = 0,
                o = !0;
            for (t = 0, e = this.wait_for_textures.length; t < e; t++) {
                var a = (i = this.wait_for_textures[t]).cr_filesize;
                (!a || a <= 0) && (a = 5e4), s += a, i.src && (i.complete || i.loaded) && !i.c2error ? n += a : o = !1
            }
            return o && this.preloadSounds && this.audioInstance && (g || (this.audioInstance.startPreloads(), g = !0), n += r = this.audioInstance.getPreloadedSize(), r < d && (o = !1)), this.progress = 0 == s ? 1 : n / s, o
        };
        var f = !1;
        t.prototype.go = function() {
            if (this.ctx || this.glwrap) {
                var t = this.ctx || this.overlay_ctx;
                this.overlay_canvas && this.positionOverlayCanvas();
                var e = window.innerWidth,
                    i = window.innerHeight;
                this.lastWindowWidth === e && this.lastWindowHeight === i || this.setSize(e, i), this.progress = 0, this.last_progress = -1;
                var s = this;
                if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || f)) this.go_loading_finished();
                else {
                    var n = Date.now() - this.start_time;
                    if (t) {
                        var r = this.width,
                            o = this.height,
                            a = this.devicePixelRatio;
                        if (this.loaderstyle < 3 && (this.isCocoonJs || n >= 500 && this.last_progress != this.progress)) {
                            t.clearRect(0, 0, r, o);
                            var A, h = r / 2,
                                c = o / 2,
                                u = 0 === this.loaderstyle && this.loaderlogos.logo.complete,
                                d = 40 * a,
                                g = 0,
                                m = 80 * a;
                            if (u) {
                                var y = this.loaderlogos.logo;
                                d = (m = y.width * a) / 2, g = (A = y.height * a) / 2, t.drawImage(y, cr.floor(h - d), cr.floor(c - g), m, A)
                            }
                            if (this.loaderstyle <= 1) c += g + (u ? 12 * a : 0), h -= d, h = cr.floor(h) + .5, c = cr.floor(c) + .5, t.fillStyle = p ? "red" : "DodgerBlue", t.fillRect(h, c, Math.floor(m * this.progress), 6 * a), t.strokeStyle = "black", t.strokeRect(h, c, m, 6 * a), t.strokeStyle = "white", t.strokeRect(h - 1 * a, c - 1 * a, m + 2 * a, 8 * a);
                            else if (2 === this.loaderstyle) {
                                t.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial", t.fillStyle = p ? "#f00" : "#999", t.textBaseLine = "middle";
                                var _ = Math.round(100 * this.progress) + "%",
                                    v = t.measureText ? t.measureText(_) : null,
                                    b = v ? v.width : 0;
                                t.fillText(_, h - b / 2, c)
                            }
                            this.last_progress = this.progress
                        } else if (4 === this.loaderstyle) return this.draw_c2_splash_loader(t), void(l ? l(function() {
                            s.go()
                        }) : setTimeout(function() {
                            s.go()
                        }, 16))
                    }
                    setTimeout(function() {
                        s.go()
                    }, this.isCocoonJs ? 10 : 100)
                }
            }
        };
        var m = -1,
            y = "undefined" == typeof cr_is_preview ? 200 : 0,
            _ = !0,
            v = !1,
            b = 0,
            w = 0,
            x = "undefined" == typeof cr_is_preview ? 3e3 : 0,
            B = null,
            T = null,
            S = 0;
        t.prototype.draw_c2_splash_loader = function(t) {
            if (!f) {
                for (var s = Math.ceil(this.width), n = Math.ceil(this.height), r = (this.devicePixelRatio, this.loaderlogos.logo), o = this.loaderlogos.powered, a = this.loaderlogos.website, A = 0; A < 4; ++A)
                    if (!r[A].complete || !o[A].complete || !a[A].complete) return;
                0 === S && (m = Date.now());
                var h, c, l = Date.now(),
                    u = !1,
                    d = t;
                _ || v ? (t.clearRect(0, 0, s, n), e(s, n), d = T, u = !0, _ && 1 === S && (m = Date.now())) : t.globalAlpha = 1, d.fillStyle = "#1c1c1c", d.fillRect(0, 0, s, n), this.cssHeight > 256 ? (c = .25 * (h = cr.clamp(.22 * n, 105, .6 * s)), d.drawImage(i(o, h), .5 * s - h / 2, .2 * n - c / 2, h, c), c = h = Math.min(.395 * n, .95 * s), d.drawImage(i(r, h), .5 * s - h / 2, .485 * n - c / 2, h, c), c = .25 * (h = cr.clamp(.22 * n, 105, .6 * s)), d.drawImage(i(a, h), .5 * s - h / 2, .868 * n - c / 2, h, c), d.fillStyle = "#1c1c1c", h = s, c = Math.max(.005 * n, 2), d.fillRect(0, .8 * n - c / 2, h, c), d.fillStyle = p ? "red" : "#fec800", h = s * this.progress, d.fillRect(.5 * s - h / 2, .8 * n - c / 2, h, c)) : (c = h = .55 * n, d.drawImage(i(r, h), .5 * s - h / 2, .45 * n - c / 2, h, c), d.fillStyle = "#1c1c1c", h = s, c = Math.max(.005 * n, 2), d.fillRect(0, .85 * n - c / 2, h, c), d.fillStyle = p ? "red" : "#fec800", h = s * this.progress, d.fillRect(.5 * s - h / 2, .85 * n - c / 2, h, c)), u && (_ ? t.globalAlpha = 0 === S ? 0 : Math.min((l - m) / 300, 1) : v && (t.globalAlpha = Math.max(1 - (l - w) / 300, 0)), t.drawImage(B, 0, 0, s, n)), _ && l - m >= 300 && S >= 2 && (_ = !1, b = l), !_ && l - b >= x && !v && this.progress >= 1 && (v = !0, w = l), (v && l - w >= 300 + y || "undefined" != typeof cr_is_preview && this.progress >= 1 && Date.now() - m < 500) && (f = !0, _ = !1, v = !1, B = null, T = null, this.loaderlogos = null), ++S
            }
        }, t.prototype.go_loading_finished = function() {
            this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas), this.overlay_ctx = null, this.overlay_canvas = null), this.start_time = Date.now(), this.last_fps_time = cr.performance_now();
            var t, e, i;
            if (this.uses_loader_layout)
                for (t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(), cr.seal(i));
            else this.isloading = !1;
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) this.layouts_by_index[t].createGlobalNonWorlds();
            if (this.fullscreen_mode >= 2) {
                var s = this.original_width / this.original_height,
                    n = this.width / this.height;
                2 !== this.fullscreen_mode && n > s || 2 === this.fullscreen_mode && n < s ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width
            }
            for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(), this.uses_loader_layout || (this.loadingprogress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW()), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onAppBegin && i.onAppBegin();
            document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1), this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
        }, t.prototype.tick = function(t, e, i) {
            if (this.running_layout) {
                var s = cr.performance_now(),
                    n = s;
                if (i || !this.isSuspended || t) {
                    t || (l ? this.raf_id = l(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                    var r = e || s,
                        o = this.fullscreen_mode,
                        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova;
                    if ((a || this.isNodeFullscreen) && this.fullscreen_scaling > 0 && (o = this.fullscreen_scaling), o > 0) {
                        var A = window.innerWidth,
                            h = window.innerHeight;
                        this.lastWindowWidth === A && this.lastWindowHeight === h || this.setSize(A, h)
                    }
                    if (this.isDomFree || (a ? (this.firstInFullscreen || (this.fullscreenOldMarginCss = jQuery(this.canvas).css("margin") || "0", this.firstInFullscreen = !0), this.isChrome || this.isNWjs || jQuery(this.canvas).css({
                        "margin-left": Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                        "margin-top": Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                    })) : this.firstInFullscreen ? (this.isChrome || this.isNWjs || jQuery(this.canvas).css("margin", this.fullscreenOldMarginCss), this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, 0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width, this.oldHeight = this.height)), this.isloading) {
                        var c = this.areAllTexturesAndSoundsLoaded();
                        this.loadingprogress = this.progress, c && (this.isloading = !1, this.progress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW())
                    }
                    this.logic(r), !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || t || (this.redraw = !1, this.glwrap ? this.drawGL() : this.draw(), this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData), this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)), this.snapshotCanvas = null)), this.hit_breakpoint || (this.tickcount++, this.execcount++, this.framecount++), this.logictime += cr.performance_now() - n
                }
            }
        }, t.prototype.logic = function(t) {
            var e, i, s, n, r, o, a, A, h;
            t - this.last_fps_time >= 1e3 && (this.last_fps_time += 1e3, t - this.last_fps_time >= 1e3 && (this.last_fps_time = t), this.fps = this.framecount, this.framecount = 0, this.cpuutilisation = this.logictime, this.logictime = 0);
            var c = 0;
            if (0 !== this.last_tick_time) {
                var l = t - this.last_tick_time;
                l < 0 && (l = 0), c = l / 1e3, this.dt1 = c, this.dt1 > .5 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)
            }
            this.last_tick_time = t, this.dt = this.dt1 * this.timescale, this.kahanTime.add(this.dt), this.wallTime.add(c);
            var u = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
            if (this.fullscreen_mode >= 2 || u && this.fullscreen_scaling > 0) {
                var p = this.original_width / this.original_height,
                    d = this.width / this.height,
                    g = this.fullscreen_mode;
                u && this.fullscreen_scaling > 0 && (g = this.fullscreen_scaling), this.aspect_scale = 2 !== g && d > p || 2 === g && d < p ? this.height / this.original_height : this.width / this.original_width, this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX), this.running_layout.scrollToY(this.running_layout.scrollY))
            } else this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
            this.ClearDeathRow(), this.isInOnDestroy++, this.system.runWaits(), this.isInOnDestroy--, this.ClearDeathRow(), this.isInOnDestroy++;
            var f = this.objects_to_pretick.valuesRef();
            for (e = 0, i = f.length; e < i; e++) f[e].pretick();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                    for (s = 0, n = a.instances.length; s < n; s++)
                        for (r = 0, o = (A = a.instances[s]).behavior_insts.length; r < o; r++) A.behavior_insts[r].tick();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                    for (s = 0, n = a.instances.length; s < n; s++)
                        for (r = 0, o = (A = a.instances[s]).behavior_insts.length; r < o; r++)(h = A.behavior_insts[r]).posttick && h.posttick();
            for (e = 0, i = (f = this.objects_to_tick.valuesRef()).length; e < i; e++) f[e].tick();
            for (this.isInOnDestroy--, this.handleSaveLoad(), e = 0; this.changelayout && e++ < 10;) this.doChangeLayout(this.changelayout);
            for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].hasRun = !1;
            for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(), cr.clearArray(this.registered_collisions), this.layout_first_tick = !1, this.isInOnDestroy++, e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(a = this.types_by_index[e]).is_family && (a.behaviors.length || a.families.length))
                    for (s = 0, n = a.instances.length; s < n; s++)
                        for (r = 0, o = (A = a.instances[s]).behavior_insts.length; r < o; r++)(h = A.behavior_insts[r]).tick2 && h.tick2();
            for (e = 0, i = (f = this.objects_to_tick2.valuesRef()).length; e < i; e++) f[e].tick2();
            this.isInOnDestroy--
        }, t.prototype.onWindowBlur = function() {
            var t, e, i, s, n, r, o, a, A;
            for (t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(o = this.types_by_index[t]).is_family)
                    for (i = 0, s = o.instances.length; i < s; i++)
                        if ((a = o.instances[i]).onWindowBlur && a.onWindowBlur(), a.behavior_insts)
                            for (n = 0, r = a.behavior_insts.length; n < r; n++)(A = a.behavior_insts[n]).onWindowBlur && A.onWindowBlur()
        }, t.prototype.doChangeLayout = function(t) {
            var e = this.running_layout;
            this.running_layout.stopRunning();
            var i, s, n;
            if (this.glwrap)
                for (i = 0, s = this.types_by_index.length; i < s; i++)(n = this.types_by_index[i]).is_family || !n.unloadTextures || n.global && 0 !== n.instances.length || -1 !== t.initial_types.indexOf(n) || n.unloadTextures();
            e == t && cr.clearArray(this.system.waits), cr.clearArray(this.registered_collisions), this.runLayoutChangeMethods(!0), t.startRunning(), this.runLayoutChangeMethods(!1), this.redraw = !0, this.layout_first_tick = !0, this.ClearDeathRow()
        }, t.prototype.runLayoutChangeMethods = function(t) {
            var e, i, s, n, r, o, a, A, h, c;
            for (e = 0, i = this.behaviors.length; e < i; e++) s = this.behaviors[e], t ? s.onBeforeLayoutChange && s.onBeforeLayoutChange() : s.onLayoutChange && s.onLayoutChange();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if ((n = this.types_by_index[e]).global || n.plugin.singleglobal)
                    for (r = 0, o = n.instances.length; r < o; r++)
                        if (a = n.instances[r], t ? a.onBeforeLayoutChange && a.onBeforeLayoutChange() : a.onLayoutChange && a.onLayoutChange(), a.behavior_insts)
                            for (A = 0, h = a.behavior_insts.length; A < h; A++) c = a.behavior_insts[A], t ? c.onBeforeLayoutChange && c.onBeforeLayoutChange() : c.onLayoutChange && c.onLayoutChange()
        }, t.prototype.pretickMe = function(t) {
            this.objects_to_pretick.add(t)
        }, t.prototype.unpretickMe = function(t) {
            this.objects_to_pretick.remove(t)
        }, t.prototype.tickMe = function(t) {
            this.objects_to_tick.add(t)
        }, t.prototype.untickMe = function(t) {
            this.objects_to_tick.remove(t)
        }, t.prototype.tick2Me = function(t) {
            this.objects_to_tick2.add(t)
        }, t.prototype.untick2Me = function(t) {
            this.objects_to_tick2.remove(t)
        }, t.prototype.getDt = function(t) {
            return t && -1 !== t.my_timescale ? this.dt1 * t.my_timescale : this.dt
        }, t.prototype.draw = function() {
            this.running_layout.draw(this.ctx), this.isDirectCanvas && this.ctx.present()
        }, t.prototype.drawGL = function() {
            this.enableFrontToBack && (this.earlyz_index = 1, this.running_layout.drawGL_earlyZPass(this.glwrap)), this.running_layout.drawGL(this.glwrap), this.glwrap.present()
        }, t.prototype.addDestroyCallback = function(t) {
            t && this.destroycallbacks.push(t)
        }, t.prototype.removeDestroyCallback = function(t) {
            cr.arrayFindRemove(this.destroycallbacks, t)
        }, t.prototype.getObjectByUID = function(t) {
            var e = t.toString();
            return this.objectsByUid.hasOwnProperty(e) ? this.objectsByUid[e] : null
        };
        var E = [];
        t.prototype.DestroyInstance = function(t) {
            var e, i, n = t.type.name,
                r = null;
            if (this.deathRow.hasOwnProperty(n)) {
                if ((r = this.deathRow[n]).contains(t)) return
            } else r = s(), this.deathRow[n] = r; if (r.add(t), this.hasPendingInstances = !0, t.is_contained)
                for (e = 0, i = t.siblings.length; e < i; e++) this.DestroyInstance(t.siblings[e]);
            this.isInClearDeathRow && r.values_cache.push(t), this.isEndingLayout || (this.isInOnDestroy++, this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t), this.isInOnDestroy--)
        }, t.prototype.ClearDeathRow = function() {
            if (this.hasPendingInstances) {
                var t, e, i, s, n, r;
                for (this.isInClearDeathRow = !0, i = 0, n = this.createRow.length; i < n; ++i)
                    for ((e = (t = this.createRow[i]).type).instances.push(t), s = 0, r = e.families.length; s < r; ++s) e.families[s].instances.push(t), e.families[s].stale_iids = !0;
                cr.clearArray(this.createRow), this.IterateDeathRow(), cr.wipe(this.deathRow), this.isInClearDeathRow = !1, this.hasPendingInstances = !1
            }
        }, t.prototype.IterateDeathRow = function() {
            for (var t in this.deathRow) this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
        }, t.prototype.ClearDeathRowForType = function(t) {
            var e, i, s, r, o, a, A, h, c = t.valuesRef(),
                l = c[0].type;
            for (cr.arrayRemoveAllFromObjectSet(l.instances, t), l.stale_iids = !0, 0 === l.instances.length && (l.any_instance_parallaxed = !1), e = 0, i = l.families.length; e < i; ++e) a = l.families[e], cr.arrayRemoveAllFromObjectSet(a.instances, t), a.stale_iids = !0;
            for (e = 0, i = this.system.waits.length; e < i; ++e)
                if ((o = this.system.waits[e]).sols.hasOwnProperty(l.index) && cr.arrayRemoveAllFromObjectSet(o.sols[l.index].insts, t), !l.is_family)
                    for (s = 0, r = l.families.length; s < r; ++s) a = l.families[s], o.sols.hasOwnProperty(a.index) && cr.arrayRemoveAllFromObjectSet(o.sols[a.index].insts, t);
            var u = c[0].layer;
            if (u) {
                if (u.useRenderCells)
                    for (e = 0, i = (A = u.instances).length; e < i; ++e) h = A[e], t.contains(h) && (h.update_bbox(), u.render_grid.update(h, h.rendercells, null), h.rendercells.set(0, 0, -1, -1));
                cr.arrayRemoveAllFromObjectSet(u.instances, t), u.setZIndicesStaleFrom(0)
            }
            for (e = 0; e < c.length; ++e) this.ClearDeathRowForSingleInstance(c[e], l);
            n(t), this.redraw = !0
        }, t.prototype.ClearDeathRowForSingleInstance = function(t, e) {
            var i, s, n;
            for (i = 0, s = this.destroycallbacks.length; i < s; ++i) this.destroycallbacks[i](t);
            t.collcells && e.collision_grid.update(t, t.collcells, null);
            var r = t.layer;
            if (r && r.removeFromInstanceList(t, !0), t.behavior_insts)
                for (i = 0, s = t.behavior_insts.length; i < s; ++i)(n = t.behavior_insts[i]).onDestroy && n.onDestroy(), n.behavior.my_instances.remove(t);
            this.objects_to_pretick.remove(t), this.objects_to_tick.remove(t), this.objects_to_tick2.remove(t), t.onDestroy && t.onDestroy(), this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()], this.objectcount--, e.deadCache.length < 100 && e.deadCache.push(t)
        }, t.prototype.createInstance = function(t, e, i, s) {
            if (t.is_family) {
                var n = cr.floor(Math.random() * t.members.length);
                return this.createInstance(t.members[n], e, i, s)
            }
            return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, s, !1) : null
        };
        var C = [];
        t.prototype.createInstanceFromInit = function(t, e, i, s, n, r) {
            var o, a, A, h, c;
            if (!t) return null;
            var l = this.types_by_index[t[1]],
                u = l.plugin.is_world;
            if (this.isloading && u && !l.isOnLoaderLayout) return null;
            if (u && !this.glwrap && 11 === t[0][11]) return null;
            var p = e;
            u || (e = null);
            var d;
            for (l.deadCache.length ? ((d = l.deadCache.pop()).recycled = !0, l.plugin.Instance.call(d, l)) : (d = new l.plugin.Instance(l)).recycled = !1, !i || r || this.objectsByUid.hasOwnProperty(t[2].toString()) ? d.uid = this.next_uid++ : d.uid = t[2], this.objectsByUid[d.uid.toString()] = d, d.puid = this.next_puid++, d.iid = l.instances.length, o = 0, a = this.createRow.length; o < a; ++o) this.createRow[o].type === l && d.iid++;
            d.get_iid = cr.inst_get_iid, d.toString = cr.inst_toString;
            var g = t[3];
            if (d.recycled) cr.wipe(d.extra);
            else {
                if (d.extra = {}, "undefined" != typeof cr_is_preview)
                    for (d.instance_var_names = [], d.instance_var_names.length = g.length, o = 0, a = g.length; o < a; o++) d.instance_var_names[o] = g[o][1];
                d.instance_vars = [], d.instance_vars.length = g.length
            }
            for (o = 0, a = g.length; o < a; o++) d.instance_vars[o] = g[o][0];
            if (u) {
                var f = t[0];
                if (d.x = cr.is_undefined(s) ? f[0] : s, d.y = cr.is_undefined(n) ? f[1] : n, d.z = f[2], d.width = f[3], d.height = f[4], d.depth = f[5], d.angle = f[6], d.opacity = f[7], d.hotspotX = f[8], d.hotspotY = f[9], d.blend_mode = f[10], c = f[11], !this.glwrap && l.effect_types.length && (d.blend_mode = c), d.compositeOp = cr.effectToCompositeOp(d.blend_mode), this.gl && cr.setGLBlend(d, d.blend_mode, this.gl), d.recycled) {
                    for (o = 0, a = f[12].length; o < a; o++)
                        for (A = 0, h = f[12][o].length; A < h; A++) d.effect_params[o][A] = f[12][o][A];
                    d.bbox.set(0, 0, 0, 0), d.collcells.set(0, 0, -1, -1), d.rendercells.set(0, 0, -1, -1), d.bquad.set_from_rect(d.bbox), cr.clearArray(d.bbox_changed_callbacks)
                } else {
                    for (d.effect_params = f[12].slice(0), o = 0, a = d.effect_params.length; o < a; o++) d.effect_params[o] = f[12][o].slice(0);
                    d.active_effect_types = [], d.active_effect_flags = [], d.active_effect_flags.length = l.effect_types.length, d.bbox = new cr.rect(0, 0, 0, 0), d.collcells = new cr.rect(0, 0, -1, -1), d.rendercells = new cr.rect(0, 0, -1, -1), d.bquad = new cr.quad, d.bbox_changed_callbacks = [], d.set_bbox_changed = cr.set_bbox_changed, d.add_bbox_changed_callback = cr.add_bbox_changed_callback, d.contains_pt = cr.inst_contains_pt, d.update_bbox = cr.update_bbox, d.update_render_cell = cr.update_render_cell, d.update_collision_cell = cr.update_collision_cell, d.get_zindex = cr.inst_get_zindex
                }
                for (d.tilemap_exists = !1, d.tilemap_width = 0, d.tilemap_height = 0, d.tilemap_data = null, 14 === f.length && (d.tilemap_exists = !0, d.tilemap_width = f[13][0], d.tilemap_height = f[13][1], d.tilemap_data = f[13][2]), o = 0, a = l.effect_types.length; o < a; o++) d.active_effect_flags[o] = !0;
                d.shaders_preserve_opaqueness = !0, d.updateActiveEffects = cr.inst_updateActiveEffects, d.updateActiveEffects(), d.uses_shaders = !!d.active_effect_types.length, d.bbox_changed = !0, d.cell_changed = !0, l.any_cell_changed = !0, d.visible = !0, d.my_timescale = -1, d.layer = e, d.zindex = e.instances.length, d.earlyz_index = 0, void 0 === d.collision_poly && (d.collision_poly = null), d.collisionsEnabled = !0, this.redraw = !0
            }
            var m, y;
            for (cr.clearArray(C), o = 0, a = l.families.length; o < a; o++) C.push.apply(C, l.families[o].behaviors);
            if (C.push.apply(C, l.behaviors), d.recycled)
                for (o = 0, a = C.length; o < a; o++) {
                    var _ = C[o];
                    for ((y = d.behavior_insts[o]).recycled = !0, _.behavior.Instance.call(y, _, d), A = 0, h = (m = t[4][o]).length; A < h; A++) y.properties[A] = m[A];
                    y.onCreate(), _.behavior.my_instances.add(d)
                } else
                    for (d.behavior_insts = [], o = 0, a = C.length; o < a; o++)(y = new(_ = C[o]).behavior.Instance(_, d)).recycled = !1, y.properties = t[4][o].slice(0), y.onCreate(), cr.seal(y), d.behavior_insts.push(y), _.behavior.my_instances.add(d);
            if (m = t[5], d.recycled)
                for (o = 0, a = m.length; o < a; o++) d.properties[o] = m[o];
            else d.properties = m.slice(0); if (this.createRow.push(d), this.hasPendingInstances = !0, e && (e.appendToInstanceList(d, !0), 1 === e.parallaxX && 1 === e.parallaxY || (l.any_instance_parallaxed = !0)), this.objectcount++, l.is_contained) {
                if (d.is_contained = !0, d.recycled ? cr.clearArray(d.siblings) : d.siblings = [], !i && !r) {
                    for (o = 0, a = l.container.length; o < a; o++)
                        if (l.container[o] !== l) {
                            if (!l.container[o].default_instance) return null;
                            d.siblings.push(this.createInstanceFromInit(l.container[o].default_instance, p, !1, u ? d.x : s, u ? d.y : n, !0))
                        }
                    for (o = 0, a = d.siblings.length; o < a; o++)
                        for (d.siblings[o].siblings.push(d), A = 0; A < a; A++) o !== A && d.siblings[o].siblings.push(d.siblings[A])
                }
            } else d.is_contained = !1, d.siblings = null;
            for (d.onCreate(), d.recycled || cr.seal(d), o = 0, a = d.behavior_insts.length; o < a; o++) d.behavior_insts[o].postCreate && d.behavior_insts[o].postCreate();
            return d
        }, t.prototype.getLayerByName = function(t) {
            var e, i;
            for (e = 0, i = this.running_layout.layers.length; e < i; e++) {
                var s = this.running_layout.layers[e];
                if (cr.equals_nocase(s.name, t)) return s
            }
            return null
        }, t.prototype.getLayerByNumber = function(t) {
            return (t = cr.floor(t)) < 0 && (t = 0), t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1), this.running_layout.layers[t]
        }, t.prototype.getLayer = function(t) {
            return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
        }, t.prototype.clearSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].getCurrentSol().select_all = !0
        }, t.prototype.pushCleanSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].pushCleanSol()
        }, t.prototype.pushCopySol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].pushCopySol()
        }, t.prototype.popSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].popSol()
        }, t.prototype.updateAllCells = function(t) {
            if (t.any_cell_changed) {
                var e, i, s = t.instances;
                for (e = 0, i = s.length; e < i; ++e) s[e].update_collision_cell();
                var n = this.createRow;
                for (e = 0, i = n.length; e < i; ++e) n[e].type === t && n[e].update_collision_cell();
                t.any_cell_changed = !1
            }
        }, t.prototype.getCollisionCandidates = function(t, e, i, s) {
            var n, r, o, a = !!t && (1 !== t.parallaxX || 1 !== t.parallaxY);
            if (e.is_family)
                for (n = 0, r = e.members.length; n < r; ++n) o = e.members[n], a || o.any_instance_parallaxed ? cr.appendArray(s, o.instances) : (this.updateAllCells(o), o.collision_grid.queryRange(i, s));
            else a || e.any_instance_parallaxed ? cr.appendArray(s, e.instances) : (this.updateAllCells(e), e.collision_grid.queryRange(i, s))
        }, t.prototype.getTypesCollisionCandidates = function(t, e, i, s) {
            var n, r;
            for (n = 0, r = e.length; n < r; ++n) this.getCollisionCandidates(t, e[n], i, s)
        }, t.prototype.getSolidCollisionCandidates = function(t, e, i) {
            var s = this.getSolidBehavior();
            if (!s) return null;
            this.getTypesCollisionCandidates(t, s.my_types, e, i)
        }, t.prototype.getJumpthruCollisionCandidates = function(t, e, i) {
            var s = this.getJumpthruBehavior();
            if (!s) return null;
            this.getTypesCollisionCandidates(t, s.my_types, e, i)
        }, t.prototype.testAndSelectCanvasPointOverlap = function(t, e, i, s) {
            var n, r, o, a, A, h, c, l = t.getCurrentSol(),
                u = this.getCurrentEventStack().current_event.orblock;
            if (l.select_all)
                for (s || (l.select_all = !1, cr.clearArray(l.instances)), n = 0, a = t.instances.length; n < a; n++)
                    if ((o = t.instances[n]).update_bbox(), A = o.layer.canvasToLayer(e, i, !0), h = o.layer.canvasToLayer(e, i, !1), o.contains_pt(A, h)) {
                        if (s) return !1;
                        l.instances.push(o)
                    } else u && l.else_instances.push(o);
            else {
                for (r = 0, n = 0, a = (c = u ? l.else_instances : l.instances).length; n < a; n++)
                    if ((o = c[n]).update_bbox(), A = o.layer.canvasToLayer(e, i, !0), h = o.layer.canvasToLayer(e, i, !1), o.contains_pt(A, h)) {
                        if (s) return !1;
                        u ? l.instances.push(o) : (l.instances[r] = l.instances[n], r++)
                    }
                s || (c.length = r)
            }
            return t.applySolToContainer(), !!s || l.hasObjects()
        }, t.prototype.testOverlap = function(t, e) {
            if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled)) return !1;
            t.update_bbox(), e.update_bbox();
            var i, s, n, r, o, a, A, h, c, l, u = t.layer,
                p = e.layer;
            if (u !== p && (u.parallaxX !== p.parallaxX || p.parallaxY !== p.parallaxY || u.scale !== p.scale || u.angle !== p.angle || u.zoomRate !== p.zoomRate)) {
                for (A = t.collision_poly && !t.collision_poly.is_empty(), h = e.collision_poly && !e.collision_poly.is_empty(), A ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), c = this.temp_poly, h ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), l = this.temp_poly2, i = 0, s = c.pts_count; i < s; i++) r = (n = 2 * i) + 1, o = c.pts_cache[n], a = c.pts_cache[r], c.pts_cache[n] = u.layerToCanvas(o + t.x, a + t.y, !0), c.pts_cache[r] = u.layerToCanvas(o + t.x, a + t.y, !1);
                for (c.update_bbox(), i = 0, s = l.pts_count; i < s; i++) r = (n = 2 * i) + 1, o = l.pts_cache[n], a = l.pts_cache[r], l.pts_cache[n] = p.layerToCanvas(o + e.x, a + e.y, !0), l.pts_cache[r] = p.layerToCanvas(o + e.x, a + e.y, !1);
                return l.update_bbox(), c.intersects_poly(l, 0, 0)
            }
            return !!t.bbox.intersects_rect(e.bbox) && (!!t.bquad.intersects_quad(e.bquad) && ((!t.tilemap_exists || !e.tilemap_exists) && (t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (A = t.collision_poly && !t.collision_poly.is_empty(), h = e.collision_poly && !e.collision_poly.is_empty(), !A && !h || (A ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), c = t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), c = this.temp_poly), h ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), l = e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), l = this.temp_poly), c.intersects_poly(l, e.x - t.x, e.y - t.y))))))
        };
        var O = new cr.quad,
            I = new cr.rect(0, 0, 0, 0),
            P = [];
        t.prototype.testTilemapOverlap = function(t, e) {
            var i, s, n, r, o = e.bbox,
                a = t.x,
                A = t.y;
            t.getCollisionRectCandidates(o, P);
            var h = P,
                c = e.collision_poly && !e.collision_poly.is_empty();
            for (i = 0, s = h.length; i < s; ++i)
                if (n = h[i], r = n.rc, o.intersects_rect_off(r, a, A) && (O.set_from_rect(r), O.offset(a, A), O.intersects_quad(e.bquad)))
                    if (c) {
                        if (e.collision_poly.cache_poly(e.width, e.height, e.angle), n.poly) {
                            if (n.poly.intersects_poly(e.collision_poly, e.x - (a + r.left), e.y - (A + r.top))) return cr.clearArray(P), !0
                        } else if (this.temp_poly.set_from_quad(O, 0, 0, r.right - r.left, r.bottom - r.top), this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y)) return cr.clearArray(P), !0
                    } else {
                        if (!n.poly) return cr.clearArray(P), !0;
                        if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height), n.poly.intersects_poly(this.temp_poly, -(a + r.left), -(A + r.top))) return cr.clearArray(P), !0
                    }
            return cr.clearArray(P), !1
        }, t.prototype.testRectOverlap = function(t, e) {
            if (!e || !e.collisionsEnabled) return !1;
            e.update_bbox();
            e.layer;
            if (!e.bbox.intersects_rect(t)) return !1;
            if (e.tilemap_exists) {
                e.getCollisionRectCandidates(t, P);
                var i, s, n, r, o = P,
                    a = e.x,
                    A = e.y;
                for (i = 0, s = o.length; i < s; ++i)
                    if (n = o[i], r = n.rc, t.intersects_rect_off(r, a, A)) {
                        if (!n.poly) return cr.clearArray(P), !0;
                        if (this.temp_poly.set_from_rect(t, 0, 0), n.poly.intersects_poly(this.temp_poly, -(a + r.left), -(A + r.top))) return cr.clearArray(P), !0
                    }
                return cr.clearArray(P), !1
            }
            return O.set_from_rect(t), !!e.bquad.intersects_quad(O) && (!(e.collision_poly && !e.collision_poly.is_empty()) || (e.collision_poly.cache_poly(e.width, e.height, e.angle), O.offset(-t.left, -t.top), this.temp_poly.set_from_quad(O, 0, 0, 1, 1), e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)))
        }, t.prototype.testSegmentOverlap = function(t, e, i, s, n) {
            if (!n || !n.collisionsEnabled) return !1;
            n.update_bbox();
            n.layer;
            if (I.set(cr.min(t, i), cr.min(e, s), cr.max(t, i), cr.max(e, s)), !n.bbox.intersects_rect(I)) return !1;
            if (n.tilemap_exists) {
                n.getCollisionRectCandidates(I, P);
                var r, o, a, A, h = P,
                    c = n.x,
                    l = n.y;
                for (r = 0, o = h.length; r < o; ++r)
                    if (a = h[r], A = a.rc, I.intersects_rect_off(A, c, l) && (O.set_from_rect(A), O.offset(c, l), O.intersects_segment(t, e, i, s))) {
                        if (!a.poly) return cr.clearArray(P), !0;
                        if (a.poly.intersects_segment(c + A.left, l + A.top, t, e, i, s)) return cr.clearArray(P), !0
                    }
                return cr.clearArray(P), !1
            }
            return !!n.bquad.intersects_segment(t, e, i, s) && (!(n.collision_poly && !n.collision_poly.is_empty()) || (n.collision_poly.cache_poly(n.width, n.height, n.angle), n.collision_poly.intersects_segment(n.x, n.y, t, e, i, s)))
        }, t.prototype.typeHasBehavior = function(t, e) {
            if (!e) return !1;
            var i, s, n, r, o;
            for (i = 0, s = t.behaviors.length; i < s; i++)
                if (t.behaviors[i].behavior instanceof e) return !0;
            if (!t.is_family)
                for (i = 0, s = t.families.length; i < s; i++)
                    for (n = 0, r = (o = t.families[i]).behaviors.length; n < r; n++)
                        if (o.behaviors[n].behavior instanceof e) return !0;
            return !1
        }, t.prototype.typeHasNoSaveBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.NoSave)
        }, t.prototype.typeHasPersistBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.Persist)
        }, t.prototype.getSolidBehavior = function() {
            return this.solidBehavior
        }, t.prototype.getJumpthruBehavior = function() {
            return this.jumpthruBehavior
        };
        var k = [];
        t.prototype.testOverlapSolid = function(t) {
            var e, i, s;
            for (t.update_bbox(), this.getSolidCollisionCandidates(t.layer, t.bbox, k), e = 0, i = k.length; e < i; ++e)
                if ((s = k[e]).extra.solidEnabled && this.testOverlap(t, s)) return cr.clearArray(k), s;
            return cr.clearArray(k), null
        }, t.prototype.testRectOverlapSolid = function(t) {
            var e, i, s;
            for (this.getSolidCollisionCandidates(null, t, k), e = 0, i = k.length; e < i; ++e)
                if ((s = k[e]).extra.solidEnabled && this.testRectOverlap(t, s)) return cr.clearArray(k), s;
            return cr.clearArray(k), null
        };
        var R = [];
        t.prototype.testOverlapJumpThru = function(t, e) {
            var i = null;
            e && (i = R, cr.clearArray(i)), t.update_bbox(), this.getJumpthruCollisionCandidates(t.layer, t.bbox, k);
            var s, n, r;
            for (s = 0, n = k.length; s < n; ++s)
                if ((r = k[s]).extra.jumpthruEnabled && this.testOverlap(t, r)) {
                    if (!e) return cr.clearArray(k), r;
                    i.push(r)
                }
            return cr.clearArray(k), i
        }, t.prototype.pushOutSolid = function(t, e, i, s, n, r) {
            var o, a = s || 50,
                A = t.x,
                h = t.y,
                c = null,
                l = null;
            for (o = 0; o < a; o++)
                if (t.x = A + e * o, t.y = h + i * o, t.set_bbox_changed(), !this.testOverlap(t, c) && ((c = this.testOverlapSolid(t)) && (l = c), !c && (n && (c = r ? this.testOverlap(t, r) ? r : null : this.testOverlapJumpThru(t)) && (l = c), !c))) return l && this.pushInFractional(t, e, i, l, 16), !0;
            return t.x = A, t.y = h, t.set_bbox_changed(), !1
        }, t.prototype.pushOut = function(t, e, i, s, n) {
            var r, o = s || 50,
                a = t.x,
                A = t.y;
            for (r = 0; r < o; r++)
                if (t.x = a + e * r, t.y = A + i * r, t.set_bbox_changed(), !this.testOverlap(t, n)) return !0;
            return t.x = a, t.y = A, t.set_bbox_changed(), !1
        }, t.prototype.pushInFractional = function(t, e, i, s, n) {
            for (var r, o = 2, a = !1, A = !1, h = t.x, c = t.y; o <= n;) r = 1 / o, o *= 2, t.x += e * r * (a ? 1 : -1), t.y += i * r * (a ? 1 : -1), t.set_bbox_changed(), this.testOverlap(t, s) ? (a = !0, A = !0) : (a = !1, A = !1, h = t.x, c = t.y);
            A && (t.x = h, t.y = c, t.set_bbox_changed())
        }, t.prototype.pushOutSolidNearest = function(t, e) {
            var i = cr.is_undefined(e) ? 100 : e,
                s = 0,
                n = t.x,
                r = t.y,
                o = 0,
                a = 0,
                A = 0,
                h = this.testOverlapSolid(t);
            if (!h) return !0;
            for (; s <= i;) {
                switch (o) {
                    case 0:
                        a = 0, A = -1, s++;
                        break;
                    case 1:
                        a = 1, A = -1;
                        break;
                    case 2:
                        a = 1, A = 0;
                        break;
                    case 3:
                        a = 1, A = 1;
                        break;
                    case 4:
                        a = 0, A = 1;
                        break;
                    case 5:
                        a = -1, A = 1;
                        break;
                    case 6:
                        a = -1, A = 0;
                        break;
                    case 7:
                        a = -1, A = -1
                }
                if (o = (o + 1) % 8, t.x = cr.floor(n + a * s), t.y = cr.floor(r + A * s), t.set_bbox_changed(), !this.testOverlap(t, h) && !(h = this.testOverlapSolid(t))) return !0
            }
            return t.x = n, t.y = r, t.set_bbox_changed(), !1
        }, t.prototype.registerCollision = function(t, e) {
            t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
        }, t.prototype.checkRegisteredCollision = function(t, e) {
            var i, s, n;
            for (i = 0, s = this.registered_collisions.length; i < s; i++)
                if ((n = this.registered_collisions[i])[0] == t && n[1] == e || n[0] == e && n[1] == t) return !0;
            return !1
        }, t.prototype.calculateSolidBounceAngle = function(t, e, i, s) {
            var n = t.x,
                r = t.y,
                o = cr.max(10, cr.distanceTo(e, i, n, r)),
                a = cr.angleTo(e, i, n, r),
                A = s || this.testOverlapSolid(t);
            if (!A) return cr.clamp_angle(a + cr.PI);
            var h, c, l, u, p = A,
                d = cr.to_radians(5);
            for (h = 1; h < 36; h++)
                if (c = a - h * d, t.x = e + Math.cos(c) * o, t.y = i + Math.sin(c) * o, t.set_bbox_changed(), !this.testOverlap(t, p) && !(p = s ? null : this.testOverlapSolid(t))) {
                    l = c;
                    break
                }
            36 === h && (l = cr.clamp_angle(a + cr.PI));
            p = A;
            for (h = 1; h < 36; h++)
                if (c = a + h * d, t.x = e + Math.cos(c) * o, t.y = i + Math.sin(c) * o, t.set_bbox_changed(), !this.testOverlap(t, p) && !(p = s ? null : this.testOverlapSolid(t))) {
                    u = c;
                    break
                }
            if (36 === h && (u = cr.clamp_angle(a + cr.PI)), t.x = n, t.y = r, t.set_bbox_changed(), u === l) return u;
            var g, f = cr.angleDiff(u, l) / 2;
            g = cr.angleClockwise(u, l) ? cr.clamp_angle(l + f + cr.PI) : cr.clamp_angle(u + f);
            var m = Math.cos(a),
                y = Math.sin(a),
                _ = Math.cos(g),
                v = Math.sin(g),
                b = m * _ + y * v,
                w = m - 2 * b * _,
                x = y - 2 * b * v;
            return cr.angleTo(0, 0, w, x)
        };
        var L = -1;
        t.prototype.trigger = function(t, e, i) {
            if (!this.running_layout) return !1;
            var s = this.running_layout.event_sheet;
            if (!s) return !1;
            var n, r, o, a = !1;
            L++;
            var A = s.deep_includes;
            for (r = 0, o = A.length; r < o; ++r) n = this.triggerOnSheet(t, e, A[r], i), a = a || n;
            return n = this.triggerOnSheet(t, e, s, i), a = a || n, L--, a
        }, t.prototype.triggerOnSheet = function(t, e, i, s) {
            var n, r, o, a, A = !1;
            if (e)
                for (o = this.triggerOnSheetForTypeName(t, e, e.type.name, i, s), A = A || o, n = 0, r = (a = e.type.families).length; n < r; ++n) o = this.triggerOnSheetForTypeName(t, e, a[n].name, i, s), A = A || o;
            else o = this.triggerOnSheetForTypeName(t, e, "system", i, s), A = A || o;
            return A
        }, t.prototype.triggerOnSheetForTypeName = function(t, e, i, s, n) {
            var r, o, a, A, h = !1,
                c = !1,
                l = void 0 !== n,
                u = (l ? s.fasttriggers : s.triggers)[i];
            if (!u) return h;
            var p = null;
            for (r = 0, o = u.length; r < o; ++r)
                if (u[r].method == t) {
                    p = u[r].evs;
                    break
                }
            if (!p) return h;
            var d;
            if (!(d = l ? p[n] : p)) return null;
            for (r = 0, o = d.length; r < o; r++) a = d[r][0], A = d[r][1], c = this.executeSingleTrigger(e, i, a, A), h = h || c;
            return h
        }, t.prototype.executeSingleTrigger = function(t, e, i, s) {
            var n, r, o = !1;
            this.trigger_depth++;
            var a = this.getCurrentEventStack().current_event;
            a && this.pushCleanSol(a.solModifiersIncludingParents);
            var A = this.trigger_depth > 1;
            this.pushCleanSol(i.solModifiersIncludingParents), A && this.pushLocalVarStack();
            var h = this.pushEventStack(i);
            if (h.current_event = i, t) {
                var c = this.types[e].getCurrentSol();
                c.select_all = !1, cr.clearArray(c.instances), c.instances[0] = t, this.types[e].applySolToContainer()
            }
            var l = !0;
            if (i.parent) {
                for (var u = h.temp_parents_arr, p = i.parent; p;) u.push(p), p = p.parent;
                for (u.reverse(), n = 0, r = u.length; n < r; n++)
                    if (!u[n].run_pretrigger()) {
                        l = !1;
                        break
                    }
            }
            return l && (this.execcount++, i.orblock ? i.run_orblocktrigger(s) : i.run(), o = o || h.last_event_true), this.popEventStack(), A && this.popLocalVarStack(), this.popSol(i.solModifiersIncludingParents), a && this.popSol(a.solModifiersIncludingParents), this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === L && !this.isRunningEvents && this.ClearDeathRow(), this.trigger_depth--, o
        }, t.prototype.getCurrentCondition = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.conditions[t.cndindex]
        }, t.prototype.getCurrentConditionObjectType = function() {
            return this.getCurrentCondition().type
        }, t.prototype.isCurrentConditionFirst = function() {
            return 0 === this.getCurrentEventStack().cndindex
        }, t.prototype.getCurrentAction = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.actions[t.actindex]
        }, t.prototype.pushLocalVarStack = function() {
            ++this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
        }, t.prototype.popLocalVarStack = function() {
            this.localvar_stack_index--
        }, t.prototype.getCurrentLocalVarStack = function() {
            return this.localvar_stack[this.localvar_stack_index]
        }, t.prototype.pushEventStack = function(t) {
            ++this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
            var e = this.getCurrentEventStack();
            return e.reset(t), e
        }, t.prototype.popEventStack = function() {
            this.event_stack_index--
        }, t.prototype.getCurrentEventStack = function() {
            return this.event_stack[this.event_stack_index]
        }, t.prototype.pushLoopStack = function(t) {
            ++this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
                name: t,
                index: 0,
                stopped: !1
            }));
            var e = this.getCurrentLoop();
            return e.name = t, e.index = 0, e.stopped = !1, e
        }, t.prototype.popLoopStack = function() {
            this.loop_stack_index--
        }, t.prototype.getCurrentLoop = function() {
            return this.loop_stack[this.loop_stack_index]
        }, t.prototype.getEventVariableByName = function(t, e) {
            for (var i, s, n, r, o, a; e;) {
                for (i = 0, s = e.subevents.length; i < s; i++)
                    if ((a = e.subevents[i]) instanceof cr.eventvariable && cr.equals_nocase(t, a.name)) return a;
                e = e.parent
            }
            for (i = 0, s = this.eventsheets_by_index.length; i < s; i++)
                for (n = 0, r = (o = this.eventsheets_by_index[i]).events.length; n < r; n++)
                    if ((a = o.events[n]) instanceof cr.eventvariable && cr.equals_nocase(t, a.name)) return a;
            return null
        }, t.prototype.getLayoutBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layouts_by_index.length; e < i; e++)
                if (this.layouts_by_index[e].sid === t) return this.layouts_by_index[e];
            return null
        }, t.prototype.getObjectTypeBySid = function(t) {
            var e, i;
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (this.types_by_index[e].sid === t) return this.types_by_index[e];
            return null
        }, t.prototype.getGroupBySid = function(t) {
            var e, i;
            for (e = 0, i = this.allGroups.length; e < i; e++)
                if (this.allGroups[e].sid === t) return this.allGroups[e];
            return null
        }, t.prototype.doCanvasSnapshot = function(t, e) {
            this.snapshotCanvas = [t, e], this.redraw = !0
        }, t.prototype.signalContinuousPreview = function() {
            this.signalledContinuousPreview = !0
        }, t.prototype.handleSaveLoad = function() {
            var t = this,
                e = this.saveToSlot,
                i = this.lastSaveJson,
                s = this.loadFromSlot,
                n = !1;
            if (this.signalledContinuousPreview && (n = !0, e = "__c2_continuouspreview", this.signalledContinuousPreview = !1), e.length) {
                if (this.ClearDeathRow(), i = this.saveToJSONString(), r() && !this.isCocoonJs) a(e, i, function() {
                    cr.logexport("Saved state to IndexedDB storage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && h()
                }, function(s) {
                    try {
                        localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && h()
                    } catch (e) {
                        cr.logexport("Failed to save game state: " + s + "; " + e), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                    }
                });
                else try {
                    localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && h()
                } catch (e) {
                    cr.logexport("Error saving to WebStorage: " + e), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                }
                this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null
            }
            if (s.length) {
                if (r() && !this.isCocoonJs) A(s, function(e) {
                    e ? (t.loadFromJson = e, cr.logexport("Loaded state from IndexedDB storage (" + t.loadFromJson.length + " bytes)")) : (t.loadFromJson = localStorage.getItem("__c2save_" + s) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)")), t.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }, function(e) {
                    t.loadFromJson = localStorage.getItem("__c2save_" + s) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)"), t.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                });
                else {
                    try {
                        this.loadFromJson = localStorage.getItem("__c2save_" + s) || "", cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                    } catch (t) {
                        this.loadFromJson = null
                    }
                    this.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }
                this.loadFromSlot = "", this.saveToSlot = ""
            }
            null !== this.loadFromJson && (this.ClearDeathRow(), this.loadFromJSONString(this.loadFromJson) ? (this.lastSaveJson = this.loadFromJson, this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null), this.lastSaveJson = "") : t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null), this.loadFromJson = null)
        }, t.prototype.saveToJSONString = function() {
            var t, e, i, s, n, r, o, a, A, h, l, u, p = {
                c2save: !0,
                version: 1,
                rt: {
                    time: this.kahanTime.sum,
                    walltime: this.wallTime.sum,
                    timescale: this.timescale,
                    tickcount: this.tickcount,
                    execcount: this.execcount,
                    next_uid: this.next_uid,
                    running_layout: this.running_layout.sid,
                    start_time_offset: Date.now() - this.start_time
                },
                types: {},
                layouts: {},
                events: {
                    groups: {},
                    cnds: {},
                    acts: {},
                    vars: {}
                }
            };
            for (t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(n = this.types_by_index[t]).is_family && !this.typeHasNoSaveBehavior(n)) {
                    for (o = {
                        instances: []
                    }, cr.hasAnyOwnProperty(n.extra) && (o.ex = c(n.extra)), i = 0, s = n.instances.length; i < s; i++) o.instances.push(this.saveInstanceToJSON(n.instances[i]));
                    p.types[n.sid.toString()] = o
                }
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) r = this.layouts_by_index[t], p.layouts[r.sid.toString()] = r.saveToJSON();
            var d = p.events.groups;
            for (t = 0, e = this.allGroups.length; t < e; t++) d[(a = this.allGroups[t]).sid.toString()] = this.groups_by_name[a.group_name].group_active;
            var g = p.events.cnds;
            for (u in this.cndsBySid) this.cndsBySid.hasOwnProperty(u) && (A = this.cndsBySid[u], cr.hasAnyOwnProperty(A.extra) && (g[u] = {
                ex: c(A.extra)
            }));
            var f = p.events.acts;
            for (u in this.actsBySid) this.actsBySid.hasOwnProperty(u) && (h = this.actsBySid[u], cr.hasAnyOwnProperty(h.extra) && (f[u] = {
                ex: c(h.extra)
            }));
            var m = p.events.vars;
            for (u in this.varsBySid) this.varsBySid.hasOwnProperty(u) && ((l = this.varsBySid[u]).is_constant || l.parent && !l.is_static || (m[u] = l.data));
            return p.system = this.system.saveToJSON(), JSON.stringify(p)
        }, t.prototype.refreshUidMap = function() {
            var t, e, i, s, n, r;
            for (this.objectsByUid = {}, t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(i = this.types_by_index[t]).is_family)
                    for (s = 0, n = i.instances.length; s < n; s++) r = i.instances[s], this.objectsByUid[r.uid.toString()] = r
        }, t.prototype.loadFromJSONString = function(t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (t) {
                return !1
            }
            if (!e.c2save) return !1;
            if (e.version > 1) return !1;
            this.isLoadingState = !0;
            var i = e.rt;
            this.kahanTime.reset(), this.kahanTime.sum = i.time, this.wallTime.reset(), this.wallTime.sum = i.walltime || 0, this.timescale = i.timescale, this.tickcount = i.tickcount, this.execcount = i.execcount, this.start_time = Date.now() - i.start_time_offset;
            var s = i.running_layout;
            if (s !== this.running_layout.sid) {
                var n = this.getLayoutBySid(s);
                if (!n) return;
                this.doChangeLayout(n)
            }
            var r, o, a, A, h, c, l, u, p, d, g, f, m, y, _, v, b, w = e.types;
            for (l in w)
                if (w.hasOwnProperty(l)) {
                    if (!(u = this.getObjectTypeBySid(parseInt(l, 10))) || u.is_family || this.typeHasNoSaveBehavior(u)) continue;
                    for (w[l].ex ? u.extra = w[l].ex : cr.wipe(u.extra), p = u.instances, d = w[l].instances, r = 0, o = cr.min(p.length, d.length); r < o; r++) this.loadInstanceFromJSON(p[r], d[r]);
                    for (r = d.length, o = p.length; r < o; r++) this.DestroyInstance(p[r]);
                    for (r = p.length, o = d.length; r < o; r++) y = null, u.plugin.is_world && !(y = this.running_layout.getLayerBySid(d[r].w.l)) || (g = this.createInstanceFromInit(u.default_instance, y, !1, 0, 0, !0), this.loadInstanceFromJSON(g, d[r]));
                    u.stale_iids = !0
                }
            this.ClearDeathRow(), this.refreshUidMap();
            var x = e.layouts;
            for (l in x)
                if (x.hasOwnProperty(l)) {
                    if (!(m = this.getLayoutBySid(parseInt(l, 10)))) continue;
                    m.loadFromJSON(x[l])
                }
            var B = e.events.groups;
            for (l in B) B.hasOwnProperty(l) && (_ = this.getGroupBySid(parseInt(l, 10))) && this.groups_by_name[_.group_name] && this.groups_by_name[_.group_name].setGroupActive(B[l]);
            var T = e.events.cnds;
            for (l in this.cndsBySid) this.cndsBySid.hasOwnProperty(l) && (T.hasOwnProperty(l) ? this.cndsBySid[l].extra = T[l].ex : this.cndsBySid[l].extra = {});
            var S = e.events.acts;
            for (l in this.actsBySid) this.actsBySid.hasOwnProperty(l) && (S.hasOwnProperty(l) ? this.actsBySid[l].extra = S[l].ex : this.actsBySid[l].extra = {});
            var E = e.events.vars;
            for (l in E) E.hasOwnProperty(l) && this.varsBySid.hasOwnProperty(l) && (this.varsBySid[l].data = E[l]);
            for (this.next_uid = i.next_uid, this.isLoadingState = !1, r = 0, o = this.fireOnCreateAfterLoad.length; r < o; ++r) g = this.fireOnCreateAfterLoad[r], this.trigger(Object.getPrototypeOf(g.type.plugin).cnds.OnCreated, g);
            for (cr.clearArray(this.fireOnCreateAfterLoad), this.system.loadFromJSON(e.system), r = 0, o = this.types_by_index.length; r < o; r++)
                if (!(u = this.types_by_index[r]).is_family && !this.typeHasNoSaveBehavior(u))
                    for (a = 0, A = u.instances.length; a < A; a++) {
                        if (g = u.instances[a], u.is_contained)
                            for (v = g.get_iid(), cr.clearArray(g.siblings), h = 0, c = u.container.length; h < c; h++) u !== (b = u.container[h]) && g.siblings.push(b.instances[v]);
                        if (g.afterLoad && g.afterLoad(), g.behavior_insts)
                            for (h = 0, c = g.behavior_insts.length; h < c; h++)(f = g.behavior_insts[h]).afterLoad && f.afterLoad()
                    }
                return this.redraw = !0, !0
        }, t.prototype.saveInstanceToJSON = function(t, e) {
            var i, s, n, r, o, a = t.type,
                A = a.plugin,
                h = {};
            if (e ? h.c2 = !0 : h.uid = t.uid, cr.hasAnyOwnProperty(t.extra) && (h.ex = c(t.extra)), t.instance_vars && t.instance_vars.length)
                for (h.ivs = {}, i = 0, s = t.instance_vars.length; i < s; i++) h.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
            if (A.is_world) {
                if (n = {
                    x: t.x,
                    y: t.y,
                    w: t.width,
                    h: t.height,
                    l: t.layer.sid,
                    zi: t.get_zindex()
                }, 0 !== t.angle && (n.a = t.angle), 1 !== t.opacity && (n.o = t.opacity), .5 !== t.hotspotX && (n.hX = t.hotspotX), .5 !== t.hotspotY && (n.hY = t.hotspotY), 0 !== t.blend_mode && (n.bm = t.blend_mode), t.visible || (n.v = t.visible), t.collisionsEnabled || (n.ce = t.collisionsEnabled), -1 !== t.my_timescale && (n.mts = t.my_timescale), a.effect_types.length)
                    for (n.fx = [], i = 0, s = a.effect_types.length; i < s; i++) o = a.effect_types[i], n.fx.push({
                        name: o.name,
                        active: t.active_effect_flags[o.index],
                        params: t.effect_params[o.index]
                    });
                h.w = n
            }
            if (t.behavior_insts && t.behavior_insts.length)
                for (h.behs = {}, i = 0, s = t.behavior_insts.length; i < s; i++)(r = t.behavior_insts[i]).saveToJSON && (h.behs[r.type.sid.toString()] = r.saveToJSON());
            return t.saveToJSON && (h.data = t.saveToJSON()), h
        }, t.prototype.getInstanceVarIndexBySid = function(t, e) {
            var i, s;
            for (i = 0, s = t.instvar_sids.length; i < s; i++)
                if (t.instvar_sids[i] === e) return i;
            return -1
        }, t.prototype.getBehaviorIndexBySid = function(t, e) {
            var i, s;
            for (i = 0, s = t.behavior_insts.length; i < s; i++)
                if (t.behavior_insts[i].type.sid === e) return i;
            return -1
        }, t.prototype.loadInstanceFromJSON = function(t, e, i) {
            var s, n, r, o, a, A, h, c, l, u, p = t.type,
                d = p.plugin;
            if (i) {
                if (!e.c2) return
            } else t.uid = e.uid; if (e.ex ? t.extra = e.ex : cr.wipe(t.extra), a = e.ivs)
                for (s in a)
                    if (a.hasOwnProperty(s)) {
                        if ((o = this.getInstanceVarIndexBySid(p, parseInt(s, 10))) < 0 || o >= t.instance_vars.length) continue;
                        t.instance_vars[o] = a[s]
                    }
            if (d.is_world) {
                if (A = e.w, t.layer.sid !== A.l && (u = t.layer, t.layer = this.running_layout.getLayerBySid(A.l), t.layer ? (u.removeFromInstanceList(t, !0), t.layer.appendToInstanceList(t, !0), t.set_bbox_changed(), t.layer.setZIndicesStaleFrom(0)) : (t.layer = u, i || this.DestroyInstance(t))), t.x = A.x, t.y = A.y, t.width = A.w, t.height = A.h, t.zindex = A.zi, t.angle = A.hasOwnProperty("a") ? A.a : 0, t.opacity = A.hasOwnProperty("o") ? A.o : 1, t.hotspotX = A.hasOwnProperty("hX") ? A.hX : .5, t.hotspotY = A.hasOwnProperty("hY") ? A.hY : .5, t.visible = !A.hasOwnProperty("v") || A.v, t.collisionsEnabled = !A.hasOwnProperty("ce") || A.ce, t.my_timescale = A.hasOwnProperty("mts") ? A.mts : -1, t.blend_mode = A.hasOwnProperty("bm") ? A.bm : 0, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.gl && cr.setGLBlend(t, t.blend_mode, this.gl), t.set_bbox_changed(), A.hasOwnProperty("fx"))
                    for (n = 0, r = A.fx.length; n < r; n++)(h = p.getEffectIndexByName(A.fx[n].name)) < 0 || (t.active_effect_flags[h] = A.fx[n].active, t.effect_params[h] = A.fx[n].params);
                t.updateActiveEffects()
            }
            if (c = e.behs)
                for (s in c)
                    if (c.hasOwnProperty(s)) {
                        if ((l = this.getBehaviorIndexBySid(t, parseInt(s, 10))) < 0) continue;
                        t.behavior_insts[l].loadFromJSON(c[s])
                    }
            e.data && t.loadFromJSON(e.data)
        }, t.prototype.fetchLocalFileViaCordova = function(t, e, i) {
            var s = cordova.file.applicationDirectory + "www/" + t;
            window.resolveLocalFileSystemURL(s, function(t) {
                t.file(e, i)
            }, i)
        }, t.prototype.fetchLocalFileViaCordovaAsText = function(t, e, i) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var s = new FileReader;
                s.onload = function(t) {
                    e(t.target.result)
                }, s.onerror = i, s.readAsText(t)
            }, i)
        };
        var M = [],
            N = 0;
        t.prototype.maybeStartNextArrayBufferRead = function() {
            if (M.length && !(N >= 8)) {
                N++;
                var t = M.shift();
                this.doFetchLocalFileViaCordovaAsArrayBuffer(t.filename, t.successCallback, t.errorCallback)
            }
        }, t.prototype.fetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            var s = this;
            M.push({
                filename: t,
                successCallback: function(t) {
                    N--, s.maybeStartNextArrayBufferRead(), e(t)
                },
                errorCallback: function(t) {
                    N--, s.maybeStartNextArrayBufferRead(), i(t)
                }
            }), this.maybeStartNextArrayBufferRead()
        }, t.prototype.doFetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var i = new FileReader;
                i.onload = function(t) {
                    e(t.target.result)
                }, i.readAsArrayBuffer(t)
            }, i)
        }, t.prototype.fetchLocalFileViaCordovaAsURL = function(t, e, i) {
            this.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                var i = new Blob([t]),
                    s = URL.createObjectURL(i);
                e(s)
            }, i)
        }, t.prototype.isAbsoluteUrl = function(t) {
            return /^(?:[a-z]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
        }, t.prototype.setImageSrc = function(t, e) {
            this.isWKWebView && !this.isAbsoluteUrl(e) ? this.fetchLocalFileViaCordovaAsURL(e, function(e) {
                t.src = e
            }, function(t) {
                alert("Failed to load image: " + t)
            }) : t.src = e
        }, t.prototype.setCtxImageSmoothingEnabled = function(t, e) {
            void 0 !== t.imageSmoothingEnabled ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e)
        }, cr.runtime = t, cr.createRuntime = function(e) {
            return new t(document.getElementById(e))
        }, cr.createDCRuntime = function(e, i) {
            return new t({
                dc: !0,
                width: e,
                height: i
            })
        }, window.cr_createRuntime = cr.createRuntime, window.cr_createDCRuntime = cr.createDCRuntime, window.createCocoonJSRuntime = function() {
            window.c2cocoonjs = !0;
            var e = document.createElement("screencanvas") || document.createElement("canvas");
            e.screencanvas = !0, document.body.appendChild(e);
            var i = new t(e);
            return window.c2runtime = i, window.addEventListener("orientationchange", function() {
                window.c2runtime.setSize(window.innerWidth, window.innerHeight)
            }), window.c2runtime.setSize(window.innerWidth, window.innerHeight), i
        }, window.createEjectaRuntime = function() {
            var e = new t(document.getElementById("canvas"));
            return window.c2runtime = e, window.c2runtime.setSize(window.innerWidth, window.innerHeight), e
        }
    }(), window.cr_getC2Runtime = function() {
        var t = document.getElementById("c2canvas");
        return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null
    }, window.cr_getSnapshot = function(t, e) {
        var i = window.cr_getC2Runtime();
        i && i.doCanvasSnapshot(t, e)
    }, window.cr_sizeCanvas = function(t, e) {
        if (0 !== t && 0 !== e) {
            var i = window.cr_getC2Runtime();
            i && i.setSize(t, e)
        }
    }, window.cr_setSuspended = function(t) {
        var e = window.cr_getC2Runtime();
        e && e.setSuspended(t)
    },
    function() {
        function t(t, e) {
            this.runtime = t, this.event_sheet = null, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, this.scale = 1, this.angle = 0, this.first_visit = !0, this.name = e[0], this.originalWidth = e[1], this.originalHeight = e[2], this.width = e[1], this.height = e[2], this.unbounded_scrolling = e[3], this.sheetname = e[4], this.sid = e[5];
            var i, s, n = e[6];
            for (this.layers = [], this.initial_types = [], i = 0, s = n.length; i < s; i++) {
                var r = new cr.layer(this, n[i]);
                r.number = i, cr.seal(r), this.layers.push(r)
            }
            var o = e[7];
            for (this.initial_nonworld = [], i = 0, s = o.length; i < s; i++) {
                var a = o[i],
                    A = this.runtime.types_by_index[a[1]];
                A.default_instance || (A.default_instance = a), this.initial_nonworld.push(a), -1 === this.initial_types.indexOf(A) && this.initial_types.push(A)
            }
            for (this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, s = e[8].length; i < s; i++) this.effect_types.push({
                id: e[8][i][0],
                name: e[8][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[8][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1), this.persist_data = {}
        }

        function e(t, e) {
            return t.zindex - e.zindex
        }

        function i(t, e) {
            this.layout = t, this.runtime = t.runtime, this.instances = [], this.scale = 1, this.angle = 0, this.disableAngle = !1, this.tmprect = new cr.rect(0, 0, 0, 0), this.tmpquad = new cr.quad, this.viewLeft = 0, this.viewRight = 0, this.viewTop = 0, this.viewBottom = 0, this.zindices_stale = !1, this.zindices_stale_from = -1, this.clear_earlyz_index = 0, this.name = e[0], this.index = e[1], this.sid = e[2], this.visible = e[3], this.background_color = e[4], this.transparent = e[5], this.parallaxX = e[6], this.parallaxY = e[7], this.opacity = e[8], this.forceOwnTexture = e[9], this.useRenderCells = e[10], this.zoomRate = e[11], this.blend_mode = e[12], this.effect_fallback = e[13], this.compositeOp = "source-over", this.srcBlend = 0, this.destBlend = 0, this.render_grid = null, this.last_render_list = s(), this.render_list_stale = !0, this.last_render_cells = new cr.rect(0, 0, -1, -1), this.cur_render_cells = new cr.rect(0, 0, -1, -1), this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width, this.runtime.original_height)), this.render_offscreen = !1;
            var i, n, r = e[14];
            for (this.startup_initial_instances = [], this.initial_instances = [], this.created_globals = [], i = 0, n = r.length; i < n; i++) {
                var o = r[i],
                    a = this.runtime.types_by_index[o[1]];
                a.default_instance || (a.default_instance = o, a.default_layerindex = this.index), this.initial_instances.push(o), -1 === this.layout.initial_types.indexOf(a) && this.layout.initial_types.push(a)
            }
            for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances), this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, n = e[15].length; i < n; i++) this.effect_types.push({
                id: e[15][i][0],
                name: e[15][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[15][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1)
        }

        function s() {
            return l.length ? l.pop() : []
        }

        function n(t) {
            cr.clearArray(t), l.push(t)
        }

        function r(t, e, i) {
            var s, n, r = 0,
                o = 0,
                a = 0,
                A = t.length,
                h = e.length;
            for (i.length = A + h; r < A && o < h; ++a) s = t[r], n = e[o], s.zindex < n.zindex ? (i[a] = s, ++r) : (i[a] = n, ++o);
            for (; r < A; ++r, ++a) i[a] = t[r];
            for (; o < h; ++o, ++a) i[a] = e[o]
        }

        function o(t, e) {
            var i, o, a, A, h;
            for (i = 0, o = t.length; i < o - 1; i += 2) r(a = t[i], A = t[i + 1], h = s()), e || (n(a), n(A)), u.push(h);
            o % 2 == 1 && (e ? (a = s(), cr.shallowAssignArray(a, t[o - 1]), u.push(a)) : u.push(t[o - 1])), cr.shallowAssignArray(t, u), cr.clearArray(u)
        }

        function a(t) {
            for (var e = !0; t.length > 1;) o(t, e), e = !1;
            return t[0]
        }
        t.prototype.saveObjectToPersist = function(t) {
            var e = t.type.sid.toString();
            this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []), this.persist_data[e].push(this.runtime.saveInstanceToJSON(t))
        }, t.prototype.hasOpaqueBottomLayer = function() {
            var t = this.layers[0];
            return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
        }, t.prototype.updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0;
            var t, e, i;
            for (t = 0, e = this.effect_types.length; t < e; t++)(i = this.effect_types[t]).active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, t.prototype.getEffectByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if ((s = this.effect_types[e]).name === t) return s;
            return null
        };
        var A = [],
            h = !0;
        t.prototype.startRunning = function() {
            this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname], this.event_sheet.updateDeepIncludes()), this.runtime.running_layout = this, this.width = this.originalWidth, this.height = this.originalHeight, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2;
            var t, i, s, n, r, o, a, c, l, u, p, d;
            for (t = 0, s = this.runtime.types_by_index.length; t < s; t++)
                if (!(r = this.runtime.types_by_index[t]).is_family)
                    for (i = 0, n = (o = r.instances).length; i < n; i++)
                        if ((a = o[i]).layer) {
                            var g = a.layer.number;
                            g >= this.layers.length && (g = this.layers.length - 1), a.layer = this.layers[g], -1 === a.layer.instances.indexOf(a) && a.layer.instances.push(a), a.layer.zindices_stale = !0
                        }
            if (!h)
                for (t = 0, s = this.layers.length; t < s; ++t) this.layers[t].instances.sort(e);
            var f;
            for (cr.clearArray(A), this.boundScrolling(), t = 0, s = this.layers.length; t < s; t++)(f = this.layers[t]).createInitialInstances(), f.updateViewport(null);
            var m = !1;
            if (!this.first_visit) {
                for (p in this.persist_data)
                    if (this.persist_data.hasOwnProperty(p)) {
                        if (!(r = this.runtime.getObjectTypeBySid(parseInt(p, 10))) || r.is_family || !this.runtime.typeHasPersistBehavior(r)) continue;
                        for (t = 0, s = (d = this.persist_data[p]).length; t < s; t++) f = null, r.plugin.is_world && !(f = this.getLayerBySid(d[t].w.l)) || (a = this.runtime.createInstanceFromInit(r.default_instance, f, !1, 0, 0, !0), this.runtime.loadInstanceFromJSON(a, d[t]), m = !0, A.push(a));
                        cr.clearArray(d)
                    }
                for (t = 0, s = this.layers.length; t < s; t++) this.layers[t].instances.sort(e), this.layers[t].zindices_stale = !0
            }
            for (m && (this.runtime.ClearDeathRow(), this.runtime.refreshUidMap()), t = 0; t < A.length; t++)
                if ((a = A[t]).type.is_contained)
                    for (c = a.get_iid(), i = 0, n = a.type.container.length; i < n; i++) l = a.type.container[i], a.type !== l && (l.instances.length > c ? a.siblings.push(l.instances[c]) : l.default_instance && (u = this.runtime.createInstanceFromInit(l.default_instance, a.layer, !0, a.x, a.y, !0), this.runtime.ClearDeathRow(), l.updateIIDs(), a.siblings.push(u), A.push(u)));
            for (t = 0, s = this.initial_nonworld.length; t < s; t++) a = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0);
            if (this.runtime.changelayout = null, this.runtime.ClearDeathRow(), this.runtime.ctx && !this.runtime.isDomFree)
                for (t = 0, s = this.runtime.types_by_index.length; t < s; t++)!(l = this.runtime.types_by_index[t]).is_family && l.instances.length && l.preloadCanvas2D && l.preloadCanvas2D(this.runtime.ctx);
            if (this.runtime.isLoadingState) cr.shallowAssignArray(this.runtime.fireOnCreateAfterLoad, A);
            else
                for (t = 0, s = A.length; t < s; t++) a = A[t], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
            cr.clearArray(A), this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null), this.first_visit = !1
        }, t.prototype.createGlobalNonWorlds = function() {
            var t, e, i, s, n;
            for (t = 0, e = 0, i = this.initial_nonworld.length; t < i; t++) s = this.initial_nonworld[t], (n = this.runtime.types_by_index[s[1]]).global ? n.is_contained || this.runtime.createInstanceFromInit(s, null, !0) : (this.initial_nonworld[e] = s, e++);
            cr.truncateArray(this.initial_nonworld, e)
        }, t.prototype.stopRunning = function() {
            this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null), this.runtime.isEndingLayout = !0, cr.clearArray(this.runtime.system.waits);
            var t, e, i, s, n, r, o;
            if (!this.first_visit)
                for (t = 0, e = this.layers.length; t < e; t++)
                    for (this.layers[t].updateZIndices(), i = 0, s = (n = this.layers[t].instances).length; i < s; i++)(r = n[i]).type.global || this.runtime.typeHasPersistBehavior(r.type) && this.saveObjectToPersist(r);
            for (t = 0, e = this.layers.length; t < e; t++) {
                for (i = 0, s = (n = this.layers[t].instances).length; i < s; i++)(r = n[i]).type.global || this.runtime.DestroyInstance(r);
                this.runtime.ClearDeathRow(), cr.clearArray(n), this.layers[t].zindices_stale = !0
            }
            for (t = 0, e = this.runtime.types_by_index.length; t < e; t++)
                if (!((o = this.runtime.types_by_index[t]).global || o.plugin.is_world || o.plugin.singleglobal || o.is_family)) {
                    for (i = 0, s = o.instances.length; i < s; i++) this.runtime.DestroyInstance(o.instances[i]);
                    this.runtime.ClearDeathRow()
                }
            h = !1, this.runtime.isEndingLayout = !1
        };
        var c = new cr.rect(0, 0, 0, 0);
        t.prototype.recreateInitialObjects = function(t, e, i, s, n) {
            c.set(e, i, s, n);
            var r, o;
            for (r = 0, o = this.layers.length; r < o; r++) this.layers[r].recreateInitialObjects(t, c)
        }, t.prototype.draw = function(t) {
            var e, i = t,
                s = !1,
                n = !this.runtime.fullscreenScalingQuality;
            n && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"), (e = this.runtime.layout_canvas).width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layout_ctx = e.getContext("2d"), s = !0), e = this.runtime.layout_canvas, i = this.runtime.layout_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, s = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, s = !0), s && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height);
            var r, o, a;
            for (r = 0, o = this.layers.length; r < o; r++)(a = this.layers[r]).visible && a.opacity > 0 && 11 !== a.blend_mode && (a.instances.length || !a.transparent) ? a.draw(i) : a.updateViewport(null);
            n && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
        }, t.prototype.drawGL_earlyZPass = function(t) {
            t.setEarlyZPass(!0), this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height);
            var e, i;
            for (e = this.layers.length - 1; e >= 0; --e)(i = this.layers[e]).visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
            t.setEarlyZPass(!1)
        }, t.prototype.drawGL = function(t) {
            var e = this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
            e ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null), t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = null), this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0);
            var i, s, n;
            for (i = 0, s = this.layers.length; i < s; i++)(n = this.layers[i]).visible && n.opacity > 0 && (n.instances.length || !n.transparent) ? n.drawGL(t) : n.updateViewport(null);
            if (e)
                if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
                    if (1 === this.active_effect_types.length) {
                        var r = this.active_effect_types[0].index;
                        t.switchProgram(this.active_effect_types[0].shaderindex), t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[r]), t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
                    } else t.switchProgram(0);
                    this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height), t.setRenderingToTexture(null), t.setDepthTestEnabled(!1), t.setOpacity(1), t.setTexture(this.runtime.layout_tex), t.setAlphaBlend(), t.resetModelView(), t.updateModelView();
                    var o = this.runtime.width / 2,
                        a = this.runtime.height / 2;
                    t.quad(-o, a, o, a, o, -a, -o, -a), t.setTexture(null), t.setDepthTestEnabled(!0)
                } else this.renderEffectChain(t, null, null, null)
        }, t.prototype.getRenderTarget = function() {
            return this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
        }, t.prototype.getMinLayerScale = function() {
            var t, e, i, s = this.layers[0].getScale();
            for (t = 1, e = this.layers.length; t < e; t++) 0 === (i = this.layers[t]).parallaxX && 0 === i.parallaxY || i.getScale() < s && (s = i.getScale());
            return s
        }, t.prototype.scrollToX = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
                t > this.width - e && (t = this.width - e), t < e && (t = e)
            }
            this.scrollX !== t && (this.scrollX = t, this.runtime.redraw = !0)
        }, t.prototype.scrollToY = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
                t > this.height - e && (t = this.height - e), t < e && (t = e)
            }
            this.scrollY !== t && (this.scrollY = t, this.runtime.redraw = !0)
        }, t.prototype.boundScrolling = function() {
            this.scrollToX(this.scrollX), this.scrollToY(this.scrollY)
        }, t.prototype.renderEffectChain = function(t, e, i, s) {
            var n = i ? i.active_effect_types : e ? e.active_effect_types : this.active_effect_types,
                r = 1,
                o = 0,
                a = 0,
                A = 0,
                h = this.runtime.draw_width,
                c = this.runtime.draw_height;
            i ? (r = i.layer.getScale(), o = i.layer.getAngle(), a = i.layer.viewLeft, A = i.layer.viewTop, h = i.layer.viewRight, c = i.layer.viewBottom) : e && (r = e.getScale(), o = e.getAngle(), a = e.viewLeft, A = e.viewTop, h = e.viewRight, c = e.viewBottom);
            var l, u, p, d, g, f = this.runtime.fx_tex,
                m = 0,
                y = 1,
                _ = this.runtime.draw_width,
                v = this.runtime.draw_height,
                b = _ / 2,
                w = v / 2,
                x = e ? e.rcTex : this.rcTex,
                B = e ? e.rcTex2 : this.rcTex2,
                T = 0,
                S = 0,
                E = 0,
                C = 0,
                O = _,
                I = _,
                P = v,
                k = v,
                R = 0,
                L = 0,
                M = i ? i.layer.getAngle() : 0;
            if (i) {
                for (l = 0, u = n.length; l < u; l++) R += t.getProgramBoxExtendHorizontal(n[l].shaderindex), L += t.getProgramBoxExtendVertical(n[l].shaderindex);
                var N = i.bbox;
                if (T = e.layerToCanvas(N.left, N.top, !0, !0), E = e.layerToCanvas(N.left, N.top, !1, !0), O = e.layerToCanvas(N.right, N.bottom, !0, !0), P = e.layerToCanvas(N.right, N.bottom, !1, !0), 0 !== M) {
                    var F = e.layerToCanvas(N.right, N.top, !0, !0),
                        D = e.layerToCanvas(N.right, N.top, !1, !0),
                        Q = e.layerToCanvas(N.left, N.bottom, !0, !0),
                        j = e.layerToCanvas(N.left, N.bottom, !1, !0);
                    p = Math.min(T, O, F, Q), O = Math.max(T, O, F, Q), T = p, p = Math.min(E, P, D, j), P = Math.max(E, P, D, j), E = p
                }
                T -= R, E -= L, O += R, P += L, B.left = T / _, B.top = 1 - E / v, B.right = O / _, B.bottom = 1 - P / v, S = T = cr.floor(T), C = E = cr.floor(E), I = O = cr.ceil(O), k = P = cr.ceil(P), S -= R, C -= L, I += R, k += L, T < 0 && (T = 0), E < 0 && (E = 0), O > _ && (O = _), P > v && (P = v), S < 0 && (S = 0), C < 0 && (C = 0), I > _ && (I = _), k > v && (k = v), x.left = T / _, x.top = 1 - E / v, x.right = O / _, x.bottom = 1 - P / v
            } else x.left = B.left = 0, x.top = B.top = 0, x.right = B.right = 1, x.bottom = B.bottom = 1;
            var G = i && (t.programUsesDest(n[0].shaderindex) || 0 !== R || 0 !== L || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
            t.setAlphaBlend(), G && (f[m] || (f[m] = t.createEmptyTexture(_, v, this.runtime.linearSampling)), f[m].c2width === _ && f[m].c2height === v || (t.deleteTexture(f[m]), f[m] = t.createEmptyTexture(_, v, this.runtime.linearSampling)), t.switchProgram(0), t.setRenderingToTexture(f[m]), d = v - C - (g = k - C), t.clearRect(S, d, I - S, g), i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex), t.setOpacity(e.opacity), t.resetModelView(), t.translate(-b, -w), t.updateModelView(), t.quadTex(T, P, O, P, O, E, T, E, x)), B.left = B.top = 0, B.right = B.bottom = 1, i && (p = x.top, x.top = x.bottom, x.bottom = p), m = 1, y = 0), t.setOpacity(1);
            var W = n.length - 1,
                Y = t.programUsesCrossSampling(n[W].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality,
                U = 0;
            for (l = 0, u = n.length; l < u; l++) {
                if (f[m] || (f[m] = t.createEmptyTexture(_, v, this.runtime.linearSampling)), f[m].c2width === _ && f[m].c2height === v || (t.deleteTexture(f[m]), f[m] = t.createEmptyTexture(_, v, this.runtime.linearSampling)), t.switchProgram(n[l].shaderindex), U = n[l].index, t.programIsAnimated(n[l].shaderindex) && (this.runtime.redraw = !0), 0 != l || G) t.setProgramParameters(s, 1 / _, 1 / v, B.left, B.top, B.right, B.bottom, r, o, a, A, (a + h) / 2, (A + c) / 2, this.runtime.kahanTime.sum, i ? i.effect_params[U] : e ? e.effect_params[U] : this.effect_params[U]), t.setTexture(null), l !== W || Y ? (t.setRenderingToTexture(f[m]), d = v - C - (g = k - C), t.clearRect(S, d, I - S, g)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend), t.setRenderingToTexture(s)), t.setTexture(f[y]), t.resetModelView(), t.translate(-b, -w), t.updateModelView(), t.quadTex(T, P, O, P, O, E, T, E, x), l !== W || Y || t.setTexture(null);
                else {
                    if (t.setRenderingToTexture(f[m]), g = k - C, d = v - C - g, t.clearRect(S, d, I - S, g), i) {
                        var V, z;
                        if (i.curFrame && i.curFrame.texture_img) {
                            var X = i.curFrame.texture_img;
                            V = 1 / X.width, z = 1 / X.height
                        } else V = 1 / i.width, z = 1 / i.height;
                        t.setProgramParameters(s, V, z, B.left, B.top, B.right, B.bottom, r, o, a, A, (a + h) / 2, (A + c) / 2, this.runtime.kahanTime.sum, i.effect_params[U]), i.drawGL(t)
                    } else t.setProgramParameters(s, 1 / _, 1 / v, 0, 0, 1, 1, r, o, a, A, (a + h) / 2, (A + c) / 2, this.runtime.kahanTime.sum, e ? e.effect_params[U] : this.effect_params[U]), t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex), t.resetModelView(), t.translate(-b, -w), t.updateModelView(), t.quadTex(T, P, O, P, O, E, T, E, x);
                    B.left = B.top = 0, B.right = B.bottom = 1, i && !Y && (p = P, P = E, E = p)
                }
                y = 0 === (m = 0 === m ? 1 : 0) ? 1 : 0
            }
            Y && (t.switchProgram(0), i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height), b = this.runtime.width / 2, w = this.runtime.height / 2, T = 0, E = 0, O = this.runtime.width, P = this.runtime.height), t.setRenderingToTexture(s), t.setTexture(f[y]), t.resetModelView(), t.translate(-b, -w), t.updateModelView(), i && 1 === n.length && !G ? t.quadTex(T, E, O, E, O, P, T, P, x) : t.quadTex(T, P, O, P, O, E, T, E, x), t.setTexture(null))
        }, t.prototype.getLayerBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layers.length; e < i; e++)
                if (this.layers[e].sid === t) return this.layers[e];
            return null
        }, t.prototype.saveToJSON = function() {
            var t, e, i, s, n = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.angle,
                w: this.width,
                h: this.height,
                fv: this.first_visit,
                persist: this.persist_data,
                fx: [],
                layers: {}
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) s = this.effect_types[t], n.fx.push({
                name: s.name,
                active: s.active,
                params: this.effect_params[s.index]
            });
            for (t = 0, e = this.layers.length; t < e; t++) i = this.layers[t], n.layers[i.sid.toString()] = i.saveToJSON();
            return n
        }, t.prototype.loadFromJSON = function(t) {
            var e, i, s, n, r;
            this.scrollX = t.sx, this.scrollY = t.sy, this.scale = t.s, this.angle = t.a, this.width = t.w, this.height = t.h, this.persist_data = t.persist, void 0 !== t.fv && (this.first_visit = t.fv);
            var o = t.fx;
            for (e = 0, i = o.length; e < i; e++)(s = this.getEffectByName(o[e].name)) && (s.active = o[e].active, this.effect_params[s.index] = o[e].params);
            this.updateActiveEffects();
            var a = t.layers;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    if (!(r = this.getLayerBySid(parseInt(n, 10)))) continue;
                    r.loadFromJSON(a[n])
                }
        }, cr.layout = t, i.prototype.updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0;
            var t, e, i;
            for (t = 0, e = this.effect_types.length; t < e; t++)(i = this.effect_types[t]).active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, i.prototype.getEffectByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if ((s = this.effect_types[e]).name === t) return s;
            return null
        }, i.prototype.createInitialInstances = function() {
            var t, e, i, s, n, r, o, a;
            for (t = 0, e = 0, i = this.initial_instances.length; t < i; t++) {
                if (n = this.initial_instances[t], r = this.runtime.types_by_index[n[1]], a = this.runtime.typeHasPersistBehavior(r), o = !0, !a || this.layout.first_visit) {
                    if (!(s = this.runtime.createInstanceFromInit(n, this, !0))) continue;
                    A.push(s), s.type.global && (o = !1, this.created_globals.push(s.uid))
                }
                o && (this.initial_instances[e] = this.initial_instances[t], e++)
            }
            this.initial_instances.length = e, this.runtime.ClearDeathRow(), !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback), this.compositeOp = cr.effectToCompositeOp(this.blend_mode), this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl), this.render_list_stale = !0
        }, i.prototype.recreateInitialObjects = function(t, e) {
            var i, s, n, r, o, a, A, h, c, l, u, p = this.runtime.types_by_index,
                d = t.is_family,
                g = t.members;
            for (i = 0, s = this.initial_instances.length; i < s; ++i)
                if (n = this.initial_instances[i], o = n[0], a = o[0], A = o[1], e.contains_pt(a, A)) {
                    if ((r = p[n[1]]) !== t) {
                        if (!d) continue;
                        if (g.indexOf(r) < 0) continue
                    }
                    if (h = this.runtime.createInstanceFromInit(n, this, !1), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(r.plugin).cnds.OnCreated, h), h.is_contained)
                        for (c = 0, l = h.siblings.length; c < l; c++) u = h.siblings[i], this.runtime.trigger(Object.getPrototypeOf(u.type.plugin).cnds.OnCreated, u);
                    this.runtime.isInOnDestroy--
                }
        }, i.prototype.removeFromInstanceList = function(t, e) {
            var i = cr.fastIndexOf(this.instances, t);
            i < 0 || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(), this.render_grid.update(t, t.rendercells, null), t.rendercells.set(0, 0, -1, -1)), i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i), this.setZIndicesStaleFrom(i)), this.render_list_stale = !0)
        }, i.prototype.appendToInstanceList = function(t, e) {
            t.zindex = this.instances.length, this.instances.push(t), e && this.useRenderCells && t.rendercells && t.set_bbox_changed(), this.render_list_stale = !0
        }, i.prototype.prependToInstanceList = function(t, e) {
            this.instances.unshift(t), this.setZIndicesStaleFrom(0), e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
        }, i.prototype.moveInstanceAdjacent = function(t, e, i) {
            var s = t.get_zindex(),
                n = e.get_zindex();
            cr.arrayRemove(this.instances, s), s < n && n--, i && n++, n === this.instances.length ? this.instances.push(t) : this.instances.splice(n, 0, t), this.setZIndicesStaleFrom(s < n ? s : n)
        }, i.prototype.setZIndicesStaleFrom = function(t) {
            -1 === this.zindices_stale_from ? this.zindices_stale_from = t : t < this.zindices_stale_from && (this.zindices_stale_from = t), this.zindices_stale = !0, this.render_list_stale = !0
        }, i.prototype.updateZIndices = function() {
            if (this.zindices_stale) {
                -1 === this.zindices_stale_from && (this.zindices_stale_from = 0);
                var t, e, i;
                if (this.useRenderCells)
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t)(i = this.instances[t]).zindex = t, this.render_grid.markRangeChanged(i.rendercells);
                else
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t) this.instances[t].zindex = t;
                this.zindices_stale = !1, this.zindices_stale_from = -1
            }
        }, i.prototype.getScale = function(t) {
            return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
        }, i.prototype.getNormalScale = function() {
            return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
        }, i.prototype.getAngle = function() {
            return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
        };
        var l = [],
            u = [],
            p = [];
        i.prototype.getRenderCellInstancesToDraw = function() {
            if (this.updateZIndices(), this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, p), !p.length) return s();
            if (1 === p.length) {
                var t = s();
                return cr.shallowAssignArray(t, p[0]), cr.clearArray(p), t
            }
            var e = a(p);
            return cr.clearArray(p), e
        }, i.prototype.draw = function(t) {
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
            var e = this.runtime.canvas,
                i = t,
                s = !1;
            this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"), (e = this.runtime.layer_canvas).width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layer_ctx = e.getContext("2d"), s = !0), e = this.runtime.layer_canvas, i = this.runtime.layer_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, s = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, s = !0), s && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling), this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")", i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.save(), this.disableAngle = !0;
            var r = this.canvasToLayer(0, 0, !0, !0),
                o = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (r = Math.round(r), o = Math.round(o)), this.rotateViewport(r, o, i);
            var a = this.getScale();
            i.scale(a, a), i.translate(-r, -o);
            var A;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (n(this.last_render_list), A = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : A = this.last_render_list) : A = this.instances;
            var h, c, l, u = null;
            for (h = 0, c = A.length; h < c; ++h)(l = A[h]) !== u && (this.drawInstance(l, i), u = l);
            this.useRenderCells && (this.last_render_list = A), i.restore(), this.render_offscreen && (t.globalCompositeOperation = this.compositeOp, t.globalAlpha = this.opacity, t.drawImage(e, 0, 0))
        }, i.prototype.drawInstance = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp, t.draw(e))
            }
        }, i.prototype.updateViewport = function(t) {
            this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, t)
        }, i.prototype.rotateViewport = function(t, e, i) {
            var s = this.getScale();
            this.viewLeft = t, this.viewTop = e, this.viewRight = t + this.runtime.draw_width * (1 / s), this.viewBottom = e + this.runtime.draw_height * (1 / s);
            var n;
            this.viewLeft > this.viewRight && (n = this.viewLeft, this.viewLeft = this.viewRight, this.viewRight = n), this.viewTop > this.viewBottom && (n = this.viewTop, this.viewTop = this.viewBottom, this.viewBottom = n);
            var r = this.getAngle();
            0 !== r && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2), i.rotate(-r), i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)), this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom), this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), this.tmpquad.set_from_rotated_rect(this.tmprect, r), this.tmpquad.bounding_box(this.tmprect), this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2), this.viewLeft = this.tmprect.left, this.viewTop = this.tmprect.top, this.viewRight = this.tmprect.right, this.viewBottom = this.tmprect.bottom)
        }, i.prototype.drawGL_earlyZPass = function(t) {
            this.runtime.draw_width, this.runtime.draw_height;
            this.render_offscreen = this.forceOwnTexture, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex)), this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, null);
            var s = this.getScale();
            t.resetModelView(), t.scale(s, s), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView();
            var r;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (n(this.last_render_list), r = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : r = this.last_render_list) : r = this.instances;
            var o, a, A = null;
            for (o = r.length - 1; o >= 0; --o)(a = r[o]) !== A && (this.drawInstanceGL_earlyZPass(r[o], t), A = a);
            this.useRenderCells && (this.last_render_list = r), this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++, t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(1, 1, 1, 1), t.fullscreenQuad(), t.restoreEarlyZMode())
        }, i.prototype.drawGL = function(t) {
            this.runtime.draw_width, this.runtime.draw_height;
            var e = 0,
                i = 0;
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || this.active_effect_types.length > 0 || 0 !== this.blend_mode, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex), this.transparent && t.clear(0, 0, 0, 0)), this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1), t.fullscreenQuad(), t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)), this.disableAngle = !0;
            var s = this.canvasToLayer(0, 0, !0, !0),
                r = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (s = Math.round(s), r = Math.round(r)), this.rotateViewport(s, r, null);
            var o = this.getScale();
            t.resetModelView(), t.scale(o, o), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView();
            var a;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (n(this.last_render_list), a = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : a = this.last_render_list) : a = this.instances;
            var A, h, c, l = null;
            for (A = 0, h = a.length; A < h; ++A)(c = a[A]) !== l && (this.drawInstanceGL(a[A], t), l = c);
            if (this.useRenderCells && (this.last_render_list = a), this.render_offscreen)
                if (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0, i = this.active_effect_types.length ? this.active_effect_types[0].index : 0, 0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity) {
                    1 === this.active_effect_types.length ? (t.switchProgram(e), t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, o, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]), t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0), t.setRenderingToTexture(this.layout.getRenderTarget()), t.setOpacity(this.opacity), t.setTexture(this.runtime.layer_tex), t.setBlend(this.srcBlend, this.destBlend), t.resetModelView(), t.updateModelView();
                    var u = this.runtime.draw_width / 2,
                        p = this.runtime.draw_height / 2;
                    t.quad(-u, p, u, p, u, -p, -u, -p), t.setTexture(null)
                } else this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget())
        }, i.prototype.drawInstanceGL = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index), t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0), e.setBlend(t.srcBlend, t.destBlend), t.drawGL(e)))
            }
        }, i.prototype.drawInstanceGL_earlyZPass = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++, 0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index), t.drawGL_earlyZPass(e)))
            }
        }, i.prototype.drawInstanceWithShadersGL = function(t, e) {
            var i = t.active_effect_types[0].shaderindex,
                s = t.active_effect_types[0].index,
                n = this.getScale();
            if (1 !== t.active_effect_types.length || e.programUsesCrossSampling(i) || e.programExtendsBox(i) || (t.angle || t.layer.getAngle()) && e.programUsesDest(i) || 1 !== t.opacity || t.type.plugin.must_predraw) this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()), e.resetModelView(), e.scale(n, n), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView();
            else {
                e.switchProgram(i), e.setBlend(t.srcBlend, t.destBlend), e.programIsAnimated(i) && (this.runtime.redraw = !0);
                var r = 0,
                    o = 0,
                    a = 0,
                    A = 0;
                if (e.programUsesDest(i)) {
                    var h = t.bbox,
                        c = this.layerToCanvas(h.left, h.top, !0, !0),
                        l = this.layerToCanvas(h.left, h.top, !1, !0),
                        u = this.layerToCanvas(h.right, h.bottom, !0, !0),
                        p = this.layerToCanvas(h.right, h.bottom, !1, !0);
                    r = c / windowWidth, o = 1 - l / windowHeight, a = u / windowWidth, A = 1 - p / windowHeight
                }
                var d, g;
                if (t.curFrame && t.curFrame.texture_img) {
                    var f = t.curFrame.texture_img;
                    d = 1 / f.width, g = 1 / f.height
                } else d = 1 / t.width, g = 1 / t.height;
                e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), d, g, r, o, a, A, n, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[s]), t.drawGL(e)
            }
        }, i.prototype.canvasToLayer = function(t, e, i, s) {
            var n = this.runtime.devicePixelRatio;
            this.runtime.isRetina && (t *= n, e *= n);
            var r = this.runtime.parallax_x_origin,
                o = this.runtime.parallax_y_origin,
                a = (this.layout.scrollX - r) * this.parallaxX + r,
                A = (this.layout.scrollY - o) * this.parallaxY + o,
                h = a,
                c = A,
                l = 1 / this.getScale(!s);
            s ? (h -= this.runtime.draw_width * l / 2, c -= this.runtime.draw_height * l / 2) : (h -= this.runtime.width * l / 2, c -= this.runtime.height * l / 2), h += t * l, c += e * l;
            var u = this.getAngle();
            if (0 !== u) {
                h -= a, c -= A;
                var p = Math.cos(u),
                    d = Math.sin(u),
                    g = h * p - c * d;
                c = c * p + h * d, h = g, h += a, c += A
            }
            return i ? h : c
        }, i.prototype.layerToCanvas = function(t, e, i, s) {
            var n = this.runtime.parallax_x_origin,
                r = this.runtime.parallax_y_origin,
                o = (this.layout.scrollX - n) * this.parallaxX + n,
                a = (this.layout.scrollY - r) * this.parallaxY + r,
                A = o,
                h = a,
                c = this.getAngle();
            if (0 !== c) {
                t -= o, e -= a;
                var l = Math.cos(-c),
                    u = Math.sin(-c),
                    p = t * l - e * u;
                e = e * l + t * u, t = p, t += o, e += a
            }
            var d = 1 / this.getScale(!s);
            s ? (A -= this.runtime.draw_width * d / 2, h -= this.runtime.draw_height * d / 2) : (A -= this.runtime.width * d / 2, h -= this.runtime.height * d / 2), A = (t - A) / d, h = (e - h) / d;
            var g = this.runtime.devicePixelRatio;
            return this.runtime.isRetina && !s && (A /= g, h /= g), i ? A : h
        }, i.prototype.rotatePt = function(t, e, i) {
            if (0 === this.getAngle()) return i ? t : e;
            var s = this.layerToCanvas(t, e, !0),
                n = this.layerToCanvas(t, e, !1);
            this.disableAngle = !0;
            var r = this.canvasToLayer(s, n, !0),
                o = this.canvasToLayer(s, n, !0);
            return this.disableAngle = !1, i ? r : o
        }, i.prototype.saveToJSON = function() {
            var t, e, i, s = {
                s: this.scale,
                a: this.angle,
                vl: this.viewLeft,
                vt: this.viewTop,
                vr: this.viewRight,
                vb: this.viewBottom,
                v: this.visible,
                bc: this.background_color,
                t: this.transparent,
                px: this.parallaxX,
                py: this.parallaxY,
                o: this.opacity,
                zr: this.zoomRate,
                fx: [],
                cg: this.created_globals,
                instances: []
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], s.fx.push({
                name: i.name,
                active: i.active,
                params: this.effect_params[i.index]
            });
            return s
        }, i.prototype.loadFromJSON = function(t) {
            var i, s, n, r;
            this.scale = t.s, this.angle = t.a, this.viewLeft = t.vl, this.viewTop = t.vt, this.viewRight = t.vr, this.viewBottom = t.vb, this.visible = t.v, this.background_color = t.bc, this.transparent = t.t, this.parallaxX = t.px, this.parallaxY = t.py, this.opacity = t.o, this.zoomRate = t.zr, this.created_globals = t.cg || [], cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
            var o = new cr.ObjectSet;
            for (i = 0, n = this.created_globals.length; i < n; ++i) o.add(this.created_globals[i]);
            for (i = 0, s = 0, n = this.initial_instances.length; i < n; ++i) o.contains(this.initial_instances[i][2]) || (this.initial_instances[s] = this.initial_instances[i], ++s);
            cr.truncateArray(this.initial_instances, s);
            var a = t.fx;
            for (i = 0, n = a.length; i < n; i++)(r = this.getEffectByName(a[i].name)) && (r.active = a[i].active, this.effect_params[r.index] = a[i].params);
            this.updateActiveEffects(), this.instances.sort(e), this.zindices_stale = !0
        }, cr.layer = i
    }(),
    function() {
        function t(t, e) {
            var i, s = t.length;
            switch (s) {
                case 0:
                    return !0;
                case 1:
                    return t[0] === e[0];
                case 2:
                    return t[0] === e[0] && t[1] === e[1];
                default:
                    for (i = 0; i < s; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
            }
        }

        function e(t, e) {
            return t.index - e.index
        }

        function i(i) {
            var s, n, r, o, a;
            for (2 === i.length ? i[0].index > i[1].index && (o = i[0], i[0] = i[1], i[1] = o) : i.length > 2 && i.sort(e), i.length >= f.length && (f.length = i.length + 1), f[i.length] || (f[i.length] = []), s = 0, n = (a = f[i.length]).length; s < n; s++)
                if (r = a[s], t(i, r)) return r;
            return a.push(i), i
        }

        function s(t, e) {
            this.runtime = t, this.triggers = {}, this.fasttriggers = {}, this.hasRun = !1, this.includes = new cr.ObjectSet, this.deep_includes = [], this.already_included_sheets = [], this.name = e[0];
            var i = e[1];
            this.events = [];
            var s, n;
            for (s = 0, n = i.length; s < n; s++) this.init_event(i[s], null, this.events)
        }

        function n(t) {
            return !(!cr.plugins_.Sprite || t !== cr.plugins_.Sprite.prototype.cnds.OnFrameChanged)
        }

        function r(t) {
            this.type = t, this.instances = [], this.else_instances = [], this.select_all = !0
        }

        function o(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.solModifiersIncludingParents = [], this.solWriterAfterCnds = !1, this.group = !1, this.initially_activated = !1, this.toplevelevent = !1, this.toplevelgroup = !1, this.has_else_block = !1, this.conditions = [], this.actions = [], this.subevents = [], this.group_name = "", this.group = !1, this.initially_activated = !1, this.group_active = !1, this.contained_includes = null, i[1] && (this.group_name = i[1][1].toLowerCase(), this.group = !0, this.initially_activated = !!i[1][0], this.contained_includes = [], this.group_active = this.initially_activated, this.runtime.allGroups.push(this), this.runtime.groups_by_name[this.group_name] = this), this.orblock = i[2], this.sid = i[4], this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
            var s, n, r = i[5];
            for (s = 0, n = r.length; s < n; s++) {
                var o = new cr.condition(this, r[s]);
                o.index = s, cr.seal(o), this.conditions.push(o), this.addSolModifier(o.type)
            }
            var a = i[6];
            for (s = 0, n = a.length; s < n; s++) {
                var A = new cr.action(this, a[s]);
                A.index = s, cr.seal(A), this.actions.push(A)
            }
            if (8 === i.length) {
                var h = i[7];
                for (s = 0, n = h.length; s < n; s++) this.sheet.init_event(h[s], this, this.subevents)
            }
            this.is_else_block = !1, this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
        }

        function a(t, e) {
            var i, s, n;
            if (t && (-1 === e.indexOf(t) && e.push(t), t.is_contained))
                for (i = 0, s = t.container.length; i < s; i++) t !== (n = t.container[i]) && -1 === e.indexOf(n) && e.push(n)
        }

        function A(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), this.trigger = e[3] > 0, this.fasttrigger = 2 === e[3], this.looping = e[4], this.inverted = e[5], this.isstatic = e[6], this.sid = e[7], this.runtime.cndsBySid[this.sid.toString()] = this, -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.isstatic ? this.run = this.run_static : this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1), this.block.parent && this.block.parent.setSolWriterAfterCnds()), this.fasttrigger && (this.run = this.run_true), 10 === e.length) {
                var i, s, n = e[9];
                for (i = 0, s = n.length; i < s; i++) {
                    var r = new cr.parameter(this, n[i]);
                    cr.seal(r), this.parameters.push(r)
                }
                this.results.length = n.length
            }
        }

        function h(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1)), this.sid = e[3], this.runtime.actsBySid[this.sid.toString()] = this, 6 === e.length) {
                var i, s, n = e[5];
                for (i = 0, s = n.length; i < s; i++) {
                    var r = new cr.parameter(this, n[i]);
                    cr.seal(r), this.parameters.push(r)
                }
                this.results.length = n.length
            }
        }

        function c() {
            return y++, m.length === y && m.push(new cr.expvalue), m[y]
        }

        function l() {
            y--
        }

        function u(t, e) {
            this.owner = t, this.block = t.block, this.sheet = t.sheet, this.runtime = t.runtime, this.type = e[0], this.expression = null, this.solindex = 0, this.get = null, this.combosel = 0, this.layout = null, this.key = 0, this.object = null, this.index = 0, this.varname = null, this.eventvar = null, this.fileinfo = null, this.subparams = null, this.variadicret = null, this.subparams = null, this.variadicret = null, this.variesPerInstance = !1;
            var i, s, n;
            switch (e[0]) {
                case 0:
                case 7:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp;
                    break;
                case 1:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp_str;
                    break;
                case 5:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_layer;
                    break;
                case 3:
                case 8:
                    this.combosel = e[1], this.get = this.get_combosel;
                    break;
                case 6:
                    this.layout = this.runtime.layouts[e[1]], this.get = this.get_layout;
                    break;
                case 9:
                    this.key = e[1], this.get = this.get_key;
                    break;
                case 4:
                    this.object = this.runtime.types_by_index[e[1]], this.get = this.get_object, this.block.addSolModifier(this.object), this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
                    break;
                case 10:
                    this.index = e[1], t.type && t.type.is_family ? (this.get = this.get_familyvar, this.variesPerInstance = !0) : this.get = this.get_instvar;
                    break;
                case 11:
                    this.varname = e[1], this.eventvar = null, this.get = this.get_eventvar;
                    break;
                case 2:
                case 12:
                    this.fileinfo = e[1], this.get = this.get_audiofile;
                    break;
                case 13:
                    for (this.get = this.get_variadic, this.subparams = [], this.variadicret = [], i = 1, s = e.length; i < s; i++) n = new cr.parameter(this.owner, e[i]), cr.seal(n), this.subparams.push(n), this.variadicret.push(0)
            }
        }

        function p(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.name = i[1], this.vartype = i[2], this.initial = i[3], this.is_static = !!i[4], this.is_constant = !!i[5], this.sid = i[6], this.runtime.varsBySid[this.sid.toString()] = this, this.data = this.initial, this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++, this.runtime.all_local_vars.push(this)) : (this.localIndex = -1, this.runtime.all_global_vars.push(this))
        }

        function d(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.include_sheet = null, this.include_sheet_name = i[1], this.active = !0
        }

        function g() {
            this.temp_parents_arr = [], this.reset(null), cr.seal(this)
        }
        var f = [];
        s.prototype.toString = function() {
            return this.name
        }, s.prototype.init_event = function(t, e, i) {
            switch (t[0]) {
                case 0:
                    var s = new cr.eventblock(this, e, t);
                    if (cr.seal(s), s.orblock) {
                        i.push(s);
                        var n, r;
                        for (n = 0, r = s.conditions.length; n < r; n++) s.conditions[n].trigger && this.init_trigger(s, n)
                    } else s.is_trigger() ? this.init_trigger(s, 0) : i.push(s);
                    break;
                case 1:
                    var o = new cr.eventvariable(this, e, t);
                    cr.seal(o), i.push(o);
                    break;
                case 2:
                    var a = new cr.eventinclude(this, e, t);
                    cr.seal(a), i.push(a)
            }
        }, s.prototype.postInit = function() {
            var t, e;
            for (t = 0, e = this.events.length; t < e; t++) this.events[t].postInit(t < e - 1 && this.events[t + 1].is_else_block)
        }, s.prototype.updateDeepIncludes = function() {
            cr.clearArray(this.deep_includes), cr.clearArray(this.already_included_sheets), this.addDeepIncludes(this), cr.clearArray(this.already_included_sheets)
        }, s.prototype.addDeepIncludes = function(t) {
            var e, i, s, n, r = t.deep_includes,
                o = t.already_included_sheets,
                a = this.includes.valuesRef();
            for (e = 0, i = a.length; e < i; ++e) n = (s = a[e]).include_sheet, !s.isActive() || t === n || o.indexOf(n) > -1 || (o.push(n), n.addDeepIncludes(t), r.push(n))
        }, s.prototype.run = function(t) {
            this.runtime.resuming_breakpoint || (this.hasRun = !0, t || (this.runtime.isRunningEvents = !0));
            var e, i;
            for (e = 0, i = this.events.length; e < i; e++) {
                var s = this.events[e];
                s.run(), this.runtime.clearSol(s.solModifiers), this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
            }
            t || (this.runtime.isRunningEvents = !1)
        }, s.prototype.init_trigger = function(t, e) {
            t.orblock || this.runtime.triggers_to_postinit.push(t);
            var i, s = t.conditions[e];
            i = s.type ? s.type.name : "system";
            var r = s.fasttrigger,
                o = r ? this.fasttriggers : this.triggers;
            o[i] || (o[i] = []);
            var a = o[i],
                A = s.func;
            if (r) {
                if (!s.parameters.length) return;
                var h = s.parameters[0];
                if (1 !== h.type || 2 !== h.expression.type) return;
                var c, l, u, p = h.expression.value.toLowerCase();
                for (l = 0, u = a.length; l < u; l++)
                    if (a[l].method == A) return c = a[l].evs, void(c[p] ? c[p].push([t, e]) : c[p] = [
                        [t, e]
                    ]);
                    (c = {})[p] = [
                        [t, e]
                    ], a.push({
                    method: A,
                    evs: c
                })
            } else {
                for (l = 0, u = a.length; l < u; l++)
                    if (a[l].method == A) return void a[l].evs.push([t, e]);
                n(A) ? a.unshift({
                    method: A,
                    evs: [
                        [t, e]
                    ]
                }) : a.push({
                    method: A,
                    evs: [
                        [t, e]
                    ]
                })
            }
        }, cr.eventsheet = s, r.prototype.hasObjects = function() {
            return this.select_all ? this.type.instances.length : this.instances.length
        }, r.prototype.getObjects = function() {
            return this.select_all ? this.type.instances : this.instances
        }, r.prototype.pick_one = function(t) {
            if (t)
                if (t.runtime.getCurrentEventStack().current_event.orblock) {
                    this.select_all && (cr.clearArray(this.instances), cr.shallowAssignArray(this.else_instances, t.type.instances), this.select_all = !1);
                    var e = this.else_instances.indexOf(t); - 1 !== e && (this.instances.push(this.else_instances[e]), this.else_instances.splice(e, 1))
                } else this.select_all = !1, cr.clearArray(this.instances), this.instances[0] = t
        }, cr.selection = r, window._c2hh_ = "01C64BA4FF7C733D2E68B6C26D320987DD901F9F", o.prototype.postInit = function(t) {
            var e = this.parent;
            if (this.group)
                for (this.toplevelgroup = !0; e;) {
                    if (!e.group) {
                        this.toplevelgroup = !1;
                        break
                    }
                    e = e.parent
                }
            for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup), this.has_else_block = !!t, this.solModifiersIncludingParents = this.solModifiers.slice(0), e = this.parent; e;) {
                for (s = 0, n = e.solModifiers.length; s < n; s++) this.addParentSolModifier(e.solModifiers[s]);
                e = e.parent
            }
            this.solModifiers = i(this.solModifiers), this.solModifiersIncludingParents = i(this.solModifiersIncludingParents);
            var s, n;
            for (s = 0, n = this.conditions.length; s < n; s++) this.conditions[s].postInit();
            for (s = 0, n = this.actions.length; s < n; s++) this.actions[s].postInit();
            for (s = 0, n = this.subevents.length; s < n; s++) this.subevents[s].postInit(s < n - 1 && this.subevents[s + 1].is_else_block)
        }, o.prototype.setGroupActive = function(t) {
            if (this.group_active !== !!t) {
                this.group_active = !!t;
                var e, i;
                for (e = 0, i = this.contained_includes.length; e < i; ++e) this.contained_includes[e].updateActive();
                i > 0 && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
            }
        }, o.prototype.addSolModifier = function(t) {
            a(t, this.solModifiers)
        }, o.prototype.addParentSolModifier = function(t) {
            a(t, this.solModifiersIncludingParents)
        }, o.prototype.setSolWriterAfterCnds = function() {
            this.solWriterAfterCnds = !0, this.parent && this.parent.setSolWriterAfterCnds()
        }, o.prototype.is_trigger = function() {
            return !!this.conditions.length && this.conditions[0].trigger
        }, o.prototype.run = function() {
            var t, e, i = !1,
                s = this.runtime,
                n = this.runtime.getCurrentEventStack();
            n.current_event = this;
            var r = this.conditions;
            if (this.is_else_block || (n.else_branch_ran = !1), this.orblock) {
                for (0 === r.length && (i = !0), n.cndindex = 0, t = r.length; n.cndindex < t; n.cndindex++)(e = r[n.cndindex]).trigger || e.run() && (i = !0);
                n.last_event_true = i, i && this.run_actions_and_subevents()
            } else {
                for (n.cndindex = 0, t = r.length; n.cndindex < t; n.cndindex++)
                    if (!r[n.cndindex].run()) return n.last_event_true = !1, void(this.toplevelevent && s.hasPendingInstances && s.ClearDeathRow());
                n.last_event_true = !0, this.run_actions_and_subevents()
            }
            this.end_run(n)
        }, o.prototype.end_run = function(t) {
            t.last_event_true && this.has_else_block && (t.else_branch_ran = !0), this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }, o.prototype.run_orblocktrigger = function(t) {
            this.runtime.getCurrentEventStack().current_event = this, this.conditions[t].run() && (this.run_actions_and_subevents(), this.runtime.getCurrentEventStack().last_event_true = !0)
        }, o.prototype.run_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (e.actindex = 0, t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, o.prototype.resume_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, o.prototype.run_subevents = function() {
            if (this.subevents.length) {
                var t, e, i, s, n = this.subevents.length - 1;
                if (this.runtime.pushEventStack(this), this.solWriterAfterCnds)
                    for (t = 0, e = this.subevents.length; t < e; t++) i = this.subevents[t], (s = !this.toplevelgroup || !this.group && t < n) && this.runtime.pushCopySol(i.solModifiers), i.run(), s ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers);
                else
                    for (t = 0, e = this.subevents.length; t < e; t++) this.subevents[t].run();
                this.runtime.popEventStack()
            }
        }, o.prototype.run_pretrigger = function() {
            var t = this.runtime.getCurrentEventStack();
            t.current_event = this;
            var e, i = !1;
            for (t.cndindex = 0, e = this.conditions.length; t.cndindex < e; t.cndindex++)
                if (this.conditions[t.cndindex].run()) i = !0;
                else if (!this.orblock) return !1;
            return !this.orblock || i
        }, o.prototype.retrigger = function() {
            this.runtime.execcount++;
            var t, e = this.runtime.getCurrentEventStack().cndindex,
                i = this.runtime.pushEventStack(this);
            if (!this.orblock)
                for (i.cndindex = e + 1, t = this.conditions.length; i.cndindex < t; i.cndindex++)
                    if (!this.conditions[i.cndindex].run()) return this.runtime.popEventStack(), !1;
            return this.run_actions_and_subevents(), this.runtime.popEventStack(), !0
        }, o.prototype.isFirstConditionOfType = function(t) {
            var e = t.index;
            if (0 === e) return !0;
            for (--e; e >= 0; --e)
                if (this.conditions[e].type === t.type) return !1;
            return !0
        }, cr.eventblock = o, A.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++)(i = this.parameters[t]).postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, A.prototype.run_true = function() {
            return !0
        }, A.prototype.run_system = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
        }, A.prototype.run_static = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            var i = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
            return this.type.applySolToContainer(), i
        }, A.prototype.run_object = function() {
            var t, e, i, s, n, r, o, a, A, h, c, l, u = this.type,
                p = u.getCurrentSol(),
                d = this.block.orblock && !this.trigger,
                g = 0,
                f = u.is_contained,
                m = u.is_family,
                y = u.family_index,
                _ = this.beh_index,
                v = _ > -1,
                b = this.anyParamVariesPerInstance,
                w = this.parameters,
                x = this.results,
                B = this.inverted,
                T = this.func;
            if (b)
                for (e = 0, n = w.length; e < n; ++e)(r = w[e]).variesPerInstance || (x[e] = r.get(0));
            else
                for (e = 0, n = w.length; e < n; ++e) x[e] = w[e].get(0); if (p.select_all) {
                for (cr.clearArray(p.instances), cr.clearArray(p.else_instances), t = 0, s = (c = u.instances).length; t < s; ++t) {
                    if (a = c[t], b)
                        for (e = 0, n = w.length; e < n; ++e)(r = w[e]).variesPerInstance && (x[e] = r.get(t));
                    v ? (g = 0, m && (g = a.type.family_beh_map[y]), o = T.apply(a.behavior_insts[_ + g], x)) : o = T.apply(a, x), cr.xor(o, B) ? p.instances.push(a) : d && p.else_instances.push(a)
                }
                return u.finish && u.finish(!0), p.select_all = !1, u.applySolToContainer(), p.hasObjects()
            }
            i = 0;
            var S = d && !this.block.isFirstConditionOfType(this),
                E = !1;
            for (t = 0, s = (c = S ? p.else_instances : p.instances).length; t < s; ++t) {
                if (a = c[t], b)
                    for (e = 0, n = w.length; e < n; ++e)(r = w[e]).variesPerInstance && (x[e] = r.get(t));
                if (v ? (g = 0, m && (g = a.type.family_beh_map[y]), o = T.apply(a.behavior_insts[_ + g], x)) : o = T.apply(a, x), cr.xor(o, B))
                    if (E = !0, S) {
                        if (p.instances.push(a), f)
                            for (e = 0, n = a.siblings.length; e < n; e++)(A = a.siblings[e]).type.getCurrentSol().instances.push(A)
                    } else {
                        if (c[i] = a, f)
                            for (e = 0, n = a.siblings.length; e < n; e++)(A = a.siblings[e]).type.getCurrentSol().instances[i] = A;
                        i++
                    } else if (S) {
                    if (c[i] = a, f)
                        for (e = 0, n = a.siblings.length; e < n; e++)(A = a.siblings[e]).type.getCurrentSol().else_instances[i] = A;
                    i++
                } else if (d && (p.else_instances.push(a), f))
                    for (e = 0, n = a.siblings.length; e < n; e++)(A = a.siblings[e]).type.getCurrentSol().else_instances.push(A)
            }
            if (cr.truncateArray(c, i), f)
                for (t = 0, s = (l = u.container).length; t < s; t++) h = l[t].getCurrentSol(), S ? cr.truncateArray(h.else_instances, i) : cr.truncateArray(h.instances, i);
            var C = E;
            if (S && !E)
                for (t = 0, s = p.instances.length; t < s; t++) {
                    if (a = p.instances[t], b)
                        for (e = 0, n = w.length; e < n; e++)(r = w[e]).variesPerInstance && (x[e] = r.get(t));
                    if (o = v ? T.apply(a.behavior_insts[_], x) : T.apply(a, x), cr.xor(o, B)) {
                        E = !0;
                        break
                    }
                }
            return u.finish && u.finish(C || d), d ? E : p.hasObjects()
        }, cr.condition = A, h.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++)(i = this.parameters[t]).postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, h.prototype.run_system = function() {
            var t, e, i = this.runtime,
                s = this.parameters,
                n = this.results;
            for (t = 0, e = s.length; t < e; ++t) n[t] = s[t].get();
            return this.func.apply(i.system, n)
        }, h.prototype.run_object = function() {
            var t, e, i, s, n, r, o, a = this.type,
                A = this.beh_index,
                h = a.family_index,
                c = this.anyParamVariesPerInstance,
                l = this.parameters,
                u = this.results,
                p = this.func,
                d = a.getCurrentSol().getObjects(),
                g = a.is_family,
                f = A > -1;
            if (c)
                for (e = 0, s = l.length; e < s; ++e)(n = l[e]).variesPerInstance || (u[e] = n.get(0));
            else
                for (e = 0, s = l.length; e < s; ++e) u[e] = l[e].get(0);
            for (t = 0, i = d.length; t < i; ++t) {
                if (r = d[t], c)
                    for (e = 0, s = l.length; e < s; ++e)(n = l[e]).variesPerInstance && (u[e] = n.get(t));
                f ? (o = 0, g && (o = r.type.family_beh_map[h]), p.apply(r.behavior_insts[A + o], u)) : p.apply(r, u)
            }
            return !1
        }, cr.action = h;
        var m = [],
            y = -1;
        u.prototype.postInit = function() {
            var t, e;
            if (11 === this.type) this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
            else if (13 === this.type)
                for (t = 0, e = this.subparams.length; t < e; t++) this.subparams[t].postInit();
            this.expression && this.expression.postInit()
        }, u.prototype.maybeVaryForType = function(t) {
            this.variesPerInstance || t && (t.plugin.singleglobal || (this.variesPerInstance = !0))
        }, u.prototype.setVaries = function() {
            this.variesPerInstance = !0
        }, u.prototype.get_exp = function(t) {
            this.solindex = t || 0;
            var e = c();
            return this.expression.get(e), l(), e.data
        }, u.prototype.get_exp_str = function(t) {
            this.solindex = t || 0;
            var e = c();
            return this.expression.get(e), l(), cr.is_string(e.data) ? e.data : ""
        }, u.prototype.get_object = function() {
            return this.object
        }, u.prototype.get_combosel = function() {
            return this.combosel
        }, u.prototype.get_layer = function(t) {
            this.solindex = t || 0;
            var e = c();
            return this.expression.get(e), l(), e.is_number() ? this.runtime.getLayerByNumber(e.data) : this.runtime.getLayerByName(e.data)
        }, u.prototype.get_layout = function() {
            return this.layout
        }, u.prototype.get_key = function() {
            return this.key
        }, u.prototype.get_instvar = function() {
            return this.index
        }, u.prototype.get_familyvar = function(t) {
            var e = t || 0,
                i = this.owner.type,
                s = null,
                n = i.getCurrentSol(),
                r = n.getObjects();
            if (r.length) s = r[e % r.length].type;
            else if (n.else_instances.length) s = n.else_instances[e % n.else_instances.length].type;
            else {
                if (!i.instances.length) return 0;
                s = i.instances[e % i.instances.length].type
            }
            return this.index + s.family_var_map[i.family_index]
        }, u.prototype.get_eventvar = function() {
            return this.eventvar
        }, u.prototype.get_audiofile = function() {
            return this.fileinfo
        }, u.prototype.get_variadic = function() {
            var t, e;
            for (t = 0, e = this.subparams.length; t < e; t++) this.variadicret[t] = this.subparams[t].get();
            return this.variadicret
        }, cr.parameter = u, p.prototype.postInit = function() {
            this.solModifiers = i(this.solModifiers)
        }, p.prototype.setValue = function(t) {
            var e = this.runtime.getCurrentLocalVarStack();
            this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1), e[this.localIndex] = t) : this.data = t
        }, p.prototype.getValue = function() {
            var t = this.runtime.getCurrentLocalVarStack();
            return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length ? this.initial : void 0 === t[this.localIndex] ? this.initial : t[this.localIndex]
        }, p.prototype.run = function() {
            !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
        }, cr.eventvariable = p, d.prototype.toString = function() {
            return "include:" + this.include_sheet.toString()
        }, d.prototype.postInit = function() {
            this.include_sheet = this.runtime.eventsheets[this.include_sheet_name], this.sheet.includes.add(this), this.solModifiers = i(this.solModifiers);
            for (var t = this.parent; t;) t.group && t.contained_includes.push(this), t = t.parent;
            this.updateActive()
        }, d.prototype.run = function() {
            this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index), this.include_sheet.hasRun || this.include_sheet.run(!0), this.parent && this.runtime.popSol(this.runtime.types_by_index)
        }, d.prototype.updateActive = function() {
            for (var t = this.parent; t;) {
                if (t.group && !t.group_active) return void(this.active = !1);
                t = t.parent
            }
            this.active = !0
        }, d.prototype.isActive = function() {
            return this.active
        }, cr.eventinclude = d, g.prototype.reset = function(t) {
            this.current_event = t, this.cndindex = 0, this.actindex = 0, cr.clearArray(this.temp_parents_arr), this.last_event_true = !1, this.else_branch_ran = !1, this.any_true_state = !1
        }, g.prototype.isModifierAfterCnds = function() {
            return !!this.current_event.solWriterAfterCnds || this.cndindex < this.current_event.conditions.length - 1 && !!this.current_event.solModifiers.length
        }, cr.eventStackFrame = g
    }(),
    function() {
        function t(t, e) {
            this.owner = t, this.runtime = t.runtime, this.type = e[0], this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
            var i = null;
            switch (this.value = null, this.first = null, this.second = null, this.third = null, this.func = null, this.results = null, this.parameters = null, this.object_type = null, this.beh_index = -1, this.instance_expr = null, this.varindex = -1, this.behavior_type = null, this.varname = null, this.eventvar = null, this.return_string = !1, this.type) {
                case 0:
                case 1:
                case 2:
                    this.value = e[1];
                    break;
                case 3:
                    this.first = new cr.expNode(t, e[1]);
                    break;
                case 18:
                    this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2]), this.third = new cr.expNode(t, e[3]);
                    break;
                case 19:
                    this.func = this.runtime.GetObjectReference(e[1]), this.func !== cr.system_object.prototype.exps.random && this.func !== cr.system_object.prototype.exps.choose || this.owner.setVaries(), this.results = [], this.parameters = [], 3 === e.length ? (i = e[2], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 20:
                    this.object_type = this.runtime.types_by_index[e[1]], this.beh_index = -1, this.func = this.runtime.GetObjectReference(e[2]), this.return_string = e[3], cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(), e[4] ? this.instance_expr = new cr.expNode(t, e[4]) : this.instance_expr = null, this.results = [], this.parameters = [], 6 === e.length ? (i = e[5], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 21:
                    this.object_type = this.runtime.types_by_index[e[1]], this.return_string = e[2], e[3] ? this.instance_expr = new cr.expNode(t, e[3]) : this.instance_expr = null, this.varindex = e[4];
                    break;
                case 22:
                    this.object_type = this.runtime.types_by_index[e[1]], this.behavior_type = this.object_type.getBehaviorByName(e[2]), this.beh_index = this.object_type.getBehaviorIndexByName(e[2]), this.func = this.runtime.GetObjectReference(e[3]), this.return_string = e[4], e[5] ? this.instance_expr = new cr.expNode(t, e[5]) : this.instance_expr = null, this.results = [], this.parameters = [], 7 === e.length ? (i = e[6], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 23:
                    this.varname = e[1], this.eventvar = null
            }
            if (this.owner.maybeVaryForType(this.object_type), this.type >= 4 && this.type <= 17 && (this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2])), i) {
                var s, n;
                for (s = 0, n = i.length; s < n; s++) this.parameters.push(new cr.expNode(t, i[s]))
            }
            cr.seal(this)
        }

        function e() {
            return ++o, r.length === o && r.push(new cr.expvalue), r[o]
        }

        function i() {
            --o
        }

        function s(t, e, i) {
            var s, n;
            for (s = 0, n = t.length; s < n; ++s) t[s].get(i), e[s + 1] = i.data
        }

        function n(t, e) {
            this.type = t || cr.exptype.Integer, this.data = e || 0, this.object_class = null, this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)), cr.seal(this)
        }
        t.prototype.postInit = function() {
            if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)), this.first && this.first.postInit(), this.second && this.second.postInit(), this.third && this.third.postInit(), this.instance_expr && this.instance_expr.postInit(), this.parameters) {
                var t, e;
                for (t = 0, e = this.parameters.length; t < e; t++) this.parameters[t].postInit()
            }
        };
        var r = [],
            o = -1;
        t.prototype.eval_system_exp = function(t) {
            var n = this.parameters,
                r = this.results;
            r[0] = t, s(n, r, e()), i(), this.func.apply(this.runtime.system, r)
        }, t.prototype.eval_object_exp = function(t) {
            var n = this.object_type,
                r = this.results,
                o = this.parameters,
                a = this.instance_expr,
                A = this.func,
                h = this.owner.solindex,
                c = n.getCurrentSol(),
                l = c.getObjects();
            if (!l.length) {
                if (!c.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                l = c.else_instances
            }
            r[0] = t, t.object_class = n;
            var u = e();
            s(o, r, u), a && (a.get(u), u.is_number() && (h = u.data, l = n.instances)), i();
            var p = l.length;
            (h >= p || h <= -p) && (h %= p), h < 0 && (h += p);
            A.apply(l[h], r)
        }, t.prototype.eval_behavior_exp = function(t) {
            var n = this.object_type,
                r = this.results,
                o = this.parameters,
                a = this.instance_expr,
                A = this.beh_index,
                h = this.func,
                c = this.owner.solindex,
                l = n.getCurrentSol(),
                u = l.getObjects();
            if (!u.length) {
                if (!l.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                u = l.else_instances
            }
            r[0] = t, t.object_class = n;
            var p = e();
            s(o, r, p), a && (a.get(p), p.is_number() && (c = p.data, u = n.instances)), i();
            var d = u.length;
            (c >= d || c <= -d) && (c %= d), c < 0 && (c += d);
            var g = u[c],
                f = 0;
            n.is_family && (f = g.type.family_beh_map[n.family_index]);
            h.apply(g.behavior_insts[A + f], r)
        }, t.prototype.eval_instvar_exp = function(t) {
            var s, n = this.instance_expr,
                r = this.object_type,
                o = this.varindex,
                a = this.owner.solindex,
                A = r.getCurrentSol(),
                h = A.getObjects();
            if (!h.length) {
                if (!A.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                h = A.else_instances
            }
            if (n) {
                var c = e();
                if (n.get(c), c.is_number()) {
                    a = c.data;
                    var l = r.instances;
                    0 !== l.length && (a %= l.length) < 0 && (a += l.length);
                    d = (s = r.getInstanceByIID(a)).instance_vars[o];
                    return cr.is_string(d) ? t.set_string(d) : t.set_float(d), void i()
                }
                i()
            }
            var u = h.length;
            (a >= u || a <= -u) && (a %= u), a < 0 && (a += u), s = h[a];
            var p = 0;
            r.is_family && (p = s.type.family_var_map[r.family_index]);
            var d = s.instance_vars[o + p];
            cr.is_string(d) ? t.set_string(d) : t.set_float(d)
        }, t.prototype.eval_int = function(t) {
            t.type = cr.exptype.Integer, t.data = this.value
        }, t.prototype.eval_float = function(t) {
            t.type = cr.exptype.Float, t.data = this.value
        }, t.prototype.eval_string = function(t) {
            t.type = cr.exptype.String, t.data = this.value
        }, t.prototype.eval_unaryminus = function(t) {
            this.first.get(t), t.is_number() && (t.data = -t.data)
        }, t.prototype.eval_add = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data += s.data, s.is_float() && t.make_float()), i()
        }, t.prototype.eval_subtract = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data -= s.data, s.is_float() && t.make_float()), i()
        }, t.prototype.eval_multiply = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data *= s.data, s.is_float() && t.make_float()), i()
        }, t.prototype.eval_divide = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data /= s.data, t.make_float()), i()
        }, t.prototype.eval_mod = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data %= s.data, s.is_float() && t.make_float()), i()
        }, t.prototype.eval_power = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data = Math.pow(t.data, s.data), s.is_float() && t.make_float()), i()
        }, t.prototype.eval_and = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), s.is_string() || t.is_string() ? this.eval_and_stringconcat(t, s) : this.eval_and_logical(t, s), i()
        }, t.prototype.eval_and_stringconcat = function(t, e) {
            t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
        }, t.prototype.eval_and_stringconcat_str_str = function(t, e) {
            t.data += e.data
        }, t.prototype.eval_and_stringconcat_num = function(t, e) {
            t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
        }, t.prototype.eval_and_logical = function(t, e) {
            t.set_int(t.data && e.data ? 1 : 0)
        }, t.prototype.eval_or = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data || s.data ? t.set_int(1) : t.set_int(0)), i()
        }, t.prototype.eval_conditional = function(t) {
            this.first.get(t), t.data ? this.second.get(t) : this.third.get(t)
        }, t.prototype.eval_equal = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data === s.data ? 1 : 0), i()
        }, t.prototype.eval_notequal = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data !== s.data ? 1 : 0), i()
        }, t.prototype.eval_less = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data < s.data ? 1 : 0), i()
        }, t.prototype.eval_lessequal = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data <= s.data ? 1 : 0), i()
        }, t.prototype.eval_greater = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data > s.data ? 1 : 0), i()
        }, t.prototype.eval_greaterequal = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data >= s.data ? 1 : 0), i()
        }, t.prototype.eval_eventvar_exp = function(t) {
            var e = this.eventvar.getValue();
            cr.is_number(e) ? t.set_float(e) : t.set_string(e)
        }, cr.expNode = t, n.prototype.is_int = function() {
            return this.type === cr.exptype.Integer
        }, n.prototype.is_float = function() {
            return this.type === cr.exptype.Float
        }, n.prototype.is_number = function() {
            return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
        }, n.prototype.is_string = function() {
            return this.type === cr.exptype.String
        }, n.prototype.make_int = function() {
            this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)), this.type = cr.exptype.Integer)
        }, n.prototype.make_float = function() {
            this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)), this.type = cr.exptype.Float)
        }, n.prototype.make_string = function() {
            this.is_string() || (this.data = this.data.toString(), this.type = cr.exptype.String)
        }, n.prototype.set_int = function(t) {
            this.type = cr.exptype.Integer, this.data = Math.floor(t)
        }, n.prototype.set_float = function(t) {
            this.type = cr.exptype.Float, this.data = t
        }, n.prototype.set_string = function(t) {
            this.type = cr.exptype.String, this.data = t
        }, n.prototype.set_any = function(t) {
            cr.is_number(t) ? (this.type = cr.exptype.Float, this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String, this.data = t.toString()) : (this.type = cr.exptype.Integer, this.data = 0)
        }, cr.expvalue = n, cr.exptype = {
            Integer: 0,
            Float: 1,
            String: 2
        }
    }(), cr.system_object = function(t) {
        this.runtime = t, this.waits = []
    }, cr.system_object.prototype.saveToJSON = function() {
        var t, e, i, s, n, r, o, a, A = {};
        A.waits = [];
        var h, c = A.waits;
        for (t = 0, e = this.waits.length; t < e; t++) {
            for (h = {
                t: (r = this.waits[t]).time,
                st: r.signaltag,
                s: r.signalled,
                ev: r.ev.sid,
                sm: [],
                sols: {}
            }, r.ev.actions[r.actindex] && (h.act = r.ev.actions[r.actindex].sid), i = 0, s = r.solModifiers.length; i < s; i++) h.sm.push(r.solModifiers[i].sid);
            for (n in r.sols)
                if (r.sols.hasOwnProperty(n)) {
                    for (o = this.runtime.types_by_index[parseInt(n, 10)], a = {
                        sa: r.sols[n].sa,
                        insts: []
                    }, i = 0, s = r.sols[n].insts.length; i < s; i++) a.insts.push(r.sols[n].insts[i].uid);
                    h.sols[o.sid.toString()] = a
                }
            c.push(h)
        }
        return A
    }, cr.system_object.prototype.loadFromJSON = function(t) {
        var e, i, s, n, r, o, a, A, h, c, l, u, p, d = t.waits;
        for (cr.clearArray(this.waits), e = 0, i = d.length; e < i; e++)
            if (o = d[e], A = this.runtime.blocksBySid[o.ev.toString()]) {
                for (h = -1, s = 0, n = A.actions.length; s < n; s++)
                    if (A.actions[s].sid === o.act) {
                        h = s;
                        break
                    }
                if (-1 !== h) {
                    for ((a = {}).sols = {}, a.solModifiers = [], a.deleteme = !1, a.time = o.t, a.signaltag = o.st || "", a.signalled = !!o.s, a.ev = A, a.actindex = h, s = 0, n = o.sm.length; s < n; s++)(c = this.runtime.getObjectTypeBySid(o.sm[s])) && a.solModifiers.push(c);
                    for (r in o.sols)
                        if (o.sols.hasOwnProperty(r)) {
                            if (!(c = this.runtime.getObjectTypeBySid(parseInt(r, 10)))) continue;
                            for (u = {
                                sa: (l = o.sols[r]).sa,
                                insts: []
                            }, s = 0, n = l.insts.length; s < n; s++)(p = this.runtime.getObjectByUID(l.insts[s])) && u.insts.push(p);
                            a.sols[c.index.toString()] = u
                        }
                    this.waits.push(a)
                }
            }
    },
    function() {
        function t() {}

        function e(t, e) {
            var i = t.extra.c2_feo_val,
                s = e.extra.c2_feo_val;
            return cr.is_number(i) && cr.is_number(s) ? i - s : (i = "" + i, s = "" + s, i < s ? -1 : i > s ? 1 : 0)
        }

        function i(t, e) {
            return g && t === f && e === m || (g = new RegExp(t, e), f = t, m = e), g.lastIndex = 0, g
        }

        function s() {}

        function n() {
            var t;
            return _.length ? t = _.pop() : ((t = {}).sols = {}, t.solModifiers = []), t.deleteme = !1, t
        }

        function r(t) {
            cr.wipe(t.sols), cr.clearArray(t.solModifiers), _.push(t)
        }

        function o() {
            var t;
            return v.length ? t = v.pop() : (t = {}).insts = [], t.sa = !1, t
        }

        function a(t) {
            cr.clearArray(t.insts), v.push(t)
        }

        function A(t, e) {
            var i = t[0] - e[0];
            return 0 !== i ? i : t[1] - e[1]
        }

        function h(t, e) {
            return t[1] - e[1]
        }

        function c() {}

        function l(t, e, s) {
            if (t !== w || e !== x || s !== B) {
                var n = i(e, s);
                b = t.match(n), w = t, x = e, B = s
            }
        }
        var u = cr.system_object.prototype;
        t.prototype.EveryTick = function() {
            return !0
        }, t.prototype.OnLayoutStart = function() {
            return !0
        }, t.prototype.OnLayoutEnd = function() {
            return !0
        }, t.prototype.Compare = function(t, e, i) {
            return cr.do_cmp(t, e, i)
        }, t.prototype.CompareTime = function(t, e) {
            var i = this.runtime.kahanTime.sum;
            if (0 === t) {
                var s = this.runtime.getCurrentCondition();
                return !s.extra.CompareTime_executed && i >= e && (s.extra.CompareTime_executed = !0, !0)
            }
            return cr.do_cmp(i, t, e)
        }, t.prototype.LayerVisible = function(t) {
            return !!t && t.visible
        }, t.prototype.LayerEmpty = function(t) {
            return !!t && !t.instances.length
        }, t.prototype.LayerCmpOpacity = function(t, e, i) {
            return !!t && cr.do_cmp(100 * t.opacity, e, i)
        }, t.prototype.Repeat = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                s = i.current_event,
                n = i.isModifierAfterCnds(),
                r = this.runtime.pushLoopStack();
            if (n)
                for (e = 0; e < t && !r.stopped; e++) this.runtime.pushCopySol(s.solModifiers), r.index = e, s.retrigger(), this.runtime.popSol(s.solModifiers);
            else
                for (e = 0; e < t && !r.stopped; e++) r.index = e, s.retrigger();
            return this.runtime.popLoopStack(), !1
        }, t.prototype.While = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                s = i.current_event,
                n = i.isModifierAfterCnds(),
                r = this.runtime.pushLoopStack();
            if (n)
                for (e = 0; !r.stopped; e++) this.runtime.pushCopySol(s.solModifiers), r.index = e, s.retrigger() || (r.stopped = !0), this.runtime.popSol(s.solModifiers);
            else
                for (e = 0; !r.stopped; e++) r.index = e, s.retrigger() || (r.stopped = !0);
            return this.runtime.popLoopStack(), !1
        }, t.prototype.For = function(t, e, i) {
            var s, n = this.runtime.getCurrentEventStack(),
                r = n.current_event,
                o = n.isModifierAfterCnds(),
                a = this.runtime.pushLoopStack(t);
            if (i < e)
                if (o)
                    for (s = e; s >= i && !a.stopped; --s) this.runtime.pushCopySol(r.solModifiers), a.index = s, r.retrigger(), this.runtime.popSol(r.solModifiers);
                else
                    for (s = e; s >= i && !a.stopped; --s) a.index = s, r.retrigger();
            else if (o)
                for (s = e; s <= i && !a.stopped; ++s) this.runtime.pushCopySol(r.solModifiers), a.index = s, r.retrigger(), this.runtime.popSol(r.solModifiers);
            else
                for (s = e; s <= i && !a.stopped; ++s) a.index = s, r.retrigger();
            return this.runtime.popLoopStack(), !1
        };
        var p = [],
            d = -1;
        t.prototype.ForEach = function(t) {
            var e = t.getCurrentSol();
            d++, p.length === d && p.push([]);
            var i = p[d];
            cr.shallowAssignArray(i, e.getObjects());
            var s, n, r, o, a, A, h, c = this.runtime.getCurrentEventStack(),
                l = c.current_event,
                u = c.isModifierAfterCnds(),
                g = this.runtime.pushLoopStack(),
                f = t.is_contained;
            if (u)
                for (s = 0, n = i.length; s < n && !g.stopped; s++) {
                    if (this.runtime.pushCopySol(l.solModifiers), a = i[s], e = t.getCurrentSol(), e.select_all = !1, cr.clearArray(e.instances), e.instances[0] = a, f)
                        for (r = 0, o = a.siblings.length; r < o; r++)(h = (A = a.siblings[r]).type.getCurrentSol()).select_all = !1, cr.clearArray(h.instances), h.instances[0] = A;
                    g.index = s, l.retrigger(), this.runtime.popSol(l.solModifiers)
                } else
                    for (e.select_all = !1, cr.clearArray(e.instances), s = 0, n = i.length; s < n && !g.stopped; s++) {
                        if (a = i[s], e.instances[0] = a, f)
                            for (r = 0, o = a.siblings.length; r < o; r++)(h = (A = a.siblings[r]).type.getCurrentSol()).select_all = !1, cr.clearArray(h.instances), h.instances[0] = A;
                        g.index = s, l.retrigger()
                    }
            return cr.clearArray(i), this.runtime.popLoopStack(), d--, !1
        }, t.prototype.ForEachOrdered = function(t, i, s) {
            var n = t.getCurrentSol();
            d++, p.length === d && p.push([]);
            var r = p[d];
            cr.shallowAssignArray(r, n.getObjects());
            var o, a, A, h, c, l, u, g = this.runtime.getCurrentEventStack(),
                f = g.current_event,
                m = this.runtime.getCurrentCondition(),
                y = g.isModifierAfterCnds(),
                _ = this.runtime.pushLoopStack();
            for (o = 0, a = r.length; o < a; o++) r[o].extra.c2_feo_val = m.parameters[1].get(o);
            r.sort(e), 1 === s && r.reverse();
            var v = t.is_contained;
            if (y)
                for (o = 0, a = r.length; o < a && !_.stopped; o++) {
                    if (this.runtime.pushCopySol(f.solModifiers), c = r[o], n = t.getCurrentSol(), n.select_all = !1, cr.clearArray(n.instances), n.instances[0] = c, v)
                        for (A = 0, h = c.siblings.length; A < h; A++)(u = (l = c.siblings[A]).type.getCurrentSol()).select_all = !1, cr.clearArray(u.instances), u.instances[0] = l;
                    _.index = o, f.retrigger(), this.runtime.popSol(f.solModifiers)
                } else
                    for (n.select_all = !1, cr.clearArray(n.instances), o = 0, a = r.length; o < a && !_.stopped; o++) {
                        if (c = r[o], n.instances[0] = c, v)
                            for (A = 0, h = c.siblings.length; A < h; A++)(u = (l = c.siblings[A]).type.getCurrentSol()).select_all = !1, cr.clearArray(u.instances), u.instances[0] = l;
                        _.index = o, f.retrigger()
                    }
            return cr.clearArray(r), this.runtime.popLoopStack(), d--, !1
        }, t.prototype.PickByComparison = function(t, e, i, s) {
            var n, r, o, a;
            if (t) {
                d++, p.length === d && p.push([]);
                var A = p[d],
                    h = t.getCurrentSol();
                cr.shallowAssignArray(A, h.getObjects()), h.select_all && cr.clearArray(h.else_instances);
                var c = this.runtime.getCurrentCondition();
                for (n = 0, o = 0, r = A.length; n < r; n++) a = A[n], A[o] = a, e = c.parameters[1].get(n), s = c.parameters[3].get(n), cr.do_cmp(e, i, s) ? o++ : h.else_instances.push(a);
                return cr.truncateArray(A, o), h.select_all = !1, cr.shallowAssignArray(h.instances, A), cr.clearArray(A), d--, t.applySolToContainer(), !!h.instances.length
            }
        }, t.prototype.PickByEvaluate = function(t, e) {
            var i, s, n, r;
            if (t) {
                d++, p.length === d && p.push([]);
                var o = p[d],
                    a = t.getCurrentSol();
                cr.shallowAssignArray(o, a.getObjects()), a.select_all && cr.clearArray(a.else_instances);
                var A = this.runtime.getCurrentCondition();
                for (i = 0, n = 0, s = o.length; i < s; i++) r = o[i], o[n] = r, A.parameters[1].get(i) ? n++ : a.else_instances.push(r);
                return cr.truncateArray(o, n), a.select_all = !1, cr.shallowAssignArray(a.instances, o), cr.clearArray(o), d--, t.applySolToContainer(), !!a.instances.length
            }
        }, t.prototype.TriggerOnce = function() {
            var t = this.runtime.getCurrentCondition().extra;
            void 0 === t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
            var e = t.TriggerOnce_lastTick,
                i = this.runtime.tickcount;
            return t.TriggerOnce_lastTick = i, this.runtime.layout_first_tick || e !== i - 1
        }, t.prototype.Every = function(t) {
            var e = this.runtime.getCurrentCondition(),
                i = e.extra.Every_lastTime || 0,
                s = this.runtime.kahanTime.sum;
            void 0 === e.extra.Every_seconds && (e.extra.Every_seconds = t);
            var n = e.extra.Every_seconds;
            return s >= i + n ? (e.extra.Every_lastTime = i + n, s >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = s), e.extra.Every_seconds = t, !0) : (s < i - .1 && (e.extra.Every_lastTime = s), !1)
        }, t.prototype.PickNth = function(t, e) {
            if (!t) return !1;
            var i = t.getCurrentSol(),
                s = i.getObjects();
            if ((e = cr.floor(e)) < 0 || e >= s.length) return !1;
            var n = s[e];
            return i.pick_one(n), t.applySolToContainer(), !0
        }, t.prototype.PickRandom = function(t) {
            if (!t) return !1;
            var e = t.getCurrentSol(),
                i = e.getObjects(),
                s = cr.floor(Math.random() * i.length);
            if (s >= i.length) return !1;
            var n = i[s];
            return e.pick_one(n), t.applySolToContainer(), !0
        }, t.prototype.CompareVar = function(t, e, i) {
            return cr.do_cmp(t.getValue(), e, i)
        }, t.prototype.IsGroupActive = function(t) {
            var e = this.runtime.groups_by_name[t.toLowerCase()];
            return e && e.group_active
        }, t.prototype.IsPreview = function() {
            return "undefined" != typeof cr_is_preview
        }, t.prototype.PickAll = function(t) {
            return !!t && (!!t.instances.length && (t.getCurrentSol().select_all = !0, t.applySolToContainer(), !0))
        }, t.prototype.IsMobile = function() {
            return this.runtime.isMobile
        }, t.prototype.CompareBetween = function(t, e, i) {
            return t >= e && t <= i
        }, t.prototype.Else = function() {
            var t = this.runtime.getCurrentEventStack();
            return !t.else_branch_ran && !t.last_event_true
        }, t.prototype.OnLoadFinished = function() {
            return !0
        }, t.prototype.OnCanvasSnapshot = function() {
            return !0
        }, t.prototype.EffectsSupported = function() {
            return !!this.runtime.glwrap
        }, t.prototype.OnSaveComplete = function() {
            return !0
        }, t.prototype.OnSaveFailed = function() {
            return !0
        }, t.prototype.OnLoadComplete = function() {
            return !0
        }, t.prototype.OnLoadFailed = function() {
            return !0
        }, t.prototype.ObjectUIDExists = function(t) {
            return !!this.runtime.getObjectByUID(t)
        }, t.prototype.IsOnPlatform = function(t) {
            var e = this.runtime;
            switch (t) {
                case 0:
                    return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
                case 1:
                    return e.isiOS;
                case 2:
                    return e.isAndroid;
                case 3:
                    return e.isWindows8App;
                case 4:
                    return e.isWindowsPhone8;
                case 5:
                    return e.isBlackberry10;
                case 6:
                    return e.isTizen;
                case 7:
                    return e.isCocoonJs;
                case 8:
                    return e.isCordova;
                case 9:
                    return e.isArcade;
                case 10:
                    return e.isNodeWebkit;
                case 11:
                    return e.isCrosswalk;
                case 12:
                    return e.isAmazonWebApp;
                case 13:
                    return e.isWindows10;
                default:
                    return !1
            }
        };
        var g = null,
            f = "",
            m = "";
        t.prototype.RegexTest = function(t, e, s) {
            return i(e, s).test(t)
        };
        var y = [];
        t.prototype.PickOverlappingPoint = function(t, e, i) {
            if (!t) return !1;
            var s, n, r, o = t.getCurrentSol(),
                a = o.getObjects(),
                A = this.runtime.getCurrentEventStack().current_event.orblock,
                h = this.runtime.getCurrentCondition();
            for (o.select_all ? (cr.shallowAssignArray(y, a), cr.clearArray(o.else_instances), o.select_all = !1, cr.clearArray(o.instances)) : A ? (cr.shallowAssignArray(y, o.else_instances), cr.clearArray(o.else_instances)) : (cr.shallowAssignArray(y, a), cr.clearArray(o.instances)), s = 0, n = y.length; s < n; ++s)(r = y[s]).update_bbox(), cr.xor(r.contains_pt(e, i), h.inverted) ? o.instances.push(r) : o.else_instances.push(r);
            return t.applySolToContainer(), cr.xor(!!o.instances.length, h.inverted)
        }, t.prototype.IsNaN = function(t) {
            return !!isNaN(t)
        }, t.prototype.AngleWithin = function(t, e, i) {
            return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
        }, t.prototype.IsClockwiseFrom = function(t, e) {
            return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
        }, t.prototype.IsBetweenAngles = function(t, e, i) {
            var s = cr.to_clamped_radians(t),
                n = cr.to_clamped_radians(e),
                r = cr.to_clamped_radians(i);
            return !cr.angleClockwise(r, n) ? !(!cr.angleClockwise(s, n) && cr.angleClockwise(s, r)) : cr.angleClockwise(s, n) && !cr.angleClockwise(s, r)
        }, t.prototype.IsValueType = function(t, e) {
            return "number" == typeof t ? 0 === e : 1 === e
        }, u.cnds = new t, s.prototype.GoToLayout = function(t) {
            this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
        }, s.prototype.NextPrevLayout = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
                if ((!t || 0 !== e) && (t || e !== this.runtime.layouts_by_index.length - 1)) {
                    var i = this.runtime.layouts_by_index[e + (t ? -1 : 1)];
                    this.runtime.changelayout = i
                }
            }
        }, s.prototype.CreateObject = function(t, e, i, s) {
            if (e && t) {
                var n = this.runtime.createInstance(t, e, i, s);
                if (n) {
                    this.runtime.isInOnDestroy++;
                    var r, o, a;
                    if (this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, n), n.is_contained)
                        for (r = 0, o = n.siblings.length; r < o; r++) a = n.siblings[r], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
                    this.runtime.isInOnDestroy--;
                    var A = t.getCurrentSol();
                    if (A.select_all = !1, cr.clearArray(A.instances), A.instances[0] = n, n.is_contained)
                        for (r = 0, o = n.siblings.length; r < o; r++)(A = (a = n.siblings[r]).type.getCurrentSol()).select_all = !1, cr.clearArray(A.instances), A.instances[0] = a
                }
            }
        }, s.prototype.SetLayerVisible = function(t, e) {
            t && t.visible !== e && (t.visible = e, this.runtime.redraw = !0)
        }, s.prototype.SetLayerOpacity = function(t, e) {
            t && (e = cr.clamp(e / 100, 0, 1), t.opacity !== e && (t.opacity = e, this.runtime.redraw = !0))
        }, s.prototype.SetLayerScaleRate = function(t, e) {
            t && t.zoomRate !== e && (t.zoomRate = e, this.runtime.redraw = !0)
        }, s.prototype.SetLayerForceOwnTexture = function(t, e) {
            t && (e = !!e, t.forceOwnTexture !== e && (t.forceOwnTexture = e, this.runtime.redraw = !0))
        }, s.prototype.SetLayoutScale = function(t) {
            this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t, this.runtime.running_layout.boundScrolling(), this.runtime.redraw = !0)
        }, s.prototype.ScrollX = function(t) {
            this.runtime.running_layout.scrollToX(t)
        }, s.prototype.ScrollY = function(t) {
            this.runtime.running_layout.scrollToY(t)
        }, s.prototype.Scroll = function(t, e) {
            this.runtime.running_layout.scrollToX(t), this.runtime.running_layout.scrollToY(e)
        }, s.prototype.ScrollToObject = function(t) {
            var e = t.getFirstPicked();
            e && (this.runtime.running_layout.scrollToX(e.x), this.runtime.running_layout.scrollToY(e.y))
        }, s.prototype.SetVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
        }, s.prototype.AddVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
        }, s.prototype.SubVar = function(t, e) {
            0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
        }, s.prototype.SetGroupActive = function(t, e) {
            var i = this.runtime.groups_by_name[t.toLowerCase()];
            if (i) switch (e) {
                case 0:
                    i.setGroupActive(!1);
                    break;
                case 1:
                    i.setGroupActive(!0);
                    break;
                case 2:
                    i.setGroupActive(!i.group_active)
            }
        }, s.prototype.SetTimescale = function(t) {
            var e = t;
            e < 0 && (e = 0), this.runtime.timescale = e
        }, s.prototype.SetObjectTimescale = function(t, e) {
            var i = e;
            if (i < 0 && (i = 0), t) {
                var s, n, r = t.getCurrentSol().getObjects();
                for (s = 0, n = r.length; s < n; s++) r[s].my_timescale = i
            }
        }, s.prototype.RestoreObjectTimescale = function(t) {
            if (!t) return !1;
            var e, i, s = t.getCurrentSol().getObjects();
            for (e = 0, i = s.length; e < i; e++) s[e].my_timescale = -1
        };
        var _ = [],
            v = [];
        s.prototype.Wait = function(t) {
            if (!(t < 0)) {
                var e, i, s, r, a, A = this.runtime.getCurrentEventStack(),
                    h = n();
                for (h.time = this.runtime.kahanTime.sum + t, h.signaltag = "", h.signalled = !1, h.ev = A.current_event, h.actindex = A.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++)(s = (r = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === A.current_event.solModifiers.indexOf(r) || (h.solModifiers.push(r), (a = o()).sa = s.select_all, cr.shallowAssignArray(a.insts, s.instances), h.sols[e.toString()] = a);
                return this.waits.push(h), !0
            }
        }, s.prototype.WaitForSignal = function(t) {
            var e, i, s, r, a, A = this.runtime.getCurrentEventStack(),
                h = n();
            for (h.time = -1, h.signaltag = t.toLowerCase(), h.signalled = !1, h.ev = A.current_event, h.actindex = A.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++)(s = (r = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === A.current_event.solModifiers.indexOf(r) || (h.solModifiers.push(r), (a = o()).sa = s.select_all, cr.shallowAssignArray(a.insts, s.instances), h.sols[e.toString()] = a);
            return this.waits.push(h), !0
        }, s.prototype.Signal = function(t) {
            var e, i, s, n = t.toLowerCase();
            for (e = 0, i = this.waits.length; e < i; ++e) - 1 === (s = this.waits[e]).time && s.signaltag === n && (s.signalled = !0)
        }, s.prototype.SetLayerScale = function(t, e) {
            t && t.scale !== e && (t.scale = e, this.runtime.redraw = !0)
        }, s.prototype.ResetGlobals = function() {
            var t, e, i;
            for (t = 0, e = this.runtime.all_global_vars.length; t < e; t++)(i = this.runtime.all_global_vars[t]).data = i.initial
        }, s.prototype.SetLayoutAngle = function(t) {
            t = cr.to_radians(t), t = cr.clamp_angle(t), this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t, this.runtime.redraw = !0)
        }, s.prototype.SetLayerAngle = function(t, e) {
            t && (e = cr.to_radians(e), e = cr.clamp_angle(e), t.angle !== e && (t.angle = e, this.runtime.redraw = !0))
        }, s.prototype.SetLayerParallax = function(t, e, i) {
            if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
                if (t.parallaxX = e / 100, t.parallaxY = i / 100, 1 !== t.parallaxX || 1 !== t.parallaxY) {
                    var s, n, r = t.instances;
                    for (s = 0, n = r.length; s < n; ++s) r[s].type.any_instance_parallaxed = !0
                }
                this.runtime.redraw = !0
            }
        }, s.prototype.SetLayerBackground = function(t, e) {
            if (t) {
                var i = cr.GetRValue(e),
                    s = cr.GetGValue(e),
                    n = cr.GetBValue(e);
                t.background_color[0] === i && t.background_color[1] === s && t.background_color[2] === n || (t.background_color[0] = i, t.background_color[1] = s, t.background_color[2] = n, this.runtime.redraw = !0)
            }
        }, s.prototype.SetLayerTransparent = function(t, e) {
            t && !!e != !!t.transparent && (t.transparent = !!e, this.runtime.redraw = !0)
        }, s.prototype.SetLayerBlendMode = function(t, e) {
            t && t.blend_mode !== e && (t.blend_mode = e, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl), this.runtime.redraw = !0)
        }, s.prototype.StopLoop = function() {
            this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
        }, s.prototype.GoToLayoutByName = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e;
                for (e in this.runtime.layouts)
                    if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t)) return void(this.runtime.changelayout = this.runtime.layouts[e])
            }
        }, s.prototype.RestartLayout = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout && this.runtime.running_layout) {
                this.runtime.changelayout = this.runtime.running_layout;
                var e, i, s;
                for (e = 0, i = this.runtime.allGroups.length; e < i; e++)(s = this.runtime.allGroups[e]).setGroupActive(s.initially_activated)
            }
        }, s.prototype.SnapshotCanvas = function(t, e) {
            this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
        }, s.prototype.SetCanvasSize = function(t, e) {
            if (!(t <= 0 || e <= 0)) {
                var i = this.runtime.fullscreen_mode;
                (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen) && this.runtime.fullscreen_scaling > 0 && (i = this.runtime.fullscreen_scaling), 0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t, this.runtime.original_height = e, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
            }
        }, s.prototype.SetLayoutEffectEnabled = function(t, e) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var i = this.runtime.running_layout.getEffectByName(e);
                if (i) {
                    var s = 1 === t;
                    i.active != s && (i.active = s, this.runtime.running_layout.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, s.prototype.SetLayerEffectEnabled = function(t, e, i) {
            if (t && this.runtime.glwrap) {
                var s = t.getEffectByName(i);
                if (s) {
                    var n = 1 === e;
                    s.active != n && (s.active = n, t.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, s.prototype.SetLayoutEffectParam = function(t, e, i) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var s = this.runtime.running_layout.getEffectByName(t);
                if (s) {
                    var n = this.runtime.running_layout.effect_params[s.index];
                    (e = Math.floor(e)) < 0 || e >= n.length || (1 === this.runtime.glwrap.getProgramParameterType(s.shaderindex, e) && (i /= 100), n[e] !== i && (n[e] = i, s.active && (this.runtime.redraw = !0)))
                }
            }
        }, s.prototype.SetLayerEffectParam = function(t, e, i, s) {
            if (t && this.runtime.glwrap) {
                var n = t.getEffectByName(e);
                if (n) {
                    var r = t.effect_params[n.index];
                    (i = Math.floor(i)) < 0 || i >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, i) && (s /= 100), r[i] !== s && (r[i] = s, n.active && (this.runtime.redraw = !0)))
                }
            }
        }, s.prototype.SaveState = function(t) {
            this.runtime.saveToSlot = t
        }, s.prototype.LoadState = function(t) {
            this.runtime.loadFromSlot = t
        }, s.prototype.LoadStateJSON = function(t) {
            this.runtime.loadFromJson = t
        }, s.prototype.SetHalfFramerateMode = function(t) {
            this.runtime.halfFramerateMode = 0 !== t
        }, s.prototype.SetFullscreenQuality = function(t) {
            (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }, s.prototype.ResetPersisted = function() {
            var t, e;
            for (t = 0, e = this.runtime.layouts_by_index.length; t < e; ++t) this.runtime.layouts_by_index[t].persist_data = {}, this.runtime.layouts_by_index[t].first_visit = !0
        }, s.prototype.RecreateInitialObjects = function(t, e, i, s, n) {
            t && this.runtime.running_layout.recreateInitialObjects(t, e, i, s, n)
        }, s.prototype.SetPixelRounding = function(t) {
            this.runtime.pixel_rounding = 0 !== t, this.runtime.redraw = !0
        }, s.prototype.SetMinimumFramerate = function(t) {
            t < 1 && (t = 1), t > 120 && (t = 120), this.runtime.minimumFramerate = t
        }, s.prototype.SortZOrderByInstVar = function(t, e) {
            if (t) {
                var i, s, n, r, o, a, c = t.getCurrentSol().getObjects(),
                    l = [],
                    u = [],
                    p = this.runtime.running_layout,
                    d = t.is_family,
                    g = t.family_index;
                for (i = 0, s = c.length; i < s; ++i)(n = c[i]).layer && (r = d ? n.instance_vars[e + n.type.family_var_map[g]] : n.instance_vars[e], l.push([n.layer.index, n.get_zindex()]), u.push([n, r]));
                if (l.length)
                    for (l.sort(A), u.sort(h), i = 0, s = l.length; i < s; ++i) n = u[i][0], o = p.layers[l[i][0]], a = l[i][1], o.instances[a] !== n && (o.instances[a] = n, n.layer = o, o.setZIndicesStaleFrom(a))
            }
        }, u.acts = new s, c.prototype.int = function(t, e) {
            cr.is_string(e) ? (t.set_int(parseInt(e, 10)), isNaN(t.data) && (t.data = 0)) : t.set_int(e)
        }, c.prototype.float = function(t, e) {
            cr.is_string(e) ? (t.set_float(parseFloat(e)), isNaN(t.data) && (t.data = 0)) : t.set_float(e)
        }, c.prototype.str = function(t, e) {
            cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
        }, c.prototype.len = function(t, e) {
            t.set_int(e.length || 0)
        }, c.prototype.random = function(t, e, i) {
            void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
        }, c.prototype.sqrt = function(t, e) {
            t.set_float(Math.sqrt(e))
        }, c.prototype.abs = function(t, e) {
            t.set_float(Math.abs(e))
        }, c.prototype.round = function(t, e) {
            t.set_int(Math.round(e))
        }, c.prototype.floor = function(t, e) {
            t.set_int(Math.floor(e))
        }, c.prototype.ceil = function(t, e) {
            t.set_int(Math.ceil(e))
        }, c.prototype.sin = function(t, e) {
            t.set_float(Math.sin(cr.to_radians(e)))
        }, c.prototype.cos = function(t, e) {
            t.set_float(Math.cos(cr.to_radians(e)))
        }, c.prototype.tan = function(t, e) {
            t.set_float(Math.tan(cr.to_radians(e)))
        }, c.prototype.asin = function(t, e) {
            t.set_float(cr.to_degrees(Math.asin(e)))
        }, c.prototype.acos = function(t, e) {
            t.set_float(cr.to_degrees(Math.acos(e)))
        }, c.prototype.atan = function(t, e) {
            t.set_float(cr.to_degrees(Math.atan(e)))
        }, c.prototype.exp = function(t, e) {
            t.set_float(Math.exp(e))
        }, c.prototype.ln = function(t, e) {
            t.set_float(Math.log(e))
        }, c.prototype.log10 = function(t, e) {
            t.set_float(Math.log(e) / Math.LN10)
        }, c.prototype.max = function(t) {
            var e = arguments[1];
            "number" != typeof e && (e = 0);
            var i, s, n;
            for (i = 2, s = arguments.length; i < s; i++) "number" == typeof(n = arguments[i]) && e < n && (e = n);
            t.set_float(e)
        }, c.prototype.min = function(t) {
            var e = arguments[1];
            "number" != typeof e && (e = 0);
            var i, s, n;
            for (i = 2, s = arguments.length; i < s; i++) "number" == typeof(n = arguments[i]) && e > n && (e = n);
            t.set_float(e)
        }, c.prototype.dt = function(t) {
            t.set_float(this.runtime.dt)
        }, c.prototype.timescale = function(t) {
            t.set_float(this.runtime.timescale)
        }, c.prototype.wallclocktime = function(t) {
            t.set_float((Date.now() - this.runtime.start_time) / 1e3)
        }, c.prototype.time = function(t) {
            t.set_float(this.runtime.kahanTime.sum)
        }, c.prototype.tickcount = function(t) {
            t.set_int(this.runtime.tickcount)
        }, c.prototype.objectcount = function(t) {
            t.set_int(this.runtime.objectcount)
        }, c.prototype.fps = function(t) {
            t.set_int(this.runtime.fps)
        }, c.prototype.loopindex = function(t, e) {
            var i, s;
            if (this.runtime.loop_stack.length)
                if (e) {
                    for (s = this.runtime.loop_stack_index; s >= 0; --s)
                        if ((i = this.runtime.loop_stack[s]).name === e) return void t.set_int(i.index);
                    t.set_int(0)
                } else i = this.runtime.getCurrentLoop(), t.set_int(i ? i.index : -1);
            else t.set_int(0)
        }, c.prototype.distance = function(t, e, i, s, n) {
            t.set_float(cr.distanceTo(e, i, s, n))
        }, c.prototype.angle = function(t, e, i, s, n) {
            t.set_float(cr.to_degrees(cr.angleTo(e, i, s, n)))
        }, c.prototype.scrollx = function(t) {
            t.set_float(this.runtime.running_layout.scrollX)
        }, c.prototype.scrolly = function(t) {
            t.set_float(this.runtime.running_layout.scrollY)
        }, c.prototype.newline = function(t) {
            t.set_string("\n")
        }, c.prototype.lerp = function(t, e, i, s) {
            t.set_float(cr.lerp(e, i, s))
        }, c.prototype.qarp = function(t, e, i, s, n) {
            t.set_float(cr.qarp(e, i, s, n))
        }, c.prototype.cubic = function(t, e, i, s, n, r) {
            t.set_float(cr.cubic(e, i, s, n, r))
        }, c.prototype.cosp = function(t, e, i, s) {
            t.set_float(cr.cosp(e, i, s))
        }, c.prototype.windowwidth = function(t) {
            t.set_int(this.runtime.width)
        }, c.prototype.windowheight = function(t) {
            t.set_int(this.runtime.height)
        }, c.prototype.uppercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
        }, c.prototype.lowercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
        }, c.prototype.clamp = function(t, e, i, s) {
            e < i ? t.set_float(i) : e > s ? t.set_float(s) : t.set_float(e)
        }, c.prototype.layerscale = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.scale) : t.set_float(0)
        }, c.prototype.layeropacity = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.opacity) : t.set_float(0)
        }, c.prototype.layerscalerate = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.zoomRate) : t.set_float(0)
        }, c.prototype.layerparallaxx = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxX) : t.set_float(0)
        }, c.prototype.layerparallaxy = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxY) : t.set_float(0)
        }, c.prototype.layerindex = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_int(i.index) : t.set_int(-1)
        }, c.prototype.layoutscale = function(t) {
            this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
        }, c.prototype.layoutangle = function(t) {
            t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
        }, c.prototype.layerangle = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(cr.to_degrees(i.angle)) : t.set_float(0)
        }, c.prototype.layoutwidth = function(t) {
            t.set_int(this.runtime.running_layout.width)
        }, c.prototype.layoutheight = function(t) {
            t.set_int(this.runtime.running_layout.height)
        }, c.prototype.find = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), "i"))) : t.set_int(-1)
        }, c.prototype.findcase = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), ""))) : t.set_int(-1)
        }, c.prototype.left = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
        }, c.prototype.right = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
        }, c.prototype.mid = function(t, e, i, s) {
            t.set_string(cr.is_string(e) ? e.substr(i, s) : "")
        }, c.prototype.tokenat = function(t, e, i, s) {
            if (cr.is_string(e) && cr.is_string(s)) {
                var n = e.split(s),
                    r = cr.floor(i);
                r < 0 || r >= n.length ? t.set_string("") : t.set_string(n[r])
            } else t.set_string("")
        }, c.prototype.tokencount = function(t, e, i) {
            cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
        }, c.prototype.replace = function(t, e, i, s) {
            cr.is_string(e) && cr.is_string(i) && cr.is_string(s) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i), "gi"), s)) : t.set_string(cr.is_string(e) ? e : "")
        }, c.prototype.trim = function(t, e) {
            t.set_string(cr.is_string(e) ? e.trim() : "")
        }, c.prototype.pi = function(t) {
            t.set_float(cr.PI)
        }, c.prototype.layoutname = function(t) {
            this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
        }, c.prototype.renderer = function(t) {
            t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
        }, c.prototype.rendererdetail = function(t) {
            t.set_string(this.runtime.glUnmaskedRenderer)
        }, c.prototype.anglediff = function(t, e, i) {
            t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
        }, c.prototype.choose = function(t) {
            var e = cr.floor(Math.random() * (arguments.length - 1));
            t.set_any(arguments[e + 1])
        }, c.prototype.rgb = function(t, e, i, s) {
            t.set_int(cr.RGB(e, i, s))
        }, c.prototype.projectversion = function(t) {
            t.set_string(this.runtime.versionstr)
        }, c.prototype.projectname = function(t) {
            t.set_string(this.runtime.projectName)
        }, c.prototype.anglelerp = function(t, e, i, s) {
            e = cr.to_radians(e), i = cr.to_radians(i);
            var n = cr.angleDiff(e, i);
            cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + n * s)) : t.set_float(cr.to_clamped_degrees(e - n * s))
        }, c.prototype.anglerotate = function(t, e, i, s) {
            e = cr.to_radians(e), i = cr.to_radians(i), s = cr.to_radians(s), t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, s)))
        }, c.prototype.zeropad = function(t, e, i) {
            var s = e < 0 ? "-" : "";
            e < 0 && (e = -e);
            for (var n = i - e.toString().length, r = 0; r < n; r++) s += "0";
            t.set_string(s + e.toString())
        }, c.prototype.cpuutilisation = function(t) {
            t.set_float(this.runtime.cpuutilisation / 1e3)
        }, c.prototype.viewportleft = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewLeft : 0)
        }, c.prototype.viewporttop = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewTop : 0)
        }, c.prototype.viewportright = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewRight : 0)
        }, c.prototype.viewportbottom = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewBottom : 0)
        }, c.prototype.loadingprogress = function(t) {
            t.set_float(this.runtime.loadingprogress)
        }, c.prototype.unlerp = function(t, e, i, s) {
            t.set_float(cr.unlerp(e, i, s))
        }, c.prototype.canvassnapshot = function(t) {
            t.set_string(this.runtime.snapshotData)
        }, c.prototype.urlencode = function(t, e) {
            t.set_string(encodeURIComponent(e))
        }, c.prototype.urldecode = function(t, e) {
            t.set_string(decodeURIComponent(e))
        }, c.prototype.canvastolayerx = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.canvasToLayer(i, s, !0) : 0)
        }, c.prototype.canvastolayery = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.canvasToLayer(i, s, !1) : 0)
        }, c.prototype.layertocanvasx = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.layerToCanvas(i, s, !0) : 0)
        }, c.prototype.layertocanvasy = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.layerToCanvas(i, s, !1) : 0)
        }, c.prototype.savestatejson = function(t) {
            t.set_string(this.runtime.lastSaveJson)
        }, c.prototype.imagememoryusage = function(t) {
            this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
        }, c.prototype.regexsearch = function(t, e, s, n) {
            var r = i(s, n);
            t.set_int(e ? e.search(r) : -1)
        }, c.prototype.regexreplace = function(t, e, s, n, r) {
            var o = i(s, n);
            t.set_string(e ? e.replace(o, r) : "")
        };
        var b = [],
            w = "",
            x = "",
            B = "";
        c.prototype.regexmatchcount = function(t, e, s, n) {
            i(s, n);
            l(e, s, n), t.set_int(b ? b.length : 0)
        }, c.prototype.regexmatchat = function(t, e, s, n, r) {
            r = Math.floor(r);
            i(s, n);
            l(e, s, n), !b || r < 0 || r >= b.length ? t.set_string("") : t.set_string(b[r])
        }, c.prototype.infinity = function(t) {
            t.set_float(1 / 0)
        }, c.prototype.setbit = function(t, e, i, s) {
            e |= 0, i |= 0, s = 0 !== s ? 1 : 0, t.set_int(e & ~(1 << i) | s << i)
        }, c.prototype.togglebit = function(t, e, i) {
            e |= 0, i |= 0, t.set_int(e ^ 1 << i)
        }, c.prototype.getbit = function(t, e, i) {
            e |= 0, i |= 0, t.set_int(e & 1 << i ? 1 : 0)
        }, c.prototype.originalwindowwidth = function(t) {
            t.set_int(this.runtime.original_width)
        }, c.prototype.originalwindowheight = function(t) {
            t.set_int(this.runtime.original_height)
        }, u.exps = new c, u.runWaits = function() {
            var t, e, i, s, n, o, A, h = this.runtime.getCurrentEventStack();
            for (t = 0, i = this.waits.length; t < i; t++) {
                if (-1 === (s = this.waits[t]).time) {
                    if (!s.signalled) continue
                } else if (s.time > this.runtime.kahanTime.sum) continue;
                h.current_event = s.ev, h.actindex = s.actindex, h.cndindex = 0;
                for (n in s.sols) s.sols.hasOwnProperty(n) && (o = this.runtime.types_by_index[parseInt(n, 10)].getCurrentSol(), A = s.sols[n], o.select_all = A.sa, cr.shallowAssignArray(o.instances, A.insts), a(A));
                s.ev.resume_actions_and_subevents(), this.runtime.clearSol(s.solModifiers), s.deleteme = !0
            }
            for (t = 0, e = 0, i = this.waits.length; t < i; t++) s = this.waits[t], this.waits[e] = s, s.deleteme ? r(s) : e++;
            cr.truncateArray(this.waits, e)
        }
    }(),
    function() {
        cr.add_common_aces = function(t, e) {
            var i = t[1],
                s = t[3],
                n = t[4],
                r = t[5],
                o = t[6],
                a = t[7],
                A = t[8];
            e.cnds || (e.cnds = {}), e.acts || (e.acts = {}), e.exps || (e.exps = {});
            var h = e.cnds,
                c = e.acts,
                l = e.exps;
            s && (h.CompareX = function(t, e) {
                return cr.do_cmp(this.x, t, e)
            }, h.CompareY = function(t, e) {
                return cr.do_cmp(this.y, t, e)
            }, h.IsOnScreen = function() {
                var t = this.layer;
                this.update_bbox();
                var e = this.bbox;
                return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
            }, h.IsOutsideLayout = function() {
                this.update_bbox();
                var t = this.bbox,
                    e = this.runtime.running_layout;
                return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
            }, h.PickDistance = function(t, e, i) {
                var s = this.getCurrentSol(),
                    n = s.getObjects();
                if (!n.length) return !1;
                var r, o, a, A = n[0],
                    h = A,
                    c = cr.distanceTo(A.x, A.y, e, i);
                for (r = 1, o = n.length; r < o; r++) A = n[r], a = cr.distanceTo(A.x, A.y, e, i), (0 === t && a < c || 1 === t && a > c) && (c = a, h = A);
                return s.pick_one(h), !0
            }, c.SetX = function(t) {
                this.x !== t && (this.x = t, this.set_bbox_changed())
            }, c.SetY = function(t) {
                this.y !== t && (this.y = t, this.set_bbox_changed())
            }, c.SetPos = function(t, e) {
                this.x === t && this.y === e || (this.x = t, this.y = e, this.set_bbox_changed())
            }, c.SetPosToObject = function(t, e) {
                var i = t.getPairedInstance(this);
                if (i) {
                    var s, n;
                    i.getImagePoint ? (s = i.getImagePoint(e, !0), n = i.getImagePoint(e, !1)) : (s = i.x, n = i.y), this.x === s && this.y === n || (this.x = s, this.y = n, this.set_bbox_changed())
                }
            }, c.MoveForward = function(t) {
                0 !== t && (this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.set_bbox_changed())
            }, c.MoveAtAngle = function(t, e) {
                0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e, this.y += Math.sin(cr.to_radians(t)) * e, this.set_bbox_changed())
            }, l.X = function(t) {
                t.set_float(this.x)
            }, l.Y = function(t) {
                t.set_float(this.y)
            }, l.dt = function(t) {
                t.set_float(this.runtime.getDt(this))
            }), n && (h.CompareWidth = function(t, e) {
                return cr.do_cmp(this.width, t, e)
            }, h.CompareHeight = function(t, e) {
                return cr.do_cmp(this.height, t, e)
            }, c.SetWidth = function(t) {
                this.width !== t && (this.width = t, this.set_bbox_changed())
            }, c.SetHeight = function(t) {
                this.height !== t && (this.height = t, this.set_bbox_changed())
            }, c.SetSize = function(t, e) {
                this.width === t && this.height === e || (this.width = t, this.height = e, this.set_bbox_changed())
            }, l.Width = function(t) {
                t.set_float(this.width)
            }, l.Height = function(t) {
                t.set_float(this.height)
            }, l.BBoxLeft = function(t) {
                this.update_bbox(), t.set_float(this.bbox.left)
            }, l.BBoxTop = function(t) {
                this.update_bbox(), t.set_float(this.bbox.top)
            }, l.BBoxRight = function(t) {
                this.update_bbox(), t.set_float(this.bbox.right)
            }, l.BBoxBottom = function(t) {
                this.update_bbox(), t.set_float(this.bbox.bottom)
            }), r && (h.AngleWithin = function(t, e) {
                return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
            }, h.IsClockwiseFrom = function(t) {
                return cr.angleClockwise(this.angle, cr.to_radians(t))
            }, h.IsBetweenAngles = function(t, e) {
                var i = cr.to_clamped_radians(t),
                    s = cr.to_clamped_radians(e),
                    n = cr.clamp_angle(this.angle);
                return !cr.angleClockwise(s, i) ? !(!cr.angleClockwise(n, i) && cr.angleClockwise(n, s)) : cr.angleClockwise(n, i) && !cr.angleClockwise(n, s)
            }, c.SetAngle = function(t) {
                var e = cr.to_radians(cr.clamp_angle_degrees(t));
                isNaN(e) || this.angle !== e && (this.angle = e, this.set_bbox_changed())
            }, c.RotateClockwise = function(t) {
                0 === t || isNaN(t) || (this.angle += cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, c.RotateCounterclockwise = function(t) {
                0 === t || isNaN(t) || (this.angle -= cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, c.RotateTowardAngle = function(t, e) {
                var i = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
                isNaN(i) || this.angle !== i && (this.angle = i, this.set_bbox_changed())
            }, c.RotateTowardPosition = function(t, e, i) {
                var s = e - this.x,
                    n = i - this.y,
                    r = Math.atan2(n, s),
                    o = cr.angleRotate(this.angle, r, cr.to_radians(t));
                isNaN(o) || this.angle !== o && (this.angle = o, this.set_bbox_changed())
            }, c.SetTowardPosition = function(t, e) {
                var i = t - this.x,
                    s = e - this.y,
                    n = Math.atan2(s, i);
                isNaN(n) || this.angle !== n && (this.angle = n, this.set_bbox_changed())
            }, l.Angle = function(t) {
                t.set_float(cr.to_clamped_degrees(this.angle))
            }), i || (h.CompareInstanceVar = function(t, e, i) {
                return cr.do_cmp(this.instance_vars[t], e, i)
            }, h.IsBoolInstanceVarSet = function(t) {
                return this.instance_vars[t]
            }, h.PickInstVarHiLow = function(t, e) {
                var i = this.getCurrentSol(),
                    s = i.getObjects();
                if (!s.length) return !1;
                var n, r, o, a = s[0],
                    A = a,
                    h = a.instance_vars[e];
                for (n = 1, r = s.length; n < r; n++) o = (a = s[n]).instance_vars[e], (0 === t && o < h || 1 === t && o > h) && (h = o, A = a);
                return i.pick_one(A), !0
            }, h.PickByUID = function(t) {
                var e, i, s, n, r, o, a;
                if (this.runtime.getCurrentCondition().inverted) {
                    if ((a = this.getCurrentSol()).select_all) {
                        for (a.select_all = !1, cr.clearArray(a.instances), cr.clearArray(a.else_instances), e = 0, i = (o = this.instances).length; e < i; e++)(n = o[e]).uid === t ? a.else_instances.push(n) : a.instances.push(n);
                        return this.applySolToContainer(), !!a.instances.length
                    }
                    for (e = 0, s = 0, i = a.instances.length; e < i; e++) n = a.instances[e], a.instances[s] = n, n.uid === t ? a.else_instances.push(n) : s++;
                    return cr.truncateArray(a.instances, s), this.applySolToContainer(), !!a.instances.length
                }
                if (!(n = this.runtime.getObjectByUID(t))) return !1;
                if (!(a = this.getCurrentSol()).select_all && -1 === a.instances.indexOf(n)) return !1;
                if (this.is_family) {
                    for (e = 0, i = (r = n.type.families).length; e < i; e++)
                        if (r[e] === this) return a.pick_one(n), this.applySolToContainer(), !0
                } else if (n.type === this) return a.pick_one(n), this.applySolToContainer(), !0;
                return !1
            }, h.OnCreated = function() {
                return !0
            }, h.OnDestroyed = function() {
                return !0
            }, c.SetInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
            }, c.AddInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
            }, c.SubInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
            }, c.SetBoolInstanceVar = function(t, e) {
                this.instance_vars[t] = e ? 1 : 0
            }, c.ToggleBoolInstanceVar = function(t) {
                this.instance_vars[t] = 1 - this.instance_vars[t]
            }, c.Destroy = function() {
                this.runtime.DestroyInstance(this)
            }, c.LoadFromJsonString || (c.LoadFromJsonString = function(t) {
                var e, i, s, n;
                try {
                    e = JSON.parse(t)
                } catch (t) {
                    return
                }
                if (this.runtime.loadInstanceFromJSON(this, e, !0), this.afterLoad && this.afterLoad(), this.behavior_insts)
                    for (i = 0, s = this.behavior_insts.length; i < s; ++i)(n = this.behavior_insts[i]).afterLoad && n.afterLoad()
            }), l.Count = function(t) {
                var e, i, s, n = t.object_class.instances.length;
                for (e = 0, i = this.runtime.createRow.length; e < i; e++) s = this.runtime.createRow[e], t.object_class.is_family ? s.type.families.indexOf(t.object_class) >= 0 && n++ : s.type === t.object_class && n++;
                t.set_int(n)
            }, l.PickedCount = function(t) {
                t.set_int(t.object_class.getCurrentSol().getObjects().length)
            }, l.UID = function(t) {
                t.set_int(this.uid)
            }, l.IID = function(t) {
                t.set_int(this.get_iid())
            }, l.AsJSON || (l.AsJSON = function(t) {
                t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
            })), o && (h.IsVisible = function() {
                return this.visible
            }, c.SetVisible = function(t) {
                !t != !this.visible && (this.visible = !!t, this.runtime.redraw = !0)
            }, h.CompareOpacity = function(t, e) {
                return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
            }, c.SetOpacity = function(t) {
                var e = t / 100;
                e < 0 ? e = 0 : e > 1 && (e = 1), e !== this.opacity && (this.opacity = e, this.runtime.redraw = !0)
            }, l.Opacity = function(t) {
                t.set_float(cr.round6dp(100 * this.opacity))
            }), a && (h.IsOnLayer = function(t) {
                return !!t && this.layer === t
            }, h.PickTopBottom = function(t) {
                var e = this.getCurrentSol(),
                    i = e.getObjects();
                if (!i.length) return !1;
                var s, n, r = i[0],
                    o = r;
                for (s = 1, n = i.length; s < n; s++) r = i[s], 0 === t ? (r.layer.index > o.layer.index || r.layer.index === o.layer.index && r.get_zindex() > o.get_zindex()) && (o = r) : (r.layer.index < o.layer.index || r.layer.index === o.layer.index && r.get_zindex() < o.get_zindex()) && (o = r);
                return e.pick_one(o), !0
            }, c.MoveToTop = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1), t.appendToInstanceList(this, !1), this.runtime.redraw = !0)
            }, c.MoveToBottom = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[0] === this || (t.removeFromInstanceList(this, !1), t.prependToInstanceList(this, !1), this.runtime.redraw = !0)
            }, c.MoveToLayer = function(t) {
                t && t != this.layer && (this.layer.removeFromInstanceList(this, !0), this.layer = t, t.appendToInstanceList(this, !0), this.runtime.redraw = !0)
            }, c.ZMoveToObject = function(t, e) {
                var i = 0 === t;
                if (e) {
                    var s = e.getFirstPicked(this);
                    s && s.uid !== this.uid && (this.layer.index !== s.layer.index && (this.layer.removeFromInstanceList(this, !0), this.layer = s.layer, s.layer.appendToInstanceList(this, !0)), this.layer.moveInstanceAdjacent(this, s, i), this.runtime.redraw = !0)
                }
            }, l.LayerNumber = function(t) {
                t.set_int(this.layer.number)
            }, l.LayerName = function(t) {
                t.set_string(this.layer.name)
            }, l.ZIndex = function(t) {
                t.set_int(this.get_zindex())
            }), A && (c.SetEffectEnabled = function(t, e) {
                if (this.runtime.glwrap) {
                    var i = this.type.getEffectIndexByName(e);
                    if (!(i < 0)) {
                        var s = 1 === t;
                        this.active_effect_flags[i] !== s && (this.active_effect_flags[i] = s, this.updateActiveEffects(), this.runtime.redraw = !0)
                    }
                }
            }, c.SetEffectParam = function(t, e, i) {
                if (this.runtime.glwrap) {
                    var s = this.type.getEffectIndexByName(t);
                    if (!(s < 0)) {
                        var n = this.type.effect_types[s],
                            r = this.effect_params[s];
                        (e = Math.floor(e)) < 0 || e >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, e) && (i /= 100), r[e] !== i && (r[e] = i, n.active && (this.runtime.redraw = !0)))
                    }
                }
            })
        }, cr.set_bbox_changed = function() {
            this.bbox_changed = !0, this.cell_changed = !0, this.type.any_cell_changed = !0, this.runtime.redraw = !0;
            var t, e, i = this.bbox_changed_callbacks;
            for (t = 0, e = i.length; t < e; ++t) i[t](this);
            this.layer.useRenderCells && this.update_bbox()
        }, cr.add_bbox_changed_callback = function(t) {
            t && this.bbox_changed_callbacks.push(t)
        }, cr.update_bbox = function() {
            if (this.bbox_changed) {
                var t = this.bbox,
                    e = this.bquad;
                t.set(this.x, this.y, this.x + this.width, this.y + this.height), t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height), this.angle ? (t.offset(-this.x, -this.y), e.set_from_rotated_rect(t, this.angle), e.offset(this.x, this.y), e.bounding_box(t)) : e.set_from_rect(t), t.normalize(), this.bbox_changed = !1, this.update_render_cell()
            }
        };
        var t = new cr.rect(0, 0, 0, 0);
        cr.update_render_cell = function() {
            if (this.layer.useRenderCells) {
                var e = this.layer.render_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.rendercells.equals(t) || (this.rendercells.right < this.rendercells.left ? e.update(this, null, t) : e.update(this, this.rendercells, t), this.rendercells.copy(t), this.layer.render_list_stale = !0)
            }
        }, cr.update_collision_cell = function() {
            if (this.cell_changed && this.collisionsEnabled) {
                this.update_bbox();
                var e = this.type.collision_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.collcells.equals(t) || (this.collcells.right < this.collcells.left ? e.update(this, null, t) : e.update(this, this.collcells, t), this.collcells.copy(t), this.cell_changed = !1)
            }
        }, cr.inst_contains_pt = function(t, e) {
            return !!this.bbox.contains_pt(t, e) && (!!this.bquad.contains_pt(t, e) && (!(this.collision_poly && !this.collision_poly.is_empty()) || (this.collision_poly.cache_poly(this.width, this.height, this.angle), this.collision_poly.contains_pt(t - this.x, e - this.y))))
        }, cr.inst_get_iid = function() {
            return this.type.updateIIDs(), this.iid
        }, cr.inst_get_zindex = function() {
            return this.layer.updateZIndices(), this.zindex
        }, cr.inst_updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types);
            var t, e, i, s = !0;
            for (t = 0, e = this.active_effect_flags.length; t < e; t++) this.active_effect_flags[t] && (i = this.type.effect_types[t], this.active_effect_types.push(i), i.preservesOpaqueness || (s = !1));
            this.uses_shaders = !!this.active_effect_types.length, this.shaders_preserve_opaqueness = s
        }, cr.inst_toString = function() {
            return "Inst" + this.puid
        }, cr.type_getFirstPicked = function(t) {
            if (t && t.is_contained && t.type != this) {
                var e, i, s;
                for (e = 0, i = t.siblings.length; e < i; e++)
                    if ((s = t.siblings[e]).type == this) return s
            }
            var n = this.getCurrentSol().getObjects();
            return n.length ? n[0] : null
        }, cr.type_getPairedInstance = function(t) {
            var e = this.getCurrentSol().getObjects();
            return e.length ? e[t.get_iid() % e.length] : null
        }, cr.type_updateIIDs = function() {
            if (this.stale_iids && !this.is_family) {
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].iid = t;
                var i = t,
                    s = this.runtime.createRow;
                for (t = 0, e = s.length; t < e; ++t) s[t].type === this && (s[t].iid = i++);
                this.stale_iids = !1
            }
        }, cr.type_getInstanceByIID = function(t) {
            if (t < this.instances.length) return this.instances[t];
            t -= this.instances.length;
            var e, i, s = this.runtime.createRow;
            for (e = 0, i = s.length; e < i; ++e)
                if (s[e].type === this) {
                    if (0 === t) return s[e];
                    --t
                }
            return null
        }, cr.type_getCurrentSol = function() {
            return this.solstack[this.cur_sol]
        }, cr.type_pushCleanSol = function() {
            ++this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : (this.solstack[this.cur_sol].select_all = !0, cr.clearArray(this.solstack[this.cur_sol].else_instances))
        }, cr.type_pushCopySol = function() {
            ++this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
            var t = this.solstack[this.cur_sol],
                e = this.solstack[this.cur_sol - 1];
            e.select_all ? (t.select_all = !0, cr.clearArray(t.else_instances)) : (t.select_all = !1, cr.shallowAssignArray(t.instances, e.instances), cr.shallowAssignArray(t.else_instances, e.else_instances))
        }, cr.type_popSol = function() {
            this.cur_sol--
        }, cr.type_getBehaviorByName = function(t) {
            var e, i, s, n, r, o = 0;
            if (!this.is_family)
                for (e = 0, i = this.families.length; e < i; e++)
                    for (s = 0, n = (r = this.families[e]).behaviors.length; s < n; s++) {
                        if (t === r.behaviors[s].name) return this.extra.lastBehIndex = o, r.behaviors[s];
                        o++
                    }
            for (e = 0, i = this.behaviors.length; e < i; e++) {
                if (t === this.behaviors[e].name) return this.extra.lastBehIndex = o, this.behaviors[e];
                o++
            }
            return null
        }, cr.type_getBehaviorIndexByName = function(t) {
            return this.getBehaviorByName(t) ? this.extra.lastBehIndex : -1
        }, cr.type_getEffectIndexByName = function(t) {
            var e, i;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if (this.effect_types[e].name === t) return e;
            return -1
        }, cr.type_applySolToContainer = function() {
            if (this.is_contained && !this.is_family) {
                var t, e, i, s, n, r, o;
                this.updateIIDs();
                var a = (r = this.getCurrentSol()).select_all,
                    A = this.runtime.getCurrentEventStack(),
                    h = A && A.current_event && A.current_event.orblock;
                for (t = 0, e = this.container.length; t < e; t++)
                    if ((n = this.container[t]) !== this && (n.updateIIDs(), o = n.getCurrentSol(), o.select_all = a, !a)) {
                        for (cr.clearArray(o.instances), i = 0, s = r.instances.length; i < s; ++i) o.instances[i] = n.getInstanceByIID(r.instances[i].iid);
                        if (h)
                            for (cr.clearArray(o.else_instances), i = 0, s = r.else_instances.length; i < s; ++i) o.else_instances[i] = n.getInstanceByIID(r.else_instances[i].iid)
                    }
            }
        }, cr.type_toString = function() {
            return "Type" + this.sid
        }, cr.do_cmp = function(t, e, i) {
            if (void 0 === t || void 0 === i) return !1;
            switch (e) {
                case 0:
                    return t === i;
                case 1:
                    return t !== i;
                case 2:
                    return t < i;
                case 3:
                    return t <= i;
                case 4:
                    return t > i;
                case 5:
                    return t >= i;
                default:
                    return !1
            }
        }
    }(), cr.shaders = {}, cr.shaders.hsbadjust = {
        src: ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "precision mediump float;", "uniform float huerotate;", "uniform float satadjust;", "uniform float briadjust;", "vec3 rgb_to_hsl(vec3 c)", "{", "vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);", "vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));", "vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));", "float d = q.x - min(q.w, q.y);", "float e = 1.0e-10;", "return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);", "}", "vec3 hsl_to_rgb(vec3 c)", "{", "vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);", "vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);", "return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);", "}", "void main(void)", "{", "vec4 front = texture2D(samplerFront, vTex);", "vec3 rgb = rgb_to_hsl(front.rgb) + vec3(huerotate, 0, (briadjust - 1.0) * front.a);", "rgb.y *= satadjust;", "rgb = hsl_to_rgb(rgb);", "gl_FragColor = vec4(rgb, front.a);", "}"].join("\n"),
        extendBoxHorizontal: 0,
        extendBoxVertical: 0,
        crossSampling: !1,
        preservesOpaqueness: !1,
        animated: !1,
        parameters: [
            ["huerotate", 0, 1],
            ["satadjust", 0, 1],
            ["briadjust", 0, 1]
        ]
    }, cr.plugins_.Audio = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            var e = i(t);
            return isFinite(e) || (e = 0), e < 0 && (e = 0), e > 1 && (e = 1), e
        }

        function e(t) {
            return t < 0 && (t = 0), t > 1 && (t = 1), s(t)
        }

        function i(t) {
            return Math.pow(10, t / 20)
        }

        function s(t) {
            return Math.log(t) / Math.log(10) * 20
        }

        function n(t) {
            return t = t.toLowerCase(), lt.hasOwnProperty(t) && lt[t].length ? lt[t][0].getInputNode() : U.destination
        }

        function r() {
            return U.createGain ? U.createGain() : U.createGainNode()
        }

        function o(t) {
            return U.createDelay ? U.createDelay(t) : U.createDelayNode(t)
        }

        function a(t, e) {
            t.start ? t.start(e || 0) : t.noteOn(e || 0)
        }

        function A(t, e, i, s) {
            t.start ? t.start(s || 0, e) : t.noteGrainOn(s || 0, e, i - e)
        }

        function h(t) {
            try {
                t.stop ? t.stop(0) : t.noteOff(0)
            } catch (t) {}
        }

        function c(t, e, i, s) {
            if (t)
                if (t.cancelScheduledValues(0), 0 !== s) {
                    var n = U.currentTime;
                    switch (s += n, i) {
                        case 0:
                            t.setValueAtTime(e, s);
                            break;
                        case 1:
                            t.setValueAtTime(t.value, n), t.linearRampToValueAtTime(e, s);
                            break;
                        case 2:
                            t.setValueAtTime(t.value, n), t.exponentialRampToValueAtTime(e, s)
                    }
                } else t.value = e
        }

        function l(t, e, i, s, n, o) {
            this.type = "filter", this.params = [t, e, i, s, n, o], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = o, this.dryNode = r(), this.dryNode.gain.value = 1 - o, this.filterNode = U.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = ut[t], this.filterNode.frequency.value = e, this.filterNode.detune && (this.filterNode.detune.value = i), this.filterNode.Q.value = s, this.filterNode.gain.value = n, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode)
        }

        function u(t, e, i) {
            this.type = "delay", this.params = [t, e, i], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = i, this.dryNode = r(), this.dryNode.gain.value = 1 - i, this.mainNode = r(), this.delayNode = o(t), this.delayNode.delayTime.value = t, this.delayGainNode = r(), this.delayGainNode.gain.value = e, this.inputNode.connect(this.mainNode), this.inputNode.connect(this.dryNode), this.mainNode.connect(this.wetNode), this.mainNode.connect(this.delayNode), this.delayNode.connect(this.delayGainNode), this.delayGainNode.connect(this.mainNode)
        }

        function p(t, e, i, s) {
            this.type = "convolve", this.params = [e, i, s], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = i, this.dryNode = r(), this.dryNode.gain.value = 1 - i, this.convolveNode = U.createConvolver(), t && (this.convolveNode.normalize = e, this.convolveNode.buffer = t), this.inputNode.connect(this.convolveNode), this.inputNode.connect(this.dryNode), this.convolveNode.connect(this.wetNode)
        }

        function d(t, e, i, s, n) {
            this.type = "flanger", this.params = [t, e, i, s, n], this.inputNode = r(), this.dryNode = r(), this.dryNode.gain.value = 1 - n / 2, this.wetNode = r(), this.wetNode.gain.value = n / 2, this.feedbackNode = r(), this.feedbackNode.gain.value = s, this.delayNode = o(t + e), this.delayNode.delayTime.value = t, this.oscNode = U.createOscillator(), this.oscNode.frequency.value = i, this.oscGainNode = r(), this.oscGainNode.gain.value = e, this.inputNode.connect(this.delayNode), this.inputNode.connect(this.dryNode), this.delayNode.connect(this.wetNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.delayNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.delayNode.delayTime), a(this.oscNode)
        }

        function g(t, e, i, s, n, o) {
            this.type = "phaser", this.params = [t, e, i, s, n, o], this.inputNode = r(), this.dryNode = r(), this.dryNode.gain.value = 1 - o / 2, this.wetNode = r(), this.wetNode.gain.value = o / 2, this.filterNode = U.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass", this.filterNode.frequency.value = t, this.filterNode.detune && (this.filterNode.detune.value = e), this.filterNode.Q.value = i, this.oscNode = U.createOscillator(), this.oscNode.frequency.value = n, this.oscGainNode = r(), this.oscGainNode.gain.value = s, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.filterNode.frequency), a(this.oscNode)
        }

        function f(t) {
            this.type = "gain", this.params = [t], this.node = r(), this.node.gain.value = t
        }

        function m(t, e) {
            this.type = "tremolo", this.params = [t, e], this.node = r(), this.node.gain.value = 1 - e / 2, this.oscNode = U.createOscillator(), this.oscNode.frequency.value = t, this.oscGainNode = r(), this.oscGainNode.gain.value = e / 2, this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.node.gain), a(this.oscNode)
        }

        function y(t, e) {
            this.type = "ringmod", this.params = [t, e], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = e, this.dryNode = r(), this.dryNode.gain.value = 1 - e, this.ringNode = r(), this.ringNode.gain.value = 0, this.oscNode = U.createOscillator(), this.oscNode.frequency.value = t, this.oscNode.connect(this.ringNode.gain), a(this.oscNode), this.inputNode.connect(this.ringNode), this.inputNode.connect(this.dryNode), this.ringNode.connect(this.wetNode)
        }

        function _(t, e, s, n, o) {
            this.type = "distortion", this.params = [t, e, s, n, o], this.inputNode = r(), this.preGain = r(), this.postGain = r(), this.setDrive(s, i(n)), this.wetNode = r(), this.wetNode.gain.value = o, this.dryNode = r(), this.dryNode.gain.value = 1 - o, this.waveShaper = U.createWaveShaper(), this.curve = new Float32Array(65536), this.generateColortouchCurve(t, e), this.waveShaper.curve = this.curve, this.inputNode.connect(this.preGain), this.inputNode.connect(this.dryNode), this.preGain.connect(this.waveShaper), this.waveShaper.connect(this.postGain), this.postGain.connect(this.wetNode)
        }

        function v(t, e) {
            return 1 - Math.exp(-e * t)
        }

        function b(t, e, i, s, n) {
            this.type = "compressor", this.params = [t, e, i, s, n], this.node = U.createDynamicsCompressor();
            try {
                this.node.threshold.value = t, this.node.knee.value = e, this.node.ratio.value = i, this.node.attack.value = s, this.node.release.value = n
            } catch (t) {}
        }

        function w(t, e) {
            this.type = "analyser", this.params = [t, e], this.node = U.createAnalyser(), this.node.fftSize = t, this.node.smoothingTimeConstant = e, this.freqBins = new Float32Array(this.node.frequencyBinCount), this.signal = new Uint8Array(t), this.peak = 0, this.rms = 0
        }

        function x() {
            this.obj = null, this.loadUid = 0
        }

        function B(t, e) {
            this.src = t, this.myapi = Y, this.is_music = e, this.added_end_listener = !1;
            var i = this;
            this.outNode = null, this.mediaSourceNode = null, this.panWhenReady = [], this.seekWhenReady = 0, this.pauseWhenReady = !1, this.supportWebAudioAPI = !1, this.failedToLoad = !1, this.wasEverReady = !1, Y === j && e && !ct && (this.myapi = Q, this.outNode = r()), this.bufferObject = null, this.audioData = null;
            var s;
            switch (this.myapi) {
                case Q:
                    this.bufferObject = new Audio, this.bufferObject.crossOrigin = "anonymous", this.bufferObject.addEventListener("canplaythrough", function() {
                        i.wasEverReady = !0
                    }), Y === j && U.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0, this.bufferObject.addEventListener("canplay", function() {
                        i.mediaSourceNode || (i.mediaSourceNode = U.createMediaElementSource(i.bufferObject), i.mediaSourceNode.connect(i.outNode))
                    })), this.bufferObject.autoplay = !1, this.bufferObject.preload = "auto", this.bufferObject.src = t;
                    break;
                case j:
                    M.isWKWebView ? M.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                        i.audioData = t, i.decodeAudioBuffer()
                    }, function(t) {
                        i.failedToLoad = !0
                    }) : ((s = new XMLHttpRequest).open("GET", t, !0), s.responseType = "arraybuffer", s.onload = function() {
                        i.audioData = s.response, i.decodeAudioBuffer()
                    }, s.onerror = function() {
                        i.failedToLoad = !0
                    }, s.send());
                    break;
                case G:
                case W:
                    this.bufferObject = !0
            }
        }

        function T(t, e) {
            var i = this;
            this.tag = e, this.fresh = !0, this.stopped = !0, this.src = t.src, this.buffer = t, this.myapi = Y, this.is_music = t.is_music, this.playbackRate = 1, this.hasPlaybackEnded = !0, this.resume_me = !1, this.is_paused = !1, this.resume_position = 0, this.looping = !1, this.is_muted = !1, this.is_silent = !1, this.volume = 1, this.onended_handler = function(t) {
                if (!i.is_paused && !i.resume_me) {
                    var e = this;
                    e || (e = t.target), e === i.active_buffer && (i.hasPlaybackEnded = !0, i.stopped = !0, F = i.tag, M.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, N))
                }
            }, this.active_buffer = null, this.isTimescaled = 1 === H && !this.is_music || 2 === H, this.mutevol = 1, this.startTime = this.isTimescaled ? M.kahanTime.sum : M.wallTime.sum, this.gainNode = null, this.pannerNode = null, this.pannerEnabled = !1, this.objectTracker = null, this.panX = 0, this.panY = 0, this.panAngle = 0, this.panConeInner = 0, this.panConeOuter = 0, this.panConeOuterGain = 0, this.instanceObject = null;
            var s = !1;
            switch (this.myapi !== j || this.buffer.myapi !== Q || this.buffer.supportWebAudioAPI || (this.myapi = Q), this.myapi) {
                case Q:
                    this.is_music ? (this.instanceObject = t.bufferObject, s = !t.added_end_listener, t.added_end_listener = !0) : (this.instanceObject = new Audio, this.instanceObject.crossOrigin = "anonymous", this.instanceObject.autoplay = !1, this.instanceObject.src = t.bufferObject.src, s = !0), s && this.instanceObject.addEventListener("ended", function() {
                        F = i.tag, i.stopped = !0, M.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, N)
                    });
                    break;
                case j:
                    this.gainNode = r(), this.gainNode.connect(n(e)), this.buffer.myapi === j ? t.bufferObject && (this.instanceObject = U.createBufferSource(), this.instanceObject.buffer = t.bufferObject, this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject, this.buffer.outNode.connect(this.gainNode), this.buffer.added_end_listener || (this.buffer.added_end_listener = !0, this.buffer.bufferObject.addEventListener("ended", function() {
                        F = i.tag, i.stopped = !0, M.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, N)
                    })));
                    break;
                case G:
                    this.instanceObject = new window.Media(D + this.src, null, null, function(t) {
                        t === window.Media.MEDIA_STOPPED && (i.hasPlaybackEnded = !0, i.stopped = !0, F = i.tag, M.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, N))
                    });
                    break;
                case W:
                    this.instanceObject = !0
            }
        }

        function S(t, e) {
            var i = t.isPlaying() ? 1 : 0,
                s = e.isPlaying() ? 1 : 0;
            return i === s ? 0 : i < s ? 1 : -1
        }

        function E(t, e) {
            if (cr.clearArray(mt), !t.length) return !X || X.hasEnded() ? void 0 : (cr.clearArray(mt), void(mt[0] = X));
            var i, s, n;
            for (i = 0, s = z.length; i < s; i++) n = z[i], cr.equals_nocase(t, n.tag) && mt.push(n);
            e && mt.sort(S)
        }

        function C(t) {
            var e, i, s, n, r = U.destination;
            if (lt.hasOwnProperty(t) && (s = lt[t]).length)
                for (r = s[0].getInputNode(), e = 0, i = s.length; e < i; e++) n = s[e], e + 1 === i ? n.connectTo(U.destination) : n.connectTo(s[e + 1].getInputNode());
            for (E(t), e = 0, i = mt.length; e < i; e++) mt[e].reconnect(r);
            ot && at === t && (ot.disconnect(), ot.connect(r))
        }

        function O(t, e) {
            lt.hasOwnProperty(t) ? lt[t].push(e) : lt[t] = [e], C(t)
        }

        function I() {}

        function P() {}

        function k() {}

        function R(t, e) {
            var i = null;
            return lt.hasOwnProperty(t) && (i = lt[t]), i && e >= 0 && e < i.length && i[e].freqBins ? i[e] : null
        }
        var L = cr.plugins_.Audio.prototype;
        L.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, L.Type.prototype.onCreate = function() {};
        var M = null,
            N = null,
            F = "",
            D = "",
            Q = 0,
            j = 1,
            G = 2,
            W = 3,
            Y = Q,
            U = null,
            V = [],
            z = [],
            X = null,
            q = !1,
            H = 0,
            J = !1,
            Z = 1,
            K = 0,
            $ = 0,
            tt = !1,
            et = 1,
            it = 1,
            st = 10,
            nt = 1e4,
            rt = 1,
            ot = null,
            at = "",
            At = !1,
            ht = [],
            ct = !1,
            lt = {},
            ut = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];
        l.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, l.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, l.prototype.getInputNode = function() {
            return this.inputNode
        }, l.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, c(this.wetNode.gain, e, i, s), c(this.dryNode.gain, 1 - e, i, s);
                    break;
                case 1:
                    this.params[1] = e, c(this.filterNode.frequency, e, i, s);
                    break;
                case 2:
                    this.params[2] = e, c(this.filterNode.detune, e, i, s);
                    break;
                case 3:
                    this.params[3] = e, c(this.filterNode.Q, e, i, s);
                    break;
                case 4:
                    this.params[4] = e, c(this.filterNode.gain, e, i, s)
            }
        }, u.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, u.prototype.remove = function() {
            this.inputNode.disconnect(), this.mainNode.disconnect(), this.delayNode.disconnect(), this.delayGainNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, u.prototype.getInputNode = function() {
            return this.inputNode
        }, u.prototype.setParam = function(e, i, s, n) {
            switch (e) {
                case 0:
                    (i /= 100) < 0 && (i = 0), i > 1 && (i = 1), this.params[2] = i, c(this.wetNode.gain, i, s, n), c(this.dryNode.gain, 1 - i, s, n);
                    break;
                case 4:
                    this.params[1] = t(i), c(this.delayGainNode.gain, t(i), s, n);
                    break;
                case 5:
                    this.params[0] = i, c(this.delayNode.delayTime, i, s, n)
            }
        }, p.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, p.prototype.remove = function() {
            this.inputNode.disconnect(), this.convolveNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, p.prototype.getInputNode = function() {
            return this.inputNode
        }, p.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, c(this.wetNode.gain, e, i, s), c(this.dryNode.gain, 1 - e, i, s)
            }
        }, d.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, d.prototype.remove = function() {
            this.inputNode.disconnect(), this.delayNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect(), this.feedbackNode.disconnect()
        }, d.prototype.getInputNode = function() {
            return this.inputNode
        }, d.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, c(this.wetNode.gain, e / 2, i, s), c(this.dryNode.gain, 1 - e / 2, i, s);
                    break;
                case 6:
                    this.params[1] = e / 1e3, c(this.oscGainNode.gain, e / 1e3, i, s);
                    break;
                case 7:
                    this.params[2] = e, c(this.oscNode.frequency, e, i, s);
                    break;
                case 8:
                    this.params[3] = e / 100, c(this.feedbackNode.gain, e / 100, i, s)
            }
        }, g.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, g.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect()
        }, g.prototype.getInputNode = function() {
            return this.inputNode
        }, g.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, c(this.wetNode.gain, e / 2, i, s), c(this.dryNode.gain, 1 - e / 2, i, s);
                    break;
                case 1:
                    this.params[0] = e, c(this.filterNode.frequency, e, i, s);
                    break;
                case 2:
                    this.params[1] = e, c(this.filterNode.detune, e, i, s);
                    break;
                case 3:
                    this.params[2] = e, c(this.filterNode.Q, e, i, s);
                    break;
                case 6:
                    this.params[3] = e, c(this.oscGainNode.gain, e, i, s);
                    break;
                case 7:
                    this.params[4] = e, c(this.oscNode.frequency, e, i, s)
            }
        }, f.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, f.prototype.remove = function() {
            this.node.disconnect()
        }, f.prototype.getInputNode = function() {
            return this.node
        }, f.prototype.setParam = function(e, i, s, n) {
            switch (e) {
                case 4:
                    this.params[0] = t(i), c(this.node.gain, t(i), s, n)
            }
        }, m.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, m.prototype.remove = function() {
            this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.node.disconnect()
        }, m.prototype.getInputNode = function() {
            return this.node
        }, m.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, c(this.node.gain.value, 1 - e / 2, i, s), c(this.oscGainNode.gain.value, e / 2, i, s);
                    break;
                case 7:
                    this.params[0] = e, c(this.oscNode.frequency, e, i, s)
            }
        }, y.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, y.prototype.remove = function() {
            this.oscNode.disconnect(), this.ringNode.disconnect(), this.inputNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, y.prototype.getInputNode = function() {
            return this.inputNode
        }, y.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, c(this.wetNode.gain, e, i, s), c(this.dryNode.gain, 1 - e, i, s);
                    break;
                case 7:
                    this.params[0] = e, c(this.oscNode.frequency, e, i, s)
            }
        }, _.prototype.setDrive = function(t, e) {
            t < .01 && (t = .01), this.preGain.gain.value = t, this.postGain.gain.value = Math.pow(1 / t, .6) * e
        }, _.prototype.shape = function(t, e, i) {
            var s = 1.05 * i * e - e,
                n = t < 0 ? -1 : 1,
                r = t < 0 ? -t : t,
                o = r < e ? r : e + s * v(r - e, 1 / s);
            return o *= n
        }, _.prototype.generateColortouchCurve = function(t, e) {
            for (var s = i(t), n = i(e), r = 32768, o = 0, a = 0; a < r; ++a) o = a / r, o = this.shape(o, s, n), this.curve[r + a] = o, this.curve[r - a - 1] = -o
        }, _.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, _.prototype.remove = function() {
            this.inputNode.disconnect(), this.preGain.disconnect(), this.waveShaper.disconnect(), this.postGain.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, _.prototype.getInputNode = function() {
            return this.inputNode
        }, _.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, c(this.wetNode.gain, e, i, s), c(this.dryNode.gain, 1 - e, i, s)
            }
        }, b.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, b.prototype.remove = function() {
            this.node.disconnect()
        }, b.prototype.getInputNode = function() {
            return this.node
        }, b.prototype.setParam = function(t, e, i, s) {}, w.prototype.tick = function() {
            this.node.getFloatFrequencyData(this.freqBins), this.node.getByteTimeDomainData(this.signal);
            var t = this.node.fftSize,
                i = 0;
            this.peak = 0;
            for (var s = 0, n = 0; i < t; i++)(n = (this.signal[i] - 128) / 128) < 0 && (n = -n), this.peak < n && (this.peak = n), s += n * n;
            this.peak = e(this.peak), this.rms = e(Math.sqrt(s / t))
        }, w.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, w.prototype.remove = function() {
            this.node.disconnect()
        }, w.prototype.getInputNode = function() {
            return this.node
        }, w.prototype.setParam = function(t, e, i, s) {}, x.prototype.setObject = function(t) {
            this.obj = t
        }, x.prototype.hasObject = function() {
            return !!this.obj
        }, x.prototype.tick = function(t) {};
        var pt = !1;
        B.prototype.release = function() {
            var t, e, i, s;
            for (t = 0, i = 0, e = z.length; t < e; ++t) s = z[t], z[i] = s, s.buffer === this ? s.stop() : ++i;
            z.length = i, this.bufferObject = null, this.audioData = null
        }, B.prototype.decodeAudioBuffer = function() {
            if (!this.bufferObject && this.audioData) {
                var t = this;
                if (U.decodeAudioData) U.decodeAudioData(this.audioData, function(e) {
                    t.bufferObject = e, t.audioData = null;
                    var i, s, n, r;
                    if (cr.is_undefined(t.playTagWhenReady) || J) {
                        if (!cr.is_undefined(t.convolveWhenReady)) {
                            var o = t.convolveWhenReady.convolveNode;
                            o.normalize = t.normalizeWhenReady, o.buffer = e
                        }
                    } else if (t.panWhenReady.length) {
                        for (s = 0, n = t.panWhenReady.length; s < n; s++)
                            if (i = t.panWhenReady[s], (r = new T(t, i.thistag)).setPannerEnabled(!0), void 0 === i.objUid || (i.obj = M.getObjectByUID(i.objUid), i.obj)) {
                                if (i.obj) {
                                    var a = cr.rotatePtAround(i.obj.x, i.obj.y, -i.obj.layer.getAngle(), K, $, !0),
                                        A = cr.rotatePtAround(i.obj.x, i.obj.y, -i.obj.layer.getAngle(), K, $, !1);
                                    r.setPan(a, A, cr.to_degrees(i.obj.angle - i.obj.layer.getAngle()), i.ia, i.oa, i.og), r.setObject(i.obj)
                                } else r.setPan(i.x, i.y, i.a, i.ia, i.oa, i.og);
                                r.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && r.pause(), z.push(r)
                            }
                        cr.clearArray(t.panWhenReady)
                    } else(r = new T(t, t.playTagWhenReady || "")).play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && r.pause(), z.push(r)
                }, function(e) {
                    t.failedToLoad = !0
                });
                else if (this.bufferObject = U.createBuffer(this.audioData, !1), this.audioData = null, cr.is_undefined(this.playTagWhenReady) || J) {
                    if (!cr.is_undefined(this.convolveWhenReady)) {
                        var e = this.convolveWhenReady.convolveNode;
                        e.normalize = this.normalizeWhenReady, e.buffer = this.bufferObject
                    }
                } else {
                    var i = new T(this, this.playTagWhenReady);
                    i.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady), this.pauseWhenReady && i.pause(), z.push(i)
                }
            }
        }, B.prototype.isLoaded = function() {
            switch (this.myapi) {
                case Q:
                    var t = this.bufferObject.readyState >= 4;
                    return t && (this.wasEverReady = !0), t || this.wasEverReady;
                case j:
                    return !!this.audioData || !!this.bufferObject;
                case G:
                case W:
                    return !0
            }
            return !1
        }, B.prototype.isLoadedAndDecoded = function() {
            switch (this.myapi) {
                case Q:
                    return this.isLoaded();
                case j:
                    return !!this.bufferObject;
                case G:
                case W:
                    return !0
            }
            return !1
        }, B.prototype.hasFailedToLoad = function() {
            switch (this.myapi) {
                case Q:
                    return !!this.bufferObject.error;
                case j:
                    return this.failedToLoad
            }
            return !1
        }, T.prototype.hasEnded = function() {
            switch (this.myapi) {
                case Q:
                    return this.instanceObject.ended;
                case j:
                    return this.buffer.myapi === j ? !(!this.fresh && !this.stopped && this.instanceObject.loop) && (!this.is_paused && this.hasPlaybackEnded) : this.instanceObject.ended;
                case G:
                    return this.hasPlaybackEnded
            }
            return !0
        }, T.prototype.canBeRecycled = function() {
            return !(!this.fresh && !this.stopped) || this.hasEnded()
        }, T.prototype.setPannerEnabled = function(t) {
            if (Y === j)
                if (!this.pannerEnabled && t) {
                    if (!this.gainNode) return;
                    this.pannerNode || (this.pannerNode = U.createPanner(), "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = et : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][et], "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = it : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][it], this.pannerNode.refDistance = st, this.pannerNode.maxDistance = nt, this.pannerNode.rolloffFactor = rt), this.gainNode.disconnect(), this.gainNode.connect(this.pannerNode), this.pannerNode.connect(n(this.tag)), this.pannerEnabled = !0
                } else if (this.pannerEnabled && !t) {
                if (!this.gainNode) return;
                this.pannerNode.disconnect(), this.gainNode.disconnect(), this.gainNode.connect(n(this.tag)), this.pannerEnabled = !1
            }
        }, T.prototype.setPan = function(t, e, i, s, n, r) {
            this.pannerEnabled && Y === j && (this.pannerNode.setPosition(t, e, 0), this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0), this.pannerNode.coneInnerAngle = s, this.pannerNode.coneOuterAngle = n, this.pannerNode.coneOuterGain = r, this.panX = t, this.panY = e, this.panAngle = i, this.panConeInner = s, this.panConeOuter = n, this.panConeOuterGain = r)
        }, T.prototype.setObject = function(t) {
            this.pannerEnabled && Y === j && (this.objectTracker || (this.objectTracker = new x), this.objectTracker.setObject(t))
        }, T.prototype.tick = function(t) {
            if (this.pannerEnabled && Y === j && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
                this.objectTracker.tick(t);
                var e = this.objectTracker.obj,
                    i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), K, $, !0),
                    s = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), K, $, !1);
                this.pannerNode.setPosition(i, s, 0);
                var n = 0;
                void 0 !== this.objectTracker.obj.angle && (n = e.angle - e.layer.getAngle(), this.pannerNode.setOrientation(Math.cos(n), Math.sin(n), 0))
            }
        }, T.prototype.play = function(t, e, i, s) {
            var n = this.instanceObject;
            this.looping = t, this.volume = e;
            var r = i || 0;
            switch (s = s || 0, this.myapi) {
                case Q:
                    if (1 !== n.playbackRate && (n.playbackRate = 1), n.volume !== e * Z && (n.volume = e * Z), n.loop !== t && (n.loop = t), n.muted && (n.muted = !1), n.currentTime !== r) try {
                        n.currentTime = r
                    } catch (t) {}
                    if (this.is_music && At && !M.isInUserInputEvent) ht.push(this);
                    else try {
                        this.instanceObject.play()
                    } catch (t) {
                        console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", t)
                    }
                    break;
                case j:
                    if (this.muted = !1, this.mutevol = 1, this.buffer.myapi === j) this.gainNode.gain.value = e * Z, this.fresh || (this.instanceObject = U.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode)), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = t, this.hasPlaybackEnded = !1, 0 === r ? a(this.instanceObject, s) : A(this.instanceObject, r, this.getDuration(), s);
                    else {
                        if (1 !== n.playbackRate && (n.playbackRate = 1), n.loop !== t && (n.loop = t), n.volume = e * Z, n.currentTime !== r) try {
                            n.currentTime = r
                        } catch (t) {}
                        this.is_music && At && !M.isInUserInputEvent ? ht.push(this) : n.play()
                    }
                    break;
                case G:
                    (!this.fresh && this.stopped || 0 !== r) && n.seekTo(r), n.play(), this.hasPlaybackEnded = !1;
                    break;
                case W:
                    M.isDirectCanvas ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t)
            }
            this.playbackRate = 1, this.startTime = (this.isTimescaled ? M.kahanTime.sum : M.wallTime.sum) - r, this.fresh = !1, this.stopped = !1, this.is_paused = !1
        }, T.prototype.stop = function() {
            switch (this.myapi) {
                case Q:
                    this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case j:
                    this.buffer.myapi === j ? h(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case G:
                    this.instanceObject.stop();
                    break;
                case W:
                    M.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.stopped = !0, this.is_paused = !1
        }, T.prototype.pause = function() {
            if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
                switch (this.myapi) {
                    case Q:
                        this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case j:
                        this.buffer.myapi === j ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), this.is_paused = !0, h(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case G:
                        this.instanceObject.pause();
                        break;
                    case W:
                        M.isDirectCanvas && AppMobi.context.stopSound(this.src)
                }
                this.is_paused = !0
            }
        }, T.prototype.resume = function() {
            if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
                switch (this.myapi) {
                    case Q:
                        this.instanceObject.play();
                        break;
                    case j:
                        this.buffer.myapi === j ? (this.instanceObject = U.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = Z * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? M.kahanTime.sum : M.wallTime.sum) - this.resume_position / (this.playbackRate || .001), A(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play();
                        break;
                    case G:
                        this.instanceObject.play();
                        break;
                    case W:
                        M.isDirectCanvas && AppMobi.context.resumeSound(this.src)
                }
                this.is_paused = !1
            }
        }, T.prototype.seek = function(t) {
            if (!(this.fresh || this.stopped || this.hasEnded())) switch (this.myapi) {
                case Q:
                    try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                    break;
                case j:
                    if (this.buffer.myapi === j) this.is_paused ? this.resume_position = t : (this.pause(), this.resume_position = t, this.resume());
                    else try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                    break;
                case G:
                    break;
                case W:
                    M.isDirectCanvas && AppMobi.context.seekSound(this.src, t)
            }
        }, T.prototype.reconnect = function(t) {
            this.myapi === j && (this.pannerEnabled ? (this.pannerNode.disconnect(), this.pannerNode.connect(t)) : (this.gainNode.disconnect(), this.gainNode.connect(t)))
        }, T.prototype.getDuration = function(t) {
            var e = 0;
            switch (this.myapi) {
                case Q:
                    void 0 !== this.instanceObject.duration && (e = this.instanceObject.duration);
                    break;
                case j:
                    e = this.buffer.bufferObject.duration;
                    break;
                case G:
                    e = this.instanceObject.getDuration();
                    break;
                case W:
                    M.isDirectCanvas && (e = AppMobi.context.getDurationSound(this.src))
            }
            return t && (e /= this.playbackRate || .001), e
        }, T.prototype.getPlaybackTime = function(t) {
            var e = this.getDuration(),
                i = 0;
            switch (this.myapi) {
                case Q:
                    void 0 !== this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                    break;
                case j:
                    if (this.buffer.myapi === j) {
                        if (this.is_paused) return this.resume_position;
                        i = (this.isTimescaled ? M.kahanTime.sum : M.wallTime.sum) - this.startTime
                    } else void 0 !== this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                    break;
                case G:
                    break;
                case W:
                    M.isDirectCanvas && (i = AppMobi.context.getPlaybackTimeSound(this.src))
            }
            return t && (i *= this.playbackRate), !this.looping && i > e && (i = e), i
        }, T.prototype.isPlaying = function() {
            return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
        }, T.prototype.shouldSave = function() {
            return !this.fresh && !this.stopped && !this.hasEnded()
        }, T.prototype.setVolume = function(t) {
            this.volume = t, this.updateVolume()
        }, T.prototype.updateVolume = function() {
            var t = this.volume * Z;
            switch (isFinite(t) || (t = 0), this.myapi) {
                case Q:
                    void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case j:
                    this.buffer.myapi === j ? this.gainNode.gain.value = t * this.mutevol : void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t)
            }
        }, T.prototype.getVolume = function() {
            return this.volume
        }, T.prototype.doSetMuted = function(t) {
            switch (this.myapi) {
                case Q:
                    this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case j:
                    this.buffer.myapi === j ? (this.mutevol = t ? 0 : 1, this.gainNode.gain.value = Z * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t)
            }
        }, T.prototype.setMuted = function(t) {
            this.is_muted = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, T.prototype.setSilent = function(t) {
            this.is_silent = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, T.prototype.setLooping = function(t) {
            switch (this.looping = t, this.myapi) {
                case Q:
                case j:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case G:
                    break;
                case W:
                    M.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t)
            }
        }, T.prototype.setPlaybackRate = function(t) {
            this.playbackRate = t, this.updatePlaybackRate()
        }, T.prototype.updatePlaybackRate = function() {
            var t = this.playbackRate;
            switch (this.isTimescaled && (t *= M.timescale), this.myapi) {
                case Q:
                    this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case j:
                    this.buffer.myapi === j ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t)
            }
        }, T.prototype.setSuspended = function(t) {
            switch (this.myapi) {
                case Q:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(), this.resume_me = !1);
                    break;
                case j:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.buffer.myapi === j ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), h(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.buffer.myapi === j ? (this.instanceObject = U.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = Z * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? M.kahanTime.sum : M.wallTime.sum) - this.resume_position / (this.playbackRate || .001), A(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(), this.resume_me = !1);
                    break;
                case G:
                    t ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1, this.instanceObject.play())
            }
        }, L.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, M = this.runtime, N = this, this.listenerTracker = null, this.listenerZ = -600, this.runtime.isWKWebView && (ct = !0), !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || ct || (At = !0), U = null, "undefined" != typeof AudioContext ? (Y = j, U = new AudioContext) : "undefined" != typeof webkitAudioContext && (Y = j, U = new webkitAudioContext), this.runtime.isiOS && U && (U.close && U.close(), "undefined" != typeof AudioContext ? U = new AudioContext : "undefined" != typeof webkitAudioContext && (U = new webkitAudioContext));
            this.runtime.isAndroid;
            var e = function() {
                if (!tt && U.createBuffer) {
                    var t = U.createBuffer(1, 220, 22050),
                        e = U.createBufferSource();
                    e.buffer = t, e.connect(U.destination), a(e)
                }
            };
            if (At) {
                var i = function() {
                    var t, e, i;
                    if (At) {
                        if (!J)
                            for (t = 0, e = ht.length; t < e; ++t)(i = ht[t]).stopped || i.is_paused || i.instanceObject.play();
                        cr.clearArray(ht)
                    }
                };
                document.addEventListener("touchend", function() {
                    !pt && U && (e(), pt = !0), i()
                }, !0)
            } else ct && document.addEventListener("touchend", function() {
                !pt && U && (e(), pt = !0)
            }, !0); if (Y !== j && (this.runtime.isCordova && void 0 !== window.Media ? Y = G : this.runtime.isAppMobi && (Y = W)), Y === G) {
                var s = (D = location.href).lastIndexOf("/");
                s > -1 && (D = D.substr(0, s + 1)), D = D.replace("file://", "")
            }
            if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.runtime.DestroyInstance(this);
            else {
                if (this.runtime.isDirectCanvas) q = this.runtime.isAndroid;
                else try {
                    q = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
                } catch (t) {
                    q = !1
                }
                Y, this.runtime.tickMe(this)
            }
        };
        var dt = L.Instance.prototype;
        dt.onCreate = function() {
            this.runtime.audioInstance = this, H = this.properties[0], this.saveload = this.properties[1], this.playinbackground = 0 !== this.properties[2], this.nextPlayTime = 0, et = this.properties[3], it = this.properties[4], this.listenerZ = -this.properties[5], st = this.properties[6], nt = this.properties[7], rt = this.properties[8], this.listenerTracker = new x;
            var t = this.runtime.draw_width || this.runtime.width,
                e = this.runtime.draw_height || this.runtime.height;
            Y === j && (U.listener.setPosition(t / 2, e / 2, this.listenerZ), U.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(t, e) {
                ot && ot.disconnect(), at = e.toLowerCase(), (ot = U.createMediaStreamSource(t)).connect(n(at))
            }), this.runtime.addSuspendCallback(function(t) {
                N.onSuspend(t)
            });
            var i = this;
            this.runtime.addDestroyCallback(function(t) {
                i.onInstanceDestroyed(t)
            })
        }, dt.onInstanceDestroyed = function(t) {
            var e, i, s;
            for (e = 0, i = z.length; e < i; e++)(s = z[e]).objectTracker && s.objectTracker.obj === t && (s.objectTracker.obj = null, s.pannerEnabled && s.isPlaying() && s.looping && s.stop());
            this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
        }, dt.saveToJSON = function() {
            var t, e, i, s, n, r, o, a = {
                    silent: J,
                    masterVolume: Z,
                    listenerZ: this.listenerZ,
                    listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
                    playing: [],
                    effects: {}
                },
                A = a.playing;
            for (t = 0, e = z.length; t < e; t++)(i = z[t]).shouldSave() && 3 !== this.saveload && (i.is_music && 1 === this.saveload || (i.is_music || 2 !== this.saveload) && (o = i.getPlaybackTime(), i.looping && (o %= i.getDuration()), s = {
                tag: i.tag,
                buffersrc: i.buffer.src,
                is_music: i.is_music,
                playbackTime: o,
                volume: i.volume,
                looping: i.looping,
                muted: i.is_muted,
                playbackRate: i.playbackRate,
                paused: i.is_paused,
                resume_position: i.resume_position
            }, i.pannerEnabled && (s.pan = {}, r = s.pan, i.objectTracker && i.objectTracker.hasObject() ? r.objUid = i.objectTracker.obj.uid : (r.x = i.panX, r.y = i.panY, r.a = i.panAngle), r.ia = i.panConeInner, r.oa = i.panConeOuter, r.og = i.panConeOuterGain), A.push(s)));
            var h, c = a.effects;
            for (n in lt)
                if (lt.hasOwnProperty(n)) {
                    for (h = [], t = 0, e = lt[n].length; t < e; t++) h.push({
                        type: lt[n][t].type,
                        params: lt[n][t].params
                    });
                    c[n] = h
                }
            return a
        };
        var gt = [];
        dt.loadFromJSON = function(t) {
            var e = t.silent;
            Z = t.masterVolume, this.listenerZ = t.listenerZ, this.listenerTracker.setObject(null);
            var i = t.listenerUid; - 1 !== i && (this.listenerTracker.loadUid = i, gt.push(this.listenerTracker));
            var s, n, r, o, a, A, h, c, v, B, T, S, E, C, I = t.playing;
            if (3 !== this.saveload)
                for (s = 0, n = z.length; s < n; s++)(T = z[s]).is_music && 1 === this.saveload || (T.is_music || 2 !== this.saveload) && T.stop();
            var P, k, R, L;
            for (S in lt)
                if (lt.hasOwnProperty(S))
                    for (s = 0, n = lt[S].length; s < n; s++) lt[S][s].remove();
            cr.wipe(lt);
            for (S in t.effects)
                if (t.effects.hasOwnProperty(S))
                    for (s = 0, n = (P = t.effects[S]).length; s < n; s++) switch (k = P[s].type, R = P[s].params, k) {
                        case "filter":
                            O(S, new l(R[0], R[1], R[2], R[3], R[4], R[5]));
                            break;
                        case "delay":
                            O(S, new u(R[0], R[1], R[2]));
                            break;
                        case "convolve":
                            o = R[2], (B = this.getAudioBuffer(o, !1)).bufferObject ? L = new p(B.bufferObject, R[0], R[1], o) : (L = new p(null, R[0], R[1], o), B.normalizeWhenReady = R[0], B.convolveWhenReady = L), O(S, L);
                            break;
                        case "flanger":
                            O(S, new d(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "phaser":
                            O(S, new g(R[0], R[1], R[2], R[3], R[4], R[5]));
                            break;
                        case "gain":
                            O(S, new f(R[0]));
                            break;
                        case "tremolo":
                            O(S, new m(R[0], R[1]));
                            break;
                        case "ringmod":
                            O(S, new y(R[0], R[1]));
                            break;
                        case "distortion":
                            O(S, new _(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "compressor":
                            O(S, new b(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "analyser":
                            O(S, new w(R[0], R[1]))
                    }
                for (s = 0, n = I.length; s < n; s++) 3 !== this.saveload && (o = (r = I[s]).buffersrc, a = r.is_music, A = r.tag, h = r.playbackTime, c = r.looping, v = r.volume, C = (E = r.pan) && E.hasOwnProperty("objUid") ? E.objUid : -1, a && 1 === this.saveload || (a || 2 !== this.saveload) && ((T = this.getAudioInstance(o, A, a, c, v)) ? (T.resume_position = r.resume_position, T.setPannerEnabled(!!E), T.play(c, v, h), T.updatePlaybackRate(), T.updateVolume(), T.doSetMuted(T.is_muted || T.is_silent), r.paused && T.pause(), r.muted && T.setMuted(!0), T.doSetMuted(T.is_muted || T.is_silent), E && (-1 !== C ? (T.objectTracker = T.objectTracker || new x, T.objectTracker.loadUid = C, gt.push(T.objectTracker)) : T.setPan(E.x, E.y, E.a, E.ia, E.oa, E.og))) : ((B = this.getAudioBuffer(o, a)).seekWhenReady = h, B.pauseWhenReady = r.paused, E && (-1 !== C ? B.panWhenReady.push({
                    objUid: C,
                    ia: E.ia,
                    oa: E.oa,
                    og: E.og,
                    thistag: A
                }) : B.panWhenReady.push({
                    x: E.x,
                    y: E.y,
                    a: E.a,
                    ia: E.ia,
                    oa: E.oa,
                    og: E.og,
                    thistag: A
                })))));
            if (e && !J) {
                for (s = 0, n = z.length; s < n; s++) z[s].setSilent(!0);
                J = !0
            } else if (!e && J) {
                for (s = 0, n = z.length; s < n; s++) z[s].setSilent(!1);
                J = !1
            }
        }, dt.afterLoad = function() {
            var t, e, i, s;
            for (t = 0, e = gt.length; t < e; t++) i = gt[t], s = this.runtime.getObjectByUID(i.loadUid), i.setObject(s), i.loadUid = -1, s && (K = s.x, $ = s.y);
            cr.clearArray(gt)
        }, dt.onSuspend = function(t) {
            if (!this.playinbackground) {
                !t && U && U.resume && (U.resume(), tt = !1);
                var e, i;
                for (e = 0, i = z.length; e < i; e++) z[e].setSuspended(t);
                t && U && U.suspend && (U.suspend(), tt = !0)
            }
        }, dt.tick = function() {
            var t, e, i, s = this.runtime.dt;
            for (t = 0, e = z.length; t < e; t++)(i = z[t]).tick(s), 0 !== H && i.updatePlaybackRate();
            var n, r, o;
            for (n in lt)
                if (lt.hasOwnProperty(n))
                    for (t = 0, e = (r = lt[n]).length; t < e; t++)(o = r[t]).tick && o.tick();
            Y === j && this.listenerTracker.hasObject() && (this.listenerTracker.tick(s), K = this.listenerTracker.obj.x, $ = this.listenerTracker.obj.y, U.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ))
        };
        var ft = [];
        dt.setPreloadList = function(t) {
            var e, i, s, n, r, o, a = 0;
            for (e = 0, i = t.length; e < i; ++e) n = (s = t[e])[0], r = 2 * s[1], ((o = n.length > 4 && ".ogg" === n.substr(n.length - 4)) && q || !o && !q) && (ft.push({
                filename: n,
                size: r,
                obj: null
            }), a += r);
            return a
        }, dt.startPreloads = function() {
            var t, e, i, s;
            for (t = 0, e = ft.length; t < e; ++t) i = ft[t], s = this.runtime.files_subfolder + i.filename, i.obj = this.getAudioBuffer(s, !1)
        }, dt.getPreloadedSize = function() {
            var t, e, i, s = 0;
            for (t = 0, e = ft.length; t < e; ++t)(i = ft[t]).obj.isLoadedAndDecoded() || i.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? s += i.size : i.obj.isLoaded() && (s += Math.floor(i.size / 2));
            return s
        }, dt.releaseAllMusicBuffers = function() {
            var t, e, i, s;
            for (t = 0, i = 0, e = V.length; t < e; ++t) s = V[t], V[i] = s, s.is_music ? s.release() : ++i;
            V.length = i
        }, dt.getAudioBuffer = function(t, e, i) {
            var s, n, r, o = null;
            for (s = 0, n = V.length; s < n; s++)
                if ((r = V[s]).src === t) {
                    o = r;
                    break
                }
            return o || i || (ct && e && this.releaseAllMusicBuffers(), o = new B(t, e), V.push(o)), o
        }, dt.getAudioInstance = function(t, e, i, s, n) {
            var r, o, a;
            for (r = 0, o = z.length; r < o; r++)
                if ((a = z[r]).src === t && (a.canBeRecycled() || i)) return a.tag = e, a;
            var A = this.getAudioBuffer(t, i);
            return A.bufferObject ? (a = new T(A, e), z.push(a), a) : ("<preload>" !== e && (A.playTagWhenReady = e, A.loopWhenReady = s, A.volumeWhenReady = n), null)
        };
        var mt = [];
        I.prototype.OnEnded = function(t) {
            return cr.equals_nocase(F, t)
        }, I.prototype.PreloadsComplete = function() {
            var t, e;
            for (t = 0, e = V.length; t < e; t++)
                if (!V[t].isLoadedAndDecoded() && !V[t].hasFailedToLoad()) return !1;
            return !0
        }, I.prototype.AdvancedAudioSupported = function() {
            return Y === j
        }, I.prototype.IsSilent = function() {
            return J
        }, I.prototype.IsAnyPlaying = function() {
            var t, e;
            for (t = 0, e = z.length; t < e; t++)
                if (z[t].isPlaying()) return !0;
            return !1
        }, I.prototype.IsTagPlaying = function(t) {
            E(t);
            var e, i;
            for (e = 0, i = mt.length; e < i; e++)
                if (mt[e].isPlaying()) return !0;
            return !1
        }, L.cnds = new I, P.prototype.Play = function(e, i, s, n) {
            if (!J) {
                var r = t(s),
                    o = e[1],
                    a = this.runtime.files_subfolder + e[0] + (q ? ".ogg" : ".m4a");
                (X = this.getAudioInstance(a, n, o, 0 !== i, r)) && (X.setPannerEnabled(!1), X.play(0 !== i, r, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, P.prototype.PlayAtPosition = function(e, i, s, n, r, o, a, A, h, c) {
            if (!J) {
                var l = t(s),
                    u = e[1],
                    p = this.runtime.files_subfolder + e[0] + (q ? ".ogg" : ".m4a");
                (X = this.getAudioInstance(p, c, u, 0 !== i, l)) ? (X.setPannerEnabled(!0), X.setPan(n, r, o, a, A, t(h)), X.play(0 !== i, l, 0, this.nextPlayTime), this.nextPlayTime = 0) : this.getAudioBuffer(p, u).panWhenReady.push({
                    x: n,
                    y: r,
                    a: o,
                    ia: a,
                    oa: A,
                    og: t(h),
                    thistag: c
                })
            }
        }, P.prototype.PlayAtObject = function(e, i, s, n, r, o, a, A) {
            if (!J && n) {
                var h = n.getFirstPicked();
                if (h) {
                    var c = t(s),
                        l = e[1],
                        u = this.runtime.files_subfolder + e[0] + (q ? ".ogg" : ".m4a");
                    if (X = this.getAudioInstance(u, A, l, 0 !== i, c)) {
                        X.setPannerEnabled(!0);
                        var p = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), K, $, !0),
                            d = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), K, $, !1);
                        X.setPan(p, d, cr.to_degrees(h.angle - h.layer.getAngle()), r, o, t(a)), X.setObject(h), X.play(0 !== i, c, 0, this.nextPlayTime), this.nextPlayTime = 0
                    } else this.getAudioBuffer(u, l).panWhenReady.push({
                        obj: h,
                        ia: r,
                        oa: o,
                        og: t(a),
                        thistag: A
                    })
                }
            }
        }, P.prototype.PlayByName = function(e, i, s, n, r) {
            if (!J) {
                var o = t(n),
                    a = 1 === e,
                    A = this.runtime.files_subfolder + i.toLowerCase() + (q ? ".ogg" : ".m4a");
                (X = this.getAudioInstance(A, r, a, 0 !== s, o)) && (X.setPannerEnabled(!1), X.play(0 !== s, o, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, P.prototype.PlayAtPositionByName = function(e, i, s, n, r, o, a, A, h, c, l) {
            if (!J) {
                var u = t(n),
                    p = 1 === e,
                    d = this.runtime.files_subfolder + i.toLowerCase() + (q ? ".ogg" : ".m4a");
                (X = this.getAudioInstance(d, l, p, 0 !== s, u)) ? (X.setPannerEnabled(!0), X.setPan(r, o, a, A, h, t(c)), X.play(0 !== s, u, 0, this.nextPlayTime), this.nextPlayTime = 0) : this.getAudioBuffer(d, p).panWhenReady.push({
                    x: r,
                    y: o,
                    a: a,
                    ia: A,
                    oa: h,
                    og: t(c),
                    thistag: l
                })
            }
        }, P.prototype.PlayAtObjectByName = function(e, i, s, n, r, o, a, A, h) {
            if (!J && r) {
                var c = r.getFirstPicked();
                if (c) {
                    var l = t(n),
                        u = 1 === e,
                        p = this.runtime.files_subfolder + i.toLowerCase() + (q ? ".ogg" : ".m4a");
                    if (X = this.getAudioInstance(p, h, u, 0 !== s, l)) {
                        X.setPannerEnabled(!0);
                        var d = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), K, $, !0),
                            g = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), K, $, !1);
                        X.setPan(d, g, cr.to_degrees(c.angle - c.layer.getAngle()), o, a, t(A)), X.setObject(c), X.play(0 !== s, l, 0, this.nextPlayTime), this.nextPlayTime = 0
                    } else this.getAudioBuffer(p, u).panWhenReady.push({
                        obj: c,
                        ia: o,
                        oa: a,
                        og: t(A),
                        thistag: h
                    })
                }
            }
        }, P.prototype.SetLooping = function(t, e) {
            E(t);
            var i, s;
            for (i = 0, s = mt.length; i < s; i++) mt[i].setLooping(0 === e)
        }, P.prototype.SetMuted = function(t, e) {
            E(t);
            var i, s;
            for (i = 0, s = mt.length; i < s; i++) mt[i].setMuted(0 === e)
        }, P.prototype.SetVolume = function(e, i) {
            E(e);
            var s, n, r = t(i);
            for (s = 0, n = mt.length; s < n; s++) mt[s].setVolume(r)
        }, P.prototype.Preload = function(t) {
            if (!J) {
                var e = t[1],
                    i = this.runtime.files_subfolder + t[0] + (q ? ".ogg" : ".m4a");
                Y !== W ? Y !== G && this.getAudioInstance(i, "<preload>", e, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(i) : AppMobi.player.loadSound(i)
            }
        }, P.prototype.PreloadByName = function(t, e) {
            if (!J) {
                var i = 1 === t,
                    s = this.runtime.files_subfolder + e.toLowerCase() + (q ? ".ogg" : ".m4a");
                Y !== W ? Y !== G && this.getAudioInstance(s, "<preload>", i, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(s) : AppMobi.player.loadSound(s)
            }
        }, P.prototype.SetPlaybackRate = function(t, e) {
            E(t), e < 0 && (e = 0);
            var i, s;
            for (i = 0, s = mt.length; i < s; i++) mt[i].setPlaybackRate(e)
        }, P.prototype.Stop = function(t) {
            E(t);
            var e, i;
            for (e = 0, i = mt.length; e < i; e++) mt[e].stop()
        }, P.prototype.StopAll = function() {
            var t, e;
            for (t = 0, e = z.length; t < e; t++) z[t].stop()
        }, P.prototype.SetPaused = function(t, e) {
            E(t);
            var i, s;
            for (i = 0, s = mt.length; i < s; i++) 0 === e ? mt[i].pause() : mt[i].resume()
        }, P.prototype.Seek = function(t, e) {
            E(t);
            var i, s;
            for (i = 0, s = mt.length; i < s; i++) mt[i].seek(e)
        }, P.prototype.SetSilent = function(t) {
            var e, i;
            if (2 === t && (t = J ? 1 : 0), 0 !== t || J) {
                if (1 === t && J) {
                    for (e = 0, i = z.length; e < i; e++) z[e].setSilent(!1);
                    J = !1
                }
            } else {
                for (e = 0, i = z.length; e < i; e++) z[e].setSilent(!0);
                J = !0
            }
        }, P.prototype.SetMasterVolume = function(e) {
            Z = t(e);
            var i, s;
            for (i = 0, s = z.length; i < s; i++) z[i].updateVolume()
        }, P.prototype.AddFilterEffect = function(t, e, i, s, n, r, o) {
            Y !== j || e < 0 || e >= ut.length || !U.createBiquadFilter || (t = t.toLowerCase(), (o /= 100) < 0 && (o = 0), o > 1 && (o = 1), O(t, new l(e, i, s, n, r, o)))
        }, P.prototype.AddDelayEffect = function(e, i, s, n) {
            Y === j && (e = e.toLowerCase(), (n /= 100) < 0 && (n = 0), n > 1 && (n = 1), O(e, new u(i, t(s), n)))
        }, P.prototype.AddFlangerEffect = function(t, e, i, s, n, r) {
            Y === j && U.createOscillator && (t = t.toLowerCase(), (r /= 100) < 0 && (r = 0), r > 1 && (r = 1), O(t, new d(e / 1e3, i / 1e3, s, n / 100, r)))
        }, P.prototype.AddPhaserEffect = function(t, e, i, s, n, r, o) {
            Y === j && U.createOscillator && (t = t.toLowerCase(), (o /= 100) < 0 && (o = 0), o > 1 && (o = 1), O(t, new g(e, i, s, n, r, o)))
        }, P.prototype.AddConvolutionEffect = function(t, e, i, s) {
            if (Y === j && U.createConvolver) {
                var n = 0 === i,
                    r = this.runtime.files_subfolder + e[0] + (q ? ".ogg" : ".m4a"),
                    o = this.getAudioBuffer(r, !1);
                t = t.toLowerCase(), (s /= 100) < 0 && (s = 0), s > 1 && (s = 1);
                var a;
                o.bufferObject ? a = new p(o.bufferObject, n, s, r) : (a = new p(null, n, s, r), o.normalizeWhenReady = n, o.convolveWhenReady = a), O(t, a)
            }
        }, P.prototype.AddGainEffect = function(e, i) {
            Y === j && O(e = e.toLowerCase(), new f(t(i)))
        }, P.prototype.AddMuteEffect = function(t) {
            Y === j && O(t = t.toLowerCase(), new f(0))
        }, P.prototype.AddTremoloEffect = function(t, e, i) {
            Y === j && U.createOscillator && (t = t.toLowerCase(), (i /= 100) < 0 && (i = 0), i > 1 && (i = 1), O(t, new m(e, i)))
        }, P.prototype.AddRingModEffect = function(t, e, i) {
            Y === j && U.createOscillator && (t = t.toLowerCase(), (i /= 100) < 0 && (i = 0), i > 1 && (i = 1), O(t, new y(e, i)))
        }, P.prototype.AddDistortionEffect = function(t, e, i, s, n, r) {
            Y === j && U.createWaveShaper && (t = t.toLowerCase(), (r /= 100) < 0 && (r = 0), r > 1 && (r = 1), O(t, new _(e, i, s, n, r)))
        }, P.prototype.AddCompressorEffect = function(t, e, i, s, n, r) {
            Y === j && U.createDynamicsCompressor && O(t = t.toLowerCase(), new b(e, i, s, n / 1e3, r / 1e3))
        }, P.prototype.AddAnalyserEffect = function(t, e, i) {
            Y === j && O(t = t.toLowerCase(), new w(e, i))
        }, P.prototype.RemoveEffects = function(t) {
            if (Y === j) {
                t = t.toLowerCase();
                var e, i, s;
                if (lt.hasOwnProperty(t) && (s = lt[t]).length) {
                    for (e = 0, i = s.length; e < i; e++) s[e].remove();
                    cr.clearArray(s), C(t)
                }
            }
        }, P.prototype.SetEffectParameter = function(t, e, i, s, n, r) {
            if (Y === j) {
                t = t.toLowerCase(), e = Math.floor(e);
                var o;
                lt.hasOwnProperty(t) && (o = lt[t], e < 0 || e >= o.length || o[e].setParam(i, s, n, r))
            }
        }, P.prototype.SetListenerObject = function(t) {
            if (t && Y === j) {
                var e = t.getFirstPicked();
                e && (this.listenerTracker.setObject(e), K = e.x, $ = e.y)
            }
        }, P.prototype.SetListenerZ = function(t) {
            this.listenerZ = t
        }, P.prototype.ScheduleNextPlay = function(t) {
            U && (this.nextPlayTime = t)
        }, P.prototype.UnloadAudio = function(t) {
            var e = t[1],
                i = this.runtime.files_subfolder + t[0] + (q ? ".ogg" : ".m4a"),
                s = this.getAudioBuffer(i, e, !0);
            s && (s.release(), cr.arrayFindRemove(V, s))
        }, P.prototype.UnloadAudioByName = function(t, e) {
            var i = 1 === t,
                s = this.runtime.files_subfolder + e.toLowerCase() + (q ? ".ogg" : ".m4a"),
                n = this.getAudioBuffer(s, i, !0);
            n && (n.release(), cr.arrayFindRemove(V, n))
        }, P.prototype.UnloadAll = function() {
            var t, e;
            for (t = 0, e = V.length; t < e; ++t) V[t].release();
            cr.clearArray(V)
        }, L.acts = new P, k.prototype.Duration = function(t, e) {
            E(e, !0), mt.length ? t.set_float(mt[0].getDuration()) : t.set_float(0)
        }, k.prototype.PlaybackTime = function(t, e) {
            E(e, !0), mt.length ? t.set_float(mt[0].getPlaybackTime(!0)) : t.set_float(0)
        }, k.prototype.Volume = function(t, i) {
            if (E(i, !0), mt.length) {
                var s = mt[0].getVolume();
                t.set_float(e(s))
            } else t.set_float(0)
        }, k.prototype.MasterVolume = function(t) {
            t.set_float(e(Z))
        }, k.prototype.EffectCount = function(t, e) {
            e = e.toLowerCase();
            var i = null;
            lt.hasOwnProperty(e) && (i = lt[e]), t.set_int(i ? i.length : 0)
        }, k.prototype.AnalyserFreqBinCount = function(t, e, i) {
            var s = R(e = e.toLowerCase(), i = Math.floor(i));
            t.set_int(s ? s.node.frequencyBinCount : 0)
        }, k.prototype.AnalyserFreqBinAt = function(t, e, i, s) {
            e = e.toLowerCase(), i = Math.floor(i), s = Math.floor(s);
            var n = R(e, i);
            n ? s < 0 || s >= n.node.frequencyBinCount ? t.set_float(0) : t.set_float(n.freqBins[s]) : t.set_float(0)
        }, k.prototype.AnalyserPeakLevel = function(t, e, i) {
            var s = R(e = e.toLowerCase(), i = Math.floor(i));
            s ? t.set_float(s.peak) : t.set_float(0)
        }, k.prototype.AnalyserRMSLevel = function(t, e, i) {
            var s = R(e = e.toLowerCase(), i = Math.floor(i));
            s ? t.set_float(s.rms) : t.set_float(0)
        }, k.prototype.SampleRate = function(t) {
            t.set_int(U ? U.sampleRate : 0)
        }, k.prototype.CurrentTime = function(t) {
            t.set_float(U ? U.currentTime : cr.performance_now())
        }, L.exps = new k
    }(), cr.plugins_.Browser = function(t) {
        this.runtime = t
    },
    function() {
        function checkReady() {
            offlineScriptReady && browserPluginReady && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(t) {
                browserInstance.onSWMessage(t)
            })
        }

        function maybeLoadBatteryManager() {
            if (!loadedBatteryManager && navigator.getBattery) {
                var t = navigator.getBattery();
                loadedBatteryManager = !0, t && t.then(function(t) {
                    batteryManager = t
                })
            }
        }

        function Cnds() {}

        function Acts() {}

        function onFullscreenError(t) {
            console && console.warn && console.warn("Fullscreen request failed: ", t), crruntime.setSize(window.innerWidth, window.innerHeight)
        }

        function Exps() {}
        var pluginProto = cr.plugins_.Browser.prototype;
        pluginProto.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {};
        var offlineScriptReady = !1,
            browserPluginReady = !1;
        document.addEventListener("DOMContentLoaded", function() {
            if (window.C2_RegisterSW && navigator.serviceWorker) {
                var t = document.createElement("script");
                t.onload = function() {
                    offlineScriptReady = !0, checkReady()
                }, t.src = "offlineClient.js", document.head.appendChild(t)
            }
        });
        var browserInstance = null;
        typeProto.onAppBegin = function() {
            browserPluginReady = !0, checkReady()
        }, pluginProto.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var instanceProto = pluginProto.Instance.prototype;
        instanceProto.onCreate = function() {
            var t = this;
            window.addEventListener("resize", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, t)
            }), browserInstance = this, void 0 !== navigator.onLine && (window.addEventListener("online", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, t)
            }), window.addEventListener("offline", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, t)
            })), void 0 !== window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
                t.runtime.loadingprogress = 1, t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            }), window.applicationCache.addEventListener("progress", function(e) {
                t.runtime.loadingprogress = e.loaded / e.total || 0
            })), this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            }), document.addEventListener("backbutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), document.addEventListener("menubutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t)
            }), document.addEventListener("searchbutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, t)
            }), document.addEventListener("tizenhwkey", function(e) {
                switch (e.keyName) {
                    case "back":
                        t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t) || window.tizen && window.tizen.application.getCurrentApplication().exit();
                        break;
                    case "menu":
                        t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t) || e.preventDefault()
                }
            })), this.runtime.isWindows10 && "undefined" != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(e) {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t) && (e.handled = !0)
            }) : this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function(e) {
                return !!t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), this.runtime.addSuspendCallback(function(e) {
                e ? t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, t) : t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, t)
            }), this.is_arcade = void 0 !== window.is_scirra_arcade
        }, instanceProto.onSWMessage = function(t) {
            var e = t.data.type;
            "downloading-update" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateFound, this) : "update-ready" === e || "update-pending" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, this) : "offline-ready" === e && this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOfflineReady, this)
        };
        var batteryManager = null,
            loadedBatteryManager = !1;
        Cnds.prototype.CookiesEnabled = function() {
            return !!navigator && navigator.cookieEnabled
        }, Cnds.prototype.IsOnline = function() {
            return !!navigator && navigator.onLine
        }, Cnds.prototype.HasJava = function() {
            return !!navigator && navigator.javaEnabled()
        }, Cnds.prototype.OnOnline = function() {
            return !0
        }, Cnds.prototype.OnOffline = function() {
            return !0
        }, Cnds.prototype.IsDownloadingUpdate = function() {
            return void 0 !== window.applicationCache && window.applicationCache.status === window.applicationCache.DOWNLOADING
        }, Cnds.prototype.OnUpdateReady = function() {
            return !0
        }, Cnds.prototype.PageVisible = function() {
            return !this.runtime.isSuspended
        }, Cnds.prototype.OnPageVisible = function() {
            return !0
        }, Cnds.prototype.OnPageHidden = function() {
            return !0
        }, Cnds.prototype.OnResize = function() {
            return !0
        }, Cnds.prototype.IsFullscreen = function() {
            return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
        }, Cnds.prototype.OnBackButton = function() {
            return !0
        }, Cnds.prototype.OnMenuButton = function() {
            return !0
        }, Cnds.prototype.OnSearchButton = function() {
            return !0
        }, Cnds.prototype.IsMetered = function() {
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            return !!t && !!t.metered
        }, Cnds.prototype.IsCharging = function() {
            var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            return t ? !!t.charging : (maybeLoadBatteryManager(), !batteryManager || !!batteryManager.charging)
        }, Cnds.prototype.IsPortraitLandscape = function(t) {
            return (window.innerWidth <= window.innerHeight ? 0 : 1) === t
        }, Cnds.prototype.SupportsFullscreen = function() {
            if (this.runtime.isNodeWebkit) return !0;
            var t = this.runtime.canvasdiv || this.runtime.canvas;
            return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
        }, Cnds.prototype.OnUpdateFound = function() {
            return !0
        }, Cnds.prototype.OnUpdateReady = function() {
            return !0
        }, Cnds.prototype.OnOfflineReady = function() {
            return !0
        }, pluginProto.cnds = new Cnds, Acts.prototype.Alert = function(t) {
            this.runtime.isDomFree || alert(t.toString())
        }, Acts.prototype.Close = function() {
            this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
        }, Acts.prototype.Focus = function() {
            this.runtime.isNodeWebkit ? window.nwgui.Window.get().focus() : this.is_arcade || this.runtime.isDomFree || window.focus()
        }, Acts.prototype.Blur = function() {
            this.runtime.isNodeWebkit ? window.nwgui.Window.get().blur() : this.is_arcade || this.runtime.isDomFree || window.blur()
        }, Acts.prototype.GoBack = function() {
            navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
        }, Acts.prototype.GoForward = function() {
            this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
        }, Acts.prototype.GoHome = function() {
            this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
        }, Acts.prototype.GoToURL = function(t, e) {
          
        }, Acts.prototype.GoToURLWindow = function(t, e) {
           
        }, Acts.prototype.Reload = function() {
            this.is_arcade || this.runtime.isDomFree || window.location.reload()
        };
        var firstRequestFullscreen = !0,
            crruntime = null;
        Acts.prototype.RequestFullScreen = function(t) {
            if (this.runtime.isDomFree) cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
            else if (t >= 2 && (t += 1), 6 === t && (t = 2), this.runtime.isNodeWebkit) this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.runtime.isNodeFullscreen = !0, this.runtime.fullscreen_scaling = t >= 2 ? t : 0);
            else {
                if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement) return;
                this.runtime.fullscreen_scaling = t >= 2 ? t : 0;
                var e = this.runtime.canvasdiv || this.runtime.canvas;
                firstRequestFullscreen && (firstRequestFullscreen = !1, crruntime = this.runtime, e.addEventListener("mozfullscreenerror", onFullscreenError), e.addEventListener("webkitfullscreenerror", onFullscreenError), e.addEventListener("MSFullscreenError", onFullscreenError), e.addEventListener("fullscreenerror", onFullscreenError)), e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitRequestFullScreen && ("undefined" != typeof Element && void 0 !== Element.ALLOW_KEYBOARD_INPUT ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.webkitRequestFullScreen())
            }
        }, Acts.prototype.CancelFullScreen = function() {
            this.runtime.isDomFree ? cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }, Acts.prototype.Vibrate = function(t) {
            try {
                var e, i, s = t.split(",");
                for (e = 0, i = s.length; e < i; e++) s[e] = parseInt(s[e], 10);
                navigator.vibrate ? navigator.vibrate(s) : navigator.mozVibrate ? navigator.mozVibrate(s) : navigator.webkitVibrate ? navigator.webkitVibrate(s) : navigator.msVibrate && navigator.msVibrate(s)
            } catch (t) {}
        }, Acts.prototype.InvokeDownload = function(t, e) {
           
        }, Acts.prototype.InvokeDownloadString = function(t, e, i) {
         
        }, Acts.prototype.ConsoleLog = function(t, e) {
            "undefined" != typeof console && (0 === t && console.log && console.log(e.toString()), 1 === t && console.warn && console.warn(e.toString()), 2 === t && console.error && console.error(e.toString()))
        }, Acts.prototype.ConsoleGroup = function(t) {
            console && console.group && console.group(t)
        }, Acts.prototype.ConsoleGroupEnd = function() {
            console && console.groupEnd && console.groupEnd()
        }, Acts.prototype.ExecJs = function(js_) {
            try {
                eval && eval(js_)
            } catch (t) {
                console && console.error && console.error("Error executing Javascript: ", t)
            }
        };
        var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
        Acts.prototype.LockOrientation = function(t) {
            if (!((t = Math.floor(t)) < 0 || t >= orientations.length)) {
                this.runtime.autoLockOrientation = !1;
                var e = orientations[t];
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(e) : screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
            }
        }, Acts.prototype.UnlockOrientation = function() {
            this.runtime.autoLockOrientation = !1, screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        }, pluginProto.acts = new Acts, Exps.prototype.URL = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
        }, Exps.prototype.Protocol = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
        }, Exps.prototype.Domain = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
        }, Exps.prototype.PathName = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
        }, Exps.prototype.Hash = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
        }, Exps.prototype.Referrer = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.referrer)
        }, Exps.prototype.Title = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.title)
        }, Exps.prototype.Name = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
        }, Exps.prototype.Version = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
        }, Exps.prototype.Language = function(t) {
            navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
        }, Exps.prototype.Platform = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
        }, Exps.prototype.Product = function(t) {
            navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
        }, Exps.prototype.Vendor = function(t) {
            navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
        }, Exps.prototype.UserAgent = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
        }, Exps.prototype.QueryString = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.search)
        }, Exps.prototype.QueryParam = function(t, e) {
            if (this.runtime.isDomFree) t.set_string("");
            else {
                var i = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
                i ? t.set_string(decodeURIComponent(i[1].replace(/\+/g, " "))) : t.set_string("")
            }
        }, Exps.prototype.Bandwidth = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? void 0 !== e.bandwidth ? t.set_float(e.bandwidth) : void 0 !== e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
        }, Exps.prototype.ConnectionType = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
        }, Exps.prototype.BatteryLevel = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.level) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
        }, Exps.prototype.BatteryTimeLeft = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
        }, Exps.prototype.ExecJS = function(ret, js_) {
            if (eval) {
                var result = 0;
                try {
                    result = eval(js_)
                } catch (t) {
                    console && console.error && console.error("Error executing Javascript: ", t)
                }
                "number" == typeof result ? ret.set_any(result) : "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
            } else ret.set_any(0)
        }, Exps.prototype.ScreenWidth = function(t) {
            t.set_int(screen.width)
        }, Exps.prototype.ScreenHeight = function(t) {
            t.set_int(screen.height)
        }, Exps.prototype.DevicePixelRatio = function(t) {
            t.set_float(this.runtime.devicePixelRatio)
        }, Exps.prototype.WindowInnerWidth = function(t) {
            t.set_int(window.innerWidth)
        }, Exps.prototype.WindowInnerHeight = function(t) {
            t.set_int(window.innerHeight)
        }, Exps.prototype.WindowOuterWidth = function(t) {
            t.set_int(window.outerWidth)
        }, Exps.prototype.WindowOuterHeight = function(t) {
            t.set_int(window.outerHeight)
        }, pluginProto.exps = new Exps
    }(), cr.plugins_.Function = function(t) {
        this.runtime = t
    },
    function() {
        function t() {
            this.name = "", this.retVal = 0, this.params = []
        }

        function e() {
            return ++c === h.length && h.push(new t), h[c]
        }

        function i() {
            return c < 0 ? null : h[c]
        }

        function s() {
            if (!h.length) return null;
            var t = c + 1;
            return t >= h.length && (t = h.length - 1), h[t]
        }

        function n() {
            c--
        }

        function r() {}

        function o() {}

        function a() {}
        var A = cr.plugins_.Function.prototype;
        A.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, A.Type.prototype.onCreate = function() {}, A.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var h = [],
            c = -1,
            l = !1;
        A.Instance.prototype.onCreate = function() {
            l = "undefined" != typeof cr_is_preview;
            var t = this;
            window.c2_callFunction = function(i, s) {
                var r, o, a, A = e();
                if (A.name = i.toLowerCase(), A.retVal = 0, s)
                    for (A.params.length = s.length, r = 0, o = s.length; r < o; ++r) a = s[r], A.params[r] = "number" == typeof a || "string" == typeof a ? a : "boolean" == typeof a && a ? 1 : 0;
                else cr.clearArray(A.params);
                return t.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, t, A.name), n(), A.retVal
            }
        }, r.prototype.OnFunction = function(t) {
            var e = i();
            return !!e && cr.equals_nocase(t, e.name)
        }, r.prototype.CompareParam = function(t, e, s) {
            var n = i();
            return !!n && (!((t = cr.floor(t)) < 0 || t >= n.params.length) && cr.do_cmp(n.params[t], e, s))
        }, A.cnds = new r, o.prototype.CallFunction = function(t, i) {
            var s = e();
            s.name = t.toLowerCase(), s.retVal = 0, cr.shallowAssignArray(s.params, i);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, s.name);
            n()
        }, o.prototype.SetReturnValue = function(t) {
            var e = i();
            e && (e.retVal = t)
        }, o.prototype.CallExpression = function(t) {}, A.acts = new o, a.prototype.ReturnValue = function(t) {
            var e = s();
            e ? t.set_any(e.retVal) : t.set_int(0)
        }, a.prototype.ParamCount = function(t) {
            var e = i();
            e ? t.set_int(e.params.length) : t.set_int(0)
        }, a.prototype.Param = function(t, e) {
            e = cr.floor(e);
            var s = i();
            s && e >= 0 && e < s.params.length ? t.set_any(s.params[e]) : t.set_int(0)
        }, a.prototype.Call = function(t, i) {
            var s = e();
            s.name = i.toLowerCase(), s.retVal = 0, cr.clearArray(s.params);
            var r, o;
            for (r = 2, o = arguments.length; r < o; r++) s.params.push(arguments[r]);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, s.name);
            n(), t.set_any(s.retVal)
        }, A.exps = new a
    }(), cr.plugins_.NinePatch = function(t) {
        this.runtime = t
    },
    function() {
        function t(t, e, i, s, n, r, o, a, A, h) {
            t.save(), t.fillStyle = e;
            var c = n % i,
                l = r % s;
            c < 0 && (c += i), l < 0 && (l += s), t.translate(c + A, l + h), t.fillRect(n - c - A, r - l - h, o, a), t.restore()
        }

        function e() {}

        function i() {}
        var s = cr.plugins_.NinePatch.prototype;
        s.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.fillPattern = null, this.leftPattern = null, this.rightPattern = null, this.topPattern = null, this.bottomPattern = null, this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, n.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, n.onRestoreWebGLContext = function() {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, n.unloadTextures = function() {
            this.is_family || this.instances.length || this.runtime.glwrap && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.runtime.glwrap.deleteTexture(this.webGL_fillTexture), this.runtime.glwrap.deleteTexture(this.webGL_leftTexture), this.runtime.glwrap.deleteTexture(this.webGL_rightTexture), this.runtime.glwrap.deleteTexture(this.webGL_topTexture), this.runtime.glwrap.deleteTexture(this.webGL_bottomTexture), this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, n.slicePatch = function(t, e, i, s) {
            var n = document.createElement("canvas"),
                r = i - t,
                o = s - e;
            return n.width = r, n.height = o, n.getContext("2d").drawImage(this.texture_img, t, e, r, o, 0, 0, r, o), n
        }, n.createPatch = function(t, e, i, s) {
            var n = this.texture_img.width,
                r = this.texture_img.height,
                o = n - e,
                a = r - s;
            if (this.runtime.glwrap) {
                if (this.webGL_fillTexture) return;
                var A = this.runtime.glwrap,
                    h = this.runtime.linearSampling,
                    c = this.texture_pixelformat;
                o > t && a > i && (this.webGL_fillTexture = A.loadTexture(this.slicePatch(t, i, o, a), !0, h, c)), t > 0 && a > i && (this.webGL_leftTexture = A.loadTexture(this.slicePatch(0, i, t, a), !0, h, c, "repeat-y")), e > 0 && a > i && (this.webGL_rightTexture = A.loadTexture(this.slicePatch(o, i, n, a), !0, h, c, "repeat-y")), i > 0 && o > t && (this.webGL_topTexture = A.loadTexture(this.slicePatch(t, 0, o, i), !0, h, c, "repeat-x")), s > 0 && o > t && (this.webGL_bottomTexture = A.loadTexture(this.slicePatch(t, a, o, r), !0, h, c, "repeat-x"))
            } else {
                if (this.fillPattern) return;
                var l = this.runtime.ctx;
                o > t && a > i && (this.fillPattern = l.createPattern(this.slicePatch(t, i, o, a), "repeat")), t > 0 && a > i && (this.leftPattern = l.createPattern(this.slicePatch(0, i, t, a), "repeat")), e > 0 && a > i && (this.rightPattern = l.createPattern(this.slicePatch(o, i, n, a), "repeat")), i > 0 && o > t && (this.topPattern = l.createPattern(this.slicePatch(t, 0, o, i), "repeat")), s > 0 && o > t && (this.bottomPattern = l.createPattern(this.slicePatch(t, a, o, r), "repeat"))
            }
        }, s.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.leftMargin = this.properties[0], this.rightMargin = this.properties[1], this.topMargin = this.properties[2], this.bottomMargin = this.properties[3], this.edges = this.properties[4], this.fill = this.properties[5], this.visible = 0 === this.properties[6], this.seamless = 0 !== this.properties[8], this.recycled ? this.rcTex.set(0, 0, 0, 0) : this.rcTex = new cr.rect(0, 0, 0, 0), this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat))), this.type.createPatch(this.leftMargin, this.rightMargin, this.topMargin, this.bottomMargin)
        }, r.draw = function(e) {
            var i = this.type.texture_img,
                s = this.leftMargin,
                n = this.rightMargin,
                r = this.topMargin,
                o = this.bottomMargin,
                a = i.width,
                A = i.height,
                h = a - n,
                c = A - o;
            e.globalAlpha = this.opacity, e.save();
            var l = this.x,
                u = this.y,
                p = this.width,
                d = this.height;
            this.runtime.pixel_rounding && (l = Math.round(l), u = Math.round(u));
            var g = -this.hotspotX * this.width,
                f = -this.hotspotY * this.height,
                m = g % a,
                y = f % A;
            m < 0 && (m += a), y < 0 && (y += A), e.translate(l + m, u + y);
            var _ = g - m,
                v = f - y,
                b = this.seamless ? 1 : 0;
            if (s > 0 && r > 0 && e.drawImage(i, 0, 0, s + b, r + b, _, v, s + b, r + b), n > 0 && r > 0 && e.drawImage(i, h - b, 0, n + b, r + b, _ + p - n - b, v, n + b, r + b), n > 0 && o > 0 && e.drawImage(i, h - b, c - b, n + b, o + b, _ + p - n - b, v + d - o - b, n + b, o + b), s > 0 && o > 0 && e.drawImage(i, 0, c - b, s + b, o + b, _, v + d - o - b, s + b, o + b), 0 === this.edges) {
                var w = 2 === this.fill ? 0 : b;
                s > 0 && c > r && t(e, this.type.leftPattern, s, c - r, _, v + r, s + w, d - r - o, 0, 0), n > 0 && c > r && t(e, this.type.rightPattern, n, c - r, _ + p - n - w, v + r, n + w, d - r - o, w, 0), r > 0 && h > s && t(e, this.type.topPattern, h - s, r, _ + s, v, p - s - n, r + w, 0, 0), o > 0 && h > s && t(e, this.type.bottomPattern, h - s, o, _ + s, v + d - o - w, p - s - n, o + w, 0, w)
            } else 1 === this.edges && (s > 0 && c > r && d - r - o > 0 && e.drawImage(i, 0, r, s, c - r, _, v + r, s, d - r - o), n > 0 && c > r && d - r - o > 0 && e.drawImage(i, h, r, n, c - r, _ + p - n, v + r, n, d - r - o), r > 0 && h > s && p - s - n > 0 && e.drawImage(i, s, 0, h - s, r, _ + s, v, p - s - n, r), o > 0 && h > s && p - s - n > 0 && e.drawImage(i, s, c, h - s, o, _ + s, v + d - o, p - s - n, o));
            c > r && h > s && (0 === this.fill ? t(e, this.type.fillPattern, h - s, c - r, _ + s, v + r, p - s - n, d - r - o, 0, 0) : 1 === this.fill && p - s - n > 0 && d - r - o > 0 && e.drawImage(i, s, r, h - s, c - r, _ + s, v + r, p - s - n, d - r - o)), e.restore()
        }, r.drawPatch = function(t, e, i, s, n, r, o, a, A, h) {
            t.setTexture(e);
            var c = this.rcTex;
            c.left = i / e.c2width, c.top = s / e.c2height, c.right = (i + n) / e.c2width, c.bottom = (s + r) / e.c2height, t.quadTex(o, a, o + A, a, o + A, a + h, o, a + h, c)
        }, r.tilePatch = function(t, e, i, s, n, r, o, a) {
            t.setTexture(e);
            var A = this.rcTex;
            A.left = -o / e.c2width, A.top = -a / e.c2height, A.right = (n - o) / e.c2width, A.bottom = (r - a) / e.c2height, t.quadTex(i, s, i + n, s, i + n, s + r, i, s + r, A)
        }, r.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, r.drawGL = function(t) {
            var e = this.leftMargin,
                i = this.rightMargin,
                s = this.topMargin,
                n = this.bottomMargin,
                r = this.type.texture_img.width - i,
                o = this.type.texture_img.height - n;
            t.setOpacity(this.opacity);
            this.rcTex;
            var a = this.bquad,
                A = a.tlx,
                h = a.tly,
                c = this.width,
                l = this.height;
            this.runtime.pixel_rounding && (A = Math.round(A), h = Math.round(h));
            var u = this.seamless ? 1 : 0;
            if (e > 0 && s > 0 && this.drawPatch(t, this.type.webGL_texture, 0, 0, e + u, s + u, A, h, e + u, s + u), i > 0 && s > 0 && this.drawPatch(t, this.type.webGL_texture, r - u, 0, i + u, s + u, A + c - i - u, h, i + u, s + u), i > 0 && n > 0 && this.drawPatch(t, this.type.webGL_texture, r - u, o - u, i + u, n + u, A + c - i - u, h + l - n - u, i + u, n + u), e > 0 && n > 0 && this.drawPatch(t, this.type.webGL_texture, 0, o - u, e + u, n + u, A, h + l - n - u, e + u, n + u), 0 === this.edges) {
                var p = 2 === this.fill ? 0 : u;
                e > 0 && o > s && this.tilePatch(t, this.type.webGL_leftTexture, A, h + s, e + p, l - s - n, 0, 0), i > 0 && o > s && this.tilePatch(t, this.type.webGL_rightTexture, A + c - i - p, h + s, i + p, l - s - n, p, 0), s > 0 && r > e && this.tilePatch(t, this.type.webGL_topTexture, A + e, h, c - e - i, s + p, 0, 0), n > 0 && r > e && this.tilePatch(t, this.type.webGL_bottomTexture, A + e, h + l - n - p, c - e - i, n + p, 0, p)
            } else 1 === this.edges && (e > 0 && o > s && this.drawPatch(t, this.type.webGL_texture, 0, s, e, o - s, A, h + s, e, l - s - n), i > 0 && o > s && this.drawPatch(t, this.type.webGL_texture, r, s, i, o - s, A + c - i, h + s, i, l - s - n), s > 0 && r > e && this.drawPatch(t, this.type.webGL_texture, e, 0, r - e, s, A + e, h, c - e - i, s), n > 0 && r > e && this.drawPatch(t, this.type.webGL_texture, e, o, r - e, n, A + e, h + l - n, c - e - i, n));
            o > s && r > e && (0 === this.fill ? this.tilePatch(t, this.type.webGL_fillTexture, A + e, h + s, c - e - i, l - s - n, 0, 0) : 1 === this.fill && this.drawPatch(t, this.type.webGL_texture, e, s, r - e, o - s, A + e, h + s, c - e - i, l - s - n))
        }, e.prototype.OnURLLoaded = function() {
            return !0
        }, s.cnds = new e, i.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, s.acts = new i, s.exps = new function() {}
    }(), cr.plugins_.Sprite = function(t) {
        this.runtime = t
    },
    function() {
        function t() {
            if (0 === this.datauri.length) {
                var t = document.createElement("canvas");
                t.width = this.width, t.height = this.height;
                var e = t.getContext("2d");
                this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = t.toDataURL("image/png")
            }
            return this.datauri
        }

        function e() {}

        function i() {
            return f.length ? f.pop() : [0, 0, 0]
        }

        function s(t) {
            t[0] = 0, t[1] = 0, t[2] = 0, f.push(t)
        }

        function n(t, e) {
            return t < e ? t + "," + e : e + "," + t
        }

        function r(t, e, s, r) {
            var o = e.uid,
                a = s.uid,
                A = n(o, a);
            if (t.hasOwnProperty(A)) t[A][2] = r;
            else {
                var h = i();
                h[0] = o, h[1] = a, h[2] = r, t[A] = h
            }
        }

        function o(t, e, i) {
            var r = n(e.uid, i.uid);
            t.hasOwnProperty(r) && (s(t[r]), delete t[r])
        }

        function a(t, e) {
            var i, n, r = e.uid;
            for (i in t) t.hasOwnProperty(i) && ((n = t[i])[0] !== r && n[1] !== r || (s(t[i]), delete t[i]))
        }

        function A(t, e, i) {
            var s = n(e.uid, i.uid);
            return t.hasOwnProperty(s) ? (m = t[s][2], !0) : (m = -2, !1)
        }

        function h(t, e, i) {
            if (!t) return !1;
            var s, n, r, o, a, A, h = 0 !== e || 0 !== i,
                c = !1,
                l = this.runtime.getCurrentCondition(),
                u = l.type,
                p = l.inverted,
                d = t.getCurrentSol(),
                g = this.runtime.getCurrentEventStack().current_event.orblock;
            for (d.select_all ? (this.update_bbox(), x.copy(this.bbox), x.offset(e, i), this.runtime.getCollisionCandidates(this.layer, t, x, w), A = w) : A = g ? this.runtime.isCurrentConditionFirst() && !d.else_instances.length && d.instances.length ? d.instances : d.else_instances : d.instances, _ = t, b = u !== t && !p, h && (s = this.x, n = this.y, this.x += e, this.y += i, this.set_bbox_changed()), r = 0, o = A.length; r < o; r++)
                if (a = A[r], this.runtime.testOverlap(this, a)) {
                    if (c = !0, p) break;
                    u !== t && v.add(a)
                }
            return h && (this.x = s, this.y = n, this.set_bbox_changed()), cr.clearArray(w), c
        }

        function c() {}

        function l() {}
        var u = cr.plugins_.Sprite.prototype;
        u.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var p = u.Type.prototype;
        p.onCreate = function() {
            if (!this.is_family) {
                var e, i, s, n, r, o, a, A, h, c;
                for (this.all_frames = [], this.has_loaded_textures = !1, e = 0, i = this.animations.length; e < i; e++) {
                    for (r = this.animations[e], (a = {}).name = r[0], a.speed = r[1], a.loop = r[2], a.repeatcount = r[3], a.repeatto = r[4], a.pingpong = r[5], a.sid = r[6], a.frames = [], s = 0, n = r[7].length; s < n; s++) o = r[7][s], (A = {}).texture_file = o[0], A.texture_filesize = o[1], A.offx = o[2], A.offy = o[3], A.width = o[4], A.height = o[5], A.duration = o[6], A.hotspotX = o[7], A.hotspotY = o[8], A.image_points = o[9], A.poly_pts = o[10], A.pixelformat = o[11], A.spritesheeted = 0 !== A.width, A.datauri = "", A.getDataUri = t, (c = {}).left = 0, c.top = 0, c.right = 1, c.bottom = 1, A.sheetTex = c, A.webGL_texture = null, (h = this.runtime.findWaitingTexture(o[0])) ? A.texture_img = h : (A.texture_img = new Image, A.texture_img.cr_src = o[0], A.texture_img.cr_filesize = o[1], A.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(A.texture_img, o[0])), cr.seal(A), a.frames.push(A), this.all_frames.push(A);
                    cr.seal(a), this.animations[e] = a
                }
            }
        }, p.updateAllCurrentTexture = function() {
            var t, e, i;
            for (t = 0, e = this.instances.length; t < e; t++)(i = this.instances[t]).curWebGLTexture = i.curFrame.webGL_texture
        }, p.onLostWebGLContext = function() {
            if (!this.is_family) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).texture_img.c2webGL_texture = null, i.webGL_texture = null;
                this.has_loaded_textures = !1, this.updateAllCurrentTexture()
            }
        }, p.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.updateAllCurrentTexture()
            }
        }, p.loadTextures = function() {
            if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.has_loaded_textures = !0
            }
        }, p.unloadTextures = function() {
            if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], this.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = null;
                this.has_loaded_textures = !1
            }
        };
        var d = [];
        p.preloadCanvas2D = function(t) {
            var e, i, s;
            for (cr.clearArray(d), e = 0, i = this.all_frames.length; e < i; ++e) s = this.all_frames[e].texture_img, -1 === d.indexOf(s) && (t.drawImage(s, 0, 0), d.push(s))
        }, u.Instance = function(t) {
            this.type = t, this.runtime = t.runtime;
            var e = this.type.animations[0].frames[0].poly_pts;
            this.recycled ? this.collision_poly.set_pts(e) : this.collision_poly = new cr.CollisionPoly(e)
        };
        var g = u.Instance.prototype;
        g.onCreate = function() {
            this.visible = 0 === this.properties[0], this.isTicking = !1, this.inAnimTrigger = !1, this.collisionsEnabled = 0 !== this.properties[3], this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0], this.cur_frame = this.properties[2], this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
            var t = this.cur_animation.frames[this.cur_frame];
            this.collision_poly.set_pts(t.poly_pts), this.hotspotX = t.hotspotX, this.hotspotY = t.hotspotY, this.cur_anim_speed = this.cur_animation.speed, this.cur_anim_repeatto = this.cur_animation.repeatto, 1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.cur_anim_speed || (this.runtime.tickMe(this), this.isTicking = !0), this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder, this.frameStart = this.getNowTime(), this.animPlaying = !0, this.animRepeats = 0, this.animForwards = !0, this.animTriggerName = "", this.changeAnimName = "", this.changeAnimFrom = 0, this.changeAnimFrame = -1, this.type.loadTextures();
            var e, i, s, n, r, o, a, A;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                for (s = 0, n = (r = this.type.animations[e]).frames.length; s < n; s++) 0 === (o = r.frames[s]).width && (o.width = o.texture_img.width, o.height = o.texture_img.height), o.spritesheeted && (A = o.texture_img, (a = o.sheetTex).left = o.offx / A.width, a.top = o.offy / A.height, a.right = (o.offx + o.width) / A.width, a.bottom = (o.offy + o.height) / A.height, 0 === o.offx && 0 === o.offy && o.width === A.width && o.height === A.height && (o.spritesheeted = !1));
            this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture
        }, g.saveToJSON = function() {
            var t = {
                a: this.cur_animation.sid,
                f: this.cur_frame,
                cas: this.cur_anim_speed,
                fs: this.frameStart,
                ar: this.animRepeats,
                at: this.animTimer.sum,
                rt: this.cur_anim_repeatto
            };
            return this.animPlaying || (t.ap = this.animPlaying), this.animForwards || (t.af = this.animForwards), t
        }, g.loadFromJSON = function(t) {
            var e = this.getAnimationBySid(t.a);
            e && (this.cur_animation = e), this.cur_frame = t.f, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), this.cur_anim_speed = t.cas, this.frameStart = t.fs, this.animRepeats = t.ar, this.animTimer.reset(), this.animTimer.sum = t.at, this.animPlaying = !t.hasOwnProperty("ap") || t.ap, this.animForwards = !t.hasOwnProperty("af") || t.af, t.hasOwnProperty("rt") ? this.cur_anim_repeatto = t.rt : this.cur_anim_repeatto = this.cur_animation.repeatto, this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture, this.collision_poly.set_pts(this.curFrame.poly_pts), this.hotspotX = this.curFrame.hotspotX, this.hotspotY = this.curFrame.hotspotY
        }, g.animationFinish = function(t) {
            this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1, this.animPlaying = !1, this.animTriggerName = this.cur_animation.name, this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1, this.animRepeats = 0
        }, g.getNowTime = function() {
            return this.animTimer.sum
        }, g.tick = function() {
            this.animTimer.add(this.runtime.getDt(this)), this.changeAnimName.length && this.doChangeAnim(), this.changeAnimFrame >= 0 && this.doChangeAnimFrame();
            var t, e = this.getNowTime(),
                i = this.cur_animation,
                s = i.frames[this.cur_frame],
                n = s.duration / this.cur_anim_speed;
            this.animPlaying && e >= this.frameStart + n && (this.animForwards ? this.cur_frame++ : this.cur_frame--, this.frameStart += n, this.cur_frame >= i.frames.length && (i.pingpong ? (this.animForwards = !1, this.cur_frame = i.frames.length - 2) : i.loop ? this.cur_frame = this.cur_anim_repeatto : ++this.animRepeats >= i.repeatcount ? this.animationFinish(!1) : this.cur_frame = this.cur_anim_repeatto), this.cur_frame < 0 && (i.pingpong ? (this.cur_frame = 1, this.animForwards = !0, i.loop || ++this.animRepeats >= i.repeatcount && this.animationFinish(!0)) : i.loop ? this.cur_frame = this.cur_anim_repeatto : ++this.animRepeats >= i.repeatcount ? this.animationFinish(!0) : this.cur_frame = this.cur_anim_repeatto), this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= i.frames.length && (this.cur_frame = i.frames.length - 1), e > this.frameStart + i.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = e), t = i.frames[this.cur_frame], this.OnFrameChanged(s, t), this.runtime.redraw = !0)
        }, g.getAnimationByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if (s = this.type.animations[e], cr.equals_nocase(s.name, t)) return s;
            return null
        }, g.getAnimationBySid = function(t) {
            var e, i, s;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if ((s = this.type.animations[e]).sid === t) return s;
            return null
        }, g.doChangeAnim = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.getAnimationByName(this.changeAnimName);
            this.changeAnimName = "", e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e, this.cur_anim_speed = e.speed, this.cur_anim_repeatto = e.repeatto, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), 1 === this.changeAnimFrom && (this.cur_frame = 0), this.animPlaying = !0, this.frameStart = this.getNowTime(), this.animForwards = !0, this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.runtime.redraw = !0))
        }, g.doChangeAnimFrame = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.cur_frame;
            this.cur_frame = cr.floor(this.changeAnimFrame), this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.frameStart = this.getNowTime(), this.runtime.redraw = !0), this.changeAnimFrame = -1
        }, g.OnFrameChanged = function(t, e) {
            var i = t.width,
                s = t.height,
                n = e.width,
                r = e.height;
            i != n && (this.width *= n / i), s != r && (this.height *= r / s), this.hotspotX = e.hotspotX, this.hotspotY = e.hotspotY, this.collision_poly.set_pts(e.poly_pts), this.set_bbox_changed(), this.curFrame = e, this.curWebGLTexture = e.webGL_texture;
            var o, a, A;
            for (o = 0, a = this.behavior_insts.length; o < a; o++)(A = this.behavior_insts[o]).onSpriteFrameChanged && A.onSpriteFrameChanged(t, e);
            this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
        }, g.draw = function(t) {
            t.globalAlpha = this.opacity;
            var e = this.curFrame,
                i = e.spritesheeted,
                s = e.texture_img,
                n = this.x,
                r = this.y,
                o = this.width,
                a = this.height;
            if (0 === this.angle && o >= 0 && a >= 0) n -= this.hotspotX * o, r -= this.hotspotY * a, this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), i ? t.drawImage(s, e.offx, e.offy, e.width, e.height, n, r, o, a) : t.drawImage(s, n, r, o, a);
            else {
                this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), t.save();
                var A = o > 0 ? 1 : -1,
                    h = a > 0 ? 1 : -1;
                t.translate(n, r), 1 === A && 1 === h || t.scale(A, h), t.rotate(this.angle * A * h);
                var c = 0 - this.hotspotX * cr.abs(o),
                    l = 0 - this.hotspotY * cr.abs(a);
                i ? t.drawImage(s, e.offx, e.offy, e.width, e.height, c, l, cr.abs(o), cr.abs(a)) : t.drawImage(s, c, l, cr.abs(o), cr.abs(a)), t.restore()
            }
        }, g.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, g.drawGL = function(t) {
            t.setTexture(this.curWebGLTexture), t.setOpacity(this.opacity);
            var e = this.curFrame,
                i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var s = Math.round(this.x) - this.x,
                    n = Math.round(this.y) - this.y;
                e.spritesheeted ? t.quadTex(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n, e.sheetTex) : t.quad(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n)
            } else e.spritesheeted ? t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e.sheetTex) : t.quad(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly)
        }, g.getImagePointIndexByName = function(t) {
            var e, i, s = this.curFrame;
            for (e = 0, i = s.image_points.length; e < i; e++)
                if (cr.equals_nocase(t, s.image_points[e][0])) return e;
            return -1
        }, g.getImagePoint = function(t, e) {
            var i, s = this.curFrame,
                n = s.image_points;
            if (i = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1, (i = cr.floor(i)) < 0 || i >= n.length) return e ? this.x : this.y;
            var r = (n[i][1] - s.hotspotX) * this.width,
                o = n[i][2];
            o = (o - s.hotspotY) * this.height;
            var a = Math.cos(this.angle),
                A = Math.sin(this.angle),
                h = r * a - o * A;
            return o = o * a + r * A, r = h, r += this.x, o += this.y, e ? r : o
        };
        var f = [],
            m = -2,
            y = [];
        e.prototype.OnCollision = function(t) {
            if (!t) return !1;
            var e = this.runtime,
                i = e.getCurrentCondition(),
                s = i.type,
                n = null;
            i.extra.collmemory ? n = i.extra.collmemory : (n = {}, i.extra.collmemory = n), i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0, e.addDestroyCallback(function(t) {
                a(i.extra.collmemory, t)
            }));
            var h, c, l, u, p, d, g, f, _ = s.getCurrentSol(),
                v = t.getCurrentSol(),
                b = _.getObjects(),
                w = this.runtime.tickcount,
                x = w - 1,
                B = e.getCurrentEventStack().current_event;
            B.orblock;
            for (c = 0; c < b.length; c++) {
                for (l = b[c], v.select_all ? (l.update_bbox(), this.runtime.getCollisionCandidates(l.layer, t, l.bbox, y), h = y) : h = v.getObjects(), u = 0; u < h.length; u++) p = h[u], e.testOverlap(l, p) || e.checkRegisteredCollision(l, p) ? (f = !A(n, l, p) || m < x, r(n, l, p, w), f && (e.pushCopySol(B.solModifiers), d = s.getCurrentSol(), g = t.getCurrentSol(), d.select_all = !1, g.select_all = !1, s === t ? (d.instances.length = 2, d.instances[0] = l, d.instances[1] = p, s.applySolToContainer()) : (d.instances.length = 1, g.instances.length = 1, d.instances[0] = l, g.instances[0] = p, s.applySolToContainer(), t.applySolToContainer()), B.retrigger(), e.popSol(B.solModifiers))) : o(n, l, p);
                cr.clearArray(y)
            }
            return !1
        };
        var _ = null,
            v = new cr.ObjectSet,
            b = !1,
            w = [],
            x = new cr.rect(0, 0, 0, 0);
        p.finish = function(t) {
            if (b) {
                if (t) {
                    var e, i, s, n = this.runtime.getCurrentEventStack().current_event.orblock,
                        r = _.getCurrentSol(),
                        o = v.valuesRef();
                    if (r.select_all) {
                        for (r.select_all = !1, cr.clearArray(r.instances), e = 0, i = o.length; e < i; ++e) r.instances[e] = o[e];
                        if (n)
                            for (cr.clearArray(r.else_instances), e = 0, i = _.instances.length; e < i; ++e) s = _.instances[e], v.contains(s) || r.else_instances.push(s)
                    } else if (n) {
                        var a = r.instances.length;
                        for (e = 0, i = o.length; e < i; ++e) r.instances[a + e] = o[e], cr.arrayFindRemove(r.else_instances, o[e])
                    } else cr.shallowAssignArray(r.instances, o);
                    _.applySolToContainer()
                }
                v.clear(), b = !1
            }
        }, e.prototype.IsOverlapping = function(t) {
            return h.call(this, t, 0, 0)
        }, e.prototype.IsOverlappingOffset = function(t, e, i) {
            return h.call(this, t, e, i)
        }, e.prototype.IsAnimPlaying = function(t) {
            return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
        }, e.prototype.CompareFrame = function(t, e) {
            return cr.do_cmp(this.cur_frame, t, e)
        }, e.prototype.CompareAnimSpeed = function(t, e) {
            var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
            return cr.do_cmp(i, t, e)
        }, e.prototype.OnAnimFinished = function(t) {
            return cr.equals_nocase(this.animTriggerName, t)
        }, e.prototype.OnAnyAnimFinished = function() {
            return !0
        }, e.prototype.OnFrameChanged = function() {
            return !0
        }, e.prototype.IsMirrored = function() {
            return this.width < 0
        }, e.prototype.IsFlipped = function() {
            return this.height < 0
        }, e.prototype.OnURLLoaded = function() {
            return !0
        }, e.prototype.IsCollisionEnabled = function() {
            return this.collisionsEnabled
        }, u.cnds = new e, c.prototype.Spawn = function(t, e, i) {
            if (t && e) {
                var s = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
                if (s) {
                    void 0 !== s.angle && (s.angle = this.angle, s.set_bbox_changed()), this.runtime.isInOnDestroy++;
                    var n, r, o;
                    if (this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, s), s.is_contained)
                        for (n = 0, r = s.siblings.length; n < r; n++) o = s.siblings[n], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                    this.runtime.isInOnDestroy--;
                    var a = this.runtime.getCurrentAction(),
                        A = !1;
                    (cr.is_undefined(a.extra.Spawn_LastExec) || a.extra.Spawn_LastExec < this.runtime.execcount) && (A = !0, a.extra.Spawn_LastExec = this.runtime.execcount);
                    var h;
                    if (t != this.type && (h = t.getCurrentSol(), h.select_all = !1, A ? (cr.clearArray(h.instances), h.instances[0] = s) : h.instances.push(s), s.is_contained))
                        for (n = 0, r = s.siblings.length; n < r; n++)(h = (o = s.siblings[n]).type.getCurrentSol()).select_all = !1, A ? (cr.clearArray(h.instances), h.instances[0] = o) : h.instances.push(o)
                }
            }
        }, c.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, c.prototype.StopAnim = function() {
            this.animPlaying = !1
        }, c.prototype.StartAnim = function(t) {
            this.animPlaying = !0, this.frameStart = this.getNowTime(), 1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0, this.inAnimTrigger || this.doChangeAnimFrame()), this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, c.prototype.SetAnim = function(t, e) {
            this.changeAnimName = t, this.changeAnimFrom = e, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnim()
        }, c.prototype.SetAnimFrame = function(t) {
            this.changeAnimFrame = t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnimFrame()
        }, c.prototype.SetAnimSpeed = function(t) {
            this.cur_anim_speed = cr.abs(t), this.animForwards = t >= 0, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, c.prototype.SetAnimRepeatToFrame = function(t) {
            (t = Math.floor(t)) < 0 && (t = 0), t >= this.cur_animation.frames.length && (t = this.cur_animation.frames.length - 1), this.cur_anim_repeatto = t
        }, c.prototype.SetMirrored = function(t) {
            var e = cr.abs(this.width) * (0 === t ? -1 : 1);
            this.width !== e && (this.width = e, this.set_bbox_changed())
        }, c.prototype.SetFlipped = function(t) {
            var e = cr.abs(this.height) * (0 === t ? -1 : 1);
            this.height !== e && (this.height = e, this.set_bbox_changed())
        }, c.prototype.SetScale = function(t) {
            var e = this.curFrame,
                i = this.width < 0 ? -1 : 1,
                s = this.height < 0 ? -1 : 1,
                n = e.width * t * i,
                r = e.height * t * s;
            this.width === n && this.height === r || (this.width = n, this.height = r, this.set_bbox_changed())
        }, c.prototype.LoadURL = function(t, e, i) {
            var s = new Image,
                n = this,
                r = this.curFrame;
            s.onload = function() {
                if (r.texture_img.src === s.src) return n.runtime.glwrap && n.curFrame === r && (n.curWebGLTexture = r.webGL_texture), 0 === e && (n.width = s.width, n.height = s.height, n.set_bbox_changed()), n.runtime.redraw = !0, void n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n);
                r.texture_img = s, r.offx = 0, r.offy = 0, r.width = s.width, r.height = s.height, r.spritesheeted = !1, r.datauri = "", r.pixelformat = 0, n.runtime.glwrap && (r.webGL_texture && n.runtime.glwrap.deleteTexture(r.webGL_texture), r.webGL_texture = n.runtime.glwrap.loadTexture(s, !1, n.runtime.linearSampling), n.curFrame === r && (n.curWebGLTexture = r.webGL_texture), n.type.updateAllCurrentTexture()), 0 === e && (n.width = s.width, n.height = s.height, n.set_bbox_changed()), n.runtime.redraw = !0, n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n)
            }, "data:" !== t.substr(0, 5) && 0 === i && (s.crossOrigin = "anonymous"), this.runtime.setImageSrc(s, t)
        }, c.prototype.SetCollisions = function(t) {
            this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t, this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null), this.collcells.set(0, 0, -1, -1)))
        }, u.acts = new c, l.prototype.AnimationFrame = function(t) {
            t.set_int(this.cur_frame)
        }, l.prototype.AnimationFrameCount = function(t) {
            t.set_int(this.cur_animation.frames.length)
        }, l.prototype.AnimationName = function(t) {
            t.set_string(this.cur_animation.name)
        }, l.prototype.AnimationSpeed = function(t) {
            t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
        }, l.prototype.ImagePointX = function(t, e) {
            t.set_float(this.getImagePoint(e, !0))
        }, l.prototype.ImagePointY = function(t, e) {
            t.set_float(this.getImagePoint(e, !1))
        }, l.prototype.ImagePointCount = function(t) {
            t.set_int(this.curFrame.image_points.length)
        }, l.prototype.ImageWidth = function(t) {
            t.set_float(this.curFrame.width)
        }, l.prototype.ImageHeight = function(t) {
            t.set_float(this.curFrame.height)
        }, u.exps = new l
    }(), cr.plugins_.Spritefont2 = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            return t.replace(/\s\s*$/, "")
        }

        function e(t, e) {
            return t.length ? t.pop() : new e
        }

        function i(t, e) {
            t.length < _ && t.push(e)
        }

        function s(t, e, s) {
            if (s) {
                var n, r;
                for (n = 0, r = e.length; n < r; n++) i(t, e[n]);
                cr.clearArray(e)
            } else {
                var o;
                for (o in e) Object.prototype.hasOwnProperty.call(e, o) && (i(t, e[o]), delete e[o])
            }
        }

        function n(e, i, s) {
            var n, o = e.lines;
            s = t(s), i >= o.length && o.push(r()), (n = o[i]).text = s, n.width = e.measureWidth(s), e.textWidth = cr.max(e.textWidth, n.width)
        }

        function r() {
            return e(v, Object)
        }

        function o(t) {
            i(v, t)
        }

        function a(t) {
            s(v, t, !0)
        }

        function A(t, i, s, n, r, o) {
            void 0 === t[i] && (t[i] = e(b, Object)), t[i].x = s, t[i].y = n, t[i].w = r, t[i].h = o
        }

        function h(t) {
            s(b, t, !1)
        }

        function c(t, i, s, n, r, o) {
            void 0 === t[i] && (t[i] = e(w, cr.rect)), t[i].left = s, t[i].top = n, t[i].right = r, t[i].bottom = o
        }

        function l(t) {
            s(w, t, !1)
        }

        function u(t, e, i) {
            var s;
            s = t.tlx * e - t.tly * i, t.tly = t.tly * e + t.tlx * i, t.tlx = s, s = t.trx * e - t.try_ * i, t.try_ = t.try_ * e + t.trx * i, t.trx = s, s = t.blx * e - t.bly * i, t.bly = t.bly * e + t.blx * i, t.blx = s, s = t.brx * e - t.bry * i, t.bry = t.bry * e + t.brx * i, t.brx = s
        }

        function p() {}

        function d() {}

        function g() {}
        var f = cr.plugins_.Spritefont2.prototype;
        f.onCreate = function() {}, f.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var m = f.Type.prototype;
        m.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.webGL_texture = null)
        }, m.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, m.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat));
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
            }
        }, m.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, m.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, f.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var y = f.Instance.prototype;
        y.onDestroy = function() {
            a(this.lines), h(this.clipList), l(this.clipUV), cr.wipe(this.characterWidthList)
        }, y.onCreate = function() {
            this.texture_img = this.type.texture_img, this.characterWidth = this.properties[0], this.characterHeight = this.properties[1], this.characterSet = this.properties[2], this.text = this.properties[3], this.characterScale = this.properties[4], this.visible = 0 === this.properties[5], this.halign = this.properties[6] / 2, this.valign = this.properties[7] / 2, this.wrapbyword = 0 === this.properties[9], this.characterSpacing = this.properties[10], this.lineHeight = this.properties[11], this.textWidth = 0, this.textHeight = 0, this.recycled ? (cr.clearArray(this.lines), cr.wipe(this.clipList), cr.wipe(this.clipUV), cr.wipe(this.characterWidthList)) : (this.lines = [], this.clipList = {}, this.clipUV = {}, this.characterWidthList = {}), this.text_changed = !0, this.lastwrapwidth = this.width, this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)), this.webGL_texture = this.type.webGL_texture), this.SplitSheet()
        }, y.saveToJSON = function() {
            var t = {
                t: this.text,
                csc: this.characterScale,
                csp: this.characterSpacing,
                lh: this.lineHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick,
                ha: this.halign,
                va: this.valign,
                cw: {}
            };
            for (var e in this.characterWidthList) t.cw[e] = this.characterWidthList[e];
            return t
        }, y.loadFromJSON = function(t) {
            this.text = t.t, this.characterScale = t.csc, this.characterSpacing = t.csp, this.lineHeight = t.lh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, t.hasOwnProperty("ha") && (this.halign = t.ha), t.hasOwnProperty("va") && (this.valign = t.va);
            for (var e in t.cw) this.characterWidthList[e] = t.cw[e];
            this.text_changed = !0, this.lastwrapwidth = this.width
        };
        var _ = 1e3,
            v = [],
            b = [],
            w = [];
        y.SplitSheet = function() {
            for (var t = this.texture_img, e = t.width, i = t.height, s = this.characterWidth, n = this.characterHeight, r = s / e, o = n / i, a = this.characterSet, h = Math.floor(e / s), l = Math.floor(i / n), u = 0; u < a.length && !(u >= h * l); u++) {
                var p = u % h,
                    d = Math.floor(u / h),
                    g = a.charAt(u);
                this.runtime.glwrap ? c(this.clipUV, g, p * r, d * o, (p + 1) * r, (d + 1) * o) : A(this.clipList, g, p * s, d * n, s, n)
            }
        };
        var x = [];
        f.TokeniseWords = function(t) {
            cr.clearArray(x);
            for (var e, i = "", s = 0; s < t.length;)
                if ("\n" === (e = t.charAt(s))) i.length && (x.push(i), i = ""), x.push("\n"), ++s;
                else if (" " === e || "\t" === e || "-" === e) {
                do {
                    i += t.charAt(s), s++
                } while (s < t.length && (" " === t.charAt(s) || "\t" === t.charAt(s)));
                x.push(i), i = ""
            } else s < t.length && (i += e, s++);
            i.length && x.push(i)
        }, f.WordWrap = function(t) {
            var e = t.text,
                i = t.lines;
            if (e && e.length) {
                var s = t.width;
                if (s <= 2) a(i);
                else {
                    var n = t.characterWidth,
                        o = t.characterScale,
                        A = t.characterSpacing;
                    if (e.length * (n * o + A) - A <= s && -1 === e.indexOf("\n")) {
                        var h = t.measureWidth(e);
                        if (h <= s) return a(i), i.push(r()), i[0].text = e, i[0].width = h, t.textWidth = h, void(t.textHeight = t.characterHeight * o + t.lineHeight)
                    }
                    t.wrapbyword;
                    this.WrapText(t), t.textHeight = i.length * (t.characterHeight * o + t.lineHeight)
                }
            } else a(i)
        }, f.WrapText = function(e) {
            var i, s = e.wrapbyword,
                r = e.text,
                a = e.lines,
                A = e.width;
            s ? (this.TokeniseWords(r), i = x) : i = r;
            var h, c, l = "",
                u = 0,
                p = !1;
            for (c = 0; c < i.length; c++) "\n" !== i[c] ? (p = !1, h = l, l += i[c], e.measureWidth(t(l)) > A && ("" === h ? (n(e, u, l), l = "", p = !0) : (n(e, u, h), l = i[c]), u++, s || " " !== l || (l = ""))) : (!0 === p ? p = !1 : (n(e, u, l), u++), l = "");
            for (t(l).length && (n(e, u, l), u++), c = u; c < a.length; c++) o(a[c]);
            a.length = u
        }, y.measureWidth = function(t) {
            for (var e = this.characterSpacing, i = t.length, s = 0, n = 0; n < i; n++) s += this.getCharacterWidth(t.charAt(n)) * this.characterScale + e;
            return s -= s > 0 ? e : 0
        }, y.getCharacterWidth = function(t) {
            var e = this.characterWidthList;
            return void 0 !== e[t] ? e[t] : this.characterWidth
        }, y.rebuildText = function() {
            (this.text_changed || this.width !== this.lastwrapwidth) && (this.textWidth = 0, this.textHeight = 0, this.type.plugin.WordWrap(this), this.text_changed = !1, this.lastwrapwidth = this.width)
        };
        y.draw = function(t, e) {
            var i = this.texture_img;
            if ("" !== this.text && null != i) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                t.globalAlpha = this.opacity;
                var s = this.x,
                    n = this.y;
                this.runtime.pixel_rounding && (s = Math.round(s), n = Math.round(n));
                var r = this.layer.viewLeft,
                    o = this.layer.viewTop,
                    a = this.layer.viewRight,
                    A = this.layer.viewBottom;
                t.save(), t.translate(s, n), t.rotate(this.angle);
                for (var h, c, l, u, p, d = this.angle, g = this.halign, f = this.valign, m = this.characterScale, y = this.characterHeight * m, _ = this.lineHeight, v = this.characterSpacing, b = this.lines, w = this.textHeight, x = f * cr.max(0, this.height - w), B = -this.hotspotX * this.width, T = -this.hotspotY * this.height, S = T += x, E = 0; E < b.length; E++) {
                    var C = b[E].text,
                        O = b[E].width;
                    if (c = g * cr.max(0, this.width - O), l = B + c, S += _, 0 === d && n + S + y < o) S += y;
                    else {
                        for (var I = 0; I < C.length; I++) {
                            var P = C.charAt(I);
                            h = this.getCharacterWidth(P);
                            var k = this.clipList[P];
                            if (0 === d && s + l + h * m + v < r) l += h * m + v;
                            else {
                                if (l + h * m > this.width + 1e-5) break;
                                if (void 0 !== k && (u = l, p = S, 0 === d && 1 === m && (u = Math.round(u), p = Math.round(p)), t.drawImage(this.texture_img, k.x, k.y, k.w, k.h, u, p, k.w * m, k.h * m)), l += h * m + v, 0 === d && s + l > a) break
                            }
                        }
                        if (S += y, 0 === d && (S + y + _ > this.height || n + S > A)) break
                    }
                }
                t.restore()
            }
        };
        var B = new cr.quad;
        y.drawGL = function(t) {
            if (t.setTexture(this.webGL_texture), t.setOpacity(this.opacity), this.text && (this.rebuildText(), !(this.height < this.characterHeight * this.characterScale + this.lineHeight))) {
                this.update_bbox();
                var e = this.bquad,
                    i = 0,
                    s = 0;
                this.runtime.pixel_rounding && (i = Math.round(this.x) - this.x, s = Math.round(this.y) - this.y);
                var n, r, o, a = this.layer.viewLeft,
                    A = this.layer.viewTop,
                    h = this.layer.viewRight,
                    c = this.layer.viewBottom,
                    l = this.angle,
                    p = this.halign,
                    d = this.valign,
                    g = this.characterScale,
                    f = this.characterHeight * g,
                    m = this.lineHeight,
                    y = this.characterSpacing,
                    _ = this.lines,
                    v = this.textHeight;
                0 !== l && (r = Math.cos(l), o = Math.sin(l));
                for (var b, w, x, T, S = d * cr.max(0, this.height - v), E = e.tlx + i, C = e.tly + s, O = S, I = 0; I < _.length; I++) {
                    var P = _[I].text,
                        k = _[I].width;
                    if (b = p * cr.max(0, this.width - k), w = b, O += m, 0 === l && C + O + f < A) O += f;
                    else {
                        for (var R = 0; R < P.length; R++) {
                            var L = P.charAt(R);
                            n = this.getCharacterWidth(L);
                            var M = this.clipUV[L];
                            if (0 === l && E + w + n * g + y < a) w += n * g + y;
                            else {
                                if (w + n * g > this.width + 1e-5) break;
                                if (void 0 !== M) {
                                    var N = this.characterWidth * g,
                                        F = this.characterHeight * g;
                                    x = w, T = O, 0 === l && 1 === g && (x = Math.round(x), T = Math.round(T)), B.tlx = x, B.tly = T, B.trx = x + N, B.try_ = T, B.blx = x, B.bly = T + F, B.brx = x + N, B.bry = T + F, 0 !== l && u(B, r, o), B.offset(E, C), t.quadTex(B.tlx, B.tly, B.trx, B.try_, B.brx, B.bry, B.blx, B.bly, M)
                                }
                                if (w += n * g + y, 0 === l && E + w > h) break
                            }
                        }
                        if (O += f, 0 === l && (O + f + m > this.height || C + O > c)) break
                    }
                }
            }
        }, p.prototype.CompareText = function(t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, f.cnds = new p, d.prototype.SetText = function(t) {
            cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, d.prototype.AppendText = function(t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, d.prototype.SetScale = function(t) {
            t !== this.characterScale && (this.characterScale = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, d.prototype.SetCharacterSpacing = function(t) {
            t !== this.CharacterSpacing && (this.characterSpacing = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, d.prototype.SetLineHeight = function(t) {
            t !== this.lineHeight && (this.lineHeight = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, y.SetCharWidth = function(t, e) {
            var i = parseInt(e, 10);
            this.characterWidthList[t] !== i && (this.characterWidthList[t] = i, this.text_changed = !0, this.runtime.redraw = !0)
        }, d.prototype.SetCharacterWidth = function(t, e) {
            if ("" !== t)
                for (var i = 0; i < t.length; i++) this.SetCharWidth(t.charAt(i), e)
        }, d.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, d.prototype.SetHAlign = function(t) {
            this.halign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, d.prototype.SetVAlign = function(t) {
            this.valign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, f.acts = new d, g.prototype.CharacterWidth = function(t, e) {
            t.set_int(this.getCharacterWidth(e))
        }, g.prototype.CharacterHeight = function(t) {
            t.set_int(this.characterHeight)
        }, g.prototype.CharacterScale = function(t) {
            t.set_float(this.characterScale)
        }, g.prototype.CharacterSpacing = function(t) {
            t.set_int(this.characterSpacing)
        }, g.prototype.LineHeight = function(t) {
            t.set_int(this.lineHeight)
        }, g.prototype.Text = function(t) {
            t.set_string(this.text)
        }, g.prototype.TextWidth = function(t) {
            this.rebuildText(), t.set_float(this.textWidth)
        }, g.prototype.TextHeight = function(t) {
            this.rebuildText(), t.set_float(this.textHeight)
        }, f.exps = new g
    }(), cr.plugins_.TiledBg = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.plugins_.TiledBg.prototype;
        s.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.pattern = null, this.webGL_texture = null)
        }, n.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, n.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat));
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
            }
        }, n.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, n.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, n.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, s.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.visible = 0 === this.properties[0], this.rcTex = new cr.rect(0, 0, 0, 0), this.has_own_texture = !1, this.texture_img = this.type.texture_img, this.runtime.glwrap ? (this.type.loadTextures(), this.webGL_texture = this.type.webGL_texture) : (this.type.pattern || (this.type.pattern = this.runtime.ctx.createPattern(this.type.texture_img, "repeat")), this.pattern = this.type.pattern)
        }, r.afterLoad = function() {
            this.has_own_texture = !1, this.texture_img = this.type.texture_img
        }, r.onDestroy = function() {
            this.runtime.glwrap && this.has_own_texture && this.webGL_texture && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, r.draw = function(t) {
            t.globalAlpha = this.opacity, t.save(), t.fillStyle = this.pattern;
            var e = this.x,
                i = this.y;
            this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i));
            var s = -this.hotspotX * this.width,
                n = -this.hotspotY * this.height,
                r = s % this.texture_img.width,
                o = n % this.texture_img.height;
            r < 0 && (r += this.texture_img.width), o < 0 && (o += this.texture_img.height), t.translate(e, i), t.rotate(this.angle), t.translate(r, o), t.fillRect(s - r, n - o, this.width, this.height), t.restore()
        }, r.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, r.drawGL = function(t) {
            t.setTexture(this.webGL_texture), t.setOpacity(this.opacity);
            var e = this.rcTex;
            e.right = this.width / this.texture_img.width, e.bottom = this.height / this.texture_img.height;
            var i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var s = Math.round(this.x) - this.x,
                    n = Math.round(this.y) - this.y;
                t.quadTex(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n, e)
            } else t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e)
        }, t.prototype.OnURLLoaded = function() {
            return !0
        }, s.cnds = new t, e.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, e.prototype.LoadURL = function(t, e) {
            var i = new Image,
                s = this;
            i.onload = function() {
                s.texture_img = i, s.runtime.glwrap ? (s.has_own_texture && s.webGL_texture && s.runtime.glwrap.deleteTexture(s.webGL_texture), s.webGL_texture = s.runtime.glwrap.loadTexture(i, !0, s.runtime.linearSampling)) : s.pattern = s.runtime.ctx.createPattern(i, "repeat"), s.has_own_texture = !0, s.runtime.redraw = !0, s.runtime.trigger(cr.plugins_.TiledBg.prototype.cnds.OnURLLoaded, s)
            }, "data:" !== t.substr(0, 5) && 0 === e && (i.crossOrigin = "anonymous"), this.runtime.setImageSrc(i, t)
        }, s.acts = new e, i.prototype.ImageWidth = function(t) {
            t.set_float(this.texture_img.width)
        }, i.prototype.ImageHeight = function(t) {
            t.set_float(this.texture_img.height)
        }, s.exps = new i
    }(), cr.plugins_.Touch = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            h = t.x, c = t.y, l = t.z
        }

        function e(t, e, i, n) {
            var r;
            return (r = p.length ? p.pop() : new s).init(t, e, i, n), r
        }

        function i(t) {
            p.length < 100 && p.push(t)
        }

        function s() {
            this.starttime = 0, this.time = 0, this.lasttime = 0, this.startx = 0, this.starty = 0, this.x = 0, this.y = 0, this.lastx = 0, this.lasty = 0, this.id = 0, this.startindex = 0, this.triggeredHold = !1, this.tooFarForHold = !1
        }

        function n() {}

        function r() {}
        var o = cr.plugins_.Touch.prototype;
        o.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, o.Type.prototype.onCreate = function() {}, o.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.touches = [], this.mouseDown = !1
        };
        var a = o.Instance.prototype,
            A = {
                left: 0,
                top: 0
            };
        a.findTouch = function(t) {
            var e, i;
            for (e = 0, i = this.touches.length; e < i; e++)
                if (this.touches[e].id === t) return e;
            return -1
        };
        var h = 0,
            c = 0,
            l = 0,
            u = null,
            p = [];
        s.prototype.init = function(t, e, i, s) {
            var n = cr.performance_now();
            this.time = n, this.lasttime = n, this.starttime = n, this.startx = t, this.starty = e, this.x = t, this.y = e, this.lastx = t, this.lasty = e, this.width = 0, this.height = 0, this.pressure = 0, this.id = i, this.startindex = s, this.triggeredHold = !1, this.tooFarForHold = !1
        }, s.prototype.update = function(t, e, i, s, n, r) {
            this.lasttime = this.time, this.time = t, this.lastx = this.x, this.lasty = this.y, this.x = e, this.y = i, this.width = s, this.height = n, this.pressure = r, !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) >= 15 && (this.tooFarForHold = !0)
        }, s.prototype.maybeTriggerHold = function(t, e) {
            this.triggeredHold || cr.performance_now() - this.starttime >= 500 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (this.triggeredHold = !0, t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t), t.getTouchIndex = 0)
        };
        var d = -1e3,
            g = -1e3,
            f = -1e4;
        s.prototype.maybeTriggerTap = function(t, e) {
            if (!this.triggeredHold) {
                var i = cr.performance_now();
                i - this.starttime <= 333 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, i - f <= 666 && cr.distanceTo(d, g, this.x, this.y) < 25 ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t), d = -1e3, g = -1e3, f = -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t), d = this.x, g = this.y, f = i), t.getTouchIndex = 0)
            }
        }, a.onCreate = function() {
            u = this, this.isWindows8 = !(void 0 === window.c2isWindows8 || !window.c2isWindows8), this.orient_alpha = 0, this.orient_beta = 0, this.orient_gamma = 0, this.acc_g_x = 0, this.acc_g_y = 0, this.acc_g_z = 0, this.acc_x = 0, this.acc_y = 0, this.acc_z = 0, this.curTouchX = 0, this.curTouchY = 0, this.trigger_index = 0, this.trigger_id = 0, this.getTouchIndex = 0, this.useMouseInput = 0 !== this.properties[0];
            var e = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas,
                i = document;
            this.runtime.isDirectCanvas ? i = e = window.Canvas : this.runtime.isCocoonJs && (i = e = window);
            var s = this;
            if ("undefined" != typeof PointerEvent ? (e.addEventListener("pointerdown", function(t) {
                s.onPointerStart(t)
            }, !1), e.addEventListener("pointermove", function(t) {
                s.onPointerMove(t)
            }, !1), i.addEventListener("pointerup", function(t) {
                s.onPointerEnd(t, !1)
            }, !1), i.addEventListener("pointercancel", function(t) {
                s.onPointerEnd(t, !0)
            }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), this.runtime.canvas.addEventListener("gesturehold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("gesturehold", function(t) {
                t.preventDefault()
            }, !1))) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", function(t) {
                s.onPointerStart(t)
            }, !1), e.addEventListener("MSPointerMove", function(t) {
                s.onPointerMove(t)
            }, !1), i.addEventListener("MSPointerUp", function(t) {
                s.onPointerEnd(t, !1)
            }, !1), i.addEventListener("MSPointerCancel", function(t) {
                s.onPointerEnd(t, !0)
            }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1))) : (e.addEventListener("touchstart", function(t) {
                s.onTouchStart(t)
            }, !1), e.addEventListener("touchmove", function(t) {
                s.onTouchMove(t)
            }, !1), i.addEventListener("touchend", function(t) {
                s.onTouchEnd(t, !1)
            }, !1), i.addEventListener("touchcancel", function(t) {
                s.onTouchEnd(t, !0)
            }, !1)), this.isWindows8) {
                var n = function(t) {
                        var e = t.reading;
                        s.acc_x = e.accelerationX, s.acc_y = e.accelerationY, s.acc_z = e.accelerationZ
                    },
                    r = function(t) {
                        var e = t.reading;
                        s.orient_alpha = e.yawDegrees, s.orient_beta = e.pitchDegrees, s.orient_gamma = e.rollDegrees
                    },
                    o = Windows.Devices.Sensors.Accelerometer.getDefault();
                o && (o.reportInterval = Math.max(o.minimumReportInterval, 16), o.addEventListener("readingchanged", n));
                var a = Windows.Devices.Sensors.Inclinometer.getDefault();
                a && (a.reportInterval = Math.max(a.minimumReportInterval, 16), a.addEventListener("readingchanged", r)), document.addEventListener("visibilitychange", function(t) {
                    document.hidden || document.msHidden ? (o && o.removeEventListener("readingchanged", n), a && a.removeEventListener("readingchanged", r)) : (o && o.addEventListener("readingchanged", n), a && a.addEventListener("readingchanged", r))
                }, !1)
            } else window.addEventListener("deviceorientation", function(t) {
                s.orient_alpha = t.alpha || 0, s.orient_beta = t.beta || 0, s.orient_gamma = t.gamma || 0
            }, !1), window.addEventListener("devicemotion", function(t) {
                t.accelerationIncludingGravity && (s.acc_g_x = t.accelerationIncludingGravity.x || 0, s.acc_g_y = t.accelerationIncludingGravity.y || 0, s.acc_g_z = t.accelerationIncludingGravity.z || 0), t.acceleration && (s.acc_x = t.acceleration.x || 0, s.acc_y = t.acceleration.y || 0, s.acc_z = t.acceleration.z || 0)
            }, !1);
            this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove(function(t) {
                s.onMouseMove(t)
            }), jQuery(document).mousedown(function(t) {
                s.onMouseDown(t)
            }), jQuery(document).mouseup(function(t) {
                s.onMouseUp(t)
            })), !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(t, null, {
                frequency: 40
            }), this.runtime.tick2Me(this)
        }, a.onPointerMove = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && t.preventDefault();
                var e = this.findTouch(t.pointerId),
                    i = cr.performance_now();
                if (e >= 0) {
                    var s = this.runtime.isDomFree ? A : jQuery(this.runtime.canvas).offset(),
                        n = this.touches[e];
                    if (i - n.time < 2) return;
                    n.update(i, t.pageX - s.left, t.pageY - s.top, t.width || 0, t.height || 0, t.pressure || 0)
                }
            }
        }, a.onPointerStart = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var i = this.runtime.isDomFree ? A : jQuery(this.runtime.canvas).offset(),
                    s = t.pageX - i.left,
                    n = t.pageY - i.top;
                cr.performance_now();
                this.trigger_index = this.touches.length, this.trigger_id = t.pointerId, this.touches.push(e(s, n, t.pointerId, this.trigger_index)), this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = s, this.curTouchY = n, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this), this.runtime.isInUserInputEvent = !1
            }
        }, a.onPointerEnd = function(t, e) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var s = this.findTouch(t.pointerId);
                this.trigger_index = s >= 0 ? this.touches[s].startindex : -1, this.trigger_id = s >= 0 ? this.touches[s].id : -1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), s >= 0 && (e || this.touches[s].maybeTriggerTap(this, s), i(this.touches[s]), this.touches.splice(s, 1)), this.runtime.isInUserInputEvent = !1
            }
        }, a.onTouchMove = function(t) {
            t.preventDefault && t.preventDefault();
            var e, i, s, n, r = cr.performance_now();
            for (e = 0, i = t.changedTouches.length; e < i; e++) {
                s = t.changedTouches[e];
                var o = this.findTouch(s.identifier);
                if (o >= 0) {
                    var a = this.runtime.isDomFree ? A : jQuery(this.runtime.canvas).offset();
                    if (n = this.touches[o], r - n.time < 2) continue;
                    var h = 2 * (s.radiusX || s.webkitRadiusX || s.mozRadiusX || s.msRadiusX || 0),
                        c = 2 * (s.radiusY || s.webkitRadiusY || s.mozRadiusY || s.msRadiusY || 0),
                        l = s.force || s.webkitForce || s.mozForce || s.msForce || 0;
                    n.update(r, s.pageX - a.left, s.pageY - a.top, h, c, l)
                }
            }
        }, a.onTouchStart = function(t) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var i = this.runtime.isDomFree ? A : jQuery(this.runtime.canvas).offset();
            cr.performance_now();
            this.runtime.isInUserInputEvent = !0;
            var s, n, r;
            for (s = 0, n = t.changedTouches.length; s < n; s++)
                if (r = t.changedTouches[s], -1 === this.findTouch(r.identifier)) {
                    var o = r.pageX - i.left,
                        a = r.pageY - i.top;
                    this.trigger_index = this.touches.length, this.trigger_id = r.identifier, this.touches.push(e(o, a, r.identifier, this.trigger_index)), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = o, this.curTouchY = a, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
                }
            this.runtime.isInUserInputEvent = !1
        }, a.onTouchEnd = function(t, e) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.runtime.isInUserInputEvent = !0;
            var s, n, r, o;
            for (s = 0, n = t.changedTouches.length; s < n; s++) r = t.changedTouches[s], (o = this.findTouch(r.identifier)) >= 0 && (this.trigger_index = this.touches[o].startindex, this.trigger_id = this.touches[o].id, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), e || this.touches[o].maybeTriggerTap(this, o), i(this.touches[o]), this.touches.splice(o, 1));
            this.runtime.isInUserInputEvent = !1
        }, a.getAlpha = function() {
            return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== l ? 90 * l : this.orient_alpha
        }, a.getBeta = function() {
            return this.runtime.isCordova && 0 === this.orient_beta && 0 !== c ? 90 * c : this.orient_beta
        }, a.getGamma = function() {
            return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== h ? 90 * h : this.orient_gamma
        };
        a.onMouseDown = function(t) {
            var e = {
                changedTouches: [{
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                }]
            };
            this.onTouchStart(e), this.mouseDown = !0
        }, a.onMouseMove = function(t) {
            if (this.mouseDown) {
                var e = {
                    changedTouches: [{
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    }]
                };
                this.onTouchMove(e)
            }
        }, a.onMouseUp = function(t) {
            t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(), this.runtime.had_a_click = !0;
            var e = {
                changedTouches: [{
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                }]
            };
            this.onTouchEnd(e), this.mouseDown = !1
        }, a.tick2 = function() {
            var t, e, i, s = cr.performance_now();
            for (t = 0, e = this.touches.length; t < e; ++t)(i = this.touches[t]).time <= s - 50 && (i.lasttime = s), i.maybeTriggerHold(this, t)
        }, n.prototype.OnTouchStart = function() {
            return !0
        }, n.prototype.OnTouchEnd = function() {
            return !0
        }, n.prototype.IsInTouch = function() {
            return this.touches.length
        }, n.prototype.OnTouchObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        };
        var m = [];
        n.prototype.IsTouchingObject = function(t) {
            if (!t) return !1;
            var e, i, s, n, r, o, a = t.getCurrentSol(),
                A = a.getObjects();
            for (s = 0, n = A.length; s < n; s++) {
                var h = A[s];
                for (h.update_bbox(), r = 0, o = this.touches.length; r < o; r++) {
                    var c = this.touches[r];
                    if (e = h.layer.canvasToLayer(c.x, c.y, !0), i = h.layer.canvasToLayer(c.x, c.y, !1), h.contains_pt(e, i)) {
                        m.push(h);
                        break
                    }
                }
            }
            return !!m.length && (a.select_all = !1, cr.shallowAssignArray(a.instances, m), t.applySolToContainer(), cr.clearArray(m), !0)
        }, n.prototype.CompareTouchSpeed = function(t, e, i) {
            if ((t = Math.floor(t)) < 0 || t >= this.touches.length) return !1;
            var s = this.touches[t],
                n = cr.distanceTo(s.x, s.y, s.lastx, s.lasty),
                r = (s.time - s.lasttime) / 1e3,
                o = 0;
            return r > 0 && (o = n / r), cr.do_cmp(o, e, i)
        }, n.prototype.OrientationSupported = function() {
            return void 0 !== window.DeviceOrientationEvent
        }, n.prototype.MotionSupported = function() {
            return void 0 !== window.DeviceMotionEvent
        }, n.prototype.CompareOrientation = function(t, e, i) {
            var s = 0;
            return s = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma(), cr.do_cmp(s, e, i)
        }, n.prototype.CompareAcceleration = function(t, e, i) {
            var s = 0;
            return 0 === t ? s = this.acc_g_x : 1 === t ? s = this.acc_g_y : 2 === t ? s = this.acc_g_z : 3 === t ? s = this.acc_x : 4 === t ? s = this.acc_y : 5 === t && (s = this.acc_z), cr.do_cmp(s, e, i)
        }, n.prototype.OnNthTouchStart = function(t) {
            return (t = Math.floor(t)) === this.trigger_index
        }, n.prototype.OnNthTouchEnd = function(t) {
            return (t = Math.floor(t)) === this.trigger_index
        }, n.prototype.HasNthTouch = function(t) {
            return t = Math.floor(t), this.touches.length >= t + 1
        }, n.prototype.OnHoldGesture = function() {
            return !0
        }, n.prototype.OnTapGesture = function() {
            return !0
        }, n.prototype.OnDoubleTapGesture = function() {
            return !0
        }, n.prototype.OnHoldGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, n.prototype.OnTapGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, n.prototype.OnDoubleTapGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, o.cnds = new n, r.prototype.TouchCount = function(t) {
            t.set_int(this.touches.length)
        }, r.prototype.X = function(t, e) {
            var i = this.getTouchIndex;
            if (i < 0 || i >= this.touches.length) t.set_float(0);
            else {
                var s, n, r, o, a;
                cr.is_undefined(e) ? (n = (s = this.runtime.getLayerByNumber(0)).scale, r = s.zoomRate, o = s.parallaxX, a = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxX = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[i].x, this.touches[i].y, !0)), s.scale = n, s.zoomRate = r, s.parallaxX = o, s.angle = a) : (s = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(s.canvasToLayer(this.touches[i].x, this.touches[i].y, !0)) : t.set_float(0)
            }
        }, r.prototype.XAt = function(t, e, i) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var s, n, r, o, a;
                cr.is_undefined(i) ? (n = (s = this.runtime.getLayerByNumber(0)).scale, r = s.zoomRate, o = s.parallaxX, a = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxX = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)), s.scale = n, s.zoomRate = r, s.parallaxX = o, s.angle = a) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0)
            }
        }, r.prototype.XForID = function(t, e, i) {
            var s = this.findTouch(e);
            if (s < 0) t.set_float(0);
            else {
                var n, r, o, a, A, h = this.touches[s];
                cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale, o = n.zoomRate, a = n.parallaxX, A = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(h.x, h.y, !0)), n.scale = r, n.zoomRate = o, n.parallaxX = a, n.angle = A) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(h.x, h.y, !0)) : t.set_float(0)
            }
        }, r.prototype.Y = function(t, e) {
            var i = this.getTouchIndex;
            if (i < 0 || i >= this.touches.length) t.set_float(0);
            else {
                var s, n, r, o, a;
                cr.is_undefined(e) ? (n = (s = this.runtime.getLayerByNumber(0)).scale, r = s.zoomRate, o = s.parallaxY, a = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxY = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[i].x, this.touches[i].y, !1)), s.scale = n, s.zoomRate = r, s.parallaxY = o, s.angle = a) : (s = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(s.canvasToLayer(this.touches[i].x, this.touches[i].y, !1)) : t.set_float(0)
            }
        }, r.prototype.YAt = function(t, e, i) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var s, n, r, o, a;
                cr.is_undefined(i) ? (n = (s = this.runtime.getLayerByNumber(0)).scale, r = s.zoomRate, o = s.parallaxY, a = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxY = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)), s.scale = n, s.zoomRate = r, s.parallaxY = o, s.angle = a) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0)
            }
        }, r.prototype.YForID = function(t, e, i) {
            var s = this.findTouch(e);
            if (s < 0) t.set_float(0);
            else {
                var n, r, o, a, A, h = this.touches[s];
                cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale, o = n.zoomRate, a = n.parallaxY, A = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(h.x, h.y, !1)), n.scale = r, n.zoomRate = o, n.parallaxY = a, n.angle = A) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(h.x, h.y, !1)) : t.set_float(0)
            }
        }, r.prototype.AbsoluteX = function(t) {
            this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
        }, r.prototype.AbsoluteXAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].x)
        }, r.prototype.AbsoluteXForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.x)
            }
        }, r.prototype.AbsoluteY = function(t) {
            this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
        }, r.prototype.AbsoluteYAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].y)
        }, r.prototype.AbsoluteYForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.y)
            }
        }, r.prototype.SpeedAt = function(t, e) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var i = this.touches[e],
                    s = cr.distanceTo(i.x, i.y, i.lastx, i.lasty),
                    n = (i.time - i.lasttime) / 1e3;
                0 === n ? t.set_float(0) : t.set_float(s / n)
            }
        }, r.prototype.SpeedForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i],
                    n = cr.distanceTo(s.x, s.y, s.lastx, s.lasty),
                    r = (s.time - s.lasttime) / 1e3;
                0 === r ? t.set_float(0) : t.set_float(n / r)
            }
        }, r.prototype.AngleAt = function(t, e) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var i = this.touches[e];
                t.set_float(cr.to_degrees(cr.angleTo(i.lastx, i.lasty, i.x, i.y)))
            }
        }, r.prototype.AngleForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(cr.to_degrees(cr.angleTo(s.lastx, s.lasty, s.x, s.y)))
            }
        }, r.prototype.Alpha = function(t) {
            t.set_float(this.getAlpha())
        }, r.prototype.Beta = function(t) {
            t.set_float(this.getBeta())
        }, r.prototype.Gamma = function(t) {
            t.set_float(this.getGamma())
        }, r.prototype.AccelerationXWithG = function(t) {
            t.set_float(this.acc_g_x)
        }, r.prototype.AccelerationYWithG = function(t) {
            t.set_float(this.acc_g_y)
        }, r.prototype.AccelerationZWithG = function(t) {
            t.set_float(this.acc_g_z)
        }, r.prototype.AccelerationX = function(t) {
            t.set_float(this.acc_x)
        }, r.prototype.AccelerationY = function(t) {
            t.set_float(this.acc_y)
        }, r.prototype.AccelerationZ = function(t) {
            t.set_float(this.acc_z)
        }, r.prototype.TouchIndex = function(t) {
            t.set_int(this.trigger_index)
        }, r.prototype.TouchID = function(t) {
            t.set_float(this.trigger_id)
        }, r.prototype.WidthForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.width)
            }
        }, r.prototype.HeightForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.height)
            }
        }, r.prototype.PressureForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.pressure)
            }
        }, o.exps = new r
    }(), cr.behaviors.Anchor = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}
        var e = cr.behaviors.Anchor.prototype;
        e.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, e.Type.prototype.onCreate = function() {}, e.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var i = e.Instance.prototype;
        i.onCreate = function() {
            this.anch_left = this.properties[0], this.anch_top = this.properties[1], this.anch_right = this.properties[2], this.anch_bottom = this.properties[3], this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = 0 !== this.properties[4]
        }, i.saveToJSON = function() {
            return {
                xleft: this.xleft,
                ytop: this.ytop,
                xright: this.xright,
                ybottom: this.ybottom,
                rdiff: this.rdiff,
                bdiff: this.bdiff,
                enabled: this.enabled
            }
        }, i.loadFromJSON = function(t) {
            this.xleft = t.xleft, this.ytop = t.ytop, this.xright = t.xright, this.ybottom = t.ybottom, this.rdiff = t.rdiff, this.bdiff = t.bdiff, this.enabled = t.enabled
        }, i.tick = function() {
            if (this.enabled) {
                var t, e = this.inst.layer,
                    i = this.inst,
                    s = this.inst.bbox;
                0 === this.anch_left ? (i.update_bbox(), 0 !== (t = e.viewLeft + this.xleft - s.left) && (i.x += t, i.set_bbox_changed())) : 1 === this.anch_left && (i.update_bbox(), 0 !== (t = e.viewRight - this.xright - s.left) && (i.x += t, i.set_bbox_changed())), 0 === this.anch_top ? (i.update_bbox(), 0 !== (t = e.viewTop + this.ytop - s.top) && (i.y += t, i.set_bbox_changed())) : 1 === this.anch_top && (i.update_bbox(), 0 !== (t = e.viewBottom - this.ybottom - s.top) && (i.y += t, i.set_bbox_changed())), 1 === this.anch_right && (i.update_bbox(), 0 !== (t = e.viewRight - this.rdiff - s.right) && (i.width += t, i.width < 0 && (i.width = 0), i.set_bbox_changed())), 1 === this.anch_bottom && (i.update_bbox(), 0 !== (t = e.viewBottom - this.bdiff - s.bottom) && (i.height += t, i.height < 0 && (i.height = 0), i.set_bbox_changed()))
            }
        }, e.cnds = new function() {}, t.prototype.SetEnabled = function(t) {
            this.enabled && 0 === t ? this.enabled = !1 : this.enabled || 0 === t || (this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = !0)
        }, e.acts = new t, e.exps = new function() {}
    }(), cr.behaviors.Bullet = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Bullet.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, s.Type.prototype.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var n = s.Instance.prototype;
        n.onCreate = function() {
            var t = this.properties[0];
            this.acc = this.properties[1], this.g = this.properties[2], this.bounceOffSolid = 0 !== this.properties[3], this.setAngle = 0 !== this.properties[4], this.dx = Math.cos(this.inst.angle) * t, this.dy = Math.sin(this.inst.angle) * t, this.lastx = this.inst.x, this.lasty = this.inst.y, this.lastKnownAngle = this.inst.angle, this.travelled = 0, this.enabled = 0 !== this.properties[5]
        }, n.saveToJSON = function() {
            return {
                acc: this.acc,
                g: this.g,
                dx: this.dx,
                dy: this.dy,
                lx: this.lastx,
                ly: this.lasty,
                lka: this.lastKnownAngle,
                t: this.travelled,
                e: this.enabled
            }
        }, n.loadFromJSON = function(t) {
            this.acc = t.acc, this.g = t.g, this.dx = t.dx, this.dy = t.dy, this.lastx = t.lx, this.lasty = t.ly, this.lastKnownAngle = t.lka, this.travelled = t.t, this.enabled = t.e
        }, n.tick = function() {
            if (this.enabled) {
                var t, e, i, s, n = this.runtime.getDt(this.inst);
                this.inst.angle !== this.lastKnownAngle && (this.setAngle && (t = cr.distanceTo(0, 0, this.dx, this.dy), this.dx = Math.cos(this.inst.angle) * t, this.dy = Math.sin(this.inst.angle) * t), this.lastKnownAngle = this.inst.angle), 0 !== this.acc && (t = cr.distanceTo(0, 0, this.dx, this.dy), e = 0 === this.dx && 0 === this.dy ? this.inst.angle : cr.angleTo(0, 0, this.dx, this.dy), (t += this.acc * n) < 0 && (t = 0), this.dx = Math.cos(e) * t, this.dy = Math.sin(e) * t), 0 !== this.g && (this.dy += this.g * n), this.lastx = this.inst.x, this.lasty = this.inst.y, 0 === this.dx && 0 === this.dy || (this.inst.x += this.dx * n, this.inst.y += this.dy * n, this.travelled += cr.distanceTo(0, 0, this.dx * n, this.dy * n), this.setAngle && (this.inst.angle = cr.angleTo(0, 0, this.dx, this.dy), this.inst.set_bbox_changed(), this.lastKnownAngle = this.inst.angle), this.inst.set_bbox_changed(), this.bounceOffSolid && (i = this.runtime.testOverlapSolid(this.inst)) && (this.runtime.registerCollision(this.inst, i), t = cr.distanceTo(0, 0, this.dx, this.dy), s = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty), this.dx = Math.cos(s) * t, this.dy = Math.sin(s) * t, this.inst.x += this.dx * n, this.inst.y += this.dy * n, this.inst.set_bbox_changed(), this.setAngle && (this.inst.angle = s, this.lastKnownAngle = s, this.inst.set_bbox_changed()), this.runtime.pushOutSolid(this.inst, this.dx / t, this.dy / t, Math.max(2.5 * t * n, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100)))
            }
        }, t.prototype.CompareSpeed = function(t, e) {
            return cr.do_cmp(cr.distanceTo(0, 0, this.dx, this.dy), t, e)
        }, t.prototype.CompareTravelled = function(t, e) {
            return cr.do_cmp(this.travelled, t, e)
        }, s.cnds = new t, e.prototype.SetSpeed = function(t) {
            var e = cr.angleTo(0, 0, this.dx, this.dy);
            this.dx = Math.cos(e) * t, this.dy = Math.sin(e) * t
        }, e.prototype.SetAcceleration = function(t) {
            this.acc = t
        }, e.prototype.SetGravity = function(t) {
            this.g = t
        }, e.prototype.SetAngleOfMotion = function(t) {
            t = cr.to_radians(t);
            var e = cr.distanceTo(0, 0, this.dx, this.dy);
            this.dx = Math.cos(t) * e, this.dy = Math.sin(t) * e
        }, e.prototype.Bounce = function(t) {
            if (t) {
                var e = t.getFirstPicked(this.inst);
                if (e) {
                    var i = this.runtime.getDt(this.inst),
                        s = cr.distanceTo(0, 0, this.dx, this.dy),
                        n = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty, e);
                    this.dx = Math.cos(n) * s, this.dy = Math.sin(n) * s, this.inst.x += this.dx * i, this.inst.y += this.dy * i, this.inst.set_bbox_changed(), this.setAngle && (this.inst.angle = n, this.lastKnownAngle = n, this.inst.set_bbox_changed()), this.bounceOffSolid ? this.runtime.pushOutSolid(this.inst, this.dx / s, this.dy / s, Math.max(2.5 * s * i, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100) : 0 !== s && this.runtime.pushOut(this.inst, this.dx / s, this.dy / s, Math.max(2.5 * s * i, 30), e)
                }
            }
        }, e.prototype.SetDistanceTravelled = function(t) {
            this.travelled = t
        }, e.prototype.SetEnabled = function(t) {
            this.enabled = 1 === t
        }, s.acts = new e, i.prototype.Speed = function(t) {
            var e = cr.distanceTo(0, 0, this.dx, this.dy);
            e = cr.round6dp(e), t.set_float(e)
        }, i.prototype.Acceleration = function(t) {
            t.set_float(this.acc)
        }, i.prototype.AngleOfMotion = function(t) {
            t.set_float(cr.to_degrees(cr.angleTo(0, 0, this.dx, this.dy)))
        }, i.prototype.DistanceTravelled = function(t) {
            t.set_float(this.travelled)
        }, i.prototype.Gravity = function(t) {
            t.set_float(this.g)
        }, s.exps = new i
    }(), cr.behaviors.Car = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Car.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, s.Type.prototype.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.upkey = !1, this.downkey = !1, this.leftkey = !1, this.rightkey = !1, this.ignoreInput = !1, this.simup = !1, this.simdown = !1, this.simleft = !1, this.simright = !1, this.s = 0, this.a = this.inst.angle, this.m = this.inst.angle
        };
        var n = s.Instance.prototype;
        n.onCreate = function() {
            this.maxspeed = this.properties[0], this.acc = this.properties[1], this.dec = this.properties[2], this.steerSpeed = cr.to_radians(this.properties[3]), this.driftRecover = cr.to_radians(this.properties[4]), this.friction = this.properties[5], this.setAngle = 1 === this.properties[6], this.defaultControls = 1 === this.properties[7], this.enabled = 0 !== this.properties[8], this.lastx = this.inst.x, this.lasty = this.inst.y, this.lastAngle = this.inst.angle, this.defaultControls && !this.runtime.isDomFree && (jQuery(document).keydown(function(t) {
                return function(e) {
                    t.onKeyDown(e)
                }
            }(this)), jQuery(document).keyup(function(t) {
                return function(e) {
                    t.onKeyUp(e)
                }
            }(this)))
        }, n.saveToJSON = function() {
            return {
                ignoreInput: this.ignoreInput,
                enabled: this.enabled,
                s: this.s,
                a: this.a,
                m: this.m,
                maxspeed: this.maxspeed,
                acc: this.acc,
                dec: this.dec,
                steerSpeed: this.steerSpeed,
                driftRecover: this.driftRecover,
                friction: this.friction,
                lastx: this.lastx,
                lasty: this.lasty,
                lastAngle: this.lastAngle
            }
        }, n.loadFromJSON = function(t) {
            this.ignoreInput = t.ignoreInput, this.enabled = t.enabled, this.s = t.s, this.a = t.a, this.m = t.m, this.maxspeed = t.maxspeed, this.acc = t.acc, this.dec = t.dec, this.steerSpeed = t.steerSpeed, this.driftRecover = t.driftRecover, this.friction = t.friction, this.lastx = t.lastx, this.lasty = t.lasty, this.lastAngle = t.lastAngle, this.upkey = !1, this.downkey = !1, this.leftkey = !1, this.rightkey = !1, this.simup = !1, this.simdown = !1, this.simleft = !1, this.simright = !1
        }, n.onKeyDown = function(t) {
            switch (t.which) {
                case 37:
                    t.preventDefault(), this.leftkey = !0;
                    break;
                case 38:
                    t.preventDefault(), this.upkey = !0;
                    break;
                case 39:
                    t.preventDefault(), this.rightkey = !0;
                    break;
                case 40:
                    t.preventDefault(), this.downkey = !0
            }
        }, n.onKeyUp = function(t) {
            switch (t.which) {
                case 37:
                    t.preventDefault(), this.leftkey = !1;
                    break;
                case 38:
                    t.preventDefault(), this.upkey = !1;
                    break;
                case 39:
                    t.preventDefault(), this.rightkey = !1;
                    break;
                case 40:
                    t.preventDefault(), this.downkey = !1
            }
        }, n.onWindowBlur = function() {
            this.upkey = !1, this.downkey = !1, this.leftkey = !1, this.rightkey = !1
        }, n.tick = function() {
            var t = this.runtime.getDt(this.inst),
                e = this.leftkey || this.simleft,
                i = this.rightkey || this.simright,
                s = this.upkey || this.simup,
                n = this.downkey || this.simdown;
            if (this.simleft = !1, this.simright = !1, this.simup = !1, this.simdown = !1, this.enabled) {
                this.setAngle && this.inst.angle !== this.lastAngle && (this.a = this.inst.angle, this.m = this.inst.angle, this.lastAngle = this.inst.angle);
                var r = this.runtime.testOverlapSolid(this.inst);
                if (!r || (this.runtime.registerCollision(this.inst, r), this.runtime.pushOutSolidNearest(this.inst))) {
                    if (this.ignoreInput && (e = !1, i = !1, s = !1, n = !1), s && !n && (this.s += this.acc * t, this.s > this.maxspeed && (this.s = this.maxspeed)), n && !s && (this.s -= this.dec * t, this.s < -this.maxspeed && (this.s = -this.maxspeed)), n === s && (this.s > 0 ? (this.s -= this.dec * t * .1, this.s < 0 && (this.s = 0)) : this.s < 0 && (this.s += this.dec * t * .1, this.s > 0 && (this.s = 0))), this.s < 0) {
                        var o = e;
                        e = i, i = o
                    }
                    e && !i && (this.a = cr.clamp_angle(this.a - this.steerSpeed * t * (Math.abs(this.s) / this.maxspeed))), i && !e && (this.a = cr.clamp_angle(this.a + this.steerSpeed * t * (Math.abs(this.s) / this.maxspeed)));
                    var a = this.driftRecover * t,
                        A = cr.angleDiff(this.a, this.m);
                    if (A > cr.to_radians(90) && (a += A - cr.to_radians(90)), A <= a ? this.m = cr.clamp_angle(this.a) : cr.angleClockwise(this.a, this.m) ? this.m = cr.clamp_angle(this.m + a) : this.m = cr.clamp_angle(this.m - a), this.lastx = this.inst.x, this.lasty = this.inst.y, 0 !== this.s && 0 !== t) {
                        this.inst.x += Math.cos(this.m) * this.s * t, this.inst.y += Math.sin(this.m) * this.s * t, this.setAngle && (this.inst.angle = this.a, this.lastAngle = this.a), this.inst.set_bbox_changed();
                        var h = this.runtime.testOverlapSolid(this.inst);
                        h && (this.runtime.registerCollision(this.inst, h), this.s = Math.abs(this.s), this.m = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty), this.inst.x += Math.cos(this.m) * this.s * t, this.inst.y += Math.sin(this.m) * this.s * t, this.inst.set_bbox_changed(), this.s *= 1 - this.friction, this.runtime.pushOutSolid(this.inst, Math.cos(this.m), Math.sin(this.m), Math.max(2.5 * this.s * t, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100))
                    } else this.setAngle && this.inst.angle !== this.a && (this.inst.angle = this.a, this.lastAngle = this.a, this.inst.set_bbox_changed(), this.runtime.testOverlapSolid(this.inst) && this.runtime.pushOutSolidNearest(this.inst, 100))
                }
            }
        }, t.prototype.IsMoving = function() {
            return 0 !== this.s
        }, t.prototype.CompareSpeed = function(t, e) {
            return cr.do_cmp(this.s, t, e)
        }, s.cnds = new t, e.prototype.Stop = function() {
            this.s = 0
        }, e.prototype.SetIgnoreInput = function(t) {
            this.ignoreInput = t
        }, e.prototype.SetSpeed = function(t) {
            t < -this.maxspeed && (t = -this.maxspeed), t > this.maxspeed && (t = this.maxspeed), this.s = t
        }, e.prototype.SetMaxSpeed = function(t) {
            this.maxspeed = t, this.maxspeed < 0 && (this.maxspeed = 0)
        }, e.prototype.SetAcceleration = function(t) {
            this.acc = t, this.acc < 0 && (this.acc = 0)
        }, e.prototype.SetDeceleration = function(t) {
            this.dec = t, this.dec < 0 && (this.dec = 0)
        }, e.prototype.SimulateControl = function(t) {
            switch (t) {
                case 0:
                    this.simleft = !0;
                    break;
                case 1:
                    this.simright = !0;
                    break;
                case 2:
                    this.simup = !0;
                    break;
                case 3:
                    this.simdown = !0
            }
        }, e.prototype.SetEnabled = function(t) {
            this.enabled = 1 === t
        }, e.prototype.SetSteerSpeed = function(t) {
            this.steerSpeed = cr.to_radians(t)
        }, e.prototype.SetDriftRecover = function(t) {
            this.driftRecover = cr.to_radians(t)
        }, e.prototype.SetFriction = function(t) {
            this.friction = t
        }, s.acts = new e, i.prototype.Speed = function(t) {
            t.set_float(this.s)
        }, i.prototype.MaxSpeed = function(t) {
            t.set_float(this.maxspeed)
        }, i.prototype.Acceleration = function(t) {
            t.set_float(this.acc)
        }, i.prototype.Deceleration = function(t) {
            t.set_float(this.dec)
        }, i.prototype.MovingAngle = function(t) {
            t.set_float(cr.to_degrees(this.m))
        }, i.prototype.VectorX = function(t) {
            t.set_float(Math.cos(this.m) * this.s)
        }, i.prototype.VectorY = function(t) {
            t.set_float(Math.sin(this.m) * this.s)
        }, i.prototype.SteerSpeed = function(t) {
            t.set_float(cr.to_degrees(this.steerSpeed))
        }, i.prototype.DriftRecover = function(t) {
            t.set_float(cr.to_degrees(this.driftRecover))
        }, i.prototype.Friction = function(t) {
            t.set_float(this.friction)
        }, s.exps = new i
    }(), cr.behaviors.Fade = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Fade.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, s.Type.prototype.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var n = s.Instance.prototype;
        n.onCreate = function() {
            this.activeAtStart = 1 === this.properties[0], this.setMaxOpacity = !1, this.fadeInTime = this.properties[1], this.waitTime = this.properties[2], this.fadeOutTime = this.properties[3], this.destroy = this.properties[4], this.stage = this.activeAtStart ? 0 : 3, this.recycled ? this.stageTime.reset() : this.stageTime = new cr.KahanAdder, this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.activeAtStart && (0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0))
        }, n.saveToJSON = function() {
            return {
                fit: this.fadeInTime,
                wt: this.waitTime,
                fot: this.fadeOutTime,
                s: this.stage,
                st: this.stageTime.sum,
                mo: this.maxOpacity
            }
        }, n.loadFromJSON = function(t) {
            this.fadeInTime = t.fit, this.waitTime = t.wt, this.fadeOutTime = t.fot, this.stage = t.s, this.stageTime.reset(), this.stageTime.sum = t.st, this.maxOpacity = t.mo
        }, n.tick = function() {
            this.stageTime.add(this.runtime.getDt(this.inst)), 0 === this.stage && (this.inst.opacity = this.stageTime.sum / this.fadeInTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity >= this.maxOpacity && (this.inst.opacity = this.maxOpacity, this.stage = 1, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeInEnd, this.inst))), 1 === this.stage && this.stageTime.sum >= this.waitTime && (this.stage = 2, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnWaitEnd, this.inst)), 2 === this.stage && 0 !== this.fadeOutTime && (this.inst.opacity = this.maxOpacity - this.stageTime.sum / this.fadeOutTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity < 0 && (this.inst.opacity = 0, this.stage = 3, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeOutEnd, this.inst), 1 === this.destroy && this.runtime.DestroyInstance(this.inst)))
        }, n.doStart = function() {
            this.stage = 0, this.stageTime.reset(), 0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0)
        }, t.prototype.OnFadeOutEnd = function() {
            return !0
        }, t.prototype.OnFadeInEnd = function() {
            return !0
        }, t.prototype.OnWaitEnd = function() {
            return !0
        }, s.cnds = new t, e.prototype.StartFade = function() {
            this.activeAtStart || this.setMaxOpacity || (this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.setMaxOpacity = !0), 3 === this.stage && this.doStart()
        }, e.prototype.RestartFade = function() {
            this.doStart()
        }, e.prototype.SetFadeInTime = function(t) {
            t < 0 && (t = 0), this.fadeInTime = t
        }, e.prototype.SetWaitTime = function(t) {
            t < 0 && (t = 0), this.waitTime = t
        }, e.prototype.SetFadeOutTime = function(t) {
            t < 0 && (t = 0), this.fadeOutTime = t
        }, s.acts = new e, i.prototype.FadeInTime = function(t) {
            t.set_float(this.fadeInTime)
        }, i.prototype.WaitTime = function(t) {
            t.set_float(this.waitTime)
        }, i.prototype.FadeOutTime = function(t) {
            t.set_float(this.fadeOutTime)
        }, s.exps = new i
    }(), cr.behaviors.ParallaxBG = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}
        var i = cr.behaviors.ParallaxBG.prototype;
        i.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, i.Type.prototype.onCreate = function() {}, i.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var s = i.Instance.prototype;
        s.onCreate = function() {
            this.parallaxX = this.properties[0], this.parallaxY = this.properties[1], this.enabled = 0 == this.properties[2], this.onlyWarp = 0 == this.properties[3], this.resetY()
        }, s.resetY = function() {
            this.initY = this.inst.y
        }, s.onDestroy = function() {}, s.saveToJSON = function() {
            return {
                px: this.parallaxX,
                py: this.parallaxY,
                e: this.enabled,
                iy: this.initY,
                ow: this.onlyWarp
            }
        }, s.loadFromJSON = function(t) {
            this.parallaxX = t.px, this.parallaxY = t.py, this.enabled = t.e, this.initY = t.iy, this.onlyWarp = t.ow
        }, s.tick = function() {}, s.tick2 = function() {
            if (0 != this.enabled) {
                var t = this.inst,
                    e = t.layer,
                    i = e.layout,
                    s = Math.abs(e.viewRight - e.viewLeft),
                    n = Math.abs(e.viewBottom - e.viewTop),
                    r = i.scrollX,
                    o = i.scrollY,
                    a = t.texture_img.width,
                    A = (t.texture_img.height, r),
                    h = i.height - (o + .5 * n);
                t.width = Math.ceil(s / a + 2) * a;
                var c = Math.abs(1 - this.parallaxX / 100);
                this.parallaxX > 100 && (c = -Math.abs(this.parallaxX / 100));
                l = A * c;
                if (1 == this.onlyWarp) var l = t.x;
                for (; l + .5 * a > e.viewLeft;) l -= a;
                for (; l + t.width - .5 * a < e.viewRight;) l += a;
                t.x = l;
                var u = Math.abs(100 - this.parallaxY) / 100;
                this.parallaxY > 100 && (u = -Math.abs(this.parallaxY / 100)), t.y = this.initY - h * u, t.set_bbox_changed()
            }
        }, i.cnds = new function() {}, t.prototype.ResetY = function() {
            this.resetY()
        }, t.prototype.SetParallaxX = function(t) {
            this.parallaxX = t
        }, t.prototype.SetParallaxY = function(t) {
            this.parallaxY = t
        }, t.prototype.SetOnlyWrap = function(t) {
            this.onlyWarp = 1 === t
        }, t.prototype.SetEnabled = function(t) {
            this.enabled = 1 === t
        }, i.acts = new t, e.prototype.ParallaxX = function(t) {
            t.set_int(this.parallaxX)
        }, e.prototype.ParallaxY = function(t) {
            t.set_int(this.parallaxY)
        }, i.exps = new e
    }(), cr.behaviors.Pin = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Pin.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, s.Type.prototype.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var n = s.Instance.prototype;
        n.onCreate = function() {
            this.pinObject = null, this.pinObjectUid = -1, this.pinAngle = 0, this.pinDist = 0, this.myStartAngle = 0, this.theirStartAngle = 0, this.lastKnownAngle = 0, this.mode = 0;
            var t = this;
            this.recycled || (this.myDestroyCallback = function(e) {
                t.onInstanceDestroyed(e)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback)
        }, n.saveToJSON = function() {
            return {
                uid: this.pinObject ? this.pinObject.uid : -1,
                pa: this.pinAngle,
                pd: this.pinDist,
                msa: this.myStartAngle,
                tsa: this.theirStartAngle,
                lka: this.lastKnownAngle,
                m: this.mode
            }
        }, n.loadFromJSON = function(t) {
            this.pinObjectUid = t.uid, this.pinAngle = t.pa, this.pinDist = t.pd, this.myStartAngle = t.msa, this.theirStartAngle = t.tsa, this.lastKnownAngle = t.lka, this.mode = t.m
        }, n.afterLoad = function() {
            -1 === this.pinObjectUid ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid), this.pinObjectUid = -1
        }, n.onInstanceDestroyed = function(t) {
            this.pinObject == t && (this.pinObject = null)
        }, n.onDestroy = function() {
            this.pinObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, n.tick = function() {}, n.tick2 = function() {
            if (this.pinObject) {
                this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
                var t = this.inst.x,
                    e = this.inst.y;
                if (3 === this.mode || 4 === this.mode) {
                    var i = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y);
                    if (i > this.pinDist || 4 === this.mode && i < this.pinDist) {
                        var s = cr.angleTo(this.pinObject.x, this.pinObject.y, this.inst.x, this.inst.y);
                        t = this.pinObject.x + Math.cos(s) * this.pinDist, e = this.pinObject.y + Math.sin(s) * this.pinDist
                    }
                } else t = this.pinObject.x + Math.cos(this.pinObject.angle + this.pinAngle) * this.pinDist, e = this.pinObject.y + Math.sin(this.pinObject.angle + this.pinAngle) * this.pinDist;
                var n = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
                this.lastKnownAngle = n, 0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.inst.x === t && this.inst.y === e || (this.inst.x = t, this.inst.y = e, this.inst.set_bbox_changed()), 0 !== this.mode && 2 !== this.mode || this.inst.angle === n || (this.inst.angle = n, this.inst.set_bbox_changed())
            }
        }, t.prototype.IsPinned = function() {
            return !!this.pinObject
        }, s.cnds = new t, e.prototype.Pin = function(t, e) {
            if (t) {
                var i = t.getFirstPicked(this.inst);
                i && (this.pinObject = i, this.pinAngle = cr.angleTo(i.x, i.y, this.inst.x, this.inst.y) - i.angle, this.pinDist = cr.distanceTo(i.x, i.y, this.inst.x, this.inst.y), this.myStartAngle = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.theirStartAngle = i.angle, this.mode = e)
            }
        }, e.prototype.Unpin = function() {
            this.pinObject = null
        }, s.acts = new e, i.prototype.PinnedUID = function(t) {
            t.set_int(this.pinObject ? this.pinObject.uid : -1)
        }, s.exps = new i
    }(), cr.behaviors.Rotate = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}
        var i = cr.behaviors.Rotate.prototype;
        i.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, i.Type.prototype.onCreate = function() {}, i.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var s = i.Instance.prototype;
        s.onCreate = function() {
            this.speed = cr.to_radians(this.properties[0]), this.acc = cr.to_radians(this.properties[1])
        }, s.saveToJSON = function() {
            return {
                speed: this.speed,
                acc: this.acc
            }
        }, s.loadFromJSON = function(t) {
            this.speed = t.speed, this.acc = t.acc
        }, s.tick = function() {
            var t = this.runtime.getDt(this.inst);
            0 !== t && (0 !== this.acc && (this.speed += this.acc * t), 0 !== this.speed && (this.inst.angle = cr.clamp_angle(this.inst.angle + this.speed * t), this.inst.set_bbox_changed()))
        }, i.cnds = new function() {}, t.prototype.SetSpeed = function(t) {
            this.speed = cr.to_radians(t)
        }, t.prototype.SetAcceleration = function(t) {
            this.acc = cr.to_radians(t)
        }, i.acts = new t, e.prototype.Speed = function(t) {
            t.set_float(cr.to_degrees(this.speed))
        }, e.prototype.Acceleration = function(t) {
            t.set_float(cr.to_degrees(this.acc))
        }, i.exps = new e
    }(), cr.getObjectRefTable = function() {
        return [cr.plugins_.NinePatch, cr.plugins_.Audio, cr.plugins_.Browser, cr.plugins_.Function, cr.plugins_.Sprite, cr.plugins_.Spritefont2, cr.plugins_.TiledBg, cr.plugins_.Touch, cr.behaviors.Anchor, cr.behaviors.Pin, cr.behaviors.Rotate, cr.behaviors.Fade, cr.behaviors.Bullet, cr.behaviors.Car, cr.behaviors.ParallaxBG, cr.system_object.prototype.cnds.IsGroupActive, cr.system_object.prototype.cnds.OnLayoutStart, cr.plugins_.TiledBg.prototype.acts.SetOpacity, cr.plugins_.Function.prototype.acts.CallFunction, cr.plugins_.Sprite.prototype.acts.Destroy, cr.plugins_.Sprite.prototype.acts.SetY, cr.system_object.prototype.exps.viewportbottom, cr.plugins_.Sprite.prototype.exps.Height, cr.plugins_.Audio.prototype.acts.Play, cr.plugins_.Spritefont2.prototype.cnds.CompareInstanceVar, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.plugins_.Spritefont2.prototype.acts.SetText, cr.system_object.prototype.cnds.EveryTick, cr.plugins_.Sprite.prototype.acts.SetPosToObject, cr.plugins_.TiledBg.prototype.exps.Opacity, cr.system_object.prototype.exps.dt, cr.plugins_.Spritefont2.prototype.acts.SetY, cr.behaviors.Pin.prototype.acts.Pin, cr.system_object.prototype.cnds.Compare, cr.plugins_.Sprite.prototype.exps.Angle, cr.plugins_.Audio.prototype.acts.SetPlaybackRate, cr.system_object.prototype.cnds.Else, cr.plugins_.Sprite.prototype.cnds.CompareX, cr.system_object.prototype.exps.layoutwidth, cr.system_object.prototype.acts.ScrollX, cr.plugins_.Sprite.prototype.exps.X, cr.plugins_.TiledBg.prototype.cnds.CompareX, cr.system_object.prototype.exps.viewportleft, cr.plugins_.TiledBg.prototype.exps.Width, cr.plugins_.TiledBg.prototype.acts.SetX, cr.plugins_.TiledBg.prototype.exps.X, cr.plugins_.Function.prototype.cnds.OnFunction, cr.plugins_.Sprite.prototype.acts.SetX, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.behaviors.Car.prototype.acts.SetAcceleration, cr.system_object.prototype.acts.SetVar, cr.behaviors.Car.prototype.exps.Acceleration, cr.system_object.prototype.cnds.For, cr.plugins_.Sprite.prototype.acts.Spawn, cr.system_object.prototype.exps.loopindex, cr.plugins_.Sprite.prototype.acts.SetAnim, cr.plugins_.Sprite.prototype.exps.AnimationName, cr.plugins_.Sprite.prototype.acts.SetScale, cr.behaviors.Car.prototype.cnds.CompareSpeed, cr.behaviors.Rotate.prototype.acts.SetSpeed, cr.behaviors.Car.prototype.exps.Speed, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.system_object.prototype.cnds.CompareVar, cr.plugins_.Sprite.prototype.exps.Y, cr.system_object.prototype.acts.Wait, cr.plugins_.Sprite.prototype.acts.SetAngle, cr.behaviors.Car.prototype.exps.MaxSpeed, cr.behaviors.Car.prototype.acts.SimulateControl, cr.system_object.prototype.cnds.TriggerOnce, cr.system_object.prototype.exps.round, cr.system_object.prototype.exps.anglelerp, cr.plugins_.Sprite.prototype.cnds.IsBetweenAngles, cr.system_object.prototype.cnds.Every, cr.plugins_.Function.prototype.cnds.CompareParam, cr.plugins_.Sprite.prototype.acts.AddInstanceVar, cr.behaviors.Car.prototype.acts.SetMaxSpeed, cr.system_object.prototype.acts.CreateObject, cr.system_object.prototype.exps.layoutheight, cr.plugins_.Sprite.prototype.acts.SetAnimFrame, cr.plugins_.Sprite.prototype.cnds.OnCreated, cr.behaviors.Bullet.prototype.acts.SetAngleOfMotion, cr.plugins_.Sprite.prototype.exps.Width, cr.plugins_.Sprite.prototype.acts.ZMoveToObject, cr.plugins_.Touch.prototype.cnds.IsTouchingObject, cr.plugins_.TiledBg.prototype.exps.Y, cr.plugins_.Sprite.prototype.acts.MoveToBottom, cr.plugins_.Sprite.prototype.cnds.OnCollision, cr.plugins_.NinePatch.prototype.cnds.CompareY, cr.plugins_.NinePatch.prototype.acts.SetY, cr.plugins_.NinePatch.prototype.exps.Y, cr.system_object.prototype.acts.AddVar, cr.system_object.prototype.exps.int, cr.system_object.prototype.exps.distance, cr.behaviors.Car.prototype.acts.SetSpeed, cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, cr.behaviors.Fade.prototype.acts.StartFade, cr.plugins_.Audio.prototype.acts.Stop, cr.plugins_.Sprite.prototype.cnds.IsAnimPlaying, cr.plugins_.Sprite.prototype.acts.SetAnimSpeed, cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, cr.system_object.prototype.acts.GoToLayout, cr.system_object.prototype.acts.RestartLayout, cr.system_object.prototype.cnds.OnLayoutEnd, cr.plugins_.Audio.prototype.acts.StopAll, cr.plugins_.Sprite.prototype.acts.SetVisible, cr.plugins_.Spritefont2.prototype.acts.SetPos, cr.system_object.prototype.exps.viewporttop, cr.plugins_.Sprite.prototype.acts.SetPos, cr.plugins_.Audio.prototype.acts.SetSilent, cr.plugins_.Sprite.prototype.cnds.PickByUID, cr.plugins_.Sprite.prototype.cnds.CompareFrame, cr.plugins_.Browser.prototype.acts.RequestFullScreen, cr.plugins_.Browser.prototype.acts.CancelFullScreen]
    };