export const myName = "Nann Sham Kham";
export const showMyNane = (newName = myName)=>console.log(newName);
export const showMyNaneUi = (newName = myName,top=0,right=0)=>{
  const div = document.createElement('div');
  div.innerHTML = `<h1>My Name is ${newName}</h1>`
  div.style.color = "white"
  div.style.backgroundColor="black"
  
  
}
