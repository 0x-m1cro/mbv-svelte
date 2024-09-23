<script>
    //import { browser } from '$app/environment';
    //import logo from "$lib/assets/mbvlogo24.svg?url&raw"
    import Nav from "$lib/components/common/nav.svelte";
    import { onMount } from 'svelte';
 
    //import js from 'jquery';
    // @ts-nocheck
    
    onMount( async () => {	     
        
         
        window.jQuery.HSCore.components.HSHeader.init(window.jQuery('#header'));

        // initialization of unfold component
        window.jQuery.HSCore.components.HSUnfold.init(window.jQuery('[data-unfold-target]'));

        // initialization of show animations
        window.jQuery.HSCore.components.HSShowAnimation.init('.js-animation-link');

        // initialization of datepicker
        window.jQuery.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');       

        // initialization of select
        window.jQuery.HSCore.components.HSSelectPicker.init('.js-select');

        // initialization of quantity counter
        window.jQuery.HSCore.components.HSQantityCounter.init('.js-quantity');

        // initialization of slick carousel
        window.jQuery.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

        // initialization of go to
        window.jQuery.HSCore.components.HSGoTo.init('.js-go-to');

    });
 

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

    }  
 
</style>



<header id="header" class="u-header u-header--abs-top-xl u-header--white-nav-links-xl u-header--bg-transparent-xl u-header--show-hide-xl u-header--untransitioned" data-header-fix-moment="500" data-header-fix-effect="slide">
    <div class="u-header__section u-header__shadow-on-show-hide py-4 py-xl-0">
        <!-- Topbar -->
        <div class="container-fluid u-header__hide-content u-header__topbar u-header__topbar-lg border-bottom border-color-white">
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
                        <!-- <li class="list-inline-item">
                            <a class="btn btn-sm btn-icon btn-pill btn-soft-white btn-bg-transparent transition-3d-hover" href="https://twitter.com/" target="_blank">
                                <span class="fab fa-twitter btn-icon__inner"></span>
                            </a>
                        </li> -->
                        <li class="list-inline-item">
                            <a class="btn btn-sm btn-icon btn-pill btn-soft-white btn-bg-transparent transition-3d-hover" href="https://www.instagram.com/maldivesbeachvacation/" target="_blank">
                                <span class="fab fa-instagram btn-icon__inner"></span>
                            </a>
                        </li>
                        <!-- <li class="list-inline-item">
                            <a class="btn btn-sm btn-icon btn-pill btn-soft-white btn-bg-transparent transition-3d-hover" href="https://www.linkedin.com/" target="_blank">
                                <span class="fab fa-linkedin-in btn-icon__inner"></span>
                            </a>
                        </li> -->
                    </ul>
                    <!-- <div class="position-relative px-3 u-header__topbar-divider">
                        <a href="#" class="d-flex align-items-center text-white">
                            <i class="flaticon-user mr-2 ml-1"></i>
                            <span class="d-inline-block font-size-14 mr-1">Sign in or Register</span>
                        </a>
                    </div> -->
                    <!-- <div class="position-relative pl-3 language-switcher dropdown-connector-xl u-header__topbar-divider">
                        <a id="languageDropdownInvoker" class="dropdown-nav-link dropdown-toggle d-flex align-items-center ml-1 py-3" href="#" role="button" aria-controls="languageDropdown" aria-haspopup="true" aria-expanded="false" data-unfold-event="hover" data-unfold-target="#languageDropdown" data-unfold-type="css-animation" data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                            <span class="d-inline-block">EUR</span>
                        </a>
                        <div id="languageDropdown" class="dropdown-menu dropdown-unfold dropdown-menu-right mt-0" aria-labelledby="languageDropdownInvoker">
                            <a class="dropdown-item" href="#">USD</a>
                            <a class="dropdown-item active" href="#">EUR</a>
                            <a class="dropdown-item" href="#">TUR</a>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- End Topbar -->
        <div id="logoAndNav" class="container-fluid py-1">
            <!-- Nav -->
             <Nav />
            <!-- End Nav -->
        </div>
    </div>
</header>