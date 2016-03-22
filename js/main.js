(function ($) {
    var data;

    $(document).ready(function () {

        $.ajax({
                url: 'tasks.json',
                cache: false,
                dataType: 'json'
            })
            .done(function (json) {

                data = json;

                $.each(json, function (index, element) {
                    if (element.status == 'new') {
                        var html = '<li class="task"><input type="checkbox" class="check" id="' + element.id + '">' + element.task + '</li>';
                        $('#list-of-tasks').append(html);
                    }
                    else {
                        var html = '<li class="task completed"><input type="checkbox" class="check"  id="' + element.id + '" checked="checked">' + element.task + '</li>';
                        $('#list-of-tasks').append(html);
                    }
                });

                completeTask();
            });


        $('#add-new-btn').click(function () {

            var value = $('#new-task').val();
            var spaces = /^\s+$/;
            if (value != '' || value != spaces.test(value)) {
                if (data == undefined) {
                    data = [];
                }
                ;

                jsonObj = {
                    id: data.length + 1,
                    task: value,
                    status: 'new'
                };

                data.push(jsonObj);

                jsonString = 'task=' + JSON.stringify(data);


                var html = '<li class="task"><input type="checkbox" class="check" id="' + jsonObj.id + '">' + value + '</li>';
            }

            $('#list-of-tasks').append(html);

            completeTask();

            rewriteJson();

        });

        $('#remove-btn').click(function () {
            data = [];
            console.log(data);
            jsonString = 'task=' + JSON.stringify(data);
            $('#list-of-tasks li').remove();
            rewriteJson();
        });

    });

    function rewriteJson() {
        $.ajax({
            type: "GET",
            url: "script.php",
            data: jsonString,
            dataType: "json"
        });
    }

    function completeTask() {
        $('.check').click(function () {
            if ($(this).is(':checked')) {
                $(this).parent('.task').addClass('completed');
                $(this).attr('checked', 'checked');
                var item;
                for (item in data) {

                    if ($(this).attr('id') == data[item].id) {

                        data[item].status = 'complete';
                        jsonString = 'task=' + JSON.stringify(data);
                        console.log(data[item].status);

                        rewriteJson();
                    }
                }

            } else {
                $(this).parent('.task').removeClass('completed');
                $(this).removeAttr('checked');
                var itemst;
                for (itemst in data) {

                    if ($(this).attr('id') == data[itemst].id) {
                        data[itemst].status = 'new';
                        jsonString = 'task=' + JSON.stringify(data);
                        console.log(data[itemst].status);

                        rewriteJson();

                    }
                }
            }
        });
    }
})(jQuery);