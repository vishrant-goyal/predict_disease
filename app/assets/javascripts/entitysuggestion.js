$(document).ready(function(){
  // For course_type, medical body and college as they are searched only by name
	obj = $(".searchCourse").autocomplete({
		appendTo: $(this).closest('.autocomplete-item'),
    minLength: 2,
    delay: 40,
    source: function (request, response) {
    	var query =  this.term
			var queryurl = "/search/autocomplete_course?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
    		success : function(data) {
          var concatdata = data.courses
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
					  	"label" : dataUnit["name"],
					  	"value" : dataUnit["id"]
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
      $(this).val(ui.item.label);
      $(this).parents('.autocomplete-text').find(".searchCourseID").val(ui.item.value);
      return false;
    },
    open: function () {
    },
		focus: function (event, ui) {
      $(this).val(ui.item.label);
      $(this).parents('.autocomplete-text').find(".searchCourseID").val(ui.item.value);
      return false;
  	},
  	change: function (event, ui) {
    },
  }).each(function(){
    $(this).data("ui-autocomplete")._renderItem = function( ul, item ) {
      return $("<li class='menu-item'></li>").data("item.autocomplete", item).append(item.label).appendTo(ul);
    };
  });

  // For course_type, medical body and college as they are searched only by name
	obj1 = $(".searchSpecialization").autocomplete({
		appendTo: '.autocomplete-item',
    delay: 40,
    source: function (request, response) {
    	var query = $(".searchSpecialization").val();
			var queryurl = "/search/autocomplete_specialization?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
        data: {course_name : $("#course_name").val() },
    		success : function(data) {
          var concatdata = data.specializations
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
					  	"label" : dataUnit["name"],
					  	"value" : dataUnit["name"],
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
          $(".searchSpecialization").val(ui.item.value);
          return false;
     },
    open: function () {
    },
		focus: function (event, ui) {

  	},
  	change: function (event, ui) {
      if (ui.item == null){
        $(".searchSpecialization").val('');
        $(".searchSpecialization").focus();
      }
    },
	}).data("ui-autocomplete" );

  obj1 && (obj1._renderItem = function( ul, item ) {
		return $("<li class='menu-item'></li>").data("item.autocomplete", item)
          .append("<span></span>" + item.label).appendTo(ul);
	});


	obj2 = $(".searchCollege").autocomplete({
		appendTo: $(this).closest('.autocomplete-item'),
    minLength: 2,
    delay: 40,
    source: function (request, response) {
    	var query = this.term
			var queryurl = "/search/autocomplete_college?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
    		success : function(data) {
          var concatdata = data.colleges
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
					  	"label" : dataUnit["name"],
					  	"value" : dataUnit["id"]
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
      $(this).val(ui.item.label);
      $(this).parents('.autocomplete-text').find(".searchCollegeID").val(ui.item.value);
      return false;
     },
    open: function () {
    },
		focus: function (event, ui) {
      $(this).val(ui.item.label);
      $(this).parents('.autocomplete-text').find(".searchCollegeID").val(ui.item.value);
      return false;
  	},
  	change: function (event, ui) {
    },
	}).each(function(){
    $(this).data("ui-autocomplete")._renderItem = function( ul, item ) {
      return $("<li class='menu-item'></li>").data("item.autocomplete", item).append(item.label).appendTo(ul);
    };
  });


  obj3 = $(".editCollege").autocomplete({
		appendTo: '.autocomplete-item-edit',
    minLength: 2,
    delay: 40,
    source: function (request, response) {
    	var query = $(".editCollege").val();
			var queryurl = "/search/autocomplete_college?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
    		success : function(data) {
          var concatdata = data.colleges
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
					  	"label" : dataUnit["name"],
					  	"value" : dataUnit["name"],
              "city" :  dataUnit["city"]
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
          $(".editCollege").val(ui.item.value + ", " + ui.item.city);
          return false;
     },
    open: function () {
    },
		focus: function (event, ui) {

  	},
  	change: function (event, ui) {
      if (ui.item == null){
        $(".editCollege").val('');
        $(".editCollege").focus();
      }
    },
	}).data("ui-autocomplete" );

  obj3 && (obj3._renderItem = function( ul, item ) {
		return $("<li class='menu-item'></li>").data("item.autocomplete", item)
          .append("<span></span>" + item.label + ", " + item.city).appendTo(ul);
	});

  // For speciality
	obj4 = $(".searchSpeciality").autocomplete({
		appendTo: $(this).closest('.autocomplete-item'),
    minLength: 2,
    delay: 40,
    source: function (request, response) {
    	var query = this.term
			var queryurl = "/search/autocomplete_speciality?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
    		success : function(data) {
          var concatdata = data.specialities
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
					  	"label" : dataUnit["name"],
					  	"value" : dataUnit["id"],
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
      $(this).val(ui.item.label);
      $(this).parents('.autocomplete-text').find(".searchSpecialityID").val(ui.item.value);
      return false;
    },
    open: function () {
    },
		focus: function (event, ui) {
      $(this).val(ui.item.label);
      $(this).parents('.autocomplete-text').find(".searchSpecialityID").val(ui.item.value);
      return false;
  	},
  	change: function (event, ui) {
    },
	}).each(function(){
    $(this).data("ui-autocomplete")._renderItem = function( ul, item ) {
      return $("<li class='menu-item'></li>").data("item.autocomplete", item).append(item.label).appendTo(ul);
    };
  });

	obj5 = $(".searchPracticeLocation").autocomplete({
		appendTo: $(this).closest('.autocomplete-item'),
    minLength: 2,
    delay: 40,
    source: function (request, response) {
      var query = this.term;
			var queryurl = "/search/autocomplete_practice_location?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
    		success : function(data) {
          var concatdata = data.practice_locations;
          if(concatdata.length == 0){
          	$("#practiceLocationId").val("");
          }
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
					  	"label" : dataUnit["name"],
					  	"value" : dataUnit["id"],
					  	"id"    : dataUnit["id"]
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
       $(this).val(ui.item.label);
       $(this).parents('.autocomplete-text').find(".searchPracticeID").val(ui.item.value);
       $("#practiceLocationId").val(ui.item.id); // added for review collection page
       return false;
     },
    open: function () {
    },
		focus: function (event, ui) {
       $(this).val(ui.item.label);
       $(this).parents('.autocomplete-text').find(".searchPracticeID").val(ui.item.value);
       $("#practiceLocationId").val(ui.item.id); // added for review collection page
       return false;
  	},
  	change: function (event, ui) {
      
    },
	}).each(function(){
      $(this).data("ui-autocomplete")._renderItem = function( ul, item ) {
        return $("<li class='menu-item'></li>").data("item.autocomplete", item).append(item.label).appendTo(ul);
        };
  });

  // Medical Body
	obj6 = $(".searchMedicalBody").autocomplete({
		appendTo: $(this).closest('.autocomplete-item'),
    minLength: 2,
    delay: 40,
    source: function (request, response) {
    	var query = this.term;
			var queryurl = "/search/autocomplete_medical_body?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
    		success : function(data) {
          var concatdata = data.medical_bodies
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
					  	"label" : dataUnit["name"],
					  	"value" : dataUnit["id"],
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
       $(this).val(ui.item.label);
       $(this).parents('.autocomplete-text').find(".searchMedicalBodyID").val(ui.item.value);
       return false;
     },
    open: function () {
    },
		focus: function (event, ui) {
       $(this).val(ui.item.label);
       $(this).parents('.autocomplete-text').find(".searchMedicalBodyID").val(ui.item.value);
       return false;
  	},
  	change: function (event, ui) {
    },
	}).each(function(){
    $(this).data("ui-autocomplete")._renderItem = function( ul, item ) {
      return $("<li class='menu-item'></li>").data("item.autocomplete", item).append(item.label).appendTo(ul);
    };
  });


	obj5 = $(".searchCity").autocomplete({
		appendTo: $(this).closest('.autocomplete-item'),
    minLength: 2,
    delay: 40,
    source: function (request, response) {
    	var query =  this.term
			var queryurl = "/search/autocomplete_city?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
    		success : function(data) {
          var concatdata = data.cities
          if(concatdata.length == 0){
            $("#searchCityID").val("");
          }
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
              "label" : dataUnit["name"],
              "value" : dataUnit["id"],
              "id"    : dataUnit["id"]
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
      $('.globalcity').text(ui.item.label);

      $.ajax({
        url: "/set_global_city",
        data: { cityname: ui.item.label },
        datatype: 'json',
        success: function() {
          var pathname;
          pathname = window.location.pathname;
          if ((pathname === '/doctors') || (pathname === '/practice_locations') || (pathname === '/tagged_tasks/created_by_me') || (pathname === '/tagged_tasks/my_tasks') || (pathname === '/tagged_tasks/all_tasks') || pathname === '/doctors/my_tasks') {
            location.href = location.href.replace(/&?((page%5D)|(page))=([\d]*)/gi, "");
            location.reload(true);
          }
        }
      });
      $(this).val(ui.item.label);
      $(this).parents('.autocomplete-text').find(".searchCityID").val(ui.item.value);
      return false;
    },
    open: function () {
    },
		focus: function (event, ui) {
     $(this).val(ui.item.label);
      $(this).parents('.autocomplete-text').find(".searchCityID").val(ui.item.value);
      return false;
  	},
  	change: function (event, ui) {
    },
  }).each(function(){
    $(this).data("ui-autocomplete")._renderItem = function( ul, item ) {
      return $("<li class='menu-item'></li>").data("item.autocomplete", item).append(item.label).appendTo(ul);
    };
  });


  // Area Names
	obj7 = $(".searchAreaName").autocomplete({
		appendTo: $(this).closest('.autocomplete-item'),
    minLength: 2,
    delay: 40,
    source: function (request, response) {
    	var query = this.term;
			var queryurl = "/search/autocomplete_area_name?query="+query;
			var dataArr =[];
    	$.ajax({
    		url : queryurl,
    		dataType: "json",
        data: {city_id : $("#city_id").val() },
    		success : function(data) {
          var concatdata = data.area_names
					$.each(concatdata, function(index , dataUnit){
						var queryData = {
					  	"label" : dataUnit["area_name"],
					  	"value" : dataUnit["area_name"],
					 	};
					  dataArr.push(queryData);
					});
					response(dataArr);
				},

    	});
    },
    select: function (event, ui) {
       $(this).val(ui.item.label);
       $(this).parents('.autocomplete-text').find(".searchAreaName").val(ui.item.value);
       return false;
     },
    open: function () {
    },
		focus: function (event, ui) {
       $(this).val(ui.item.label);
       $(this).parents('.autocomplete-text').find(".searchAreaName").val(ui.item.value);
       return false;
  	},
  	change: function (event, ui) {
    },
	}).each(function(){
    $(this).data("ui-autocomplete")._renderItem = function( ul, item ) {
      return $("<li class='menu-item'></li>").data("item.autocomplete", item).append(item.label).appendTo(ul);
    };
  });
});
