const app = {
    props: {
        dropdownOnEvents: ['click', 'focusin', 'mouseenter'],
        dropdownOffEvents: ['focusout', 'mouseleave'],

        imgs: ['#galleryPic1', '#galleryPic2', '#galleryPic3', '#galleryPic4','#galleryPic5', '#galleryPic6'],
        imgNo: 0,
        galleryContent: '.gallery-content'
    },
    utils: {
        dropdownToggle: function (menu, box, dropdownEvents, condition) {
            if (window.innerWidth < 1280) { //Nav dropdown box works until 1280px-width screen
                for (events of dropdownEvents) {
                    document.querySelector(menu).addEventListener(events, function(){
                        document.querySelector(box).style.display = condition;
                    });
                };
            };
        },

        slicePlay: function (obj) {
            if (app.props.imgNo === obj.length || app.props.imgNo === 0) {
                app.props.imgNo = 0;
                document.querySelector(obj[obj.length - 1]).style.zIndex= "0"; // The 6th pic is hidden
            } else {
                document.querySelector(obj[app.props.imgNo - 1]).style.zIndex= "0"; //Former pic is hidden
            }
            document.querySelector(obj[app.props.imgNo]).style.zIndex= "1"; // Pic shows
            document.querySelector(obj[app.props.imgNo]).style.display = 'block';
            app.props.imgNo ++ ;
        },

        loopDisplay: function  (contents) {
            const loopContent = document.querySelector(contents)
            loopContent.appendChild(loopContent.firstElementChild);
        }
    }
}

//Header Dropdown box function
app.utils.dropdownToggle('#navigation-menu', '#navigation-box', app.props.dropdownOnEvents, 'block');
app.utils.dropdownToggle('#navigation-menu', '#navigation-box', app.props.dropdownOffEvents, 'none');
app.utils.dropdownToggle('#shopping-menu', '#shopping-box', app.props.dropdownOnEvents, 'block');
app.utils.dropdownToggle('#shopping-menu', '#shopping-box', app.props.dropdownOffEvents, 'none');
app.utils.dropdownToggle('#searching-menu', '#searching-box', app.props.dropdownOnEvents, 'block');
app.utils.dropdownToggle('#searching-menu', '#searching-box', app.props.dropdownOffEvents, 'none');

//Navigation menu hover effect
document.querySelectorAll('#navigation-box li').forEach(function(effect) {
    if (window.innerWidth < 1280) { //Nav dropdown box works until 1280px-width screen
        effect.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#999'; //$color-brown-grey
            this.children[0].style.color = '#F6F6F6'; //$color-white
        });
        effect.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#DDED9A'; //$color-green-light
            this.children[0].style.color = '#2E2E2E'; //$color-black
        });
    };
})
//Shopping menu hover effect
document.querySelectorAll('#shopping-box > div').forEach(function(effect) {
    effect.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#999'; //$color-brown-grey
        this.children[0].style.width = '45%';
        this.children[0].style.color = '#F6F6F6';//$color-green-dark
        this.children[1].style.color = '#F6F6F6'; //$color-white
    });
    effect.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#DDED9A'; //$color-green-light
        this.children[0].style.width = '40%';
        this.children[0].style.color = '#2E2E2E'; //$color-black
        this.children[1].style.color = '#2E2E2E'; //$color-black
    });
})



//Gallery automatically displays < 1280px width
setInterval('app.utils.slicePlay(app.props.imgs)', 3000);


//Gallery automatically displays >= 1280px width
setInterval('app.utils.loopDisplay(app.props.galleryContent)', 3000);