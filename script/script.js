const app = {
    props: {
        dropdownOnEvents: ['click', 'focusin', 'mouseenter'],
        dropdownOffEvents: ['focusout', 'mouseleave'],

        imgs: ['#galleryPic1', '#galleryPic2', '#galleryPic3', '#galleryPic4','#galleryPic5', '#galleryPic6'],
        imgNo: 0,
        zNo: 1
    },
    utils: {
        dropdownToggle: function (menu, box, dropdownEvents, condition) {
            for (events of dropdownEvents) {
                document.querySelector(menu).addEventListener(events, function(){
                    document.querySelector(box).style.display = condition;
                });
            };
        },
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
    effect.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#999'; //$color-brown-grey
        this.children[0].style.color = '#F6F6F6'; //$color-white
    });
    effect.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#DDED9A'; //$color-green-light
        this.children[0].style.color = '#2E2E2E'; //$color-black
    });
})

//Gallery automatically displays
function autoPlayGallery (gallery) {
        app.props.imgNo ++;
        console.log(app.props.imgNo);
        if ( app.props.imgNo >= gallery.length) {
            app.props.imgNo = 0;
            console.log(`reset`);
        }
        document.querySelector(gallery[app.props.imgNo]).style.zIndex= app.props.zNo;
        document.querySelector(gallery[app.props.imgNo]).style.display = 'block';
        console.log(gallery[app.props.imgNo]);

        app.props.zNo ++;
        console.log(app.props.zNo);
    
}
setInterval('autoPlayGallery(app.props.imgs)', 3000);


