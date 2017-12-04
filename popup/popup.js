var checkbox = $("#myonoffswitch1");

$(function() {
  chrome.storage.sync.get('total_hit_count', function(result) {
    $('#total_hit_count').html(result.total_hit_count);
  });
  chrome.storage.sync.get('total_phishing_hit_count', function(result) {
    $('#total_phishing_hit_count').html(result.total_phishing_hit_count);
  });
  chrome.storage.sync.get('phish_lens_app_status', function(result) {
    if(result['phish_lens_app_status']) {
      $('#toggle-one').bootstrapToggle();
    } else {
      $('#toggle-one').bootstrapToggle('off');
    }
  });

  $('#toggle-one').change(function() {
    if($(this).prop('checked')) {
      chrome.storage.sync.set({'phish_lens_app_status': true}, function() {
    });

    } else {
      chrome.storage.sync.set({'phish_lens_app_status': false}, function() {
      message('Settings saved');
    });
    }
  })

  $('.listen-click').click(function() {
    if($('#toggle-one').prop('checked')) {
      window.close();
      chrome.storage.sync.set({'phish_lens_app_status': true}, function() {
    });

    } else {
      $('.site-status-safe').css('display', 'block');
      $('.app-switched-off').css('display', 'none');
      chrome.storage.sync.set({'phish_lens_app_status': false}, function() {
      message('Settings saved');
    });
    }
  })
})
