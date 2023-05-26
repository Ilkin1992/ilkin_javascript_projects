<!-- //Importing header and bootstrap -->
<?php require './partials/header.php' ?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />


<body style="background: linear-gradient(to right, #abbaab, #ffffff); /* W3C, IE 10+/ Edge, Firefox 16+, 
Chrome 26+, Opera 12+, Safari 7+ */">

    <div style="margin-top: -20rem" class="container">

        <!-- Image gallery -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-1">
            <!-- Looping through uploads folder content and displaying images. I use bootstrap for styling -->
            <?php require './view_controller.php' ?>
        </div>
        <!-- Image gallery -->

    </div>
    <!-- Button to return to the uploads page -->
    <a href="./index.php" class="btn btn-dark">Back to the upload page</a>

    <!-- Showing current date and time. Do not know why it may be needed, though -->
    <?php include "./date_time.php" ?>
</body>

</html>