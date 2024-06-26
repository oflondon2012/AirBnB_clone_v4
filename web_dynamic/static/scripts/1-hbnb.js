window.addEventListener('load', function () {
   // listen of change on each input
   const amensIds = {};
   $('input[type=checkbox]').click(function () {
     if ($(this).prop('checked')) {
       amensIds[$(this).attr('data-id')] = $(this).attr('data-name');
     } else if (!$(this).prop('checked')) {
       delete amensIds[$(this).attr('data-id')];
     }
     if (Object.keys(amensIds).length === 0) {
       $('div.amenities h4').html('&nbsp');
     } else {
       $('div.amenities h4').text(Object.values(amensIds).join(', '));
     }
   });
      
});
