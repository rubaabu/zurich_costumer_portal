//Logout
function logoff() {
        Object.keys(localStorage)
            .forEach(function (key) {
                localStorage.removeItem(key);
            });
        $.ajax({
            url: "/account/LogOff",
            method: 'POST',
            data: "",
            success: function (res) {
                if (res.Success) {
                    window.location = res.Url;
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                $('.serverside-error .error-text').html(xhr.Message);
            }
        });
}
var fetch_id = '';
var url = '';
$(document).ready(function(){
    if(window.localStorage){
        var userName = localStorage.getItem("user_name");
        var is_admin = localStorage.getItem("user_role") == "Admin";
        userName? $("#user_name").html('Welcome '+'<span>'+userName+'</span>').css({"display":"inline-block"}):$("#user_name").css({"display":"none"});
        var role = is_admin ? $("#user_role").css({"display":"inline-block"}):"";
    }
    $('#logoff').on('click', function () {
        logoff();
    });
    setTimeout(function(){
        if (window.localStorage) {
            localStorage.removeItem("user_name");
            localStorage.removeItem("user_role");
            logoff();
        }
    }, 1800000); 
    url = $(location).attr('href');
    if(url.indexOf('6_molecules-sdk') > 0){
        $('html, body').animate({
            scrollTop:0
        });
        setTimeout(function(){
            scrollToId();
        },300)
    }else if(url.indexOf('06_AgentFinder') > 0){
        window.location.href = url;
    }else{
        scrollToId();
    } 
    megaMenuAnchoring();
    sidebarAnchoring();    

    // Investment Calculator scripts
    var oneoff_value ;
    var monthly_value;
    $('.input-oneoff .btn-default').click(function(){
        var input_value = parseInt($(this).parents('.input-oneoff').find('.input-text input').val());
        monthly_value = $('.input-monthly').find('.input-text input').val();
        if($(this).attr('name') =="increment"){
            input_value+=1000;
            $('.input-oneoff .input-text input').val(input_value);
            $('.text-stats').show();
            $('.text-default').hide();
        }
        else{
            if((input_value != 0) && ($(this).attr('name') =="decrement")){
                input_value-=1000;
                $('.input-oneoff .input-text input').val(input_value);
                $('.text-stats').show();
                $('.text-default').hide();
                if((oneoff_value ==0) && (monthly_value ==0)){
                    $('.text-stats').hide();
                    $('.text-default').show();
                }
            }
            if((input_value ==0) && (monthly_value ==0)){
                $('.text-stats').hide();
                $('.text-default').show();
            
            }
        }
    });

    $('.input-monthly .btn-default').click(function(){
        var input_value = parseInt($(this).parents('.input-monthly').find('.input-text input').val());
        oneoff_value = $('.input-oneoff').find('.input-text input').val();
        if($(this).attr('name') =="increment"){
            input_value+=5;
            $('.input-monthly .input-text input').val(input_value);
            $('.text-stats').show();
            $('.text-default').hide();
        }
        else{
            if((input_value != 0)){
                input_value-=5;

                $('.input-monthly .input-text input').val(input_value);
                $('.text-stats').show();
                $('.text-default').hide();
                if((oneoff_value ==0) && (monthly_value ==0)){
                    $('.text-stats').hide();
                    $('.text-default').show();
                }
            }
            if((oneoff_value ==0) && (input_value ==0)){
                $('.text-stats').hide();
                $('.text-default').show();
            }
        }

    });

    function rangeSlider(){
        
        var slider = $('.range-slider'),range = $('.range-slider-range'),value = $('.range-slider-value');
        var years = 5;
        slider.each(function(){
            value.each(function(){
                var value = $(this).prev().attr('value');
                $(this).html(value);
            });
            range.on('change mousemove', function(){
                var DynWidth = parseInt($(this).val())*years;
                var c_value = DynWidth/years;
                $(this).next(value).html(c_value).css({"margin-left": (DynWidth)+"%"});
                $(this).next(value).html(this.value).css({"margin-left": (DynWidth)+"%"});
                $(".fillColorInner").css({"width": DynWidth+"%"});
                // console.log("DynWidth: ",DynWidth," years: ",years," c_value: ",c_value);
            });
        });
        
    };
rangeSlider();

/*Stacked column chart*/ 
    google.load("visualization", '1.1', { packages: ['corechart'] });
    google.setOnLoadCallback(drawChart);
        function drawChart(isOnChange) {
            var input_value = $('.input-monthly .input-text input').val();
            var years = $('.range-slider-range').val(); 
            var total_payment = 0;
            if(($('.input-monthly .input-text input').val() > 0)&& (($('.input-oneoff .input-text input').val()) > 0) ){
                total_payment = 0;
            }
            else{
                if(($('.input-monthly .input-text input').val() > 0)&& (($('.input-oneoff .input-text input').val()) == 0) ){
                    total_payment = (input_value *years * 12);
                }
                else{
                    if((($('.input-oneoff .input-text input').val()) > 0) && ($('.input-monthly .input-text input').val() == 0)){
                        input_value = $('.input-oneoff .input-text input').val();
                        total_payment = (input_value*years);
                    }

                }

            }
            var percentage = {'low':0,'medium':0,'high':0};
            
            if(isOnChange && total_payment>0){
                percentage = {'low':total_payment*0.05,'medium':total_payment*0.10,'high':total_payment*0.15};
                
            }
            $('.years').html(years+" years");
            $('.total').html(total_payment);
            $('.percentage').html(percentage.low);
            var data = google.visualization.arrayToDataTable([
            ['General', 'Your total payment € ', 'Money might grow by € '+ percentage.low, {type: 'string', role: 'tooltip'}],
            ['Low growth', total_payment, percentage.low,'Money might grow by 5% : € '+percentage.low ],
            ['Medium growth', total_payment, percentage.medium, 'Money might grow by 10% : € '+percentage.medium],
            ['High growth', total_payment, percentage.high, 'Money might grow by 15% : € '+percentage.high]
            ]);
            var options = {
                width: 600,
                height: 700,
                legend: { position: ['none']},
                bar: { groupWidth: '50%' },
                isStacked: true,
                //Customized vAxis values 
                vAxis: {ticks: [{v:0, f:"€ 0"},{v:2000, f:"€ 2k"},{v:4000, f:"€ 4k"},{v:6000, f:"€ 6k"},{v:8000, f:"€ 8k"},{v:10000, f:"€ 10k"},{v:12000, f:"€ 12k"},{v:14000, f:"€ 14k"},{v:16000, f:"€ 16k"},{v:18000, f:"€ 18k"},{v:20000, f:"€ 20k"}]},
                series: {
                    0:{color:'#d5ceb4'},
                    1:{color: '#000066'}
                }
            };
            
            var view = new google.visualization.DataView(data);
            var chartDiv = document.getElementById('columnchart_stacked');
            var chart = new google.visualization.ColumnChart(chartDiv)
            
            google.visualization.events.addListener(chart, 'select', function () {
                highlightBar(chart, options, view);
            });
            chart.draw(data, options);
        }
 
    function highlightBar(chart, options, view) {
        var selection = chart.getSelection();
        if (selection.length) {
            var row = selection[0].row;
            var column = selection[0].column;

            //1.insert style role column to highlight selected column 
            var styleRole = {
                type: 'string',
                role: 'style',
                calc: function (dt, i) {
                    return (i == row) ? 'stroke-color: #000000; stroke-width: 2' : null;
                }
            };
            var indexes = [0, 1, 2];
            var styleColumn = findStyleRoleColumn(view)
            if (styleColumn != -1 && column > styleColumn)
                indexes.splice(column, 0, styleRole);
            else
                indexes.splice(column + 1, 0, styleRole);
            view.setColumns(indexes);
            //2.redraw the chart
            chart.draw(view, options);
        }
    }

    function findStyleRoleColumn(view) {
        for (var i = 0; i < view.getNumberOfColumns() ; i++) {
            if (view.getColumnRole(i) == "style") {
                return i;
            }
        }
        return -1;
    }
    $('.calculator-btn').on('click', function(){  
        drawChart(true);
     });    
});
function sidebarAnchoring(){
    $(document).on('click', '.mod-doc-sidebar li>a', function(){
        url = $(this).attr('href');    
        scrollToId();
    }); 
}
function megaMenuAnchoring(){
    $(document).on('click','a', function(){  
        url = $(this).attr('href');
        if($(this).text() == 'Live Chat' || $(this).hasClass('livechat-link')){
            $('.mod-chat').removeClass('hide');
        }else{
            scrollToId();
        }         
    });
}
function scrollToId(){
    if ($(location).attr('href').length > 0) {
        fetch_id = url.split("#")[1];
        if(fetch_id && $("#"+fetch_id).length > 0){
            $('html, body').animate({
                scrollTop: $('#'+fetch_id).offset().top - 160
            }, 1000);
        }else{
        }      
    }      
}
// Investment calculator scripts

