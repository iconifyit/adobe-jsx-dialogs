/**
 * This dialog was built with the amazing https://scriptui.joonas.me/
 * by https://twitter.com/JoonasPaakko
 */
var FindAndReplaceDialog = function() {
    /*
     * Window
     */
    var dialog;

    dialog = new Window('dialog');
    dialog.text = 'Search & Replace';
    dialog.orientation = 'column';
    dialog.alignChildren = ['left','top'];
    dialog.spacing = 10;
    dialog.margins = 16;
    dialog.size = [280, 200];

    /*
     * Search Text
     */
    var searchText, searchTextLabel, searchTextField;

    searchText = dialog.add('group', undefined, {name: 'search-text'});
    searchText.orientation = 'row';
    searchText.alignChildren = ['left', 'fill'];
    searchText.spacing = 10;
    searchText.margins = 0;

    searchTextLabel = searchText.add('statictext', undefined, undefined, {name: 'searchTextLabel'});
    searchTextLabel.text = 'Find';
    searchTextLabel.size = [60, 24];

    // {x: 0, y: 0, width: 60, height:24}

    searchTextField = searchText.add('edittext', undefined, undefined, {name: 'searchTextField'});
    searchTextField.size = [180, 24];
    searchTextField.text = 'Enter search text...';

    searchTextField.active = true;

    /*
     * Replace Text
     */
    var replaceText, replaceTextLabel, replaceTextField;

    replaceText = dialog.add('group', undefined, {name: 'replace-text'});
    replaceText.orientation = 'row';
    replaceText.alignChildren = ['left', 'fill'];
    replaceText.spacing = 10;
    replaceText.margins = 0;

    replaceTextLabel = replaceText.add('statictext', undefined, undefined, {name: 'replaceTextLabel'});
    replaceTextLabel.text = 'Replace';
    replaceTextLabel.size = [60, 24];

    // {x: 0, y: 0, width: 60, height:24}

    replaceTextField = replaceText.add('edittext', undefined, undefined, {name: 'replaceTextField'});
    replaceTextField.size = [180, 24];
    replaceTextField.text = 'Enter replacement text...';

    /*
     * Use Regex
     */
    var useRegex, useRegexLabel, useRegexField;

    useRegex = dialog.add('group', undefined, {name: 'useRegex'});
    useRegex.orientation = 'row';
    useRegex.alignChildren = ['left', 'center'];
    useRegex.spacing = 10;
    useRegex.margins = 0;

    useRegexField = useRegex.add('checkbox', undefined, undefined, {name: 'regex'});
    useRegexField.text  = 'Use Regex?';
    useRegexField.value = true;

    /*
     * Search Scope
     */
    var scope, scopeLabel, searchArtboards, searchLayers;

    scope = dialog.add('group', undefined, {name: 'scope'});
    scope.orientation = 'row';
    scope.alignChildren = ['left','center'];
    scope.spacing = 10;
    scope.margins = 0;

    scopeLabel = scope.add('statictext', undefined, undefined, {name: 'scopeLabel'});
    scopeLabel.text = 'Search Scope';

    searchArtboards = scope.add('checkbox', undefined, undefined, {name: 'Artboards'});
    searchArtboards.text = 'Artboards';
    searchArtboards.value = false;

    searchLayers = scope.add('checkbox', undefined, undefined, {name: 'Layers'});
    searchLayers.text = 'Layers';
    searchLayers.value = false;

    var cancelClickHandlder = function() {
        alert('Cancel was Clicked!');
        dialog.close();
    }

    var okClickHandlder = function() {
        alert('OK was Clicked!');
        dialog.close();
    }

    /*
     * Button Bar
     */
    var buttonBar = new ButtonGroup(
        dialog,
        new Base({
            orientation : 'row',
            alignChildren : ['left', 'center'],
            spacing : 10,
            margins : 0
        }),
        [
            new Base({name : 'cancel', text: 'Cancel', onClick : cancelClickHandlder}),
            new Base({name : 'ok', text: 'Ok', onClick : okClickHandlder})
        ]
    );

    /*
     * Show the dialog.
     */
    dialog.show();

    /*
     * Return the dialog instance to the caller.
     */
    return dialog;
}

function InputGroup(target, options) {

}

function ButtonGroup(target, options, buttons) {
    /*
     * Button Bar
     */
    var buttonBar = target.add('group', undefined, {name: options.get('name', 'buttonBar')});
        buttonBar.orientation   = options.get('orientation', 'row');
        buttonBar.alignChildren = options.get('alignChildren', ["left","center"]);
        buttonBar.spacing       = options.get('spacing', 10);
        buttonBar.margins       = options.get('margins', 0);

    for (var i=0; i < buttons.length; i++) {
        var button = buttons[i];
        var newButton = buttonBar.add('button', undefined, undefined, {name: button.get('name', 'Button')});
            newButton.name    = button.get('name', 'button__' + i);
            newButton.text    = button.text;
            newButton.onClick = button.onClick;
    }

    return buttonBar;
}
