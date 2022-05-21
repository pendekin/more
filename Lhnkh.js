
  function tnj(){
    var usn = document.getElementById('usn').value;
    var trf = document.getElementById('trf').value;
    var wa= "https://wa.me/6285172192077?text=";
    var kat= encodeURI("Hallo Admin Getduit.com, saya withdraw dan masih pending.");
    var kate= encodeURI("Username: ");
    var kat2= encodeURI("Asal traffic dari: ");
    
    var encd= kat + '%0A' + '%0A' + kate + usn + '%0A' + kat2 + trf;
   
    window.open (wa+encd) ;
  }
