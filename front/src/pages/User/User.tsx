import React, { type FC, useCallback, useEffect, useMemo } from 'react';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Button, Flex, Heading, Spacer } from '@uiKit';

import { ButtonVariant } from '@uiKit/Button/types';
import { FlexAlignItems, FlexDirection, FlexJustifyContent } from '@uiKit/Flex/types';
import { HeadingSize } from '@uiKit/Heading/types';

import { Card } from '@component/Card';
import { useAPI } from '@hooks/useAPI';
import { useBreakpoint } from '@hooks/useBreakpoint';
import { PageLayout } from '@layouts/PageLayout';
import { getEmployeeMetrics, getExcelFile } from '@lib/api';
import { getEmployeeInfo } from '@lib/api/rest/info/employee';
import { type GetEmployeeInfoRequest, type GetEmployeeInfoResponse } from '@lib/api/rest/info/employee/types';
import { type GetEmployeeMetricsRequest, type GetEmployeeMetricsResponse } from '@lib/api/rest/metrics/employee/types';
import { type GetFileRequest, type GetFileResponse } from '@lib/api/rest/metrics/file/types';
import { hexToRgba } from '@lib/hexToRgba';
import { Styled } from '@pages/User/styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  PointElement,
  LineElement,
  Title
);

export const User: FC = () => {
  const theme = useTheme();
  const isTablet = useBreakpoint(theme.breakpoints.tablet);
  const { id } = useParams();

  const { data: metrics, runRequest } = useAPI<GetEmployeeMetricsRequest, GetEmployeeMetricsResponse>({ apiService: getEmployeeMetrics as any });
  const { data: user, runRequest: getEmployeeInfoRequest } = useAPI<GetEmployeeInfoRequest, GetEmployeeInfoResponse>({ apiService: getEmployeeInfo as any });
  const { data: file, runRequest: getFile } = useAPI<GetFileRequest, GetFileResponse>({ apiService: getExcelFile as any });

  useEffect(() => {
    if (id) {
      runRequest({ id });
      getEmployeeInfoRequest({ id });
    }
  }, [id]);

  const convertLabelToNumber = (label: string) => {
    if (label === 'LOW') return 1;
    if (label === 'MEDIUM') return 2;
    if (label === 'HIGH') return 3;
    return 0;
  };

  const convertLabelToNumberEmotions = (label: string) => {
    if (label === 'POSITIVE') return -1;
    if (label === 'NEUTRAL') return 1;
    if (label === 'NEGATIVE') return 2;
    return 0;
  };

  useEffect(() => {
    if (file) {
      const link = document.createElement('a');
      const url = URL.createObjectURL(file);
      link.href = url;
      link.setAttribute('download', 'data.xlsx');

      link.style.display = 'none';
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }
  }, [file]);

  const periods = useMemo(() => metrics?.periods.map(({ end_date: endDate, start_date: startDate }) => new Intl.DateTimeFormat('ru').formatRange(Date.parse(startDate), Date.parse(endDate))), [metrics?.periods]);
  const answeredEmails = useMemo(() => metrics?.metrics.map(({ number_of_answered_emails: value }) => value), [metrics?.metrics]);
  const sentEmails = useMemo(() => metrics?.metrics.map(({ number_of_sent_emails: value }) => value), [metrics?.metrics]);
  const receivedEmails = useMemo(() => metrics?.metrics.map(({ number_of_received_emails: value }) => value), [metrics?.metrics]);
  const salary = useMemo(() => metrics?.metrics.map(({ salary: value }) => value), [metrics?.metrics]);
  const meanNumberOfrecipientsInOneEmailForUser = useMemo(() => metrics?.metrics.map(({ mean_number_of_recipients_in_one_email_for_user: value }) => value), [metrics?.metrics]);
  const meanOfEmailsReadAfterXMinutes = useMemo(() => metrics?.metrics.map(({ number_of_emails_read_after_x_minutes: value }) => value), [metrics?.metrics]);
  const meanNumberOfDaysBetweenReceivingEmailsAndRead = useMemo(() => metrics?.metrics.map(({ mean_number_of_days_between_receiving_emails_and_read: value }) => value), [metrics?.metrics]);
  const receivedAndSentEmailsProportionForUser = useMemo(() => metrics?.metrics.map(({ received_and_sent_emails_proportion_for_user: value }) => value), [metrics?.metrics]);
  const meanNumberOfNotAnsweredQuastionsInEmail = useMemo(() => metrics?.metrics.map(({ mean_number_of_not_answered_questions_in_email: value }) => value), [metrics?.metrics]);
  const meanLengthOfUserEmails = useMemo(() => metrics?.metrics.map(({ mean_length_of_user_emails: value }) => value), [metrics?.metrics]);
  const meanAnsweringTimeForUser = useMemo(() => metrics?.metrics.map(({ mean_answering_time_for_user: value }) => value), [metrics?.metrics]);
  const numberOfPassedCorporativeTests = useMemo(() => metrics?.metrics.map(({ number_of_passed_corporative_tests_or_courses_for_user: value }) => value), [metrics?.metrics]);
  const numberOfUnique = useMemo(() => metrics?.metrics.map(({ number_of_unique_recipients_of_emails_for_user: value }) => value), [metrics?.metrics]);
  const numberOfDepartments = useMemo(() => metrics?.metrics.map(({ number_of_unique_departments_in_emails_for_user: value }) => value), [metrics?.metrics]);
  const highPriority = useMemo(() => metrics?.metrics.map(({ high_priority_emails_reply_delay: value }) => value), [metrics?.metrics]);
  const mediumPriority = useMemo(() => metrics?.metrics.map(({ medium_priority_emails_reply_delay: value }) => value), [metrics?.metrics]);
  const lowPriority = useMemo(() => metrics?.metrics.map(({ low_priority_emails_reply_delay: value }) => value), [metrics?.metrics]);
  const toxic = useMemo(() => metrics?.metrics.map(({ toxcity_in_sent_emails_for_user: value }) => value), [metrics?.metrics]);
  const toxicReceived = useMemo(() => metrics?.metrics.map(({ toxcity_in_received_emails_for_user: value }) => value), [metrics?.metrics]);
  const emotions = useMemo(() => metrics?.metrics.map(({ emotions_in_sent_emails_for_user: value }) => value), [metrics?.metrics]);
  const emotionsReceived = useMemo(() => metrics?.metrics.map(({ emotions_in_received_emails_for_user: value }) => value), [metrics?.metrics]);

  const getChartData = useCallback((type: 'bar' | 'line', { label, labels, data }: { label?: string, labels?: string[], data?: any[] }) => {
    if (type === 'bar') {
      return ({
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor: hexToRgba('#0085FF', 0.5) as string
          }
        ]
      });
    }

    return ({
      labels,
      datasets: [
        {
          label,
          data,
          borderColor: hexToRgba('#0085FF', 0.85) as string,
          backgroundColor: hexToRgba('#0085FF', 0.5) as string,
          fill: false,
          tension: 0.1
        }
      ]
    });
  }, []);

  const getOptions = useCallback((title: string) => ({
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title
      }
    }
  }), []);

  const chartCallback = (value: string | number) => {
    if (value === 1) return 'LOW';
    if (value === 2) return 'MEDIUM';
    if (value === 3) return 'HIGH';
    return '';
  };

  const chartCallbackEmotions = (value: string | number) => {
    if (value === -1) return 'POSITIVE';
    if (value === 1) return 'NEUTRAL';
    if (value === 2) return 'NEGATIVE';
    return '';
  };

  return (
    <PageLayout>
      <Spacer space={theme.spacings.x48} />
      <Flex alignItems={FlexAlignItems.START} gap={theme.spacings.x20} direction={isTablet ? FlexDirection.COLUMN : FlexDirection.ROW} justifyContent={FlexJustifyContent.SPACE_BETWEEN}>
        <Heading size={HeadingSize.SL}>{user?.name}</Heading>
        <Flex direction={isTablet ? FlexDirection.COLUMN : FlexDirection.ROW} gap={theme.spacings.x20}>
          <Styled.PercentBlock>
            <Styled.PercentBlockText fontWeight={500} color={theme.colors.additional.brand_blue}>{(user?.quit_probability ?? 0) * 100} % вероятность ухода</Styled.PercentBlockText>
          </Styled.PercentBlock>
          <Button onClick={() => { getFile({ id: String(id) }); }} variant={ButtonVariant.SECONDARY}>Выгрузить отчет</Button>
        </Flex>
      </Flex>
      <Spacer space={theme.spacings.x48} />
      <Flex direction={FlexDirection.COLUMN} fullWidth fullHeight>
        <Styled.StatisticsList>
          <Card>
            <Line options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Уровень токсичности в отправленных письмах'
                }
              },
              scales: {
                y: {
                  ticks: {
                    callback: chartCallback,
                    stepSize: 1
                  }
                }
              }
            }} data={getChartData('line', { labels: periods, data: toxic?.map((item) => convertLabelToNumber(item)) })} />
          </Card>
          <Card>
            <Line options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Уровень токсичности  в полученных письмах'
                }
              },
              scales: {
                y: {
                  ticks: {
                    callback: chartCallback,
                    stepSize: 1
                  }
                }
              }
            }} data={getChartData('line', { labels: periods, data: toxicReceived?.map((item) => convertLabelToNumber(item)) })} />
          </Card>
          <Card>
            <Line options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Уровень эмоций в отправленных письмах'
                }
              },
              scales: {
                y: {
                  ticks: {
                    callback: chartCallbackEmotions,
                    stepSize: 1
                  }
                }
              }
            }} data={getChartData('line', { labels: periods, data: emotions?.map((item) => convertLabelToNumberEmotions(item)) })} />
          </Card>
          <Card>
            <Line options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Уровень эмоций в полученных письмах'
                }
              },
              scales: {
                y: {
                  ticks: {
                    callback: chartCallbackEmotions,
                    stepSize: 1
                  }
                }
              }
            }} data={getChartData('line', { labels: periods, data: emotionsReceived?.map((item) => convertLabelToNumberEmotions(item)) })} />
          </Card>
          <Card>
            <Line options={getOptions('Колличество ответов')} data={getChartData('line', { labels: periods, data: answeredEmails })} />
          </Card>
          <Card>
            <Line options={getOptions('Количество отправленных писем')} data={getChartData('line', { labels: periods, data: sentEmails })} />
          </Card>
          <Card>
            <Line options={getOptions('Количество полученных писем')} data={getChartData('line', { labels: periods, data: receivedEmails })} />
          </Card>
          <Card>
            <Bar options={getOptions('Зарплата')} data={getChartData('bar', { labels: periods, data: salary })} />
          </Card>
          <Card>
            <Line options={getOptions('Среднее количество получателей в письме')} data={getChartData('line', { labels: periods, data: meanNumberOfrecipientsInOneEmailForUser })} />
          </Card>
          <Card>
            <Line options={getOptions('Количество писем, прочитанных через 60 минут после получения')} data={getChartData('line', { labels: periods, data: meanOfEmailsReadAfterXMinutes })} />
          </Card>
          <Card>
            <Bar options={getOptions('Среднее количество дней между получением и прочтением писем')} data={getChartData('bar', { labels: periods, data: meanNumberOfDaysBetweenReceivingEmailsAndRead })} />
          </Card>
          <Card>
            <Bar options={getOptions('Соотношение полученных и отправленных писем')} data={getChartData('bar', { labels: periods, data: receivedAndSentEmailsProportionForUser })} />
          </Card>
          <Card>
            <Line options={getOptions('Среднее количество вопросов, которое игнорирует сотрудник, отвечая на письма')} data={getChartData('line', { labels: periods, data: meanNumberOfNotAnsweredQuastionsInEmail })} />
          </Card>
          <Card>
            <Line options={getOptions('Среднее количество символов в отправляемых письмах')} data={getChartData('line', { labels: periods, data: meanLengthOfUserEmails })} />
          </Card>
          <Card>
            <Bar options={getOptions('Среднее время ответа, в минутах')} data={getChartData('bar', { labels: periods, data: meanAnsweringTimeForUser })} />
          </Card>
          <Card>
            <Line options={getOptions('Количество пройденных корпоративных тестирований или опросов')} data={getChartData('line', { labels: periods, data: numberOfPassedCorporativeTests })} />
          </Card>
          <Card>
            <Line options={getOptions('Среднее количество людей, с которыми взаимодействует сотрудник')} data={getChartData('line', { labels: periods, data: numberOfUnique })} />
          </Card>
          <Card>
            <Line options={getOptions('Среднее количество департаментов, с которыми взаимодействует сотрудник')} data={getChartData('line', { labels: periods, data: numberOfDepartments })} />
          </Card>
          <Card>
            <Line options={getOptions('Среднее время ответа высокоприоритетные письма, в минута')} data={getChartData('line', { labels: periods, data: highPriority })} />
          </Card>
          <Card>
            <Line options={getOptions('Среднее время ответа среднеприоритетные письма, в минутах')} data={getChartData('line', { labels: periods, data: mediumPriority })} />
          </Card>
          <Card>
            <Line options={getOptions('Среднее время ответа низкоприоритетные письма, в минутах')} data={getChartData('line', { labels: periods, data: lowPriority })} />
          </Card>
        </Styled.StatisticsList>
      </Flex>
      <Spacer space={theme.spacings.x128} />
    </PageLayout>
  );
};
