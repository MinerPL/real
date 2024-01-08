            var i = r("430301"),
                n = r("232987"),
                a = r("541412");
            e.createCipher = e.Cipher = i.createCipher, e.createCipheriv = e.Cipheriv = i.createCipheriv, e.createDecipher = e.Decipher = n.createDecipher, e.createDecipheriv = e.Decipheriv = n.createDecipheriv, e.listCiphers = e.getCiphers = function() {
                return Object.keys(a)
            }