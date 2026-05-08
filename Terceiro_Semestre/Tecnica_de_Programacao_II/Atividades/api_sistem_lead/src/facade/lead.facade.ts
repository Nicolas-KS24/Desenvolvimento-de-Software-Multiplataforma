import { leads } from "../data";
import { LeadFactory } from "../factory/lead.factory";
import { StateFactory } from "../states/state.factory";
import { LeadObserver } from "../observer/lead.observer";

const observer = new LeadObserver();

export class LeadFacade {
  static create(data: any) {
    const lead = LeadFactory.create(data);
    leads.push(lead);
    return lead;
  }

  static list() {
    return leads;
  }

  static get(id: number) {
    return leads.find(l => l.id === id);
  }

  static nextStage(id: number) {
    const lead = leads.find((l: any) => l.id === id);
    if (!lead) return null;

    try {
      const state = StateFactory.get(lead.stage);
      state.next(lead);
      observer.update(lead);

      return lead;
    } catch (error: any) {
      return error.message;
    }
  }
}