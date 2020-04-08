import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SendMailService} from '../../services/send-mail.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contact-form-component',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private mailService: SendMailService) {
  }

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  sendMail() {
    console.log(this.contactForm.value);
    this.subscription = this.mailService.sendEmail(this.contactForm.value).subscribe(data => {
        let msg = data['message'];
        alert(msg);
        // console.log(data, "success");
      }, error => {
        console.log(error, 'error');
      }
    );
  }

}
