// $(document).ready(function() {
//     $('input:radio[name="custom_field[account][1]"]').on("change", function() {
//         if (this.checked && this.value == '1') {
//             $("#input-custom-field2, #input-custom-field3").show();
//             $("#input-custom-field4, #input-custom-field5, #input-custom-field6").hide();
//         } else {
//             $("#input-custom-field4, #input-custom-field5, #input-custom-field6").show();
//             $("#input-custom-field2, #input-custom-field3").hide();
//         }
//     });
// });

$(document).ready(function() {
    $('input:radio[name="custom_field[account][1]"]').on("change", function() {
        if (this.checked && this.value == '1') {
            $("#select-custom-field2, #select-custom-field3").show();
            $("#input-custom-field4").hide();
        } if (this.checked && this.value == '2') {
            $("#select-custom-field2, #select-custom-field3").show();
            $("#input-custom-field4").hide();
        } if (this.checked && this.value == '3') {
            $("#input-custom-field4").show();
            $("#select-custom-field2, #select-custom-field3").hide();
        } if (this.checked && this.value == '4') {
            $("#input-custom-field4").show();
            $("#select-custom-field2, #select-custom-field3").hide();
        } if (this.checked && this.value == '5') {
          $("#select-custom-field2, #select-custom-field3").show();
            $("#input-custom-field4").hide();
        }
    });
});