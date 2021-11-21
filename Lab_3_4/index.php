<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>
</head>
<body>
</html>
<form id="formElem" method="post">

  <style>
    form{
      font-family:arial;
      padding:20px;
      border-width:1px;
      background-color:#FFFFFF;
      color:#E5E5E5;
      -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
    body{
      display: flex;
      justify-content: center;
      margin: 20vh;
      

    }
    input{
      display:block;
      margin: 5px 0 10px 0;
      border: none;
      box-shadow: 0 -2px 2px -2px rgba(0,0,0,0.2) inset;
      /* -webkit-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
      -moz-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
      box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset; */


    #image{
      
    }
    }


  </style>
  <label for="gender">GENDER</label>
  <input type="text" name="gender" value="" id="gender">
  <label for="surname">SURNAME</label>
  <input type="text" name="surname" value="" id="surname">
  <label for="name">NAME</label>
  <input type="text" name="name" value="" id="name">
  <label for="email">EMAIL</label>
  <input type="text" name="email" value="" id="email">
  <label for="birthday">BIRTHDAY</label>
  <input type="text" name="birthday" value="" id="birthday">
  <label for="age">AGE</label>
  <input type="text" name="age" value="" id="age">
  <label for="number">NUMBER</label>
  <input type="password" name="number" value="" id="number">
  <label for="image">IMAGE</label>
  <input type="file" name="image" value="" id="image">
  <input type="submit" id="sub">
</form>
<script src="script.js"></script>
</body>




