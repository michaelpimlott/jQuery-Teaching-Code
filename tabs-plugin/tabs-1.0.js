$(document.head).append('<link rel="stylesheet href="tabs-plugin/tabs-1.0.css"></link>');

$.fn.tabbify = function() {
  var $tabs = this.find('h3'),
    $contents = this.find('ul');

  $tabs.each(function(i, tab) {
    var $tab = $(tab),
      $content = $($contents[i]);
    $tab.click(function() {
      $tabs.removeClass('active');
      $tab.addClass('active');
      $contents.removeClass('active');
      $content.addClass('active');

    })
  })

  $tabs.first().addClass('active');
  $contents.first().addClass('active');
};

/*when your plugin code gets called,
 it's called in the context of this elected jquery object,
so the method 'this' becomes the jquery object itself
we are assuming that the developer is going to be calling this on the categories element
meaning that are tags in content are children of this*/
