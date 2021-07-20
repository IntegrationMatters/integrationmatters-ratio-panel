import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PanelProps } from '@grafana/data';
import React from 'react';
import './Ratio.scss';
import { AbsoluteNumbers } from './helper/absolute-numbers';
import { Changes } from './helper/changes';
import { DataInspector } from './helper/data-inspector';
import { Percentages } from './helper/percentages';
import { Styles } from './helper/styles';
import { RationOptions } from './types/ration-options';

export const Ratio: React.FC<PanelProps<RationOptions>> = ({ width, height, data, options }) => {
  const wrapperStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const status = options.status;

  const trendDirection = DataInspector.getTrendDirection(status);

  const total = AbsoluteNumbers.getTotal(data.series, 'total');
  const totalFiltered = AbsoluteNumbers.getTotal(data.series, 'total-filtered');
  const previous = AbsoluteNumbers.getTotal(data.series, 'previous');
  const previousFiltered = AbsoluteNumbers.getTotal(data.series, 'previous-filtered');

  const percentage = Percentages.getPercentage(total, totalFiltered);
  const percentagePrevious = Percentages.getPercentage(previous, previousFiltered);

  const change = Changes.getChange(percentagePrevious, percentage);
  const changeOperator = Changes.getChangeOperator(percentagePrevious, percentage);

  const wrapperClassNames = Styles.getWrapperClassNames('im-ratio', height);
  const changeClassNames = Styles.getChangeValueClassNames(changeOperator, trendDirection);
  const trendClassNames = Styles.getTrendClassNames(changeOperator, trendDirection);
  const mainIconClassNames = Styles.getMainIconClassNames(status);
  const trendIcon = Styles.getTrendIcon(changeOperator);
  const mainIcon = Styles.getMainIcon(status);

  return (
    <div style={wrapperStyle} className={wrapperClassNames}>
      <div className="main-text">
        <span className={mainIconClassNames}>
          <FontAwesomeIcon icon={mainIcon} />
        </span>

        <span className="percentage">{percentage} %</span>

        <span className={trendClassNames}>
          <FontAwesomeIcon icon={trendIcon} />
        </span>
      </div>

      <div className="range">
        <span className="value">
          {totalFiltered} / {total}
        </span>
      </div>

      <div className="comparison">
        <div className="compare-text">
          <span className="value">Previous</span>

          <span className="spacer" />

          <span className="value">Change</span>
        </div>

        <div className="compare-values">
          <span className="value">{percentagePrevious} %</span>

          <span className="spacer" />

          <span className={changeClassNames}>
            {changeOperator} {change} %
          </span>
        </div>
      </div>
    </div>
  );
};
