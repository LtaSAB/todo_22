<?php

$new_file = fopen("tasks.json","w");
fwrite($new_file, $_GET['task']);
fclose($new_file);