$(document).ready(function(){
var validator={
	ele :{
		"form":"form.validate-form",
		"submitbtn":"input.validate-submit-btn",
		"validatefield":".validate-field",
		"validateParams":"validateparams"
	},

	type:{
		empty:"empty",
		commentlength:"commentlength",
		zerovalue:"zerovalue",
		emptyfile:"emptyfile",
		emptyradio:"emptyradio",
		notnumeric: "notnumeric",
		validemail: "validemail",
		validmobiledigits: "validmobiledigits",
		onlynumeric: "onlynumeric"
	},
	errorMessage:{
		"empty_doctor_name":"The doctor name can't be empty",
		"empty_file":"Prescription needs to be uploaded",
		"empty_comment":"Comment can't be empty",
		"empty_rx_relation":"This field can't be empty",
		"empty_waiting_time_rating":"This field can't be empty",
		"emptyfile_rx_image":"Prescription is required",
		"empty_practice_location_name":"Practice Location can't be empty",
		"zerovalue_general_rating":" Overall rating is required",
		"zerovalue_clinic_cleanliness_rating":" This rating is required",
		"zerovalue_courteous_staff_rating":" This rating is required",
		"zerovalue_accurate_diagnosis_rating":" This rating is required",
		"zerovalue_doctor_politeness_rating":" This rating is required",
		"zerovalue_accurate_diagnosis_rating":" This rating is required",
		"zerovalue_spends_time_to_explain_condition_rating":" This rating is required",
		"emptyradio_doctor_available_off_hours_rating":"This field is required",
		"empty_user[email]":"Email is required",
		"empty_user[password]":"Username is required",
		"commentlength_comment":"Please write atleast 200 chaarcters",
		"notnumeric_doctor_name":"Numeric characters not allowed",
		"validemail_patient_email":  "Email id is not valid",
		"validmobiledigits_patient_mobile":  "Mobile Number should have 10 digits",
		"onlynumeric_patient_mobile":  "Only Numbers are allowed"
	}

};


$(validator.ele.form).on("click" ,validator.ele.submitbtn, function(event){
  var dosubmit= true;
	var submitBtn = $(this);
	var parentForm = submitBtn.parents("form");
	if(($("#practiceLocationId").val() =="" ) && ($("#first_street").val() == "" || $("#area_name").val() == "" || $("#city").val() == "")  ){
		$(".err-msg").text("Either select from the suggestions in Doctor's Practice Location or add address details available along with city name").css("display","block");
    dosubmit= false;
	}else{
		$(".err-msg").text("").css("display","none");
	}

	var validationFields = parentForm.find(validator.ele.validatefield);

		validationFields.each(function(){
			var ele= $(this);
				if(ele.data(validator.ele.validateParams)!=undefined){
					var validateParams =  ele.data(validator.ele.validateParams).split(",");
					for(var i =0; i<validateParams.length;i++){
						if(!validate(ele,validateParams[i])){
							dosubmit= false;
							break;
						}
					}
				}
			});
		return dosubmit;
});

function validateEmail(email) {
		if (email == "")
		return true;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



function validate(element, param){
	var returnValue = true,
        isNull = $.trim(element.val()).length <= 0,
        eleValue = $.trim(element.val()),
        isZero =element.val()==0;

	switch (param){
		case "empty":
		if(isNull){
			if(element.attr("id") =="doctor_name")
				displayErrorMsg(true,element.parent(), validator.type.empty, element.attr("name"));
			else
				displayErrorMsg(true,element, validator.type.empty, element.attr("name"));

			returnValue=false;
		}else {
			if(element.attr("id") =="doctor_name")
				displayErrorMsg(false,element.parent(), validator.type.empty,element.attr("name"));
			else
			  displayErrorMsg(false,element, validator.type.empty,element.attr("name"));
		}
		break;

		case "zerovalue":
		if(isZero){
			displayErrorMsg(true,element.parent(), validator.type.zerovalue,$(element).attr("name"));
			returnValue=false;
		}else displayErrorMsg(false,element.parent(), validator.type.zerovalue,$(element).attr("name"));
		break;

		case "emptyfile":
		if(isNull){
			displayErrorMsg(true,element.parent(), validator.type.emptyfile, $(element).attr("name"));
			returnValue=false;
		}else displayErrorMsg(false,element.parent(), validator.type.emptyfile, $(element).attr("name"));
		break;

		case "emptyradio":
			if($("input[name="+element.attr("name")+"]:checked").length==0){
				displayErrorMsg(true,element.parents("span"), validator.type.emptyradio, $(element).attr("name"));
				returnValue=false;
			}else displayErrorMsg(false,element.parents("span"), validator.type.emptyradio, $(element).attr("name"));
			break;

		case "commentlength":
			if($(element).val().replace(/\s+/g, ' ').length<200){
				displayErrorMsg(true,element, validator.type.commentlength, $(element).attr("name"));
				returnValue=false;
			}else displayErrorMsg(false,element, validator.type.commentlength, $(element).attr("name"));
			break;

		case "notnumeric":
			if($(element).val().match("[0-9]")!= null){
				displayErrorMsg(true,element.parent(), validator.type.notnumeric, $(element).attr("name"));
				returnValue=false;
			}else displayErrorMsg(false,element.parent(), validator.type.notnumeric, $(element).attr("name"));
			break;

		case "validemail":
			if(!validateEmail($(element).val())){
				displayErrorMsg(true,element, validator.type.validemail, $(element).attr("name"));
				returnValue=false;
			}else displayErrorMsg(false,element, validator.type.validemail, $(element).attr("name"));
		break;

		case "validmobiledigits":
			if($(element).val().trim().length > 0 && $(element).val().length != 10){
				displayErrorMsg(true,element, validator.type.validmobiledigits, $(element).attr("name"));
				returnValue=false;
			}else displayErrorMsg(false,element, validator.type.validmobiledigits, $(element).attr("name"));
		break;

		case "onlynumeric":
			if(!(/^[0-9]*$/.test($(element).val().trim()))){
				displayErrorMsg(true,element, validator.type.onlynumeric, $(element).attr("name"));
				returnValue=false;
			}else displayErrorMsg(false,element, validator.type.onlynumeric, $(element).attr("name"));
		break;
	}
	return returnValue;
}

function displayErrorMsg(flag , element, validationType ,name){
	if(flag){
		if($(element).next(".error-txt")) $(element).next(".error-txt").remove();
		$(element).addClass("error-input");
		$(element).after("<span class='error-txt'>"+validator.errorMessage[validationType+"_"+name] +"</span>");
	}else{
		$(element).next(".error-txt").remove();
		$(element).removeClass("error-input");
	}
}
});
