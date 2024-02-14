$(document).ready(function () {
    $('#form').submit(function (e) {
        e.preventDefault();
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
