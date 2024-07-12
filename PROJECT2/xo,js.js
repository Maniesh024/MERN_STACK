var val ="X";
function cal(obj)
{
  if(obj.innerHTML == "")
  {
    if(val == "X")
      {
        obj.innerHTML="X";
        check(obj)
        val ="O";
      }
      else
      {
        obj.innerHTML="O";
        check(obj)
        val ="X";
      }
  }
}

function check(obj)
{
  var key = obj.innerHTML;

  var key1 = document.getElementById("con1").innerHTML;
  var key2 = document.getElementById("con2").innerHTML;
  var key3 = document.getElementById("con3").innerHTML;
  var key4 = document.getElementById("con4").innerHTML;
  var key5 = document.getElementById("con5").innerHTML;
  var key6 = document.getElementById("con6").innerHTML;
  var key7 = document.getElementById("con7").innerHTML;
  var key8 = document.getElementById("con8").innerHTML;
  var key9 = document.getElementById("con9").innerHTML;

  if((key==key1) && ((key1==key2)&&(key1==key3) || (key1==key5)&&(key1==key9) || (key1==key4)&&(key1==key7)))
  {
    alert(`Player ${key} wins`)
    resetbutton();
  }
  else if((key==key2)&&((key2==key1)&&(key2==key3)||(key2==key5)&&(key2==key8)))
  {
    alert(`Player ${key} wins`)
    resetbutton();
  }

  else if((key==key3)&&((key3==key1)&&(key3==key2)||(key3==key6)&&(key3==key9)||(key3==key5)&&(key3==key7)))
  {
    alert(`Player ${key} wins`)
    resetbutton();
  }
  else if((key==key4)&&((key4==key1)&&(key4==key7)||(key4==key5)&&(key4==key6)))
  {
    alert(`Player ${key} wins`)
    resetbutton();
  }
  else if((key==key5)&&((key5==key1)&&(key5==key9)||(key5==key3)&&(key5==key7) ||(key5==key4)&&(key5==key6) ||(key5==key2)&&(key5==key8)))
  {
    alert(`Player ${key} wins`)
    resetbutton();
  }
  else if((key==key6)&&((key6==key3)&&(key6==key9)||(key6==key5)&&(key6==key4)))
  {
    alert(`Player ${key} wins`)
    resetbutton();
  }
  else if((key==key7)&&((key7==key4)&&(key7==key1)||(key7==key8)&&(key7==key9)||(key7==key5)&&(key7==key3)))
  {
    alert(`Player ${key} wins`)
    resetbutton();
  }
  else if((key==key8)&&((key8==key5)&&(key8==key2)||(key8==key7)&&(key8==key9)))
 {
    alert(`Player ${key} wins`)
    resetbutton();
  }
  else if((key==key9)&&((key9==key8)&&(key9==key7)||(key9==key5)&&(key9==key1)||(key9==key6)&&(key9==key3)))
  {
   alert(`Player ${key} wins`)
   resetbutton();
  }
}

function resetbutton()
{
  for(let i =1 ;i<10;i++)
  {
    document.getElementById(`con${i}`).innerHTML="";
  }
}