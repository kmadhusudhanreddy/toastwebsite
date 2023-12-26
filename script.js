


let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-square-check"></i>  Successfully submitted';
let errorMsg =   '<i class="fa-solid fa-circle-xmark"></i>please fix the error';
let invalidMsg = '<i class="fa-solid fa-exclamation"></i>invalid input  check again';


function showToast(msg){
   let toast =  document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = msg;
   toastBox.appendChild(toast);
   if(msg.includes('error')){
    toast.classList.add('error');
   }
   if(msg.includes('invalid')){
    toast.classList.add('invalid');
   }

   setTimeout(() => {
    toast.remove();
   },6000)
}