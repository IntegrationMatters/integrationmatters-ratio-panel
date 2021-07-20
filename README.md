# Ratio Panel

![img.png](https://github.com/IntegrationMatters/integrationmatters-ratio-panel/blob/master/ratio-template.png?raw=true)

The Ratio panel displays the trend of a current set of values compared to a set of values right before, with the same time range. \
When the current time range is for example from `now-5m` to `now`, the previous time range
(the one to compare with) should be `now-10m` to `now-5m`. To achieve this easily, use
the `${__range}` variable for current and `offset ${__range}` for previous values as seen
in the table below.

## Required queries and query names

Query name | query
--- | ---
**total** | increase(application_flows_state_total{status="completed"}[${__range}])
**total-filtered** | increase(application_flows_state_total{status="success"}[${__range}])
**previous** | increase(application_flows_state_total{status="completed"}[${__range}] offset ${__range})
**previous-filtered** | increase(application_flows_state_total{status="success"}[${__range}] offset ${__range})

**The query names are mandatory.**
