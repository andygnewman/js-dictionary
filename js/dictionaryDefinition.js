$(document).ready(function() {

  $('.dictionary').on('submit', function(e) {

    e.preventDefault();

    var wordToDefine = $('input.word').val();

    var destUrl = 'https://montanaflynn-dictionary.p.mashape.com/define';

    var template = $('template').html();

    $.ajax({
      type: "GET",
      url: destUrl,
      dataType: "json",
      data: {word: wordToDefine},
      success: function(result) {
        result.word = wordToDefine;
        console.log(result);
        $('.container').prepend(Mustache.render(template, result));
      },
      error: function(err) {
        $('.container').prepend("Error: " + err);
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Key", //put key here//)
      }
    }).always(function() {
      $('input.word').val('');
    });

  });

});
