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
    
      
      
    
      var element = document.getElementById("337d784e-83bd-47a4-8206-c58b314d91c3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '337d784e-83bd-47a4-8206-c58b314d91c3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a24a11a4-c813-429a-817d-628d48455ff1":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"source":{"id":"40770"}},"id":"40774","type":"CDSView"},{"attributes":{},"id":"40794","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40777","type":"VBar"},{"attributes":{"data_source":{"id":"40770"},"glyph":{"id":"40771"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40772"},"view":{"id":"40774"}},"id":"40773","type":"GlyphRenderer"},{"attributes":{},"id":"40661","type":"DataRange1d"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40818"},"selection_policy":{"id":"40817"}},"id":"40776","type":"ColumnDataSource"},{"attributes":{},"id":"40795","type":"Selection"},{"attributes":{},"id":"40811","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40720","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40685","type":"BoxAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40788"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40789"},"ticker":{"id":"40670"}},"id":"40669","type":"LinearAxis"},{"attributes":{},"id":"40812","type":"Selection"},{"attributes":{},"id":"40796","type":"UnionRenderers"},{"attributes":{"below":[{"id":"40669"}],"center":[{"id":"40672"},{"id":"40676"},{"id":"40735"},{"id":"40741"},{"id":"40747"},{"id":"40753"}],"height":331,"left":[{"id":"40673"}],"output_backend":"webgl","renderers":[{"id":"40733"},{"id":"40739"},{"id":"40745"},{"id":"40751"}],"title":{"id":"40756"},"toolbar":{"id":"40687"},"toolbar_location":null,"width":496,"x_range":{"id":"40661"},"x_scale":{"id":"40665"},"y_range":{"id":"40663"},"y_scale":{"id":"40667"}},"id":"40660","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"40797","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40686","type":"PolyAnnotation"},{"attributes":{},"id":"40813","type":"UnionRenderers"},{"attributes":{"children":[{"id":"40822"},{"id":"40820"}]},"id":"40823","type":"Column"},{"attributes":{"ticks":[0,1,2,3]},"id":"40754","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40795"},"selection_policy":{"id":"40794"}},"id":"40730","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"40669"},"ticker":null},"id":"40672","type":"Grid"},{"attributes":{},"id":"40788","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"40677"},{"id":"40678"},{"id":"40679"},{"id":"40680"},{"id":"40681"},{"id":"40682"},{"id":"40683"},{"id":"40684"}]},"id":"40687","type":"Toolbar"},{"attributes":{},"id":"40814","type":"Selection"},{"attributes":{},"id":"40680","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"40685"}},"id":"40679","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40738","type":"VBar"},{"attributes":{},"id":"40798","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40732","type":"VBar"},{"attributes":{"source":{"id":"40730"}},"id":"40734","type":"CDSView"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40775","type":"Span"},{"attributes":{},"id":"40789","type":"AllLabels"},{"attributes":{},"id":"40682","type":"UndoTool"},{"attributes":{"data_source":{"id":"40730"},"glyph":{"id":"40731"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40732"},"view":{"id":"40734"}},"id":"40733","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40736"}},"id":"40740","type":"CDSView"},{"attributes":{},"id":"40799","type":"Selection"},{"attributes":{},"id":"40683","type":"SaveTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40737","type":"VBar"},{"attributes":{"axis":{"id":"40673"},"dimension":1,"ticker":null},"id":"40676","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40797"},"selection_policy":{"id":"40796"}},"id":"40736","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"40686"}},"id":"40681","type":"LassoSelectTool"},{"attributes":{},"id":"40815","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40741","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40743","type":"VBar"},{"attributes":{"axis":{"id":"40703"},"ticker":null},"id":"40706","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40749","type":"VBar"},{"attributes":{"data_source":{"id":"40736"},"glyph":{"id":"40737"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40738"},"view":{"id":"40740"}},"id":"40739","type":"GlyphRenderer"},{"attributes":{},"id":"40805","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"40821"},"toolbar_location":"above"},"id":"40822","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"40718","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40747","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40807"},"major_label_policy":{"id":"40808"},"ticker":{"id":"40782"}},"id":"40707","type":"LinearAxis"},{"attributes":{"source":{"id":"40742"}},"id":"40746","type":"CDSView"},{"attributes":{},"id":"40816","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40805"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40806"},"ticker":{"id":"40704"}},"id":"40703","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40799"},"selection_policy":{"id":"40798"}},"id":"40742","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40744","type":"VBar"},{"attributes":{},"id":"40704","type":"BasicTicker"},{"attributes":{},"id":"40800","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"40660"},0,0],[{"id":"40696"},0,1]]},"id":"40820","type":"GridBox"},{"attributes":{},"id":"40806","type":"AllLabels"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40735","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40759","type":"VBar"},{"attributes":{},"id":"40665","type":"LinearScale"},{"attributes":{},"id":"40701","type":"LinearScale"},{"attributes":{"data_source":{"id":"40742"},"glyph":{"id":"40743"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40744"},"view":{"id":"40746"}},"id":"40745","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"40756","type":"Title"},{"attributes":{},"id":"40663","type":"DataRange1d"},{"attributes":{},"id":"40790","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40790"},"major_label_policy":{"id":"40791"},"ticker":{"id":"40754"}},"id":"40673","type":"LinearAxis"},{"attributes":{},"id":"40699","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40753","type":"Span"},{"attributes":{"axis":{"id":"40707"},"dimension":1,"ticker":null},"id":"40710","type":"Grid"},{"attributes":{"source":{"id":"40748"}},"id":"40752","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40731","type":"VBar"},{"attributes":{},"id":"40801","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40801"},"selection_policy":{"id":"40800"}},"id":"40748","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"40719"}},"id":"40713","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40750","type":"VBar"},{"attributes":{},"id":"40712","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40719","type":"BoxAnnotation"},{"attributes":{},"id":"40711","type":"ResetTool"},{"attributes":{},"id":"40791","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40760","type":"VBar"},{"attributes":{},"id":"40817","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"40748"},"glyph":{"id":"40749"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40750"},"view":{"id":"40752"}},"id":"40751","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"40776"},"glyph":{"id":"40777"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40778"},"view":{"id":"40780"}},"id":"40779","type":"GlyphRenderer"},{"attributes":{},"id":"40717","type":"SaveTool"},{"attributes":{"source":{"id":"40758"}},"id":"40762","type":"CDSView"},{"attributes":{},"id":"40714","type":"WheelZoomTool"},{"attributes":{},"id":"40678","type":"PanTool"},{"attributes":{"overlay":{"id":"40720"}},"id":"40715","type":"LassoSelectTool"},{"attributes":{},"id":"40716","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"40711"},{"id":"40712"},{"id":"40713"},{"id":"40714"},{"id":"40715"},{"id":"40716"},{"id":"40717"},{"id":"40718"}]},"id":"40721","type":"Toolbar"},{"attributes":{"ticks":[0,1,2,3]},"id":"40782","type":"FixedTicker"},{"attributes":{},"id":"40807","type":"BasicTickFormatter"},{"attributes":{},"id":"40818","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40812"},"selection_policy":{"id":"40811"}},"id":"40758","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40776"}},"id":"40780","type":"CDSView"},{"attributes":{},"id":"40670","type":"BasicTicker"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40763","type":"Span"},{"attributes":{},"id":"40667","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40781","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40766","type":"VBar"},{"attributes":{},"id":"40677","type":"ResetTool"},{"attributes":{"data_source":{"id":"40758"},"glyph":{"id":"40759"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40760"},"view":{"id":"40762"}},"id":"40761","type":"GlyphRenderer"},{"attributes":{},"id":"40808","type":"AllLabels"},{"attributes":{"source":{"id":"40764"}},"id":"40768","type":"CDSView"},{"attributes":{"text":"mu"},"id":"40784","type":"Title"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40765","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40814"},"selection_policy":{"id":"40813"}},"id":"40764","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40769","type":"Span"},{"attributes":{"toolbars":[{"id":"40687"},{"id":"40721"}],"tools":[{"id":"40677"},{"id":"40678"},{"id":"40679"},{"id":"40680"},{"id":"40681"},{"id":"40682"},{"id":"40683"},{"id":"40684"},{"id":"40711"},{"id":"40712"},{"id":"40713"},{"id":"40714"},{"id":"40715"},{"id":"40716"},{"id":"40717"},{"id":"40718"}]},"id":"40821","type":"ProxyToolbar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40772","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40778","type":"VBar"},{"attributes":{"below":[{"id":"40703"}],"center":[{"id":"40706"},{"id":"40710"},{"id":"40763"},{"id":"40769"},{"id":"40775"},{"id":"40781"}],"height":331,"left":[{"id":"40707"}],"output_backend":"webgl","renderers":[{"id":"40761"},{"id":"40767"},{"id":"40773"},{"id":"40779"}],"title":{"id":"40784"},"toolbar":{"id":"40721"},"toolbar_location":null,"width":496,"x_range":{"id":"40661"},"x_scale":{"id":"40699"},"y_range":{"id":"40663"},"y_scale":{"id":"40701"}},"id":"40696","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"40764"},"glyph":{"id":"40765"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40766"},"view":{"id":"40768"}},"id":"40767","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40771","type":"VBar"},{"attributes":{"callback":null},"id":"40684","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40816"},"selection_policy":{"id":"40815"}},"id":"40770","type":"ColumnDataSource"}],"root_ids":["40823"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"a24a11a4-c813-429a-817d-628d48455ff1","root_ids":["40823"],"roots":{"40823":"337d784e-83bd-47a4-8206-c58b314d91c3"}}];
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