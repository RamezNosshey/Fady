$(document).ready(function(){

  $('#creat_team').click(function(){
    if($('#t_1_f').val() == "" || $('#t_2_f').val() == ""){
        alert('يوجد حقل فراغ');
    }else{
        localStorage.setItem('t_1', $('#t_1_f').val());
        localStorage.setItem('t_2', $('#t_2_f').val());
        $('.handle_div').removeClass('d-none');
        $('.handle_div').addClass('d-flex');
        $('.entry_div').removeClass('d-flex');
        $('.entry_div').addClass('d-none');
        $('#t_1_n').text(localStorage.getItem('t_1'));
        $('#t_2_n').text(localStorage.getItem('t_2'));
    }
});

$('#creat_new_team').click(function(){
    if(confirm("هل تريد بدء فريق جديد؟ ")){
        localStorage.removeItem('t_1');
        localStorage.removeItem('t_2');
        $('#t_1_f').val('');
        $('#t_2_f').val('');
        $('#note').val('');
        $('.handle_div').removeClass('d-flex');
        $('.handle_div').addClass('d-none');
        $('.entry_div').removeClass('d-none');
        $('.entry_div').addClass('d-flex');
    }
});


if(localStorage.getItem('t_1') === null || localStorage.getItem('t_1') === "undefined" || localStorage.getItem('t_2') === null || localStorage.getItem('t_2') === "undefined"){

    $('.handle_div').removeClass('d-flex');
    $('.handle_div').addClass('d-none');
    $('.entry_div').removeClass('d-none');
    $('.entry_div').addClass('d-flex');

}else{

    $('.handle_div').removeClass('d-none');
    $('.handle_div').addClass('d-flex');
    $('.entry_div').removeClass('d-flex');
    $('.entry_div').addClass('d-none');
    $('#t_1_n').text(localStorage.getItem('t_1'));
    $('#t_2_n').text(localStorage.getItem('t_2'));

}


$('#plus_1').click(function() {
    var t_1 = parseInt($('#t_1').text());
    $('#t_1').text(t_1+1);
});
$('#minus_1').click(function() {
    var t_1 = parseInt($('#t_1').text());
    $('#t_1').text(t_1-1);
});


$('#plus_2').click(function() {
    var t_2 = parseInt($('#t_2').text());
    $('#t_2').text(t_2+1);
});
$('#minus_2').click(function() {
    var t_2 = parseInt($('#t_2').text());
    $('#t_2').text(t_2-1);
});


});