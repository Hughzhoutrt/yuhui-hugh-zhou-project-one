
const dropdown = document.querySelectorAll('.dropdown-menu').forEach(eachMenu => {
    eachMenu.addEventListener('click', function(){
        // run this code when the <h1> is clicked
        alert('You have successfully signed up for our newsletter!');
    })
});


