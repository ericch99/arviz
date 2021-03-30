(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("df120395-367c-4cf4-bd99-0d2cba546667");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'df120395-367c-4cf4-bd99-0d2cba546667' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"d91a4d96-d9f3-40d5-a732-15c3d531a5c0":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"19662","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"19620","type":"HoverTool"},{"attributes":{"data_source":{"id":"19632"},"glyph":{"id":"19633"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19634"},"view":{"id":"19636"}},"id":"19635","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19621","type":"BoxAnnotation"},{"attributes":{},"id":"19669","type":"Selection"},{"attributes":{"data_source":{"id":"19647"},"glyph":{"id":"19648"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19649"},"view":{"id":"19651"}},"id":"19650","type":"GlyphRenderer"},{"attributes":{},"id":"19663","type":"Selection"},{"attributes":{},"id":"19668","type":"UnionRenderers"},{"attributes":{},"id":"19619","type":"SaveTool"},{"attributes":{},"id":"19614","type":"PanTool"},{"attributes":{"overlay":{"id":"19622"}},"id":"19617","type":"LassoSelectTool"},{"attributes":{},"id":"19655","type":"BasicTickFormatter"},{"attributes":{},"id":"19613","type":"ResetTool"},{"attributes":{"overlay":{"id":"19621"}},"id":"19615","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"19634","type":"Patch"},{"attributes":{},"id":"19666","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"19672"},"toolbar_location":"above"},"id":"19673","type":"ToolbarBox"},{"attributes":{},"id":"19601","type":"LinearScale"},{"attributes":{},"id":"19664","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"19613"},{"id":"19614"},{"id":"19615"},{"id":"19616"},{"id":"19617"},{"id":"19618"},{"id":"19619"},{"id":"19620"}]},"id":"19623","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"19623"}],"tools":[{"id":"19613"},{"id":"19614"},{"id":"19615"},{"id":"19616"},{"id":"19617"},{"id":"19618"},{"id":"19619"},{"id":"19620"}]},"id":"19672","type":"ProxyToolbar"},{"attributes":{},"id":"19610","type":"BasicTicker"},{"attributes":{"children":[{"id":"19673"},{"id":"19671"}]},"id":"19674","type":"Column"},{"attributes":{"data_source":{"id":"19642"},"glyph":{"id":"19643"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19644"},"view":{"id":"19646"}},"id":"19645","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"k3vx9syl1D/+K/6K4b7UP2jcCh/219Q/0owXswrx1D89PSRHHwrVP6ftMNszI9U/Ep49b0g81T98TkoDXVXVP+b+VpdxbtU/Ua9jK4aH1T+7X3C/mqDVPyYQfVOvudU/kMCJ58PS1T/7cJZ72OvVP2Uhow/tBNY/z9GvowEe1j86grw3FjfWP6QyycsqUNY/D+PVXz9p1j95k+LzU4LWP+ND74dom9Y/TvT7G3201j+4pAiwkc3WPyNVFUSm5tY/jQUi2Lr/1j/3tS5szxjXP2JmOwDkMdc/zBZIlPhK1z83x1QoDWTXP6F3Ybwhfdc/CyhuUDaW1z922HrkSq/XP+CIh3hfyNc/SzmUDHTh1z+16aCgiPrXPx+arTSdE9g/ikq6yLEs2D/0+sZcxkXYP1+r0/DaXtg/yVvghO932D80DO0YBJHYP568+awYqtg/CG0GQS3D2D9zHRPVQdzYP93NH2lW9dg/SH4s/WoO2T+yLjmRfyfZPxzfRSWUQNk/h49SuahZ2T/xP19NvXLZP1zwa+HRi9k/xqB4deak2T8wUYUJ+73ZP5sBkp0P19k/BbKeMSTw2T9wYqvFOAnaP9oSuFlNIto/RMPE7WE72j+vc9GBdlTaPxkk3hWLbdo/hNTqqZ+G2j/uhPc9tJ/aP1g1BNLIuNo/w+UQZt3R2j8tlh368eraP5hGKo4GBNs/Avc2Ihsd2z9sp0O2LzbbP9dXUEpET9s/QQhd3lho2z+suGlybYHbPxZpdgaCmts/gBmDmpaz2z/ryY8uq8zbP1V6nMK/5ds/wCqpVtT+2z8q27Xq6BfcP5WLwn79MNw//zvPEhJK3D9p7NumJmPcP9Sc6Do7fNw/Pk31zk+V3D+p/QFjZK7cPxOuDvd4x9w/fV4bi43g3D/oDigfovncP1K/NLO2Et0/vW9BR8sr3T8nIE7b30TdPycgTtvfRN0/JyBO299E3T+9b0FHyyvdP1K/NLO2Et0/6A4oH6L53D99XhuLjeDcPxOuDvd4x9w/qf0BY2Su3D8+TfXOT5XcP9Sc6Do7fNw/aezbpiZj3D//O88SEkrcP5WLwn79MNw/Ktu16ugX3D/AKqlW1P7bP1V6nMK/5ds/68mPLqvM2z+AGYOalrPbPxZpdgaCmts/rLhpcm2B2z9BCF3eWGjbP9dXUEpET9s/bKdDti822z8C9zYiGx3bP5hGKo4GBNs/LZYd+vHq2j/D5RBm3dHaP1g1BNLIuNo/7oT3PbSf2j+E1Oqpn4baPxkk3hWLbdo/r3PRgXZU2j9Ew8TtYTvaP9oSuFlNIto/cGKrxTgJ2j8Fsp4xJPDZP5sBkp0P19k/MFGFCfu92T/GoHh15qTZP1zwa+HRi9k/8T9fTb1y2T+Hj1K5qFnZPxzfRSWUQNk/si45kX8n2T9Ifiz9ag7ZP93NH2lW9dg/cx0T1UHc2D8IbQZBLcPYP568+awYqtg/NAztGASR2D/JW+CE73fYP1+r0/DaXtg/9PrGXMZF2D+KSrrIsSzYPx+arTSdE9g/temgoIj61z9LOZQMdOHXP+CIh3hfyNc/dth65Eqv1z8LKG5QNpbXP6F3Ybwhfdc/N8dUKA1k1z/MFkiU+ErXP2JmOwDkMdc/97UubM8Y1z+NBSLYuv/WPyNVFUSm5tY/uKQIsJHN1j9O9PsbfbTWP+ND74dom9Y/eZPi81OC1j8P49VfP2nWP6QyycsqUNY/OoK8NxY31j/P0a+jAR7WP2Uhow/tBNY/+3CWe9jr1T+QwInnw9LVPyYQfVOvudU/u19wv5qg1T9Rr2MrhofVP+b+VpdxbtU/fE5KA11V1T8Snj1vSDzVP6ftMNszI9U/PT0kRx8K1T/SjBezCvHUP2jcCh/219Q//iv+iuG+1D+Te/H2zKXUP5N78fbMpdQ/","dtype":"float64","order":"little","shape":[180]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFeQ5trT/Pc/V5Dm2tP89z/fNGHenBH4P9Lw0vnqJfg/gREWfsY6+D/XLGcqb1D4P5BK8F5GZvg/OBVH1Fl9+D+DDPy4F5T4P7WvONXmqvg/JWjy4dLB+D9WiU1hh9r4P0mNuqvH8fg/fnm+qTQK+T+Ey6RcOyP5P9ThUMZQO/k/ZQDyPAlW+T/P9rQEE3L5PwPxopHSjvk/VtG68hOt+T+CAScb88n5P6aYnZzB6Pk/ubGaQNMI+j+HeFgqfCn6PxwJ8N7mS/o//8bPTitu+j90aQpCe5H6P1lkDE21tfo/q+PlCTLb+j9afiR3lQH7P5O2W+6MKPs/RW+Y2SJS+z8Z2pOHCHv7P4U30OrfpPs/kLcsGzjP+z+vmg9E9/n7P+a5L6pgJ/w/7Dd+8MFT/D/CfleiwYH8PyN2DcpWsPw/+wQXkv7e/D9GpjX+Tw/9P8TpJYv4Pf0/Q0qRGSVs/T9Hqk42DZz9P+XGkfW3zP0/z0lNYhj9/T/Z8cyvsiz+P5UxeiDbWv4/XvXpQGaK/j9mi2O93Lj+P7+4nyF35/4/ZvQfzV8V/z8oA3Tj1ED/P1E6LEphbf8/M0Ids/aY/z+oz12X3MP/P/t9m1Mm6/8/+/eD+tMJAEB5AX6koB0AQD2mXrZ8MABAzcubho5CAEBIsuN6olMAQK29nKQ4ZABAOej34+50AEA8tKKSSoQAQEqP4oeXkgBAeNHxX2qgAECXS/mMwa0AQOHR6YRLuQBAJ9CZs6vEAEBFMEp4k88AQFRqOVpq2gBAyJNa3HDkAEA7Np1Weu0AQOmxELWG9QBAzOyAK6b8AECSdgyxBAMBQKYll05KCQFA6eSum7MOAUA+CZo1EhQBQMxmT+6TGAFAOcGM4+wbAUC/Qc7hyR8BQFyfj+zBIgFAzj56CqklAUAhiMz2AigBQH7M+R0HKgFAB/cXi2srAUCmXnXZrywBQAAAAAAAAAAA","dtype":"float64","order":"little","shape":[180]}},"selected":{"id":"19667"},"selection_policy":{"id":"19666"}},"id":"19642","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"19609"},"dimension":1,"ticker":null},"id":"19612","type":"Grid"},{"attributes":{"source":{"id":"19647"}},"id":"19651","type":"CDSView"},{"attributes":{},"id":"19618","type":"UndoTool"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"19643","type":"Patch"},{"attributes":{},"id":"19658","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19622","type":"PolyAnnotation"},{"attributes":{},"id":"19667","type":"Selection"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"19648","type":"Patch"},{"attributes":{"source":{"id":"19642"}},"id":"19646","type":"CDSView"},{"attributes":{"source":{"id":"19632"}},"id":"19636","type":"CDSView"},{"attributes":{},"id":"19659","type":"AllLabels"},{"attributes":{},"id":"19665","type":"Selection"},{"attributes":{},"id":"19606","type":"BasicTicker"},{"attributes":{},"id":"19603","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[258]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN+NgL86EANA342AvzoQA0BW01lmygUDQJi0tvuy+QJAIhHvRILsAkCEfqtcC90CQPvpi0WYywJAEivQYcm5AkB5lQa/96UCQDxAM6GdkAJA6Obwkod5AkBeKdetmGACQNnoUfTSRgJAS3V3QX8rAkAMq+x3RA8CQMMZlWE38QFA5I6cia3RAUCJnCyBgbABQIQXov/LjQFAvv5QxI9pAUDufhTYHkQBQOippAyrHQFAp4AY5+b1AEBJ4JWUlswAQHGoZBhwogBANmA3VrJ2AEAcoPsM7UkAQAMR5554HABA0bk2xdza/z+LDBwOX3z/Py/zGdjdHP8/Yu00IDi6/j8/0IFdqlX+P4KQ+O9Y8P0/cj5gV7mL/T83QTiP+CT9P+vb+0PSvfw/Qbqh+sRV/D+PHIWyn+37Pzh+r1svhfs/6HAGBocd+z9pycl44LT6P+l0MmxuTPo/mFaMU6vj+T/B5A2PV3z5P3a68lBDFfk/LpQJIPOu+D/iGNis20j4P4I/9ftc5Pc/vNh2+TaB9z/5hOUFix73P1wp05zHvPY/EAD9tVdc9j89VOl/hf71Pye5llgFovU/7yiteqJG9T/0UOaeVO30P01docTJlPQ/ukrlKB499D9OmmE9y+XzP+kIT/qMkPM/+pRKUaA98z85Zu4jQOzyP1NBs/y+nPI/3/+T1GNP8j+HKBfJewLyP7hXMYb9tvE/yTBdMypt8T8MCykz9CTxPzGcKNSR3vA/PPKMa/yX8D++gPI82VLwP08j2OILD/A/eYeP71OY7z928rSrRRTvP7rwmbCFlO4/QxV3IPEU7j8pRmeLGpTtP3KBDlWtFO0/HvFMcHWY7D9OPrjP2xrsP7g1C9lRoOs/fDkS2mcl6z+qiuLYa6vqP5Zai/HTNOo/stDVWz6+6T90I8HaVUjpP4QOtTid0Og/Opui9Zpb6D9jOfvtzufnP+8o9RVzdOc/9AVuPfcC5z9j+9wEkpHmP55yK6g9IOY/eBAyeRGx5T/m5t8/sEHlPzGQq6Ib0uQ/qoEuFfdk5D8sDNMUcfjjP1JwEm+RjOM/bwzWtRMi4z/34o884rniP4XDQdI3VOI/nFOGalzw4T9vIwa8EY3hPzDw3avMLuE/nGW8pxrT4D+JeSsN+3fgP6rVzjeOIeA/Co8Yqn2V3z9Bbcs2LvPeP5AVGibtUN4/LgCIZA7A3T819i4EMzLdPyXVsp00rtw/N5+vXp8x3D8sKHmtvLvbPwcY9jMWTts/F4yojbnn2j8AVV6neoraP0VBOSCiN9o/4YFV8Gvs2T/lz0UX1qvZP4x16ONZctk/p1kgIrZC2T+17sGeCyHZP6+p4F71Btk/LUPTM9f62D852paK6vXYPwAAAAAAAAAA","dtype":"float64","order":"little","shape":[258]}},"selected":{"id":"19663"},"selection_policy":{"id":"19662"}},"id":"19632","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"19633","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"19639","type":"Patch"},{"attributes":{"formatter":{"id":"19655"},"major_label_policy":{"id":"19656"},"ticker":{"id":"19606"}},"id":"19605","type":"LinearAxis"},{"attributes":{"axis":{"id":"19605"},"ticker":null},"id":"19608","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"19644","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"19649","type":"Patch"},{"attributes":{"data_source":{"id":"19637"},"glyph":{"id":"19638"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19639"},"view":{"id":"19641"}},"id":"19640","type":"GlyphRenderer"},{"attributes":{},"id":"19599","type":"DataRange1d"},{"attributes":{"children":[[{"id":"19596"},0,0]]},"id":"19671","type":"GridBox"},{"attributes":{},"id":"19597","type":"DataRange1d"},{"attributes":{"below":[{"id":"19605"}],"center":[{"id":"19608"},{"id":"19612"}],"height":500,"left":[{"id":"19609"}],"output_backend":"webgl","renderers":[{"id":"19635"},{"id":"19640"},{"id":"19645"},{"id":"19650"}],"title":{"id":"19653"},"toolbar":{"id":"19623"},"toolbar_location":null,"width":500,"x_range":{"id":"19597"},"x_scale":{"id":"19601"},"y_range":{"id":"19599"},"y_scale":{"id":"19603"}},"id":"19596","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"19637"}},"id":"19641","type":"CDSView"},{"attributes":{"formatter":{"id":"19658"},"major_label_policy":{"id":"19659"},"ticker":{"id":"19610"}},"id":"19609","type":"LinearAxis"},{"attributes":{},"id":"19656","type":"AllLabels"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"19638","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"kdBab/Rd3T/8gGcDCXfdP2YxdJcdkN0/0eGAKzKp3T87ko2/RsLdP6VCmlNb290/EPOm52/03T96o7N7hA3eP+VTwA+ZJt4/TwTNo60/3j+5tNk3wljePyRl5svWcd4/jhXzX+uK3j/5xf/z/6PeP2N2DIgUvd4/ziYZHCnW3j841yWwPe/eP6KHMkRSCN8/DTg/2GYh3z936EtsezrfP+KYWACQU98/TElllKRs3z+2+XEouYXfPyGqfrzNnt8/i1qLUOK33z/2Cpjk9tDfP2C7pHgL6t8/5bVYBpAB4D8bDl9QGg7gP1BmZZqkGuA/hb5r5C4n4D+6FnIuuTPgP+9ueHhDQOA/Jcd+ws1M4D9aH4UMWFngP493i1biZeA/xM+RoGxy4D/5J5jq9n7gPy6AnjSBi+A/ZNikfguY4D+ZMKvIlaTgP86IsRIgseA/A+G3XKq94D84Ob6mNMrgP26RxPC+1uA/o+nKOknj4D/YQdGE0+/gPw2a185d/OA/QvLdGOgI4T94SuRichXhP62i6qz8IeE/4vrw9oYu4T8XU/dAETvhP0yr/YqbR+E/ggME1SVU4T+3WwofsGDhP+yzEGk6beE/IQwXs8R54T9WZB39TobhP4y8I0fZkuE/wRQqkWOf4T/2bDDb7avhPyvFNiV4uOE/YR09bwLF4T+WdUO5jNHhP8vNSQMX3uE/ACZQTaHq4T81flaXK/fhP2vWXOG1A+I/oC5jK0AQ4j/Vhml1yhziPwrfb79UKeI/Pzd2Cd814j91j3xTaULiP6rngp3zTuI/3z+J531b4j8UmI8xCGjiP0nwlXuSdOI/f0icxRyB4j+0oKIPp43iP+n4qFkxmuI/HlGvo7um4j9TqbXtRbPiP4kBvDfQv+I/vlnCgVrM4j/zscjL5NjiPygKzxVv5eI/XWLVX/nx4j+Tutupg/7iP8gS4vMNC+M//WroPZgX4z8yw+6HIiTjP2cb9dGsMOM/nXP7Gzc94z/SywFmwUnjPwckCLBLVuM/PHwO+tVi4z9x1BREYG/jP6csG47qe+M/3IQh2HSI4z8R3Sci/5TjP0Y1LmyJoeM/e400thOu4z+x5ToAnrrjP+Y9QUoox+M/G5ZHlLLT4z9Q7k3ePODjP4VGVCjH7OM/u55aclH54z/w9mC82wXkPyVPZwZmEuQ/WqdtUPAe5D+P/3OaeivkP8VXeuQEOOQ/+q+ALo9E5D8vCId4GVHkP2RgjcKjXeQ/mbiTDC5q5D/PEJpWuHbkPwRpoKBCg+Q/OcGm6syP5D9uGa00V5zkP6Nxs37hqOQ/2cm5yGu15D8OIsAS9sHkP0N6xlyAzuQ/eNLMpgrb5D+tKtPwlOfkP+OC2Tof9OQ/GNvfhKkA5T9NM+bOMw3lP4KL7Bi+GeU/uOPyYkgm5T/tO/ms0jLlPyKU//ZcP+U/V+wFQedL5T+MRAyLcVjlP8KcEtX7ZOU/9/QYH4Zx5T8sTR9pEH7lP2GlJbOaiuU/lv0r/SSX5T/MVTJHr6PlPwGuOJE5sOU/NgY/28O85T9rXkUlTsnlP6C2S2/Y1eU/1g5SuWLi5T8LZ1gD7e7lP0C/Xk13++U/dRdllwEI5j+qb2vhixTmP+DHcSsWIeY/FSB4daAt5j9KeH6/KjrmP3/QhAm1RuY/tCiLUz9T5j/qgJGdyV/mPx/Zl+dTbOY/VDGeMd545j+JiaR7aIXmP77hqsXykeY/9DmxD32e5j8pkrdZB6vmP17qvaORt+Y/k0LE7RvE5j/Imso3ptDmP/7y0IEw3eY/M0vXy7rp5j9oo90VRfbmP53741/PAuc/0lPqqVkP5z8IrPDz4xvnPz0E9z1uKOc/clz9h/g05z+ntAPSgkHnP9wMChwNTuc/EmUQZpda5z9HvRawIWfnP3wVHfqrc+c/sW0jRDaA5z/mxSmOwIznPxweMNhKmec/UXY2ItWl5z+GzjxsX7LnP7smQ7bpvuc/8H5JAHTL5z8m109K/tfnP1svVpSI5Oc/kIdc3hLx5z/F32Ionf3nP/s3aXInCug/MJBvvLEW6D9l6HUGPCPoP5pAfFDGL+g/z5iCmlA86D8F8Yjk2kjoPzpJjy5lVeg/b6GVeO9h6D+k+ZvCeW7oP9lRogwEe+g/D6qoVo6H6D9EAq+gGJToP3lateqioOg/rrK7NC2t6D/jCsJ+t7noPxljyMhBxug/TrvOEszS6D+DE9VcVt/oP7hr26bg6+g/7cPh8Gr46D8jHOg69QTpP1h07oR/Eek/jcz0zgke6T/CJPsYlCrpP/d8AWMeN+k/LdUHrahD6T9iLQ73MlDpP5eFFEG9XOk/zN0ai0dp6T8BNiHV0XXpPzeOJx9cguk/bOYtaeaO6T9s5i1p5o7pP2zmLWnmjuk/N44nH1yC6T8BNiHV0XXpP8zdGotHaek/l4UUQb1c6T9iLQ73MlDpPy3VB62oQ+k/93wBYx436T/CJPsYlCrpP43M9M4JHuk/WHTuhH8R6T8jHOg69QTpP+3D4fBq+Og/uGvbpuDr6D+DE9VcVt/oP067zhLM0ug/GWPIyEHG6D/jCsJ+t7noP66yuzQtreg/eVq16qKg6D9EAq+gGJToPw+qqFaOh+g/2VGiDAR76D+k+ZvCeW7oP2+hlXjvYeg/OkmPLmVV6D8F8Yjk2kjoP8+YgppQPOg/mkB8UMYv6D9l6HUGPCPoPzCQb7yxFug/+zdpcicK6D/F32Ionf3nP5CHXN4S8ec/Wy9WlIjk5z8m109K/tfnP/B+SQB0y+c/uyZDtum+5z+GzjxsX7LnP1F2NiLVpec/HB4w2EqZ5z/mxSmOwIznP7FtI0Q2gOc/fBUd+qtz5z9HvRawIWfnPxJlEGaXWuc/3AwKHA1O5z+ntAPSgkHnP3Jc/Yf4NOc/PQT3PW4o5z8IrPDz4xvnP9JT6qlZD+c/nfvjX88C5z9oo90VRfbmPzNL18u66eY//vLQgTDd5j/Imso3ptDmP5NCxO0bxOY/Xuq9o5G35j8pkrdZB6vmP/Q5sQ99nuY/vuGqxfKR5j+JiaR7aIXmP1QxnjHeeOY/H9mX51Ns5j/qgJGdyV/mP7Qoi1M/U+Y/f9CECbVG5j9KeH6/KjrmPxUgeHWgLeY/4MdxKxYh5j+qb2vhixTmP3UXZZcBCOY/QL9eTXf75T8LZ1gD7e7lP9YOUrli4uU/oLZLb9jV5T9rXkUlTsnlPzYGP9vDvOU/Aa44kTmw5T/MVTJHr6PlP5b9K/0kl+U/YaUls5qK5T8sTR9pEH7lP/f0GB+GceU/wpwS1ftk5T+MRAyLcVjlP1fsBUHnS+U/IpT/9lw/5T/tO/ms0jLlP7jj8mJIJuU/govsGL4Z5T9NM+bOMw3lPxjb34SpAOU/44LZOh/05D+tKtPwlOfkP3jSzKYK2+Q/Q3rGXIDO5D8OIsAS9sHkP9nJuchrteQ/o3GzfuGo5D9uGa00V5zkPznBpurMj+Q/BGmgoEKD5D/PEJpWuHbkP5m4kwwuauQ/ZGCNwqNd5D8vCId4GVHkP/qvgC6PROQ/xVd65AQ45D+P/3OaeivkP1qnbVDwHuQ/JU9nBmYS5D/w9mC82wXkP7ueWnJR+eM/hUZUKMfs4z9Q7k3ePODjPxuWR5Sy0+M/5j1BSijH4z+x5ToAnrrjP3uNNLYTruM/RjUubImh4z8R3Sci/5TjP9yEIdh0iOM/pywbjup74z9x1BREYG/jPzx8DvrVYuM/ByQIsEtW4z/SywFmwUnjP51z+xs3PeM/Zxv10aww4z8yw+6HIiTjP/1q6D2YF+M/yBLi8w0L4z+Tutupg/7iP11i1V/58eI/KArPFW/l4j/zscjL5NjiP75ZwoFazOI/iQG8N9C/4j9TqbXtRbPiPx5Rr6O7puI/6fioWTGa4j+0oKIPp43iP39InMUcgeI/SfCVe5J04j8UmI8xCGjiP98/ied9W+I/queCnfNO4j91j3xTaULiPz83dgnfNeI/Ct9vv1Qp4j/Vhml1yhziP6AuYytAEOI/a9Zc4bUD4j81flaXK/fhPwAmUE2h6uE/y81JAxfe4T+WdUO5jNHhP2EdPW8CxeE/K8U2JXi44T/2bDDb7avhP8EUKpFjn+E/jLwjR9mS4T9WZB39TobhPyEMF7PEeeE/7LMQaTpt4T+3WwofsGDhP4IDBNUlVOE/TKv9iptH4T8XU/dAETvhP+L68PaGLuE/raLqrPwh4T94SuRichXhP0Ly3RjoCOE/DZrXzl384D/YQdGE0+/gP6PpyjpJ4+A/bpHE8L7W4D84Ob6mNMrgPwPht1yqveA/zoixEiCx4D+ZMKvIlaTgP2TYpH4LmOA/LoCeNIGL4D/5J5jq9n7gP8TPkaBscuA/j3eLVuJl4D9aH4UMWFngPyXHfsLNTOA/7254eENA4D+6FnIuuTPgP4W+a+QuJ+A/UGZlmqQa4D8bDl9QGg7gP+W1WAaQAeA/YLukeAvq3z/2Cpjk9tDfP4tai1Dit98/Iap+vM2e3z+2+XEouYXfP0xJZZSkbN8/4phYAJBT3z936EtsezrfPw04P9hmId8/oocyRFII3z841yWwPe/eP84mGRwp1t4/Y3YMiBS93j/5xf/z/6PeP44V81/rit4/JGXmy9Zx3j+5tNk3wljeP08EzaOtP94/5VPAD5km3j96o7N7hA3ePxDzpudv9N0/pUKaU1vb3T87ko2/RsLdP9HhgCsyqd0/ZjF0lx2Q3T/8gGcDCXfdP5HQWm/0Xd0/kdBab/Rd3T8=","dtype":"float64","order":"little","shape":[448]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTLr5/tBC9P1Muvn+0EL0/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","dtype":"float64","order":"little","shape":[448]}},"selected":{"id":"19669"},"selection_policy":{"id":"19668"}},"id":"19647","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"Tbu/pgYwyz8iHNnOL2LLP/d88vZYlMs/y90LH4LGyz+gPiVHq/jLP3WfPm/UKsw/SgBYl/1czD8fYXG/Jo/MP/PBiudPwcw/yCKkD3nzzD+dg703oiXNP3Lk1l/LV80/R0Xwh/SJzT8cpgmwHbzNP/AGI9hG7s0/xWc8AHAgzj+ayFUomVLOP28pb1DChM4/RIqIeOu2zj8Y66GgFOnOP+1Lu8g9G88/wqzU8GZNzz+XDe4YkH/PP2xuB0G5sc8/Qc8gaeLjzz8KGJ3IBQvQP3XIqVwaJNA/33i28C490D9KKcOEQ1bQP7TZzxhYb9A/HorcrGyI0D+JOulAgaHQP/Pq9dSVutA/XpsCaarT0D/ISw/9vuzQPzL8G5HTBdE/nawoJege0T8HXTW5/DfRP3ENQk0RUdE/3L1O4SVq0T9Gblt1OoPRP7EeaAlPnNE/G890nWO10T+Ff4ExeM7RP/AvjsWM59E/WuCaWaEA0j/FkKfttRnSPy9BtIHKMtI/mvHAFd9L0j8Eos2p82TSP25S2j0IftI/2QLn0RyX0j9Ds/NlMbDSP65jAPpFydI/GBQNjlri0j+CxBkib/vSP+10JraDFNM/VyUzSpgt0z/C1T/erEbTPyyGTHLBX9M/ljZZBtZ40z8B52Wa6pHTP2uXci7/qtM/1kd/whPE0z9A+ItWKN3TP6qomOo89tM/FVmlflEP1D9/CbISZijUP+q5vqZ6QdQ/VGrLOo9a1D++GtjOo3PUPynL5GK4jNQ/KcvkYriM1D8py+RiuIzUP74a2M6jc9Q/VGrLOo9a1D/qub6mekHUP38JshJmKNQ/FVmlflEP1D+qqJjqPPbTP0D4i1Yo3dM/1kd/whPE0z9rl3Iu/6rTPwHnZZrqkdM/ljZZBtZ40z8shkxywV/TP8LVP96sRtM/VyUzSpgt0z/tdCa2gxTTP4LEGSJv+9I/GBQNjlri0j+uYwD6RcnSP0Oz82UxsNI/2QLn0RyX0j9uUto9CH7SPwSizanzZNI/mvHAFd9L0j8vQbSByjLSP8WQp+21GdI/WuCaWaEA0j/wL47FjOfRP4V/gTF4ztE/G890nWO10T+xHmgJT5zRP0ZuW3U6g9E/3L1O4SVq0T9xDUJNEVHRPwddNbn8N9E/nawoJege0T8y/BuR0wXRP8hLD/2+7NA/XpsCaarT0D/z6vXUlbrQP4k66UCBodA/HorcrGyI0D+02c8YWG/QP0opw4RDVtA/33i28C490D91yKlcGiTQPwoYncgFC9A/Qc8gaeLjzz9sbgdBubHPP5cN7hiQf88/wqzU8GZNzz/tS7vIPRvPPxjroaAU6c4/RIqIeOu2zj9vKW9QwoTOP5rIVSiZUs4/xWc8AHAgzj/wBiPYRu7NPxymCbAdvM0/R0Xwh/SJzT9y5NZfy1fNP52DvTeiJc0/yCKkD3nzzD/zwYrnT8HMPx9hcb8mj8w/SgBYl/1czD91nz5v1CrMP6A+JUer+Ms/y90LH4LGyz/3fPL2WJTLPyIc2c4vYss/Tbu/pgYwyz9Nu7+mBjDLPw==","dtype":"float64","order":"little","shape":[146]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAil6knBAuAUCKXqScEC4BQKIoaN98LwFAWnPQqCowAUB9VhNuzzEBQOpjnxP0MgFAcXLn2ps0AUBDiPYSWDYBQNgrhsFfNwFAhkRIW5I4AUAh6rz0dDoBQDhnNxjJPAFAaWGxnPY+AUCpsFxHKEEBQMTg1U1lQwFA1OrQ8qpGAUB50yUjUkoBQIWApT06TgFAjGxxCwxTAUBumcuteVgBQPqpiUUTXgFAcAH+NApkAUAeGJZyjmoBQBuGrJrJcQFAeFj1rZB5AUA7h2yA6oEBQIkq0oPXigFAEjaIjkaUAUCFbmV1550BQOe052C/qAFApcad0NGyAUAjGbKBZr4BQHsv2n70yQFA5pXrk8bWAUAMBYk0WeMBQCI1EpEB8QFAIdp1Ueb9AUDonKqwSAsCQGlhKp/wGAJA1GTI3J8mAkAOus3IgTQCQEDzAl3/QgJA/GIff+1QAkBfTCzD/F4CQAfcRIA6bQJArlbE0v17AkBupzhK7okCQO/OBxwLmAJAc2JskcqlAkBFVJkebbMCQJhUYGzfwAJAYwb7trTNAkDH87KT2dkCQFCgzsj75AJA17O4ZjXwAkBBQXlJyvoCQHD4QPwoBQNAsxOnzRsOA0DTTvUKPhYDQKDsHHBgHQNAPJpxrJwjA0DqhCWbLikDQKe8DReULQNAvSPtg0IxA0CGtt/ogDMDQLy4KnXFNANA0blJmo80A0C2khLOKDMDQDzYlA2uMANA20jqIBYtA0CUN4AXsCcDQMYDUmpqIQNATRDAF4oZA0AAAAAAAAAAAA==","dtype":"float64","order":"little","shape":[146]}},"selected":{"id":"19665"},"selection_policy":{"id":"19664"}},"id":"19637","type":"ColumnDataSource"},{"attributes":{},"id":"19616","type":"WheelZoomTool"},{"attributes":{},"id":"19653","type":"Title"}],"root_ids":["19674"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"d91a4d96-d9f3-40d5-a732-15c3d531a5c0","root_ids":["19674"],"roots":{"19674":"df120395-367c-4cf4-bd99-0d2cba546667"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();