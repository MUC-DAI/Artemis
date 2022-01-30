import { HttpResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { IResultService, ResultsWithPointsArrayResponseType } from 'app/exercises/shared/result/result.service';
import { Result } from 'app/entities/result.model';
import { Exercise } from 'app/entities/exercise.model';

export class MockResultService implements IResultService {
    create = (result: Result) => of();
    delete = (participationId: number, resultId: number) => EMPTY;
    find = (id: number) => EMPTY;
    getFeedbackDetailsForResult = (participationId: number, resultId: number) => EMPTY;
    getResultsForExercise = (courseId: number, exerciseId: number, req?: any) => EMPTY;
    getResultsForExerciseWithPointsPerGradingCriterion = (exerciseId: number, req: any) => EMPTY;
    getResultsWithPointsPerGradingCriterion = (exercise: Exercise): Observable<ResultsWithPointsArrayResponseType> => EMPTY;
    update = (result: Result) => of();
    getResults = (exercise: Exercise) => of();
    getLatestResultWithFeedbacks = (particpationId: number): Observable<HttpResponse<Result>> => of();
    triggerDownloadCSV = (rows: string[], csvFileName: string) => EMPTY;
}
