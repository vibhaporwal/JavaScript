let password;
let userName=prompt("Login please");
if(userName=="Admin")
{
    password=prompt("password please");
    if(password=="TheMaster")
    {
        alert("Welcome");
    }
    if(password==""||password==null||password==undefined)
    {
        alert("Cancelled");
    }
    else(password=="TheMaster")
    {
        alert("wrong");
    }
}
else if(userName==null||userName==""||userName==undefined)
{
    alert("Canceled");
}
else{
    alert("don't know");
}