<script>
    import Header from '$lib/components/hotels/header.svelte';
	import Footer from '$lib/components/common/footer.svelte';
    import Preloader from '$lib/components/common/preloader.svelte'
    import { paginate, LightPaginationNav } from 'svelte-paginate'
    import * as maldives from '$lib/data/maldives.json'
    export let data;

	let hotels = maldives?.data?.records
    let currentPage = 1
    let pageSize = 18
    $: hotellist = hotels && paginate({ items: hotels, pageSize, currentPage })

    const getStar = (star) => {
		switch (star) {
			case 1:
			return `<small class="fas fa-star"></small>`
			case 2:
			return `<small class="fas fa-star"></small><small class="fas fa-star" </small>`
			case 3:
			return `<small class="fas fa-star"></small><small class="fas fa-star"></small><small class="fas fa-star"></small>`
			case 4:
			return `<small class="fas fa-star"></small><small class="fas fa-star"></small><small class="fas fa-star"></small><small class="fas fa-star"></small>`
			case 5:
			return `<small class="fas fa-star"></small><small class="fas fa-star"></small><small class="fas fa-star"></small><small class="fas fa-star"></small><small class="fas fa-star"></small>`
		
			default:
			return ''
		}
	}

    // let hotelPromise
    // async function getHotelPromise(){
    //         const req = await fetch(`https://mbv-api-server.onrender.com/scan?hotelid=${params.hs_id}&checkin=${params.checkin}&checkout=${params.checkout}&adults=${params.adults}&child=${params.child}`)
    //         const res = await req.json()
            
    //         let jsn = res.data.records[0]
    //         return jsn 
            
    // }
    // hotelPromise = getHotelPromise() 

</script>
<style>
    .u-header__navbar-brand-text {
        font-size: 1.3rem;
        margin-top: 0.3rem;
    }
    
    @media (max-width: 767.98px) {
        .u-header__navbar-brand-text {
            font-size: 1rem;
        }
        .hide-mobile { 
            display: none !important;
        }
    }

   
</style>
<svelte:head>
  <title>Hotels | Maldivesbeachvacation.com</title>
  <meta name="description" content="Compare over 743+ hotels in Maldives">

  <!-- Open Graph (OG) Tags -->
  <meta property="og:title" content="Hotels | Maldivesbeachvacation.com">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.maldivesbeachvaction.com/hotels">
  <meta property="og:image" content="https://www.maldivesbeachvaction.com/assets/img/bg.jpg">
  <meta property="og:description" content="Compare over 743+ hotels in Maldives">

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@maldivesbeachvacation">
  <meta name="twitter:title" content="Hotels | Maldivesbeachvacation.com">
  <meta name="twitter:description" content="Compare over 743+ hotels in Maldives">
  <meta name="twitter:image" content="https://www.maldivesbeachvaction.com/assets/img/bg.jpg">

  <!-- Schema.org Markup -->
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Maldives Beach Vacation",
      "url": "https://www.maldivesbeachvaction.com/hotels",
      "logo": "https://www.maldivesbeachvaction.com/assets/img/mbv-logo.png"
    }
  </script>

</svelte:head>


<Header />

<main id="content" role="main">
    <div class="container pt-5 pt-xl-8">
        <div class="row mb-5 mb-lg-8 mt-xl-1">
            <div class="col-lg-4 col-xl-3 order-lg-1 width-md-50 hide-mobile">
                <div class="navbar-expand-lg navbar-expand-lg-collapse-block">
                    <button class="btn d-lg-none mb-5 p-0 collapsed" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="far fa-caret-square-down text-primary font-size-20 card-btn-arrow ml-0"></i>
                        <span class="text-primary ml-2">Sidebar</span>
                    </button>
                    <!-- <div id="sidebar" class="collapse navbar-collapse">
                        <div class="mb-6 w-100">                            

                            <div class="sidenav border border-color-8 rounded-xs">
                             
                                <div id="RatingAccordion" class="accordion rounded shadow-none border-bottom">
                                   <div class="card-collapse" id="shopRatingHeadingOne">
                                        <h3 class="mb-0">
                                            <button type="button" class="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#shopRatingOne" aria-expanded="false" aria-controls="shopRatingOne">
                                                <span class="row align-items-center">
                                                    <span class="col-9">
                                                        <span class="font-weight-bold font-size-17 text-dark mb-3">Star Rating</span>
                                                    </span>
                                                    <span class="col-3 text-right">
                                                        <span class="card-btn-arrow">
                                                            <span class="fas fa-chevron-down small"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </button>
                                        </h3>
                                    </div>
                                    <div id="shopRatingOne" class="collapse show" aria-labelledby="shopRatingHeadingOne" data-parent="#RatingAccordion">
                                        <div class="card-body pt-0 mt-1 px-5">
                                       
                                            <div class="form-group font-size-14 text-lh-md text-secondary mb-3">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="brandAdidas">
                                                    <label class="custom-control-label text-lh-inherit text-color-1" for="brandAdidas">
                                                        <div class="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                                            <div class="green-lighter ml-1 letter-spacing-2">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group font-size-14 text-lh-md text-secondary mb-3">
                                                <div class="custom-control custom-checkbox">
                                                   <input type="checkbox" class="custom-control-input" id="brandNewBalance">
                                                   <label class="custom-control-label text-lh-inherit text-color-1" for="brandNewBalance">
                                                        <div class="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                                            <div class="green-lighter ml-1 letter-spacing-2">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                   </label>
                                                </div>
                                            </div>
                                            <div class="form-group font-size-14 text-lh-md text-secondary mb-3">
                                                <div class="custom-control custom-checkbox">
                                                  <input type="checkbox" class="custom-control-input" id="brandNike">
                                                  <label class="custom-control-label text-lh-inherit text-color-1" for="brandNike">
                                                        <div class="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                                            <div class="green-lighter ml-1 letter-spacing-2">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                  </label>
                                                </div>
                                            </div>
                                            <div class="form-group font-size-14 text-lh-md text-secondary mb-3">
                                                <div class="custom-control custom-checkbox">
                                                  <input type="checkbox" class="custom-control-input" id="brandFredPerry">
                                                  <label class="custom-control-label text-lh-inherit text-color-1" for="brandFredPerry">
                                                        <div class="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                                            <div class="green-lighter ml-1 letter-spacing-2">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="shopCartAccordion" class="accordion rounded shadow-none">
                                    <div class="border-0">
                                        <div class="card-collapse" id="shopCardHeadingOne">
                                            <h3 class="mb-0">
                                                <button type="button" class="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#shopCardOne" aria-expanded="false" aria-controls="shopCardOne">
                                                    <span class="row align-items-center">
                                                        <span class="col-9">
                                                            <span class="d-block font-size-lg-15 font-size-17 font-weight-bold text-dark">Price Range ($)</span>
                                                        </span>
                                                        <span class="col-3 text-right">
                                                            <span class="card-btn-arrow">
                                                                <span class="fas fa-chevron-down small"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </button>
                                            </h3>
                                        </div>
                                        <div id="shopCardOne" class="collapse show" aria-labelledby="shopCardHeadingOne" data-parent="#shopCartAccordion">
                                            <div class="card-body pt-0 px-5">
                                                <div class="pb-3 mb-1 d-flex text-lh-1">
                                                    <span>£</span>
                                                    <span id="rangeSliderExample3MinResult" class=""></span>
                                                    <span class="mx-0dot5"> — </span>
                                                    <span>£</span>
                                                    <span id="rangeSliderExample3MaxResult" class=""></span>
                                                </div>
                                                <input class="js-range-slider" type="text"
                                                data-extra-classes="u-range-slider height-35"
                                                data-type="double"
                                                data-grid="false"
                                                data-hide-from-to="true"
                                                data-min="0"
                                                data-max="3456"
                                                data-from="200"
                                                data-to="3456"
                                                data-prefix="$"
                                                data-result-min="#rangeSliderExample3MinResult"
                                                data-result-max="#rangeSliderExample3MaxResult">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="shopCategoryAccordion" class="accordion rounded-0 shadow-none border-top">
                                    <div class="border-0">
                                        <div class="card-collapse" id="shopCategoryHeadingOne">
                                            <h3 class="mb-0">
                                                <button type="button" class="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#shopCategoryOne" aria-expanded="false" aria-controls="shopCategoryOne">
                                                    <span class="row align-items-center">
                                                        <span class="col-9">
                                                            <span class="font-weight-bold font-size-17 text-dark mb-3">Meals</span>
                                                        </span>
                                                        <span class="col-3 text-right">
                                                            <span class="card-btn-arrow">
                                                                <span class="fas fa-chevron-down small"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </button>
                                            </h3>
                                        </div>
                                        <div id="shopCategoryOne" class="collapse show" aria-labelledby="shopCategoryHeadingOne" data-parent="#shopCategoryAccordion">
                                            <div class="card-body pt-0 mt-1 px-5 pb-4">
                                          
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="1">
                                                        <label class="custom-control-label" for="1">Breakfast Included</label>
                                                    </div>
                                                
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="2">
                                                        <label class="custom-control-label" for="2">All-inclusive</label>
                                                    </div>
                                              
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="3">
                                                        <label class="custom-control-label" for="3">HalfBoard</label>
                                                    </div>
                                                 
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="4">
                                                        <label class="custom-control-label" for="4">FullBoard</label>
                                                    </div>
                                                  
                                                </div>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div id="facilityCategoryAccordion" class="accordion rounded-0 shadow-none border-top">
                                    <div class="border-0">
                                        <div class="card-collapse" id="facilityCategoryHeadingOne">
                                            <h3 class="mb-0">
                                                <button type="button" class="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#facilityCategoryOne" aria-expanded="false" aria-controls="facilityCategoryOne">
                                                    <span class="row align-items-center">
                                                        <span class="col-9">
                                                            <span class="font-weight-bold font-size-17 text-dark mb-3">Facilities</span>
                                                        </span>
                                                        <span class="col-3 text-right">
                                                            <span class="card-btn-arrow">
                                                                <span class="fas fa-chevron-down small"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </button>
                                            </h3>
                                        </div>
                                        <div id="facilityCategoryOne" class="collapse show" aria-labelledby="facilityCategoryHeadingOne" data-parent="#facilityCategoryAccordion">
                                            <div class="card-body pt-0 mt-1 px-5 pb-4">
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="Adidas">
                                                        <label class="custom-control-label" for="Adidas">Parking</label>
                                                    </div>
                                                    <span>749</span>
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="NewBalance">
                                                        <label class="custom-control-label" for="NewBalance">Restaurant</label>
                                                    </div>
                                                    <span>630</span>
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="Nike">
                                                        <label class="custom-control-label" for="Nike">Pet friendly</label>
                                                    </div>
                                                    <span>58</span>
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="FredPerry">
                                                        <label class="custom-control-label" for="FredPerry">Room service</label>
                                                    </div>
                                                    <span>29</span>
                                                </div>
                                           

                                          
                                                <div class="collapse" id="collapseBrand1">
                                                    <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                        <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="brandGucci">
                                                        <label class="custom-control-label" for="brandGucci">Gucci</label>
                                                        </div>
                                                        <span>5</span>
                                                    </div>
                                                    <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="brandMango">
                                                            <label class="custom-control-label" for="brandMango">Mango</label>
                                                        </div>
                                                        <span>1</span>
                                                    </div>
                                                </div>
                                                

                                                
                                                <a class="link link-collapse small font-size-1" data-toggle="collapse" href="#collapseBrand1" role="button" aria-expanded="false" aria-controls="collapseBrand1">
                                                  <span class="link-collapse__default font-size-14">Show all 13</span>
                                                  <span class="link-collapse__active font-size-14">Show less</span>
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div id="propertyCategoryAccordion" class="accordion rounded-0 shadow-none border-top">
                                    <div class="border-0">
                                        <div class="card-collapse" id="propertyCategoryHeadingOne">
                                            <h3 class="mb-0">
                                                <button type="button" class="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#propertyCategoryOne" aria-expanded="false" aria-controls="propertyCategoryOne">
                                                    <span class="row align-items-center">
                                                        <span class="col-9">
                                                            <span class="font-weight-bold font-size-17 text-dark mb-3">Property Type</span>
                                                        </span>
                                                        <span class="col-3 text-right">
                                                            <span class="card-btn-arrow">
                                                                <span class="fas fa-chevron-down small"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </button>
                                            </h3>
                                        </div>
                                        <div id="propertyCategoryOne" class="collapse show" aria-labelledby="propertyCategoryHeadingOne" data-parent="#propertyCategoryAccordion">
                                            <div class="card-body pt-0 mt-1 px-5 pb-4">
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="brandhotel">
                                                        <label class="custom-control-label" for="brandhotel">Hotels</label>
                                                    </div>
                                               
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="brandapartmet">
                                                        <label class="custom-control-label" for="brandapartmet">Resorts</label>
                                                    </div>
                                                 
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="brandresorts">
                                                        <label class="custom-control-label" for="brandresorts">Guest House</label>
                                                    </div>
                                                 
                                                </div>                                                                                                                                                                                                                               
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div id="cityCategoryAccordion" class="accordion rounded-0 shadow-none border-top">
                                    <div class="border-0">
                                        <div class="card-collapse" id="cityCategoryHeadingOne">
                                            <h3 class="mb-0">
                                                <button type="button" class="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#cityCategoryOne" aria-expanded="false" aria-controls="cityCategoryOne">
                                                    <span class="row align-items-center">
                                                        <span class="col-9">
                                                            <span class="font-weight-bold font-size-17 text-dark mb-3">City</span>
                                                        </span>
                                                        <span class="col-3 text-right">
                                                            <span class="card-btn-arrow">
                                                                <span class="fas fa-chevron-down small"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </button>
                                            </h3>
                                        </div>
                                        <div id="cityCategoryOne" class="collapse show" aria-labelledby="cityCategoryHeadingOne" data-parent="#cityCategoryAccordion">
                                            <div class="card-body pt-0 mt-1 px-5 pb-4">
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="brandamsterdam">
                                                        <label class="custom-control-label" for="brandamsterdam">Amsterdam</label>
                                                    </div>
                                                    <span>749</span>
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="brandrotterdam">
                                                        <label class="custom-control-label" for="brandrotterdam">Rotterdam</label>
                                                    </div>
                                                    <span>630</span>
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="brandvalkenburg">
                                                        <label class="custom-control-label" for="brandvalkenburg">Valkenburg</label>
                                                    </div>
                                                    <span>58</span>
                                                </div>
                                                <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="brandeindhoven">
                                                        <label class="custom-control-label" for="brandeindhoven">Eindhoven</label>
                                                    </div>
                                                    <span>29</span>
                                                </div>
                                           

                                          
                                                <div class="collapse" id="collapseBrand3">
                                                    <div class="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                                        <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="gucci">
                                                        <label class="custom-control-label" for="gucci">Gucci</label>
                                                        </div>
                                                        <span>5</span>
                                                    </div>
                                                    <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="mango">
                                                            <label class="custom-control-label" for="mango">Mango</label>
                                                        </div>
                                                        <span>1</span>
                                                    </div>
                                                </div>
                                                

                                                
                                                <a class="link link-collapse small font-size-1" data-toggle="collapse" href="#collapseBrand3" role="button" aria-expanded="false" aria-controls="collapseBrand3">
                                                  <span class="link-collapse__default font-size-14">Show all 25</span>
                                                  <span class="link-collapse__active font-size-14">Show less</span>
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                               
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="col-lg-12 col-xl-12 order-md-1 order-lg-2 pb-5 pb-lg-0">
                <!-- Shop-control-bar Title -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h3 class="font-size-21 font-weight-bold mb-0 text-lh-1">Maldives: 743+ hotels & resorts found</h3>
                    <!-- <ul class="nav tab-nav-shop flex-nowrap" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link font-size-22 p-0" id="pills-three-example1-tab" data-toggle="pill" href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="true">
                                <div class="d-md-flex justify-content-md-center align-items-md-center">
                                    <i class="fa fa-list"></i>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link font-size-22 p-0 ml-2 active" id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="false">
                                <div class="d-md-flex justify-content-md-center align-items-md-center">
                                    <i class="fa fa-th"></i>
                                </div>
                            </a>
                        </li>
                    </ul> -->
                </div>
                <!-- End shop-control-bar Title -->

                <!-- Slick Tab carousel -->
                <div class="u-slick__tab">
                
           

           
                    
                
                    <div class="tab-content" id="pills-tabContent">
                                                                     
                        <div class="tab-pane fade show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab" data-target-group="groups">
                            <div class="row">
                                {#each hotellist as resort}
                                <div class="col-md-6 col-lg-4 mb-3 mb-md-4 pb-1">
                                    <div class="card transition-3d-hover shadow-hover-2 tab-card h-100">
                                        <div class="position-relative">
                                            <a href="/hotels/{resort.hs_id}/{resort.slug}" class="d-block gradient-overlay-half-bg-gradient-v5">
                                                <img class="min-height-230 bg-img-hero card-img-top" src="{`//img1.hotelscan.com/640_440/1/${resort.images[0].image_id}.jpg`}" alt="{resort.name}" />
                                            </a>
                                            <!-- <div class="position-absolute top-0 right-0 pt-3 pr-3">
                                              <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                <span class="flaticon-valentine-heart"></span>
                                              </button>
                                            </div> -->
                                            <div class="position-absolute bottom-0 left-0 right-0">
                                                <div class="px-4 pb-3">
                                                    <a href="/hotels/{resort.hs_id}/{resort.slug}" class="d-block">
                                                        <div class="d-flex align-items-center font-size-14 text-white">
                                                            <i class="icon flaticon-pin-1 mr-2 font-size-20"></i> {resort.location.city}
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body pl-3 pr-4 pt-2 pb-3">
                                            <div class="ml-1 mb-2">
                                                <div class="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                                    <div class="green-lighter">
                                                        {@html getStar(resort.quality.stars)}
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/hotels/{resort.hs_id}/{resort.slug}" class="card-title font-size-17 font-weight-medium text-dark">{resort.name}</a>
                                            <div class="mt-2 mb-3">
                                                <span class="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">{resort.quality.review_rating}/100</span>
                                                <span class="font-size-14 text-gray-1 ml-2">({resort.quality.review_count} reviews)</span>
                                            </div>
                                            <!-- <div class="mb-0">
                                                <span class="mr-1 font-size-14 text-gray-1">From</span>
                                                <span class="font-weight-bold">£350.00</span>
                                                <span class="font-size-14 text-gray-1"> / night</span>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                {/each}
                                
                            </div>
                           <!-- <div class="text-center text-md-left font-size-14 mb-3 text-lh-1">Showing 1–15</div>  -->
                           <LightPaginationNav
                            totalItems="{hotels.length}"
                            pageSize="{pageSize}"
                            currentPage="{currentPage}"
                            limit="{1}"
                            showStepOptions="{true}"
                            on:setPage="{(e) => currentPage = e.detail.page}"
                         />  
                        </div>
                       
                    </div>
                
                    <!-- End Tab Content -->
                </div>
                <!-- Slick Tab carousel -->
            </div>
        </div>
    </div>
</main>

<Footer />