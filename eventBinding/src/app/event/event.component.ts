import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-event',
  imports: [FormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {

  // for event binding you need to create a method ,use this method in html file
  greetings(){
    console.log('Good Afternoon Vineeth')
  }

  public invite=''
  invitation(){
    this.invite='You are invited Mr.Vineeth'
  }
// used to get all the information about the eventhandler we are using.
  specialVariable(event : Event){
    console.log(event)
  }
// without seperate method
public sub=''


                  // TEMPLATE REFERENCE VARIABLES
  // syntax :-methodname(value : any){statements...}
  public message=''
  logmessages(value : any){
    this.message=value
  }

  public userName='';
  public PassWord='';

}
