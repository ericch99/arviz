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
    
      
      
    
      var element = document.getElementById("ba48e1bc-c50a-4d7b-87e1-109c2b8f0633");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ba48e1bc-c50a-4d7b-87e1-109c2b8f0633' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a38fba32-d631-4b67-9e6a-2e8adb4fecfd":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"callback":null},"id":"17704","type":"HoverTool"},{"attributes":{"below":[{"id":"17689"}],"center":[{"id":"17692"},{"id":"17696"}],"height":500,"left":[{"id":"17693"}],"output_backend":"webgl","renderers":[{"id":"17719"},{"id":"17723"},{"id":"17725"},{"id":"17726"}],"title":{"id":"17727"},"toolbar":{"id":"17707"},"toolbar_location":null,"width":500,"x_range":{"id":"17681"},"x_scale":{"id":"17685"},"y_range":{"id":"17683"},"y_scale":{"id":"17687"}},"id":"17680","subtype":"Figure","type":"Plot"},{"attributes":{"text":"mu"},"id":"17727","type":"Title"},{"attributes":{},"id":"17681","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17717","type":"Circle"},{"attributes":{"active_multi":null,"tools":[{"id":"17697"},{"id":"17698"},{"id":"17699"},{"id":"17700"},{"id":"17701"},{"id":"17702"},{"id":"17703"},{"id":"17704"}]},"id":"17707","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"17707"}],"tools":[{"id":"17697"},{"id":"17698"},{"id":"17699"},{"id":"17700"},{"id":"17701"},{"id":"17702"},{"id":"17703"},{"id":"17704"}]},"id":"17744","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"17744"},"toolbar_location":"above"},"id":"17745","type":"ToolbarBox"},{"attributes":{"axis":{"id":"17689"},"ticker":null},"id":"17692","type":"Grid"},{"attributes":{},"id":"17683","type":"DataRange1d"},{"attributes":{"children":[[{"id":"17680"},0,0]]},"id":"17743","type":"GridBox"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17721","type":"Scatter"},{"attributes":{},"id":"17734","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17722"},"glyph":{"id":"17721"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17724"}},"id":"17723","type":"GlyphRenderer"},{"attributes":{},"id":"17694","type":"BasicTicker"},{"attributes":{},"id":"17741","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17705","type":"BoxAnnotation"},{"attributes":{},"id":"17690","type":"BasicTicker"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17734"},"major_label_policy":{"id":"17735"},"ticker":{"id":"17694"}},"id":"17693","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17739"},"selection_policy":{"id":"17738"}},"id":"17716","type":"ColumnDataSource"},{"attributes":{},"id":"17731","type":"BasicTickFormatter"},{"attributes":{},"id":"17697","type":"ResetTool"},{"attributes":{"source":{"id":"17722"}},"id":"17724","type":"CDSView"},{"attributes":{"axis":{"id":"17693"},"dimension":1,"ticker":null},"id":"17696","type":"Grid"},{"attributes":{},"id":"17698","type":"PanTool"},{"attributes":{},"id":"17702","type":"UndoTool"},{"attributes":{"source":{"id":"17716"}},"id":"17720","type":"CDSView"},{"attributes":{"overlay":{"id":"17705"}},"id":"17699","type":"BoxZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17731"},"major_label_policy":{"id":"17732"},"ticker":{"id":"17690"}},"id":"17689","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17716"},"glyph":{"id":"17717"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17718"},"view":{"id":"17720"}},"id":"17719","type":"GlyphRenderer"},{"attributes":{},"id":"17700","type":"WheelZoomTool"},{"attributes":{},"id":"17703","type":"SaveTool"},{"attributes":{"children":[{"id":"17745"},{"id":"17743"}]},"id":"17746","type":"Column"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17726","type":"Span"},{"attributes":{},"id":"17732","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17718","type":"Circle"},{"attributes":{},"id":"17735","type":"AllLabels"},{"attributes":{},"id":"17738","type":"UnionRenderers"},{"attributes":{},"id":"17739","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17706","type":"PolyAnnotation"},{"attributes":{},"id":"17687","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17741"},"selection_policy":{"id":"17740"}},"id":"17722","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17725","type":"Span"},{"attributes":{},"id":"17685","type":"LinearScale"},{"attributes":{},"id":"17740","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17706"}},"id":"17701","type":"LassoSelectTool"}],"root_ids":["17746"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"a38fba32-d631-4b67-9e6a-2e8adb4fecfd","root_ids":["17746"],"roots":{"17746":"ba48e1bc-c50a-4d7b-87e1-109c2b8f0633"}}];
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