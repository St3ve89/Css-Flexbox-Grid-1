var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');

// console.dir(backdrop);
// console.log('buttons', selectPlanButtons.length)
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}


// let backdrop = document.querySelector('.backdrop');
// let selectPlanButtons = document.querySelectorAll('.plan button');
// let modal = document.querySelector('.modal');

// console.dir(backdrop);
// console.log('buttons', selectPlanButtons.length)

// selectPlanButtons.forEach(element => {
//     element.addEventListener('click', () => {
//         console.log('click')
//         modal.style.display = 'block';
//         backdrop.style.display = 'block';
//     })
// })
