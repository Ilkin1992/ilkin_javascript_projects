    <!-- //Importing header and Water.css -->
    <?php require './partials/header.php' ?>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">


    <body style="background: linear-gradient(to right, #abbaab, #ffffff); /* W3C, IE 10+/ Edge, 
     Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */">

        <h1>Upload your image to the gallery</h1>

        <!-- Sending selected image to processing -->
        <form action="./process_controller.php" method="POST" enctype="multipart/form-data">
            <label for="image">Image file</label>
            <input type="file" id="image" name="image">
            <button style="font-weight: bold;" type="submit">Upload</button>
        </form>
    </body>

    </html>