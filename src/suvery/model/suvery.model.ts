export interface SurveyField { //treba napraviti nasljedjivanje
  fieldId: number;
  fieldValue: string;
  fieldType: string;
  required: number;
  belongsTo: number;
  parentId?: any;
  sortIndex: number;
  fieldKind: string;
  checkBoxSelected?: boolean;
  parent?: any;
  belongsToNavigation?: any;
  inverseParent: SurveyField[];
}

export interface SurveyContent {
  contentId: number;
  belongsTo: number;
  surveyName: string;
  surveyDescription: string;
  language: string;
  surveyFields: SurveyField[];
}

export interface Payload {
  surveyId: number;
  dateCreated: Date;
  isActive: number;
  surveyContent: SurveyContent[];
}

export interface SuveryResponse {
  success: boolean;
  payload: Payload;
  errorCode: number;
  errorMessage?: any;
}
