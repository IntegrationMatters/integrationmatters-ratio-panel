import { DataQuery, DataQueryRequest } from '@grafana/data';
import { ExtendedDataQuery } from '../types/extended-data-query';
import { RefId } from '../types/ref-id';
import { TrendDirection } from '../types/trend-direction';

export class DataInspector {
  static getTarget(refId: RefId, request?: DataQueryRequest): ExtendedDataQuery | undefined {
    return request?.targets.find((target) => this.findByRefId(target, refId));
  }

  static getStatus(target?: ExtendedDataQuery) {
    let status: string | undefined;

    if (target && target.expr) {
      const statusMatches = target.expr.match(/(status=")(\w*)(")/);
      if (statusMatches && typeof statusMatches[2] === 'string') {
        status = statusMatches[2].toLowerCase();
      }
    }

    return status;
  }

  static getTrendDirection(status?: string): TrendDirection {
    if (!status || status === 'success') {
      return 'positive';
    }

    return 'negative';
  }

  private static findByRefId(target: DataQuery, refId: RefId) {
    return target.refId.toLowerCase() === refId;
  }
}
