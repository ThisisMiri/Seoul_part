var btnModal = document.querySelector('.btn-modal');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal .btn-close');

btnModal.addEventListener('click', function() {
    modal.classList.add('active');
})

btnModal.addEventListener('click', function() {
    modal.classList.add('active');
})

btnClose.addEventListener('click', function() {
    modal.classList.remove('active');
})




modal.addEventListener('click', function() {
    var target = e.target;
    var isLayer = target.classList.contains('modal-layer');
    console.log(isLayer);

    if(isLayer) {
        modal.classList.remove('active');
    }
})






























