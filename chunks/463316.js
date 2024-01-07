            r("70102");
            var i = 1073741823;
            t.exports = function(t, e) {
                if ("number" != typeof t) throw TypeError("Iterations not a number");
                if (t < 0) throw TypeError("Bad iterations");
                if ("number" != typeof e) throw TypeError("Key length not a number");
                if (e < 0 || e > i || e != e) throw TypeError("Bad key length")
            }