import {DataQuery} from "@grafana/data";
import {ChartType} from "./chart-type";

export interface ExtendedDataQuery extends DataQuery {
  expr?: string;
  type?: ChartType;
}
