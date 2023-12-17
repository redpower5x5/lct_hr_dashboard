import React, { type ChangeEventHandler, type FC, useEffect, useRef, useState } from 'react';

import { format, isAfter, isValid, parse } from 'date-fns';
import { ru } from 'date-fns/locale';
import FocusTrap from 'focus-trap-react';
import { type DateRange, DayPicker, type SelectRangeEventHandler } from 'react-day-picker';
import { usePopper } from 'react-popper';

import { Input } from '@uiKit';

import { type InputProps } from '@uiKit/Input/types';

import 'react-day-picker/dist/style.css';

import { Styled } from '@component/InputDate/styled';
import { type InputDateProps } from '@component/InputDate/types';

export const InputDate: FC<InputProps & InputDateProps> = ({ onDaySelect, ...props }) => {
  const [selected, setSelected] = useState<DateRange>();
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const popper = usePopper(inputRef.current, popperElement, {
    placement: 'bottom-start'
  });

  useEffect(() => {
    if (selected) onDaySelect(selected);
  }, [selected]);

  const closePopper = () => {
    setIsPopperOpen(false);
    inputRef?.current?.focus();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'dd.MM.y', new Date());
    if (!isValid(date)) {
      setSelected({ from: undefined, to: undefined });
      return;
    }
    if (selected?.to && isAfter(date, selected.to)) {
      setSelected({ from: selected.to, to: date });
    } else {
      setSelected({ from: date, to: selected?.to });
    }
  };

  const onInputClick = () => {
    setIsPopperOpen(true);
  };

  const onDaySelected: SelectRangeEventHandler = (range) => {
    setSelected(range);
    if (range?.from) {
      setFromValue(format(range.from, 'dd.MM.y'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'dd.MM.y'));
    } else {
      setToValue('');
    }
  };

  return (
    <Styled.Container>
      <Input {...props} onChange={handleChange} value={fromValue || toValue ? `${fromValue}${toValue ? '- ' + toValue : ''}` : undefined} onClick={onInputClick} ref={inputRef} type='text' />
      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            onDeactivate: closePopper,
            fallbackFocus: inputRef.current ?? undefined
          }}
        >
          <div
            tabIndex={-1}
            style={popper.styles.popper}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
            aria-label="DayPicker calendar"
          >
            <DayPicker
              initialFocus={isPopperOpen}
              mode="range"
              selected={selected}
              onSelect={onDaySelected}
              locale={ru}
            />
          </div>
        </FocusTrap>
      )}
    </Styled.Container>
  );
};
