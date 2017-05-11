# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

ready = undefined
ready = undefined
ready = ->

  # When booked the form should be visible
  $(".booked").click (e) ->
    e.preventDefault()
    $(this).parents(".appointment-detail").find('.booking_update').slideDown()
    return

  # Once the form is submitted, update content with details
  $(".update-booking-form").on 'submit', (e) ->
    e.preventDefault()
    form_element = $(this)
    appointment_element = $(this).parents(".appointment-detail")
    $('input.booked-submit', this).attr('disabled', 'disabled').val("submitting")

    $.ajax
      type: 'POST'
      cache: false
      url: '/appointments/update_booking_time'
      data: $(this).serialize()
      success: (data) ->
        if (data.error)
          $('input.booked-submit').prop('disabled', false).val("submit")
          appointment_element.find(".form-messages").text("")
          appointment_element.find(".form-messages").append(data.error + "\n")
        else
          appointment_element.find(".form-messages").text("")
          appointment_element.find(".status-text").text(data.status)
          appointment_element.find(".timing-text").text(data.appointment_timings)
          appointment_element.find(".new_entry_timing").show()
          appointment_element.find(".tr-actions").html ""
          $(".dateAppointment").val("")
          # Need to update appointment-status div
        return
    return


  $(".backend-booked").click (e) ->
    e.preventDefault()
    appointment_element = $(this).parents(".appointment-detail")
    appointment_id = $(this).attr("data-appointmentid")

    $.ajax
      type: 'POST'
      cache: false
      url: '/appointments/backend_booked'
      data: { appointment_id: appointment_id }
      success: (data) ->
        if (data.error)
          appointment_element.find(".form-messages").text("")
          appointment_element.find(".form-messages").append(data.error + "\n")
        else
          appointment_element.find(".form-messages").text("")
          appointment_element.find(".status-text").text(data.status)
          appointment_element.find(".tr-actions").html ""
          $(".dateAppointment").val("")
        return
    return

  $(".cancel-update-booking").click (e) ->
    e.preventDefault()
    $(".dateAppointment").val("")
    $(this).parents('.booking_update').slideUp()
    return


  $(".comm-form").on 'submit', (e) ->
    e.preventDefault()
    form_element = $(this)
    if !$(form_element).find("input:radio:checked").val()
      request = false
    else if $(form_element).find("input:radio:checked").val() == "doctor_not_available_long" && $(form_element).find(".unavailable-till").val() == ""
      request = false
    else if $(form_element).find("input:radio:checked").val() == "doctor_not_available_long" && $(form_element).find(".unavailable-till").val() != "" && $(form_element).find("#recommended-doc-1").val() == "" && $(form_element).find("#recommended-doc-2").val() != ""
      request = false
      guid1nil = true
    else if $(form_element).find("input:radio:checked").val() == "doctor_not_available_long" && $(form_element).find(".unavailable-till").val() != "" && $(form_element).find("#recommended-doc-1").val() != "" && $(form_element).find("#recommended-doc-2").val() != "" && $(form_element).find("#recommended-doc-1").val() == $(form_element).find("#recommended-doc-2").val()
      request = false
      sameguid = true
    else
      request = true

    if request
      $(form_element).find("input[type='submit']").attr("disabled", "true")
      data = {
        appointment_id: $(form_element).find("#appointment_id").val(),
        inform_user: $(form_element).find("input[name='inform_user']:checked").val(),
        available_slot_date: $(form_element).find("#available_slot_date").val(),
        available_slot_time: $(form_element).find("#available_slot_time").val(),
        unavailable_till: $(form_element).find("#unavailable-till").val(),
        doc_1 : $(form_element).find("#recommended-doc-1").val(),
        doc_2 : $(form_element).find("#recommended-doc-2").val(),
        msg: $(form_element).find("#msg").val()
      }
      $.ajax
        type: 'POST'
        cache: false
        url: '/appointments/inform_user'
        data: data
        success: (data) ->
          $(form_element).find("input[type='submit']").removeAttr("disabled")
          if (data.error)
            $(form_element).find(".form-messages").text(data.error)
          else
            $(form_element).find(".form-messages").text("")
            $(form_element).find(".inputs, .recommendations").addClass("hidden")
            $(form_element).find("input:text,textarea").val("")
            $(form_element).find("input:radio:checked").prop("checked", false)
            alert("SMS and email has been sent to the customer")
          return
    else
      if(guid1nil)
        guid1nil = false
        alert("Enter GUID 1")
      else if(sameguid)
        sameguid = false
        alert("Enter different GUID")
      else
        alert("Please fillup details correctly")
    return

  original_msg = ""
  $("input[name='inform_user']").click () ->
    $(this).parents(".comm-form").find(".inputs").addClass("hidden")
    $(this).parents(".comm-form").find(".recommendations").addClass("hidden")
    $(".avl_slot,.unavailable-till").val("")
    $(".form-messages").text("")
    $(".avl_time").val("")

    if $(this).val() == "user_not_reachable"
      msg = "We tried calling you about your Doctor's Appointment <appt_id> request on 1mg but could not connect with you."
    
    else if $(this).val() == "doctor_not_reachable"
      msg = "We are unable to contact <Doctor Name> at this moment. We will inform you shortly about your appointment."

    else if $(this).val() == "doctor_not_available"
      $(this).parents(".comm-form").find(".inputs").removeClass("hidden")
      msg = "<Doctor Name> is not available at your requested time."
    
    else if $(this).val() == "doctor_not_available_long"
      $(this).parents(".comm-form").find(".recommendations").removeClass("hidden")
      msg = "The requested Doctor is unavailable/booked till <x>. You can book an appointment from our recommended Doctors in your City: <URL>."

    msg = msg.replace("<Doctor Name>",$(this).parents(".comm-form").find("#doc_name").val().replace("[P] ",""))
    msg = msg.replace("<appt_id>", "("+$(this).parents(".appointment-detail").find(".ref-id a").text()+")")
    original_msg = msg

    $(this).parents(".comm-form").find("textarea").val(msg)
    return

  
  $(".update_msg").click () ->
    date_slot = $(this).parents(".comm-form").find("#available_slot_date").val()
    time_slot = $(this).parents(".comm-form").find("#available_slot_time").val()

    if date_slot && !time_slot
      alert("Please enter the time slot to update the message")

    if date_slot && time_slot
      msg = original_msg + " Doctor is available <Date> <Time>. Please confirm in next 30 minutes before this slot gets booked. Click here to confirm."
      msg = msg.replace("<Date>", "on " + date_slot).replace("<Time>", "at " + time_slot)
      $(this).parents(".comm-form").find("textarea").val(msg)
    return

  $(".unavailable_till").click () ->
    doc1 = $(this).parents(".comm-form").find("#recommended-doc-1").val()
    doc2 = $(this).parents(".comm-form").find("#recommended-doc-2").val()
    unavl = $(this).parents(".comm-form").find(".unavailable-till").val()

    if unavl
      if doc1 && !doc2
        doc1_url = "https://www.1mgdoctors.com/doctor/" + doc1.trim()
        msg = original_msg.replace("<URL>", doc1_url)
      else if !doc1 && doc2
        doc2_url = "https://www.1mgdoctors.com/doctor/" + doc2.trim()
        msg = original_msg.replace("<URL>", doc2_url)
      else if !doc1 && !doc2
        msg = "The requested Doctor is unavailable/booked till <x>."
      else if doc1 && doc2
        doc1_url = "https://www.1mgdoctors.com/doctor/" + doc1.trim()
        doc2_url = "https://www.1mgdoctors.com/doctor/" + doc2.trim()
        msg = original_msg.replace("<URL>", "Doc1: " + doc1_url+", Doc2: "+ doc2_url)

      msg = msg.replace("<x>",unavl)
      $(this).parents(".comm-form").find("textarea").val(msg)
    
    return

  #Show the Pop-Up div to add or update a card
  $(".appointmentpopupButton").click ->
    $(".main").animate
      opacity: 0.2
    , 100
    $(".appointment-changestatus-popup").show()
    btn = $(this)
    data_actiontype = $(this).attr("data-actiontype")
    appointment_id = $(this).attr("data-appointmentid")
    if data_actiontype == "not_booked"
      $("#reason-dropdown").hide()
      $(".appointment-changestatus-popup form").attr("action", "/appointments/" + appointment_id + "/update_non_booking")
    else if data_actiontype == "on_hold"
      $("#reason-dropdown").hide()
      $(".appointment-changestatus-popup form").attr("action", "/appointments/" + appointment_id + "/place_on_hold")
    else if data_actiontype == "cancel"
      $("#reason-dropdown").hide()
      $(".appointment-changestatus-popup form").attr("action", "/appointments/" + appointment_id + "/cancel")
    return

  # Editing doctor practice location on appointments
  $(".edit-dpl-link").click (e) ->
    e.preventDefault()
    $(this).parents(".dpl-details").hide()
    $(this).parents(".dpl-details").siblings(".edit-dpl-form").show()
    return

  $(".cancel-update-appointment-clinic").click (e) ->
    e.preventDefault()
    $(this).parents(".edit-dpl-form").hide()
    $(this).parents(".edit-dpl-form").siblings(".dpl-details").show()
    return

  # Once the form is submitted, update content with details
  $(".update-appointment-clinic-form").on 'submit', (e) ->
    e.preventDefault()
    form_element = $(this).parents(".edit-dpl-form")
    appointment_element = $(this).parents(".appointment-detail")

    $.ajax
      type: 'POST'
      cache: false
      url: '/appointments/update_appointment_clinic'
      data: $(this).serialize()
      success: (data) ->
        console.log(data)
        appointment_element.find(".dpl-details-link").text(data.name)
        appointment_element.find(".dpl-details-link").attr( 'href', "/practice_locations/" + data.pl_id)
        appointment_element.find(".dpl-details").show()
        form_element.hide()
        return
    return

  $("#appointment-doctor-field").change (e) ->
    $("#appointment_doctor_practice_location_id").html ""
    e.preventDefault()
    console.log("Here 1")
    doctor_guid = $(this).val()
    $.ajax
      type: 'GET'
      cache: false
      url: '/appointments/get_doctor_practice_locations'
      data: {doctor_guid: doctor_guid}
      success: (data) ->
        $("#appointment_doctor_practice_location_id").html ""
        for pl_data in data["practice_locations"]
          console.log(pl_data)
          $("#appointment_doctor_practice_location_id").append '<option value="' + pl_data["id"] + '"+>' + pl_data["name"] + '</option>'
        return
    return

  $(".avl_time").click () ->
    selectedDate = $(this).parents(".comm-form").find(".dateAppointment").val()

    if !selectedDate
      $(this).parents(".comm-form").find(".avl_slot").focus()
    return

  $(".avl_slot").change () ->
    $(".avl_time").timepicker("destroy")
    $(this).parents(".comm-form").find(".avl_time").val("")

    selectedDate = $(this).parents(".comm-form").find(".dateAppointment").val()
    if selectedDate
      selectedDate = new Date(selectedDate.split("-").reverse().join("/"))
      curr_date = new Date()
      curr_date.setHours(0,0,0,0)

    if selectedDate.getTime() == curr_date.getTime()
      d = new Date()
      $(".avl_time").timepicker
        timeFormat: "hh:mm TT"
        minuteGrid: 15
        stepMinute: 5
        minuteGrid: 10
        minTime: d.toLocaleTimeString()
    else if selectedDate.getTime() != curr_date.getTime()
      $(".avl_time").timepicker
        timeFormat: "hh:mm TT"
        minuteGrid: 15
        stepMinute: 5
        minuteGrid: 10
    return

  $(".dateAppointment").each ->
    $(this).datepicker
      dateFormat: "dd-mm-yy"
      changeMonth: "true"
      changeYear: "true"
      yearRange: "nn:+10"
      minDate: 0
      altField: ".dateAppointment"
      altFormat: "dd-mm-yy"

    $(".time-field").timepicker
      timeFormat: "hh:mm TT"
      minuteGrid: 15
      stepMinute: 5
      minuteGrid: 10
    return


$(document).ready ready
$(document).on "page:load", ready
