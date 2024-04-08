window.SuaKhoaHoc = function($scope,$http,$routeParams,$location){
    $scope.title = "Sủa Thông Tin Khóa Học";
    let khoahocID = $routeParams.id;
    const apiKhoaHoc = "http://localhost:3000/khoahoc";
    $http.get(
        `${apiKhoaHoc}/${khoahocID}`
    ).then(function(response){
        if(response.status == 200){
            console.log(response.data);
            $scope.khoahoc = {
                editID: response.data.id,
                code: response.data.ma,
                name: response.data.ten,
                time: response.data.thoiluong,
                const: response.data.hocphi
            }
        }
    });
    $scope.editKhoaHoc = function(){
        let flag = true;
        $scope.kiemtra = {
            code: false,
            name: false,
            time: false,
            const: false
        }
        //ktra du lieu
        if(!$scope.khoahoc || !$scope.khoahoc.code){
            flag = false;
            $scope.kiemtra.code = true;
        }
        if(!$scope.khoahoc || !$scope.khoahoc.name){
            flag = false;
            $scope.kiemtra.name = true;
        }
        if(!$scope.khoahoc || !$scope.khoahoc.time){
            flag = false;
            $scope.kiemtra.time = true;
        }
        if(!$scope.khoahoc || !$scope.khoahoc.const){
            flag = false;
            $scope.kiemtra.const = true;
        }
        if(flag){
            let updateKhoahoc = {
                ma: $scope.khoahoc.code,
                ten: $scope.khoahoc.name,
                thoiluong: $scope.khoahoc.time,
                hocphi: $scope.khoahoc.const
            }
            $http.put(
                `${apiKhoaHoc}/${khoahocID}`,
                updateKhoahoc
            ).then(function(response){
                if(response.status = 201){
                    $location.path("Quan-Ly")
                }
            })
        }else{
            alert("Ban can nhap day du thong tin")
        }
    }
}