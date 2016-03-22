<!DOCTYPE html>
<html lang="ru">
<head>
    <title>To do List</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          crossorigin="anonymous">
    <link rel="stylesheet" href="./css/main.css">
    <script src="./js/jquery-1.12.0.min.js"></script>
    <script src="./js/main.js"></script>
</head>
<body>
<div class="container-fluid">
    <form action="">
        <input type="text" id="new-task" placeholder="Напишите задание">
        <a href="#" id="add-new-btn" class="fa fa-check-circle">Добавить</a>
        <a href="#" id="remove-btn" class="fa fa-times">Удалить</a>
    </form>
    <ul id="list-of-tasks">

    </ul>
</div>
</body>
</html>