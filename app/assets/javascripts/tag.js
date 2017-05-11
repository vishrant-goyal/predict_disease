$(document).ready(function(){

  //// functions for show pages
  $(".add-tasks-btn").on('click', function() {
    var ids = $('#tag_ids').val();
    
    var a = $(this);
    var url_val = "/tagged_tasks/add_to_entity" ;

    $.ajax ({
      type: 'POST',
      url: url_val,
      data: {
      entity_id: a.attr("data-entity-id"),
      entity_type: a.attr("data-entity-type"),
      tag_ids: ids
    },
    datatype: "json",
    success: function(data) {
      var str = ''; 
      for (var key in data.added_tags) {
      var tag_color = data.added_tags[key].tag.color;
        var style = 'background-color:' + tag_color;
        var url = "<%= remove_tagged_tasks_path %>" ;

        str += "<span class='label label-info doc-label' style='"+style+"'>"+data.added_tags[key].tag.name

        +" <a href='#' class='remove_entity_task' data-url='"+url+"' data-taggedtaskid='"+data.added_tags[key].task_id+"' id='"+data.added_tags[key].task_id+"'>x</a>"

        +"</span>" ;
      }
      $("#pending-tasks").append(str);

    
    }
    });
    });


$('body').on('click','.remove_entity_task', function(){
  $('.submit-button').hide();
  $('.comment-submit').show();
  $(".main").animate({opacity: 0.2}, 100);
  $(".changestatus-popup").show();
  var btn = $(this);
  var tagged_task_id = btn.attr('data-taggedtaskid');
  var submit_button = $('.comment-submit');
  submit_button.addClass('show-comment-submit');
  submit_button.attr('data-task-id',tagged_task_id);
});


$('.comment-submit').on('click', function(){
  var comment=$('#description').val();
  $('#description').val('');
  $(".changestatus-popup").css('display','none');
  $(".main").animate({opacity: 1});
  if(comment.length==0){
    $('.task-complete').hide();
    $('.cannot-remove').hide();
    $('.comment-required').hide();
    $('.container:last').prepend("<div class='alert alert-danger comment-required'>Please enter a comment to complete the task</div>");
  }
  else {
    var task_id = $(this).attr('data-task-id');
    var btn = $('#'+task_id);

    $.ajax({
      url: "/tagged_tasks/remove",
      type: 'POST', 
      data: {tagged_task_id: btn.attr('data-taggedtaskid'), comment: comment},
      datatype: 'json',
      success: function(data){
        if(data.status=='cannot_remove'){
          $('.task-complete').hide();
          $('.cannot-remove').hide();
          $('.comment-required').hide();
          $('.container:last').prepend("<div class='alert alert-danger cannot-remove'>Cannot complete the task. Please make sure child tasks are complete first:  <strong>"+data.child_tags+"</strong></div>");
          return;
        }
        var style = btn.parent().attr('style');
        var text = btn.parent().text().replace(" x", "");
        var button = "<span class='label label-info doc-label' style="+style+" >"+text+"</span>";
        $("#completed-tasks").append(button);
        btn.parent().hide();
        $('.comment-required').hide();
        if (data.child_tags.length>0){
          $('.task-complete').hide();
          $('.cannot-remove').hide();
          $('.container:last').prepend("<div class='alert alert-info task-complete'>The task has been marked complete. Suggested tasks to add next:  <strong>"+data.child_tags+"</strong></div>");
        }
        else{
          $('.task-complete').hide();
          $('.cannot-remove').hide();
          $('.container:last').prepend("<div class='alert alert-info task-complete'>The task has been marked complete.</div>");
        }
            

        var assignee_name = data.assignee;
        var completor_name = data.completor;
        var time = data.time;
        var table_row = "<tr><td>"+button+"</td><td>"+assignee_name+"</td><td>"+data.created_by+"</td><td>"+data.created_at+"</td><td>" +completor_name+"</td><td>"+time+"</td><td>"+comment+"</td><tr>";
        $(".task-history-table").append(table_row);
      }
  });
  }
});  


$("#view_history_link").click(function() {
  $("#task_history_table").show(1000,'linear');
  $("#hide_history_link").show();
  $("#view_history_link").hide();
});

$("#hide_history_link").click(function() {
  $("#task_history_table").hide(1000,'linear');
  $("#hide_history_link").hide();
  $("#view_history_link").show();
});


$("#view_duplicate_doctors").click(function() {
  $("#associated_duplicate_doctors").fadeIn("slow");
  $("#hide_duplicate_doctors").show();
  $("#view_duplicate_doctors").hide();
});

$("#hide_duplicate_doctors").click(function() {
  $("#associated_duplicate_doctors").fadeOut("slow");
  $("#hide_duplicate_doctors").hide();
  $("#view_duplicate_doctors").show();
});


////// functions for index pages
$('body').on('click','.remove_task_cross', function(){
  $('.submit-button').hide();
  $('.comment-submit-index').show();
  $(".main").animate({opacity: 0.2}, 100);
  $(".changestatus-popup").show();
  var btn = $(this);
  var tagged_task_id = btn.attr('data-taggedtaskid');
  var submit_button = $('.comment-submit-index');
  submit_button.attr('data-task-id',tagged_task_id);
});

$('.comment-submit-index').on('click', function(){
  var comment=$('#description').val();
  $('#description').val('');
  $(".changestatus-popup").css('display','none');
  $(".main").animate({opacity: 1});

  if(comment.length==0){
    $('.task-complete').hide();
    $('.cannot-remove').hide();
    $('.comment-required').hide();
    $('.container:last').prepend("<div class='alert alert-danger comment-required'>Please enter a comment to complete the task</div>");
  }
  else{
    var task_id = $(this).attr('data-task-id');
    var btn = $('#'+task_id);
    $.ajax({
      url: "/tagged_tasks/remove",
      type: 'POST', 
      data: {tagged_task_id: btn.attr('data-taggedtaskid'), comment: comment},
      datatype: 'json',
      success: function(data){
        if(data.status=='cannot_remove'){
          $('.task-complete').hide();
          $('.cannot-remove').hide();
          $('.comment-required').hide();
          $('.container:last').prepend("<div class='alert alert-danger cannot-remove'>Cannot complete the task. Please make sure child tasks are complete first:  <strong>"+data.child_tags+"</strong></div>");
          return;
        }
        if ($("#tagged_task_cross_deactivate").length == 0)
          btn.prev().hide();
        btn.hide();
        $('.comment-required').hide();
        if (data.child_tags.length>0){
          $('.task-complete').hide();
          $('.cannot-remove').hide();
          $('.container:last').prepend("<div class='alert alert-info task-complete'>The task has been marked complete. Suggested tasks to add next:  <strong>"+data.child_tags+"</strong></div>");
        }
        else{
          $('.task-complete').hide();
          $('.cannot-remove').hide();
          $('.container:last').prepend("<div class='alert alert-info task-complete'>The task has been marked complete.</div>");
        }
      }
  });
  }
});


$(".mass-assign").on('click', function() {
  var ids = [];

  $('table input:checked').each(function() {
    ids.push($(this).val());
  });

  if (ids.length==0) {
    $('.cannot-remove').hide();
    $('.container:last').prepend("<div class='alert alert-danger cannot-remove'>No entity selected for adding tags.</div>");
    return;
  }

  var a = $(this);
  var url_val = "/tagged_tasks/mass_assign" ;
  var tag_id = $('#tag_id').val();

  $.ajax ({
    type: 'POST',
    url: url_val,
    data: {
      entity_ids: ids,
    entity_type: a.attr("data-entity-type"),
    tag_id: tag_id
    },
    datatype: "json",
    success: function(data) {
      location.reload();
    }
  });
});


// CREATED BY ME
$("#view_filters").click(function() {
  $(".filter-panel").show(250,'linear');
  $("#hide_filters").show();
  $("#view_filters").hide();
});

$("#hide_filters").click(function() {
  $(".filter-panel").hide(250,'linear');
  $("#hide_filters").hide();
  $("#view_filters").show();
});

}); 
