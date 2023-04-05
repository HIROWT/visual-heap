import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HeapService } from '../heap-service.service';
import { LLnode } from '../heap-service.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  rawNode:any;
  cond:boolean = true;
  nn:number;
  
  checkoutForm = this.formBuilder.group({
    nodeValue: 6,
  });

  constructor(private service:HeapService, private formBuilder: FormBuilder,){
    
  }
  
  onSubmit(): void {
    this.nn =this.checkoutForm.value.nodeValue!;
    this.service.insert(this.nn).subscribe();
    this.cond = false;
    this.ngOnInit();
    console.warn('Element inserted!', this.checkoutForm.value.nodeValue);
    this.checkoutForm.reset();
    
  }
  
  
  ngOnInit(){
    console.log("on init!")
    this.service.getRoot().subscribe(data=> {this.rawNode=data; console.log(data)});
    this.cond = true;
  }   


}







