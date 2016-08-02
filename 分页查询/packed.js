/**
 * Created by Administrator on 2016/8/1.
 */
/*<page
*   list-count="count.php"
*   list-url="page_list.php"
*   list-data=""   >
*</page>
* */

angular.module("packed",[])
    .directive("page",function(){
        return {
            restrict:"EA",
            templateUrl:"packed.html",
            replace:true,
            scope:{
                list:"=listData"
            },
            controller:function($scope,$http,$attrs){
                $scope.pagenow=0;
                $http.get($attrs.listCount)
                    .success(function(d){
                        var count = d;
                        var size=5;
                        var pageCount = Math.ceil(count/size);
                        var arr=[];
                        for(var i=0;i<pageCount;i++){
                            arr.push(i);
                        }
                        $scope.count = arr;
                    });
                getData($scope.pagenow);
                $scope.getData=getData;
                function getData(i){
                    $http.get($attrs.listUrl+"?p="+(i+1))
                        .success(function(r){
                            $scope.pagenow=i;
                            $scope.list = r;
                        });
                }
            }
        }




    });