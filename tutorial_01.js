function myFunction() {
  
}

// セルでの関数として使用できます
function getDouble(x){
  return x*2;
}

// 特定のセルに値を入力する
function setData(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();  
  var sheet = ss.getActiveSheet();
  var range = sheet.getRange("A1");
  range.setValue(12345);
  
  sheet.appendRow([123,'文字列','aaa']);
}

// ウェブサイトの情報を取得する
function getData(){
  var sheet = SpreadsheetApp.getActiveSheet();

  var url = "https://www.asahi.com/";
  var res = UrlFetchApp.fetch(url);  
  var myRegexp = /<a href=\"([\s\S]*?)<\/a>/gi;
  var elems    = res.getContentText().match(myRegexp);
 
  var date = new Date();
  sheet.appendRow([date]);  // 日付を入れる
  
  for(var i in elems) {
    var title = elems[i];
    // 速報記事だけを処理
    if(title.indexOf("comtop_8")>=0){
      title     = title.replace(/(^\s+)|(\s+$)/g, "");
      title     = title.replace(/<\/?[^>]+>/gi, "");
      sheet.appendRow(["", title]);
    }    
  }
}
