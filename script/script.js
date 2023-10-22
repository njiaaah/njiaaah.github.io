document.addEventListener('DOMContentLoaded',function(){


    const maps = document.querySelectorAll('.section-location-map');
    const mapZoomInBtns = document.querySelectorAll('.map-zoom-in-btn')
    const mapZoomOutBtns = document.querySelectorAll('.map-zoom-out-btn')

    // SPEED OF ZOOMING IN/OUT
    let scaleSpeed = parseFloat(0.25)

    for (let i = 0; i < maps.length; i++) {
        mapZoomInBtns[i].addEventListener('click', ()=>{
            // SET MAX ZOOM IN
            if(maps[i].dataset.scale < parseFloat(2.5)) {
                let newScale = parseFloat(maps[i].dataset.scale) + scaleSpeed
                maps[i].style.transform = 'scale(' + newScale + ',' + newScale + ')'
                maps[i].dataset.scale = newScale
            }
        })      
    }
    for (let i = 0; i < maps.length; i++) {
        mapZoomOutBtns[i].addEventListener('click', ()=>{
            // SET MAX ZOOM OUT (DO NOT SET LESS THAN 1)
            if(maps[i].dataset.scale > parseFloat(1)) {
                let newScale = parseFloat(maps[i].dataset.scale) - scaleSpeed
                maps[i].style.transform = 'scale(' + newScale + ',' + newScale + ')'
                maps[i].dataset.scale = newScale
            }
        })      
    }

    // 

    // TABS

    // section location tabs

    const sectionLocTabsBtns = document.querySelector('.section-location-tab-wrap').children
    const sectionLocTabs = document.querySelectorAll('.section-location-content-item')

    for (let i = 0; i < sectionLocTabs.length; i++) {
        sectionLocTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionLocTabs.length; x++) {

                // hide and apply bottom border to selected tab btn
                // do not change *location* when copying
                sectionLocTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionLocTabsBtns[i].classList.add('section-location-tab-selected')

                // hide and show needed tab
                sectionLocTabs[x].style.display = 'none'
                sectionLocTabs[i].style.display = 'grid'
            }
        })
        
    }

    // section rare tabs

    const sectionRareTabsBtns = document.querySelector('.section-rare-formats-tab-wrap').children
    const sectionRareTabs = document.querySelectorAll('.section-rare-formats-content-item')

    for (let i = 0; i < sectionRareTabs.length; i++) {
        sectionRareTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionRareTabs.length; x++) {

                sectionRareTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionRareTabsBtns[i].classList.add('section-location-tab-selected')
                
                sectionRareTabs[x].style.display = 'none'
                sectionRareTabs[i].style.display = 'flex'
            }
        })
        
    }

    // section landscaping and engineering tabs

    const sectionLandTabsBtns = document.querySelector('.section-landscaping-tap-wrap').children
    const sectionLandTabs = document.querySelectorAll('.section-landscaping-content-item')

    for (let i = 0; i < sectionLandTabs.length; i++) {
        sectionLandTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionLandTabs.length; x++) {

                sectionLandTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionLandTabsBtns[i].classList.add('section-location-tab-selected')
                
                sectionLandTabs[x].style.display = 'none'
                sectionLandTabs[i].style.display = 'grid'
            }
        })
        
    }

    // section landscaping and engineering tabs

    const sectionHowTabsBtns = document.querySelector('.section-htb-tap-wrap').children
    const sectionHowTabs = document.querySelectorAll('.section-htb-tab-item')

    for (let i = 0; i < sectionHowTabs.length; i++) {
        sectionHowTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionLandTabs.length; x++) {

                sectionHowTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionHowTabsBtns[i].classList.add('section-location-tab-selected')
                
                sectionHowTabs[x].style.display = 'none'
                sectionHowTabs[i].style.display = 'block'
            }
        })
        
    }

    // SCROLLERS

    // scroller - элемент который скролится с классами horizontal-scroller, snaps-inline
    // controls - массив с кнопками для управления данного скрола

    function updateScrollerControls(scroller, controls) {
        currentScroll = parseInt((scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth) - 0.01) * controls.length)
        for (let i = 0; i < controls.length; i++) {
            controls[i].classList.remove('current-scroll')
        }
        controls[currentScroll].classList.add('current-scroll')
    }

    // btnIndex - порядковый номер кнопки по которой было кликнуто
    function clickScrollerControls(scroller,controls, btnIndex) {
        let offsetLeft = (btnIndex / (controls.length - 1)) * (scroller.scrollWidth - scroller.clientWidth)
        scroller.scrollTo({
            left: offsetLeft,
            behavior: 'smooth'
        })
    }

    // section ADVANTAGES - scroller 1

    const scroller01 = document.querySelector('#scroller01')
    const scroller01controls = document.querySelector('.section-advantages-contols').children

    scroller01.addEventListener('scroll', ()=>{
        updateScrollerControls(scroller01, scroller01controls)
    })

    for (let i = 0; i < scroller01controls.length; i++) {
        scroller01controls[i].addEventListener('click',()=>{
            clickScrollerControls(scroller01, scroller01controls ,i)
        })
    }

    // section RARE FORMATS item-01 - scroller 2

    const scroller02 = document.querySelector('#scroller02')
    const scroller02controls = document.querySelector('.rare-controls-0').children

    scroller02.addEventListener('scroll', ()=>{
        updateScrollerControls(scroller02, scroller02controls)
    })

    for (let i = 0; i < scroller02controls.length; i++) {
        scroller02controls[i].addEventListener('click',()=>{
            clickScrollerControls(scroller02, scroller02controls ,i)
        })
    }

       // section stock - scroller 3

   const scroller03 = document.querySelector('#scroller03')
   const scroller03controls = document.querySelector('.section-stock-controls').children

   scroller03.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller03, scroller03controls)
   })

   for (let i = 0; i < scroller03controls.length; i++) {
       scroller03controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller03, scroller03controls ,i)
       })
   }

   // section construction progress - scroller 4

   const scroller04 = document.querySelector('#scroller04')
   const scroller04controls = document.querySelector('.section-construction-progress-controls').children

   scroller04.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller04, scroller04controls)
   })

   for (let i = 0; i < scroller04controls.length; i++) {
       scroller04controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller04, scroller04controls ,i)
       })
   }

   // section news - scroller 5

   const scroller05 = document.querySelector('#scroller05')
   const scroller05controls = document.querySelector('.section-news-card-controls').children

   scroller05.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller05, scroller05controls)
   })

   for (let i = 0; i < scroller05controls.length; i++) {
       scroller05controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller05, scroller05controls ,i)
       })
   }

   // section formats - scroller 6

   const scroller06 = document.querySelector('#scroller06')
   const scroller06controls = document.querySelector('.section-format-controls').children

   scroller06.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller06, scroller06controls)
   })

   for (let i = 0; i < scroller06controls.length; i++) {
       scroller06controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller06, scroller06controls ,i)
       })
   }

   // section gallery - scroller 7

   const scroller07 = document.querySelector('#scroller07')
   const scroller07controls = document.querySelector('.section-gallery-card-controls').children

   scroller07.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller07, scroller07controls)
   })

   for (let i = 0; i < scroller07controls.length; i++) {
       scroller07controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller07, scroller07controls ,i)
       })
   }


    // FORM

    // hide label if input value =/= empty

    const formLabels = document.querySelectorAll('.form-label')
    const formInputs = document.querySelectorAll('.form-input')

    for (let i = 0; i < formInputs.length; i++) {
        
        formInputs[i].addEventListener('focusout',()=>{
            if(formInputs[i].value) {
                formLabels[i].style.opacity = '0'
            } else formLabels[i].style.opacity = '1'
        })
        
    }


    // DRAGSCROLL FIX FOR INLINE SPAN

    const allScrolls = document.querySelectorAll('.snaps-inline') 
    let isMouseDown = false

    for (let i = 0; i < allScrolls.length; i++) {
        allScrolls[i].addEventListener('mousedown', ()=>{
            allScrolls[i].classList.remove('snaps-inline')
            isMouseDown = true
        })

        allScrolls[i].addEventListener('mouseleave',  ()=>{
            scrollAndSnap(allScrolls[i])
            isMouseDown = false
        })

        allScrolls[i].addEventListener('mouseup',  ()=>{
            
            scrollAndSnap(allScrolls[i])
            isMouseDown = false
            
        })
        
    }

    function scrollAndSnap(element) {
        // privet ya rostislav i ya izobretal snaps-inline zanogo 2 chasa
        let scrollGap = window.getComputedStyle(element).rowGap
        element.scrollTo({
            left: Math.round(element.scrollLeft / element.firstElementChild.offsetWidth ) * element.firstElementChild.offsetWidth + Math.round(element.scrollLeft /element.firstElementChild.offsetWidth ) * parseInt(scrollGap) - 1, 
            behavior: 'smooth'
        })
        setTimeout(function(){
            if(!isMouseDown) {
            element.classList.add('snaps-inline')
            } 
        }, 250)
    }

})
        