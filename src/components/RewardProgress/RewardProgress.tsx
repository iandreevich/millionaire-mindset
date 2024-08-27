import React from 'react';
import classNames from 'classnames';
import styles from './RewardProgress.module.scss';

interface IRewardProgressProps {
  rewards: number[]
  activeQuestionIndex: number
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const RewardProgress = ({ rewards, activeQuestionIndex }: IRewardProgressProps) => (
  <div className={styles.rewardProgress}>
    <div className={styles.progress}>
      {rewards.map((reward, index) => (
        <div
          key={reward}
          className={classNames(styles.rewardWrapper, {
            [styles.active]: index === activeQuestionIndex,
            [styles.completed]: index < activeQuestionIndex,
          })}
        >
          <div className={styles.rewardMask} />
          <p className={styles.amount}>
            {formatCurrency(reward)}
          </p>
        </div>
      ))}
    </div>
  </div>

);

export default RewardProgress;
