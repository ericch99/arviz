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
    
      
      
    
      var element = document.getElementById("79cf2e23-7392-4a10-beb7-711550142170");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '79cf2e23-7392-4a10-beb7-711550142170' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f3dc2995-2884-49b3-958d-80ea9a69f80e":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"source":{"id":"18004"}},"id":"18008","type":"CDSView"},{"attributes":{"data_source":{"id":"18049"},"glyph":{"id":"18050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18051"},"view":{"id":"18053"}},"id":"18052","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18105"},"selection_policy":{"id":"18104"}},"id":"18009","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18031","type":"Line"},{"attributes":{},"id":"18118","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"18109"},"selection_policy":{"id":"18108"}},"id":"18019","type":"ColumnDataSource"},{"attributes":{},"id":"18087","type":"Selection"},{"attributes":{"data_source":{"id":"18034"},"glyph":{"id":"18035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18036"},"view":{"id":"18038"}},"id":"18037","type":"GlyphRenderer"},{"attributes":{},"id":"18081","type":"Selection"},{"attributes":{},"id":"18103","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18040","type":"Circle"},{"attributes":{"source":{"id":"18019"}},"id":"18023","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18051","type":"Line"},{"attributes":{"data_source":{"id":"18024"},"glyph":{"id":"18025"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18026"},"view":{"id":"18028"}},"id":"18027","type":"GlyphRenderer"},{"attributes":{},"id":"18107","type":"Selection"},{"attributes":{"data_source":{"id":"18039"},"glyph":{"id":"18040"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18041"},"view":{"id":"18043"}},"id":"18042","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18117"},"selection_policy":{"id":"18116"}},"id":"18039","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18045","type":"Line"},{"attributes":{"source":{"id":"18044"}},"id":"18048","type":"CDSView"},{"attributes":{},"id":"18102","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18056","type":"Circle"},{"attributes":{},"id":"18085","type":"Selection"},{"attributes":{},"id":"18106","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18054"},"glyph":{"id":"18055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18056"},"view":{"id":"18058"}},"id":"18057","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18024"}},"id":"18028","type":"CDSView"},{"attributes":{"source":{"id":"18054"}},"id":"18058","type":"CDSView"},{"attributes":{"above":[{"id":"18065"}],"below":[{"id":"17912"}],"center":[{"id":"17915"},{"id":"17919"}],"height":348,"left":[{"id":"17916"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"17942"},{"id":"17947"},{"id":"17952"},{"id":"17957"},{"id":"17962"},{"id":"17967"},{"id":"17972"},{"id":"17977"},{"id":"17982"},{"id":"17987"},{"id":"17992"},{"id":"17997"},{"id":"18002"},{"id":"18007"},{"id":"18012"},{"id":"18017"},{"id":"18022"},{"id":"18027"},{"id":"18032"},{"id":"18037"},{"id":"18042"},{"id":"18047"},{"id":"18052"},{"id":"18057"}],"title":{"id":"18059"},"toolbar":{"id":"17930"},"toolbar_location":null,"width":450,"x_range":{"id":"18061"},"x_scale":{"id":"17908"},"y_range":{"id":"18062"},"y_scale":{"id":"17910"}},"id":"17903","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"18014"}},"id":"18018","type":"CDSView"},{"attributes":{},"id":"18105","type":"Selection"},{"attributes":{},"id":"18108","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18041","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18055","type":"Circle"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"18062","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18019"},"glyph":{"id":"18020"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18021"},"view":{"id":"18023"}},"id":"18022","type":"GlyphRenderer"},{"attributes":{},"id":"18080","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18111"},"selection_policy":{"id":"18110"}},"id":"18024","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18020","type":"Line"},{"attributes":{},"id":"18101","type":"Selection"},{"attributes":{},"id":"18123","type":"Selection"},{"attributes":{"source":{"id":"18034"}},"id":"18038","type":"CDSView"},{"attributes":{},"id":"18083","type":"Selection"},{"attributes":{},"id":"18109","type":"Selection"},{"attributes":{"toolbar":{"id":"18126"},"toolbar_location":"above"},"id":"18127","type":"ToolbarBox"},{"attributes":{},"id":"18086","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18026","type":"Circle"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"18121"},"selection_policy":{"id":"18120"}},"id":"18049","type":"ColumnDataSource"},{"attributes":{},"id":"18088","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18035","type":"Line"},{"attributes":{},"id":"18104","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"17930"}],"tools":[{"id":"17920"},{"id":"17921"},{"id":"17922"},{"id":"17923"},{"id":"17924"},{"id":"17925"},{"id":"17926"},{"id":"17927"}]},"id":"18126","type":"ProxyToolbar"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"18083"},"selection_policy":{"id":"18082"}},"id":"17954","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18046","type":"Line"},{"attributes":{},"id":"18082","type":"UnionRenderers"},{"attributes":{"source":{"id":"18039"}},"id":"18043","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18016","type":"Line"},{"attributes":{"source":{"id":"18049"}},"id":"18053","type":"CDSView"},{"attributes":{"ticks":[1.275]},"id":"18063","type":"FixedTicker"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18015","type":"Line"},{"attributes":{"bounds":"auto","min_interval":1},"id":"18061","type":"DataRange1d"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"18115"},"selection_policy":{"id":"18114"}},"id":"18034","type":"ColumnDataSource"},{"attributes":{},"id":"18070","type":"BasicTickFormatter"},{"attributes":{},"id":"18089","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18030","type":"Line"},{"attributes":{},"id":"18100","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18025","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18036","type":"Line"},{"attributes":{},"id":"18084","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18123"},"selection_policy":{"id":"18122"}},"id":"18054","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18050","type":"Line"},{"attributes":{},"id":"18119","type":"Selection"},{"attributes":{"data_source":{"id":"18044"},"glyph":{"id":"18045"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18046"},"view":{"id":"18048"}},"id":"18047","type":"GlyphRenderer"},{"attributes":{},"id":"18071","type":"AllLabels"},{"attributes":{"source":{"id":"18029"}},"id":"18033","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18021","type":"Line"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"18101"},"selection_policy":{"id":"18100"}},"id":"17999","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17954"},"glyph":{"id":"17955"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17956"},"view":{"id":"17958"}},"id":"17957","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17999"},"glyph":{"id":"18000"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18001"},"view":{"id":"18003"}},"id":"18002","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"18089"},"selection_policy":{"id":"18088"}},"id":"17969","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17984"}},"id":"17988","type":"CDSView"},{"attributes":{},"id":"18114","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17970","type":"Line"},{"attributes":{"data_source":{"id":"17989"},"glyph":{"id":"17990"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17991"},"view":{"id":"17993"}},"id":"17992","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"17920"},{"id":"17921"},{"id":"17922"},{"id":"17923"},{"id":"17924"},{"id":"17925"},{"id":"17926"},{"id":"17927"}]},"id":"17930","type":"Toolbar"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"18091"},"selection_policy":{"id":"18090"}},"id":"17974","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17975","type":"Line"},{"attributes":{"data_source":{"id":"17949"},"glyph":{"id":"17950"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17951"},"view":{"id":"17953"}},"id":"17952","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17929","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17941","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18081"},"selection_policy":{"id":"18080"}},"id":"17949","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17961","type":"Line"},{"attributes":{"data_source":{"id":"17944"},"glyph":{"id":"17945"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17946"},"view":{"id":"17948"}},"id":"17947","type":"GlyphRenderer"},{"attributes":{},"id":"18122","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17984"},"glyph":{"id":"17985"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17986"},"view":{"id":"17988"}},"id":"17987","type":"GlyphRenderer"},{"attributes":{"text":"94.0% HDI"},"id":"18059","type":"Title"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17940","type":"Line"},{"attributes":{},"id":"18094","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"17927","type":"HoverTool"},{"attributes":{"data":{},"selected":{"id":"18087"},"selection_policy":{"id":"18086"}},"id":"17964","type":"ColumnDataSource"},{"attributes":{},"id":"18113","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"17965","type":"Circle"},{"attributes":{},"id":"17926","type":"SaveTool"},{"attributes":{"data_source":{"id":"17974"},"glyph":{"id":"17975"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17976"},"view":{"id":"17978"}},"id":"17977","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"18072"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"18073"},"ticker":{"id":"18063"}},"id":"17916","type":"LinearAxis"},{"attributes":{},"id":"18076","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18014"},"glyph":{"id":"18015"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18016"},"view":{"id":"18018"}},"id":"18017","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17944"}},"id":"17948","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"17950","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17986","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18010","type":"Circle"},{"attributes":{},"id":"18097","type":"Selection"},{"attributes":{"source":{"id":"17939"}},"id":"17943","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18011","type":"Circle"},{"attributes":{},"id":"17913","type":"BasicTicker"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"18119"},"selection_policy":{"id":"18118"}},"id":"18044","type":"ColumnDataSource"},{"attributes":{},"id":"18092","type":"UnionRenderers"},{"attributes":{"source":{"id":"17999"}},"id":"18003","type":"CDSView"},{"attributes":{},"id":"18111","type":"Selection"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"18079"},"selection_policy":{"id":"18078"}},"id":"17944","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18029"},"glyph":{"id":"18030"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18031"},"view":{"id":"18033"}},"id":"18032","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18097"},"selection_policy":{"id":"18096"}},"id":"17989","type":"ColumnDataSource"},{"attributes":{},"id":"18098","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17960","type":"Line"},{"attributes":{},"id":"18121","type":"Selection"},{"attributes":{"axis":{"id":"17912"},"ticker":null},"id":"17915","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"17996","type":"Circle"},{"attributes":{},"id":"18072","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17979"},"glyph":{"id":"17980"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17981"},"view":{"id":"17983"}},"id":"17982","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"18077"},"selection_policy":{"id":"18076"}},"id":"17939","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"18099"},"selection_policy":{"id":"18098"}},"id":"17994","type":"ColumnDataSource"},{"attributes":{},"id":"17925","type":"UndoTool"},{"attributes":{"source":{"id":"17959"}},"id":"17963","type":"CDSView"},{"attributes":{},"id":"18116","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17959"},"glyph":{"id":"17960"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17961"},"view":{"id":"17963"}},"id":"17962","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17928","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17969"}},"id":"17973","type":"CDSView"},{"attributes":{},"id":"18090","type":"UnionRenderers"},{"attributes":{},"id":"18091","type":"Selection"},{"attributes":{"children":[{"id":"18127"},{"id":"18125"}]},"id":"18128","type":"Column"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18095"},"selection_policy":{"id":"18094"}},"id":"17984","type":"ColumnDataSource"},{"attributes":{},"id":"18093","type":"Selection"},{"attributes":{},"id":"18079","type":"Selection"},{"attributes":{},"id":"18078","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18004"},"glyph":{"id":"18005"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18006"},"view":{"id":"18008"}},"id":"18007","type":"GlyphRenderer"},{"attributes":{},"id":"17908","type":"LinearScale"},{"attributes":{"overlay":{"id":"17929"}},"id":"17924","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17956","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17990","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17946","type":"Line"},{"attributes":{},"id":"18096","type":"UnionRenderers"},{"attributes":{},"id":"17921","type":"PanTool"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"17980","type":"Circle"},{"attributes":{"source":{"id":"17989"}},"id":"17993","type":"CDSView"},{"attributes":{},"id":"17920","type":"ResetTool"},{"attributes":{"source":{"id":"18009"}},"id":"18013","type":"CDSView"},{"attributes":{},"id":"17910","type":"LinearScale"},{"attributes":{"children":[[{"id":"17903"},0,0]]},"id":"18125","type":"GridBox"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17955","type":"Line"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"18103"},"selection_policy":{"id":"18102"}},"id":"18004","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"17981","type":"Circle"},{"attributes":{"data_source":{"id":"18009"},"glyph":{"id":"18010"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18011"},"view":{"id":"18013"}},"id":"18012","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17949"}},"id":"17953","type":"CDSView"},{"attributes":{"overlay":{"id":"17928"}},"id":"17922","type":"BoxZoomTool"},{"attributes":{},"id":"18112","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"18066"},{"id":"18067"}],"location":"top_left"},"id":"18065","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18001","type":"Line"},{"attributes":{"data_source":{"id":"17994"},"glyph":{"id":"17995"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17996"},"view":{"id":"17998"}},"id":"17997","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17954"}},"id":"17958","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18006","type":"Line"},{"attributes":{},"id":"18073","type":"AllLabels"},{"attributes":{},"id":"18099","type":"Selection"},{"attributes":{},"id":"18110","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18093"},"selection_policy":{"id":"18092"}},"id":"17979","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"17916"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"17919","type":"Grid"},{"attributes":{},"id":"18120","type":"UnionRenderers"},{"attributes":{"source":{"id":"17964"}},"id":"17968","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18000","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17976","type":"Line"},{"attributes":{},"id":"18095","type":"Selection"},{"attributes":{"data_source":{"id":"17969"},"glyph":{"id":"17970"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17971"},"view":{"id":"17973"}},"id":"17972","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"17995","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18005","type":"Line"},{"attributes":{"data_source":{"id":"17939"},"glyph":{"id":"17940"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17941"},"view":{"id":"17943"}},"id":"17942","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"17951","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17985","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"17966","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17991","type":"Line"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"18002"},{"id":"18007"},{"id":"18012"},{"id":"18017"},{"id":"18022"},{"id":"18027"},{"id":"18032"},{"id":"18037"},{"id":"18042"},{"id":"18047"},{"id":"18052"},{"id":"18057"}]},"id":"18067","type":"LegendItem"},{"attributes":{"formatter":{"id":"18070"},"major_label_policy":{"id":"18071"},"ticker":{"id":"17913"}},"id":"17912","type":"LinearAxis"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17945","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"18107"},"selection_policy":{"id":"18106"}},"id":"18014","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17994"}},"id":"17998","type":"CDSView"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"18113"},"selection_policy":{"id":"18112"}},"id":"18029","type":"ColumnDataSource"},{"attributes":{},"id":"17923","type":"WheelZoomTool"},{"attributes":{"source":{"id":"17979"}},"id":"17983","type":"CDSView"},{"attributes":{"data_source":{"id":"17964"},"glyph":{"id":"17965"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17966"},"view":{"id":"17968"}},"id":"17967","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17974"}},"id":"17978","type":"CDSView"},{"attributes":{},"id":"18077","type":"Selection"},{"attributes":{},"id":"18115","type":"Selection"},{"attributes":{},"id":"18117","type":"Selection"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"17942"},{"id":"17947"},{"id":"17952"},{"id":"17957"},{"id":"17962"},{"id":"17967"},{"id":"17972"},{"id":"17977"},{"id":"17982"},{"id":"17987"},{"id":"17992"},{"id":"17997"}]},"id":"18066","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17971","type":"Line"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"18085"},"selection_policy":{"id":"18084"}},"id":"17959","type":"ColumnDataSource"}],"root_ids":["18128"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"f3dc2995-2884-49b3-958d-80ea9a69f80e","root_ids":["18128"],"roots":{"18128":"79cf2e23-7392-4a10-beb7-711550142170"}}];
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