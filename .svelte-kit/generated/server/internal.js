
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\t<!-- Title -->\r\n\t<title>Maldivesbeachvacation.com | Compare over 743+ hotels in Maldives</title>\r\n\r\n\t<!-- Required Meta Tags Always Come First -->\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/assets/fav/apple-touch-icon.png\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/assets/fav/favicon-32x32.png\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/assets/fav/favicon-16x16.png\">\r\n\t \r\n\r\n\t<!-- Google Fonts -->\r\n\t<link href=\"https://fonts.googleapis.com/css?family=Lato&amp;display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"//fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&amp;display=swap\" rel=\"stylesheet\">\r\n\r\n\t<!-- CSS Implementing Plugins -->\r\n\t<link rel=\"stylesheet\" href=\"/assets/vendor/font-awesome/css/fontawesome-all.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"/assets/css/font-mytravel.css\">\r\n\t<link rel=\"stylesheet\" href=\"/assets/vendor/animate.css/animate.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"/assets/vendor/hs-megamenu/src/hs.megamenu.css\">\r\n\t<link rel=\"stylesheet\" href=\"/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css\">\r\n\t<link rel=\"stylesheet\" href=\"/assets/vendor/flatpickr/dist/flatpickr.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css\">\r\n\t<link rel=\"stylesheet\" href=\"/assets/vendor/slick-carousel/slick/slick.css\">\r\n\t<link rel=\"stylesheet\" href=\"/assets/vendor/dzsparallaxer/dzsparallaxer.css\">\r\n\r\n\t<!-- CSS MyTravel Template -->\r\n\t<link rel=\"stylesheet\" href=\"/assets/css/theme.css\">\r\n\r\n\t <!-- JS Global Compulsory -->\r\n\t <script src=\"/assets/vendor/jquery/dist/jquery.min.js\"></script>\r\n\t <!-- <script src=\"/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js\"></script> -->\r\n\t <script src=\"/assets/vendor/popper.js/dist/umd/popper.min.js\"></script>\r\n\t <script src=\"/assets/vendor/bootstrap/bootstrap.min.js\"></script>\r\n\t <script src=\"/assets/vendor/dzsparallaxer/dzsparallaxer.js\"></script>\r\n \r\n\t  <!-- JS Implementing Plugins -->\r\n\t  <script src=\"/assets/vendor/hs-megamenu/src/hs.megamenu.js\"></script>\r\n\t  <script src=\"/assets/vendor/jquery-validation/dist/jquery.validate.min.js\"></script>\r\n\t  <script src=\"/assets/vendor/flatpickr/dist/flatpickr.min.js\"></script>\r\n\t  <script src=\"/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js\"></script>\r\n\t  <script src=\"/assets/vendor/slick-carousel/slick/slick.js\"></script>\r\n\t  <script src=\"/assets/vendor/ion-rangeslider/js/ion.rangeSlider.min.js\"></script>\r\n\t <script src=\"/assets/vendor/custombox/dist/custombox.min.js\"></script>\r\n\t <script src=\"/assets/vendor/custombox/dist/custombox.legacy.min.js\"></script>\r\n\t <script src=\"/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js\"></script>\r\n\t <script src=\"/assets/vendor/fancybox/jquery.fancybox.min.js\"></script>\r\n\t <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js\"></script>\r\n \r\n\t  <!-- JS MyTravel -->\r\n\t  <script src=\"/assets/js/hs.core.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.header.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.unfold.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.validation.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.show-animation.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.range-datepicker.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.range-slider.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.selectpicker.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.go-to.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.slick-carousel.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.fancybox.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.quantity-counter.js\"></script>\r\n\t  <script src=\"/assets/vendor/gmaps/gmaps.min.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.g-map.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.scroll-nav.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.modal-window.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.malihu-scrollbar.js\"></script>\r\n\t  <script src=\"/assets/js/components/hs.sticky-block.js\"></script>\r\n\t\t \r\n \r\n\t  <!-- JS Plugins Init. -->\r\n\t  <script>\r\n\t\t  $(window).on('load', function () {\r\n\t\t\t  // initialization of HSMegaMenu component\r\n\t\t\t  $('.js-mega-menu').HSMegaMenu({\r\n\t\t\t\t  event: 'hover',\r\n\t\t\t\t  pageContainer: $('.container'),\r\n\t\t\t\t  breakpoint: 1199.98,\r\n\t\t\t\t  hideTimeOut: 0\r\n\t\t\t  });\r\n \r\n\t\t\t //  // Page preloader\r\n\t\t\t //  setTimeout(function() {\r\n\t\t\t //    $('#jsPreloader').fadeOut(500)\r\n\t\t\t //  }, 800);\r\n\t\t  });\r\n \r\n\t\t  $(document).on('ready', function () {\r\n\t\t\t  window.dzsprx_self_options = {};\r\n\t\t\t  window.dzsprx_index = 0;\r\n\t\t\t  // initialization of header\r\n\t\t\t  $.HSCore.components.HSHeader.init($('#header'));\r\n \r\n\t\t\t  // initialization of unfold component\r\n\t\t\t  $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));\r\n \r\n\t\t\t  // initialization of show animations\r\n\t\t\t  $.HSCore.components.HSShowAnimation.init('.js-animation-link');\r\n \r\n\t\t\t  // initialization of datepicker\r\n\t\t\t  $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');\r\n \r\n\t\t\t  // initialization of malihu scrollbar\r\n\t\t\t  $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));\r\n \r\n\t\t\t  // initialization of select\r\n\t\t\t  $.HSCore.components.HSSelectPicker.init('.js-select');\r\n \r\n\t\t\t  // initialization of quantity counter\r\n\t\t\t  $.HSCore.components.HSQantityCounter.init('.js-quantity');\r\n \r\n\t\t\t  // initialization of slick carousel\r\n\t\t\t  $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');\r\n \r\n\t\t\t  // initialization of go to\r\n\t\t\t  $.HSCore.components.HSGoTo.init('.js-go-to');\r\n \r\n\t\t\t  // initialization of sticky blocks\r\n\t\t\t  $.HSCore.components.HSStickyBlock.init('.js-sticky-block');\r\n \r\n\t\t\t // initialization of HSScrollNav component\r\n\t\t\t  $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {\r\n\t\t\t\t duration: 700\r\n\t\t\t });\r\n \r\n\t\t  });\r\n\t  </script>\r\n\t\r\n\t" + head + "\r\n\t\r\n</head>\r\n\r\n<body data-sveltekit-preload-data=\"hover\">\r\n\t\r\n\t<div style=\"display: contents\">" + body + "</div>\r\n\t\r\n\t <!-- <script src=\"//maps.googleapis.com/maps/api/js?key=AIzaSyCuY6I4hZQvxo5RqCH7kogGKzcrjetRKQI&amp;callback=initMap\" async=\"\" defer=\"\"></script> -->\r\n</body>\r\n\r\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1dyazy2"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
