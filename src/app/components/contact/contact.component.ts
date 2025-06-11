import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: ['', [Validators.pattern('^[0-9+ ]*$')]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isLoading = true;
    
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', this.contactForm.value);
    
    // Simulamos un envío con timeout
    setTimeout(() => {
      this.isLoading = false;
      // Puedes resetear el formulario aquí si lo deseas
      // this.contactForm.reset();
      // this.submitted = false;
    }, 2000);
  }

  get f() {
    return this.contactForm.controls;
  }


}
