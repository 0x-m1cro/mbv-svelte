/**
 * Range datepicker wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSRangeDatepicker = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Range datepicker wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initRangeDatepicker();

      return this.pageCollection;

    },

    initRangeDatepicker: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          optWrapper = $this.data('rp-wrapper'),
          optIsInline = Boolean($this.data('rp-is-inline')),
          optType = $this.data('rp-type'),
          optDateFormat = $this.data('rp-date-format'),
          //optDefaultDate = JSON.parse(JSON.stringify(el.getAttribute('data-rp-default-date'))),
          optIsDisableFutureDates = $this.data('rp-is-disable-future-dates');

        $this.flatpickr({          
          inline: optIsInline, // boolean
          mode: optType ? optType : 'single', // 'single', 'multiple', 'range'
          dateFormat: optDateFormat ? optDateFormat : 'd M Y',
          defaultDate: 'today',
          altInput: true,
          altFormat: "F j, Y",
          appendTo: $(optWrapper)[0],
          numberOfMonths: 2,
          maxDate: optIsDisableFutureDates ? 'today' : false,
          locale: {
            firstDayOfWeek: 1,
            weekdays: {
              shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
            },
            rangeSeparator: ' - '
          },
          onChange: function(selectedDates, dateStr) {                                  
            let dates = dateStr
            var d1 = dates.slice(0, 10)
            var d2 = dates.slice(13, 24)
            localStorage.setItem('dates', JSON.stringify([d1, d2]));          
          },   
        });

        $this.css({
          width: $this.val().length * 7.5
        });

        //Actions
        collection = collection.add($this);
      });
    }
  };
})(jQuery);
