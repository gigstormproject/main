<h2>Save Contacts</h2>
<form id="saveContacts" method="post" action="saveFile.php">  
  Name: <input type="text" id="name" name="name" required>
  <br><br>
  E-mail: <input type="email" id="email" name="email" required>
  <br><br>
  Website: <input type="url" id="website" name="website" required>
  <br><br>
  Comment: <textarea id="comment" rows="5" cols="40" name="comment"></textarea>
  <br><br>
  Gender:
  <input type="radio" name="gender" id="gender" value="female">Female
  <input type="radio" name="gender"  id="gender" value="male">Male
  <input type="radio" name="gender"  id = "gender" value="other">Other  
	<br><br>
  <input type="submit" id="saveData" value="Save Contacts">
</form>
