$(document).ready(function(){

    /*active slick slider*/
    $('.slider-item').slick({
    });
    
    /*================================= END ===============================*/

    /*form file onclick feedback cv and motivation upload*/
    $('#file-cv').on('click', function() {
        console.log('click')

        function setValueCV() {
            console.log('in de function');
            $('.custom-file-control.cv').text($('#file-cv').val());

            if($('.custom-file-control.cv').text() != "") {
                console.log('in de if');
                clearInterval(myInterval);
            }

        }

        myInterval = setInterval(setValueCV, 200);


    });

        $('#file-motivation').on('click', function() {
        console.log('click')

        function setValueMotivation() {
            console.log('in de function');
            $('.custom-file-control.motivation').text($('#file-motivation').val());

            if($('.custom-file-control.motivation').text() != "") {
                console.log('in de if');
                clearInterval(myInterval2);
            }

        }

        myInterval2 = setInterval(setValueMotivation, 200);


    });

    /*================================= END ===============================*/

});
