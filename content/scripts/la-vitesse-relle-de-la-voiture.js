// Filling the 1st form
$("#km-per-year-1").on("keyup", function(event) {
	$("#km-per-year-2").val($(this).val());
});
$("#days-home-work-1").on("keyup", function(event) {
	$("#days-home-work-2").val($(this).val());
});
$("#average-base-speed-1").on("keyup", function(event) {
	$("#average-base-speed-2").val($(this).val());
});
$("#km-home-work-1").on("keyup", function(event) {
	$("#km-home-work-2").val($(this).val());
});
$("#euros-per-year-1").on("keyup", function(event) {
	$("#euros-per-year-2").val($(this).val());
});
$("#euros-per-month-1").on("keyup", function(event) {
	$("#euros-per-month-2").val($(this).val());
});
$("#time-work-per-week-1").on("keyup", function(event) {
	$("#time-work-per-week-2").val($(this).val());
});
$("#car-price-1").on("keyup", function(event) {
	$("#car-price-2").val($(this).val());
});
$("#permis-price-1").on("keyup", function(event) {
	$("#permis-price-2").val($(this).val());
});
$("#gaz-price-per-liter-1").on("keyup", function(event) {
	$("#gaz-price-per-liter-2").val($(this).val());
});
$("#gaz-consumption-1").on("keyup", function(event) {
	$("#gaz-consumption-2").val($(this).val());
});
$("#insurance-price-per-year-1").on("keyup", function(event) {
	$("#insurance-price-per-year-2").val($(this).val());
});
$("#maintenance-price-per-year-1").on("keyup", function(event) {
	$("#maintenance-price-per-year-2").val($(this).val());
});
$("#parking-price-per-year-1").on("keyup", function(event) {
	$("#parking-price-per-year-2").val($(this).val());
});
$("#control-price-per-year-1").on("keyup", function(event) {
	$("#control-price-per-year-2").val($(this).val());
});
$("#wash-price-per-year-1").on("keyup", function(event) {
	$("#wash-price-per-year-2").val($(this).val());
});
$("#traffic-jam-time-per-year-1").on("keyup", function(event) {
	$("#traffic-jam-time-per-year-2").val($(this).val());
});
$("#gaz-fill-time-per-year-1").on("keyup", function(event) {
	$("#gaz-fill-time-per-year-2").val($(this).val());
});
$("#maintenance-time-per-year-1").on("keyup", function(event) {
	$("#maintenance-time-per-year-2").val($(this).val());
});
$("#maintenance-budget-year-1").on("keyup", function(event) {
	$("#maintenance-budget-year-2").val($(this).val());
});
$("#art-budget-year-1").on("keyup", function(event) {
	$("#art-budget-year-2").val($(this).val());
});

// Specifis functions
$(".gaz-consumption").on("keyup", function(event) {
	$(".gaz-fill-time-per-year").val(getTimeToFill().toFixed(2));
});

$(".typology-city").on("click", function() {
	$(".average-base-speed").val(18);
});
$(".typology-medium").on("click", function() {
	$(".average-base-speed").val(26);
});
$(".typology-campaign").on("click", function() {
	$(".average-base-speed").val(35);
});

function getTimeToFill () {
	var distance = getDistance();
	var gaz_consumption = parseFloat($("#gaz-consumption-2").val().replace(",", "."));
	// Time to fill : /45 (1 fill per 45L) and /4 (1/4 hour per fill)
	var total_liter_consumed = distance*(gaz_consumption/100);
	return total_liter_consumed / 45 / 4;
}

// Filling the 2nd form

// Clicking on calculate
$("#calculate").on("click", function(event) {
	var distance, t, t1, t2, t3, t4, speed;

	distance = getDistance();

	var hourly_fee = getHourlyFee();

	var car_worktime_per_year = getCarPricePerYear(distance)/hourly_fee;
	var car_taxetime_per_year = getCarTaxesPerYear()/hourly_fee;

	t1 = getDriveTimePerYear(distance);
	t2 = car_worktime_per_year;
	t3 = getTimeSpendForCarPerYear();
	t4 = car_taxetime_per_year;

	speed = distance / (t1 + t2 + t3 + t4);

	$("#distance-d").text(distance.toFixed(2));
	$("#hourly-fee").text(hourly_fee.toFixed(2));
	$("#time-t1").text(t1.toFixed(2));
	$("#time-t2").text(t2.toFixed(2));
	$("#time-t3").text(t3.toFixed(2));
	$("#time-t4").text(t4.toFixed(2));

	$("#time-t").text((t1+t2+t3+t4).toFixed(2));
	$("#resulting-speed").text(speed.toFixed(2));
});

function getDistance() {
	var km_per_year = parseFloat($("#km-per-year-2").val().replace(",", "."));
	var km_home_work = parseFloat($("#km-home-work-2").val().replace(",", "."));
	var days_home_work = parseFloat($("#days-home-work-2").val().replace(",", "."));
	if (km_per_year > 0) {
		return km_per_year;
	} else if (km_home_work > 0 && days_home_work > 0) {
		return km_home_work * days_home_work * 52;
	}
	return 0;
}

function getHourlyFee() {
	var euros_per_year = parseFloat($("#euros-per-year-2").val().replace(",", "."));
	var euros_per_month = parseFloat($("#euros-per-month-2").val().replace(",", "."));
	var time_work_per_week = parseFloat($("#time-work-per-week-2").val().replace(",", "."));
	var result;
	if (time_work_per_week <= 0) {
		result = 0;
	}
	if (euros_per_year > 0) {
		result = euros_per_year / 52 / time_work_per_week;
	} else if (euros_per_month > 0) {
		result = euros_per_month / 4.33 / time_work_per_week;
	}
	return result;
}


function getCarPricePerYear(distance) {
	var result = 0;

	// Car price is divided into 10 years (average use of a car)
	var car_price = parseFloat($("#car-price-2").val().replace(",", "."));
	result += car_price / 10;

	// Permit is divided into 30 years (estimated of use)
	var permis_price = parseFloat($("#permis-price-2").val().replace(",", "."));
	result += permis_price / 30;

	// Gaz price is consumtion per 100L / 100 then multiplicated by km/year
	var gaz_price_per_liter = parseFloat($("#gaz-price-per-liter-2").val().replace(",", "."));
	var gaz_consumption = parseFloat($("#gaz-consumption-2").val().replace(",", "."));
	result += ((gaz_consumption / 100) * distance) * gaz_price_per_liter;

	var insurance_price_per_year = parseFloat($("#insurance-price-per-year-2").val().replace(",", "."));
	var maintenance_price_per_year = parseFloat($("#maintenance-price-per-year-2").val().replace(",", "."));
	var parking_price_per_year = parseFloat($("#parking-price-per-year-2").val().replace(",", "."));
	var control_price_per_year = parseFloat($("#control-price-per-year-2").val().replace(",", "."));
	var wash_price_per_year = parseFloat($("#wash-price-per-year-2").val().replace(",", "."));

	result += insurance_price_per_year + maintenance_price_per_year + parking_price_per_year + control_price_per_year + wash_price_per_year;

	return result;
}

function getTimeSpendForCarPerYear() {
	var traffic_jam_time_per_year = parseFloat($("#traffic-jam-time-per-year-2").val().replace(",", "."));
	var gaz_fill_time_per_year = parseFloat($("#gaz-fill-time-per-year-2").val().replace(",", "."));
	var maintenance_time_per_year = parseFloat($("#maintenance-time-per-year-2").val().replace(",", "."));

	return traffic_jam_time_per_year + gaz_fill_time_per_year + maintenance_time_per_year;
}

function getDriveTimePerYear(distance) {
	var average_speed = parseFloat($("#average-base-speed-2").val().replace(",", "."));

	return distance / average_speed;
}

function getCarTaxesPerYear() {
	/**
	 * The total budget is in millions euros, so we just have to divide it
	 * by 40 (40 millions of taxable franchies).
	 */
	var maintenance_budget_year = parseFloat($("#maintenance-budget-year-2").val().replace(",", "."));
	var art_budget_year = parseFloat($("#art-budget-year-2").val().replace(",", "."));

	return (maintenance_budget_year + art_budget_year) / 40;
}

/*
km-per-year-2
km-home-work-2
days-home-work-2
euros-per-year-2
euros-per-month-2
time-work-per-week-2
car-price-2
permis-price-2
gaz-price-per-liter-2
gaz-consumption-2
insurance-price-per-year-2
maintenance-price-per-year-2
parking-price-per-year-2
control-price-per-year-2
wash-price-per-year-2
traffic-jam-time-per-year-2
gaz-fill-time-per-year-2
maintenance-time-per-year-2
maintenance-budget-year-2
art-budget-year-2
*/
