import { Request, Response } from "express";
import { LeadFacade } from "../facade/lead.facade"

export class LeadController {
  static create(req: Request, res: Response) {
    try {
      const lead = LeadFacade.create(req.body);
      return res.status(201).json(lead);
    } catch (error: any) {
      return res.status(400).json({ erro: error.message });
    }
  }

  static list(req: Request, res: Response) {
    return res.json(LeadFacade.list());
  }

  static getById(req: Request, res: Response) {
    const lead = LeadFacade.get(Number(req.params.id));
    if (!lead) {
      return res.status(404).json({ erro: "Lead not found" });
    }
    return res.json(lead);
  }

  static nextStage(req: Request, res: Response) {
    const result = LeadFacade.nextStage(Number(req.params.id));

    if (!result) {
      return res.status(404).json({ erro: "Lead não encontrada" });
    }
    if (typeof result === "string") {
      return res.status(400).json({ erro: result });
    }

    return res.json(result);
  }
}