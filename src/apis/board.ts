import http from '@/utils/http';
import { FunctionScheme } from './apis';

export const getOccupationBoardStatistics: FunctionScheme = () => http.get('/dashboard/position');

export const getResumeBoardStatistics: FunctionScheme = () => http.get('/dashboard/resume');
