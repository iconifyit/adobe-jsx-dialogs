/**
 * This dialog was built with the amazing https://scriptui.joonas.me/
 * by https://twitter.com/JoonasPaakko
 */
var FindAndReplaceDialog = function() {
    /*
     * Window
     */
    var dialog = new Window("dialog");
    dialog.text = "Search & Replace";
    dialog.orientation = "column";
    dialog.alignChildren = ["left","top"];
    dialog.spacing = 10;
    dialog.margins = 16;
    dialog.size = [280, 200];

    /*
     * Search Text
     */
    var searchText = dialog.add("group", undefined, {name: "search-text"});
    searchText.orientation = "row";
    searchText.alignChildren = ["left","center"];
    searchText.spacing = 10;
    searchText.margins = 0;

    var searchTextLabel = searchText.add("statictext", undefined, undefined, {name: "searchTextLabel"});
    searchTextLabel.text = "StaticText";

    var searchTextField = searchText.add('edittext {properties: {name: "searchTextField"}}');
    searchTextField.text = "EditText";

    /*
     * Replace Text
     */
    var replaceText = dialog.add("group", undefined, {name: "replace -text"});
    replaceText.orientation = "row";
    replaceText.alignChildren = ["left", "center"];
    replaceText.spacing = 10;
    replaceText.margins = 0;

    var replaceTextLabel = replaceText.add("statictext", undefined, undefined, {name: "replaceTextLabel"});
    replaceTextLabel.text = "StaticText";

    var replaceTextField = replaceText.add('edittext {properties: {name: "replaceTextField"}}');
    replaceTextField.text = "EditText";

    /*
     * Use Regex
     */
    var useRegex = dialog.add("group", undefined, {name: "useRegex"});
    useRegex.orientation = "row";
    useRegex.alignChildren = ["left","center"];
    useRegex.spacing = 10;
    useRegex.margins = 0;

    var useRegexLabel = useRegex.add("statictext", undefined, undefined, {name: "scopeLabel"});
    useRegexLabel.text = "Search Scope";

    var useRegexField = useRegex.add("checkbox", undefined, undefined, {name: "regex"});
    useRegexField.text  = "Use Regex?";
    useRegexField.value = true;

    /*
     * Search Scope
     */
    var searchScope = dialog.add("group", undefined, {name: "searchScope"});
    searchScope.orientation = "row";
    searchScope.alignChildren = ["left","center"];
    searchScope.spacing = 10;
    searchScope.margins = 0;

    var scopeLabel = searchScope.add("statictext", undefined, undefined, {name: "scopeLabel"});
    scopeLabel.text = "Search Scope";

    var searchArtboards = searchScope.add("checkbox", undefined, undefined, {name: "Artboards"});
    searchArtboards.text = "Artboards";
    searchArtboards.value = false;

    var searchLayers = searchScope.add("checkbox", undefined, undefined, {name: "Layers"});
    searchLayers.text = "Layers";
    searchLayers.value = false;

    var cancelClickHandlder = function() {
        dialog.close();
    }

    var okClickHandlder = function() {
        alert('OK Clicked!');
    }

    /*
     * Button Bar
     */
    var buttonBar = new ButtonBar(
        dialog,
        new Base({
            orientation : "row",
            alignChildren : ["left", "center"],
            spacing : 10,
            margins : 0
        }),
        [
            new Base({name : "cancel", text: "Cancel", onClick : cancelClickHandlder}),
            new Base({name : "ok", text: "Ok", onClick : okClickHandlder})
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

function ButtonBar(target, options, buttons) {
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

/*
window()
    .orientation('column')
    .alignChildren('left')
    .preferredSize(100, 300)
 */
