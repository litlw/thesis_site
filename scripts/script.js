// this is my JavaScript
$(document).ready(function() {
  $(document).keydown(x=>{
    $('#vid1').hide().prop('muted', true);
    $('#vid2').show().prop('muted', false);
    console.log('pressed');
  })
  $(document).keyup(x=>{
    $('#vid2').hide().prop('muted', true);
    $('#vid1').show().prop('muted', false);
    console.log('pressed');
  })
});
