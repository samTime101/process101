// // https://stackoverflow.com/questions/27600506/stop-page-from-redirecting-after-submitting-google-form-through-ajax
$(document).ready(function () {
    $('#form').submit(function (e) {
        e.preventDefault();
        $('#submit-btn').prop('disabled', true);
        $('#submit-btn').css({'background-color': 'green','color': 'white'}).val('Submitting...');
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyp1ZF6vaxCE_Fl22vSDQ6GLQzudxSNSg2MtUgt40AZ2RW-z3VppHXSlibh407Ilk4sTg/exec",
            data: $(this).serialize(),
            type: "POST",
            success: function (data) {
                alert("FORM SUCCESS 101");
                window.location.reload();
            },
            error: function (xhr, status, error) {
                console.log('Submission failed: ' + error);
            }
        });
    });
});
