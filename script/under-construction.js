const app = {
    props: {},
    utils: {}
}

//Aoo.props declaire
app.props.dropdownOnEvents = ['click', 'focusin', 'mouseenter'];
app.props.dropdownOffEvents = ['focusout', 'mouseleave'];

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
}

app.init();