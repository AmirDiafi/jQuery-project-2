/*global $, document, alert, console, log*/

$(document).ready(function () {
    'use strict';

    //Instantiating a NiceScroll
    $('html').niceScroll({
        // cusomize The Scroll Bar
        cursorcolor: 'rgb(17, 30, 101)',
        cursorborder: 'none',
        cursorborderradius: 'none',
    });


    //Make The Header Take The Full View In The Page

    var windowHeight = $(window).height();

    $('.header').height(windowHeight);

    $(window).resize(function () {
        $('.header').height($(window).height());
    })

    // Adjust Position Of The Main
    
    // $('.header .main').css({
    //     paddingTop: ($('.header').height()
    //      - $('.header .main').height()) / 2
    // })

    // Pick The Max Geight And Set It

    var maxHeight = 0;

    $('.featrues .content').each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    })

    $('.featrues .content').height(maxHeight);

    // Satrt Go Down Button

    $('.go-down').click(function () {
        $('html, body').animate({
            scrollTop: ($('.featrues').offset().top)
        }, 700)
    })

    // Start Suggestion Box

    $('.subscribe form').on('keyup', 'input', function () {

        // Reset The finalString

        finalString = '';

        if (!$('.subscribe form button').next().is('ul.suggestion-box')) {
            $('<ul class="suggestion-box"></ul>').insertAfter('.subscribe form button')
        }

        var theSuggestionEmails = ['Gmail.com', 'Yahoo.com', 'Outlook.com', 'Hotmail.com'],
        theEmailValueUser = $('.subscribe form input'),
        finalString = '';

        for (var i = 0; i < theSuggestionEmails.length; i++) {
            finalString += '<li>' + theEmailValueUser.val() + '@' + theSuggestionEmails[i] + '</li>';
        }

        $('.suggestion-box').html(finalString)

        $('.subscribe form .suggestion-box').on('click', 'li', function () {
            theEmailValueUser.val($(this).text())
        })

        // It Does Not Work

        // if ($('.suggestion-box li').text() == ".") {
        //     $(this).parent().fadeOut(1000)
        // }
        
        
    })

    $('.subscribe').on('click', function (e) {
        e.preventDefault()
        $('.suggestion-box').slideUp(1000)
    })

    $('.subscribe form').on('click', function (e) {
        e.stopPropagation()
    })

    //Start Show More The Content

    $('.our-works .button-show').click(function (event) {
        event.preventDefault();
        $('.our-works div.three').slideToggle(1000);
        $('.our-works div.three').toggleClass('active');

        if ($('.our-works div.three').hasClass('active')) {
            $('.our-works .button-show').text('Show Less')
        } else {
            $('.our-works .button-show').text('Show More')
        }
    })

    // /Start Testimonial

    var right = $('.testimonial .container i.fa-chevron-right'),
        left = $('.testimonial .container i.fa-chevron-left');

        function checkClient() {

            //Left Button

            $('.testimonial .content div.active').is(':first-of-type') ? left.fadeOut() : left.fadeIn();
            $('.testimonial .content div.active').is(':last-of-type') ? right.fadeOut() : right.fadeIn();
        }
        
        checkClient();
        

    $('.container i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {

                $('.testimonial .content div.active').fadeOut(500, function () {
                    $(this)
                    .removeClass('active')
                    .next('.info')
                    .addClass('active')
                    .fadeIn(500);
    
                    checkClient();
                })

        } else {
            if ($(this).hasClass('fa-chevron-left')) {

                $('.testimonial .content div.active').fadeOut(500, function () {
                    $(this)
                    .removeClass('active')
                    .prev('.info')
                    .addClass('active')
                    .fadeIn(500);
    
                    checkClient();
                })

        } 
        }

    })

    //Set The Height Of Content Cont From The Our Qork Section

    var maxHeight = 0;

    $('.our-team .content .cont').each(function () {
        maxHeight = $(this).height();
    })

    $('.our-team .content .cont').height(maxHeight);

    //Start Our Team OnMouse Leave & Enter

    $('.our-team .content .cont').on({
        mouseenter: function () {
            $($(this).data('person')).addClass('active').siblings().removeClass('active')
        },
            mouseleave: function () {
                $($(this).data('person')).removeClass('active')
            }
    })


    //Go Here Us Section

    $('.hire-us').click(function () {
        $('html, body').animate({
            scrollTop :$('.our-team').offset().top
        }, 1000)
        
    })

    //Go Our Works Section

    $('.over-works').click(function () {
        $('html, body').animate({
            scrollTop :$('.our-works').offset().top
        }, 1000)
        
    })

    



})