
$(document).ready(function(){


    $(document).on('focus mouseover','*',function(e){

        var classNames = e.currentTarget.className;
        var uri = e.currentTarget.baseURI;


        if( (uri.indexOf('customerdetail') > -1) || (uri.indexOf('timeactivity') > -1) ){

            setTimeout(function(){

                var stopWatchCount = $('#stopWatchBox').length;

                if(stopWatchCount === 0){

                    //var z = $('div[data-dojo-attach-point="_noEnterStartAndEndSection"]')
                    var timerElement = "<div id='stopWatchBox'><div id='stopWatchStart'></div><div id='stopWatchStop'></div></div>";
                    $('div[data-dojo-attach-point="_noEnterStartAndEndSection"]').append(timerElement)

                    $('#stopWatchStart').show();
                    $('#stopWatchStop').hide();

                    var sec = -1;
                    var intervalId = undefined;

                    $(document).on('click','#stopWatchStart',function(e){
                        $('#stopWatchStart').hide();
                        $('#stopWatchStop').show();

                        var startCount = $('div[data-dojo-attach-point="_noEnterStartAndEndSection"] > div > input');

                        if(startCount.val() !== ''){
                            var countParts = $(startCount).val().split(':');
                            sec = countParts[0] * 3600 + countParts[1] * 60;
                        }

                        intervalId = setInterval(function () {

                            var seconds = pad(++sec % 60);
                            var minutes = pad(parseInt(sec / 60, 10)% 60 ) ;
                            var hours = pad(parseInt(sec / 3600, 10));


                            $(startCount).val(hours + ':' + minutes + ':' + seconds);


                        }, 1000);
                    });

                    $(document).on('click','#stopWatchStop',function(e){

                        var startCount = $('div[data-dojo-attach-point="_noEnterStartAndEndSection"] > div > input')

                        $('#stopWatchStart').show();
                        $('#stopWatchStop').hide();

                        clearInterval(intervalId);

                        var currentCountParts = $(startCount).val().split(':');
                        //console.log(currentCountParts);

                        if(currentCountParts[2] >= 30){
                            currentCountParts[1] = parseInt(currentCountParts[1]) + 1;
                        }

                        var newTimeStr = pad(parseInt(currentCountParts[0])) + ':' + pad(parseInt(currentCountParts[1]));

                        //console.log(newTimeStr);

                        $(startCount).val(newTimeStr);
                        $(startCount).focus();
                        $('input[name=duration]').attr('value',newTimeStr);

                        sec = -1;
                    });

                }

            },1000);
        }


    });

	function pad(val) { return val > 9 ? val : "0" + val; }
});
