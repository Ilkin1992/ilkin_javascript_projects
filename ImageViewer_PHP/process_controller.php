<pre>
<?php

//Implement the delete functionality 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_file'])) {

    $filename = $_POST['delete_file'];
    $filepath = __DIR__ . "/uploads/" . $filename;

    if (file_exists($filepath)) {
        unlink($filepath);
        sleep(1);
        header('Location: delete_confirm.php');
        die();
    } else {
        print('File does not exist');
    }
}

//Prevent accessing this page bypassing the file upload process
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit("POST method required");
}

//Check if no file was uploaded or there was an error in the process
if ($_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    switch ($_FILES['image']['error']) {
        case UPLOAD_ERR_NO_FILE:
            die('No file was uploaded!');
            break;
        case UPLOAD_ERR_INI_SIZE:
            die('File exceeds upload_max_filesize in php.ini');
            break;
        case UPLOAD_ERR_PARTIAL:
            die('File only partially uploaded');
            break;
        default:
            die('Unknown upload error');
            break;
    }
}

//Check if file size exceeds allowed limit 
if ($_FILES['image']['size'] > 1048576) {
    die('File is too big! (max 1MB)');
}

//Check type of the file (only images allowed)
$mime_types = ["image/gif", "image/png", "image/jpeg"];

if (!in_array($_FILES['image']['type'], $mime_types)) {
    die('Invalid file type');
}

//Move uploaded files to a selected folder
$filename = $_FILES['image']['name'];
$destination = __DIR__ . "/uploads/" . $filename;

if (!move_uploaded_file($_FILES["image"]["tmp_name"], $destination)) {
    die("Cannot move uploaded files");
}

print('File uploaded succesfully');

include "./view.php";

?>
</pre>