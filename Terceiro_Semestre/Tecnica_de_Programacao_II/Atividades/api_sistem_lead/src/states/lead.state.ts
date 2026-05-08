import { Lead } from "../models/lead.model";

export interface LeadState {
  next(lead: Lead): void;
}