            "use strict";
            s("70102"), e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = s("664813"), e.createHash = e.Hash = s("488274"), e.createHmac = e.Hmac = s("145755");
            var r = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(s("617169")));
            e.getHashes = function() {
                return r
            };
            var i = s("560422");
            e.pbkdf2 = i.pbkdf2, e.pbkdf2Sync = i.pbkdf2Sync;
            var n = s("148300");
            e.Cipher = n.Cipher, e.createCipher = n.createCipher, e.Cipheriv = n.Cipheriv, e.createCipheriv = n.createCipheriv, e.Decipher = n.Decipher, e.createDecipher = n.createDecipher, e.Decipheriv = n.Decipheriv, e.createDecipheriv = n.createDecipheriv, e.getCiphers = n.getCiphers, e.listCiphers = n.listCiphers;
            var c = s("624815");
            e.DiffieHellmanGroup = c.DiffieHellmanGroup, e.createDiffieHellmanGroup = c.createDiffieHellmanGroup, e.getDiffieHellman = c.getDiffieHellman, e.createDiffieHellman = c.createDiffieHellman, e.DiffieHellman = c.DiffieHellman;
            var o = s("318882");
            e.createSign = o.createSign, e.Sign = o.Sign, e.createVerify = o.createVerify, e.Verify = o.Verify, e.createECDH = s("162172");
            var f = s("588534");
            e.publicEncrypt = f.publicEncrypt, e.privateEncrypt = f.privateEncrypt, e.publicDecrypt = f.publicDecrypt, e.privateDecrypt = f.privateDecrypt;
            var u = s("307334");
            e.randomFill = u.randomFill, e.randomFillSync = u.randomFillSync, e.createCredentials = function() {
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