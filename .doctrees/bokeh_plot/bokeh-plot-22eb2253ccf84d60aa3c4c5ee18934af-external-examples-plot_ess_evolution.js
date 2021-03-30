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
    
      
      
    
      var element = document.getElementById("9d9eb3f9-0f61-42aa-a032-a21e010962b5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9d9eb3f9-0f61-42aa-a032-a21e010962b5' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e9c1194c-a940-41e8-b29b-600a14a3126f":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"17604","type":"Selection"},{"attributes":{"data_source":{"id":"17579"},"glyph":{"id":"17580"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17581"},"view":{"id":"17583"}},"id":"17582","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17564"}},"id":"17568","type":"CDSView"},{"attributes":{},"id":"17531","type":"DataRange1d"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17582"},{"id":"17577"}]},"id":"17587","type":"LegendItem"},{"attributes":{},"id":"17599","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17604"},"selection_policy":{"id":"17603"}},"id":"17574","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17606"},"selection_policy":{"id":"17605"}},"id":"17579","type":"ColumnDataSource"},{"attributes":{},"id":"17593","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17553","type":"BoxAnnotation"},{"attributes":{},"id":"17603","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17581","type":"Circle"},{"attributes":{"toolbar":{"id":"17609"},"toolbar_location":"above"},"id":"17610","type":"ToolbarBox"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17575","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17566","type":"Circle"},{"attributes":{},"id":"17538","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17553"}},"id":"17547","type":"BoxZoomTool"},{"attributes":{},"id":"17596","type":"AllLabels"},{"attributes":{},"id":"17605","type":"UnionRenderers"},{"attributes":{},"id":"17546","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17565","type":"Circle"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17584","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17554","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17580","type":"Circle"},{"attributes":{},"id":"17595","type":"BasicTickFormatter"},{"attributes":{},"id":"17545","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17600"},"selection_policy":{"id":"17599"}},"id":"17564","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17571","type":"Line"},{"attributes":{},"id":"17533","type":"LinearScale"},{"attributes":{},"id":"17535","type":"LinearScale"},{"attributes":{"data_source":{"id":"17569"},"glyph":{"id":"17570"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17571"},"view":{"id":"17573"}},"id":"17572","type":"GlyphRenderer"},{"attributes":{"text":"b"},"id":"17588","type":"Title"},{"attributes":{"data_source":{"id":"17574"},"glyph":{"id":"17575"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17576"},"view":{"id":"17578"}},"id":"17577","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17569"}},"id":"17573","type":"CDSView"},{"attributes":{"source":{"id":"17579"}},"id":"17583","type":"CDSView"},{"attributes":{"axis":{"id":"17537"},"ticker":null},"id":"17540","type":"Grid"},{"attributes":{},"id":"17600","type":"Selection"},{"attributes":{},"id":"17551","type":"SaveTool"},{"attributes":{"source":{"id":"17574"}},"id":"17578","type":"CDSView"},{"attributes":{},"id":"17602","type":"Selection"},{"attributes":{},"id":"17529","type":"DataRange1d"},{"attributes":{"children":[{"id":"17610"},{"id":"17608"}]},"id":"17611","type":"Column"},{"attributes":{"click_policy":"hide","items":[{"id":"17586"},{"id":"17587"}],"location":"center_right","orientation":"horizontal"},"id":"17585","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17576","type":"Line"},{"attributes":{"overlay":{"id":"17554"}},"id":"17549","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17602"},"selection_policy":{"id":"17601"}},"id":"17569","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"17545"},{"id":"17546"},{"id":"17547"},{"id":"17548"},{"id":"17549"},{"id":"17550"},{"id":"17551"},{"id":"17552"}]},"id":"17555","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"17555"}],"tools":[{"id":"17545"},{"id":"17546"},{"id":"17547"},{"id":"17548"},{"id":"17549"},{"id":"17550"},{"id":"17551"},{"id":"17552"}]},"id":"17609","type":"ProxyToolbar"},{"attributes":{},"id":"17601","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17570","type":"Line"},{"attributes":{"above":[{"id":"17585"}],"below":[{"id":"17537"}],"center":[{"id":"17540"},{"id":"17544"}],"height":500,"left":[{"id":"17541"}],"output_backend":"webgl","renderers":[{"id":"17567"},{"id":"17572"},{"id":"17577"},{"id":"17582"},{"id":"17584"}],"title":{"id":"17588"},"toolbar":{"id":"17555"},"toolbar_location":null,"width":500,"x_range":{"id":"17529"},"x_scale":{"id":"17533"},"y_range":{"id":"17531"},"y_scale":{"id":"17535"}},"id":"17528","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17592"},"major_label_policy":{"id":"17593"},"ticker":{"id":"17538"}},"id":"17537","type":"LinearAxis"},{"attributes":{"children":[[{"id":"17528"},0,0]]},"id":"17608","type":"GridBox"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17567"},{"id":"17572"}]},"id":"17586","type":"LegendItem"},{"attributes":{},"id":"17542","type":"BasicTicker"},{"attributes":{},"id":"17592","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"17541"},"dimension":1,"ticker":null},"id":"17544","type":"Grid"},{"attributes":{},"id":"17606","type":"Selection"},{"attributes":{},"id":"17550","type":"UndoTool"},{"attributes":{"callback":null},"id":"17552","type":"HoverTool"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17595"},"major_label_policy":{"id":"17596"},"ticker":{"id":"17542"}},"id":"17541","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17564"},"glyph":{"id":"17565"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17566"},"view":{"id":"17568"}},"id":"17567","type":"GlyphRenderer"},{"attributes":{},"id":"17548","type":"WheelZoomTool"}],"root_ids":["17611"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"e9c1194c-a940-41e8-b29b-600a14a3126f","root_ids":["17611"],"roots":{"17611":"9d9eb3f9-0f61-42aa-a032-a21e010962b5"}}];
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