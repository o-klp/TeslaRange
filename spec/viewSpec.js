function testMithril(mock) {
  // test rangeDashboard view

  test(function(){
    return typeof rangeDashboard.view === 'function';
  });

  var root = mock.window.document.createElement("div");
  m.render(root, rangeDashboard.view());

  test(function(){
    return root.childNodes.length === 1;
  });
  test(function(){
    return root.childNodes[0].tagName === "DIV";
  });
  test(function(){
    return root.childNodes[0].className === "rangeDashboard";
  });
  test(function(){
    return root.childNodes[0].childNodes[0].tagName === "TABLE";
  });

  var table = root.childNodes[0].childNodes[0];
  test(function(){
    return table.childNodes[0].tagName === "TR";
  });
  test(function(){
    return table.childNodes[1].tagName === "TR";
  });
  test(function(){
    return table.childNodes[2].tagName === "TR";
  });
  test(function(){
    return table.childNodes[3].tagName === "TR";
  });
  test(function(){
    return table.childNodes[4].tagName === "TR";
  });

  // i.e.   250kw/h     136 rated range     140 mi to charger     5 mi buffer   (slow or descending)    (55 mph)    (4:03 pm)
  var headerRow = table.childNodes[0];
  test(function(){
    return headerRow.childNodes[0].tagName === "TH";
  });
  test(function(){
    return headerRow.childNodes[0].textContent === "Average Energy";
  });
  test(function(){
    return headerRow.childNodes[1].tagName === "TH";
  });
  test(function(){
    return headerRow.childNodes[1].textContent === "Estimated Charge Needed";
  });
  test(function(){
    return headerRow.childNodes[2].tagName === "TH";
  });
  test(function(){
    return headerRow.childNodes[2].textContent === "distance";
  });
  test(function(){
    return headerRow.childNodes[3].tagName === "TH";
  });
  test(function(){
    return headerRow.childNodes[3].textContent === "Estimated Buffer";
  });

  var rows = [].slice.call(table.childNodes, (1));
  rows.forEach(function(row){
    test(function(){
      return row.childNodes[0].tagName === "TD";
    });
    test(function(){
      return row.childNodes[1].tagName === "TD";
    });
    test(function(){
      return row.childNodes[2].tagName === "TD";
    });
    test(function(){
      return row.childNodes[3].tagName === "TD";
    });
  });

  test(function(){
    return rows[0].childNodes[0].textContent === "250 Wh/mi";
  });
  test(function(){
    return rows[0].childNodes[1].textContent === "300 Wh/mi";
  });
  test(function(){
    return rows[0].childNodes[2].textContent === "350 Wh/mi";
  });
  test(function(){
    return rows[0].childNodes[3].textContent === "400 Wh/mi";
  });

};

testMithril(mock);

test.print(function(value) {console.log(value)});
