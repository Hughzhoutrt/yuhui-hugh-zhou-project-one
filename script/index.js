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
    for (events of dropdownEvents) {
        document.querySelector(menu).addEventListener(events, function () {
            document.querySelector(box).style.display = condition;
        });
    };
};

app.utils.dropdownToggleNav = function (menu, box, dropdownEvents, condition) {
    if (window.innerWidth < 1280) { //Nav dropdown box works until 1280px-width screen
        app.utils.dropdownToggle(menu, box, dropdownEvents, condition);
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
    app.utils.dropdownToggleNav('#navigation-menu', '#navigation-box', app.props.dropdownOnEvents, 'block');
    app.utils.dropdownToggleNav('#navigation-menu', '#navigation-box', app.props.dropdownOffEvents, 'none');
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
    });
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
    });
    //Search bar focus effct 
    document.querySelector('#searching-box input').addEventListener('focusin', function () {
        this.style.width = '80%';
    });
    document.querySelector('#searching-box input').addEventListener('focusout', function () {
        this.style.width = '60%';
    });
    //Search bar searching function
    document.querySelector('#searching-submitting-button').addEventListener('click', function (e) {
        e.preventDefault();
        const inputValue = document.querySelector('#searchInputValue').value;
        if (inputValue.length === 0) {
            alert(`Please enter your recipe in searching text area!`)
        } else {
        const alertValue = `Sorry! You are going to search your recipe via Google!\r\n 
        Our dear user, our recipe searching function is still in development, please use google and we are going to provide our searching service to you soon!`
        alert(alertValue);
        window.location.href = `https://www.google.com/search?q=${inputValue}`;
        }
    });
    //Gallery automatically displays < 1280px width
    app.utils.smallGallery();
    //Gallery automatically displays >= 1280px width
    app.utils.bigGallery();

    //Subsription email
    document.querySelector('#subscription-submitting-button').addEventListener('click', function (e) {
        e.preventDefault();
        const inputValue = document.querySelector('#emailSubsription').value;
        if (inputValue.length === 0) {
            alert(`Please enter your email in subscription text area!`)
        } else {
       alert(`Thanks for your subscription! We are going to share our new updates with you via ${inputValue}.`)
        }
    });
}

app.init();