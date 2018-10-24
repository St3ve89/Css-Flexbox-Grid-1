var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons [i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}
