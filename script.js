const monthv=document.getElementById("month");
const day=document.getElementById("day")
const date=document.getElementById("date")
const year=document.getElementById("year")
const currdate=new Date()

const montharr=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const daysarr=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
monthv.innerText=montharr[currdate.getMonth()]
day.innerHTML=daysarr[currdate.getDay()]
date.innerHTML=currdate.getDate()
year.innerText=currdate.getFullYear()