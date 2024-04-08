window.ThemKhoaHoc = function($scope,$http,$location){
    $scope.title2 = "Quản Lý Khóa Học";
    $scope.title = "Danh Sách Khóa Học";
    const apiKhoaHoc = "http://localhost:3000/khoahoc";
    function getData(){
        $http.get(apiKhoaHoc).then(function(response){
            if(response.status == 200){
                $scope.QLKH = response.data;
                // console.log(response.data);
            }
        })
    }
    getData();
    //them khoa hoc
    $scope.add = function(){
        const apiKhoaHoc = "http://localhost:3000/khoahoc";
        //tạo biến ktra
        let flag = true;
        //check từng trường hợp
        $scope.kiemtra= {
            code: false,
            name: false,
            time: false,
            const: false
        }
        //validate
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
            // lấy dữ liệu từ input
            let newKhoaHoc = {
                ma: $scope.khoahoc.code,
                ten: $scope.khoahoc.name,
                thoiluong: $scope.khoahoc.time,
                hocphi: $scope.khoahoc.const
            }
            // console.log(newKhoaHoc)
            $http.post(
                apiKhoaHoc,
                newKhoaHoc
            );
        }else{
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }
    $scope.deleteKhoaHoc = function(deleteID){
        if(deleteID){
            let confirm = window.confirm("Ban co chac muon xoa khong?")
            if(confirm){
                $http.delete(
                    `${apiKhoaHoc}/${deleteID}`
                ).then(function(response){
                    if(response.status == 200){
                        alert("Xoa thanh cong");
                    }
                })
            }
        }
    }
    
}