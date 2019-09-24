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

    /*
     * Button Bar
     */
    var buttonBar = dialog.add("group", undefined, {name: "buttonBar"});
        buttonBar.orientation = "row";
        buttonBar.alignChildren = ["left","center"];
        buttonBar.spacing = 10;
        buttonBar.margins = 0;

    var cancelButton = buttonBar.add("button", undefined, undefined, {name: "Cancel"});
        cancelButton.text = "Cancel";

    var divider1 = buttonBar.add("panel", undefined, undefined, {name: "Ok"});
        divider1.alignment = "fill";

    var okButton = buttonBar.add("button", undefined, undefined, {name: "okButton"});
        okButton.text = "Ok";

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
    var buttonBar = target.add("group", undefined, {name: "buttonBar"});

        buttonBar.orientation   = options.alignment;
        buttonBar.alignChildren = options.alignChildren || ["left","center"];
        buttonBar.spacing       = options.spacing || 10;
        buttonBar.margins       = options.margins || 0;

        buttonBar.cancel = buttonBar.add("button", undefined, undefined, {name: "Cancel"});
        buttonBar.cancel.text = "Cancel";

        buttonBar.ok = buttonBar.add("button", undefined, undefined, {name: "okButton"});
        buttonBar.ok.text = "Ok";

    return buttonBar;
}
