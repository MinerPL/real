            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            }), s("70102");
            var a, n, r, l, i, u, o, d, c = s("37983"),
                _ = s("884691");
            (i = a || (a = {})).THING = "Thing", i.PERSON = "Person", i.PRODUCT = "Product", i.OFFER = "Offer", i.AGGREGATE_OFFER = "AggregateOffer", i.RATING = "Rating", i.AGGREGATE_RATING = "AggregateRating", i.ORGANIZATION = "Organization", i.ITEM_PAGE = "ItemPage", i.UNIT_PRICE_SPECIFICATION = "UnitPriceSpecification", i.QUANTITATIVE_VALUE = "QuantitativeValue";

            function E(e, t) {
                return {
                    "@type": e,
                    ... function(e) {
                        let t = function(e) {
                            let t;
                            try {
                                t = JSON.parse(JSON.stringify(e))
                            } catch (e) {
                                throw Error("[JSONLD] Invalid object format")
                            }
                            return t
                        }(e);
                        return function e(t) {
                            return Object.keys(t).forEach(s => {
                                null == t[s] ? delete t[s] : "object" == typeof t[s] && (t[s] = e(t[s]))
                            }), t
                        }(t)
                    }(t)
                }
            }

            function I(e) {
                return E("Thing", e)
            }

            function f(e) {
                return E("Product", e)
            }
            f.Image = function(e) {
                if (null == e) return null;
                let t = e.filter(e => null != e && "" !== e);
                return 0 === t.length ? null : 1 === t.length ? t[0] : t
            };

            function T(e) {
                return E("Offer", e)
            }

            function S(e) {
                return E("QuantitativeValue", e)
            }(u = n || (n = {})).DAMAGED = "http://schema.org/DamagedCondition", u.NEW = "http://schema.org/NewCondition", u.REFURBISHED = "http://schema.org/RefurbishedCondition", u.USED = "http://schema.org/UsedCondition", (o = r || (r = {})).DISCONTINUED = "http://schema.org/Discontinued", o.IN_STOCK = "http://schema.org/InStock", o.IN_STORE_ONLY = "http://schema.org/InStoreOnly", o.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", o.ONLINE_ONLY = "http://schema.org/OnlineOnly", o.OUT_OF_STOCK = "http://schema.org/OutOfStock", o.PREORDER = "http://schema.org/PreOrder", o.PRESALE = "http://schema.org/PreSale", o.SOLD_OUT = "http://schema.org/SoldOut", T.ItemConditions = n, T.ItemAvailability = r, (d = l || (l = {})).YEARLY = "ANN", d.MONTHLY = "MON", S.UnitCodes = l;
            class R extends _.Component {
                render() {
                    let {
                        debug: e,
                        data: t
                    } = this.props, s = JSON.stringify({
                        "@context": "http://schema.org",
                        ...t
                    });
                    return (0, c.jsx)("script", {
                        type: "application/ld+json",
                        children: s
                    })
                }
            }
            R.Thing = I, R.Brand = I, R.Person = function(e) {
                return E("Person", e)
            }, R.Organization = function(e) {
                return E("Organization", e)
            }, R.ItemPage = function(e) {
                return E("ItemPage", e)
            }, R.Product = f, R.Offer = T, R.Rating = function(e) {
                return E("Rating", e)
            }, R.AggregateRating = function(e) {
                return E("AggregateRating", e)
            }, R.AggregateOffer = function(e) {
                return E("AggregateOffer", e)
            }, R.QuantitativeValue = S, R.UnitPriceSpecification = function(e) {
                return E("UnitPriceSpecification", e)
            };
            var p = R