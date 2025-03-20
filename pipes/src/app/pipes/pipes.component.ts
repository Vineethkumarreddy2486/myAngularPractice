import { CommonModule, UpperCasePipe} from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';
import { MyCustomPipePipe } from '../my-custom-pipe.pipe';


@Component({
  selector: 'app-pipes',
  standalone:true,
  imports: [CommonModule,FormsModule,MyCustomPipePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  public name='vineeth';
  public currentDate=new Date();
  public personDetails={
    'name':'vineeth',
    'age' : 22,
    'gender':'male',
    'appearance':{
      'color':'white',
      'weight':'75kg',
      'height':"5.9ft"
    }
  }
  public num1=7.083
  public num2=0.23
  // public studentMarks=Number()
  public studentMarks=48
  public totalmarks=470

}
