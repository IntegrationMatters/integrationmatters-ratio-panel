import { PanelPlugin } from '@grafana/data';
import { Ratio } from './Ratio';

export const plugin = new PanelPlugin<any>(Ratio).setPanelOptions((builder) => {
  return builder;
});
