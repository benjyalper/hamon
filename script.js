$('#subscribeBtn').on('click', function () {
    $('#hamonMessage').html('<h3 class="animate__animated animate__backInLeft">!!!חמוווןןן</h3>').show();
})

$('#byby').on('click', function () {
    if ($('#hamonMessage').is(':visible')) {
        $('#hamonMessage').hide();
    }
})
