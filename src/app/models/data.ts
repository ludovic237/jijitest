// invoices/models/invoice.model.ts
export interface Invoice {
  id: number;
  tenantId: number;
  type: 'electricity' | 'water' | 'gas' | 'internet' | 'parking' | 'other';
  label: string;
  amount: number;
  dueDate: Date;
  paid: boolean;
}

// incidents/models/incident.model.ts
export interface Incident {
  id: number;
  tenantId: number;
  description: string;
  dateReported: Date;
  status: 'open' | 'in_progress' | 'closed';
  resolutionDate?: Date;
}

// rents/models/rent-payment.model.ts
export interface RentPayment {
  id: number;
  tenantId: number;
  month: string; // ex: "2025-04"
  amountPaid: number;
  dueDate: Date;
  paidDate?: Date;
  isPaid: boolean;
}

// tenants/models/tenant.model.ts
export interface Tenant {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  entryDate: Date;
  exitDate?: Date;
  rentAmount: number;
  depositPaid: boolean;
  apartmentNumber: string;
}
