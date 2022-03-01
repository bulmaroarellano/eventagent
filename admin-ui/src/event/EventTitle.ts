import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "categoriId";

export const EventTitle = (record: TEvent): string => {
  return record.categoriId || record.id;
};
