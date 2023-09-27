import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  onButtonClick?: () => void;

  @Input() 
  customCard: string | undefined;

  @Input() 
  customButton: string | undefined;

  @Input() 
  customFooter: any[] | undefined;

  isOpen: boolean = false;


  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  handleButtonClick(onButtonClick:any) {
    this.onButtonClick = onButtonClick;
    if (this.onButtonClick) {
      this.onButtonClick();
    }

    this.closeModal();

  }
}
