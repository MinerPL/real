            "use strict";
            r("70102"), e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = r("664813"), e.createHash = e.Hash = r("488274"), e.createHmac = e.Hmac = r("145755");
            var i = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(r("617169")));
            e.getHashes = function() {
                return i
            };
            var n = r("560422");
            e.pbkdf2 = n.pbkdf2, e.pbkdf2Sync = n.pbkdf2Sync;
            var a = r("148300");
            e.Cipher = a.Cipher, e.createCipher = a.createCipher, e.Cipheriv = a.Cipheriv, e.createCipheriv = a.createCipheriv, e.Decipher = a.Decipher, e.createDecipher = a.createDecipher, e.Decipheriv = a.Decipheriv, e.createDecipheriv = a.createDecipheriv, e.getCiphers = a.getCiphers, e.listCiphers = a.listCiphers;
            var o = r("624815");
            e.DiffieHellmanGroup = o.DiffieHellmanGroup, e.createDiffieHellmanGroup = o.createDiffieHellmanGroup, e.getDiffieHellman = o.getDiffieHellman, e.createDiffieHellman = o.createDiffieHellman, e.DiffieHellman = o.DiffieHellman;
            var s = r("318882");
            e.createSign = s.createSign, e.Sign = s.Sign, e.createVerify = s.createVerify, e.Verify = s.Verify, e.createECDH = r("162172");
            var f = r("588534");
            e.publicEncrypt = f.publicEncrypt, e.privateEncrypt = f.privateEncrypt, e.publicDecrypt = f.publicDecrypt, e.privateDecrypt = f.privateDecrypt;
            var h = r("307334");
            e.randomFill = h.randomFill, e.randomFillSync = h.randomFillSync, e.createCredentials = function() {
                throw Error("sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/crypto-browserify/crypto-browserify")
            }, e.constants = {
                DH_CHECK_P_NOT_SAFE_PRIME: 2,
                DH_CHECK_P_NOT_PRIME: 1,
                DH_UNABLE_TO_CHECK_GENERATOR: 4,
                DH_NOT_SUITABLE_GENERATOR: 8,
                NPN_ENABLED: 1,
                ALPN_ENABLED: 1,
                RSA_PKCS1_PADDING: 1,
                RSA_SSLV23_PADDING: 2,
                RSA_NO_PADDING: 3,
                RSA_PKCS1_OAEP_PADDING: 4,
                RSA_X931_PADDING: 5,
                RSA_PKCS1_PSS_PADDING: 6,
                POINT_CONVERSION_COMPRESSED: 2,
                POINT_CONVERSION_UNCOMPRESSED: 4,
                POINT_CONVERSION_HYBRID: 6
            }