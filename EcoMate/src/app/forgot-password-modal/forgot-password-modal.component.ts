import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss'],
})
export class ForgotPasswordModalComponent {
  newPassword!: string;
  confirmPassword!: string;

  constructor(private modalController: ModalController) {}

  resetPassword() {
    // Perform validation and logic for resetting password
    if (this.newPassword === this.confirmPassword) {
      // Update the password in the storage or API
      // ...

      // Close the modal and pass the updated password back to the LoginComponent
      this.modalController.dismiss({
        newPassword: this.newPassword
      });
    } else {
      console.log('Passwords do not match');
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
