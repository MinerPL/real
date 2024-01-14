"use strict";
n.r(t), n.d(t, {
  DiscoveryTagsExperiment: function() {
    return s
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2021-11_discovery_tags",
  label: "Discovery Tags",
  defaultConfig: {
    shouldDisplayTags: !1,
    shouldDisplayRecommendedSearchTags: !1
  },
  treatments: [{
    id: 1,
    label: "Show keyword tags on home and search result pages",
    config: {
      shouldDisplayTags: !0,
      shouldDisplayRecommendedSearchTags: !1
    }
  }, {
    id: 2,
    label: "Show keyword tags on home and search result pages and under the search bar",
    config: {
      shouldDisplayTags: !0,
      shouldDisplayRecommendedSearchTags: !0
    }
  }]
})