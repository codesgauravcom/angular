import { Directive,ElementRef,HostBinding,HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  @HostBinding('style.border') border:string;
  constructor(private  er:ElementRef,private titleService: Title) { 
    this.er.nativeElement.style.color='black';
    this.er.nativeElement.style.textAlign="center"
    this.er.nativeElement.style.backgroundColor='white';
     this.border="0px solid red";
    
  }

  @HostListener('mouseover') onHover()
  {
    this.er.nativeElement.style.color="green";
    this.border="2px solid green";

  }
  @HostListener('mouseout') onMouseOut()
  {
    this.er.nativeElement.style.color="blue";
    this.er.nativeElement.style.paddind="20px";
    this.border="2px dashed black";
  }

}