
let IsRotated = false

IsRotated = document.querySelector('.chevron').addEventListener('click', function(){
    IsRotated = true
})

if (IsRotated === true) {
    document.querySelector('.chevron').classList.add('rotate');
}