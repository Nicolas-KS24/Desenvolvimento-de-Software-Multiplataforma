import { Lead } from "../models/lead.model";
import { LeadState } from "./lead.state";

export class InitialContact implements LeadState {
  next(lead: Lead) {
    lead.stage = "Enviar proposta";
    lead.status = "Em negociação";
  }
}