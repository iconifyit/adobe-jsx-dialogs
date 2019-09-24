var logger = new Logger('FineReplaceScript', '/Users/scott/Downloads');

try {
    var WindowResource = function(options) {
        try {
            return compile(" \
			{{type}} {  \
				orientation   : '{{orientation}}', \
				alignChildren : {{alignChildren}},  \
				preferredSize : [{{width}}, {{height}}], \
				text          : '{{text}}',  \
				margins       : 15, \
				{{controls}} \
		    }", options);
        }
        catch(e) {
            alert('WindowResource error');
        }
    }

    function compile(_string, vars) {
        try {
            _string = _string.replace(/\t|\r|\n+/g, "");

            var n = 0, max = 9999;
            while (_string.indexOf('  ') >= 0 && n < max) {
                n++;
                _string = _string.replace('  ', ' ');
            }

            for (var key in vars) {
                _string = _string.replace(
                    new RegExp('{{' + key + '}}', 'i'),
                    vars[key]
                );
            }

            return _string.trim();
        }
        catch(e) { alert('Compile error') }
    }

    var Panel = function(options) {
        try {
            var _string =
                "{{name}}: Panel { \
                    text          : '{{text}}', \
                    size          : [{{width}}, {{height}}], \
                    orientation   : '{{orientation}}', \
                    alignChildren : {{alignChildren}}, \
                    {{children}} \
                }";
            return compile(_string, options);
        }
        catch(e) {alert('Panel error')}
    }

    var Group = function(options) {
        try {
            var _string =
                "{{name}} : Group { \
                    {{controls}} \
                }";
            return compile(_string, options);
        }
        catch(e) {alert('Group error')}
    }

    var StaticText = function(options) {
        try {
            var _string =
                "{{name}} : StaticText { \
                    text      : '{{text}}', \
                    size      : [{{width}}, {{height}}], \
                    justify   : '{{justify}}', \
                    alignment : ['right', 'center'] \
                }";
            return compile(_string, options);
        }
        catch(e) {alert('StatiText error')}
    }

    var EditText = function(options) {
        try {
            var _string =
                "{{name}}: EditText { \
                    text       : '{{text}}', \
                    characters : '{{length}}', \
                    size       : [{{width}}, {{height}}], \
                    justify    : '{{justify}}', \
                    alignment  : ['right', 'center'] \
                }";
            return compile(_string, options);
        }
        catch(e) {alert('EditText error')}
    }

    var Checkbox = function(options) {
        try {
            var _string =
                "{{name}}: Checkbox { \
                    text      : '{{text}}' \
                    value     : '{{value}}', \
                    size      : [{{width}}, {{height}}], \
                    alignment : ['right', 'center'] \
                }";
            return compile(_string, options);
        }
        catch(e) {alert('Checkbox error')}
    }

    var RadioButton = function(options) {
        try {
            var _string =
                "{{name}}: RadioButton { \
                    text      : '{{text}}', \
                    value     : '{{value}}', \
                    size      : [{{width}}, {{height}}], \
                    alignment : ['right', 'center'] \
                }";
            return compile(_string, options);
        }
        catch(e) {alert('RadioButton error')}
    }

    var Button = function(options) {
        try {
            var _string =
                "{{name}}: Button { \
                    text       : '{{text}}', \
                    value      : '{{value}}', \
                    properties : {{properties}}, \
                    size       : [{{width}}, {{height}}], \
                    alignment  : ['right', 'center'] \
                }";
            return compile(_string, options);
        }
        catch(e) {alert('Button error')}
    }
}
catch(e) {alert(e)}

try {

    var res2 = WindowResource({
        type : 'palette',
        orientation : 'column',
        alignChildren : "['fill', 'top']",
        text : 'Window Resource Test',
        margin : 15,
        preferredSize : "[350, 200]",
        width : 350,
        height : 200,
        controls : [
            Group({
                name : 'FooBar',
                controls  : [StaticText({
                    name    : 'someTextField',
                    text    : 'Res 2 Test',
                    justify : 'left',
                    size    : "[120, 24]",
                    width   : 120,
                    height  : 24
                })]
            }),
            Group({
                name : 'buttons',
                controls : [Button({
                    name       : 'cancelButton',
                    text       : 'Cancel',
                    value      : 'cancel',
                    properties : "{name: 'cancel'}",
                    size       : "[120, 24]",
                    width      : 120,
                    height     : 24,
                    alignment  : "['right', 'center']"
                })]
            })
        ]
    });

    logger.info('RES 2 : ' + res2);

    var bounds = [],
        left   = 0,
        right  = 0,
        width  = 350,
        height = 200;

    if ( bounds = Utils.getScreenSize() ) {
        left = Math.abs(Math.ceil((bounds.width/2) - (width/2)));
        top  = Math.abs(Math.ceil((bounds.height/2) - (height/2)));
    }

    var win = new Window(res2.trim());
    win.buttons.cancelButton.onClick = function() {
        return win.close();
    };
    win.center();
    win.show();
}
catch(e) {alert(e)}
