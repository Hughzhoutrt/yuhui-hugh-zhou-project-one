const app = {
    props: {
        dropdownOnEvents: ['click', 'focusin', 'mouseenter'],
        dropdownOffEvents: ['focusout', 'mouseleave']
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
document.querySelector('#navigation-box li').addEventListener('mouseover', function() {
    document.querySelector('#navigation-box li a').style.color = 'red';
    console.log(this);
});
