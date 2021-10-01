const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keydown",function(event){
    if(event.code == "Enter")
    {
        search();
    }
});
function search(){
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q="+ input+ "&source=hp&ei=r5BUYfLRFdnahwO21ZP4Bw&iflsig=ALs-wAMAAAAAYVSev_AJdHmHyFl1996g3EMZnBNCMJYQ&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMggIABCABBCxAzILCAAQgAQQsQMQgwEyCAgAEIAEELEDMggILhCABBCxAzIFCAAQgAQyBQguEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEOg4ILhCABBCxAxDHARDRAzoICC4QsQMQgwE6DgguEIAEELEDEMcBEKMCOggIABCxAxCDAToLCC4QgAQQxwEQowI6EQguEIAEELEDEMcBEKMCEJMCOgsILhCABBCxAxCDAVDqB1i-DWDoDmgAcAB4AIABhwGIAegGkgEDMC43mAEAoAEB&sclient=gws-wiz&ved=0ahUKEwiy5d7lyaTzAhVZ7WEKHbbqBH8Q4dUDCAc&uact=5"
}

//  Dark Mode
var icon = document.getElementById("theme-icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme"); 
}