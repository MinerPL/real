            r("781738"), r("424973");
            var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
                n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
                o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
                a = r("786561"),
                s = r("891044"),
                f = r("912065").Buffer;
            t.exports = function(t, e) {
                var r, h = t.toString(),
                    c = h.match(i);
                if (c) {
                    var u = "aes" + c[1],
                        d = f.from(c[2], "hex"),
                        l = f.from(c[3].replace(/[\r\n]/g, ""), "base64"),
                        p = a(e, d.slice(0, 8), parseInt(c[1], 10)).key,
                        b = [],
                        m = s.createDecipheriv(u, p, d);
                    b.push(m.update(l)), b.push(m.final()), r = f.concat(b)
                } else {
                    var g = h.match(o);
                    r = f.from(g[2].replace(/[\r\n]/g, ""), "base64")
                }
                return {
                    tag: h.match(n)[1],
                    data: r
                }
            }