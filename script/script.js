document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            let modal = btn.nextElementSibling;
            
            if(modal.style.display === 'none' || !modal.style.display) {
                modal.style.display = 'block';
            } else {
                modal.style.display = 'none';
            }
        });
    });
});
