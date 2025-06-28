import React, { useEffect, useState } from 'react';
import SelectSearchComp, { MultiValue, SingleValue } from 'react-select';
import { IDropdownInput, Option } from './DropdownInput.types';

import styles from './DropdownInput.module.scss';

const getValue = (options: Option[], checkValue: string | string[], isMulti: boolean) => {
  if (!options || !checkValue) {
    return null;
  }
  const obj = isMulti
    ? options?.filter((option) => Array.isArray(checkValue) && checkValue.includes(option.value))
    : options?.find((option) => checkValue === option.value); // find instead of filter for single select
  return obj;
};

const DropdownInput = ({
  placeholder,
  label,
  value,
  onChange,
  name,
  error,
  options,
  required,
  disabled,
  loading,
  noOrder,
  isMulti = false
}: IDropdownInput) => {
  const [dropdownOptions, setDropdownOptions] = useState<Option[]>([]);

  const handleChange = (newValue: MultiValue<Option> | SingleValue<Option> | null) => {
    const selectedOptions = isMulti
      ? (newValue as MultiValue<Option>)?.map((option) => option.value) || []
      : (newValue as SingleValue<Option>)?.value || '';

    onChange({
      target: {
        value: selectedOptions,
        name,
        ...(Array.isArray(newValue) && newValue[0]?.id ? { id: newValue[0].id } : {})
      }
    });
  };

  const valueResult = getValue(dropdownOptions, value, isMulti);

  //   Combine selected and unselected options for the dropdown
  const combinedOptions = options?.map((option: Option) => ({
    ...option,
    isChecked: Array.isArray(valueResult)
      ? valueResult.some((item) => item.value === option.value) // Use `some` to compare the value for arrays
      : valueResult?.value === option.value // Direct comparison for single objects
  }));

  useEffect(() => {
    if (Array.isArray(options) && options.length > 0) {
      const sortedOptions: Option[] = noOrder
        ? options
        : [...options].sort((a, b) => {
            if (a.label.toLowerCase() === 'others') return 1;
            if (b.label.toLowerCase() === 'others') return -1;
            return a.label.localeCompare(b.label);
          });

      setDropdownOptions(sortedOptions);
    }
  }, [options, noOrder]);

  return (
    <div className={styles.wrapper}>
      {label && (
        <div className={styles.wrapper__label} style={{ ...(disabled && { zIndex: 10 }) }}>
          {label}
        </div>
      )}
      <SelectSearchComp
        placeholder={placeholder}
        onChange={handleChange}
        className="basic-single select-drop-style"
        id="select-search-comp"
        isLoading={loading}
        isMulti={isMulti}
        styles={{
          control: (base) => ({
            ...base,
            border: ` ${error ? '.5px solid #ff5959' : '1px solid #ababab'}`,
            boxShadow: 'none',
            height: '60px',
            // eslint-disable-next-line no-nested-ternary
            padding: '8px',
            color: 'white',
            width: '100%',
            overflow: `${isMulti ? 'auto' : 'hidden'}`,
            background: disabled ? 'rgb(245, 245, 245)' : 'inherit',
            borderRadius: '4px',
            fontSize: '16px',
            '&:hover': {
              boxShadow: 'none'
            },
            '&:focus': {
              boxShadow: 'none'
            }
          }),
          indicatorSeparator: (base) => ({
            ...base,
            display: 'none'
          }),
          clearIndicator: (base) => ({
            ...base,
            display: 'none'
          }),
          multiValue: (base) => ({
            ...base,
            backgroundColor: 'white',
            borderRadius: '4px',
            border: '0.5px solid  #B0B0B0',
            color: '#191919',
            lineHeight: '20px',
            letterSpacing: '-2%',
            fontSize: '14px',
            fontWeight: '400'
          }),
          multiValueRemove: (base) => ({
            ...base,
            color: '#959595',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
              cursor: 'pointer',
              color: '#959595'
            }
          }),
          singleValue: (base) => ({
            ...base,
            color: 'white',
            lineHeight: '24.59px',
            letterSpacing: '-2%',
            fontSize: '18px',
            fontWeight: '400'
          }),
          option: (base, state) => ({
            ...base,
            color: '#191919',
            backgroundColor: state?.isSelected ? 'rgba(89, 65, 169, 0.10)' : '#fff',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '400',
            zIndex: 5000,
            '&:hover': {
              backgroundColor: state?.isSelected ? 'rgba(89, 65, 169, 0.10)' : '#F5F5F5',
              cursor: 'pointer',
              zIndex: 5000
            }
          }),
          menu: (base) => ({
            ...base,
            zIndex: 7000
          }),
          placeholder: (base) => ({
            ...base,
            fontSize: '16px',
            color: '#B0B0B0',
            lineHeight: '24px',
            fontWeight: '400',
            letterSpacing: '-2%'
          }),
          dropdownIndicator: (base) => ({
            ...base,
            opacity: disabled ? '0' : '1',
            color: 'white'
          })
        }}
        value={valueResult}
        options={combinedOptions}
        required={required}
        isDisabled={disabled}
      />

      {error && <div className={styles?.wrapper__error}>{error}</div>}
    </div>
  );
};

export default DropdownInput;
