import { Lead } from "../models/lead.model";

let id = 1;

export class LeadFactory {
  static create(data: any): Lead {
    const validOrigins = [
      "Visita presencial",
      "telefone",
      "WhatsApp",
      "Instagram"
    ];

    if (!validOrigins.includes(data.origin)) {
      throw new Error("Invalid origin");
    }

    return new Lead(
      id++,
      data.name,
      data.telephone,
      data.origin,
      data.vehicle,
      "Aberto",
      "Contato inicial"
    );
  }
}