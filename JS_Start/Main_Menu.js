var  menuItems = [];

menuItems.push(['JS Function','JS_Start.html']);
menuItems.push(['DoubleArrays','Double_Arrays.html']);
menuItems.push(['TestPage','testPage.html']);

function inintMainMenu(id) {
    var menu = document.getElementById('main_menu');
    var currentPage = '';
    for (var i = 0; i < menuItems.length;i++){
        if (id == i){
            currentPage = 'current_page';
        } else {
            currentPage = '';
        }
        menu.innerHTML = menu.innerHTML + "<a class='one_menu_item' "+currentPage+" href='"+menuItems[i][1]+"'>"+menuItems[i][0]+"</a>";
    }
}

