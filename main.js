function showControls(flag){
  if(flag){
    $( ".copy-me" ).show();
    $( "#directions" ).show();
    $( "#copy-button" ).show();
    $( "#download-file-button" ).show();
  }
  else {
    $( ".copy-me" ).hide();
    $( "#directions" ).hide();
    $( "#copy-button" ).hide();
    $( "#download-file-button" ).hide();
  }
}

showControls(false);

function presentSignature(){
  // show user the the results
  document.getElementById("demo").innerHTML=signature;
  //suggest to the user to edit or make another
  document.getElementById("clip_button").innerHTML = "Update";
  // add signature to hidden input field
  $('#zc-input').val(signature);
  // add HTML to file link
  var fileName = companyInitals + '_' + first + '.html';
  addSignatureToFile(fileName, signature);
}

function copyToClipboard() {
  // adds HTML to user's clipboard
  var client = new ZeroClipboard($('#copy-button'), {
      moviePath : 'util/ZeroClipboard.swf'
  });
  client.on('dataRequested', function(client, args){
       client.setText(signature);
       document.getElementById("copy-button").innerHTML = "HTML Copied! Copy again?";
  });
  document.getElementById("copy-button").innerHTML = "HTML Copied! Copy again?";
}

function addSignatureToFile(filename, emailSig) {
  // stores HTML into link for file downloading
  var $element = $('a#download-file-button');
  $element.attr('href','data:text/html; charset=utf-8,' + encodeURIComponent(emailSig));
  $element.attr('download', filename);
}