let choice=parseInt(prompt("Enter your choice"));
var a =parseInt(prompt("Enter first number"));
var b= parseInt(prompt("Enter second number"));
switch(choice){
 case 1 : 
    document.write(a+b);
     break;
 case 2 :
    document.write(a-b);
    break;
case 3 :
    document.write(a*b);
        break;
case 4 :
    document.write(a/b);
            break;
default :
document.write("Invalid choice");
     
}
