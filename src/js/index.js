window.onload = function () {
    var lis = Array.from(document.querySelectorAll(".nav>li"))
    // var lis = Array.from(document.querySelectorAll(".main>li"))
    // for (var i = 0; i < nav.length; i++){
    //     nav[i].index = i;
    //     nav[i].onclick = function () {
    //         for (var j = 0; j < nav.length; j++){
    //             mainLi[j].className = "";
    //         }
    //         mainLi[this.index].className = "active";
    //     }
    // }
    var mySwiper = new Swiper(".main", {
        on: {
            slideChange:function(){
                var ind = this.activeIndex;
                console.log(ind)
                lis.forEach(function(item){
                    item.classList.remove("active")
                })
                lis[ind].classList.add("active")
            }
        },
        
        disableOnInteraction: false,
    })
    lis.forEach(function (item,i) {
        item.index = i
        item.ontouchend = function (e) {
            e.preventDefault()
            mySwiper[0].slideTo(this.index)
        }
    })
}