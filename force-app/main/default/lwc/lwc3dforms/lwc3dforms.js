import { LightningElement } from 'lwc';

export default class Lwc3dforms extends LightningElement {

    signin(){
        const formsWrapper = this.template.querySelector('.forms-wrapper');
               this.template.querySelector('.signup-btn').addEventListener('click',(event) =>{
         event.preventDefault();
         formsWrapper.classList.add("change");
    });
    }
    signup(){
        const formsWrapper = this.template.querySelector('.forms-wrapper');
     
        this.template.querySelector('.signin-btn').addEventListener('click',(event) =>{
             event.preventDefault();
             formsWrapper.classList.add("change");
        });
 
    }
 

renderedCallback() {
    const formsWrapper = this.template.querySelector('.forms-wrapper');
     
      this.template.querySelector('.signup-btn').addEventListener('click',(e) =>{
           e.preventDefault();
           formsWrapper.classList.add("change");
      });
//       this.template.querySelector('.signin-btn').addEventListener('click',(e) =>{
//        e.preventDefault();
//        formsWrapper.classList.add("change");
//   });
      
  
}
    }
       