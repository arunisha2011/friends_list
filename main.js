friend_name=[]
function submit() {
  var name1=document.getElementById("name_student_1").value
  var name2=document.getElementById("name_student_2").value
  var name3=document.getElementById("name_student_3").value
  var name4=document.getElementById("name_student_4").value
  friend_name.push(name1)
  friend_name.push(name2)
  friend_name.push(name3)
  friend_name.push(name4)
  console.log(friend_name)
  document.getElementById("display_name").innerHTML=friend_name
  document.getElementById("submit_button").style.display="none"
  document.getElementById("sort").style.display="inline-block"
}
function sorting() {
    friend_name.sort()
    document.getElementById("display_name").innerHTML=friend_name
}