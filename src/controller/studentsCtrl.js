window.studentsCtrl = function ($rootScope, $scope) {
  $scope.indexSelect = -1;
  clearForm();
  $scope.showStd = function (index) {
    if (index != -1) {
      $scope.indexSelect = index;
      $scope.stdShow = {
        id: $rootScope.students[index].id,
        name: $rootScope.students[index].name,
        age: $rootScope.students[index].age,
        gender: $rootScope.students[index].gender,
        address: $rootScope.students[index].address,
      };
    }
  };
  $scope.delteStd = function (index) {
    $rootScope.students.splice(index, 1);
    clearForm();
  };

  $scope.addStd = function (id, validated) {
    if (validated) {
      $rootScope.students.push({
        name: $scope.stdShow.name,
        age: $scope.stdShow.age,
        gender: $scope.stdShow.gender,
        address: $scope.stdShow.address,
        id: $scope.stdShow.id,
      });
      clearForm();
    }
  };
  $scope.updateStd = function (validated) {
    if (validated) {
      $rootScope.students[$scope.indexSelect] = {
        name: $scope.stdShow.name,
        age: $scope.stdShow.age,
        gender: $scope.stdShow.gender,
        address: $scope.stdShow.address,
        id: $scope.stdShow.id,
      };
    }
  };
  function clearForm() {
    indexSelect = -1;
    $scope.stdShow = {
      id: "",
      name: "",
      age: "",
      gender: true,
      address: "",
    };
  }
};
