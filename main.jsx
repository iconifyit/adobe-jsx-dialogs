#target Illustrator

#include "src/core/index.js";
#include "src/Config.js";
#include "src/FindAndReplace--2.jsx";


var filePath = String($.fileName);
var segments = filePath.split('/');
    segments = segments.slice(0, -1);

var PATHS = {
    segments  : segments,
    ROOT      : segments.join('/'),
    SRC       : segments.concat(['src']).join('/'),
    CORE      : segments.concat(['src', 'core']).join('/'),
    RESOURCES : segments.concat(['src', 'core', 'resources']).join('/'),
    VENDORS   : segments.concat(['src', 'vendors']).join('/')
}

var logger = new Logger('find-replace', '~/Downloads');

new FindAndReplaceDialog();
