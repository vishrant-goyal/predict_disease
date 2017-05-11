$ ->
  $.setAjaxPagination = ->
    $('.pagination a').click (event) ->
      event.preventDefault()
      $.ajax
        type: 'GET',
        url: $(@).attr('href')
        dataType: 'script'
        success: ->
          return
      false

  $(".area_name").keyup ->
    city_id_selected = $(".city_id").val()
    if city_id_selected == ""
      $(".select_errors").show()
    else
      $(".select_errors").hide()
    return
