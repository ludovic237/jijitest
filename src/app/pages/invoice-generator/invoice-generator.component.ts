import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-invoice-generator',
  imports: [],
  templateUrl: './invoice-generator.component.html',
  styleUrl: './invoice-generator.component.css'
})
export class InvoiceGeneratorComponent {
  invoiceForm: FormGroup;
  invoiceTypes = ['eau', 'électricité', 'gaz', 'internet', 'parking', 'autre'];
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.invoiceForm = this.fb.group({
      tenantId: ['', Validators.required],
      type: ['', Validators.required],
      label: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(100)]],
      dueDate: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.invoiceForm.valid) {
      const newInvoice = this.invoiceForm.value;
      console.log("Facture générée :", newInvoice);
      // Ici, tu peux envoyer la facture à un backend via un service HTTP
      // ex: this.invoiceService.createInvoice(newInvoice).subscribe(...)
      alert("Facture enregistrée !");
      this.invoiceForm.reset();
      this.submitted = false;
    }
  }
}
