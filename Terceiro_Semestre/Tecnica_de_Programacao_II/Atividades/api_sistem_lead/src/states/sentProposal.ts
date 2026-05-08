import { Lead } from "../models/lead.model";
import { LeadState } from "./lead.state";

export class SentProposal implements LeadState {
  next(lead: Lead) {
    lead.stage = "Aguardando resposta";
    lead.status = "Em negociação";
  }
}