import React, { useEffect, useRef, useState } from 'react';
import styles from './diagnosis.module.scss';
import { StyledButton } from '../../../components';
import useToast from '../../../utils/helpers/general/useToast';
import { askDiagnosis, getDiagnosisHistory } from '../../../redux/slices/diagnosis/features';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const DiagnosisChat = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { history, loading } = useAppSelector((state) => state.diagnosisSlice);

  // Track previous length to detect new messages
  const lastHistoryLength = useRef(0);

  // Typing effect state
  const [typed, setTyped] = useState('');
  const [isTypingEffect, setIsTypingEffect] = useState(false);

  // On mount, load chat history
  useEffect(() => {
    dispatch(getDiagnosisHistory());
  }, [dispatch]);

  useEffect(() => {
    // Keep ref always correct at the end
    let shouldUpdateRef = true;

    // Case 1: History reload (first mount or reload)
    if (history.length === 0 || history.length < lastHistoryLength.current) {
      setTyped('');
      setIsTypingEffect(false);
      lastHistoryLength.current = history.length;
      shouldUpdateRef = false;
      return;
    }

    // Case 2: New assistant message added
    if (
      history.length > lastHistoryLength.current &&
      history[history.length - 1].role === 'assistant'
    ) {
      const lastMsg = history[history.length - 1].content ?? '';
      setTyped('');
      setIsTypingEffect(true);
      let i = 0;
      const interval = setInterval(() => {
        setTyped((prev) => prev + lastMsg[i]);
        i++;
        if (i >= lastMsg.length) {
          clearInterval(interval);
          setIsTypingEffect(false);
        }
      }, 18);
      // Always update ref at the end of effect
      return () => {
        clearInterval(interval);
        if (shouldUpdateRef) lastHistoryLength.current = history.length;
      };
    } else {
      setTyped('');
      setIsTypingEffect(false);
    }

    // Always update at the end (for non-returning paths)
    if (shouldUpdateRef) lastHistoryLength.current = history.length;
  }, [history]);

  // Always scroll to bottom on new message or typing
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [history, typed, isTypingEffect]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error('Please describe your symptoms.');
      return;
    }
    const action = await dispatch(askDiagnosis(input));
    if (askDiagnosis.rejected.match(action)) {
      toast.error(action.error?.message || 'Failed to get diagnosis. Please try again.');
      return;
    }
    setInput('');
  };

  return (
    <>
      {/* Info banner at the top */}
      <div className={styles.DiagnosisInfoBanner}>
        <div className={styles.DiagnosisInfoIcon}>🩺</div>
        <div>
          <strong>AI Clinical Support Tool</strong>
          <span>
            This assistant provides evidence-based suggestions for symptom analysis and clinical
            triage. Use it to rapidly review differential diagnoses, red flags, and management
            recommendations for presented cases.
            <br />
            <span style={{ color: '#ca5400', fontWeight: 500 }}>
              <strong>Note:</strong> All responses are for preliminary reference only—clinical
              judgment and direct patient assessment remain essential.
            </span>
          </span>
        </div>
      </div>

      {/* Main chat card */}
      <div className={styles.DiagnosisChatWrapper}>
        <div className={styles.DiagnosisChatHeader}>
          <h2>Diagnosis Assistant</h2>
          <p>Ask health questions & get AI-powered preliminary insights.</p>
        </div>
        <div className={styles.DiagnosisChatHistory}>
          {history.map((msg, idx) => {
            // Show typing effect only for *latest* assistant message
            if (msg.role === 'assistant' && idx === history.length - 1 && isTypingEffect) {
              return (
                <div key={idx} className={styles.DiagnosisChatMsgAssistant}>
                  <div className={styles.DiagnosisChatMsgContent}>
                    {typed}
                    {typed.length < (msg.content?.length ?? 0) && (
                      <span className={styles.DiagnosisChatCursor}>|</span>
                    )}
                  </div>
                </div>
              );
            }
            // Show message as-is for all other cases
            return (
              <div
                key={idx}
                className={
                  msg.role === 'user'
                    ? styles.DiagnosisChatMsgUser
                    : styles.DiagnosisChatMsgAssistant
                }>
                <div className={styles.DiagnosisChatMsgContent}>{msg.content ?? ''}</div>
              </div>
            );
          })}
          <div ref={chatEndRef} />
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.DiagnosisChatInputWrapper}
          autoComplete="off">
          <textarea
            rows={2}
            placeholder="Eg. I have a cough, sore throat, and shortness of breath..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`${styles.DiagnosisChatInput} ${isFocused ? styles.isFocused : ''}`}
          />
          <StyledButton
            type="submit"
            className={styles.DiagnosisChatSendBtn}
            title={loading ? 'Analyzing...' : 'Send'}
            disabled={loading}
          />
        </form>
      </div>
    </>
  );
};

export default DiagnosisChat;
