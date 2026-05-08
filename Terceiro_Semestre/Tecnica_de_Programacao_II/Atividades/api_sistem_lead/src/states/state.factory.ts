import { LeadState } from "./lead.state";
import { InitialContact } from "./initialContact";
import { SentProposal } from "./sentProposal";
import { AwaitingResponse } from "./awaitingResponse";
import { AwaitingPayment } from "./awaitingPayment";
import { FinishedWithoutSale } from "./finishedWoutSale";

export class StateFactory {
  static get(stage: string): LeadState {
    const states: { [key: string]: LeadState } = {
      "Contato inicial": new InitialContact(),
      "Enviar proposta": new SentProposal(),
      "Aguardando resposta": new AwaitingResponse(),
      "Aguardando pagamento": new AwaitingPayment(),
      "Finalizado sem venda": new FinishedWithoutSale(),
    };

    return states[stage] || new InitialContact();
  }
}