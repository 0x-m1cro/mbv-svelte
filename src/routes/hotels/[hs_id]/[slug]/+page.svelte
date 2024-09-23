<script>
    import Header from '$lib/components/hotel/header.svelte';
	import Footer from '$lib/components/common/footer.svelte';
    import Preloader from '$lib/components/common/preloader.svelte'
    import PagePreloader from '$lib/components/common/pagepreloader.svelte'
    import {goto} from '$app/navigation';
    import { page } from '$app/stores';
    
    import LDTag from '$lib/components/misc/LDTag.svelte'
    import * as json from '$lib/data/maldives.json'    
    import {onMount} from "svelte"
    export let data;

    const { params } = data
 
    const hotelid = params.hs_id
    const checkin = $page.url.searchParams.get('checkin')
    const checkout = $page.url.searchParams.get('checkout')
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
    
    const hotels = json?.data?.records
    let getHotel = hotels.filter(h => {
            return h.hs_id == hotelid
        });
    let hotel = getHotel[0]
    let hotelPromise
    async function getHotelPromise(){
            const req = await fetch(`https://letsgo-seven.vercel.app/api/hotel?hotelid=${hotelid}&checkin=${checkin}&checkout=${checkout}&adults=2&child=0`)
            const res = await req.json()
            let jsn = res?.data?.records[0]
            return jsn 
            
    }
    hotelPromise = getHotelPromise() 
    
    function redirectToBooking(hotelName, arrivalDate, departureDate) {
            
            var bookingUrl = 'https://www.booking.com/searchresults.en-us.html?';
            var checkInDate = arrivalDate; // You can replace this with your desired value
            var checkOutDate = departureDate; // You can replace this with your desired value
            var adults = '2';
            var children = '0';
            var rand1 = Math.floor(Math.random() * 33); // Random number between 0 and 32
            var affid = '7974605'; // Set your affiliate ID here
            var others = 'sb_travel_purpose=leisure&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=124&=dest_type=hotel';

            bookingUrl += 'hotel_id=' + encodeURIComponent(hotelName);
            bookingUrl += '&ss=' + encodeURIComponent(hotelName);
            bookingUrl += '&checkin=' + encodeURIComponent(checkInDate);
            bookingUrl += '&checkout=' + encodeURIComponent(checkOutDate);
            bookingUrl += '&sid=' + encodeURIComponent(rand1);

            // Append pax details
            bookingUrl += '&group_adults=' + encodeURIComponent(adults);
            bookingUrl += '&group_children=' + encodeURIComponent(children);

            // Append affid
            bookingUrl += '&aid=' + encodeURIComponent(affid);

            // Append others
            bookingUrl += '&' + encodeURIComponent(others);

            return bookingUrl;
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: hotel.name + '| Maldivesbeachvacation.com',
        url: page.path,
        description: hotel.short_description,
}
  
 
</script>
<style>
    .fit-image { object-fit: cover !important;}
    
</style>

 
<svelte:head>
  <title>{hotel.name} | Maldivesbeachvacation.com</title>
  <meta name="description" content="{hotel.name},{hotel.short_description}">


  <meta property="og:title" content="{hotel.name} | Maldivesbeachvacation.com">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.maldivesbeachvaction.com">
  <meta property="og:image" content={`https://img1.hotelscan.com/640_440/1/${hotel.images[0].image_id}.jpg`}>
  <meta property="og:description" content="{hotel.short_description}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@maldivesbeachvacation">
  <meta name="twitter:title" content="{hotel.name} | Maldivesbeachvacation.com">
  <meta name="twitter:description" content="{hotel.short_description}">
  <meta name="twitter:image" content="{`https://img1.hotelscan.com/640_440/1/${hotel.images[0].image_id}.jpg`}">

 
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Maldives Beach Vacation",
      "url": "https://www.maldivesbeachvaction.com",
      "logo": "https://www.maldivesbeachvaction.com/assets/img/mbv-logo-new.png"
    }
  </script>

</svelte:head>

<LDTag schema={websiteSchema} />

<Header />

<PagePreloader />
<main id="content">
    <div class="bg-primary-darken py-4" style="display: none !important;">
        <div class="container">
            <!-- Search Jobs Form -->
            <div class="card border-0 bg-transparent">
                <div class="card-body px-0 pt-0 pb-1">
                    <form class="js-validate">
                        <div class="row d-block nav-select-1 d-lg-flex align-items-end">
                            <div class="col-sm-12 col-lg-3dot6 col-xl-3dot7 mb-4 mb-lg-0 ">
                                <span class="d-block text-primary-lighten font-weight-normal text-left mb-0">Destination or Hotel Name</span>
                                <div class="flex-horizontal-center border-bottom border-width-2">
                                    <i class="flaticon-pin-1 text-white"></i>
                                    <!-- Select -->
                                    <select class="js-select selectpicker dropdown-select tab-dropdown flex-grow-1 bg-transparent border-0 pl-0 d-flex align-items-center text-white font-weight-semi-bold" title="Where are you going?"
                                        data-style="bg-transparent text-white"
                                        data-live-search="true"
                                        data-searchbox-classes="input-group-sm">
                                        <option class="border-bottom border-color-1" value="project1" data-content='
                                            <span class="d-flex align-items-center">
                                                <span class="font-size-16">Maldives</span>
                                            </span>'>
                                            Maldives
                                        </option>
                                       
                                    </select>
                                    <!-- End Select -->
                                </div>
                            </div>

                            <div class="col-sm-12 col-lg-3dot7 col-xl-3dot6 mb-4 mb-lg-0 ">
                                <!-- Input -->
                                <span class="d-block text-primary-lighten text-left font-weight-normal mb-0">Check In - Out</span>
                                <div class="border-bottom border-width-2 border-color-1">
                                    <div id="datepickerWrapperFromOne" class="u-datepicker input-group">
                                        <div class="input-group-prepend">
                                            <span class="d-flex align-items-center mr-2">
                                              <i class="flaticon-calendar text-white font-weight-semi-bold"></i>
                                            </span>
                                        </div>
                                         <input class="js-range-datepicker text-white font-size-lg-16 shadow-none font-weight-bold form-control hero-form bg-transparent  border-0" type="date"
                                             data-rp-wrapper="#datepickerWrapperFromOne"
                                             data-rp-type="range"
                                             data-rp-date-format="M d / Y"
                                             value="">
                                    </div>
                                     <!-- End Datepicker -->
                                </div>
                                <!-- End Input -->
                            </div>

                            <div class="col-sm-12 col-lg-2dot8 mb-4 mb-lg-0 dropdown-custom dropdown-custom_white">
                                <!-- Input -->
                                <span class="d-block text-primary-lighten text-left font-weight-normal mb-0">Rooms and Guests</span>
                                <a id="basicDropdownClickInvoker" class="dropdown-nav-link dropdown-toggle d-flex pt-3 pb-2 text-lh-1dot7" href="javascript:;" role="button"
                                    aria-controls="basicDropdownClick"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-unfold-event="click"
                                    data-unfold-target="#basicDropdownClick"
                                    data-unfold-type="css-animation"
                                    data-unfold-duration="300"
                                    data-unfold-delay="300"
                                    data-unfold-hide-on-scroll="true"
                                    data-unfold-animation-in="slideInUp"
                                    data-unfold-animation-out="fadeOut">
                                    <i class="flaticon-plus d-flex align-items-center mr-3 font-size-18 text-white font-weight-semi-bold"></i>
                                    <span class="font-size-16 font-weight-semi-bold text-white">2 Rooms - 3 Guests</span>
                                </a>
                                <div id="basicDropdownClick" class="dropdown-menu dropdown-unfold col-11 m-0" aria-labelledby="basicDropdownClickInvoker">
                                    <div class="w-100 py-2 px-3 mb-3">
                                        <div class="js-quantity mx-3 row align-items-center justify-content-between">
                                            <span class="d-block font-size-16 text-secondary font-weight-medium">Rooms</span>
                                            <div class="d-flex">
                                                <a class="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                    <small class="fas fa-minus btn-icon__inner"></small>
                                                </a>
                                                <input class="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                                                <a class="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                    <small class="fas fa-plus btn-icon__inner"></small>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-100 py-2 px-3 mb-3">
                                        <div class="js-quantity mx-3 row align-items-center justify-content-between">
                                            <span class="d-block font-size-16 text-secondary font-weight-medium">Adults</span>
                                            <div class="d-flex">
                                                <a class="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                    <small class="fas fa-minus btn-icon__inner"></small>
                                                </a>
                                                <input class="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                                                <a class="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                    <small class="fas fa-plus btn-icon__inner"></small>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-100 py-2 px-3">
                                        <div class="js-quantity mx-3 row align-items-center justify-content-between">
                                            <span class="d-block font-size-16 text-secondary font-weight-medium">Child</span>
                                            <div class="d-flex">
                                                <a class="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                    <small class="fas fa-minus btn-icon__inner"></small>
                                                </a>
                                                <input class="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                                                <a class="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                    <small class="fas fa-plus btn-icon__inner"></small>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-100 text-right py-1 pr-5">
                                        <a class="text-primary font-weight-semi-bold font-size-16" href="#">Done</a>
                                    </div>
                                </div>
                                <!-- End Input -->
                            </div>

                            <div class="col-sm-12 col-lg align-self-lg-end text-md-right">
                                <button type="submit" class="btn btn-primary w-100 border-radius-3 mb-xl-0 mb-lg-0 transition-3d-hover"><i class="flaticon-magnifying-glass font-size-20 mr-2"></i>Search</button>
                            </div>
                        </div>
                      <!-- End Checkbox -->
                    </form>
                </div>
            </div>
            <!-- End Search Jobs Form -->
        </div>
    </div>
    <!-- Breadcrumb -->
    <div class="border-bottom mb-7">
        <div class="container">
            <nav class="py-3" aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-no-gutter mb-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                    <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="/">Home</a></li>
                    <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="/hotels">Hotels</a></li>                    
                    <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">{hotel.name}</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- End Breadcrumb -->

 
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-xl-9">
                <div class="d-block d-md-flex flex-center-between align-items-start mb-2">
                    <div class="mb-3">
                        <ul class="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap mb-2">
                            <!-- <li class="border border-brown bg-brown rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                <span class="font-weight-normal text-white font-size-14">Newly renovated</span>
                            </li> -->
                            <!-- <li class="border border-maroon bg-maroon rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                <span class="font-weight-normal font-size-14 text-white">Free Wi-Fi</span>
                            </li> -->
                        </ul>
                        <div class="d-block d-md-flex flex-horizontal-center mb-2 mb-md-0">
                            <h4 class="font-size-23 font-weight-bold mb-1">{hotel.name}</h4>
                            <div class="ml-3 font-size-10 letter-spacing-2">
                                <span class="d-block green-lighter ml-1">
                                    {@html getStar(hotel.quality.stars)}  
                                </span>
                            </div>
                        </div>
                        <div class="d-block d-md-flex flex-horizontal-center font-size-14 text-gray-1">
                            <i class="icon flaticon-placeholder mr-2 font-size-20"></i> {hotel.location.address}
                            <a href="#" class="ml-1 d-block d-md-inline"> - View on map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-3">
                <div class="mb-4">
                    <div class="flex-center-between">
                        <div class="flex-horizontal-center mr-2">
                            <div class="badge-primary rounded-xs px-1">
                                <span class="badge font-size-19 px-2 py-2 mb-0 text-lh-inherit">{hotel.quality.review_rating} /100 </span>
                            </div>

                            <div class="ml-2 text-lh-1">
                                <div class="ml-1">
                                    <h4 class="text-primary font-size-17 font-weight-bold mb-0">Excellent</h4>
                                    <span class="text-gray-1 font-size-14">({hotel.quality.review_count} Reviews)</span>
                                </div>
                            </div>
                        </div>
                        <ul class="ml-n1 list-group list-group-borderless list-group-horizontal custom-social-share">
                            <li class="list-group-item px-1 py-0">
                                <a href="#" class="height-45 width-45 border rounded border-width-2 flex-content-center">
                                    <i class="flaticon-like font-size-18 text-dark"></i>
                                </a>
                            </li>
                            <li class="list-group-item px-1 py-0">
                                <a href="#" class="height-45 width-45 border rounded border-width-2 flex-content-center">
                                    <i class="flaticon-share font-size-18 text-dark"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="pb-4 mb-2">
                    <div class="row mx-n1">
                        <div class="col-lg-8 col-xl-9 mb-1 mb-lg-0 px-0 px-lg-1">
                            <a class="js-fancybox u-media-viewer" href="javascript:;"
                                data-src={`https://img1.hotelscan.com/640_440/1/${hotel.images[0].image_id}.jpg`}
                                data-fancybox="fancyboxGallery8"
                                data-caption="Mytravel in frames - image #01"
                                data-speed="700">
                                <img class="img-fluid border-radius-3 min-height-458" src={`https://img1.hotelscan.com/640_440/1/${hotel.images[0].image_id}.jpg`} width="100%" alt={hotel.name}>

                                <span class="u-media-viewer__container">
                                    <span class="u-media-viewer__icon">
                                        <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-lg-4 col-xl-3 px-0">
                            <a class="js-fancybox u-media-viewer pb-1" href="javascript:;"
                                data-src={`https://img1.hotelscan.com/640_440/1/${hotel.images[1].image_id}.jpg`}
                                data-fancybox="fancyboxGallery8"
                                data-caption="Mytravel in frames - image #02"
                                data-speed="700">
                                <img class="img-fluid border-radius-3 min-height-150" src={`https://img1.hotelscan.com/640_440/1/${hotel.images[1].image_id}.jpg`} width="100%" alt={hotel.name}>

                                <span class="u-media-viewer__container">
                                    <span class="u-media-viewer__icon">
                                        <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                    </span>
                                </span>
                            </a>
                            <a class="js-fancybox u-media-viewer pb-1" href="javascript:;"
                                data-src={`https://img1.hotelscan.com/640_440/1/${hotel.images[2].image_id}.jpg`}
                                data-fancybox="fancyboxGallery8"
                                data-caption="Mytravel in frames - image #03"
                                data-speed="700">
                                <img class="img-fluid border-radius-3 min-height-150" src={`https://img1.hotelscan.com/640_440/1/${hotel.images[2].image_id}.jpg`} width="100%" alt={hotel.name}>

                                <span class="u-media-viewer__container">
                                    <span class="u-media-viewer__icon">
                                        <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                    </span>
                                </span>
                            </a>
                            <a class="js-fancybox u-media-viewer u-media-viewer__dark" href="javascript:;"
                                data-src={`https://img1.hotelscan.com/640_440/1/${hotel.images[3].image_id}.jpg`}
                                data-fancybox="fancyboxGallery8"
                                data-caption="Mytravel in frames - image #43"
                                data-speed="700">
                                <img class="img-fluid border-radius-3 min-height-150" src={`https://img1.hotelscan.com/640_440/1/${hotel.images[3].image_id}.jpg`} width="100%" alt={hotel.name}>

                                <span class="u-media-viewer__container z-index-2 w-100">
                                    <span class="u-media-viewer__icon u-media-viewer__icon--active w-100  bg-transparent">
                                        <span class="u-media-viewer__icon-inner font-size-14">SEE ALL PHOTOS</span>
                                    </span>
                                </span>
                            </a>
                            {#each hotel?.images as img }
                                <img class="js-fancybox d-none" alt={hotel.name}
                                data-width="100%"
                                data-fancybox="fancyboxGallery8"
                                data-src={`https://img1.hotelscan.com/640_440/1/${img.image_id}.jpg`}
                                data-caption={hotel.name}
                                data-speed="700">
                            {/each}
                            
                             
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-lg-4 col-xl-3">
                <div class="border border-color-7 rounded px-4 pt-4 pb-3 mb-5">
                    <div class="px-2 pt-2">
                        <a href="https://goo.gl/maps/kCVqYkjHX3XvoC4B9" class="d-inline-block border rounded mb-4 overflow-hidden">
                            <img class="img-fluid" src="../../assets/img/240x170/img1.jpg" alt="Image-Description">
                        </a>
                        <div class="flex-horizontal-center mb-4 mt-1">
                            <div class="border-primary border rounded-xs px-3 text-lh-1dot7 py-1">
                                <span class="font-size-21 font-weight-bold px-1 mb-0 text-lh-inherit text-primary">4.5</span>
                            </div>

                            <div class="ml-2 text-lh-1">
                                <div class="ml-1">
                                    <h4 class="text-primary font-size-17 font-weight-bold mb-0">Exceptional</h4>
                                    <span class="text-gray-1 font-size-14">Location rating score</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="flaticon-placeholder-1 font-size-25 text-primary mr-3 pr-1"></i>
                            <h6 class="mb-0 font-size-14 text-gray-1">
                                <a href="#">Better than 99% of properties in London</a>
                            </h6>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="flaticon-medal font-size-25 text-primary mr-3 pr-1"></i>
                            <h6 class="mb-0 font-size-14 text-gray-1">
                                <a href="#">Exceptional location - Inside city center</a>
                            </h6>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="flaticon-home font-size-25 text-primary mr-3 pr-1"></i>
                            <h6 class="mb-0 font-size-14 text-gray-1">
                                <a href="#">Popular neighborhood</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        {#await hotelPromise}
        <Preloader /> 
        {:then data}
        <div class="border-bottom position-relative">
    
            <h5 id="scroll-description" class="font-size-21 font-weight-bold text-dark">
                Hotel Info
            </h5>
            <p>{ data?.descriptions?.general ? data?.descriptions?.general : data?.descriptions?.description } </p>
            
            <!-- <div class="collapse" id="collapseLinkExample">
                <p>{ data.descriptions?.general ? data.descriptions?.general : '' }</p>
            </div>    -->
           
        </div>
        <div class="border-bottom py-4">
            <h5 id="scroll-amenities" class="font-size-21 font-weight-bold text-dark mb-4">
                Choose offer
            </h5>
            <div class="card border-color-7 mb-5 overflow-hidden">
                <!-- <div class="position-absolute top-0 right-0 mr-md-1 mt-md-1">
                    <div class="border border-brown bg-brown rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-2 mt-2">
                        <span class="font-weight-normal text-white font-size-14">Get Exclusive Offer</span>
                    </div>
                </div> -->
                <div class="product-item__outer w-100">
                    <div class="row">
                        <div class="col-md-5 col-lg-5 col-xl-3dot5">
                            <div class="pt-5 pb-md-5 pl-4 pr-4 pl-md-5 pr-md-2 pr-xl-2">
                                <div class="product-item__header mt-2 mt-md-0">
                                    <div class="position-relative">
                                        <img class="img-fluid rounded-sm" src="https://www.maldivesbeachvacation.com/assets/img/mbv-logo-new.png" alt="mbv">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-7 col-lg-7 col-xl-5 flex-horizontal-center pl-xl-0">
                            <div class="w-100 position-relative m-4 m-md-0">
                                <a href="#" class="mb-2 d-inline-block">
                                    <span class="font-weight-bold font-size-17 text-dark text-dark">Private Villa</span>
                                </a>
                                <div class="mt-1 pt-2">
                                    <div class="d-flex mb-1">
                                        <div class="ml-0">
                                            <ul class="list-unstyled mb-0" style={`display: flex;flex-wrap:wrap;justify-content:space-around;`}>
                                               
                                                <li class="media mb-3 text-gray-1 pr-3">
                                                    <small class="mr-2">
                                                        <small class="flaticon-tick font-size-17 text-primary"></small>
                                                    </small>
                                                    <div class="media-body font-size-1 ml-1">
                                                      Free Transfers
                                                    </div>
                                                    <small class="mr-2">
                                                        <small class="flaticon-tick font-size-17 text-primary"></small>
                                                    </small>
                                                    <div class="media-body font-size-1 ml-1">
                                                      Tailor-made Holiday
                                                    </div>
                                                    <small class="mr-2">
                                                        <small class="flaticon-tick font-size-17 text-primary"></small>
                                                    </small>
                                                    <div class="media-body font-size-1 ml-1">
                                                      Exclusive Rates
                                                    </div>
                                                </li>
                                              
  
                                            </ul>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-xl-3dot5 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                            <div class="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div class="text-center my-xl-1">
                                    <div class="mb-2 pb-1">
                                        <span class="font-size-14">From </span>
                                        <span class="font-weight-bold font-size-22 ml-1"> $$$ </span>
                                        <span class="font-size-14"> / night</span>
                                    </div>
                                    <a data-sveltekit-reload rel="external" href="mailto:sales@maldivesbeachvacation.com" class="btn btn-outline-primary border-radius-3 border-width-2 px-4 font-weight-bold min-width-200 py-2 text-lh-lg">UNLOCK PRICE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {#each data?.all_offers.filter(of => of.vendor == 'bkng') as offer}                    
            <div class="card border-color-7 mb-5 overflow-hidden">
                <!-- <div class="position-absolute top-0 right-0 mr-md-1 mt-md-1">
                    <div class="border border-brown bg-brown rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-2 mt-2">
                        <span class="font-weight-normal text-white font-size-14">Today's best offer</span>
                    </div>
                </div> -->
                <div class="product-item__outer w-100">
                    <div class="row">
                        <div class="col-md-5 col-lg-5 col-xl-3dot5">
                            <div class="pt-5 pb-md-5 pl-4 pr-4 pl-md-5 pr-md-2 pr-xl-2">
                                <div class="product-item__header mt-2 mt-md-0">
                                    <div class="position-relative">
                                        <img class="img-fluid rounded-sm" src="{offer.partner_logo}" alt="{offer.partner_name}">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-7 col-lg-7 col-xl-5 flex-horizontal-center pl-xl-0">
                            <div class="w-100 position-relative m-4 m-md-0">
                                <a href="#" class="mb-2 d-inline-block">
                                    <span class="font-weight-bold font-size-17 text-dark text-dark">{offer.room_name}</span>
                                </a>
                                <div class="mt-1 pt-2">
                                    <div class="d-flex mb-1">
                                        <div class="ml-0">
                                            <ul class="list-unstyled mb-0" style={`display: flex;flex-wrap:wrap;justify-content:space-around;`}>
                                                {#each offer.offer_flags as flag}
                                                <li class="media mb-3 text-gray-1 pr-3">
                                                    <small class="mr-2">
                                                        <small class="flaticon-tick font-size-17 text-primary"></small>
                                                    </small>
                                                    <div class="media-body font-size-1 ml-1">
                                                        {flag}
                                                    </div>
                                                </li>
                                                {/each}
  
                                            </ul>
                                        </div>
                                        <!-- <div class="ml-7">
                                            <ul class="list-unstyled mb-0">
                                                <li class="media mb-3 text-gray-1">
                                                    <small class="mr-2">
                                                        <small class="flaticon-bed-1 font-size-17 text-primary"></small>
                                                    </small>
                                                    <div class="media-body font-size-1 ml-1">
                                                        2 single beds
                                                    </div>
                                                </li>
                                                <li class="media mb-3 text-gray-1">
                                                    <small class="mr-2">
                                                        <small class="flaticon-bathtub font-size-17 text-primary"></small>
                                                    </small>
                                                    <div class="media-body font-size-1 ml-1">
                                                        Shower and bathtub
                                                    </div>
                                                </li>

                                            </ul>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-xl-3dot5 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                            <div class="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                <div class="text-center my-xl-1">
                                    <div class="mb-2 pb-1">
                                        <span class="font-size-14">From </span>
                                        <span class="font-weight-bold font-size-22 ml-1"> ${offer.price}</span>
                                        <span class="font-size-14"> / night</span>
                                    </div>
                                    <a href="javascript:;" data-sveltekit-reload rel="external" on:click={() => {                                                                                               
                                    const link = redirectToBooking(data.name, checkin, checkout); 
                                    goto(link)} } 
                                    class="btn btn-outline-primary border-radius-3 border-width-2 px-4 font-weight-bold min-width-200 py-2 text-lh-lg">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {:else}
            <p>No offers avaialable for the dates</p>     
            {/each}
           
            <h5 id="scroll-amenities" class="font-size-21 font-weight-bold text-dark mb-4">
                Amenities
            </h5>
            <ul class="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                <li class="col-md-4 list-group-item"><i class="flaticon-wifi-signal mr-3 text-primary font-size-24"></i>Wifi</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-alarm mr-3 text-primary font-size-24"></i>Wake-up call</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-bathrobe mr-3 text-primary font-size-24"></i>Bathrobes</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-weightlifting mr-3 text-primary font-size-24"></i>Fitness center</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-phone-call mr-3 text-primary font-size-24"></i>Telephone</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-folded-towel mr-3 text-primary font-size-24"></i>Dry cleaning</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-wine-glass mr-3 text-primary font-size-24"></i>Mini bar</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-hair-dryer mr-3 text-primary font-size-24"></i>Hair dryer</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-desk-chair mr-3 text-primary font-size-24"></i>High chair</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-hamburger mr-3 text-primary font-size-24"></i>Restaurant</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-air-conditioner mr-3 text-primary font-size-24"></i>Air Conditioning</li>
                <li class="col-md-4 list-group-item"><i class="flaticon-slippers mr-3 text-primary font-size-24"></i>Slippers</li>
            </ul>
        </div>
         
        {/await}
        <!-- Product Cards Ratings With carousel -->
        <div class="product-card-block product-card-v3">
            <div class="space-1">
                <div class="w-md-80 w-lg-50 text-center mx-md-auto pb-4">
                    <h2 class="section-title text-black font-size-30 font-weight-bold mb-0">Hotel Nearby</h2>
                </div>
                <div class="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3"
                    data-slides-show="4"
                    data-slides-scroll="1"
                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v1 u-slick__arrow-classic--v1 u-slick__arrow-centered--y rounded-circle"
                    data-arrow-left-classes="fas fa-chevron-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                    data-arrow-right-classes="fas fa-chevron-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                    data-pagi-classes="d-lg-none text-center u-slick__pagination mt-4"
                data-responsive={`[{
                    "breakpoint": 1025,
                    "settings": {
                        "slidesToShow": 3
                    }
                }, {
                    "breakpoint": 992,
                    "settings": {
                        "slidesToShow": 2
                    }
                }, {
                    "breakpoint": 768,
                    "settings": {
                        "slidesToShow": 1
                    }
                }, {
                    "breakpoint": 554,
                    "settings": {
                        "slidesToShow": 1
                    }
                }]`}>
                {#each hotels.slice(0, 10) as hot}                                    
                    <div class="js-slide py-3">
                        <div class="card transition-3d-hover shadow-hover-2 w-100 mt-2">
                            <div class="position-relative">
                                <a href="/hotels/{hot.hs_id}/{hot.slug}" data-sveltekit-reload class="d-block gradient-overlay-half-bg-gradient-v5">
                                    <img class="card-img-top" src={`https://img1.hotelscan.com/640_440/1/${hot.images[0].image_id}.jpg`} alt={hot.name}>
                                </a>
                                <div class="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" class="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span class="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <div class="position-absolute bottom-0 left-0 right-0">
                                    <div class="px-4 pb-3">
                                        <a href="/hotels/{hot.hs_id}/{hot.slug}" data-sveltekit-reload class="d-block">
                                            <div class="d-flex align-items-center font-size-14 text-white">
                                                <i class="icon flaticon-placeholder mr-2 font-size-20"></i> {hot.location.address}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body px-4 pt-2 pb-3">
                                <div class="mb-2">
                                    <div class="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                        <div class="green-lighter">
                                            {@html getStar(hot.quality.stars)}
                                        </div>
                                    </div>
                                </div>
                                <a href="/hotels/{hot.hs_id}/{hot.slug}" data-sveltekit-reload class="card-title font-size-17 font-weight-medium text-dark">{hot.name}</a>
                                <div class="mt-2 mb-3">
                                    <span class="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">{hot.quality.review_rating}/100</span>
                                    <span class="font-size-14 text-gray-1 ml-2">({hot.quality.review_count} reviews)</span>
                                </div>
                                <!-- <div class="mb-0">
                                    <span class="mr-1 font-size-14 text-gray-1">From</span>
                                    <span class="font-weight-bold">£899.00</span>
                                    <span class="font-size-14 text-gray-1"> / night</span>
                                </div> -->
                            </div>
                        </div>
                    </div>
                {/each}    
                </div>
            </div>
        </div>
        <!-- End Product Cards Ratings With carousel -->
    </div>
    
    
</main>
<Footer />