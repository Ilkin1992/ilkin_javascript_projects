<?php

$scan = scandir('uploads');

foreach ($scan as $file) {

    if ($file === "." || $file === '..') {
        continue;
    }

    echo
    '<div class="col">
        <div style=height:300px class="card">
            <img style="width: 100%; height: 100%; object-fit: cover;" 
                 src="uploads/' . $file . '" 
                 class="card-img-top img-fluid" 
                 alt="' . $file . '">
        <form method="POST"> 
            <input type="hidden" name="delete_file" value="' . $file . '"> </input>
            <button name="submit_button" type="submit" class="btn btn-primary">Delete</button>
        </form>
        </div>
    </div>';
}
