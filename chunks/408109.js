            "use strict";
            var i = r("555671").rotr32;

            function n(t, e, r) {
                return t & e ^ ~t & r
            }

            function a(t, e, r) {
                return t & e ^ t & r ^ e & r
            }

            function o(t, e, r) {
                return t ^ e ^ r
            }
            e.ft_1 = function(t, e, r, i) {
                return 0 === t ? function(t, e, r) {
                    return t & e ^ ~t & r
                }(e, r, i) : 1 === t || 3 === t ? function(t, e, r) {
                    return t ^ e ^ r
                }(e, r, i) : 2 === t ? a(e, r, i) : void 0
            }, e.ch32 = n, e.maj32 = a, e.p32 = o;
            e.s0_256 = function(t) {
                return i(t, 2) ^ i(t, 13) ^ i(t, 22)
            };
            e.s1_256 = function(t) {
                return i(t, 6) ^ i(t, 11) ^ i(t, 25)
            };
            e.g0_256 = function(t) {
                return i(t, 7) ^ i(t, 18) ^ t >>> 3
            };
            e.g1_256 = function(t) {
                return i(t, 17) ^ i(t, 19) ^ t >>> 10
            }