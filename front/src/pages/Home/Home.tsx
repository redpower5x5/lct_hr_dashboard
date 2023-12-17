import React, { type FC, useMemo, useState } from 'react';

import { useTheme } from 'styled-components';

import { Flex, Heading, Input, Spacer } from '@uiKit';

import { FlexDirection } from '@uiKit/Flex/types';
import { HeadingSize } from '@uiKit/Heading/types';
import { Select } from '@uiKit/Select';

import { InputDate } from '@component/InputDate';
import { UserCard } from '@component/UserCard';
import { useAPI } from '@hooks/useAPI';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { PageLayout } from '@layouts/PageLayout';
import { getDepartments, getStatistics } from '@lib/api';
import { type GetDepartmentsRequest, type GetDepartmentsResponse } from '@lib/api/rest/info/departments/types';
import { type GetStatisticsRequest, type GetStatisticsResponse } from '@lib/api/rest/info/statistics/types';
import { Styled } from '@pages/Home/styled';
import { ROUTES } from '@router/routes/constants';

export const Home: FC = () => {
  const theme = useTheme();
  const isTablet = useBreakpoint(theme.breakpoints.tablet);

  const [level, setLevel] = useState<{ value: string, label: string } | undefined>(undefined);
  const [department, setDepartment] = useState<{ value: string, label: string } | undefined>(undefined);
  const [value, setValue] = useState('');

  const { data } = useAPI<GetDepartmentsRequest, GetDepartmentsResponse>({ apiService: getDepartments as any }, { runOnMount: true });
  const { data: statisticsData, isLoading: isLoadingStatistics } = useAPI<GetStatisticsRequest, GetStatisticsResponse>({ apiService: getStatistics as any }, { runOnMount: true });

  const departments = useMemo(() => data?.departments.map(({ id, name }) => ({ label: name, value: id })), [data?.departments]);
  const filteredStatistics = useMemo(() => statisticsData?.statistics.filter(({ employee_name: name }) => value ? name.search(value) !== -1 : true).filter(({ employee_department: employeeDepartment }) => department?.label ? employeeDepartment === department?.label : true).filter(({ employee_quit_probability: probability }) => level?.value === 'low' ? probability < 0.6 : level?.value === 'mid' ? probability >= 0.6 && probability < 0.8 : level?.value === 'high' ? probability >= 0.8 : probability >= 0), [statisticsData?.statistics, level?.value, value, department?.label]);

  return (
    <PageLayout>
      <Spacer space={theme.spacings.x64} />
      <Flex direction={FlexDirection.COLUMN} fullWidth fullHeight>
        <Heading size={HeadingSize.MD}>Введите запрос</Heading>
        <Spacer space={theme.spacings.x48} />
        <Flex direction={FlexDirection.COLUMN} gap={theme.spacings.x20} fullWidth>
          <Input value={value} onChange={(e) => { setValue(e.currentTarget.value); }} fullWidth type='text' placeholder='Поиск по имени' />
          <Flex direction={isTablet ? FlexDirection.COLUMN : FlexDirection.ROW} gap={theme.spacings.x20}>
            <Select value={level} isClearable onChange={setLevel as any} fullWidth placeholder='Уровень' options={[{ label: 'Низкий', value: 'low' }, { label: 'Средний', value: 'mid' }, { label: 'Высокий', value: 'high' }]} />
            {departments && <Select isClearable value={department} onChange={setDepartment as any} fullWidth placeholder='Отдел' options={departments} />}
            <InputDate fullWidth onDaySelect={(date) => { console.log(date); }} placeholder='Временной интервал' />
          </Flex>
        </Flex>
        <Spacer space={theme.spacings.x48} />
        {isLoadingStatistics ? <></> : (
          <Styled.UserList>
            {filteredStatistics?.map(({ employee_id: id, employee_department: position, employee_quit_probability: probability, employee_name: name }) => (
              <Styled.UserLink key={id} to={ROUTES.user.path.replace(':id', String(id))}>
                <UserCard key={id} probability={Math.trunc(probability * 100)} position={position} name={name} avatar='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
              </Styled.UserLink>
            ))}
          </Styled.UserList>
        )}
      </Flex>
      <Spacer space={theme.spacings.x128} />
    </PageLayout>
  );
};
