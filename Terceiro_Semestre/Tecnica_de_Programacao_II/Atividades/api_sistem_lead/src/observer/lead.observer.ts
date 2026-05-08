export class LeadObserver {
  update(lead: any) {
    console.log(`Lead ${lead.id} changed to stage: ${lead.stage}`);
  }
}