            s("781738"), s("424973");
            var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
                i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
                n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
                c = s("786561"),
                o = s("891044"),
                f = s("912065").Buffer;
            t.exports = function(t, e) {
                var s, u = t.toString(),
                    a = u.match(r);
                if (a) {
                    var d = "aes" + a[1],
                        p = f.from(a[2], "hex"),
                        b = f.from(a[3].replace(/[\r\n]/g, ""), "base64"),
                        h = c(e, p.slice(0, 8), parseInt(a[1], 10)).key,
                        l = [],
                        g = o.createDecipheriv(d, h, p);
                    l.push(g.update(b)), l.push(g.final()), s = f.concat(l)
                } else {
                    var v = u.match(n);
                    s = f.from(v[2].replace(/[\r\n]/g, ""), "base64")
                }
                return {
                    tag: u.match(i)[1],
                    data: s
                }
            }