$(function(){

  continueForm();
});

  function continueForm(){
    $('#first-button').on('click', function(event){
      event.preventDefault();
      $('#name-age').hide();
      $('#amount-note-email').show();
    });
  };
