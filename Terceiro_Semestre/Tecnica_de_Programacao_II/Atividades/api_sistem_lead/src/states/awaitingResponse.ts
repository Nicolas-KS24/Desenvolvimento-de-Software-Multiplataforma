import { Lead } from "../models/lead.model";
import { LeadState } from "./lead.state";

export class AwaitingResponse implements LeadState {
  next(lead: Lead): void {
    const clientAccepted = true;

    if (clientAccepted) {
      lead.stage = "Aguardando pagamento"; 
      lead.status = "Em negociação";
    } else {
      lead.stage = "Finalizado sem venda";
      lead.status = "Finalizado sem venda";
    }
  }
}