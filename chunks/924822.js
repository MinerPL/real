    "use strict";
    t.r(a), t.d(a, {
      getOpenAppFromEmailDestinations: function() {
        return c
      }
    }), t("511434"), t("313619"), t("654714"), t("287168"), t("956660"), t("222007");
    var d = t("730290"),
      s = t("253981");
    let n = e => {
        if (null == e || "" === e) return null;
        try {
          let a = new URL(e);
          return s.default.isDiscordHostname(a.hostname) || window.location.host === a.host ? a : null
        } catch (e) {
          return null
        }
      },
      c = e => {
        let a = (0, d.parse)(e);
        return {
          desktop: n(a.desktop_link),
          mobile: n(a.mobile_link)
        }
      }