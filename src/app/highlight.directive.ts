import { Directive ,HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
@HostListener('mouseenter') mouseover()
{
  this.backgroundColor =this.dirHighlightColor;
};
@HostListener('mouseleave') mouseleave()
{
  this.backgroundColor =this.defaultColor;
};
@HostBinding('style.backgroundColor') get setColor()
{
  return this.backgroundColor;
}
@Input() defaultColor='white';
@Input('dirHighlight') dirHighlightColor='green';
private backgroundColor :string;
  constructor() {
    //this.elementRef.nativeElement.style.backgroundColor="green";
   }
   ngOnInit()
   {
    this.backgroundColor= this.defaultColor;
   }

}
