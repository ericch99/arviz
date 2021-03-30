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
    
      
      
    
      var element = document.getElementById("728f52c9-22a0-4b39-9491-8c66870fd1d5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '728f52c9-22a0-4b39-9491-8c66870fd1d5' but no matching script tag was found.")
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
                    
                  var docs_json = '{"be585567-95fc-4683-92dc-ca2da771e0aa":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data_source":{"id":"35506"},"glyph":{"id":"35505"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35508"}},"id":"35507","type":"GlyphRenderer"},{"attributes":{},"id":"35448","type":"SaveTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35502","type":"Span"},{"attributes":{},"id":"35531","type":"AllLabels"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35503","type":"Span"},{"attributes":{"text":"tau"},"id":"35509","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35513","type":"Circle"},{"attributes":{"active_multi":null,"tools":[{"id":"35478"},{"id":"35479"},{"id":"35480"},{"id":"35481"},{"id":"35482"},{"id":"35483"},{"id":"35484"},{"id":"35485"}]},"id":"35488","type":"Toolbar"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35504","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35537"},"selection_policy":{"id":"35536"}},"id":"35506","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35506"}},"id":"35508","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35516","type":"Span"},{"attributes":{"axis":{"id":"35438"},"dimension":1,"ticker":null},"id":"35441","type":"Grid"},{"attributes":{},"id":"35430","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35512","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35549"},"selection_policy":{"id":"35548"}},"id":"35511","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35520"},"glyph":{"id":"35519"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35522"}},"id":"35521","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"35555"},{"id":"35553"}]},"id":"35556","type":"Column"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35517","type":"Span"},{"attributes":{},"id":"35435","type":"BasicTicker"},{"attributes":{"overlay":{"id":"35451"}},"id":"35446","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"35511"},"glyph":{"id":"35512"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35513"},"view":{"id":"35515"}},"id":"35514","type":"GlyphRenderer"},{"attributes":{},"id":"35544","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"35511"}},"id":"35515","type":"CDSView"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35551"},"selection_policy":{"id":"35550"}},"id":"35520","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"35470"}],"center":[{"id":"35473"},{"id":"35477"}],"height":500,"left":[{"id":"35474"}],"output_backend":"webgl","renderers":[{"id":"35514"},{"id":"35516"},{"id":"35517"},{"id":"35518"},{"id":"35521"}],"title":{"id":"35523"},"toolbar":{"id":"35488"},"toolbar_location":null,"width":500,"x_range":{"id":"35462"},"x_scale":{"id":"35466"},"y_range":{"id":"35464"},"y_scale":{"id":"35468"}},"id":"35461","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35541"},"major_label_policy":{"id":"35542"},"ticker":{"id":"35471"}},"id":"35470","type":"LinearAxis"},{"attributes":{"callback":null},"id":"35449","type":"HoverTool"},{"attributes":{"end":1,"start":-0.05},"id":"35464","type":"DataRange1d"},{"attributes":{},"id":"35534","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35499","type":"Circle"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35544"},"major_label_policy":{"id":"35545"},"ticker":{"id":"35475"}},"id":"35474","type":"LinearAxis"},{"attributes":{},"id":"35545","type":"AllLabels"},{"attributes":{"text":"mu"},"id":"35523","type":"Title"},{"attributes":{},"id":"35466","type":"LinearScale"},{"attributes":{"below":[{"id":"35434"}],"center":[{"id":"35437"},{"id":"35441"}],"height":500,"left":[{"id":"35438"}],"output_backend":"webgl","renderers":[{"id":"35500"},{"id":"35502"},{"id":"35503"},{"id":"35504"},{"id":"35507"}],"title":{"id":"35509"},"toolbar":{"id":"35452"},"toolbar_location":null,"width":500,"x_range":{"id":"35426"},"x_scale":{"id":"35430"},"y_range":{"id":"35428"},"y_scale":{"id":"35432"}},"id":"35425","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"35452"},{"id":"35488"}],"tools":[{"id":"35442"},{"id":"35443"},{"id":"35444"},{"id":"35445"},{"id":"35446"},{"id":"35447"},{"id":"35448"},{"id":"35449"},{"id":"35478"},{"id":"35479"},{"id":"35480"},{"id":"35481"},{"id":"35482"},{"id":"35483"},{"id":"35484"},{"id":"35485"}]},"id":"35554","type":"ProxyToolbar"},{"attributes":{},"id":"35468","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35518","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35535"},"selection_policy":{"id":"35534"}},"id":"35497","type":"ColumnDataSource"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35519","type":"Scatter"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35530"},"major_label_policy":{"id":"35531"},"ticker":{"id":"35439"}},"id":"35438","type":"LinearAxis"},{"attributes":{"source":{"id":"35520"}},"id":"35522","type":"CDSView"},{"attributes":{},"id":"35471","type":"BasicTicker"},{"attributes":{},"id":"35535","type":"Selection"},{"attributes":{"axis":{"id":"35470"},"ticker":null},"id":"35473","type":"Grid"},{"attributes":{"toolbar":{"id":"35554"},"toolbar_location":"above"},"id":"35555","type":"ToolbarBox"},{"attributes":{},"id":"35447","type":"UndoTool"},{"attributes":{"axis":{"id":"35474"},"dimension":1,"ticker":null},"id":"35477","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35498","type":"Circle"},{"attributes":{},"id":"35475","type":"BasicTicker"},{"attributes":{},"id":"35536","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"35486"}},"id":"35480","type":"BoxZoomTool"},{"attributes":{},"id":"35479","type":"PanTool"},{"attributes":{},"id":"35478","type":"ResetTool"},{"attributes":{},"id":"35443","type":"PanTool"},{"attributes":{},"id":"35481","type":"WheelZoomTool"},{"attributes":{},"id":"35537","type":"Selection"},{"attributes":{"overlay":{"id":"35487"}},"id":"35482","type":"LassoSelectTool"},{"attributes":{},"id":"35483","type":"UndoTool"},{"attributes":{},"id":"35462","type":"DataRange1d"},{"attributes":{"axis":{"id":"35434"},"ticker":null},"id":"35437","type":"Grid"},{"attributes":{},"id":"35432","type":"LinearScale"},{"attributes":{},"id":"35442","type":"ResetTool"},{"attributes":{"overlay":{"id":"35450"}},"id":"35444","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35486","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"35497"},"glyph":{"id":"35498"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35499"},"view":{"id":"35501"}},"id":"35500","type":"GlyphRenderer"},{"attributes":{},"id":"35548","type":"UnionRenderers"},{"attributes":{},"id":"35527","type":"BasicTickFormatter"},{"attributes":{},"id":"35445","type":"WheelZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35527"},"major_label_policy":{"id":"35528"},"ticker":{"id":"35435"}},"id":"35434","type":"LinearAxis"},{"attributes":{},"id":"35439","type":"BasicTicker"},{"attributes":{},"id":"35549","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"35442"},{"id":"35443"},{"id":"35444"},{"id":"35445"},{"id":"35446"},{"id":"35447"},{"id":"35448"},{"id":"35449"}]},"id":"35452","type":"Toolbar"},{"attributes":{},"id":"35528","type":"AllLabels"},{"attributes":{},"id":"35426","type":"DataRange1d"},{"attributes":{"children":[[{"id":"35425"},0,0],[{"id":"35461"},0,1]]},"id":"35553","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35487","type":"PolyAnnotation"},{"attributes":{},"id":"35550","type":"UnionRenderers"},{"attributes":{},"id":"35484","type":"SaveTool"},{"attributes":{},"id":"35542","type":"AllLabels"},{"attributes":{"callback":null},"id":"35485","type":"HoverTool"},{"attributes":{},"id":"35551","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35450","type":"BoxAnnotation"},{"attributes":{},"id":"35530","type":"BasicTickFormatter"},{"attributes":{"end":1,"start":-0.05},"id":"35428","type":"DataRange1d"},{"attributes":{},"id":"35541","type":"BasicTickFormatter"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35505","type":"Scatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35451","type":"PolyAnnotation"},{"attributes":{"source":{"id":"35497"}},"id":"35501","type":"CDSView"}],"root_ids":["35556"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"be585567-95fc-4683-92dc-ca2da771e0aa","root_ids":["35556"],"roots":{"35556":"728f52c9-22a0-4b39-9491-8c66870fd1d5"}}];
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