const github= new GitHub()
const interface = new Interface()

//Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  if(userText !==''){
    //Make http call
    github.getUser(userText).then(data=>{
      if(data.profile.message==='Not Found'){
        interface.showAlert('User not found','alert alert-danger');
        
        
      }else{
        //show the profile
        interface.displayProfile(data.profile);   
        interface.showRepositories(data.repositories);
        
      }
    })
    
  } else{
    //clear profile
    interface.clearProfile();
  }
  
})