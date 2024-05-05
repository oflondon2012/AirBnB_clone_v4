$(document).ready(function () {
  const selectedAmens = {};

  // let listen to what occur on amenity checkboxes
  $('input[type="checkbox"][data-id]').change(function () {
    const amenId = $(this).data('id');
    const amenName = $(this).data('name');

    if ($(this).is(':checked')) {
      selectedAmens[amenId] = amenName;
    } else 
      delete selectedAmens[amenityId];
    }
    updateAmensList();
   });

  funtion updateAmensList() {
    const amenArray = Object.values(selectAmens);
    let amenList = amenArray.join(', ');

    if (amenList > 31) {
      amenList = amenList.slice(0, 31) + '...';
    }

    $('.amenities h4').text(amenList);

    }

   });
	    
