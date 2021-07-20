import { PanelPlugin } from '@grafana/data';
import { Ratio } from './Ratio';
import { RationOptions } from './types/ration-options';

export const plugin = new PanelPlugin<RationOptions>(Ratio).setPanelOptions((builder) => {
  return builder.addSelect({
    path: 'status',
    name: 'Status',
    category: ['Ratio configuration'],
    defaultValue: 'success',
    settings: {
      options: [
        {
          value: 'success',
          label: 'Success',
        },
        {
          value: 'warning',
          label: 'Warning',
        },
        {
          value: 'error',
          label: 'Error',
        },
        {
          value: 'timeout',
          label: 'Timeout',
        },
      ],
    },
  });
});
