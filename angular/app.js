   const app = angular.module('ToDo',[]);
    app.controller('todo_Controller',['$scope', function($scope){
        $scope.todos = loadItems()
        
        function loadItems() {
            dbItems = localStorage.getItem('db');
            console.log("Items: " + dbItems);
            if(dbItems) {
                return JSON.parse(dbItems);
            } else {
                return [];
            }
        }
        
        $scope.addTodo = function(){
            $scope.todos.push({'title':$scope.newTodo,'date':$scope.todo_date,'done':false});
            $scope.newTodo = '';
            $scope.todo_date = null;
            persistTodos();
        };

        $scope.clearTodo = function(item){
            item.done = true;
            persistTodos();
        };

        $scope.clearCompleted = function(){
            $scope.todos = $scope.todos.filter((item)=>{
                return !item.done;
            })
        };   
        
        function persistTodos() {
            // persist
            localStorage.setItem('db', JSON.stringify($scope.todos));
            console.log("saved: " + JSON.stringify($scope.todos))
        }
    }])
