 const formEL = document.forms.countryForm;
 const submitBtn = document.querySelector(".submit")
 const country = formEL.country;

 country.addEventListener("change", getCountry);

const option = new Option("Thailan", "TBH");
country.add(option, 2)
country.remove("Thailand")

 function getCountry(event){
 
   console.log(country.value)
 }