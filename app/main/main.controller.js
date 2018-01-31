(function(){
	'use strict',

	angular
		.module('chezPanisseCafeApp')
		.controller('MainCtrl', main)

	main.$inject= ['$scope','Api','$http','ngToast']
	function main($scope, api, $http, ngToast){
		var vm= this;

		vm.articles = [];
		vm.bookView = false;
		vm.changeView = changeView;
		vm.cancelBooking = cancelBooking;
		vm.confirmBooking = confirmBooking;
		vm.getCitiesBasedOnCountry = getCitiesBasedOnCountry;
		vm.goToPage = goToPage;
		init();

		function init() {
			vm.countries = [{code: "US", name: "United States"}, {code: "MY", name: "Malaysia"}, {code: "CA", name: "Canada"}];
			vm.peopleArr = ["1 person", "2 people", "3 people", "4 people", "5 people", "large party"];
			vm.timeArr = ["8:00 AM", "8:30 AM", "9:00 AM",  "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 AM"];
			vm.country = vm.countries[0];
			vm.currentPage = 1;

      let country = vm.country.code;
			let page = 1;
      let per_page= 50;
      let filters = {
        country,
        page,
        per_page
      }

			getAllRestaurants(filters);
		}

		function goToPage(selectedPage){
			let country = vm.country.code;
			let page = selectedPage;
      let per_page= 50;
      let filters = {
        country,
				page,
        per_page
      }
			getAllRestaurants(filters);
		}

		function getAllRestaurants(filters) {
			api.getRestaurantsWithFilters(filters)
			.then(updateRestaurants)
			.then(totalRestaurants)
			.catch(errorHandler)
		}

		function updateRestaurants(res) {
			vm.restaurants= res.data.restaurants;
			return res.data.total_entries;;
		}

		function totalRestaurants(totalCount) {
			vm.totalRestaurants = totalCount;
			vm.totalPages = Math.ceil(totalCount / 50);
		}

		function changeView(itemId) {
			vm.activeItemId = itemId;
      vm.bookView = !vm.bookView;
      vm.getAllCityRestaurants;
    }

		function cancelBooking(){
			vm.activeItemId = '';
			vm.bookView = !vm.bookView;
		}

		function confirmBooking(){
			ngToast.create({
				className: 'success',
				timeout: 5000,
				content: 'Successfully Booked'
			});
			vm.activeItemId = '';
			vm.bookView = !vm.bookView;
		}

		function getCitiesBasedOnCountry(countryObj){
			vm.country = countryObj;
			let country = countryObj.code;
      let per_page= 50;
      let filters = {
        country,
        per_page
      }
			getAllRestaurants(filters);
		}

		function errorHandler() {
			console.error("Error in get all restaurants.");
		}
	}
})()
