            "use strict";
            r("222007");
            var n = r("706621"),
                i = r("516017"),
                o = r("646601"),
                a = o.List,
                Map = o.Map,
                u = o.OrderedSet,
                s = o.Record,
                c = o.Repeat,
                l = u(),
                f = {
                    parent: null,
                    characterList: a(),
                    data: Map(),
                    depth: 0,
                    key: "",
                    text: "",
                    type: "unstyled",
                    children: a(),
                    prevSibling: null,
                    nextSibling: null
                },
                p = function(t, e) {
                    return t.getStyle() === e.getStyle()
                },
                h = function(t, e) {
                    return t.getEntity() === e.getEntity()
                },
                d = function(t) {
                    if (!t) return t;
                    var e = t.characterList,
                        r = t.text;
                    return r && !e && (t.characterList = a(c(n.EMPTY, r.length))), t
                },
                g = function(t) {
                    function e() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                        return t.call(this, d(e)) || this
                    }
                    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
                    var r, n, o = e.prototype;
                    return o.getKey = function() {
                        return this.get("key")
                    }, o.getType = function() {
                        return this.get("type")
                    }, o.getText = function() {
                        return this.get("text")
                    }, o.getCharacterList = function() {
                        return this.get("characterList")
                    }, o.getLength = function() {
                        return this.getText().length
                    }, o.getDepth = function() {
                        return this.get("depth")
                    }, o.getData = function() {
                        return this.get("data")
                    }, o.getInlineStyleAt = function(t) {
                        var e = this.getCharacterList().get(t);
                        return e ? e.getStyle() : l
                    }, o.getEntityAt = function(t) {
                        var e = this.getCharacterList().get(t);
                        return e ? e.getEntity() : null
                    }, o.getChildKeys = function() {
                        return this.get("children")
                    }, o.getParentKey = function() {
                        return this.get("parent")
                    }, o.getPrevSiblingKey = function() {
                        return this.get("prevSibling")
                    }, o.getNextSiblingKey = function() {
                        return this.get("nextSibling")
                    }, o.findStyleRanges = function(t, e) {
                        i(this.getCharacterList(), p, t, e)
                    }, o.findEntityRanges = function(t, e) {
                        i(this.getCharacterList(), h, t, e)
                    }, e
                }(s(f));
            t.exports = g