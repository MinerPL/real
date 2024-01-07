            "use strict";
            r("781738");
            var n = r("571610"),
                i = r("958942"),
                o = r("20755"),
                a = RegExp("\r\n", "g"),
                u = {
                    "text/rtf": 1,
                    "text/html": 1
                };

            function s(t) {
                if ("file" == t.kind) return t.getAsFile()
            }
            var DataTransfer = function() {
                function DataTransfer(t) {
                    this.data = t, this.types = t.types ? i(t.types) : []
                }
                var t = DataTransfer.prototype;
                return t.isRichText = function() {
                    return !!(this.getHTML() && this.getText()) || !this.isImage() && this.types.some(function(t) {
                        return u[t]
                    })
                }, t.getText = function() {
                    var t;
                    return this.data.getData && (this.types.length ? -1 != this.types.indexOf("text/plain") && (t = this.data.getData("text/plain")) : t = this.data.getData("Text")), t ? t.replace(a, "\n") : null
                }, t.getHTML = function() {
                    if (this.data.getData) {
                        if (!this.types.length) return this.data.getData("Text");
                        if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html")
                    }
                }, t.isLink = function() {
                    return this.types.some(function(t) {
                        return -1 != t.indexOf("Url") || -1 != t.indexOf("text/uri-list") || t.indexOf("text/x-moz-url")
                    })
                }, t.getLink = function() {
                    if (this.data.getData) return -1 != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : -1 != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url");
                    return null
                }, t.isImage = function() {
                    if (this.types.some(function(t) {
                            return -1 != t.indexOf("application/x-moz-file")
                        })) return !0;
                    for (var t = this.getFiles(), e = 0; e < t.length; e++) {
                        var r = t[e].type;
                        if (!n.isImage(r)) return !1
                    }
                    return !0
                }, t.getCount = function() {
                    if (this.data.hasOwnProperty("items")) return this.data.items.length;
                    if (this.data.hasOwnProperty("mozItemCount")) return this.data.mozItemCount;
                    if (this.data.files) return this.data.files.length;
                    return null
                }, t.getFiles = function() {
                    return this.data.items ? Array.prototype.slice.call(this.data.items).map(s).filter(o.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : []
                }, t.hasFiles = function() {
                    return this.getFiles().length > 0
                }, DataTransfer
            }();
            t.exports = DataTransfer