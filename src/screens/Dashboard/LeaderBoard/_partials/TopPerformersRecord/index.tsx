import React, { useEffect, useMemo } from 'react';

import { levelColors } from './TopPerformersRecord.data';

import StarIcon from '../../../../../assets/svg_component/StarIcon';

import styles from './TopPerformersRecord.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { getAllUsers } from '../../../../../redux/slices/auth/features';
import { ERROR_OCCURED_MESSAGE } from '../../../../../utils/constant';
import useToast from '../../../../../utils/helpers/general/useToast';
import { rolePreset } from '../../../Home/_partials/SelectRoleForm/SelectRoleForm.data';
import { SuspenseLoader } from '../../../../../components';

const TopPerformersRecord = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { users, isGettingAllUsers } = useAppSelector((state) => state.auth);

  const handleGetAllUsers = async (dispatch: ReturnType<typeof useAppDispatch>) => {
    const actionResult = await dispatch(getAllUsers());
    if (getAllUsers.fulfilled.match(actionResult)) {
      const { status } = actionResult.payload;
      if (status && status === 200) {
        // toast.success(SIGNIN_MESSAGE);
        // navigate('/dashboard');
      }
    } else if (getAllUsers.rejected.match(actionResult)) {
      const errorMessage = actionResult.error?.message || ERROR_OCCURED_MESSAGE;
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    handleGetAllUsers(dispatch);
  }, []);

  type RecordKey = 'name' | 'email' | 'role' | 'level' | 'points' | 'rewards';

  const headers: RecordKey[] = ['name', 'email', 'role', 'level', 'points', 'rewards'];

  const records = useMemo(
    () =>
      users.map((user) => ({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: rolePreset[user?.role as string],
        level: user?.level || '*****',
        points: '250',
        rewards: `₦25000`
      })),
    [users]
  );

  return (
    <div className={styles.topPerformersRecordWrapper}>
      {isGettingAllUsers ? (
        <SuspenseLoader />
      ) : (
        <table
          className={styles.topPerformersRecordWrapper__table}
          style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead className={styles.topPerformersRecordWrapper__tableHead}>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className={styles.topPerformersRecordWrapper__tableHeadItem}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records?.map((record, rowIndex) => (
              <tr key={rowIndex} className={styles.topPerformersRecordWrapper__bodyRow}>
                {headers.map((key, colIndex) => {
                  if (key === 'level') {
                    const level = record[key] as string;
                    const color = levelColors[level];
                    return (
                      <td
                        key={colIndex}
                        className={styles.topPerformersRecordWrapper__tableBodyItem}>
                        <div className={styles.topPerformersRecordWrapper__levelWrapper}>
                          <span>{level}</span>
                          <StarIcon stopColor={color} />
                        </div>
                      </td>
                    );
                  }
                  return (
                    <td key={colIndex} className={styles.topPerformersRecordWrapper__tableBodyItem}>
                      {/* {record[key.toLowerCase()]} Match the headers to the record keys */}
                      {record[key]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopPerformersRecord;
