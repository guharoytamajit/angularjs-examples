    var phonecatApp = angular.module('phonecatApp', []);
     	var students = [{name:'Mary Contrary', id:'1'},
{name:'Jack Sprat', id:'2'},
{name:'Jill Hill', id:'3'}];
    phonecatApp.controller('PhoneListCtrl', function ($scope) {
$scope.students = students;
$scope.insertTom = function () {
alert('insert');
$scope.students.splice(1, 0, {name:'Tom Thumb', id:'4'});
};
    });
	
