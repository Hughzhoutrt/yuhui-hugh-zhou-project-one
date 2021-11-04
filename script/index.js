const app = {
    props: {},
    utils: {}
}

//Aoo.props declaire
app.props.dropdownOnEvents = ['click', 'focusin', 'mouseenter'];
app.props.dropdownOffEvents = ['focusout', 'mouseleave'];

app.props.imgs = ['#galleryPic1', '#galleryPic2', '#galleryPic3', '#galleryPic4', '#galleryPic5', '#galleryPic6'];
app.props.imgNo = 0;
app.props.galleryContent = '.gallery-content';
app.props.galleryPause = false;

//App.utils declaire
app.utils.dropdownToggle = function (menu, box, dropdownEvents, condition) {
    if (window.innerWidth < 1280) { //Nav dropdown box works until 1280px-width screen
        for (events of dropdownEvents) {
            document.querySelector(menu).addEventListener(events, function () {
                document.querySelector(box).style.display = condition;
            });
        };
    };
};

app.utils.sliceDisplay = function (obj) {
    if (window.innerWidth < 1024) {
        if (app.props.imgNo >= obj.length || app.props.imgNo === 0) {
            app.props.imgNo = 0;
            document.querySelector(obj[obj.length - 1]).style.zIndex = "0"; // The 6th pic is hidden
            document.querySelector(obj[obj.length - 1]).style.display = 'none';
        } else {
            document.querySelector(obj[app.props.imgNo - 1]).style.zIndex = "0"; //Former pic is hidden
            document.querySelector(obj[app.props.imgNo - 1]).style.display = 'none';
        }
        document.querySelector(obj[app.props.imgNo]).style.zIndex = "1"; // Pic shows
        document.querySelector(obj[app.props.imgNo]).style.display = 'block';
        app.props.imgNo++;
    }
};

app.utils.loopDisplay = function (contents) {
    const loopContent = document.querySelector(contents)
    loopContent.appendChild(loopContent.firstElementChild);
};

app.utils.smallGallery = setInterval('app.utils.sliceDisplay(app.props.imgs)', 3000);

app.utils.bigGallery = setInterval('app.utils.loopDisplay(app.props.galleryContent)', 3000);

app.init = function () {
    //Header Dropdown box function
    app.utils.dropdownToggle('#navigation-menu', '#navigation-box', app.props.dropdownOnEvents, 'block');
    app.utils.dropdownToggle('#navigation-menu', '#navigation-box', app.props.dropdownOffEvents, 'none');
    app.utils.dropdownToggle('#shopping-menu', '#shopping-box', app.props.dropdownOnEvents, 'block');
    app.utils.dropdownToggle('#shopping-menu', '#shopping-box', app.props.dropdownOffEvents, 'none');
    app.utils.dropdownToggle('#searching-menu', '#searching-box', app.props.dropdownOnEvents, 'block');
    app.utils.dropdownToggle('#searching-menu', '#searching-box', app.props.dropdownOffEvents, 'none');

    //Navigation menu hover effect
    document.querySelectorAll('#navigation-box li').forEach(function (effect) {
        if (window.innerWidth < 1280) { //Nav dropdown box works until 1280px-width screen
            effect.addEventListener('mouseover', function () {
                this.style.backgroundColor = '#999'; //$color-brown-grey
                this.children[0].style.color = '#F6F6F6'; //$color-white
            });
            effect.addEventListener('mouseleave', function () {
                this.style.backgroundColor = '#DDED9A'; //$color-green-light
                this.children[0].style.color = '#2E2E2E'; //$color-black
            });
        };
    })

    //Shopping menu hover effect
    document.querySelectorAll('#shopping-box > div').forEach(function (effect) {
        effect.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#999'; //$color-brown-grey
            this.children[0].style.width = '45%';
            this.children[0].style.color = '#64A604';//$color-green-dark
            this.children[1].style.color = '#F6F6F6'; //$color-white
        });
        effect.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '#DDED9A'; //$color-green-light
            this.children[0].style.width = '40%';
            this.children[0].style.color = '#2E2E2E'; //$color-black
            this.children[1].style.color = '#2E2E2E'; //$color-black
        });
    })

    //Gallery automatically displays < 1280px width
    app.utils.smallGallery;

    //Gallery automatically displays >= 1280px width
    app.utils.bigGallery;

    //Gallery controll button functions
    document.querySelector('#gallery-previous-button').addEventListener('click', function () {
        app.props.imgNo--;
        if (app.props.imgNo <= 0) {
            app.props.imgNo = 6;
            document.querySelector(app.props.imgs[0]).style.zIndex = "0"; // Pic shows
            document.querySelector(app.props.imgs[0]).style.display = 'none';
        } else {
            document.querySelector(app.props.imgs[app.props.imgNo]).style.zIndex = "0"; // Pic shows
            document.querySelector(app.props.imgs[app.props.imgNo]).style.display = 'none';
        }
        document.querySelector(app.props.imgs[app.props.imgNo - 1]).style.zIndex = "1"; // Pic shows
        document.querySelector(app.props.imgs[app.props.imgNo - 1]).style.display = 'block';
    });

    document.querySelector('#gallery-next-button').addEventListener('click', function () {
        app.props.imgNo++;
        if (app.props.imgNo >= 6) {
            app.props.imgNo = 0;
            document.querySelector(app.props.imgs[app.props.imgs.length - 1]).style.zIndex = "0"; // Pic shows
            document.querySelector(app.props.imgs[app.props.imgs.length - 1]).style.display = 'none';
        } else {
            document.querySelector(app.props.imgs[app.props.imgNo - 2]).style.zIndex = "0"; // Pic shows
            document.querySelector(app.props.imgs[app.props.imgNo - 2]).style.display = 'none';
        }
        document.querySelector(app.props.imgs[app.props.imgNo]).style.zIndex = "1"; // Pic shows
        document.querySelector(app.props.imgs[app.props.imgNo]).style.display = 'block';
    });



    document.querySelector('#gallery-pause-button').addEventListener('click', function () {
        app.props.galleryPause = !app.props.galleryPause;
        console.log(app.props.galleryPause);

        if (app.props.galleryPause === true) {
            document.querySelector('#gallery-pause-button').style.backgroundColor = 'rgba(100,166,4,0.8)';//$color-green-dark
            document.querySelector('#gallery-pause-button i').style.color = 'rgba(246,246,246,0.9)'; //$color-white
            document.querySelector('#gallery-pause-button p').style.color = 'rgba(246,246,246,0.9)'; //$color-white
            if (window.innerWidth < 1024) {
                clearInterval(app.utils.smallGallery);
            } else {
                clearInterval(app.utils.bigGallery);
            }
        } else {
            document.querySelector('#gallery-pause-button').style.backgroundColor = 'rgba(242,242,242,0.8)';//$color-green-dark
            document.querySelector('#gallery-pause-button i').style.color = 'rgba(46,46,46,0.9)'; //$color-white
            document.querySelector('#gallery-pause-button p').style.color = 'rgba(46,46,46,0.9)'; //$color-white
            if (window.innerWidth < 1024) {
                app.utils.smallGallery = setInterval('app.utils.sliceDisplay(app.props.imgs)', 3000);
            } else {
                app.utils.bigGallery = setInterval('app.utils.loopDisplay(app.props.galleryContent)', 3000);
            }
        }
    });

}

app.init();


