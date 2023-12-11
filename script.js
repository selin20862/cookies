// cookies

const x = Cookies.get('cookies');

if (x != 'accepted') {
    $('#container').show();
}

$('#accept').click(function() {
    Cookies.set('cookies', 'accepted', { expires: 365});
    $('#container').hide();
    alert('Cookies accepted');
});

$('#refuse').click(function() {
    $('#container').hide();
    setTimeout(function() {
        $('#container').show();
    }, 2000);
    alert('Cookies refused');
});