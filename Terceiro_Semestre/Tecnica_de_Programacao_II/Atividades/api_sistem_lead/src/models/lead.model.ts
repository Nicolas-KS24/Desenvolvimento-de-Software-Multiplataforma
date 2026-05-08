export type Status =
  | "Aberto"
  | "Em negociação"
  | "Finalizado com venda"
  | "Finalizado sem venda";

export type Stage =
  | "Contato inicial"
  | "Enviar proposta"
  | "Aguardando resposta"
  | "Aguardando pagamento"
  | "Finalizado sem venda"
  | "Finalizado com venda";

export class Lead {
  constructor(
    public id: number,
    public name: string,
    public telephone: string,
    public origin: string,
    public vehicle: string,
    public status: Status,
    public stage: Stage
  ) {}
}