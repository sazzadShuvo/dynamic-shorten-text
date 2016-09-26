$('.shorten-text').filter(function () {
    var classes = $(this).attr('class');

    var number = classes.split('shorten-text shorten-text-');
    number = number[1];
    var buildClassName = '.shorten-text-' + number;

    $(buildClassName).shorten({showChars: parseInt(number)});
});