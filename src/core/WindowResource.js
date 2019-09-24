try {
    var WindowResource = function(options) {
        var _string = " \
			{{type}} {  \
				orientation   : {{orientation}}, \
				alignChildren : {{alignChildren}},  \
				preferredSize : [300, 130], \
				text          : 'ScriptUI Window - palette',  \
				margins       : 15, \
				{{children}} \
		";
        return String(compile(_string, options));
    }

    function compile(_string, vars) {
        for (var key in vars) {
            var regex = new RegExp('{{' + key + '}}', 'gi');
            _string = _string.replace(regex, vars[key]);
        }
        return _string;
    }

    var Panel = function(options) {
        // var _string = "{{name}}: Panel {text: '{{text}}', size: [{{width}}, {{height}}], orientation: {{orientation}}, alignChildren: {{alignChildren}}, {{children}}}";
        var _string = " \
			{{name}} : Panel { \
				text          : '{{text}}' \
				size          : [{{width}}, {{height}}], \
				orientation   : {{orientation}}, \
				alignChildren : {{alignChildren}}, \
				{{children}} \
			} \
		";
        return String(compile(_string, options));
    }

    var Group = function(options) {
        var _string = " \
			{{name}} : Group { \
				{{children}} \
			} \
		";
        return String(compile(_string, options));
    }

    var StaticText = function(options) {
        var _string = " \
			{{name}} : StaticText { \
				text      : '{{text}}' \
				size      : [{{width}}, {{height}}], \
				justify   : {{justify}} \
				alignment :['right', 'center'] \
			} \
		";
        return String(compile(_string, options));
    }

    var EditText = function(options) {
        var _string = " \
			{{name}} : EditText { \
				text       : '{{text}}' \
				characters : {{length}}' \
				size       : [{{width}}, {{height}}], \
				justify    : {{justify}} \
				alignment  :['right', 'center'] \
			} \
		";
        return String(compile(_string, options));
    }

    var Checkbox = function(options) {
        var _string = " \
			{{name}} : Checkbox { \
				text      : '{{text}}' \
				value     : {{value}} \
				size      : [{{width}}, {{height}}], \
				alignment :['right', 'center'] \
			} \
		";
        return String(compile(_string, options));
    }

    var RadioButton = function(options) {
        var _string = " \
			{{name}} : RadioButton { \
				text      : '{{text}}' \
				value     : {{value}} \
				size      : [{{width}}, {{height}}], \
				alignment :['right', 'center'] \
			} \
		";
        return String(compile(_string, options));
    }

    var Slider = function(options) {
        var _string = " \
            Slider { \
                minvalue : {{minvalue}}, \
                maxvalue : {{maxvalue}}, \
                value    : {{value}}, \
                size     : [{{width}}, {{height}}] \
            } \
        ";
    }

    var Button = function(options) {
        var _string = " \
			{{name}} : Button { \
				text       : '{{text}}', \
				value      : {{value}}, \
				properties : {{properties}} \
				size       : [{{width}}, {{height}}], \
				alignment  : ['right', 'center'] \
			} \
		";
        return String(compile(_string, options));
    }
}
catch(e) {alert(e)}
