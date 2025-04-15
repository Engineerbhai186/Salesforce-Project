import { LightningElement } from 'lwc';
import logo from '@salesforce/resourceUrl/lnct_logo';

export default class MainPageCompo extends LightningElement {
    img=logo;
    reset(){
     this.template.querySelector('lightning-input[data-formfield="companyName"]').value=null;
     this.template.querySelector('lightning-input[data-formfield="location"]').value=null;
     this.template.querySelector('lightning-input[data-formfield="jobProfile"]').value=null;
     this.template.querySelector('lightning-input[data-formfield="desc"]').value=null;
     this.template.querySelector('lightning-input[data-formfield="date"]').value=null;
     this.template.querySelector('lightning-input[data-formfield="lastdate"]').value=null;
     this.template.querySelector('lightning-input[data-formfield="url"]').value=null;
     this.template.querySelector('lightning-input[data-formfield="image"]').value=null;

    }
    showDrives=false;
    showcreatedrive=false;
    showposts=false;
    showcreatepost=false;
    showDashboard=false;
    dashboard(){
this.showDashboard=true;
this.showDrives=false;
  this.showcreatedrive=false;
  this.showposts=false;
  this.showcreatepost=false;
    }
    drives(){
  this.showDrives=true;
  this.showcreatedrive=false;
  this.showposts=false;
  this.showcreatepost=false;
  this.showDashboard=false;
    }
    createDrive(){
        this.showcreatedrive=true;
        this.showDrives=false;
        this.showposts=false;
        this.showcreatepost=false;
        this.showDashboard=false;
    }
    posts(){
        this.showposts=true;
        this.showDrives=false;
        this.showcreatedrive=false;
        this.showcreatepost=false;
        this.showDashboard=false;
    }
    createPost(){
        this.showcreatepost=true;
        this.showDrives=false;
        this.showcreatedrive=false;
        this.showposts=false;
        this.showDashboard=false;
    }
}