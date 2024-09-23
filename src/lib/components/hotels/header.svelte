<script>
    import logo from "$lib/assets/mbvlogo.svg?url&raw"
    import { onMount } from 'svelte';
    import Nav from "$lib/components/hotels/nav.svelte";

    onMount(async () => {

            function initMap() {
                    window.$.HSCore.components.HSGMap.init('.js-g-map');
                }

            window.$.HSCore.components.HSMalihuScrollBar.init(jQuery('.js-scrollbar'));

            // initialization of autonomous popups
            window.$.HSCore.components.HSModalWindow.init('[data-modal-target]', '.js-modal-window', {
                autonomous: true
            });
  

            window.$.HSCore.components.HSHeader.init(jQuery('#header'));

            // initialization of unfold component
            window.$.HSCore.components.HSUnfold.init(jQuery('[data-unfold-target]'));

            // initialization of show animations
            window.$.HSCore.components.HSShowAnimation.init('.js-animation-link');

            // initialization of datepicker
            window.$.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');       

            window.$.HSCore.components.HSRangeSlider.init('.js-range-slider');

            // initialization of select
            window.$.HSCore.components.HSSelectPicker.init('.js-select');

            // initialization of quantity counter
            window.$.HSCore.components.HSQantityCounter.init('.js-quantity');

            // initialization of slick carousel
            window.$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

            // initialization of go to
            window.$.HSCore.components.HSGoTo.init('.js-go-to');
            // initialization of sticky blocks
			window.$.HSCore.components.HSStickyBlock.init('.js-sticky-block');

            // initialization of HSScrollNav component
            window.$.HSCore.components.HSScrollNav.init(jQuery('.js-scroll-nav'), {
                duration: 700
            });

             
        })
 
 

</script>
<style>
    .u-header__navbar-brand-text {
        font-size: 1.3rem;
        margin-top: 0.3rem;
    }
    @media (max-width: 767.98px) {
        .u-header__navbar-brand-text {
            font-size: 1rem !important;
        }
        .u-header__navbar-brand, .u-header__navbar-brand > img {
            height: 100px !important;
        }

        #logoAndNav > nav > a > img {
            height: 100px !important;
        }

    } 
</style>

<svelte:head>
    <link rel="stylesheet" href="/assets/vendor/fancybox/jquery.fancybox.css">
    <link rel="stylesheet" href="/assets/vendor/jquery-ui/themes/base/jquery-ui.min.css">
    <link rel="stylesheet" href="/assets/vendor/prism/prism.css">
    <link rel="stylesheet" href="/assets/vendor/ion-rangeslider/css/ion.rangeSlider.css">
    <link rel="stylesheet" href="/assets/vendor/custombox/dist/custombox.min.css">
    
</svelte:head>

<header id="header" class="u-header u-header--dark-nav-links-xl u-header--show-hide-xl u-header--static-xl" data-header-fix-moment="500" data-header-fix-effect="slide">
    <div class="u-header__section u-header__shadow-on-show-hide py-4 py-xl-0">
        <!-- Topbar -->
        <div class="container-fluid u-header__hide-content u-header__topbar u-header__topbar-lg border-bottom border-color-8">
            <div class="d-flex align-items-center">
                <ul class="list-inline u-header__topbar-nav-divider mb-0">
                    <li class="list-inline-item mr-0"><a href="tel:+9607915687" class="u-header__navbar-link">+960 960 7915687</a></li>
                    <li class="list-inline-item mr-0"><a href="mailto:sales@maldivesbeachvacation.com" class="u-header__navbar-link">sales@maldivesbeachvacation.com</a></li>
                </ul>
                <div class="ml-auto d-flex align-items-center">
                    <ul class="list-inline mb-0 mr-2 pr-1">
                        <li class="list-inline-item">
                            <a class="btn btn-sm btn-icon btn-pill btn-soft-white btn-bg-transparent transition-3d-hover" href="https://www.facebook.com/maldivesbeachvacation/" target="_blank">
                                <span class="fab fa-facebook-f btn-icon__inner"></span>
                            </a>
                        </li>
                     
                        <li class="list-inline-item">
                            <a class="btn btn-sm btn-icon btn-pill btn-soft-white btn-bg-transparent transition-3d-hover" href="https://www.instagram.com/maldivesbeachvacation/" target="_blank">
                                <span class="fab fa-instagram btn-icon__inner"></span>
                            </a>
                        </li>
                    
                    </ul>
                 
                </div>
            </div>
        </div>
        <!-- End Topbar -->
        <div id="logoAndNav" class="container-fluid py-xl-2 border-bottom-xl">
            <!-- Nav -->
            <Nav />
            
            <!-- End Nav -->
        </div>
    </div>
</header>