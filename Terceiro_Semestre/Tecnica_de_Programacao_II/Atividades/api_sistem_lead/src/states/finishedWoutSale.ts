import { Lead } from "../models/lead.model";
import { LeadState } from "./lead.state";

export class FinishedWithoutSale implements LeadState {
  next(lead: Lead): void {
    lead.status = "Finalizado sem venda"; 
    lead.stage = "Finalizado sem venda";

    throw new Error("Operação negada: Esta negociação já foi finalizada sem venda e não pode mais evoluir.");
  }
}