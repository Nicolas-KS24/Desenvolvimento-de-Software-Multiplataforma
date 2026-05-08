import { Lead } from "../models/lead.model";
import { LeadState } from "./lead.state";

export class AwaitingPayment implements LeadState {
  next(lead: Lead) {
    lead.status = "Finalizado com venda";
  }
}