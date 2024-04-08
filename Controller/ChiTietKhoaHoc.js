window.ChiTietKhoaHoc = function($scope, $http,$routeParams){
    $scope.title = "Chi Tiet khoa hoc"
    let khoahocID = $routeParams.id;
    const apiKhoaHoc = "http://localhost:3000/khoahoc";
    $http.get(
        `${apiKhoaHoc}/${khoahocID}`
    ).then(function(response){
        console.log(response.id)
        $scope.khoahoc = {
            editID: response.data.id,
            code: response.data.ma,
            name: response.data.ten,
            time: response.data.thoiluong,
            const: response.data.hocphi
        }
    })
}