const app = {
    props: {
        dropdownOnEvents: ['click', 'focusin', 'mouseenter'],
        dropdownOffEvents: ['focusout', 'mouseleave'],

        imgs: ['#galleryPic1', '#galleryPic2', '#galleryPic3', '#galleryPic4','#galleryPic5', '#galleryPic6'],
        imgNo: 0,
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

        autoPlayGallery: function (gallery) {
            if (app.props.imgNo === gallery.length || app.props.imgNo === 0) {
                app.props.imgNo = 0;
                document.querySelector(gallery[app.props.imgNo + 5]).style.zIndex= "0"; // The 6th pic is hidden
            } else {
                document.querySelector(gallery[app.props.imgNo - 1]).style.zIndex= "0"; //Former pic is hidden
            }
            document.querySelector(gallery[app.props.imgNo]).style.zIndex= "1"; // Pic shows
            document.querySelector(gallery[app.props.imgNo]).style.display = 'block';
            app.props.imgNo ++ ;
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

//Gallery automatically displays
setInterval('app.utils.autoPlayGallery(app.props.imgs)', 3000);
