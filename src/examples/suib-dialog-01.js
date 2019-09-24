var palette = (function () {

    /*
    Code for Import https://scriptui.joonas.me — (Triple click to select):
    {"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-2":{"id":2,"type":"StaticText","parentId":1,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"EditText","parentId":1,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-5":{"id":5,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Button","parentId":9,"style":{"enabled":true,"varName":null,"text":"Button","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"Divider","parentId":9,"style":{"enabled":true,"varName":null}},"item-9":{"id":9,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-10":{"id":10,"type":"Button","parentId":9,"style":{"enabled":true,"varName":null,"text":"Button","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-12":{"id":12,"type":"Checkbox","parentId":11,"style":{"enabled":true,"varName":null,"text":"Checkbox","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Checkbox","parentId":11,"style":{"enabled":true,"varName":null,"text":"Checkbox","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-15":{"id":15,"type":"RadioButton","parentId":14,"style":{"enabled":true,"varName":null,"text":"RadioButton","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"RadioButton","parentId":14,"style":{"enabled":true,"varName":null,"text":"RadioButton","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Panel","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-18":{"id":18,"type":"Slider","parentId":17,"style":{"enabled":true,"varName":null,"preferredSize":[180,0],"alignment":"left","helpTip":null}},"item-19":{"id":19,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-20":{"id":20,"type":"ListBox","parentId":19,"style":{"enabled":true,"varName":null,"creationProps":{"multiselect":false,"numberOfColumns":"2","columnWidths":"[]","columnTitles":"[]","showHeaders":false},"listItems":"Item 1, Item 2","preferredSize":[200,0],"alignment":null,"helpTip":"Foo Bar Baz"}},"item-21":{"id":21,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-22":{"id":22,"type":"Image","parentId":21,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYWVmYmQ3OC04OGUwLTQ1N2ItYTlmNS01ZjBmZWU1ZWYzYTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REM3NEM3NzBENUQyMTFFOUE1NDJDMzk5OTIxNTkxOTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REM3NEM3NkZENUQyMTFFOUE1NDJDMzk5OTIxNTkxOTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplYWVmYmQ3OC04OGUwLTQ1N2ItYTlmNS01ZjBmZWU1ZWYzYTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZWFlZmJkNzgtODhlMC00NTdiLWE5ZjUtNWYwZmVlNWVmM2Ex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"],"alignment":null,"helpTip":"Image tooltip"}},"item-23":{"id":23,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-24":{"id":24,"type":"TabbedPanel","parentId":23,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":10,"alignment":null,"selection":27}},"item-25":{"id":25,"type":"Tab","parentId":24,"style":{"enabled":true,"varName":null,"text":"Tab","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-26":{"id":26,"type":"Tab","parentId":24,"style":{"enabled":true,"varName":null,"text":"Tab","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-27":{"id":27,"type":"Tab","parentId":24,"style":{"enabled":true,"varName":null,"text":"Tab","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-28":{"id":28,"type":"TreeView","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[200,130],"alignment":null}},"item-29":{"id":29,"type":"TreeItem","parentId":28,"style":{"enabled":true,"varName":null,"text":"TreeItem"},"expanded":true},"item-30":{"id":30,"type":"TreeItem","parentId":28,"style":{"enabled":true,"varName":null,"text":"TreeItem"},"expanded":true},"item-31":{"id":31,"type":"TreeItem","parentId":29,"style":{"enabled":true,"varName":null,"text":"TreeItem"}},"item-32":{"id":32,"type":"TreeItem","parentId":30,"style":{"enabled":true,"varName":null,"text":"TreeItem"}},"item-33":{"id":33,"type":"TreeItem","parentId":32,"style":{"enabled":true,"varName":null,"text":"TreeItem"}},"item-34":{"id":34,"type":"TreeItem","parentId":29,"style":{"enabled":true,"varName":null,"text":"TreeItem"}}},"order":[0,1,2,3,4,5,6,9,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,34,30,32,33],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":true,"itemReferenceList":"path"}}
    */

    // PALETTE
    // =======
    var palette = new Window("palette");
    palette.text = "Dialog";
    palette.orientation = "column";
    palette.alignChildren = ["left","top"];
    palette.spacing = 10;
    palette.margins = 16;

    // GROUP1
    // ======
    var group1 = palette.add("group", undefined, {name: "group1"});
    group1.orientation = "row";
    group1.alignChildren = ["left","center"];
    group1.spacing = 10;
    group1.margins = 0;

    var statictext1 = group1.add("statictext", undefined, undefined, {name: "statictext1"});
    statictext1.text = "StaticText";

    var edittext1 = group1.add('edittext {properties: {name: "edittext1"}}');
    edittext1.text = "EditText";

    // GROUP2
    // ======
    var group2 = palette.add("group", undefined, {name: "group2"});
    group2.orientation = "row";
    group2.alignChildren = ["left","center"];
    group2.spacing = 10;
    group2.margins = 0;

    var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"});
    statictext2.text = "StaticText";

    var edittext2 = group2.add('edittext {properties: {name: "edittext2"}}');
    edittext2.text = "EditText";

    // GROUP3
    // ======
    var group3 = palette.add("group", undefined, {name: "group3"});
    group3.orientation = "row";
    group3.alignChildren = ["left","center"];
    group3.spacing = 10;
    group3.margins = 0;

    var button1 = group3.add("button", undefined, undefined, {name: "button1"});
    button1.text = "Button";

    var divider1 = group3.add("panel", undefined, undefined, {name: "divider1"});
    divider1.alignment = "fill";

    var button2 = group3.add("button", undefined, undefined, {name: "button2"});
    button2.text = "Button";

    // GROUP4
    // ======
    var group4 = palette.add("group", undefined, {name: "group4"});
    group4.orientation = "row";
    group4.alignChildren = ["left","center"];
    group4.spacing = 10;
    group4.margins = 0;

    var checkbox1 = group4.add("checkbox", undefined, undefined, {name: "checkbox1"});
    checkbox1.text = "Checkbox";

    var checkbox2 = group4.add("checkbox", undefined, undefined, {name: "checkbox2"});
    checkbox2.text = "Checkbox";

    // GROUP5
    // ======
    var group5 = palette.add("group", undefined, {name: "group5"});
    group5.orientation = "row";
    group5.alignChildren = ["left","center"];
    group5.spacing = 10;
    group5.margins = 0;

    var radiobutton1 = group5.add("radiobutton", undefined, undefined, {name: "radiobutton1"});
    radiobutton1.text = "RadioButton";

    var radiobutton2 = group5.add("radiobutton", undefined, undefined, {name: "radiobutton2"});
    radiobutton2.text = "RadioButton";

    // PANEL1
    // ======
    var panel1 = palette.add("panel", undefined, undefined, {name: "panel1"});
    panel1.text = "Panel";
    panel1.orientation = "column";
    panel1.alignChildren = ["left","top"];
    panel1.spacing = 10;
    panel1.margins = 10;

    var slider1 = panel1.add("slider", undefined, undefined, undefined, undefined, {name: "slider1"});
    slider1.minvalue = 0;
    slider1.maxvalue = 100;
    slider1.value = 50;

    // GROUP6
    // ======
    var group6 = palette.add("group", undefined, {name: "group6"});
    group6.orientation = "row";
    group6.alignChildren = ["left","center"];
    group6.spacing = 10;
    group6.margins = 0;

    var listbox1_array = ["Item 1","Item 2"];
    var listbox1 = group6.add("listbox", undefined, undefined, {name: "listbox1", items: listbox1_array, numberOfColumns: "2"});
    listbox1.helpTip = "Foo Bar Baz";
    listbox1.preferredSize.width = 200;

    // GROUP7
    // ======
    var group7 = palette.add("group", undefined, {name: "group7"});
    group7.orientation = "row";
    group7.alignChildren = ["left","center"];
    group7.spacing = 10;
    group7.margins = 0;

    var image1_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%002%00%00%002%08%02%00%00%00%C2%91%5D%1F%C3%A6%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03xiTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%205.6-c145%2079.163499%2C%202018%2F08%2F13-16%3A40%3A22%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3Aeaefbd78-88e0-457b-a9f5-5f0fee5ef3a1%22%20xmpMM%3ADocumentID%3D%22xmp.did%3ADC74C770D5D211E9A542C39992159190%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3ADC74C76FD5D211E9A542C39992159190%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%20CC%202019%20(Macintosh)%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3Aeaefbd78-88e0-457b-a9f5-5f0fee5ef3a1%22%20stRef%3AdocumentID%3D%22xmp.did%3Aeaefbd78-88e0-457b-a9f5-5f0fee5ef3a1%22%2F%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3ET%C2%9B%1C%C2%92%00%00%09%C3%ABIDATx%C3%9A%C3%8CY%C3%8D%C2%8F%1CG%15%C2%AFWU%C3%9D%3D%1F%3B%C3%BB%C3%A5u%C3%96%0Ev%C3%A2Mb%02%C2%8EC%20%04.AHA%C3%A2%C3%8C%118%228D%C3%A2%C2%82%C2%848%C3%B2'%20%C3%BE%02.%C2%9CP%22%0E%C2%88%5C%11H%1CA%C2%8AA8!%16%16r%C3%A2%C3%B5%C3%86%C3%BB%C3%A9%C3%9D%C2%9D%C2%9D%C2%8F%C3%AE%C2%AAz%C2%BCW%C3%95%3D%C3%9D%3D%C3%93%C2%B3%C2%B31%C2%97%C2%B4%C3%87%C2%B3%C2%B3%C2%B3%C3%9D%5D%C2%BF%C3%BA%C2%BD%C3%B7~%C3%AFW%C3%95%C2%80%C2%88%C3%A2%C3%B3w%C3%A8%0B%C2%9E72%C3%AE%2C%C2%B3%23%C2%83%C2%A9E%C3%A3%C2%9Cq%C3%82%20%C3%8F%C3%88%09%C3%A1'%06%7C%C2%92%7F%13(%00%40%02%C2%BF%2B%10Z%02%C2%BD%22%09%C2%89%C2%86%C2%8E%C2%96K%C2%91%C3%BC%7Fa%C3%AD%C2%9E%C2%A5%C3%BFx%7C%C3%B6%C3%89%C3%B1hoh%0E%C2%86%C3%99%C3%90%60Fh%1CZ%C2%8FFx0%C3%A8%C2%B1%10%C2%8C%02V%C3%B8%C2%95%0F%C3%BFCH%06%C3%A7%C2%91)h)XN%C3%B4F%5Bmv%C3%B4%C2%97%C3%96%C2%92%C2%97%C3%97%C3%A2yCCc%10%C3%AF%1F%0D%C3%9F%C2%BBwpwo%C2%B0%3F%C3%8Ch%C3%86I%C2%A4ZJj%C2%A5d%C2%A0A%16(%0A%0C%C2%95%C3%8F%C3%A5%C3%B7%C3%B9%3F%C2%81%0E%C3%B9%C2%A7C~%C2%A5%C2%88c%23R'%C2%BA%11%C3%9CX%C2%8E%C3%9E%C2%BC%C3%9Ay%C3%ABZ%C3%A7B%C2%B0~%C3%BF%C3%A1%C3%9E%C2%BB%1F%C3%AC%C2%8D%2Cnv%C2%A3v%241%C2%8FM%18~24%081%C3%B9%0D%04%C2%94D%C2%89%C3%B2%C3%AF%C3%B9%C2%85%13%C3%8C%C2%A2%C2%A0%C2%94%C3%A6F%C2%94%1F%C2%8D%C3%9Di%C3%AA%C2%BE%C2%BE%C3%99z%C3%BB%C3%B6%C3%AAJ%2C%C3%8F%C2%83%C3%B5%C2%9B%C3%B7w%C3%9E%C3%BD%60%C3%B7%C3%BAJ%7B)V%0E%C2%B1%18%C2%A3%C2%B8f%1AS%60%C3%AD%3CL%05%C2%98%12SmFB%3C%C3%A8%C2%9B%C2%AB%1D%C3%BD%C3%8B7%C3%96%C3%97%5Bj%02%C2%A3%C2%86%C3%B1%C2%BD%7B%C3%BB%C3%AF%C3%9C%C3%9D%7D%C3%A9R%C2%A7%1B%C3%8B%09%C2%A6b%C2%802D%C2%B5%C2%BB.%C3%A2i%1E%C2%A6%C2%90%C2%9C%C3%B4%C3%9A%C3%AA%C3%85%7BC%C3%BB%C3%AB%3BO%5C%C2%85%C2%9F%12%C3%96%C3%83%C2%93%C3%91o%C3%BF%C3%B9%C3%B8%C2%B9%C3%956%C2%A5%C2%A7%C2%AF%C2%ADy%C2%B1%C2%9B%C3%B0%07e%C3%BD%5D%2CvUL%C3%85%C3%B4%C2%80%C3%A6%7F%7DI%7Ft%C2%9C%C3%BE%C3%A1%C2%BFg%0D%C2%B0%C3%BEx%C3%AF%60l%C2%91b7%1F%C3%93%2CO%C2%B0%00%C2%93X%C2%80%C2%A9%C2%90%14q%C2%A5%13%C3%BD%C3%A9%C3%A1%C3%A0%24u5X%C3%87cs%C3%A7%C3%B1%C3%99%C2%95%C2%A5%C2%B8%1A%C2%BB9%3C%7D%C2%96%1C%C2%87%C3%85%C2%98%C2%82%C3%8At%228%18%C2%BB%C2%BF%C3%AD%C2%8Ek%C2%B0%C3%9E%C3%9F%C3%A9%C3%AF%0DR%C2%8A%C3%9F%24%C3%87%C3%A7%C3%B0%24%C3%A7%60%C2%82j%C2%8E%2F%C2%8A%1D%C3%94%C2%BF%C3%B3y%C2%86%C2%A2%C2%AD%C3%A0_%C2%87uX%0F%C2%8EG%04%04%C3%A7%C3%A68%2C%C3%8AqQ%C3%8B%C3%B1%C2%99%C3%98%11%1F%C2%AEz%C3%A3%3A%C2%A6p%C3%B4b%C2%B9%7Df%C3%BB%C2%99%2BU~w%C2%90%25Z%C3%8D%C3%89'%C2%9E%1C%C3%BA%09II%19*Bc%C3%81%C2%8B%C3%A58I%C3%BC%C3%81%C3%88%C2%A5%C3%8EI%C3%89Z%C2%B5%C3%91%C3%92%C2%A4P%0E%C2%A711%14%09%C3%BD%C3%94%C3%AD%0F%1D5(%C2%86E%C3%BD%C3%A4%60hZZ%C3%8E%C3%91'%C2%9A(FR%C2%B5%C2%A8%7D%C2%90%0C%3A1%C2%B6%C3%8Ez%C2%9E%C2%A1%24%C2%AAA%C2%9F%C2%A4%0F%C3%AC'%7D%C3%B3%C3%8Az%C3%BC%C3%AD%2Ft%C3%9A%1A%C3%BE%7D%C2%94%C3%BDy%7B%40%C2%A3%26%0A%C2%B0%C2%8E%C2%89%0Ej'%C2%A4%C3%A1Tw7%C2%84fX%C2%A7c3%C3%88%C2%9C%C2%96%C2%B2Q%C2%9F%C2%88S%C3%82%C3%94kE%C3%9C%C2%98%C2%9D%C2%A3%C2%B9j%C2%90%7D%C2%8B%C3%8ES%C2%8D%C3%A7%C3%A8%13%C2%88%C2%8FO%C3%AD%1B%C3%8F%24%3F%7BmM1F%C3%B1%C3%BA%C3%A5%C3%96%C3%A5D%C3%BC%C3%AE%C3%BE%60%C2%A3%13%C2%89%C2%99%C3%AE%02%C2%9E%C2%A0'c%C2%97%C3%A7%C3%96%C3%90r%0FVR6%C3%96%1D%C3%8D%C2%AB%1D%2BO*77%C3%83%C2%A5*%C2%9647%60%C2%8Bss%C2%9C%5E%0F%C3%BB%C3%B6%C2%AB%C2%97%C2%92%C2%9F%7Fm%3D%60%0A%C3%87w%C2%9F_z%C2%BE%C2%8D%2C%04%00M-%1A%06%C2%A6%C2%80%C3%A5%C2%BD%0A%06%19%C2%9A%C3%91'%C3%AFN%7C%C2%8F%C2%92~x%C2%AE%0C%3FpW%C3%B1g'%C2%9A1%3D%C3%AA%5B%C2%8A%C3%9D%2F%5E_%0B%7CWG%5ERn4%1AM%15%C3%8B%C2%84%C2%B0%C2%A0%5C%0C%C3%8BXg8%C2%91%C3%A7%C3%A88B8%0F*%17%C3%BB%C2%9C%C2%85%C2%AE%C3%A6%C2%84%C2%B0b%1A%C3%93%C2%A7g%C2%8EL%C3%8BO_%5DA%C2%81%C3%87%C2%94%C3%AF%C2%A6%160K7t%C3%96diU%C3%84%26w%C3%8E%7C%0F%C2%92!%C3%A5%C2%B1%22%C3%9A%C3%B5%1E%0C%C2%A5O%C3%B1%C3%A6)wR%C3%8C%1F%C3%97gG%05%3BP%C3%8A%C3%A7%C3%AE%C3%80%C2%BD%C2%B8%12%C3%BD%C3%A8%C3%8B%C3%8B4%C2%9F%C2%9D%C2%811He%C3%88%C3%A6%C2%B1N%C2%8Bt%C3%96%C2%9A4%C2%AD%0E%1Ap%C3%99%09%2C%C2%BA%04%C2%AB%C2%9AS%C3%91%C2%A7%C2%8Ao%C2%82%C2%8A%C2%82%C3%A5%C2%AC%C2%84%08v%24s%16%26FZ%C2%B0%C2%B5%C2%AC%7Fx%C2%B3K%19%C3%BDx%40a%C2%A0%C2%A0P%C3%A2%3A%C2%82%C2%95%3A%C2%ACg%11%C2%90%C3%89%C3%8D9%C2%AB%C2%88k%C3%80%2F%C3%8B%C3%98%03%C3%8C%C3%AA%C2%B8%C3%97'%C3%AF0%C2%A5%C2%80%C2%8AJN*%C3%8F%23%C3%83%C2%AErt%C3%82%C3%A1%C2%88%C2%9B%C3%AE%C3%B7%C2%B6%C2%BAD%24%C2%99%02%2B(e9(%C3%A1E%C2%A1%C2%9C%C3%89oI%C3%80%C2%98%C2%B3%0A2%C2%9C%C2%98f%C2%87%C2%88%C3%B3t%3C0N%C2%96%C2%9C%26%07X%C3%88%60%C3%AE%C2%98C%C3%9A%11%C3%97%C3%A4%15%C3%89%C3%9E%C3%9F%C3%A8%C3%A9%C3%AF%5CkS%14%0E2%C2%97(I%C2%98%086%C3%A4%C3%BA%C3%85%1F%C2%A8%C3%9E%C3%89VB-%C2%98%C3%929%C2%8E%C2%A6%C2%8Ec%C2%ACDS%C2%8B%C2%9A%20N%7B%15%C3%B4%C3%83%06%C2%AF%C3%8C%C2%96%C3%99%5B%60%1A%C3%8E%C3%9B%60%C3%8CKB%00Y%0FR%C3%8B%17%C2%97I%C2%8D%C3%84IjI%C2%983t%C3%A0%7C%3B%C3%B0%C3%98%C3%83%C3%8D(%C2%8E%C2%92%C2%83%C2%83%C2%B5t%C2%A2%09%5B%C2%8A%C2%A6%C3%90Q%1C%7CN%0E%C2%ABp%C3%A7%C3%95%C2%BE%5Br%C2%86%C3%B9%1A%C2%81%C2%AB%C2%8F%C3%86p%1E%C2%9C7%C3%A6%C3%B9%C2%BD%C2%89%1E%C3%AA%C3%B1k%C3%AD%C3%A8%C3%B1%C3%90%C2%92%04n%C3%B5%14%C3%9D8%C3%A3*%C3%80%C2%B2%C3%B5Y%C2%BE%13%19%5E%C3%A2%15g%04%C2%9E8Ck%2C%7B%17%15N%C3%97%C2%B5%C3%AA%C2%AC%C2%9B%C2%8E%C3%B0%C2%86%5E%C3%B9%22%C3%85%C3%89%18%1A!O%C3%97%C2%83%C2%A7%C3%A0%C3%93%C3%8DbZ%C3%8F%C2%B4%08%0A%C3%83%3C%1C%C3%B1%C3%B8%5B%C3%8B%C2%8Af%C3%A2%C2%91%C2%95%C2%89(%3CV)k-%C2%BD%C3%92%C2%B2%25%3Ac3%C2%BA%C2%BCU%C3%80%C2%82J*%C3%8D%C3%B8'%C2%9A%C2%B2%C3%B2%0B%3D%23%C2%B9%15%C2%92%C2%80r%C2%96q%18Y%17H%C3%BF%C3%9B%C3%AC%C3%BA9A%C2%89%C3%87Xrc%C3%B6%C3%884%C3%B5%3D%C3%AF%06%C3%BC%C2%AD%C2%BC%C2%85HY%C3%A2%7C%C2%90%60%C2%8A%C2%8D%C2%9C4%C3%A6%C3%8C%C2%9A%C2%92-%2C%24%7D%06%13%2B%C2%94%26%C2%B6%C2%A40%5E%C3%A0%1DE%13%C3%BC%1A%0B%C3%B9%3E%11%C3%BB%0EN%08%C3%B0%1D%5D02%C2%B1%3F%22%C3%AC%C3%A6%C2%85%1E%C3%9B%C3%AF%2Co3%C2%94%25%C3%9CK%C2%A4%C3%80j%10%C3%AB%C2%A4%C2%85T%2Crk%02%C2%AAy%C2%8D%C2%80lN(R%3C%00r1%12I%C2%8C%23O%05%C3%A1%C3%83W%C2%947%1D%7C%C2%B28%18%12Q%C3%A6%C2%85%C2%823%C2%9F%C3%B8t%07%0Fk%1E%C2%A6%C3%8A%C3%97%0C%0B%2B%C2%ADp%0A%C2%93%C3%A4%C2%91X%C3%8B(%3Ac)%24c%C2%A2w%C2%9A%C2%B7%2F%C2%AD%C3%82%3F%60e%C2%8C%C2%B0%C3%B6%0F%C3%88%20GF%C3%AA%C3%85%02G%C3%B3a%25%C2%B3y%7Bm%C3%84%14%3E%C3%AA%5CR%C2%A7%1Bue%C2%8D%20%C2%99!J%C2%AF%C2%B6%C2%A6y%C2%B3%0D%C2%A4%14%C2%A1%C3%8C%24%C2%A2%C2%9C%2F%C3%94%7C%C3%91_%3B8P%C2%84%C2%8C%C2%A3)%0C%C3%A5Y%5BI%C3%85%C2%8E%C2%88%C2%ACNv%C2%9A%C2%91%3B%C2%92%C2%8D%C2%980%0FX%C2%80%25%01*%C3%8B%C2%81%C2%AA%C2%A7%C3%A3%C3%91%1C%C3%BF%C2%8D%1B%14%C2%82o%7FL%1F%C2%8DA%7F%C2%92akD%C2%94%C2%BA%3A%C2%89M%C3%98.%C2%A1%3C%C2%A3%0A0h%C2%AE%C2%B4%25%C3%99L%C3%B2%C3%84%C2%BBg%C2%86U%C3%8D6%C3%85%C2%AE%22%05%3A%C3%98B%C2%80%C3%92%C3%8B%C3%95%C3%BD8%1F%C2%94%C3%AFt%C2%AF%C2%A1a%C3%ABGy%C2%A2!%7C%C3%B0%C3%88%C3%BC%C3%A6%02BP%23%C3%80%C2%AA%C3%BC%C3%BB%23%C2%91%C2%A2%C2%9F%C3%A1%C3%BD%C3%8Ch%C3%9F%C3%A5%5B*%18%C2%A5y%C2%98(%5Be%01K%C2%82%2F2%1Ee%C3%96%C2%8F%C3%93%18tB%22!U%C3%8C%19%C2%89%C2%A7%C2%A5d%C3%B3%C2%8A%C3%A0%20h%2C_%C3%A9%03*%10%0B%2FT%C2%8CH%7F%C3%92%C2%90%C3%AB%5C%C2%AC%C2%BC%12%C2%87%C3%95t%13%26%06%C2%A3%0A%C2%B6H%C2%93%14%C3%A7oa%C3%A5%C2%AB%C2%9E%C3%8E%C3%BF%C2%8F%7C%25F%C2%96%C3%90pyH%C3%87T%05L%C3%A1%03%C2%AF%3EDhJ%C3%A8%C2%91aS%C2%B1%C3%B1%C2%94r%09j%C3%84%C3%A4%C3%8BUK(a%C2%B1%C3%82%C2%88%C3%A6%C3%BD%02Js%C3%AA%3CK%11%C2%9C%19J%26%C3%A6%C3%89zWDCX%0F%20%20q%18t%C3%9F%C2%AF%C2%91%C3%B2hV%C2%B1%C3%A5%C3%96%09%03%5D%C3%90%C2%80)dd4%C2%81E%C3%9D%3E%C3%92%60%5D%C3%B3%C2%9A%C2%93%C2%84%C3%A7A%C3%9F%C2%BC%C2%BC%C2%AAi%3DNE%C3%84Ad%C3%A7%C3%88Ja%C2%BD%C2%8C%C2%B9%C3%A2%03z%2C~%7F%C3%90%C3%9BWQ%C3%AC%06%15%0B%C2%BC%C2%8EV%3BON%C3%BB%C2%A9MZ%C2%91(%C2%B7%10%C3%8B%C2%88%C3%93U-%5D%C3%80%22%26Z%12N%2C6%C2%AE%C2%83%C2%BB%11%3C%1A%C2%B8%C2%BFl%C2%8F_%5D%C3%B3%C3%86%C3%9F%C3%AF%06%C3%BA%24%C3%B3%C3%A9%15%C3%A2%C2%88%C3%B9%C3%A7%C2%906Xl%17b%C3%85%04%C3%91qx%3A%C3%98%3E%19%C2%A9(%01%C3%8C%C2%8B%C2%A2%C2%8A%C2%89%C2%AE%C2%A2%C2%A0%C2%AD%C3%B8%C3%A5%0C%C3%83%C2%A2%C3%92%5Di%C3%A9%C3%BDq%C3%9A%C2%99%C2%B3_%40%2B%C2%BB%C2%8F%07%C3%AEQ%7F%1C%C2%917%C3%B1%C2%AB%C3%97%C2%BC%C3%9E%16m%C2%81BM%C3%8Ap%C3%AC0%C2%8Ai4%19%00C%C2%BDe%C3%93W%C2%89%C2%96a%C2%97%2B%C3%AF%C2%89%C2%97%C3%9B%C3%AA%C3%AE%C2%A1h%C3%9C%2F%08%08h%05f%C2%A1e%C2%8C%C2%B6YV%C2%88%C2%9C%C2%80s%C2%91%14ga%5Ew%C2%A4%0E%C2%A1Z%C2%9B0%C2%B1%C3%ABB%C3%ACh%C3%98hW%60%5D%C3%ADF%C2%99%1DH%C2%A8%08b%7D%C2%BF%C2%80%C2%AD%C2%B3%C3%80%24%C2%8A%C3%88oM%19%C3%B0)%7Do(AY8Z%C2%84%C3%99%7C%C2%9A%C3%887-%C2%A1%C2%AF%C3%B5%C3%A2K%C2%9E%C2%AD%C2%BC%09%C3%9C%C2%BE%C2%94%C3%B4bip%C3%A1%C2%BE%C2%8A%C2%93J%C2%93%C2%8D%C3%84%5C%C3%88%17%C3%87n%C2%9E%16La%C2%A2%C2%B7%C2%93%0Ci%19%07%C3%95%1D%C2%9B%C3%A7z%C3%91K%C2%AB%C3%B1%C3%A1%C3%88%01%2C%C3%98Wad%C3%BA%3CdO%C2%81%C3%89K%1Au*%C3%B9%C2%8D%C3%8B%C2%AD%C3%A9%C3%9D%C3%80%C2%B7%C2%AEu%C3%BB%C3%99d%C3%91%04%C2%8D%C2%98rdn%C3%82%19N!%7B%3AL%24%C3%A6%3B%03%C3%BB%C3%9AF%C2%B2%C2%B5%12M%C3%83%C3%BA%C3%A6f%C3%AB%C3%8Dg%C3%9B%0FN3%05%C3%B2%1CL%25gJMq%C3%B6t%C2%98%C2%A8%C3%AF%3D%19%3BR%C3%AC%1F%7C%C2%B1%C3%97%C2%BC%C3%93%C3%BC%C2%93%5B%2B%C3%97%C2%97b%C3%B2%1E%12%04%C3%8C%C3%874)x%C2%A9%22%C2%BF%5C%C3%B1%C2%A6%C3%ACiy%3AI%C3%9D%C3%BE%C3%98%C2%BE%7D%7B%C3%B5%C3%99%C2%AE%C2%9E%C2%BB%2F%7F%3Cv%C2%BF%C2%BAs%C3%B4%C3%91%C2%93%C3%AC%C2%99%C2%8E%26!%5D%C3%B8%C2%9C%C2%8A%3B%24%19%C3%B0jm%5E8%C3%87)%C2%9F%3E%1D%C3%98H%C3%81%C2%8Fo%C2%AD%7C%C3%ABj%7B%C3%B1%C3%83%C2%95w%C3%BE%C3%93%C3%BF%C3%AB%C3%8E%C2%88%C2%961%C2%89%02%C2%AA%C3%90H%C3%82%C2%B4%C2%9F%C2%AC%C2%AF%C2%A7hi%C3%A0%C2%B2%C3%94%C2%B3%2F%C3%8F%C3%81%C2%84%5E%22(%7F%07%06OS%17%2B%C3%B9%C3%8Az%C3%BC%C3%BD%C2%9B%3D*%C2%B8%0B%3D%C3%B3%C3%A1F1r%7F%C3%9F%1B%7Dx%C2%94m%C3%B7%0D%C2%95%02-P3%C3%B4%C2%81%C2%AB%3E%C3%97%C2%A90%C2%80%C3%96%3A%C2%93N%C2%9C%14V%C2%BCJpc%C3%A8%C2%B7!%C2%A9%C3%BF%C3%92Bw%C2%A3%C2%A5n%C2%AE%25_%C2%B9%C2%94%C3%9CZ%C2%8F%3F%C3%83%C2%A3%C2%A8ZXSG%C2%B4%1D%C2%8D%1D%25%C3%A6%C3%80%C2%B8%C2%B4xHf%C3%BD%C2%83%3B%2C%C2%8C%C2%A8_%1C%5B%02%17%C2%96%C3%9B%C3%85%C2%83%C2%BB%C3%BC%C3%99%1D%C3%B9%22%22~%25Qk%C3%BC%C2%92%C2%9B%C2%9D%05%0F%0C%C3%A1%C3%B3%C3%B9%C2%98%C3%B3%7F%02%0C%00%7D5%C3%BA%C3%94F%03%C3%81%C2%B4%00%00%00%00IEND%C2%AEB%60%C2%82";
    var image1 = group7.add("image", undefined, File.decode(image1_imgString), {name: "image1"});
    image1.helpTip = "Image tooltip";

    // GROUP8
    // ======
    var group8 = palette.add("group", undefined, {name: "group8"});
    group8.orientation = "row";
    group8.alignChildren = ["left","center"];
    group8.spacing = 10;
    group8.margins = 0;

    // TPANEL1
    // =======
    var tpanel1 = group8.add("tabbedpanel", undefined, undefined, {name: "tpanel1"});
    tpanel1.alignChildren = "fill";
    tpanel1.preferredSize.width = 170.484;
    tpanel1.margins = 0;

    // TAB1
    // ====
    var tab1 = tpanel1.add("tab", undefined, undefined, {name: "tab1"});
    tab1.text = "Tab";
    tab1.orientation = "column";
    tab1.alignChildren = ["left","top"];
    tab1.spacing = 10;
    tab1.margins = 10;

    // TAB2
    // ====
    var tab2 = tpanel1.add("tab", undefined, undefined, {name: "tab2"});
    tab2.text = "Tab";
    tab2.orientation = "column";
    tab2.alignChildren = ["left","top"];
    tab2.spacing = 10;
    tab2.margins = 10;

    // TAB3
    // ====
    var tab3 = tpanel1.add("tab", undefined, undefined, {name: "tab3"});
    tab3.text = "Tab";
    tab3.orientation = "column";
    tab3.alignChildren = ["left","top"];
    tab3.spacing = 10;
    tab3.margins = 10;

// TPANEL1
// =======
    tpanel1.selection = tab3;

    // TREEVIEW1
    // =========
    var treeview1 = palette.add("treeview", [0,0,200,130], undefined, {name: "treeview1"});

    var treeitem1 = treeview1.add("node", "TreeItem");
    var treeitem2 = treeitem1.add("item", "TreeItem");
    var treeitem3 = treeitem1.add("item", "TreeItem");
    var treeitem4 = treeview1.add("node", "TreeItem");
    var treeitem5 = treeitem4.add("node", "TreeItem");
    var treeitem6 = treeitem5.add("item", "TreeItem");

    treeitem1.expanded = true;
    treeitem4.expanded = true;

    palette.show();

    return palette;

}());
