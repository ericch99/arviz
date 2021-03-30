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
    
      
      
    
      var element = document.getElementById("f3dde9aa-b9ae-4acc-88b9-eff5d7a68022");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3dde9aa-b9ae-4acc-88b9-eff5d7a68022' but no matching script tag was found.")
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
                    
                  var docs_json = '{"64082801-8888-4a5c-8588-aacf0278c772":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15056"},"selection_policy":{"id":"15055"}},"id":"15032","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"14974"},0,0]]},"id":"15058","type":"GridBox"},{"attributes":{"callback":null},"id":"14998","type":"HoverTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15033","type":"Circle"},{"attributes":{},"id":"15054","type":"Selection"},{"attributes":{},"id":"14996","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15024","type":"Circle"},{"attributes":{"active_multi":null,"tools":[{"id":"14991"},{"id":"14992"},{"id":"14993"},{"id":"14994"},{"id":"14995"},{"id":"14996"},{"id":"14997"},{"id":"14998"}]},"id":"15001","type":"Toolbar"},{"attributes":{},"id":"15056","type":"Selection"},{"attributes":{"axis":{"id":"14983"},"ticker":null},"id":"14986","type":"Grid"},{"attributes":{"overlay":{"id":"15000"}},"id":"14995","type":"LassoSelectTool"},{"attributes":{},"id":"15043","type":"BasicTickFormatter"},{"attributes":{},"id":"14981","type":"LinearScale"},{"attributes":{"axis":{"id":"14987"},"dimension":1,"ticker":null},"id":"14990","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14999","type":"BoxAnnotation"},{"attributes":{},"id":"14975","type":"DataRange1d"},{"attributes":{"data_source":{"id":"15012"},"glyph":{"id":"15013"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15014"},"view":{"id":"15016"}},"id":"15015","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"14983"}],"center":[{"id":"14986"},{"id":"14990"}],"height":500,"left":[{"id":"14987"}],"output_backend":"webgl","renderers":[{"id":"15015"},{"id":"15020"},{"id":"15025"},{"id":"15030"},{"id":"15035"},{"id":"15037"}],"title":{"id":"15039"},"toolbar":{"id":"15001"},"toolbar_location":null,"width":500,"x_range":{"id":"14975"},"x_scale":{"id":"14979"},"y_range":{"id":"14977"},"y_scale":{"id":"14981"}},"id":"14974","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15014","type":"Scatter"},{"attributes":{"data_source":{"id":"15032"},"glyph":{"id":"15033"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15034"},"view":{"id":"15036"}},"id":"15035","type":"GlyphRenderer"},{"attributes":{},"id":"15041","type":"BasicTickFormatter"},{"attributes":{},"id":"15039","type":"Title"},{"attributes":{},"id":"15053","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"15027"},"glyph":{"id":"15028"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15029"},"view":{"id":"15031"}},"id":"15030","type":"GlyphRenderer"},{"attributes":{},"id":"14984","type":"BasicTicker"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15050"},"selection_policy":{"id":"15049"}},"id":"15017","type":"ColumnDataSource"},{"attributes":{"source":{"id":"15017"}},"id":"15021","type":"CDSView"},{"attributes":{"data_source":{"id":"15022"},"glyph":{"id":"15023"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15024"},"view":{"id":"15026"}},"id":"15025","type":"GlyphRenderer"},{"attributes":{},"id":"15048","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15052"},"selection_policy":{"id":"15051"}},"id":"15022","type":"ColumnDataSource"},{"attributes":{"source":{"id":"15032"}},"id":"15036","type":"CDSView"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15018","type":"MultiLine"},{"attributes":{"source":{"id":"15027"}},"id":"15031","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15034","type":"Circle"},{"attributes":{},"id":"15044","type":"AllLabels"},{"attributes":{"formatter":{"id":"15043"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15044"},"ticker":{"id":"15010"}},"id":"14987","type":"LinearAxis"},{"attributes":{},"id":"15049","type":"UnionRenderers"},{"attributes":{},"id":"14997","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15029","type":"MultiLine"},{"attributes":{"overlay":{"id":"14999"}},"id":"14993","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"15059"},"toolbar_location":"above"},"id":"15060","type":"ToolbarBox"},{"attributes":{},"id":"15047","type":"UnionRenderers"},{"attributes":{"source":{"id":"15022"}},"id":"15026","type":"CDSView"},{"attributes":{},"id":"15051","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"15001"}],"tools":[{"id":"14991"},{"id":"14992"},{"id":"14993"},{"id":"14994"},{"id":"14995"},{"id":"14996"},{"id":"14997"},{"id":"14998"}]},"id":"15059","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"15060"},{"id":"15058"}]},"id":"15061","type":"Column"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15010","type":"FixedTicker"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15037","type":"Span"},{"attributes":{},"id":"14979","type":"LinearScale"},{"attributes":{},"id":"14991","type":"ResetTool"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15028","type":"MultiLine"},{"attributes":{},"id":"15052","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15048"},"selection_policy":{"id":"15047"}},"id":"15012","type":"ColumnDataSource"},{"attributes":{"end":0.5,"start":-1.5},"id":"14977","type":"DataRange1d"},{"attributes":{},"id":"14994","type":"WheelZoomTool"},{"attributes":{"axis_label":"Log","formatter":{"id":"15041"},"major_label_policy":{"id":"15042"},"ticker":{"id":"14984"}},"id":"14983","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15000","type":"PolyAnnotation"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15054"},"selection_policy":{"id":"15053"}},"id":"15027","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15023","type":"Circle"},{"attributes":{},"id":"14992","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15019","type":"MultiLine"},{"attributes":{"data_source":{"id":"15017"},"glyph":{"id":"15018"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15019"},"view":{"id":"15021"}},"id":"15020","type":"GlyphRenderer"},{"attributes":{},"id":"15055","type":"UnionRenderers"},{"attributes":{"source":{"id":"15012"}},"id":"15016","type":"CDSView"},{"attributes":{},"id":"15042","type":"AllLabels"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15013","type":"Scatter"},{"attributes":{},"id":"15050","type":"Selection"}],"root_ids":["15061"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"64082801-8888-4a5c-8588-aacf0278c772","root_ids":["15061"],"roots":{"15061":"f3dde9aa-b9ae-4acc-88b9-eff5d7a68022"}}];
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