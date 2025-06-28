import React, { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';

import { QuestionsAndOptions } from '../../../components';
import { CardData } from './PerformanceReport.data';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { CardDetail } from './PerformanceReport.types';
import { sendBehavioralNudge } from '../../../redux/slices/auth/features';
import useToast from '../../../utils/helpers/general/useToast';
import { ERROR_OCCURED_MESSAGE } from '../../../utils/constant';

import styles from './PerformanceReport.module.scss';

const PerformanceReport = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { questionsData } = useAppSelector((state) => state.questions);
  const { user } = useAppSelector((state) => state.auth);
  const hasRun = useRef(false);

  const handleSendBehavioralNudge = async (
    score: string | number,
    dispatch: ReturnType<typeof useAppDispatch>
  ) => {
    const actionResult = await dispatch(sendBehavioralNudge(score));
    if (sendBehavioralNudge.fulfilled.match(actionResult)) {
      const { status, message } = actionResult.payload;
      if (status && status === 200) {
        // toast.success(message);
      }
    } else if (sendBehavioralNudge.rejected.match(actionResult)) {
      const errorMessage = actionResult.error?.message || ERROR_OCCURED_MESSAGE;
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (questionsData?.percentage && !hasRun.current) {
      hasRun.current = true;
      handleSendBehavioralNudge(questionsData?.percentage, dispatch);
    }
  }, [questionsData?.percentage]);

  const cardsDetails: CardDetail[] = CardData(questionsData, user);

  const reportWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reportWrapperRef.current) {
      reportWrapperRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const [isClient, setIsClient] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsClient(true);

    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
  }, []);

  return (
    <div ref={reportWrapperRef}>
      <div ref={containerRef} className={styles.performanceReportWrapper}>
        {isClient && Number(questionsData?.percentage) >= 80 && (
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            numberOfPieces={200}
            recycle={true}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        )}
        <h4 className={styles.performanceReportWrapper__title}>Performance Report</h4>
        <div className={styles.performanceReportWrapper__cardsWrapper}>
          {cardsDetails?.map((data) => (
            <div key={data?.id} className={styles.performanceReportWrapper__card}>
              <h6 className={styles.performanceReportWrapper__headText}>{data?.headText}</h6>
              <p className={styles.performanceReportWrapper__subText}>{data?.subText}</p>
            </div>
          ))}
        </div>
        <div className={styles.performanceReportWrapper__correctionsWrapper}>
          <h4 className={styles.performanceReportWrapper__correctionsTitle}>Correction(s)</h4>
          <div className={styles.performanceReportWrapper__dottedLines}></div>
        </div>
        <div className={styles.performanceReportWrapper__questionsContainer}>
          <QuestionsAndOptions questionData={questionsData} overrideSelect showCorrections />
        </div>
      </div>
    </div>
  );
};

export default PerformanceReport;
