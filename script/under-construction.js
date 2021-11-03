const app = {
    props: {
        dropdownOnEvents: ['click', 'focusin', 'mouseenter'],
        dropdownOffEvents: ['focusout', 'mouseleave'],
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