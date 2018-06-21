<?php

function fibonacci($n)
{
    if ($n < 3) {
        return 1; 
    }
    else {
        return fibonacci($n-1) + fibonacci($n-2);
    }
}

for ($n = 1; $n <= $_POST['a']; $n++) {
    echo(fibonacci($n) . ", ");
}

?>


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">

    <title>localhost</title>
  </head>
  <body>
   	<div class="container">
<!-- 	   	<div class="row">
	   		<div class="col-md-4"><h2>Кратно 2 </h2><?php print_r ($two);?> </div>
	   		<div class="col-md-4"><h2>Кратно 3 </h2><?php print_r ($three)?> </div>
	   		<div class="col-md-4"><h2>Кратно 5 </h2><?php print_r ($five);?> </div>
	   	</div> -->

	   		<form action="" method="POST">
		   		<input type="" name="a"/> <br>

		   		<button type="submit" /> Рассчитать </button>
	   		</form>

   	</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
  </body>
</html>
