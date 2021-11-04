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
    //Comment posting
    document.querySelector('#comment-submitting-button').addEventListener('click', function (e) {
        e.preventDefault();
        //Getting value from form
        const name = document.querySelector('#nameCommentSending').value;
        const email = document.querySelector('#emailCommentSending').value;
        const web = document.querySelector('#webCommentSending').value;
        const text = document.querySelector('#textareaCommentSending').value;
        //Outest container
        const outerContainer = document.createElement('div');
        outerContainer.classList.add('flex');
        outerContainer.classList.add('flex-row');
        document.getElementById('commentContainer').appendChild(outerContainer);
        //Profile adding into outest container
        const profile = document.createElement('img');
        profile.src = './images/Chef-06.jpg';
        profile.alt = 'This is the profile of those who submitted a comment.';
        profile.style = 'width:70px;height:70px;';
        outerContainer.appendChild(profile);
        //Inner container 
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('background-brown-grey-light');
        innerContainer.classList.add('comment-content');
        outerContainer.appendChild(innerContainer);
        //Grey triangle
        const greyTriangle = document.createElement('div');
        greyTriangle.classList.add('grey-triangle');
        innerContainer.appendChild(greyTriangle);
        //Comment tittle
        const commentTittle = document.createElement('h3');
        commentTittle.textContent = `${name}`;
        innerContainer.appendChild(commentTittle);
        //Comment tittle - suffix
        const commentTittleSpan = document.createElement('span');
        commentTittleSpan.textContent = ` - ${email}`;
        commentTittle.appendChild(commentTittleSpan);
        //Comment Subtittle 
        const commentSubtittle = document.createElement('p');
        commentSubtittle.textContent = `${web}`;
        innerContainer.appendChild(commentSubtittle);
        //Comment text content
        const commentText = document.createElement('p');
        commentText.textContent = `${text}`;;
        innerContainer.appendChild(commentText);
        //Comment time
        const commentTime = document.createElement('p');
        const time = new Date();
        const currentTime = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0') + ':' + time.getSeconds().toString().padStart(2, '0') + ',' + ' ' + time.getFullYear() + '-' + (time.getMonth() + 1).toString().padStart(2, '0') + '-' + time.getDate().toString().padStart(2, '0');
        commentTime.textContent = `${currentTime}`;;
        innerContainer.appendChild(commentTime);
    });
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